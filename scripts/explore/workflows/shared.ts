import { Page } from '@playwright/test';

import type { PageWorkflow, WorkflowElement, WorkflowModuleDeps, WorkflowPageKind, WorkflowRouteProbe } from './contracts.js';

export function normalizeRoutePath(value: string): string {
  try {
    return new URL(value).pathname.split('?')[0];
  } catch {
    return value.split('?')[0];
  }
}

export function resolveWorkflowPageLabel(
  routeHint: string,
  pageKind: WorkflowPageKind,
  resolveDeepRouteLabel: WorkflowModuleDeps['resolveDeepRouteLabel']
): string {
  const pathname = normalizeRoutePath(routeHint);

  switch (pathname) {
    case '/zh-hans/home':
      return '首页';
    case '/zh-hans/playlist':
      return '书单页';
    case '/zh-hans/homework':
      return '作业页';
    case '/zh-hans/profile':
      return '个人中心';
    case '/zh-hans/exam':
      return '试卷页';
    case '/zh-hans/favorites':
      return '收藏夹';
    case '/zh-hans/joined-classes':
      return '班级页';
    case '/zh-hans/studio':
      return '工作室';
    case '/zh-hans/textbook':
      return '教材页';
    case '/zh-hans/login':
      return '登录页';
  }

  const deepLabel = resolveDeepRouteLabel(routeHint);
  if (deepLabel) {
    switch (deepLabel) {
      case 'assignment':
        return '作业详情';
      case 'reading-display':
        return '文章详情';
      case 'playlist-display':
        return '书单详情';
      case 'student-invite':
        return '班级邀请';
      case 'personal-data':
        return '个人数据详情';
      default:
        return deepLabel;
    }
  }

  if (pageKind === 'login') return '登录页';

  const segment = pathname.split('/').filter(Boolean).pop() ?? routeHint;
  return segment;
}

export function inferObservedFieldsFromPage(elements: WorkflowElement[], snippets: string[]): string[] {
  const fields = new Set<string>();

  if (snippets.length > 0) fields.add('页面文本');
  if (elements.some((element) => !!element.href)) fields.add('链接入口');
  if (elements.some((element) => ['button', 'ion-button'].includes(element.tag) || element.type === 'submit')) {
    fields.add('操作按钮');
  }
  if (elements.some((element) => ['input', 'select', 'textarea'].includes(element.tag))) {
    fields.add('输入字段');
  }

  return [...fields];
}

export async function collectBodyTextSnippets(
  page: Page,
  uniqueTexts: WorkflowModuleDeps['uniqueTexts'],
  maxItems = 8
): Promise<string[]> {
  const bodyText = await page.locator('body').innerText().catch(() => '');

  return uniqueTexts(
    bodyText
      .split(/\n+/)
      .map((line) => line.trim().replace(/\s+/g, ' '))
      .filter((line) => line.length >= 2 && line.length <= 80),
    maxItems
  );
}

function preferredWorkflowLinks(routeHint: string): string[] {
  switch (normalizeRoutePath(routeHint)) {
    case '/zh-hans/home':
      return ['/zh-hans/textbook', '/zh-hans/homework', '/zh-hans/reading', '/zh-hans/playlist'];
    case '/zh-hans/homework':
      return ['/zh-hans/assignment/'];
    case '/zh-hans/playlist':
      return ['/zh-hans/playlist-display/'];
    case '/zh-hans/reading':
      return ['/zh-hans/reading-display/', '/zh-hans/personal-data/'];
    case '/zh-hans/joined-classes':
      return ['/zh-hans/student-invite'];
    case '/zh-hans/favorites':
      return ['/zh-hans/reading-display/', '/zh-hans/playlist-display/', '/zh-hans/reading'];
    case '/zh-hans/profile':
      return ['/zh-hans/settings', '/zh-hans/profile'];
    default:
      return [];
  }
}

export function pickWorkflowTarget(routeHint: string, links: string[], deps: Pick<WorkflowModuleDeps, 'uniqueTexts' | 'isExplorableRoute'>): string | null {
  const currentPath = normalizeRoutePath(routeHint);
  const candidates = deps.uniqueTexts(links).filter(
    (link) => deps.isExplorableRoute(link) && normalizeRoutePath(link) !== currentPath
  );

  for (const prefix of preferredWorkflowLinks(routeHint)) {
    const preferred = candidates.find((link) => link.startsWith(prefix));
    if (preferred) return preferred;
  }

  return candidates[0] ?? null;
}

export async function probeRouteReachability(
  page: Page,
  phase: string,
  routeHint: string,
  targetLink: string,
  deps: Pick<WorkflowModuleDeps, 'baseUrl' | 'adaptiveNavigate' | 'trackRequestsDuringAction' | 'collectBodyTextSnippets'>
): Promise<WorkflowRouteProbe> {
  const originUrl = page.url();
  const originPath = normalizeRoutePath(originUrl);
  let navOk = false;

  const requests = await deps.trackRequestsDuringAction(page, async () => {
    navOk = await deps.adaptiveNavigate(page, `${deps.baseUrl}${targetLink}`, `${phase} / ${routeHint} /workflow`);
    if (navOk) {
      await page.waitForTimeout(1200);
    }
  });

  const reachedUrl = page.url();
  const reachedPath = normalizeRoutePath(reachedUrl);
  const targetPath = normalizeRoutePath(targetLink);
  const resultSamples = navOk ? await deps.collectBodyTextSnippets(page, 4) : [];

  let restoreOk = true;
  if (reachedPath !== originPath) {
    restoreOk = await deps.adaptiveNavigate(page, originUrl, `${phase} / ${routeHint} /restore`);
    if (!restoreOk) {
      restoreOk = await deps.adaptiveNavigate(page, `${deps.baseUrl}${routeHint}`, `${phase} / ${routeHint} /restore-fallback`);
    }
    await page.waitForTimeout(800);
  }

  return {
    status: !navOk ? 'fail' : reachedPath === targetPath ? 'pass' : 'warn',
    actual: !navOk
      ? `未能进入 ${targetLink}`
      : `已到达 ${reachedPath}${restoreOk ? '，并恢复当前页' : '，但恢复当前页失败'}`,
    requests,
    resultSamples,
  };
}

export function buildFeatureUsageDeps(deps: WorkflowModuleDeps) {
  return {
    collectElements: deps.collectElements,
    collectBodyTextSnippets: deps.collectBodyTextSnippets,
    formatElementLabel: deps.formatElementLabel,
    uniqueTexts: deps.uniqueTexts,
    trackRequestsDuringAction: deps.trackRequestsDuringAction,
    restorePage: deps.restorePage,
  };
}

export function appendUsageWorkflows(base: PageWorkflow[], appended: PageWorkflow[]): PageWorkflow[] {
  return [...base, ...appended];
}