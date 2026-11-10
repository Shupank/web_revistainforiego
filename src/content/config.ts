// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const articulosCollection = defineCollection({
    type: 'content', // Asegúrate de incluir type: 'content'
    schema: z.object({
        title: z.string(),
        category: z.string(),
        date: z.string(),
        excerpt: z.string(),
        image: z.string(),
        author: z.string().optional(),
    }),
});

export const collections = {
    'articulos': articulosCollection,
};