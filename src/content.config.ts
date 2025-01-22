import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

// 定义博客集合的配置
const blog = defineCollection({
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
      title: z.string(),
      description: z.string(),
      author: z.string().optional(),
      publishedAt: z
        .string()
        .transform((str) => new Date(str))
        .optional(),
      updatedAt: z
        .string()
        .transform((str) => new Date(str))
        .optional(),
      tags: z.array(z.string()),
      imgUrl: image(),
    }),
})

export const collections = { blog }
