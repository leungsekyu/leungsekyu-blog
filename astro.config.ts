import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import unocss from 'unocss/astro'

import mdx from '@astrojs/mdx'

import remarkMermaid from 'remark-mermaidjs'

export default defineConfig({
  site: 'https://leungsekyu.netlify.app/',
  integrations: [sitemap(), unocss({ injectReset: true }), mdx()],
  vite: {
    resolve: {
      alias: {
        '@icons': '/public/icons',
      },
    },
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },
  markdown: {
    // 启用 remark 插件
    remarkPlugins: [
      [
        remarkMermaid,
        {
          // 插件的配置选项（可选）
          theme: 'default', // Mermaid 主题 (default, dark, forest, etc.)
          themeVariables: {
            primaryColor: '#ffcc00', // 自定义主题颜色
          },
        },
      ],
    ],
  },
})
