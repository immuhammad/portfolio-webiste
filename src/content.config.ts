import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title:      z.string(),
    tag:        z.string(),
    category:   z.enum(['php', 'ai']),
    screenshot: z.string().optional(),
    url:        z.string().optional(),
    order:      z.number(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

export const collections = { projects, services };
