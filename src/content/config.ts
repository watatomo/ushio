import { defineCollection, z } from 'astro:content';

const tl = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
        series: z.string(),
        story: z.string().optional(),
        previous: z.number().optional(),
        next: z.number().optional(),
		// Transform string to Date object
		pubDate: z.coerce.date().optional(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { tl };
