---
layout: default
title: "欢迎来到台风的博客"
---

<canvas id="background-canvas" style="position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;"></canvas>

<script src="{{ '/assets/js/background.js' | relative_url }}"></script>

<div style="position:relative;z-index:1;text-align:center;margin-top:40vh;">
  <h1>行走的台风</h1>
  <p>欢迎来到我的理工风博客</p>
</div>

<!-- 新增的文章列表部分 -->
<div style="position:relative;z-index:1;max-width:700px;margin:60px auto;text-align:left;">
  <h2>最新文章</h2>
  <ul style="list-style:none;padding:0;">
    {% for post in site.posts %}
      <li style="margin-bottom:20px;">
        <a href="{{ post.url | relative_url }}" style="font-size:1.2em;text-decoration:none;">
          {{ post.title }}
        </a>
        <div style="color:gray;font-size:0.9em;">{{ post.date | date: "%Y-%m-%d" }}</div>
        <p>{{ post.excerpt | strip_html | truncate: 100 }}</p>
      </li>
    {% endfor %}
  </ul>
</div>