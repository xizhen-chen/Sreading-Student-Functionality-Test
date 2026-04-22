# 自动修正日志（Self-Healing Log）

> 生成时间：2026/4/22 14:54:15

共发生 **11** 次自动修正：

| 阶段 | 问题 | 修正方式 | 时间 |
|------|------|---------|------|
| Phase 1 | Navigation to https://sr.sigmareading.com/zh-hans/home failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T06:49:23.052Z |
| Phase 1 | Screenshot "01-initial" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Timeout 4000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T06:49:29.079Z |
| Phase 1 | Screenshot "01-initial" failed | Skipped: page.screenshot: Timeout 2000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T06:49:31.090Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/home failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T06:50:10.211Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/reading failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T06:50:51.254Z |
| Phase 3 | Screenshot "03-nav-zh-hans-reading" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Timeout 4000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T06:50:57.280Z |
| Phase 3 | Screenshot "03-nav-zh-hans-reading" failed | Skipped: page.screenshot: Timeout 2000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
 | 2026-04-22T06:50:59.293Z |
| Phase 3 /reading | Navigation to https://sr.sigmareading.com/zh-hans/reading failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T06:51:39.187Z |
| Phase 3 /reading | Navigation to https://sr.sigmareading.com/zh-hans/playlist failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T06:52:45.109Z |
| Phase 4 | Navigation to https://sr.sigmareading.com/zh-hans/reading failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T06:53:33.426Z |
| Phase 5 | Navigation to https://sr.sigmareading.com/zh-hans/reading failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-22T06:54:13.430Z |
