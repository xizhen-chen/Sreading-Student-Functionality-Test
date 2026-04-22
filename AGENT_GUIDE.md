# 🤖 AI-First Agent 运行指南

## 核心原则

这个仓库现在按 AI-first 思路运行：

- Playwright 只是探针工具，负责进入页面、点击、输入、抓 DOM、抓网络、留截图。
- AI 才是分析者，负责识别功能、判断预期结果、总结结论、决定下一轮探针重点。
- 控制器负责调度页面探针，并检查“AI 是否已经拿到足够证据”，而不是只统计 DOM 数量。

详细流程见 [docs/exploration/skill-flow.md](docs/exploration/skill-flow.md)。

## 快速开始

### 方式 1：按页面自治迭代（推荐）
```bash
npm run agent:iterate
```

效果：
- 自动检查依赖
- 针对目标页面逐页运行探针
- 为每个页面生成 Playwright 原始证据包
- 输出 AI 分析草案、开放问题、下一轮探针建议

### 方式 2：只做一次探针采样
```bash
npm run agent:explore
```

效果：
- 运行一次按页探针
- 生成证据包与 AI 分析草案
- 适合快速看某个页面当前暴露了哪些能力

### 方式 3：只跑测试
```bash
npm run agent:test
```

## 推荐的 AI-first 执行流程

```text
1. Playwright 探针采样
  - 进入页面
  - 执行动作
  - 记录 DOM / 网络 / 截图 / 请求 / 结果样本

2. 形成 AI 输入包
  - probeEvidence: 原始信号
  - workflows: 动作与结果
  - correction-log: 探针补救记录

3. AI 分析与总结
  - 识别当前页面有哪些候选功能
  - 判断每个功能的预期结果是否已被验证
  - 输出 openQuestions 和 nextProbeSuggestions

4. 控制器决定是否继续
  - 如果 AI 还有开放问题，继续下一轮探针
  - 如果 AI 没有开放问题且关键失败为 0，则视为收敛
```

## 关键输出

### Playwright 证据层

| 文件 | 作用 |
|------|------|
| `runs/<run-id>/screenshots/*.png` | 页面截图证据 |
| `runs/<run-id>/docs/api-endpoints.md` | 网络信号采样 |
| `runs/<run-id>/docs/correction-log.md` | 探针自愈记录 |
| `runs/<run-id>/docs/iteration-metadata.json` | 供 AI 消费的页面证据包 |

### AI 分析层

| 文件 | 作用 |
|------|------|
| `runs/<run-id>/docs/sigmareading-features.md` | AI 角度的页面总览 |
| `runs/<run-id>/docs/pages/*.md` | 单页 AI 分析草案 |
| `agent-execution-summary.json` | 控制器对各页面 AI-ready 状态的摘要 |
| `iteration-*-report.json` | 每个页面/轮次的 AI 复核结果 |

## 如何看结果

优先看这几层：

1. `iteration-metadata.json`
  - `probeEvidence`: Playwright 采到的原始证据
  - `aiAnalysis`: AI 当前结论、待确认问题、下一轮探针建议

2. `docs/pages/*.md`
  - `Playwright 原始探针证据`
  - `AI 分析结论`
  - `AI 驱动的迭代闭环`

3. `agent-execution-summary.json`
  - 哪些页面已有 AI-ready 证据
  - 哪些页面仍然没有 metadata / 仍有开放问题

## 调试顺序

当某页没有收敛时，优先按这个顺序排查：

1. 看 `probeEvidence` 有没有采到足够的页面信号。
2. 看 `aiAnalysis.openQuestions` 在卡什么。
3. 看 `correction-log.md` 是否说明探针一直在补救同一类故障。
4. 只有在证据明显不够时，才去改 Playwright 选择器或等待逻辑。

## 一句话判断方向是否正确

如果你的报告主要在说“抓到了多少 DOM、多少 API、多少按钮”，方向还是旧的。
如果你的报告主要在说“AI 根据哪些证据判断当前页面有哪些功能、哪些未闭环、下一轮要补什么探针”，方向才是对的。

---

## 关键指标

### 收敛指标

| 指标 | 说明 | 良好范围 |
|------|------|---------|
| 新增功能数 | 本轮相比上轮的新模块 | > 0 |
| 新增 API 数 | 本轮相比上轮的新 API | > 0 |
| 修复数 | 自动修复的次数 | < 5 |
| 修复趋势 | 修复数的变化 | ↓ 下降 |

### 停止条件

任意满足一个即停止迭代:

1. ✅ 连续 2 轮没有新增功能/API
2. ✅ 修复数 < 2 (系统稳定)
3. ✅ 已达到最大迭代次数
4. ✅ 功能覆盖率达到目标

---

## 常见问题

**Q: Agent 会修改我的代码吗？**  
A: 不会。Agent 只读取日志和数据，不会自动修改 `scripts/explore.ts`。改进代码需要开发者手动编辑。

**Q: 可以并行运行多个 Agent 吗？**  
A: 可以，但每个 Agent 会生成独立的 timestamp 目录，不会冲突。

**Q: 如何停止正在运行的 Agent？**  
A: Ctrl+C 中断即可。

**Q: Agent 会上传数据到云端吗？**  
A: 不会。所有数据都保存在本地 `docs/` 和 `runs/` 目录中。

---

## 高级用法

### 自定义迭代策略

编辑 `scripts/agent-controller.js` 的 `shouldContinueIterating()` 函数，自定义停止条件。

### 集成自己的分析逻辑

在 `scripts/agent-controller.js` 中添加 `phaseAnalyzeAndImprove()` 的自定义分析代码。

### 自动修复选择器

结合 correction-log 和截图，可以编写脚本自动生成新的选择器候选。

---

**版本**: 1.0  
**最后更新**: 2026-04-22
