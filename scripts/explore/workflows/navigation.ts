import { Page } from '@playwright/test';

import { probeFeatureUsageWorkflows } from '../feature-usage.js';
import type { PageWorkflow, WorkflowModuleDeps } from './contracts.js';
import { appendUsageWorkflows, buildFeatureUsageDeps, inferObservedFieldsFromPage, pickWorkflowTarget, probeRouteReachability, resolveWorkflowPageLabel } from './shared.js';

export async function analyzeNavigationPageWorkflows(
  page: Page,
  phase: string,
  routeHint: string,
  deps: WorkflowModuleDeps
): Promise<PageWorkflow[]> {
  const label = resolveWorkflowPageLabel(routeHint, 'navigation', deps.resolveDeepRouteLabel);
  const elements = await deps.collectElements(page);
  const snippets = await deps.collectBodyTextSnippets(page, 8);
  const routeLinks = deps.uniqueTexts(
    elements.map((element) => (element.href && element.href.startsWith('/zh-hans/') ? element.href : null)),
    12
  );
  const controls = deps.uniqueTexts(
    elements
      .filter((element) => ['button', 'ion-button', 'input', 'select', 'textarea'].includes(element.tag) || element.type === 'submit')
      .map((element) => deps.formatElementLabel(element)),
    8
  );
  const targetLink = pickWorkflowTarget(routeHint, routeLinks, deps);
  const navProbe = targetLink ? await probeRouteReachability(page, phase, routeHint, targetLink, deps) : null;
  const fallbackPass = routeLinks.length > 0 || controls.length > 0;
  const usageWorkflows = await probeFeatureUsageWorkflows(
    page,
    {
      routeHint,
      pageLabel: label,
      phase,
    },
    buildFeatureUsageDeps(deps)
  );

  return appendUsageWorkflows(
    [
      {
        name: `${label}页面工作流`,
        purpose: `验证 ${routeHint} 是否已展示当前页核心内容，并暴露可继续探索的入口或控件。`,
        summary: `识别 ${snippets.length} 条页面文本信号、${routeLinks.length} 个入口、${controls.length} 个控件${navProbe ? `；${navProbe.actual}` : ''}`,
        observedOptions: deps.uniqueTexts([...routeLinks, ...controls], 8),
        observedFields: inferObservedFieldsFromPage(elements, snippets),
        resultSamples: deps.uniqueTexts([...snippets, ...(navProbe?.resultSamples ?? [])], 3),
        steps: [
          {
            action: '读取页面核心内容',
            target: routeHint,
            expected: '至少识别 2 条页面内容信号或 1 个稳定入口',
            actual: `页面文本 ${snippets.length} 条；入口 ${routeLinks.length} 个；控件 ${controls.length} 个`,
            status: snippets.length >= 2 || routeLinks.length > 0 ? 'pass' : 'warn',
            requests: [],
          },
          {
            action: '验证后续入口或关键控件',
            target: targetLink ?? controls[0] ?? '未发现可复验目标',
            expected: '至少识别 1 个后续入口或关键控件，必要时验证其可达性',
            actual: navProbe?.actual ?? `识别 ${routeLinks.length} 个入口、${controls.length} 个控件，本轮保留本页上下文验证`,
            status: navProbe?.status ?? (fallbackPass ? 'pass' : 'warn'),
            requests: navProbe?.requests ?? [],
          },
        ],
      },
    ],
    usageWorkflows
  );
}