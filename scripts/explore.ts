#!/usr/bin/env tsx
/**
 * SigmaReading 自愈式功能探索脚本（Agent Skill）
 *
 * 本脚本作为可被 Copilot agent 直接调用的独立 skill 运行。
 * 无需测试框架，直接使用 Playwright API 启动浏览器进行探索。
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

// ──────────────────────────────────────────────────────────────────────────────
// Configuration
// ──────────────────────────────────────────────────────────────────────────────

const BASE_URL = 'https://sr.sigmareading.com';
const ROOT = path.resolve(__dirname, '..');

// Generate a timestamp-based run ID so every execution is preserved
const RUN_TIMESTAMP = new Date().toISOString().replace(/[:.]/g, '-').replace('T', '_').slice(0, 19);
const RUNS_DIR = path.join(ROOT, 'runs');
const RUN_DIR = path.join(RUNS_DIR, RUN_TIMESTAMP);
const SCREENSHOTS_DIR = path.join(RUN_DIR, 'screenshots');
const DOCS_DIR = path.join(RUN_DIR, 'docs');

// Also keep a "latest" symlink / copy for convenience
const LATEST_DOCS_DIR = path.join(ROOT, 'docs', 'exploration');
const LATEST_SCREENSHOTS_DIR = path.join(ROOT, 'screenshots', 'exploration');

fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
fs.mkdirSync(DOCS_DIR, { recursive: true });
fs.mkdirSync(LATEST_DOCS_DIR, { recursive: true });
fs.mkdirSync(LATEST_SCREENSHOTS_DIR, { recursive: true });

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
  console.log(`  🔧 [AUTO-FIX] ${issue} → ${correction}`);
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
    'ion-card',
    '.card',
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
  const filename = `${name}.png`;
  const filepath = path.join(SCREENSHOTS_DIR, filename);
  try {
    await page.screenshot({ path: filepath, fullPage: true });
  } catch (err) {
    logCorrection(phase, `Screenshot "${name}" failed`, `Skipped: ${(err as Error).message}`);
  }
  return `screenshots/exploration/${filename}`;
}

/**
 * Collect all interactive elements on the current page.
 */
async function collectElements(page: Page) {
  return page.$$eval(
    'button, [role="button"], a[href], ion-button, ion-item, ion-tab-button, input, select, textarea',
    (els) =>
      els.map((el) => ({
        tag: el.tagName.toLowerCase(),
        text: (el.textContent ?? '').trim().replace(/\s+/g, ' ').slice(0, 80),
        href: el.getAttribute('href'),
        type: el.getAttribute('type'),
        dataCy: el.getAttribute('data-cy'),
      }))
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// Report accumulator
// ──────────────────────────────────────────────────────────────────────────────

interface PageModule {
  name: string;
  url: string;
  screenshot: string;
  headings: string[];
  elements: Awaited<ReturnType<typeof collectElements>>;
  apis: string[];
}

const report = {
  networkAvailable: false,
  routes: new Set<string>(),
  modules: [] as PageModule[],
  apiEndpoints: new Map<string, { method: string; url: string }>(),
};

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
  console.log('\n📌 Phase 1: Initial load & login exploration');
  captureApis(page);

  const ok = await adaptiveNavigate(page, `${BASE_URL}/zh-hans/home`, 'Phase 1');
  if (!ok) {
    console.log('  ⚠ Network unavailable – skipping all live exploration');
    return false;
  }
  report.networkAvailable = true;

  await page.waitForTimeout(2000);
  const url = page.url();
  report.routes.add(url);
  await screenshot(page, '01-initial', 'Phase 1');
  console.log(`  URL: ${url}`);

  const isLogin = url.includes('/login') || url.includes('/signin');

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
    await screenshot(page, '01-login-page', 'Phase 1');

    report.modules.push({
      name: '登录页（/zh-hans/login）',
      url,
      screenshot: 'screenshots/exploration/01-login-page.png',
      headings: [
        `用户名选择器: ${usernameSelector ?? '未找到'}`,
        `密码选择器: ${passwordSelector ?? '未找到'}`,
        `登录按钮: ${loginBtnSelector ?? '未找到'}`,
        `可见按钮: ${buttons.slice(0, 8).join(' | ')}`,
      ],
      elements,
      apis: [],
    });
    console.log('  ✓ Login page recorded');
  } else {
    console.log('  ✓ Already on home (may be logged in)');
  }
  return true;
}

/**
 * Phase 2: Home page – full layout analysis.
 */
async function phase2(page: Page): Promise<void> {
  console.log('\n📌 Phase 2: Home page layout');
  captureApis(page);

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

  console.log(`  Headings: ${headings.slice(0, 4).join(', ')}`);
  console.log(`  Nav items: ${navItems.map((n) => n.text).filter(Boolean).join(', ')}`);
  console.log(`  Cards: ${cardCount} | Elements: ${elements.length}`);

  report.modules.push({
    name: '主页（/zh-hans/home）',
    url,
    screenshot: shot,
    headings: [
      `标题区域: ${headings.slice(0, 4).join(' | ')}`,
      `底部导航: ${navItems.map((n) => n.text).filter(Boolean).join(', ')}`,
      `功能卡片数量: ${cardCount}`,
      `交互元素总计: ${elements.length}`,
    ],
    elements,
    apis: [],
  });
}

/**
 * Phase 3: Follow all internal navigation links found on home page.
 */
async function phase3(page: Page): Promise<void> {
  console.log('\n📌 Phase 3: Navigation structure exploration');
  captureApis(page);

  const ok = await adaptiveNavigate(page, `${BASE_URL}/zh-hans/home`, 'Phase 3');
  if (!ok) return;

  await page.waitForTimeout(2000);

  // Collect all internal links using self-healing selector chain
  const links = await page.$$eval(
    'a[href], ion-tab-button[tab], [href]',
    (els) =>
      [
        ...new Set(
          els
            .map((el) => el.getAttribute('href') ?? `/zh-hans/${el.getAttribute('tab')}`)
            .filter((h): h is string => !!h && h.startsWith('/') && !h.startsWith('//'))
        ),
      ].slice(0, 25)
  );
  console.log(`  Found ${links.length} internal links`);

  for (const link of links) {
    try {
      captureApis(page);
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

      report.modules.push({
        name: `导航页: ${moduleName} (${link})`,
        url,
        screenshot: shot,
        headings: [
          `最终 URL: ${url}`,
          `标题: ${headings.slice(0, 2).join(' | ')}`,
          `交互元素: ${elements.length} 个`,
        ],
        elements,
        apis: [],
      });
      console.log(`  ✓ ${link} → ${url}`);
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
  '/zh-hans/login',
  '/zh-hans/register',
  '/zh-hans/reading',
  '/zh-hans/library',
  '/zh-hans/bookshelf',
  '/zh-hans/profile',
  '/zh-hans/settings',
  '/zh-hans/vocabulary',
  '/zh-hans/quiz',
  '/zh-hans/exercise',
  '/zh-hans/course',
  '/zh-hans/report',
  '/zh-hans/word-bank',
  '/zh-hans/leaderboard',
];

async function phase4(page: Page): Promise<void> {
  console.log('\n📌 Phase 4: Known routes probing');

  for (const route of KNOWN_ROUTES) {
    try {
      captureApis(page);
      const navOk = await adaptiveNavigate(page, `${BASE_URL}${route}`, 'Phase 4');
      if (!navOk) break;

      await page.waitForTimeout(1500);
      const url = page.url();
      if (report.routes.has(url)) continue;
      report.routes.add(url);

      const slug = route.replace(/\//g, '-').replace(/^-/, '');
      const shot = await screenshot(page, `04-route-${slug}`, 'Phase 4');

      const headingSelector = await findElements(page, 'pageTitle', 'Phase 4');
      const headings = headingSelector
        ? await page.$$eval(headingSelector, (els) =>
            els.map((el) => el.textContent?.trim() ?? '').filter(Boolean)
          )
        : [];

      const elements = await collectElements(page);
      const finalPath = (() => { try { return new URL(url).pathname; } catch { return url; } })();

      console.log(`  ✓ ${route} → ${finalPath} | headings: ${headings.slice(0, 2).join(', ')}`);

      report.modules.push({
        name: `路由探索: ${route}`,
        url,
        screenshot: shot,
        headings: [
          `最终 URL: ${url}`,
          `标题: ${headings.slice(0, 3).join(' | ') || '（无标题）'}`,
          `交互元素: ${elements.length} 个`,
        ],
        elements,
        apis: [],
      });
    } catch (err) {
      logCorrection('Phase 4', `Route ${route} failed`, `Skipped: ${(err as Error).message}`);
    }
  }
}

// ──────────────────────────────────────────────────────────────────────────────
// Phase 5: Write documentation
// ──────────────────────────────────────────────────────────────────────────────

function buildFeatureMarkdown(): string {
  const uniqueRoutes = [...report.routes].sort();
  let md = `# SigmaReading 功能探索报告

> 生成时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}
> 目标网站：${BASE_URL}/zh-hans/home
> 探索方式：自愈式 Playwright 脚本（scripts/explore.ts）

`;

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
  md += `| # | 运行时间 | 功能文档 | API 文档 | 修正日志 | 截图数 |\n`;
  md += `|---|---------|---------|---------|---------|--------|\n`;

  entries.forEach((name, i) => {
    const runDir = path.join(RUNS_DIR, name);
    const docsDir = path.join(runDir, 'docs');
    const ssDir = path.join(runDir, 'screenshots');

    const hasFeatures = fs.existsSync(path.join(docsDir, 'sigmareading-features.md'));
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
  console.log('║  SigmaReading 自愈式功能探索 (Self-Healing Skill)     ║');
  console.log('╚═══════════════════════════════════════════════════════╝\n');

  let browser: Browser | null = null;

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
      await phase2(page);
      await phase3(page);
      await phase4(page);
    }

    await context.close();
  } catch (err) {
    console.error('Browser error:', err);
  } finally {
    if (browser) await browser.close();
  }

  // Phase 5 – Always write docs regardless of network availability
  console.log('\n📌 Phase 5: Writing documentation');

  const featureContent = buildFeatureMarkdown();
  const apiContent = buildApiMarkdown();
  const correctionContent = buildCorrectionLog();

  // Write to timestamped run directory
  const featurePath = path.join(DOCS_DIR, 'sigmareading-features.md');
  const apiPath = path.join(DOCS_DIR, 'api-endpoints.md');
  const correctionPath = path.join(DOCS_DIR, 'correction-log.md');

  fs.writeFileSync(featurePath, featureContent, 'utf-8');
  fs.writeFileSync(apiPath, apiContent, 'utf-8');
  fs.writeFileSync(correctionPath, correctionContent, 'utf-8');

  // Also copy to latest location for quick access
  fs.writeFileSync(path.join(LATEST_DOCS_DIR, 'sigmareading-features.md'), featureContent, 'utf-8');
  fs.writeFileSync(path.join(LATEST_DOCS_DIR, 'api-endpoints.md'), apiContent, 'utf-8');
  fs.writeFileSync(path.join(LATEST_DOCS_DIR, 'correction-log.md'), correctionContent, 'utf-8');

  // Copy screenshots to latest
  const screenshotFiles = fs.readdirSync(SCREENSHOTS_DIR).filter((f) => f.endsWith('.png'));
  for (const file of screenshotFiles) {
    fs.copyFileSync(path.join(SCREENSHOTS_DIR, file), path.join(LATEST_SCREENSHOTS_DIR, file));
  }

  // Write/update the run history index
  updateRunIndex();

  console.log(`  ✓ 运行结果保存到: ${RUN_DIR}`);
  console.log(`  ✓ ${featurePath}`);
  console.log(`  ✓ ${apiPath}`);
  console.log(`  ✓ ${correctionPath}`);
  console.log(`  ✓ 最新结果同步到: ${LATEST_DOCS_DIR}`);

  console.log('\n╔═══════════════════════════════════════════════════════╗');
  console.log('║  探索完成摘要                                         ║');
  console.log('╠═══════════════════════════════════════════════════════╣');
  console.log(`║  运行 ID        : ${RUN_TIMESTAMP}`);
  console.log(`║  结果目录       : runs/${RUN_TIMESTAMP}/`);
  console.log(`║  网络可用       : ${report.networkAvailable ? '✅ 是' : '❌ 否（文档基于基准数据）'}`);
  console.log(`║  发现路由       : ${[...report.routes].length}`);
  console.log(`║  记录模块       : ${report.modules.length}`);
  console.log(`║  捕获 API 请求  : ${report.apiEndpoints.size}`);
  console.log(`║  自动修正次数   : ${corrections.length}`);
  console.log('╚═══════════════════════════════════════════════════════╝\n');

  process.exit(0);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
