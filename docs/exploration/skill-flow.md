# AI-First Skill Flow

## 角色分工

### Playwright

Playwright 只做 4 件事：

- 进入页面
- 执行动作
- 采集证据
- 在失败时做有限自愈

它不是分析者，不负责判断“这个页面到底有什么功能”，也不负责给出最终结论。

### AI

AI 负责 4 件事：

- 从探针证据中识别功能候选
- 为每个功能写出预期结果
- 基于动作结果做结论归纳
- 决定下一轮探针要补采什么

### Controller

控制器负责串起两者：

- 触发页面探针
- 收集页面级证据包
- 检查 AI 是否还有开放问题
- 决定是否继续下一轮

## 单页闭环

### 1. 探针采样

输入：页面路由

输出：

- 标题、heading、链接、按钮、字段
- 网络请求
- 工作流动作与结果
- 截图
- correction log

### 2. AI 功能发现

AI 基于 `probeEvidence` 回答：

- 这个页面看起来有什么功能？
- 哪些控件值得升级为专属工作流？
- 预期结果应该如何描述？

### 3. AI 驱动验证

AI 不直接点页面，而是利用探针结果判断：

- 哪些功能已经被验证
- 哪些只是发现了入口，还没有证据闭环
- 哪些失败可能是登录态、导航抖动、弹层缺采样造成的

### 4. AI 总结与再规划

每个页面都应输出：

- `aiAnalysis.summary`
- `aiAnalysis.conclusion`
- `aiAnalysis.openQuestions`
- `aiAnalysis.nextProbeSuggestions`

这些字段才是下一轮迭代的主输入。

## 产物映射

### 原始证据

- `probeEvidence.observedSignals`
- `probeEvidence.interactionSignals`
- `probeEvidence.workflowSignals`
- `probeEvidence.networkSignals`
- `probeEvidence.rawSamples`

### AI 判断

- `featureFindings`：AI 视角的候选能力判断
- `aiAnalysis`：AI 当前总结、开放问题、下一轮建议
- `iterationLogs`：AI 驱动的闭环记录

## 收敛定义

一个页面只有同时满足下面条件，才算“收敛”：

- 已生成页面级 metadata
- 关键工作流没有 fail
- `aiAnalysis.openQuestions` 为 0
- 当前轮没有必须继续补的脚本调整建议

如果只采到了 DOM 或链接，但 AI 仍说不清楚“这个页面的核心功能是否已被验证”，那就不算收敛。

## 实施原则

1. 优先补证据，不要先补结论。
2. 先让 AI 能回答“为什么还不能下结论”，再继续加探针。
3. 脚本输出应该服务于 AI 判断，而不是自己冒充 AI。