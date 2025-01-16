import { getCollection } from 'astro:content'
import rss from '@astrojs/rss'

export async function GET(context) {
  const blog = await getCollection('blog')

  return rss({
    stylesheet: '/rss/pretty-feed-v3.xsl',
    title: 'leungsekyu',
    description: 'leungsekyu 的个人博客',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      publishedAt: post.data.publishedAt,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
    customData: '<language>zh-cn</language>',
  })
}
