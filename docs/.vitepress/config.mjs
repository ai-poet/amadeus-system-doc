import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Amadeus System",
  description: "Amadeus System Documentation",
  
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      title: "Amadeus System 私有化部署",
      description: "帮助文档",
      themeConfig: {
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
              { text: 'ASR', link: '/tutorial_asr' },
              { text: 'TTS', link: '/tutorial_tts' },
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
              { text: '广告位', link: '/ad' },
            ]
          }
        ],

        socialLinks: [
          { icon: 'github', link: 'https://github.com/ai-poet/amadeus-system-new' }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: "Amadeus System Private Deployment",
      description: "Documentation",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Tutorial', link: '/en/tutorial_overview' }
        ],

        sidebar: [
          {
            text: 'Installation',
            items: [
              { text: 'Overview', link: '/en/tutorial_overview' },
              { text: 'Required Modules', link: '/en/tutorial_modules' },
              { text: 'LLM', link: '/en/tutorial_ai' },
              { text: 'Mem0', link: '/en/tutorial_mem0' },
              { text: 'ASR', link: '/en/tutorial_asr' },
              { text: 'TTS', link: '/en/tutorial_tts' },
              { text: 'Deployment', link: '/en/tutorial_details' }
            ]
          },
          {
            text: 'Usage',
            items: [
              { text: 'Login & Initialization', link: '/en/tutorial_init' },
              { text: 'Toolbar', link: '/en/tutorial_settings' },
            ]
          },
          {
            text: 'RoadMap',
            items: [
              { text: 'RoadMap', link: '/en/roadmap' },
              { text: 'Advertisement', link: '/en/ad' },
            ]
          }
        ],

        socialLinks: [
          { icon: 'github', link: 'https://github.com/ai-poet/amadeus-system-new' }
        ]
      }
    }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ai-poet/amadeus-system-new' }
    ]
  }
})
