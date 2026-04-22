# SigmaReading API 端点列表

> 通过 Playwright Network 监听自动捕获
> 生成时间：2026/4/22 17:34:22

---

## GET

- `GET https://sr.sigmareading.com/services/sr-ms-core/api/account`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/assignment-number`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/learning-stats?type=ALL`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/profile`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/questionnaire`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/my-account/student-class-orders?page=0&size=20&classStatus.in=NOT_STARTED,STARTED,OPEN_ENDED&enrollmentStatus.in=INVITATION_SENT`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/playlists?sort=sortNum,desc&page=0&size=20&currentUser=false`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/playlists?sort=sortNum,desc&page=0&size=4&count=0`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/playlists?sort=sortNum,desc&page=0&size=6&count=0`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/playlistsPage/6539da63ca06cb10e16f58ef?page=0&size=20`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/playlistsPage/653a1734d448f0607b7aa574?page=0&size=20`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?page=3&size=3&count=0&recs=true`
- `GET https://sr.sigmareading.com/services/sr-ms-core/api/readings?sort=name.text,desc&page=0&size=8`
- `GET https://sr.sigmareading.com/services/tlc-ms-core/api/user-docs/public?login=xizhen.chen%2B3%40tonglec.org`

## POST

- `POST https://www.youtube.com/api/stats/atr?ns=yt&el=embedded&cpn=SUEBB7UBj1jWaIgC&ver=2&cmt=3.012&fmt=134&fs=0&rt=4.133&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=4155&cl=901361096&mos=1&volume=100&cbr=HeadlessChrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&delay=4&hl=zh_CN&cr=US&len=49&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C100702%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C9670%2C1368%2C1978%2C16087%2C9404%2C23826%2C9500%2C1840%2C12605%2C5508%2C4361%2C11771%2C1365%2C10106%2C13159%2C16832%2C4360%2C328%2C16768%2C3922%2C14341%2C4271%2C387%2C953%2C2754%2C9843%2C2932%2C8147%2C1207%2C2193%2C552%2C9104%2C3571%2C3472%2C3548%2C3425%2C1303%2C3881%2C2816%2C1750%2C1836%2C2335%2C7180%2C8954%2C2811%2C2409%2C1524&afmt=251&muted=1&docid=hTMRb6YECEc&ei=_pXoadX_KbX7sfIP3dWvmAo&plid=AAZQCTq9uXGWQghB&vm=CAEQABgEOjJBSHFpSlRLVHRaVFNybV8zMmxoVFAzd2NSd3Z3RjhQWmJubk1SajQxV25nRVF2bTBrZ2JkQUxkcUFQSzhxNzd1bW9zdlhCeE90TzBOdkhHc2RLbFB2cVN3VDY0U0o3dUFGc2xMWTl3Z1lKRkZFc3duTXV0RkY3TVJ0S1Fnc1BQWng0UHk2eldteERMdUE4ajRONkoxQUFPYg`
- `POST https://www.youtube.com/api/stats/playback?ns=yt&el=embedded&cpn=SUEBB7UBj1jWaIgC&ver=2&cmt=0.008&fmt=134&fs=0&rt=1.13&euri=https%3A%2F%2Fsr.sigmareading.com%2F&lact=1152&cl=901361096&mos=1&volume=100&cbr=HeadlessChrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&autoplay=1&epm=1&delay=4&hl=zh_CN&cr=US&len=49&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C100702%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C9670%2C1368%2C1978%2C16087%2C9404%2C23826%2C9500%2C1840%2C12605%2C5508%2C4361%2C11771%2C1365%2C10106%2C13159%2C16832%2C4360%2C328%2C16768%2C3922%2C14341%2C4271%2C387%2C953%2C2754%2C9843%2C2932%2C8147%2C1207%2C2193%2C552%2C9104%2C3571%2C3472%2C3548%2C3425%2C1303%2C3881%2C2816%2C1750%2C1836%2C2335%2C7180%2C8954%2C2811%2C2409%2C1524&rtn=10&afmt=251&size=270%3A224&inview=1&muted=1&docid=hTMRb6YECEc&ei=_pXoadX_KbX7sfIP3dWvmAo&plid=AAZQCTq9uXGWQghB&referrer=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhTMRb6YECEc%3Fsi%3DUd-M1QV3QJJjWCWS%26enablejsapi%3D1%26autoplay%3D1%26mute%3D1%26rel%3D0%26loop%3D1%26playlist%3DhTMRb6YECEc&list=TLGGN23J0PoR3YsyMjA0MjAyNg&of=wbAUJoLFDaeeOSJrHXH1sg&vm=CAEQABgEOjJBSHFpSlRLVHRaVFNybV8zMmxoVFAzd2NSd3Z3RjhQWmJubk1SajQxV25nRVF2bTBrZ2JkQUxkcUFQSzhxNzd1bW9zdlhCeE90TzBOdkhHc2RLbFB2cVN3VDY0U0o3dUFGc2xMWTl3Z1lKRkZFc3duTXV0RkY3TVJ0S1Fnc1BQWng0UHk2eldteERMdUE4ajRONkoxQUFPYg`
- `POST https://www.youtube.com/api/stats/qoe?fmt=134&cpn=SUEBB7UBj1jWaIgC&el=embedded&ns=yt&fexp=v1%2C24004644%2C27005591%2C53408%2C34656%2C106030%2C18644%2C117689%2C9252%2C3479%2C13030%2C23206%2C100702%2C15105%2C25059%2C4174%2C30446%2C13518%2C5188%2C21437%2C4571%2C9670%2C1368%2C1978%2C16087%2C9404%2C23826%2C9500%2C1840%2C12605%2C5508%2C4361%2C11771%2C1365%2C10106%2C13159%2C16832%2C4360%2C328%2C16768%2C3922%2C14341%2C4271%2C387%2C953%2C2754%2C9843%2C2932%2C8147%2C1207%2C2193%2C552%2C9104%2C3571%2C3472%2C3548%2C3425%2C1303%2C3881%2C2816%2C1750%2C1836%2C2335%2C7180%2C8954%2C2811%2C2409%2C1524&cl=901361096&seq=1&docid=hTMRb6YECEc&ei=_pXoadX_KbX7sfIP3dWvmAo&event=streamingstats&plid=AAZQCTq9uXGWQghB&cbr=HeadlessChrome&cbrver=147.0.7727.15&c=WEB_EMBEDDED_PLAYER&cver=2.20260421.01.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&vps=0.000:N,0.017:B,0.295:B,0.295:B&ctmp=dttg:t.0;dtt.1;gl.0&cat=streaming&cmt=0.017:0.000,0.295:0.000&vfs=0.295:134:134::r:sms.0&view=0.295:270:224&bwe=0.295:635699&bat=0.295:1:1&vis=0.295:0&bh=0.295:0.000&qclc=ChBTVUVCQjdVQmoxaldhSWdDEAE`

