/* v56: /pages/markalar. ikas'in bu sayfadaki hazir "marka logolari" blogu bos kalmisti (linki "#" olan 3 yer tutucu
   gorsel); sayfa site haritasinda ve basligi "Markalar: Sony, Canon..." oldugu halde icerik yoktu. Yer tutucular gizlenir,
   yerine cihaz listesinden (devices.json) uretilen marka dizini gelir: tur basina marka kartlari (model sayisi + ornek cihaz
   gorseli), kendi sayfasi olmayan markalar icin arama linkleri. Logo cizilmez; marka adi duz yazidir. */
(function () {
  if (window.__bgMk) return; window.__bgMk = 1;
  var WA = 'https://wa.me/905353211911';
  var css = [
    '.bg-mk-ph{display:none!important}',
    '.bg-mk{width:100%;flex-basis:100%;box-sizing:border-box;margin:8px 0 40px;color:#F2F0EB;font-family:Manrope,sans-serif;text-align:left}',
    '.bg-mk h1{margin:0 0 10px!important;font:italic 800 38px/1.05 Archivo,sans-serif!important;color:#F2F0EB!important;letter-spacing:-.01em}',
    '.bg-mk-lead{margin:0 0 28px;max-width:620px;font:500 15.5px/1.6 Manrope,sans-serif;color:#A9A59D}',
    '.bg-mk-sec{margin:0 0 30px}',
    '.bg-mk-sh{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin:0 0 14px;padding:0 0 10px;border-bottom:1px solid #1F1E23}',
    '.bg-mk-sh h2{margin:0!important;font:800 20px/1.2 Archivo,sans-serif!important;color:#F2F0EB!important}',
    '.bg-mk-sh a{font:700 13px/1.2 Manrope,sans-serif;color:#C9A45C;text-decoration:none;white-space:nowrap}',
    '.bg-mk-sh a:hover{color:#E2C285}',
    '.bg-mk-g{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:14px}',
    '@media (max-width:1100px){.bg-mk-g{grid-template-columns:repeat(4,minmax(0,1fr))}}',
    '@media (max-width:760px){.bg-mk-g{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.bg-mk h1{font-size:30px!important}.bg-mk-lead{font-size:14.5px;margin-bottom:22px}}',
    '.bg-mk-c{display:flex;flex-direction:column;min-width:0;border:1px solid #26252A;border-radius:16px;background:#141416;overflow:hidden;text-decoration:none;color:#F2F0EB;transition:border-color .2s,transform .2s}',
    '.bg-mk-c:hover{border-color:#C9A45C;transform:translateY(-2px)}',
    '.bg-mk-c .im{display:block;aspect-ratio:1/1;background:#fff;overflow:hidden}',
    '.bg-mk-c .im img{width:100%;height:100%;object-fit:contain;display:block;transition:transform .35s}',
    '.bg-mk-c:hover .im img{transform:scale(1.04)}',
    '.bg-mk-c .tx{display:flex;flex-direction:column;gap:5px;padding:12px 14px 14px}',
    '.bg-mk-c b{font:800 16px/1.2 Archivo,sans-serif;color:#F2F0EB;overflow-wrap:anywhere}',
    '.bg-mk-c small{font:700 12px/1 Manrope,sans-serif;color:#C9A45C}',
    '.bg-mk-o{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:14px 0 0}',
    '.bg-mk-o .l{font:600 12.5px/1 Manrope,sans-serif;color:#8E8A83;margin-right:2px}',
    '.bg-mk-o a{display:inline-flex;align-items:center;gap:6px;min-height:34px;padding:0 13px;border:1px solid #26252A;border-radius:999px;background:#141416;color:#D9D5CE;font:600 13px/1 Manrope,sans-serif;text-decoration:none;transition:border-color .2s,color .2s}',
    '.bg-mk-o a:hover{border-color:#C9A45C;color:#fff}',
    '.bg-mk-o a i{font-style:normal;font-weight:600;color:#8E8A83;font-size:12px}',
    '.bg-mk-end{margin:6px 0 0;padding:16px 18px;border:1px solid #3A3426;border-radius:14px;background:#1B1912;font:500 14.5px/1.55 Manrope,sans-serif;color:#D9D5CE}',
    '.bg-mk-end a{color:#E2C285;font-weight:700;text-decoration:underline;text-underline-offset:2px}',
    '@media (prefers-reduced-motion:reduce){.bg-mk-c,.bg-mk-c .im img{transition:none}}'
  ].join('');
  var st = document.createElement('style'); st.id = 'bg-mk-css'; st.textContent = css; (document.head || document.documentElement).appendChild(st);

  var NAMES = { K: 'Kamera', L: 'Lens', D: 'Drone', A: 'Aksiyon Kamera', G: 'Gimbal' };
  var ORDER = ['K', 'L', 'D', 'A', 'G'];
  /* kartta gorunecek ornek cihaz: tur|marka -> slug (yoksa o markanin listedeki ilk cihazi) */
  var SHOW = {
    'K|Sony': 'sony-alpha-a7-iv-kaplama', 'K|Canon': 'canon-eos-r6-mark-ii-kaplama', 'K|Nikon': 'nikon-z6-iii-kaplama', 'K|Fujifilm': 'fujifilm-x-t5-kaplama',
    'K|Panasonic': 'panasonic-lumix-s5-ii-s5-iix-kaplama', 'L|Sony': 'sony-fe-24-70mm-f2-8-gm-ii-lens-kaplama', 'L|Canon': 'canon-rf-24-70mm-f2-8-l-is-usm-lens-kaplama',
    'L|Nikon': 'nikon-z-24-70mm-f2-8-s-lens-kaplama', 'L|Fujifilm': 'fujifilm-xf-16-55mm-f2-8-r-lm-wr-lens-kaplama', 'L|Sigma': 'sigma-24-70mm-f2-8-dg-dn-ii-art-sony-e-lens-kaplama',
    'L|Tamron': 'tamron-28-75mm-f2-8-di-iii-vxd-g2-for-sony-e-lens-kaplama', 'D|DJI': 'dji-mini-4-pro-kaplama', 'A|DJI': 'dji-osmo-pocket-3-kaplama',
    'A|GoPro': 'gopro-hero-9-10-11-12-black-kaplama', 'A|Insta360': 'insta360-x5-kaplama', 'G|DJI': 'dji-rs-4-kaplama', 'G|Zhiyun': 'zhiyun-weebill-s-kaplama'
  };
  /* kartlarda ayni desen yan yana gelmesin: sirayla en cok tercih edilenler */
  var PAT = ['tactical-black', 'royal-gold', 'tactical-red', 'royal-black', 'line-cyan', 'tactical-grey', 'hexagonal-red', 'royal-navy', 'tactical-green', 'nexus-cyan', 'carbon', 'line-red', 'topografik-navy', 'tactical-blue', 'hexagonal-blue', 'nexus-red', 'topografik-red'];
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function isPage() { return location.pathname.replace(/\/$/, '') === '/pages/markalar'; }

  function html(B) {
    var all = [], k;
    for (k in B.BYSLUG) all.push(B.BYSLUG[k]);
    var pi = 0, out = '';
    ORDER.forEach(function (t) {
      var c = B.CATS[t]; if (!c) return;
      var list = all.filter(function (d) { return d.t === t; }); if (!list.length) return;
      var cnt = {}, first = {};
      list.forEach(function (d) { cnt[d.b] = (cnt[d.b] || 0) + 1; if (!first[d.b]) first[d.b] = d; });
      /* kendi sayfasi olan markalar (CATS sirasi): "DJI Osmo" alt sayfasi DJI markasidir */
      var cards = [], used = {};
      c.subs.forEach(function (s) {
        var bn = s[0] === 'DJI Osmo' ? 'DJI' : s[0]; if (!cnt[bn]) return;
        used[bn] = 1; cards.push({ b: bn, lb: s[0], href: '/' + s[1], n: cnt[bn] });
      });
      var rest = Object.keys(cnt).filter(function (b) { return !used[b]; }).sort(function (a, b) { return cnt[b] - cnt[a] || a.localeCompare(b, 'tr'); });
      /* sayfasi olmayan ama modeli cok olan markalar da kart olur (arama sayfasina gider) */
      rest.slice().forEach(function (b) { if (cnt[b] >= 10) { cards.push({ b: b, lb: b, href: '/search?s=' + encodeURIComponent(b), n: cnt[b] }); rest.splice(rest.indexOf(b), 1); } });
      out += '<div class="bg-mk-sec"><div class="bg-mk-sh"><h2>' + esc(NAMES[t]) + '</h2><a href="/' + esc(c.root) + '">Tüm ' + esc(NAMES[t].toLocaleLowerCase('tr')) + ' modelleri (' + list.length + ') →</a></div><div class="bg-mk-g">' +
        cards.map(function (x) {
          var d = B.BYSLUG[SHOW[t + '|' + x.b]] || first[x.b], ds = PAT[pi++ % PAT.length], src = '', fb = '';
          try { if (B.out && B.out(ds)) ds = B.cover(d); src = B.timg(d, ds); fb = B.img(d, ds); } catch (e) {}
          return '<a class="bg-mk-c" href="' + esc(x.href) + '" aria-label="' + esc(x.lb + (x.lb === x.b ? ' ' + NAMES[t] : '') + ' kaplama, ' + x.n + ' model') + '">' +
            '<span class="im">' + (src ? '<img loading="lazy" decoding="async" width="400" height="400" alt="' + esc(d.b + ' ' + d.m + ' kaplama') + '" src="' + esc(src) + '" onerror="this.onerror=null;this.src=\'' + esc(fb) + '\'">' : '') + '</span>' +
            '<span class="tx"><b>' + esc(x.lb) + '</b><small>' + x.n + ' model</small></span></a>';
        }).join('') + '</div>' +
        (rest.length ? '<div class="bg-mk-o"><span class="l">Diğer markalar:</span>' + rest.map(function (b) { return '<a href="/search?s=' + encodeURIComponent(b) + '">' + esc(b) + ' <i>' + cnt[b] + '</i></a>'; }).join('') + '</div>' : '') +
        '</div>';
    });
    return '<h1>Markalar</h1><p class="bg-mk-lead">Kaplama ürettiğimiz markalar ve model sayıları. Markanı seç, modelini bul, 39 deseni cihazının üstünde gör.</p>' + out +
      '<p class="bg-mk-end">Markan ya da modelin listede yok mu? <a href="' + WA + '" target="_blank" rel="noopener">WhatsApp\'tan yaz</a>, üretebiliyorsak hemen söyleyelim.</p>';
  }
  function lca(a) { var n = a[0]; while (n && !a.every(function (x) { return n.contains(x); })) n = n.parentElement; return n; }
  function run() {
    var sec = document.querySelector('.bg-mk');
    if (!isPage()) {
      if (sec) sec.remove();
      [].forEach.call(document.querySelectorAll('.bg-mk-ph'), function (e) { e.classList.remove('bg-mk-ph'); });
      return;
    }
    if (sec && sec.isConnected) return;
    var B = window.__BG; if (!B || !B.BYSLUG || !B.CATS || !B.timg) return;
    /* ikas yer tutuculari: linki "#" olan, tema varsayilan gorselli kutular (ust menu, alt bilgi ve cekmece disinda) */
    var ph = [].filter.call(document.querySelectorAll('#app a[href="#"]'), function (a) {
      return a.querySelector('img[src*="/theme-images/"]') && !a.closest('header,footer,nav,.overlay,[class*="overlay"],.bg-mk');
    });
    if (!ph.length) return;
    var row = ph.length > 1 ? lca(ph) : ph[0].parentElement;
    if (!row || !row.parentElement || row.id === 'app' || row.querySelector('header,footer,.bg-ft')) return;
    row.classList.add('bg-mk-ph');
    sec = document.createElement('section'); sec.className = 'bg-mk'; sec.setAttribute('aria-label', 'Markalar');
    sec.innerHTML = html(B);
    row.parentElement.insertBefore(sec, row);
  }
  var tm = 0;
  function sch() { if (tm) return; tm = setTimeout(function () { tm = 0; try { run(); } catch (e) {} }, 120); }
  sch();
  new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true });
})();
