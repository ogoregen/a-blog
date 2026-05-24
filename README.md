
# A-Blog

Customizable, extensible, complete Astro blog template. In development.

Renders `.md` or `.mdoc` files into pages and posts.

All site-specific content under `site/`.

Customize header, footer, and blog and home pages with their respective `.mdoc` files in `site/components/` and `site/pages/`.

Refer to `src/style.scss` for CSS classes available for use in `.mdoc` content.

## Setup

Fork or duplicate this repository, update `site/config.json`, and activate GitHub pages for the repository to go live. 

### Local development

```sh
npm install
npm run dev
```

## Frontmatter

`description` used in description meta tag

### Pages

`navIndex` optional

```md
---
title: About
description: Vestibulum odio lacus, malesuada lacinia lacinia consequat, scelerisque quis risus.
navIndex: 1
---
```

### Blog posts

`date` optional

```md
---
title: Worth a Thousand Words
description: Boat.
date: 23-05-2026
---
```

## Available Markdoc tags

All tags accept CSS class list in `features` attribute.

```html
{% Block features="a-css-class" %}
{% /Block %}

{% Blog postCount=10 /%} <!-- postCount optional -->

{% Nav /%}

{% NavLink path="foo/bar" title="Bar" /%}
```
