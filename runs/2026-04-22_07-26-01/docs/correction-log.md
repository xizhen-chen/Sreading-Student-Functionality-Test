# 自动修正日志（Self-Healing Log）

> 生成时间：2026/4/22 15:29:44

共发生 **10** 次自动修正：

| 阶段 | 问题 | 修正方式 | 时间 |
|------|------|---------|------|
| Phase 1 | Navigation to https://sr.sigmareading.com/zh-hans/home failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T07:26:40.081Z |
| Phase 1 | Screenshot "01-initial" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Timeout 4000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T07:26:46.096Z |
| Phase 1 | Screenshot "01-initial" failed | Skipped: page.screenshot: Timeout 2000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T07:26:48.110Z |
| Phase 1 | Navigation to https://sr.sigmareading.com/oauth2/authorization/oidc?locale=zh_CN failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T07:27:08.476Z |
| Phase 1 | Login submission did not leave login/unauthorized state | Continue as guest | 2026-04-22T07:27:38.535Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/home exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/home | 2026-04-22T07:28:18.557Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/playlist failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T07:28:59.433Z |
| Phase 3 | Screenshot "03-nav-zh-hans-playlist" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Timeout 4000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T07:29:05.461Z |
| Phase 3 | Screenshot "03-nav-zh-hans-playlist" failed | Skipped: page.screenshot: Timeout 2000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T07:29:07.463Z |
| Phase 4 | Navigation to https://sr.sigmareading.com/zh-hans/playlist failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T07:29:42.853Z |
