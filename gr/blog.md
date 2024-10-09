---
layout: default
title: "Blog"
lang: "gr"
permalink: /blog/
---

# Blog

{% for post in site.gr_posts %}
- [{{ post.title }}]({{ post.url }})
{% endfor %}
