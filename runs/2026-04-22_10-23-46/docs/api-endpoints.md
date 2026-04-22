# SigmaReading API 端点列表

> 通过 Playwright Network 监听自动捕获
> 生成时间：2026/4/22 18:24:21

---

## GET

- `GET https://sr.sigmareading.com/services/sr-ms-core/api/account`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/assignment-number`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/learning-stats?type=ALL`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/profile`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/questionnaire`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/student-class-orders?page=0&size=20&classStatus.in=NOT_STARTED,STARTED,OPEN_ENDED&enrollmentStatus.in=INVITATION_SENT`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/user-assignment-exams?history=false`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/playlists?sort=sortNum,desc&page=0&size=4&count=0`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/playlists?sort=sortNum,desc&page=0&size=6&count=0`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?page=2&size=3&count=0&recs=true`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?sort=name.text,desc&page=0&size=8`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/textbooks/sku-grouped`
- `GET https://sr.sigmareading.com/services/tlc-ms-core/api/my-account/tl-orders?realm.equals=sr&sort=orderDate,desc&status.in=PAYING&page=0&size=5`
- `GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=xizhen.chen%2B3%40tonglec.org`

## POST

- `POST https://www.youtube.com/api/stats/atr?ns=yt&el=embedded&cpn=J5yfUctkNb5lQ3cj&ver=2&cmt=3.015&fmt=134&fs=0&rt=4.483&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=4506&cl=901361096&mos=1&volume=100&cbr=HeadlessChrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&delay=4&hl=zh_CN&cr=US&len=48.301&fexp=v1%2C24004644%2C494889%2C26510702%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C100702%2C15105%2C25059%2C4174%2C30447%2C13516%2C5189%2C21437%2C4571%2C5237%2C5801%2C1978%2C11424%2C4663%2C9404%2C23826%2C9500%2C1840%2C12605%2C5509%2C4360%2C11771%2C1363%2C10108%2C13159%2C21191%2C329%2C10985%2C5784%2C3571%2C350%2C14341%2C3304%2C967%2C388%2C952%2C2754%2C9843%2C2932%2C9350%2C2198%2C9654%2C3572%2C3472%2C3548%2C3425%2C1305%2C3879%2C4566%2C1837%2C9514%2C8954%2C5220%2C1525&afmt=251&muted=1&docid=MQ5e0zb8MRo&ei=t6HoabmODMyWsfIPire0kQ0&plid=AAZQCe2WFYMJ6UK3&vm=CAEQABgEOjJBSHFpSlRKVnNpazFJd1RKMXpDZ0k2SnlodkJoYkF6QWtVRHJKbE80MHRuOFgyZ04zZ2JkQUxkcUFQS1J4YmxUSVhjYU5VUlpmVFllU09MZU9oTm42U1pkVTYzV1cya3Q4OGQyemwxcVJpTEtjV3NkT0VRUHZDclE4SHNuYUdsLWstY1huVldNd1dJdDBhQktKV2lyS1hUZw`
- `POST https://www.youtube.com/api/stats/playback?ns=yt&el=embedded&cpn=J5yfUctkNb5lQ3cj&ver=2&cmt=0.011&fmt=134&fs=0&rt=1.481&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=1503&cl=901361096&mos=1&volume=100&cbr=HeadlessChrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&delay=4&hl=zh_CN&cr=US&len=48.301&fexp=v1%2C24004644%2C494889%2C26510702%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C100702%2C15105%2C25059%2C4174%2C30447%2C13516%2C5189%2C21437%2C4571%2C5237%2C5801%2C1978%2C11424%2C4663%2C9404%2C23826%2C9500%2C1840%2C12605%2C5509%2C4360%2C11771%2C1363%2C10108%2C13159%2C21191%2C329%2C10985%2C5784%2C3571%2C350%2C14341%2C3304%2C967%2C388%2C952%2C2754%2C9843%2C2932%2C9350%2C2198%2C9654%2C3572%2C3472%2C3548%2C3425%2C1305%2C3879%2C4566%2C1837%2C9514%2C8954%2C5220%2C1525&rtn=11&afmt=251&size=270%3A224&inview=1&muted=1&docid=MQ5e0zb8MRo&ei=t6HoabmODMyWsfIPire0kQ0&plid=AAZQCe2WFYMJ6UK3&referrer=https%3A%2F%2Fwww.youtube.com%2Fembed%2FMQ5e0zb8MRo%3Fsi%3D34ZL9TvcciKOXcDN%26enablejsapi%3D1%26autoplay%3D1%26mute%3D1%26rel%3D0%26loop%3D1%26playlist%3DMQ5e0zb8MRo&list=TLGGrCtcL_LOY8syMjA0MjAyNg&of=wbAUJoLFDaeeOSJrHXH1sg&vm=CAEQABgEOjJBSHFpSlRKVnNpazFJd1RKMXpDZ0k2SnlodkJoYkF6QWtVRHJKbE80MHRuOFgyZ04zZ2JkQUxkcUFQS1J4YmxUSVhjYU5VUlpmVFllU09MZU9oTm42U1pkVTYzV1cya3Q4OGQyemwxcVJpTEtjV3NkT0VRUHZDclE4SHNuYUdsLWstY1huVldNd1dJdDBhQktKV2lyS1hUZw`
- `POST https://www.youtube.com/api/stats/qoe?fmt=134&cpn=J5yfUctkNb5lQ3cj&el=embedded&ns=yt&fexp=v1%2C24004644%2C494889%2C26510702%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C100702%2C15105%2C25059%2C4174%2C30447%2C13516%2C5189%2C21437%2C4571%2C5237%2C5801%2C1978%2C11424%2C4663%2C9404%2C23826%2C9500%2C1840%2C12605%2C5509%2C4360%2C11771%2C1363%2C10108%2C13159%2C21191%2C329%2C10985%2C5784%2C3571%2C350%2C14341%2C3304%2C967%2C388%2C952%2C2754%2C9843%2C2932%2C9350%2C2198%2C9654%2C3572%2C3472%2C3548%2C3425%2C1305%2C3879%2C4566%2C1837%2C9514%2C8954%2C5220%2C1525&cl=901361096&seq=1&docid=MQ5e0zb8MRo&ei=t6HoabmODMyWsfIPire0kQ0&event=streamingstats&plid=AAZQCe2WFYMJ6UK3&cbr=HeadlessChrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&vps=0.000:N,0.015:B,0.299:B,0.299:B&ctmp=dttg:t.0;dtt.1;gl.0&cat=streaming&cmt=0.015:0.000,0.299:0.000&vfs=0.299:134:134::r:sms.0&view=0.299:270:224&bwe=0.299:609485&bat=0.299:1:1&vis=0.299:0&bh=0.299:0.000&qclc=ChBKNXlmVWN0a05iNWxRM2NqEAE`

