
# A-Blog

Customizable, extensible, complete Astro blog template

## Setup

Fork or duplicate this repository, update `site/config.json`, and activate GitHub pages for the repository to go live.

All site-specific content under `site/`.

- Blog posts: `site/posts/` (`.mdoc` or `.md`)
- Pages: `site/pages/` (`.mdoc` or `.md`)
- Optional home page: `site/pages/home.mdoc`
- Header and footer: `site/components/header.mdoc` and `footer.mdoc`

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

`navIndex` optional, used by `{% Nav /%}` Markdoc tag for ordering pages

```md
---
title: About
description: Phasellus finibus in elit et suscipit
navIndex: 1
---
```

### Blog posts

`date` optional

```md
---
title: Cras quis augue porttitor
description: Braesent pulvinar leo sagittis ipsum
date: 23-05-2026
---
```

## Available Markdoc tags

All tags accept CSS class list in `features` attribute.

```html
{% Block features="a-css-class" %}{% /Block %} <!-- base block to apply CSS classes to -->

{% Blog postCount=10 /%} <!-- postCount optional -->

{% Nav /%} <!-- horizontal list of all pages -->

{% NavLink path="foo/bar" title="Bar" /%} <!-- link primary color when path active -->
```
