# SigmaReading 功能探索报告

> 生成时间：2026/4/22 12:48:19
> 目标网站：https://sr.sigmareading.com/zh-hans/home
> 探索方式：自愈式 Playwright 脚本（scripts/explore.ts）

---

## 页面路由结构

```
- https://sr.sigmareading.com/zh-hans/home
- https://sr.sigmareading.com/zh-hans/playlist
- https://sr.sigmareading.com/zh-hans/reading
```

---

## 功能模块

### 1. 主页（/zh-hans/home）

**URL**：https://sr.sigmareading.com/zh-hans/home

**页面信息**：
- 标题区域: 
- 底部导航: 首页, 文章, 书单, 识字快车, 字帖字卡, 拼音捷径, 汉字地图, 有声字典
- 功能卡片数量: 0
- 交互元素总计: 8

**主要交互元素**：
| 类型 | 文本 | href |
|------|------|------|
| `a` | 首页 | /zh-hans/ |
| `a` | 文章 | /zh-hans/reading |
| `a` | 书单 | /zh-hans/playlist |
| `a` | 识字快车 | /zh-hans/word-express |
| `a` | 字帖字卡 | /zh-hans/copybook |
| `a` | 拼音捷径 | /zh-hans/pinyin-pathway |
| `a` | 汉字地图 | /zh-hans/character-map-create |
| `a` | 有声字典 | /zh-hans/audio-dictionary |

**截图**：`screenshots/exploration/02-home-fullpage.png`

---

### 2. 导航页: playlist (/zh-hans/playlist)

**URL**：https://sr.sigmareading.com/zh-hans/playlist

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/playlist
- 标题: 
- 交互元素: 8 个

**主要交互元素**：
| 类型 | 文本 | href |
|------|------|------|
| `a` | 首页 | /zh-hans/ |
| `a` | 文章 | /zh-hans/reading |
| `a` | 书单 | /zh-hans/playlist |
| `a` | 识字快车 | /zh-hans/word-express |
| `a` | 字帖字卡 | /zh-hans/copybook |
| `a` | 拼音捷径 | /zh-hans/pinyin-pathway |
| `a` | 汉字地图 | /zh-hans/character-map-create |
| `a` | 有声字典 | /zh-hans/audio-dictionary |

**截图**：`screenshots/exploration/03-nav-zh-hans-playlist.png`

---

