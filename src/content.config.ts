import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'
import type { SchemaContext } from 'astro:content'

const commonSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().optional(),
    publishedAt: z.union([z.string().transform((str) => new Date(str)), z.date()]).optional(),
    updatedAt: z
      .string()
      .transform((str) => new Date(str))
      .optional(),
    tags: z.array(z.string()),
    imgUrl: image(),
  })

const blog = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.{md,mdx}',
    base: './src/content/blog',
  }),
  schema: commonSchema,
})

const personal = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.{md,mdx}',
    base: './src/content/personal',
  }),
  schema: commonSchema,
})

export const collections = { blog, personal }
