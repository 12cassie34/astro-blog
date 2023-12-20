import { z, defineCollection, reference } from 'astro:content';

const blogPosts = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
      title: z.string(),
      category: z.string(),
      pubDate: z.number(),
      subtitle: z.string().optional(),
      tags: z.array(z.string()).optional(),
      poster: z.string().optional(),
      relatedPosts: z.array(reference('blogPosts')).optional(),
    }),
  });

export const collections = { blogPosts }