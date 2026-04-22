# 自动修正日志（Self-Healing Log）

> 生成时间：2026/4/22 15:21:12

共发生 **13** 次自动修正：

| 阶段 | 问题 | 修正方式 | 时间 |
|------|------|---------|------|
| Phase 1 | Navigation to https://sr.sigmareading.com/zh-hans/home failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T07:15:26.350Z |
| Phase 1 | Screenshot "01-initial" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Timeout 4000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T07:15:32.382Z |
| Phase 1 | Screenshot "01-initial" failed | Skipped: page.screenshot: Timeout 2000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T07:15:34.394Z |
| Phase 1 | Navigation to https://sr.sigmareading.com/oauth2/authorization/oidc?locale=zh_CN failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T07:15:59.102Z |
| Phase 1 | Login submission did not leave login/unauthorized state | Continue as guest | 2026-04-22T07:16:23.749Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/home failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T07:17:01.511Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/reading failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T07:17:40.473Z |
| Phase 3 | Screenshot "03-nav-zh-hans-reading" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Timeout 4000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T07:17:46.493Z |
| Phase 3 | Screenshot "03-nav-zh-hans-reading" failed | Skipped: page.screenshot: Timeout 2000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T07:17:48.505Z |
| Phase 3 /reading | Navigation to https://sr.sigmareading.com/zh-hans/reading exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/reading | 2026-04-22T07:18:32.092Z |
| Phase 3 /reading | Navigation to https://sr.sigmareading.com/zh-hans/playlist failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T07:19:39.843Z |
| Phase 4 | Navigation to https://sr.sigmareading.com/zh-hans/reading exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/reading | 2026-04-22T07:20:32.451Z |
| Phase 5 | Navigation to https://sr.sigmareading.com/zh-hans/reading failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T07:21:11.391Z |
