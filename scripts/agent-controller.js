#!/usr/bin/env node
/**
 * SigmaReading AI-First Autonomous Exploration Controller
 *
 * 目标：按 skill 术语协调“探针采样 -> AI 识别功能 -> AI 形成结论 -> AI 决定下一轮探针 -> 控制器判断是否收敛”。
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT, 'docs', 'exploration');
const ITERATION_METADATA_FILE = path.join(ROOT, 'iteration-metadata.json');
const MAX_ITERATIONS = parseInt(process.env.MAX_ITERATIONS || '5', 10);
const MODE = process.env.MODE || 'iterate';
const TARGET_ROUTES = parseRouteList(
  process.env.TARGET_ROUTES || '/zh-hans/home,/zh-hans/reading,/zh-hans/playlist'
);

function parseRouteList(value) {
  return [...new Set(value.split(',').map((item) => item.trim()).filter(Boolean))];
}

function routeSlug(route) {
  return route.replace(/^\//, '').replace(/[^a-zA-Z0-9]+/g, '-').replace(/-+/g, '-');
}

function log(type, msg) {
  const icons = {
    info: 'ℹ️',
    success: '✅',
    error: '❌',
    warning: '⚠️',
    run: '▶️',
    check: '✔️',
  };
  console.log(`${icons[type] || ''} ${msg}`);
}

function execCmd(cmd, description, options = {}) {
  log('run', description);
  try {
    const output = execSync(cmd, {
      cwd: ROOT,
      encoding: 'utf-8',
      stdio: 'pipe',
      maxBuffer: 10 * 1024 * 1024,
      ...options,
    });
    log('success', `${description} 已完成`);
    return { success: true, output };
  } catch (err) {
    const timedOut = typeof err?.signal === 'string' || err?.killed === true;
    const reason = timedOut ? `${description} 超时` : `${description} 失败: ${err.message}`;
    log('error', reason);
    return { success: false, error: err.message, output: err.stdout?.toString?.() || '' };
  }
}

function readFile(filepath) {
  try {
    return fs.readFileSync(filepath, 'utf-8');
  } catch {
    return null;
  }
}

function readJson(filepath) {
  try {
    return JSON.parse(fs.readFileSync(filepath, 'utf-8'));
  } catch {
    return null;
  }
}

function writeReport(route, iteration, data) {
  const reportFile = path.join(ROOT, `iteration-${routeSlug(route)}-${iteration}-report.json`);
  fs.writeFileSync(reportFile, JSON.stringify(data, null, 2));
  log('success', `页面级 AI 审阅报告已保存: ${reportFile}`);
}

function phaseInitialize() {
  log('info', '═════ STEP 0: SKILL 初始化 ═════');

  log('check', `Node.js: ${process.version}`);

  const npmResult = execCmd('npm --version', '检查 npm 运行环境');
  if (!npmResult.success) return false;

  const hasNodeModules = fs.existsSync(path.join(ROOT, 'node_modules'));
  if (!hasNodeModules) {
    const installResult = execCmd('npm install', '安装 skill 依赖');
    if (!installResult.success) return false;
  } else {
    log('success', 'Skill 依赖已就绪');
  }

  log('success', 'Skill 初始化完成\n');
  return true;
}

function phaseExplore(route, iteration) {
  log('info', `═════ STEP 1: 探针采样 ${route} (第 ${iteration} 轮) ═════`);
  return execCmd(
    `npm run explore -- --iterative --routes=${route}`,
    `执行页面探针采样 ${route} (第 ${iteration} 轮)`,
    { timeout: 240000 }
  );
}

function matchRoutePage(metadata, route) {
  if (!metadata || !Array.isArray(metadata.pages)) return [];

  return metadata.pages.filter((page) => {
    return (
      page.routeHint === route ||
      page.path === route ||
      (typeof page.path === 'string' && page.path.startsWith(`${route}/`)) ||
      (typeof page.routeHint === 'string' && page.routeHint.startsWith(`${route}/`))
    );
  });
}

function analyzeResults(route) {
  const metadata = readJson(ITERATION_METADATA_FILE);
  const pages = matchRoutePage(metadata, route);
  const featuresFile = path.join(DOCS_DIR, 'sigmareading-features.md');
  const apisFile = path.join(DOCS_DIR, 'api-endpoints.md');

  const featureMarkdown = readFile(featuresFile) || '';
  const apiMarkdown = readFile(apisFile) || '';

  const findings = pages.flatMap((page) => page.aiAnalysis?.discoveredCapabilities || page.featureFindings || []);
  const iterationLogs = pages.flatMap((page) => page.iterationLogs || []);
  const adjustments = iterationLogs.flatMap((iterationLog) => iterationLog.adjustments || []);
  const newFeatureHints = iterationLogs.flatMap((iterationLog) => iterationLog.newlyDiscoveredFeatures || []);
  const aiAnalyses = pages.map((page) => page.aiAnalysis).filter(Boolean);
  const openQuestions = aiAnalyses.flatMap((analysis) => analysis.openQuestions || []);
  const nextProbeSuggestions = aiAnalyses.flatMap((analysis) => analysis.nextProbeSuggestions || []);
  const probeSignals = pages.flatMap((page) => {
    const evidence = page.probeEvidence || {};
    return [
      ...(evidence.observedSignals || []),
      ...(evidence.interactionSignals || []),
      ...(evidence.workflowSignals || []),
      ...(evidence.networkSignals || []),
    ];
  });
  const workflowFailures = pages.flatMap((page) => page.workflows || []).flatMap((workflow) => workflow.statuses || []).filter((status) => status === 'fail').length;
  const workflowPasses = pages.flatMap((page) => page.workflows || []).flatMap((workflow) => workflow.statuses || []).filter((status) => status === 'pass').length;

  const analysis = {
    route,
    timestamp: new Date().toISOString(),
    pages: pages.length,
    aiReadyPages: aiAnalyses.length,
    probeSignals: probeSignals.length,
    capabilityJudgments: findings.length,
    verifiedCapabilityJudgments: findings.filter((finding) => finding.status === 'pass').length,
    workflowPasses,
    workflowFailures,
    scriptAdjustments: adjustments.length,
    openQuestions: openQuestions.length,
    nextProbeSuggestions: nextProbeSuggestions.length,
    newFeatureHints: newFeatureHints.length,
    markdownMentions: (featureMarkdown.match(new RegExp(route.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length,
    apiMentions: (apiMarkdown.match(/^- /gm) || []).length,
    scriptIds: [...new Set(pages.map((page) => page.scriptId).filter(Boolean))],
  };

  log(
    'info',
    `AI 审阅 ${route}: pages=${analysis.pages}, aiReady=${analysis.aiReadyPages}, probeSignals=${analysis.probeSignals}, capabilities=${analysis.capabilityJudgments}, failures=${analysis.workflowFailures}, openQuestions=${analysis.openQuestions}, adjustments=${analysis.scriptAdjustments}`
  );
  return analysis;
}

function shouldContinueIterating(iteration, currentAnalysis, previousAnalysis) {
  if (iteration >= MAX_ITERATIONS) {
    log('info', `达到最大迭代轮次 (${MAX_ITERATIONS})，控制器停止继续补采`);
    return false;
  }

  if (currentAnalysis.pages === 0) {
    log('warning', `${currentAnalysis.route} 未生成页面级 probeEvidence，无法继续 AI 审阅`);
    return false;
  }

  if (currentAnalysis.workflowFailures === 0 && currentAnalysis.scriptAdjustments === 0 && currentAnalysis.openQuestions === 0) {
    log('success', `${currentAnalysis.route} 已收敛：AI 无剩余失败、脚本补采需求或开放问题`);
    return false;
  }

  if (previousAnalysis) {
    const improvedCapabilities = currentAnalysis.capabilityJudgments > previousAnalysis.capabilityJudgments;
    const reducedFailures = currentAnalysis.workflowFailures < previousAnalysis.workflowFailures;
    const reducedQuestions = currentAnalysis.openQuestions < previousAnalysis.openQuestions;
    const addedHints = currentAnalysis.newFeatureHints > previousAnalysis.newFeatureHints;

    if (!improvedCapabilities && !reducedFailures && !reducedQuestions && !addedHints) {
      log('info', `${currentAnalysis.route} 的 AI 审阅证据包不再继续改善，停止本页迭代`);
      return false;
    }
  }

  return true;
}

function phaseAnalyzeAndImprove(route, iteration, previousAnalysis) {
  log('info', `═════ STEP 2 + STEP 3: AI 识别功能与形成结论 ${route} (第 ${iteration} 轮) ═════`);
  const currentAnalysis = analyzeResults(route);

  if (previousAnalysis) {
    log('info', `候选功能判断增量: ${currentAnalysis.capabilityJudgments - previousAnalysis.capabilityJudgments}`);
    log('info', `失败工作流增量: ${currentAnalysis.workflowFailures - previousAnalysis.workflowFailures}`);
    log('info', `开放问题增量: ${currentAnalysis.openQuestions - previousAnalysis.openQuestions}`);
  }

  log('success', 'AI 审阅完成\n');
  return currentAnalysis;
}

function phaseTest() {
  log('info', '═════ STEP 5: 控制器判断是否收敛（测试复核） ═════');
  const testResult = execCmd('npm run test:exploration', '执行测试复核');
  if (testResult.success) {
    log('success', '测试复核完成\n');
    return true;
  }

  log('warning', '测试复核已结束，请检查结果\n');
  return true;
}

function main() {
  log('info', `\n🤖 SigmaReading AI-First 自治探索控制器\n`);
  log('info', `Skill 模式: ${MODE.toUpperCase()}`);
  log('info', `最大迭代轮次: ${MAX_ITERATIONS}`);
  log('info', `目标页面: ${TARGET_ROUTES.join(', ')}\n`);

  if (!phaseInitialize()) {
    log('error', 'Skill 初始化失败，控制器退出');
    process.exit(1);
  }

  const allReports = [];

  if (MODE === 'test') {
    phaseTest();
  } else {
    for (const route of TARGET_ROUTES) {
      let previousAnalysis = null;
      let executedIterations = 0;

      log('info', `\n${'='.repeat(60)}`);
      log('info', `页面自治闭环: ${route}`);
      log('info', `${'='.repeat(60)}\n`);

      for (let iteration = 1; iteration <= MAX_ITERATIONS; iteration++) {
        const exploreResult = phaseExplore(route, iteration);
        if (!exploreResult.success) {
          log('error', `${route} 的探针采样失败`);
          break;
        }

        const currentAnalysis = phaseAnalyzeAndImprove(route, iteration, previousAnalysis);
        const report = {
          route,
          iteration,
          timestamp: new Date().toISOString(),
          analysis: currentAnalysis,
        };
        allReports.push(report);
        writeReport(route, iteration, report);
        executedIterations = iteration;

        if (MODE === 'explore' || !shouldContinueIterating(iteration, currentAnalysis, previousAnalysis)) {
          break;
        }

        previousAnalysis = currentAnalysis;
      }

      log('success', `${route} 页面闭环完成，共执行 ${executedIterations} 轮\n`);
    }
  }

  if (MODE === 'iterate' || MODE === 'test') {
    phaseTest();
  }

  fs.writeFileSync(
    path.join(ROOT, 'agent-execution-summary.json'),
    JSON.stringify(
      {
        mode: MODE,
        maxIterations: MAX_ITERATIONS,
        targetRoutes: TARGET_ROUTES,
        reports: allReports,
        completedAt: new Date().toISOString(),
      },
      null,
      2
    )
  );

  log('success', 'Skill 运行摘要已保存: agent-execution-summary.json\n');
}

if (require.main === module) {
  try {
    main();
  } catch (err) {
    log('error', `Unexpected error: ${err.message}`);
    process.exit(1);
  }
}

module.exports = { analyzeResults, shouldContinueIterating };