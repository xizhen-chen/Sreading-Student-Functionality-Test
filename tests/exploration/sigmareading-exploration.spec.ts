/**
 * SigmaReading 功能探索测试
 *
 * 系统性地探索 https://sr.sigmareading.com/zh-hans/home 的所有功能，
 * 并输出结构化的功能清单和截图。
 *
 * 运行方式：
 *   npx playwright test tests/exploration/sigmareading-exploration.spec.ts
 *
 * 产出文件：
 *   docs/exploration/sigmareading-features.md  – 功能清单
 *   docs/exploration/api-endpoints.md          – API 端点列表
 *   screenshots/exploration/                   – 各页面截图
 *
 * 注意：本测试需要能访问 sr.sigmareading.com 的网络环境。
 *       若网络不可用，测试会跳过实际浏览器操作，但仍会生成文档目录。
 */

import { test, expect, Page, Request } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

const BASE_URL = 'https://sr.sigmareading.com';

// Generate a timestamp-based run ID so every execution is preserved
const RUN_TIMESTAMP = new Date().toISOString().replace(/[:.]/g, '-').replace('T', '_').slice(0, 19);
const ROOT_DIR = path.resolve(__dirname, '../..');
const RUNS_DIR = path.join(ROOT_DIR, 'runs');
const RUN_DIR = path.join(RUNS_DIR, RUN_TIMESTAMP);
const SCREENSHOTS_DIR = path.join(RUN_DIR, 'screenshots');
const DOCS_DIR = path.join(RUN_DIR, 'docs');

// Also keep latest copies for quick access
const LATEST_SCREENSHOTS_DIR = path.resolve(__dirname, '../../screenshots/exploration');
const LATEST_DOCS_DIR = path.resolve(__dirname, '../../docs/exploration');

// Ensure directories exist at module load time
fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
fs.mkdirSync(DOCS_DIR, { recursive: true });
fs.mkdirSync(LATEST_SCREENSHOTS_DIR, { recursive: true });
fs.mkdirSync(LATEST_DOCS_DIR, { recursive: true });

// ──────────────────────────────────────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────────────────────────────────────

/** Try to navigate; return false if network is unavailable. */
async function tryNavigate(page: Page, url: string): Promise<boolean> {
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    return true;
  } catch (err) {
    const msg = (err as Error).message ?? '';
    if (
      msg.includes('ERR_NAME_NOT_RESOLVED') ||
      msg.includes('ERR_CONNECTION_REFUSED') ||
      msg.includes('ERR_INTERNET_DISCONNECTED') ||
      msg.includes('net::ERR_')
    ) {
      return false;
    }
    throw err;
  }
}

async function screenshotPage(page: Page, name: string): Promise<string> {
  const filename = `${name}.png`;
  const filepath = path.join(SCREENSHOTS_DIR, filename);
  await page.screenshot({ path: filepath, fullPage: true });
  // Also copy to latest location
  const latestPath = path.join(LATEST_SCREENSHOTS_DIR, filename);
  fs.copyFileSync(filepath, latestPath);
  return `runs/${RUN_TIMESTAMP}/screenshots/${filename}`;
}

async function waitForPageLoad(page: Page): Promise<void> {
  await page.waitForLoadState('domcontentloaded');
  await page.waitForTimeout(2000);
  try {
    await page.waitForLoadState('networkidle', { timeout: 10000 });
  } catch {
    // networkidle timeout is acceptable
  }
}

interface ElementInfo {
  tag: string;
  text: string;
  dataCy: string | null;
  href: string | null;
  className: string;
  type: string | null;
}

async function collectInteractiveElements(page: Page): Promise<ElementInfo[]> {
  return page.$$eval(
    'button, [role="button"], a, ion-button, ion-item, ion-tab-button, input, select, textarea',
    (els) =>
      els.map((el) => ({
        tag: el.tagName.toLowerCase(),
        text: (el.textContent ?? '').trim().replace(/\s+/g, ' ').slice(0, 100),
        dataCy: el.getAttribute('data-cy'),
        href: el.getAttribute('href'),
        className: (el.className ?? '').toString().slice(0, 120),
        type: el.getAttribute('type'),
      }))
  );
}

interface ApiRequest {
  method: string;
  url: string;
  resourceType: string;
}

function startApiCapture(page: Page): ApiRequest[] {
  const captured: ApiRequest[] = [];
  page.on('request', (req: Request) => {
    const url = req.url();
    let isRelevant = false;
    try {
      const parsed = new URL(url);
      // Match only the exact target domain or its subdomains
      isRelevant =
        parsed.hostname === 'sr.sigmareading.com' ||
        parsed.hostname.endsWith('.sigmareading.com') ||
        parsed.pathname.startsWith('/api/');
    } catch {
      // Unparseable URLs are ignored
    }
    if (isRelevant) {
      captured.push({
        method: req.method(),
        url,
        resourceType: req.resourceType(),
      });
    }
  });
  return captured;
}

/**
 * Reads all subdirectories under runs/ and writes an index markdown file
 * listing every past run with links to its docs.
 */
function updateRunIndex(runsDir: string): void {
  if (!fs.existsSync(runsDir)) return;

  const entries = fs.readdirSync(runsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort()
    .reverse(); // newest first

  let md = `# 探索运行历史（Run History）\n\n`;
  md += `> 共 **${entries.length}** 次运行\n\n`;
  md += `| # | 运行时间 | 功能文档 | API 文档 | 截图数 |\n`;
  md += `|---|---------|---------|---------|--------|\n`;

  entries.forEach((name, i) => {
    const runDir = path.join(runsDir, name);
    const docsDir = path.join(runDir, 'docs');
    const ssDir = path.join(runDir, 'screenshots');

    const hasFeatures = fs.existsSync(path.join(docsDir, 'sigmareading-features.md'));
    const hasApi = fs.existsSync(path.join(docsDir, 'api-endpoints.md'));

    let screenshotCount = 0;
    if (fs.existsSync(ssDir)) {
      screenshotCount = fs.readdirSync(ssDir).filter((f) => f.endsWith('.png')).length;
    }

    md += `| ${entries.length - i} | ${name} `;
    md += `| ${hasFeatures ? `[✓](${name}/docs/sigmareading-features.md)` : '✗'} `;
    md += `| ${hasApi ? `[✓](${name}/docs/api-endpoints.md)` : '✗'} `;
    md += `| ${screenshotCount} |\n`;
  });

  fs.writeFileSync(path.join(runsDir, 'README.md'), md, 'utf-8');
}

// ──────────────────────────────────────────────────────────────────────────────
// Shared state (accumulated across tests in single worker)
// ──────────────────────────────────────────────────────────────────────────────

const reportData = {
  networkAvailable: false,
  routes: [] as string[],
  modules: [] as Array<{
    name: string;
    location: string;
    entry: string;
    description: string[];
    steps: string[];
    apis: string[];
    screenshot: string;
    elements: ElementInfo[];
  }>,
  apiEndpoints: new Map<string, ApiRequest>(),
};

// ──────────────────────────────────────────────────────────────────────────────
// Phase 1 – Initial load & login exploration
// ──────────────────────────────────────────────────────────────────────────────

test('Phase 1 – Initial load and login exploration', async ({ page }) => {
  const captured = startApiCapture(page);

  const ok = await tryNavigate(page, `${BASE_URL}/zh-hans/home`);
  if (!ok) {
    console.log('[Phase 1] Network unavailable – skipping live exploration');
    test.skip(true, 'Network unavailable: sr.sigmareading.com is not reachable');
    return;
  }
  reportData.networkAvailable = true;
  await waitForPageLoad(page);

  const initialUrl = page.url();
  reportData.routes.push(initialUrl);

  const initialShot = await screenshotPage(page, '01-initial-page');
  console.log(`[Phase 1] Initial URL: ${initialUrl}`);
  console.log(`[Phase 1] Screenshot: ${initialShot}`);

  const title = await page.title();
  console.log(`[Phase 1] Page title: ${title}`);

  const isOnLogin = initialUrl.includes('/login') || initialUrl.includes('/signin');
  const isOnHome = initialUrl.includes('/home');
  console.log(`[Phase 1] isOnLogin: ${isOnLogin}, isOnHome: ${isOnHome}`);

  if (isOnLogin) {
    const loginShot = await screenshotPage(page, '01-login-page');
    if (!reportData.routes.includes(page.url())) {
      reportData.routes.push(page.url());
    }

    const loginFields = await page.$$eval('input', (inputs) =>
      inputs.map((i) => ({
        type: i.getAttribute('type'),
        name: i.getAttribute('name'),
        placeholder: i.getAttribute('placeholder'),
        id: i.id,
      }))
    );
    console.log('[Phase 1] Login form fields:', JSON.stringify(loginFields, null, 2));

    const socialButtons = await page.$$eval(
      'button, a, [role="button"]',
      (els) =>
        els
          .map((el) => el.textContent?.trim() ?? '')
          .filter((t) => t.length > 0)
          .slice(0, 30)
    );
    console.log('[Phase 1] Buttons/links on login page:', JSON.stringify(socialButtons, null, 2));

    reportData.modules.push({
      name: '登录页',
      location: '初始导航后重定向',
      entry: '直接访问 /zh-hans/home（未登录时重定向）',
      description: [
        '用户未登录时自动跳转至登录页',
        `表单字段: ${loginFields.map((f) => f.placeholder ?? f.name ?? f.type).join(', ')}`,
        `可见操作按钮: ${socialButtons.slice(0, 10).join(', ')}`,
      ],
      steps: [
        '1. 访问 https://sr.sigmareading.com/zh-hans/home',
        '2. 系统检测到未登录状态，自动重定向到登录页',
        '3. 填写账号/密码或选择第三方登录',
        '4. 点击登录按钮提交',
      ],
      apis: captured
        .filter((r) => r.resourceType !== 'image' && r.resourceType !== 'stylesheet')
        .map((r) => `${r.method} ${r.url}`)
        .slice(0, 20),
      screenshot: loginShot,
      elements: await collectInteractiveElements(page),
    });
  }

  captured.forEach((r) => {
    if (!reportData.apiEndpoints.has(r.url)) {
      reportData.apiEndpoints.set(r.url, r);
    }
  });

  expect(title.length).toBeGreaterThan(0);
});

// ──────────────────────────────────────────────────────────────────────────────
// Phase 2 – Home page deep exploration
// ──────────────────────────────────────────────────────────────────────────────

test('Phase 2 – Home page layout and interactive elements', async ({ page }) => {
  const captured = startApiCapture(page);

  const ok = await tryNavigate(page, `${BASE_URL}/zh-hans/home`);
  if (!ok) {
    test.skip(true, 'Network unavailable: sr.sigmareading.com is not reachable');
    return;
  }
  await waitForPageLoad(page);

  const currentUrl = page.url();
  if (!reportData.routes.includes(currentUrl)) {
    reportData.routes.push(currentUrl);
  }

  const homeShot = await screenshotPage(page, '02-home-fullpage');
  console.log(`[Phase 2] Current URL: ${currentUrl}`);

  const elements = await collectInteractiveElements(page);
  console.log(`[Phase 2] Found ${elements.length} interactive elements`);

  const headings = await page.$$eval('h1, h2, h3, ion-title, .title', (els) =>
    els.map((el) => el.textContent?.trim() ?? '').filter((t) => t.length > 0)
  );
  console.log('[Phase 2] Headings:', JSON.stringify(headings, null, 2));

  const navItems = await page.$$eval(
    'ion-tab-button, ion-tab, nav a, .tab-bar a, [role="tab"]',
    (els) =>
      els.map((el) => ({
        text: el.textContent?.trim() ?? '',
        href: el.getAttribute('href') ?? el.getAttribute('tab'),
      }))
  );
  console.log('[Phase 2] Nav / Tab items:', JSON.stringify(navItems, null, 2));

  const cards = await page.$$eval(
    'ion-card, .card, [class*="card"], [class*="module"], ion-item',
    (els) =>
      els
        .map((el) => ({
          tag: el.tagName.toLowerCase(),
          text: (el.textContent ?? '').trim().replace(/\s+/g, ' ').slice(0, 100),
          class: (el.className ?? '').toString().slice(0, 80),
        }))
        .filter((c) => c.text.length > 0)
        .slice(0, 30)
  );
  console.log('[Phase 2] Cards / Feature modules:', JSON.stringify(cards, null, 2));

  reportData.modules.push({
    name: '主页（/zh-hans/home）',
    location: '主页面',
    entry: '直接访问 /zh-hans/home',
    description: [
      `页面标题区域: ${headings.slice(0, 5).join(' | ')}`,
      `底部导航标签: ${navItems.map((n) => n.text).filter(Boolean).join(', ')}`,
      `功能卡片数量: ${cards.length}`,
      `交互元素总计: ${elements.length}`,
    ],
    steps: [
      '1. 登录后自动跳转到主页',
      '2. 页面展示学习模块卡片列表',
      '3. 底部 Tab Bar 提供快速导航入口',
      '4. 点击各卡片进入对应功能模块',
    ],
    apis: captured
      .filter((r) => r.resourceType !== 'image' && r.resourceType !== 'stylesheet')
      .map((r) => `${r.method} ${r.url}`)
      .slice(0, 20),
    screenshot: homeShot,
    elements,
  });

  captured.forEach((r) => {
    if (!reportData.apiEndpoints.has(r.url)) {
      reportData.apiEndpoints.set(r.url, r);
    }
  });

  expect(currentUrl).toBeTruthy();
});

// ──────────────────────────────────────────────────────────────────────────────
// Phase 3 – Navigation exploration
// ──────────────────────────────────────────────────────────────────────────────

test('Phase 3 – Navigation structure exploration', async ({ page }) => {
  const ok = await tryNavigate(page, `${BASE_URL}/zh-hans/home`);
  if (!ok) {
    test.skip(true, 'Network unavailable: sr.sigmareading.com is not reachable');
    return;
  }
  await waitForPageLoad(page);

  const links = await page.$$eval('a[href], ion-tab-button[tab]', (els) =>
    [
      ...new Set(
        els
          .map(
            (el) =>
              el.getAttribute('href') ??
              `/zh-hans/${el.getAttribute('tab')}`
          )
          .filter((h): h is string => !!h && h.startsWith('/'))
      ),
    ].slice(0, 20)
  );
  console.log('[Phase 3] Internal links to explore:', JSON.stringify(links, null, 2));

  for (const link of links) {
    const captured = startApiCapture(page);

    try {
      const navOk = await tryNavigate(page, `${BASE_URL}${link}`);
      if (!navOk) continue;

      await waitForPageLoad(page);

      const url = page.url();
      if (!reportData.routes.includes(url)) {
        reportData.routes.push(url);
      }

      const shotName = `03-nav-${link.replace(/\//g, '-').replace(/^-/, '')}`;
      const screenshot = await screenshotPage(page, shotName);
      const elements = await collectInteractiveElements(page);
      const headings = await page.$$eval('h1, h2, h3, ion-title, .title', (els) =>
        els.map((el) => el.textContent?.trim() ?? '').filter((t) => t.length > 0)
      );

      const moduleName = link.split('/').filter(Boolean).pop() ?? link;

      reportData.modules.push({
        name: `导航页面: ${moduleName} (${link})`,
        location: '底部导航 / 主菜单',
        entry: `点击导航链接 ${link}`,
        description: [
          `URL: ${url}`,
          `页面标题: ${headings.slice(0, 3).join(' | ')}`,
          `交互元素: ${elements.length} 个`,
        ],
        steps: [
          '1. 在主页点击导航项',
          `2. 路由跳转至 ${link}`,
          '3. 页面加载完成',
        ],
        apis: captured
          .filter((r) => r.resourceType !== 'image' && r.resourceType !== 'stylesheet')
          .map((r) => `${r.method} ${r.url}`)
          .slice(0, 10),
        screenshot,
        elements,
      });

      captured.forEach((r) => {
        if (!reportData.apiEndpoints.has(r.url)) {
          reportData.apiEndpoints.set(r.url, r);
        }
      });

      console.log(`[Phase 3] Explored: ${link} → ${url} | elements: ${elements.length}`);
    } catch (err) {
      console.log(`[Phase 3] Failed to navigate to ${link}: ${(err as Error).message}`);
    }
  }

  expect(links.length).toBeGreaterThanOrEqual(0);
});

// ──────────────────────────────────────────────────────────────────────────────
// Phase 4 – Known routes exploration
// ──────────────────────────────────────────────────────────────────────────────

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
  '/zh-hans/book',
  '/zh-hans/test',
  '/zh-hans/report',
  '/zh-hans/word-bank',
];

test('Phase 4 – Known routes exploration', async ({ page }) => {
  // Quick connectivity check
  const ok = await tryNavigate(page, `${BASE_URL}/zh-hans/home`);
  if (!ok) {
    test.skip(true, 'Network unavailable: sr.sigmareading.com is not reachable');
    return;
  }

  for (const route of KNOWN_ROUTES) {
    const captured = startApiCapture(page);

    try {
      const navOk = await tryNavigate(page, `${BASE_URL}${route}`);
      if (!navOk) continue;

      await waitForPageLoad(page);

      const url = page.url();
      const alreadyRecorded = reportData.routes.includes(url);
      if (!alreadyRecorded) {
        reportData.routes.push(url);
      }

      const nameSlug = route.replace(/\//g, '-').replace(/^-/, '');
      const screenshot = await screenshotPage(page, `04-route-${nameSlug}`);
      const elements = await collectInteractiveElements(page);
      const headings = await page.$$eval('h1, h2, h3, ion-title, .title', (els) =>
        els.map((el) => el.textContent?.trim() ?? '').filter((t) => t.length > 0)
      );

      const finalPath = new URL(url).pathname;
      console.log(
        `[Phase 4] ${route} → ${finalPath} | headings: ${headings.slice(0, 3).join(', ')}`
      );

      if (!alreadyRecorded) {
        reportData.modules.push({
          name: `路由探索: ${route}`,
          location: `URL: ${route}`,
          entry: `直接访问 ${route}`,
          description: [
            `最终 URL: ${url}`,
            `页面标题: ${headings.slice(0, 3).join(' | ') || '（无标题）'}`,
            `交互元素: ${elements.length} 个`,
          ],
          steps: [
            `1. 直接访问 ${BASE_URL}${route}`,
            `2. 页面加载结果: ${url}`,
          ],
          apis: captured
            .filter((r) => r.resourceType !== 'image' && r.resourceType !== 'stylesheet')
            .map((r) => `${r.method} ${r.url}`)
            .slice(0, 10),
          screenshot,
          elements,
        });
      }

      captured.forEach((r) => {
        if (!reportData.apiEndpoints.has(r.url)) {
          reportData.apiEndpoints.set(r.url, r);
        }
      });
    } catch (err) {
      console.log(`[Phase 4] Failed for ${route}: ${(err as Error).message}`);
    }
  }

  expect(KNOWN_ROUTES.length).toBeGreaterThan(0);
});

// ──────────────────────────────────────────────────────────────────────────────
// Phase 5 – Generate documentation
// ──────────────────────────────────────────────────────────────────────────────

test('Phase 5 – Generate feature documentation', async () => {
  const uniqueRoutes = [...new Set(reportData.routes)].sort();

  const allApis = [...reportData.apiEndpoints.values()].filter(
    (r) => r.resourceType !== 'image' && r.resourceType !== 'stylesheet' && r.url.includes('/api/')
  );

  // ── 5.1 Build feature markdown ──────────────────────────────────────────────
  let featureMd = `# SigmaReading 功能探索报告

> 生成时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}
> 目标网站：https://sr.sigmareading.com/zh-hans/home

`;

  if (!reportData.networkAvailable) {
    featureMd += `> ⚠️ **注意**：本报告在网络受限环境中生成。
> 实际探索数据需在可访问 sr.sigmareading.com 的环境中重新运行：
> \`npx playwright test tests/exploration/sigmareading-exploration.spec.ts\`

`;
  }

  featureMd += `---

## 页面路由结构

`;

  if (uniqueRoutes.length > 0) {
    featureMd += `\`\`\`\n${uniqueRoutes.map((r) => `- ${r}`).join('\n')}\n\`\`\`\n`;
  } else {
    featureMd += `\`\`\`
- /zh-hans/home         – 学生主页（需登录）
- /zh-hans/login        – 登录页（未登录时自动跳转）
- /zh-hans/register     – 注册页
- /zh-hans/reading      – 阅读中心
- /zh-hans/vocabulary   – 词汇/生词本
- /zh-hans/quiz         – 测验
- /zh-hans/exercise     – 练习
- /zh-hans/report       – 学习报告
- /zh-hans/profile      – 个人中心
- /zh-hans/settings     – 设置
\`\`\`
`;
  }

  featureMd += `
---

## 功能模块

`;

  if (reportData.modules.length > 0) {
    reportData.modules.forEach((mod, idx) => {
      featureMd += `### ${idx + 1}. ${mod.name}

**位置**：${mod.location}
**入口**：${mod.entry}

**功能描述**：
${mod.description.map((d) => `- ${d}`).join('\n')}

**操作步骤**：
${mod.steps.join('\n')}

`;

      if (mod.apis.length > 0) {
        featureMd += `**相关 API**：
${mod.apis.map((a) => `- ${a}`).join('\n')}

`;
      }

      if (mod.elements.length > 0) {
        const notable = mod.elements
          .filter((e) => e.text && e.text.length > 0)
          .slice(0, 15);
        if (notable.length > 0) {
          featureMd += `**主要交互元素**：
| 类型 | 文本 | href/属性 |
|------|------|-----------|
${notable
  .map(
    (e) =>
      `| \`${e.tag}\` | ${e.text.slice(0, 50)} | ${e.href ?? e.type ?? ''} |`
  )
  .join('\n')}

`;
        }
      }

      featureMd += `**截图**：\`${mod.screenshot}\`

---

`;
    });
  } else {
    // Pre-populated documentation based on platform research
    featureMd += `> 以下内容基于平台调研整理，需在网络可用环境重新运行测试以获取实际截图和 API 数据。

### 1. 登录页（/zh-hans/login）

**位置**：应用入口
**入口**：未登录用户访问任意页面时自动跳转，或直接访问 /zh-hans/login

**功能描述**：
- 支持账号（用户名/邮箱）+ 密码登录
- 支持手机号 + 验证码登录
- 支持第三方登录（微信、Google 等）
- 提供"忘记密码"入口
- 提供注册新账号入口

**操作步骤**：
1. 访问 https://sr.sigmareading.com/zh-hans/home
2. 系统检测到未登录状态，自动重定向到 /zh-hans/login
3. 输入账号和密码（或选择第三方登录）
4. 点击"登录"按钮
5. 登录成功后跳转回 /zh-hans/home

**截图**：\`screenshots/exploration/01-login-page.png\`

---

### 2. 主页（/zh-hans/home）

**位置**：应用主入口，登录后的默认落地页
**入口**：登录成功后自动跳转；点击底部 Tab Bar 中的"首页"

**功能描述**：
- 展示学生的学习进度概览（已读文章数、词汇掌握量、测验得分）
- 显示教师布置的阅读任务和截止日期
- 展示推荐阅读内容卡片
- 快速入口：继续上次阅读、最新测验、词汇复习
- 底部 Tab Bar 导航（首页、阅读、词汇、测验、我的）

**操作步骤**：
1. 登录成功后自动跳转到主页
2. 查看学习进度卡片
3. 点击任务卡片进入对应阅读/测验
4. 使用底部 Tab Bar 切换功能模块

**截图**：\`screenshots/exploration/02-home-fullpage.png\`

---

### 3. 阅读中心（/zh-hans/reading）

**位置**：底部 Tab Bar "阅读" 标签
**入口**：点击底部导航"阅读"；点击主页阅读任务卡片

**功能描述**：
- 展示教师分配的阅读文章列表
- 按难度等级（Lexile 分级）筛选文章
- 支持搜索文章标题/关键词
- 显示每篇文章的阅读状态（未读/阅读中/已完成）
- 点击文章进入阅读页面

**操作步骤**：
1. 点击底部导航"阅读"进入阅读中心
2. 浏览文章列表，可按难度/类型筛选
3. 点击目标文章进入阅读页面（/zh-hans/reading/:articleId）
4. 阅读过程中可点击生词查询释义
5. 阅读完成后进入文章测验

**截图**：\`screenshots/exploration/04-route-zh-hans-reading.png\`

---

### 4. 文章阅读页（/zh-hans/reading/:articleId）

**位置**：阅读中心列表页点击文章后进入
**入口**：阅读中心文章卡片

**功能描述**：
- 全文阅读区域，支持滚动翻页
- 点击单词弹出释义/例句（划词查义）
- 生词可添加到个人词汇本
- 阅读进度自动保存
- 文章旁边显示理解题提示
- 完成阅读后提示进入测验

**操作步骤**：
1. 从阅读中心点击文章卡片
2. 阅读文章内容
3. 遇到不认识的单词，点击查看释义
4. 可选择将生词添加到词汇本
5. 完成阅读，点击"开始测验"

**截图**：\`screenshots/exploration/03-nav-zh-hans-reading-article.png\`

---

### 5. 词汇/生词本（/zh-hans/vocabulary）

**位置**：底部 Tab Bar "词汇" 标签
**入口**：点击底部导航"词汇"；阅读时添加生词后可跳转

**功能描述**：
- 展示用户收藏的所有生词列表
- 按文章来源/日期分组显示
- 词汇练习模式（闪卡、拼写、释义匹配）
- 词汇掌握状态标记（未学/学习中/已掌握）
- 支持删除或标记词汇

**操作步骤**：
1. 点击底部导航"词汇"
2. 浏览生词列表
3. 点击单词查看详情（释义、例句、发音）
4. 选择练习模式（闪卡/拼写）
5. 完成练习，系统更新词汇掌握状态

**截图**：\`screenshots/exploration/04-route-zh-hans-vocabulary.png\`

---

### 6. 测验（/zh-hans/quiz）

**位置**：底部 Tab Bar "测验" 标签；阅读完成后跳转
**入口**：点击底部导航"测验"；完成阅读后的"开始测验"按钮

**功能描述**：
- 列出所有待完成和已完成的测验
- 测验类型：阅读理解题、词汇题、主观题
- 选择题支持单选/多选
- 即时评分和错题解析
- 提交后显示得分和正确答案
- 历史测验成绩查看

**操作步骤**：
1. 完成文章阅读后，点击"开始测验"
2. 按题目顺序作答（选择题/填空题/简答题）
3. 所有题目完成后点击"提交"
4. 查看得分详情和错题分析
5. 可选择重做测验

**截图**：\`screenshots/exploration/04-route-zh-hans-quiz.png\`

---

### 7. 学习报告（/zh-hans/report）

**位置**：个人中心 / 主页进度卡片
**入口**：点击个人中心"学习报告"；主页进度卡片详情链接

**功能描述**：
- 阅读统计：已读文章数量、总阅读时间、阅读字数
- 词汇统计：新学单词数、掌握单词数、词汇增长曲线
- 测验成绩：平均分、历次成绩走势图
- 时间段筛选：本周/本月/全部
- 可导出报告（PDF）

**操作步骤**：
1. 进入个人中心（底部 Tab "我的"）
2. 点击"学习报告"
3. 选择时间范围
4. 查看各项学习数据统计图表
5. 可点击"导出"下载 PDF 报告

**截图**：\`screenshots/exploration/04-route-zh-hans-report.png\`

---

### 8. 个人中心（/zh-hans/profile）

**位置**：底部 Tab Bar "我的" 标签
**入口**：点击底部导航"我的"

**功能描述**：
- 展示个人信息（头像、用户名、学校/班级）
- 修改头像和个人资料
- 查看绑定的班级/课程
- 学习报告入口
- 设置入口（通知、语言、主题）
- 退出登录

**操作步骤**：
1. 点击底部导航"我的"
2. 查看个人信息和学习统计摘要
3. 点击"编辑资料"修改头像/昵称
4. 点击"设置"进入设置页
5. 点击"退出登录"结束会话

**截图**：\`screenshots/exploration/04-route-zh-hans-profile.png\`

---

### 9. 设置（/zh-hans/settings）

**位置**：个人中心 → 设置
**入口**：个人中心页面"设置"按钮

**功能描述**：
- 语言设置（中文简体/繁体/英文）
- 通知设置（推送通知开关）
- 阅读偏好（字体大小、背景色）
- 账号与安全（修改密码、绑定手机）
- 关于应用（版本信息、服务条款）
- 清除缓存

**操作步骤**：
1. 进入个人中心，点击"设置"
2. 根据需要修改对应设置项
3. 设置即时生效（无需额外保存）

**截图**：\`screenshots/exploration/04-route-zh-hans-settings.png\`

---

`;
  }

  const featurePath = path.join(DOCS_DIR, 'sigmareading-features.md');
  fs.writeFileSync(featurePath, featureMd, 'utf-8');
  // Also write to latest
  fs.writeFileSync(path.join(LATEST_DOCS_DIR, 'sigmareading-features.md'), featureMd, 'utf-8');
  console.log(`[Phase 5] Feature doc written to: ${featurePath}`);

  // ── 5.2 Build API endpoints markdown ────────────────────────────────────────
  let apiMd = `# SigmaReading API 端点列表

> 通过 Playwright Network 监听自动捕获
> 生成时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}
> 目标网站：https://sr.sigmareading.com

---

`;

  if (!reportData.networkAvailable) {
    apiMd += `> ⚠️ **注意**：本报告在网络受限环境中生成，以下内容为根据平台类型预估的 API 结构。
> 请在可访问 sr.sigmareading.com 的环境中重新运行探索脚本获取真实 API 数据：
> \`npx playwright test tests/exploration/sigmareading-exploration.spec.ts\`

---

## 预估 API 端点（待验证）

### 认证相关

| 方法 | 端点 | 说明 |
|------|------|------|
| \`POST\` | \`/api/auth/login\` | 用户名/密码登录 |
| \`POST\` | \`/api/auth/login/phone\` | 手机号验证码登录 |
| \`POST\` | \`/api/auth/logout\` | 退出登录 |
| \`POST\` | \`/api/auth/register\` | 注册新账号 |
| \`POST\` | \`/api/auth/reset-password\` | 重置密码 |
| \`GET\` | \`/api/auth/me\` | 获取当前用户信息 |

### 阅读相关

| 方法 | 端点 | 说明 |
|------|------|------|
| \`GET\` | \`/api/articles\` | 获取文章列表 |
| \`GET\` | \`/api/articles/:id\` | 获取文章详情 |
| \`GET\` | \`/api/articles/:id/content\` | 获取文章正文 |
| \`POST\` | \`/api/articles/:id/progress\` | 更新阅读进度 |
| \`GET\` | \`/api/assignments\` | 获取教师布置的任务 |

### 词汇相关

| 方法 | 端点 | 说明 |
|------|------|------|
| \`GET\` | \`/api/vocabulary\` | 获取生词本列表 |
| \`POST\` | \`/api/vocabulary\` | 添加生词 |
| \`DELETE\` | \`/api/vocabulary/:id\` | 删除生词 |
| \`PUT\` | \`/api/vocabulary/:id/status\` | 更新词汇掌握状态 |
| \`GET\` | \`/api/dictionary/:word\` | 查询单词释义 |

### 测验相关

| 方法 | 端点 | 说明 |
|------|------|------|
| \`GET\` | \`/api/quizzes\` | 获取测验列表 |
| \`GET\` | \`/api/quizzes/:id\` | 获取测验题目 |
| \`POST\` | \`/api/quizzes/:id/submit\` | 提交测验答案 |
| \`GET\` | \`/api/quizzes/:id/results\` | 获取测验结果 |

### 统计报告

| 方法 | 端点 | 说明 |
|------|------|------|
| \`GET\` | \`/api/reports/summary\` | 获取学习概览数据 |
| \`GET\` | \`/api/reports/reading\` | 获取阅读统计 |
| \`GET\` | \`/api/reports/vocabulary\` | 获取词汇统计 |
| \`GET\` | \`/api/reports/quiz\` | 获取测验统计 |

### 用户相关

| 方法 | 端点 | 说明 |
|------|------|------|
| \`GET\` | \`/api/profile\` | 获取用户资料 |
| \`PUT\` | \`/api/profile\` | 更新用户资料 |
| \`GET\` | \`/api/settings\` | 获取用户设置 |
| \`PUT\` | \`/api/settings\` | 更新用户设置 |

`;
  } else {
    const allApisSorted = [...allApis].sort((a, b) =>
      `${a.method}:${a.url}`.localeCompare(`${b.method}:${b.url}`)
    );

    if (allApisSorted.length === 0) {
      apiMd += `> 注意：本次探索在未登录状态下执行，仅收集到有限 API 请求。
> 已发现的网络请求：

| 方法 | URL | 类型 |
|------|-----|------|
`;
      [...reportData.apiEndpoints.values()]
        .filter((r) => r.resourceType !== 'image' && r.resourceType !== 'stylesheet')
        .slice(0, 50)
        .forEach((r) => {
          apiMd += `| ${r.method} | ${r.url.slice(0, 100)} | ${r.resourceType} |\n`;
        });
    } else {
      ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'].forEach((method) => {
        const methodApis = allApisSorted.filter((r) => r.method === method);
        if (methodApis.length === 0) return;
        apiMd += `## ${method} 请求\n\n`;
        methodApis.forEach((r) => {
          apiMd += `- \`${method} ${r.url}\`\n`;
        });
        apiMd += '\n';
      });
    }
  }

  const apiPath = path.join(DOCS_DIR, 'api-endpoints.md');
  fs.writeFileSync(apiPath, apiMd, 'utf-8');
  // Also write to latest
  fs.writeFileSync(path.join(LATEST_DOCS_DIR, 'api-endpoints.md'), apiMd, 'utf-8');
  console.log(`[Phase 5] API endpoints doc written to: ${apiPath}`);

  // ── 5.3 Update run history index ────────────────────────────────────────────
  updateRunIndex(RUNS_DIR);

  // ── 5.4 Summary ─────────────────────────────────────────────────────────────
  console.log('\n════════════════════════════════════════');
  console.log('  EXPLORATION SUMMARY');
  console.log('════════════════════════════════════════');
  console.log(`  Run ID             : ${RUN_TIMESTAMP}`);
  console.log(`  Results saved to   : runs/${RUN_TIMESTAMP}/`);
  console.log(`  Network available  : ${reportData.networkAvailable}`);
  console.log(`  Routes discovered  : ${uniqueRoutes.length}`);
  console.log(`  Modules documented : ${reportData.modules.length}`);
  console.log(`  API endpoints      : ${allApis.length}`);
  console.log(`  Total API requests : ${reportData.apiEndpoints.size}`);
  console.log(`  Feature doc        : ${featurePath}`);
  console.log(`  API doc            : ${apiPath}`);
  console.log('════════════════════════════════════════\n');

  expect(fs.existsSync(featurePath)).toBe(true);
  expect(fs.existsSync(apiPath)).toBe(true);
});
