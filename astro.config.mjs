
import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import config from './site/config.json';

export default defineConfig({
	site: config.url,
	base: config.subdomain,
	markdown: {
		shikiConfig: {
			theme: 'one-light',
		},
	},
	integrations: [markdoc()],
});
