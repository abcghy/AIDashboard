# AI Dashboard

一个简洁的 AI 网站导航页面，收集各类优秀的 AI 资源。

## 功能

- 分类导航 - 按类型快速筛选网站
- 实时搜索 - 支持搜索网站名称、描述和模型名称
- 深浅主题 - 自动跟随系统，也可手动切换
- 响应式设计 - 支持桌面端和移动端

## 网站分类

| 分类 | 说明 |
|------|------|
| 大模型官网 | OpenAI、Anthropic、Google AI 等 |
| API 提供商 | 各大模型官方 API 平台 |
| 聚合平台 | OpenRouter、Together AI 等聚合服务 |
| 开源社区 | Hugging Face、Kaggle 等 |
| Product Hunt AI | 产品发现平台 |
| 其他 | Midjourney、Cursor 等工具 |

## 本地开发

```bash
npm install
npm run dev
```

访问 http://localhost:4321

## 构建

```bash
npm run build
```

输出在 `dist/` 目录。

## 部署到 GitHub Pages

1. 推送代码到 GitHub
2. 进入 Settings → Pages → Source 选择 "GitHub Actions"
3. 自动部署完成

## 添加新网站

编辑 `src/data/sites.json`：

```json
{
  "id": "example",
  "name": "网站名称",
  "url": "https://example.com",
  "description": "网站简介",
  "category": "其他",
  "models": ["Model-1", "Model-2"]
}
```

## 技术栈

- [Astro](https://astro.build) - 静态站点生成器
- [Tailwind CSS](https://tailwindcss.com) - 样式框架
