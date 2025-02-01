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
      tags: ['区块链', '开发工具'],
    },
    {
      site: 'https://github.com/move-cn/letsmove',
      name: 'letsmove',
      tags: ['区块链', 'Move', '开发工具'],
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
