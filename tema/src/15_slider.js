/* v28: ana sayfa giris gorseli -> otomatik gecisli slider (kendi cekimlerimiz) */
(function () {
  if (window.__bgSlider) return; window.__bgSlider = 1;
  var B = 'https://cdn.jsdelivr.net/gh/BedirhanAkyz/betaguard-onizleme@ccda2a65/img/site/', B2 = 'https://cdn.jsdelivr.net/gh/BedirhanAkyz/betaguard-onizleme@__SHA__/img/site/';
  var S = [
    ['hero7.webp', 'Yeşil kamuflaj mini drone kaplaması']
  ];
  var css = [
    '.bg-sl{position:relative;width:100%;aspect-ratio:1/1;max-height:620px;border-radius:20px;overflow:hidden;background:#141416}',
    '.bg-sl img{position:absolute;inset:0;width:100%!important;height:100%!important;max-height:none!important;aspect-ratio:auto!important;object-fit:cover;object-position:50% 50%;border-radius:0!important;opacity:0;transition:opacity .8s ease}',
    '.bg-sl img.on{opacity:1}',
    '.bg-sl-d{position:absolute;left:0;right:0;bottom:14px;display:flex;justify-content:center;gap:7px;z-index:2}',
    '.bg-sl-d button{width:8px;height:8px;padding:0;border:0;border-radius:99px;background:rgba(255,255,255,.45);cursor:pointer;transition:width .3s,background .3s}',
    '.bg-sl-d button.on{width:22px;background:#C9A45C}',
    '.bg-sl-a{position:absolute;top:50%;transform:translateY(-50%);z-index:2;width:38px;height:38px;border-radius:99px;border:0;background:rgba(14,14,15,.55);color:#F2F0EB;font-size:20px;line-height:38px;cursor:pointer;opacity:0;transition:opacity .2s}',
    '.bg-sl:hover .bg-sl-a{opacity:1}',
    '.bg-sl-a.l{left:12px}.bg-sl-a.r{right:12px}',
    '@media (max-width:640px){.bg-sl{border-radius:14px}.bg-sl-a{display:none}}'
  ].join('');
  function build() {
    var r = document.querySelector('.bg-hero-r');
    if (!r || r.querySelector('.bg-sl')) return;
    if (!document.getElementById('bg-sl-css')) { var st = document.createElement('style'); st.id = 'bg-sl-css'; st.textContent = css; document.head.appendChild(st); }
    var box = document.createElement('div'); box.className = 'bg-sl';
    var h = '';
    S.forEach(function (s, i) { var st0 = s[0].replace('.webp', ''); h += '<img alt="' + s[1] + '" width="1200" height="1200" decoding="async" src="' + B2 + st0 + '-900.webp" srcset="' + B2 + st0 + '-640.webp 640w, ' + B2 + st0 + '-900.webp 900w, ' + B + s[0] + ' 1200w" sizes="(max-width: 800px) 92vw, 620px"' + (i ? ' loading="lazy"' : ' fetchpriority="high"') + (i ? '' : ' class="on"') + '>'; });
    h += '<button class="bg-sl-a l" aria-label="Önceki">‹</button><button class="bg-sl-a r" aria-label="Sonraki">›</button><div class="bg-sl-d">';
    S.forEach(function (s, i) { h += '<button aria-label="' + (i + 1) + '. görsel"' + (i ? '' : ' class="on"') + '></button>'; });
    box.innerHTML = h + '</div>';
    r.innerHTML = ''; r.appendChild(box);
    var imgs = box.querySelectorAll('img'), dots = box.querySelectorAll('.bg-sl-d button'), cur = 0, t;
    function go(n) {
      n = (n + S.length) % S.length; if (n === cur) return;
      imgs[cur].classList.remove('on'); dots[cur].classList.remove('on');
      cur = n; imgs[cur].classList.add('on'); dots[cur].classList.add('on');
      var nx = imgs[(cur + 1) % S.length]; if (nx.loading === 'lazy') nx.loading = 'eager';
    }
    function play() { clearInterval(t); t = setInterval(function () { if (!document.hidden) go(cur + 1); }, 4500); }
    for (var i = 0; i < dots.length; i++) (function (i) { dots[i].onclick = function () { go(i); play(); }; })(i);
    box.querySelector('.l').onclick = function () { go(cur - 1); play(); };
    box.querySelector('.r').onclick = function () { go(cur + 1); play(); };
    var x0 = null;
    box.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    box.addEventListener('touchend', function (e) { if (x0 === null) return; var dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) { go(cur + (dx < 0 ? 1 : -1)); play(); } x0 = null; });
    if (S.length < 2) { box.querySelector('.bg-sl-d').style.display = 'none'; box.querySelectorAll('.bg-sl-a').forEach(function (b) { b.style.display = 'none'; }); return; }
    imgs[1].loading = 'eager';
    play();
  }
  build();
  new MutationObserver(build).observe(document.documentElement, { childList: true, subtree: true });
})();
