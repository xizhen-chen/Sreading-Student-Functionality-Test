# SigmaReading API 端点列表

> 通过 Playwright Network 监听自动捕获
> 生成时间：2026/4/22 11:55:34

---

> ⚠️ 网络受限或未登录，以下为预估 API 结构（需在线验证）。

## 认证相关

| 方法 | 端点 | 说明 |
|------|------|------|
| `POST` | `/api/auth/login` | 账号密码登录 |
| `POST` | `/api/auth/login/phone` | 手机号验证码登录 |
| `POST` | `/api/auth/logout` | 退出登录 |
| `POST` | `/api/auth/register` | 注册 |
| `GET` | `/api/auth/me` | 获取当前用户 |

## 阅读相关

| 方法 | 端点 | 说明 |
|------|------|------|
| `GET` | `/api/articles` | 文章列表 |
| `GET` | `/api/articles/:id` | 文章详情 |
| `POST` | `/api/articles/:id/progress` | 更新阅读进度 |
| `GET` | `/api/assignments` | 教师布置任务 |

## 词汇相关

| 方法 | 端点 | 说明 |
|------|------|------|
| `GET` | `/api/vocabulary` | 生词本列表 |
| `POST` | `/api/vocabulary` | 添加生词 |
| `DELETE` | `/api/vocabulary/:id` | 删除生词 |
| `PUT` | `/api/vocabulary/:id/status` | 更新掌握状态 |
| `GET` | `/api/dictionary/:word` | 查询单词释义 |

## 测验相关

| 方法 | 端点 | 说明 |
|------|------|------|
| `GET` | `/api/quizzes` | 测验列表 |
| `GET` | `/api/quizzes/:id` | 获取题目 |
| `POST` | `/api/quizzes/:id/submit` | 提交答案 |
| `GET` | `/api/quizzes/:id/results` | 查看结果 |

## 统计报告

| 方法 | 端点 | 说明 |
|------|------|------|
| `GET` | `/api/reports/summary` | 学习概览 |
| `GET` | `/api/reports/reading` | 阅读统计 |
| `GET` | `/api/reports/vocabulary` | 词汇统计 |
| `GET` | `/api/reports/quiz` | 测验统计 |
