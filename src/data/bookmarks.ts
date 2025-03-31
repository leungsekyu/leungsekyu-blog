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
  投资: [
    {
      site: 'https://www.aicoin.com/zh-Hans/article/381100',
      name: '经典重读丨Continue Capital匹马《致军班书》：投资秘诀无他，唯躬亲钻研尔',
    },
  ],

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
      site: 'https://www.figma.com/community',
      name: 'Figma Community',
      favicon: 'https://static.figma.com/app/icon/1/favicon.svg',
    },
    {
      site: 'https://excalidraw.com/',
      name: 'Excalidraw',
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

  素材: [
    {
      site: 'https://undraw.co/',
      name: 'Undraw',
      tags: ['插画'],
    },
    {
      site: 'https://storytale.io/',
      name: 'storytale',
      tags: ['图形'],
    },
    {
      site: 'https://www.pexels.com/zh-cn/',
      name: 'Pexels',
      tags: ['图片'],
    },
    {
      site: 'https://pixabay.com/zh/',
      name: 'Pixabay',
      tags: ['图片'],
    },
  ],

  雅思: [
    {
      site: 'https://oalecd10.cp.com.cn/',
      name: '牛津高阶英汉双解词典（第10版）',
      favicon: 'https://osstp.cp.com.cn/oxfordx_web/logo.png',
    },
    {
      site: 'https://mp.lbxqr.cn/webappv2/book/home.htm?id=236649&sign=1a6d5b&_wxId=236649&_wxType=1&_wxSrc=1&_rand=1741370488457',
      name: '雅思考试官方指南（第2版）',
      favicon: 'https://mp.lbxqr.cn/qrcode/img/favicon/favicon.ico',
    },
    {
      site: 'https://mp.hyanqr.cn/webappv2/book/home.htm?id=34556&sign=b7d5a4&_wxId=34556&_wxType=1&_wxSrc=1&_rand=1741370790079&sh=sh',
      name: '雅思口语全攻略（第2版）',
      favicon: 'https://mp.hyanqr.cn/qrcode/img/favicon/favicon.ico',
    },
    {
      site: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-462/first-work-holiday-462',
      name: 'First Work and Holiday visa',
      favicon: 'https://immi.homeaffairs.gov.au/AssetLibrary/dist/assets/images/favicon.ico',
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
      name: 'Move 语言学习记录（一）',
    },
    {
      site: 'https://anitya.fun/article/19ab6ca0-c778-80b9-a9be-ff8b8f48ff6a',
      name: 'Move 语言学习记录（二）',
    },
    {
      site: 'https://anitya.fun/article/19cb6ca0-c778-80d1-9f85-d20ee67e237b',
      name: 'Move 语言学习记录（三）',
    },
    {
      site: 'https://juejin.cn/post/7456260239886958631',
      name: 'React必须掌握的知识[一]',
      favicon: 'https://lf-web-assets.juejin.cn/obj/juejin-web/xitu_juejin_web/static/favicons/favicon-32x32.png',
    },
  ],

  Astro: [
    {
      site: 'https://docs.astro.build/zh-cn/getting-started/',
      name: 'Astro 文档',
    },
    {
      site: 'https://docs.astro.build/zh-cn/recipes/external-links/',
      name: '为链接添加图标',
    },
    {
      site: 'https://docs.astro.build/zh-cn/guides/view-transitions/',
      name: '视图过渡动画',
    },
    {
      site: 'https://docs.astro.build/zh-cn/recipes/i18n/',
      name: '添加 i18n 功能',
      tags: ['TODO'],
    },
    {
      site: 'https://docs.astro.build/zh-cn/reference/directives-reference/#sethtml',
      name: '模板指令参考 → set:html',
    },
    {
      site: 'https://docs.astro.build/zh-cn/reference/modules/astro-assets/#image-%E5%B1%9E%E6%80%A7',
      name: 'Image 属性',
    },
    {
      site: 'https://docs.astro.build/zh-cn/recipes/docker/',
      name: '用 Docker 来构建你的 Astro 网站',
    },
    {
      site: 'https://docs.astro.build/zh-cn/guides/images/#%E5%86%85%E5%AE%B9%E9%9B%86%E5%90%88%E4%B8%AD%E7%9A%84%E5%9B%BE%E5%83%8F',
      name: '内容集合中的图像',
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
      site: 'https://nemossi.github.io/iknow.public/posts/dev/doc/astro-blog/',
      name: 'Astro：搭建个人博客',
      favicon: 'https://nemossi.github.io/iknow.public/assets/favicon.BkTsl0z4_Zjs4Kr.svg',
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
    {
      site: 'https://answers.netlify.com/t/installing-playwright-dependencies-issue/120303',
      name: 'Installing Playwright dependencies issue',
      favicon:
        'https://global.discourse-cdn.com/netlify/optimized/3X/1/0/10382b5132d97faf6875789571077801c95498d9_2_32x32.png',
    },
    {
      site: 'https://answers.netlify.com/t/playwright-install-dependencies-fails/138691',
      name: 'Playwright Install Dependencies fails',
      favicon:
        'https://global.discourse-cdn.com/netlify/optimized/3X/1/0/10382b5132d97faf6875789571077801c95498d9_2_32x32.png',
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
    },
    {
      site: 'https://www.opengraph.xyz/',
      name: 'OpenGraph.xyz',
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
      site: 'https://rightshop.xyz/buy/57',
      name: 'Github 学生包 (二手)',
    },
  ],

  Web: [
    {
      site: 'https://www.youtube.com/watch?v=o2T8259HCfU',
      name: '程序员找国外远程工作资源网站分享 脱离卷的环境',
    },
  ],

  AI: [
    {
      site: 'https://www.trae.ai/',
      name: 'Trae',
      favicon:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAIAAAD9b0jDAAAAi0lEQVR4AWP4H+r038Pkv5cZdZCHCdBABriJVDSXAUhRHY0aOmroqKGjho4airdIdzXAhUgzFGGiv/X/uiLsqCzzv7c5yYaC3BLr/f/b1/+fP6EhkOCtq/8D7YAWk2UoLvD8MTmGAjWADH3yEBOBTDx7nFRDEQioExeiIEl5mOBC9EinNGlM0KTZAwBIib6p7xRjSwAAAABJRU5ErkJggg==',
    },
    {
      site: 'https://devin.ai/',
      name: 'Devin',
    },
    {
      site: 'https://uniapi.ai/',
      name: 'UniAPI',
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

  'Mac Apps': [
    {
      site: 'https://www.minorpatch.com/apps/cleanshot-x.html',
      name: 'CleanShot X',
    },
  ],

  Inspiration: [
    {
      site: 'https://juejin.cn/post/6844903783630127111',
      name: '我如何零基础转行成为一个自信的前端',
      favicon: 'https://lf-web-assets.juejin.cn/obj/juejin-web/xitu_juejin_web/static/favicons/favicon-32x32.png',
    },
    {
      site: 'https://mp.weixin.qq.com/s/Cajwfve7f-z2Blk9lnD0hA',
      name: '疯狂的幻方：一家隐形AI巨头的大模型之路',
    },
    {
      site: 'https://mp.weixin.qq.com/s/JJ426nhFX5wFuaVAdvFqng',
      name: '季逸超 Peak：AI 竞泳十年｜Z Circle',
    },
  ],
}
