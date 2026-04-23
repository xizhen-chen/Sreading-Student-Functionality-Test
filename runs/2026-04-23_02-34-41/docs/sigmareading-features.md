# SigmaReading 功能探索报告

> 生成时间：2026/4/23 10:37:16
> 目标网站：https://sr.sigmareading.com/zh-hans/home
> 探索方式：Playwright 探针采样 + AI 分析归纳（scripts/explore.ts）

## 逐页详细文档索引

- 逐页索引：`page-details-index.md`
- 逐页明细目录：`pages/`
- L2 业务流闭环：`business-flow-closure.md`
- L2 候选入口矩阵：`business-flow-candidate-matrix.md`

---

---

## 页面路由结构

```
- https://sr.sigmareading.com/zh-hans/exam
- https://sr.sigmareading.com/zh-hans/favorites
- https://sr.sigmareading.com/zh-hans/home
- https://sr.sigmareading.com/zh-hans/homework
- https://sr.sigmareading.com/zh-hans/joined-classes
- https://sr.sigmareading.com/zh-hans/playlist
- https://sr.sigmareading.com/zh-hans/reading
```

---

## 功能模块

### 1. 主页（/zh-hans/home）

**URL**：https://sr.sigmareading.com/zh-hans/home

**详细验证**：[查看该页面详细文档](pages/zh-hans-home-zh-hans-home.md)

**AI 结论草案**：AI 判定 /zh-hans/home 的核心候选功能已完成首轮验证，可继续扩展边界场景。

**探针摘要**：AI 基于 6 条页面信号、16 条交互信号和 1 个工作流结果形成当前判断。

**页面信息**：
- 标题区域: SReadingfor Student学生账户 | ©2026 SReading v2.12.12
- 底部导航: 
- 功能卡片数量: 11
- 交互元素总计: 95
- 工作流验证: 首页主入口工作流=PASS/PASS

**主要交互元素**：
| 类型 | 文本 | href |
|------|------|------|
| `ion-item` | 教材 |  |
| `a` | 教材 | /zh-hans/textbook |
| `ion-item` | 作业练习 |  |
| `a` | 作业练习 | /zh-hans/homework |
| `ion-item` | 我的班级 |  |
| `a` | 我的班级 | /zh-hans/joined-classes |
| `ion-item` | 文章 |  |
| `a` | 文章 | /zh-hans/reading |
| `ion-item` | 书单 |  |
| `a` | 书单 | /zh-hans/playlist |
| `ion-item` | 收藏夹 |  |
| `a` | 收藏夹 | /zh-hans/favorites |

**截图**：`screenshots/exploration/02-home-fullpage.png`

---

### 2. 导航页: exam (/zh-hans/exam)

**URL**：https://sr.sigmareading.com/zh-hans/exam

**详细验证**：[查看该页面详细文档](pages/zh-hans-exam-zh-hans-exam.md)

**AI 结论草案**：AI 判定 /zh-hans/exam 的核心候选功能已完成首轮验证，可继续扩展边界场景。

**探针摘要**：AI 基于 5 条页面信号、16 条交互信号和 1 个工作流结果形成当前判断。

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/exam
- 标题: ©2026 SReading v2.12.12 | 测试
- 交互元素: 58 个
- 工作流验证: 试卷页页面工作流=PASS/PASS

**主要交互元素**：
| 类型 | 文本 | href |
|------|------|------|
| `button` | 加入测试 |  |
| `button` | 加入测试 |  |

**截图**：`screenshots/exploration/03-nav-zh-hans-exam.png`

---

### 3. 导航页: favorites (/zh-hans/favorites)

**URL**：https://sr.sigmareading.com/zh-hans/favorites

**详细验证**：[查看该页面详细文档](pages/zh-hans-favorites-zh-hans-favorites.md)

**AI 结论草案**：AI 判定 /zh-hans/favorites 的核心候选功能已完成首轮验证，可继续扩展边界场景。

**探针摘要**：AI 基于 5 条页面信号、16 条交互信号和 1 个工作流结果形成当前判断。

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/favorites
- 标题: ©2026 SReading v2.12.12 | 收藏夹
- 交互元素: 63 个
- 工作流验证: 收藏夹页面工作流=PASS/PASS

**主要交互元素**：
| 类型 | 文本 | href |
|------|------|------|
| `ion-button` | 排序 |  |
| `button` | 1x |  |

**截图**：`screenshots/exploration/03-nav-zh-hans-favorites.png`

---

### 4. 导航页: homework (/zh-hans/homework)

**URL**：https://sr.sigmareading.com/zh-hans/homework

**详细验证**：[查看该页面详细文档](pages/zh-hans-homework-zh-hans-homework.md)

**AI 结论草案**：AI 判定 /zh-hans/homework 的核心候选功能已完成首轮验证，可继续扩展边界场景。

**探针摘要**：AI 基于 5 条页面信号、16 条交互信号和 1 个工作流结果形成当前判断。

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/homework
- 标题: ©2026 SReading v2.12.12 | 作业练习
- 交互元素: 74 个
- 工作流验证: 作业页页面工作流=PASS/PASS

**主要交互元素**：
| 类型 | 文本 | href |
|------|------|------|
| `ion-button` | 全部 |  |
| `ion-item` | 第2课0/2新代中文：致远版 L1_T1 |  |
| `ion-item` | 练习a1: 汉字字_听音选字开始截止日期: 2026-04-26 |  |
| `a` | 练习a1: 汉字字_听音选字开始截止日期: 2026-04-26 | /zh-hans/assignment/69e458ad85faa905f1218d2d?from=homework&homeworkTab=list&homeworkName=list |
| `ion-button` | 开始 |  |
| `button` | 点击解锁标准版 |  |
| `button` | 我已购买 |  |
| `ion-item` | 复习r1:汉字 1/1字_听音选字 |  |
| `a` | 复习r1:汉字 1/1字_听音选字 | /zh-hans/assignment/69e458ae85faa905f1218d2f |
| `button` | 1x |  |

**截图**：`screenshots/exploration/03-nav-zh-hans-homework.png`

---

### 5. 导航页: joined-classes (/zh-hans/joined-classes)

**URL**：https://sr.sigmareading.com/zh-hans/joined-classes

**详细验证**：[查看该页面详细文档](pages/zh-hans-joined-classes-zh-hans-joined-classes.md)

**AI 结论草案**：AI 判定 /zh-hans/joined-classes 的核心候选功能已完成首轮验证，可继续扩展边界场景。

**探针摘要**：AI 基于 5 条页面信号、16 条交互信号和 1 个工作流结果形成当前判断。

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/joined-classes
- 标题: ©2026 SReading v2.12.12 | 我的班级
- 交互元素: 57 个
- 工作流验证: 班级页页面工作流=PASS/PASS

**主要交互元素**：
| 类型 | 文本 | href |
|------|------|------|
| `a` | 申请加入班级 | /zh-hans/student-invite |
| `ion-button` | 申请加入班级 |  |

**截图**：`screenshots/exploration/03-nav-zh-hans-joined-classes.png`

---

### 6. 导航页: playlist (/zh-hans/playlist)

**URL**：https://sr.sigmareading.com/zh-hans/playlist

**详细验证**：[查看该页面详细文档](pages/zh-hans-playlist-zh-hans-playlist.md)

**AI 结论草案**：AI 判定 /zh-hans/playlist 的核心候选功能已完成首轮验证，可继续扩展边界场景。

**探针摘要**：AI 基于 5 条页面信号、16 条交互信号和 1 个工作流结果形成当前判断。

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/playlist
- 标题: ©2026 SReading v2.12.12 | 书单
- 交互元素: 103 个
- 工作流验证: 书单页页面工作流=PASS/PASS

**主要交互元素**：
| 类型 | 文本 | href |
|------|------|------|
| `ion-button` | 排序 |  |
| `ion-button` | 筛选 |  |
| `a` | 《三国演义》青少版242023-10-26 | /zh-hans/playlist-display/6539da63ca06cb10e16f58ef |
| `a` | 《秘密花园》362023-10-26 | /zh-hans/playlist-display/653a1734d448f0607b7aa574 |
| `a` | 《格林童话》32023-10-26 | /zh-hans/playlist-display/6539d819ca06cb10e16f58e9 |
| `a` | 《小王子》282023-10-26 | /zh-hans/playlist-display/6539d88eca06cb10e16f58ea |
| `a` | 落甜芭钲炼蹀杂屯362023-02-07 | /zh-hans/playlist-display/63e1ece44a35b35902a6250f |
| `a` | 边城252023-11-24 | /zh-hans/playlist-display/65600e0a8f5a0e631e29ef4e |
| `a` | 论语名句192023-10-25 | /zh-hans/playlist-display/65380b1fda88ee18fae7fed1 |
| `a` | 《论语名句》652023-10-25 | /zh-hans/playlist-display/6538eefefe81804075c03360 |
| `a` | 《地藏经》62023-10-26 | /zh-hans/playlist-display/6539d932ca06cb10e16f58ed |
| `a` | 不读标题32023-09-26 | /zh-hans/playlist-display/65128a8f0fdb4a273ff09420 |

**截图**：`screenshots/exploration/03-nav-zh-hans-playlist.png`

---

