import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import unocss from 'unocss/astro'

import mdx from '@astrojs/mdx'

import remarkMermaid from 'remark-mermaidjs'

import { rehypeShiki } from '@astrojs/markdown-remark'
import rehypeMermaid from 'rehype-mermaid'

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
    rehypePlugins: [rehypeMermaid, rehypeShiki],
    syntaxHighlight: false,
  },
})
