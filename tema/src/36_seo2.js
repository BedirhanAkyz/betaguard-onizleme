/* v49: SEO ic link yapisi.
   (1) Kart linkleri temiz (canonical) urun adresine gider; karttaki desen (data-bg-v) tiklama aninda adrese eklenir.
       Boylece Google ?desen= varyantlarini degil asil urun sayfasini gorur, ziyaretci yine karttaki desenle acar.
   (2) Kategori / marka sayfasinda o kategorideki TUM modellerin metin dizini (izgara 24 kart gosteriyor).
   (3) Urun sayfasinda ayni markanin komsu modelleri, marka sayfasi ve model listesi linkleri; modelin diger yazilislari.
   (4) Urun ve kategori basliginda "(Skin)" es anlamlisi; /pages/markalar icin kendi basligi.
   Yerlesim: bloklar yalnizca yoksa ya da yanlis siradaysa tasinir (baska bloklarla yer kavgasi olmasin). */
(function () {
  if (window.__bgSeo2) return; window.__bgSeo2 = 1;
  var TYPE = { K: 'kamera', L: 'lens', D: 'drone', A: 'aksiyon kamera', G: 'gimbal' };
  var DZ3 = ['/blog/drone-gimbal-aksiyon-kamera-kaplama-modelleri', 'Drone, gimbal ve aksiyon kamera modelleri'];
  var DIZ = { K: ['/blog/kamera-kaplama-modelleri', 'Kamera modelleri'], L: ['/blog/lens-kaplama-modelleri', 'Lens modelleri'], D: DZ3, A: DZ3, G: DZ3 };
  var css = [
    '.bg36-dz,.bg36-pr{width:100%;flex-basis:100%;box-sizing:border-box;align-self:stretch;font-family:Manrope,sans-serif;color:#A9A59D}',
    '.bg36-dz{margin:28px 0 12px;padding:24px 0 0;border-top:1px solid #2F2E33}',
    '.bg36-pr{max-width:1192px;margin:36px auto 10px;padding:24px 24px 0;border-top:1px solid #2F2E33}',
    '.bg36-dz h2,.bg36-pr h2{font:700 17px/1.3 Manrope,sans-serif;color:#E7E4DE;margin:0 0 6px}',
    '.bg36-dz h2 small{font:500 12.5px/1 Manrope,sans-serif;color:#8E8A83;margin-left:6px}',
    '.bg36-dz p,.bg36-pr p{font:400 13.5px/1.6 Manrope,sans-serif;margin:0 0 12px;max-width:760px}',
    '.bg36-g{display:flex;flex-wrap:wrap;gap:6px 6px;margin:10px 0 6px}',
    '.bg36-d{margin:0;border-bottom:1px solid #1E1D21}',
    '.bg36-d summary{list-style:none;cursor:pointer;display:flex;align-items:center;gap:8px;padding:12px 0;font:700 12px/1.2 Manrope,sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#C9A45C}',
    '.bg36-d summary::-webkit-details-marker{display:none}',
    '.bg36-d summary small{font:500 12px/1 Manrope,sans-serif;letter-spacing:0;text-transform:none;color:#8E8A83}',
    '.bg36-d summary::after{content:"";margin-left:auto;width:7px;height:7px;border-right:2px solid #8E8A83;border-bottom:2px solid #8E8A83;transform:rotate(45deg);transition:transform .2s}',
    '.bg36-d[open] summary::after{transform:rotate(-135deg)}',
    '.bg36-d .bg36-g{margin:0 0 14px}',
    '.bg36-g a{display:inline-block;padding:6px 11px;border:1px solid #2A292E;border-radius:999px;background:#141416;color:#CFCBC4;text-decoration:none;font:500 12.5px/1.25 Manrope,sans-serif}',
    '.bg36-g a:hover{border-color:#C9A45C;color:#F2F0EB}',
    '.bg36-f{margin-top:14px!important;font-size:13px!important}',
    '.bg36-f a,.bg36-home a{color:#E2C285;text-decoration:none;font:600 13px/1.6 Manrope,sans-serif;letter-spacing:0}',
    '.bg36-f a:hover,.bg36-home a:hover{text-decoration:underline}',
    '.bg36-pr .bg36-a{color:#8E8A83;font-size:12.5px;margin-top:10px}',
    'div.ikas-editor-v1 a{color:#E2C285!important;text-decoration:underline;text-decoration-color:rgba(226,194,133,.32)!important;text-underline-offset:3px}',
    'div.ikas-editor-v1 a:hover{text-decoration-color:#E2C285!important}',
    '.bg36-home{margin:18px 0 0;font:500 13px/1.6 Manrope,sans-serif;color:#8E8A83;text-align:center}',
    '@media (max-width:640px){.bg36-pr{padding:20px 16px 0}.bg36-g a{font-size:12px;padding:6px 10px}}'
  ].join('');
  var st = document.createElement('style'); st.id = 'bg-seo2'; st.textContent = css;
  (document.head || document.documentElement).appendChild(st);

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function BG() { return window.__BG && window.__BG.BYSLUG && window.__BG.CATS ? window.__BG : null; }
  var CACHE = null;
  function all(b) { if (CACHE) return CACHE; var o = b.BYSLUG, r = []; for (var k in o) r.push(o[k]); CACHE = r; return r; }
  function inBrand(d, bn) { return !bn || d.b === bn || (bn === 'DJI Osmo' && d.b === 'DJI'); }
  function cmp(a, b) { return a.b.localeCompare(b.b, 'tr') || a.m.localeCompare(b.m, 'tr', { numeric: true }); }

  /* (1) tiklama aninda desen parametresi */
  function jit(e) {
    var t = e.target, a = t && t.closest ? t.closest('a[data-bg-v]') : null; if (!a) return;
    var h = a.getAttribute('href') || '', v = a.getAttribute('data-bg-v');
    if (v && h && h.indexOf('?') < 0) a.setAttribute('href', h + '?desen=' + v);
  }
  ['pointerdown', 'mousedown', 'touchstart', 'click', 'auxclick', 'contextmenu', 'keydown'].forEach(function (ev) {
    document.addEventListener(ev, jit, { capture: true, passive: true });
  });

  /* marka sayfasi (yoksa kok kategori) */
  function hub(b, d) {
    var c = b.CATS[d.t]; if (!c) return null;
    for (var i = 0; i < c.subs.length; i++) {
      var s = c.subs[i]; if (s[1].indexOf('#') >= 0) continue;
      if (s[0] === 'DJI Osmo') { if (d.b === 'DJI') return ['/' + s[1], 'DJI Osmo']; continue; }
      if (s[0] === d.b) return ['/' + s[1], s[0] + ' ' + TYPE[d.t]];
    }
    return ['/' + c.root, TYPE[d.t]];
  }

  /* (2) kategori / marka sayfasi: tum modeller */
  function dizin() {
    var b = BG(); if (!b) return;
    var p = location.pathname.replace(/^\/|\/$/g, ''), k = null, bn = '';
    for (var x in b.CATS) { var c = b.CATS[x]; if (c.root === p) { k = x; bn = ''; } for (var i = 0; i < c.subs.length; i++) if (c.subs[i][1] === p) { k = x; bn = c.subs[i][0]; } }
    var old = document.querySelector('.bg36-dz');
    if (!k) { if (old) old.remove(); return; }
    var host = document.querySelector('.bg27'); if (!host) return;
    var cd = document.querySelector('.bg26-catdesc'), after = cd && cd.style.display !== 'none' && cd.parentElement === host.parentElement ? cd : host;
    if (old && old.getAttribute('data-sig') === p) { if (old.parentElement !== after.parentElement || !(after.compareDocumentPosition(old) & 4)) after.insertAdjacentElement('afterend', old); return; }
    if (old) old.remove();
    var list = all(b).filter(function (d) { return d.t === k && inBrand(d, bn); }).sort(cmp);
    if (!list.length) return;
    var label = bn ? (bn === 'DJI Osmo' ? 'DJI Osmo' : bn + ' ' + TYPE[k]) : TYPE[k];
    var html = '<h2>Tüm ' + esc(label) + ' kaplama modelleri' + (bn ? '' : ' <small>' + list.length + ' model</small>') + '</h2>' +
      '<p>Kaplama (skin) ürettiğimiz ' + esc(label) + ' modellerinin tam listesi. Modelinin adına tıkla; 39 deseni o cihazın kendi görseli üzerinde görürsün.</p>';
    var wide = window.innerWidth > 640, gi = 0;   /* mobilde kapali; cok uzun listede (lens) yalnizca ilk marka acik */
    function grp(title, items, full) {
      var op = wide && (list.length <= 250 || gi === 0) ? ' open' : ''; gi++;
      return '<details class="bg36-d"' + op + '><summary>' + esc(title) + ' <small>' + items.length + ' model</small></summary><div class="bg36-g">' +
        items.map(function (d) { return '<a href="/' + d.s + '" title="' + esc(d.b + ' ' + d.m) + ' kaplama">' + esc(full ? d.b + ' ' + d.m : d.m) + '</a>'; }).join('') + '</div></details>';
    }
    if (bn) {
      html += grp(label + ' modelleri', list, true);
    } else {
      var by = {}, order = [];
      list.forEach(function (d) { if (!by[d.b]) { by[d.b] = []; order.push(d.b); } by[d.b].push(d); });
      order.sort(function (a, c2) { return by[c2].length - by[a].length || a.localeCompare(c2, 'tr'); });
      order.forEach(function (br) { html += grp(br, by[br], false); });
    }
    html += '<p class="bg36-f">Model listeleri: <a href="' + DIZ.K[0] + '">' + DIZ.K[1] + '</a> · <a href="' + DIZ.L[0] + '">' + DIZ.L[1] + '</a> · <a href="' + DZ3[0] + '">' + DZ3[1] + '</a> · <a href="/blog/dogru-kaplama-model-secimi">Doğru modeli seçmek</a></p>';
    var box = document.createElement('section'); box.className = 'bg36-dz'; box.setAttribute('data-sig', p); box.setAttribute('aria-label', label + ' kaplama modelleri');
    box.innerHTML = html;
    after.insertAdjacentElement('afterend', box);
  }

  /* modelin diger yazilislari (kamera, drone, gimbal, aksiyon; lenslerde yok) */
  var ROM = { II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7 };
  function aliases(d) {
    if (d.t === 'L' || /[\/(]/.test(d.m)) return [];
    var m = d.m.replace(/^Alpha (?=\d)/, 'A').replace(/^Alpha /, '').replace(/^EOS /, '').replace(/^Lumix (DC-|DMC-)?/, ''), out = [];
    function add(x) { x = String(x).trim(); if (x.length > 1 && x !== d.m && out.indexOf(x) < 0) out.push(x); }
    if (m !== d.m) add(m);
    if (d.t === 'A' && d.b === 'DJI' && /^Osmo /.test(m)) { var os = m.replace(/^Osmo /, ''); if (/[a-z]/i.test(os) && /\d/.test(os)) add(os); }
    var hero = d.b === 'GoPro' ? /^Hero (\d+)/.exec(m) : null; if (hero) add('Hero' + hero[1]);
    var ar = m.replace(/\b(Mark )?(VII|VI|IV|V|III|II)\b/g, function (s, mk, r) { return (mk || '') + ROM[r]; }); if (ar !== m) add(ar);
    var nm = m.replace(/\bMark (VII|VI|IV|V|III|II)\b/g, '$1'); if (nm !== m) add(nm);
    if (!/Mark/.test(m)) { var cp = m.replace(/[\s-]+/g, ''); if (cp !== m && cp.length <= 8 && /\d/.test(cp) && /[a-z]/i.test(cp)) add(cp); }
    var sm = /^A7([RSC]?) (II|III|IV|V|VI)$/.exec(m); if (sm) add('A7' + sm[1] + 'M' + ROM[sm[2]]);
    return out.slice(0, 4);
  }

  /* (3) urun sayfasi: ayni markanin komsu modelleri */
  function urun() {
    var b = BG(); if (!b || !b.cur) return;
    var d = b.cur(), old = document.querySelector('.bg36-pr');
    if (!d) { if (old) old.remove(); return; }
    var info = document.querySelector('[data-bg-pinfo]'); if (!info) return;
    var anchor = info.parentElement && info.parentElement.parentElement; if (!anchor || !anchor.parentElement) return;
    var set = document.querySelector('.bg26-set'), after = set && set.parentElement === anchor.parentElement ? set : anchor;
    if (old && old.getAttribute('data-sig') === d.s) { if (old.parentElement !== after.parentElement || !(after.compareDocumentPosition(old) & 4)) after.insertAdjacentElement('afterend', old); return; }
    if (old) old.remove();
    var sib = all(b).filter(function (x) { return x.t === d.t && x.b === d.b; }).sort(cmp), i = sib.indexOf(d), pick = [];
    for (var j = 1; j <= 6 && pick.length < sib.length - 1; j++) {
      var a1 = sib[(i + j) % sib.length], a2 = sib[(i - j + sib.length * 2) % sib.length];
      if (a1 !== d && pick.indexOf(a1) < 0) pick.push(a1);
      if (a2 !== d && pick.indexOf(a2) < 0) pick.push(a2);
    }
    pick.sort(cmp);
    var h = hub(b, d), dz = DIZ[d.t], al = aliases(d), nm = d.b + ' ' + d.m;
    var html = '';
    if (pick.length) html += '<h2>Diğer ' + esc(d.b + ' ' + TYPE[d.t]) + ' kaplamaları</h2><div class="bg36-g">' + pick.map(function (x) { return '<a href="/' + x.s + '" title="' + esc(x.b + ' ' + x.m) + ' kaplama">' + esc(x.b + ' ' + x.m) + '</a>'; }).join('') + '</div>';
    html += '<p class="bg36-f">' + (h ? '<a href="' + h[0] + '">Tüm ' + esc(h[1]) + ' kaplamaları</a> · ' : '') + (dz ? '<a href="' + dz[0] + '">' + esc(dz[1]) + '</a> · ' : '') + '<a href="/blog/kamera-kaplama-nasil-uygulanir">Nasıl uygulanır?</a> · <a href="/blog/kamera-kaplamasi-zarar-verir-mi">Cihaza zarar verir mi?</a></p>';
    html += '<p class="bg36-a">' + esc(nm) + ' kaplaması; skin, sticker ya da wrap olarak da bilinir.' + (al.length ? ' Modelin diğer yazılışları: ' + esc(al.join(', ')) + '.' : '') + '</p>';
    var box = document.createElement('section'); box.className = 'bg36-pr'; box.setAttribute('data-sig', d.s); box.setAttribute('aria-label', 'Diğer ' + d.b + ' modelleri');
    box.innerHTML = html;
    after.insertAdjacentElement('afterend', box);
  }

  /* (4) basliklar */
  function setMeta(t, dsc) {
    if (t && document.title !== t) document.title = t;
    if (!dsc) return;
    var m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement('meta'); m.setAttribute('name', 'description'); document.head.appendChild(m); }
    if (m.getAttribute('content') !== dsc) m.setAttribute('content', dsc);
  }
  function isCat(b) {
    var p = location.pathname.replace(/^\/|\/$/g, '');
    for (var x in b.CATS) { var c = b.CATS[x]; if (c.root === p) return true; for (var i = 0; i < c.subs.length; i++) if (c.subs[i][1] === p) return true; }
    return false;
  }
  function baslik() {
    var b = BG(); if (!b) return;
    if ((b.cur && b.cur()) || isCat(b)) {
      var m = /^(.+ Kaplama) \| 39 Desen \| Betaguard$/.exec(document.title);
      if (m) document.title = m[1] + ' (Skin) | 39 Desen | Betaguard';
      return;
    }
    if (location.pathname.replace(/\/$/, '') === '/pages/markalar' && /^Kamera, Lens ve Drone Kaplama/.test(document.title))
      setMeta('Markalar: Sony, Canon, Nikon, Fujifilm ve DJI Kaplama | Betaguard', 'Betaguard kaplama üretilen markalar: Sony, Canon, Nikon, Fujifilm, Panasonic, Sigma, Tamron, DJI, GoPro ve Insta360. Markanı seç, modelini bul, 39 deseni cihazının üstünde gör.');
  }

  /* ana sayfa: model listelerine metin linkleri */
  function home() {
    var row = document.querySelector('.bg36-home');
    if (location.pathname !== '/') { if (row) row.remove(); return; }
    var pop = document.querySelector('.bg26-pop'); if (!pop) return;
    if (row && row.parentElement === pop) return;
    if (row) row.remove();
    row = document.createElement('div'); row.className = 'bg36-home';
    row.innerHTML = 'Model listeleri: <a href="' + DIZ.K[0] + '">' + DIZ.K[1] + '</a> · <a href="' + DIZ.L[0] + '">' + DIZ.L[1] + '</a> · <a href="' + DZ3[0] + '">' + DZ3[1] + '</a> · <a href="/blog">Blog</a>';
    pop.appendChild(row);   /* bolumun icinde: ana sayfa bolum siralamasi (22_sira) disarida birakmasin */
  }

  /* ikas'in tam ekran panelleri (arama, sepet, mobil menu) z-index 4 ile geliyor; urun sayfasindaki
     desen izgarasi ve galeri ustune cikiyordu. Sabit (fixed) ve tiklanabilir panelleri en uste al. */
  var zs = document.createElement('style'); zs.textContent = '.bg-ovtop{z-index:2147482500!important;background-color:rgba(8,8,9,.72)!important}'; (document.head || document.documentElement).appendChild(zs);
  function katman() {
    [].forEach.call(document.querySelectorAll('.overlay:not(.bg-ovtop)'), function (o) {
      var cs = getComputedStyle(o); if (cs.position === 'fixed' && cs.pointerEvents !== 'none') o.classList.add('bg-ovtop');
    });
  }
  function run() { try { katman(); } catch (e) {} try { dizin(); } catch (e) {} try { urun(); } catch (e) {} try { baslik(); } catch (e) {} try { home(); } catch (e) {} }
  var q = 0;
  function sch() { if (q) return; q = 1; setTimeout(function () { q = 0; run(); }, 300); }
  function go() { run(); new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true }); }
  if (document.readyState !== 'loading') setTimeout(go, 500); else document.addEventListener('DOMContentLoaded', function () { setTimeout(go, 500); });
  var last = location.href; setInterval(function () { if (location.href !== last) { last = location.href; sch(); } }, 500);
})();
