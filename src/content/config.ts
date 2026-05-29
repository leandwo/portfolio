import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    url: z.string().optional(),
    repo: z.string().optional(),
    status: z.enum(['live', 'wip', 'private']).default('wip'),
    order: z.number().default(99),
    images: z.array(z.string()).default([]),
    problem: z.string(),
    decisions: z.array(z.object({
      title: z.string(),
      body: z.string(),
    })).default([]),
    challenges: z.string().optional(),
    next: z.string().optional(),
  }),
});

export const collections = { projects };
