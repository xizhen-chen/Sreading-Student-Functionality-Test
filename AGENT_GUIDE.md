# AI-First Agent 运行指南
## 当前目标层级

这个仓库现在不是单层目标，而是三层目标：

- L1：页面级首轮闭环
- L2：业务流闭环
- L3：状态空间闭环

当前自动化实现已经基本覆盖 L1，但还不能因为页面都显示“无待确认问题”，就宣称整个网站探索完成。

详细执行原则以 [.claude/skills/AUTONOMOUS_EXPLORATION.md](.claude/skills/AUTONOMOUS_EXPLORATION.md) 为准，结构说明见 [docs/exploration/skill-flow.md](docs/exploration/skill-flow.md)。

## 快速开始

### 方式 1：整站首次摸底

```bash
$env:SR_USERNAME='你的账号'; $env:SR_PASSWORD='你的密码'; npm run explore
```

效果：

- 建立整站页面地图
- 生成页面级证据包
- 形成首轮页面专属 workflow

### 方式 2：定向页面闭环

```bash
$env:SR_USERNAME='你的账号'; $env:SR_PASSWORD='你的密码'; npm run explore -- --iterative --routes=/zh-hans/reading
```

或：

```bash
$env:SR_USERNAME='你的账号'; $env:SR_PASSWORD='你的密码'; $env:TARGET_ROUTES='/zh-hans/reading'; npm run agent:iterate
```

效果：

- 只补指定页面
- 适合压 open questions
- 适合补页面专属 workflow

### 方式 3：定向修复后的整站刷新

```bash
$env:SR_USERNAME='你的账号'; $env:SR_PASSWORD='你的密码'; npm run explore
```

效果：

- 把 latest 结果恢复为整站视图
- 防止局部 run 覆盖整站最终判断

## 如何判断当前做到哪一层

### L1：页面级首轮闭环

看这些文件：

- `runs/<run-id>/docs/iteration-metadata.json`
- `runs/<run-id>/docs/page-details-index.md`
- `runs/<run-id>/docs/pages/*.md`
- `agent-execution-summary.json`

L1 完成标志：

- 页面级 metadata 存在
- 页面级 workflow 无 fail
- `openQuestions = 0`

### L2：业务流闭环

要回答这些问题：

- 页面之间是怎样组成任务链路的
- 哪些 workflow 已经跨页闭环
- 哪些页面只是“能打开”，还没有纳入业务任务

如果还回答不了这些问题，就说明仍停留在 L1。

### L3：状态空间闭环

要回答这些问题：

- 空结果态有没有覆盖
- 筛选态 / 排序态有没有覆盖
- 权限态 / 异常路由态有没有覆盖
- 边界态是不是被误判成失败或已完成

如果这些状态还没有系统化清单，就说明仍未达到最终探索完成。

## 一句最重要的判断

`page-details-index.md` 全部显示“无待确认问题”，只代表 L1 基本完成。

它不代表：

- 关键业务流已经完整闭环
- 状态空间已经充分覆盖
- 网站探索已经达到最终目标

## 关键输出

### 页面级证据层

| 文件 | 作用 |
|------|------|
| `runs/<run-id>/screenshots/*.png` | 页面截图证据 |
| `runs/<run-id>/docs/api-endpoints.md` | 网络信号采样 |
| `runs/<run-id>/docs/correction-log.md` | 探针自愈记录 |
| `runs/<run-id>/docs/iteration-metadata.json` | 页面级 AI 输入包 |

### 页面级 AI 分析层

| 文件 | 作用 |
|------|------|
| `runs/<run-id>/docs/sigmareading-features.md` | 页面总览 |
| `runs/<run-id>/docs/page-details-index.md` | 页面索引 |
| `runs/<run-id>/docs/pages/*.md` | 单页分析草案 |
| `agent-execution-summary.json` | 控制器摘要 |

当前仓库里，这些产物主要服务于 L1。

## 当前最容易误判的地方

### 1. 页面级收敛被误写成最终完成

这是当前最大的误判来源。

### 2. 局部 run 覆盖整站判断

如果你刚做完定向页面闭环，又没有做整站刷新，latest 结果不能代表整站状态。

### 3. 边界态被误写成失败

例如某些页面的筛选能力，可能更像边界控件验证，而不是稳定的离散选项验证。

## 调试顺序

当某页没有收敛时，按这个顺序排查：

1. 看 `probeEvidence` 是否不足
2. 看 `aiAnalysis.openQuestions` 在卡什么
3. 看 `correction-log.md` 是否说明探针一直在补同一类故障
4. 只有在证据明显不足时，才去改 Playwright 逻辑

当某页已经收敛、但你仍不认可“探索完成”时，按这个顺序继续：

1. 这个页面属于哪条业务流
2. 这条业务流是否已闭环
3. 这条业务流覆盖了哪些状态、还缺哪些状态

## 当前仓库的现实结论

到目前为止，这个仓库已经具备：

- 页面级首轮闭环能力
- 页面专属 workflow 分发能力
- 定向回归与整站刷新的组合能力

但还没有自动产出：

- 业务流级汇总
- 状态空间级汇总

这两项没有补齐之前，不应宣称探索已达到最终目标。
