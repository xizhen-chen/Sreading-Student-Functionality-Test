# SigmaReading 功能探索报告

> 生成时间：2026/4/22 13:03:58
> 目标网站：https://sr.sigmareading.com/zh-hans/home
> 探索方式：自愈式 Playwright 脚本（scripts/explore.ts）

---

## 页面路由结构

```
- https://sr.sigmareading.com/zh-hans/
- https://sr.sigmareading.com/zh-hans/assignment/69e458ad85faa905f1218d2d?from=homework&homeworkTab=list&homeworkName=list
- https://sr.sigmareading.com/zh-hans/assignment/69e458ae85faa905f1218d2f
- https://sr.sigmareading.com/zh-hans/audio-dictionary
- https://sr.sigmareading.com/zh-hans/character-map-create
- https://sr.sigmareading.com/zh-hans/copybook
- https://sr.sigmareading.com/zh-hans/home
- https://sr.sigmareading.com/zh-hans/personal-data/590ea45f-04ee-4f24-b1d9-f3fd38e472aa
- https://sr.sigmareading.com/zh-hans/pinyin-pathway
- https://sr.sigmareading.com/zh-hans/playlist
- https://sr.sigmareading.com/zh-hans/playlist-display/6539da63ca06cb10e16f58ef
- https://sr.sigmareading.com/zh-hans/playlist-display/653a1734d448f0607b7aa574
- https://sr.sigmareading.com/zh-hans/reading
- https://sr.sigmareading.com/zh-hans/reading-display/63ec90d4e328e6231bb8b4a2
- https://sr.sigmareading.com/zh-hans/reading-display/672b0940b829737eb3f6b047
- https://sr.sigmareading.com/zh-hans/student-invite
- https://sr.sigmareading.com/zh-hans/word-express?name=list
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

### 3. 导航页: reading (/zh-hans/reading)

**URL**：https://sr.sigmareading.com/zh-hans/reading

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/reading
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

**截图**：`screenshots/exploration/03-nav-zh-hans-reading.png`

---

### 4. 导航页: zh-hans (/zh-hans/)

**URL**：https://sr.sigmareading.com/zh-hans/

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/
- 标题: 
- 交互元素: 65 个

**主要交互元素**：
| 类型 | 文本 | href |
|------|------|------|
| `a` | SReading | / |
| `a` | 博客 | /zh-hans/blog |
| `a` | 关于我们 | /zh-hans/about-us |
| `button` | 语言 |  |
| `a` | 简体中文 | /zh-hans/ |
| `a` | 繁體中文 | /zh-hant/ |
| `a` | English | /en/ |
| `a` | 同乐中文学校 | https://www.tonglec.org |
| `a` | 学生登录 | /oauth2/authorization/oidc?locale=zh_CN |
| `a` | 教师登录 | /oauth2/authorization/oidc?locale=zh_CN&teacher=true |
| `a` | 学生登录 | /oauth2/authorization/oidc?locale=zh_CN |
| `a` | 博客 | /zh-hans/blog |

**截图**：`screenshots/exploration/03-nav-zh-hans.png`

---

### 5. 导航页: audio-dictionary (/zh-hans/audio-dictionary)

**URL**：https://sr.sigmareading.com/zh-hans/audio-dictionary

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/audio-dictionary
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

**截图**：`screenshots/exploration/03-nav-zh-hans-audio-dictionary.png`

---

### 6. 导航页: character-map-create (/zh-hans/character-map-create)

**URL**：https://sr.sigmareading.com/zh-hans/character-map-create

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/character-map-create
- 标题: 
- 交互元素: 6 个

**主要交互元素**：
| 类型 | 文本 | href |
|------|------|------|
| `a` | 首页 | / |
| `a` | 文章 | /reading |
| `a` | 书单 | /playlist |
| `a` | 识字快车 | /word-express |
| `a` | 汉字地图 | /character-map-create |
| `a` | 字帖字卡 | /copybook |

**截图**：`screenshots/exploration/03-nav-zh-hans-character-map-create.png`

---

### 7. 导航页: copybook (/zh-hans/copybook)

**URL**：https://sr.sigmareading.com/zh-hans/copybook

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/copybook
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

**截图**：`screenshots/exploration/03-nav-zh-hans-copybook.png`

---

### 8. 导航页: pinyin-pathway (/zh-hans/pinyin-pathway)

**URL**：https://sr.sigmareading.com/zh-hans/pinyin-pathway

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/pinyin-pathway
- 标题: 
- 交互元素: 0 个

**截图**：`screenshots/exploration/03-nav-zh-hans-pinyin-pathway.png`

---

### 9. 导航页: word-express (/zh-hans/word-express)

**URL**：https://sr.sigmareading.com/zh-hans/word-express?name=list

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/word-express?name=list
- 标题: SReadingfor Student学生账户 | ©2026 SReading v2.12.12
- 交互元素: 60 个

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

**截图**：`screenshots/exploration/03-nav-zh-hans-word-express.png`

---

### 10. 深层页: assignment (/zh-hans/assignment/69e458ad85faa905f1218d2d?from=homework&homeworkTab=list&homeworkName=list)

**URL**：https://sr.sigmareading.com/zh-hans/assignment/69e458ad85faa905f1218d2d?from=homework&homeworkTab=list&homeworkName=list

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/assignment/69e458ad85faa905f1218d2d?from=homework&homeworkTab=list&homeworkName=list
- 标题: SReadingfor Student学生账户 | ©2026 SReading v2.12.12 | 新代中文：致远版 L1_T1 第2课.a1: 汉字
- 交互元素: 50 个

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

**截图**：`screenshots/exploration/04-deep-zh-hans-assignment-69e458ad85faa905f1218d2d-from=homework&homeworkTab=list&homeworkName=list.png`

---

### 11. 深层页: assignment (/zh-hans/assignment/69e458ae85faa905f1218d2f)

**URL**：https://sr.sigmareading.com/zh-hans/assignment/69e458ae85faa905f1218d2f

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/assignment/69e458ae85faa905f1218d2f
- 标题: SReadingfor Student学生账户 | ©2026 SReading v2.12.12 | 新代中文：致远版 L1_T1 第2课.r1:汉字
- 交互元素: 53 个

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

**截图**：`screenshots/exploration/04-deep-zh-hans-assignment-69e458ae85faa905f1218d2f.png`

---

### 12. 深层页: reading-display (/zh-hans/reading-display/63ec90d4e328e6231bb8b4a2)

**URL**：https://sr.sigmareading.com/zh-hans/reading-display/63ec90d4e328e6231bb8b4a2

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/reading-display/63ec90d4e328e6231bb8b4a2
- 标题: SReadingfor Student学生账户 | ©2026 SReading v2.12.12 | 鲤鱼跳龙门
- 交互元素: 69 个

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

**截图**：`screenshots/exploration/04-deep-zh-hans-reading-display-63ec90d4e328e6231bb8b4a2.png`

---

### 13. 深层页: personal-data (/zh-hans/personal-data/590ea45f-04ee-4f24-b1d9-f3fd38e472aa)

**URL**：https://sr.sigmareading.com/zh-hans/personal-data/590ea45f-04ee-4f24-b1d9-f3fd38e472aa

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/personal-data/590ea45f-04ee-4f24-b1d9-f3fd38e472aa
- 标题: SReadingfor Student学生账户 | ©2026 SReading v2.12.12 | 个人资料
- 交互元素: 56 个

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

**截图**：`screenshots/exploration/04-deep-zh-hans-personal-data-590ea45f-04ee-4f24-b1d9-f3fd38e472aa.png`

---

### 14. 深层页: reading-display (/zh-hans/reading-display/672b0940b829737eb3f6b047)

**URL**：https://sr.sigmareading.com/zh-hans/reading-display/672b0940b829737eb3f6b047

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/reading-display/672b0940b829737eb3f6b047
- 标题: SReadingfor Student学生账户 | ©2026 SReading v2.12.12 | 鲊蓣碴哕变崴蒸强鹮申蜒铷熠汝
- 交互元素: 67 个

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

**截图**：`screenshots/exploration/04-deep-zh-hans-reading-display-672b0940b829737eb3f6b047.png`

---

### 15. 深层页: playlist-display (/zh-hans/playlist-display/6539da63ca06cb10e16f58ef)

**URL**：https://sr.sigmareading.com/zh-hans/playlist-display/6539da63ca06cb10e16f58ef

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/playlist-display/6539da63ca06cb10e16f58ef
- 标题: SReadingfor Student学生账户 | ©2026 SReading v2.12.12
- 交互元素: 104 个

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

**截图**：`screenshots/exploration/04-deep-zh-hans-playlist-display-6539da63ca06cb10e16f58ef.png`

---

### 16. 深层页: playlist-display (/zh-hans/playlist-display/653a1734d448f0607b7aa574)

**URL**：https://sr.sigmareading.com/zh-hans/playlist-display/653a1734d448f0607b7aa574

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/playlist-display/653a1734d448f0607b7aa574
- 标题: SReadingfor Student学生账户 | ©2026 SReading v2.12.12
- 交互元素: 104 个

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

**截图**：`screenshots/exploration/04-deep-zh-hans-playlist-display-653a1734d448f0607b7aa574.png`

---

### 17. 深层页: student-invite (/zh-hans/student-invite)

**URL**：https://sr.sigmareading.com/zh-hans/student-invite

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/student-invite
- 标题: （无标题）
- 交互元素: 6 个

**主要交互元素**：
| 类型 | 文本 | href |
|------|------|------|
| `button` | 加入 |  |
| `button` | 返回 |  |

**截图**：`screenshots/exploration/04-deep-zh-hans-student-invite.png`

---

