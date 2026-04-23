# 页面详细功能文档：导航页: homework (/zh-hans/homework)

> 序号：2
> 阶段：Phase 3
> 页面分类：navigation
> 生成时间：2026/4/23 09:16:25

## 基本信息

- 目标入口：/zh-hans/homework
- 最终 URL：https://sr.sigmareading.com/zh-hans/homework
- 路径：/zh-hans/homework
- 页面探索脚本：page-navigation-zh-hans-homework
- 页面标题：SReading 作业练习 - 全方位智能在线学习：一站式解决阅读、识字、作业需求，个性化提升学生能力。
- 截图：`screenshots/exploration/03-nav-zh-hans-homework.png`

## Playwright 探针概览

- 页面上下文：SReading 作业练习 - 全方位智能在线学习：一站式解决阅读、识字、作业需求，个性化提升学生能力。
- 可访问入口：教材 → /zh-hans/textbook；作业练习 → /zh-hans/homework；我的班级 → /zh-hans/joined-classes；文章 → /zh-hans/reading；书单 → /zh-hans/playlist；收藏夹 → /zh-hans/favorites
- 可执行操作：button、menu、multilingual-list、ion-button、全部、开始
- 页面加载时触发网络请求 5 个

## AI 分析结论

- AI 角色：AI 负责基于探针证据识别功能、判断预期结果、总结结论，并决定下一轮探针重点。
- AI 探针摘要：AI 基于 5 条页面信号、16 条交互信号和 1 个工作流结果形成当前判断。
- AI 当前结论：AI 判定 /zh-hans/homework 的核心候选功能已完成首轮验证，可继续扩展边界场景。
- AI 下一轮探针重点：沿着已验证的入口继续向详情页、筛选态、空结果态扩展探针。

## Playwright 原始探针证据

- 探针定位：Playwright 仅负责进入页面、触发动作、采样 DOM/网络/结果，不负责下结论。
- 探针目标：为 /zh-hans/homework 收集可供 AI 判断功能、预期结果与下一轮验证目标的证据。
- 页面信号：SReading 作业练习 - 全方位智能在线学习：一站式解决阅读、识字、作业需求，个性化提升学生能力。；最终 URL: https://sr.sigmareading.com/zh-hans/homework；标题: SReadingfor Student学生账户 | ©2026 SReading v2.12.12；交互元素: 74 个；工作流验证: 作业页页面工作流=PASS/PASS
- 交互信号：link: 教材 -> /zh-hans/textbook；link: 作业练习 -> /zh-hans/homework；link: 我的班级 -> /zh-hans/joined-classes；link: 文章 -> /zh-hans/reading；link: 书单 -> /zh-hans/playlist；link: 收藏夹 -> /zh-hans/favorites；link: 工作室 -> /zh-hans/studio；link: 试卷 -> /zh-hans/exam；button: button；button: button；button: button；button: button；button: button；button: button；button: button；button: button
- 工作流信号：作业页页面工作流: 识别 8 条页面文本信号、12 个入口、8 个控件；已到达 /zh-hans/textbook，并恢复当前页
- 网络信号：GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/assignment-list-lesson?listType=TODOLIST；GET https://sr.sigmareading.com/services/sr-ms-core/api/textbooks/sku-grouped；GET https://sr.sigmareading.com/services/tlc-ms-core/api/my-account/tl-orders?realm.equals=sr&sort=orderDate,desc&status.in=PAYING&page=0&size=5；GET https://sr.sigmareading.com/zh-hans/homework；GET https://sr.sigmareading.com/zh-hans/textbook

## AI 判断的候选功能

| 功能 | 类别 | 目的 | 预期结果 | 证据 | 结论 |
|------|------|------|----------|------|------|
| 页面上下文识别 | discover | 识别当前页面的主要功能语义和访问上下文。 | 页面标题或主要标题能说明该页用途。 | SReading 作业练习 - 全方位智能在线学习：一站式解决阅读、识字、作业需求，个性化提升学生能力。 | PASS |
| 导航入口发现 | discover | 识别当前页面可继续访问的功能入口。 | 至少发现 1 个可点击跳转入口。 | 教材 -> /zh-hans/textbook<br>作业练习 -> /zh-hans/homework | PASS |
| 操作按钮发现 | discover | 识别当前页面提供的直接操作按钮。 | 至少发现 1 个按钮或提交动作。 | button<br>button | PASS |
| 作业页页面工作流 | verify | 验证 /zh-hans/homework 是否已展示当前页核心内容，并暴露可继续探索的入口或控件。 | 至少识别 2 条页面内容信号或 1 个稳定入口；至少识别 1 个后续入口或关键控件，必要时验证其可达性 | 识别 8 条页面文本信号、12 个入口、8 个控件；已到达 /zh-hans/textbook，并恢复当前页<br>读取页面核心内容: 页面文本 8 条；入口 12 个；控件 8 个 | PASS |

## 验证结果

| 验证项 | 结果 | 说明 |
|--------|------|------|
| 页面可达 | PASS | 最终到达 /zh-hans/homework |
| 截图已生成 | PASS | screenshots/exploration/03-nav-zh-hans-homework.png |
| 交互元素已采集 | PASS | 共采集 74 个交互元素 |
| 网络请求已记录 | PASS | 本页新增 5 个请求 |
| 页面功能入口可见 | PASS | 链接 21 / 按钮 35 / 字段 0 |
| 关键工作流已验证 | PASS | 1 个工作流，PASS 2 / FAIL 0 |

## 交互统计

| 指标 | 数量 |
|------|------|
| 交互元素总数 | 74 |
| 链接数量 | 21 |
| 按钮数量 | 35 |
| 表单字段数量 | 0 |
| 本页新增请求 | 5 |

## AI 驱动的迭代闭环

### 迭代 1（page-navigation-zh-hans-homework）

| 阶段 | 结果 | 摘要 | 关键细节 |
|------|------|------|----------|
| 发现功能 | PASS | 发现 4 个候选功能点。 | 页面上下文识别: SReading 作业练习 - 全方位智能在线学习：一站式解决阅读、识字、作业需求，个性化提升学生能力。<br>导航入口发现: 教材 -> /zh-hans/textbook<br>操作按钮发现: button |
| 验证功能 | PASS | 执行 1 个页面工作流验证。 | 作业页页面工作流: 识别 8 条页面文本信号、12 个入口、8 个控件；已到达 /zh-hans/textbook，并恢复当前页 |
| 修改探索脚本 | PASS | 本轮未发现必须调整的页面探索脚本。 | （无） |
| 再次验证功能 | PASS | 当前页的已配置工作流在本轮内完成了再次验证。 | 作业页页面工作流 / 读取页面核心内容: PASS<br>作业页页面工作流 / 验证后续入口或关键控件: PASS |
| 发现新功能 | PASS | 再次发现 11 条新选项/字段线索。 | 作业页页面工作流: /zh-hans/textbook<br>作业页页面工作流: /zh-hans/homework<br>作业页页面工作流: /zh-hans/joined-classes |

#### 再次发现的新功能线索

- 作业页页面工作流: /zh-hans/textbook
- 作业页页面工作流: /zh-hans/homework
- 作业页页面工作流: /zh-hans/joined-classes
- 作业页页面工作流: /zh-hans/reading
- 作业页页面工作流: /zh-hans/playlist
- 作业页页面工作流: /zh-hans/favorites
- 作业页页面工作流: /zh-hans/studio
- 作业页页面工作流: /zh-hans/exam
- 作业页页面工作流: 页面文本
- 作业页页面工作流: 链接入口
- 作业页页面工作流: 操作按钮

## 页面识别信息

- 最终 URL: https://sr.sigmareading.com/zh-hans/homework
- 标题: SReadingfor Student学生账户 | ©2026 SReading v2.12.12
- 交互元素: 74 个
- 工作流验证: 作业页页面工作流=PASS/PASS

## 主要导航与跳转

| 文本 | 跳转目标 |
|------|----------|
| 教材 | /zh-hans/textbook |
| 作业练习 | /zh-hans/homework |
| 我的班级 | /zh-hans/joined-classes |
| 文章 | /zh-hans/reading |
| 书单 | /zh-hans/playlist |
| 收藏夹 | /zh-hans/favorites |
| 工作室 | /zh-hans/studio |
| 试卷 | /zh-hans/exam |
| 拼音捷径 | /zh-hans/pinyin-pathway |
| 识字快车 | /zh-hans/word-express |
| 汉字地图 | /zh-hans/character-map-overview |
| 字帖字卡 | /zh-hans/copybook |

## 可执行操作

- button
- menu
- multilingual-list
- ion-button
- 全部
- 开始
- 点击解锁标准版
- 我已购买
- 1x

## 页面请求验证

- GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/assignment-list-lesson?listType=TODOLIST
- GET https://sr.sigmareading.com/services/sr-ms-core/api/textbooks/sku-grouped
- GET https://sr.sigmareading.com/services/tlc-ms-core/api/my-account/tl-orders?realm.equals=sr&sort=orderDate,desc&status.in=PAYING&page=0&size=5
- GET https://sr.sigmareading.com/zh-hans/homework
- GET https://sr.sigmareading.com/zh-hans/textbook

## 关键交互工作流验证

### 1. 作业页页面工作流

- 验证目标：验证 /zh-hans/homework 是否已展示当前页核心内容，并暴露可继续探索的入口或控件。
- 结论摘要：识别 8 条页面文本信号、12 个入口、8 个控件；已到达 /zh-hans/textbook，并恢复当前页
- 识别到的选项：/zh-hans/textbook、/zh-hans/homework、/zh-hans/joined-classes、/zh-hans/reading、/zh-hans/playlist、/zh-hans/favorites、/zh-hans/studio、/zh-hans/exam
- 识别到的结果字段：页面文本、链接入口、操作按钮

| 步骤 | 操作对象 | 预期结果 | 实际结果 | 结论 | 触发请求 |
|------|----------|----------|----------|------|----------|
| 读取页面核心内容 | /zh-hans/homework | 至少识别 2 条页面内容信号或 1 个稳定入口 | 页面文本 8 条；入口 12 个；控件 8 个 | PASS | （无） |
| 验证后续入口或关键控件 | /zh-hans/textbook | 至少识别 1 个后续入口或关键控件，必要时验证其可达性 | 已到达 /zh-hans/textbook，并恢复当前页 | PASS | GET https://sr.sigmareading.com/services/sr-ms-core/api/account<br>GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/profile |

#### 结果样本

- 学习
- 教材
- 作业练习

## 原始交互元素样本

| 类型 | 文本/标签 | href | name | placeholder |
|------|-----------|------|------|-------------|
| ion-item | 教材 |  |  |  |
| a | 教材 | /zh-hans/textbook |  |  |
| button | button |  |  |  |
| ion-item | 作业练习 |  |  |  |
| a | 作业练习 | /zh-hans/homework |  |  |
| button | button |  |  |  |
| ion-item | 我的班级 |  |  |  |
| a | 我的班级 | /zh-hans/joined-classes |  |  |
| button | button |  |  |  |
| ion-item | 文章 |  |  |  |
| a | 文章 | /zh-hans/reading |  |  |
| button | button |  |  |  |
| ion-item | 书单 |  |  |  |
| a | 书单 | /zh-hans/playlist |  |  |
| button | button |  |  |  |
| ion-item | 收藏夹 |  |  |  |
| a | 收藏夹 | /zh-hans/favorites |  |  |
| button | button |  |  |  |
| ion-item | 工作室 |  |  |  |
| a | 工作室 | /zh-hans/studio |  |  |

