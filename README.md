# Nash Hong Dreamland

一个关于作品、日常、文章、闲话、音乐与关于的个人网站，纯静态，托管在 GitHub Pages。粉紫星空主题（玻璃拟态 + 星空粒子）。

## 目录结构

```
MyPage/
├── index.html      # 首页（六大板块入口）
├── works.html      # 作品
├── daily.html      # 日常
├── articles.html   # 文章
├── notes.html      # 闲话
├── music.html      # 音乐
├── about.html      # 关于
├── css/style.css   # 全局样式（全站共享）
├── js/main.js      # 交互脚本（星空粒子 / 菜单 / 年份）
└── images/         # 图片（放作品 / 日常的照片）
```

## 怎么改

- **站名**：全局搜索「Nash Hong Dreamland」，替换成你自己的名字。
- **配色**：编辑 `css/style.css` 顶部的 `:root` 变量，改 `--bg-1`/`--bg-2`（背景）、`--icon-pink`/`--icon-purple`/`--icon-cyan`（强调色）等即可换整套风格。所有页面共享这一份样式，改一处全站生效。
- **加内容**：编辑对应页面的 `.entry-list` / `.track-list` 里的条目，照着占位条目复制一份改文字即可。
- **音乐**：可在 `music.html` 里嵌入网易云 / QQ 音乐的歌单 `<iframe>` 外链播放器。

## 本地预览

双击任意 `.html` 文件即可在浏览器打开；或在项目目录运行：

```bash
npx serve
```

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库 `你的用户名.github.io`
2. 把本目录推到仓库
3. 仓库 Settings → Pages → Source 选分支，保存
4. 访问 `https://你的用户名.github.io` 即可
