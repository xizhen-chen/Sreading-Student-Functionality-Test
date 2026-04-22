# SigmaReading API 端点列表

> 通过 Playwright Network 监听自动捕获
> 生成时间：2026/4/22 18:39:28

---

## GET

- `GET https://sr.sigmareading.com/services/sr-ms-core/api/account`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/assignment-number`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/learning-stats?type=ALL`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/profile`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/questionnaire`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/student-class-orders?page=0&size=20&classStatus.in=NOT_STARTED,STARTED,OPEN_ENDED&enrollmentStatus.in=INVITATION_SENT`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/student-class-orders?page=0&size=9999&classStatus.in=NOT_STARTED,STARTED,OPEN_ENDED&enrollmentStatus.in=ENROLLMENT_CONFIRMED,INVITATION_SENT,APPROVAL_AWAITING`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/playlists?sort=sortNum,desc&page=0&size=4&count=0`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/playlists?sort=sortNum,desc&page=0&size=6&count=0`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?page=1&size=3&count=0&recs=true`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?page=2&size=3&count=0&recs=true`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?sort=name.text,desc&page=0&size=8`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/textbooks/sku-grouped`
- `GET https://sr.sigmareading.com/services/tlc-ms-core/api/my-account/tl-orders?realm.equals=sr&sort=orderDate,desc&status.in=PAYING&page=0&size=5`
- `GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=admin%40localhost`
- `GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=xizhen.chen%2B1%40tonglec.org`
- `GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=xizhen.chen%2B3%40tonglec.org`
- `GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=xizhen.chen%40tonglec.org`

## POST

- `POST https://www.youtube.com/api/stats/atr?ns=yt&el=embedded&cpn=lCXOrzrL2Vtx2GUP&ver=2&cmt=3.045&fmt=134&fs=0&rt=4.287&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=4308&cl=901361096&mos=1&volume=100&cbr=HeadlessChrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&delay=4&hl=zh_CN&cr=US&len=48.301&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C6257%2C16949%2C100702%2C15105%2C25059%2C4174%2C30446%2C13517%2C5189%2C21437%2C4571%2C5239%2C4431%2C1368%2C1978%2C16087%2C9404%2C23826%2C9500%2C1840%2C12605%2C9869%2C1645%2C10126%2C1364%2C4991%2C5116%2C13159%2C21191%2C329%2C9421%2C11269%2C14341%2C3304%2C967%2C386%2C954%2C2754%2C12769%2C5%2C6748%2C2607%2C2193%2C9655%2C3572%2C3472%2C3548%2C3426%2C1304%2C3879%2C4566%2C1837%2C9514%2C5073%2C3882%2C5219%2C251%2C1273&afmt=251&muted=1&docid=MQ5e0zb8MRo&ei=MKXoacaaE-jMsfIPl63IqAc&plid=AAZQCiKUs5RrJupd&vm=CAEQABgEOjJBSHFpSlRJYlFkRnhQOEpwVVlPd2F3OGN1WWVGLUhQMmp2WUFhd2x0NFl1MzVKMkdCQWJkQUxkcUFQTGhIVy1tM0UtOWJvWFRDaUhZbDNSTVdPX1lnd2xDeXExMU9TUmJwaXB2amppT2t0MTkxT0lSZTd0elhhZkt3Q3MyVGYxZHlINlQycXBtY2xsekxWRml3ZHQxazJ3UA`
- `POST https://www.youtube.com/api/stats/playback?ns=yt&el=embedded&cpn=lCXOrzrL2Vtx2GUP&ver=2&cmt=0.04&fmt=134&fs=0&rt=1.283&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=1304&cl=901361096&mos=1&volume=100&cbr=HeadlessChrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&delay=4&hl=zh_CN&cr=US&len=48.301&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C6257%2C16949%2C100702%2C15105%2C25059%2C4174%2C30446%2C13517%2C5189%2C21437%2C4571%2C5239%2C4431%2C1368%2C1978%2C16087%2C9404%2C23826%2C9500%2C1840%2C12605%2C9869%2C1645%2C10126%2C1364%2C4991%2C5116%2C13159%2C21191%2C329%2C9421%2C11269%2C14341%2C3304%2C967%2C386%2C954%2C2754%2C12769%2C5%2C6748%2C2607%2C2193%2C9655%2C3572%2C3472%2C3548%2C3426%2C1304%2C3879%2C4566%2C1837%2C9514%2C5073%2C3882%2C5219%2C251%2C1273&rtn=10&afmt=251&size=270%3A224&inview=1&muted=1&docid=MQ5e0zb8MRo&ei=MKXoacaaE-jMsfIPl63IqAc&plid=AAZQCiKUs5RrJupd&referrer=https%3A%2F%2Fwww.youtube.com%2Fembed%2FMQ5e0zb8MRo%3Fsi%3D34ZL9TvcciKOXcDN%26enablejsapi%3D1%26autoplay%3D1%26mute%3D1%26rel%3D0%26loop%3D1%26playlist%3DMQ5e0zb8MRo&list=TLGGrCtcL_LOY8syMjA0MjAyNg&of=wbAUJoLFDaeeOSJrHXH1sg&vm=CAEQABgEOjJBSHFpSlRJYlFkRnhQOEpwVVlPd2F3OGN1WWVGLUhQMmp2WUFhd2x0NFl1MzVKMkdCQWJkQUxkcUFQTGhIVy1tM0UtOWJvWFRDaUhZbDNSTVdPX1lnd2xDeXExMU9TUmJwaXB2amppT2t0MTkxT0lSZTd0elhhZkt3Q3MyVGYxZHlINlQycXBtY2xsekxWRml3ZHQxazJ3UA`
- `POST https://www.youtube.com/api/stats/qoe?fmt=134&cpn=lCXOrzrL2Vtx2GUP&el=embedded&ns=yt&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C6257%2C16949%2C100702%2C15105%2C25059%2C4174%2C30446%2C13517%2C5189%2C21437%2C4571%2C5239%2C4431%2C1368%2C1978%2C16087%2C9404%2C23826%2C9500%2C1840%2C12605%2C9869%2C1645%2C10126%2C1364%2C4991%2C5116%2C13159%2C21191%2C329%2C9421%2C11269%2C14341%2C3304%2C967%2C386%2C954%2C2754%2C12769%2C5%2C6748%2C2607%2C2193%2C9655%2C3572%2C3472%2C3548%2C3426%2C1304%2C3879%2C4566%2C1837%2C9514%2C5073%2C3882%2C5219%2C251%2C1273&cl=901361096&seq=1&docid=MQ5e0zb8MRo&ei=MKXoacaaE-jMsfIPl63IqAc&event=streamingstats&plid=AAZQCiKUs5RrJupd&cbr=HeadlessChrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&vps=0.000:N,0.017:B,0.293:B,0.293:B&ctmp=dttg:t.0;dtt.1;gl.0&cat=streaming&cmt=0.017:0.000,0.293:0.000&vfs=0.293:134:134::r:sms.0&view=0.293:270:224&bwe=0.293:655360&bat=0.293:1:1&vis=0.293:0&bh=0.293:0.000&qclc=ChBsQ1hPcnpyTDJWdHgyR1VQEAE`

