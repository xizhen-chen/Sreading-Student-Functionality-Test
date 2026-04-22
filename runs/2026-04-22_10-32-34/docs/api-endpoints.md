# SigmaReading API 端点列表

> 通过 Playwright Network 监听自动捕获
> 生成时间：2026/4/22 18:33:12

---

## GET

- `GET https://sr.sigmareading.com/services/sr-ms-core/api/account`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/assignment-number`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/learning-stats?type=ALL`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/profile`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/questionnaire`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/student-class-orders?page=0&size=20&classStatus.in=NOT_STARTED,STARTED,OPEN_ENDED&enrollmentStatus.in=INVITATION_SENT`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/playlists?sort=sortNum,desc&page=0&size=4&count=0`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/playlists?sort=sortNum,desc&page=0&size=6&count=0`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?page=2&size=3&count=0&recs=true`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?sort=name.text,desc&page=0&size=8`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/textbooks/sku-grouped`
- `GET https://sr.sigmareading.com/services/tlc-ms-core/api/my-account/tl-orders?realm.equals=sr&sort=orderDate,desc&status.in=PAYING&page=0&size=5`
- `GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=xizhen.chen%2B3%40tonglec.org`
- `GET https://www.youtube.com/api/stats/playback?ns=yt&el=embedded&cpn=2hoQHf7xvftz167a&ver=2&cmt=0.049&fmt=134&fs=0&rt=1.304&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=1328&cl=901361096&mos=1&volume=100&cbr=HeadlessChrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&delay=4&hl=zh_CN&cr=US&len=49&fexp=v1%2C24004644%2C494889%2C26510702%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C35401%2C65301%2C12607%2C2498%2C25059%2C4174%2C30447%2C13516%2C5189%2C21437%2C4571%2C11038%2C1978%2C16087%2C9404%2C23826%2C9500%2C1840%2C12605%2C9869%2C11771%2C1365%2C10105%2C13160%2C16831%2C4360%2C329%2C10985%2C5784%2C3921%2C14341%2C3305%2C966%2C388%2C952%2C2754%2C20915%2C7%2C1205%2C2196%2C9655%2C3571%2C3472%2C2642%2C906%2C3425%2C1303%2C3881%2C4566%2C1836%2C2834%2C6681%2C2556%2C6399%2C1477%2C3741%2C1526&rtn=12&afmt=251&size=270%3A224&inview=1&muted=1&docid=MQ5e0zb8MRo&ei=x6Poac32GOKgsfIPi_uVoQc&plid=AAZQCg0Rv6K_usSw&referrer=https%3A%2F%2Fwww.youtube.com%2Fembed%2FMQ5e0zb8MRo%3Fsi%3D34ZL9TvcciKOXcDN%26enablejsapi%3D1%26autoplay%3D1%26mute%3D1%26rel%3D0%26loop%3D1%26playlist%3DMQ5e0zb8MRo&list=TLGGrCtcL_LOY8syMjA0MjAyNg&of=wbAUJoLFDaeeOSJrHXH1sg&vm=CAEQABgEOjJBSHFpSlRLVFBsLVhtcDNkWlBXazU4bTEzeHFWVnZ2RTJ4ZklCUXk1QVZ6bDF4QzQ4QWJkQUxkcUFQSVJ6ZUhDelR3eGtRazVrV2U4VXpmMGk3UTBnanZBNTJWOUlyemk3LXN0NEczNmxmRHIxektMSU1BN2EtZDVMajQ1bUpKekhKMGZWTFhLRWcyTG1pX2U1eGhqRGlSRA`

## POST

- `POST https://www.youtube.com/api/stats/atr?ns=yt&el=embedded&cpn=2hoQHf7xvftz167a&ver=2&cmt=3.061&fmt=134&fs=0&rt=4.311&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=4336&cl=901361096&mos=1&volume=100&cbr=HeadlessChrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&delay=4&hl=zh_CN&cr=US&len=49&fexp=v1%2C24004644%2C494889%2C26510702%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C35401%2C65301%2C12607%2C2498%2C25059%2C4174%2C30447%2C13516%2C5189%2C21437%2C4571%2C11038%2C1978%2C16087%2C9404%2C23826%2C9500%2C1840%2C12605%2C9869%2C11771%2C1365%2C10105%2C13160%2C16831%2C4360%2C329%2C10985%2C5784%2C3921%2C14341%2C3305%2C966%2C388%2C952%2C2754%2C20915%2C7%2C1205%2C2196%2C9655%2C3571%2C3472%2C2642%2C906%2C3425%2C1303%2C3881%2C4566%2C1836%2C2834%2C6681%2C2556%2C6399%2C1477%2C3741%2C1526&afmt=251&muted=1&docid=MQ5e0zb8MRo&ei=x6Poac32GOKgsfIPi_uVoQc&plid=AAZQCg0Rv6K_usSw&vm=CAEQABgEOjJBSHFpSlRLVFBsLVhtcDNkWlBXazU4bTEzeHFWVnZ2RTJ4ZklCUXk1QVZ6bDF4QzQ4QWJkQUxkcUFQSVJ6ZUhDelR3eGtRazVrV2U4VXpmMGk3UTBnanZBNTJWOUlyemk3LXN0NEczNmxmRHIxektMSU1BN2EtZDVMajQ1bUpKekhKMGZWTFhLRWcyTG1pX2U1eGhqRGlSRA`
- `POST https://www.youtube.com/api/stats/qoe?fmt=134&cpn=2hoQHf7xvftz167a&el=embedded&ns=yt&fexp=v1%2C24004644%2C494889%2C26510702%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C35401%2C65301%2C12607%2C2498%2C25059%2C4174%2C30447%2C13516%2C5189%2C21437%2C4571%2C11038%2C1978%2C16087%2C9404%2C23826%2C9500%2C1840%2C12605%2C9869%2C11771%2C1365%2C10105%2C13160%2C16831%2C4360%2C329%2C10985%2C5784%2C3921%2C14341%2C3305%2C966%2C388%2C952%2C2754%2C20915%2C7%2C1205%2C2196%2C9655%2C3571%2C3472%2C2642%2C906%2C3425%2C1303%2C3881%2C4566%2C1836%2C2834%2C6681%2C2556%2C6399%2C1477%2C3741%2C1526&cl=901361096&seq=1&docid=MQ5e0zb8MRo&ei=x6Poac32GOKgsfIPi_uVoQc&event=streamingstats&plid=AAZQCg0Rv6K_usSw&cbr=HeadlessChrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&vps=0.000:N,0.019:B,0.312:B,0.312:B&ctmp=dttg:t.0;dtt.1;gl.0&cat=streaming&cmt=0.019:0.000,0.312:0.000&vfs=0.312:134:134::r:sms.0&view=0.312:270:224&bwe=0.312:596378&bat=0.312:1:1&vis=0.312:0&bh=0.312:0.000&qclc=ChAyaG9RSGY3eHZmdHoxNjdhEAE`

