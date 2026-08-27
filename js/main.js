// Nash Hong Dreamland · 交互脚本（全站共享）

// 页脚年份
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// 移动端菜单
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') navLinks.classList.remove('open');
  });
}

// ===== 星空粒子 =====
const canvas = document.getElementById('stars');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let stars = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const COLORS = ['#ffffff', '#ffe5ec', '#7de3f4', '#f4a7b9'];
  const COUNT = Math.min(160, Math.floor(window.innerWidth / 8));

  for (let i = 0; i < COUNT; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.2,
      c: COLORS[Math.floor(Math.random() * COLORS.length)],
      base: Math.random() * 0.6 + 0.2,
      tw: Math.random() * 0.02 + 0.005,
      phase: Math.random() * Math.PI * 2,
      vx: (Math.random() - 0.5) * 0.04,
      vy: (Math.random() - 0.5) * 0.04
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of stars) {
      s.phase += s.tw;
      const alpha = s.base * (0.5 + 0.5 * Math.sin(s.phase));
      s.x += s.vx;
      s.y += s.vy;
      if (s.x < 0) s.x = canvas.width;
      if (s.x > canvas.width) s.x = 0;
      if (s.y < 0) s.y = canvas.height;
      if (s.y > canvas.height) s.y = 0;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = s.c;
      ctx.globalAlpha = alpha;
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  draw();
}

// ===== 全站音乐播放器（APlayer）=====
(function () {
  const APLAYER_CSS = 'https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css';
  const APLAYER_JS = 'https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js';

  // 动态引入样式
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = APLAYER_CSS;
  document.head.appendChild(css);

  // 动态引入脚本，加载完成后初始化播放器
  const script = document.createElement('script');
  script.src = APLAYER_JS;
  script.onload = () => {
    if (typeof APlayer === 'undefined') return;

    const container = document.createElement('div');
    container.id = 'aplayer';
    document.body.appendChild(container);

    const ap = new APlayer({
      container,
      fixed: true,
      mini: true,
      autoplay: false,
      theme: '#F4A7B9',
      loop: 'all',
      order: 'list',
      preload: 'auto',
      volume: 0.7,
      listFolded: true,
      listMaxHeight: 90,
      audio: [
        {
          name: 'You Mean the World to Me',
          artist: 'Mameyudoufu',
          url: 'https://music.163.com/song/media/outer/url?id=2110359791.mp3',
          cover: 'images/cover.svg'
        },
        {
          name: 'βlαnoir',
          artist: 'Aoi',
          url: 'https://music.163.com/song/media/outer/url?id=2100669817.mp3',
          cover: 'images/cover.svg'
        },
        {
          name: 'Ops:Limone',
          artist: 'Reku Mochizuki',
          url: 'https://music.163.com/song/media/outer/url?id=1983301439.mp3',
          cover: 'images/cover.svg'
        },
        {
          name: '酸橙色信笺',
          artist: '塞壬唱片-MSR/DAZBEE',
          url: 'https://music.163.com/song/media/outer/url?id=3410744228.mp3',
          cover: 'images/cover.svg'
        },
        {
          name: '悔_',
          artist: 'Essbee',
          url: 'https://music.163.com/song/media/outer/url?id=3329651548.mp3',
          cover: 'images/cover.svg'
        },
        {
          name: 'Signal',
          artist: 'rejection/Such',
          url: 'https://music.163.com/song/media/outer/url?id=1415131902.mp3',
          cover: 'images/cover.svg'
        },
        {
          name: 'Cryogenic (feat. Petra Gurin)',
          artist: 'かめりあ/Petra Gurin',
          url: 'https://music.163.com/song/media/outer/url?id=3352044077.mp3',
          cover: 'images/cover.svg'
        },
        {
          name: 'Cuvism³',
          artist: 'Fl00t/Halv',
          url: 'https://music.163.com/song/media/outer/url?id=2610074481.mp3',
          cover: 'images/cover.svg'
        },
        {
          name: '#病みカワ',
          artist: '森羅万象/La priere',
          url: 'https://music.163.com/song/media/outer/url?id=2041863280.mp3',
          cover: 'images/cover.svg'
        },
        {
          name: 'Amnéhilesie',
          artist: 'MisomyL',
          url: 'https://music.163.com/song/media/outer/url?id=2152294282.mp3',
          cover: 'images/cover.svg'
        },
        {
          name: 'INTERNET OVERDOSE',
          artist: 'NEEDY GIRL OVERDOSE/KOTOKO/Aiobahn +81',
          url: 'https://music.163.com/song/media/outer/url?id=1840401436.mp3',
          cover: 'images/cover.svg'
        },
        {
          name: '躯樹の墓守',
          artist: '庭師/Aoi',
          url: 'https://music.163.com/song/media/outer/url?id=2110359751.mp3',
          cover: 'images/cover.svg'
        },
        {
          name: 'Inverted World',
          artist: 'ARForest',
          url: 'https://music.163.com/song/media/outer/url?id=2099631232.mp3',
          cover: 'images/cover.svg'
        },
        {
          name: 'Immaculate',
          artist: 'ぺのれり',
          url: 'https://music.163.com/song/media/outer/url?id=2695992492.mp3',
          cover: 'images/cover.svg'
        },
        {
          name: "Nyarlathotep's Dreamland",
          artist: 'Raimukun',
          url: 'https://music.163.com/song/media/outer/url?id=2010582349.mp3',
          cover: 'images/cover.svg'
        },
        {
          name: 'Soulwind',
          artist: 'HyuN',
          url: 'https://music.163.com/song/media/outer/url?id=1343762209.mp3',
          cover: 'images/cover.svg'
        },
        {
          name: 'Quadruplicity',
          artist: 'LucaProject/NeLiME',
          url: 'https://music.163.com/song/media/outer/url?id=2689897074.mp3',
          cover: 'images/cover.svg'
        },
        {
          name: '7 Wonders',
          artist: '削除',
          url: 'https://music.163.com/song/media/outer/url?id=3359696451.mp3',
          cover: 'images/cover.svg'
        },
        {
          name: '小小奇迹',
          artist: '鸣潮先约电台/jixwang/飞行雪绒',
          url: 'https://music.163.com/song/media/outer/url?id=3346496228.mp3',
          cover: 'images/cover.svg'
        },
        {
          name: 'Star Cape',
          artist: '打打だいず',
          url: 'https://music.163.com/song/media/outer/url?id=1916625334.mp3',
          cover: 'images/cover.svg'
        }
      ]
    });

    // mini:true 默认是收起的小圆钮，这里立即展开成完整长条
    ap.setMode('normal');

    // 暴露给音乐页的播放按钮使用
    window.NashPlayer = ap;

    // ---- 站内跳转续播：保存 / 恢复播放状态 ----
    const STORAGE_KEY = 'nash-player-state';

    function saveState() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          index: ap.list.index,
          time: ap.audio.currentTime || 0,
          playing: !ap.audio.paused,
          updated: Date.now()
        }));
      } catch (e) {}
    }

    function restoreState() {
      let state;
      try {
        state = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      } catch (e) {
        return false;
      }
      if (!state) return false;

      // 超过 24 小时就不再续播
      if (Date.now() - state.updated > 24 * 3600 * 1000) {
        localStorage.removeItem(STORAGE_KEY);
        return false;
      }

      if (typeof state.index === 'number') {
        ap.list.switch(state.index);
      }

      const seekTo = () => {
        if (state.time > 0) {
          try { ap.audio.currentTime = state.time; } catch (e) {}
        }
      };

      if (ap.audio.readyState >= 1) {
        seekTo();
      } else {
        const once = () => {
          seekTo();
          ap.audio.removeEventListener('loadedmetadata', once);
          ap.audio.removeEventListener('canplay', once);
        };
        ap.audio.addEventListener('loadedmetadata', once);
        ap.audio.addEventListener('canplay', once);
      }

      return !!state.playing;
    }

    const wasPlaying = restoreState();
    if (wasPlaying) {
      const p = ap.play();
      if (p && p.catch) p.catch(() => {});
    }

    ap.on('play', saveState);
    ap.on('pause', saveState);
    ap.on('listchange', saveState);
    ap.on('ended', saveState);
    setInterval(saveState, 1000);
  };
  document.head.appendChild(script);
})();

// ===== 站内无刷新导航（让播放器切页不中断）=====
(function () {
  // fetch 在 file:// 下不可用，仅在 http/https 下启用无刷新导航
  const canUseFetch = ['http:', 'https:'].includes(window.location.protocol);

  function isInternalPage(href) {
    return !!href &&
      !/^(#|https?:|javascript:|mailto:|tel:)/.test(href) &&
      /\.html$/i.test(href);
  }

  function updateNavActive(path) {
    const name = path.split('/').pop().split('?')[0];
    document.querySelectorAll('.nav-links a').forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === name);
    });
  }

  async function loadPage(href, push) {
    try {
      const res = await fetch(href);
      if (!res.ok) throw new Error('bad status');
      const text = await res.text();
      const doc = new DOMParser().parseFromString(text, 'text/html');

      const newMain = doc.querySelector('main');
      const currentMain = document.querySelector('main');
      if (newMain && currentMain) {
        // 子页靠 <main class="container"> 实现居中；只换 innerHTML 会丢掉 class，
        // 导致内容全宽靠左。这里同步 <main> 自身的属性（class 等），保证切页后布局一致。
        Array.from(currentMain.attributes).forEach((attr) =>
          currentMain.removeAttribute(attr.name)
        );
        Array.from(newMain.attributes).forEach((attr) =>
          currentMain.setAttribute(attr.name, attr.value)
        );
        currentMain.innerHTML = newMain.innerHTML;
      }

      const newTitle = doc.querySelector('title');
      if (newTitle) document.title = newTitle.textContent;

      updateNavActive(href);

      if (push) history.pushState({ href }, '', href);
      window.scrollTo(0, 0);
    } catch (err) {
      // 本地 file:// 打开等 fetch 不可用的情况，回退整页跳转
      window.location.href = href;
    }
  }

  if (canUseFetch) {
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href');
      if (!isInternalPage(href)) return;
      if (a.target === '_blank' || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      e.preventDefault();
      loadPage(href, true);
    });

    window.addEventListener('popstate', (e) => {
      const href = (e.state && e.state.href) ||
        (window.location.pathname.split('/').pop() || 'index.html');
      loadPage(href, false);
    });
  }
})();

// ===== 音乐页播放按钮：点击切换并播放对应歌曲 =====
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.track-play');
  if (!btn) return;
  const player = window.NashPlayer;
  if (!player) return;
  const index = parseInt(btn.getAttribute('data-index'), 10);
  if (Number.isNaN(index)) return;
  player.list.switch(index);
  player.play();
});

// ===== 通用图片查看器：点击 [data-lightbox] 放大，点任意处关闭 =====
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.id = 'lightbox';
const lightboxImg = document.createElement('img');
lightboxImg.id = 'lightboxImg';
lightboxImg.alt = '';
lightbox.appendChild(lightboxImg);
document.body.appendChild(lightbox);

document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-lightbox]');
  if (!trigger) return;
  e.preventDefault();
  const src = trigger.getAttribute('href') || trigger.getAttribute('src');
  if (src) {
    lightboxImg.src = src;
    lightbox.classList.add('open');
  }
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('open');
});

// ===== 粉色星星光标 + 拖尾 =====
(function () {
  document.body.classList.add('custom-cursor');

  const canvas = document.createElement('canvas');
  canvas.id = 'cursorCanvas';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  let W = 0, H = 0;
  function resize() {
    const dpr = window.devicePixelRatio || 1;
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  const mouse = { x: W / 2, y: H / 2 };
  const cursor = { x: W / 2, y: H / 2 };
  const lastSpawn = { x: mouse.x, y: mouse.y };
  let hovering = false;
  let pressed = false;

  const particles = [];
  // 粉色系配色：粉 / 浅粉 / 淡紫 / 近白粉
  const COLORS = [
    [255, 150, 190],
    [255, 180, 210],
    [220, 160, 255],
    [255, 210, 230]
  ];

  function star(x, y, r, rotation, alpha, rgb) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const radius = i % 2 === 0 ? r : r * 0.45;
      const angle = -Math.PI / 2 + i * Math.PI / 5;
      const px = Math.cos(angle) * radius;
      const py = Math.sin(angle) * radius;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',' + alpha + ')';
    ctx.fill();
    ctx.restore();
  }

  document.addEventListener('mousemove', (e) => {
    hovering = true;
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    // 按移动距离生成拖尾星星，快速移动时也更连续
    const dx = mouse.x - lastSpawn.x;
    const dy = mouse.y - lastSpawn.y;
    const dist = Math.hypot(dx, dy);
    if (dist >= 16) {
      const count = Math.min(3, Math.floor(dist / 16));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: mouse.x + (Math.random() - 0.5) * 8,
          y: mouse.y + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 0.5,
          vy: -0.2 - Math.random() * 0.7,
          r: 2 + Math.random() * 3.5,
          rot: Math.random() * Math.PI * 2,
          vr: (Math.random() - 0.5) * 0.1,
          life: 0,
          maxLife: 28 + Math.random() * 22,
          alpha: 0.6 + Math.random() * 0.4,
          rgb: COLORS[Math.floor(Math.random() * COLORS.length)]
        });
      }
      lastSpawn.x = mouse.x;
      lastSpawn.y = mouse.y;
    }
  });

  document.addEventListener('mouseleave', () => { hovering = false; });
  document.addEventListener('mousedown', () => { pressed = true; });
  document.addEventListener('mouseup', () => { pressed = false; });

  function frame() {
    ctx.clearRect(0, 0, W, H);

    // 平滑跟随，避免光标僵硬
    cursor.x += (mouse.x - cursor.x) * 0.32;
    cursor.y += (mouse.y - cursor.y) * 0.32;

    // 绘制拖尾星星（逐渐缩小 + 淡出）
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.life++;
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      const t = p.life / p.maxLife;
      if (t >= 1) {
        particles.splice(i, 1);
        continue;
      }
      star(p.x, p.y, p.r * (1 - t * 0.6), p.rot, p.alpha * (1 - t), p.rgb);
    }

    // 绘制主光标星星（带轻微脉动，按下时略缩小）
    if (hovering) {
      const pulse = 1 + Math.sin(Date.now() / 220) * 0.08;
      const size = (pressed ? 9 : 12) * pulse;
      ctx.save();
      ctx.shadowColor = 'rgba(255, 150, 190, 0.9)';
      ctx.shadowBlur = 16;
      star(cursor.x, cursor.y, size, 0, 1, [255, 170, 205]);
      ctx.restore();
      star(cursor.x, cursor.y, size * 0.55, 0, 1, [255, 235, 245]);
    }

    requestAnimationFrame(frame);
  }
  frame();
})();
