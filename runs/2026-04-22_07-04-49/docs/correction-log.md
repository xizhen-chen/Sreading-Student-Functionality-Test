# 自动修正日志（Self-Healing Log）

> 生成时间：2026/4/22 15:09:51

共发生 **13** 次自动修正：

| 阶段 | 问题 | 修正方式 | 时间 |
|------|------|---------|------|
| Phase 1 | Navigation to https://sr.sigmareading.com/zh-hans/home exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/home | 2026-04-22T07:05:29.356Z |
| Phase 1 | Screenshot "01-initial" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Timeout 4000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T07:05:35.359Z |
| Phase 1 | Screenshot "01-initial" failed | Skipped: page.screenshot: Timeout 2000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T07:05:37.374Z |
| Phase 1 | Navigation to https://sr.sigmareading.com/oauth2/authorization/oidc?locale=zh_CN exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/home | 2026-04-22T07:06:17.417Z |
| Phase 1 | Login form could not be resolved | Continue as guest | 2026-04-22T07:06:23.653Z |
| Phase 2 | Navigation to https://sr.sigmareading.com/zh-hans/home failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T07:06:59.432Z |
| Phase 2 | Screenshot "02-home-fullpage" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Timeout 4000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T07:07:05.959Z |
| Phase 2 | Screenshot "02-home-fullpage" failed | Skipped: page.screenshot: Timeout 2000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T07:07:07.969Z |
| Phase 2 | Primary selector "ion-tab-button" for "tabItems" matched 0 elements | Fell back to selector "nav a" (matched 8) | 2026-04-22T07:07:07.992Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/home exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/home | 2026-04-22T07:07:48.053Z |
| Phase 4 | Navigation to https://sr.sigmareading.com/zh-hans/homework failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T07:08:29.712Z |
| Phase 4 | Navigation to https://sr.sigmareading.com/zh-hans/joined-classes failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T07:09:09.452Z |
| Phase 5 | Navigation to https://sr.sigmareading.com/zh-hans/home failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T07:09:50.108Z |
