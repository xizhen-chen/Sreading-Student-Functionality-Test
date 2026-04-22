# SigmaReading API 端点列表

> 通过 Playwright Network 监听自动捕获
> 生成时间：2026/4/22 18:31:18

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
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?page=1&size=3&count=0&recs=true`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?page=4&size=3&count=0&recs=true`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?sort=last_modified_date,desc&page=0&size=20&currentUser=true&status=ACTIVE&status=PENDING`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?sort=name.text,desc&page=0&size=8`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/textbooks/sku-grouped`
- `GET https://sr.sigmareading.com/services/tlc-ms-core/api/my-account/tl-orders?realm.equals=sr&sort=orderDate,desc&status.in=PAYING&page=0&size=5`
- `GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=xizhen.chen%2B3%40tonglec.org`
- `GET https://www.youtube.com/api/stats/playback?ns=yt&el=embedded&cpn=MsffFfuTNu0YdpaQ&ver=2&cmt=0.053&fmt=134&fs=0&rt=1.21&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=1231&cl=901361096&mos=1&volume=100&cbr=HeadlessChrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&delay=4&hl=zh_CN&cr=US&len=48.381&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C100702%2C15105%2C25059%2C4174%2C30446%2C13517%2C5189%2C21437%2C4571%2C5236%2C4436%2C1366%2C1978%2C16087%2C9404%2C23826%2C9500%2C1840%2C12605%2C9869%2C1644%2C10127%2C1363%2C10108%2C8441%2C4718%2C16832%2C4359%2C329%2C9420%2C7349%2C2992%2C929%2C14341%2C4271%2C386%2C954%2C2754%2C12774%2C8142%2C6%2C1203%2C2198%2C9654%2C593%2C2979%2C3472%2C3548%2C3426%2C1302%2C3881%2C4566%2C1837%2C2333%2C489%2C6692%2C8023%2C931%2C5219%2C1527&rtn=9&afmt=251&size=270%3A224&inview=1&muted=1&docid=hTMRb6YECEc&ei=VaPoaZuiLqb6sfIPyobAIQ&plid=AAZQCgZLiB7gw4qS&referrer=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhTMRb6YECEc%3Fsi%3DUd-M1QV3QJJjWCWS%26enablejsapi%3D1%26autoplay%3D1%26mute%3D1%26rel%3D0%26loop%3D1%26playlist%3DhTMRb6YECEc&list=TLGGN23J0PoR3YsyMjA0MjAyNg&of=wbAUJoLFDaeeOSJrHXH1sg&vm=CAEQABgEOjJBSHFpSlRLN2VXUXlmeVI0Szk3YThQMjVXUjJxMHBlSFp4UEpNbzNKRW5iSXdaaE15UWJkQUxkcUFQSTZQRE90Z05HRUxiY1QwcEZRMlRoeTNnaUx0UkR3U1ExTTVFMDZnd2lET1VBTnFPZ2RrRWhNbzQtWTZUMXpGelpmRjZITU5OQ2dibE1TQmc2dFRmZVRxR2R5TUh0Rg`

## POST

- `POST https://www.youtube.com/api/stats/atr?ns=yt&el=embedded&cpn=MsffFfuTNu0YdpaQ&ver=2&cmt=3.061&fmt=134&fs=0&rt=4.219&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=4239&cl=901361096&mos=1&volume=100&cbr=HeadlessChrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&delay=4&hl=zh_CN&cr=US&len=48.381&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C100702%2C15105%2C25059%2C4174%2C30446%2C13517%2C5189%2C21437%2C4571%2C5236%2C4436%2C1366%2C1978%2C16087%2C9404%2C23826%2C9500%2C1840%2C12605%2C9869%2C1644%2C10127%2C1363%2C10108%2C8441%2C4718%2C16832%2C4359%2C329%2C9420%2C7349%2C2992%2C929%2C14341%2C4271%2C386%2C954%2C2754%2C12774%2C8142%2C6%2C1203%2C2198%2C9654%2C593%2C2979%2C3472%2C3548%2C3426%2C1302%2C3881%2C4566%2C1837%2C2333%2C489%2C6692%2C8023%2C931%2C5219%2C1527&afmt=251&muted=1&docid=hTMRb6YECEc&ei=VaPoaZuiLqb6sfIPyobAIQ&plid=AAZQCgZLiB7gw4qS&vm=CAEQABgEOjJBSHFpSlRLN2VXUXlmeVI0Szk3YThQMjVXUjJxMHBlSFp4UEpNbzNKRW5iSXdaaE15UWJkQUxkcUFQSTZQRE90Z05HRUxiY1QwcEZRMlRoeTNnaUx0UkR3U1ExTTVFMDZnd2lET1VBTnFPZ2RrRWhNbzQtWTZUMXpGelpmRjZITU5OQ2dibE1TQmc2dFRmZVRxR2R5TUh0Rg`
- `POST https://www.youtube.com/api/stats/qoe?fmt=134&cpn=MsffFfuTNu0YdpaQ&el=embedded&ns=yt&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C100702%2C15105%2C25059%2C4174%2C30446%2C13517%2C5189%2C21437%2C4571%2C5236%2C4436%2C1366%2C1978%2C16087%2C9404%2C23826%2C9500%2C1840%2C12605%2C9869%2C1644%2C10127%2C1363%2C10108%2C8441%2C4718%2C16832%2C4359%2C329%2C9420%2C7349%2C2992%2C929%2C14341%2C4271%2C386%2C954%2C2754%2C12774%2C8142%2C6%2C1203%2C2198%2C9654%2C593%2C2979%2C3472%2C3548%2C3426%2C1302%2C3881%2C4566%2C1837%2C2333%2C489%2C6692%2C8023%2C931%2C5219%2C1527&cl=901361096&seq=1&docid=hTMRb6YECEc&ei=VaPoaZuiLqb6sfIPyobAIQ&event=streamingstats&plid=AAZQCgZLiB7gw4qS&cbr=HeadlessChrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&vps=0.000:N,0.024:B,0.298:B,0.298:B&ctmp=dttg:t.0;dtt.1;gl.0&cat=streaming&cmt=0.024:0.000,0.298:0.000&vfs=0.298:134:134::r:sms.0&view=0.298:270:224&bwe=0.298:596378&bat=0.298:1:1&vis=0.298:0&bh=0.298:0.000&qclc=ChBNc2ZmRmZ1VE51MFlkcGFREAE`

