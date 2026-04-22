# SigmaReading 功能探索报告

> 生成时间：2026/4/22 15:11:28
> 目标网站：https://sr.sigmareading.com/zh-hans/home
> 探索方式：自愈式 Playwright 脚本（scripts/explore.ts）

> 目标页面：/zh-hans/home
> 页面级迭代模式：已启用

## 逐页详细文档索引

- 逐页索引：`page-details-index.md`
- 逐页明细目录：`pages/`

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

**页面信息**：
- 标题区域: SReadingfor Student学生账户 | ©2026 SReading v2.12.12
- 底部导航: 
- 功能卡片数量: 11
- 交互元素总计: 95

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

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/homework
- 标题: SReadingfor Student学生账户 | ©2026 SReading v2.12.12
- 交互元素: 74 个

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

**截图**：`screenshots/exploration/03-nav-zh-hans-homework.png`

---

### 3. 导航页: joined-classes (/zh-hans/joined-classes)

**URL**：https://sr.sigmareading.com/zh-hans/joined-classes

**详细验证**：[查看该页面详细文档](pages/zh-hans-joined-classes-zh-hans-joined-classes.md)

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/joined-classes
- 标题: SReadingfor Student学生账户 | ©2026 SReading v2.12.12
- 交互元素: 57 个

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

**截图**：`screenshots/exploration/03-nav-zh-hans-joined-classes.png`

---

