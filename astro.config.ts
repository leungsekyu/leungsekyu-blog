import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import unocss from 'unocss/astro'
import expressiveCode from 'astro-expressive-code'
import mdx from '@astrojs/mdx'
import remarkMermaid from 'remark-mermaidjs'
import rehypeExternalLinks from 'rehype-external-links'

export default defineConfig({
  site: 'https://leungsekyu.com/',
  integrations: [sitemap(), unocss({ injectReset: true }), expressiveCode(), mdx()],
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
    remarkPlugins: [
      [
        remarkMermaid,
        {
          mermaidConfig: {
            look: 'handDrawn',
            flowchart: {
              useMaxWidth: true, // 自动适应最大宽度
            },
          },
        },
      ],
    ],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: { type: 'text', value: ' 🔗' },
        },
      ],
    ],
  },
})
