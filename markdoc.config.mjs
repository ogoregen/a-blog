
import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
	tags: {
		'block': {
			render: component('./src/components/Block.astro'),
		},
		'nav': {
			render: component('./src/components/Nav.astro'),
		},
		'nav-link': {
			render: component('./src/components/NavLink.astro'),
			attributes: {
				'path': { type: String },
				'title': { type: String },
			},
		},
		'blog-posts': {
			render: component('./src/components/Blog.astro'),
			attributes: {
				'count': { type: Number },
				'show-description': { type: Boolean, default: true },
				'show-date': { type: Boolean, default: true },
			},
		},
	},
});
