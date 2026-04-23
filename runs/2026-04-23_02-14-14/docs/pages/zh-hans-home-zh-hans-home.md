# 页面详细功能文档：主页（/zh-hans/home）

> 序号：1
> 阶段：Phase 2
> 页面分类：home
> 生成时间：2026/4/23 10:24:04

## 基本信息

- 目标入口：/zh-hans/home
- 最终 URL：https://sr.sigmareading.com/zh-hans/home
- 路径：/zh-hans/home
- 页面探索脚本：page-home-overview
- 页面标题：SReading - 最智能的免费中文阅读、识字、作业工具 -- 传播人类经典，构建文化与知识的桥梁。
- 截图：`screenshots/exploration/02-home-fullpage.png`

## Playwright 探针概览

- 页面上下文：SReading - 最智能的免费中文阅读、识字、作业工具 -- 传播人类经典，构建文化与知识的桥梁。
- 可访问入口：教材 → /zh-hans/textbook；文章 → /zh-hans/reading；书单 → /zh-hans/playlist；加入测试 → /zh-hans/presentation/join；识字快车 → /zh-hans/word-express；汉字地图 → /zh-hans/character-map-create
- 可执行操作：button、menu、multilingual-list、ion-button、注册、登录
- 页面加载时触发网络请求 7 个

## AI 分析结论

- AI 角色：AI 负责基于探针证据识别功能、判断预期结果、总结结论，并决定下一轮探针重点。
- AI 探针摘要：AI 基于 6 条页面信号、16 条交互信号和 1 个工作流结果形成当前判断。
- AI 当前结论：AI 判定 /zh-hans/home 的核心候选功能已完成首轮验证，可继续扩展边界场景。
- AI 下一轮探针重点：沿着已验证的入口继续向详情页、筛选态、空结果态扩展探针。

## Playwright 原始探针证据

- 探针定位：Playwright 仅负责进入页面、触发动作、采样 DOM/网络/结果，不负责下结论。
- 探针目标：为 /zh-hans/home 收集可供 AI 判断功能、预期结果与下一轮验证目标的证据。
- 页面信号：SReading - 最智能的免费中文阅读、识字、作业工具 -- 传播人类经典，构建文化与知识的桥梁。；标题区域: SReadingfor Student | ©2026 SReading v2.12.12；底部导航: ；功能卡片数量: 8；交互元素总计: 78；工作流验证: 首页主入口工作流=PASS/PASS
- 交互信号：link: 教材 -> /zh-hans/textbook；link: 文章 -> /zh-hans/reading；link: 书单 -> /zh-hans/playlist；link: 加入测试 -> /zh-hans/presentation/join；link: 识字快车 -> /zh-hans/word-express；link: 汉字地图 -> /zh-hans/character-map-create；link: 拼音捷径 -> /zh-hans/pinyin-pathway；link: 字帖字卡 -> /zh-hans/copybook；button: button；button: button；button: button；button: button；button: button；button: button；button: button；button: button
- 工作流信号：首页主入口工作流: 识别 8 个首页主入口；已到达 /zh-hans/textbook，并恢复当前页
- 网络信号：GET https://sr.sigmareading.com/assets/web.BW-l3zzw.js；GET https://sr.sigmareading.com/images/app-store.svg；GET https://sr.sigmareading.com/images/google-play.png；GET https://sr.sigmareading.com/services/sr-ms-core/api/playlists?sort=sortNum,desc&page=0&size=4&count=0；GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?sort=name.text,desc&page=0&size=8；GET https://sr.sigmareading.com/services/sr-ms-core/api/textbooks/sku-grouped；GET https://sr.sigmareading.com/zh-hans/textbook

## AI 判断的候选功能

| 功能 | 类别 | 目的 | 预期结果 | 证据 | 结论 |
|------|------|------|----------|------|------|
| 页面上下文识别 | discover | 识别当前页面的主要功能语义和访问上下文。 | 页面标题或主要标题能说明该页用途。 | SReading - 最智能的免费中文阅读、识字、作业工具 -- 传播人类经典，构建文化与知识的桥梁。 | PASS |
| 导航入口发现 | discover | 识别当前页面可继续访问的功能入口。 | 至少发现 1 个可点击跳转入口。 | 教材 -> /zh-hans/textbook<br>文章 -> /zh-hans/reading | PASS |
| 操作按钮发现 | discover | 识别当前页面提供的直接操作按钮。 | 至少发现 1 个按钮或提交动作。 | button<br>button | PASS |
| 首页主入口工作流 | verify | 验证首页是否已展示主要功能卡片，并确认至少一个主入口可继续进入下一层页面。 | 至少识别 3 个主入口；至少 1 个首页入口可以进入下一层页面并恢复首页上下文 | 识别 8 个首页主入口；已到达 /zh-hans/textbook，并恢复当前页<br>读取首页主入口: 识别 8 个主入口：教材 -> /zh-hans/textbook；文章 -> /zh-hans/reading；书单 -> /zh-hans/playlist；加入测试 -> /zh-hans/presentation/join | PASS |

## 验证结果

| 验证项 | 结果 | 说明 |
|--------|------|------|
| 页面可达 | PASS | 最终到达 /zh-hans/home |
| 截图已生成 | PASS | screenshots/exploration/02-home-fullpage.png |
| 交互元素已采集 | PASS | 共采集 78 个交互元素 |
| 网络请求已记录 | PASS | 本页新增 7 个请求 |
| 主页导航可见 | PASS | 共识别 38 个跳转入口 |
| 关键工作流已验证 | PASS | 1 个工作流，PASS 2 / FAIL 0 |

## 交互统计

| 指标 | 数量 |
|------|------|
| 交互元素总数 | 78 |
| 链接数量 | 38 |
| 按钮数量 | 28 |
| 表单字段数量 | 0 |
| 本页新增请求 | 7 |

## AI 驱动的迭代闭环

### 迭代 1（page-home-overview）

| 阶段 | 结果 | 摘要 | 关键细节 |
|------|------|------|----------|
| 发现功能 | PASS | 发现 4 个候选功能点。 | 页面上下文识别: SReading - 最智能的免费中文阅读、识字、作业工具 -- 传播人类经典，构建文化与知识的桥梁。<br>导航入口发现: 教材 -> /zh-hans/textbook<br>操作按钮发现: button |
| 验证功能 | PASS | 执行 1 个页面工作流验证。 | 首页主入口工作流: 识别 8 个首页主入口；已到达 /zh-hans/textbook，并恢复当前页 |
| 修改探索脚本 | PASS | 本轮未发现必须调整的页面探索脚本。 | （无） |
| 再次验证功能 | PASS | 当前页的已配置工作流在本轮内完成了再次验证。 | 首页主入口工作流 / 读取首页主入口: PASS<br>首页主入口工作流 / 验证首页主入口可达性: PASS |
| 发现新功能 | PASS | 再次发现 10 条新选项/字段线索。 | 首页主入口工作流: 教材 -> /zh-hans/textbook<br>首页主入口工作流: 文章 -> /zh-hans/reading<br>首页主入口工作流: 书单 -> /zh-hans/playlist |

#### 再次发现的新功能线索

- 首页主入口工作流: 教材 -> /zh-hans/textbook
- 首页主入口工作流: 文章 -> /zh-hans/reading
- 首页主入口工作流: 书单 -> /zh-hans/playlist
- 首页主入口工作流: 加入测试 -> /zh-hans/presentation/join
- 首页主入口工作流: 识字快车 -> /zh-hans/word-express
- 首页主入口工作流: 汉字地图 -> /zh-hans/character-map-create
- 首页主入口工作流: 拼音捷径 -> /zh-hans/pinyin-pathway
- 首页主入口工作流: 字帖字卡 -> /zh-hans/copybook
- 首页主入口工作流: 链接入口
- 首页主入口工作流: 操作按钮

## 页面识别信息

- 标题区域: SReadingfor Student | ©2026 SReading v2.12.12
- 底部导航: 
- 功能卡片数量: 8
- 交互元素总计: 78
- 工作流验证: 首页主入口工作流=PASS/PASS

## 主要导航与跳转

| 文本 | 跳转目标 |
|------|----------|
| 教材 | /zh-hans/textbook |
| 文章 | /zh-hans/reading |
| 书单 | /zh-hans/playlist |
| 加入测试 | /zh-hans/presentation/join |
| 识字快车 | /zh-hans/word-express |
| 汉字地图 | /zh-hans/character-map-create |
| 拼音捷径 | /zh-hans/pinyin-pathway |
| 字帖字卡 | /zh-hans/copybook |
| 有声字典 | /zh-hans/audio-dictionary |
| 简繁转换 | /zh-hans/ccswitch |
| 字转拼音 | /zh-hans/chinese-to-pinyin |
| / | / |

## 可执行操作

- button
- menu
- multilingual-list
- ion-button
- 注册
- 登录
- 教师账户
- 1x

## 页面请求验证

- GET https://sr.sigmareading.com/assets/web.BW-l3zzw.js
- GET https://sr.sigmareading.com/images/app-store.svg
- GET https://sr.sigmareading.com/images/google-play.png
- GET https://sr.sigmareading.com/services/sr-ms-core/api/playlists?sort=sortNum,desc&page=0&size=4&count=0
- GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?sort=name.text,desc&page=0&size=8
- GET https://sr.sigmareading.com/services/sr-ms-core/api/textbooks/sku-grouped
- GET https://sr.sigmareading.com/zh-hans/textbook

## 关键交互工作流验证

### 1. 首页主入口工作流

- 验证目标：验证首页是否已展示主要功能卡片，并确认至少一个主入口可继续进入下一层页面。
- 结论摘要：识别 8 个首页主入口；已到达 /zh-hans/textbook，并恢复当前页
- 识别到的选项：教材 -> /zh-hans/textbook、文章 -> /zh-hans/reading、书单 -> /zh-hans/playlist、加入测试 -> /zh-hans/presentation/join、识字快车 -> /zh-hans/word-express、汉字地图 -> /zh-hans/character-map-create、拼音捷径 -> /zh-hans/pinyin-pathway、字帖字卡 -> /zh-hans/copybook
- 识别到的结果字段：链接入口、操作按钮

| 步骤 | 操作对象 | 预期结果 | 实际结果 | 结论 | 触发请求 |
|------|----------|----------|----------|------|----------|
| 读取首页主入口 | 首页功能卡片 | 至少识别 3 个主入口 | 识别 8 个主入口：教材 -> /zh-hans/textbook；文章 -> /zh-hans/reading；书单 -> /zh-hans/playlist；加入测试 -> /zh-hans/presentation/join | PASS | （无） |
| 验证首页主入口可达性 | /zh-hans/textbook | 至少 1 个首页入口可以进入下一层页面并恢复首页上下文 | 已到达 /zh-hans/textbook，并恢复当前页 | PASS | GET https://sr.sigmareading.com/services/sr-ms-core/api/account<br>GET https://sr.sigmareading.com/services/sr-ms-core/api/textbooks/sku-grouped |

#### 结果样本

- ©2026 SReading v2.12.12
- 教材
- 购买

## 原始交互元素样本

| 类型 | 文本/标签 | href | name | placeholder |
|------|-----------|------|------|-------------|
| ion-item | 教材 |  |  |  |
| a | 教材 | /zh-hans/textbook |  |  |
| button | button |  |  |  |
| ion-item | 文章 |  |  |  |
| a | 文章 | /zh-hans/reading |  |  |
| button | button |  |  |  |
| ion-item | 书单 |  |  |  |
| a | 书单 | /zh-hans/playlist |  |  |
| button | button |  |  |  |
| ion-item | 加入测试 |  |  |  |
| a | 加入测试 | /zh-hans/presentation/join |  |  |
| button | button |  |  |  |
| ion-item | 识字快车 |  |  |  |
| a | 识字快车 | /zh-hans/word-express |  |  |
| button | button |  |  |  |
| ion-item | 汉字地图 |  |  |  |
| a | 汉字地图 | /zh-hans/character-map-create |  |  |
| button | button |  |  |  |
| ion-item | 拼音捷径 |  |  |  |
| a | 拼音捷径 | /zh-hans/pinyin-pathway |  |  |

