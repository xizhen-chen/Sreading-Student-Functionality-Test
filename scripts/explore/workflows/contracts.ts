import { Page } from '@playwright/test';

export type WorkflowPageKind = 'login' | 'home' | 'navigation' | 'deep' | 'route';
export type WorkflowStatus = 'pass' | 'warn' | 'fail';

export interface WorkflowElement {
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

export interface WorkflowStep {
  action: string;
  target: string;
  expected: string;
  actual: string;
  status: WorkflowStatus;
  requests: string[];
}

export interface PageWorkflow {
  name: string;
  purpose: string;
  summary: string;
  observedOptions: string[];
  observedFields: string[];
  resultSamples: string[];
  steps: WorkflowStep[];
}

export interface WorkflowRouteProbe {
  status: WorkflowStatus;
  actual: string;
  requests: string[];
  resultSamples: string[];
}

export interface WorkflowModuleDeps {
  baseUrl: string;
  adaptiveNavigate: (page: Page, url: string, phase: string) => Promise<boolean>;
  collectElements: (page: Page) => Promise<WorkflowElement[]>;
  collectActionableTexts: (page: Page) => Promise<string[]>;
  collectBodyTextSnippets: (page: Page, maxItems?: number) => Promise<string[]>;
  formatElementLabel: (element: WorkflowElement) => string;
  uniqueTexts: (values: Array<string | null | undefined>, limit?: number) => string[];
  trackRequestsDuringAction: (page: Page, action: () => Promise<void>, waitMs?: number) => Promise<string[]>;
  restorePage: (page: Page, routeHint: string, phase: string) => Promise<void>;
  isExplorableRoute: (route: string) => boolean;
  resolveDeepRouteLabel: (route: string) => string | null;
}