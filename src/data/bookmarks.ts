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
      tags: ['专利'],
    },
  ],
  Astro: [
    {
      site: 'https://github.com/eliancodes/brutal',
      name: 'Brutal',
      tags: ['Brutal'],
    },
    {
      site: 'https://github.com/ElianCodes/brutal-ui/blob/main/src/components/Pill.astro',
      name: 'Brutal UI → Pill',
      tags: ['Brutal'],
    },
    {
      site: 'https://pagespeed.web.dev/',
      name: 'PageSpeed Insights',
      tags: ['网站性能'],
      favicon: 'https://www.gstatic.com/pagespeed/insights/ui/logo/favicon_48.png',
    },
  ],
}
