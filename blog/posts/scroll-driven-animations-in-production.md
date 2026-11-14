---
title: Scroll-driven animations in production
description: How the menu, the hero and the work gallery share one animation model without a single scroll listener.
date: 2026-10-02
tags:
  - css
  - motion
---

Scroll-driven animations move the expensive part of a reveal out of JavaScript
and into the compositor. On this site the hero strokes, the work gallery and the
sticky menu all use the same idea: declare the animation, then attach it to a
timeline.

## The pattern

```css
.animatable {
  opacity: 0;
  animation: fadeInUp forwards;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}
```

There is no `IntersectionObserver`, no throttled handler and no layout read on
every frame. The browser knows where the element is in the viewport and
interpolates the keyframes for you.

## What to watch out for

- **Start from a visible default.** Keep an `opacity: 1` fallback for browsers
  without timeline support, or the content simply disappears.
- **Keep ranges short.** `entry 0% cover 40%` finishes the reveal while the
  element is still entering, which feels responsive.
- **Animate transform and opacity only.** Everything else forces paint.

The best part is that the animation declarations stay close to the component
they belong to, so the CSS keeps telling the story of the interface.
