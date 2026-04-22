# 页面详细功能文档：导航页: playlist (/zh-hans/playlist)

> 序号：6
> 阶段：Phase 3
> 页面分类：navigation
> 生成时间：2026/4/22 13:38:26

## 基本信息

- 目标入口：/zh-hans/playlist
- 最终 URL：https://sr.sigmareading.com/zh-hans/playlist
- 路径：/zh-hans/playlist
- 页面标题：SReading 书单 - 最智能的免费中文阅读、识字、作业工具 -- 传播人类经典，构建文化与知识的桥梁。
- 截图：`screenshots/exploration/03-nav-zh-hans-playlist.png`

## 功能概览

- 页面上下文：SReading 书单 - 最智能的免费中文阅读、识字、作业工具 -- 传播人类经典，构建文化与知识的桥梁。
- 可访问入口：教材 → /zh-hans/textbook；作业练习 → /zh-hans/homework；我的班级 → /zh-hans/joined-classes；文章 → /zh-hans/reading；书单 → /zh-hans/playlist；收藏夹 → /zh-hans/favorites
- 可执行操作：button、menu、addBtn、multilingual-list、排序、筛选
- 可录入字段：ion-searchbar-0 / 搜索 / search text / search / input
- 页面加载时触发网络请求 2 个

## 验证结果

| 验证项 | 结果 | 说明 |
|--------|------|------|
| 页面可达 | PASS | 最终到达 /zh-hans/playlist |
| 截图已生成 | PASS | screenshots/exploration/03-nav-zh-hans-playlist.png |
| 交互元素已采集 | PASS | 共采集 103 个交互元素 |
| 网络请求已记录 | PASS | 本页新增 2 个请求 |
| 页面功能入口可见 | PASS | 链接 39 / 按钮 48 / 字段 1 |

## 交互统计

| 指标 | 数量 |
|------|------|
| 交互元素总数 | 103 |
| 链接数量 | 39 |
| 按钮数量 | 48 |
| 表单字段数量 | 1 |
| 本页新增请求 | 2 |

## 页面识别信息

- 最终 URL: https://sr.sigmareading.com/zh-hans/playlist
- 标题: SReadingfor Student学生账户 | ©2026 SReading v2.12.12
- 交互元素: 103 个

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
- addBtn
- multilingual-list
- 排序
- 筛选
- reset
- playlist-search-btn
- 1x

## 表单与输入项

- ion-searchbar-0 / 搜索 / search text / search / input

## 页面请求验证

- GET https://sr.sigmareading.com/services/sr-ms-core/api/playlists?sort=sortNum,desc&page=0&size=20&currentUser=false
- GET https://sr.sigmareading.com/zh-hans/playlist

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

