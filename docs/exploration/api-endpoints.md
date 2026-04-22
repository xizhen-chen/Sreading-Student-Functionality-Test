# SigmaReading API 端点列表

> 通过 Playwright Network 监听自动捕获
> 生成时间：2026/4/22 10:24:53
> 目标网站：https://sr.sigmareading.com

---

> ⚠️ **注意**：本报告在网络受限环境中生成，以下内容为根据平台类型预估的 API 结构。
> 请在可访问 sr.sigmareading.com 的环境中重新运行探索脚本获取真实 API 数据：
> `npx playwright test tests/exploration/sigmareading-exploration.spec.ts`

---

## 预估 API 端点（待验证）

### 认证相关

| 方法 | 端点 | 说明 |
|------|------|------|
| `POST` | `/api/auth/login` | 用户名/密码登录 |
| `POST` | `/api/auth/login/phone` | 手机号验证码登录 |
| `POST` | `/api/auth/logout` | 退出登录 |
| `POST` | `/api/auth/register` | 注册新账号 |
| `POST` | `/api/auth/reset-password` | 重置密码 |
| `GET` | `/api/auth/me` | 获取当前用户信息 |

### 阅读相关

| 方法 | 端点 | 说明 |
|------|------|------|
| `GET` | `/api/articles` | 获取文章列表 |
| `GET` | `/api/articles/:id` | 获取文章详情 |
| `GET` | `/api/articles/:id/content` | 获取文章正文 |
| `POST` | `/api/articles/:id/progress` | 更新阅读进度 |
| `GET` | `/api/assignments` | 获取教师布置的任务 |

### 词汇相关

| 方法 | 端点 | 说明 |
|------|------|------|
| `GET` | `/api/vocabulary` | 获取生词本列表 |
| `POST` | `/api/vocabulary` | 添加生词 |
| `DELETE` | `/api/vocabulary/:id` | 删除生词 |
| `PUT` | `/api/vocabulary/:id/status` | 更新词汇掌握状态 |
| `GET` | `/api/dictionary/:word` | 查询单词释义 |

### 测验相关

| 方法 | 端点 | 说明 |
|------|------|------|
| `GET` | `/api/quizzes` | 获取测验列表 |
| `GET` | `/api/quizzes/:id` | 获取测验题目 |
| `POST` | `/api/quizzes/:id/submit` | 提交测验答案 |
| `GET` | `/api/quizzes/:id/results` | 获取测验结果 |

### 统计报告

| 方法 | 端点 | 说明 |
|------|------|------|
| `GET` | `/api/reports/summary` | 获取学习概览数据 |
| `GET` | `/api/reports/reading` | 获取阅读统计 |
| `GET` | `/api/reports/vocabulary` | 获取词汇统计 |
| `GET` | `/api/reports/quiz` | 获取测验统计 |

### 用户相关

| 方法 | 端点 | 说明 |
|------|------|------|
| `GET` | `/api/profile` | 获取用户资料 |
| `PUT` | `/api/profile` | 更新用户资料 |
| `GET` | `/api/settings` | 获取用户设置 |
| `PUT` | `/api/settings` | 更新用户设置 |

