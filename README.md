
# A-Blog

Customisable, extensible, complete Astro blog template

## Setup

Fork or duplicate this repository, update `site/config.json`, and activate GitHub pages for the repository to go live.

All site-specific content under `site/`.

- Blog posts: `site/posts/` (`.mdoc` or `.md`)
- Pages: `site/pages/` (`.mdoc` or `.md`)
- Optional home page: `site/pages/home.mdoc`
- Header and footer: `header.mdoc` and `footer.mdoc` under `site/components/`

Note: Two posts with the same filename in different folders will collide.

### Theming

- `site/style.sass` to define custom style (classes added available for use in `.mdoc` content)
- Refer to `src/style/` for built-in CSS classes available for use in `.mdoc` content

### Local development

```sh
npm install
npm run dev
```

## Frontmatter

`description` used as description meta tag

### Pages

`nav-index` optional, used by `{% nav /%}` Markdoc tag for ordering pages

```md
---
title: About
description: Phasellus finibus in elit et suscipit
nav-index: 1
---
```

### Blog posts

`date` optional

```md
---
title: Cras quis augue porttitor
description: Braesent pulvinar leo sagittis ipsum
date: 2026-05-23
---
```

## Available Markdoc tags

```html
{% block .a-css-class %}{% /block %} <!-- base block to apply CSS classes to -->

{% blog-posts count=10 show-description=true show-date=true /%} <!-- all attributes optional -->

{% nav /%} <!-- horizontal list of all pages -->

{% nav-link path="foo/bar" title="Bar" /%} <!-- link primary color when path active -->
```

## Showcase

- [erenha.li](https://erenha.li)
- [ogoregen.com](https://ogoregen.com)
