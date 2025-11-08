# RustFS 文档

**RustFS** 是一个由 Rust 编写、兼容 S3 协议的分布式对象存储引擎。本仓库托管官方 VitePress 文档站点。通过本指南可以了解目录结构、进行增量更新，并确保文档构建稳定通过。

## 快速链接

- 文档站点：<https://docs.rustfs.com>
- 英文文档仓库：<https://github.com/rustfs/docs.rustfs.com>
- 文档仓库 Issues：<https://github.com/rustfs/docs.rustfs.com/issues>
- 产品需求与路线图：<https://github.com/rustfs/rustfs/issues>

## 仓库速览

- `docs/`：Markdown 源文件，每个章节均以 `index.md` 作为入口。
- `docs/sidebar.ts` 与 `docs/config.ts`：站点导航定义，新增或重命名页面后务必同步更新。
- `.vitepress/`：站点级配置、主题以及共享组件。
- 与文档同级的 `public/` 或 `images/` 目录：存放媒资并通过相对路径引用。

## 贡献路径

### 在 GitHub 上快速编辑

1. 浏览 <https://docs.rustfs.com> 上的页面并点击 **Edit this page on GitHub**。
2. 使用在线编辑器处理小范围修正（错别字、断链、排版等）。
3. 简要描述改动，提交 Pull Request（PR），并关联相关 Issue。

### 规划工作或新增内容

1. 先创建或认领 Issue，方便他人了解你正在处理的事项。
2. 使用 `docs/feature-short-title` 这类命名创建主题分支。
3. 仅修改与目标相关的文件，避免额外的格式化或重排。
4. 新增页面后同步更新 `docs/sidebar.ts` 与 `docs/config.ts`。

### 翻译

英文文档仓库：<https://github.com/rustfs/docs.rustfs.com>

## 本地开发

### 前置条件

- Node.js 18+
- `pnpm`（推荐）或任意 Node 包管理器
- Git

### 初始化与常用命令

```bash
git clone https://github.com/rustfs/docs.rustfs.com.git
cd docs.rustfs.com
pnpm install

# 本地开发
pnpm dev       # 在 http://localhost:5173 启动 VitePress 开发服务器

# 提交 PR 前必跑
pnpm build

# 可选的最终校验
pnpm preview
```

## 写作指南

- 遵循 “背景 → 概览 → 步骤 → 参考” 的结构，保持语句简洁、主动、可复现。
- 首次出现的术语需写出全称再附缩写（例如 “Large Language Model (LLM)”）。
- 第三方信息需行内标注来源，示例配置中不得出现密钥或敏感值。
- 使用带语言标注的围栏代码块（如 ` ```bash `、` ```rust `），仅提供可运行示例。
- 添加媒资时补充有意义的 `alt` 文本，并确保表格包含表头。

完整的导航、国际化与发布检查列表见 `AGENTS.md`。

## Pull Request 检查清单

- [ ] `pnpm build` 无警告或错误。
- [ ] 新增或重命名页面已更新导航文件。
- [ ] Frontmatter 校验完毕，所有相对链接可达。
- [ ] 提交信息遵循 Conventional Commits（如 `docs: add lifecycle guide`）。
- [ ] PR 描述说明改动、关联问题，并在涉及视觉改动时附截图。

## 许可证

文档内容采用 [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/) 许可。贡献即表示同意以同样的许可证发布内容。

_最后更新：2025-11-08_
