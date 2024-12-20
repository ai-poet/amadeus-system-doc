import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Amadeus System 私有化部署",
  description: "帮助文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/tutorial_overview' }
    ],

    sidebar: [
      {
        text: '安装',
        items: [
          { text: '概述', link: '/tutorial_overview' },
          { text: '所需模块', link: '/tutorial_modules' },
          { text: 'LLM', link: '/tutorial_ai' },
          { text: 'Mem0', link: '/tutorial_mem0' },
          { text: 'Groq', link: '/tutorial_groq' },
          { text: '部署方法', link: '/tutorial_details' }
        ]
      },
      {
        text: '使用',
        items: [
          { text: '登录和初始化', link: '/tutorial_init' },
          { text: '工具栏', link: '/tutorial_settings' },
        ]
      },
      {
        text: 'RoadMap',
        items: [
          { text: 'RoadMap', link: '/roadmap' },
          { text: '广告位', link: '/roadmap' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
