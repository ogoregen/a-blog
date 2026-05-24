
import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
  tags: {
    block: {
      render: component('./src/components/Block.astro'),
      attributes: {
				features: { type: String },
      },
    },
    blog: {
      render: component('./src/components/Blog.astro'),
      attributes: {
        features: { type: String },
				postCount: { type: Number },
      },
    },
    nav: {
      render: component('./src/components/Nav.astro'),
      attributes: {
				features: { type: String },
      },
    },
    navLink: {
      render: component('./src/components/NavLink.astro'),
      attributes: {
				features: { type: String },
				path: { type: String },
       	title: { type: String },
      },
    },
  },
});
