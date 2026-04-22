# 页面详细功能文档：主页（/zh-hans/home）

> 序号：1
> 阶段：Phase 2
> 页面分类：home
> 生成时间：2026/4/22 15:11:28

## 基本信息

- 目标入口：/zh-hans/home
- 最终 URL：https://sr.sigmareading.com/zh-hans/home
- 路径：/zh-hans/home
- 页面探索脚本：page-home-overview
- 页面标题：SReading - 最智能的免费中文阅读、识字、作业工具 -- 传播人类经典，构建文化与知识的桥梁。
- 截图：`screenshots/exploration/02-home-fullpage.png`

## 功能概览

- 页面上下文：SReading - 最智能的免费中文阅读、识字、作业工具 -- 传播人类经典，构建文化与知识的桥梁。
- 可访问入口：教材 → /zh-hans/textbook；作业练习 → /zh-hans/homework；我的班级 → /zh-hans/joined-classes；文章 → /zh-hans/reading；书单 → /zh-hans/playlist；收藏夹 → /zh-hans/favorites
- 可执行操作：button、menu、multilingual-list、教师账户、1x
- 页面加载时触发网络请求 6 个

## 发现功能

| 功能 | 类别 | 目的 | 预期结果 | 证据 | 结论 |
|------|------|------|----------|------|------|
| 页面上下文识别 | discover | 识别当前页面的主要功能语义和访问上下文。 | 页面标题或主要标题能说明该页用途。 | SReading - 最智能的免费中文阅读、识字、作业工具 -- 传播人类经典，构建文化与知识的桥梁。 | PASS |
| 导航入口发现 | discover | 识别当前页面可继续访问的功能入口。 | 至少发现 1 个可点击跳转入口。 | 教材 -> /zh-hans/textbook<br>作业练习 -> /zh-hans/homework | PASS |
| 操作按钮发现 | discover | 识别当前页面提供的直接操作按钮。 | 至少发现 1 个按钮或提交动作。 | button<br>button | PASS |

## 验证结果

| 验证项 | 结果 | 说明 |
|--------|------|------|
| 页面可达 | PASS | 最终到达 /zh-hans/home |
| 截图已生成 | PASS | screenshots/exploration/02-home-fullpage.png |
| 交互元素已采集 | PASS | 共采集 95 个交互元素 |
| 网络请求已记录 | PASS | 本页新增 6 个请求 |
| 主页导航可见 | PASS | 共识别 53 个跳转入口 |

## 交互统计

| 指标 | 数量 |
|------|------|
| 交互元素总数 | 95 |
| 链接数量 | 53 |
| 按钮数量 | 27 |
| 表单字段数量 | 0 |
| 本页新增请求 | 6 |

## 页面脚本自主迭代

### 迭代 1（page-home-overview）

| 阶段 | 结果 | 摘要 | 关键细节 |
|------|------|------|----------|
| 发现功能 | PASS | 发现 3 个候选功能点。 | 页面上下文识别: SReading - 最智能的免费中文阅读、识字、作业工具 -- 传播人类经典，构建文化与知识的桥梁。<br>导航入口发现: 教材 -> /zh-hans/textbook<br>操作按钮发现: button |
| 验证功能 | WARN | 当前页面尚未配置专属工作流，先保留基础验证。 | （无） |
| 修改探索脚本 | WARN | 生成 1 条探索脚本调整建议。 | 已发现多个功能入口但缺少专属验证脚本: 为 /zh-hans/home 拆分独立页面探索脚本，增加按钮点击、结果校验和接口观测步骤。 |
| 再次验证功能 | WARN | 当前页的已配置工作流在本轮内完成了再次验证。 | （无） |
| 发现新功能 | WARN | 本轮未捕获到新的选项或结果字段。 | （无） |

#### 探索脚本调整建议

- 已发现多个功能入口但缺少专属验证脚本：为 /zh-hans/home 拆分独立页面探索脚本，增加按钮点击、结果校验和接口观测步骤。；预期效果：把当前页面从“发现”提升到“详细验证 + 迭代发现新功能”。

## 页面识别信息

- 标题区域: SReadingfor Student学生账户 | ©2026 SReading v2.12.12
- 底部导航: 
- 功能卡片数量: 11
- 交互元素总计: 95

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
- 教师账户
- 1x

## 页面请求验证

- GET https://sr.sigmareading.com/images/mascot-two.png
- GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/assignment-number
- GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/learning-stats?type=ALL
- GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/questionnaire
- GET https://sr.sigmareading.com/services/sr-ms-core/api/playlists?sort=sortNum,desc&page=0&size=6&count=0
- GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?page=3&size=3&count=0&recs=true

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

