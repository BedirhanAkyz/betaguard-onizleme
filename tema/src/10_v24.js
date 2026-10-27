/* v24: Desen seçici + renge göre keşfet */
(function(){
  if (window.__bgV24) return; window.__bgV24 = 1;
  var IMG = '/images/3343706a-8edb-4c74-a651-8671f39feb90/';
  var DESC = {
    'Line': 'Kesişen keskin çizgiler. Dinamik ve modern bir görünüm.',
    'Tactical': 'Kamuflaj dokusu. Sahada sert, arazide iddialı.',
    'Carbon': 'Karbon fiber dokusu. Sade, teknik ve zamansız.',
    'Royal': 'Barok motifler. Klasik ve şık bir duruş.',
    'Mono': 'Tek düz renk. 9 tonla en sade seçenek.',
    'Topografik': 'Harita eş yükselti çizgileri. Gezginler için.',
    'Nexus': 'Devre kartı deseni. Teknolojiyi üstünde taşı.',
    'Hexagonal': 'Petek geometrisi. Güçlü ve dikkat çekici.',
    'Lego': 'Renkli tuğlalar. Eğlenceli ve tek.'
  };
  var FAM = [
    ['siyah','Siyah','#1b1b1d'],
    ['beyaz','Beyaz & Gri','#e6e3dc'],
    ['mavi','Mavi','#2f6fd6'],
    ['yesil','Yeşil','#3f8a4a'],
    ['kirmizi','Kırmızı & Pembe','#c8323c'],
    ['sicak','Sıcak & Renkli','linear-gradient(135deg,#e7b416,#e06a1b 55%,#8a5a3c)']
  ];
  function fam(name){
    var w = name.split(' ').pop().toLowerCase();
    if (/black|carbon/.test(w)) return 'siyah';
    if (/white|silver|grey|gray/.test(w)) return 'beyaz';
    if (/navy|blue|cyan/.test(w)) return 'mavi';
    if (/green/.test(w)) return 'yesil';
    if (/red|pink/.test(w)) return 'kirmizi';
    return 'sicak';
  }
  function iid(s){ var m = /\/images\/[^/]+\/([^/]+)\//.exec(s || ''); return m ? m[1] : ''; }
  function u(id, sz){ return IMG + id + '/image_' + sz + '.webp'; }
  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }

  function collect(){
    var ds = document.querySelector('[data-bg-desen]'), wl = document.querySelector('[data-bg-wall]');
    if (!ds || !wl || !ds.querySelector('.bg-ds-card') || !wl.querySelector('.bg-wall-t')) return null;
    var wall = {};
    [].forEach.call(wl.querySelectorAll('.bg-wall-t'), function(a){
      var n = (a.querySelector('span') || a).textContent.trim();
      var slug = (a.getAttribute('href') || '').split('desen=')[1] || '';
      var img = a.querySelector('img');
      if (!wall[n] && img) wall[n] = { slug: slug, dev: iid(img.getAttribute('src')) };
    });
    var series = [];
    [].forEach.call(ds.querySelectorAll('.bg-ds-card'), function(c){
      var n = c.querySelector('b').textContent.trim();
      var card = iid(c.querySelector('img').getAttribute('src'));
      var cols = [].map.call(c.querySelectorAll('.bg-ds-dots i'), function(i){ return { name: i.title, sw: iid(i.style.backgroundImage) }; });
      if (!cols.length) cols = [{ name: n, sw: card }];
      var def = (c.getAttribute('href') || '').split('desen=')[1] || '';
      cols = cols.filter(function(x){ return wall[x.name]; }).map(function(x){
        return { name: x.name, short: x.name === n ? n : x.name.replace(n + ' ', ''), sw: x.sw, dev: wall[x.name].dev, slug: wall[x.name].slug, series: n, fam: fam(x.name) };
      });
      if (!cols.length) return;
      var di = 0; cols.forEach(function(x, i){ if (x.slug === def) di = i; });
      series.push({ name: n, card: card, cols: cols, def: di });
    });
    return series.length ? series : null;
  }

  var css = [
    '[data-v24] *{box-sizing:border-box}[data-v24]{min-width:0;max-width:100%}',
    '[data-bg-wall][data-v24]{display:block;max-width:1240px;margin:0 auto;padding:56px 24px 24px;overflow:visible}',
    '[data-bg-desen][data-v24]{padding-bottom:40px}',
    '.bg24-h{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin:0 0 28px}',
    '.bg24-h .bg-eyebrow{display:block}.bg24-h h2{margin:6px 0 8px!important;font:italic 800 40px/1.1 Archivo,sans-serif!important;color:#F2F0EB!important;letter-spacing:-.01em}',
    '.bg24-h p{margin:0!important;max-width:560px;font:500 15px/1.6 Manrope,sans-serif!important;color:#A9A59D!important}',
    '@media (max-width:767px){.bg24-h h2{font-size:28px!important}}',
    '.bg24-studio{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(0,1fr);gap:28px;align-items:start}',
    '.bg24-stage{position:relative;border-radius:22px;overflow:hidden;background:#EFEEEC;aspect-ratio:1/1}',
    '.bg24-stage img.bg24-dev{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity .35s ease}',
    '.bg24-stage img.bg24-dev.out{opacity:0}',
    '.bg24-zoom{position:absolute;left:18px;bottom:18px;display:flex;align-items:center;gap:12px;padding:8px 18px 8px 8px;border-radius:999px;background:rgba(14,14,15,.86);backdrop-filter:blur(6px);color:#F2F0EB}',
    '.bg24-zoom i{width:54px;height:54px;border-radius:50%;background-size:cover;background-position:center;border:2px solid rgba(255,255,255,.85);flex:none}',
    '.bg24-zoom b{display:block;font:800 16px/1.2 Manrope,sans-serif}.bg24-zoom small{display:block;font:600 12px/1.3 Manrope,sans-serif;color:#A9A59D}',
    '.bg24-panel{display:flex;flex-direction:column;gap:22px}',
    '.bg24-lbl{font:700 12px/1 Manrope,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#8E8A83;margin:0 0 12px}',
    '.bg24-ser{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}',
    '.bg24-s{appearance:none;display:flex;align-items:center;gap:10px;padding:8px;border-radius:14px;border:1px solid #26262A;background:#141416;color:#D9D5CE;cursor:pointer;text-align:left;font:700 14px/1.2 Manrope,sans-serif;transition:border-color .2s,background .2s}',
    '.bg24-s i{width:40px;height:40px;border-radius:10px;background-size:cover;background-position:center;flex:none}',
    '.bg24-s small{display:block;font:600 11px/1.3 Manrope,sans-serif;color:#8E8A83;margin-top:2px}',
    '.bg24-s:hover{border-color:#4a463e}.bg24-s[aria-pressed=true]{border-color:#C9A45C;background:#1c1a16;color:#F2F0EB}',
    '.bg24-cols{display:flex;flex-wrap:wrap;gap:10px}',
    '.bg24-c{appearance:none;width:44px;height:44px;border-radius:50%;padding:0;border:2px solid transparent;background:transparent;cursor:pointer;transition:transform .15s}',
    '.bg24-c i{display:block;width:100%;height:100%;border-radius:50%;background-size:cover;background-position:center;border:1px solid rgba(255,255,255,.18)}',
    '.bg24-c:hover{transform:scale(1.08)}.bg24-c[aria-pressed=true]{border-color:#C9A45C;padding:3px}',
    '.bg24-cn{margin:10px 0 0;font:600 14px/1.4 Manrope,sans-serif;color:#F2F0EB}',
    '.bg24-desc{margin:0;font:500 15px/1.6 Manrope,sans-serif;color:#A9A59D}',
    '.bg24-cta{display:flex;flex-wrap:wrap;gap:12px;align-items:center}',
    '.bg24-go{display:inline-flex;align-items:center;gap:8px;padding:14px 26px;border-radius:999px;background:#C9A45C;color:#141210!important;font:800 15px/1 Manrope,sans-serif;text-decoration:none!important;transition:background .2s}',
    '.bg24-go:hover{background:#E2C285}',
    '.bg24-sec{display:inline-flex;padding:13px 22px;border-radius:999px;border:1px solid #4a463e;color:#E2C285!important;font:700 14px/1 Manrope,sans-serif;text-decoration:none!important}',
    '.bg24-sec:hover{border-color:#C9A45C}',
    '.bg24-f{display:flex;gap:8px;flex-wrap:wrap;margin:0 0 22px}',
    '.bg24-fb{appearance:none;display:inline-flex;align-items:center;gap:8px;padding:9px 16px 9px 10px;border-radius:999px;border:1px solid #2c2b30;background:#141416;color:#D9D5CE;font:700 13px/1 Manrope,sans-serif;cursor:pointer;white-space:nowrap}',
    '.bg24-fb i{width:16px;height:16px;border-radius:50%;border:1px solid rgba(255,255,255,.2)}',
    '.bg24-fb em{font-style:normal;color:#8E8A83;font-weight:600}',
    '.bg24-fb[aria-pressed=true]{border-color:#C9A45C;background:#1c1a16;color:#F2F0EB}',
    '.bg24-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}',
    '.bg24-t{display:block;border-radius:18px;overflow:hidden;background:#141416;border:1px solid #26262A;text-decoration:none!important;color:#F2F0EB;transition:border-color .2s,transform .2s}',
    '.bg24-t:hover{border-color:#C9A45C;transform:translateY(-2px)}',
    '.bg24-t .im{position:relative;display:block;aspect-ratio:1/1;background:#EFEEEC;overflow:hidden}',
    '.bg24-t .im img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .4s}',
    '.bg24-t:hover .im img{transform:scale(1.04)}',
    '.bg24-t .ft{display:flex;align-items:center;gap:10px;padding:10px 12px}',
    '.bg24-t .ft i{width:30px;height:30px;border-radius:50%;background-size:cover;background-position:center;flex:none;border:1px solid rgba(255,255,255,.18)}',
    '.bg24-t .ft b{display:block;font:800 14px/1.2 Manrope,sans-serif}.bg24-t .ft small{display:block;font:600 11px/1.3 Manrope,sans-serif;color:#8E8A83}',
    '.bg24-more{display:flex;justify-content:center;margin:22px 0 0}',
    '.bg24-more button{appearance:none;cursor:pointer;background:transparent}',
    '@media (max-width:1023px){.bg24-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}',
    '@media (max-width:899px){.bg24-studio{grid-template-columns:minmax(0,1fr);gap:20px}.bg24-ser{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;margin:0;padding:0 0 4px;scrollbar-width:none}.bg24-ser::-webkit-scrollbar{display:none}.bg24-s{flex:0 0 auto;scroll-snap-align:start;padding:6px 14px 6px 6px}.bg24-h{display:block}.bg24-h .bg24-sec{display:none}}',
    '@media (max-width:767px){.bg24-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.bg24-f{flex-wrap:nowrap;overflow-x:auto;margin:0 0 18px;padding:0 0 4px;scrollbar-width:none}.bg24-f::-webkit-scrollbar{display:none}.bg24-zoom{left:10px;bottom:10px;padding:6px 14px 6px 6px}.bg24-zoom i{width:42px;height:42px}.bg24-t .ft{padding:8px 10px}.bg24-t .ft i{width:24px;height:24px}.bg24-t .ft b{font-size:13px}.bg24-go{flex:1;justify-content:center}}'
  ].join('');

  function studio(sec, S){
    var st = { s: 0, c: S[0].def };
    sec.innerHTML =
      '<div class="bg24-h"><div><span class="bg-eyebrow">DESENLER</span><h2>Desenini seç, cihazında gör</h2>' +
      '<p>9 seri, 39 renk. Bir seri ve renk seç; kamera, lens, drone ve gimbalda nasıl durduğunu hemen gör.</p></div>' +
      '<a class="bg24-sec" href="/betaguard-kaplama">Tüm ürünler →</a></div>' +
      '<div class="bg24-studio"><div class="bg24-stage"><img class="bg24-dev" alt="" decoding="async">' +
      '<div class="bg24-zoom"><i></i><span><b></b><small>Desen yakın görünüm</small></span></div></div>' +
      '<div class="bg24-panel"><div><p class="bg24-lbl">Seri</p><div class="bg24-ser" role="group" aria-label="Seri">' +
      S.map(function(x, i){ return '<button type="button" class="bg24-s" data-i="' + i + '"><i style="background-image:url(' + u(x.card, 180) + ')"></i><span>' + esc(x.name) + '<small>' + (x.cols.length > 1 ? x.cols.length + ' renk' : 'tek renk') + '</small></span></button>'; }).join('') +
      '</div></div><div class="bg24-cw"><p class="bg24-lbl">Renk</p><div class="bg24-cols" role="group" aria-label="Renk"></div><p class="bg24-cn"></p></div>' +
      '<p class="bg24-desc"></p><div class="bg24-cta"><a class="bg24-go" href="#">Bu desenle başla →</a></div></div></div>';
    var dev = sec.querySelector('.bg24-dev'), zi = sec.querySelector('.bg24-zoom i'), zb = sec.querySelector('.bg24-zoom b');
    var cols = sec.querySelector('.bg24-cols'), cn = sec.querySelector('.bg24-cn'), desc = sec.querySelector('.bg24-desc'), go = sec.querySelector('.bg24-go'), cw = sec.querySelector('.bg24-cw');
    var tok = 0;
    function show(){
      var s = S[st.s], c = s.cols[st.c];
      [].forEach.call(sec.querySelectorAll('.bg24-s'), function(b, i){ b.setAttribute('aria-pressed', i === st.s ? 'true' : 'false'); });
      cols.innerHTML = s.cols.map(function(x, i){ return '<button type="button" class="bg24-c" data-i="' + i + '" title="' + esc(x.name) + '" aria-label="' + esc(x.name) + '" aria-pressed="' + (i === st.c) + '"><i style="background-image:url(' + u(x.sw, 180) + ')"></i></button>'; }).join('');
      cw.style.display = s.cols.length > 1 ? '' : 'none';
      cn.textContent = c.short + (s.cols.length > 1 ? ' · ' + (st.c + 1) + '/' + s.cols.length : '');
      desc.textContent = DESC[s.name] || '';
      zi.style.backgroundImage = 'url(' + u(c.sw, 360) + ')'; zb.textContent = c.name;
      go.setAttribute('href', '/betaguard-kaplama?desen=' + c.slug);
      dev.alt = c.name + ' kaplama: kamera, lens, drone ve gimbal';
      var src = u(c.dev, 540), my = ++tok;
      if (dev.getAttribute('src') === src) return;
      if (!dev.getAttribute('src')) { dev.src = src; return; }
      dev.classList.add('out');
      var pre = new Image(); pre.onload = pre.onerror = function(){ if (my !== tok) return; dev.src = src; dev.classList.remove('out'); }; pre.src = src;
      s.cols.forEach(function(x){ (new Image()).src = u(x.dev, 540); });
    }
    sec.addEventListener('click', function(e){
      var b = e.target.closest('.bg24-s'); if (b) { st.s = +b.getAttribute('data-i'); st.c = S[st.s].def; show(); return; }
      var c = e.target.closest('.bg24-c'); if (c) { st.c = +c.getAttribute('data-i'); show(); }
    });
    show();
  }

  var TR = { siyah: 'Siyah tonlar', beyaz: 'Beyaz & gri tonlar', mavi: 'Mavi tonlar', yesil: 'Yeşil tonlar', kirmizi: 'Kırmızı & pembe tonlar', sicak: 'Sıcak & renkli tonlar' };
  var HEAD = ['Line Cyan','Tactical Red','Topografik White','Mono Blue','Royal Gold','Carbon','Hexagonal Green','Lego'];
  function order(all){
    var head = [];
    HEAD.forEach(function(n){ for (var i = 0; i < all.length; i++) if (all[i].name === n) { head.push(all[i]); break; } });
    all = all.filter(function(x){ return head.indexOf(x) < 0; });
    var q = {}; FAM.forEach(function(f){ q[f[0]] = []; });
    all.forEach(function(x){ q[x.fam].push(x); });
    var seq = ['siyah','mavi','kirmizi','beyaz','yesil','sicak'], out = [], last = [];
    while (out.length < all.length) {
      seq.forEach(function(f){
        var a = q[f]; if (!a.length) return;
        var k = 0; for (var i = 0; i < a.length; i++) if (last.indexOf(a[i].series) < 0) { k = i; break; }
        var x = a.splice(k, 1)[0]; out.push(x); last.push(x.series); if (last.length > 3) last.shift();
      });
    }
    return head.concat(out);
  }

  function wall(sec, S){
    var all = []; S.forEach(function(s){ s.cols.forEach(function(c){ all.push(c); }); });
    var mix = order(all), st = { f: 'all', open: false }, LIM = 8;
    var cnt = {}; all.forEach(function(x){ cnt[x.fam] = (cnt[x.fam] || 0) + 1; });
    sec.innerHTML =
      '<div class="bg24-h"><div><span class="bg-eyebrow">RENGE GÖRE KEŞFET</span><h2>Önce rengini seç</h2>' +
      '<p>' + all.length + ' renk seçeneği. Bir tona dokun, o renkteki tüm desenleri kamera, lens, drone ve gimbal üzerinde gör.</p></div></div>' +
      '<div class="bg24-f" role="group" aria-label="Renk filtresi"><button type="button" class="bg24-fb" data-f="all"><i style="background:conic-gradient(#1b1b1d 0 60deg,#e6e3dc 0 120deg,#2f6fd6 0 180deg,#3f8a4a 0 240deg,#c8323c 0 300deg,#e7b416 0)"></i>Tümü <em>' + all.length + '</em></button>' +
      FAM.filter(function(f){ return cnt[f[0]]; }).map(function(f){ return '<button type="button" class="bg24-fb" data-f="' + f[0] + '"><i style="background:' + f[2] + '"></i>' + f[1] + ' <em>' + cnt[f[0]] + '</em></button>'; }).join('') +
      '</div><div class="bg24-grid"></div><div class="bg24-more"><button type="button" class="bg24-sec"></button></div>';
    var grid = sec.querySelector('.bg24-grid'), more = sec.querySelector('.bg24-more'), mb = more.querySelector('button');
    function show(){
      [].forEach.call(sec.querySelectorAll('.bg24-fb'), function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-f') === st.f ? 'true' : 'false'); });
      var list = st.f === 'all' ? mix : mix.filter(function(x){ return x.fam === st.f; });
      var cut = st.f === 'all' && !st.open ? list.slice(0, LIM) : list;
      grid.innerHTML = cut.map(function(x){
        return '<a class="bg24-t" href="/betaguard-kaplama?desen=' + x.slug + '"><span class="im"><img src="' + u(x.dev, 540) + '" alt="' + esc(x.name) + ' kaplama" loading="lazy" decoding="async"></span>' +
          '<span class="ft"><i style="background-image:url(' + u(x.sw, 180) + ')"></i><span><b>' + esc(x.name) + '</b><small>' + esc(TR[x.fam]) + '</small></span></span></a>';
      }).join('');
      more.style.display = st.f === 'all' && list.length > LIM ? '' : 'none';
      mb.textContent = st.open ? 'Daha az göster' : 'Tüm ' + list.length + ' rengi göster';
    }
    sec.addEventListener('click', function(e){
      var b = e.target.closest('.bg24-fb'); if (b) { st.f = b.getAttribute('data-f'); show(); return; }
      if (e.target.closest('.bg24-more button')) { st.open = !st.open; show(); if (!st.open) sec.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
    show();
  }

  var hide = document.createElement('style'); hide.id = 'bg-hide24'; hide.textContent = '[data-bg-desen]:not([data-v24]),[data-bg-wall]:not([data-v24]){visibility:hidden}';
  (document.head || document.documentElement).appendChild(hide);
  setTimeout(function(){ hide.remove(); }, 5000);
  var DATA = null;
  function run(){
    var ds = document.querySelector('[data-bg-desen]'), wl = document.querySelector('[data-bg-wall]');
    if (!ds || !wl) return;
    if (ds.getAttribute('data-v24') && wl.getAttribute('data-v24')) return;
    if (!DATA) DATA = collect(); if (!DATA) return;
    if (!document.getElementById('bg-theme-css24')) { var st = document.createElement('style'); st.id = 'bg-theme-css24'; st.textContent = css; (document.head || document.documentElement).appendChild(st); }
    if (!ds.getAttribute('data-v24')) { ds.setAttribute('data-v24', '1'); studio(ds, DATA); }
    if (!wl.getAttribute('data-v24')) { wl.setAttribute('data-v24', '1'); wall(wl, DATA); }
  }
  var q = false;
  function sch(){ if (q) return; q = true; setTimeout(function(){ q = false; try { run(); } catch (e) {} }, 150); }
  function go(){ sch(); new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true }); }
  if (document.readyState !== 'loading') setTimeout(go, 300); else document.addEventListener('DOMContentLoaded', function(){ setTimeout(go, 300); });
})();
