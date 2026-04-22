# 自动修正日志（Self-Healing Log）

> 生成时间：2026/4/22 12:51:30

共发生 **27** 次自动修正：

| 阶段 | 问题 | 修正方式 | 时间 |
|------|------|---------|------|
| Phase 1 | Navigation to https://sr.sigmareading.com/zh-hans/home failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T04:48:49.301Z |
| Phase 1 | Navigation to https://sr.sigmareading.com/zh-hans/profile failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T04:49:16.353Z |
| Phase 2 | Navigation to https://sr.sigmareading.com/zh-hans/home failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T04:49:33.208Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/home failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T04:49:51.223Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/exam failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T04:50:08.859Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/favorites failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T04:50:26.322Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/homework failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T04:50:43.785Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/joined-classes failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-22T04:51:01.255Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/playlist exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/playlist | 2026-04-22T04:51:15.558Z |
| Phase 3 | Screenshot "03-nav-zh-hans-playlist" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Target crashed 
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
[2m  - fonts loaded[22m
 | 2026-04-22T04:51:17.562Z |
| Phase 3 | Screenshot "03-nav-zh-hans-playlist" failed | Skipped: page.screenshot: Target crashed 
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
[2m  - fonts loaded[22m
 | 2026-04-22T04:51:17.563Z |
| Phase 3 | Navigation to /zh-hans/playlist threw an error | Skipped: page.$$eval: Target crashed  | 2026-04-22T04:51:17.565Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/reading exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/playlist | 2026-04-22T04:51:17.568Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/studio exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/playlist | 2026-04-22T04:51:19.571Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/textbook exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/playlist | 2026-04-22T04:51:21.583Z |
| Phase 4 | Navigation to https://sr.sigmareading.com/zh-hans/homework exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/playlist | 2026-04-22T04:51:23.592Z |
| Phase 4 | Seed route /zh-hans/homework failed | Skipped: page.$$eval: Target crashed  | 2026-04-22T04:51:25.096Z |
| Phase 4 | Navigation to https://sr.sigmareading.com/zh-hans/reading exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/playlist | 2026-04-22T04:51:25.099Z |
| Phase 4 | Seed route /zh-hans/reading failed | Skipped: page.$$eval: Target crashed  | 2026-04-22T04:51:26.613Z |
| Phase 4 | Navigation to https://sr.sigmareading.com/zh-hans/playlist exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/playlist | 2026-04-22T04:51:26.616Z |
| Phase 4 | Seed route /zh-hans/playlist failed | Skipped: page.$$eval: Target crashed  | 2026-04-22T04:51:28.123Z |
| Phase 4 | Navigation to https://sr.sigmareading.com/zh-hans/joined-classes exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/playlist | 2026-04-22T04:51:28.127Z |
| Phase 4 | Seed route /zh-hans/joined-classes failed | Skipped: page.$$eval: Target crashed  | 2026-04-22T04:51:29.639Z |
| Phase 4 | Navigation to https://sr.sigmareading.com/zh-hans/favorites exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/playlist | 2026-04-22T04:51:29.642Z |
| Phase 4 | Seed route /zh-hans/favorites failed | Skipped: page.waitForTimeout: Target page, context or browser has been closed | 2026-04-22T04:51:30.660Z |
| Phase 4 | Navigation to https://sr.sigmareading.com/zh-hans/studio exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/playlist | 2026-04-22T04:51:30.665Z |
| Phase 4 | Seed route /zh-hans/studio failed | Skipped: page.waitForTimeout: Target page, context or browser has been closed | 2026-04-22T04:51:30.666Z |
