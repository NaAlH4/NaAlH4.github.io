# Nash Hong Dreamland · 内容编辑指南

这份文档教你如何编辑网站的每一个页面、加入自己的正式内容。**不需要会编程**，照着复制粘贴、改文字即可。

---

## 一、开始之前

### 用什么软件编辑

推荐用 **VS Code**（免费，装了之后打开 `F:\MyPage` 这个文件夹，左侧能看到所有文件）。用系统自带的「记事本」也能编辑，但没有高亮和预览。

### 网站由什么组成

```
F:\MyPage
├── index.html      首页（六个板块的入口）
├── works.html      作品
├── daily.html      日常
├── articles.html   文章
├── notes.html      闲话
├── music.html      音乐
├── about.html      关于
├── css/style.css   全站样式（配色、字体、背景）
├── js/main.js      脚本（星空粒子、菜单）
└── images/         放图片的地方
```

**核心原则**：所有页面共享同一份 `css/style.css`，所以你只需在「对应的 HTML 文件」里改文字、加条目，不用碰样式。

### 怎么看到效果

改完保存后，双击那个 `.html` 文件，浏览器打开就能看到结果。改了没反应就刷新浏览器（`F5`）。

---

## 二、三个通用修改

### 1. 改站名

在**每一个** `.html` 文件里，把 `Nash Hong Dreamland` 换成你的名字。在 VS Code 里可以用「全局搜索替换」（`Ctrl + Shift + F`）一次改完。

涉及两处：
- 浏览器标签标题：`<title>... · Nash Hong Dreamland</title>`
- 左上角站名：`<a class="brand" href="index.html">Nash Hong Dreamland</a>`

### 2. 改配色

打开 `css/style.css`，最顶部有一段 `:root { ... }`，改里面的颜色值即可，**全站所有页面会一起变**。

| 变量名 | 作用 | 当前值 |
|---|---|---|
| `--bg-1` / `--bg-2` | 背景渐变（深蓝紫 → 暗紫） | `#1B1B2F` / `#252140` |
| `--icon-pink` | 樱花粉（图标/点缀） | `#F4A7B9` |
| `--icon-purple` | 糖果紫 | `#A88BEB` |
| `--icon-cyan` | 亮青（链接/悬停） | `#7DE3F4` |
| `--text-bright` | 主标题文字色 | `#FFEFF5` |
| `--text-body` | 正文文字色 | `#CDC2E0` |

> 颜色的 `#` 后面是 6 位十六进制，可以到网上搜「颜色选择器」找一个你喜欢的颜色填进去。

### 3. 改页脚版权

每个页面底部有 `© <span id="year"></span> Nash Hong Dreamland · 由 Claude Code 搭建`。年份是自动的（不用改），只需把「Nash Hong Dreamland」换成你的名字，「由 Claude Code 搭建」可以删掉或改成你想写的。

---

## 三、每个页面怎么加内容

> 通用规律：`<li class="entry"> ... </li>` 是「一条」内容。加新内容 = 复制一整条 `<li>...</li>`，粘贴到 `</ul>` 前面，改里面的文字。

### 首页 `index.html`

首页只有一处要改——Hero 区那句介绍：

```html
<h1>Nash Hong Dreamland</h1>
<p>这里是 Nash 的梦境空间，盛放作品、日常、文章、闲话、音乐与关于。欢迎随意逛逛。</p>
```

改成你自己的话即可。下面的六张卡片已经写好，不用动（它们自动跳转到对应板块）。

---

### 作品页 `works.html`

找到 `<ul class="entry-list">`，里面每条作品长这样：

```html
<li class="entry">
  <a href="#">
    <time>2026</time>
    <h2>作品一：标题占位</h2>
    <p>一句话介绍这个作品。把真实的作品名称、简介和链接填进来。</p>
  </a>
</li>
```

**加一件新作品**：复制上面一整段，把 `#` 换成作品的链接（线上地址，如 `https://...`），改时间、标题、介绍。

---

### 日常页 `daily.html`

结构同上，日期格式是「年-月-日」：

```html
<li class="entry">
  <a href="#">
    <time>2026-08-26</time>
    <h2>今天的标题</h2>
    <p>写几句今天发生的事。</p>
  </a>
</li>
```

新的日常放在最上面（列表顶部），时间倒序排列。

---

### 文章页 `articles.html`

文章列表和作品页一样。区别在于：**文章要点进去能看到全文**，所以要单独建一个「文章详情页」。

**做法**：复制一份 `articles.html`，重命名为文章标题的拼音/英文（比如 `first-post.html`），把中间列表换成文章正文，然后在 `articles.html` 的列表里把链接指向它。

下面给一个最简单的文章详情页模板，复制整个文件内容、改文字即可：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>文章标题 · Nash Hong Dreamland</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <canvas id="stars"></canvas>
  <div class="glow"></div>
  <div class="noise"></div>

  <header class="site-header">
    <div class="container nav">
      <a class="brand" href="index.html">Nash Hong Dreamland</a>
      <nav>
        <ul class="nav-links" id="navLinks">
          <li><a href="works.html">作品</a></li>
          <li><a href="daily.html">日常</a></li>
          <li><a href="articles.html" class="active">文章</a></li>
          <li><a href="notes.html">闲话</a></li>
          <li><a href="music.html">音乐</a></li>
          <li><a href="about.html">关于</a></li>
        </ul>
      </nav>
      <button class="nav-toggle" id="navToggle" aria-label="菜单">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <main class="container">
    <div class="page-head">
      <h1>文章标题</h1>
      <p>2026-08-26</p>
    </div>
    <div class="about-card">
      <p>这里是正文第一段……</p>
      <p>这里是正文第二段……</p>
      <p>想加几段就复制几段 <code>&lt;p&gt;...&lt;/p&gt;</code>。</p>
    </div>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>© <span id="year"></span> Nash Hong Dreamland · 由 Claude Code 搭建</p>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

> 正文用了 `.about-card` 这个白色玻璃卡片样式，是为了让长文在深色背景上更清晰。以后想换成别的排版可以告诉我。

---

### 闲话页 `notes.html`

适合一句话一条。结构同日常页，把 `h2` 里写短句、`p` 里写补充（可以留空）：

```html
<li class="entry">
  <a href="#">
    <time>2026-08-26</time>
    <h2>此刻想到的一句话</h2>
    <p>补充说明（可选）。</p>
  </a>
</li>
```

---

### 音乐页 `music.html`

歌曲条目结构是「序号 + 唱片图标 + 歌名/歌手」：

```html
<li class="track">
  <span class="track-index">04</span>
  <span class="track-disc">♪</span>
  <div class="track-info">
    <h3>歌名</h3>
    <span>歌手</span>
  </div>
</li>
```

加歌 = 复制整段，改序号（01、02、03…）、歌名、歌手。

**想嵌入真正的播放器**（网易云 / QQ 音乐）：
1. 网易云网页版打开一首歌 → 点「生成外链播放器」→ 复制 `<iframe>` 代码
2. 把那段 `<iframe>` 贴到 `music.html` 里、你想放的位置，比如列表上方
3. 示例：`<iframe src="https://music.163.com/outchain/player?type=2&id=歌曲ID&auto=0&height=66" frameborder="0" width="100%" height="66"></iframe>`

---

### 关于页 `about.html`

改这几处：

```html
<div class="avatar">N</div>          <!-- 头像里的字母，改成你名字首字母 -->
<div class="about-name">Nash Hong</div>   <!-- 你的名字 -->
<div class="about-role">OWNER OF THIS DREAMLAND</div>  <!-- 一句身份描述 -->
<p>这里是我的个人展示空间……</p>       <!-- 自我介绍，可加多段 -->
<div class="tag-list">
  <span class="tag">创作</span>       <!-- 标签，可增删 -->
  <span class="tag">设计</span>
</div>
```

想用真人头像：把一张图片放到 `images/` 里，然后把 `<div class="avatar">N</div>` 换成：

```html
<img class="avatar" src="images/me.jpg" alt="我的头像">
```

---

## 四、图片怎么放

1. 把图片文件（`.jpg` / `.png`）放进 `F:\MyPage\images\` 文件夹
2. 在页面里这样引用（`src` 写相对路径）：

```html
<img src="images/我的图片.jpg" alt="图片描述">
```

> 建议图片文件名用英文或拼音（如 `work1.jpg`），避免中文文件名在 GitHub 上出问题。

---

## 五、本地预览与部署

### 预览

双击任意 `.html` 文件，浏览器打开即可。

### 部署到 GitHub Pages

1. 在 GitHub 新建仓库，命名 `你的用户名.github.io`
2. 把 `F:\MyPage` 里的内容推到该仓库
3. 仓库 `Settings → Pages → Source` 选分支，保存
4. 访问 `https://你的用户名.github.io`

> 推代码和建仓库这步如果不熟，可以直接让我来做。

---

## 六、常见问题

- **改了没变化？** 刷新浏览器；或确认改的是对的 `.html` 文件、保存过了。
- **某段文字想加粗/换色？** 直接告诉我，我来加；或临时用 `<b>粗体</b>` 包住。
- **想加第七个板块？** 告诉我板块名，我帮你加到导航和首页卡片里。
- **排版想变？** 描述一下想要的效果，我来调整 CSS。

---

*有任何「加内容」之外的需求（改样式、加功能、部署），直接跟 Claude Code 说就行。*
