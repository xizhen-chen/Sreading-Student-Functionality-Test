# SigmaReading 功能探索报告

> 生成时间：2026/4/22 18:36:24
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
- POST https://www.youtube.com/api/stats/qoe?fmt=134&cpn=ifp49ZTim4DDsfzO&el=embedded&ns=yt&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C6256%2C16950%2C100702%2C15105%2C25059%2C4174%2C30446%2C13517%2C5189%2C21437%2C4571%2C5236%2C5802%2C1977%2C16088%2C9404%2C23826%2C9500%2C1840%2C12605%2C9869%2C1645%2C2033%2C8093%2C1364%2C10106%2C13160%2C21192%2C187%2C141%2C10984%2C9706%2C14341%2C4271%2C388%2C952%2C2754%2C20922%2C1203%2C2198%2C8061%2C1593%2C3572%2C3472%2C2641%2C907%2C3425%2C1305%2C3879%2C4566%2C1837%2C2333%2C7181%2C5072%2C3883%2C5218%2C1331%2C195%2C3684%2C3254&cl=901361096&seq=1&docid=hTMRb6YECEc&ei=LKToacvvAtn7sfIPgpvzyQQ&event=streamingstats&plid=AAZQChMRcW5dk3iB&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&vps=0.000:N,0.027:B,0.334:B,0.334:B&ctmp=dttg:t.0;dtt.1;gl.0&cat=streaming&cmt=0.027:0.000,0.334:0.000&vfs=0.334:134:134::r:sms.0&view=0.334:270:224&bwe=0.334:642253&bat=0.334:1:1&vis=0.334:0&bh=0.334:0.000&qclc=ChBpZnA0OVpUaW00RERzZnpPEAE
- GET https://www.youtube.com/api/stats/playback?ns=yt&el=embedded&cpn=ifp49ZTim4DDsfzO&ver=2&cmt=0.058&fmt=134&fs=0&rt=1.447&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=1486&cl=901361096&mos=1&volume=100&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&delay=4&hl=zh_CN&cr=US&len=48.381&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C6256%2C16950%2C100702%2C15105%2C25059%2C4174%2C30446%2C13517%2C5189%2C21437%2C4571%2C5236%2C5802%2C1977%2C16088%2C9404%2C23826%2C9500%2C1840%2C12605%2C9869%2C1645%2C2033%2C8093%2C1364%2C10106%2C13160%2C21192%2C187%2C141%2C10984%2C9706%2C14341%2C4271%2C388%2C952%2C2754%2C20922%2C1203%2C2198%2C8061%2C1593%2C3572%2C3472%2C2641%2C907%2C3425%2C1305%2C3879%2C4566%2C1837%2C2333%2C7181%2C5072%2C3883%2C5218%2C1331%2C195%2C3684%2C3254&rtn=4&afmt=251&size=270%3A224&inview=1&muted=1&docid=hTMRb6YECEc&ei=LKToacvvAtn7sfIPgpvzyQQ&plid=AAZQChMRcW5dk3iB&referrer=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhTMRb6YECEc%3Fsi%3DUd-M1QV3QJJjWCWS%26enablejsapi%3D1%26autoplay%3D1%26mute%3D1%26rel%3D0%26loop%3D1%26playlist%3DhTMRb6YECEc&list=TLGGN23J0PoR3YsyMjA0MjAyNg&of=wbAUJoLFDaeeOSJrHXH1sg&vm=CAEQABgEOjJBSHFpSlRMalVvZlJHbmd4SjJucGpicFRDVk9fMG5tRm5fRktWa3BqWVNKSmk2N2lJQWJkQUxkcUFQSzFhVGdtR2NTeTFnN09aaWhVZDIxM0gyRkNUS25Pa05PZEpvbWZFOE5vVHU0UEx6Q1ZoWmVXdmlwd2haQjc5aDRsczFXZ0hsbm1rUFBTd1hIWmp3eG5Cc28xMjhvVQ

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

**截图**：`runs/2026-04-22_10-34-06/screenshots/02-home-fullpage.png`

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
- POST https://www.youtube.com/api/stats/qoe?fmt=134&afmt=251&cpn=_SmVy_DehEvwOzQw&el=embedded&ns=yt&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C100702%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C11038%2C18065%2C9404%2C23826%2C9500%2C1840%2C12605%2C5509%2C4360%2C7199%2C4572%2C6356%2C5115%2C13159%2C21520%2C10984%2C9706%2C14341%2C4271%2C1340%2C2754%2C24322%2C9655%2C3572%2C3472%2C3548%2C3426%2C1302%2C3881%2C4566%2C1836%2C9515%2C5072%2C3883%2C5219%2C546&cl=901361096&seq=2&docid=hTMRb6YECEc&ei=NaToaeOqCdL1sfIP372eiAk&event=streamingstats&plid=AAZQChOcTUz-OTg1&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&afs=0.316:251::i:fl.-17.74;vg.0;nm.4;sms.0&ctmp=atrkchg:t.317;id.und;m.0&bh=1.163:1.133,3.770:18.203&cmt=1.163:0.019,1.922:0.738,3.770:2.587&vps=1.163:PL,3.770:N&user_intent=0.008&bwm=3.770:1246569:3.748&bwe=3.770:989825&bat=3.770:1:1&df=3.770:0&qclc=ChBfU21WeV9EZWhFdndPelF3EAI
- POST https://www.youtube.com/api/stats/watchtime?ns=yt&el=embedded&cpn=_SmVy_DehEvwOzQw&ver=2&cmt=2.587&fmt=134&fs=0&rt=3.773&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=3801&cl=901361096&state=paused&volume=100&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&final=1&delay=4&hl=zh_CN&cr=US&len=49&afmt=251&idpj=-4&ldpj=-13&rti=8&size=270%3A224&inview=1&st=0&et=2.587&muted=1&docid=hTMRb6YECEc&ei=NaToaeOqCdL1sfIP372eiAk&plid=AAZQChOcTUz-OTg1&referrer=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhTMRb6YECEc%3Fsi%3DUd-M1QV3QJJjWCWS%26enablejsapi%3D1%26autoplay%3D1%26mute%3D1%26rel%3D0%26loop%3D1%26playlist%3DhTMRb6YECEc&list=TLGGN23J0PoR3YsyMjA0MjAyNg&of=wbAUJoLFDaeeOSJrHXH1sg&vm=CAEQABgEOjJBSHFpSlRKUWN1a2NkOWhZVUZMX2ItS0x1UllsYmQwbDBWLXlvWXBSQkduMXh3STFZUWJkQUxkcUFQSWNCTFhocDc1dFNLSHpXX09aaTJ6UVNSTTU5M0QzWVpGdlNCVFdHUm9fRk5UdG0xQlFsaFdYOWZUYXZTSl9RN2pmYTB1Yi04bkJ1MXRGX2V6UU1DMFFiTlIycVVVTg
- POST https://www.youtube.com/api/stats/atr?ns=yt&el=embedded&cpn=_SmVy_DehEvwOzQw&ver=2&cmt=2.587&fmt=134&fs=0&rt=3.784&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=3813&cl=901361096&mos=1&volume=100&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&delay=4&hl=zh_CN&cr=US&len=49&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C100702%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C11038%2C18065%2C9404%2C23826%2C9500%2C1840%2C12605%2C5509%2C4360%2C7199%2C4572%2C6356%2C5115%2C13159%2C21520%2C10984%2C9706%2C14341%2C4271%2C1340%2C2754%2C24322%2C9655%2C3572%2C3472%2C3548%2C3426%2C1302%2C3881%2C4566%2C1836%2C9515%2C5072%2C3883%2C5219%2C546&afmt=251&muted=1&docid=hTMRb6YECEc&ei=NaToaeOqCdL1sfIP372eiAk&plid=AAZQChOcTUz-OTg1&vm=CAEQABgEOjJBSHFpSlRKUWN1a2NkOWhZVUZMX2ItS0x1UllsYmQwbDBWLXlvWXBSQkduMXh3STFZUWJkQUxkcUFQSWNCTFhocDc1dFNLSHpXX09aaTJ6UVNSTTU5M0QzWVpGdlNCVFdHUm9fRk5UdG0xQlFsaFdYOWZUYXZTSl9RN2pmYTB1Yi04bkJ1MXRGX2V6UU1DMFFiTlIycVVVTg
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

**截图**：`runs/2026-04-22_10-34-06/screenshots/03-nav-zh-hans-textbook.png`

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

**截图**：`runs/2026-04-22_10-34-06/screenshots/03-nav-zh-hans-reading.png`

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
- GET https://sr.sigmareading.com/assets/web.BgmlwXlQ.js

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

**截图**：`runs/2026-04-22_10-34-06/screenshots/03-nav-zh-hans-playlist.png`

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

**截图**：`runs/2026-04-22_10-34-06/screenshots/03-nav-zh-hans-presentation-join.png`

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

**截图**：`runs/2026-04-22_10-34-06/screenshots/03-nav-zh-hans-word-express.png`

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

**截图**：`runs/2026-04-22_10-34-06/screenshots/03-nav-zh-hans-character-map-create.png`

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

**截图**：`runs/2026-04-22_10-34-06/screenshots/03-nav-zh-hans-pinyin-pathway.png`

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

**截图**：`runs/2026-04-22_10-34-06/screenshots/03-nav-zh-hans-copybook.png`

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

**截图**：`runs/2026-04-22_10-34-06/screenshots/03-nav-zh-hans-audio-dictionary.png`

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

**截图**：`runs/2026-04-22_10-34-06/screenshots/03-nav-zh-hans-ccswitch.png`

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

**截图**：`runs/2026-04-22_10-34-06/screenshots/03-nav-zh-hans-chinese-to-pinyin.png`

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
- POST https://www.youtube.com/api/stats/qoe?fmt=244&cpn=-_DIpAxuTGXqAc-m&el=embedded&ns=yt&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C6258%2C16948%2C100702%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C11038%2C18065%2C9404%2C23826%2C9500%2C1840%2C12605%2C5509%2C4360%2C7199%2C4572%2C6356%2C5115%2C13159%2C21520%2C10985%2C9705%2C14341%2C4271%2C1340%2C2754%2C24322%2C9655%2C3572%2C3472%2C3548%2C3426%2C1302%2C3881%2C4566%2C1836%2C9515%2C5072%2C3883%2C5219%2C546&cl=901361096&seq=1&docid=ZkANZ22eI4I&ei=W6Toaa_uDMjasfIP1OnccA&event=streamingstats&plid=AAZQChXhG5jzDebP&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&vps=0.000:N,0.017:B,0.413:B,0.413:B&ctmp=dttg:t.0;dtt.1;gl.0&cat=streaming&cmt=0.017:0.000,0.413:0.000&vfs=0.413:244:244::r:sms.0&view=0.413:896:504&bwe=0.413:589824&bat=0.413:1:1&vis=0.413:0&bh=0.413:0.000&qclc=ChAtX0RJcEF4dVRHWHFBYy1tEAE
- POST https://www.youtube.com/api/stats/qoe?fmt=134&cpn=VHxOVWtTjRyRXV1C&el=embedded&ns=yt&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C6257%2C16949%2C100702%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C11038%2C18065%2C9404%2C23826%2C9500%2C1840%2C12605%2C5509%2C4360%2C7199%2C4572%2C6356%2C5115%2C13159%2C21520%2C20690%2C14341%2C4271%2C1340%2C2754%2C24322%2C9655%2C3572%2C3472%2C3548%2C3426%2C1302%2C3881%2C4566%2C1836%2C9515%2C5072%2C3883%2C5219%2C546&cl=901361096&seq=1&docid=seUdU8vSdw4&ei=W6ToacuHL9GdsfIPwqHrqQ0&event=streamingstats&plid=AAZQChXp5V-hXQ3A&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&vps=0.000:N,0.016:B,0.300:B,0.300:B&ctmp=dttg:t.0;dtt.1;gl.0&cat=streaming&cmt=0.016:0.000,0.300:0.000&vfs=0.300:134:134::r:sms.0&view=0.300:896:504&bwe=0.300:589824&bat=0.300:1:1&vis=0.300:0&bh=0.300:0.000&qclc=ChBWSHhPVld0VGpSeVJYVjFDEAE
- POST https://www.youtube.com/api/stats/playback?ns=yt&el=embedded&cpn=-_DIpAxuTGXqAc-m&ver=2&cmt=0.099&fmt=244&fs=0&rt=1.67&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=1690&cl=901361096&mos=1&volume=100&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&delay=4&hl=zh_CN&cr=US&len=146.441&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C6258%2C16948%2C100702%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C11038%2C18065%2C9404%2C23826%2C9500%2C1840%2C12605%2C5509%2C4360%2C7199%2C4572%2C6356%2C5115%2C13159%2C21520%2C10985%2C9705%2C14341%2C4271%2C1340%2C2754%2C24322%2C9655%2C3572%2C3472%2C3548%2C3426%2C1302%2C3881%2C4566%2C1836%2C9515%2C5072%2C3883%2C5219%2C546&rtn=3&afmt=251&size=896%3A504&inview=0.48&muted=1&docid=ZkANZ22eI4I&ei=W6Toaa_uDMjasfIP1OnccA&plid=AAZQChXhG5jzDebP&referrer=https%3A%2F%2Fwww.youtube.com%2Fembed%2FZkANZ22eI4I%3Fautoplay%3D1%26mute%3D1%26loop%3D1%26playlist%3DZkANZ22eI4I%26playsinline%3D1&list=TLGGYGlg9bwhpCEyMjA0MjAyNg&of=wbAUJoLFDaeeOSJrHXH1sg&vm=CAEQABgEOjJBSHFpSlRJRE1UQ01ZYnhqVi1Tdy1Da2JycC1MYjYtdWg4eUZ2RlBWN0dEcFRib2hRUWJkQUxkcUFQS0NuVGF1dkMwN1JBUFNxOWdQTk1hclYyRzJCRFl6Snp2c2xDWVNGenRDS2IzQkg1eElnU2JjenJzdVFNMHZPcUxkZklrSkFGZ3J2cUMwQ1o4NjcwT0ZlMTBOLWRpMA
- POST https://www.youtube.com/api/stats/playback?ns=yt&el=embedded&cpn=VHxOVWtTjRyRXV1C&ver=2&cmt=0.031&fmt=134&fs=0&rt=1.308&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=1328&cl=901361096&mos=1&volume=100&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&delay=4&hl=zh_CN&cr=US&len=130.621&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C6257%2C16949%2C100702%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C11038%2C18065%2C9404%2C23826%2C9500%2C1840%2C12605%2C5509%2C4360%2C7199%2C4572%2C6356%2C5115%2C13159%2C21520%2C20690%2C14341%2C4271%2C1340%2C2754%2C24322%2C9655%2C3572%2C3472%2C3548%2C3426%2C1302%2C3881%2C4566%2C1836%2C9515%2C5072%2C3883%2C5219%2C546&rtn=4&afmt=251&size=896%3A504&inview=0&muted=1&docid=seUdU8vSdw4&ei=W6ToacuHL9GdsfIPwqHrqQ0&plid=AAZQChXp5V-hXQ3A&referrer=https%3A%2F%2Fwww.youtube.com%2Fembed%2FseUdU8vSdw4%3Fautoplay%3D1%26mute%3D1%26loop%3D1%26playlist%3DseUdU8vSdw4%26playsinline%3D1&list=TLGGdIX7ewxECRwyMjA0MjAyNg&of=w-jZTO3Zl_v4NNESeUIVjw&vm=CAQQARgCOjJBSHFpSlRLVUVSbjMyUEw1R2s2ZkZERjA0Ry00QTRwZVhPZHRVUXNTVGFMSTBTZmNQd2JnQUxkcUFQS01KN2stM2UzVDVwZEVPVzQtdW9RblQyRlM1YktKeEtVMkdweWdraDhUdXZkZDZnaUJ2VllxaXFaRWRwdlI5bXVWd3RLLVZ0OHlFOVhXcngyWHJIZVJkbTVHNW96SXBxVQ
- POST https://www.youtube.com/api/stats/watchtime?ns=yt&el=embedded&cpn=-_DIpAxuTGXqAc-m&ver=2&cmt=1.436&fmt=244&fs=0&rt=3.007&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=3027&cl=901361096&state=playing&volume=100&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&delay=4&hl=zh_CN&cr=US&len=146.441&rtn=13&afmt=251&idpj=-9&ldpj=-26&rti=3&size=896%3A504&inview=0.48&st=0&et=1.436&muted=1&docid=ZkANZ22eI4I&ei=W6Toaa_uDMjasfIP1OnccA&plid=AAZQChXhG5jzDebP&referrer=https%3A%2F%2Fwww.youtube.com%2Fembed%2FZkANZ22eI4I%3Fautoplay%3D1%26mute%3D1%26loop%3D1%26playlist%3DZkANZ22eI4I%26playsinline%3D1&list=TLGGYGlg9bwhpCEyMjA0MjAyNg&of=wbAUJoLFDaeeOSJrHXH1sg&vm=CAEQABgEOjJBSHFpSlRJRE1UQ01ZYnhqVi1Tdy1Da2JycC1MYjYtdWg4eUZ2RlBWN0dEcFRib2hRUWJkQUxkcUFQS0NuVGF1dkMwN1JBUFNxOWdQTk1hclYyRzJCRFl6Snp2c2xDWVNGenRDS2IzQkg1eElnU2JjenJzdVFNMHZPcUxkZklrSkFGZ3J2cUMwQ1o4NjcwT0ZlMTBOLWRpMA
- POST https://www.youtube.com/api/stats/watchtime?ns=yt&el=embedded&cpn=VHxOVWtTjRyRXV1C&ver=2&cmt=2.732&fmt=134&fs=0&rt=4.01&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=4029&cl=901361096&state=playing&volume=100&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&delay=4&hl=zh_CN&cr=US&len=130.621&rtn=14&afmt=251&idpj=-8&ldpj=-36&rti=4&size=896%3A504&inview=0&st=0&et=2.732&muted=1&docid=seUdU8vSdw4&ei=W6ToacuHL9GdsfIPwqHrqQ0&plid=AAZQChXp5V-hXQ3A&referrer=https%3A%2F%2Fwww.youtube.com%2Fembed%2FseUdU8vSdw4%3Fautoplay%3D1%26mute%3D1%26loop%3D1%26playlist%3DseUdU8vSdw4%26playsinline%3D1&list=TLGGdIX7ewxECRwyMjA0MjAyNg&of=w-jZTO3Zl_v4NNESeUIVjw&vm=CAQQARgCOjJBSHFpSlRLVUVSbjMyUEw1R2s2ZkZERjA0Ry00QTRwZVhPZHRVUXNTVGFMSTBTZmNQd2JnQUxkcUFQS01KN2stM2UzVDVwZEVPVzQtdW9RblQyRlM1YktKeEtVMkdweWdraDhUdXZkZDZnaUJ2VllxaXFaRWRwdlI5bXVWd3RLLVZ0OHlFOVhXcngyWHJIZVJkbTVHNW96SXBxVQ
- POST https://www.youtube.com/api/stats/atr?ns=yt&el=embedded&cpn=-_DIpAxuTGXqAc-m&ver=2&cmt=3.112&fmt=244&fs=0&rt=4.682&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=4702&cl=901361096&mos=1&volume=100&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&delay=4&hl=zh_CN&cr=US&len=146.441&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C6258%2C16948%2C100702%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C11038%2C18065%2C9404%2C23826%2C9500%2C1840%2C12605%2C5509%2C4360%2C7199%2C4572%2C6356%2C5115%2C13159%2C21520%2C10985%2C9705%2C14341%2C4271%2C1340%2C2754%2C24322%2C9655%2C3572%2C3472%2C3548%2C3426%2C1302%2C3881%2C4566%2C1836%2C9515%2C5072%2C3883%2C5219%2C546&afmt=251&muted=1&docid=ZkANZ22eI4I&ei=W6Toaa_uDMjasfIP1OnccA&plid=AAZQChXhG5jzDebP&vm=CAEQABgEOjJBSHFpSlRJRE1UQ01ZYnhqVi1Tdy1Da2JycC1MYjYtdWg4eUZ2RlBWN0dEcFRib2hRUWJkQUxkcUFQS0NuVGF1dkMwN1JBUFNxOWdQTk1hclYyRzJCRFl6Snp2c2xDWVNGenRDS2IzQkg1eElnU2JjenJzdVFNMHZPcUxkZklrSkFGZ3J2cUMwQ1o4NjcwT0ZlMTBOLWRpMA

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

**截图**：`runs/2026-04-22_10-34-06/screenshots/03-nav-.png`

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
- POST https://www.youtube.com/api/stats/qoe?fmt=244&afmt=251&cpn=-_DIpAxuTGXqAc-m&el=embedded&ns=yt&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C6258%2C16948%2C100702%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C11038%2C18065%2C9404%2C23826%2C9500%2C1840%2C12605%2C5509%2C4360%2C7199%2C4572%2C6356%2C5115%2C13159%2C21520%2C10985%2C9705%2C14341%2C4271%2C1340%2C2754%2C24322%2C9655%2C3572%2C3472%2C3548%2C3426%2C1302%2C3881%2C4566%2C1836%2C9515%2C5072%2C3883%2C5219%2C546&cl=901361096&seq=2&docid=ZkANZ22eI4I&ei=W6Toaa_uDMjasfIP1OnccA&event=streamingstats&plid=AAZQChXhG5jzDebP&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&afs=0.417:251;CggKA2RyYxIBMQ::i:fl.-14.43;vg.0;nm.4;sms.0&ctmp=atrkchg:t.417;id.und;m.0&bh=1.541:1.866,7.150:24.589&cmt=1.541:0.012,2.306:0.736,7.150:5.581&vps=1.541:PL,7.150:N&user_intent=0.007&bwm=7.150:1893773:3.962&bwe=7.150:1673925&bat=7.150:1:1&df=7.150:10&qclc=ChAtX0RJcEF4dVRHWHFBYy1tEAI
- POST https://www.youtube.com/api/stats/watchtime?ns=yt&el=embedded&cpn=-_DIpAxuTGXqAc-m&ver=2&cmt=5.581&fmt=244&fs=0&rt=7.152&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=1051&cl=901361096&state=paused&volume=100&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&final=1&delay=4&hl=zh_CN&cr=US&len=146.441&afmt=251&idpj=-9&ldpj=-26&dtm=1&rti=13&size=896%3A504&inview=0.48&st=1.436&et=5.581&muted=1&docid=ZkANZ22eI4I&ei=W6Toaa_uDMjasfIP1OnccA&plid=AAZQChXhG5jzDebP&referrer=https%3A%2F%2Fwww.youtube.com%2Fembed%2FZkANZ22eI4I%3Fautoplay%3D1%26mute%3D1%26loop%3D1%26playlist%3DZkANZ22eI4I%26playsinline%3D1&list=TLGGYGlg9bwhpCEyMjA0MjAyNg&of=wbAUJoLFDaeeOSJrHXH1sg&vm=CAEQABgEOjJBSHFpSlRJRE1UQ01ZYnhqVi1Tdy1Da2JycC1MYjYtdWg4eUZ2RlBWN0dEcFRib2hRUWJkQUxkcUFQS0NuVGF1dkMwN1JBUFNxOWdQTk1hclYyRzJCRFl6Snp2c2xDWVNGenRDS2IzQkg1eElnU2JjenJzdVFNMHZPcUxkZklrSkFGZ3J2cUMwQ1o4NjcwT0ZlMTBOLWRpMA
- POST https://www.youtube.com/api/stats/qoe?fmt=134&afmt=251&cpn=VHxOVWtTjRyRXV1C&el=embedded&ns=yt&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C6257%2C16949%2C100702%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C11038%2C18065%2C9404%2C23826%2C9500%2C1840%2C12605%2C5509%2C4360%2C7199%2C4572%2C6356%2C5115%2C13159%2C21520%2C20690%2C14341%2C4271%2C1340%2C2754%2C24322%2C9655%2C3572%2C3472%2C3548%2C3426%2C1302%2C3881%2C4566%2C1836%2C9515%2C5072%2C3883%2C5219%2C546&cl=901361096&seq=2&docid=seUdU8vSdw4&ei=W6ToacuHL9GdsfIPwqHrqQ0&event=streamingstats&plid=AAZQChXp5V-hXQ3A&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&afs=0.304:251::i:fl.-18.63;vg.0;nm.4;sms.0&ctmp=atrkchg:t.304;id.und;m.0&user_intent=0.007&bh=1.307:2.440,6.603:24.010&cmt=1.307:0.031,2.068:0.793,6.603:5.327&vps=1.307:PL,6.603:N&bwm=6.603:2303814:4.222&bwe=6.603:1547580&bat=6.603:1:1&df=6.603:0&qclc=ChBWSHhPVld0VGpSeVJYVjFDEAI
- POST https://www.youtube.com/api/stats/watchtime?ns=yt&el=embedded&cpn=VHxOVWtTjRyRXV1C&ver=2&cmt=5.327&fmt=134&fs=0&rt=6.604&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=6624&cl=901361096&state=paused&volume=100&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&final=1&delay=4&hl=zh_CN&cr=US&len=130.621&afmt=251&idpj=-8&ldpj=-36&dtm=1&rti=14&size=896%3A504&inview=0&st=2.732&et=5.327&muted=1&docid=seUdU8vSdw4&ei=W6ToacuHL9GdsfIPwqHrqQ0&plid=AAZQChXp5V-hXQ3A&referrer=https%3A%2F%2Fwww.youtube.com%2Fembed%2FseUdU8vSdw4%3Fautoplay%3D1%26mute%3D1%26loop%3D1%26playlist%3DseUdU8vSdw4%26playsinline%3D1&list=TLGGdIX7ewxECRwyMjA0MjAyNg&of=w-jZTO3Zl_v4NNESeUIVjw&vm=CAQQARgCOjJBSHFpSlRLVUVSbjMyUEw1R2s2ZkZERjA0Ry00QTRwZVhPZHRVUXNTVGFMSTBTZmNQd2JnQUxkcUFQS01KN2stM2UzVDVwZEVPVzQtdW9RblQyRlM1YktKeEtVMkdweWdraDhUdXZkZDZnaUJ2VllxaXFaRWRwdlI5bXVWd3RLLVZ0OHlFOVhXcngyWHJIZVJkbTVHNW96SXBxVQ
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

**截图**：`runs/2026-04-22_10-34-06/screenshots/03-nav-zh-hans-home.png`

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
- POST https://www.youtube.com/api/stats/qoe?fmt=134&afmt=251&cpn=aonbK9KvQoTFlCIP&el=embedded&ns=yt&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C100702%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C11038%2C18065%2C9404%2C23826%2C9500%2C1840%2C12605%2C5509%2C4360%2C7199%2C4572%2C6356%2C5115%2C13159%2C21520%2C20690%2C14341%2C4271%2C1340%2C2754%2C24322%2C9655%2C3572%2C3472%2C3548%2C3426%2C1302%2C3881%2C4566%2C1836%2C9515%2C5072%2C3883%2C5219%2C546&cl=901361096&seq=2&docid=MQ5e0zb8MRo&ei=YqToaY7yOOSEt7EPv8ysgA0&event=streamingstats&plid=AAZQChZW1NMjOkKS&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&afs=0.304:251::i:fl.-17.31;vg.0;nm.4;sms.0&ctmp=atrkchg:t.304;id.und;m.0&user_intent=0.006&bh=1.203:1.967,4.821:22.388&cmt=1.203:0.016,1.953:0.727,4.821:3.595&vps=1.203:PL,4.821:N&bwm=4.821:2126399:4.144&bwe=4.821:1621387&bat=4.821:1:1&df=4.821:0&qclc=ChBhb25iSzlLdlFvVEZsQ0lQEAI
- POST https://www.youtube.com/api/stats/watchtime?ns=yt&el=embedded&cpn=aonbK9KvQoTFlCIP&ver=2&cmt=3.595&fmt=134&fs=0&rt=4.823&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=4850&cl=901361096&state=paused&volume=100&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&final=1&delay=4&hl=zh_CN&cr=US&len=49&afmt=251&idpj=-4&ldpj=-2&rti=8&size=323%3A226&inview=1&st=0&et=3.595&muted=1&docid=MQ5e0zb8MRo&ei=YqToaY7yOOSEt7EPv8ysgA0&plid=AAZQChZW1NMjOkKS&referrer=https%3A%2F%2Fwww.youtube.com%2Fembed%2FMQ5e0zb8MRo%3Fsi%3D34ZL9TvcciKOXcDN%26enablejsapi%3D1%26autoplay%3D1%26mute%3D1%26rel%3D0%26loop%3D1%26playlist%3DMQ5e0zb8MRo&list=TLGGrCtcL_LOY8syMjA0MjAyNg&of=wbAUJoLFDaeeOSJrHXH1sg&vm=CAEQABgEOjJBSHFpSlRKUEJpVzl6M2o4X3JYY0tPZS13SDUwMnZRNWhzeDRkY3hRS2dHeTlaa3l6d2JkQUxkcUFQSjBSRDRfUVZ5aU0yNFNkLXhGV3NuNEJIZ1JYYm1VcW05ODJuWWhEYnF6VVBBbE9FVzM4UzR5RVp2M0NpVkdJVlRBU1I2ZjdmYjQ2R2hFMk5ocXdOYkZ4ZkF1YXRxTg
- GET https://sr.sigmareading.com/assets/teacherPortal.ClFSvzab.js
- GET https://sr.sigmareading.com/assets/modulepreload-polyfill.B5Qt9EMX.js
- GET https://sr.sigmareading.com/assets/framework.DiD4vmm9.js
- GET https://sr.sigmareading.com/assets/el-radio.DBEC2eI5.js
- GET https://sr.sigmareading.com/assets/token.DI9FKtlJ.js
- GET https://sr.sigmareading.com/assets/el-tag.BycvGGwV.js

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

**截图**：`runs/2026-04-22_10-34-06/screenshots/03-nav-services-sr-ms-core-redirect-teacher-portal.png`

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

**截图**：`runs/2026-04-22_10-34-06/screenshots/03-nav-zh-hans-playlist-display-6539da63ca06cb10e16f58ef.png`

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

**截图**：`runs/2026-04-22_10-34-06/screenshots/03-nav-zh-hans-playlist-display-653a1734d448f0607b7aa574.png`

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

**截图**：`runs/2026-04-22_10-34-06/screenshots/03-nav-zh-hans-playlist-display-6539d819ca06cb10e16f58e9.png`

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

**截图**：`runs/2026-04-22_10-34-06/screenshots/03-nav-zh-hans-playlist-display-6539d88eca06cb10e16f58ea.png`

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

**截图**：`runs/2026-04-22_10-34-06/screenshots/03-nav-zh-hans-reading-display-63ec90d4e328e6231bb8b4a2.png`

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

**截图**：`runs/2026-04-22_10-34-06/screenshots/03-nav-zh-hans-personal-data-590ea45f-04ee-4f24-b1d9-f3fd38e472aa.png`

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
- POST https://www.youtube.com/api/stats/qoe?fmt=134&afmt=251&cpn=ypbVwqiNKr8oT9we&el=embedded&ns=yt&fexp=v1%2C24004644%2C494888%2C26510703%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C35405%2C33143%2C32154%2C15105%2C20830%2C4229%2C4174%2C15862%2C14585%2C13517%2C5188%2C21437%2C4571%2C5236%2C5802%2C1978%2C13110%2C2977%2C9404%2C23826%2C9500%2C1840%2C12605%2C9869%2C11771%2C1347%2C18%2C10105%2C13160%2C21192%2C328%2C16768%2C3922%2C14341%2C3305%2C966%2C388%2C952%2C2754%2C12774%2C9355%2C2193%2C8061%2C1595%2C3571%2C3472%2C2641%2C907%2C3425%2C1303%2C3881%2C4566%2C1836%2C9515%2C5073%2C3881%2C2812%2C291%2C2116%2C1525&cl=901361096&seq=2&docid=MQ5e0zb8MRo&ei=gKToaaiiNvDHsfIP-pGh6Aw&event=streamingstats&plid=AAZQChgf7iiOghbx&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&afs=0.306:251::i:fl.-17.31;vg.0;nm.4;sms.0&ctmp=atrkchg:t.307;id.und;m.0&user_intent=0.006&bh=1.246:1.967,3.972:23.747&cmt=1.246:0.004,2.004:0.764,3.972:2.731&vps=1.246:PL,3.972:N&bwm=3.972:1436664:3.780&bwe=3.972:1080569&bat=3.972:1:1&df=3.972:0&qclc=ChB5cGJWd3FpTktyOG9UOXdlEAI
- GET https://www.youtube.com/api/stats/watchtime?ns=yt&el=embedded&cpn=ypbVwqiNKr8oT9we&ver=2&cmt=2.731&fmt=134&fs=0&rt=3.973&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=3996&cl=901361096&state=paused&volume=100&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&final=1&delay=4&hl=zh_CN&cr=US&len=48.301&afmt=251&idpj=-1&ldpj=-33&rti=11&size=270%3A224&inview=1&st=0&et=2.731&muted=1&docid=MQ5e0zb8MRo&ei=gKToaaiiNvDHsfIP-pGh6Aw&plid=AAZQChgf7iiOghbx&referrer=https%3A%2F%2Fwww.youtube.com%2Fembed%2FMQ5e0zb8MRo%3Fsi%3D34ZL9TvcciKOXcDN%26enablejsapi%3D1%26autoplay%3D1%26mute%3D1%26rel%3D0%26loop%3D1%26playlist%3DMQ5e0zb8MRo&list=TLGGrCtcL_LOY8syMjA0MjAyNg&of=wbAUJoLFDaeeOSJrHXH1sg&vm=CAEQABgEOjJBSHFpSlRLdXVGY2tLMjNrSXBKNDF2cWpMNmlnSnRfTlFmMWFCWjRueWl0SVM2TVIzQWJkQUxkcUFQS0poMGtYYkt6OFBIdmZ4WDhEZ2ZDN3hheHhiZ1B6WlRwM0RtYi1KZEhVb1pUWGxsdFRIR2xoNE1VT2hYQzBsek56VE10TzdvN1RKYVF3Y0VxbzBWdVZ2N3dDQmxlNw
- POST https://www.youtube.com/api/stats/atr?ns=yt&el=embedded&cpn=ypbVwqiNKr8oT9we&ver=2&cmt=2.731&fmt=134&fs=0&rt=3.979&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=4002&cl=901361096&mos=1&volume=100&cbr=Chrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&delay=4&hl=zh_CN&cr=US&len=48.301&fexp=v1%2C24004644%2C494888%2C26510703%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C35405%2C33143%2C32154%2C15105%2C20830%2C4229%2C4174%2C15862%2C14585%2C13517%2C5188%2C21437%2C4571%2C5236%2C5802%2C1978%2C13110%2C2977%2C9404%2C23826%2C9500%2C1840%2C12605%2C9869%2C11771%2C1347%2C18%2C10105%2C13160%2C21192%2C328%2C16768%2C3922%2C14341%2C3305%2C966%2C388%2C952%2C2754%2C12774%2C9355%2C2193%2C8061%2C1595%2C3571%2C3472%2C2641%2C907%2C3425%2C1303%2C3881%2C4566%2C1836%2C9515%2C5073%2C3881%2C2812%2C291%2C2116%2C1525&afmt=251&muted=1&docid=MQ5e0zb8MRo&ei=gKToaaiiNvDHsfIP-pGh6Aw&plid=AAZQChgf7iiOghbx&vm=CAEQABgEOjJBSHFpSlRLdXVGY2tLMjNrSXBKNDF2cWpMNmlnSnRfTlFmMWFCWjRueWl0SVM2TVIzQWJkQUxkcUFQS0poMGtYYkt6OFBIdmZ4WDhEZ2ZDN3hheHhiZ1B6WlRwM0RtYi1KZEhVb1pUWGxsdFRIR2xoNE1VT2hYQzBsek56VE10TzdvN1RKYVF3Y0VxbzBWdVZ2N3dDQmxlNw
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

**截图**：`runs/2026-04-22_10-34-06/screenshots/04-route-zh-hans-login.png`

---

