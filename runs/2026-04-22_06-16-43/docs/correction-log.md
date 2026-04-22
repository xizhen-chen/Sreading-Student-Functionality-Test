# 自动修正日志（Self-Healing Log）

> 生成时间：2026/4/22 14:25:34

共发生 **22** 次自动修正：

| 阶段 | 问题 | 修正方式 | 时间 |
|------|------|---------|------|
| Phase 1 | Navigation to https://sr.sigmareading.com/zh-hans/home exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/home | 2026-04-22T06:17:23.833Z |
| Phase 1 | Screenshot "01-initial" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Timeout 4000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T06:17:29.841Z |
| Phase 1 | Screenshot "01-initial" failed | Skipped: page.screenshot: Timeout 2000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T06:17:31.853Z |
| Phase 1 | Navigation to https://sr.sigmareading.com/oauth2/authorization/oidc?locale=zh_CN failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T06:17:56.052Z |
| Phase 1 | Login submission did not leave login/unauthorized state | Continue as guest | 2026-04-22T06:18:22.681Z |
| Phase 2 | Navigation to https://sr.sigmareading.com/zh-hans/home failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T06:19:00.333Z |
| Phase 2 | Screenshot "02-home-fullpage" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Timeout 4000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T06:19:06.842Z |
| Phase 2 | Screenshot "02-home-fullpage" failed | Skipped: page.screenshot: Timeout 2000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T06:19:08.858Z |
| Phase 2 | Primary selector "ion-tab-button" for "tabItems" matched 0 elements | Fell back to selector "nav a" (matched 8) | 2026-04-22T06:19:08.884Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/home failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T06:19:48.538Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/playlist failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T06:20:27.949Z |
| Phase 3 | Screenshot "03-nav-zh-hans-playlist" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Timeout 4000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T06:20:33.956Z |
| Phase 3 | Screenshot "03-nav-zh-hans-playlist" failed | Skipped: page.screenshot: Timeout 2000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T06:20:35.964Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/reading failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T06:21:13.474Z |
| Phase 3 | Screenshot "03-nav-zh-hans-reading" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Timeout 4000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T06:21:19.491Z |
| Phase 3 | Screenshot "03-nav-zh-hans-reading" failed | Skipped: page.screenshot: Timeout 2000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T06:21:21.494Z |
| Phase 3 /reading | Navigation to https://sr.sigmareading.com/zh-hans/reading failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T06:22:00.071Z |
| Phase 3 /reading | Navigation to https://sr.sigmareading.com/zh-hans/home failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T06:22:39.917Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/ failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T06:23:03.516Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/audio-dictionary failed with stronger strategy | Succeeded using waitUntil="load" (strategy #3) | 2026-04-22T06:23:40.266Z |
| Phase 4 | Navigation to https://sr.sigmareading.com/zh-hans/assignment/69e458ad85faa905f1218d2d?from=homework&homeworkTab=list&homeworkName=list failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T06:24:21.378Z |
| Phase 4 | Navigation to https://sr.sigmareading.com/zh-hans/playlist failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T06:25:03.653Z |
