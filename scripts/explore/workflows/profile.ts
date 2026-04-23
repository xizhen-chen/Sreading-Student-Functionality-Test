import { Page } from '@playwright/test';

import { probeFeatureUsageWorkflows } from '../feature-usage.js';
import type { PageWorkflow, WorkflowModuleDeps } from './contracts.js';
import { appendUsageWorkflows, buildFeatureUsageDeps, inferObservedFieldsFromPage, pickWorkflowTarget, probeRouteReachability } from './shared.js';

export async function analyzeProfileWorkflows(page: Page, phase: string, deps: WorkflowModuleDeps): Promise<PageWorkflow[]> {
  const elements = await deps.collectElements(page);
  const snippets = await deps.collectBodyTextSnippets(page, 8);
  const actionables = deps.uniqueTexts(await deps.collectActionableTexts(page), 12);
  const settingsSignals = actionables.filter((text) => /(设置|账号|密码|邮箱|手机|个人|资料|退出)/.test(text));
  const routeLinks = deps.uniqueTexts(
    elements.map((element) => (element.href && element.href.startsWith('/zh-hans/') ? element.href : null)),
    8
  );
  const targetLink = pickWorkflowTarget('/zh-hans/profile', routeLinks, deps);
  const navProbe = targetLink ? await probeRouteReachability(page, phase, '/zh-hans/profile', targetLink, deps) : null;
  const usageWorkflows = await probeFeatureUsageWorkflows(
    page,
    {
      routeHint: '/zh-hans/profile',
      pageLabel: '个人中心',
      phase,
    },
    buildFeatureUsageDeps(deps)
  );

  return appendUsageWorkflows(
    [
      {
        name: '个人中心工作流',
        purpose: '验证个人中心是否已展示设置项、账号信息或后续可操作控件。',
        summary: `识别 ${settingsSignals.length} 条设置/账号信号${navProbe ? `；${navProbe.actual}` : ''}`,
        observedOptions: deps.uniqueTexts([...settingsSignals, ...routeLinks], 8),
        observedFields: inferObservedFieldsFromPage(elements, snippets),
        resultSamples: deps.uniqueTexts([...snippets, ...(navProbe?.resultSamples ?? [])], 3),
        steps: [
          {
            action: '读取个人中心设置项',
            target: '/zh-hans/profile',
            expected: '至少识别 1 项设置、账号或个人资料相关信号',
            actual: `识别 ${settingsSignals.length} 条相关信号：${settingsSignals.slice(0, 4).join('；') || '无'}`,
            status: settingsSignals.length > 0 || snippets.some((text) => text.includes('设置')) || actionables.length > 0 ? 'pass' : 'warn',
            requests: [],
          },
          {
            action: '验证个人中心后续入口或控件',
            target: targetLink ?? actionables[0] ?? '未发现可复验目标',
            expected: '至少识别 1 个可继续进入设置/账号相关流程的入口或控件',
            actual: navProbe?.actual ?? `识别 ${routeLinks.length} 个入口、${actionables.length} 条可操作文本`,
            status: navProbe?.status ?? (routeLinks.length > 0 || actionables.length > 0 ? 'pass' : 'warn'),
            requests: navProbe?.requests ?? [],
          },
        ],
      },
    ],
    usageWorkflows
  );
}