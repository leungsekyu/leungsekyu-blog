import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

/**
 * 生成网站的 RSS Feed
 * @param {Object} context - Astro 上下文对象，包含站点信息
 * @returns {Response} RSS feed 响应
 */
export async function GET(context) {
  // 获取所有博客文章集合
  const blog = await getCollection("blog");

  return rss({
    // RSS 基本信息配置
    title: "leungsekyu",
    description: "leungsekyu 的个人博客",
    stylesheet: false,
    site: context.site,

    // 将博客文章转换为 RSS 条目
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),

    // RSS feed 额外配置
    customData: "<language>zh-cn</language>",
  });
}
