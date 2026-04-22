# 自动修正日志（Self-Healing Log）

> 生成时间：2026/4/22 12:48:19

共发生 **38** 次自动修正：

| 阶段 | 问题 | 修正方式 | 时间 |
|------|------|---------|------|
| Phase 1 | Navigation to https://sr.sigmareading.com/zh-hans/home failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T04:43:05.878Z |
| Phase 1 | Screenshot "01-initial" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Timeout 4000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T04:43:11.900Z |
| Phase 1 | Screenshot "01-initial" failed | Skipped: page.screenshot: Timeout 2000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T04:43:13.913Z |
| Phase 1 | Navigation to https://sr.sigmareading.com/zh-hans/home exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/home | 2026-04-22T04:43:53.928Z |
| Phase 1 | Navigation to https://sr.sigmareading.com/zh-hans/profile failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T04:44:34.705Z |
| Phase 1 | Navigation to https://sr.sigmareading.com/zh-hans/login failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T04:45:15.686Z |
| Phase 1 | Login form could not be resolved | Continue as guest | 2026-04-22T04:45:16.943Z |
| Phase 2 | Navigation to https://sr.sigmareading.com/zh-hans/home failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T04:45:53.039Z |
| Phase 2 | Screenshot "02-home-fullpage" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Timeout 4000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T04:45:59.555Z |
| Phase 2 | Screenshot "02-home-fullpage" failed | Skipped: page.screenshot: Timeout 2000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T04:46:01.567Z |
| Phase 2 | Primary selector "ion-tab-button" for "tabItems" matched 0 elements | Fell back to selector "nav a" (matched 8) | 2026-04-22T04:46:01.595Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/home failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T04:46:37.583Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/playlist exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/playlist | 2026-04-22T04:47:19.672Z |
| Phase 3 | Screenshot "03-nav-zh-hans-playlist" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Timeout 4000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
[2m  - fonts loaded[22m
 | 2026-04-22T04:47:25.688Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/reading failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T04:48:03.855Z |
| Phase 3 | Screenshot "03-nav-zh-hans-reading" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Target crashed 
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
[2m  - fonts loaded[22m
 | 2026-04-22T04:48:09.493Z |
| Phase 3 | Screenshot "03-nav-zh-hans-reading" failed | Skipped: page.screenshot: Target crashed 
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
[2m  - fonts loaded[22m
 | 2026-04-22T04:48:09.495Z |
| Phase 3 | Navigation to /zh-hans/reading threw an error | Skipped: page.$$eval: Target crashed  | 2026-04-22T04:48:09.499Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/ exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/reading | 2026-04-22T04:48:09.503Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/audio-dictionary exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/reading | 2026-04-22T04:48:11.508Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/character-map-create exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/reading | 2026-04-22T04:48:13.522Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/copybook exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/reading | 2026-04-22T04:48:15.530Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/pinyin-pathway exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/reading | 2026-04-22T04:48:17.545Z |
| Phase 3 | Navigation to /zh-hans/pinyin-pathway threw an error | Skipped: page.waitForTimeout: Target page, context or browser has been closed | 2026-04-22T04:48:19.558Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/word-express exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/reading | 2026-04-22T04:48:19.561Z |
| Phase 3 | Navigation to /zh-hans/word-express threw an error | Skipped: page.waitForTimeout: Target page, context or browser has been closed | 2026-04-22T04:48:19.562Z |
| Phase 4 | Navigation to https://sr.sigmareading.com/zh-hans/homework exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/reading | 2026-04-22T04:48:19.563Z |
| Phase 4 | Seed route /zh-hans/homework failed | Skipped: page.waitForTimeout: Target page, context or browser has been closed | 2026-04-22T04:48:19.564Z |
| Phase 4 | Navigation to https://sr.sigmareading.com/zh-hans/reading exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/reading | 2026-04-22T04:48:19.566Z |
| Phase 4 | Seed route /zh-hans/reading failed | Skipped: page.waitForTimeout: Target page, context or browser has been closed | 2026-04-22T04:48:19.566Z |
| Phase 4 | Navigation to https://sr.sigmareading.com/zh-hans/playlist exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/reading | 2026-04-22T04:48:19.568Z |
| Phase 4 | Seed route /zh-hans/playlist failed | Skipped: page.waitForTimeout: Target page, context or browser has been closed | 2026-04-22T04:48:19.568Z |
| Phase 4 | Navigation to https://sr.sigmareading.com/zh-hans/joined-classes exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/reading | 2026-04-22T04:48:19.569Z |
| Phase 4 | Seed route /zh-hans/joined-classes failed | Skipped: page.waitForTimeout: Target page, context or browser has been closed | 2026-04-22T04:48:19.570Z |
| Phase 4 | Navigation to https://sr.sigmareading.com/zh-hans/favorites exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/reading | 2026-04-22T04:48:19.572Z |
| Phase 4 | Seed route /zh-hans/favorites failed | Skipped: page.waitForTimeout: Target page, context or browser has been closed | 2026-04-22T04:48:19.572Z |
| Phase 4 | Navigation to https://sr.sigmareading.com/zh-hans/studio exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/reading | 2026-04-22T04:48:19.573Z |
| Phase 4 | Seed route /zh-hans/studio failed | Skipped: page.waitForTimeout: Target page, context or browser has been closed | 2026-04-22T04:48:19.574Z |
