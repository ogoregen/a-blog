# Blog routing cleanup

Remove special treatment of blog route. Home remains the only special page (maps to base URL via `index.astro`).

## Changes

1. **Delete** `src/pages/blog.astro`

2. **Delete** `site/pages/blog.mdoc`
   - Users can add their own if they want a dedicated `/blog` page (e.g. with `{% blog/ %}` in the body)

3. **`src/components/Nav.astro`** — remove all blog special-casing, treat non-home pages uniformly
   - Filter out only `home` from the pages collection
   - Remove the `getEntry('pages', 'blog')` call and the conditional that pushed blog to nav
   - Blog shows in nav automatically if `blog.mdoc` exists, like any other page

4. **`src/pages/[...page].astro`** — filter out `home` from `getStaticPaths`
   - Prevents a ghost `/home` route duplicating the content at `/`
   - Change: `getCollection('pages')` → `getCollection('pages', ({ id }) => id !== 'home')`

## Result

- `/` — `index.astro` (home content, or `<Blog />` fallback if home is empty)
- `/blog` — only exists if user creates `site/pages/blog.mdoc`
- All other pages — handled uniformly by `[...page].astro`
- No redirects, no duplicate paths
