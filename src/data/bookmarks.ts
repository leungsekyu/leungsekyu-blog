interface Bookmark {
  name: string
  site: string
  tags?: string[]
}

interface BookmarkGroups {
  [key: string]: Bookmark[]
}

export const bookmarks: BookmarkGroups = {
  Sui: [
    {
      site: 'https://faucet.n1stake.com/',
      name: 'Sui Testnet Faucet',
      tags: ['Sui', '测试网', '水龙头'],
    },
    {
      site: 'https://github.com/move-cn/letsmove',
      name: 'letsmove',
      tags: ['Sui', 'Move', '学习'],
    },
  ],
  文献类网站: [
    {
      site: 'https://pss-system.cponline.cnipa.gov.cn/conventionalSearch',
      name: '专利检索及分析',
      tags: ['专利', '文献检索'],
    },
  ],
}
