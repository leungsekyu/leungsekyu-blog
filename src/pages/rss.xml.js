import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

export async function GET(context) {
  const blog = await getCollection("blog");

  return rss({
    title: "leungsekyu",
    description: "leungsekyu 的个人博客",
    stylesheet: false,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: "<language>zh-cn</language>",
  });
}
