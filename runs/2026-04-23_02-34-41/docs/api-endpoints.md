# SigmaReading API 端点列表

> 通过 Playwright Network 监听自动捕获
> 生成时间：2026/4/23 10:37:16

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
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/user-assignment-exams?history=false`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/playlists?sort=sortNum,desc&page=0&size=20&currentUser=false`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/playlists?sort=sortNum,desc&page=0&size=4&count=0`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/playlists?sort=sortNum,desc&page=0&size=6&count=0`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?page=0&size=8&currentUser=true&status=ACTIVE&status=PENDING&myFavorite=true`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?page=2&size=3&count=0&recs=true`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?page=3&size=3&count=0&recs=true`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?page=4&size=3&count=0&recs=true`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?sort=created_date,desc&page=0&size=20&search=%E9%B2%A4%E9%B1%BC%E8%B7%B3%E9%BE%99%E9%97%A8%E5%90%8C`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?sort=name.text,desc&page=0&size=20`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?sort=name.text,desc&page=0&size=20&search=%E9%B2%A4%E9%B1%BC%E8%B7%B3%E9%BE%99%E9%97%A8%E5%90%8C`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?sort=name.text,desc&page=0&size=8`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/textbooks/sku-grouped`
- `GET https://sr.sigmareading.com/services/tlc-ms-core/api/my-account/tl-orders?realm.equals=sr&sort=orderDate,desc&status.in=PAYING&page=0&size=5`
- `GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=admin%40localhost`
- `GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=xizhen.chen%2B1%40tonglec.org`
- `GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=xizhen.chen%2B3%40tonglec.org`
- `GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=xizhen.chen%40tonglec.org`

## POST

- `POST https://www.youtube.com/api/stats/atr?ns=yt&el=embedded&cpn=Yvcd6GJNsAFDuQHQ&ver=2&cmt=2.975&fmt=134&fs=0&rt=4.636&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=4657&cl=902926829&mos=1&volume=100&cbr=HeadlessChrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260422.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&delay=4&hl=zh_CN&cr=US&len=48.301&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C100702%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C11038%2C1977%2C13110%2C2978%2C9404%2C23826%2C9500%2C1840%2C12605%2C5508%2C4361%2C11771%2C1364%2C10106%2C13160%2C21520%2C10452%2C10238%2C14341%2C3304%2C967%2C386%2C954%2C2754%2C22128%2C2195%2C8060%2C1594%2C3572%2C3472%2C2642%2C906%2C3426%2C1304%2C8445%2C1836%2C9515%2C5072%2C3882%2C5220%2C1526%2C730&afmt=251&muted=1&docid=MQ5e0zb8MRo&ei=RoXpaemTILyTsfIP5bjFsAI&plid=AAZQF33fsB-NC6Ib&vm=CAEQABgEOjJBSHFpSlRMMFdvOVQ1cUtaZ0lydzRDeXlUZkQyT0RpUmxrUW1UbUZBMVdsMGpNNlBjUWJkQUxkcUFQSTJsZlNwZUlCWE1BTU5Rdk9nQzdHRExtZlBIcDVFSU9kQ0xTcE9xMHYtRGU3SjBLWVJ2bnUwQmtlT3pqLUxPNmVZZDczOUNLYl9UUXJrOFBVV2ZIRTg0dWJxN3I2cQ`
- `POST https://www.youtube.com/api/stats/playback?ns=yt&el=embedded&cpn=Yvcd6GJNsAFDuQHQ&ver=2&cmt=0.01&fmt=134&fs=0&rt=1.632&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=1653&cl=902926829&mos=1&volume=100&cbr=HeadlessChrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260422.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&delay=4&hl=zh_CN&cr=US&len=48.301&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C100702%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C11038%2C1977%2C13110%2C2978%2C9404%2C23826%2C9500%2C1840%2C12605%2C5508%2C4361%2C11771%2C1364%2C10106%2C13160%2C21520%2C10452%2C10238%2C14341%2C3304%2C967%2C386%2C954%2C2754%2C22128%2C2195%2C8060%2C1594%2C3572%2C3472%2C2642%2C906%2C3426%2C1304%2C8445%2C1836%2C9515%2C5072%2C3882%2C5220%2C1526%2C730&rtn=7&afmt=251&size=270%3A224&inview=1&muted=1&docid=MQ5e0zb8MRo&ei=RoXpaemTILyTsfIP5bjFsAI&plid=AAZQF33fsB-NC6Ib&referrer=https%3A%2F%2Fwww.youtube.com%2Fembed%2FMQ5e0zb8MRo%3Fsi%3D34ZL9TvcciKOXcDN%26enablejsapi%3D1%26autoplay%3D1%26mute%3D1%26rel%3D0%26loop%3D1%26playlist%3DMQ5e0zb8MRo&list=TLGGrCtcL_LOY8syMzA0MjAyNg&of=wbAUJoLFDaeeOSJrHXH1sg&vm=CAEQABgEOjJBSHFpSlRMMFdvOVQ1cUtaZ0lydzRDeXlUZkQyT0RpUmxrUW1UbUZBMVdsMGpNNlBjUWJkQUxkcUFQSTJsZlNwZUlCWE1BTU5Rdk9nQzdHRExtZlBIcDVFSU9kQ0xTcE9xMHYtRGU3SjBLWVJ2bnUwQmtlT3pqLUxPNmVZZDczOUNLYl9UUXJrOFBVV2ZIRTg0dWJxN3I2cQ`
- `POST https://www.youtube.com/api/stats/qoe?fmt=134&cpn=Yvcd6GJNsAFDuQHQ&el=embedded&ns=yt&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C100702%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C11038%2C1977%2C13110%2C2978%2C9404%2C23826%2C9500%2C1840%2C12605%2C5508%2C4361%2C11771%2C1364%2C10106%2C13160%2C21520%2C10452%2C10238%2C14341%2C3304%2C967%2C386%2C954%2C2754%2C22128%2C2195%2C8060%2C1594%2C3572%2C3472%2C2642%2C906%2C3426%2C1304%2C8445%2C1836%2C9515%2C5072%2C3882%2C5220%2C1526%2C730&cl=902926829&seq=1&docid=MQ5e0zb8MRo&ei=RoXpaemTILyTsfIP5bjFsAI&event=streamingstats&plid=AAZQF33fsB-NC6Ib&cbr=HeadlessChrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260422.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&vps=0.000:N,0.017:B,0.304:B,0.304:B&ctmp=dttg:t.0;dtt.1;gl.0&cat=streaming&cmt=0.017:0.000,0.304:0.000&vfs=0.304:134:134::r:sms.0&view=0.304:270:224&bwe=0.304:602931&bat=0.304:1:1&vis=0.304:0&bh=0.304:0.000&qclc=ChBZdmNkNkdKTnNBRkR1UUhREAE`

