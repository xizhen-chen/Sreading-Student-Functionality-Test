# SigmaReading 功能探索报告

> 生成时间：2026/4/22 12:20:31
> 目标网站：https://sr.sigmareading.com/zh-hans/home
> 探索方式：自愈式 Playwright 脚本（scripts/explore.ts）

---

## 页面路由结构

```
- https://sr.sigmareading.com/zh-hans/audio-dictionary
- https://sr.sigmareading.com/zh-hans/ccswitch
- https://sr.sigmareading.com/zh-hans/character-map-create
- https://sr.sigmareading.com/zh-hans/copybook
- https://sr.sigmareading.com/zh-hans/exam
- https://sr.sigmareading.com/zh-hans/favorites
- https://sr.sigmareading.com/zh-hans/home
- https://sr.sigmareading.com/zh-hans/homework
- https://sr.sigmareading.com/zh-hans/joined-classes
- https://sr.sigmareading.com/zh-hans/notfound
- https://sr.sigmareading.com/zh-hans/pinyin-pathway
- https://sr.sigmareading.com/zh-hans/playlist
- https://sr.sigmareading.com/zh-hans/profile
- https://sr.sigmareading.com/zh-hans/reading
- https://sr.sigmareading.com/zh-hans/studio
- https://sr.sigmareading.com/zh-hans/textbook
- https://sr.sigmareading.com/zh-hans/word-express?name=list
```

---

## 功能模块

### 1. 主页（/zh-hans/home）

**URL**：https://sr.sigmareading.com/zh-hans/home

**页面信息**：
- 标题区域: SReadingfor Student学生账户 | ©2026 SReading v2.12.12
- 底部导航: 
- 功能卡片数量: 11
- 交互元素总计: 91

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

### 2. 导航页: textbook (/zh-hans/textbook)

**URL**：https://sr.sigmareading.com/zh-hans/textbook

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/textbook
- 标题: ©2026 SReading v2.12.12 | 教材
- 交互元素: 56 个

**主要交互元素**：
| 类型 | 文本 | href |
|------|------|------|
| `a` | 新代中文教育协会会员学校，享受会员学校专属团购价格。 | https://www.nextgenchinese.org/teacher/member-school |
| `button` | 同乐趣味中文 |  |
| `button` | 新新代素养:文史哲科 |  |
| `button` | 兑换教材 |  |

**截图**：`screenshots/exploration/03-nav-zh-hans-textbook.png`

---

### 3. 导航页: homework (/zh-hans/homework)

**URL**：https://sr.sigmareading.com/zh-hans/homework

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/homework
- 标题: ©2026 SReading v2.12.12 | 作业练习
- 交互元素: 74 个

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
| `ion-item` | 复习r1:汉字 1/1 |  |
| `a` | 复习r1:汉字 1/1 | /zh-hans/assignment/69e458ae85faa905f1218d2f |
| `button` | 1x |  |

**截图**：`screenshots/exploration/03-nav-zh-hans-homework.png`

---

### 4. 导航页: joined-classes (/zh-hans/joined-classes)

**URL**：https://sr.sigmareading.com/zh-hans/joined-classes

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/joined-classes
- 标题: ©2026 SReading v2.12.12 | 我的班级
- 交互元素: 57 个

**主要交互元素**：
| 类型 | 文本 | href |
|------|------|------|
| `a` | 申请加入班级 | /zh-hans/student-invite |
| `ion-button` | 申请加入班级 |  |

**截图**：`screenshots/exploration/03-nav-zh-hans-joined-classes.png`

---

### 5. 导航页: reading (/zh-hans/reading)

**URL**：https://sr.sigmareading.com/zh-hans/reading

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/reading
- 标题: ©2026 SReading v2.12.12 | 文章
- 交互元素: 103 个

**主要交互元素**：
| 类型 | 文本 | href |
|------|------|------|
| `ion-button` | 排序 |  |
| `ion-button` | 筛选 |  |
| `a` | 鲤鱼跳龙门同乐中文远古时期，尧帝命令大禹治理洪水。大禹为了彻底解决黄河水患，组织大量劳力在龙门山凿出 | /zh-hans/reading-display/63ec90d4e328e6231bb8b4a2 |
| `a` | 提供者 思和 | /zh-hans/personal-data/590ea45f-04ee-4f24-b1d9-f3fd38e472aa |
| `a` | 鲊蓣碴哕变崴蒸强鹮申蜒铷熠汝遒辊不考创邮芪仗礼李岍讳羽矢2024-11-06提供者 行行行买买买 2 | /zh-hans/reading-display/672b0940b829737eb3f6b047 |
| `a` | 提供者 行行行买买买 | /zh-hans/personal-data/4c973896-5761-41fc-8217-07c5d13a004b |
| `a` | 鱼我所欲也孟子及其弟子〔先秦〕"鱼，我所欲也；熊掌，亦我所欲也。二者不可得兼，舍鱼而取熊掌者也。生， | /zh-hans/reading-display/665d8eb50a4c9154eec20685 |
| `a` | 提供者 admin sreading | /zh-hans/personal-data/6455918ee75e891f8c32fb6c |
| `a` | 高祖功臣侯年表《史记》太史公曰：古者人臣，功有五品，以德立宗庙、定社稷曰勋，以言曰劳，用力曰功，明其 | /zh-hans/reading-display/64f06ad8d04b746d1b0b9407 |
| `a` | 提供者 admin sreading | /zh-hans/personal-data/6455918ee75e891f8c32fb6c |
| `a` | 骘疏融枪滘蜕槐绋痛帖锹窅巢叼屠盒垤葖人充毐动邪布孛饥却爪阵2024-11-06提供者 行行行买买买  | /zh-hans/reading-display/672b0966b829737eb3f6b04d |
| `a` | 提供者 行行行买买买 | /zh-hans/personal-data/4c973896-5761-41fc-8217-07c5d13a004b |

**截图**：`screenshots/exploration/03-nav-zh-hans-reading.png`

---

### 6. 导航页: playlist (/zh-hans/playlist)

**URL**：https://sr.sigmareading.com/zh-hans/playlist

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/playlist
- 标题: ©2026 SReading v2.12.12 | 书单
- 交互元素: 103 个

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

### 7. 导航页: favorites (/zh-hans/favorites)

**URL**：https://sr.sigmareading.com/zh-hans/favorites

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/favorites
- 标题: ©2026 SReading v2.12.12 | 收藏夹
- 交互元素: 63 个

**主要交互元素**：
| 类型 | 文本 | href |
|------|------|------|
| `ion-button` | 排序 |  |
| `button` | 1x |  |

**截图**：`screenshots/exploration/03-nav-zh-hans-favorites.png`

---

### 8. 导航页: studio (/zh-hans/studio)

**URL**：https://sr.sigmareading.com/zh-hans/studio

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/studio
- 标题: ©2026 SReading v2.12.12 | 工作室
- 交互元素: 66 个

**主要交互元素**：
| 类型 | 文本 | href |
|------|------|------|
| `ion-button` | 排序 |  |
| `button` | 1x |  |

**截图**：`screenshots/exploration/03-nav-zh-hans-studio.png`

---

### 9. 导航页: exam (/zh-hans/exam)

**URL**：https://sr.sigmareading.com/zh-hans/exam

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/exam
- 标题: ©2026 SReading v2.12.12 | 测试
- 交互元素: 58 个

**主要交互元素**：
| 类型 | 文本 | href |
|------|------|------|
| `button` | 加入测试 |  |
| `button` | 加入测试 |  |

**截图**：`screenshots/exploration/03-nav-zh-hans-exam.png`

---

### 10. 导航页: pinyin-pathway (/zh-hans/pinyin-pathway)

**URL**：https://sr.sigmareading.com/zh-hans/pinyin-pathway

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/pinyin-pathway
- 标题: ©2026 SReading v2.12.12 | 拼音捷径
- 交互元素: 56 个

**截图**：`screenshots/exploration/03-nav-zh-hans-pinyin-pathway.png`

---

### 11. 导航页: word-express (/zh-hans/word-express)

**URL**：https://sr.sigmareading.com/zh-hans/word-express?name=list

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/word-express?name=list
- 标题: ©2026 SReading v2.12.12 | 识字快车
- 交互元素: 60 个

**主要交互元素**：
| 类型 | 文本 | href |
|------|------|------|
| `ion-button` | 按教材复习 |  |
| `ion-button` | 自定义复习 |  |
| `button` | 1x |  |

**截图**：`screenshots/exploration/03-nav-zh-hans-word-express.png`

---

### 12. 导航页: character-map-overview (/zh-hans/character-map-overview)

**URL**：https://sr.sigmareading.com/zh-hans/character-map-create

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/character-map-create
- 标题: ©2026 SReading v2.12.12
- 交互元素: 53 个

**主要交互元素**：
| 类型 | 文本 | href |
|------|------|------|
| `div` | 1 |  |
| `div` | 2 |  |
| `div` | 3 |  |
| `div` | 4 |  |

**截图**：`screenshots/exploration/03-nav-zh-hans-character-map-overview.png`

---

### 13. 导航页: copybook (/zh-hans/copybook)

**URL**：https://sr.sigmareading.com/zh-hans/copybook

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/copybook
- 标题: ©2026 SReading v2.12.12 | 字帖字卡
- 交互元素: 72 个

**主要交互元素**：
| 类型 | 文本 | href |
|------|------|------|
| `ion-item` | 新新代素养:文史哲科同乐趣味中文同乐常用汉字380马立平中文暨南中文部编语文基督同乐中文AP中文20 |  |
| `ion-button` | 预览字帖 |  |
| `ion-button` | 下载字帖 |  |
| `ion-button` | 预览字卡 |  |
| `ion-button` | 下载字卡 |  |
| `button` | 1x |  |

**截图**：`screenshots/exploration/03-nav-zh-hans-copybook.png`

---

### 14. 导航页: audio-dictionary (/zh-hans/audio-dictionary)

**URL**：https://sr.sigmareading.com/zh-hans/audio-dictionary

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/audio-dictionary
- 标题: ©2026 SReading v2.12.12 | 有声字典
- 交互元素: 56 个

**截图**：`screenshots/exploration/03-nav-zh-hans-audio-dictionary.png`

---

### 15. 导航页: ccswitch (/zh-hans/ccswitch)

**URL**：https://sr.sigmareading.com/zh-hans/ccswitch

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/ccswitch
- 标题: ©2026 SReading v2.12.12 | 简繁转换工具
- 交互元素: 63 个

**主要交互元素**：
| 类型 | 文本 | href |
|------|------|------|
| `ion-button` | 转换为繁体中文 |  |
| `ion-button` | 转换为简体中文 |  |
| `ion-button` | 复制结果 |  |
| `ion-button` | 清空内容 |  |
| `button` | 1x |  |

**截图**：`screenshots/exploration/03-nav-zh-hans-ccswitch.png`

---

### 16. 路由探索: /zh-hans/login

**URL**：https://sr.sigmareading.com/zh-hans/notfound

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/notfound
- 标题: 404
- 交互元素: 2 个

**主要交互元素**：
| 类型 | 文本 | href |
|------|------|------|
| `button` | 首页 |  |

**截图**：`screenshots/exploration/04-route-zh-hans-login.png`

---

### 17. 路由探索: /zh-hans/profile

**URL**：https://sr.sigmareading.com/zh-hans/profile

**页面信息**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/profile
- 标题: ©2026 SReading v2.12.12 | 设置
- 交互元素: 86 个

**主要交互元素**：
| 类型 | 文本 | href |
|------|------|------|
| `ion-item` | ID |  |
| `ion-item` | 名字 |  |
| `ion-item` | 姓氏 |  |
| `ion-item` | 个人网址 |  |
| `ion-item` | 个人简介 |  |
| `ion-item` | 私人账户您的个人资料只有您可以看到 |  |
| `ion-item` | 字体大小大中小 |  |
| `ion-item` | 播放速度：1.0 |  |
| `ion-item` | 0.61.2 |  |
| `ion-item` | 语言English中文（简体）中文（繁體） |  |
| `ion-button` | 保存 |  |
| `ion-button` | 退出 |  |

**截图**：`screenshots/exploration/04-route-zh-hans-profile.png`

---

