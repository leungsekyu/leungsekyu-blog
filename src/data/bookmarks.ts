interface Bookmark {
  name: string
  site: string
  tags?: string[]
  favicon?: string
}

interface BookmarkGroups {
  [key: string]: Bookmark[]
}

const stocks = ['中国石油', '唯科科技', '汇川技术', '艾力斯', '领益智造', '晶晨股份']

export const bookmarks: BookmarkGroups = {
  同花顺: stocks.map((stock) => ({
    site: `https://www.iwencai.com/unifiedwap/result?w=${stock}`,
    name: stock,
  })),

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
    {
      site: 'https://www.youtube.com/watch?v=PUv66718DII',
      name: 'Bret Victor - Inventing on Principle',
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
      site: 'https://oalecd10.cp.com.cn/',
      name: '牛津高阶英汉双解词典（第10版）',
      favicon: 'https://osstp.cp.com.cn/oxfordx_web/logo.png',
    },
  ],

  Swift: [],

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
      site: 'https://docs.astro.build/zh-cn/reference/directives-reference/#sethtml',
      name: 'Astro → 模板指令参考 → set:html',
      favicon: '/icons/bookmarks/astro.svg',
    },
    {
      site: 'https://docs.astro.build/zh-cn/reference/modules/astro-assets/#src-%E5%BF%85%E9%A1%BB',
      name: 'Astro → Image 属性 → src (必须)',
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
      site: 'https://juejin.cn/post/6977635841262747662',
      name: '微信分享链接如何定制缩略图和标题',
      favicon: 'https://lf-web-assets.juejin.cn/obj/juejin-web/xitu_juejin_web/static/favicons/favicon-32x32.png',
    },
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
    {
      site: 'https://www.pexels.com/zh-cn/',
      name: 'Pexels',
      tags: ['素材图片'],
    },
    {
      site: 'https://pixabay.com/zh/',
      name: 'Pixabay',
      tags: ['素材图片'],
    },
  ],

  Web: [
    {
      site: 'https://juejin.cn/post/6844903783630127111',
      name: '我如何零基础转行成为一个自信的前端',
      favicon: 'https://lf-web-assets.juejin.cn/obj/juejin-web/xitu_juejin_web/static/favicons/favicon-32x32.png',
    },
  ],

  CSS: [
    {
      site: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/place-items',
      name: 'place-items',
    },
    {
      site: 'https://css-tricks.com/almanac/properties/p/position/',
      name: 'position',
    },
    {
      site: 'https://css-tricks.com/7-practical-uses-for-the-before-and-after-pseudo-elements-in-css/',
      name: '7 Practical Uses for the ::before and ::after Pseudo-Elements in CSS',
    },
  ],

  API: [
    {
      site: 'https://mockapi.io/',
      name: 'mockAPI',
    },
  ],
}
