import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

// 定义博客集合的配置
const blogCollection = defineCollection({
  // 使用 glob 加载器来匹配博客文件
  // pattern: 匹配所有非下划线开头的 .md 文件
  // base: 指定博客文件的基础目录
  loader: glob({
    pattern: '**/[^_]*.{md,mdx}',
    base: './src/content/blog',
  }),

  // 定义博客文章的数据模式
  schema: ({ image }) =>
    z.object({
      // 文章标题
      title: z.string(),

      // 作者名称
      author: z.string(),

      // 文章标签数组
      tags: z.array(z.string()),

      // 文章描述
      description: z.string(),

      // 发布日期 - 将字符串转换为 Date 对象
      publishedAt: z
        .string()
        .transform((str) => new Date(str))
        .optional(),
      updatedAt: z
        .string()
        .transform((str) => new Date(str))
        .optional(),

      // 文章封面图片
      imgUrl: image(),
    }),
})

// 导出所有内容集合
export const collections = {
  blog: blogCollection,
}
