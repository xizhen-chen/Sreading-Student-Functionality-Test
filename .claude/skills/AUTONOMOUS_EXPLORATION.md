# AUTONOMOUS_EXPLORATION

SigmaReading 页面自治探索的唯一执行 skill。

以后所有自治探索都应优先遵循这个 skill，而不是直接把 Playwright 当成主脑来跑。

---

## 核心原则

### 1. AI 是主脑

AI 负责：

- 判断当前页面有哪些候选功能
- 为每个候选功能写出预期结果
- 基于探针证据给出结论
- 决定下一轮还需要补什么探针

### 2. Playwright 只是探针

Playwright 只负责：

- 进入页面
- 触发按钮、输入、排序、筛选等动作
- 收集 DOM / 文本 / 网络 / 截图 / 工作流结果
- 在有限范围内做自愈

Playwright 不负责：

- 定义页面功能边界
- 直接输出最终分析结论
- 用“抓到了多少按钮/链接”代替功能判断

### 3. 控制器只判断 AI 是否已经拿到足够证据

控制器关心的是：

- 页面级 metadata 是否存在
- `probeEvidence` 是否足够
- `aiAnalysis.openQuestions` 是否还存在
- `aiAnalysis.nextProbeSuggestions` 是否还要求下一轮补采

而不是简单看：

- 抓到了多少 DOM
- 抓到了多少 API
- 截了多少图

---

## 标准闭环

每个页面都必须按下面 5 步运行：

### 第 1 步：探针采样

运行 Playwright 页面脚本，采样：

- 页面标题和 heading
- 可点击入口
- 按钮和输入字段
- 工作流动作结果
- 网络请求
- 截图
- correction log

输出必须进入 `probeEvidence`。

### 第 2 步：AI 识别功能

AI 根据 `probeEvidence` 判断：

- 当前页面显式暴露了哪些能力
- 哪些能力只是候选入口
- 哪些能力已经有足够证据进入验证阶段

输出必须进入：

- `featureFindings`
- `aiAnalysis.summary`

### 第 3 步：AI 形成结论

AI 基于工作流结果和原始信号，总结：

- 哪些功能已验证
- 哪些功能只是部分验证
- 哪些页面仍不能下结论

输出必须进入：

- `aiAnalysis.conclusion`
- `aiAnalysis.openQuestions`

### 第 4 步：AI 决定下一轮探针

如果还有问题未闭环，AI 必须指出下一轮探针重点：

- 要补哪个按钮、字段、弹层或详情页
- 要优先采哪类空结果态、筛选态、排序态
- 是探针不足，还是页面本身不稳定

输出必须进入：

- `aiAnalysis.nextProbeSuggestions`
- `iterationLogs`

### 第 5 步：控制器判断是否收敛

页面只有满足下面条件，才算收敛：

- 页面级 metadata 已生成
- `workflowFailures === 0`
- `scriptAdjustments === 0`
- `openQuestions === 0`

只要 AI 还有开放问题，这个页面就不能算收敛。

---

## 实际执行入口

### 单页探针运行

```bash
npm run explore -- --iterative --routes=/zh-hans/reading
```

适用场景：

- 专门补某个页面
- 验证新的页面工作流
- 先让某个页面形成完整证据包

### 控制器单页运行

```bash
$env:TARGET_ROUTES='/zh-hans/reading'; $env:MODE='iterate'; $env:MAX_ITERATIONS='3'; node scripts/agent-controller.js
```

适用场景：

- 检查某一页 AI 是否已经收敛
- 验证 open questions 是否下降

### 控制器多页运行

```bash
$env:TARGET_ROUTES='/zh-hans/home,/zh-hans/reading,/zh-hans/playlist'; $env:MODE='iterate'; $env:MAX_ITERATIONS='3'; node scripts/agent-controller.js
```

适用场景：

- 检查多页面自治流程是否能稳定运行
- 识别哪些页面还没有形成 AI-ready 证据

### 带登录态运行

```bash
$env:SR_USERNAME='xizhen.chen+3@tonglec.org'; $env:SR_PASSWORD='123'; npm run explore -- --iterative --routes=/zh-hans/reading
```

如果目标页面需要登录，默认优先走登录态采样。

---

## 产物要求

### 必须生成的原始证据层

- `runs/<run-id>/docs/iteration-metadata.json`
- `runs/<run-id>/docs/api-endpoints.md`
- `runs/<run-id>/docs/correction-log.md`
- `runs/<run-id>/screenshots/*.png`

其中 `iteration-metadata.json` 必须包含：

- `probeEvidence`
- `aiAnalysis`
- `featureFindings`
- `iterationLogs`

### 必须生成的 AI 总结层

- `runs/<run-id>/docs/sigmareading-features.md`
- `runs/<run-id>/docs/page-details-index.md`
- `runs/<run-id>/docs/pages/*.md`
- `agent-execution-summary.json`

页面文档必须显式包含：

- `Playwright 探针概览`
- `AI 分析结论`
- `Playwright 原始探针证据`
- `AI 驱动的迭代闭环`

---

## 分析时优先读取哪些字段

### 首先看 `probeEvidence`

判断探针有没有采到足够原始信号：

- `observedSignals`
- `interactionSignals`
- `workflowSignals`
- `networkSignals`
- `rawSamples`

### 再看 `aiAnalysis`

判断 AI 当前是否已经形成有效结论：

- `summary`
- `conclusion`
- `openQuestions`
- `nextProbeSuggestions`

### 最后看 `iterationLogs`

判断闭环是否真正完成：

- 是否只是发现功能
- 是否真的完成验证
- 是否还需要继续补脚本

---

## 遇到问题时的处理顺序

### 场景 1：页面没有 metadata

优先判断：

- 探针是否根本没成功进入页面
- 登录态是否中断
- 导航是否抖动导致中途丢上下文

不要直接先加更多结论逻辑。

### 场景 2：有 DOM 但 AI 仍无法判断

说明是证据不够，不是总结不够。

优先补：

- 更关键的操作步骤
- 结果样本
- 网络请求
- 弹层选项

### 场景 3：AI 结论还是太像脚本总结

说明流程又退回 Playwright-first 了。

修正方式：

- 减少“抓到多少按钮”这类伪结论
- 增加“AI 还不能判断什么、为什么不能判断、下一轮该补什么”

---

## 收敛定义

一个页面只有在 AI 视角下满足以下条件，才能判定为“完成”：

1. 页面级 `probeEvidence` 存在
2. 页面级 `aiAnalysis` 存在
3. `aiAnalysis.openQuestions.length === 0`
4. 关键工作流没有 `fail`
5. 当前轮没有必须继续补的探针脚本调整

如果只是页面能打开，或者脚本抓到了很多元素，但 AI 仍有开放问题，就不能结束。

---

## 本 skill 的执行纪律

以后通过这个 skill 运行时，必须遵守：

- 不要把 Playwright 的采样结果直接当最终分析
- 不要把“API 数量 / DOM 数量 / 截图数量”当主要成果
- 任何页面结论都应以 `aiAnalysis` 为准
- 任何下一轮动作都应优先来自 `aiAnalysis.nextProbeSuggestions`

---

## 当前仓库对应实现

当前仓库中，这个 skill 已映射到：

- 探针脚本：[scripts/explore.ts](../scripts/explore.ts)
- 控制器：[scripts/agent-controller.js](../scripts/agent-controller.js)
- 指南：[AGENT_GUIDE.md](../AGENT_GUIDE.md)
- 流程说明：[docs/exploration/skill-flow.md](../docs/exploration/skill-flow.md)

以后如果流程再改，优先更新这个 skill 文件，再同步其它说明文件。
