import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import unocss from 'unocss/astro'
import mdx from '@astrojs/mdx'
import remarkMermaid from 'remark-mermaidjs'
import rehypeExternalLinks from 'rehype-external-links'

export default defineConfig({
  site: 'https://leungsekyu.com/',
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
    remarkPlugins: [
      [
        remarkMermaid,
        {
          mermaidConfig: {
            look: 'handDrawn',
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
