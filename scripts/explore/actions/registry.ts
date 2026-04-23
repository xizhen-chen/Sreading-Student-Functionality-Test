import { Page } from '@playwright/test';

import type {
  FeatureActionStrategy,
  FeatureActionStrategyContext,
  FeatureUsageElement,
  FeatureUsageWorkflow,
  FeatureUsageWorkflowDeps,
} from '../feature-usage-contracts.js';

const UNSAFE_BUTTON_PATTERNS = [
  /退出|登出|logout/i,
  /删除|移除|remove|delete/i,
  /购买|支付|pay|order/i,
  /注销|解绑|清空/i,
  /submit/i,
];

const SAFE_BUTTON_HINTS = [/搜索|查询|转换|预览|打开|展开|下一步|应用|筛选|排序|开始|查看/i];
const SAFE_FORM_ACTIONS = ['搜索', '查询', '转换', '预览', '应用', '筛选', '排序', '开始'];
const SAFE_MODAL_ACTIONS = ['确定', '确认', '应用', '保存', '继续', '完成', '关闭', '取消', '知道了', 'OK'];
const MODAL_SELECTORS = ['[role="dialog"]', 'ion-modal', 'ion-alert', '.modal', '.dialog', '.drawer', '.popover'];

function trimLabel(value: string): string {
  return value.trim().replace(/\s+/g, ' ');
}

function isSafeButtonLabel(label: string): boolean {
  const normalized = trimLabel(label);
  if (!normalized || normalized.toLowerCase() === 'button') return false;
  if (normalized.length > 24) return false;
  if (UNSAFE_BUTTON_PATTERNS.some((pattern) => pattern.test(normalized))) return false;
  return SAFE_BUTTON_HINTS.some((pattern) => pattern.test(normalized));
}

function isFormActionLabel(label: string): boolean {
  const normalized = trimLabel(label);
  return SAFE_FORM_ACTIONS.some((action) => normalized.includes(action));
}

function isUsableField(element: FeatureUsageElement): boolean {
  if (!['input', 'textarea', 'select'].includes(element.tag)) return false;

  const type = (element.type ?? '').toLowerCase();
  if (['hidden', 'password', 'checkbox', 'radio', 'file', 'submit', 'reset'].includes(type)) return false;

  return true;
}

function escapeAttributeValue(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function buildFieldSampleValue(element: FeatureUsageElement): string {
  const fingerprint = `${element.name ?? ''} ${element.placeholder ?? ''} ${element.ariaLabel ?? ''} ${element.text ?? ''}`.toLowerCase();

  if (/email|邮箱/.test(fingerprint)) return 'student@example.com';
  if (/phone|mobile|手机号|电话/.test(fingerprint)) return '13800138000';
  if (/number|count|数量|编号/.test(fingerprint)) return '1';
  if (/date|日期/.test(fingerprint)) return '2026-04-23';
  if (/search|搜索|query|关键词|名称|title|标题/.test(fingerprint)) return '中文测试';

  return '测试输入';
}

async function clickButtonByLabel(page: Page, label: string): Promise<boolean> {
  const normalized = trimLabel(label);
  if (!normalized) return false;

  const roleLocator = page.getByRole('button', { name: normalized, exact: true }).first();
  if ((await roleLocator.count().catch(() => 0)) > 0) {
    await roleLocator.click().catch(() => undefined);
    return true;
  }

  const buttonLocator = page.locator('button, ion-button, [role="button"], [type="submit"]').filter({ hasText: normalized }).first();
  if ((await buttonLocator.count().catch(() => 0)) > 0) {
    await buttonLocator.click().catch(() => undefined);
    return true;
  }

  const textLocator = page.getByText(normalized, { exact: true }).first();
  if ((await textLocator.count().catch(() => 0)) > 0) {
    await textLocator.click().catch(() => undefined);
    return true;
  }

  return false;
}

async function clickModalAction(page: Page, labels: string[]): Promise<string> {
  for (const selector of MODAL_SELECTORS) {
    const container = page.locator(selector).first();
    if ((await container.count().catch(() => 0)) === 0) continue;

    for (const label of labels) {
      const button = container.getByRole('button', { name: label, exact: true }).first();
      if ((await button.count().catch(() => 0)) > 0) {
        await button.click().catch(() => undefined);
        return label;
      }

      const textButton = container.getByText(label, { exact: true }).first();
      if ((await textButton.count().catch(() => 0)) > 0) {
        await textButton.click().catch(() => undefined);
        return label;
      }
    }
  }

  return '';
}

async function findFieldLocator(page: Page, element: FeatureUsageElement) {
  if (element.name) {
    const selector = `${element.tag}[name="${escapeAttributeValue(element.name)}"]`;
    const locator = page.locator(selector).first();
    if ((await locator.count().catch(() => 0)) > 0) return locator;
  }

  if (element.placeholder) {
    const locator = page.getByPlaceholder(element.placeholder, { exact: true }).first();
    if ((await locator.count().catch(() => 0)) > 0) return locator;
  }

  if (element.ariaLabel) {
    const locator = page.getByLabel(element.ariaLabel, { exact: true }).first();
    if ((await locator.count().catch(() => 0)) > 0) return locator;
  }

  const genericSelector =
    element.tag === 'textarea'
      ? 'textarea'
      : element.tag === 'select'
        ? 'select'
        : 'input:not([type="hidden"]):not([type="checkbox"]):not([type="radio"]):not([type="password"])';

  const locator = page.locator(genericSelector).first();
  if ((await locator.count().catch(() => 0)) > 0) return locator;

  return null;
}

async function fillField(page: Page, element: FeatureUsageElement, value: string): Promise<boolean> {
  const locator = await findFieldLocator(page, element);
  if (!locator) return false;

  if (element.tag === 'select') {
    const selected = await locator.selectOption({ index: 1 }).catch(() => []);
    return selected.length > 0;
  }

  await locator.click().catch(() => undefined);
  await locator.fill(value).catch(() => undefined);

  const currentValue = await locator.inputValue().catch(() => '');
  return currentValue.trim().length > 0;
}

function summarizeResultDelta(before: string[], after: string[], uniqueTexts: FeatureUsageWorkflowDeps['uniqueTexts']): string[] {
  return uniqueTexts(after.filter((item) => !before.includes(item)), 4);
}

async function collectVisibleModalTexts(page: Page, uniqueTexts: FeatureUsageWorkflowDeps['uniqueTexts']): Promise<string[]> {
  const samples: string[] = [];

  for (const selector of MODAL_SELECTORS) {
    const texts = await page.$$eval(
      selector,
      (els) =>
        els
          .map((el) => (el.textContent || '').trim().replace(/\s+/g, ' '))
          .filter((text) => text.length >= 2 && text.length <= 120)
          .slice(0, 4)
    ).catch(() => [] as string[]);

    samples.push(...texts);
  }

  return uniqueTexts(samples, 6);
}

const buttonStrategy: FeatureActionStrategy = {
  id: 'button',
  async supports(_page, context, deps) {
    const candidates = deps.uniqueTexts(
      context.elements
        .filter((element) => ['button', 'ion-button'].includes(element.tag) || (element.type ?? '').toLowerCase() === 'submit')
        .map((element) => deps.formatElementLabel(element))
        .filter((label) => isSafeButtonLabel(label))
        .filter((label) => !(context.hasUsableFields && isFormActionLabel(label))),
      6
    );

    return candidates.length > 0;
  },
  async run(page, context, deps) {
    const candidates = deps.uniqueTexts(
      context.elements
        .filter((element) => ['button', 'ion-button'].includes(element.tag) || (element.type ?? '').toLowerCase() === 'submit')
        .map((element) => deps.formatElementLabel(element))
        .filter((label) => isSafeButtonLabel(label))
        .filter((label) => !(context.hasUsableFields && isFormActionLabel(label))),
      6
    );
    const targetLabel = candidates[0];
    if (!targetLabel) return null;

    const beforeUrl = page.url();
    const beforeSnippets = await deps.collectBodyTextSnippets(page, 6);
    let clicked = false;
    const requests = await deps.trackRequestsDuringAction(page, async () => {
      clicked = await clickButtonByLabel(page, targetLabel);
    });
    const afterUrl = page.url();
    const afterSnippets = await deps.collectBodyTextSnippets(page, 6);
    const delta = summarizeResultDelta(beforeSnippets, afterSnippets, deps.uniqueTexts);
    const changed = afterUrl !== beforeUrl || requests.length > 0 || delta.length > 0;

    await deps.restorePage(page, context.routeHint, `${context.phase} / action-registry / button-restore`);

    return {
      name: `${context.pageLabel}按钮使用验证`,
      purpose: `发现 ${context.pageLabel} 的按钮后，实际点击安全按钮并观察页面、请求或结果样本是否变化。`,
      summary: clicked
        ? `已尝试点击“${targetLabel}”，${changed ? '观察到真实反馈' : '未观察到明确反馈'}。`
        : `未能稳定点击“${targetLabel}”。`,
      observedOptions: candidates,
      observedFields: ['按钮使用结果'],
      resultSamples: deps.uniqueTexts(delta.length > 0 ? delta : afterSnippets, 3),
      steps: [
        {
          action: '点击已发现按钮并观察结果',
          target: targetLabel,
          expected: '按钮点击后应触发页面反馈、请求变化或结果样本变化',
          actual: !clicked
            ? `未能稳定点击“${targetLabel}”`
            : changed
              ? `点击后 URL=${afterUrl}；请求 ${requests.length} 个；新增结果样本 ${delta.length} 条`
              : `点击后未观测到 URL、请求或结果样本的明确变化`,
          status: !clicked ? 'fail' : changed ? 'pass' : 'warn',
          requests,
        },
      ],
    };
  },
};

const formStrategy: FeatureActionStrategy = {
  id: 'form',
  async supports(_page, context) {
    return context.elements.some((element) => isUsableField(element));
  },
  async run(page, context, deps) {
    const fields = context.elements.filter((element) => isUsableField(element)).slice(0, 2);
    if (fields.length === 0) return null;

    const fieldLabels = deps.uniqueTexts(fields.map((field) => deps.formatElementLabel(field)), 4);
    const beforeUrl = page.url();
    const beforeSnippets = await deps.collectBodyTextSnippets(page, 6);
    const filled: string[] = [];

    const requests = await deps.trackRequestsDuringAction(page, async () => {
      for (const field of fields) {
        const sampleValue = buildFieldSampleValue(field);
        const ok = await fillField(page, field, sampleValue);
        if (ok) {
          filled.push(`${deps.formatElementLabel(field)}=${sampleValue}`);
        }
      }

      if (filled.length === 0) return;

      const primaryField = fields[0];
      const primaryLocator = await findFieldLocator(page, primaryField);
      if (primaryLocator) {
        const fingerprint = `${primaryField.name ?? ''} ${primaryField.placeholder ?? ''} ${primaryField.ariaLabel ?? ''}`.toLowerCase();
        if (/search|搜索|query|关键词/.test(fingerprint)) {
          await primaryLocator.press('Enter').catch(() => undefined);
          return;
        }
      }

      for (const actionLabel of SAFE_FORM_ACTIONS) {
        if (await clickButtonByLabel(page, actionLabel)) {
          return;
        }
      }
    });

    const afterUrl = page.url();
    const afterSnippets = await deps.collectBodyTextSnippets(page, 6);
    const delta = summarizeResultDelta(beforeSnippets, afterSnippets, deps.uniqueTexts);
    const changed = afterUrl !== beforeUrl || requests.length > 0 || delta.length > 0;

    await deps.restorePage(page, context.routeHint, `${context.phase} / action-registry / form-restore`);

    return {
      name: `${context.pageLabel}表单填写验证`,
      purpose: `发现 ${context.pageLabel} 的表单字段后，实际填写并观察提交后的请求、页面或结果变化。`,
      summary:
        filled.length === 0
          ? '发现了表单字段，但未能稳定完成填写。'
          : `已填写 ${filled.length} 个字段，${changed ? '观察到真实反馈' : '未观察到明确反馈'}。`,
      observedOptions: fieldLabels,
      observedFields: ['表单填写结果'],
      resultSamples: deps.uniqueTexts(delta.length > 0 ? delta : afterSnippets, 3),
      steps: [
        {
          action: '填写已发现字段并观察结果',
          target: fieldLabels.join('、') || '表单字段',
          expected: '填写并触发后应出现请求变化、页面变化或结果样本变化',
          actual:
            filled.length === 0
              ? '未能稳定填写任何字段'
              : changed
                ? `已填写 ${filled.join('；')}；请求 ${requests.length} 个；新增结果样本 ${delta.length} 条`
                : `已填写 ${filled.join('；')}，但未观测到 URL、请求或结果样本的明确变化`,
          status: filled.length === 0 ? 'fail' : changed ? 'pass' : 'warn',
          requests,
        },
      ],
    };
  },
};

const modalStrategy: FeatureActionStrategy = {
  id: 'modal',
  async supports(page, _context, deps) {
    const texts = await collectVisibleModalTexts(page, deps.uniqueTexts);
    return texts.length > 0;
  },
  async run(page, context, deps) {
    const modalTexts = await collectVisibleModalTexts(page, deps.uniqueTexts);
    if (modalTexts.length === 0) return null;

    const beforeUrl = page.url();
    const beforeSnippets = await deps.collectBodyTextSnippets(page, 6);
    let actionLabel = '';
    const requests = await deps.trackRequestsDuringAction(page, async () => {
      actionLabel = await clickModalAction(page, SAFE_MODAL_ACTIONS);
    });
    const afterUrl = page.url();
    const afterSnippets = await deps.collectBodyTextSnippets(page, 6);
    const delta = summarizeResultDelta(beforeSnippets, afterSnippets, deps.uniqueTexts);
    const changed = afterUrl !== beforeUrl || requests.length > 0 || delta.length > 0 || actionLabel.length > 0;

    await deps.restorePage(page, context.routeHint, `${context.phase} / action-registry / modal-restore`);

    return {
      name: `${context.pageLabel}弹层确认验证`,
      purpose: `当 ${context.pageLabel} 出现弹层时，尝试使用安全确认动作并观察页面反馈。`,
      summary: actionLabel
        ? `检测到弹层并尝试执行“${actionLabel}”，${changed ? '观察到真实反馈' : '未观察到明确反馈'}。`
        : '检测到弹层，但未找到可安全执行的确认动作。',
      observedOptions: modalTexts,
      observedFields: ['弹层确认结果'],
      resultSamples: deps.uniqueTexts(delta.length > 0 ? delta : afterSnippets, 3),
      steps: [
        {
          action: '确认或关闭已发现弹层',
          target: actionLabel || '弹层确认按钮',
          expected: '确认动作后应出现页面、请求或结果样本变化',
          actual: !actionLabel
            ? '未找到可安全执行的弹层确认动作'
            : changed
              ? `已执行“${actionLabel}”；请求 ${requests.length} 个；新增结果样本 ${delta.length} 条`
              : `已执行“${actionLabel}”，但未观测到 URL、请求或结果样本的明确变化`,
          status: !actionLabel ? 'warn' : changed ? 'pass' : 'warn',
          requests,
        },
      ],
    };
  },
};

const DEFAULT_ACTION_REGISTRY: FeatureActionStrategy[] = [buttonStrategy, formStrategy, modalStrategy];

export async function runFeatureActionRegistry(
  page: Page,
  config: Pick<FeatureActionStrategyContext, 'routeHint' | 'pageLabel' | 'phase'>,
  deps: FeatureUsageWorkflowDeps,
  registry: FeatureActionStrategy[] = DEFAULT_ACTION_REGISTRY
): Promise<FeatureUsageWorkflow[]> {
  const workflows: FeatureUsageWorkflow[] = [];
  let elements = await deps.collectElements(page);

  for (const strategy of registry) {
    const context: FeatureActionStrategyContext = {
      ...config,
      elements,
      hasUsableFields: elements.some((element) => isUsableField(element)),
    };

    if (!(await strategy.supports(page, context, deps))) {
      continue;
    }

    const workflow = await strategy.run(page, context, deps);
    if (workflow) {
      workflows.push(workflow);
      elements = await deps.collectElements(page);
    }
  }

  return workflows;
}