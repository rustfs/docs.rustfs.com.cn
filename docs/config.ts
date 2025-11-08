import { defineAdditionalConfig } from 'vitepress'
import { sidebar } from './sidebar'

export default defineAdditionalConfig({
  lang: 'zh-Hans',
  description: 'RustFS - MinIO 国产化替代方案, 高性能分布式存储',

  themeConfig: {
    nav: [
      { text: '首页', link: 'https://rustfs.com.cn' },
      { text: '文档', link: '/' },
      { text: '安装', link: '/installation/linux' },
      { text: 'MCP', link: '/developer/mcp/' },
      { text: 'SDK', link: '/developer/sdk/' },
      { text: '演示', link: 'https://play.rustfs.com' },
      { text: '社区', link: 'https://github.com/rustfs/rustfs/discussions' },
      { text: '关于', link: '/about' },
      { text: 'English', link: 'https://docs.rustfs.com' },
    ],

    sidebar: {
      '/': sidebar,
    },

    editLink: {
      pattern: 'https://github.com/rustfs/docs.rustfs.com.cn/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    footer: {
      message: 'Released under the Apache License 2.0.',
      copyright: 'Copyright © 2025 RustFS'
    }
  }
})
