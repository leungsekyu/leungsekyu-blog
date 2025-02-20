interface Bookmark {
  name: string
  site: string
  tags?: string[]
  favicon?: string
}

interface BookmarkGroups {
  [key: string]: Bookmark[]
}

export const bookmarks: BookmarkGroups = {
  leungsekyu: [
    {
      site: 'https://github.com/leungsekyu/leungsekyu-blog',
      name: 'leungsekyu-blog',
    },
    {
      site: 'https://github.com/leungsekyu/Markdown/tree/main',
      name: 'Markdown',
    },
  ],

  设计: [
    {
      site: 'https://m3.material.io/',
      name: 'Material 3',
      favicon: 'https://m3.material.io/static/assets/m3-favicon.svg',
    },
    {
      site: 'https://fluent2.microsoft.design/',
      name: 'Fluent 2',
      favicon: 'https://fluent2.microsoft.design/favicons/favicon.ico',
    },
    {
      site: 'https://mobbin.com/',
      name: 'Mobbin',
    },
  ],

  图标: [
    {
      site: 'https://icones.js.org/collection/logos',
      name: 'Icônes → SVG Logos',
      favicon: '/icons/bookmarks/icônes.svg',
    },
  ],
  英文: [
    {
      site: 'https://www.bilibili.com/video/BV1n54y1B7bE/?share_source=copy_web&vd_source=279f325186e163118a21a7c98df7f2a1',
      name: '【初阶篇】美式英语发音教程',
    },
    {
      site: 'https://www.bilibili.com/video/BV1Xr4y1N76H/?share_source=copy_web&vd_source=279f325186e163118a21a7c98df7f2a1',
      name: '【中阶篇】美式英语发音教程',
    },
    {
      site: 'https://www.bilibili.com/video/BV1Qy4y1H7K2/?share_source=copy_web&vd_source=279f325186e163118a21a7c98df7f2a1',
      name: '【高阶篇】美式英语发音教程',
    },
  ],

  Sui: [
    {
      site: 'https://faucet.n1stake.com/',
      name: 'Sui Testnet Faucet',
      tags: ['水龙头'],
      favicon: 'https://faucet.n1stake.com/favicon.ico',
    },
    {
      site: 'https://github.com/move-cn/letsmove',
      name: "Let's Move",
      tags: ['学习'],
    },
    {
      site: 'https://docs.sui.io/standards/coin',
      name: 'Coin Standard',
      favicon: 'https://docs.sui.io/img/favicon.ico',
    },
    {
      site: 'https://sdk.mystenlabs.com/typescript/transaction-building/sponsored-transactions',
      name: 'Sponsored Transactions',
    },
  ],

  'Sui 笔记': [
    {
      site: 'https://anitya.fun/article/198b6ca0-c778-80ed-bd48-cc366255e9ac',
      name: 'Move语言学习记录（一）',
    },
  ],

  Astro: [
    {
      site: 'https://docs.astro.build/zh-cn/getting-started/',
      name: 'Astro → 文档',
      favicon: '/icons/bookmarks/astro.svg',
    },
    {
      site: 'https://docs.astro.build/zh-cn/recipes/external-links/',
      name: 'Astro → Markdown 外部链接图标',
      favicon: '/icons/bookmarks/astro.svg',
    },
    {
      site: 'https://docs.astro.build/zh-cn/recipes/i18n/',
      name: 'Astro → i18n',
      tags: ['TODO'],
      favicon: '/icons/bookmarks/astro.svg',
    },
    {
      site: 'https://github.com/eliancodes/brutal',
      name: 'Brutal',
    },
    {
      site: 'https://github.com/ElianCodes/brutal-ui/blob/main/src/components/Pill.astro',
      name: 'Brutal UI → Pill',
    },
  ],

  Mermaid: [
    {
      site: 'https://github.com/remcohaszing/remark-mermaidjs',
      name: 'remark-mermaidjs',
    },
    {
      site: 'https://rudeigerc.dev/posts/astro-mermaid/',
      name: '在 Astro 中集成 Mermaid',
      favicon: 'https://rudeigerc.dev/favicon.svg',
    },
  ],

  'Open Graph': [
    {
      site: 'https://liruifengv.com/posts/astro-auto-gen-og-image/',
      name: 'Astro 自动生成 Open Graph & Twitter card 图片😄',
      tags: ['TODO'],
      favicon: '/icons/bookmarks/astro.svg',
    },
  ],

  工具网站: [
    {
      site: 'https://pss-system.cponline.cnipa.gov.cn/conventionalSearch',
      name: '专利检索及分析',
    },
    {
      site: 'https://pagespeed.web.dev/',
      name: 'PageSpeed Insights',
      tags: ['网站性能'],
      favicon: 'https://www.gstatic.com/pagespeed/insights/ui/logo/favicon_48.png',
    },
    {
      site: 'https://github.com/yuaotian/go-cursor-help/blob/master/README_CN.md',
      name: 'Cursor 免费试用重置工具',
      tags: ['Cursor'],
    },
  ],
}
