# SigmaReading API 端点列表

> 通过 Playwright Network 监听自动捕获
> 生成时间：2026/4/22 18:40:03

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
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?page=3&size=3&count=0&recs=true`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?sort=name.text,desc&page=0&size=8`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/textbooks/sku-grouped`
- `GET https://sr.sigmareading.com/services/tlc-ms-core/api/my-account/tl-orders?realm.equals=sr&sort=orderDate,desc&status.in=PAYING&page=0&size=5`
- `GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=xizhen.chen%2B3%40tonglec.org`

## POST

- `POST https://www.youtube.com/api/stats/atr?ns=yt&el=embedded&cpn=ygnWYdD-L58aZqRG&ver=2&cmt=3.066&fmt=134&fs=0&rt=3.958&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=3977&cl=901361096&mos=1&volume=100&cbr=HeadlessChrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&hl=zh_CN&cr=US&len=48.381&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C100702%2C15105%2C20831%2C4228%2C4174%2C30447%2C13517%2C5188%2C21437%2C4571%2C11038%2C1978%2C1191%2C11918%2C2978%2C9404%2C23826%2C9500%2C1840%2C12605%2C9869%2C11771%2C1365%2C10106%2C8442%2C4717%2C2282%2C18909%2C329%2C20690%2C14341%2C4271%2C386%2C954%2C2754%2C12775%2C8148%2C1202%2C2197%2C1625%2C8030%2C595%2C2977%2C3472%2C3548%2C3425%2C1303%2C3881%2C4566%2C1837%2C9514%2C1084%2C7870%2C3104%2C1963%2C153%2C1524&afmt=251&muted=1&docid=hTMRb6YECEc&ei=ZaXoadDxFYWuquwPtMir2As&plid=AAZQCiW-DZFFOOLx&vm=CAEQABgEOjJBSHFpSlRKSTRWOXNDOWlkMWdNc21Iam5xc19yc2g3MmNneUthWG1wTDMyTVNTR1k0Z2JiQUxkcUFQTF9rS0FWSENjb0pkTExaTG1nWHFEUkJlLU9JUVQ2UmFaN0syZlVXYkIzc1YxdzdhTVVTdlZXX3hOcWtTTXcyUVo4empCZWhiTkpTSlpGMlNEVExtLU1wQ2s3MXc`
- `POST https://www.youtube.com/api/stats/playback?ns=yt&el=embedded&cpn=ygnWYdD-L58aZqRG&ver=2&cmt=0.046&fmt=134&fs=0&rt=0.94&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=959&cl=901361096&mos=1&volume=100&cbr=HeadlessChrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&hl=zh_CN&cr=US&len=48.381&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C100702%2C15105%2C20831%2C4228%2C4174%2C30447%2C13517%2C5188%2C21437%2C4571%2C11038%2C1978%2C1191%2C11918%2C2978%2C9404%2C23826%2C9500%2C1840%2C12605%2C9869%2C11771%2C1365%2C10106%2C8442%2C4717%2C2282%2C18909%2C329%2C20690%2C14341%2C4271%2C386%2C954%2C2754%2C12775%2C8148%2C1202%2C2197%2C1625%2C8030%2C595%2C2977%2C3472%2C3548%2C3425%2C1303%2C3881%2C4566%2C1837%2C9514%2C1084%2C7870%2C3104%2C1963%2C153%2C1524&rtn=7&afmt=251&size=270%3A224&inview=1&muted=1&docid=hTMRb6YECEc&ei=ZaXoadDxFYWuquwPtMir2As&plid=AAZQCiW-DZFFOOLx&referrer=https%3A%2F%2Fsr.sigmareading.com%2F&of=wbAUJoLFDaeeOSJrHXH1sg&vm=CAEQABgEOjJBSHFpSlRKSTRWOXNDOWlkMWdNc21Iam5xc19yc2g3MmNneUthWG1wTDMyTVNTR1k0Z2JiQUxkcUFQTF9rS0FWSENjb0pkTExaTG1nWHFEUkJlLU9JUVQ2UmFaN0syZlVXYkIzc1YxdzdhTVVTdlZXX3hOcWtTTXcyUVo4empCZWhiTkpTSlpGMlNEVExtLU1wQ2s3MXc`
- `POST https://www.youtube.com/api/stats/qoe?fmt=134&cpn=ygnWYdD-L58aZqRG&el=embedded&ns=yt&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C100702%2C15105%2C20831%2C4228%2C4174%2C30447%2C13517%2C5188%2C21437%2C4571%2C11038%2C1978%2C1191%2C11918%2C2978%2C9404%2C23826%2C9500%2C1840%2C12605%2C9869%2C11771%2C1365%2C10106%2C8442%2C4717%2C2282%2C18909%2C329%2C20690%2C14341%2C4271%2C386%2C954%2C2754%2C12775%2C8148%2C1202%2C2197%2C1625%2C8030%2C595%2C2977%2C3472%2C3548%2C3425%2C1303%2C3881%2C4566%2C1837%2C9514%2C1084%2C7870%2C3104%2C1963%2C153%2C1524&cl=901361096&seq=1&docid=hTMRb6YECEc&ei=ZaXoadDxFYWuquwPtMir2As&event=streamingstats&plid=AAZQCiW-DZFFOOLx&cbr=HeadlessChrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&vps=0.000:N,0.016:B,0.030:B,0.030:B&ctmp=dttg:t.0;dtt.1;gl.0&cat=streaming&cmt=0.016:0.000,0.030:0.000&vfs=0.030:134:134::r:sms.0&view=0.030:270:224&bwe=0.030:655360&vis=0.030:0&bh=0.030:0.000&qclc=ChB5Z25XWWRELUw1OGFacVJHEAE`

