interface Favicons {
  [key: string]: string
}

const astroIcon = '/icons/bookmarks/astro.svg'
const favicons: Favicons = {
  youtube: '/icons/bookmarks/youtube.png',
  github: '/icons/bookmarks/github.svg',
  aicoin: '/icons/bookmarks/aicoin.ico',
  material: '/icons/bookmarks/material.svg',
  astro: astroIcon,
  liruifengv: astroIcon,
  undraw: '/icons/bookmarks/undraw.ico',
  storytale: '/icons/bookmarks/storytale.ico',
  neomusicschool: '/icons/bookmarks/neomusicschool.png',
}

function extractHostname(hostname: string): string {
  const parts = hostname.split('.')
  if (parts.length > 2) {
    return parts[1]
  }
  return parts[0]
}

export function getFaviconUrl(site: string, favicon?: string): string {
  try {
    const url = new URL(site)
    const extractedHostname = extractHostname(url.hostname)

    if (extractedHostname in favicons) {
      return favicons[extractedHostname]
    }

    return favicon || `${url.protocol}//${url.hostname}/favicon.ico`
  } catch (error) {
    return '/favicon/favicon.svg'
  }
}
