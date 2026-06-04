
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const generateId = ({ entry }) => entry.split('/').filter(Boolean).pop().replace(/\.(md|mdoc)$/, '');

const pages = defineCollection({
	loader: glob({ base: './site/pages', pattern: '**/*.{md,mdoc}', generateId: generateId }),
	schema: z.object({
		'title': z.string(),
		'description': z.string(),
		'nav-index': z.number().optional(),
	}),
});

const posts = defineCollection({
	loader: glob({ base: './site/posts', pattern: '**/*.{md,mdoc}', generateId: generateId }),
	schema: z.object({
		'title': z.string(),
		'description': z.string(),
		'date': z.coerce.date().transform(val => val.toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric"})).optional(),
	}),
});

const components = defineCollection({
	loader: glob({ base: './site/components', pattern: '**/*.mdoc', generateId: generateId }),
});

export const collections = { pages, posts, components };
