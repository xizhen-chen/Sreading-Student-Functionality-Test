import { Page } from '@playwright/test';

import { runFeatureActionRegistry } from './actions/registry.js';

export type {
  FeatureActionStrategy,
  FeatureActionStrategyContext,
  FeatureUsageElement,
  FeatureUsageWorkflow,
  FeatureUsageWorkflowConfig,
  FeatureUsageWorkflowDeps,
  FeatureUsageWorkflowStatus,
  FeatureUsageWorkflowStep,
} from './feature-usage-contracts.js';

import type { FeatureUsageWorkflow, FeatureUsageWorkflowConfig, FeatureUsageWorkflowDeps } from './feature-usage-contracts.js';

export async function probeFeatureUsageWorkflows(
  page: Page,
  config: FeatureUsageWorkflowConfig,
  deps: FeatureUsageWorkflowDeps
): Promise<FeatureUsageWorkflow[]> {
  return runFeatureActionRegistry(page, config, deps);
}