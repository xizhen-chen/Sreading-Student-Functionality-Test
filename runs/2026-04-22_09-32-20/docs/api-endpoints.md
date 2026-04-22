# SigmaReading API 端点列表

> 通过 Playwright Network 监听自动捕获
> 生成时间：2026/4/22 17:33:05

---

## GET

- `GET https://sr.sigmareading.com/services/sr-ms-core/api/account`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/assignment-list-lesson?listType=TODOLIST`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/assignment-number`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/learning-stats?type=ALL`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/profile`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/questionnaire`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/student-class-orders?page=0&size=20&classStatus.in=NOT_STARTED,STARTED,OPEN_ENDED&enrollmentStatus.in=INVITATION_SENT`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/student-class-orders?page=0&size=9999&classStatus.in=NOT_STARTED,STARTED,OPEN_ENDED&enrollmentStatus.in=ENROLLMENT_CONFIRMED,INVITATION_SENT,APPROVAL_AWAITING`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/playlists?sort=sortNum,desc&page=0&size=4&count=0`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/playlists?sort=sortNum,desc&page=0&size=6&count=0`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?page=0&size=3&count=0&recs=true`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?page=1&size=3&count=0&recs=true`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?sort=name.text,desc&page=0&size=8`
- `GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=admin%40localhost`
- `GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=xizhen.chen%2B1%40tonglec.org`
- `GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=xizhen.chen%2B3%40tonglec.org`
- `GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=xizhen.chen%40tonglec.org`

## POST

- `POST https://www.youtube.com/api/stats/atr?ns=yt&el=embedded&cpn=oIetPGhTZ6NYAAQJ&ver=2&cmt=3.037&fmt=134&fs=0&rt=4.387&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=4404&cl=901361096&mos=1&volume=100&cbr=HeadlessChrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&delay=4&hl=zh_CN&cr=US&len=48.381&fexp=v1%2C24004644%2C494889%2C26510702%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C6258%2C16948%2C69795%2C30907%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C11038%2C3168%2C14897%2C9404%2C23826%2C9500%2C1840%2C12605%2C9869%2C11771%2C11470%2C13160%2C21520%2C10984%2C9706%2C14341%2C4271%2C1340%2C2754%2C24322%2C9655%2C3572%2C3472%2C2642%2C906%2C3425%2C1305%2C3879%2C3307%2C1259%2C1837%2C9514%2C8954%2C5220&afmt=251&muted=1&docid=hTMRb6YECEc&ei=qZXoacCfKtGkt7EP4PukuA8&plid=AAZQCTWsvNKuJwTF&vm=CAEQABgEOjJBSHFpSlRMM2NkSldpQkRsamp5YXZDb0JjVGhMZmE1TFlSNmt0YTBucGhOYTNHcWdMZ2JkQUxkcUFQS2tyWDlqVmQtRmozMnM5dXRyLU5oNkpkdjJmRVlJUE9VWFlJTlBCUHhHLVhKY0xTS2JraHZ2UzVnWXBxeVpTLU1nQ1piS2lOMklpajdIZTBJSWlzTTQ0M2x6NG9sVA`
- `POST https://www.youtube.com/api/stats/playback?ns=yt&el=embedded&cpn=oIetPGhTZ6NYAAQJ&ver=2&cmt=0.033&fmt=134&fs=0&rt=1.385&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=1402&cl=901361096&mos=1&volume=100&cbr=HeadlessChrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&delay=4&hl=zh_CN&cr=US&len=48.381&fexp=v1%2C24004644%2C494889%2C26510702%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C6258%2C16948%2C69795%2C30907%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C11038%2C3168%2C14897%2C9404%2C23826%2C9500%2C1840%2C12605%2C9869%2C11771%2C11470%2C13160%2C21520%2C10984%2C9706%2C14341%2C4271%2C1340%2C2754%2C24322%2C9655%2C3572%2C3472%2C2642%2C906%2C3425%2C1305%2C3879%2C3307%2C1259%2C1837%2C9514%2C8954%2C5220&rtn=7&afmt=251&size=270%3A224&inview=1&muted=1&docid=hTMRb6YECEc&ei=qZXoacCfKtGkt7EP4PukuA8&plid=AAZQCTWsvNKuJwTF&referrer=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhTMRb6YECEc%3Fsi%3DUd-M1QV3QJJjWCWS%26enablejsapi%3D1%26autoplay%3D1%26mute%3D1%26rel%3D0%26loop%3D1%26playlist%3DhTMRb6YECEc&list=TLGGN23J0PoR3YsyMjA0MjAyNg&of=wbAUJoLFDaeeOSJrHXH1sg&vm=CAEQABgEOjJBSHFpSlRMM2NkSldpQkRsamp5YXZDb0JjVGhMZmE1TFlSNmt0YTBucGhOYTNHcWdMZ2JkQUxkcUFQS2tyWDlqVmQtRmozMnM5dXRyLU5oNkpkdjJmRVlJUE9VWFlJTlBCUHhHLVhKY0xTS2JraHZ2UzVnWXBxeVpTLU1nQ1piS2lOMklpajdIZTBJSWlzTTQ0M2x6NG9sVA`
- `POST https://www.youtube.com/api/stats/qoe?fmt=134&cpn=oIetPGhTZ6NYAAQJ&el=embedded&ns=yt&fexp=v1%2C24004644%2C494889%2C26510702%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C6258%2C16948%2C69795%2C30907%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C11038%2C3168%2C14897%2C9404%2C23826%2C9500%2C1840%2C12605%2C9869%2C11771%2C11470%2C13160%2C21520%2C10984%2C9706%2C14341%2C4271%2C1340%2C2754%2C24322%2C9655%2C3572%2C3472%2C2642%2C906%2C3425%2C1305%2C3879%2C3307%2C1259%2C1837%2C9514%2C8954%2C5220&cl=901361096&seq=1&docid=hTMRb6YECEc&ei=qZXoacCfKtGkt7EP4PukuA8&event=streamingstats&plid=AAZQCTWsvNKuJwTF&cbr=HeadlessChrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&vps=0.000:N,0.015:B,0.278:B,0.278:B&ctmp=dttg:t.0;dtt.1;gl.0&cat=streaming&cmt=0.015:0.000,0.278:0.000&vfs=0.278:134:134::r:sms.0&view=0.278:270:224&bwe=0.278:648806&bat=0.278:1:1&vis=0.278:0&bh=0.278:0.000&qclc=ChBvSWV0UEdoVFo2TllBQVFKEAE`

