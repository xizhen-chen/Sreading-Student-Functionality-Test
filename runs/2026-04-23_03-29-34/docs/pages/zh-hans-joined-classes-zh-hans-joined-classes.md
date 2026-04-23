# 页面详细功能文档：导航页: joined-classes (/zh-hans/joined-classes)

> 序号：5
> 阶段：Phase 3
> 页面分类：navigation
> 生成时间：2026/4/23 11:36:25

## 基本信息

- 目标入口：/zh-hans/joined-classes
- 最终 URL：https://sr.sigmareading.com/zh-hans/joined-classes
- 路径：/zh-hans/joined-classes
- 页面探索脚本：page-navigation-zh-hans-joined-classes
- 页面标题：SReading-最智能的免费中文阅读辅助工具
- 截图：`screenshots/exploration/03-nav-zh-hans-joined-classes.png`

## Playwright 探针概览

- 页面上下文：SReading-最智能的免费中文阅读辅助工具
- 可访问入口：/zh-hans/textbook → /zh-hans/textbook；/zh-hans/homework → /zh-hans/homework；/zh-hans/joined-classes → /zh-hans/joined-classes；/zh-hans/reading → /zh-hans/reading；/zh-hans/playlist → /zh-hans/playlist；/zh-hans/favorites → /zh-hans/favorites
- 可执行操作：button、ion-button、menu、multilingual-list、申请加入班级
- 页面加载时触发网络请求 5 个

## AI 分析结论

- AI 角色：AI 负责基于探针证据识别功能、判断预期结果、总结结论，并决定下一轮探针重点。
- AI 探针摘要：AI 基于 5 条页面信号、16 条交互信号和 1 个工作流结果形成当前判断。
- AI 当前结论：AI 判定 /zh-hans/joined-classes 的核心候选功能已完成首轮验证，可继续扩展边界场景。
- AI 下一轮探针重点：沿着已验证的入口继续向详情页、筛选态、空结果态扩展探针。

## Playwright 原始探针证据

- 探针定位：Playwright 仅负责进入页面、触发动作、采样 DOM/网络/结果，不负责下结论。
- 探针目标：为 /zh-hans/joined-classes 收集可供 AI 判断功能、预期结果与下一轮验证目标的证据。
- 页面信号：SReading-最智能的免费中文阅读辅助工具；最终 URL: https://sr.sigmareading.com/zh-hans/joined-classes；标题: ©2026 SReading v2.12.12 | 我的班级；交互元素: 57 个；工作流验证: 班级页页面工作流=PASS/PASS
- 交互信号：link: /zh-hans/textbook -> /zh-hans/textbook；link: /zh-hans/homework -> /zh-hans/homework；link: /zh-hans/joined-classes -> /zh-hans/joined-classes；link: /zh-hans/reading -> /zh-hans/reading；link: /zh-hans/playlist -> /zh-hans/playlist；link: /zh-hans/favorites -> /zh-hans/favorites；link: /zh-hans/studio -> /zh-hans/studio；link: /zh-hans/exam -> /zh-hans/exam；button: button；button: button；button: button；button: button；button: button；button: button；button: button；button: button
- 工作流信号：班级页页面工作流: 识别 8 条页面文本信号、12 个入口、5 个控件；已到达 /zh-hans/textbook，并恢复当前页
- 网络信号：GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/student-class-orders?page=0&size=9999&classStatus.in=NOT_STARTED,STARTED,OPEN_ENDED&enrollmentStatus.in=ENROLLMENT_CONFIRMED,INVITATION_SENT,APPROVAL_AWAITING；GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=admin%40localhost；GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=xizhen.chen%2B1%40tonglec.org；GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=xizhen.chen%40tonglec.org；GET https://sr.sigmareading.com/zh-hans/joined-classes

## AI 判断的候选功能

| 功能 | 类别 | 目的 | 预期结果 | 证据 | 结论 |
|------|------|------|----------|------|------|
| 页面上下文识别 | discover | 识别当前页面的主要功能语义和访问上下文。 | 页面标题或主要标题能说明该页用途。 | SReading-最智能的免费中文阅读辅助工具 | PASS |
| 导航入口发现 | discover | 识别当前页面可继续访问的功能入口。 | 至少发现 1 个可点击跳转入口。 | /zh-hans/textbook -> /zh-hans/textbook<br>/zh-hans/homework -> /zh-hans/homework | PASS |
| 操作按钮发现 | discover | 识别当前页面提供的直接操作按钮。 | 至少发现 1 个按钮或提交动作。 | button<br>button | PASS |
| 班级页页面工作流 | verify | 验证 /zh-hans/joined-classes 是否已展示当前页核心内容，并暴露可继续探索的入口或控件。 | 至少识别 2 条页面内容信号或 1 个稳定入口；至少识别 1 个后续入口或关键控件，必要时验证其可达性 | 识别 8 条页面文本信号、12 个入口、5 个控件；已到达 /zh-hans/textbook，并恢复当前页<br>读取页面核心内容: 页面文本 8 条；入口 12 个；控件 5 个 | PASS |

## 验证结果

| 验证项 | 结果 | 说明 |
|--------|------|------|
| 页面可达 | PASS | 最终到达 /zh-hans/joined-classes |
| 截图已生成 | PASS | screenshots/exploration/03-nav-zh-hans-joined-classes.png |
| 交互元素已采集 | PASS | 共采集 57 个交互元素 |
| 网络请求已记录 | PASS | 本页新增 5 个请求 |
| 页面功能入口可见 | PASS | 链接 18 / 按钮 24 / 字段 0 |
| 关键工作流已验证 | PASS | 1 个工作流，PASS 2 / FAIL 0 |

## 交互统计

| 指标 | 数量 |
|------|------|
| 交互元素总数 | 57 |
| 链接数量 | 18 |
| 按钮数量 | 24 |
| 表单字段数量 | 0 |
| 本页新增请求 | 5 |

## AI 驱动的迭代闭环

### 迭代 1（page-navigation-zh-hans-joined-classes）

| 阶段 | 结果 | 摘要 | 关键细节 |
|------|------|------|----------|
| 发现功能 | PASS | 发现 4 个候选功能点。 | 页面上下文识别: SReading-最智能的免费中文阅读辅助工具<br>导航入口发现: /zh-hans/textbook -> /zh-hans/textbook<br>操作按钮发现: button |
| 验证功能 | PASS | 执行 1 个页面工作流验证。 | 班级页页面工作流: 识别 8 条页面文本信号、12 个入口、5 个控件；已到达 /zh-hans/textbook，并恢复当前页 |
| 修改探索脚本 | PASS | 本轮未发现必须调整的页面探索脚本。 | （无） |
| 再次验证功能 | PASS | 当前页的已配置工作流在本轮内完成了再次验证。 | 班级页页面工作流 / 读取页面核心内容: PASS<br>班级页页面工作流 / 验证后续入口或关键控件: PASS |
| 发现新功能 | PASS | 再次发现 11 条新选项/字段线索。 | 班级页页面工作流: /zh-hans/textbook<br>班级页页面工作流: /zh-hans/homework<br>班级页页面工作流: /zh-hans/joined-classes |

#### 再次发现的新功能线索

- 班级页页面工作流: /zh-hans/textbook
- 班级页页面工作流: /zh-hans/homework
- 班级页页面工作流: /zh-hans/joined-classes
- 班级页页面工作流: /zh-hans/reading
- 班级页页面工作流: /zh-hans/playlist
- 班级页页面工作流: /zh-hans/favorites
- 班级页页面工作流: /zh-hans/studio
- 班级页页面工作流: /zh-hans/exam
- 班级页页面工作流: 页面文本
- 班级页页面工作流: 链接入口
- 班级页页面工作流: 操作按钮

## 页面识别信息

- 最终 URL: https://sr.sigmareading.com/zh-hans/joined-classes
- 标题: ©2026 SReading v2.12.12 | 我的班级
- 交互元素: 57 个
- 工作流验证: 班级页页面工作流=PASS/PASS

## 主要导航与跳转

| 文本 | 跳转目标 |
|------|----------|
| /zh-hans/textbook | /zh-hans/textbook |
| /zh-hans/homework | /zh-hans/homework |
| /zh-hans/joined-classes | /zh-hans/joined-classes |
| /zh-hans/reading | /zh-hans/reading |
| /zh-hans/playlist | /zh-hans/playlist |
| /zh-hans/favorites | /zh-hans/favorites |
| /zh-hans/studio | /zh-hans/studio |
| /zh-hans/exam | /zh-hans/exam |
| /zh-hans/pinyin-pathway | /zh-hans/pinyin-pathway |
| /zh-hans/word-express | /zh-hans/word-express |
| /zh-hans/character-map-overview | /zh-hans/character-map-overview |
| /zh-hans/copybook | /zh-hans/copybook |

## 可执行操作

- button
- ion-button
- menu
- multilingual-list
- 申请加入班级

## 页面请求验证

- GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/student-class-orders?page=0&size=9999&classStatus.in=NOT_STARTED,STARTED,OPEN_ENDED&enrollmentStatus.in=ENROLLMENT_CONFIRMED,INVITATION_SENT,APPROVAL_AWAITING
- GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=admin%40localhost
- GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=xizhen.chen%2B1%40tonglec.org
- GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=xizhen.chen%40tonglec.org
- GET https://sr.sigmareading.com/zh-hans/joined-classes

## 关键交互工作流验证

### 1. 班级页页面工作流

- 验证目标：验证 /zh-hans/joined-classes 是否已展示当前页核心内容，并暴露可继续探索的入口或控件。
- 结论摘要：识别 8 条页面文本信号、12 个入口、5 个控件；已到达 /zh-hans/textbook，并恢复当前页
- 识别到的选项：/zh-hans/textbook、/zh-hans/homework、/zh-hans/joined-classes、/zh-hans/reading、/zh-hans/playlist、/zh-hans/favorites、/zh-hans/studio、/zh-hans/exam
- 识别到的结果字段：页面文本、链接入口、操作按钮

| 步骤 | 操作对象 | 预期结果 | 实际结果 | 结论 | 触发请求 |
|------|----------|----------|----------|------|----------|
| 读取页面核心内容 | /zh-hans/joined-classes | 至少识别 2 条页面内容信号或 1 个稳定入口 | 页面文本 8 条；入口 12 个；控件 5 个 | PASS | （无） |
| 验证后续入口或关键控件 | /zh-hans/textbook | 至少识别 1 个后续入口或关键控件，必要时验证其可达性 | 已到达 /zh-hans/textbook，并恢复当前页 | PASS | GET https://sr.sigmareading.com/services/sr-ms-core/api/account<br>GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/profile |

#### 结果样本

- ©2026 SReading v2.12.12
- 我的班级
- 当前班级

## 原始交互元素样本

| 类型 | 文本/标签 | href | name | placeholder |
|------|-----------|------|------|-------------|
| ion-item | ion-item |  |  |  |
| a | /zh-hans/textbook | /zh-hans/textbook |  |  |
| button | button |  |  |  |
| ion-item | homework |  |  |  |
| a | /zh-hans/homework | /zh-hans/homework |  |  |
| button | button |  |  |  |
| ion-item | joined-classes |  |  |  |
| a | /zh-hans/joined-classes | /zh-hans/joined-classes |  |  |
| button | button |  |  |  |
| ion-item | reading-list |  |  |  |
| a | /zh-hans/reading | /zh-hans/reading |  |  |
| button | button |  |  |  |
| ion-item | click-playlist |  |  |  |
| a | /zh-hans/playlist | /zh-hans/playlist |  |  |
| button | button |  |  |  |
| ion-item | click-favorites |  |  |  |
| a | /zh-hans/favorites | /zh-hans/favorites |  |  |
| button | button |  |  |  |
| ion-item | my-studio |  |  |  |
| a | /zh-hans/studio | /zh-hans/studio |  |  |

