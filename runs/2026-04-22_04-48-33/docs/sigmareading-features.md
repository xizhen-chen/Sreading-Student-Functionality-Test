# SigmaReading 功能探索报告

> 生成时间：2026/4/22 12:51:30
> 目标网站：https://sr.sigmareading.com/zh-hans/home
> 探索方式：自愈式 Playwright 脚本（scripts/explore.ts）

---

## 页面路由结构

```
- https://sr.sigmareading.com/zh-hans/exam
- https://sr.sigmareading.com/zh-hans/favorites
- https://sr.sigmareading.com/zh-hans/home
- https://sr.sigmareading.com/zh-hans/homework
- https://sr.sigmareading.com/zh-hans/joined-classes
- https://sr.sigmareading.com/zh-hans/playlist
```

---

## 功能模块

### 1. 主页（/zh-hans/home）

**URL**：https://sr.sigmareading.com/zh-hans/home

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

### 2. 导航页: exam (/zh-hans/exam)

**URL**：https://sr.sigmareading.com/zh-hans/exam

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/exam
- 标题: SReadingfor Student学生账户 | ©2026 SReading v2.12.12
- 交互元素: 58 个

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

### 3. 导航页: favorites (/zh-hans/favorites)

**URL**：https://sr.sigmareading.com/zh-hans/favorites

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/favorites
- 标题: SReadingfor Student学生账户 | ©2026 SReading v2.12.12
- 交互元素: 63 个

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

**截图**：`screenshots/exploration/03-nav-zh-hans-favorites.png`

---

### 4. 导航页: homework (/zh-hans/homework)

**URL**：https://sr.sigmareading.com/zh-hans/homework

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

### 5. 导航页: joined-classes (/zh-hans/joined-classes)

**URL**：https://sr.sigmareading.com/zh-hans/joined-classes

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

