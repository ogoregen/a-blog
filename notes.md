# Review Notes

## Nav.astro:30 — optional `navIndex` breaks sort order
`navIndex` is `z.number().optional()`, so any page omitting it produces `undefined`.
`a.navIndex - b.navIndex` yields `NaN`, making `Array.sort` order non-deterministic.
Fix: use a fallback — `(a.navIndex ?? Infinity) - (b.navIndex ?? Infinity)`.

## content.config.mjs:52 — `generateId` filename-only is intentional
Using only the filename keeps post URLs stable when posts are reorganized into subdirectories. Known tradeoff: two posts with the same filename in different folders will collide silently.
