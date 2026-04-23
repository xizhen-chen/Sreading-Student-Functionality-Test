# 页面详细功能文档：导航页: copybook (/zh-hans/copybook)

> 序号：9
> 阶段：Phase 3
> 页面分类：navigation
> 生成时间：2026/4/23 10:13:23

## 基本信息

- 目标入口：/zh-hans/copybook
- 最终 URL：https://sr.sigmareading.com/zh-hans/copybook
- 路径：/zh-hans/copybook
- 页面探索脚本：page-navigation-zh-hans-copybook
- 页面标题：SReading 字帖字卡 - 免费下载抄写字帖和字卡，自定义字表，大字呵护眼睛。
- 截图：`screenshots/exploration/03-nav-zh-hans-copybook.png`

## Playwright 探针概览

- 页面上下文：SReading 字帖字卡 - 免费下载抄写字帖和字卡，自定义字表，大字呵护眼睛。
- 可访问入口：/zh-hans/textbook → /zh-hans/textbook；/zh-hans/reading → /zh-hans/reading；/zh-hans/playlist → /zh-hans/playlist；/zh-hans/presentation/join → /zh-hans/presentation/join；/zh-hans/word-express → /zh-hans/word-express；/zh-hans/character-map-create → /zh-hans/character-map-create
- 可执行操作：button、ion-button、menu、multilingual-list、教材, 请选择教材、课程/单元/册, 请选择课程/单元/册
- 可录入字段：ion-sel-3 / hidden / input、ion-sel-1 / hidden / input、ion-sel-2 / hidden / input
- 页面加载时触发网络请求 2 个

## AI 分析结论

- AI 角色：AI 负责基于探针证据识别功能、判断预期结果、总结结论，并决定下一轮探针重点。
- AI 探针摘要：AI 基于 5 条页面信号、16 条交互信号和 1 个工作流结果形成当前判断。
- AI 当前结论：AI 判定 /zh-hans/copybook 的核心候选功能已完成首轮验证，可继续扩展边界场景。
- AI 下一轮探针重点：沿着已验证的入口继续向详情页、筛选态、空结果态扩展探针。

## Playwright 原始探针证据

- 探针定位：Playwright 仅负责进入页面、触发动作、采样 DOM/网络/结果，不负责下结论。
- 探针目标：为 /zh-hans/copybook 收集可供 AI 判断功能、预期结果与下一轮验证目标的证据。
- 页面信号：SReading 字帖字卡 - 免费下载抄写字帖和字卡，自定义字表，大字呵护眼睛。；最终 URL: https://sr.sigmareading.com/zh-hans/copybook；标题: ©2026 SReading v2.12.12 | 字帖字卡；交互元素: 64 个；工作流验证: copybook页面工作流=PASS/PASS
- 交互信号：link: /zh-hans/textbook -> /zh-hans/textbook；link: /zh-hans/reading -> /zh-hans/reading；link: /zh-hans/playlist -> /zh-hans/playlist；link: /zh-hans/presentation/join -> /zh-hans/presentation/join；link: /zh-hans/word-express -> /zh-hans/word-express；link: /zh-hans/character-map-create -> /zh-hans/character-map-create；link: /zh-hans/pinyin-pathway -> /zh-hans/pinyin-pathway；link: /zh-hans/copybook -> /zh-hans/copybook；button: button；button: button；button: button；button: button；button: button；button: button；button: button；button: button
- 工作流信号：copybook页面工作流: 识别 7 条页面文本信号、11 个入口、8 个控件；已到达 /zh-hans/textbook，并恢复当前页
- 网络信号：GET https://sr.sigmareading.com/services/sr-ms-core/api/assignments-options-series?wordEx=true；GET https://sr.sigmareading.com/zh-hans/copybook

## AI 判断的候选功能

| 功能 | 类别 | 目的 | 预期结果 | 证据 | 结论 |
|------|------|------|----------|------|------|
| 页面上下文识别 | discover | 识别当前页面的主要功能语义和访问上下文。 | 页面标题或主要标题能说明该页用途。 | SReading 字帖字卡 - 免费下载抄写字帖和字卡，自定义字表，大字呵护眼睛。 | PASS |
| 导航入口发现 | discover | 识别当前页面可继续访问的功能入口。 | 至少发现 1 个可点击跳转入口。 | /zh-hans/textbook -> /zh-hans/textbook<br>/zh-hans/reading -> /zh-hans/reading | PASS |
| 操作按钮发现 | discover | 识别当前页面提供的直接操作按钮。 | 至少发现 1 个按钮或提交动作。 | button<br>button | PASS |
| 输入字段发现 | discover | 识别页面中的可输入字段，便于后续验证。 | 至少发现 1 个输入字段。 | ion-sel-3<br>ion-sel-1 | PASS |
| copybook页面工作流 | verify | 验证 /zh-hans/copybook 是否已展示当前页核心内容，并暴露可继续探索的入口或控件。 | 至少识别 2 条页面内容信号或 1 个稳定入口；至少识别 1 个后续入口或关键控件，必要时验证其可达性 | 识别 7 条页面文本信号、11 个入口、8 个控件；已到达 /zh-hans/textbook，并恢复当前页<br>读取页面核心内容: 页面文本 7 条；入口 11 个；控件 8 个 | PASS |

## 验证结果

| 验证项 | 结果 | 说明 |
|--------|------|------|
| 页面可达 | PASS | 最终到达 /zh-hans/copybook |
| 截图已生成 | PASS | screenshots/exploration/03-nav-zh-hans-copybook.png |
| 交互元素已采集 | PASS | 共采集 64 个交互元素 |
| 网络请求已记录 | PASS | 本页新增 2 个请求 |
| 页面功能入口可见 | PASS | 链接 13 / 按钮 33 / 字段 3 |
| 关键工作流已验证 | PASS | 1 个工作流，PASS 2 / FAIL 0 |

## 交互统计

| 指标 | 数量 |
|------|------|
| 交互元素总数 | 64 |
| 链接数量 | 13 |
| 按钮数量 | 33 |
| 表单字段数量 | 3 |
| 本页新增请求 | 2 |

## AI 驱动的迭代闭环

### 迭代 1（page-navigation-zh-hans-copybook）

| 阶段 | 结果 | 摘要 | 关键细节 |
|------|------|------|----------|
| 发现功能 | PASS | 发现 5 个候选功能点。 | 页面上下文识别: SReading 字帖字卡 - 免费下载抄写字帖和字卡，自定义字表，大字呵护眼睛。<br>导航入口发现: /zh-hans/textbook -> /zh-hans/textbook<br>操作按钮发现: button |
| 验证功能 | PASS | 执行 1 个页面工作流验证。 | copybook页面工作流: 识别 7 条页面文本信号、11 个入口、8 个控件；已到达 /zh-hans/textbook，并恢复当前页 |
| 修改探索脚本 | PASS | 本轮未发现必须调整的页面探索脚本。 | （无） |
| 再次验证功能 | PASS | 当前页的已配置工作流在本轮内完成了再次验证。 | copybook页面工作流 / 读取页面核心内容: PASS<br>copybook页面工作流 / 验证后续入口或关键控件: PASS |
| 发现新功能 | PASS | 再次发现 12 条新选项/字段线索。 | copybook页面工作流: /zh-hans/textbook<br>copybook页面工作流: /zh-hans/reading<br>copybook页面工作流: /zh-hans/playlist |

#### 再次发现的新功能线索

- copybook页面工作流: /zh-hans/textbook
- copybook页面工作流: /zh-hans/reading
- copybook页面工作流: /zh-hans/playlist
- copybook页面工作流: /zh-hans/presentation/join
- copybook页面工作流: /zh-hans/word-express
- copybook页面工作流: /zh-hans/character-map-create
- copybook页面工作流: /zh-hans/pinyin-pathway
- copybook页面工作流: /zh-hans/copybook
- copybook页面工作流: 页面文本
- copybook页面工作流: 链接入口
- copybook页面工作流: 操作按钮
- copybook页面工作流: 输入字段

## 页面识别信息

- 最终 URL: https://sr.sigmareading.com/zh-hans/copybook
- 标题: ©2026 SReading v2.12.12 | 字帖字卡
- 交互元素: 64 个
- 工作流验证: copybook页面工作流=PASS/PASS

## 主要导航与跳转

| 文本 | 跳转目标 |
|------|----------|
| /zh-hans/textbook | /zh-hans/textbook |
| /zh-hans/reading | /zh-hans/reading |
| /zh-hans/playlist | /zh-hans/playlist |
| /zh-hans/presentation/join | /zh-hans/presentation/join |
| /zh-hans/word-express | /zh-hans/word-express |
| /zh-hans/character-map-create | /zh-hans/character-map-create |
| /zh-hans/pinyin-pathway | /zh-hans/pinyin-pathway |
| /zh-hans/copybook | /zh-hans/copybook |
| /zh-hans/audio-dictionary | /zh-hans/audio-dictionary |
| /zh-hans/ccswitch | /zh-hans/ccswitch |
| /zh-hans/chinese-to-pinyin | /zh-hans/chinese-to-pinyin |
| https://play.google.com/store/apps/details?id=org.sreading | https://play.google.com/store/apps/details?id=org.sreading |

## 可执行操作

- button
- ion-button
- menu
- multilingual-list
- 教材, 请选择教材
- 课程/单元/册, 请选择课程/单元/册
- 第几课, 请选择第几课
- 预览字帖
- 下载字帖
- 预览字卡
- 下载字卡
- 1x

## 表单与输入项

- ion-sel-3 / hidden / input
- ion-sel-1 / hidden / input
- ion-sel-2 / hidden / input

## 页面请求验证

- GET https://sr.sigmareading.com/services/sr-ms-core/api/assignments-options-series?wordEx=true
- GET https://sr.sigmareading.com/zh-hans/copybook

## 关键交互工作流验证

### 1. copybook页面工作流

- 验证目标：验证 /zh-hans/copybook 是否已展示当前页核心内容，并暴露可继续探索的入口或控件。
- 结论摘要：识别 7 条页面文本信号、11 个入口、8 个控件；已到达 /zh-hans/textbook，并恢复当前页
- 识别到的选项：/zh-hans/textbook、/zh-hans/reading、/zh-hans/playlist、/zh-hans/presentation/join、/zh-hans/word-express、/zh-hans/character-map-create、/zh-hans/pinyin-pathway、/zh-hans/copybook
- 识别到的结果字段：页面文本、链接入口、操作按钮、输入字段

| 步骤 | 操作对象 | 预期结果 | 实际结果 | 结论 | 触发请求 |
|------|----------|----------|----------|------|----------|
| 读取页面核心内容 | /zh-hans/copybook | 至少识别 2 条页面内容信号或 1 个稳定入口 | 页面文本 7 条；入口 11 个；控件 8 个 | PASS | （无） |
| 验证后续入口或关键控件 | /zh-hans/textbook | 至少识别 1 个后续入口或关键控件，必要时验证其可达性 | 已到达 /zh-hans/textbook，并恢复当前页 | PASS | GET https://sr.sigmareading.com/services/sr-ms-core/api/account<br>GET https://sr.sigmareading.com/services/sr-ms-core/api/textbooks/sku-grouped |

#### 结果样本

- ©2026 SReading v2.12.12
- 字帖字卡
- 按教材

## 原始交互元素样本

| 类型 | 文本/标签 | href | name | placeholder |
|------|-----------|------|------|-------------|
| ion-item | textbook |  |  |  |
| a | /zh-hans/textbook | /zh-hans/textbook |  |  |
| button | button |  |  |  |
| ion-item | reading-list |  |  |  |
| a | /zh-hans/reading | /zh-hans/reading |  |  |
| button | button |  |  |  |
| ion-item | click-playlist |  |  |  |
| a | /zh-hans/playlist | /zh-hans/playlist |  |  |
| button | button |  |  |  |
| ion-item | presentation-join |  |  |  |
| a | /zh-hans/presentation/join | /zh-hans/presentation/join |  |  |
| button | button |  |  |  |
| ion-item | word-express |  |  |  |
| a | /zh-hans/word-express | /zh-hans/word-express |  |  |
| button | button |  |  |  |
| ion-item | character-map-create |  |  |  |
| a | /zh-hans/character-map-create | /zh-hans/character-map-create |  |  |
| button | button |  |  |  |
| ion-item | pinyin-pathway |  |  |  |
| a | /zh-hans/pinyin-pathway | /zh-hans/pinyin-pathway |  |  |

