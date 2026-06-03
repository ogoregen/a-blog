
import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
	tags: {
		block: {
			render: component('./src/components/Block.astro'),
		},
		nav: {
			render: component('./src/components/Nav.astro'),
		},
		navLink: {
			render: component('./src/components/NavLink.astro'),
			attributes: {
				path: { type: String },
				title: { type: String },
			},
		},
		blog: {
			render: component('./src/components/Blog.astro'),
			attributes: {
				postCount: { type: Number },
				hideDescription: { type: Boolean },
			},
		},
	},
});
