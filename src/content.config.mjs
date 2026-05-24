
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pages = defineCollection({
	loader: glob({ base: './site/pages', pattern: '**/*.{md,mdoc}' }),
	schema: z.object({
	  title: z.string(),
	  description: z.string(),
	  navIndex: z.number().optional(),
	}),
});

const posts = defineCollection({
	loader: glob({
		base: './site/posts',
		pattern: '**/*.{md,mdoc}',
		generateId: ({ entry }) => entry.split('/').filter(Boolean).pop().replace(/\.md$/, ''),
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date().transform(val => val.toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric"})).optional(),
	}),
});

const components = defineCollection({
	loader: glob({ base: './site/components', pattern: '**/*.mdoc' }),
});

export const collections = { pages, posts, components };
