# SigmaReading 功能探索报告

> 生成时间：2026/4/23 10:34:30
> 目标网站：https://sr.sigmareading.com/zh-hans/home
> 探索方式：Playwright 探针采样 + AI 分析归纳（scripts/explore.ts）

> 目标页面：/zh-hans/home
> 页面级迭代模式：已启用

## 逐页详细文档索引

- 逐页索引：`page-details-index.md`
- 逐页明细目录：`pages/`
- L2 业务流闭环：`business-flow-closure.md`
- L2 候选入口矩阵：`business-flow-candidate-matrix.md`

---

---

## 页面路由结构

```
- https://sr.sigmareading.com/zh-hans/home
- https://sr.sigmareading.com/zh-hans/homework
- https://sr.sigmareading.com/zh-hans/joined-classes
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

### 2. 导航页: homework (/zh-hans/homework)

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

### 3. 导航页: joined-classes (/zh-hans/joined-classes)

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

