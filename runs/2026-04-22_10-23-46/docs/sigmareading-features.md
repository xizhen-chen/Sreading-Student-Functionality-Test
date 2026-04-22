# SigmaReading 功能探索报告

> 生成时间：2026/4/22 18:24:21
> 目标网站：https://sr.sigmareading.com/zh-hans/home
> 探索方式：Playwright 探针采样 + AI 分析归纳（scripts/explore.ts）

> 目标页面：/zh-hans/exam
> 页面级迭代模式：已启用

## 逐页详细文档索引

- 逐页索引：`page-details-index.md`
- 逐页明细目录：`pages/`

---

---

## 页面路由结构

```
- https://sr.sigmareading.com/zh-hans/exam
- https://sr.sigmareading.com/zh-hans/home
```

---

## 功能模块

### 1. 导航页: exam (/zh-hans/exam)

**URL**：https://sr.sigmareading.com/zh-hans/exam

**详细验证**：[查看该页面详细文档](pages/zh-hans-exam-zh-hans-exam.md)

**AI 结论草案**：AI 判定 /zh-hans/exam 的核心候选功能已完成首轮验证，可继续扩展边界场景。

**探针摘要**：AI 基于 5 条页面信号、16 条交互信号和 1 个工作流结果形成当前判断。

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/exam
- 标题: SReadingfor Student学生账户 | ©2026 SReading v2.12.12
- 交互元素: 58 个
- 工作流验证: 试卷页页面工作流=PASS/PASS

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

**截图**：`screenshots/exploration/03-nav-zh-hans-exam.png`

---

