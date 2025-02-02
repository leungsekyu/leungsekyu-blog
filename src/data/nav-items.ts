interface NavItem {
  name: string
  url: string
}

export const navItems: NavItem[] = [
  { name: '主页', url: '/' },
  // { name: '禅', url: '/zen/' },
  { name: '博客', url: '/blog/' },
  { name: '书签', url: '/bookmarks/' },
]

export const desktopNavItems = navItems

export const mobileNavItems = navItems.filter((item) => item.name !== '主页')
