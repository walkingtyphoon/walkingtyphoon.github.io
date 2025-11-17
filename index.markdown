---
layout: default
title: "太平山修真我"
---

<canvas id="background-canvas" style="position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;"></canvas>

<script src="{{ '/assets/js/background.js' | relative_url }}"></script>

<div style="position:relative;z-index:1;text-align:center;margin-top:40vh;">
  <h1>太平山修真我</h1>
  <p>欢迎来到我的个人博客</p>
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

<div id="site-info" style="position:relative;z-index:1;text-align:center;margin-top:60px;color:#ddd;font-size:0.9rem;">
  <p>👁️ 累计访问：<span id="busuanzi_value_site_pv">加载中...</span> 次</p>
  <p>⏱️ 博客已运行：<span id="runtime">加载中...</span></p>
</div>

<script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>

<script>
// ---------- 博客运行时间 ----------
const startTime = new Date('2025-11-08T00:00:00'); // ← 修改成你的上线日期
function updateRuntime() {
  const now = new Date();
  let diff = now - startTime;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * 1000 * 60 * 60 * 24;
  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * 1000 * 60 * 60;
  const minutes = Math.floor(diff / (1000 * 60));

  document.getElementById('runtime').textContent =
    `${days} 天 ${hours} 小时 ${minutes} 分钟`;
}
updateRuntime();
setInterval(updateRuntime, 60000);
</script>

<div style="margin:60px auto; max-width:420px; text-align:center; padding:20px; background:rgba(0,0,0,0.35); border-radius:12px; backdrop-filter: blur(6px);">
  <h3 style="color:#fff; margin-bottom:16px;">📬 订阅最新更新</h3>

  <form action="https://api.follow.it/subscription-form/bmxSTXZUMzFDWHJQeE84V0dOWk5TUWs4VUd0MHJKckQ1NHR6V0IxQWpYbTVLTWFBNWFJV1ArKzZwWmEvT2ZlbTJadHJzaXFIZWM2VXBpQ3lBVmZSNTBWU1hkdlI3L0crclBuTjNwaXR1ZUVqYXB1Q1kvQnZPSXBhWTY1Ry9KYzZ8MlladVJRQS84MVlRY01ndDZqd21LSmwrREhveDJRZjhUR1ByWmFHd0lVVT0=/8" method="post" target="_blank" style="display:flex; flex-direction:column; gap:12px;">

    <input type="email" name="email" required placeholder="输入邮箱订阅更新…" 
           style="padding:12px 14px; border-radius:8px; background:#111; border:1px solid #555; color:#eee; font-size:1rem;">
    
    <button type="submit" 
            style="padding:12px 16px; border-radius:8px; background:#4ea1ff; color:white; border:none; font-size:1rem; cursor:pointer;">
      订阅
    </button>
  </form>

  <p style="margin-top:10px; font-size:0.85rem; color:#bbb;">新文章发布后将自动发送邮件</p>
</div>