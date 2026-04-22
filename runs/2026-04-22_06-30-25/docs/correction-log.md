# 自动修正日志（Self-Healing Log）

> 生成时间：2026/4/22 14:32:22

共发生 **5** 次自动修正：

| 阶段 | 问题 | 修正方式 | 时间 |
|------|------|---------|------|
| Phase 1 | Navigation to https://sr.sigmareading.com/zh-hans/home exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/home | 2026-04-22T06:31:05.386Z |
| Phase 1 | Screenshot "01-initial" fullPage capture failed | Retrying with viewport screenshot: page.screenshot: Timeout 4000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
[2m  - fonts loaded[22m
 | 2026-04-22T06:31:11.402Z |
| Phase 1 | Screenshot "01-initial" failed | Skipped: page.screenshot: Timeout 2000ms exceeded.
Call log:
[2m  - taking page screenshot[22m
[2m    - disabled all CSS animations[22m
[2m  - waiting for fonts to load...[22m
[2m  - fonts loaded[22m
 | 2026-04-22T06:31:13.414Z |
| Phase 1 | Navigation to https://sr.sigmareading.com/oauth2/authorization/oidc?locale=zh_CN exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/home | 2026-04-22T06:31:53.433Z |
| Phase 1 | Navigation to https://sr.sigmareading.com/zh-hans/home exhausted all waitUntil strategies | Continuing with partially loaded page at https://sr.sigmareading.com/zh-hans/home | 2026-04-22T06:32:22.182Z |
