# 自动修正日志（Self-Healing Log）

> 生成时间：2026/4/23 10:13:23

共发生 **7** 次自动修正：

| 阶段 | 问题 | 修正方式 | 时间 |
|------|------|---------|------|
| Phase 1 | Navigation to https://sr.sigmareading.com/zh-hans/home exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/home | 2026-04-23T02:07:18.199Z |
| Phase 1 | Screenshot "01-initial" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Timeout 4000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
[2m  - fonts loaded[22m
 | 2026-04-23T02:07:24.217Z |
| Phase 1 | Screenshot "01-initial" failed | Skipped: page.screenshot: Timeout 2000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
[2m  - fonts loaded[22m
 | 2026-04-23T02:07:26.221Z |
| Phase 1 | Navigation to https://sr.sigmareading.com/oauth2/authorization/oidc?locale=zh_CN failed with stronger strategy | Succeeded using waitUntil="commit" (strategy #4) | 2026-04-23T02:08:02.192Z |
| Phase 1 | Login submission did not leave login/unauthorized state | Continue as guest | 2026-04-23T02:08:18.478Z |
| Phase 2 | Navigation to https://sr.sigmareading.com/zh-hans/home failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-23T02:08:34.151Z |
| Phase 3 | Navigation to https://sr.sigmareading.com/zh-hans/playlist failed with stronger strategy | Succeeded using waitUntil="domcontentloaded" (strategy #2) | 2026-04-23T02:09:07.132Z |
