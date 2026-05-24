
import markdoc from '@astrojs/markdoc';
import { defineConfig } from 'astro/config';
import config from './site/config.json';

export default defineConfig({
  site: config.url,
  markdown: {
    shikiConfig: {
      theme: 'one-light',
    },
	},
  integrations: [markdoc()],
});
