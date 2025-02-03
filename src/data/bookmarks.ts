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
  Sui: [
    {
      site: 'https://faucet.n1stake.com/',
      name: 'Sui Testnet Faucet',
      tags: ['水龙头'],
      favicon: 'https://leungsekyu.com/icons/bookmarks/sui-testnet-faucet.ico',
    },
    {
      site: 'https://github.com/move-cn/letsmove',
      name: "Let's Move",
      tags: ['学习'],
    },
  ],
  文献类网站: [
    {
      site: 'https://pss-system.cponline.cnipa.gov.cn/conventionalSearch',
      name: '专利检索及分析',
    },
  ],
  Astro: [
    {
      site: 'https://docs.astro.build/zh-cn/getting-started/',
      name: 'Astro → 文档',
      favicon: `https://leungsekyu.com/icons/bookmarks/astro.svg`,
    },
    {
      site: 'https://docs.astro.build/zh-cn/recipes/external-links/',
      name: 'Astro → Markdown 外部链接图标',
      favicon: `https://leungsekyu.com/icons/bookmarks/astro.svg`,
    },
    {
      site: 'https://docs.astro.build/zh-cn/recipes/i18n/',
      name: 'Astro → i18n',
      tags: ['TODO'],
      favicon: `https://leungsekyu.com/icons/bookmarks/astro.svg`,
    },
    {
      site: 'https://icones.js.org/collection/logos',
      name: 'Icônes → SVG Logos',
      favicon: 'https://leungsekyu.com/icons/bookmarks/icônes.svg',
    },
    {
      site: 'https://github.com/eliancodes/brutal',
      name: 'Brutal',
    },
    {
      site: 'https://github.com/ElianCodes/brutal-ui/blob/main/src/components/Pill.astro',
      name: 'Brutal UI → Pill',
    },
    {
      site: 'https://pagespeed.web.dev/',
      name: 'PageSpeed Insights',
      tags: ['网站性能'],
      favicon: 'https://www.gstatic.com/pagespeed/insights/ui/logo/favicon_48.png',
    },
  ],
}
