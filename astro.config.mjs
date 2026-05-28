
import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import sitemap from '@astrojs/sitemap';
import config from './site/config.json';

export default defineConfig({
    site: config.site,
    base: config.base,
    markdown: {
        shikiConfig: {
            theme: 'one-light',
        },
    },
    integrations: [markdoc(), sitemap()],
});
