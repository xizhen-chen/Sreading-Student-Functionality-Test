import { Page } from '@playwright/test';

import { probeFeatureUsageWorkflows } from '../feature-usage.js';
import type { PageWorkflow, WorkflowModuleDeps } from './contracts.js';
import { appendUsageWorkflows, buildFeatureUsageDeps, inferObservedFieldsFromPage, resolveWorkflowPageLabel } from './shared.js';

export async function analyzeDeepPageWorkflows(page: Page, routeHint: string, deps: WorkflowModuleDeps): Promise<PageWorkflow[]> {
  const label = resolveWorkflowPageLabel(routeHint, 'deep', deps.resolveDeepRouteLabel);
  const elements = await deps.collectElements(page);
  const snippets = await deps.collectBodyTextSnippets(page, 8);
  const controls = deps.uniqueTexts(
    elements
      .filter((element) => ['button', 'ion-button', 'input', 'select', 'textarea'].includes(element.tag) || element.type === 'submit')
      .map((element) => deps.formatElementLabel(element)),
    8
  );
  const usageWorkflows = await probeFeatureUsageWorkflows(
    page,
    {
      routeHint,
      pageLabel: label,
      phase: 'Deep workflow',
    },
    buildFeatureUsageDeps(deps)
  );

  return appendUsageWorkflows(
    [
      {
        name: `${label}详情工作流`,
        purpose: `验证 ${routeHint} 是否已展示详情内容，并暴露当前页可继续操作的控件。`,
        summary: `识别 ${snippets.length} 条详情文本信号、${controls.length} 个控件信号。`,
        observedOptions: controls,
        observedFields: inferObservedFieldsFromPage(elements, snippets),
        resultSamples: snippets.slice(0, 3),
        steps: [
          {
            action: '读取详情内容',
            target: routeHint,
            expected: '至少识别 2 条可用于描述详情页的文本信号',
            actual: `识别 ${snippets.length} 条详情文本：${snippets.slice(0, 3).join('；') || '无'}`,
            status: snippets.length >= 2 ? 'pass' : 'warn',
            requests: [],
          },
          {
            action: '检查详情操作控件',
            target: routeHint,
            expected: '识别当前详情页是否存在按钮、输入框或其它后续操作控件',
            actual: `识别 ${controls.length} 个控件：${controls.slice(0, 4).join('；') || '无'}`,
            status: controls.length > 0 || snippets.length >= 2 ? 'pass' : 'warn',
            requests: [],
          },
        ],
      },
    ],
    usageWorkflows
  );
}