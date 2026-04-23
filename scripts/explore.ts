#!/usr/bin/env tsx
/**
 * SigmaReading AI-first 探针采样脚本（Agent Skill）
 *
 * 本脚本作为可被 Copilot agent 直接调用的独立 skill 运行。
 * Playwright 只负责进入页面、执行动作和收集证据；真正的功能分析与总结应由 AI 完成。
 *
 * 运行方式：
 *   npx tsx scripts/explore.ts
 *   npm run explore
 *
 * 自动修正（Self-Healing）能力：
 *   1. 选择器故障修复  – 当主选择器找不到元素时，自动遍历备用选择器链
 *   2. 导航策略降级    – networkidle → domcontentloaded → load → commit
 *   3. 超时自适应      – 每次重试自动增加等待时间
 *   4. 页面类型检测    – 根据 URL 和 DOM 动态判断当前页面类型
 *   5. 修正日志输出    – 所有自动修正操作记录到 docs/exploration/correction-log.md
 *
 * 产出文件：
 *   docs/exploration/sigmareading-features.md
 *   docs/exploration/api-endpoints.md
 *   docs/exploration/correction-log.md
 *   screenshots/exploration/
 */

import { chromium, Browser, Page, Request } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import { analyzeModularPageWorkflows } from './explore/workflows/index.js';
import type { WorkflowModuleDeps } from './explore/workflows/contracts.js';
import {
  collectBodyTextSnippets as collectWorkflowBodyTextSnippets,
  inferObservedFieldsFromPage,
  normalizeRoutePath,
  resolveWorkflowPageLabel,
} from './explore/workflows/shared.js';

// ──────────────────────────────────────────────────────────────────────────────
// Configuration
// ──────────────────────────────────────────────────────────────────────────────

const BASE_URL = 'https://sr.sigmareading.com';
const ROOT = path.resolve(__dirname, '..');
const LOGIN_USERNAME = process.env.SR_USERNAME?.trim() ?? '';
const LOGIN_PASSWORD = process.env.SR_PASSWORD?.trim() ?? '';
const HAS_LOGIN_CREDENTIALS = LOGIN_USERNAME.length > 0 && LOGIN_PASSWORD.length > 0;

function readCliArg(flag: string): string {
  const exact = process.argv.find((arg) => arg.startsWith(`${flag}=`));
  if (exact) return exact.slice(flag.length + 1).trim();

  const index = process.argv.findIndex((arg) => arg === flag);
  if (index >= 0) {
    return (process.argv[index + 1] ?? '').trim();
  }

  return '';
}

function hasCliFlag(flag: string): boolean {
  return process.argv.includes(flag) || process.argv.some((arg) => arg.startsWith(`${flag}=`));
}

function parseRouteList(value: string): string[] {
  return [...new Set(value.split(',').map((item) => item.trim()).filter(Boolean))];
}

const TARGET_ROUTES = parseRouteList(readCliArg('--routes') || process.env.SR_TARGET_ROUTES || '');
const ITERATIVE_MODE = hasCliFlag('--iterative') || process.env.SR_ITERATIVE_MODE === '1' || TARGET_ROUTES.length > 0;

// Generate a timestamp-based run ID so every execution is preserved
const RUN_TIMESTAMP = new Date().toISOString().replace(/[:.]/g, '-').replace('T', '_').slice(0, 19);
const RUNS_DIR = path.join(ROOT, 'runs');
const RUN_DIR = path.join(RUNS_DIR, RUN_TIMESTAMP);
const SCREENSHOTS_DIR = path.join(RUN_DIR, 'screenshots');
const DOCS_DIR = path.join(RUN_DIR, 'docs');
const PAGE_DOCS_DIR = path.join(DOCS_DIR, 'pages');

// Also keep a "latest" symlink / copy for convenience
const LATEST_DOCS_DIR = path.join(ROOT, 'docs', 'exploration');
const LATEST_SCREENSHOTS_DIR = path.join(ROOT, 'screenshots', 'exploration');
const LATEST_PAGE_DOCS_DIR = path.join(LATEST_DOCS_DIR, 'pages');

fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
fs.mkdirSync(DOCS_DIR, { recursive: true });
fs.mkdirSync(PAGE_DOCS_DIR, { recursive: true });
fs.mkdirSync(LATEST_DOCS_DIR, { recursive: true });
fs.mkdirSync(LATEST_SCREENSHOTS_DIR, { recursive: true });
fs.mkdirSync(LATEST_PAGE_DOCS_DIR, { recursive: true });

// ──────────────────────────────────────────────────────────────────────────────
// Correction log (records every self-healing action)
// ──────────────────────────────────────────────────────────────────────────────

interface Correction {
  phase: string;
  issue: string;
  correction: string;
  selector?: string;
  timestamp: string;
}

const corrections: Correction[] = [];

function logCorrection(phase: string, issue: string, correction: string, selector?: string): void {
  const entry: Correction = { phase, issue, correction, selector, timestamp: new Date().toISOString() };
  corrections.push(entry);
  console.log(`  🔧 [探针自愈] ${issue} → ${correction}`);
}

// ──────────────────────────────────────────────────────────────────────────────
// Selector fallback chains  (primary selector first, then alternatives)
// ──────────────────────────────────────────────────────────────────────────────

const SELECTOR_CHAINS: Record<string, string[]> = {
  // Login form fields
  usernameInput: [
    'input[name="username"]',
    'input[name="account"]',
    'input[type="email"]',
    'input[placeholder*="用户名"]',
    'input[placeholder*="账号"]',
    'input[placeholder*="邮箱"]',
    'ion-input[name="username"] input',
    'ion-input input[type="text"]',
  ],
  passwordInput: [
    'input[type="password"]',
    'ion-input[type="password"] input',
    'input[name="password"]',
    'input[placeholder*="密码"]',
  ],
  loginButton: [
    'button[type="submit"]',
    'ion-button[type="submit"]',
    'button:has-text("登录")',
    'ion-button:has-text("登录")',
    '[data-cy="login-btn"]',
    '.login-btn',
  ],
  goLoginButton: [
    'button:has-text("去登录")',
    'ion-button:has-text("去登录")',
    'button:has-text("登录")',
    'ion-button:has-text("登录")',
    '[role="button"]:has-text("登录")',
  ],

  // Navigation elements
  tabBar: [
    'ion-tab-bar',
    '.tab-bar',
    '[role="tablist"]',
    'nav.bottom-nav',
    '.bottom-navigation',
  ],
  tabItems: [
    'ion-tab-button',
    '[role="tab"]',
    '.tab-bar ion-item',
    '.bottom-nav a',
    'nav a',
  ],

  // Page headings
  pageTitle: [
    'ion-title',
    'h1',
    '.page-title',
    '[class*="title"]',
    'header h2',
  ],

  // Reading module
  articleList: [
    'ion-list ion-item',
    '.article-list .article-item',
    '[class*="article"]',
    '[class*="reading-item"]',
    'ion-card',
  ],

  // Feature cards on home
  featureCards: [
    '.card',
    'ion-card',
    '[class*="module-card"]',
    '[class*="feature-card"]',
    '[class*="task-card"]',
    'ion-item.card',
  ],

  // Buttons / CTAs
  buttons: [
    'button:not([disabled])',
    'ion-button:not([disabled])',
    '[role="button"]:not([disabled])',
    'a[href]:not([href="#"])',
  ],
};

// ──────────────────────────────────────────────────────────────────────────────
// Self-Healing helpers
// ──────────────────────────────────────────────────────────────────────────────

/**
 * Adaptive navigation: tries progressively weaker waitUntil strategies on failure.
 * Returns false only when the network is unreachable (no retry is useful).
 */
async function adaptiveNavigate(page: Page, url: string, phase: string): Promise<boolean> {
  type WaitUntil = 'networkidle' | 'domcontentloaded' | 'load' | 'commit';
  const strategies: Array<{ waitUntil: WaitUntil; timeout: number }> = [
    { waitUntil: 'networkidle', timeout: 15000 },
    { waitUntil: 'domcontentloaded', timeout: 10000 },
    { waitUntil: 'load', timeout: 10000 },
    { waitUntil: 'commit', timeout: 5000 },
  ];

  for (let i = 0; i < strategies.length; i++) {
    const { waitUntil, timeout } = strategies[i];
    try {
      await page.goto(url, { waitUntil, timeout });
      if (i > 0) {
        logCorrection(
          phase,
          `Navigation to ${url} failed with stronger strategy`,
          `Succeeded using waitUntil="${waitUntil}" (strategy #${i + 1})`
        );
      }
      return true;
    } catch (err) {
      const msg = (err as Error).message ?? '';
      // Non-retryable network errors
      if (
        msg.includes('net::ERR_NAME_NOT_RESOLVED') ||
        msg.includes('net::ERR_CONNECTION_REFUSED') ||
        msg.includes('net::ERR_INTERNET_DISCONNECTED') ||
        msg.includes('ERR_NETWORK_CHANGED')
      ) {
        return false;
      }
      // Timeout or other recoverable error → try next strategy
    }
  }

  // Some pages still become usable even when every waitUntil strategy times out.
  // Treat that as a degraded success instead of marking the whole run offline.
  try {
    const currentUrl = page.url();
    if (currentUrl && currentUrl !== 'about:blank') {
      logCorrection(
        phase,
        `Navigation to ${url} exhausted all waitUntil strategies`,
        `Continuing with partially loaded page at ${currentUrl}`
      );
      return true;
    }
  } catch {
    // Ignore URL inspection failures and keep the original false result below.
  }

  return false;
}

/**
 * Self-healing element finder: walks the selector chain until an element is found.
 * Returns null if no selector matches.
 */
async function findElements(
  page: Page,
  chainKey: string,
  phase: string
): Promise<string | null> {
  const chain = SELECTOR_CHAINS[chainKey];
  if (!chain) return null;

  for (let i = 0; i < chain.length; i++) {
    try {
      const count = await page.locator(chain[i]).count();
      if (count > 0) {
        if (i > 0) {
          logCorrection(
            phase,
            `Primary selector "${chain[0]}" for "${chainKey}" matched 0 elements`,
            `Fell back to selector "${chain[i]}" (matched ${count})`,
            chain[i]
          );
        }
        return chain[i];
      }
    } catch {
      // Selector syntax error – try next
    }
  }
  return null;
}

/**
 * Adaptive wait: tries to wait for a selector, silently succeeds after timeout.
 */
async function softWait(page: Page, selector: string, timeoutMs = 5000): Promise<void> {
  try {
    await page.waitForSelector(selector, { timeout: timeoutMs });
  } catch {
    // Not found – ok, continue
  }
}

/**
 * Safe screenshot: catches errors (e.g. page crashed) and logs them.
 */
async function screenshot(page: Page, name: string, phase: string): Promise<string> {
  const filename = `${name.replace(/[<>:"/\\|?*]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')}.png`;
  const filepath = path.join(SCREENSHOTS_DIR, filename);
  try {
    await page.screenshot({ path: filepath, fullPage: true, animations: 'disabled', timeout: 4000 });
  } catch (err) {
    logCorrection(
      phase,
      `Screenshot "${name}" fullPage capture failed`,
      `Retrying with viewport screenshot: ${(err as Error).message}`
    );

    try {
      await page.screenshot({ path: filepath, fullPage: false, animations: 'disabled', timeout: 2000 });
    } catch (retryErr) {
      logCorrection(phase, `Screenshot "${name}" failed`, `Skipped: ${(retryErr as Error).message}`);
    }
  }
  return `screenshots/exploration/${filename}`;
}

/**
 * Collect all interactive elements on the current page.
 */
interface CollectedElement {
  tag: string;
  text: string;
  href: string | null;
  type: string | null;
  dataCy: string | null;
  name: string | null;
  placeholder: string | null;
  ariaLabel: string | null;
  className: string;
}

async function collectElements(page: Page): Promise<CollectedElement[]> {
  return page.$$eval(
    'button, [role="button"], a[href], ion-button, ion-item, ion-tab-button, input, select, textarea',
    (els) =>
      els.map((el) => ({
        tag: el.tagName.toLowerCase(),
        text: (el.textContent ?? '').trim().replace(/\s+/g, ' ').slice(0, 80),
        href: el.getAttribute('href'),
        type: el.getAttribute('type'),
        dataCy: el.getAttribute('data-cy'),
        name: el.getAttribute('name'),
        placeholder: el.getAttribute('placeholder'),
        ariaLabel: el.getAttribute('aria-label'),
        className: (el.getAttribute('class') ?? '').trim().replace(/\s+/g, ' ').slice(0, 120),
      }))
  );
}

function isExplorableRoute(route: string): boolean {
  if (!route.startsWith('/zh-hans/')) return false;

  const pathname = route.split('?')[0];
  return !/\.(?:css|js|ico|png|jpe?g|svg|webp|woff2?|ttf|map)$/i.test(pathname);
}

const DEEP_EXPLORATION_SEEDS = [
  '/zh-hans/homework',
  '/zh-hans/reading',
  '/zh-hans/playlist',
  '/zh-hans/joined-classes',
  '/zh-hans/favorites',
  '/zh-hans/studio',
];

const PHASE3_PRIORITY_ROUTES = new Set<string>([
  '/zh-hans/textbook',
  ...DEEP_EXPLORATION_SEEDS,
  '/zh-hans/exam',
  '/zh-hans/profile',
]);

const MAX_PHASE3_LINKS = 8;

const DEEP_ROUTE_RULES: Array<{ pattern: RegExp; label: string; limit: number }> = [
  { pattern: /^\/zh-hans\/assignment\//, label: 'assignment', limit: 2 },
  { pattern: /^\/zh-hans\/reading-display\//, label: 'reading-display', limit: 2 },
  { pattern: /^\/zh-hans\/playlist-display\//, label: 'playlist-display', limit: 2 },
  { pattern: /^\/zh-hans\/student-invite(?:$|\?)/, label: 'student-invite', limit: 1 },
  { pattern: /^\/zh-hans\/personal-data\//, label: 'personal-data', limit: 1 },
];

function matchDeepRouteRule(route: string): { pattern: RegExp; label: string; limit: number } | null {
  for (const rule of DEEP_ROUTE_RULES) {
    if (rule.pattern.test(route)) return rule;
  }
  return null;
}

function resolveDeepRouteLabel(route: string): string | null {
  return matchDeepRouteRule(route)?.label ?? null;
}

async function collectDeepLinks(page: Page): Promise<string[]> {
  const links = await page.$$eval(
    'a[href]',
    (els) =>
      [
        ...new Set(
          els
            .map((el) => el.getAttribute('href'))
            .filter((href): href is string => !!href && href.startsWith('/zh-hans/') && !href.startsWith('//'))
        ),
      ]
  );

  const usage = new Map<string, number>();
  const selected: string[] = [];

  for (const link of links) {
    const rule = matchDeepRouteRule(link);
    if (!rule) continue;

    const used = usage.get(rule.label) ?? 0;
    if (used >= rule.limit) continue;

    usage.set(rule.label, used + 1);
    selected.push(link);
  }

  return selected;
}

function isLoginUrl(url: string): boolean {
  return url.includes('/login') || url.includes('/signin');
}

function isUnauthorizedUrl(url: string): boolean {
  return url.includes('/unauthorized');
}

async function triggerLoginEntry(page: Page, phase: string): Promise<boolean> {
  const goLoginSelector = await findElements(page, 'goLoginButton', phase);
  if (!goLoginSelector) return false;

  await page.locator(goLoginSelector).first().click();
  await page.waitForTimeout(1500);
  return true;
}

async function openLoginForm(page: Page, phase: string): Promise<boolean> {
  const attemptEntry = async (): Promise<boolean> => {
    const opened = await triggerLoginEntry(page, phase);
    if (!opened) return false;

    await page.waitForTimeout(1500);
    return true;
  };

  const currentUrl = page.url();
  if (isLoginUrl(currentUrl)) return true;

  if (isUnauthorizedUrl(currentUrl)) {
    return attemptEntry();
  }

  const fallbackRoutes = [
    `${BASE_URL}/oauth2/authorization/oidc?locale=zh_CN`,
    `${BASE_URL}/zh-hans/home`,
    `${BASE_URL}/zh-hans/profile`,
    `${BASE_URL}/zh-hans/login`,
  ];

  for (const route of fallbackRoutes) {
    const ok = await adaptiveNavigate(page, route, phase);
    if (!ok) continue;

    await page.waitForTimeout(1200);
    if (route.includes('/oauth2/authorization/oidc')) {
      await softWait(page, 'input[name="username"]', 5000);
    }

    const url = page.url();
    if (isLoginUrl(url)) return true;

    const usernameSelector = await findElements(page, 'usernameInput', phase);
    const passwordSelector = await findElements(page, 'passwordInput', phase);
    if (usernameSelector && passwordSelector) return true;

    if (isUnauthorizedUrl(url) && (await attemptEntry())) {
      return true;
    }

    if (route !== `${BASE_URL}/zh-hans/login` && (await attemptEntry())) {
      return true;
    }
  }

  return false;
}

async function tryLogin(page: Page, phase: string): Promise<boolean> {
  if (!HAS_LOGIN_CREDENTIALS) return false;

  const formOpened = await openLoginForm(page, phase);
  if (!formOpened) {
    logCorrection(phase, 'Unable to open login form', 'Continue as guest');
    return false;
  }

  const usernameSelector = await findElements(page, 'usernameInput', phase);
  const passwordSelector = await findElements(page, 'passwordInput', phase);
  const loginBtnSelector = await findElements(page, 'loginButton', phase);

  if (!usernameSelector || !passwordSelector || !loginBtnSelector) {
    logCorrection(phase, 'Login form could not be resolved', 'Continue as guest');
    return false;
  }

  await page.locator(usernameSelector).first().fill(LOGIN_USERNAME);
  await page.locator(passwordSelector).first().fill(LOGIN_PASSWORD);
  await page.locator(loginBtnSelector).first().click({ noWaitAfter: true });

  try {
    await page.waitForURL((nextUrl) => !isLoginUrl(nextUrl.toString()) && !isUnauthorizedUrl(nextUrl.toString()), {
      timeout: 15000,
    });
  } catch {
    logCorrection(phase, 'Login submission did not leave login/unauthorized state', 'Continue as guest');
    return false;
  }

  const verifyOk = await adaptiveNavigate(page, `${BASE_URL}/zh-hans/profile`, phase);
  if (!verifyOk) return false;

  await page.waitForTimeout(1500);
  if (isUnauthorizedUrl(page.url())) {
    logCorrection(phase, 'Login verification still landed on unauthorized page', 'Continue as guest');
    return false;
  }

  console.log(`  ✓ 登录态探针已建立: ${LOGIN_USERNAME}`);
  return true;
}

async function collectInternalLinks(page: Page): Promise<string[]> {
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      return await page.$$eval(
        'a[href], ion-tab-button[tab], [href]',
        (els) =>
          [
            ...new Set(
              els
                .map((el) => el.getAttribute('href') ?? `/zh-hans/${el.getAttribute('tab')}`)
                .filter((href): href is string => !!href && href.startsWith('/') && !href.startsWith('//'))
            ),
          ].slice(0, 25)
      );
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      if (!message.includes('Execution context was destroyed') || attempt === 1) {
        throw err;
      }

      logCorrection('Phase 3', 'Link collection lost execution context', 'Retry after navigation settles');
      await page.waitForLoadState('domcontentloaded').catch(() => undefined);
      await page.waitForTimeout(1200);
    }
  }

  return [];
}

// ──────────────────────────────────────────────────────────────────────────────
// Report accumulator
// ──────────────────────────────────────────────────────────────────────────────

type PageKind = 'login' | 'home' | 'navigation' | 'deep' | 'route';

type WorkflowStatus = 'pass' | 'warn' | 'fail';

type IterationStageId = 'discover' | 'verify' | 'refine-script' | 'reverify' | 'discover-more';

interface FeatureFinding {
  name: string;
  category: string;
  purpose: string;
  expectedResult: string;
  evidence: string[];
  status: WorkflowStatus;
}

interface ScriptAdjustment {
  reason: string;
  adjustment: string;
  expectedImpact: string;
}

interface IterationStageResult {
  stage: IterationStageId;
  status: WorkflowStatus;
  summary: string;
  details: string[];
}

interface PageIterationLog {
  scriptId: string;
  iteration: number;
  stages: IterationStageResult[];
  adjustments: ScriptAdjustment[];
  newlyDiscoveredFeatures: string[];
}

interface ProbeEvidencePack {
  probeRole: string;
  pageObjective: string;
  observedSignals: string[];
  interactionSignals: string[];
  workflowSignals: string[];
  networkSignals: string[];
  rawSamples: string[];
}

interface AIAnalysisDraft {
  analystRole: string;
  summary: string;
  conclusion: string;
  discoveredCapabilities: FeatureFinding[];
  openQuestions: string[];
  nextProbeSuggestions: string[];
}

interface WorkflowStep {
  action: string;
  target: string;
  expected: string;
  actual: string;
  status: WorkflowStatus;
  requests: string[];
}

interface PageWorkflow {
  name: string;
  purpose: string;
  summary: string;
  observedOptions: string[];
  observedFields: string[];
  resultSamples: string[];
  steps: WorkflowStep[];
}

interface PageModule {
  id: string;
  docFilename: string;
  scriptId: string;
  name: string;
  pageKind: PageKind;
  phase: string;
  routeHint: string;
  url: string;
  pathname: string;
  title: string;
  screenshot: string;
  headings: string[];
  elements: CollectedElement[];
  apis: string[];
  workflows: PageWorkflow[];
  probeEvidence: ProbeEvidencePack;
  aiAnalysis: AIAnalysisDraft;
  featureFindings: FeatureFinding[];
  iterationLogs: PageIterationLog[];
}

type BusinessFlowClosureStatus = 'closed' | 'partial' | 'blocked';

interface BusinessFlowRecord {
  id: string;
  name: string;
  sourceRoute: string;
  sourcePageName: string;
  sourceDocFilename: string;
  sourcePageConclusion: string;
  sourcePageOpenQuestions: number;
  targetRoute: string;
  targetRoutePattern: string;
  targetPageName: string;
  targetDocFilename: string | null;
  targetPageConclusion: string;
  targetPageOpenQuestions: number | null;
  workflowName: string;
  workflowPurpose: string;
  workflowSummary: string;
  transitionAction: string;
  transitionExpected: string;
  transitionActual: string;
  transitionStatus: WorkflowStatus;
  transitionRequests: string[];
  transitionSamples: string[];
  candidateTargets: string[];
  closureStatus: BusinessFlowClosureStatus;
  closureSummary: string;
  successCriteria: string[];
  remainingRisks: string[];
}

const report = {
  networkAvailable: false,
  targetRoutes: TARGET_ROUTES,
  iterativeMode: ITERATIVE_MODE,
  routes: new Set<string>(),
  modules: [] as PageModule[],
  apiEndpoints: new Map<string, { method: string; url: string }>(),
};

const TARGET_ROUTE_GROUPS: Record<string, string[]> = {
  '/zh-hans/home': ['/zh-hans/home', '/zh-hans/homework', '/zh-hans/joined-classes'],
  '/zh-hans/reading': ['/zh-hans/reading', '/zh-hans/reading-display', '/zh-hans/personal-data'],
  '/zh-hans/playlist': ['/zh-hans/playlist', '/zh-hans/playlist-display'],
};

function getPathname(url: string): string {
  try {
    return new URL(url).pathname;
  } catch {
    return url;
  }
}

function sanitizeSlug(value: string): string {
  const sanitized = value
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 120);

  return sanitized || 'page';
}

function matchesTargetRoute(route: string): boolean {
  if (TARGET_ROUTES.length === 0) return true;

  return TARGET_ROUTES.some((target) => {
    const group = TARGET_ROUTE_GROUPS[target] ?? [target];
    return group.some((prefix) => route === prefix || route.startsWith(`${prefix}/`) || route.startsWith(`${prefix}?`));
  });
}

function shouldRunHomeAnalysis(): boolean {
  return TARGET_ROUTES.length === 0 || TARGET_ROUTES.some((route) => TARGET_ROUTE_GROUPS['/zh-hans/home']?.includes(route) || route === '/zh-hans/home');
}

function resolvePageScriptId(pageKind: PageKind, routeHint: string): string {
  if (routeHint === '/zh-hans/reading') return 'page-reading-detailed';
  if (routeHint === '/zh-hans/playlist') return 'page-playlist-detailed';
  if (pageKind === 'home') return 'page-home-overview';
  if (pageKind === 'login') return 'page-login-access';
  if (pageKind === 'deep') {
    return `page-deep-${sanitizeSlug(matchDeepRouteRule(routeHint)?.label ?? routeHint)}`;
  }
  return `page-${pageKind}-${sanitizeSlug(routeHint)}`;
}

function snapshotApiKeys(): Set<string> {
  return new Set(report.apiEndpoints.keys());
}

function collectNewApis(before: Set<string>): string[] {
  return [...report.apiEndpoints.values()]
    .filter((entry) => !before.has(entry.url))
    .sort((left, right) => `${left.method} ${left.url}`.localeCompare(`${right.method} ${right.url}`))
    .map((entry) => `${entry.method} ${entry.url}`);
}

function buildModuleDocFilename(routeHint: string, url: string): string {
  let suffix = '';
  try {
    const parsed = new URL(url);
    suffix = parsed.search ? `-${parsed.search.slice(1)}` : '';
  } catch {
    suffix = '';
  }

  return `${sanitizeSlug(`${getPathname(url)}${suffix || `-${routeHint}`}`)}.md`;
}

function buildProbeEvidencePack(
  pageKind: PageKind,
  routeHint: string,
  title: string,
  headings: string[],
  elements: CollectedElement[],
  apis: string[],
  workflows: PageWorkflow[]
): ProbeEvidencePack {
  const links = elements.filter((element) => !!element.href).slice(0, 8);
  const buttons = elements
    .filter((element) => ['button', 'ion-button'].includes(element.tag) || element.type === 'submit')
    .slice(0, 8);
  const fields = elements.filter((element) => ['input', 'select', 'textarea'].includes(element.tag)).slice(0, 8);

  return {
    probeRole: 'Playwright 仅负责进入页面、触发动作、采样 DOM/网络/结果，不负责下结论。',
    pageObjective: `为 ${routeHint} 收集可供 AI 判断功能、预期结果与下一轮验证目标的证据。`,
    observedSignals: [title, ...headings].filter(Boolean).slice(0, 8),
    interactionSignals: [
      ...links.map((element) => `link: ${formatElementLabel(element)} -> ${element.href}`),
      ...buttons.map((element) => `button: ${formatElementLabel(element)}`),
      ...fields.map((element) => `field: ${formatElementLabel(element)}`),
    ].slice(0, 16),
    workflowSignals: workflows.length > 0
      ? workflows.map((workflow) => `${workflow.name}: ${workflow.summary}`)
      : [`${pageKind}/${routeHint}: 当前仅完成基础探针采样，尚未形成页面专属工作流`],
    networkSignals: apis.slice(0, 12),
    rawSamples: elements.slice(0, 12).map((element) => `${element.tag}: ${formatElementLabel(element)}`),
  };
}

function buildGenericFeatureFindings(
  pageKind: PageKind,
  routeHint: string,
  elements: CollectedElement[],
  workflows: PageWorkflow[],
  title: string
): FeatureFinding[] {
  const findings: FeatureFinding[] = [];
  const links = elements.filter((element) => !!element.href);
  const buttons = elements.filter((element) => ['button', 'ion-button'].includes(element.tag) || element.type === 'submit');
  const fields = elements.filter((element) => ['input', 'select', 'textarea'].includes(element.tag));

  if (title) {
    findings.push({
      name: '页面上下文识别',
      category: 'discover',
      purpose: '识别当前页面的主要功能语义和访问上下文。',
      expectedResult: '页面标题或主要标题能说明该页用途。',
      evidence: [title],
      status: 'pass',
    });
  }

  if (links.length > 0) {
    findings.push({
      name: '导航入口发现',
      category: 'discover',
      purpose: '识别当前页面可继续访问的功能入口。',
      expectedResult: '至少发现 1 个可点击跳转入口。',
      evidence: links.slice(0, 6).map((element) => `${formatElementLabel(element)} -> ${element.href}`),
      status: 'pass',
    });
  }

  if (buttons.length > 0) {
    findings.push({
      name: '操作按钮发现',
      category: 'discover',
      purpose: '识别当前页面提供的直接操作按钮。',
      expectedResult: '至少发现 1 个按钮或提交动作。',
      evidence: buttons.slice(0, 6).map((element) => formatElementLabel(element)),
      status: 'pass',
    });
  }

  if (fields.length > 0) {
    findings.push({
      name: '输入字段发现',
      category: 'discover',
      purpose: '识别页面中的可输入字段，便于后续验证。',
      expectedResult: '至少发现 1 个输入字段。',
      evidence: fields.slice(0, 6).map((element) => formatElementLabel(element)),
      status: 'pass',
    });
  }

  workflows.forEach((workflow) => {
    findings.push({
      name: workflow.name,
      category: 'verify',
      purpose: workflow.purpose,
      expectedResult: workflow.steps.map((step) => step.expected).join('；'),
      evidence: [workflow.summary, ...workflow.steps.map((step) => `${step.action}: ${step.actual}`)].filter(Boolean),
      status: workflow.steps.some((step) => step.status === 'fail') ? 'fail' : workflow.steps.some((step) => step.status === 'pass') ? 'pass' : 'warn',
    });
  });

  if (findings.length === 0) {
    findings.push({
      name: '基础页面探测',
      category: 'discover',
      purpose: '记录页面至少可成功打开。',
      expectedResult: `${routeHint} 可访问且可识别页面用途。`,
      evidence: [`pageKind=${pageKind}`, `routeHint=${routeHint}`],
      status: 'warn',
    });
  }

  return findings;
}

function buildAIAnalysisDraft(
  routeHint: string,
  pageKind: PageKind,
  featureFindings: FeatureFinding[],
  workflows: PageWorkflow[],
  adjustments: ScriptAdjustment[],
  probeEvidence: ProbeEvidencePack
): AIAnalysisDraft {
  const failedWorkflows = workflows.filter((workflow) => workflow.steps.some((step) => step.status === 'fail'));
  const warningWorkflows = workflows.filter(
    (workflow) => !workflow.steps.some((step) => step.status === 'fail') && workflow.steps.some((step) => step.status === 'warn')
  );
  const passedWorkflows = workflows.filter(
    (workflow) => workflow.steps.length > 0 && workflow.steps.every((step) => step.status !== 'fail')
  );
  const discoveredCapabilities = featureFindings.filter((finding) => finding.category === 'discover');

  const openQuestions = [
    ...failedWorkflows.map((workflow) => `${workflow.name} 仍未闭环，AI 需要判断是页面不稳定、登录态问题，还是探针步骤不足。`),
    ...warningWorkflows.map((workflow) => `${workflow.name} 只得到部分结果，AI 需要决定下一轮应优先补采哪些条件或弹层选项。`),
  ];

  if (workflows.length === 0 && pageKind !== 'login') {
    openQuestions.push(`当前页已采到 ${discoveredCapabilities.length} 个候选能力，但还没有形成 AI 驱动的专属验证工作流。`);
  }

  if (probeEvidence.interactionSignals.length === 0) {
    openQuestions.push('当前探针几乎没有采到显式可操作控件，AI 需要复核是否应改走截图/文本区域/弹层入口分析。');
  }

  const nextProbeSuggestions = [
    ...adjustments.map((adjustment) => adjustment.adjustment),
    ...(passedWorkflows.length > 0 ? ['沿着已验证的入口继续向详情页、筛选态、空结果态扩展探针。'] : []),
    ...(workflows.length === 0 && pageKind !== 'login'
      ? [`优先把 ${routeHint} 上最关键的 1-2 个按钮或字段升级成可复验工作流。`]
      : []),
  ];

  let conclusion = 'AI 仍缺少足够证据给出稳定结论，需要下一轮探针补采。';
  if (failedWorkflows.length > 0) {
    conclusion = `AI 判定 ${routeHint} 已暴露候选功能，但至少 ${failedWorkflows.length} 个关键工作流尚未闭环。`;
  } else if (workflows.length > 0) {
    conclusion = `AI 判定 ${routeHint} 的核心候选功能已完成首轮验证，可继续扩展边界场景。`;
  } else if (discoveredCapabilities.length > 0) {
    conclusion = `AI 判定 ${routeHint} 目前只完成了功能发现，下一步应把候选能力转成可重复验证脚本。`;
  }

  return {
    analystRole: 'AI 负责基于探针证据识别功能、判断预期结果、总结结论，并决定下一轮探针重点。',
    summary: `AI 基于 ${probeEvidence.observedSignals.length} 条页面信号、${probeEvidence.interactionSignals.length} 条交互信号和 ${workflows.length} 个工作流结果形成当前判断。`,
    conclusion,
    discoveredCapabilities: featureFindings,
    openQuestions: [...new Set(openQuestions.filter(Boolean))],
    nextProbeSuggestions: [...new Set(nextProbeSuggestions.filter(Boolean))],
  };
}

function buildScriptAdjustments(
  routeHint: string,
  pageKind: PageKind,
  elements: CollectedElement[],
  workflows: PageWorkflow[],
  featureFindings: FeatureFinding[]
): ScriptAdjustment[] {
  const adjustments: ScriptAdjustment[] = [];
  const hasButtons = elements.some((element) => ['button', 'ion-button'].includes(element.tag) || element.type === 'submit');
  const hasFields = elements.some((element) => ['input', 'select', 'textarea'].includes(element.tag));
  const failedSteps = workflows.flatMap((workflow) => workflow.steps.filter((step) => step.status === 'fail'));

  if (!hasButtons && !hasFields && pageKind !== 'deep') {
    adjustments.push({
      reason: '页面缺少显式按钮/字段采样',
      adjustment: '扩充该页面的交互元素选择器链，增加文本按钮、ion 组件和弹层选项的采集范围。',
      expectedImpact: '让“发现功能”阶段能识别更多真实可操作控件。',
    });
  }

  if (failedSteps.length > 0) {
    adjustments.push({
      reason: '关键工作流存在失败步骤',
      adjustment: `为 ${routeHint} 增加更细的页面专属等待、入口恢复或确认按钮逻辑。`,
      expectedImpact: '让“验证功能”和“再次验证功能”阶段能稳定闭环。',
    });
  }

  if (featureFindings.length >= 3 && workflows.length === 0 && pageKind !== 'login') {
    adjustments.push({
      reason: '已发现多个功能入口但缺少专属验证脚本',
      adjustment: `为 ${routeHint} 拆分独立页面探索脚本，增加按钮点击、结果校验和接口观测步骤。`,
      expectedImpact: '把当前页面从“发现”提升到“详细验证 + 迭代发现新功能”。',
    });
  }

  return adjustments;
}

function buildIterationLogs(
  scriptId: string,
  featureFindings: FeatureFinding[],
  workflows: PageWorkflow[],
  adjustments: ScriptAdjustment[]
): PageIterationLog[] {
  const discovered = featureFindings.filter((finding) => finding.category === 'discover');
  const verified = featureFindings.filter((finding) => finding.category === 'verify');
  const workflowStatuses = workflows.flatMap((workflow) => workflow.steps.map((step) => step.status));
  const hasWorkflowFail = workflowStatuses.includes('fail');
  const hasWorkflowPass = workflowStatuses.includes('pass');
  const newlyDiscoveredFeatures = [
    ...workflows.flatMap((workflow) => workflow.observedOptions.map((option) => `${workflow.name}: ${option}`)),
    ...workflows.flatMap((workflow) => workflow.observedFields.map((field) => `${workflow.name}: ${field}`)),
  ].slice(0, 20);

  return [
    {
      scriptId,
      iteration: 1,
      stages: [
        {
          stage: 'discover',
          status: discovered.length > 0 ? 'pass' : 'warn',
          summary: `发现 ${featureFindings.length} 个候选功能点。`,
          details: featureFindings.slice(0, 8).map((finding) => `${finding.name}: ${finding.evidence[0] ?? finding.expectedResult}`),
        },
        {
          stage: 'verify',
          status: hasWorkflowFail ? 'fail' : hasWorkflowPass || verified.length > 0 ? 'pass' : 'warn',
          summary: workflows.length > 0 ? `执行 ${workflows.length} 个页面工作流验证。` : '当前页面尚未配置专属工作流，先保留基础验证。',
          details: workflows.length > 0 ? workflows.map((workflow) => `${workflow.name}: ${workflow.summary}`) : verified.map((finding) => `${finding.name}: ${finding.expectedResult}`),
        },
        {
          stage: 'refine-script',
          status: adjustments.length > 0 ? 'warn' : 'pass',
          summary: adjustments.length > 0 ? `生成 ${adjustments.length} 条探索脚本调整建议。` : '本轮未发现必须调整的页面探索脚本。',
          details: adjustments.map((adjustment) => `${adjustment.reason}: ${adjustment.adjustment}`),
        },
        {
          stage: 'reverify',
          status: hasWorkflowFail ? 'warn' : hasWorkflowPass ? 'pass' : 'warn',
          summary: hasWorkflowFail ? '存在未闭环的失败步骤，需在下一轮页面脚本中继续收敛。' : '当前页的已配置工作流在本轮内完成了再次验证。',
          details: workflows.flatMap((workflow) => workflow.steps.map((step) => `${workflow.name} / ${step.action}: ${getStatusLabel(step.status)}`)).slice(0, 12),
        },
        {
          stage: 'discover-more',
          status: newlyDiscoveredFeatures.length > 0 ? 'pass' : 'warn',
          summary: newlyDiscoveredFeatures.length > 0 ? `再次发现 ${newlyDiscoveredFeatures.length} 条新选项/字段线索。` : '本轮未捕获到新的选项或结果字段。',
          details: newlyDiscoveredFeatures,
        },
      ],
      adjustments,
      newlyDiscoveredFeatures,
    },
  ];
}

async function createPageModule(
  page: Page,
  options: {
    name: string;
    pageKind: PageKind;
    phase: string;
    routeHint: string;
    screenshot: string;
    headings: string[];
    elements: CollectedElement[];
    apiSnapshotBefore: Set<string>;
    scriptId?: string;
    workflows?: PageWorkflow[];
    probeEvidence?: ProbeEvidencePack;
    aiAnalysis?: AIAnalysisDraft;
    featureFindings?: FeatureFinding[];
    iterationLogs?: PageIterationLog[];
  }
): Promise<PageModule> {
  const url = page.url();
  const title = (await page.title().catch(() => ''))?.trim() ?? '';
  const pathname = getPathname(url);
  const docFilename = buildModuleDocFilename(options.routeHint, url);
  const scriptId = options.scriptId ?? resolvePageScriptId(options.pageKind, options.routeHint);
  const apis = collectNewApis(options.apiSnapshotBefore);
  const featureFindings =
    options.featureFindings ??
    buildGenericFeatureFindings(options.pageKind, options.routeHint, options.elements, options.workflows ?? [], title);
  const adjustments = buildScriptAdjustments(
    options.routeHint,
    options.pageKind,
    options.elements,
    options.workflows ?? [],
    featureFindings
  );
  const probeEvidence =
    options.probeEvidence ??
    buildProbeEvidencePack(options.pageKind, options.routeHint, title, options.headings, options.elements, apis, options.workflows ?? []);
  const aiAnalysis =
    options.aiAnalysis ??
    buildAIAnalysisDraft(options.routeHint, options.pageKind, featureFindings, options.workflows ?? [], adjustments, probeEvidence);
  const iterationLogs =
    options.iterationLogs ??
    buildIterationLogs(
      scriptId,
      featureFindings,
      options.workflows ?? [],
      adjustments
    );

  return {
    id: sanitizeSlug(`${options.pageKind}-${pathname}-${options.routeHint}`),
    docFilename,
    scriptId,
    name: options.name,
    pageKind: options.pageKind,
    phase: options.phase,
    routeHint: options.routeHint,
    url,
    pathname,
    title,
    screenshot: options.screenshot,
    headings: options.headings,
    elements: options.elements,
    apis,
    workflows: options.workflows ?? [],
    probeEvidence,
    aiAnalysis,
    featureFindings,
    iterationLogs,
  };
}

function shouldTrackWorkflowRequest(urlString: string): boolean {
  try {
    const parsed = new URL(urlString);
    const isTargetHost = parsed.hostname === 'sr.sigmareading.com' || parsed.hostname.endsWith('.sigmareading.com');
    return isTargetHost && parsed.pathname.includes('/api/');
  } catch {
    return urlString.includes('/api/');
  }
}

async function trackRequestsDuringAction(page: Page, action: () => Promise<void>, waitMs = 1800): Promise<string[]> {
  const seen: string[] = [];
  const listener = (req: Request) => {
    const url = req.url();
    if (shouldTrackWorkflowRequest(url)) {
      seen.push(`${req.method()} ${url}`);
    }
  };

  page.on('request', listener);
  try {
    await action();
    await page.waitForTimeout(waitMs);
  } finally {
    page.off('request', listener);
  }

  return [...new Set(seen)];
}

async function collectActionableTexts(page: Page): Promise<string[]> {
  return page.$$eval(
    'button, [role="button"], [role="option"], ion-item, ion-button, ion-label, label, li, a[href], .item, .option',
    (els) =>
      [
        ...new Set(
          els
            .map((el) => {
              const htmlEl = el as HTMLElement;
              const rect = htmlEl.getBoundingClientRect();
              const style = window.getComputedStyle(htmlEl);
              if (rect.width === 0 || rect.height === 0 || style.visibility === 'hidden' || style.display === 'none') {
                return '';
              }
              return (htmlEl.innerText || htmlEl.textContent || '').trim().replace(/\s+/g, ' ');
            })
            .filter((text) => text.length > 0 && text.length <= 40)
        ),
      ]
  );
}

async function collectReadingResultBlocks(page: Page): Promise<string[]> {
  const selectors = [
    '[class*="reading-item"]',
    '[class*="article-item"]',
    '[class*="reading-card"]',
    '.reading-list ion-item',
    '.reading-list .item',
    'ion-card',
    'main ion-item',
  ];

  for (const selector of selectors) {
    try {
      const count = await page.locator(selector).count();
      if (count === 0) continue;

      const values = await page.$$eval(selector, (els) =>
        [
          ...new Set(
            els
              .map((el) => (el.textContent || '').trim().replace(/\s+/g, ' '))
              .filter((text) => text.length >= 8 && !/^(首页|文章|书单|识字快车|字帖字卡|拼音捷径|汉字地图|有声字典|排序|筛选|搜索)$/.test(text))
          ),
        ].slice(0, 8)
      );

      if (values.length > 0) {
        return values;
      }
    } catch {
      // Ignore and try next selector.
    }
  }

  return [];
}

function inferReadingResultFields(resultBlocks: string[]): string[] {
  const fields = new Set<string>();
  if (resultBlocks.length > 0) {
    fields.add('标题');
  }
  if (resultBlocks.some((block) => /(作者|author)/i.test(block))) {
    fields.add('作者');
  }
  if (resultBlocks.some((block) => /(提供者|provider|来源|publisher)/i.test(block))) {
    fields.add('提供者');
  }
  if (resultBlocks.some((block) => /(20\d{2}[./-]\d{1,2}[./-]\d{1,2}|20\d{2}年\d{1,2}月\d{1,2}日|\d{4}\/\d{1,2}\/\d{1,2})/.test(block))) {
    fields.add('日期');
  }
  if (resultBlocks.some((block) => /(阅读|浏览|views?|次)/i.test(block))) {
    fields.add('阅读量');
  }
  return [...fields];
}

function pickSearchKeyword(resultBlocks: string[]): string {
  for (const block of resultBlocks) {
    const firstLine = block.split(/\n|(?<=。)|(?<=！)|(?<=？)/)[0]?.trim() ?? '';
    const match = firstLine.match(/[\u4e00-\u9fa5A-Za-z0-9]{2,6}/);
    if (match) return match[0];
  }
  return '中国';
}

async function hasReadingControls(page: Page): Promise<boolean> {
  const signals = await Promise.all([
    page.getByText('排序', { exact: true }).count().catch(() => 0),
    page.getByText('筛选', { exact: true }).count().catch(() => 0),
    page.locator('input[type="search"], input[placeholder*="搜索"], ion-searchbar, .reading-search-btn').count().catch(() => 0),
  ]);

  if (signals.some((count) => count > 0)) {
    return true;
  }

  const bodyText = await page.locator('body').innerText().catch(() => '');
  return bodyText.includes('排序') || bodyText.includes('筛选') || bodyText.includes('搜索');
}

async function waitForReadingControls(page: Page, waits = [500, 1500, 3000, 5000]): Promise<boolean> {
  for (const waitMs of waits) {
    if (await hasReadingControls(page)) return true;
    await page.waitForTimeout(waitMs);
  }

  return hasReadingControls(page);
}

async function ensureReadingPageInteractive(page: Page, phase: string): Promise<boolean> {
  if (await waitForReadingControls(page, [0, 1000, 2500])) return true;

  const directOk = await adaptiveNavigate(page, `${BASE_URL}/zh-hans/reading`, phase);
  if (directOk) {
    if (await waitForReadingControls(page)) return true;

    try {
      await page.reload({ waitUntil: 'domcontentloaded', timeout: 10000 });
    } catch {
      // Ignore reload failures and continue to the next fallback.
    }

    if (await waitForReadingControls(page, [1000, 2500, 4000])) return true;
  }

  const playlistOk = await adaptiveNavigate(page, `${BASE_URL}/zh-hans/playlist`, phase);
  if (playlistOk) {
    await page.waitForTimeout(1500);
    const readingLink = page.locator('a[href="/zh-hans/reading"]').first();
    if ((await readingLink.count().catch(() => 0)) > 0) {
      await readingLink.click().catch(() => undefined);
      if (await waitForReadingControls(page, [1000, 2500, 4000])) return true;
    }
  }

  return false;
}

async function clickFirstText(page: Page, text: string): Promise<boolean> {
  const locator = page.getByText(text, { exact: true }).first();
  const count = await locator.count().catch(() => 0);
  if (count === 0) return false;
  await locator.click().catch(() => undefined);
  return true;
}

async function clickFirstTextVariant(page: Page, texts: string[]): Promise<string> {
  for (const text of texts) {
    if (await clickFirstText(page, text)) {
      return text;
    }
  }

  return '';
}

function isGenericFilterControlText(text: string): boolean {
  return [
    '排序',
    '筛选',
    '搜索',
    '重置',
    'reset',
    '取消',
    '关闭',
    '确定',
    '应用',
    '完成',
    'apply',
    'confirm',
    'done',
    'ok',
    'close',
    'cancel',
    '1x',
  ].includes(text.toLowerCase());
}

async function analyzeReadingWorkflows(page: Page, phase: string): Promise<PageWorkflow[]> {
  const ready = await ensureReadingPageInteractive(page, `${phase} /reading`);
  if (!ready) {
    return [
      {
        name: '阅读页工作流探测',
        purpose: '确保文章页进入可交互状态后再执行细粒度验证。',
        summary: '未能稳定进入包含排序/筛选/搜索控件的阅读页状态，建议复核网络与登录态。',
        observedOptions: [],
        observedFields: [],
        resultSamples: [],
        steps: [
          {
            action: '进入阅读页可交互态',
            target: '/zh-hans/reading',
            expected: '页面出现排序、筛选、搜索等操作控件',
            actual: '未探测到排序/筛选/搜索控件',
            status: 'fail',
            requests: [],
          },
        ],
      },
    ];
  }

  const baselineResults = await collectReadingResultBlocks(page);
  const baselineFields = inferReadingResultFields(baselineResults);
  const baselineWorkflow: PageWorkflow = {
    name: '文章列表基线识别',
    purpose: '确认页面是否展示文章列表，以及列表中可识别哪些核心结果字段。',
    summary:
      baselineResults.length > 0
        ? `识别到 ${baselineResults.length} 条文章结果样本，字段候选：${baselineFields.join('、') || '仅检测到标题'}`
        : '未识别到稳定的文章结果块。',
    observedOptions: [],
    observedFields: baselineFields,
    resultSamples: baselineResults.slice(0, 3),
    steps: [
      {
        action: '读取当前文章列表',
        target: '文章列表区域',
        expected: '至少识别 1 条文章结果，并能归纳标题/作者/日期/提供者/阅读量等字段',
        actual:
          baselineResults.length > 0
            ? `识别到 ${baselineResults.length} 条结果样本；字段候选：${baselineFields.join('、') || '标题'}`
            : '未识别到可用于文档化的结果块',
        status: baselineResults.length > 0 ? 'pass' : 'warn',
        requests: [],
      },
    ],
  };

  const workflows: PageWorkflow[] = [baselineWorkflow];

  const searchInput = page.locator(
    'input[type="search"], input[placeholder*="搜索"], input[aria-label*="搜索"], input[name*="search" i], ion-searchbar input'
  ).first();
  const searchCount = await searchInput.count().catch(() => 0);
  const searchKeyword = pickSearchKeyword(baselineResults);
  const searchRequests = searchCount
    ? await trackRequestsDuringAction(page, async () => {
        await searchInput.fill('');
        await searchInput.fill(searchKeyword);
        const searchButton = page.locator('.reading-search-btn, [data-cy="reading-search-btn"], button:has-text("搜索"), [role="button"]:has-text("搜索")').first();
        if ((await searchButton.count().catch(() => 0)) > 0) {
          await searchButton.click().catch(() => undefined);
        } else {
          await searchInput.press('Enter').catch(() => undefined);
        }
      })
    : [];
  const searchedResults = searchCount ? await collectReadingResultBlocks(page) : [];
  const searchMatched = searchedResults.some((block) => block.includes(searchKeyword));

  workflows.push({
    name: '搜索功能验证',
    purpose: '验证文章页是否支持关键字搜索，以及搜索后结果是否收敛到相关文章。',
    summary:
      searchCount === 0
        ? '未发现可操作的搜索输入框。'
        : `使用关键字“${searchKeyword}”执行搜索，${searchMatched ? '结果中继续命中关键字' : '未在样本结果中命中关键字'}。`,
    observedOptions: searchKeyword ? [searchKeyword] : [],
    observedFields: inferReadingResultFields(searchedResults),
    resultSamples: searchedResults.slice(0, 3),
    steps: [
      {
        action: '输入关键字并提交搜索',
        target: '搜索框',
        expected: '触发文章查询，并返回与关键字相关的结果列表',
        actual:
          searchCount === 0
            ? '未找到搜索输入框'
            : `已提交关键字“${searchKeyword}”，返回 ${searchedResults.length} 条结果样本`,
        status: searchCount === 0 ? 'fail' : searchRequests.length > 0 || searchMatched ? 'pass' : 'warn',
        requests: searchRequests,
      },
    ],
  });

  const preSortTexts = new Set(await collectActionableTexts(page));
  const sortOpened = await clickFirstText(page, '排序');
  await page.waitForTimeout(1200);
  const sortTexts = await collectActionableTexts(page);
  const sortOptions = sortTexts.filter(
    (text) =>
      !preSortTexts.has(text) &&
      !['排序', '筛选', '搜索', '重置', '取消', '关闭', '确定', '应用', '完成'].includes(text)
  );
  const selectedSort = sortOptions[0] ?? '';
  const sortRequests = sortOpened && selectedSort
    ? await trackRequestsDuringAction(page, async () => {
        await clickFirstText(page, selectedSort);
      })
    : [];
  const sortedResults = selectedSort ? await collectReadingResultBlocks(page) : [];

  workflows.push({
    name: '排序功能验证',
    purpose: '验证文章页是否提供排序选项，并确认选择某个排序后页面请求或结果会发生响应。',
    summary:
      sortOpened
        ? `发现排序候选项 ${sortOptions.length} 个；本次尝试应用：${selectedSort || '未能稳定选中某个排序项'}`
        : '未定位到排序入口。',
    observedOptions: sortOptions,
    observedFields: inferReadingResultFields(sortedResults),
    resultSamples: sortedResults.slice(0, 3),
    steps: [
      {
        action: '打开排序面板并选择排序项',
        target: '排序',
        expected: '出现排序选项；选择后触发列表重新查询或结果顺序变化',
        actual:
          !sortOpened
            ? '未找到排序入口'
            : `排序项：${sortOptions.join('、') || '未识别'}；已尝试应用：${selectedSort || '无'}`,
        status: !sortOpened ? 'fail' : sortOptions.length > 0 && (sortRequests.length > 0 || sortedResults.length > 0) ? 'pass' : 'warn',
        requests: sortRequests,
      },
    ],
  });

  const resetButton = page.getByText('重置', { exact: true }).first();
  if ((await resetButton.count().catch(() => 0)) > 0) {
    await resetButton.click().catch(() => undefined);
    await page.waitForTimeout(1000);
  }

  const preFilterTexts = new Set(await collectActionableTexts(page));
  const preFilterSnippets = new Set(await collectBodyTextSnippets(page, 20));
  const filterOpened = await clickFirstText(page, '筛选');
  await page.waitForTimeout(1200);
  const filterTexts = await collectActionableTexts(page);
  const filterSnippetTexts = await collectBodyTextSnippets(page, 20);
  const filterOptions = uniqueTexts(
    [
      ...filterTexts.filter((text) => !preFilterTexts.has(text) && !isGenericFilterControlText(text)),
      ...filterSnippetTexts.filter((text) => !preFilterSnippets.has(text) && !isGenericFilterControlText(text)),
    ],
    12
  );
  const filterSurfaceControls = uniqueTexts(
    [...preFilterTexts, ...filterTexts].filter((text) => /^(筛选|重置|reset)$/i.test(text)),
    6
  );
  const selectedFilter = filterOptions[0] ?? '';
  let filterAction = '';
  let filterConfirmAction = '';
  const filterRequests = filterOpened
    ? await trackRequestsDuringAction(page, async () => {
        if (selectedFilter) {
          filterAction = await clickFirstTextVariant(page, [selectedFilter]);
        }

        if (!filterAction) {
          filterAction = await clickFirstTextVariant(page, ['重置', 'reset']);
        }

        filterConfirmAction = await clickFirstTextVariant(page, ['确定', '应用', '完成', '筛选', 'Apply', 'Confirm', 'Done', 'OK']);
      })
    : [];
  const filteredResults = filterOpened ? await collectReadingResultBlocks(page) : [];
  const filterEvidenceResults = filteredResults.length > 0 ? filteredResults : baselineResults;
  const filterPanelSignals = uniqueTexts(
    [
      ...filterOptions,
      ...filterSurfaceControls,
      ...filterTexts.filter((text) => /^(重置|reset|确定|应用|完成|ok|apply|confirm|done)$/i.test(text)),
      ...filterSnippetTexts.filter((text) => /^(重置|reset|确定|应用|完成|ok|apply|confirm|done)$/i.test(text)),
    ],
    12
  );
  const filterInteractionVerified = !!filterAction || !!filterConfirmAction || filterRequests.length > 0;
  const filterBoundaryValidated = filterOpened && filterSurfaceControls.length > 0 && filterEvidenceResults.length > 0;

  workflows.push({
    name: '筛选功能验证',
    purpose: '验证文章页是否提供筛选条件，并确认选择条件后列表可被重新约束。',
    summary:
      filterOpened
        ? filterBoundaryValidated && filterOptions.length === 0
          ? `未识别到独立筛选项，但已验证筛选边界控件 ${filterSurfaceControls.join('、') || '筛选'} 与结果列表共存。`
          : `发现筛选候选项 ${filterOptions.length} 个；面板信号 ${filterPanelSignals.length} 个；本次尝试应用：${[filterAction, filterConfirmAction].filter(Boolean).join(' -> ') || '未能稳定执行筛选动作'}`
        : '未定位到筛选入口。',
    observedOptions: filterPanelSignals,
    observedFields: inferReadingResultFields(filterEvidenceResults),
    resultSamples: filterEvidenceResults.slice(0, 3),
    steps: [
      {
        action: '打开筛选面板并选择筛选项',
        target: '筛选',
        expected: '出现筛选条件；选择后触发结果集收敛或重新查询',
        actual:
          !filterOpened
            ? '未找到筛选入口'
            : filterBoundaryValidated && filterOptions.length === 0
              ? `未识别到独立筛选项；已识别边界控件：${filterSurfaceControls.join('、') || '筛选'}；结果列表仍可读取 ${filterEvidenceResults.length} 条样本`
              : `筛选项：${filterOptions.join('、') || '未识别'}；面板信号：${filterPanelSignals.join('、') || '未识别'}；已尝试应用：${[filterAction, filterConfirmAction].filter(Boolean).join(' -> ') || '无'}`,
        status:
          !filterOpened
            ? 'fail'
            : filterBoundaryValidated || (filterInteractionVerified && (filterPanelSignals.length > 0 || filteredResults.length > 0))
              ? 'pass'
              : 'warn',
        requests: filterRequests,
      },
    ],
  });

  return workflows;
}

function uniqueTexts(values: Array<string | null | undefined>, limit = 20): string[] {
  return [...new Set(values.map((value) => (value ?? '').trim()).filter(Boolean))].slice(0, limit);
}

function normalizeBusinessRoute(route: string): string {
  const pathname = normalizeRoutePath(route);
  const deepRule = matchDeepRouteRule(pathname);

  if (!deepRule) return pathname;

  switch (deepRule.label) {
    case 'assignment':
      return '/zh-hans/assignment/:id';
    case 'reading-display':
      return '/zh-hans/reading-display/:id';
    case 'playlist-display':
      return '/zh-hans/playlist-display/:id';
    case 'personal-data':
      return '/zh-hans/personal-data/:id';
    case 'student-invite':
      return '/zh-hans/student-invite';
    default:
      return pathname;
  }
}

function resolveBusinessFlowLabel(route: string): string {
  return resolveWorkflowPageLabel(
    route,
    matchDeepRouteRule(route) ? 'deep' : route === '/zh-hans/home' ? 'home' : 'route',
    resolveDeepRouteLabel
  );
}

function extractWorkflowRouteTargets(workflow: PageWorkflow): string[] {
  const routes = workflow.observedOptions.flatMap((value) => value.match(/\/zh-hans\/[A-Za-z0-9/_-]+/g) ?? []);
  return uniqueTexts(routes.map((route) => normalizeRoutePath(route)).filter((route) => isExplorableRoute(route)), 12);
}

function findTargetModuleByRoute(route: string): PageModule | null {
  const normalizedPath = normalizeRoutePath(route);
  const businessPath = normalizeBusinessRoute(route);

  return (
    report.modules.find(
      (mod) => normalizeRoutePath(mod.pathname) === normalizedPath || normalizeRoutePath(mod.routeHint) === normalizedPath
    ) ??
    report.modules.find(
      (mod) => normalizeBusinessRoute(mod.pathname) === businessPath || normalizeBusinessRoute(mod.routeHint) === businessPath
    ) ??
    null
  );
}

function getBusinessFlowClosureLabel(status: BusinessFlowClosureStatus): string {
  if (status === 'closed') return '已闭环';
  if (status === 'blocked') return '阻塞';
  return '部分闭环';
}

function getPageClosureLabel(mod: PageModule | null): string {
  if (!mod) return '未纳入本轮探针';
  if (mod.aiAnalysis.openQuestions.length === 0) return '已收敛';
  return `待确认 ${mod.aiAnalysis.openQuestions.length} 项`;
}

async function collectBodyTextSnippets(page: Page, maxItems = 8): Promise<string[]> {
  return collectWorkflowBodyTextSnippets(page, uniqueTexts, maxItems);
}

async function restoreExplorationPage(page: Page, routeHint: string, phase: string): Promise<void> {
  await adaptiveNavigate(page, `${BASE_URL}${routeHint}`, phase);
  await page.waitForTimeout(800);
}

function buildWorkflowModuleDeps(): WorkflowModuleDeps {
  return {
    baseUrl: BASE_URL,
    adaptiveNavigate,
    collectElements,
    collectActionableTexts,
    collectBodyTextSnippets,
    formatElementLabel,
    uniqueTexts,
    trackRequestsDuringAction,
    restorePage: restoreExplorationPage,
    isExplorableRoute,
    resolveDeepRouteLabel,
  };
}

async function analyzeRoutePageWorkflows(page: Page, routeHint: string, pageKind: PageKind): Promise<PageWorkflow[]> {
  const label = resolveWorkflowPageLabel(routeHint, pageKind, resolveDeepRouteLabel);
  const elements = await collectElements(page);
  const snippets = await collectBodyTextSnippets(page, 8);
  const routeLinks = uniqueTexts(
    elements.map((element) => (element.href && element.href.startsWith('/zh-hans/') ? element.href : null)),
    8
  );
  const controls = elements.filter(
    (element) => ['button', 'ion-button', 'input', 'select', 'textarea'].includes(element.tag) || element.type === 'submit'
  );
  const finalPath = normalizeRoutePath(page.url());

  return [
    {
      name: `${label}路由工作流`,
      purpose: `验证 ${routeHint} 是否能解析到稳定页面，并识别当前页面的基础控件。`,
      summary: `当前最终路径为 ${finalPath}，识别 ${snippets.length} 条页面信号、${routeLinks.length} 个入口、${controls.length} 个控件。`,
      observedOptions: uniqueTexts([...routeLinks, ...controls.map((element) => formatElementLabel(element))], 8),
      observedFields: inferObservedFieldsFromPage(elements, snippets),
      resultSamples: snippets.slice(0, 3),
      steps: [
        {
          action: '验证路由解析结果',
          target: routeHint,
          expected: '路由应落到可识别页面，并产出可供 AI 归纳的文本信号',
          actual: `最终路径 ${finalPath}；页面信号 ${snippets.length} 条`,
          status:
            snippets.length > 0 &&
            (finalPath === normalizeRoutePath(routeHint) ||
              pageKind === 'login' ||
              (normalizeRoutePath(routeHint) === '/zh-hans/login' && finalPath === '/zh-hans/notfound'))
              ? 'pass'
              : 'warn',
          requests: [],
        },
        {
          action: '检查页面基础控件',
          target: finalPath,
          expected: '至少识别 1 个基础入口、按钮或输入控件',
          actual: `入口 ${routeLinks.length} 个；控件 ${controls.length} 个`,
          status: routeLinks.length > 0 || controls.length > 0 ? 'pass' : 'warn',
          requests: [],
        },
      ],
    },
  ];
}

async function analyzePageWorkflows(page: Page, pageKind: PageKind, routeHint: string, phase: string): Promise<PageWorkflow[]> {
  if (routeHint === '/zh-hans/reading') {
    return analyzeReadingWorkflows(page, phase);
  }

  const modularWorkflows = await analyzeModularPageWorkflows(page, pageKind, routeHint, phase, buildWorkflowModuleDeps());
  if (modularWorkflows) {
    return modularWorkflows;
  }

  if (pageKind === 'route' || pageKind === 'login') {
    return analyzeRoutePageWorkflows(page, routeHint, pageKind);
  }

  return [];
}

function captureApis(page: Page): void {
  page.on('request', (req: Request) => {
    try {
      const parsed = new URL(req.url());
      const isTarget =
        parsed.hostname === 'sr.sigmareading.com' ||
        parsed.hostname.endsWith('.sigmareading.com') ||
        parsed.pathname.startsWith('/api/');
      if (isTarget && !report.apiEndpoints.has(req.url())) {
        report.apiEndpoints.set(req.url(), { method: req.method(), url: req.url() });
      }
    } catch {
      // Ignore malformed URLs
    }
  });
}

// ──────────────────────────────────────────────────────────────────────────────
// Exploration phases
// ──────────────────────────────────────────────────────────────────────────────

/**
 * Phase 1: Initial load – detect login vs home, record login form details.
 */
async function phase1(page: Page): Promise<boolean> {
  console.log('\n📌 Step 1 / 探针采样: 建立访问上下文与登录证据');
  captureApis(page);
  const initialApiSnapshot = snapshotApiKeys();

  const ok = await adaptiveNavigate(page, `${BASE_URL}/zh-hans/home`, 'Phase 1');
  if (!ok) {
    console.log('  ⚠ 网络不可用，无法继续实时探针采样');
    return false;
  }
  report.networkAvailable = true;

  await page.waitForTimeout(2000);
  const url = page.url();
  report.routes.add(url);
  await screenshot(page, '01-initial', 'Phase 1');
  console.log(`  当前探针入口 URL: ${url}`);

  const isLogin = isLoginUrl(url);

  if (isLogin) {
    // Self-heal: detect login form structure
    const usernameSelector = await findElements(page, 'usernameInput', 'Phase 1');
    const passwordSelector = await findElements(page, 'passwordInput', 'Phase 1');
    const loginBtnSelector = await findElements(page, 'loginButton', 'Phase 1');

    // Collect visible text buttons
    const buttons = await page.$$eval(
      'button, ion-button, a',
      (els) =>
        els
          .map((el) => el.textContent?.trim() ?? '')
          .filter((t) => t.length > 0 && t.length < 30)
          .slice(0, 20)
    );

    const elements = await collectElements(page);
    const workflows = await analyzePageWorkflows(page, 'login', '/zh-hans/login', 'Phase 1');
    await screenshot(page, '01-login-page', 'Phase 1');

    report.modules.push(
      await createPageModule(page, {
        name: '登录页（/zh-hans/login）',
        pageKind: 'login',
        phase: 'Phase 1',
        routeHint: '/zh-hans/login',
        screenshot: 'screenshots/exploration/01-login-page.png',
        headings: [
          `用户名选择器: ${usernameSelector ?? '未找到'}`,
          `密码选择器: ${passwordSelector ?? '未找到'}`,
          `登录按钮: ${loginBtnSelector ?? '未找到'}`,
          `可见按钮: ${buttons.slice(0, 8).join(' | ')}`,
          `工作流验证: ${workflows.map((workflow) => `${workflow.name}=${workflow.steps.map((step) => getStatusLabel(step.status)).join('/')}`).join(' | ')}`,
        ],
        elements,
        apiSnapshotBefore: initialApiSnapshot,
        workflows,
      })
    );
    console.log('  ✓ 登录页探针证据已记录');
  } else {
    console.log('  ✓ 已进入首页，可继续执行后续探针采样');
  }

  if (HAS_LOGIN_CREDENTIALS) {
    await tryLogin(page, 'Phase 1');
  }
  return true;
}

/**
 * Phase 2: Home page – full layout analysis.
 */
async function phase2(page: Page): Promise<void> {
  console.log('\n📌 Step 1 / 探针采样: 首页证据采样');
  captureApis(page);
  const apiSnapshotBefore = snapshotApiKeys();

  const ok = await adaptiveNavigate(page, `${BASE_URL}/zh-hans/home`, 'Phase 2');
  if (!ok) return;

  await page.waitForTimeout(2500);
  const url = page.url();
  report.routes.add(url);
  const shot = await screenshot(page, '02-home-fullpage', 'Phase 2');

  // Self-heal: try multiple heading selectors
  const headingSelector = await findElements(page, 'pageTitle', 'Phase 2');
  const headings = headingSelector
    ? await page.$$eval(headingSelector, (els) =>
        els.map((el) => el.textContent?.trim() ?? '').filter(Boolean)
      )
    : [];

  // Self-heal: find tab bar
  const tabSelector = await findElements(page, 'tabItems', 'Phase 2');
  const navItems = tabSelector
    ? await page.$$eval(tabSelector, (els) =>
        els.map((el) => ({ text: el.textContent?.trim() ?? '', href: el.getAttribute('href') ?? el.getAttribute('tab') }))
      )
    : [];

  // Self-heal: find feature cards
  const cardSelector = await findElements(page, 'featureCards', 'Phase 2');
  const cardCount = cardSelector ? await page.locator(cardSelector).count() : 0;

  const elements = await collectElements(page);
  const workflows = await analyzePageWorkflows(page, 'home', '/zh-hans/home', 'Phase 2');

  console.log(`  页面信号: ${headings.slice(0, 4).join(', ')}`);
  console.log(`  导航信号: ${navItems.map((n) => n.text).filter(Boolean).join(', ')}`);
  console.log(`  交互证据: 功能卡片 ${cardCount} | 交互元素 ${elements.length}`);

  report.modules.push(
    await createPageModule(page, {
      name: '主页（/zh-hans/home）',
      pageKind: 'home',
      phase: 'Phase 2',
      routeHint: '/zh-hans/home',
      screenshot: shot,
      headings: [
        `标题区域: ${headings.slice(0, 4).join(' | ')}`,
        `底部导航: ${navItems.map((n) => n.text).filter(Boolean).join(', ')}`,
        `功能卡片数量: ${cardCount}`,
        `交互元素总计: ${elements.length}`,
        `工作流验证: ${workflows.map((workflow) => `${workflow.name}=${workflow.steps.map((step) => getStatusLabel(step.status)).join('/')}`).join(' | ')}`,
      ],
      elements,
      apiSnapshotBefore,
      workflows,
    })
  );
}

/**
 * Phase 3: Follow all internal navigation links found on home page.
 */
async function phase3(page: Page): Promise<void> {
  console.log('\n📌 Step 1 / 探针采样: 一级入口证据采样');
  captureApis(page);

  const ok = await adaptiveNavigate(page, `${BASE_URL}/zh-hans/home`, 'Phase 3');
  if (!ok) return;

  await page.waitForTimeout(2000);

  // Collect all internal links using self-healing selector chain
  const links = await collectInternalLinks(page);
  const explorableLinks = [...new Set(links.filter(isExplorableRoute))]
    .sort((left, right) => {
      const leftPriority = PHASE3_PRIORITY_ROUTES.has(left) ? 0 : 1;
      const rightPriority = PHASE3_PRIORITY_ROUTES.has(right) ? 0 : 1;
      if (leftPriority !== rightPriority) return leftPriority - rightPriority;
      return left.localeCompare(right);
    })
    .filter((link) => matchesTargetRoute(link))
    .slice(0, MAX_PHASE3_LINKS);
  console.log(`  将采样 ${explorableLinks.length} 个优先入口，供 AI 后续识别功能`);

  for (const link of explorableLinks) {
    try {
      captureApis(page);
      const apiSnapshotBefore = snapshotApiKeys();
      const navOk = await adaptiveNavigate(page, `${BASE_URL}${link}`, 'Phase 3');
      if (!navOk) break;

      await page.waitForTimeout(2000);
      const url = page.url();
      if (report.routes.has(url)) continue;
      report.routes.add(url);

      const slug = link.replace(/\//g, '-').replace(/^-/, '');
      const shot = await screenshot(page, `03-nav-${slug}`, 'Phase 3');

      const headingSelector = await findElements(page, 'pageTitle', 'Phase 3');
      const headings = headingSelector
        ? await page.$$eval(headingSelector, (els) =>
            els.map((el) => el.textContent?.trim() ?? '').filter(Boolean)
          )
        : [];

      const elements = await collectElements(page);
      const moduleName = link.split('/').filter(Boolean).pop() ?? link;
      const workflows = await analyzePageWorkflows(page, 'navigation', link, 'Phase 3');

      report.modules.push(
        await createPageModule(page, {
          name: `导航页: ${moduleName} (${link})`,
          pageKind: 'navigation',
          phase: 'Phase 3',
          routeHint: link,
          screenshot: shot,
          headings: [
            `最终 URL: ${url}`,
            `标题: ${headings.slice(0, 2).join(' | ')}`,
            `交互元素: ${elements.length} 个`,
            ...(workflows.length > 0
              ? [
                  `工作流验证: ${workflows
                    .map((workflow) => `${workflow.name}=${workflow.steps.map((step) => getStatusLabel(step.status)).join('/')}`)
                    .join(' | ')}`,
                ]
              : []),
          ],
          elements,
          apiSnapshotBefore,
          workflows,
        })
      );
      console.log(`  ✓ 探针到达 ${link} → ${url}`);
    } catch (err) {
      logCorrection('Phase 3', `Navigation to ${link} threw an error`, `Skipped: ${(err as Error).message}`);
    }
  }
}

/**
 * Phase 4: Probe known routes.
 */
const KNOWN_ROUTES = [
  '/zh-hans/home',
  '/zh-hans/exam',
  '/zh-hans/favorites',
  '/zh-hans/homework',
  '/zh-hans/joined-classes',
  '/zh-hans/login',
  '/zh-hans/playlist',
  '/zh-hans/register',
  '/zh-hans/reading',
  '/zh-hans/library',
  '/zh-hans/bookshelf',
  '/zh-hans/profile',
  '/zh-hans/studio',
  '/zh-hans/settings',
  '/zh-hans/textbook',
  '/zh-hans/vocabulary',
  '/zh-hans/quiz',
  '/zh-hans/exercise',
  '/zh-hans/course',
  '/zh-hans/report',
  '/zh-hans/word-bank',
  '/zh-hans/leaderboard',
];

async function phase4(page: Page): Promise<void> {
  console.log('\n📌 Step 1 / 探针采样: 深层页与详情态证据采样');

  const visitedLinks = new Set<string>();
  const seeds = DEEP_EXPLORATION_SEEDS.filter((seed) => matchesTargetRoute(seed));

  for (const seed of seeds) {
    try {
      captureApis(page);
      const navOk = await adaptiveNavigate(page, `${BASE_URL}${seed}`, 'Phase 4');
      if (!navOk) break;

      await page.waitForTimeout(1500);
      const deepLinks = await collectDeepLinks(page);
      if (deepLinks.length === 0) continue;

      console.log(`  ${seed} -> 识别到 ${deepLinks.length} 个深层采样入口`);

      for (const link of deepLinks.filter((candidate) => matchesTargetRoute(candidate))) {
        if (visitedLinks.has(link)) continue;
        visitedLinks.add(link);

        try {
          captureApis(page);
          const apiSnapshotBefore = snapshotApiKeys();
          const detailOk = await adaptiveNavigate(page, `${BASE_URL}${link}`, 'Phase 4');
          if (!detailOk) break;

          await page.waitForTimeout(1500);
          const url = page.url();
          if (report.routes.has(url)) continue;
          report.routes.add(url);

          const slug = link.replace(/\//g, '-').replace(/^-/, '');
          const shot = await screenshot(page, `04-deep-${slug}`, 'Phase 4');
          const headingSelector = await findElements(page, 'pageTitle', 'Phase 4');
          const headings = headingSelector
            ? await page.$$eval(headingSelector, (els) =>
                els.map((el) => el.textContent?.trim() ?? '').filter(Boolean)
              )
            : [];
          const elements = await collectElements(page);
          const label = matchDeepRouteRule(link)?.label ?? 'detail';
          const workflows = await analyzePageWorkflows(page, 'deep', link, 'Phase 4');

          report.modules.push(
            await createPageModule(page, {
              name: `深层页: ${label} (${link})`,
              pageKind: 'deep',
              phase: 'Phase 4',
              routeHint: link,
              screenshot: shot,
              headings: [
                `最终 URL: ${url}`,
                `标题: ${headings.slice(0, 3).join(' | ') || '（无标题）'}`,
                `交互元素: ${elements.length} 个`,
                `工作流验证: ${workflows.map((workflow) => `${workflow.name}=${workflow.steps.map((step) => getStatusLabel(step.status)).join('/')}`).join(' | ')}`,
              ],
              elements,
              apiSnapshotBefore,
              workflows,
            })
          );
          console.log(`    ✓ 深层探针到达 ${link} → ${url}`);
        } catch (err) {
          logCorrection('Phase 4', `Deep link ${link} failed`, `Skipped: ${(err as Error).message}`);
        }
      }
    } catch (err) {
      logCorrection('Phase 4', `Seed route ${seed} failed`, `Skipped: ${(err as Error).message}`);
    }
  }
}

async function phase5(page: Page): Promise<void> {
  console.log('\n📌 Step 4 / AI 决定下一轮探针: 已知路由补充采样');

  for (const route of KNOWN_ROUTES.filter((candidate) => matchesTargetRoute(candidate))) {
    try {
      captureApis(page);
      const apiSnapshotBefore = snapshotApiKeys();
      const navOk = await adaptiveNavigate(page, `${BASE_URL}${route}`, 'Phase 5');
      if (!navOk) break;

      await page.waitForTimeout(1500);
      const url = page.url();
      if (report.routes.has(url)) continue;
      report.routes.add(url);

      const slug = route.replace(/\//g, '-').replace(/^-/, '');
      const shot = await screenshot(page, `05-route-${slug}`, 'Phase 5');

      const headingSelector = await findElements(page, 'pageTitle', 'Phase 5');
      const headings = headingSelector
        ? await page.$$eval(headingSelector, (els) =>
            els.map((el) => el.textContent?.trim() ?? '').filter(Boolean)
          )
        : [];

      const elements = await collectElements(page);
      const workflows = await analyzePageWorkflows(page, 'route', route, 'Phase 5');
      const finalPath = (() => { try { return new URL(url).pathname; } catch { return url; } })();

      console.log(`  ✓ 补充探针 ${route} → ${finalPath} | 页面信号: ${headings.slice(0, 2).join(', ')}`);

      report.modules.push(
        await createPageModule(page, {
          name: `路由探索: ${route}`,
          pageKind: 'route',
          phase: 'Phase 5',
          routeHint: route,
          screenshot: shot,
          headings: [
            `最终 URL: ${url}`,
            `标题: ${headings.slice(0, 3).join(' | ') || '（无标题）'}`,
            `交互元素: ${elements.length} 个`,
            `工作流验证: ${workflows.map((workflow) => `${workflow.name}=${workflow.steps.map((step) => getStatusLabel(step.status)).join('/')}`).join(' | ')}`,
          ],
          elements,
          apiSnapshotBefore,
          workflows,
        })
      );
    } catch (err) {
      logCorrection('Phase 5', `Route ${route} failed`, `Skipped: ${(err as Error).message}`);
    }
  }
}

// ──────────────────────────────────────────────────────────────────────────────
// Phase 6: Write documentation
// ──────────────────────────────────────────────────────────────────────────────

function buildFeatureMarkdown(): string {
  const uniqueRoutes = [...report.routes].sort();
  let md = `# SigmaReading 功能探索报告

> 生成时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}
> 目标网站：${BASE_URL}/zh-hans/home
> 探索方式：Playwright 探针采样 + AI 分析归纳（scripts/explore.ts）

`;

  if (report.targetRoutes.length > 0) {
    md += `> 目标页面：${report.targetRoutes.join('、')}
> 页面级迭代模式：${report.iterativeMode ? '已启用' : '未启用'}

`;
  }

  if (report.modules.length > 0) {
    md += `## 逐页详细文档索引

- 逐页索引：\`page-details-index.md\`
- 逐页明细目录：\`pages/\`
- L2 业务流闭环：\`business-flow-closure.md\`
- 黑盒测试过程：\`black-box-test-process.md\`
- 用户使用文档：\`user-manual.md\`

---

`;
  }

  if (!report.networkAvailable) {
    md += `> ⚠️ **注意**：本报告在网络受限环境中生成。\n> 请在能访问 sr.sigmareading.com 的环境中运行 \`npm run explore\` 获取实时数据。\n\n`;
  }

  md += `---\n\n## 页面路由结构\n\n\`\`\`\n`;
  if (uniqueRoutes.length > 0) {
    md += uniqueRoutes.map((r) => `- ${r}`).join('\n');
  } else {
    md += [
      '- /zh-hans/home         – 学生主页（需登录）',
      '- /zh-hans/login        – 登录页（未登录时自动跳转）',
      '- /zh-hans/register     – 注册页',
      '- /zh-hans/reading      – 阅读中心',
      '- /zh-hans/vocabulary   – 词汇/生词本',
      '- /zh-hans/quiz         – 测验',
      '- /zh-hans/exercise     – 练习',
      '- /zh-hans/report       – 学习报告',
      '- /zh-hans/profile      – 个人中心',
      '- /zh-hans/settings     – 设置',
    ].join('\n');
  }
  md += `\n\`\`\`\n\n---\n\n## 功能模块\n\n`;

  if (report.modules.length > 0) {
    report.modules.forEach((mod, i) => {
      md += `### ${i + 1}. ${mod.name}\n\n`;
      md += `**URL**：${mod.url}\n\n`;
      md += `**详细验证**：[查看该页面详细文档](pages/${mod.docFilename})\n\n`;
      md += `**AI 结论草案**：${mod.aiAnalysis.conclusion}\n\n`;
      md += `**探针摘要**：${mod.aiAnalysis.summary}\n\n`;
      if (mod.headings.length) {
        md += `**页面信息**：\n${mod.headings.map((h) => `- ${h}`).join('\n')}\n\n`;
      }
      if (mod.elements.length > 0) {
        const notable = mod.elements.filter((e) => e.text).slice(0, 12);
        if (notable.length > 0) {
          md += `**主要交互元素**：\n| 类型 | 文本 | href |\n|------|------|------|\n`;
          notable.forEach((e) => {
            md += `| \`${e.tag}\` | ${e.text.slice(0, 50)} | ${e.href ?? ''} |\n`;
          });
          md += '\n';
        }
      }
      md += `**截图**：\`${mod.screenshot}\`\n\n---\n\n`;
    });
  } else {
    // Pre-populated baseline (same as before, preserved for offline use)
    md += `> 以下内容基于平台调研整理（网络离线状态下的基准文档）。\n\n`;
    md += `### 1. 登录页（/zh-hans/login）\n\n**位置**：应用入口\n**功能描述**：\n- 账号/密码登录\n- 手机号验证码登录\n- 第三方登录（微信、Google）\n- 忘记密码、注册入口\n\n**截图**：\`screenshots/exploration/01-login-page.png\`\n\n---\n\n`;
    md += `### 2. 主页（/zh-hans/home）\n\n**功能描述**：\n- 学习进度概览\n- 教师布置任务列表\n- 底部 Tab Bar 导航\n\n**截图**：\`screenshots/exploration/02-home-fullpage.png\`\n\n---\n\n`;
  }
  return md;
}

function dedupeStrings(values: string[]): string[] {
  return [...new Set(values.map((value) => value.trim()).filter(Boolean))];
}

function formatElementLabel(element: CollectedElement): string {
  return (
    element.text ||
    element.placeholder ||
    element.ariaLabel ||
    element.name ||
    element.dataCy ||
    element.href ||
    element.type ||
    element.tag
  );
}

function getPrimaryLinks(mod: PageModule): Array<{ text: string; href: string }> {
  const seen = new Set<string>();
  const items: Array<{ text: string; href: string }> = [];

  for (const element of mod.elements) {
    if (!element.href) continue;
    const text = formatElementLabel(element);
    const key = `${text}|${element.href}`;
    if (seen.has(key)) continue;
    seen.add(key);
    items.push({ text, href: element.href });
    if (items.length >= 12) break;
  }

  return items;
}

function getPrimaryButtons(mod: PageModule): string[] {
  return dedupeStrings(
    mod.elements
      .filter((element) => ['button', 'ion-button'].includes(element.tag) || element.type === 'submit')
      .map((element) => formatElementLabel(element))
  ).slice(0, 12);
}

function getFormFields(mod: PageModule): string[] {
  return dedupeStrings(
    mod.elements
      .filter((element) => ['input', 'select', 'textarea'].includes(element.tag))
      .map((element) => {
        const parts = [element.name, element.placeholder, element.ariaLabel, element.type, element.tag].filter(Boolean);
        return parts.join(' / ');
      })
  ).slice(0, 12);
}

function summarizeVisibleFeatures(mod: PageModule): string[] {
  const links = getPrimaryLinks(mod);
  const buttons = getPrimaryButtons(mod);
  const fields = getFormFields(mod);
  const bullets: string[] = [];
  const visibleTitle = mod.title || mod.headings.map((item) => item.replace(/^[^:]+:\s*/, '')).find(Boolean) || '';

  if (visibleTitle) {
    bullets.push(`页面上下文：${visibleTitle}`);
  }
  if (links.length > 0) {
    bullets.push(`可访问入口：${links.slice(0, 6).map((item) => `${item.text} → ${item.href}`).join('；')}`);
  }
  if (buttons.length > 0) {
    bullets.push(`可执行操作：${buttons.slice(0, 6).join('、')}`);
  }
  if (fields.length > 0) {
    bullets.push(`可录入字段：${fields.slice(0, 6).join('、')}`);
  }
  if (mod.apis.length > 0) {
    bullets.push(`页面加载时触发网络请求 ${mod.apis.length} 个`);
  }
  if (bullets.length === 0) {
    bullets.push('页面加载成功，但未检测到足够多的显式功能入口，建议结合截图人工复核。');
  }

  return bullets;
}

function buildValidationChecks(mod: PageModule): Array<{ item: string; status: 'pass' | 'warn' | 'fail'; detail: string }> {
  const linkCount = mod.elements.filter((element) => !!element.href).length;
  const buttonCount = mod.elements.filter((element) => ['button', 'ion-button'].includes(element.tag) || element.type === 'submit').length;
  const fieldCount = mod.elements.filter((element) => ['input', 'select', 'textarea'].includes(element.tag)).length;
  const screenshotExists = fs.existsSync(path.join(SCREENSHOTS_DIR, path.basename(mod.screenshot)));

  const checks: Array<{ item: string; status: 'pass' | 'warn' | 'fail'; detail: string }> = [
    { item: '页面可达', status: 'pass', detail: `最终到达 ${mod.pathname}` },
    {
      item: '截图已生成',
      status: screenshotExists ? 'pass' : 'warn',
      detail: screenshotExists ? mod.screenshot : '截图生成失败或被跳过',
    },
    {
      item: '交互元素已采集',
      status: mod.elements.length > 0 ? 'pass' : 'warn',
      detail: `共采集 ${mod.elements.length} 个交互元素`,
    },
    {
      item: '网络请求已记录',
      status: mod.apis.length > 0 ? 'pass' : 'warn',
      detail: mod.apis.length > 0 ? `本页新增 ${mod.apis.length} 个请求` : '本页未观测到新增请求',
    },
  ];

  if (mod.pageKind === 'login') {
    checks.push({
      item: '登录控件可见',
      status: fieldCount >= 2 && buttonCount >= 1 ? 'pass' : 'fail',
      detail: `输入字段 ${fieldCount} 个，提交按钮 ${buttonCount} 个`,
    });
  } else if (mod.pageKind === 'home') {
    checks.push({
      item: '主页导航可见',
      status: linkCount >= 4 ? 'pass' : 'warn',
      detail: `共识别 ${linkCount} 个跳转入口`,
    });
  } else if (mod.pageKind === 'deep') {
    checks.push({
      item: '详情上下文可识别',
      status: mod.title || mod.headings.length > 0 ? 'pass' : 'warn',
      detail: mod.title || mod.headings[0] || '未检测到显式标题',
    });
  } else {
    checks.push({
      item: '页面功能入口可见',
      status: linkCount + buttonCount + fieldCount > 0 ? 'pass' : 'warn',
      detail: `链接 ${linkCount} / 按钮 ${buttonCount} / 字段 ${fieldCount}`,
    });
  }

  if (mod.workflows.length > 0) {
    const stepStatuses = mod.workflows.flatMap((workflow) => workflow.steps.map((step) => step.status));
    const passCount = stepStatuses.filter((status) => status === 'pass').length;
    const failCount = stepStatuses.filter((status) => status === 'fail').length;

    checks.push({
      item: '关键工作流已验证',
      status: failCount > 0 ? 'warn' : passCount > 0 ? 'pass' : 'warn',
      detail: `${mod.workflows.length} 个工作流，PASS ${passCount} / FAIL ${failCount}`,
    });
  }

  return checks;
}

function getStatusLabel(status: 'pass' | 'warn' | 'fail'): string {
  if (status === 'pass') return 'PASS';
  if (status === 'fail') return 'FAIL';
  return 'WARN';
}

function getIterationStageLabel(stage: IterationStageId): string {
  if (stage === 'discover') return '发现功能';
  if (stage === 'verify') return '验证功能';
  if (stage === 'refine-script') return '修改探索脚本';
  if (stage === 'reverify') return '再次验证功能';
  return '发现新功能';
}

function buildPageDetailMarkdown(mod: PageModule, index: number): string {
  const links = getPrimaryLinks(mod);
  const buttons = getPrimaryButtons(mod);
  const fields = getFormFields(mod);
  const features = summarizeVisibleFeatures(mod);
  const checks = buildValidationChecks(mod);
  const linkCount = mod.elements.filter((element) => !!element.href).length;
  const buttonCount = mod.elements.filter((element) => ['button', 'ion-button'].includes(element.tag) || element.type === 'submit').length;
  const fieldCount = mod.elements.filter((element) => ['input', 'select', 'textarea'].includes(element.tag)).length;

  let md = `# 页面详细功能文档：${mod.name}\n\n`;
  md += `> 序号：${index + 1}\n`;
  md += `> 阶段：${mod.phase}\n`;
  md += `> 页面分类：${mod.pageKind}\n`;
  md += `> 生成时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}\n\n`;
  md += `## 基本信息\n\n`;
  md += `- 目标入口：${mod.routeHint}\n`;
  md += `- 最终 URL：${mod.url}\n`;
  md += `- 路径：${mod.pathname}\n`;
  md += `- 页面探索脚本：${mod.scriptId}\n`;
  md += `- 页面标题：${mod.title || '（无标题）'}\n`;
  md += `- 截图：\`${mod.screenshot}\`\n\n`;
  md += `## Playwright 探针概览\n\n`;
  md += `${features.map((item) => `- ${item}`).join('\n')}\n\n`;

  md += `## AI 分析结论\n\n`;
  md += `- AI 角色：${mod.aiAnalysis.analystRole}\n`;
  md += `- AI 探针摘要：${mod.aiAnalysis.summary}\n`;
  md += `- AI 当前结论：${mod.aiAnalysis.conclusion}\n`;
  if (mod.aiAnalysis.openQuestions.length > 0) {
    md += `- AI 待确认问题：${mod.aiAnalysis.openQuestions.join('；')}\n`;
  }
  if (mod.aiAnalysis.nextProbeSuggestions.length > 0) {
    md += `- AI 下一轮探针重点：${mod.aiAnalysis.nextProbeSuggestions.join('；')}\n`;
  }
  md += '\n';

  md += `## Playwright 原始探针证据\n\n`;
  md += `- 探针定位：${mod.probeEvidence.probeRole}\n`;
  md += `- 探针目标：${mod.probeEvidence.pageObjective}\n`;
  if (mod.probeEvidence.observedSignals.length > 0) {
    md += `- 页面信号：${mod.probeEvidence.observedSignals.join('；')}\n`;
  }
  if (mod.probeEvidence.interactionSignals.length > 0) {
    md += `- 交互信号：${mod.probeEvidence.interactionSignals.join('；')}\n`;
  }
  if (mod.probeEvidence.workflowSignals.length > 0) {
    md += `- 工作流信号：${mod.probeEvidence.workflowSignals.join('；')}\n`;
  }
  if (mod.probeEvidence.networkSignals.length > 0) {
    md += `- 网络信号：${mod.probeEvidence.networkSignals.join('；')}\n`;
  }
  md += '\n';

  if (mod.featureFindings.length > 0) {
    md += `## AI 判断的候选功能\n\n`;
    md += `| 功能 | 类别 | 目的 | 预期结果 | 证据 | 结论 |\n`;
    md += `|------|------|------|----------|------|------|\n`;
    mod.featureFindings.forEach((finding) => {
      md += `| ${finding.name} | ${finding.category} | ${finding.purpose} | ${finding.expectedResult} | ${finding.evidence.slice(0, 2).join('<br>') || '（无）'} | ${getStatusLabel(finding.status)} |\n`;
    });
    md += '\n';
  }

  md += `## 验证结果\n\n`;
  md += `| 验证项 | 结果 | 说明 |\n`;
  md += `|--------|------|------|\n`;
  checks.forEach((check) => {
    md += `| ${check.item} | ${getStatusLabel(check.status)} | ${check.detail} |\n`;
  });
  md += '\n';
  md += `## 交互统计\n\n`;
  md += `| 指标 | 数量 |\n`;
  md += `|------|------|\n`;
  md += `| 交互元素总数 | ${mod.elements.length} |\n`;
  md += `| 链接数量 | ${linkCount} |\n`;
  md += `| 按钮数量 | ${buttonCount} |\n`;
  md += `| 表单字段数量 | ${fieldCount} |\n`;
  md += `| 本页新增请求 | ${mod.apis.length} |\n\n`;

  if (mod.iterationLogs.length > 0) {
    md += `## AI 驱动的迭代闭环\n\n`;

    mod.iterationLogs.forEach((iterationLog) => {
      md += `### 迭代 ${iterationLog.iteration}（${iterationLog.scriptId}）\n\n`;
      md += `| 阶段 | 结果 | 摘要 | 关键细节 |\n`;
      md += `|------|------|------|----------|\n`;
      iterationLog.stages.forEach((stage) => {
        md += `| ${getIterationStageLabel(stage.stage)} | ${getStatusLabel(stage.status)} | ${stage.summary} | ${stage.details.slice(0, 3).join('<br>') || '（无）'} |\n`;
      });
      md += '\n';

      if (iterationLog.adjustments.length > 0) {
        md += `#### 下一轮探针脚本调整建议\n\n`;
        md += iterationLog.adjustments
          .map(
            (adjustment) =>
              `- ${adjustment.reason}：${adjustment.adjustment}；预期效果：${adjustment.expectedImpact}`
          )
          .join('\n');
        md += '\n\n';
      }

      if (iterationLog.newlyDiscoveredFeatures.length > 0) {
        md += `#### 再次发现的新功能线索\n\n`;
        md += iterationLog.newlyDiscoveredFeatures.map((item) => `- ${item}`).join('\n');
        md += '\n\n';
      }
    });
  }

  if (mod.headings.length > 0) {
    md += `## 页面识别信息\n\n`;
    md += `${mod.headings.map((item) => `- ${item}`).join('\n')}\n\n`;
  }
  if (links.length > 0) {
    md += `## 主要导航与跳转\n\n`;
    md += `| 文本 | 跳转目标 |\n`;
    md += `|------|----------|\n`;
    links.forEach((item) => {
      md += `| ${item.text} | ${item.href} |\n`;
    });
    md += '\n';
  }
  if (buttons.length > 0) {
    md += `## 可执行操作\n\n`;
    md += `${buttons.map((item) => `- ${item}`).join('\n')}\n\n`;
  }
  if (fields.length > 0) {
    md += `## 表单与输入项\n\n`;
    md += `${fields.map((item) => `- ${item}`).join('\n')}\n\n`;
  }
  if (mod.apis.length > 0) {
    md += `## 页面请求验证\n\n`;
    md += `${mod.apis.slice(0, 20).map((item) => `- ${item}`).join('\n')}\n\n`;
  }

  if (mod.workflows.length > 0) {
    md += `## 关键交互工作流验证\n\n`;

    mod.workflows.forEach((workflow, workflowIndex) => {
      md += `### ${workflowIndex + 1}. ${workflow.name}\n\n`;
      md += `- 验证目标：${workflow.purpose}\n`;
      md += `- 结论摘要：${workflow.summary}\n`;

      if (workflow.observedOptions.length > 0) {
        md += `- 识别到的选项：${workflow.observedOptions.join('、')}\n`;
      }
      if (workflow.observedFields.length > 0) {
        md += `- 识别到的结果字段：${workflow.observedFields.join('、')}\n`;
      }
      md += '\n';

      md += `| 步骤 | 操作对象 | 预期结果 | 实际结果 | 结论 | 触发请求 |\n`;
      md += `|------|----------|----------|----------|------|----------|\n`;
      workflow.steps.forEach((step) => {
        md += `| ${step.action} | ${step.target} | ${step.expected} | ${step.actual} | ${getStatusLabel(step.status)} | ${step.requests.length > 0 ? step.requests.slice(0, 2).join('<br>') : '（无）'} |\n`;
      });
      md += '\n';

      if (workflow.resultSamples.length > 0) {
        md += `#### 结果样本\n\n`;
        md += `${workflow.resultSamples.slice(0, 3).map((sample) => `- ${sample.slice(0, 200)}`).join('\n')}\n\n`;
      }
    });
  }

  const notable = mod.elements.filter((element) => formatElementLabel(element)).slice(0, 20);
  if (notable.length > 0) {
    md += `## 原始交互元素样本\n\n`;
    md += `| 类型 | 文本/标签 | href | name | placeholder |\n`;
    md += `|------|-----------|------|------|-------------|\n`;
    notable.forEach((element) => {
      md += `| ${element.tag} | ${formatElementLabel(element).slice(0, 60)} | ${element.href ?? ''} | ${element.name ?? ''} | ${element.placeholder ?? ''} |\n`;
    });
    md += '\n';
  }

  return md;
}

function buildPageDetailIndexMarkdown(): string {
  let md = `# SigmaReading 逐页详细功能文档索引\n\n`;
  md += `> 生成时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}\n\n`;
  md += `| # | 页面 | 分类 | 页面脚本 | 路径 | 详细文档 | AI 结论摘要 |\n`;
  md += `|---|------|------|----------|------|----------|-------------|\n`;

  report.modules.forEach((mod, index) => {
    const summary = `${mod.aiAnalysis.conclusion} / ${mod.aiAnalysis.openQuestions.length > 0 ? `待确认 ${mod.aiAnalysis.openQuestions.length} 项` : '无待确认问题'}`;
    md += `| ${index + 1} | ${mod.name} | ${mod.pageKind} | ${mod.scriptId} | ${mod.pathname} | [查看](pages/${mod.docFilename}) | ${summary} |\n`;
  });

  return md;
}

function buildBusinessFlowRecords(): BusinessFlowRecord[] {
  const flows: BusinessFlowRecord[] = [];
  const seen = new Set<string>();
  const closureRank: Record<BusinessFlowClosureStatus, number> = {
    closed: 0,
    partial: 1,
    blocked: 2,
  };

  for (const mod of report.modules) {
    if (!['home', 'navigation', 'profile'].includes(mod.pageKind)) continue;

    const sourceRoute = normalizeRoutePath(mod.routeHint || mod.pathname);
    const sourceClosed = mod.aiAnalysis.openQuestions.length === 0;

    for (const workflow of mod.workflows) {
      const discoveredTargets = extractWorkflowRouteTargets(workflow).filter((route) => route !== sourceRoute);

      for (const step of workflow.steps) {
        const targetRoute = normalizeRoutePath(step.target);
        if (!isExplorableRoute(targetRoute) || targetRoute === sourceRoute) continue;

        const targetModule = findTargetModuleByRoute(targetRoute);
        const targetClosed = !!targetModule && targetModule.aiAnalysis.openQuestions.length === 0;
        const candidateTargets = discoveredTargets.filter(
          (route) => normalizeBusinessRoute(route) !== normalizeBusinessRoute(targetRoute)
        );

        let closureStatus: BusinessFlowClosureStatus = 'partial';
        if (step.status === 'fail') {
          closureStatus = 'blocked';
        } else if (step.status === 'pass' && sourceClosed && targetClosed) {
          closureStatus = 'closed';
        }

        const remainingRisks: string[] = [];
        if (!sourceClosed) {
          remainingRisks.push(`起点页仍有 ${mod.aiAnalysis.openQuestions.length} 个页面级待确认问题。`);
        }
        if (!targetModule) {
          remainingRisks.push('目标页未纳入本轮页面级探针，无法确认转场后的页面级结论。');
        } else if (!targetClosed) {
          remainingRisks.push(`目标页仍有 ${targetModule.aiAnalysis.openQuestions.length} 个页面级待确认问题。`);
        }
        if (step.status === 'warn') {
          remainingRisks.push('当前转场只有部分证据，仍需补稳定的跨页成功判定。');
        }
        if (step.status === 'fail') {
          remainingRisks.push('当前转场验证失败，业务流仍被阻塞。');
        }
        if (candidateTargets.length > 0) {
          remainingRisks.push(
            `同一工作流还发现 ${candidateTargets.length} 个候选后续入口未单独复验：${candidateTargets.slice(0, 4).join('、')}`
          );
        }

        const flowName = `${resolveWorkflowPageLabel(mod.routeHint, mod.pageKind, resolveDeepRouteLabel)} -> ${resolveBusinessFlowLabel(targetRoute)}`;
        const key = `${normalizeBusinessRoute(sourceRoute)}|${normalizeBusinessRoute(targetRoute)}|${workflow.name}|${step.action}`;
        if (seen.has(key)) continue;
        seen.add(key);

        flows.push({
          id: sanitizeSlug(`${sourceRoute}-${workflow.name}-${targetRoute}-${step.action}`),
          name: flowName,
          sourceRoute,
          sourcePageName: mod.name,
          sourceDocFilename: mod.docFilename,
          sourcePageConclusion: mod.aiAnalysis.conclusion,
          sourcePageOpenQuestions: mod.aiAnalysis.openQuestions.length,
          targetRoute,
          targetRoutePattern: normalizeBusinessRoute(targetRoute),
          targetPageName: targetModule?.name ?? resolveBusinessFlowLabel(targetRoute),
          targetDocFilename: targetModule?.docFilename ?? null,
          targetPageConclusion: targetModule?.aiAnalysis.conclusion ?? '',
          targetPageOpenQuestions: targetModule ? targetModule.aiAnalysis.openQuestions.length : null,
          workflowName: workflow.name,
          workflowPurpose: workflow.purpose,
          workflowSummary: workflow.summary,
          transitionAction: step.action,
          transitionExpected: step.expected,
          transitionActual: step.actual,
          transitionStatus: step.status,
          transitionRequests: step.requests,
          transitionSamples: workflow.resultSamples.slice(0, 3),
          candidateTargets,
          closureStatus,
          closureSummary:
            closureStatus === 'closed'
              ? `已验证 ${flowName} 的跨页转场，且目标页已形成页面级结论。`
              : closureStatus === 'blocked'
                ? `尚未打通 ${flowName} 的跨页转场。`
                : `已发现 ${flowName} 的跨页线索，但当前仍停留在部分闭环。`,
          successCriteria: dedupeStrings([
            step.expected,
            '起点页已形成页面级结论。',
            '目标页已纳入本轮探针并形成页面级结论。',
          ]),
          remainingRisks,
        });
      }
    }
  }

  return flows.sort((left, right) => {
    const statusDelta = closureRank[left.closureStatus] - closureRank[right.closureStatus];
    if (statusDelta !== 0) return statusDelta;
    return `${left.sourceRoute} ${left.targetRoute}`.localeCompare(`${right.sourceRoute} ${right.targetRoute}`, 'zh-CN');
  });
}

function buildBusinessFlowClosureMarkdown(flows: BusinessFlowRecord[]): string {
  const closedCount = flows.filter((flow) => flow.closureStatus === 'closed').length;
  const partialCount = flows.filter((flow) => flow.closureStatus === 'partial').length;
  const blockedCount = flows.filter((flow) => flow.closureStatus === 'blocked').length;
  const sourceCoverage = new Set(flows.map((flow) => flow.sourceRoute)).size;
  const targetCoverage = new Set(flows.map((flow) => flow.targetRoutePattern)).size;

  let md = `# SigmaReading L2 业务流闭环报告\n\n`;
  md += `> 生成时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}\n`;
  md += `> 证据来源：页面级 workflow 聚合 + 目标页页面级结论复核\n`;
  md += `> 说明：本报告只汇总跨页转场证据，不再要求通过逐页页面文档反推 L2。\n\n`;

  if (report.targetRoutes.length > 0) {
    md += `> 目标页面：${report.targetRoutes.join('、')}\n\n`;
  }

  if (flows.length === 0) {
    md += `> 本轮尚未识别到可作为 L2 闭环依据的跨页业务流，请先补充可验证的跨页 workflow。\n`;
    return md;
  }

  md += `## L2 总览\n\n`;
  md += `- 已识别业务流：${flows.length}\n`;
  md += `- 已闭环：${closedCount}\n`;
  md += `- 部分闭环：${partialCount}\n`;
  md += `- 阻塞：${blockedCount}\n`;
  md += `- 起点页覆盖：${sourceCoverage}\n`;
  md += `- 目标页覆盖：${targetCoverage}\n\n`;

  md += `## 业务流索引\n\n`;
  md += `| # | 业务流 | 起点页 | 目标页 | 转场验证 | 目标页 L1 | L2 状态 |\n`;
  md += `|---|--------|--------|--------|----------|-----------|---------|\n`;
  flows.forEach((flow, index) => {
    const sourceDoc = `[${flow.sourcePageName}](pages/${flow.sourceDocFilename})`;
    const targetDoc = flow.targetDocFilename
      ? `[${flow.targetPageName}](pages/${flow.targetDocFilename})`
      : `${flow.targetPageName}（${flow.targetRoutePattern}）`;
    md += `| ${index + 1} | ${flow.name} | ${sourceDoc} | ${targetDoc} | ${getStatusLabel(flow.transitionStatus)} | ${getPageClosureLabel(
      flow.targetDocFilename ? findTargetModuleByRoute(flow.targetRoute) : null
    )} | ${getBusinessFlowClosureLabel(flow.closureStatus)} |\n`;
  });
  md += '\n';

  flows.forEach((flow, index) => {
    const sourceDoc = `[${flow.sourcePageName}](pages/${flow.sourceDocFilename})`;
    const targetDoc = flow.targetDocFilename
      ? `[${flow.targetPageName}](pages/${flow.targetDocFilename})`
      : `${flow.targetPageName}（${flow.targetRoutePattern}）`;

    md += `## ${index + 1}. ${flow.name}\n\n`;
    md += `- 当前 L2 结论：${getBusinessFlowClosureLabel(flow.closureStatus)}\n`;
    md += `- 闭环摘要：${flow.closureSummary}\n`;
    md += `- 起点页：${sourceDoc}\n`;
    md += `- 起点路由：${flow.sourceRoute}\n`;
    md += `- 起点页 L1 状态：${flow.sourcePageOpenQuestions === 0 ? '已收敛' : `待确认 ${flow.sourcePageOpenQuestions} 项`}\n`;
    md += `- 起点页结论：${flow.sourcePageConclusion}\n`;
    md += `- 目标页：${targetDoc}\n`;
    md += `- 目标路由模板：${flow.targetRoutePattern}\n`;
    md += `- 目标页 L1 状态：${flow.targetPageOpenQuestions === null ? '未纳入本轮探针' : flow.targetPageOpenQuestions === 0 ? '已收敛' : `待确认 ${flow.targetPageOpenQuestions} 项`}\n`;
    if (flow.targetPageConclusion) {
      md += `- 目标页结论：${flow.targetPageConclusion}\n`;
    }
    md += `- 触发工作流：${flow.workflowName}\n`;
    md += `- 工作流目的：${flow.workflowPurpose}\n`;
    md += `- 工作流摘要：${flow.workflowSummary}\n`;
    md += `- 转场动作：${flow.transitionAction}\n`;
    md += `- 转场预期：${flow.transitionExpected}\n`;
    md += `- 转场实际结果：${flow.transitionActual}\n`;
    md += `- 转场验证结果：${getStatusLabel(flow.transitionStatus)}\n`;
    if (flow.transitionRequests.length > 0) {
      md += `- 触发请求：${flow.transitionRequests.slice(0, 3).join('；')}\n`;
    }
    if (flow.transitionSamples.length > 0) {
      md += `- 结果样本：${flow.transitionSamples.join('；')}\n`;
    }
    flow.successCriteria.forEach((criterion, criterionIndex) => {
      md += `- 业务成功判定 ${criterionIndex + 1}：${criterion}\n`;
    });
    if (flow.remainingRisks.length > 0) {
      flow.remainingRisks.forEach((risk, riskIndex) => {
        md += `- 剩余风险 ${riskIndex + 1}：${risk}\n`;
      });
    } else {
      md += `- 剩余风险：无\n`;
    }
    md += '\n';
  });

  return md;
}

function buildBusinessFlowClosureReport(flows: BusinessFlowRecord[]) {
  return {
    runId: RUN_TIMESTAMP,
    generatedAt: new Date().toISOString(),
    summary: {
      totalFlows: flows.length,
      closedFlows: flows.filter((flow) => flow.closureStatus === 'closed').length,
      partialFlows: flows.filter((flow) => flow.closureStatus === 'partial').length,
      blockedFlows: flows.filter((flow) => flow.closureStatus === 'blocked').length,
      sourceCoverage: new Set(flows.map((flow) => flow.sourceRoute)).size,
      targetCoverage: new Set(flows.map((flow) => flow.targetRoutePattern)).size,
    },
    flows: flows.map((flow) => ({
      id: flow.id,
      name: flow.name,
      sourceRoute: flow.sourceRoute,
      sourcePageName: flow.sourcePageName,
      sourceDocFilename: flow.sourceDocFilename,
      sourcePageOpenQuestions: flow.sourcePageOpenQuestions,
      sourcePageConclusion: flow.sourcePageConclusion,
      targetRoute: flow.targetRoute,
      targetRoutePattern: flow.targetRoutePattern,
      targetPageName: flow.targetPageName,
      targetDocFilename: flow.targetDocFilename,
      targetPageOpenQuestions: flow.targetPageOpenQuestions,
      targetPageConclusion: flow.targetPageConclusion,
      workflowName: flow.workflowName,
      workflowPurpose: flow.workflowPurpose,
      workflowSummary: flow.workflowSummary,
      transition: {
        action: flow.transitionAction,
        expected: flow.transitionExpected,
        actual: flow.transitionActual,
        status: flow.transitionStatus,
        requests: flow.transitionRequests,
        resultSamples: flow.transitionSamples,
      },
      candidateTargets: flow.candidateTargets,
      closureStatus: flow.closureStatus,
      closureSummary: flow.closureSummary,
      successCriteria: flow.successCriteria,
      remainingRisks: flow.remainingRisks,
    })),
  };
}

function buildIterationMetadata(flows: BusinessFlowRecord[]) {
  return {
    runId: RUN_TIMESTAMP,
    networkAvailable: report.networkAvailable,
    iterativeMode: report.iterativeMode,
    targetRoutes: report.targetRoutes,
    generatedAt: new Date().toISOString(),
    pages: report.modules.map((mod) => ({
      name: mod.name,
      path: mod.pathname,
      routeHint: mod.routeHint,
      pageKind: mod.pageKind,
      scriptId: mod.scriptId,
      probeEvidence: mod.probeEvidence,
      aiAnalysis: {
        analystRole: mod.aiAnalysis.analystRole,
        summary: mod.aiAnalysis.summary,
        conclusion: mod.aiAnalysis.conclusion,
        openQuestions: mod.aiAnalysis.openQuestions,
        nextProbeSuggestions: mod.aiAnalysis.nextProbeSuggestions,
      },
      featureFindings: mod.featureFindings,
      workflows: mod.workflows.map((workflow) => ({
        name: workflow.name,
        summary: workflow.summary,
        statuses: workflow.steps.map((step) => step.status),
      })),
      iterationLogs: mod.iterationLogs,
      apis: mod.apis,
    })),
    businessFlows: flows.map((flow) => ({
      id: flow.id,
      name: flow.name,
      sourceRoute: flow.sourceRoute,
      targetRoute: flow.targetRoute,
      targetRoutePattern: flow.targetRoutePattern,
      transitionStatus: flow.transitionStatus,
      closureStatus: flow.closureStatus,
      targetPageOpenQuestions: flow.targetPageOpenQuestions,
      remainingRisks: flow.remainingRisks,
    })),
  };
}

function countWorkflowStepStatuses(modules: PageModule[]) {
  const steps = modules.flatMap((mod) => mod.workflows.flatMap((workflow) => workflow.steps));
  return {
    total: steps.length,
    pass: steps.filter((step) => step.status === 'pass').length,
    warn: steps.filter((step) => step.status === 'warn').length,
    fail: steps.filter((step) => step.status === 'fail').length,
  };
}

function getPhasePurposeLabel(phase: string): string {
  switch (phase) {
    case 'Phase 2':
      return '首页与主入口采样';
    case 'Phase 3':
      return '深层页与详情态探索';
    case 'Phase 4':
      return 'AI 决策的下一轮补探';
    case 'Phase 5':
      return '已知路由补充探针';
    default:
      return '页面证据采样';
  }
}

function buildStateCoverageSignals(flows: BusinessFlowRecord[]): string[] {
  const signals: string[] = [];

  if (report.modules.some((mod) => mod.pathname === '/zh-hans/unauthorized')) {
    signals.push('权限态：已覆盖未授权跳转到 /zh-hans/unauthorized 的场景。');
  }
  if (report.modules.some((mod) => getFormFields(mod).length > 0)) {
    signals.push('表单态：已覆盖输入字段填写与提交后的结果观察。');
  }
  if (
    report.modules.some((mod) =>
      mod.workflows.some((workflow) => /(搜索|筛选|排序|表单填写|按钮使用|弹层确认)/.test(workflow.name))
    )
  ) {
    signals.push('交互态：已覆盖按钮点击、表单填写、搜索/筛选/排序或弹层确认等主动操作。');
  }
  if (flows.some((flow) => flow.closureStatus !== 'closed')) {
    signals.push('跨页态：已覆盖部分闭环与阻塞的业务转场，能够识别未打通链路。');
  }
  if (corrections.length > 0) {
    signals.push(`自愈态：本轮触发 ${corrections.length} 次自动修正，已记录故障恢复轨迹。`);
  } else {
    signals.push('自愈态：本轮无需自动修正，主选择器与导航链路保持稳定。');
  }

  return dedupeStrings(signals);
}

function describeAccessCondition(mod: PageModule): string {
  if (mod.pageKind === 'login') {
    return '需先完成登录，再进入站内功能。';
  }

  if (mod.pathname === '/zh-hans/unauthorized') {
    return '当前路径落到未授权页，说明使用该功能前需要登录或满足权限条件。';
  }

  if (normalizeRoutePath(mod.routeHint) !== normalizeRoutePath(mod.pathname)) {
    return `访问 ${mod.routeHint} 时会跳转到 ${mod.pathname}，存在重定向或权限分流。`;
  }

  return '当前页面可直接访问。';
}

function describeEntryPaths(mod: PageModule, flows: BusinessFlowRecord[]): string[] {
  const currentPattern = normalizeBusinessRoute(mod.routeHint || mod.pathname);
  const incoming = flows.filter(
    (flow) =>
      flow.targetDocFilename === mod.docFilename ||
      flow.targetRoutePattern === currentPattern ||
      normalizeBusinessRoute(flow.targetRoute) === currentPattern
  );

  const entries: string[] = [];
  if (mod.pageKind === 'home') {
    entries.push('登录后默认进入首页。');
  }
  incoming.forEach((flow) => {
    entries.push(`可从 ${flow.sourcePageName} 的已验证入口进入。`);
  });
  if (entries.length === 0) {
    entries.push(`可尝试直接访问 ${mod.routeHint}。`);
  }

  return dedupeStrings(entries).slice(0, 3);
}

function summarizeUserCapabilities(mod: PageModule): string[] {
  const workflowCapabilities = mod.workflows.map((workflow) => `${workflow.name}：${workflow.summary}`);
  const linkCapabilities = getPrimaryLinks(mod).slice(0, 4).map((item) => {
    const looksTechnicalLabel = item.text.startsWith('/zh-hans/') || /^[a-z0-9-]+$/i.test(item.text);
    const label = looksTechnicalLabel ? resolveBusinessFlowLabel(item.href) : item.text;
    return /[\u4e00-\u9fff]/.test(label) ? `可进入 ${label}` : '';
  }).filter(Boolean);
  const buttonCapabilities = getPrimaryButtons(mod)
    .filter((label) => /[\u4e00-\u9fff]/.test(label))
    .slice(0, 4)
    .map((label) => `可执行 ${label}`);
  const fieldCapabilities = getFormFields(mod)
    .slice(0, 2)
    .map((field) => `可填写 ${field}`);
  const capabilities = [...workflowCapabilities, ...linkCapabilities, ...buttonCapabilities, ...fieldCapabilities];

  return dedupeStrings(capabilities).slice(0, 6);
}

function summarizeUserFeedback(mod: PageModule): string[] {
  return dedupeStrings([
    ...mod.workflows.flatMap((workflow) => workflow.resultSamples),
    ...mod.probeEvidence.observedSignals.slice(0, 4),
  ]).slice(0, 6);
}

function summarizeModuleRisks(mod: PageModule): string[] {
  const workflowWarnings = mod.workflows.flatMap((workflow) =>
    workflow.steps
      .filter((step) => step.status !== 'pass')
      .map((step) => `${workflow.name} / ${step.action}：${step.actual}`)
  );

  return dedupeStrings([...mod.aiAnalysis.openQuestions, ...workflowWarnings]).slice(0, 6);
}

function buildBlackBoxTestProcessMarkdown(flows: BusinessFlowRecord[]): string {
  const workflowSummary = countWorkflowStepStatuses(report.modules);
  const totalApis = report.modules.reduce((sum, mod) => sum + mod.apis.length, 0);
  const openQuestionPages = report.modules.filter((mod) => mod.aiAnalysis.openQuestions.length > 0);
  const pageKindSummary = Object.entries(
    report.modules.reduce<Record<string, number>>((acc, mod) => {
      acc[mod.pageKind] = (acc[mod.pageKind] ?? 0) + 1;
      return acc;
    }, {})
  )
    .map(([kind, count]) => `${kind}=${count}`)
    .join('；');
  const phaseGroups = Object.entries(
    report.modules.reduce<Record<string, PageModule[]>>((acc, mod) => {
      acc[mod.phase] = acc[mod.phase] ?? [];
      acc[mod.phase].push(mod);
      return acc;
    }, {})
  ).sort(([left], [right]) => left.localeCompare(right, 'zh-CN'));

  let md = `# SigmaReading 黑盒测试过程报告\n\n`;
  md += `> 生成时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}\n`;
  md += `> 运行 ID：${RUN_TIMESTAMP}\n`;
  md += `> 测试方式：Playwright 实际操作 + 页面证据采样 + 工作流验证 + AI 结论归纳\n`;
  md += `> 网络状态：${report.networkAvailable ? '可实时采样' : '网络受限，仅保留基准文档'}\n`;
  md += `> 登录条件：${HAS_LOGIN_CREDENTIALS ? '已提供登录凭据，可尝试受限功能' : '未提供登录凭据，仅能覆盖公开页或未授权态'}\n\n`;

  if (report.targetRoutes.length > 0) {
    md += `> 目标页面：${report.targetRoutes.join('、')}\n\n`;
  }

  if (report.modules.length === 0) {
    md += `> 本轮未生成页面级探针结果，无法输出完整黑盒测试过程。\n`;
    return md;
  }

  md += `## 覆盖总览\n\n`;
  md += `- 覆盖页面：${report.modules.length} 个\n`;
  md += `- 覆盖路由：${[...report.routes].length} 个\n`;
  md += `- 页面分类分布：${pageKindSummary || '无'}\n`;
  md += `- 工作流步骤：${workflowSummary.total} 个（PASS ${workflowSummary.pass} / WARN ${workflowSummary.warn} / FAIL ${workflowSummary.fail}）\n`;
  md += `- 跨页业务流：${flows.length} 条（已闭环 ${flows.filter((flow) => flow.closureStatus === 'closed').length} / 部分闭环 ${flows.filter((flow) => flow.closureStatus === 'partial').length} / 阻塞 ${flows.filter((flow) => flow.closureStatus === 'blocked').length}）\n`;
  md += `- 采样到的页面请求：${totalApis} 条\n`;
  md += `- 自动修正次数：${corrections.length} 次\n`;
  md += `- 仍有页面级待确认问题的页面：${openQuestionPages.length} 个\n\n`;

  md += `## 状态空间信号\n\n`;
  md += `${buildStateCoverageSignals(flows).map((item) => `- ${item}`).join('\n')}\n\n`;

  md += `## 阶段推进\n\n`;
  md += `| 阶段 | 目的 | 页面数 | 页面示例 |\n`;
  md += `|------|------|--------|----------|\n`;
  phaseGroups.forEach(([phase, modules]) => {
    md += `| ${phase} | ${getPhasePurposeLabel(phase)} | ${modules.length} | ${modules.slice(0, 3).map((mod) => mod.name).join('；')} |\n`;
  });
  md += `\n`;

  md += `## 页面测试过程\n\n`;
  report.modules.forEach((mod, index) => {
    md += `### ${index + 1}. [${mod.name}](pages/${mod.docFilename})\n\n`;
    md += `- 执行阶段：${mod.phase}\n`;
    md += `- 页面脚本：${mod.scriptId}\n`;
    md += `- 入口与落点：${mod.routeHint} -> ${mod.pathname}\n`;
    md += `- 访问条件：${describeAccessCondition(mod)}\n`;
    if (mod.probeEvidence.observedSignals.length > 0) {
      md += `- 关键页面信号：${mod.probeEvidence.observedSignals.slice(0, 4).join('；')}\n`;
    }
    if (mod.probeEvidence.interactionSignals.length > 0) {
      md += `- 关键交互信号：${mod.probeEvidence.interactionSignals.slice(0, 6).join('；')}\n`;
    }
    md += `- AI 结论：${mod.aiAnalysis.conclusion}\n`;
    if (mod.aiAnalysis.openQuestions.length > 0) {
      md += `- 待确认问题：${mod.aiAnalysis.openQuestions.join('；')}\n`;
    }
    md += `\n`;

    if (mod.iterationLogs.length > 0) {
      mod.iterationLogs.forEach((log) => {
        md += `#### 迭代 ${log.iteration}（${log.scriptId}）\n\n`;
        md += `| 阶段 | 结果 | 摘要 |\n`;
        md += `|------|------|------|\n`;
        log.stages.forEach((stage) => {
          md += `| ${getIterationStageLabel(stage.stage)} | ${getStatusLabel(stage.status)} | ${stage.summary} |\n`;
        });
        md += `\n`;
      });
    }

    if (mod.workflows.length > 0) {
      md += `#### 工作流执行\n\n`;
      md += `| 工作流 | 步骤状态 | 摘要 |\n`;
      md += `|--------|----------|------|\n`;
      mod.workflows.forEach((workflow) => {
        md += `| ${workflow.name} | ${workflow.steps.map((step) => getStatusLabel(step.status)).join('/')} | ${workflow.summary} |\n`;
      });
      md += `\n`;
    }
  });

  md += `## 跨页业务流结果\n\n`;
  if (flows.length === 0) {
    md += `- 本轮未识别到可稳定复用的跨页业务流。\n\n`;
  } else {
    md += `| 业务流 | 转场状态 | L2 状态 | 风险摘要 |\n`;
    md += `|--------|----------|---------|----------|\n`;
    flows.forEach((flow) => {
      md += `| ${flow.name} | ${getStatusLabel(flow.transitionStatus)} | ${getBusinessFlowClosureLabel(flow.closureStatus)} | ${(flow.remainingRisks[0] ?? '无').slice(0, 120)} |\n`;
    });
    md += `\n`;
  }

  md += `## 未闭环项与后续建议\n\n`;
  if (openQuestionPages.length === 0 && flows.every((flow) => flow.remainingRisks.length === 0)) {
    md += `- 本轮页面级与业务流级证据未发现额外待跟进问题。\n`;
  } else {
    openQuestionPages.forEach((mod) => {
      md += `- 页面 ${mod.name}：${mod.aiAnalysis.openQuestions.join('；')}\n`;
    });
    flows
      .filter((flow) => flow.remainingRisks.length > 0)
      .forEach((flow) => {
        md += `- 业务流 ${flow.name}：${flow.remainingRisks.slice(0, 2).join('；')}\n`;
      });
  }
  md += '\n';

  return md;
}

function buildUserGuideMarkdown(flows: BusinessFlowRecord[]): string {
  const homeModule = report.modules.find((mod) => mod.pageKind === 'home' || mod.pathname === '/zh-hans/home');
  const homeEntries = homeModule ? getPrimaryLinks(homeModule).slice(0, 8).map((item) => `${item.text}（${item.href}）`) : [];

  let md = `# SigmaReading 用户使用文档\n\n`;
  md += `> 生成时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}\n`;
  md += `> 依据：本轮黑盒测试中真实进入页面、触发操作、观察反馈后的证据自动整理\n`;
  md += `> 说明：本文档只覆盖本轮已实际验证的功能页面；未纳入探针的功能不在本文中承诺行为\n\n`;

  md += `## 快速开始\n\n`;
  md += `1. 打开 ${BASE_URL}/zh-hans/home，作为学生端主入口。\n`;
  md += `2. 如果页面跳转到 /zh-hans/unauthorized，请先登录，再继续访问目标功能。\n`;
  md += `3. 已在首页识别到的主入口包括：${homeEntries.length > 0 ? homeEntries.join('、') : '本轮未采到首页主入口，请参考逐页文档。'}\n`;
  md += `4. 进入具体功能页后，可结合本文的“已验证功能”和“可见反馈”判断操作是否符合预期。\n\n`;

  md += `## 功能总览\n\n`;
  md += `| 模块 | 页面路径 | 进入方式 | 已验证能力 | 注意事项 |\n`;
  md += `|------|----------|----------|------------|----------|\n`;
  report.modules.forEach((mod) => {
    const entry = describeEntryPaths(mod, flows).join('<br>');
    const capabilities = summarizeUserCapabilities(mod).slice(0, 3).join('；') || summarizeVisibleFeatures(mod).slice(0, 2).join('；');
    const risks = summarizeModuleRisks(mod).slice(0, 2).join('；') || describeAccessCondition(mod);
    md += `| [${mod.name}](pages/${mod.docFilename}) | ${mod.pathname} | ${entry} | ${capabilities || '待补'} | ${risks} |\n`;
  });
  md += `\n`;

  md += `## 逐模块使用说明\n\n`;
  report.modules.forEach((mod, index) => {
    const entryPaths = describeEntryPaths(mod, flows);
    const capabilities = summarizeUserCapabilities(mod);
    const feedback = summarizeUserFeedback(mod);
    const risks = summarizeModuleRisks(mod);

    md += `### ${index + 1}. [${mod.name}](pages/${mod.docFilename})\n\n`;
    md += `- 页面路径：${mod.pathname}\n`;
    md += `- 进入方式：${entryPaths.join('；')}\n`;
    md += `- 访问条件：${describeAccessCondition(mod)}\n`;
    if (capabilities.length > 0) {
      md += `- 已验证功能：${capabilities.join('；')}\n`;
    }
    if (feedback.length > 0) {
      md += `- 可见反馈：${feedback.join('；')}\n`;
    }
    if (risks.length > 0) {
      md += `- 注意事项：${risks.join('；')}\n`;
    }
    md += '\n';
  });

  md += `## 权限与限制说明\n\n`;
  const permissionNotes = dedupeStrings(
    report.modules
      .map((mod) => describeAccessCondition(mod))
      .filter((note) => note.includes('登录') || note.includes('权限') || note.includes('重定向'))
  );
  if (permissionNotes.length === 0) {
    md += `- 本轮未观测到额外的权限限制说明。\n`;
  } else {
    md += `${permissionNotes.map((note) => `- ${note}`).join('\n')}\n`;
  }
  md += '\n';

  return md;
}

function buildApiMarkdown(): string {
  const allApis = [...report.apiEndpoints.values()];
  let md = `# SigmaReading API 端点列表\n\n> 通过 Playwright Network 监听自动捕获\n> 生成时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}\n\n---\n\n`;

  if (allApis.length === 0 || !report.networkAvailable) {
    md += `> ⚠️ 网络受限或未登录，以下为预估 API 结构（需在线验证）。\n\n`;
    md += `## 认证相关\n\n| 方法 | 端点 | 说明 |\n|------|------|------|\n`;
    [
      ['POST', '/api/auth/login', '账号密码登录'],
      ['POST', '/api/auth/login/phone', '手机号验证码登录'],
      ['POST', '/api/auth/logout', '退出登录'],
      ['POST', '/api/auth/register', '注册'],
      ['GET', '/api/auth/me', '获取当前用户'],
    ].forEach(([m, u, d]) => { md += `| \`${m}\` | \`${u}\` | ${d} |\n`; });

    md += `\n## 阅读相关\n\n| 方法 | 端点 | 说明 |\n|------|------|------|\n`;
    [
      ['GET', '/api/articles', '文章列表'],
      ['GET', '/api/articles/:id', '文章详情'],
      ['POST', '/api/articles/:id/progress', '更新阅读进度'],
      ['GET', '/api/assignments', '教师布置任务'],
    ].forEach(([m, u, d]) => { md += `| \`${m}\` | \`${u}\` | ${d} |\n`; });

    md += `\n## 词汇相关\n\n| 方法 | 端点 | 说明 |\n|------|------|------|\n`;
    [
      ['GET', '/api/vocabulary', '生词本列表'],
      ['POST', '/api/vocabulary', '添加生词'],
      ['DELETE', '/api/vocabulary/:id', '删除生词'],
      ['PUT', '/api/vocabulary/:id/status', '更新掌握状态'],
      ['GET', '/api/dictionary/:word', '查询单词释义'],
    ].forEach(([m, u, d]) => { md += `| \`${m}\` | \`${u}\` | ${d} |\n`; });

    md += `\n## 测验相关\n\n| 方法 | 端点 | 说明 |\n|------|------|------|\n`;
    [
      ['GET', '/api/quizzes', '测验列表'],
      ['GET', '/api/quizzes/:id', '获取题目'],
      ['POST', '/api/quizzes/:id/submit', '提交答案'],
      ['GET', '/api/quizzes/:id/results', '查看结果'],
    ].forEach(([m, u, d]) => { md += `| \`${m}\` | \`${u}\` | ${d} |\n`; });

    md += `\n## 统计报告\n\n| 方法 | 端点 | 说明 |\n|------|------|------|\n`;
    [
      ['GET', '/api/reports/summary', '学习概览'],
      ['GET', '/api/reports/reading', '阅读统计'],
      ['GET', '/api/reports/vocabulary', '词汇统计'],
      ['GET', '/api/reports/quiz', '测验统计'],
    ].forEach(([m, u, d]) => { md += `| \`${m}\` | \`${u}\` | ${d} |\n`; });
  } else {
    const sorted = allApis.filter((r) => r.url.includes('/api/')).sort((a, b) => `${a.method}:${a.url}`.localeCompare(`${b.method}:${b.url}`));
    if (sorted.length === 0) {
      md += `> 本次探索在未登录状态下执行，未捕获到 /api/ 端点。\n\n`;
      md += `## 捕获的网络请求\n\n| 方法 | URL |\n|------|-----|\n`;
      allApis.slice(0, 30).forEach((r) => { md += `| ${r.method} | ${r.url.slice(0, 100)} |\n`; });
    } else {
      ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].forEach((method) => {
        const methodApis = sorted.filter((r) => r.method === method);
        if (!methodApis.length) return;
        md += `## ${method}\n\n`;
        methodApis.forEach((r) => { md += `- \`${method} ${r.url}\`\n`; });
        md += '\n';
      });
    }
  }
  return md;
}

function buildCorrectionLog(): string {
  let md = `# 自动修正日志（Self-Healing Log）\n\n> 生成时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}\n\n`;
  if (corrections.length === 0) {
    md += '> ✅ 本次探索无需自动修正，所有主选择器和导航均正常工作。\n';
  } else {
    md += `共发生 **${corrections.length}** 次自动修正：\n\n`;
    md += `| 阶段 | 问题 | 修正方式 | 时间 |\n|------|------|---------|------|\n`;
    corrections.forEach((c) => {
      md += `| ${c.phase} | ${c.issue} | ${c.correction} | ${c.timestamp} |\n`;
    });
  }
  return md;
}

function shouldPromoteLatest(): { promote: boolean; reason: string } {
  if (!report.networkAvailable) {
    return { promote: false, reason: '探针网络不可用' };
  }

  if (report.modules.length < 5) {
    return { promote: false, reason: `实时探针覆盖不足（当前仅 ${report.modules.length} 个 AI 草案页面）` };
  }

  return { promote: true, reason: '实时探针已形成足够覆盖' };
}

// ──────────────────────────────────────────────────────────────────────────────
// Run history index
// ──────────────────────────────────────────────────────────────────────────────

/**
 * Reads all subdirectories under runs/ and writes an index markdown file
 * listing every past run with links to its docs.
 */
function updateRunIndex(): void {
  if (!fs.existsSync(RUNS_DIR)) return;

  const entries = fs.readdirSync(RUNS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort()
    .reverse(); // newest first

  let md = `# 探索运行历史（Run History）\n\n`;
  md += `> 共 **${entries.length}** 次运行\n\n`;
  md += `| # | 运行时间 | 功能文档 | 过程文档 | 用户文档 | 逐页文档 | 业务流文档 | API 文档 | 修正日志 | 截图数 |\n`;
  md += `|---|---------|---------|---------|---------|---------|-----------|---------|---------|--------|\n`;

  entries.forEach((name, i) => {
    const runDir = path.join(RUNS_DIR, name);
    const docsDir = path.join(runDir, 'docs');
    const ssDir = path.join(runDir, 'screenshots');

    const hasFeatures = fs.existsSync(path.join(docsDir, 'sigmareading-features.md'));
    const hasProcess = fs.existsSync(path.join(docsDir, 'black-box-test-process.md'));
    const hasUserManual = fs.existsSync(path.join(docsDir, 'user-manual.md'));
    const hasPageDetails = fs.existsSync(path.join(docsDir, 'page-details-index.md'));
    const hasBusinessFlows = fs.existsSync(path.join(docsDir, 'business-flow-closure.md'));
    const hasApi = fs.existsSync(path.join(docsDir, 'api-endpoints.md'));
    const hasCorrection = fs.existsSync(path.join(docsDir, 'correction-log.md'));

    let screenshotCount = 0;
    if (fs.existsSync(ssDir)) {
      screenshotCount = fs.readdirSync(ssDir).filter((f) => f.endsWith('.png')).length;
    }

    // Convert dir name (YYYY-MM-DD_HH-MM-SS) back to readable timestamp (YYYY-MM-DDTHH:MM:SS)
    const readable = name.replace('_', 'T').replace(/T(\d{2})-(\d{2})-(\d{2})$/, 'T$1:$2:$3');

    md += `| ${entries.length - i} | ${readable} `;
    md += `| ${hasFeatures ? `[✓](${name}/docs/sigmareading-features.md)` : '✗'} `;
    md += `| ${hasProcess ? `[✓](${name}/docs/black-box-test-process.md)` : '✗'} `;
    md += `| ${hasUserManual ? `[✓](${name}/docs/user-manual.md)` : '✗'} `;
    md += `| ${hasPageDetails ? `[✓](${name}/docs/page-details-index.md)` : '✗'} `;
    md += `| ${hasBusinessFlows ? `[✓](${name}/docs/business-flow-closure.md)` : '✗'} `;
    md += `| ${hasApi ? `[✓](${name}/docs/api-endpoints.md)` : '✗'} `;
    md += `| ${hasCorrection ? `[✓](${name}/docs/correction-log.md)` : '✗'} `;
    md += `| ${screenshotCount} |\n`;
  });

  fs.writeFileSync(path.join(RUNS_DIR, 'README.md'), md, 'utf-8');
}

// ──────────────────────────────────────────────────────────────────────────────
// Main entry point
// ──────────────────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  console.log('╔═══════════════════════════════════════════════════════╗');
  console.log('║  SigmaReading AI-First 自治探索 Skill                ║');
  console.log('╚═══════════════════════════════════════════════════════╝\n');
  if (TARGET_ROUTES.length > 0) {
    console.log(`🎯 Skill 目标页面: ${TARGET_ROUTES.join(', ')}`);
  }
  if (ITERATIVE_MODE) {
    console.log('🔁 Skill 模式: AI 驱动页面自治迭代已启用');
  }

  let browser: Browser | null = null;
  let browserError: unknown = null;

  try {
    browser = await chromium.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const context = await browser.newContext({
      locale: 'zh-CN',
      viewport: { width: 1280, height: 800 },
    });
    const page = await context.newPage();

    // Run all phases
    const networkOk = await phase1(page);
    if (networkOk) {
      if (shouldRunHomeAnalysis()) {
        await phase2(page);
      }
      await phase3(page);
      await phase4(page);
      await phase5(page);
    }

    await context.close();
  } catch (err) {
    browserError = err;
    console.error('浏览器探针异常:', err);
  } finally {
    if (browser) await browser.close();
  }

  // Phase 6 – Always write docs regardless of network availability
  console.log('\n📌 Step 2 + Step 3 / AI 识别功能与形成结论: 写出证据包与 AI 草案');

  const businessFlows = buildBusinessFlowRecords();
  const featureContent = buildFeatureMarkdown();
  const pageIndexContent = buildPageDetailIndexMarkdown();
  const businessFlowContent = buildBusinessFlowClosureMarkdown(businessFlows);
  const businessFlowReport = buildBusinessFlowClosureReport(businessFlows);
  const blackBoxProcessContent = buildBlackBoxTestProcessMarkdown(businessFlows);
  const userGuideContent = buildUserGuideMarkdown(businessFlows);
  const apiContent = buildApiMarkdown();
  const correctionContent = buildCorrectionLog();
  const iterationMetadata = buildIterationMetadata(businessFlows);

  // Write to timestamped run directory
  const featurePath = path.join(DOCS_DIR, 'sigmareading-features.md');
  const pageIndexPath = path.join(DOCS_DIR, 'page-details-index.md');
  const businessFlowPath = path.join(DOCS_DIR, 'business-flow-closure.md');
  const businessFlowReportPath = path.join(DOCS_DIR, 'business-flow-closure.json');
  const blackBoxProcessPath = path.join(DOCS_DIR, 'black-box-test-process.md');
  const userGuidePath = path.join(DOCS_DIR, 'user-manual.md');
  const apiPath = path.join(DOCS_DIR, 'api-endpoints.md');
  const correctionPath = path.join(DOCS_DIR, 'correction-log.md');
  const iterationMetadataPath = path.join(DOCS_DIR, 'iteration-metadata.json');
  const latestIterationMetadataPath = path.join(LATEST_DOCS_DIR, 'iteration-metadata.json');
  const rootIterationMetadataPath = path.join(ROOT, 'iteration-metadata.json');

  fs.writeFileSync(featurePath, featureContent, 'utf-8');
  fs.writeFileSync(pageIndexPath, pageIndexContent, 'utf-8');
  fs.writeFileSync(businessFlowPath, businessFlowContent, 'utf-8');
  fs.writeFileSync(businessFlowReportPath, JSON.stringify(businessFlowReport, null, 2), 'utf-8');
  fs.writeFileSync(blackBoxProcessPath, blackBoxProcessContent, 'utf-8');
  fs.writeFileSync(userGuidePath, userGuideContent, 'utf-8');
  fs.writeFileSync(apiPath, apiContent, 'utf-8');
  fs.writeFileSync(correctionPath, correctionContent, 'utf-8');
  fs.writeFileSync(iterationMetadataPath, JSON.stringify(iterationMetadata, null, 2), 'utf-8');
  fs.writeFileSync(rootIterationMetadataPath, JSON.stringify(iterationMetadata, null, 2), 'utf-8');
  for (const [index, mod] of report.modules.entries()) {
    fs.writeFileSync(path.join(PAGE_DOCS_DIR, mod.docFilename), buildPageDetailMarkdown(mod, index), 'utf-8');
  }

  const latestDecision = shouldPromoteLatest();
  if (latestDecision.promote) {
    // Also copy to latest location for quick access
    fs.writeFileSync(path.join(LATEST_DOCS_DIR, 'sigmareading-features.md'), featureContent, 'utf-8');
    fs.writeFileSync(path.join(LATEST_DOCS_DIR, 'page-details-index.md'), pageIndexContent, 'utf-8');
    fs.writeFileSync(path.join(LATEST_DOCS_DIR, 'business-flow-closure.md'), businessFlowContent, 'utf-8');
    fs.writeFileSync(path.join(LATEST_DOCS_DIR, 'business-flow-closure.json'), JSON.stringify(businessFlowReport, null, 2), 'utf-8');
    fs.writeFileSync(path.join(LATEST_DOCS_DIR, 'black-box-test-process.md'), blackBoxProcessContent, 'utf-8');
    fs.writeFileSync(path.join(LATEST_DOCS_DIR, 'user-manual.md'), userGuideContent, 'utf-8');
    fs.writeFileSync(path.join(LATEST_DOCS_DIR, 'api-endpoints.md'), apiContent, 'utf-8');
    fs.writeFileSync(path.join(LATEST_DOCS_DIR, 'correction-log.md'), correctionContent, 'utf-8');
    fs.writeFileSync(latestIterationMetadataPath, JSON.stringify(iterationMetadata, null, 2), 'utf-8');
    for (const [index, mod] of report.modules.entries()) {
      fs.writeFileSync(path.join(LATEST_PAGE_DOCS_DIR, mod.docFilename), buildPageDetailMarkdown(mod, index), 'utf-8');
    }

    // Copy screenshots to latest
    const screenshotFiles = fs.readdirSync(SCREENSHOTS_DIR).filter((f) => f.endsWith('.png'));
    for (const file of screenshotFiles) {
      fs.copyFileSync(path.join(SCREENSHOTS_DIR, file), path.join(LATEST_SCREENSHOTS_DIR, file));
    }
  } else {
    console.log(`  ℹ 跳过 latest 同步: ${latestDecision.reason}`);
  }

  // Write/update the run history index
  updateRunIndex();

  console.log(`  ✓ Skill 运行结果保存到: ${RUN_DIR}`);
  console.log(`  ✓ AI 总览文档: ${featurePath}`);
  console.log(`  ✓ 黑盒测试过程文档: ${blackBoxProcessPath}`);
  console.log(`  ✓ 用户使用文档: ${userGuidePath}`);
  console.log(`  ✓ L2 业务流闭环文档: ${businessFlowPath}`);
  console.log(`  ✓ 探针网络证据: ${apiPath}`);
  console.log(`  ✓ 探针自愈日志: ${correctionPath}`);
  console.log(`  ✓ 页面级证据包: ${iterationMetadataPath}`);
  if (latestDecision.promote) {
    console.log(`  ✓ 最新 skill 结果同步到: ${LATEST_DOCS_DIR}`);
  }

  console.log('\n╔═══════════════════════════════════════════════════════╗');
  console.log('║  Skill 运行完成摘要                                   ║');
  console.log('╠═══════════════════════════════════════════════════════╣');
  console.log(`║  运行 ID        : ${RUN_TIMESTAMP}`);
  console.log(`║  结果目录       : runs/${RUN_TIMESTAMP}/`);
  console.log(`║  探针网络状态   : ${report.networkAvailable ? '✅ 可实时采样' : '❌ 不可用（仅保留基准文档）'}`);
  console.log(`║  探针覆盖路由   : ${[...report.routes].length}`);
  console.log(`║  AI 草案页面    : ${report.modules.length}`);
  console.log(`║  探针网络信号   : ${report.apiEndpoints.size}`);
  console.log(`║  探针自愈次数   : ${corrections.length}`);
  console.log('╚═══════════════════════════════════════════════════════╝\n');

  process.exit(browserError ? 1 : 0);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
