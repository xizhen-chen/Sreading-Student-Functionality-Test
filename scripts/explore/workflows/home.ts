import { Page } from '@playwright/test';

import { probeFeatureUsageWorkflows } from '../feature-usage.js';
import type { PageWorkflow, WorkflowModuleDeps } from './contracts.js';
import { appendUsageWorkflows, buildFeatureUsageDeps, pickWorkflowTarget, probeRouteReachability } from './shared.js';

export async function analyzeHomeWorkflows(page: Page, phase: string, deps: WorkflowModuleDeps): Promise<PageWorkflow[]> {
  const elements = await deps.collectElements(page);
  const entryLinks = elements.filter((element) => !!element.href && element.href!.startsWith('/zh-hans/'));
  const entrySummaries = deps.uniqueTexts(entryLinks.map((element) => `${deps.formatElementLabel(element)} -> ${element.href}`), 8);
  const targetLink = pickWorkflowTarget(
    '/zh-hans/home',
    entryLinks.map((element) => element.href).filter((href): href is string => !!href),
    deps
  );
  const navProbe = targetLink ? await probeRouteReachability(page, phase, '/zh-hans/home', targetLink, deps) : null;
  const usageWorkflows = await probeFeatureUsageWorkflows(
    page,
    {
      routeHint: '/zh-hans/home',
      pageLabel: '首页',
      phase,
    },
    buildFeatureUsageDeps(deps)
  );

  return appendUsageWorkflows(
    [
      {
        name: '首页主入口工作流',
        purpose: '验证首页是否已展示主要功能卡片，并确认至少一个主入口可继续进入下一层页面。',
        summary: `识别 ${entrySummaries.length} 个首页主入口${navProbe ? `；${navProbe.actual}` : ''}`,
        observedOptions: entrySummaries,
        observedFields: ['链接入口', '操作按钮'],
        resultSamples: (navProbe?.resultSamples ?? []).slice(0, 3),
        steps: [
          {
            action: '读取首页主入口',
            target: '首页功能卡片',
            expected: '至少识别 3 个主入口',
            actual: `识别 ${entrySummaries.length} 个主入口：${entrySummaries.slice(0, 4).join('；') || '无'}`,
            status: entrySummaries.length >= 3 ? 'pass' : 'warn',
            requests: [],
          },
          {
            action: '验证首页主入口可达性',
            target: targetLink ?? '未找到可复验入口',
            expected: '至少 1 个首页入口可以进入下一层页面并恢复首页上下文',
            actual: navProbe?.actual ?? '未发现稳定的首页后续入口',
            status: navProbe?.status ?? 'warn',
            requests: navProbe?.requests ?? [],
          },
        ],
      },
    ],
    usageWorkflows
  );
}