---
title: A static blog with Eleventy
description: Why a plain, file-based blog still beats a CMS for a personal site, and how the list is wired up with collections.
date: 2026-11-10
tags:
  - eleventy
  - architecture
---

A personal site does not need a database. It needs a folder, a naming
convention and a build step that never gets in the way. That is exactly what
Eleventy gives you: every markdown file is a post, and every folder is a URL.

## One folder, one URL

Posts live in `blog/posts/` and each file gets its own permalink from the folder
data file. The slug is derived from the file name, so this file becomes
`/blog/a-static-blog-with-eleventy/` without touching a single line of config.

The listing page simply asks Eleventy for the collection:

```njk
{% raw %}{% for post in collections.posts | reverse %}
  <a href="{{ post.url }}">{{ post.data.title }}</a>
{% endfor %}{% endraw %}
```

## Collections are the index

Because the tag lives in `posts.json`, every post joins the same collection
automatically. Sorting by date is the default, and `reverse` puts the newest
first. No pagination logic, no index to rebuild, no cache to invalidate.

> The less machinery there is between writing and publishing, the more likely
> you are to actually write.

When the list grows, the same collection can be sliced for pagination or
filtered by tag without changing how posts are authored.
