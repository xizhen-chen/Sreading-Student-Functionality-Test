# SigmaReading L2 业务流闭环报告

> 生成时间：2026/4/23 11:45:01
> 证据来源：页面级 workflow 聚合 + 目标页页面级结论复核
> 说明：本报告只汇总跨页转场证据，不再要求通过逐页页面文档反推 L2。

## L2 总览

- 已识别业务流：8
- 已闭环：8
- 部分闭环：0
- 阻塞：0
- 起点页覆盖：8
- 目标页覆盖：3

## 业务流索引

| # | 业务流 | 起点页 | 目标页 | 转场验证 | 目标页 L1 | L2 状态 |
|---|--------|--------|--------|----------|-----------|---------|
| 1 | 试卷页 -> 教材页 | [导航页: exam (/zh-hans/exam)](pages/zh-hans-exam-zh-hans-exam.md) | [导航页: textbook (/zh-hans/textbook)](pages/zh-hans-textbook-zh-hans-textbook.md) | PASS | 已收敛 | 已闭环 |
| 2 | 收藏夹 -> reading | [导航页: favorites (/zh-hans/favorites)](pages/zh-hans-favorites-zh-hans-favorites.md) | [导航页: reading (/zh-hans/reading)](pages/zh-hans-reading-search-e9-b2-a4-e9-b1-bc-e8-b7-b3-e9-be-99-e9-97-a8-e5-90-8c.md) | PASS | 已收敛 | 已闭环 |
| 3 | 首页 -> 教材页 | [主页（/zh-hans/home）](pages/zh-hans-home-zh-hans-home.md) | [导航页: textbook (/zh-hans/textbook)](pages/zh-hans-textbook-zh-hans-textbook.md) | PASS | 已收敛 | 已闭环 |
| 4 | 作业页 -> 教材页 | [导航页: homework (/zh-hans/homework)](pages/zh-hans-homework-zh-hans-homework.md) | [导航页: textbook (/zh-hans/textbook)](pages/zh-hans-textbook-zh-hans-textbook.md) | PASS | 已收敛 | 已闭环 |
| 5 | 班级页 -> 教材页 | [导航页: joined-classes (/zh-hans/joined-classes)](pages/zh-hans-joined-classes-zh-hans-joined-classes.md) | [导航页: textbook (/zh-hans/textbook)](pages/zh-hans-textbook-zh-hans-textbook.md) | PASS | 已收敛 | 已闭环 |
| 6 | 书单页 -> 教材页 | [导航页: playlist (/zh-hans/playlist)](pages/zh-hans-playlist-zh-hans-playlist.md) | [导航页: textbook (/zh-hans/textbook)](pages/zh-hans-textbook-zh-hans-textbook.md) | PASS | 已收敛 | 已闭环 |
| 7 | 工作室 -> 教材页 | [导航页: studio (/zh-hans/studio)](pages/zh-hans-studio-zh-hans-studio.md) | [导航页: textbook (/zh-hans/textbook)](pages/zh-hans-textbook-zh-hans-textbook.md) | PASS | 已收敛 | 已闭环 |
| 8 | 教材页 -> 作业页 | [导航页: textbook (/zh-hans/textbook)](pages/zh-hans-textbook-zh-hans-textbook.md) | [导航页: homework (/zh-hans/homework)](pages/zh-hans-homework-zh-hans-homework.md) | PASS | 已收敛 | 已闭环 |

## 1. 试卷页 -> 教材页

- 当前 L2 结论：已闭环
- 闭环摘要：已验证 试卷页 -> 教材页 的跨页转场，且目标页已形成页面级结论。
- 起点页：[导航页: exam (/zh-hans/exam)](pages/zh-hans-exam-zh-hans-exam.md)
- 起点路由：/zh-hans/exam
- 起点页 L1 状态：已收敛
- 起点页结论：AI 判定 /zh-hans/exam 的核心候选功能已完成首轮验证，可继续扩展边界场景。
- 目标页：[导航页: textbook (/zh-hans/textbook)](pages/zh-hans-textbook-zh-hans-textbook.md)
- 目标路由模板：/zh-hans/textbook
- 目标页 L1 状态：已收敛
- 目标页结论：AI 判定 /zh-hans/textbook 的核心候选功能已完成首轮验证，可继续扩展边界场景。
- 触发工作流：试卷页页面工作流
- 工作流目的：验证 /zh-hans/exam 是否已展示当前页核心内容，并暴露可继续探索的入口或控件。
- 工作流摘要：识别 7 条页面文本信号、12 个入口、5 个控件；已到达 /zh-hans/textbook，并恢复当前页
- 转场动作：验证后续入口或关键控件
- 转场预期：至少识别 1 个后续入口或关键控件，必要时验证其可达性
- 转场实际结果：已到达 /zh-hans/textbook，并恢复当前页
- 转场验证结果：PASS
- 触发请求：GET https://sr.sigmareading.com/services/sr-ms-core/api/account；GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/profile；GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=xizhen.chen%2B3%40tonglec.org
- 结果样本：©2026 SReading v2.12.12；测试；当前
- 业务成功判定 1：至少识别 1 个后续入口或关键控件，必要时验证其可达性
- 业务成功判定 2：起点页已形成页面级结论。
- 业务成功判定 3：目标页已纳入本轮探针并形成页面级结论。
- 剩余风险 1：同一工作流还发现 6 个候选后续入口未单独复验：/zh-hans/homework、/zh-hans/joined-classes、/zh-hans/reading、/zh-hans/playlist

## 2. 收藏夹 -> reading

- 当前 L2 结论：已闭环
- 闭环摘要：已验证 收藏夹 -> reading 的跨页转场，且目标页已形成页面级结论。
- 起点页：[导航页: favorites (/zh-hans/favorites)](pages/zh-hans-favorites-zh-hans-favorites.md)
- 起点路由：/zh-hans/favorites
- 起点页 L1 状态：已收敛
- 起点页结论：AI 判定 /zh-hans/favorites 的核心候选功能已完成首轮验证，可继续扩展边界场景。
- 目标页：[导航页: reading (/zh-hans/reading)](pages/zh-hans-reading-search-e9-b2-a4-e9-b1-bc-e8-b7-b3-e9-be-99-e9-97-a8-e5-90-8c.md)
- 目标路由模板：/zh-hans/reading
- 目标页 L1 状态：已收敛
- 目标页结论：AI 判定 /zh-hans/reading 的核心候选功能已完成首轮验证，可继续扩展边界场景。
- 触发工作流：收藏夹页面工作流
- 工作流目的：验证 /zh-hans/favorites 是否已展示当前页核心内容，并暴露可继续探索的入口或控件。
- 工作流摘要：识别 6 条页面文本信号、12 个入口、8 个控件；已到达 /zh-hans/reading，并恢复当前页
- 转场动作：验证后续入口或关键控件
- 转场预期：至少识别 1 个后续入口或关键控件，必要时验证其可达性
- 转场实际结果：已到达 /zh-hans/reading，并恢复当前页
- 转场验证结果：PASS
- 触发请求：GET https://sr.sigmareading.com/services/sr-ms-core/api/account；GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/profile；GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=xizhen.chen%2B3%40tonglec.org
- 结果样本：©2026 SReading v2.12.12；收藏夹；文章
- 业务成功判定 1：至少识别 1 个后续入口或关键控件，必要时验证其可达性
- 业务成功判定 2：起点页已形成页面级结论。
- 业务成功判定 3：目标页已纳入本轮探针并形成页面级结论。
- 剩余风险 1：同一工作流还发现 6 个候选后续入口未单独复验：/zh-hans/textbook、/zh-hans/homework、/zh-hans/joined-classes、/zh-hans/playlist

## 3. 首页 -> 教材页

- 当前 L2 结论：已闭环
- 闭环摘要：已验证 首页 -> 教材页 的跨页转场，且目标页已形成页面级结论。
- 起点页：[主页（/zh-hans/home）](pages/zh-hans-home-zh-hans-home.md)
- 起点路由：/zh-hans/home
- 起点页 L1 状态：已收敛
- 起点页结论：AI 判定 /zh-hans/home 的核心候选功能已完成首轮验证，可继续扩展边界场景。
- 目标页：[导航页: textbook (/zh-hans/textbook)](pages/zh-hans-textbook-zh-hans-textbook.md)
- 目标路由模板：/zh-hans/textbook
- 目标页 L1 状态：已收敛
- 目标页结论：AI 判定 /zh-hans/textbook 的核心候选功能已完成首轮验证，可继续扩展边界场景。
- 触发工作流：首页主入口工作流
- 工作流目的：验证首页是否已展示主要功能卡片，并确认至少一个主入口可继续进入下一层页面。
- 工作流摘要：识别 8 个首页主入口；已到达 /zh-hans/textbook，并恢复当前页
- 转场动作：验证首页主入口可达性
- 转场预期：至少 1 个首页入口可以进入下一层页面并恢复首页上下文
- 转场实际结果：已到达 /zh-hans/textbook，并恢复当前页
- 转场验证结果：PASS
- 触发请求：GET https://sr.sigmareading.com/services/sr-ms-core/api/account；GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/profile；GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=xizhen.chen%2B3%40tonglec.org
- 结果样本：©2026 SReading v2.12.12；教材；购买
- 业务成功判定 1：至少 1 个首页入口可以进入下一层页面并恢复首页上下文
- 业务成功判定 2：起点页已形成页面级结论。
- 业务成功判定 3：目标页已纳入本轮探针并形成页面级结论。
- 剩余风险 1：同一工作流还发现 7 个候选后续入口未单独复验：/zh-hans/homework、/zh-hans/joined-classes、/zh-hans/reading、/zh-hans/playlist

## 4. 作业页 -> 教材页

- 当前 L2 结论：已闭环
- 闭环摘要：已验证 作业页 -> 教材页 的跨页转场，且目标页已形成页面级结论。
- 起点页：[导航页: homework (/zh-hans/homework)](pages/zh-hans-homework-zh-hans-homework.md)
- 起点路由：/zh-hans/homework
- 起点页 L1 状态：已收敛
- 起点页结论：AI 判定 /zh-hans/homework 的核心候选功能已完成首轮验证，可继续扩展边界场景。
- 目标页：[导航页: textbook (/zh-hans/textbook)](pages/zh-hans-textbook-zh-hans-textbook.md)
- 目标路由模板：/zh-hans/textbook
- 目标页 L1 状态：已收敛
- 目标页结论：AI 判定 /zh-hans/textbook 的核心候选功能已完成首轮验证，可继续扩展边界场景。
- 触发工作流：作业页页面工作流
- 工作流目的：验证 /zh-hans/homework 是否已展示当前页核心内容，并暴露可继续探索的入口或控件。
- 工作流摘要：识别 8 条页面文本信号、12 个入口、8 个控件；已到达 /zh-hans/textbook，并恢复当前页
- 转场动作：验证后续入口或关键控件
- 转场预期：至少识别 1 个后续入口或关键控件，必要时验证其可达性
- 转场实际结果：已到达 /zh-hans/textbook，并恢复当前页
- 转场验证结果：PASS
- 触发请求：GET https://sr.sigmareading.com/services/sr-ms-core/api/account；GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/profile；GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=xizhen.chen%2B3%40tonglec.org
- 结果样本：©2026 SReading v2.12.12；作业练习；待做
- 业务成功判定 1：至少识别 1 个后续入口或关键控件，必要时验证其可达性
- 业务成功判定 2：起点页已形成页面级结论。
- 业务成功判定 3：目标页已纳入本轮探针并形成页面级结论。
- 剩余风险 1：同一工作流还发现 6 个候选后续入口未单独复验：/zh-hans/joined-classes、/zh-hans/reading、/zh-hans/playlist、/zh-hans/favorites

## 5. 班级页 -> 教材页

- 当前 L2 结论：已闭环
- 闭环摘要：已验证 班级页 -> 教材页 的跨页转场，且目标页已形成页面级结论。
- 起点页：[导航页: joined-classes (/zh-hans/joined-classes)](pages/zh-hans-joined-classes-zh-hans-joined-classes.md)
- 起点路由：/zh-hans/joined-classes
- 起点页 L1 状态：已收敛
- 起点页结论：AI 判定 /zh-hans/joined-classes 的核心候选功能已完成首轮验证，可继续扩展边界场景。
- 目标页：[导航页: textbook (/zh-hans/textbook)](pages/zh-hans-textbook-zh-hans-textbook.md)
- 目标路由模板：/zh-hans/textbook
- 目标页 L1 状态：已收敛
- 目标页结论：AI 判定 /zh-hans/textbook 的核心候选功能已完成首轮验证，可继续扩展边界场景。
- 触发工作流：班级页页面工作流
- 工作流目的：验证 /zh-hans/joined-classes 是否已展示当前页核心内容，并暴露可继续探索的入口或控件。
- 工作流摘要：识别 8 条页面文本信号、12 个入口、5 个控件；已到达 /zh-hans/textbook，并恢复当前页
- 转场动作：验证后续入口或关键控件
- 转场预期：至少识别 1 个后续入口或关键控件，必要时验证其可达性
- 转场实际结果：已到达 /zh-hans/textbook，并恢复当前页
- 转场验证结果：PASS
- 触发请求：GET https://sr.sigmareading.com/services/sr-ms-core/api/account；GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/profile；GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=xizhen.chen%2B3%40tonglec.org
- 结果样本：©2026 SReading v2.12.12；我的班级；当前班级
- 业务成功判定 1：至少识别 1 个后续入口或关键控件，必要时验证其可达性
- 业务成功判定 2：起点页已形成页面级结论。
- 业务成功判定 3：目标页已纳入本轮探针并形成页面级结论。
- 剩余风险 1：同一工作流还发现 6 个候选后续入口未单独复验：/zh-hans/homework、/zh-hans/reading、/zh-hans/playlist、/zh-hans/favorites

## 6. 书单页 -> 教材页

- 当前 L2 结论：已闭环
- 闭环摘要：已验证 书单页 -> 教材页 的跨页转场，且目标页已形成页面级结论。
- 起点页：[导航页: playlist (/zh-hans/playlist)](pages/zh-hans-playlist-zh-hans-playlist.md)
- 起点路由：/zh-hans/playlist
- 起点页 L1 状态：已收敛
- 起点页结论：AI 判定 /zh-hans/playlist 的核心候选功能已完成首轮验证，可继续扩展边界场景。
- 目标页：[导航页: textbook (/zh-hans/textbook)](pages/zh-hans-textbook-zh-hans-textbook.md)
- 目标路由模板：/zh-hans/textbook
- 目标页 L1 状态：已收敛
- 目标页结论：AI 判定 /zh-hans/textbook 的核心候选功能已完成首轮验证，可继续扩展边界场景。
- 触发工作流：书单页页面工作流
- 工作流目的：验证 /zh-hans/playlist 是否已展示当前页核心内容，并暴露可继续探索的入口或控件。
- 工作流摘要：识别 8 条页面文本信号、12 个入口、8 个控件；已到达 /zh-hans/textbook，并恢复当前页
- 转场动作：验证后续入口或关键控件
- 转场预期：至少识别 1 个后续入口或关键控件，必要时验证其可达性
- 转场实际结果：已到达 /zh-hans/textbook，并恢复当前页
- 转场验证结果：PASS
- 触发请求：GET https://sr.sigmareading.com/services/sr-ms-core/api/account；GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/profile；GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=xizhen.chen%2B3%40tonglec.org
- 结果样本：©2026 SReading v2.12.12；书单；排序
- 业务成功判定 1：至少识别 1 个后续入口或关键控件，必要时验证其可达性
- 业务成功判定 2：起点页已形成页面级结论。
- 业务成功判定 3：目标页已纳入本轮探针并形成页面级结论。
- 剩余风险 1：同一工作流还发现 6 个候选后续入口未单独复验：/zh-hans/homework、/zh-hans/joined-classes、/zh-hans/reading、/zh-hans/favorites

## 7. 工作室 -> 教材页

- 当前 L2 结论：已闭环
- 闭环摘要：已验证 工作室 -> 教材页 的跨页转场，且目标页已形成页面级结论。
- 起点页：[导航页: studio (/zh-hans/studio)](pages/zh-hans-studio-zh-hans-studio.md)
- 起点路由：/zh-hans/studio
- 起点页 L1 状态：已收敛
- 起点页结论：AI 判定 /zh-hans/studio 的核心候选功能已完成首轮验证，可继续扩展边界场景。
- 目标页：[导航页: textbook (/zh-hans/textbook)](pages/zh-hans-textbook-zh-hans-textbook.md)
- 目标路由模板：/zh-hans/textbook
- 目标页 L1 状态：已收敛
- 目标页结论：AI 判定 /zh-hans/textbook 的核心候选功能已完成首轮验证，可继续扩展边界场景。
- 触发工作流：工作室页面工作流
- 工作流目的：验证 /zh-hans/studio 是否已展示当前页核心内容，并暴露可继续探索的入口或控件。
- 工作流摘要：识别 7 条页面文本信号、12 个入口、8 个控件；已到达 /zh-hans/textbook，并恢复当前页
- 转场动作：验证后续入口或关键控件
- 转场预期：至少识别 1 个后续入口或关键控件，必要时验证其可达性
- 转场实际结果：已到达 /zh-hans/textbook，并恢复当前页
- 转场验证结果：PASS
- 触发请求：GET https://sr.sigmareading.com/services/sr-ms-core/api/account；GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/profile；GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=xizhen.chen%2B3%40tonglec.org
- 结果样本：©2026 SReading v2.12.12；工作室；我的制作
- 业务成功判定 1：至少识别 1 个后续入口或关键控件，必要时验证其可达性
- 业务成功判定 2：起点页已形成页面级结论。
- 业务成功判定 3：目标页已纳入本轮探针并形成页面级结论。
- 剩余风险 1：同一工作流还发现 6 个候选后续入口未单独复验：/zh-hans/homework、/zh-hans/joined-classes、/zh-hans/reading、/zh-hans/playlist

## 8. 教材页 -> 作业页

- 当前 L2 结论：已闭环
- 闭环摘要：已验证 教材页 -> 作业页 的跨页转场，且目标页已形成页面级结论。
- 起点页：[导航页: textbook (/zh-hans/textbook)](pages/zh-hans-textbook-zh-hans-textbook.md)
- 起点路由：/zh-hans/textbook
- 起点页 L1 状态：已收敛
- 起点页结论：AI 判定 /zh-hans/textbook 的核心候选功能已完成首轮验证，可继续扩展边界场景。
- 目标页：[导航页: homework (/zh-hans/homework)](pages/zh-hans-homework-zh-hans-homework.md)
- 目标路由模板：/zh-hans/homework
- 目标页 L1 状态：已收敛
- 目标页结论：AI 判定 /zh-hans/homework 的核心候选功能已完成首轮验证，可继续扩展边界场景。
- 触发工作流：教材页页面工作流
- 工作流目的：验证 /zh-hans/textbook 是否已展示当前页核心内容，并暴露可继续探索的入口或控件。
- 工作流摘要：识别 8 条页面文本信号、12 个入口、7 个控件；已到达 /zh-hans/homework，并恢复当前页
- 转场动作：验证后续入口或关键控件
- 转场预期：至少识别 1 个后续入口或关键控件，必要时验证其可达性
- 转场实际结果：已到达 /zh-hans/homework，并恢复当前页
- 转场验证结果：PASS
- 触发请求：GET https://sr.sigmareading.com/services/sr-ms-core/api/account；GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/profile；GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=xizhen.chen%2B3%40tonglec.org
- 结果样本：©2026 SReading v2.12.12；教材；购买
- 业务成功判定 1：至少识别 1 个后续入口或关键控件，必要时验证其可达性
- 业务成功判定 2：起点页已形成页面级结论。
- 业务成功判定 3：目标页已纳入本轮探针并形成页面级结论。
- 剩余风险 1：同一工作流还发现 6 个候选后续入口未单独复验：/zh-hans/joined-classes、/zh-hans/reading、/zh-hans/playlist、/zh-hans/favorites

