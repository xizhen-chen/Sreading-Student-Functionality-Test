# SigmaReading 功能探索报告

> 生成时间：2026/4/22 14:57:58
> 目标网站：https://sr.sigmareading.com/zh-hans/home
> 探索方式：自愈式 Playwright 脚本（scripts/explore.ts）

> 目标页面：/zh-hans/reading
> 页面级迭代模式：已启用

## 逐页详细文档索引

- 逐页索引：`page-details-index.md`
- 逐页明细目录：`pages/`

---

---

## 页面路由结构

```
- https://sr.sigmareading.com/zh-hans/home
- https://sr.sigmareading.com/zh-hans/reading
- https://sr.sigmareading.com/zh-hans/reading-display/63ec90d4e328e6231bb8b4a2
- https://sr.sigmareading.com/zh-hans/reading-display/672b0940b829737eb3f6b047
- https://sr.sigmareading.com/zh-hans/unauthorized
```

---

## 功能模块

### 1. 导航页: reading (/zh-hans/reading)

**URL**：https://sr.sigmareading.com/zh-hans/reading?search=%E9%B2%A4%E9%B1%BC%E8%B7%B3%E9%BE%99%E9%97%A8%E5%90%8C

**详细验证**：[查看该页面详细文档](pages/zh-hans-reading-search-e9-b2-a4-e9-b1-bc-e8-b7-b3-e9-be-99-e9-97-a8-e5-90-8c.md)

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/reading
- 标题: SReadingfor Student | ©2026 SReading v2.12.12
- 交互元素: 93 个
- 工作流验证: 文章列表基线识别=PASS | 搜索功能验证=PASS | 排序功能验证=PASS | 筛选功能验证=WARN

**主要交互元素**：
| 类型 | 文本 | href |
|------|------|------|
| `ion-item` | 教材 |  |
| `a` | 教材 | /zh-hans/textbook |
| `ion-item` | 文章 |  |
| `a` | 文章 | /zh-hans/reading |
| `ion-item` | 书单 |  |
| `a` | 书单 | /zh-hans/playlist |
| `ion-item` | 加入测试 |  |
| `a` | 加入测试 | /zh-hans/presentation/join |
| `ion-item` | 识字快车 |  |
| `a` | 识字快车 | /zh-hans/word-express |
| `ion-item` | 汉字地图 |  |
| `a` | 汉字地图 | /zh-hans/character-map-create |

**截图**：`screenshots/exploration/03-nav-zh-hans-reading.png`

---

### 2. 深层页: reading-display (/zh-hans/reading-display/63ec90d4e328e6231bb8b4a2)

**URL**：https://sr.sigmareading.com/zh-hans/reading-display/63ec90d4e328e6231bb8b4a2

**详细验证**：[查看该页面详细文档](pages/zh-hans-reading-display-63ec90d4e328e6231bb8b4a2-zh-hans-reading-display-63ec90d4e328e6231bb8b4a2.md)

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/reading-display/63ec90d4e328e6231bb8b4a2
- 标题: SReadingfor Student | ©2026 SReading v2.12.12 | 鲤鱼跳龙门
- 交互元素: 59 个

**主要交互元素**：
| 类型 | 文本 | href |
|------|------|------|
| `ion-item` | 教材 |  |
| `a` | 教材 | /zh-hans/textbook |
| `ion-item` | 文章 |  |
| `a` | 文章 | /zh-hans/reading |
| `ion-item` | 书单 |  |
| `a` | 书单 | /zh-hans/playlist |
| `ion-item` | 加入测试 |  |
| `a` | 加入测试 | /zh-hans/presentation/join |
| `ion-item` | 识字快车 |  |
| `a` | 识字快车 | /zh-hans/word-express |
| `ion-item` | 汉字地图 |  |
| `a` | 汉字地图 | /zh-hans/character-map-create |

**截图**：`screenshots/exploration/04-deep-zh-hans-reading-display-63ec90d4e328e6231bb8b4a2.png`

---

### 3. 深层页: personal-data (/zh-hans/personal-data/590ea45f-04ee-4f24-b1d9-f3fd38e472aa)

**URL**：https://sr.sigmareading.com/zh-hans/unauthorized

**详细验证**：[查看该页面详细文档](pages/zh-hans-unauthorized-zh-hans-personal-data-590ea45f-04ee-4f24-b1d9-f3fd38e472aa.md)

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/unauthorized
- 标题: （无标题）
- 交互元素: 7 个

**主要交互元素**：
| 类型 | 文本 | href |
|------|------|------|
| `button` | 登录 |  |
| `button` | 首页 |  |

**截图**：`screenshots/exploration/04-deep-zh-hans-personal-data-590ea45f-04ee-4f24-b1d9-f3fd38e472aa.png`

---

### 4. 深层页: reading-display (/zh-hans/reading-display/672b0940b829737eb3f6b047)

**URL**：https://sr.sigmareading.com/zh-hans/reading-display/672b0940b829737eb3f6b047

**详细验证**：[查看该页面详细文档](pages/zh-hans-reading-display-672b0940b829737eb3f6b047-zh-hans-reading-display-672b0940b829737eb3f6b047.md)

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/reading-display/672b0940b829737eb3f6b047
- 标题: SReadingfor Student | ©2026 SReading v2.12.12 | 鲊蓣碴哕变崴蒸强鹮申蜒铷熠汝
- 交互元素: 57 个

**主要交互元素**：
| 类型 | 文本 | href |
|------|------|------|
| `ion-item` | 教材 |  |
| `a` | 教材 | /zh-hans/textbook |
| `ion-item` | 文章 |  |
| `a` | 文章 | /zh-hans/reading |
| `ion-item` | 书单 |  |
| `a` | 书单 | /zh-hans/playlist |
| `ion-item` | 加入测试 |  |
| `a` | 加入测试 | /zh-hans/presentation/join |
| `ion-item` | 识字快车 |  |
| `a` | 识字快车 | /zh-hans/word-express |
| `ion-item` | 汉字地图 |  |
| `a` | 汉字地图 | /zh-hans/character-map-create |

**截图**：`screenshots/exploration/04-deep-zh-hans-reading-display-672b0940b829737eb3f6b047.png`

---

