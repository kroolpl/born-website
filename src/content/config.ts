import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishDate: z.string(),
    author: z.string(),
    image: z.string(),
    readingTime: z.string().optional(),
  })
});

export const collections = {
  blog,
}; 