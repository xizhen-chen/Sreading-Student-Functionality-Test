# SigmaReading L2 业务流闭环报告

> 生成时间：2026/4/23 11:03:59
> 证据来源：页面级 workflow 聚合 + 目标页页面级结论复核
> 说明：本报告只汇总跨页转场证据，不再要求通过逐页页面文档反推 L2。

> 目标页面：/zh-hans/home

## L2 总览

- 已识别业务流：1
- 已闭环：0
- 部分闭环：1
- 阻塞：0
- 起点页覆盖：1
- 目标页覆盖：1

## 业务流索引

| # | 业务流 | 起点页 | 目标页 | 转场验证 | 目标页 L1 | L2 状态 |
|---|--------|--------|--------|----------|-----------|---------|
| 1 | 首页 -> 教材页 | [主页（/zh-hans/home）](pages/zh-hans-home-zh-hans-home.md) | 教材页（/zh-hans/textbook） | PASS | 未纳入本轮探针 | 部分闭环 |

## 1. 首页 -> 教材页

- 当前 L2 结论：部分闭环
- 闭环摘要：已发现 首页 -> 教材页 的跨页线索，但当前仍停留在部分闭环。
- 起点页：[主页（/zh-hans/home）](pages/zh-hans-home-zh-hans-home.md)
- 起点路由：/zh-hans/home
- 起点页 L1 状态：已收敛
- 起点页结论：AI 判定 /zh-hans/home 的核心候选功能已完成首轮验证，可继续扩展边界场景。
- 目标页：教材页（/zh-hans/textbook）
- 目标路由模板：/zh-hans/textbook
- 目标页 L1 状态：未纳入本轮探针
- 触发工作流：首页主入口工作流
- 工作流目的：验证首页是否已展示主要功能卡片，并确认至少一个主入口可继续进入下一层页面。
- 工作流摘要：识别 8 个首页主入口；已到达 /zh-hans/textbook，并恢复当前页
- 转场动作：验证首页主入口可达性
- 转场预期：至少 1 个首页入口可以进入下一层页面并恢复首页上下文
- 转场实际结果：已到达 /zh-hans/textbook，并恢复当前页
- 转场验证结果：PASS
- 触发请求：GET https://sr.sigmareading.com/services/sr-ms-core/api/account；GET https://sr.sigmareading.com/services/sr-ms-core/api/textbooks/sku-grouped
- 结果样本：©2026 SReading v2.12.12；教材；购买
- 业务成功判定 1：至少 1 个首页入口可以进入下一层页面并恢复首页上下文
- 业务成功判定 2：起点页已形成页面级结论。
- 业务成功判定 3：目标页已纳入本轮探针并形成页面级结论。
- 剩余风险 1：目标页未纳入本轮页面级探针，无法确认转场后的页面级结论。
- 剩余风险 2：同一工作流还发现 7 个候选后续入口未单独复验：/zh-hans/reading、/zh-hans/playlist、/zh-hans/presentation/join、/zh-hans/word-express

