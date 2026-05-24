
import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const pageSchema = z.object({
  title: z.string(),
  description: z.string(),
  navIndex: z.number().optional(),
});

const pages = defineCollection({
	loader: glob({ base: './site/pages', pattern: '**/*.{md,mdoc}' }),
	schema: pageSchema,
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

const templateComponents = defineCollection({
	loader: glob({ base: './site/template/components', pattern: '**/*.mdoc' }),
});

const templatePages = defineCollection({
	loader: glob({ base: './site/template/pages', pattern: '**/*.mdoc' }),
	schema: pageSchema,
});


export const collections = { pages, posts, templateComponents, templatePages };
