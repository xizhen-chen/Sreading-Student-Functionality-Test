import { Page } from '@playwright/test';

import type { PageWorkflow, WorkflowModuleDeps, WorkflowPageKind } from './contracts.js';
import { analyzeDeepPageWorkflows } from './deep.js';
import { analyzeHomeWorkflows } from './home.js';
import { analyzeNavigationPageWorkflows } from './navigation.js';
import { analyzeProfileWorkflows } from './profile.js';

export async function analyzeModularPageWorkflows(
  page: Page,
  pageKind: WorkflowPageKind,
  routeHint: string,
  phase: string,
  deps: WorkflowModuleDeps
): Promise<PageWorkflow[] | null> {
  if (pageKind === 'home' || routeHint === '/zh-hans/home') {
    return analyzeHomeWorkflows(page, phase, deps);
  }

  if (routeHint === '/zh-hans/profile') {
    return analyzeProfileWorkflows(page, phase, deps);
  }

  if (pageKind === 'deep') {
    return analyzeDeepPageWorkflows(page, routeHint, deps);
  }

  if (pageKind === 'navigation') {
    return analyzeNavigationPageWorkflows(page, phase, routeHint, deps);
  }

  return null;
}