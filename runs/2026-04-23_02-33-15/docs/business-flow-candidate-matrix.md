# SigmaReading L2 候选后续入口矩阵

> 生成时间：2026/4/23 10:34:30
> 证据来源：已闭环或部分闭环的页面级 workflow 中出现的候选后续入口
> 说明：本矩阵只回答“还有哪些入口已经被看到，但还没从当前来源页单独打通”。

> 目标页面：/zh-hans/home

## 总览

- 候选入口总数：19
- 高优先级：15
- 中优先级：4
- 低优先级：0
- 先补目标页采样：15
- 先补目标页 L1：0
- 待补当前来源验证：4
- 他链路已覆盖：0

## 状态说明

- 先补目标页采样：候选入口已被看到，但目标页还没进入本轮页面级探针。
- 先补目标页 L1：目标页已被采到，但页面级 open questions 还没压平。
- 待补当前来源验证：目标页本身没问题，但还缺“从当前来源页发起”的定向跨页验证。
- 他链路已覆盖：目标页或同类路由已在其他链路里闭环，当前来源页只需低优先级补证。

## 矩阵索引

| # | 来源页 | 候选入口 | 目标页 L1 | 他链路闭环 | 当前缺口 | 优先级 |
|---|--------|----------|-----------|------------|----------|--------|
| 1 | [主页（/zh-hans/home）](pages/zh-hans-home-zh-hans-home.md) | 试卷页（/zh-hans/exam） | 未采样 | 无 | 先补目标页采样 | 高 |
| 2 | [主页（/zh-hans/home）](pages/zh-hans-home-zh-hans-home.md) | 收藏夹（/zh-hans/favorites） | 未采样 | 无 | 先补目标页采样 | 高 |
| 3 | [主页（/zh-hans/home）](pages/zh-hans-home-zh-hans-home.md) | 书单页（/zh-hans/playlist） | 未采样 | 无 | 先补目标页采样 | 高 |
| 4 | [主页（/zh-hans/home）](pages/zh-hans-home-zh-hans-home.md) | reading（/zh-hans/reading） | 未采样 | 无 | 先补目标页采样 | 高 |
| 5 | [主页（/zh-hans/home）](pages/zh-hans-home-zh-hans-home.md) | 工作室（/zh-hans/studio） | 未采样 | 无 | 先补目标页采样 | 高 |
| 6 | [导航页: homework (/zh-hans/homework)](pages/zh-hans-homework-zh-hans-homework.md) | 试卷页（/zh-hans/exam） | 未采样 | 无 | 先补目标页采样 | 高 |
| 7 | [导航页: homework (/zh-hans/homework)](pages/zh-hans-homework-zh-hans-homework.md) | 收藏夹（/zh-hans/favorites） | 未采样 | 无 | 先补目标页采样 | 高 |
| 8 | [导航页: homework (/zh-hans/homework)](pages/zh-hans-homework-zh-hans-homework.md) | 书单页（/zh-hans/playlist） | 未采样 | 无 | 先补目标页采样 | 高 |
| 9 | [导航页: homework (/zh-hans/homework)](pages/zh-hans-homework-zh-hans-homework.md) | reading（/zh-hans/reading） | 未采样 | 无 | 先补目标页采样 | 高 |
| 10 | [导航页: homework (/zh-hans/homework)](pages/zh-hans-homework-zh-hans-homework.md) | 工作室（/zh-hans/studio） | 未采样 | 无 | 先补目标页采样 | 高 |
| 11 | [导航页: joined-classes (/zh-hans/joined-classes)](pages/zh-hans-joined-classes-zh-hans-joined-classes.md) | 试卷页（/zh-hans/exam） | 未采样 | 无 | 先补目标页采样 | 高 |
| 12 | [导航页: joined-classes (/zh-hans/joined-classes)](pages/zh-hans-joined-classes-zh-hans-joined-classes.md) | 收藏夹（/zh-hans/favorites） | 未采样 | 无 | 先补目标页采样 | 高 |
| 13 | [导航页: joined-classes (/zh-hans/joined-classes)](pages/zh-hans-joined-classes-zh-hans-joined-classes.md) | 书单页（/zh-hans/playlist） | 未采样 | 无 | 先补目标页采样 | 高 |
| 14 | [导航页: joined-classes (/zh-hans/joined-classes)](pages/zh-hans-joined-classes-zh-hans-joined-classes.md) | reading（/zh-hans/reading） | 未采样 | 无 | 先补目标页采样 | 高 |
| 15 | [导航页: joined-classes (/zh-hans/joined-classes)](pages/zh-hans-joined-classes-zh-hans-joined-classes.md) | 工作室（/zh-hans/studio） | 未采样 | 无 | 先补目标页采样 | 高 |
| 16 | [主页（/zh-hans/home）](pages/zh-hans-home-zh-hans-home.md) | [导航页: homework (/zh-hans/homework)](pages/zh-hans-homework-zh-hans-homework.md) | 已收敛 | 无 | 待补当前来源验证 | 中 |
| 17 | [主页（/zh-hans/home）](pages/zh-hans-home-zh-hans-home.md) | [导航页: joined-classes (/zh-hans/joined-classes)](pages/zh-hans-joined-classes-zh-hans-joined-classes.md) | 已收敛 | 无 | 待补当前来源验证 | 中 |
| 18 | [导航页: homework (/zh-hans/homework)](pages/zh-hans-homework-zh-hans-homework.md) | [导航页: joined-classes (/zh-hans/joined-classes)](pages/zh-hans-joined-classes-zh-hans-joined-classes.md) | 已收敛 | 无 | 待补当前来源验证 | 中 |
| 19 | [导航页: joined-classes (/zh-hans/joined-classes)](pages/zh-hans-joined-classes-zh-hans-joined-classes.md) | [导航页: homework (/zh-hans/homework)](pages/zh-hans-homework-zh-hans-homework.md) | 已收敛 | 无 | 待补当前来源验证 | 中 |

## 1. /zh-hans/home -> /zh-hans/exam

- 当前缺口：先补目标页采样
- 优先级：高
- 来源页：[主页（/zh-hans/home）](pages/zh-hans-home-zh-hans-home.md)
- 来源页 L1 状态：已收敛
- 候选入口：试卷页（/zh-hans/exam）
- 候选示例路由：/zh-hans/exam
- 目标页 L1 状态：未采样
- 他链路覆盖：共 0 条相关业务流，其中 0 条已闭环
- 建议动作：先把 /zh-hans/exam 纳入页面级探针，再判断 /zh-hans/home 是否需要补跨页验证。
- 发现工作流 1：首页主入口工作流
- 证据 1：首页主入口工作流: 识别 8 个首页主入口；已到达 /zh-hans/textbook，并恢复当前页

## 2. /zh-hans/home -> /zh-hans/favorites

- 当前缺口：先补目标页采样
- 优先级：高
- 来源页：[主页（/zh-hans/home）](pages/zh-hans-home-zh-hans-home.md)
- 来源页 L1 状态：已收敛
- 候选入口：收藏夹（/zh-hans/favorites）
- 候选示例路由：/zh-hans/favorites
- 目标页 L1 状态：未采样
- 他链路覆盖：共 0 条相关业务流，其中 0 条已闭环
- 建议动作：先把 /zh-hans/favorites 纳入页面级探针，再判断 /zh-hans/home 是否需要补跨页验证。
- 发现工作流 1：首页主入口工作流
- 证据 1：首页主入口工作流: 识别 8 个首页主入口；已到达 /zh-hans/textbook，并恢复当前页

## 3. /zh-hans/home -> /zh-hans/playlist

- 当前缺口：先补目标页采样
- 优先级：高
- 来源页：[主页（/zh-hans/home）](pages/zh-hans-home-zh-hans-home.md)
- 来源页 L1 状态：已收敛
- 候选入口：书单页（/zh-hans/playlist）
- 候选示例路由：/zh-hans/playlist
- 目标页 L1 状态：未采样
- 他链路覆盖：共 0 条相关业务流，其中 0 条已闭环
- 建议动作：先把 /zh-hans/playlist 纳入页面级探针，再判断 /zh-hans/home 是否需要补跨页验证。
- 发现工作流 1：首页主入口工作流
- 证据 1：首页主入口工作流: 识别 8 个首页主入口；已到达 /zh-hans/textbook，并恢复当前页

## 4. /zh-hans/home -> /zh-hans/reading

- 当前缺口：先补目标页采样
- 优先级：高
- 来源页：[主页（/zh-hans/home）](pages/zh-hans-home-zh-hans-home.md)
- 来源页 L1 状态：已收敛
- 候选入口：reading（/zh-hans/reading）
- 候选示例路由：/zh-hans/reading
- 目标页 L1 状态：未采样
- 他链路覆盖：共 0 条相关业务流，其中 0 条已闭环
- 建议动作：先把 /zh-hans/reading 纳入页面级探针，再判断 /zh-hans/home 是否需要补跨页验证。
- 发现工作流 1：首页主入口工作流
- 证据 1：首页主入口工作流: 识别 8 个首页主入口；已到达 /zh-hans/textbook，并恢复当前页

## 5. /zh-hans/home -> /zh-hans/studio

- 当前缺口：先补目标页采样
- 优先级：高
- 来源页：[主页（/zh-hans/home）](pages/zh-hans-home-zh-hans-home.md)
- 来源页 L1 状态：已收敛
- 候选入口：工作室（/zh-hans/studio）
- 候选示例路由：/zh-hans/studio
- 目标页 L1 状态：未采样
- 他链路覆盖：共 0 条相关业务流，其中 0 条已闭环
- 建议动作：先把 /zh-hans/studio 纳入页面级探针，再判断 /zh-hans/home 是否需要补跨页验证。
- 发现工作流 1：首页主入口工作流
- 证据 1：首页主入口工作流: 识别 8 个首页主入口；已到达 /zh-hans/textbook，并恢复当前页

## 6. /zh-hans/homework -> /zh-hans/exam

- 当前缺口：先补目标页采样
- 优先级：高
- 来源页：[导航页: homework (/zh-hans/homework)](pages/zh-hans-homework-zh-hans-homework.md)
- 来源页 L1 状态：已收敛
- 候选入口：试卷页（/zh-hans/exam）
- 候选示例路由：/zh-hans/exam
- 目标页 L1 状态：未采样
- 他链路覆盖：共 0 条相关业务流，其中 0 条已闭环
- 建议动作：先把 /zh-hans/exam 纳入页面级探针，再判断 /zh-hans/homework 是否需要补跨页验证。
- 发现工作流 1：作业页页面工作流
- 证据 1：作业页页面工作流: 识别 8 条页面文本信号、12 个入口、8 个控件；已到达 /zh-hans/textbook，并恢复当前页

## 7. /zh-hans/homework -> /zh-hans/favorites

- 当前缺口：先补目标页采样
- 优先级：高
- 来源页：[导航页: homework (/zh-hans/homework)](pages/zh-hans-homework-zh-hans-homework.md)
- 来源页 L1 状态：已收敛
- 候选入口：收藏夹（/zh-hans/favorites）
- 候选示例路由：/zh-hans/favorites
- 目标页 L1 状态：未采样
- 他链路覆盖：共 0 条相关业务流，其中 0 条已闭环
- 建议动作：先把 /zh-hans/favorites 纳入页面级探针，再判断 /zh-hans/homework 是否需要补跨页验证。
- 发现工作流 1：作业页页面工作流
- 证据 1：作业页页面工作流: 识别 8 条页面文本信号、12 个入口、8 个控件；已到达 /zh-hans/textbook，并恢复当前页

## 8. /zh-hans/homework -> /zh-hans/playlist

- 当前缺口：先补目标页采样
- 优先级：高
- 来源页：[导航页: homework (/zh-hans/homework)](pages/zh-hans-homework-zh-hans-homework.md)
- 来源页 L1 状态：已收敛
- 候选入口：书单页（/zh-hans/playlist）
- 候选示例路由：/zh-hans/playlist
- 目标页 L1 状态：未采样
- 他链路覆盖：共 0 条相关业务流，其中 0 条已闭环
- 建议动作：先把 /zh-hans/playlist 纳入页面级探针，再判断 /zh-hans/homework 是否需要补跨页验证。
- 发现工作流 1：作业页页面工作流
- 证据 1：作业页页面工作流: 识别 8 条页面文本信号、12 个入口、8 个控件；已到达 /zh-hans/textbook，并恢复当前页

## 9. /zh-hans/homework -> /zh-hans/reading

- 当前缺口：先补目标页采样
- 优先级：高
- 来源页：[导航页: homework (/zh-hans/homework)](pages/zh-hans-homework-zh-hans-homework.md)
- 来源页 L1 状态：已收敛
- 候选入口：reading（/zh-hans/reading）
- 候选示例路由：/zh-hans/reading
- 目标页 L1 状态：未采样
- 他链路覆盖：共 0 条相关业务流，其中 0 条已闭环
- 建议动作：先把 /zh-hans/reading 纳入页面级探针，再判断 /zh-hans/homework 是否需要补跨页验证。
- 发现工作流 1：作业页页面工作流
- 证据 1：作业页页面工作流: 识别 8 条页面文本信号、12 个入口、8 个控件；已到达 /zh-hans/textbook，并恢复当前页

## 10. /zh-hans/homework -> /zh-hans/studio

- 当前缺口：先补目标页采样
- 优先级：高
- 来源页：[导航页: homework (/zh-hans/homework)](pages/zh-hans-homework-zh-hans-homework.md)
- 来源页 L1 状态：已收敛
- 候选入口：工作室（/zh-hans/studio）
- 候选示例路由：/zh-hans/studio
- 目标页 L1 状态：未采样
- 他链路覆盖：共 0 条相关业务流，其中 0 条已闭环
- 建议动作：先把 /zh-hans/studio 纳入页面级探针，再判断 /zh-hans/homework 是否需要补跨页验证。
- 发现工作流 1：作业页页面工作流
- 证据 1：作业页页面工作流: 识别 8 条页面文本信号、12 个入口、8 个控件；已到达 /zh-hans/textbook，并恢复当前页

## 11. /zh-hans/joined-classes -> /zh-hans/exam

- 当前缺口：先补目标页采样
- 优先级：高
- 来源页：[导航页: joined-classes (/zh-hans/joined-classes)](pages/zh-hans-joined-classes-zh-hans-joined-classes.md)
- 来源页 L1 状态：已收敛
- 候选入口：试卷页（/zh-hans/exam）
- 候选示例路由：/zh-hans/exam
- 目标页 L1 状态：未采样
- 他链路覆盖：共 0 条相关业务流，其中 0 条已闭环
- 建议动作：先把 /zh-hans/exam 纳入页面级探针，再判断 /zh-hans/joined-classes 是否需要补跨页验证。
- 发现工作流 1：班级页页面工作流
- 证据 1：班级页页面工作流: 识别 8 条页面文本信号、12 个入口、5 个控件；已到达 /zh-hans/textbook，并恢复当前页

## 12. /zh-hans/joined-classes -> /zh-hans/favorites

- 当前缺口：先补目标页采样
- 优先级：高
- 来源页：[导航页: joined-classes (/zh-hans/joined-classes)](pages/zh-hans-joined-classes-zh-hans-joined-classes.md)
- 来源页 L1 状态：已收敛
- 候选入口：收藏夹（/zh-hans/favorites）
- 候选示例路由：/zh-hans/favorites
- 目标页 L1 状态：未采样
- 他链路覆盖：共 0 条相关业务流，其中 0 条已闭环
- 建议动作：先把 /zh-hans/favorites 纳入页面级探针，再判断 /zh-hans/joined-classes 是否需要补跨页验证。
- 发现工作流 1：班级页页面工作流
- 证据 1：班级页页面工作流: 识别 8 条页面文本信号、12 个入口、5 个控件；已到达 /zh-hans/textbook，并恢复当前页

## 13. /zh-hans/joined-classes -> /zh-hans/playlist

- 当前缺口：先补目标页采样
- 优先级：高
- 来源页：[导航页: joined-classes (/zh-hans/joined-classes)](pages/zh-hans-joined-classes-zh-hans-joined-classes.md)
- 来源页 L1 状态：已收敛
- 候选入口：书单页（/zh-hans/playlist）
- 候选示例路由：/zh-hans/playlist
- 目标页 L1 状态：未采样
- 他链路覆盖：共 0 条相关业务流，其中 0 条已闭环
- 建议动作：先把 /zh-hans/playlist 纳入页面级探针，再判断 /zh-hans/joined-classes 是否需要补跨页验证。
- 发现工作流 1：班级页页面工作流
- 证据 1：班级页页面工作流: 识别 8 条页面文本信号、12 个入口、5 个控件；已到达 /zh-hans/textbook，并恢复当前页

## 14. /zh-hans/joined-classes -> /zh-hans/reading

- 当前缺口：先补目标页采样
- 优先级：高
- 来源页：[导航页: joined-classes (/zh-hans/joined-classes)](pages/zh-hans-joined-classes-zh-hans-joined-classes.md)
- 来源页 L1 状态：已收敛
- 候选入口：reading（/zh-hans/reading）
- 候选示例路由：/zh-hans/reading
- 目标页 L1 状态：未采样
- 他链路覆盖：共 0 条相关业务流，其中 0 条已闭环
- 建议动作：先把 /zh-hans/reading 纳入页面级探针，再判断 /zh-hans/joined-classes 是否需要补跨页验证。
- 发现工作流 1：班级页页面工作流
- 证据 1：班级页页面工作流: 识别 8 条页面文本信号、12 个入口、5 个控件；已到达 /zh-hans/textbook，并恢复当前页

## 15. /zh-hans/joined-classes -> /zh-hans/studio

- 当前缺口：先补目标页采样
- 优先级：高
- 来源页：[导航页: joined-classes (/zh-hans/joined-classes)](pages/zh-hans-joined-classes-zh-hans-joined-classes.md)
- 来源页 L1 状态：已收敛
- 候选入口：工作室（/zh-hans/studio）
- 候选示例路由：/zh-hans/studio
- 目标页 L1 状态：未采样
- 他链路覆盖：共 0 条相关业务流，其中 0 条已闭环
- 建议动作：先把 /zh-hans/studio 纳入页面级探针，再判断 /zh-hans/joined-classes 是否需要补跨页验证。
- 发现工作流 1：班级页页面工作流
- 证据 1：班级页页面工作流: 识别 8 条页面文本信号、12 个入口、5 个控件；已到达 /zh-hans/textbook，并恢复当前页

## 16. /zh-hans/home -> /zh-hans/homework

- 当前缺口：待补当前来源验证
- 优先级：中
- 来源页：[主页（/zh-hans/home）](pages/zh-hans-home-zh-hans-home.md)
- 来源页 L1 状态：已收敛
- 候选入口：[导航页: homework (/zh-hans/homework)](pages/zh-hans-homework-zh-hans-homework.md)
- 候选示例路由：/zh-hans/homework
- 目标页 L1 状态：已收敛
- 目标页当前结论：AI 判定 /zh-hans/homework 的核心候选功能已完成首轮验证，可继续扩展边界场景。
- 他链路覆盖：共 0 条相关业务流，其中 0 条已闭环
- 建议动作：优先从 /zh-hans/home 补做 /zh-hans/homework 的定向跨页验证。
- 发现工作流 1：首页主入口工作流
- 证据 1：首页主入口工作流: 识别 8 个首页主入口；已到达 /zh-hans/textbook，并恢复当前页

## 17. /zh-hans/home -> /zh-hans/joined-classes

- 当前缺口：待补当前来源验证
- 优先级：中
- 来源页：[主页（/zh-hans/home）](pages/zh-hans-home-zh-hans-home.md)
- 来源页 L1 状态：已收敛
- 候选入口：[导航页: joined-classes (/zh-hans/joined-classes)](pages/zh-hans-joined-classes-zh-hans-joined-classes.md)
- 候选示例路由：/zh-hans/joined-classes
- 目标页 L1 状态：已收敛
- 目标页当前结论：AI 判定 /zh-hans/joined-classes 的核心候选功能已完成首轮验证，可继续扩展边界场景。
- 他链路覆盖：共 0 条相关业务流，其中 0 条已闭环
- 建议动作：优先从 /zh-hans/home 补做 /zh-hans/joined-classes 的定向跨页验证。
- 发现工作流 1：首页主入口工作流
- 证据 1：首页主入口工作流: 识别 8 个首页主入口；已到达 /zh-hans/textbook，并恢复当前页

## 18. /zh-hans/homework -> /zh-hans/joined-classes

- 当前缺口：待补当前来源验证
- 优先级：中
- 来源页：[导航页: homework (/zh-hans/homework)](pages/zh-hans-homework-zh-hans-homework.md)
- 来源页 L1 状态：已收敛
- 候选入口：[导航页: joined-classes (/zh-hans/joined-classes)](pages/zh-hans-joined-classes-zh-hans-joined-classes.md)
- 候选示例路由：/zh-hans/joined-classes
- 目标页 L1 状态：已收敛
- 目标页当前结论：AI 判定 /zh-hans/joined-classes 的核心候选功能已完成首轮验证，可继续扩展边界场景。
- 他链路覆盖：共 0 条相关业务流，其中 0 条已闭环
- 建议动作：优先从 /zh-hans/homework 补做 /zh-hans/joined-classes 的定向跨页验证。
- 发现工作流 1：作业页页面工作流
- 证据 1：作业页页面工作流: 识别 8 条页面文本信号、12 个入口、8 个控件；已到达 /zh-hans/textbook，并恢复当前页

## 19. /zh-hans/joined-classes -> /zh-hans/homework

- 当前缺口：待补当前来源验证
- 优先级：中
- 来源页：[导航页: joined-classes (/zh-hans/joined-classes)](pages/zh-hans-joined-classes-zh-hans-joined-classes.md)
- 来源页 L1 状态：已收敛
- 候选入口：[导航页: homework (/zh-hans/homework)](pages/zh-hans-homework-zh-hans-homework.md)
- 候选示例路由：/zh-hans/homework
- 目标页 L1 状态：已收敛
- 目标页当前结论：AI 判定 /zh-hans/homework 的核心候选功能已完成首轮验证，可继续扩展边界场景。
- 他链路覆盖：共 0 条相关业务流，其中 0 条已闭环
- 建议动作：优先从 /zh-hans/joined-classes 补做 /zh-hans/homework 的定向跨页验证。
- 发现工作流 1：班级页页面工作流
- 证据 1：班级页页面工作流: 识别 8 条页面文本信号、12 个入口、5 个控件；已到达 /zh-hans/textbook，并恢复当前页

