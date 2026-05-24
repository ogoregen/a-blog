
# A-Blog

Customizable, extensible, complete Astro blog template. In development.

All site-specific content under site/.

Customize header, footer, and blog and home pages with their respective mdoc files in site/template/.

Refer to style.css for css classes available for use in mdoc content.

## Frontmatter

Description used as meta description.

## Pages

navIndex optional

```md
---
title: About
description: Vestibulum odio lacus, malesuada lacinia lacinia consequat, scelerisque quis risus.
navIndex: 1
---
```

## Blog posts

date optional

```md
---
title: Worth a Thousand Words
description: Boat.
date: 23-05-2026
---
```

## Available Markdoc tags
```
{& Block features="a-css-class" %}
{& /Block %}

{& Blog postCount=10 /%}

{& Nav /%}

{& NavLink path="foo/bar" title="Bar" /%}
```
