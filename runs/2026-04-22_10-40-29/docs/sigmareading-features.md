# SigmaReading 功能探索报告

> 生成时间：2026/4/22 18:42:38
> 目标网站：https://sr.sigmareading.com/zh-hans/home

---

## 页面路由结构

```
- https://sr.sigmareading.com/
- https://sr.sigmareading.com/teacher-portal/home
- https://sr.sigmareading.com/zh-hans/audio-dictionary
- https://sr.sigmareading.com/zh-hans/ccswitch
- https://sr.sigmareading.com/zh-hans/character-map-create
- https://sr.sigmareading.com/zh-hans/chinese-to-pinyin
- https://sr.sigmareading.com/zh-hans/copybook
- https://sr.sigmareading.com/zh-hans/home
- https://sr.sigmareading.com/zh-hans/notfound
- https://sr.sigmareading.com/zh-hans/pinyin-pathway
- https://sr.sigmareading.com/zh-hans/playlist
- https://sr.sigmareading.com/zh-hans/playlist-display/6539d819ca06cb10e16f58e9
- https://sr.sigmareading.com/zh-hans/playlist-display/6539d88eca06cb10e16f58ea
- https://sr.sigmareading.com/zh-hans/playlist-display/6539da63ca06cb10e16f58ef
- https://sr.sigmareading.com/zh-hans/playlist-display/653a1734d448f0607b7aa574
- https://sr.sigmareading.com/zh-hans/presentation/join
- https://sr.sigmareading.com/zh-hans/reading
- https://sr.sigmareading.com/zh-hans/reading-display/63ec90d4e328e6231bb8b4a2
- https://sr.sigmareading.com/zh-hans/textbook
- https://sr.sigmareading.com/zh-hans/unauthorized
- https://sr.sigmareading.com/zh-hans/word-express?name=list
```

---

## 功能模块

### 1. 主页（/zh-hans/home）

**位置**：主页面
**入口**：直接访问 /zh-hans/home

**功能描述**：
- 页面标题区域: SReadingfor Student | ©2026 SReading v2.12.12 | 书单 刷新 | 文章 | 鲤鱼跳龙门
- 底部导航标签: 
- 功能卡片数量: 30
- 交互元素总计: 78

**操作步骤**：
1. 登录后自动跳转到主页
2. 页面展示学习模块卡片列表
3. 底部 Tab Bar 提供快速导航入口
4. 点击各卡片进入对应功能模块

**相关 API**：
- GET https://sr.sigmareading.com/zh-hans/home
- GET https://sr.sigmareading.com/assets/webapp.BovLx_dB.js
- GET https://sr.sigmareading.com/assets/modulepreload-polyfill.B5Qt9EMX.js
- GET https://sr.sigmareading.com/assets/framework.DiD4vmm9.js
- GET https://sr.sigmareading.com/assets/notification-type.model.DFYapXPT.js
- GET https://sr.sigmareading.com/assets/web.DfNmh0Hh.js
- GET https://sr.sigmareading.com/assets/base.BRTX-jCf.js
- GET https://sr.sigmareading.com/assets/web.CztvnfWI.js
- GET https://sr.sigmareading.com/assets/web.DNYMsHP8.js
- GET https://sr.sigmareading.com/services/sr-ms-core/api/account
- GET https://sr.sigmareading.com/assets/workbox-window.prod.es5.B9K5rw8f.js
- GET https://sr.sigmareading.com/assets/swipe-back.DJOUN06Q.js
- GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?sort=name.text,desc&page=0&size=8
- GET https://sr.sigmareading.com/services/sr-ms-core/api/playlists?sort=sortNum,desc&page=0&size=4&count=0
- GET https://sr.sigmareading.com/services/sr-ms-core/api/playlists?sort=sortNum,desc&page=0&size=4&count=0
- GET https://sr.sigmareading.com/assets/web.BgmlwXlQ.js
- GET https://sr.sigmareading.com/assets/index9.RqGxv37M.js
- GET https://sr.sigmareading.com/assets/web.BW-l3zzw.js
- POST https://www.youtube.com/api/stats/qoe?fmt=134&cpn=2CHfVPWRWvl7Vdyh&el=embedded&ns=yt&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C100702%2C15105%2C25059%2C4174%2C30446%2C13517%2C5189%2C21437%2C4571%2C5236%2C5802%2C1978%2C15425%2C662%2C9404%2C23826%2C9500%2C1840%2C12605%2C9869%2C7199%2C4572%2C1365%2C10106%2C13159%2C10141%2C11051%2C328%2C9389%2C11301%2C14341%2C4271%2C386%2C954%2C2754%2C12775%2C8147%2C1206%2C2195%2C9655%2C3571%2C3472%2C3548%2C3425%2C1305%2C3879%2C4566%2C289%2C1548%2C2334%2C6823%2C357%2C7269%2C1686%2C5219%2C1524%2C6767&cl=901361096&seq=1&docid=MQ5e0zb8MRo&ei=q6XoabaCDZ6usfIP-_bFmA0&event=streamingstats&plid=AAZQCinn-Da3Z8XX&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&vps=0.000:N,0.015:B,0.286:B,0.286:B&ctmp=dttg:t.0;dtt.1;gl.0&cat=streaming&cmt=0.015:0.000,0.286:0.000&vfs=0.286:134:134::r:sms.0&view=0.286:270:224&bwe=0.286:655360&bat=0.286:1:1&vis=0.286:0&bh=0.286:0.000&qclc=ChAyQ0hmVlBXUld2bDdWZHloEAE
- POST https://www.youtube.com/api/stats/playback?ns=yt&el=embedded&cpn=2CHfVPWRWvl7Vdyh&ver=2&cmt=0.052&fmt=134&fs=0&rt=1.257&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=1277&cl=901361096&mos=1&volume=100&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&delay=4&hl=zh_CN&cr=US&len=49&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C100702%2C15105%2C25059%2C4174%2C30446%2C13517%2C5189%2C21437%2C4571%2C5236%2C5802%2C1978%2C15425%2C662%2C9404%2C23826%2C9500%2C1840%2C12605%2C9869%2C7199%2C4572%2C1365%2C10106%2C13159%2C10141%2C11051%2C328%2C9389%2C11301%2C14341%2C4271%2C386%2C954%2C2754%2C12775%2C8147%2C1206%2C2195%2C9655%2C3571%2C3472%2C3548%2C3425%2C1305%2C3879%2C4566%2C289%2C1548%2C2334%2C6823%2C357%2C7269%2C1686%2C5219%2C1524%2C6767&rtn=6&afmt=251&size=270%3A224&inview=1&muted=1&docid=MQ5e0zb8MRo&ei=q6XoabaCDZ6usfIP-_bFmA0&plid=AAZQCinn-Da3Z8XX&referrer=https%3A%2F%2Fwww.youtube.com%2Fembed%2FMQ5e0zb8MRo%3Fsi%3D34ZL9TvcciKOXcDN%26enablejsapi%3D1%26autoplay%3D1%26mute%3D1%26rel%3D0%26loop%3D1%26playlist%3DMQ5e0zb8MRo&list=TLGGrCtcL_LOY8syMjA0MjAyNg&of=wbAUJoLFDaeeOSJrHXH1sg&vm=CAEQABgEOjJBSHFpSlRKdE1YTG9yR0tseTRuWmtub2R6QmhIc29QZ19DeVViRkMyVS1DR2gzV1lnZ2JkQUxkcUFQSWNFWC1HTVhQX2czMkRuRTZWWTBVVktxRGFLdE1xM1RWZ2J1QjhxNWZ1ZjZhdmVJa0hhUTVHRDhFaVR6aUdLN2Y2YlNGSXBhNFpsWjJuNlNTcW5BTWRSYjcycU9Bbw

**主要交互元素**：
| 类型 | 文本 | href/属性 |
|------|------|-----------|
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
| `ion-item` | 拼音捷径 |  |
| `a` | 拼音捷径 | /zh-hans/pinyin-pathway |
| `ion-item` | 字帖字卡 |  |

**截图**：`runs/2026-04-22_10-40-29/screenshots/02-home-fullpage.png`

---

### 2. 导航页面: textbook (/zh-hans/textbook)

**位置**：底部导航 / 主菜单
**入口**：点击导航链接 /zh-hans/textbook

**功能描述**：
- URL: https://sr.sigmareading.com/zh-hans/textbook
- 页面标题: ©2026 SReading v2.12.12 | 教材 | 购买
- 交互元素: 47 个

**操作步骤**：
1. 在主页点击导航项
2. 路由跳转至 /zh-hans/textbook
3. 页面加载完成

**相关 API**：
- GET https://sr.sigmareading.com/zh-hans/textbook
- POST https://www.youtube.com/api/stats/qoe?fmt=134&afmt=251&cpn=hzHU7hJ5g1ol0x8P&el=embedded&ns=yt&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C100702%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C9672%2C1366%2C18065%2C9404%2C23826%2C9500%2C1840%2C12605%2C5509%2C4360%2C11771%2C11470%2C8443%2C4717%2C21520%2C20690%2C14341%2C4271%2C1340%2C2754%2C24323%2C9654%2C3572%2C3395%2C77%2C3548%2C3425%2C1303%2C3881%2C3307%2C1259%2C1837%2C9514%2C8954%2C5220&cl=901361096&seq=2&docid=hTMRb6YECEc&ei=s6XoabK9O__SsfIPocyl-QI&event=streamingstats&plid=AAZQCipto0RKW3X4&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&afs=0.298:251::i:fl.-17.74;vg.0;nm.4;sms.0&ctmp=atrkchg:t.299;id.und;m.0&bh=1.129:1.133,3.693:18.275&cmt=1.129:0.013,1.882:0.725,3.693:2.536&vps=1.129:PL,3.693:N&user_intent=0.007&bwm=3.693:1251412:3.705&bwe=3.693:1053794&bat=3.693:1:1&df=3.693:0&qclc=ChBoekhVN2hKNWcxb2wweDhQEAI
- POST https://www.youtube.com/api/stats/watchtime?ns=yt&el=embedded&cpn=hzHU7hJ5g1ol0x8P&ver=2&cmt=2.536&fmt=134&fs=0&rt=3.694&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=3714&cl=901361096&state=paused&volume=100&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&final=1&delay=4&hl=zh_CN&cr=US&len=48.381&afmt=251&idpj=-6&ldpj=-39&rti=6&size=270%3A224&inview=1&st=0&et=2.536&muted=1&docid=hTMRb6YECEc&ei=s6XoabK9O__SsfIPocyl-QI&plid=AAZQCipto0RKW3X4&referrer=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhTMRb6YECEc%3Fsi%3DUd-M1QV3QJJjWCWS%26enablejsapi%3D1%26autoplay%3D1%26mute%3D1%26rel%3D0%26loop%3D1%26playlist%3DhTMRb6YECEc&list=TLGGN23J0PoR3YsyMjA0MjAyNg&of=wbAUJoLFDaeeOSJrHXH1sg&vm=CAEQABgEOjJBSHFpSlRKdEFPaTUwWGp1S1QzV1lKU0haUmotSUlQUThWUjJHbzItUkFtV2s1cUhpd2JkQUxkcUFQSnRRellSbFhkek1URkNtM281OGpRQUo5TWdWQjNYTWg2djd1aHNuaDZLUjBNZlRJT3FMOEtkX3NVTTNqVF8xYkxvbU95SndjQkhTTTU1cnBxOHdmbmJDc0hrQ1gybA
- POST https://www.youtube.com/api/stats/atr?ns=yt&el=embedded&cpn=hzHU7hJ5g1ol0x8P&ver=2&cmt=2.536&fmt=134&fs=0&rt=3.698&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=3718&cl=901361096&mos=1&volume=100&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&delay=4&hl=zh_CN&cr=US&len=48.381&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C100702%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C9672%2C1366%2C18065%2C9404%2C23826%2C9500%2C1840%2C12605%2C5509%2C4360%2C11771%2C11470%2C8443%2C4717%2C21520%2C20690%2C14341%2C4271%2C1340%2C2754%2C24323%2C9654%2C3572%2C3395%2C77%2C3548%2C3425%2C1303%2C3881%2C3307%2C1259%2C1837%2C9514%2C8954%2C5220&afmt=251&muted=1&docid=hTMRb6YECEc&ei=s6XoabK9O__SsfIPocyl-QI&plid=AAZQCipto0RKW3X4&vm=CAEQABgEOjJBSHFpSlRKdEFPaTUwWGp1S1QzV1lKU0haUmotSUlQUThWUjJHbzItUkFtV2s1cUhpd2JkQUxkcUFQSnRRellSbFhkek1URkNtM281OGpRQUo5TWdWQjNYTWg2djd1aHNuaDZLUjBNZlRJT3FMOEtkX3NVTTNqVF8xYkxvbU95SndjQkhTTTU1cnBxOHdmbmJDc0hrQ1gybA
- GET https://sr.sigmareading.com/assets/webapp.BovLx_dB.js
- GET https://sr.sigmareading.com/assets/modulepreload-polyfill.B5Qt9EMX.js
- GET https://sr.sigmareading.com/assets/framework.DiD4vmm9.js
- GET https://sr.sigmareading.com/assets/notification-type.model.DFYapXPT.js
- GET https://sr.sigmareading.com/assets/web.DfNmh0Hh.js
- GET https://sr.sigmareading.com/assets/base.BRTX-jCf.js

**主要交互元素**：
| 类型 | 文本 | href/属性 |
|------|------|-----------|
| `a` | 新代中文教育协会会员学校，享受会员学校专属团购价格。 | https://www.nextgenchinese.org/teacher/member-school |
| `button` | 同乐趣味中文 |  |
| `button` | 新新代素养:文史哲科 |  |

**截图**：`runs/2026-04-22_10-40-29/screenshots/03-nav-zh-hans-textbook.png`

---

### 3. 导航页面: reading (/zh-hans/reading)

**位置**：底部导航 / 主菜单
**入口**：点击导航链接 /zh-hans/reading

**功能描述**：
- URL: https://sr.sigmareading.com/zh-hans/reading
- 页面标题: ©2026 SReading v2.12.12 | 文章 | 鲤鱼跳龙门
- 交互元素: 93 个

**操作步骤**：
1. 在主页点击导航项
2. 路由跳转至 /zh-hans/reading
3. 页面加载完成

**相关 API**：
- GET https://sr.sigmareading.com/zh-hans/reading
- GET https://sr.sigmareading.com/assets/webapp.BovLx_dB.js
- GET https://sr.sigmareading.com/assets/modulepreload-polyfill.B5Qt9EMX.js
- GET https://sr.sigmareading.com/assets/framework.DiD4vmm9.js
- GET https://sr.sigmareading.com/assets/notification-type.model.DFYapXPT.js
- GET https://sr.sigmareading.com/assets/web.DfNmh0Hh.js
- GET https://sr.sigmareading.com/assets/base.BRTX-jCf.js
- GET https://sr.sigmareading.com/assets/web.CztvnfWI.js
- GET https://sr.sigmareading.com/assets/web.DNYMsHP8.js
- GET https://sr.sigmareading.com/services/sr-ms-core/api/account

**主要交互元素**：
| 类型 | 文本 | href/属性 |
|------|------|-----------|
| `ion-button` | 排序 |  |
| `ion-button` | 筛选 |  |
| `a` | 鲤鱼跳龙门同乐中文远古时期，尧帝命令大禹治理洪水。大禹为了彻底解决黄河水患，组织大量劳力在龙门山凿出 | /zh-hans/reading-display/63ec90d4e328e6231bb8b4a2 |
| `a` | 提供者 思和 | /zh-hans/personal-data/590ea45f-04ee-4f24-b1d9-f3fd38e472aa |
| `a` | 鲊蓣碴哕变崴蒸强鹮申蜒铷熠汝遒辊不考创邮芪仗礼李岍讳羽矢2024-11-06提供者 行行行买买买 3 | /zh-hans/reading-display/672b0940b829737eb3f6b047 |
| `a` | 提供者 行行行买买买 | /zh-hans/personal-data/4c973896-5761-41fc-8217-07c5d13a004b |
| `a` | 鱼我所欲也孟子及其弟子〔先秦〕"鱼，我所欲也；熊掌，亦我所欲也。二者不可得兼，舍鱼而取熊掌者也。生， | /zh-hans/reading-display/665d8eb50a4c9154eec20685 |
| `a` | 提供者 admin sreading | /zh-hans/personal-data/6455918ee75e891f8c32fb6c |
| `a` | 高祖功臣侯年表《史记》太史公曰：古者人臣，功有五品，以德立宗庙、定社稷曰勋，以言曰劳，用力曰功，明其 | /zh-hans/reading-display/64f06ad8d04b746d1b0b9407 |
| `a` | 提供者 admin sreading | /zh-hans/personal-data/6455918ee75e891f8c32fb6c |
| `a` | 骘疏融枪滘蜕槐绋痛帖锹窅巢叼屠盒垤葖人充毐动邪布孛饥却爪阵2024-11-06提供者 行行行买买买  | /zh-hans/reading-display/672b0966b829737eb3f6b04d |
| `a` | 提供者 行行行买买买 | /zh-hans/personal-data/4c973896-5761-41fc-8217-07c5d13a004b |
| `a` | 骑驴找驴同乐中文从前有个叫李二的人，他想做生意挣大钱，就拿了一笔钱，高高兴兴地来到了集市上。他见到一 | /zh-hans/reading-display/63dfea89e53563401e345866 |
| `a` | 提供者 Daniel Li | /zh-hans/personal-data/6bba9197-f8db-469e-93f1-9c4ba035136b |
| `a` | 骑青牛老子出关同乐中文老子姓李名耳，字聃，又称老聃，是道家学派的传奇人物。据说，老子刚出生时，头大眉 | /zh-hans/reading-display/63ec8f3ee328e6231bb8b458 |

**截图**：`runs/2026-04-22_10-40-29/screenshots/03-nav-zh-hans-reading.png`

---

### 4. 导航页面: playlist (/zh-hans/playlist)

**位置**：底部导航 / 主菜单
**入口**：点击导航链接 /zh-hans/playlist

**功能描述**：
- URL: https://sr.sigmareading.com/zh-hans/playlist
- 页面标题: ©2026 SReading v2.12.12 | 书单
- 交互元素: 93 个

**操作步骤**：
1. 在主页点击导航项
2. 路由跳转至 /zh-hans/playlist
3. 页面加载完成

**相关 API**：
- GET https://sr.sigmareading.com/zh-hans/playlist
- GET https://sr.sigmareading.com/assets/webapp.BovLx_dB.js
- GET https://sr.sigmareading.com/assets/modulepreload-polyfill.B5Qt9EMX.js
- GET https://sr.sigmareading.com/assets/framework.DiD4vmm9.js
- GET https://sr.sigmareading.com/assets/notification-type.model.DFYapXPT.js
- GET https://sr.sigmareading.com/assets/web.DfNmh0Hh.js
- GET https://sr.sigmareading.com/assets/base.BRTX-jCf.js
- GET https://sr.sigmareading.com/assets/web.CztvnfWI.js
- GET https://sr.sigmareading.com/assets/web.DNYMsHP8.js
- GET https://sr.sigmareading.com/services/sr-ms-core/api/account

**主要交互元素**：
| 类型 | 文本 | href/属性 |
|------|------|-----------|
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
| `a` | 《唐诗》982023-10-25 | /zh-hans/playlist-display/6538ec6cfe81804075c0335e |
| `a` | 同乐_L1_中庸名句132023-02-07 | /zh-hans/playlist-display/63e1ed8a4a35b35902a62510 |
| `a` | 秘密花园412023-03-25 | /zh-hans/playlist-display/641e68899aba6c65f08e33ac |

**截图**：`runs/2026-04-22_10-40-29/screenshots/03-nav-zh-hans-playlist.png`

---

### 5. 导航页面: join (/zh-hans/presentation/join)

**位置**：底部导航 / 主菜单
**入口**：点击导航链接 /zh-hans/presentation/join

**功能描述**：
- URL: https://sr.sigmareading.com/zh-hans/presentation/join
- 页面标题: ©2026 SReading v2.12.12 | 加入测试 | 加入演讲房间
- 交互元素: 43 个

**操作步骤**：
1. 在主页点击导航项
2. 路由跳转至 /zh-hans/presentation/join
3. 页面加载完成

**相关 API**：
- GET https://sr.sigmareading.com/zh-hans/presentation/join
- GET https://sr.sigmareading.com/assets/webapp.BovLx_dB.js
- GET https://sr.sigmareading.com/assets/modulepreload-polyfill.B5Qt9EMX.js
- GET https://sr.sigmareading.com/assets/framework.DiD4vmm9.js
- GET https://sr.sigmareading.com/assets/notification-type.model.DFYapXPT.js
- GET https://sr.sigmareading.com/assets/web.DfNmh0Hh.js
- GET https://sr.sigmareading.com/assets/base.BRTX-jCf.js
- GET https://sr.sigmareading.com/assets/web.CztvnfWI.js
- GET https://sr.sigmareading.com/assets/web.DNYMsHP8.js
- GET https://sr.sigmareading.com/assets/PresentationRoomJoin.CzT_5XTF.js

**主要交互元素**：
| 类型 | 文本 | href/属性 |
|------|------|-----------|
| `button` | 加入房间 | submit |
| `button` | 扫描二维码加入 | button |

**截图**：`runs/2026-04-22_10-40-29/screenshots/03-nav-zh-hans-presentation-join.png`

---

### 6. 导航页面: word-express (/zh-hans/word-express)

**位置**：底部导航 / 主菜单
**入口**：点击导航链接 /zh-hans/word-express

**功能描述**：
- URL: https://sr.sigmareading.com/zh-hans/word-express?name=list
- 页面标题: ©2026 SReading v2.12.12 | 识字快车
- 交互元素: 54 个

**操作步骤**：
1. 在主页点击导航项
2. 路由跳转至 /zh-hans/word-express
3. 页面加载完成

**相关 API**：
- GET https://sr.sigmareading.com/zh-hans/word-express
- GET https://sr.sigmareading.com/assets/webapp.BovLx_dB.js
- GET https://sr.sigmareading.com/assets/modulepreload-polyfill.B5Qt9EMX.js
- GET https://sr.sigmareading.com/assets/framework.DiD4vmm9.js
- GET https://sr.sigmareading.com/assets/notification-type.model.DFYapXPT.js
- GET https://sr.sigmareading.com/assets/web.DfNmh0Hh.js
- GET https://sr.sigmareading.com/assets/base.BRTX-jCf.js
- GET https://sr.sigmareading.com/assets/web.CztvnfWI.js
- GET https://sr.sigmareading.com/assets/web.DNYMsHP8.js
- GET https://sr.sigmareading.com/services/sr-ms-core/api/account

**主要交互元素**：
| 类型 | 文本 | href/属性 |
|------|------|-----------|
| `ion-button` | 按教材复习 |  |
| `ion-button` | 自定义复习 |  |
| `ion-button` | 去登录 |  |
| `button` | 1x |  |

**截图**：`runs/2026-04-22_10-40-29/screenshots/03-nav-zh-hans-word-express.png`

---

### 7. 导航页面: character-map-create (/zh-hans/character-map-create)

**位置**：底部导航 / 主菜单
**入口**：点击导航链接 /zh-hans/character-map-create

**功能描述**：
- URL: https://sr.sigmareading.com/zh-hans/character-map-create
- 页面标题: ©2026 SReading v2.12.12 | 选择字符集 | AP 2000字
- 交互元素: 43 个

**操作步骤**：
1. 在主页点击导航项
2. 路由跳转至 /zh-hans/character-map-create
3. 页面加载完成

**相关 API**：
- GET https://sr.sigmareading.com/zh-hans/character-map-create
- GET https://sr.sigmareading.com/assets/webapp.BovLx_dB.js
- GET https://sr.sigmareading.com/assets/modulepreload-polyfill.B5Qt9EMX.js
- GET https://sr.sigmareading.com/assets/framework.DiD4vmm9.js
- GET https://sr.sigmareading.com/assets/notification-type.model.DFYapXPT.js
- GET https://sr.sigmareading.com/assets/web.DfNmh0Hh.js
- GET https://sr.sigmareading.com/assets/base.BRTX-jCf.js
- GET https://sr.sigmareading.com/assets/web.CztvnfWI.js
- GET https://sr.sigmareading.com/assets/web.DNYMsHP8.js
- GET https://sr.sigmareading.com/services/sr-ms-core/api/account

**主要交互元素**：
| 类型 | 文本 | href/属性 |
|------|------|-----------|
| `div` | 1 |  |
| `div` | 2 |  |
| `div` | 3 |  |
| `div` | 4 |  |

**截图**：`runs/2026-04-22_10-40-29/screenshots/03-nav-zh-hans-character-map-create.png`

---

### 8. 导航页面: pinyin-pathway (/zh-hans/pinyin-pathway)

**位置**：底部导航 / 主菜单
**入口**：点击导航链接 /zh-hans/pinyin-pathway

**功能描述**：
- URL: https://sr.sigmareading.com/zh-hans/pinyin-pathway
- 页面标题: ©2026 SReading v2.12.12 | 拼音捷径
- 交互元素: 48 个

**操作步骤**：
1. 在主页点击导航项
2. 路由跳转至 /zh-hans/pinyin-pathway
3. 页面加载完成

**相关 API**：
- GET https://sr.sigmareading.com/zh-hans/pinyin-pathway
- GET https://sr.sigmareading.com/assets/webapp.BovLx_dB.js
- GET https://sr.sigmareading.com/assets/modulepreload-polyfill.B5Qt9EMX.js
- GET https://sr.sigmareading.com/assets/framework.DiD4vmm9.js
- GET https://sr.sigmareading.com/assets/notification-type.model.DFYapXPT.js
- GET https://sr.sigmareading.com/assets/web.DfNmh0Hh.js
- GET https://sr.sigmareading.com/assets/base.BRTX-jCf.js
- GET https://sr.sigmareading.com/assets/web.CztvnfWI.js
- GET https://sr.sigmareading.com/assets/web.DNYMsHP8.js
- GET https://sr.sigmareading.com/services/sr-ms-core/api/account

**截图**：`runs/2026-04-22_10-40-29/screenshots/03-nav-zh-hans-pinyin-pathway.png`

---

### 9. 导航页面: copybook (/zh-hans/copybook)

**位置**：底部导航 / 主菜单
**入口**：点击导航链接 /zh-hans/copybook

**功能描述**：
- URL: https://sr.sigmareading.com/zh-hans/copybook
- 页面标题: ©2026 SReading v2.12.12 | 字帖字卡
- 交互元素: 64 个

**操作步骤**：
1. 在主页点击导航项
2. 路由跳转至 /zh-hans/copybook
3. 页面加载完成

**相关 API**：
- GET https://sr.sigmareading.com/zh-hans/copybook
- GET https://sr.sigmareading.com/assets/webapp.BovLx_dB.js
- GET https://sr.sigmareading.com/assets/modulepreload-polyfill.B5Qt9EMX.js
- GET https://sr.sigmareading.com/assets/framework.DiD4vmm9.js
- GET https://sr.sigmareading.com/assets/notification-type.model.DFYapXPT.js
- GET https://sr.sigmareading.com/assets/web.DfNmh0Hh.js
- GET https://sr.sigmareading.com/assets/base.BRTX-jCf.js
- GET https://sr.sigmareading.com/assets/web.CztvnfWI.js
- GET https://sr.sigmareading.com/assets/web.DNYMsHP8.js
- GET https://sr.sigmareading.com/services/sr-ms-core/api/account

**主要交互元素**：
| 类型 | 文本 | href/属性 |
|------|------|-----------|
| `ion-item` | 新新代素养:文史哲科同乐趣味中文同乐常用汉字380马立平中文暨南中文部编语文基督同乐中文AP中文20 |  |
| `ion-button` | 预览字帖 |  |
| `ion-button` | 下载字帖 |  |
| `ion-button` | 预览字卡 |  |
| `ion-button` | 下载字卡 |  |
| `button` | 1x |  |

**截图**：`runs/2026-04-22_10-40-29/screenshots/03-nav-zh-hans-copybook.png`

---

### 10. 导航页面: audio-dictionary (/zh-hans/audio-dictionary)

**位置**：底部导航 / 主菜单
**入口**：点击导航链接 /zh-hans/audio-dictionary

**功能描述**：
- URL: https://sr.sigmareading.com/zh-hans/audio-dictionary
- 页面标题: ©2026 SReading v2.12.12 | 有声字典
- 交互元素: 48 个

**操作步骤**：
1. 在主页点击导航项
2. 路由跳转至 /zh-hans/audio-dictionary
3. 页面加载完成

**相关 API**：
- GET https://sr.sigmareading.com/zh-hans/audio-dictionary
- GET https://sr.sigmareading.com/assets/webapp.BovLx_dB.js
- GET https://sr.sigmareading.com/assets/modulepreload-polyfill.B5Qt9EMX.js
- GET https://sr.sigmareading.com/assets/framework.DiD4vmm9.js
- GET https://sr.sigmareading.com/assets/notification-type.model.DFYapXPT.js
- GET https://sr.sigmareading.com/assets/web.DfNmh0Hh.js
- GET https://sr.sigmareading.com/assets/base.BRTX-jCf.js
- GET https://sr.sigmareading.com/assets/web.CztvnfWI.js
- GET https://sr.sigmareading.com/assets/web.DNYMsHP8.js
- GET https://sr.sigmareading.com/services/sr-ms-core/api/account

**截图**：`runs/2026-04-22_10-40-29/screenshots/03-nav-zh-hans-audio-dictionary.png`

---

### 11. 导航页面: ccswitch (/zh-hans/ccswitch)

**位置**：底部导航 / 主菜单
**入口**：点击导航链接 /zh-hans/ccswitch

**功能描述**：
- URL: https://sr.sigmareading.com/zh-hans/ccswitch
- 页面标题: ©2026 SReading v2.12.12 | 简繁转换工具
- 交互元素: 55 个

**操作步骤**：
1. 在主页点击导航项
2. 路由跳转至 /zh-hans/ccswitch
3. 页面加载完成

**相关 API**：
- GET https://sr.sigmareading.com/zh-hans/ccswitch
- GET https://sr.sigmareading.com/assets/webapp.BovLx_dB.js
- GET https://sr.sigmareading.com/assets/modulepreload-polyfill.B5Qt9EMX.js
- GET https://sr.sigmareading.com/assets/framework.DiD4vmm9.js
- GET https://sr.sigmareading.com/assets/notification-type.model.DFYapXPT.js
- GET https://sr.sigmareading.com/assets/web.DfNmh0Hh.js
- GET https://sr.sigmareading.com/assets/base.BRTX-jCf.js
- GET https://sr.sigmareading.com/assets/web.CztvnfWI.js
- GET https://sr.sigmareading.com/assets/web.DNYMsHP8.js
- GET https://sr.sigmareading.com/assets/ccswitch.BOM9cBQt.js

**主要交互元素**：
| 类型 | 文本 | href/属性 |
|------|------|-----------|
| `ion-button` | 转换为繁体中文 |  |
| `ion-button` | 转换为简体中文 |  |
| `ion-button` | 复制结果 |  |
| `ion-button` | 清空内容 |  |
| `button` | 1x |  |

**截图**：`runs/2026-04-22_10-40-29/screenshots/03-nav-zh-hans-ccswitch.png`

---

### 12. 导航页面: chinese-to-pinyin (/zh-hans/chinese-to-pinyin)

**位置**：底部导航 / 主菜单
**入口**：点击导航链接 /zh-hans/chinese-to-pinyin

**功能描述**：
- URL: https://sr.sigmareading.com/zh-hans/chinese-to-pinyin
- 页面标题: ©2026 SReading v2.12.12 | 汉字转拼音工具
- 交互元素: 50 个

**操作步骤**：
1. 在主页点击导航项
2. 路由跳转至 /zh-hans/chinese-to-pinyin
3. 页面加载完成

**相关 API**：
- GET https://sr.sigmareading.com/zh-hans/chinese-to-pinyin
- GET https://sr.sigmareading.com/assets/webapp.BovLx_dB.js
- GET https://sr.sigmareading.com/assets/modulepreload-polyfill.B5Qt9EMX.js
- GET https://sr.sigmareading.com/assets/framework.DiD4vmm9.js
- GET https://sr.sigmareading.com/assets/notification-type.model.DFYapXPT.js
- GET https://sr.sigmareading.com/assets/web.DfNmh0Hh.js
- GET https://sr.sigmareading.com/assets/base.BRTX-jCf.js
- GET https://sr.sigmareading.com/assets/web.CztvnfWI.js
- GET https://sr.sigmareading.com/assets/web.DNYMsHP8.js
- GET https://sr.sigmareading.com/assets/chinese-to-pinyin.26wglc57.js

**主要交互元素**：
| 类型 | 文本 | href/属性 |
|------|------|-----------|
| `ion-button` | 转换为拼音 |  |
| `ion-button` | 清空内容 |  |
| `button` | 1x |  |

**截图**：`runs/2026-04-22_10-40-29/screenshots/03-nav-zh-hans-chinese-to-pinyin.png`

---

### 13. 导航页面: / (/)

**位置**：底部导航 / 主菜单
**入口**：点击导航链接 /

**功能描述**：
- URL: https://sr.sigmareading.com/
- 页面标题: 最全面的中文学习工具库 | 教学，如此简单 | 源于教育的深思，成就师生的智慧之选
- 交互元素: 65 个

**操作步骤**：
1. 在主页点击导航项
2. 路由跳转至 /
3. 页面加载完成

**相关 API**：
- GET https://sr.sigmareading.com/
- GET https://sr.sigmareading.com/services/tlc-ms-core/api/ip-info/from-cn
- GET https://sr.sigmareading.com/services/tlc-ms-core/api/ip-info/from-cn
- POST https://www.youtube.com/api/stats/qoe?fmt=244&cpn=tKhvFzPSx_fVmpWw&el=embedded&ns=yt&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C6258%2C16948%2C100702%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C9672%2C1366%2C18065%2C9404%2C23826%2C9500%2C1840%2C12605%2C5509%2C4360%2C11771%2C11470%2C8443%2C4717%2C21520%2C20690%2C14341%2C4271%2C1340%2C2754%2C24323%2C9654%2C3572%2C3472%2C3548%2C3425%2C1303%2C3881%2C3307%2C1259%2C1837%2C9514%2C8954%2C5220&cl=901361096&seq=1&docid=ZkANZ22eI4I&ei=06XoaaeUN6CYsfIPjbrogQ8&event=streamingstats&plid=AAZQCixU9Uxq40ba&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&vps=0.000:N,0.021:B,0.314:B,0.314:B&ctmp=dttg:t.0;dtt.1;gl.0&cat=streaming&cmt=0.021:0.000,0.314:0.000&vfs=0.314:244:244::r:sms.0&view=0.314:896:504&bwe=0.314:602931&bat=0.314:1:1&vis=0.314:0&bh=0.314:0.000&qclc=ChB0S2h2RnpQU3hfZlZtcFd3EAE
- POST https://www.youtube.com/api/stats/qoe?fmt=134&cpn=zdy1ZKD3FL9pvByv&el=embedded&ns=yt&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C6255%2C16951%2C100702%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C9672%2C1366%2C18065%2C9404%2C23826%2C9500%2C1840%2C12605%2C5509%2C4360%2C11771%2C11470%2C8443%2C4717%2C21520%2C20690%2C14341%2C4271%2C1340%2C2754%2C24323%2C9654%2C3572%2C3472%2C3548%2C3425%2C1303%2C3881%2C3307%2C1259%2C1837%2C9514%2C8954%2C5220&cl=901361096&seq=1&docid=seUdU8vSdw4&ei=1KXoafiTGLHZsfIP-Irc0QU&event=streamingstats&plid=AAZQCixcWWZkDKT3&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&vps=0.000:N,0.017:B,0.306:B,0.306:B&ctmp=dttg:t.0;dtt.1;gl.0&cat=streaming&cmt=0.017:0.000,0.306:0.000&vfs=0.306:134:134::r:sms.0&view=0.306:896:504&bwe=0.306:602931&bat=0.306:1:1&vis=0.306:0&bh=0.306:0.000&qclc=ChB6ZHkxWktEM0ZMOXB2Qnl2EAE
- POST https://www.youtube.com/api/stats/playback?ns=yt&el=embedded&cpn=tKhvFzPSx_fVmpWw&ver=2&cmt=0.049&fmt=244&fs=0&rt=1.529&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=1553&cl=901361096&mos=1&volume=100&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&delay=4&hl=zh_CN&cr=US&len=146.441&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C6258%2C16948%2C100702%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C9672%2C1366%2C18065%2C9404%2C23826%2C9500%2C1840%2C12605%2C5509%2C4360%2C11771%2C11470%2C8443%2C4717%2C21520%2C20690%2C14341%2C4271%2C1340%2C2754%2C24323%2C9654%2C3572%2C3472%2C3548%2C3425%2C1303%2C3881%2C3307%2C1259%2C1837%2C9514%2C8954%2C5220&rtn=5&afmt=251&size=896%3A504&inview=0.48&muted=1&docid=ZkANZ22eI4I&ei=06XoaaeUN6CYsfIPjbrogQ8&plid=AAZQCixU9Uxq40ba&referrer=https%3A%2F%2Fwww.youtube.com%2Fembed%2FZkANZ22eI4I%3Fautoplay%3D1%26mute%3D1%26loop%3D1%26playlist%3DZkANZ22eI4I%26playsinline%3D1&list=TLGGYGlg9bwhpCEyMjA0MjAyNg&of=wbAUJoLFDaeeOSJrHXH1sg&vm=CAEQABgEOjJBSHFpSlRJUUEwNHc5ZEg5OFM5Q3N1ZWJzSjRzbHdQYi11NncxR2ZQWXBVNHRfQVF4QWJkQUxkcUFQS1Y4czF2TTFaWEpuTk54cnBvREhRaTVlMkRwakFKaTBrZkgxLUpYOWd2emUtdlY1SjV3d09LelV0RlJLWFNzTTd6c1pfck15bHA4OXlqNDNvRm1HUlVVVFcyZUNZXw
- POST https://www.youtube.com/api/stats/playback?ns=yt&el=embedded&cpn=zdy1ZKD3FL9pvByv&ver=2&cmt=0.049&fmt=134&fs=0&rt=1.378&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=1399&cl=901361096&mos=1&volume=100&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&delay=4&hl=zh_CN&cr=US&len=130.621&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C6255%2C16951%2C100702%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C9672%2C1366%2C18065%2C9404%2C23826%2C9500%2C1840%2C12605%2C5509%2C4360%2C11771%2C11470%2C8443%2C4717%2C21520%2C20690%2C14341%2C4271%2C1340%2C2754%2C24323%2C9654%2C3572%2C3472%2C3548%2C3425%2C1303%2C3881%2C3307%2C1259%2C1837%2C9514%2C8954%2C5220&rtn=7&afmt=251&size=896%3A504&inview=0&muted=1&docid=seUdU8vSdw4&ei=1KXoafiTGLHZsfIP-Irc0QU&plid=AAZQCixcWWZkDKT3&referrer=https%3A%2F%2Fwww.youtube.com%2Fembed%2FseUdU8vSdw4%3Fautoplay%3D1%26mute%3D1%26loop%3D1%26playlist%3DseUdU8vSdw4%26playsinline%3D1&list=TLGGdIX7ewxECRwyMjA0MjAyNg&of=w-jZTO3Zl_v4NNESeUIVjw&vm=CAQQARgCOjJBSHFpSlRLNmtPX0JwTWtLZDRRRkNIWDd5ZVBkc19UTFBIeG5NelBuejdPRmQ3X25vZ2JnQUxkcUFQTG5oaTUtQmkyVFZvaTZLNTNSTmdZU09yLVljLTlFaEdqaDkwNUdEOXNDWnhFWmQ5NDRyZEc3ODhOUzlLdktBdjVsS2dMWGlzTkJmZUFLY1pJMnE3S2cxSjhiQ2tXSmlkYw
- POST https://www.youtube.com/api/stats/atr?ns=yt&el=embedded&cpn=tKhvFzPSx_fVmpWw&ver=2&cmt=3.055&fmt=244&fs=0&rt=4.533&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=4557&cl=901361096&mos=1&volume=100&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&delay=4&hl=zh_CN&cr=US&len=146.441&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C6258%2C16948%2C100702%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C9672%2C1366%2C18065%2C9404%2C23826%2C9500%2C1840%2C12605%2C5509%2C4360%2C11771%2C11470%2C8443%2C4717%2C21520%2C20690%2C14341%2C4271%2C1340%2C2754%2C24323%2C9654%2C3572%2C3472%2C3548%2C3425%2C1303%2C3881%2C3307%2C1259%2C1837%2C9514%2C8954%2C5220&afmt=251&muted=1&docid=ZkANZ22eI4I&ei=06XoaaeUN6CYsfIPjbrogQ8&plid=AAZQCixU9Uxq40ba&vm=CAEQABgEOjJBSHFpSlRJUUEwNHc5ZEg5OFM5Q3N1ZWJzSjRzbHdQYi11NncxR2ZQWXBVNHRfQVF4QWJkQUxkcUFQS1Y4czF2TTFaWEpuTk54cnBvREhRaTVlMkRwakFKaTBrZkgxLUpYOWd2emUtdlY1SjV3d09LelV0RlJLWFNzTTd6c1pfck15bHA4OXlqNDNvRm1HUlVVVFcyZUNZXw
- POST https://www.youtube.com/api/stats/atr?ns=yt&el=embedded&cpn=zdy1ZKD3FL9pvByv&ver=2&cmt=3.055&fmt=134&fs=0&rt=4.382&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=4403&cl=901361096&mos=1&volume=100&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&delay=4&hl=zh_CN&cr=US&len=130.621&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C6255%2C16951%2C100702%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C9672%2C1366%2C18065%2C9404%2C23826%2C9500%2C1840%2C12605%2C5509%2C4360%2C11771%2C11470%2C8443%2C4717%2C21520%2C20690%2C14341%2C4271%2C1340%2C2754%2C24323%2C9654%2C3572%2C3472%2C3548%2C3425%2C1303%2C3881%2C3307%2C1259%2C1837%2C9514%2C8954%2C5220&afmt=251&muted=1&docid=seUdU8vSdw4&ei=1KXoafiTGLHZsfIP-Irc0QU&plid=AAZQCixcWWZkDKT3&vm=CAQQARgCOjJBSHFpSlRLNmtPX0JwTWtLZDRRRkNIWDd5ZVBkc19UTFBIeG5NelBuejdPRmQ3X25vZ2JnQUxkcUFQTG5oaTUtQmkyVFZvaTZLNTNSTmdZU09yLVljLTlFaEdqaDkwNUdEOXNDWnhFWmQ5NDRyZEc3ODhOUzlLdktBdjVsS2dMWGlzTkJmZUFLY1pJMnE3S2cxSjhiQ2tXSmlkYw
- POST https://www.youtube.com/api/stats/watchtime?ns=yt&el=embedded&cpn=tKhvFzPSx_fVmpWw&ver=2&cmt=3.528&fmt=244&fs=0&rt=5.007&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=5031&cl=901361096&state=playing&volume=100&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&delay=4&hl=zh_CN&cr=US&len=146.441&rtn=15&afmt=251&idpj=-7&ldpj=-34&rti=5&size=896%3A504&inview=0.48&st=0&et=3.528&muted=1&docid=ZkANZ22eI4I&ei=06XoaaeUN6CYsfIPjbrogQ8&plid=AAZQCixU9Uxq40ba&referrer=https%3A%2F%2Fwww.youtube.com%2Fembed%2FZkANZ22eI4I%3Fautoplay%3D1%26mute%3D1%26loop%3D1%26playlist%3DZkANZ22eI4I%26playsinline%3D1&list=TLGGYGlg9bwhpCEyMjA0MjAyNg&of=wbAUJoLFDaeeOSJrHXH1sg&vm=CAEQABgEOjJBSHFpSlRJUUEwNHc5ZEg5OFM5Q3N1ZWJzSjRzbHdQYi11NncxR2ZQWXBVNHRfQVF4QWJkQUxkcUFQS1Y4czF2TTFaWEpuTk54cnBvREhRaTVlMkRwakFKaTBrZkgxLUpYOWd2emUtdlY1SjV3d09LelV0RlJLWFNzTTd6c1pfck15bHA4OXlqNDNvRm1HUlVVVFcyZUNZXw

**主要交互元素**：
| 类型 | 文本 | href/属性 |
|------|------|-----------|
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
| `a` | 关于我们 | /zh-hans/about-us |
| `a` | 同乐中文学校 | https://www.tonglec.org |
| `a` | 简体中文 | /zh-hans/ |

**截图**：`runs/2026-04-22_10-40-29/screenshots/03-nav-.png`

---

### 14. 导航页面: home (/zh-hans/home)

**位置**：底部导航 / 主菜单
**入口**：点击导航链接 /zh-hans/home

**功能描述**：
- URL: https://sr.sigmareading.com/zh-hans/home
- 页面标题: ©2026 SReading v2.12.12 | 书单 刷新 | 文章
- 交互元素: 78 个

**操作步骤**：
1. 在主页点击导航项
2. 路由跳转至 /zh-hans/home
3. 页面加载完成

**相关 API**：
- GET https://sr.sigmareading.com/zh-hans/home
- POST https://www.youtube.com/api/stats/qoe?fmt=244&afmt=251&cpn=tKhvFzPSx_fVmpWw&el=embedded&ns=yt&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C6258%2C16948%2C100702%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C9672%2C1366%2C18065%2C9404%2C23826%2C9500%2C1840%2C12605%2C5509%2C4360%2C11771%2C11470%2C8443%2C4717%2C21520%2C20690%2C14341%2C4271%2C1340%2C2754%2C24323%2C9654%2C3572%2C3472%2C3548%2C3425%2C1303%2C3881%2C3307%2C1259%2C1837%2C9514%2C8954%2C5220&cl=901361096&seq=2&docid=ZkANZ22eI4I&ei=06XoaaeUN6CYsfIPjbrogQ8&event=streamingstats&plid=AAZQCixU9Uxq40ba&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&afs=0.318:251;CggKA2RyYxIBMQ::i:fl.-14.43;vg.0;nm.4;sms.0&ctmp=atrkchg:t.319;id.und;m.0&user_intent=0.01&bh=1.527:1.863,7.958:23.624&cmt=1.527:0.049,2.280:0.802,7.958:6.480&vps=1.527:PL,7.958:N&bwm=7.958:1554475:4.034&bwe=7.958:1482054&bat=7.958:1:1&df=7.958:4&qclc=ChB0S2h2RnpQU3hfZlZtcFd3EAI
- POST https://www.youtube.com/api/stats/watchtime?ns=yt&el=embedded&cpn=tKhvFzPSx_fVmpWw&ver=2&cmt=6.48&fmt=244&fs=0&rt=7.959&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=827&cl=901361096&state=paused&volume=100&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&final=1&delay=4&hl=zh_CN&cr=US&len=146.441&afmt=251&idpj=-7&ldpj=-34&dtm=1&rti=15&size=896%3A504&inview=0.48&st=3.528&et=6.48&muted=1&docid=ZkANZ22eI4I&ei=06XoaaeUN6CYsfIPjbrogQ8&plid=AAZQCixU9Uxq40ba&referrer=https%3A%2F%2Fwww.youtube.com%2Fembed%2FZkANZ22eI4I%3Fautoplay%3D1%26mute%3D1%26loop%3D1%26playlist%3DZkANZ22eI4I%26playsinline%3D1&list=TLGGYGlg9bwhpCEyMjA0MjAyNg&of=wbAUJoLFDaeeOSJrHXH1sg&vm=CAEQABgEOjJBSHFpSlRJUUEwNHc5ZEg5OFM5Q3N1ZWJzSjRzbHdQYi11NncxR2ZQWXBVNHRfQVF4QWJkQUxkcUFQS1Y4czF2TTFaWEpuTk54cnBvREhRaTVlMkRwakFKaTBrZkgxLUpYOWd2emUtdlY1SjV3d09LelV0RlJLWFNzTTd6c1pfck15bHA4OXlqNDNvRm1HUlVVVFcyZUNZXw
- POST https://www.youtube.com/api/stats/qoe?fmt=134&afmt=251&cpn=zdy1ZKD3FL9pvByv&el=embedded&ns=yt&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C6255%2C16951%2C100702%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C9672%2C1366%2C18065%2C9404%2C23826%2C9500%2C1840%2C12605%2C5509%2C4360%2C11771%2C11470%2C8443%2C4717%2C21520%2C20690%2C14341%2C4271%2C1340%2C2754%2C24323%2C9654%2C3572%2C3472%2C3548%2C3425%2C1303%2C3881%2C3307%2C1259%2C1837%2C9514%2C8954%2C5220&cl=901361096&seq=2&docid=seUdU8vSdw4&ei=1KXoafiTGLHZsfIP-Irc0QU&event=streamingstats&plid=AAZQCixcWWZkDKT3&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&afs=0.310:251::i:fl.-18.63;vg.0;nm.4;sms.0&ctmp=atrkchg:t.311;id.und;m.0&user_intent=0.008&bh=1.377:2.440,7.467:23.392&cmt=1.377:0.049,2.130:0.803,7.467:6.141&vps=1.377:PL,7.467:N&bwm=7.467:2308095:4.484&bwe=7.467:1511609&bat=7.467:1:1&df=7.467:0&qclc=ChB6ZHkxWktEM0ZMOXB2Qnl2EAI
- POST https://www.youtube.com/api/stats/watchtime?ns=yt&el=embedded&cpn=zdy1ZKD3FL9pvByv&ver=2&cmt=6.141&fmt=134&fs=0&rt=7.469&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=7490&cl=901361096&state=paused&volume=100&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&final=1&delay=4&hl=zh_CN&cr=US&len=130.621&afmt=251&idpj=-5&ldpj=-1&rti=17&size=896%3A504&inview=0&st=5.678&et=6.141&muted=1&docid=seUdU8vSdw4&ei=1KXoafiTGLHZsfIP-Irc0QU&plid=AAZQCixcWWZkDKT3&referrer=https%3A%2F%2Fwww.youtube.com%2Fembed%2FseUdU8vSdw4%3Fautoplay%3D1%26mute%3D1%26loop%3D1%26playlist%3DseUdU8vSdw4%26playsinline%3D1&list=TLGGdIX7ewxECRwyMjA0MjAyNg&of=w-jZTO3Zl_v4NNESeUIVjw&vm=CAQQARgCOjJBSHFpSlRLNmtPX0JwTWtLZDRRRkNIWDd5ZVBkc19UTFBIeG5NelBuejdPRmQ3X25vZ2JnQUxkcUFQTG5oaTUtQmkyVFZvaTZLNTNSTmdZU09yLVljLTlFaEdqaDkwNUdEOXNDWnhFWmQ5NDRyZEc3ODhOUzlLdktBdjVsS2dMWGlzTkJmZUFLY1pJMnE3S2cxSjhiQ2tXSmlkYw
- GET https://sr.sigmareading.com/assets/webapp.BovLx_dB.js
- GET https://sr.sigmareading.com/assets/modulepreload-polyfill.B5Qt9EMX.js
- GET https://sr.sigmareading.com/assets/framework.DiD4vmm9.js
- GET https://sr.sigmareading.com/assets/notification-type.model.DFYapXPT.js
- GET https://sr.sigmareading.com/assets/web.DfNmh0Hh.js

**主要交互元素**：
| 类型 | 文本 | href/属性 |
|------|------|-----------|
| `ion-button` | 注册 |  |
| `ion-button` | 登录 |  |
| `a` | 教师账户免费 | /services/sr-ms-core/redirect-teacher-portal |
| `ion-button` | 教师账户 |  |
| `a` | 查看更多 | /zh-hans/playlist |
| `a` | 《三国演义》青少版242023-10-26 | /zh-hans/playlist-display/6539da63ca06cb10e16f58ef |
| `a` | 《秘密花园》362023-10-26 | /zh-hans/playlist-display/653a1734d448f0607b7aa574 |
| `a` | 《格林童话》32023-10-26 | /zh-hans/playlist-display/6539d819ca06cb10e16f58e9 |
| `a` | 《小王子》282023-10-26 | /zh-hans/playlist-display/6539d88eca06cb10e16f58ea |
| `a` | 查看更多 | /zh-hans/reading |
| `a` | 鲤鱼跳龙门同乐中文远古时期，尧帝命令大禹治理洪水。大禹为了彻底解决黄河水患，组织大量劳力在龙门山凿出 | /zh-hans/reading-display/63ec90d4e328e6231bb8b4a2 |
| `a` | 提供者 思和 | /zh-hans/personal-data/590ea45f-04ee-4f24-b1d9-f3fd38e472aa |
| `a` | 鲊蓣碴哕变崴蒸强鹮申蜒铷熠汝遒辊不考创邮芪仗礼李岍讳羽矢2024-11-06提供者 行行行买买买 3 | /zh-hans/reading-display/672b0940b829737eb3f6b047 |
| `a` | 提供者 行行行买买买 | /zh-hans/personal-data/4c973896-5761-41fc-8217-07c5d13a004b |
| `a` | 鱼我所欲也孟子及其弟子〔先秦〕"鱼，我所欲也；熊掌，亦我所欲也。二者不可得兼，舍鱼而取熊掌者也。生， | /zh-hans/reading-display/665d8eb50a4c9154eec20685 |

**截图**：`runs/2026-04-22_10-40-29/screenshots/03-nav-zh-hans-home.png`

---

### 15. 导航页面: redirect-teacher-portal (/services/sr-ms-core/redirect-teacher-portal)

**位置**：底部导航 / 主菜单
**入口**：点击导航链接 /services/sr-ms-core/redirect-teacher-portal

**功能描述**：
- URL: https://sr.sigmareading.com/teacher-portal/home
- 页面标题: 
- 交互元素: 21 个

**操作步骤**：
1. 在主页点击导航项
2. 路由跳转至 /services/sr-ms-core/redirect-teacher-portal
3. 页面加载完成

**相关 API**：
- GET https://sr.sigmareading.com/services/sr-ms-core/redirect-teacher-portal
- GET https://sr.sigmareading.com/teacher-portal/
- POST https://www.youtube.com/api/stats/qoe?fmt=134&afmt=251&cpn=tt9xNRrL72o96FWP&el=embedded&ns=yt&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C100702%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C9672%2C1366%2C18065%2C9404%2C23826%2C9500%2C1840%2C12605%2C5509%2C4360%2C11771%2C11470%2C8443%2C4717%2C21520%2C20690%2C14341%2C4271%2C1340%2C2754%2C24323%2C9654%2C3572%2C3472%2C3548%2C3425%2C1303%2C3881%2C3307%2C1259%2C1837%2C9514%2C8954%2C5220&cl=901361096&seq=2&docid=hTMRb6YECEc&ei=3KXoaZbqFZj6sfIPp9qS2Qg&event=streamingstats&plid=AAZQCizV36gSWPv_&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&afs=0.295:251::i:fl.-17.74;vg.0;nm.4;sms.0&ctmp=atrkchg:t.296;id.und;m.0&user_intent=0.006&bh=1.304:1.133,4.217:16.690&cmt=1.304:0.019,2.055:0.755,4.217:2.917&vps=1.304:PL,4.217:N&bwm=4.217:1231335:4.086&bwe=4.217:944680&bat=4.217:1:1&df=4.217:0&qclc=ChB0dDl4TlJyTDcybzk2RldQEAI
- POST https://www.youtube.com/api/stats/watchtime?ns=yt&el=embedded&cpn=tt9xNRrL72o96FWP&ver=2&cmt=2.917&fmt=134&fs=0&rt=4.219&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=4242&cl=901361096&state=paused&volume=100&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&final=1&delay=4&hl=zh_CN&cr=US&len=48.381&afmt=251&idpj=-2&ldpj=-38&rti=10&size=323%3A226&inview=1&st=0&et=2.917&muted=1&docid=hTMRb6YECEc&ei=3KXoaZbqFZj6sfIPp9qS2Qg&plid=AAZQCizV36gSWPv_&referrer=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhTMRb6YECEc%3Fsi%3DUd-M1QV3QJJjWCWS%26enablejsapi%3D1%26autoplay%3D1%26mute%3D1%26rel%3D0%26loop%3D1%26playlist%3DhTMRb6YECEc&list=TLGGN23J0PoR3YsyMjA0MjAyNg&of=wbAUJoLFDaeeOSJrHXH1sg&vm=CAEQABgEOjJBSHFpSlRMa1gycThJbEhVLWVQWVhqR2hwWFFobVhzWnhmV29IZW9lWHU4aFpreVFsQWJkQUxkcUFQSWZlT3RmZ0hyd3dSYTlGQzdrM1lydGpHVmpJTkZiazdNMW16RGd4QzhYRGhsX0szeWwzZjZyLVRYTG94MS0wU0JoMjQybEItdUV5bWxIR0c5b0tjRnpqOFpjWUlSbg
- POST https://www.youtube.com/api/stats/atr?ns=yt&el=embedded&cpn=tt9xNRrL72o96FWP&ver=2&cmt=2.917&fmt=134&fs=0&rt=4.224&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=4247&cl=901361096&mos=1&volume=100&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&delay=4&hl=zh_CN&cr=US&len=48.381&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C100702%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C9672%2C1366%2C18065%2C9404%2C23826%2C9500%2C1840%2C12605%2C5509%2C4360%2C11771%2C11470%2C8443%2C4717%2C21520%2C20690%2C14341%2C4271%2C1340%2C2754%2C24323%2C9654%2C3572%2C3472%2C3548%2C3425%2C1303%2C3881%2C3307%2C1259%2C1837%2C9514%2C8954%2C5220&afmt=251&muted=1&docid=hTMRb6YECEc&ei=3KXoaZbqFZj6sfIPp9qS2Qg&plid=AAZQCizV36gSWPv_&vm=CAEQABgEOjJBSHFpSlRMa1gycThJbEhVLWVQWVhqR2hwWFFobVhzWnhmV29IZW9lWHU4aFpreVFsQWJkQUxkcUFQSWZlT3RmZ0hyd3dSYTlGQzdrM1lydGpHVmpJTkZiazdNMW16RGd4QzhYRGhsX0szeWwzZjZyLVRYTG94MS0wU0JoMjQybEItdUV5bWxIR0c5b0tjRnpqOFpjWUlSbg
- GET https://sr.sigmareading.com/assets/teacherPortal.ClFSvzab.js
- GET https://sr.sigmareading.com/assets/modulepreload-polyfill.B5Qt9EMX.js
- GET https://sr.sigmareading.com/assets/framework.DiD4vmm9.js
- GET https://sr.sigmareading.com/assets/el-radio.DBEC2eI5.js
- GET https://sr.sigmareading.com/assets/token.DI9FKtlJ.js

**主要交互元素**：
| 类型 | 文本 | href/属性 |
|------|------|-----------|
| `a` | SReadingfor Teacher | /teacher-portal/home |
| `a` | 班级 | /teacher-portal/class-selector |
| `a` | 课件 | /teacher-portal/courseware-management |
| `a` | 测验 | /teacher-portal/exam-management |
| `a` | 订阅计划 | /teacher-portal/subscription-plan |
| `a` | 教育合作 | /teacher-portal/education-partnership |
| `button` | 登录 |  |
| `button` | 登录 | button |
| `button` | 去登录 | button |

**截图**：`runs/2026-04-22_10-40-29/screenshots/03-nav-services-sr-ms-core-redirect-teacher-portal.png`

---

### 16. 导航页面: 6539da63ca06cb10e16f58ef (/zh-hans/playlist-display/6539da63ca06cb10e16f58ef)

**位置**：底部导航 / 主菜单
**入口**：点击导航链接 /zh-hans/playlist-display/6539da63ca06cb10e16f58ef

**功能描述**：
- URL: https://sr.sigmareading.com/zh-hans/playlist-display/6539da63ca06cb10e16f58ef
- 页面标题: ©2026 SReading v2.12.12 | 《三国演义》青少版创建人 晴天 小猪🐷 | 不想横行的螃蟹
- 交互元素: 94 个

**操作步骤**：
1. 在主页点击导航项
2. 路由跳转至 /zh-hans/playlist-display/6539da63ca06cb10e16f58ef
3. 页面加载完成

**相关 API**：
- GET https://sr.sigmareading.com/zh-hans/playlist-display/6539da63ca06cb10e16f58ef
- GET https://sr.sigmareading.com/assets/webapp.BovLx_dB.js
- GET https://sr.sigmareading.com/assets/modulepreload-polyfill.B5Qt9EMX.js
- GET https://sr.sigmareading.com/assets/framework.DiD4vmm9.js
- GET https://sr.sigmareading.com/assets/notification-type.model.DFYapXPT.js
- GET https://sr.sigmareading.com/assets/web.DfNmh0Hh.js
- GET https://sr.sigmareading.com/assets/base.BRTX-jCf.js
- GET https://sr.sigmareading.com/assets/web.CztvnfWI.js
- GET https://sr.sigmareading.com/services/sr-ms-core/api/account
- GET https://sr.sigmareading.com/assets/web.BgmlwXlQ.js

**主要交互元素**：
| 类型 | 文本 | href/属性 |
|------|------|-----------|
| `a` | 创建人 晴天 小猪🐷 | /zh-hans/personal-data/a72bb0b6-d22e-4ea2-bd6d-ce58cbe5c83a |
| `a` | 不想横行的螃蟹同乐中文大海的浅滩上生活着一只很有主见的小螃蟹，它经常到大海里游弋、在海滩上漫步，观察 | /zh-hans/reading-display/63e1d26c4a35b35902a624fa |
| `a` | 提供者 admin sreading | /zh-hans/personal-data/6455918ee75e891f8c32fb6c |
| `a` | 道德经 第01章老子第一章 道可道，非常道； 名可名，非常名。 无，名天地之始； 有，名万物之母。  | /zh-hans/reading-display/63e1eb794a35b35902a62503 |
| `a` | 提供者 admin sreading | /zh-hans/personal-data/6455918ee75e891f8c32fb6c |
| `a` | 原来是这样作文成功，如旭日喷薄；成功，似风拂杨柳；成功，如小桥流水；成功，若大江东去……在我的词典里 | /zh-hans/reading-display/63dfe976e53563401e345863 |
| `a` | 提供者 李好 | /zh-hans/personal-data/559334e0-f228-407b-865f-94534a808b7b |
| `a` | 骑驴找驴同乐中文从前有个叫李二的人，他想做生意挣大钱，就拿了一笔钱，高高兴兴地来到了集市上。他见到一 | /zh-hans/reading-display/63dfea89e53563401e345866 |
| `a` | 提供者 Daniel Li | /zh-hans/personal-data/6bba9197-f8db-469e-93f1-9c4ba035136b |
| `a` | 萤火虫找朋友孙幼军夏天的晚上，萤火虫提着黄色小灯笼， 在草丛里飞来飞去。他在干吗呢？他在找朋友。是啊 | /zh-hans/reading-display/63e150b3412fab66b243660a |
| `a` | 提供者 Daniel Li | /zh-hans/personal-data/6bba9197-f8db-469e-93f1-9c4ba035136b |
| `a` | 为什么长颈鹿的脖子特别长同乐中文或许， 就你曾经在动物园看见过相貌奇特、体态优雅的长颈鹿。事实上，非 | /zh-hans/reading-display/63e1d20e4a35b35902a624f4 |
| `a` | 提供者 admin sreading | /zh-hans/personal-data/6455918ee75e891f8c32fb6c |
| `a` | 李密牛角挂书同乐中文前往缑山的路上，一头老牛缓慢地前行，牛背上铺着草编的垫子。一位少年，正专心致志地 | /zh-hans/reading-display/63e1d26b4a35b35902a624f5 |
| `a` | 提供者 admin sreading | /zh-hans/personal-data/6455918ee75e891f8c32fb6c |

**截图**：`runs/2026-04-22_10-40-29/screenshots/03-nav-zh-hans-playlist-display-6539da63ca06cb10e16f58ef.png`

---

### 17. 导航页面: 653a1734d448f0607b7aa574 (/zh-hans/playlist-display/653a1734d448f0607b7aa574)

**位置**：底部导航 / 主菜单
**入口**：点击导航链接 /zh-hans/playlist-display/653a1734d448f0607b7aa574

**功能描述**：
- URL: https://sr.sigmareading.com/zh-hans/playlist-display/653a1734d448f0607b7aa574
- 页面标题: ©2026 SReading v2.12.12 | 《秘密花园》创建人 晴天 小猪🐷 | 原来是这样
- 交互元素: 94 个

**操作步骤**：
1. 在主页点击导航项
2. 路由跳转至 /zh-hans/playlist-display/653a1734d448f0607b7aa574
3. 页面加载完成

**相关 API**：
- GET https://sr.sigmareading.com/zh-hans/playlist-display/653a1734d448f0607b7aa574
- GET https://sr.sigmareading.com/assets/webapp.BovLx_dB.js
- GET https://sr.sigmareading.com/assets/modulepreload-polyfill.B5Qt9EMX.js
- GET https://sr.sigmareading.com/assets/framework.DiD4vmm9.js
- GET https://sr.sigmareading.com/assets/notification-type.model.DFYapXPT.js
- GET https://sr.sigmareading.com/assets/web.DfNmh0Hh.js
- GET https://sr.sigmareading.com/assets/base.BRTX-jCf.js
- GET https://sr.sigmareading.com/assets/web.CztvnfWI.js
- GET https://sr.sigmareading.com/services/sr-ms-core/api/account
- GET https://sr.sigmareading.com/assets/web.BgmlwXlQ.js

**主要交互元素**：
| 类型 | 文本 | href/属性 |
|------|------|-----------|
| `a` | 创建人 晴天 小猪🐷 | /zh-hans/personal-data/a72bb0b6-d22e-4ea2-bd6d-ce58cbe5c83a |
| `a` | 原来是这样作文成功，如旭日喷薄；成功，似风拂杨柳；成功，如小桥流水；成功，若大江东去……在我的词典里 | /zh-hans/reading-display/63dfe976e53563401e345863 |
| `a` | 提供者 李好 | /zh-hans/personal-data/559334e0-f228-407b-865f-94534a808b7b |
| `a` | 骑驴找驴同乐中文从前有个叫李二的人，他想做生意挣大钱，就拿了一笔钱，高高兴兴地来到了集市上。他见到一 | /zh-hans/reading-display/63dfea89e53563401e345866 |
| `a` | 提供者 Daniel Li | /zh-hans/personal-data/6bba9197-f8db-469e-93f1-9c4ba035136b |
| `a` | 萤火虫找朋友孙幼军夏天的晚上，萤火虫提着黄色小灯笼， 在草丛里飞来飞去。他在干吗呢？他在找朋友。是啊 | /zh-hans/reading-display/63e150b3412fab66b243660a |
| `a` | 提供者 Daniel Li | /zh-hans/personal-data/6bba9197-f8db-469e-93f1-9c4ba035136b |
| `a` | 为什么长颈鹿的脖子特别长同乐中文或许， 就你曾经在动物园看见过相貌奇特、体态优雅的长颈鹿。事实上，非 | /zh-hans/reading-display/63e1d20e4a35b35902a624f4 |
| `a` | 提供者 admin sreading | /zh-hans/personal-data/6455918ee75e891f8c32fb6c |
| `a` | 李密牛角挂书同乐中文前往缑山的路上，一头老牛缓慢地前行，牛背上铺着草编的垫子。一位少年，正专心致志地 | /zh-hans/reading-display/63e1d26b4a35b35902a624f5 |
| `a` | 提供者 admin sreading | /zh-hans/personal-data/6455918ee75e891f8c32fb6c |
| `a` | 北极熊不怕冷同乐中文北极，是世界上最寒冷的地区之一。这里虽然是一片浩瀚海洋，但由于气温极低，海水常年 | /zh-hans/reading-display/63e1d26b4a35b35902a624f7 |
| `a` | 提供者 admin sreading | /zh-hans/personal-data/6455918ee75e891f8c32fb6c |
| `a` | 不想横行的螃蟹同乐中文大海的浅滩上生活着一只很有主见的小螃蟹，它经常到大海里游弋、在海滩上漫步，观察 | /zh-hans/reading-display/63e1d26c4a35b35902a624fa |
| `a` | 提供者 admin sreading | /zh-hans/personal-data/6455918ee75e891f8c32fb6c |

**截图**：`runs/2026-04-22_10-40-29/screenshots/03-nav-zh-hans-playlist-display-653a1734d448f0607b7aa574.png`

---

### 18. 导航页面: 6539d819ca06cb10e16f58e9 (/zh-hans/playlist-display/6539d819ca06cb10e16f58e9)

**位置**：底部导航 / 主菜单
**入口**：点击导航链接 /zh-hans/playlist-display/6539d819ca06cb10e16f58e9

**功能描述**：
- URL: https://sr.sigmareading.com/zh-hans/playlist-display/6539d819ca06cb10e16f58e9
- 页面标题: ©2026 SReading v2.12.12 | 《格林童话》创建人 晴天 小猪🐷 | 中庸名句 03-05
- 交互元素: 62 个

**操作步骤**：
1. 在主页点击导航项
2. 路由跳转至 /zh-hans/playlist-display/6539d819ca06cb10e16f58e9
3. 页面加载完成

**相关 API**：
- GET https://sr.sigmareading.com/zh-hans/playlist-display/6539d819ca06cb10e16f58e9
- GET https://sr.sigmareading.com/assets/webapp.BovLx_dB.js
- GET https://sr.sigmareading.com/assets/modulepreload-polyfill.B5Qt9EMX.js
- GET https://sr.sigmareading.com/assets/framework.DiD4vmm9.js
- GET https://sr.sigmareading.com/assets/notification-type.model.DFYapXPT.js
- GET https://sr.sigmareading.com/assets/web.DfNmh0Hh.js
- GET https://sr.sigmareading.com/assets/base.BRTX-jCf.js
- GET https://sr.sigmareading.com/assets/web.CztvnfWI.js
- GET https://sr.sigmareading.com/services/sr-ms-core/api/account
- GET https://sr.sigmareading.com/assets/web.BgmlwXlQ.js

**主要交互元素**：
| 类型 | 文本 | href/属性 |
|------|------|-----------|
| `a` | 创建人 晴天 小猪🐷 | /zh-hans/personal-data/a72bb0b6-d22e-4ea2-bd6d-ce58cbe5c83a |
| `a` | 中庸名句 03-05子思03 喜怒哀乐之未发,谓之中； 发而皆中节，谓之和。 中也者，天下之大本也； | /zh-hans/reading-display/63e1ec7e4a35b35902a62509 |
| `a` | 提供者 admin sreading | /zh-hans/personal-data/6455918ee75e891f8c32fb6c |
| `a` | 中庸名句 06-09子思06 上不怨天，下不尤人。 故君子居易以俟命， 小人行险以侥幸。 子曰：“射 | /zh-hans/reading-display/63e1ec7e4a35b35902a6250a |
| `a` | 提供者 admin sreading | /zh-hans/personal-data/6455918ee75e891f8c32fb6c |
| `a` | 论语名句 001-003孔子001 子曰： “学而时习之，不亦说【悦】乎？ 有朋自远方来，不亦乐乎？ | /zh-hans/reading-display/63e1ec8b4a35b35902a6250d |
| `a` | 提供者 admin sreading | /zh-hans/personal-data/6455918ee75e891f8c32fb6c |
| `button` | 1x |  |

**截图**：`runs/2026-04-22_10-40-29/screenshots/03-nav-zh-hans-playlist-display-6539d819ca06cb10e16f58e9.png`

---

### 19. 导航页面: 6539d88eca06cb10e16f58ea (/zh-hans/playlist-display/6539d88eca06cb10e16f58ea)

**位置**：底部导航 / 主菜单
**入口**：点击导航链接 /zh-hans/playlist-display/6539d88eca06cb10e16f58ea

**功能描述**：
- URL: https://sr.sigmareading.com/zh-hans/playlist-display/6539d88eca06cb10e16f58ea
- 页面标题: ©2026 SReading v2.12.12 | 《小王子》创建人 晴天 小猪🐷 | 为什么长颈鹿的脖子特别长
- 交互元素: 94 个

**操作步骤**：
1. 在主页点击导航项
2. 路由跳转至 /zh-hans/playlist-display/6539d88eca06cb10e16f58ea
3. 页面加载完成

**相关 API**：
- GET https://sr.sigmareading.com/zh-hans/playlist-display/6539d88eca06cb10e16f58ea
- GET https://sr.sigmareading.com/assets/webapp.BovLx_dB.js
- GET https://sr.sigmareading.com/assets/modulepreload-polyfill.B5Qt9EMX.js
- GET https://sr.sigmareading.com/assets/framework.DiD4vmm9.js
- GET https://sr.sigmareading.com/assets/notification-type.model.DFYapXPT.js
- GET https://sr.sigmareading.com/assets/web.DfNmh0Hh.js
- GET https://sr.sigmareading.com/assets/base.BRTX-jCf.js
- GET https://sr.sigmareading.com/assets/web.CztvnfWI.js
- GET https://sr.sigmareading.com/services/sr-ms-core/api/account
- GET https://sr.sigmareading.com/assets/web.BgmlwXlQ.js

**主要交互元素**：
| 类型 | 文本 | href/属性 |
|------|------|-----------|
| `a` | 创建人 晴天 小猪🐷 | /zh-hans/personal-data/a72bb0b6-d22e-4ea2-bd6d-ce58cbe5c83a |
| `a` | 为什么长颈鹿的脖子特别长同乐中文或许， 就你曾经在动物园看见过相貌奇特、体态优雅的长颈鹿。事实上，非 | /zh-hans/reading-display/63e1d20e4a35b35902a624f4 |
| `a` | 提供者 admin sreading | /zh-hans/personal-data/6455918ee75e891f8c32fb6c |
| `a` | 李密牛角挂书同乐中文前往缑山的路上，一头老牛缓慢地前行，牛背上铺着草编的垫子。一位少年，正专心致志地 | /zh-hans/reading-display/63e1d26b4a35b35902a624f5 |
| `a` | 提供者 admin sreading | /zh-hans/personal-data/6455918ee75e891f8c32fb6c |
| `a` | 北极熊不怕冷同乐中文北极，是世界上最寒冷的地区之一。这里虽然是一片浩瀚海洋，但由于气温极低，海水常年 | /zh-hans/reading-display/63e1d26b4a35b35902a624f7 |
| `a` | 提供者 admin sreading | /zh-hans/personal-data/6455918ee75e891f8c32fb6c |
| `a` | 原来是这样作文成功，如旭日喷薄；成功，似风拂杨柳；成功，如小桥流水；成功，若大江东去……在我的词典里 | /zh-hans/reading-display/63dfe976e53563401e345863 |
| `a` | 提供者 李好 | /zh-hans/personal-data/559334e0-f228-407b-865f-94534a808b7b |
| `a` | 骑驴找驴同乐中文从前有个叫李二的人，他想做生意挣大钱，就拿了一笔钱，高高兴兴地来到了集市上。他见到一 | /zh-hans/reading-display/63dfea89e53563401e345866 |
| `a` | 提供者 Daniel Li | /zh-hans/personal-data/6bba9197-f8db-469e-93f1-9c4ba035136b |
| `a` | 萤火虫找朋友孙幼军夏天的晚上，萤火虫提着黄色小灯笼， 在草丛里飞来飞去。他在干吗呢？他在找朋友。是啊 | /zh-hans/reading-display/63e150b3412fab66b243660a |
| `a` | 提供者 Daniel Li | /zh-hans/personal-data/6bba9197-f8db-469e-93f1-9c4ba035136b |
| `a` | 不想横行的螃蟹同乐中文大海的浅滩上生活着一只很有主见的小螃蟹，它经常到大海里游弋、在海滩上漫步，观察 | /zh-hans/reading-display/63e1d26c4a35b35902a624fa |
| `a` | 提供者 admin sreading | /zh-hans/personal-data/6455918ee75e891f8c32fb6c |

**截图**：`runs/2026-04-22_10-40-29/screenshots/03-nav-zh-hans-playlist-display-6539d88eca06cb10e16f58ea.png`

---

### 20. 导航页面: 63ec90d4e328e6231bb8b4a2 (/zh-hans/reading-display/63ec90d4e328e6231bb8b4a2)

**位置**：底部导航 / 主菜单
**入口**：点击导航链接 /zh-hans/reading-display/63ec90d4e328e6231bb8b4a2

**功能描述**：
- URL: https://sr.sigmareading.com/zh-hans/reading-display/63ec90d4e328e6231bb8b4a2
- 页面标题: ©2026 SReading v2.12.12 | 鲤鱼跳龙门
- 交互元素: 59 个

**操作步骤**：
1. 在主页点击导航项
2. 路由跳转至 /zh-hans/reading-display/63ec90d4e328e6231bb8b4a2
3. 页面加载完成

**相关 API**：
- GET https://sr.sigmareading.com/zh-hans/reading-display/63ec90d4e328e6231bb8b4a2
- GET https://sr.sigmareading.com/assets/webapp.BovLx_dB.js
- GET https://sr.sigmareading.com/assets/modulepreload-polyfill.B5Qt9EMX.js
- GET https://sr.sigmareading.com/assets/framework.DiD4vmm9.js
- GET https://sr.sigmareading.com/assets/notification-type.model.DFYapXPT.js
- GET https://sr.sigmareading.com/assets/web.DfNmh0Hh.js
- GET https://sr.sigmareading.com/assets/base.BRTX-jCf.js
- GET https://sr.sigmareading.com/assets/web.CztvnfWI.js
- GET https://sr.sigmareading.com/services/sr-ms-core/api/account
- GET https://sr.sigmareading.com/assets/web.BgmlwXlQ.js

**主要交互元素**：
| 类型 | 文本 | href/属性 |
|------|------|-----------|
| `a` | 同乐中文 | https://www.tonglec.org/ |
| `a` | 提供者 思和 | /zh-hans/personal-data/590ea45f-04ee-4f24-b1d9-f3fd38e472aa |
| `button` | 1x |  |

**截图**：`runs/2026-04-22_10-40-29/screenshots/03-nav-zh-hans-reading-display-63ec90d4e328e6231bb8b4a2.png`

---

### 21. 导航页面: 590ea45f-04ee-4f24-b1d9-f3fd38e472aa (/zh-hans/personal-data/590ea45f-04ee-4f24-b1d9-f3fd38e472aa)

**位置**：底部导航 / 主菜单
**入口**：点击导航链接 /zh-hans/personal-data/590ea45f-04ee-4f24-b1d9-f3fd38e472aa

**功能描述**：
- URL: https://sr.sigmareading.com/zh-hans/unauthorized
- 页面标题: 
- 交互元素: 7 个

**操作步骤**：
1. 在主页点击导航项
2. 路由跳转至 /zh-hans/personal-data/590ea45f-04ee-4f24-b1d9-f3fd38e472aa
3. 页面加载完成

**相关 API**：
- GET https://sr.sigmareading.com/zh-hans/personal-data/590ea45f-04ee-4f24-b1d9-f3fd38e472aa
- GET https://sr.sigmareading.com/assets/webapp.BovLx_dB.js
- GET https://sr.sigmareading.com/assets/modulepreload-polyfill.B5Qt9EMX.js
- GET https://sr.sigmareading.com/assets/framework.DiD4vmm9.js
- GET https://sr.sigmareading.com/assets/notification-type.model.DFYapXPT.js
- GET https://sr.sigmareading.com/assets/web.DfNmh0Hh.js
- GET https://sr.sigmareading.com/assets/base.BRTX-jCf.js
- GET https://sr.sigmareading.com/assets/web.CztvnfWI.js
- GET https://sr.sigmareading.com/assets/web.DNYMsHP8.js
- GET https://sr.sigmareading.com/services/sr-ms-core/api/account

**主要交互元素**：
| 类型 | 文本 | href/属性 |
|------|------|-----------|
| `button` | 登录 |  |
| `button` | 首页 |  |

**截图**：`runs/2026-04-22_10-40-29/screenshots/03-nav-zh-hans-personal-data-590ea45f-04ee-4f24-b1d9-f3fd38e472aa.png`

---

### 22. 路由探索: /zh-hans/login

**位置**：URL: /zh-hans/login
**入口**：直接访问 /zh-hans/login

**功能描述**：
- 最终 URL: https://sr.sigmareading.com/zh-hans/notfound
- 页面标题: 404
- 交互元素: 2 个

**操作步骤**：
1. 直接访问 https://sr.sigmareading.com/zh-hans/login
2. 页面加载结果: https://sr.sigmareading.com/zh-hans/notfound

**相关 API**：
- GET https://sr.sigmareading.com/zh-hans/login
- POST https://www.youtube.com/api/stats/qoe?fmt=134&afmt=251&cpn=dFy2mgOVm3KdL31g&el=embedded&ns=yt&fexp=v1%2C23848223%2C156421%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C6257%2C16949%2C35404%2C65298%2C15105%2C25059%2C4174%2C30446%2C13517%2C5189%2C21437%2C4571%2C5238%2C5800%2C1978%2C13109%2C2978%2C9404%2C23826%2C9500%2C1840%2C12605%2C9869%2C11771%2C1363%2C10107%2C13160%2C16831%2C4360%2C329%2C16768%2C3473%2C449%2C14341%2C4271%2C386%2C954%2C2754%2C12774%2C8150%2C743%2C461%2C2195%2C9655%2C3571%2C3472%2C2642%2C906%2C3425%2C1305%2C3879%2C2815%2C1751%2C1836%2C9158%2C357%2C8955%2C5219%2C1526&cl=901361096&seq=2&docid=hTMRb6YECEc&ei=96Xoab_YG8qYsfIPn67p2QI&event=streamingstats&plid=AAZQCi5zYc7SfuYR&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&afs=0.301:251::i:fl.-17.74;vg.0;nm.4;sms.0&ctmp=atrkchg:t.302;id.und;m.0&user_intent=0.007&bh=1.133:1.467,3.794:24.230&cmt=1.133:0.031,1.883:0.782,3.794:2.693&vps=1.133:PL,3.794:N&bwm=3.794:1474956:3.639&bwe=3.794:1075631&bat=3.794:1:1&df=3.794:0&qclc=ChBkRnkybWdPVm0zS2RMMzFnEAI
- POST https://www.youtube.com/api/stats/watchtime?ns=yt&el=embedded&cpn=dFy2mgOVm3KdL31g&ver=2&cmt=2.693&fmt=134&fs=0&rt=3.796&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=3815&cl=901361096&state=paused&volume=100&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&final=1&delay=4&hl=zh_CN&cr=US&len=48.381&afmt=251&idpj=-4&ldpj=-14&rti=8&size=270%3A224&inview=1&st=0&et=2.693&muted=1&docid=hTMRb6YECEc&ei=96Xoab_YG8qYsfIPn67p2QI&plid=AAZQCi5zYc7SfuYR&referrer=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhTMRb6YECEc%3Fsi%3DUd-M1QV3QJJjWCWS%26enablejsapi%3D1%26autoplay%3D1%26mute%3D1%26rel%3D0%26loop%3D1%26playlist%3DhTMRb6YECEc&list=TLGGN23J0PoR3YsyMjA0MjAyNg&of=wbAUJoLFDaeeOSJrHXH1sg&vm=CAEQABgEOjJBSHFpSlRMeHgxWXVETlEycExVQnhqZUxUckFQV0JYZW1vQTR2dGhlYk9ZVENYYnltd2JkQUxkcUFQSnlGR0xzdGpERFB0cTA2RzQ1WXJqRmpuanRKZ2pDOGstd2hjdDY0RnBrRTBTZ083a1YyVThKb05Ua21sdjR5NTJMRjFCMVc1SDFPM0EzVE1iRHVFLWxJUGlvdmVESA
- POST https://www.youtube.com/api/stats/atr?ns=yt&el=embedded&cpn=dFy2mgOVm3KdL31g&ver=2&cmt=2.693&fmt=134&fs=0&rt=3.801&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=3820&cl=901361096&mos=1&volume=100&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&delay=4&hl=zh_CN&cr=US&len=48.381&fexp=v1%2C23848223%2C156421%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C6257%2C16949%2C35404%2C65298%2C15105%2C25059%2C4174%2C30446%2C13517%2C5189%2C21437%2C4571%2C5238%2C5800%2C1978%2C13109%2C2978%2C9404%2C23826%2C9500%2C1840%2C12605%2C9869%2C11771%2C1363%2C10107%2C13160%2C16831%2C4360%2C329%2C16768%2C3473%2C449%2C14341%2C4271%2C386%2C954%2C2754%2C12774%2C8150%2C743%2C461%2C2195%2C9655%2C3571%2C3472%2C2642%2C906%2C3425%2C1305%2C3879%2C2815%2C1751%2C1836%2C9158%2C357%2C8955%2C5219%2C1526&afmt=251&muted=1&docid=hTMRb6YECEc&ei=96Xoab_YG8qYsfIPn67p2QI&plid=AAZQCi5zYc7SfuYR&vm=CAEQABgEOjJBSHFpSlRMeHgxWXVETlEycExVQnhqZUxUckFQV0JYZW1vQTR2dGhlYk9ZVENYYnltd2JkQUxkcUFQSnlGR0xzdGpERFB0cTA2RzQ1WXJqRmpuanRKZ2pDOGstd2hjdDY0RnBrRTBTZ083a1YyVThKb05Ua21sdjR5NTJMRjFCMVc1SDFPM0EzVE1iRHVFLWxJUGlvdmVESA
- GET https://sr.sigmareading.com/assets/webapp.BovLx_dB.js
- GET https://sr.sigmareading.com/assets/modulepreload-polyfill.B5Qt9EMX.js
- GET https://sr.sigmareading.com/assets/framework.DiD4vmm9.js
- GET https://sr.sigmareading.com/assets/notification-type.model.DFYapXPT.js
- GET https://sr.sigmareading.com/assets/web.DfNmh0Hh.js
- GET https://sr.sigmareading.com/assets/base.BRTX-jCf.js

**主要交互元素**：
| 类型 | 文本 | href/属性 |
|------|------|-----------|
| `button` | 首页 |  |

**截图**：`runs/2026-04-22_10-40-29/screenshots/04-route-zh-hans-login.png`

---

