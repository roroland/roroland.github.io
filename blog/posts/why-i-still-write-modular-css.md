---
title: Why I still write modular CSS
description: Layers, tokens and small components keep a stylesheet readable years after the redesign that started it.
date: 2026-08-21
tags:
  - css
  - architecture
---

Every project starts small and every stylesheet starts clean. The difference
between a codebase that survives five years and one that does not is whether the
structure was decided before the first component.

## Layers instead of folders

Sass modules are imported in cascade order:

1. `abstracts` — tokens, breakpoints, functions and placeholders.
2. `base` — reset, root variables and typography.
3. `layout` and `components` — real selectors, one block per file.
4. `utilities` and `decorations` — opt-in helpers and visual layers.

Nothing in `abstracts` emits CSS, and nothing in `components` defines a color
value. That single rule removes most of the arguments about where code belongs.

## Tokens are the contract

Colors, spacing and z-index live as custom properties on `:root`. A component
consumes `var(--darkblue)` instead of `#52768d`, so a palette change is one edit
and every hover state follows along.

```css
:root {
  --darkblue: rgb(82, 118, 141);
  --accent: rgb(234, 80, 124);
}
```

It is not glamorous work, but it is the reason the site can gain a blog section
by adding one folder and four files.
