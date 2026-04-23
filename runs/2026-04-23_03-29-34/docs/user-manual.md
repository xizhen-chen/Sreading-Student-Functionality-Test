# SigmaReading 用户使用文档

> 生成时间：2026/4/23 11:36:25
> 依据：本轮黑盒测试中真实进入页面、触发操作、观察反馈后的证据自动整理
> 说明：本文档只覆盖本轮已实际验证的功能页面；未纳入探针的功能不在本文中承诺行为

## 快速开始

1. 打开 https://sr.sigmareading.com/zh-hans/home，作为学生端主入口。
2. 如果页面跳转到 /zh-hans/unauthorized，请先登录，再继续访问目标功能。
3. 已在首页识别到的主入口包括：教材（/zh-hans/textbook）、作业练习（/zh-hans/homework）、我的班级（/zh-hans/joined-classes）、文章（/zh-hans/reading）、书单（/zh-hans/playlist）、收藏夹（/zh-hans/favorites）、工作室（/zh-hans/studio）、试卷（/zh-hans/exam）
4. 进入具体功能页后，可结合本文的“已验证功能”和“可见反馈”判断操作是否符合预期。

## 功能总览

| 模块 | 页面路径 | 进入方式 | 已验证能力 | 注意事项 |
|------|----------|----------|------------|----------|
| [主页（/zh-hans/home）](pages/zh-hans-home-zh-hans-home.md) | /zh-hans/home | 登录后默认进入首页。 | 首页主入口工作流：识别 8 个首页主入口；已到达 /zh-hans/textbook，并恢复当前页；可进入 教材；可进入 作业练习 | 当前页面可直接访问。 |
| [导航页: exam (/zh-hans/exam)](pages/zh-hans-exam-zh-hans-exam.md) | /zh-hans/exam | 可尝试直接访问 /zh-hans/exam。 | 试卷页页面工作流：识别 7 条页面文本信号、12 个入口、5 个控件；已到达 /zh-hans/textbook，并恢复当前页；可进入 教材页；可进入 作业页 | 当前页面可直接访问。 |
| [导航页: favorites (/zh-hans/favorites)](pages/zh-hans-favorites-zh-hans-favorites.md) | /zh-hans/favorites | 可尝试直接访问 /zh-hans/favorites。 | 收藏夹页面工作流：识别 6 条页面文本信号、12 个入口、8 个控件；已到达 /zh-hans/reading，并恢复当前页；收藏夹表单填写验证：已填写 1 个字段，观察到真实反馈。；可进入 教材页 | 当前页面可直接访问。 |
| [导航页: homework (/zh-hans/homework)](pages/zh-hans-homework-zh-hans-homework.md) | /zh-hans/homework | 可从 导航页: textbook (/zh-hans/textbook) 的已验证入口进入。 | 作业页页面工作流：识别 8 条页面文本信号、12 个入口、8 个控件；已到达 /zh-hans/textbook，并恢复当前页；作业页按钮使用验证：已尝试点击“开始”，观察到真实反馈。；可进入 教材页 | 当前页面可直接访问。 |
| [导航页: joined-classes (/zh-hans/joined-classes)](pages/zh-hans-joined-classes-zh-hans-joined-classes.md) | /zh-hans/joined-classes | 可尝试直接访问 /zh-hans/joined-classes。 | 班级页页面工作流：识别 8 条页面文本信号、12 个入口、5 个控件；已到达 /zh-hans/textbook，并恢复当前页；可进入 教材页；可进入 作业页 | 当前页面可直接访问。 |
| [导航页: playlist (/zh-hans/playlist)](pages/zh-hans-playlist-zh-hans-playlist.md) | /zh-hans/playlist | 可尝试直接访问 /zh-hans/playlist。 | 书单页页面工作流：识别 8 条页面文本信号、12 个入口、8 个控件；已到达 /zh-hans/textbook，并恢复当前页；书单页表单填写验证：已填写 1 个字段，观察到真实反馈。；可进入 教材页 | 当前页面可直接访问。 |
| [导航页: reading (/zh-hans/reading)](pages/zh-hans-reading-search-e9-b2-a4-e9-b1-bc-e8-b7-b3-e9-be-99-e9-97-a8-e5-90-8c.md) | /zh-hans/reading | 可从 导航页: favorites (/zh-hans/favorites) 的已验证入口进入。 | 文章列表基线识别：识别到 8 条文章结果样本，字段候选：标题、提供者、日期、阅读量；搜索功能验证：使用关键字“鲤鱼跳龙门同”执行搜索，未在样本结果中命中关键字。；排序功能验证：发现排序候选项 8 个；本次尝试应用：发布日期 | 当前页面可直接访问。 |
| [导航页: studio (/zh-hans/studio)](pages/zh-hans-studio-zh-hans-studio.md) | /zh-hans/studio | 可尝试直接访问 /zh-hans/studio。 | 工作室页面工作流：识别 7 条页面文本信号、12 个入口、8 个控件；已到达 /zh-hans/textbook，并恢复当前页；工作室表单填写验证：已填写 1 个字段，观察到真实反馈。；可进入 教材页 | 当前页面可直接访问。 |
| [导航页: textbook (/zh-hans/textbook)](pages/zh-hans-textbook-zh-hans-textbook.md) | /zh-hans/textbook | 可从 导航页: exam (/zh-hans/exam) 的已验证入口进入。<br>可从 主页（/zh-hans/home） 的已验证入口进入。<br>可从 导航页: homework (/zh-hans/homework) 的已验证入口进入。 | 教材页页面工作流：识别 8 条页面文本信号、12 个入口、7 个控件；已到达 /zh-hans/homework，并恢复当前页；可进入 教材页；可进入 作业页 | 当前页面可直接访问。 |
| [深层页: assignment (/zh-hans/assignment/69e458ad85faa905f1218d2d?from=homework&homeworkTab=list&homeworkName=list)](pages/zh-hans-assignment-69e458ad85faa905f1218d2d-from-homework-homeworktab-list-homeworkname-list.md) | /zh-hans/assignment/69e458ad85faa905f1218d2d | 可尝试直接访问 /zh-hans/assignment/69e458ad85faa905f1218d2d?from=homework&homeworkTab=list&homeworkName=list。 | 作业详情详情工作流：识别 3 条详情文本信号、4 个控件信号。；作业详情按钮使用验证：已尝试点击“开始”，观察到真实反馈。；可进入 教材页 | 当前页面可直接访问。 |
| [深层页: assignment (/zh-hans/assignment/69e458ae85faa905f1218d2f)](pages/zh-hans-assignment-69e458ae85faa905f1218d2f-zh-hans-assignment-69e458ae85faa905f1218d2f.md) | /zh-hans/assignment/69e458ae85faa905f1218d2f | 可尝试直接访问 /zh-hans/assignment/69e458ae85faa905f1218d2f。 | 作业详情详情工作流：识别 3 条详情文本信号、4 个控件信号。；作业详情按钮使用验证：已尝试点击“开始”，观察到真实反馈。；可进入 教材页 | 当前页面可直接访问。 |
| [深层页: reading-display (/zh-hans/reading-display/63ec90d4e328e6231bb8b4a2)](pages/zh-hans-reading-display-63ec90d4e328e6231bb8b4a2-zh-hans-reading-display-63ec90d4e328e6231bb8b4a2.md) | /zh-hans/reading-display/63ec90d4e328e6231bb8b4a2 | 可尝试直接访问 /zh-hans/reading-display/63ec90d4e328e6231bb8b4a2。 | 文章详情详情工作流：识别 8 条详情文本信号、8 个控件信号。；可进入 教材页；可进入 作业页 | 当前页面可直接访问。 |
| [深层页: personal-data (/zh-hans/personal-data/590ea45f-04ee-4f24-b1d9-f3fd38e472aa)](pages/zh-hans-personal-data-590ea45f-04ee-4f24-b1d9-f3fd38e472aa-zh-hans-personal-data-590ea45f-04ee-4f24-b1d9-f3fd38e472aa.md) | /zh-hans/personal-data/590ea45f-04ee-4f24-b1d9-f3fd38e472aa | 可尝试直接访问 /zh-hans/personal-data/590ea45f-04ee-4f24-b1d9-f3fd38e472aa。 | 个人数据详情详情工作流：识别 8 条详情文本信号、5 个控件信号。；可进入 教材页；可进入 作业页 | 当前页面可直接访问。 |
| [深层页: reading-display (/zh-hans/reading-display/672b0940b829737eb3f6b047)](pages/zh-hans-reading-display-672b0940b829737eb3f6b047-zh-hans-reading-display-672b0940b829737eb3f6b047.md) | /zh-hans/reading-display/672b0940b829737eb3f6b047 | 可尝试直接访问 /zh-hans/reading-display/672b0940b829737eb3f6b047。 | 文章详情详情工作流：识别 5 条详情文本信号、8 个控件信号。；可进入 教材页；可进入 作业页 | 当前页面可直接访问。 |
| [深层页: playlist-display (/zh-hans/playlist-display/6539da63ca06cb10e16f58ef)](pages/zh-hans-playlist-display-6539da63ca06cb10e16f58ef-zh-hans-playlist-display-6539da63ca06cb10e16f58ef.md) | /zh-hans/playlist-display/6539da63ca06cb10e16f58ef | 可尝试直接访问 /zh-hans/playlist-display/6539da63ca06cb10e16f58ef。 | 书单详情详情工作流：识别 8 条详情文本信号、8 个控件信号。；书单详情表单填写验证：已填写 1 个字段，观察到真实反馈。；可进入 教材页 | 当前页面可直接访问。 |
| [深层页: playlist-display (/zh-hans/playlist-display/653a1734d448f0607b7aa574)](pages/zh-hans-playlist-display-653a1734d448f0607b7aa574-zh-hans-playlist-display-653a1734d448f0607b7aa574.md) | /zh-hans/playlist-display/653a1734d448f0607b7aa574 | 可尝试直接访问 /zh-hans/playlist-display/653a1734d448f0607b7aa574。 | 书单详情详情工作流：识别 8 条详情文本信号、8 个控件信号。；书单详情表单填写验证：已填写 1 个字段，观察到真实反馈。；可进入 教材页 | 当前页面可直接访问。 |
| [深层页: student-invite (/zh-hans/student-invite)](pages/zh-hans-student-invite-zh-hans-student-invite.md) | /zh-hans/student-invite | 可尝试直接访问 /zh-hans/student-invite。 | 班级邀请详情工作流：识别 4 条详情文本信号、6 个控件信号。；班级邀请表单填写验证：已填写 1 个字段，观察到真实反馈。；可执行 back | 当前页面可直接访问。 |
| [路由探索: /zh-hans/login](pages/zh-hans-notfound-zh-hans-login.md) | /zh-hans/notfound | 可尝试直接访问 /zh-hans/login。 | 登录页路由工作流：当前最终路径为 /zh-hans/notfound，识别 3 条页面信号、0 个入口、2 个控件。；可执行 back；可执行 首页 | 访问 /zh-hans/login 时会跳转到 /zh-hans/notfound，存在重定向或权限分流。 |
| [路由探索: /zh-hans/profile](pages/zh-hans-profile-zh-hans-profile.md) | /zh-hans/profile | 可尝试直接访问 /zh-hans/profile。 | 个人中心工作流：识别 3 条设置/账号信号；已到达 /zh-hans/textbook，并恢复当前页；个人中心表单填写验证：已填写 1 个字段，未观察到明确反馈。；可进入 教材页 | 个人中心表单填写验证 只得到部分结果，AI 需要决定下一轮应优先补采哪些条件或弹层选项。；个人中心表单填写验证 / 填写已发现字段并观察结果：已填写 您的名字=测试输入，但未观测到 URL、请求或结果样本的明确变化 |

## 逐模块使用说明

### 1. [主页（/zh-hans/home）](pages/zh-hans-home-zh-hans-home.md)

- 页面路径：/zh-hans/home
- 进入方式：登录后默认进入首页。
- 访问条件：当前页面可直接访问。
- 已验证功能：首页主入口工作流：识别 8 个首页主入口；已到达 /zh-hans/textbook，并恢复当前页；可进入 教材；可进入 作业练习；可进入 我的班级；可进入 文章；可执行 menu
- 可见反馈：©2026 SReading v2.12.12；教材；购买；SReading - 最智能的免费中文阅读、识字、作业工具 -- 传播人类经典，构建文化与知识的桥梁。；标题区域: SReadingfor Student学生账户 | ©2026 SReading v2.12.12；底部导航:

### 2. [导航页: exam (/zh-hans/exam)](pages/zh-hans-exam-zh-hans-exam.md)

- 页面路径：/zh-hans/exam
- 进入方式：可尝试直接访问 /zh-hans/exam。
- 访问条件：当前页面可直接访问。
- 已验证功能：试卷页页面工作流：识别 7 条页面文本信号、12 个入口、5 个控件；已到达 /zh-hans/textbook，并恢复当前页；可进入 教材页；可进入 作业页；可进入 班级页；可进入 reading；可执行 ion-button
- 可见反馈：©2026 SReading v2.12.12；测试；当前；SReading-最智能的免费中文阅读辅助工具；最终 URL: https://sr.sigmareading.com/zh-hans/exam；标题: ©2026 SReading v2.12.12 | 测试

### 3. [导航页: favorites (/zh-hans/favorites)](pages/zh-hans-favorites-zh-hans-favorites.md)

- 页面路径：/zh-hans/favorites
- 进入方式：可尝试直接访问 /zh-hans/favorites。
- 访问条件：当前页面可直接访问。
- 已验证功能：收藏夹页面工作流：识别 6 条页面文本信号、12 个入口、8 个控件；已到达 /zh-hans/reading，并恢复当前页；收藏夹表单填写验证：已填写 1 个字段，观察到真实反馈。；可进入 教材页；可进入 作业页；可进入 班级页；可进入 reading
- 可见反馈：©2026 SReading v2.12.12；收藏夹；文章；SReading 我喜爱 - 最智能的免费中文阅读、识字、作业工具 -- 传播人类经典，构建文化与知识的桥梁。；最终 URL: https://sr.sigmareading.com/zh-hans/favorites；标题: ©2026 SReading v2.12.12 | 收藏夹

### 4. [导航页: homework (/zh-hans/homework)](pages/zh-hans-homework-zh-hans-homework.md)

- 页面路径：/zh-hans/homework
- 进入方式：可从 导航页: textbook (/zh-hans/textbook) 的已验证入口进入。
- 访问条件：当前页面可直接访问。
- 已验证功能：作业页页面工作流：识别 8 条页面文本信号、12 个入口、8 个控件；已到达 /zh-hans/textbook，并恢复当前页；作业页按钮使用验证：已尝试点击“开始”，观察到真实反馈。；可进入 教材页；可进入 作业页；可进入 班级页；可进入 reading
- 可见反馈：©2026 SReading v2.12.12；作业练习；待做；新代中文：致远版 L1_T1 第2课.a1: 汉字；加载中...；SReading 作业练习 - 全方位智能在线学习：一站式解决阅读、识字、作业需求，个性化提升学生能力。

### 5. [导航页: joined-classes (/zh-hans/joined-classes)](pages/zh-hans-joined-classes-zh-hans-joined-classes.md)

- 页面路径：/zh-hans/joined-classes
- 进入方式：可尝试直接访问 /zh-hans/joined-classes。
- 访问条件：当前页面可直接访问。
- 已验证功能：班级页页面工作流：识别 8 条页面文本信号、12 个入口、5 个控件；已到达 /zh-hans/textbook，并恢复当前页；可进入 教材页；可进入 作业页；可进入 班级页；可进入 reading；可执行 ion-button
- 可见反馈：©2026 SReading v2.12.12；我的班级；当前班级；SReading-最智能的免费中文阅读辅助工具；最终 URL: https://sr.sigmareading.com/zh-hans/joined-classes；标题: ©2026 SReading v2.12.12 | 我的班级

### 6. [导航页: playlist (/zh-hans/playlist)](pages/zh-hans-playlist-zh-hans-playlist.md)

- 页面路径：/zh-hans/playlist
- 进入方式：可尝试直接访问 /zh-hans/playlist。
- 访问条件：当前页面可直接访问。
- 已验证功能：书单页页面工作流：识别 8 条页面文本信号、12 个入口、8 个控件；已到达 /zh-hans/textbook，并恢复当前页；书单页表单填写验证：已填写 1 个字段，观察到真实反馈。；可进入 教材页；可进入 作业页；可进入 班级页；可进入 reading
- 可见反馈：©2026 SReading v2.12.12；书单；排序；暂无相关数据！；SReading 书单 - 最智能的免费中文阅读、识字、作业工具 -- 传播人类经典，构建文化与知识的桥梁。；最终 URL: https://sr.sigmareading.com/zh-hans/playlist

### 7. [导航页: reading (/zh-hans/reading)](pages/zh-hans-reading-search-e9-b2-a4-e9-b1-bc-e8-b7-b3-e9-be-99-e9-97-a8-e5-90-8c.md)

- 页面路径：/zh-hans/reading
- 进入方式：可从 导航页: favorites (/zh-hans/favorites) 的已验证入口进入。
- 访问条件：当前页面可直接访问。
- 已验证功能：文章列表基线识别：识别到 8 条文章结果样本，字段候选：标题、提供者、日期、阅读量；搜索功能验证：使用关键字“鲤鱼跳龙门同”执行搜索，未在样本结果中命中关键字。；排序功能验证：发现排序候选项 8 个；本次尝试应用：发布日期；筛选功能验证：未识别到独立筛选项，但已验证筛选边界控件 筛选 与结果列表共存。；可进入 教材页；可进入 作业页
- 可见反馈：鲤鱼跳龙门同乐中文远古时期，尧帝命令大禹治理洪水。大禹为了彻底解决黄河水患，组织大量劳力在龙门山凿出了一条一里多长的通道，黄河经此滚滚向东，平稳地流入大海。 在通道的入口处，大禹还...2023-02-15提供者 思和 11k；鲊蓣碴哕变崴蒸强鹮申蜒铷熠汝遒辊不考创邮芪仗礼李岍讳羽矢2024-11-06提供者 行行行买买买 40；鱼我所欲也孟子及其弟子〔先秦〕"鱼，我所欲也；熊掌，亦我所欲也。二者不可得兼，舍鱼而取熊掌者也。生，亦我所欲也；义，亦我所欲也。二者不可得兼，舍生而取义者也。生亦我所欲，所欲有甚于生者，故不为...2024-06-03提供者 admin sreading 99；SReading 文章 - 最智能的免费中文阅读、识字、作业工具 -- 传播人类经典，构建文化与知识的桥梁。；最终 URL: https://sr.sigmareading.com/zh-hans/reading；标题: ©2026 SReading v2.12.12 | 文章

### 8. [导航页: studio (/zh-hans/studio)](pages/zh-hans-studio-zh-hans-studio.md)

- 页面路径：/zh-hans/studio
- 进入方式：可尝试直接访问 /zh-hans/studio。
- 访问条件：当前页面可直接访问。
- 已验证功能：工作室页面工作流：识别 7 条页面文本信号、12 个入口、8 个控件；已到达 /zh-hans/textbook，并恢复当前页；工作室表单填写验证：已填写 1 个字段，观察到真实反馈。；可进入 教材页；可进入 作业页；可进入 班级页；可进入 reading
- 可见反馈：©2026 SReading v2.12.12；工作室；我的制作；SReading 工作室 - 最智能的免费中文阅读、识字、作业工具 -- 传播人类经典，构建文化与知识的桥梁。；最终 URL: https://sr.sigmareading.com/zh-hans/studio；标题: ©2026 SReading v2.12.12 | 工作室

### 9. [导航页: textbook (/zh-hans/textbook)](pages/zh-hans-textbook-zh-hans-textbook.md)

- 页面路径：/zh-hans/textbook
- 进入方式：可从 导航页: exam (/zh-hans/exam) 的已验证入口进入。；可从 主页（/zh-hans/home） 的已验证入口进入。；可从 导航页: homework (/zh-hans/homework) 的已验证入口进入。
- 访问条件：当前页面可直接访问。
- 已验证功能：教材页页面工作流：识别 8 条页面文本信号、12 个入口、7 个控件；已到达 /zh-hans/homework，并恢复当前页；可进入 教材页；可进入 作业页；可进入 班级页；可进入 reading；可执行 ion-button
- 可见反馈：©2026 SReading v2.12.12；教材；购买；SReading-最智能的免费中文阅读辅助工具；最终 URL: https://sr.sigmareading.com/zh-hans/textbook；标题: ©2026 SReading v2.12.12 | 教材

### 10. [深层页: assignment (/zh-hans/assignment/69e458ad85faa905f1218d2d?from=homework&homeworkTab=list&homeworkName=list)](pages/zh-hans-assignment-69e458ad85faa905f1218d2d-from-homework-homeworktab-list-homeworkname-list.md)

- 页面路径：/zh-hans/assignment/69e458ad85faa905f1218d2d
- 进入方式：可尝试直接访问 /zh-hans/assignment/69e458ad85faa905f1218d2d?from=homework&homeworkTab=list&homeworkName=list。
- 访问条件：当前页面可直接访问。
- 已验证功能：作业详情详情工作流：识别 3 条详情文本信号、4 个控件信号。；作业详情按钮使用验证：已尝试点击“开始”，观察到真实反馈。；可进入 教材页；可进入 作业页；可进入 班级页；可进入 reading
- 可见反馈：©2026 SReading v2.12.12；新代中文：致远版 L1_T1 第2课.a1: 汉字；开始；字_听音选字；（0 / 9）；点喇叭听发音，然后选正确的汉字哟！

### 11. [深层页: assignment (/zh-hans/assignment/69e458ae85faa905f1218d2f)](pages/zh-hans-assignment-69e458ae85faa905f1218d2f-zh-hans-assignment-69e458ae85faa905f1218d2f.md)

- 页面路径：/zh-hans/assignment/69e458ae85faa905f1218d2f
- 进入方式：可尝试直接访问 /zh-hans/assignment/69e458ae85faa905f1218d2f。
- 访问条件：当前页面可直接访问。
- 已验证功能：作业详情详情工作流：识别 3 条详情文本信号、4 个控件信号。；作业详情按钮使用验证：已尝试点击“开始”，观察到真实反馈。；可进入 教材页；可进入 作业页；可进入 班级页；可进入 reading
- 可见反馈：©2026 SReading v2.12.12；新代中文：致远版 L1_T1 第2课.r1:汉字；开始；🔒 字_听音选字 🔒 付费题型；购买；我已购买

### 12. [深层页: reading-display (/zh-hans/reading-display/63ec90d4e328e6231bb8b4a2)](pages/zh-hans-reading-display-63ec90d4e328e6231bb8b4a2-zh-hans-reading-display-63ec90d4e328e6231bb8b4a2.md)

- 页面路径：/zh-hans/reading-display/63ec90d4e328e6231bb8b4a2
- 进入方式：可尝试直接访问 /zh-hans/reading-display/63ec90d4e328e6231bb8b4a2。
- 访问条件：当前页面可直接访问。
- 已验证功能：文章详情详情工作流：识别 8 条详情文本信号、8 个控件信号。；可进入 教材页；可进入 作业页；可进入 班级页；可进入 reading；可执行 ion-button
- 可见反馈：©2026 SReading v2.12.12；鲤鱼跳龙门；同乐中文；鲤鱼跳龙门 - SReading；最终 URL: https://sr.sigmareading.com/zh-hans/reading-display/63ec90d4e328e6231bb8b4a2；标题: ©2026 SReading v2.12.12 | 鲤鱼跳龙门

### 13. [深层页: personal-data (/zh-hans/personal-data/590ea45f-04ee-4f24-b1d9-f3fd38e472aa)](pages/zh-hans-personal-data-590ea45f-04ee-4f24-b1d9-f3fd38e472aa-zh-hans-personal-data-590ea45f-04ee-4f24-b1d9-f3fd38e472aa.md)

- 页面路径：/zh-hans/personal-data/590ea45f-04ee-4f24-b1d9-f3fd38e472aa
- 进入方式：可尝试直接访问 /zh-hans/personal-data/590ea45f-04ee-4f24-b1d9-f3fd38e472aa。
- 访问条件：当前页面可直接访问。
- 已验证功能：个人数据详情详情工作流：识别 8 条详情文本信号、5 个控件信号。；可进入 教材页；可进入 作业页；可进入 班级页；可进入 reading；可执行 ion-button
- 可见反馈：©2026 SReading v2.12.12；个人资料；xuexi.yang@tonglec.org；SReading-最智能的免费中文阅读辅助工具；最终 URL: https://sr.sigmareading.com/zh-hans/personal-data/590ea45f-04ee-4f24-b1d9-f3fd38e472aa；标题: ©2026 SReading v2.12.12 | 个人资料

### 14. [深层页: reading-display (/zh-hans/reading-display/672b0940b829737eb3f6b047)](pages/zh-hans-reading-display-672b0940b829737eb3f6b047-zh-hans-reading-display-672b0940b829737eb3f6b047.md)

- 页面路径：/zh-hans/reading-display/672b0940b829737eb3f6b047
- 进入方式：可尝试直接访问 /zh-hans/reading-display/672b0940b829737eb3f6b047。
- 访问条件：当前页面可直接访问。
- 已验证功能：文章详情详情工作流：识别 5 条详情文本信号、8 个控件信号。；可进入 教材页；可进入 作业页；可进入 班级页；可进入 reading；可执行 ion-button
- 可见反馈：©2026 SReading v2.12.12；鲊蓣碴哕变崴蒸强鹮申蜒铷熠汝；42；鲊蓣碴哕变崴蒸强鹮申蜒铷熠汝 - SReading；最终 URL: https://sr.sigmareading.com/zh-hans/reading-display/672b0940b829737eb3f6b047；标题: ©2026 SReading v2.12.12 | 鲊蓣碴哕变崴蒸强鹮申蜒铷熠汝

### 15. [深层页: playlist-display (/zh-hans/playlist-display/6539da63ca06cb10e16f58ef)](pages/zh-hans-playlist-display-6539da63ca06cb10e16f58ef-zh-hans-playlist-display-6539da63ca06cb10e16f58ef.md)

- 页面路径：/zh-hans/playlist-display/6539da63ca06cb10e16f58ef
- 进入方式：可尝试直接访问 /zh-hans/playlist-display/6539da63ca06cb10e16f58ef。
- 访问条件：当前页面可直接访问。
- 已验证功能：书单详情详情工作流：识别 8 条详情文本信号、8 个控件信号。；书单详情表单填写验证：已填写 1 个字段，观察到真实反馈。；可进入 教材页；可进入 作业页；可进入 班级页；可进入 reading
- 可见反馈：©2026 SReading v2.12.12；《三国演义》青少版；创建人 晴天 小猪🐷；《三国演义》青少版 - SReading；最终 URL: https://sr.sigmareading.com/zh-hans/playlist-display/6539da63ca06cb10e16f58ef；标题: ©2026 SReading v2.12.12

### 16. [深层页: playlist-display (/zh-hans/playlist-display/653a1734d448f0607b7aa574)](pages/zh-hans-playlist-display-653a1734d448f0607b7aa574-zh-hans-playlist-display-653a1734d448f0607b7aa574.md)

- 页面路径：/zh-hans/playlist-display/653a1734d448f0607b7aa574
- 进入方式：可尝试直接访问 /zh-hans/playlist-display/653a1734d448f0607b7aa574。
- 访问条件：当前页面可直接访问。
- 已验证功能：书单详情详情工作流：识别 8 条详情文本信号、8 个控件信号。；书单详情表单填写验证：已填写 1 个字段，观察到真实反馈。；可进入 教材页；可进入 作业页；可进入 班级页；可进入 reading
- 可见反馈：©2026 SReading v2.12.12；《秘密花园》；创建人 晴天 小猪🐷；《秘密花园》 - SReading；最终 URL: https://sr.sigmareading.com/zh-hans/playlist-display/653a1734d448f0607b7aa574；标题: ©2026 SReading v2.12.12

### 17. [深层页: student-invite (/zh-hans/student-invite)](pages/zh-hans-student-invite-zh-hans-student-invite.md)

- 页面路径：/zh-hans/student-invite
- 进入方式：可尝试直接访问 /zh-hans/student-invite。
- 访问条件：当前页面可直接访问。
- 已验证功能：班级邀请详情工作流：识别 4 条详情文本信号、6 个控件信号。；班级邀请表单填写验证：已填写 1 个字段，观察到真实反馈。；可执行 back；可执行 multilingual-list；可执行 加入；可执行 返回
- 可见反馈：SReading；请输入班级码。；加入；4 / 6；SReading-最智能的免费中文阅读辅助工具；最终 URL: https://sr.sigmareading.com/zh-hans/student-invite

### 18. [路由探索: /zh-hans/login](pages/zh-hans-notfound-zh-hans-login.md)

- 页面路径：/zh-hans/notfound
- 进入方式：可尝试直接访问 /zh-hans/login。
- 访问条件：访问 /zh-hans/login 时会跳转到 /zh-hans/notfound，存在重定向或权限分流。
- 已验证功能：登录页路由工作流：当前最终路径为 /zh-hans/notfound，识别 3 条页面信号、0 个入口、2 个控件。；可执行 back；可执行 首页
- 可见反馈：404；该页面不存在.；首页；SReading-最智能的免费中文阅读辅助工具；最终 URL: https://sr.sigmareading.com/zh-hans/notfound；标题: 404

### 19. [路由探索: /zh-hans/profile](pages/zh-hans-profile-zh-hans-profile.md)

- 页面路径：/zh-hans/profile
- 进入方式：可尝试直接访问 /zh-hans/profile。
- 访问条件：当前页面可直接访问。
- 已验证功能：个人中心工作流：识别 3 条设置/账号信号；已到达 /zh-hans/textbook，并恢复当前页；个人中心表单填写验证：已填写 1 个字段，未观察到明确反馈。；可进入 教材页；可进入 作业页；可进入 班级页；可进入 reading
- 可见反馈：©2026 SReading v2.12.12；设置；xizhen.chen+3@tonglec.org；SReading-最智能的免费中文阅读辅助工具；最终 URL: https://sr.sigmareading.com/zh-hans/profile；标题: ©2026 SReading v2.12.12 | 设置
- 注意事项：个人中心表单填写验证 只得到部分结果，AI 需要决定下一轮应优先补采哪些条件或弹层选项。；个人中心表单填写验证 / 填写已发现字段并观察结果：已填写 您的名字=测试输入，但未观测到 URL、请求或结果样本的明确变化

## 权限与限制说明

- 访问 /zh-hans/login 时会跳转到 /zh-hans/notfound，存在重定向或权限分流。

