import { Page } from '@playwright/test';

export type FeatureUsageWorkflowStatus = 'pass' | 'warn' | 'fail';

export interface FeatureUsageElement {
  tag: string;
  text?: string;
  href?: string | null;
  type?: string | null;
  dataCy?: string | null;
  name?: string | null;
  placeholder?: string | null;
  ariaLabel?: string | null;
  className?: string | null;
}

export interface FeatureUsageWorkflowStep {
  action: string;
  target: string;
  expected: string;
  actual: string;
  status: FeatureUsageWorkflowStatus;
  requests: string[];
}

export interface FeatureUsageWorkflow {
  name: string;
  purpose: string;
  summary: string;
  observedOptions: string[];
  observedFields: string[];
  resultSamples: string[];
  steps: FeatureUsageWorkflowStep[];
}

export interface FeatureUsageWorkflowConfig {
  routeHint: string;
  pageLabel: string;
  phase: string;
}

export interface FeatureUsageWorkflowDeps {
  collectElements: (page: Page) => Promise<FeatureUsageElement[]>;
  collectBodyTextSnippets: (page: Page, maxItems?: number) => Promise<string[]>;
  formatElementLabel: (element: FeatureUsageElement) => string;
  uniqueTexts: (values: Array<string | null | undefined>, limit?: number) => string[];
  trackRequestsDuringAction: (page: Page, action: () => Promise<void>, waitMs?: number) => Promise<string[]>;
  restorePage: (page: Page, routeHint: string, phase: string) => Promise<void>;
}

export interface FeatureActionStrategyContext extends FeatureUsageWorkflowConfig {
  elements: FeatureUsageElement[];
  hasUsableFields: boolean;
}

export interface FeatureActionStrategy {
  id: string;
  supports: (page: Page, context: FeatureActionStrategyContext, deps: FeatureUsageWorkflowDeps) => Promise<boolean>;
  run: (page: Page, context: FeatureActionStrategyContext, deps: FeatureUsageWorkflowDeps) => Promise<FeatureUsageWorkflow | null>;
}