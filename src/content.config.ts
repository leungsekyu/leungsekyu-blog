import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.{md,mdx}',
    base: './src/content/blog',
  }),
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
