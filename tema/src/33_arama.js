/* v46: ust menu arama paneli. "Ara..." yazisi beyaz; arama kutusu bosken ikas'in rastgele urunleri
   yerine guncel/populer cihazlar gosterilir. Yazmaya baslayinca ikas sonuclari aynen gorunur.
   ikas'in React dugumleri degistirilmez: orijinal izgara sadece gizlenir, kopyasi yanina eklenir.
   v51: kartlar tek desen (Line Black) yerine tum serilerden desenlerle gelir; yarisi en cok tercih edilenler
   (Tactical Black, Royal Gold, Royal Black, Tactical Grey/Red), yarisi diger seriler. Tukenen desen kapak olmaz.
   Karta tiklaninca urun o desenle acilir. Desen adi yazilirsa ("royal gold", "a7 iv tactical", "kirmizi") o desenle gosterilir. */
(function () {
  if (window.__bgArama) return; window.__bgArama = 1;
  /* bos aramada gosterilen cihazlar: en cok siparis edilenler (A7 IV, FE 24-70 GM II) + her turden guncel bir model */
  var PICK = ['sony-alpha-a7-iv-kaplama', 'sony-fe-24-70mm-f2-8-gm-ii-lens-kaplama', 'dji-mini-5-pro-kaplama', 'sony-fx3-kaplama',
    'canon-eos-r6-mark-iii-kaplama', 'dji-osmo-pocket-4-kaplama', 'dji-rs-5-kaplama', 'insta360-x5-kaplama'];
  var st = document.createElement('style'); st.id = 'bg-arama';
  st.textContent = '.bg-ara-ph{color:#F2F0EB!important;opacity:.85}.bg-ara-hide{display:none!important}.bg-ara-g{background:transparent!important}.bg-ara-all{background:#C9A45C!important;cursor:pointer}.bg-ara-all,.bg-ara-all *{color:#0E0E0F!important;font-weight:700}.bg-ara-dn{font:600 11px/1.2 Manrope,sans-serif;letter-spacing:.02em;color:#C9A45C;margin-top:-2px}';
  (document.head || document.documentElement).appendChild(st);
  function fmt(n) { return Number(n).toLocaleString('tr-TR') + ' ₺'; }
  function run() {
    var B = window.__BG; if (!B || !B.BYSLUG) return;
    [].forEach.call(document.querySelectorAll('.overlay div.rich-text:not(.bg-ara-ph)'), function (e) { if (e.textContent.trim() === 'Ara...') e.classList.add('bg-ara-ph'); });
    [].forEach.call(document.querySelectorAll('.overlay div.rich-text:not(.bg-ara-allt)'), function (e) { if (/^Tümünü Gör$/i.test(e.textContent.trim())) { e.classList.add('bg-ara-allt'); if (e.parentElement) e.parentElement.classList.add('bg-ara-all'); } });
    var ins = [].filter.call(document.querySelectorAll('.overlay input'), function (i) { return i.type !== 'hidden' && i.type !== 'checkbox' && i.offsetWidth > 0; });
    ins.forEach(one);
  }
  function one(inp) {
    var B = window.__BG; var ov = inp.closest('.overlay');
    var anchors = [].filter.call(ov.querySelectorAll('a[href*="?desen="]'), function (a) { return a.querySelector('img') && !a.closest('.bg-ara-grid'); });
    if (anchors.length && !ov.__bgTpl) { ov.__bgTpl = anchors[0].parentElement.cloneNode(true); ov.__bgGrid = anchors[0].parentElement.parentElement; }
    if (!ov.__bgTpl) return;
    var grid0 = ov.__bgGrid; if (!grid0 || !grid0.parentElement) { if (!anchors.length) return; grid0 = ov.__bgGrid = anchors[0].parentElement.parentElement; }
    var grids = []; anchors.forEach(function (a) { var g = a.parentElement && a.parentElement.parentElement; if (g && grids.indexOf(g) < 0) grids.push(g); });
    var mine = ov.querySelector('.bg-ara-grid');
    if (!mine) { mine = grid0.cloneNode(false); mine.classList.add('bg-ara-grid'); mine.removeAttribute('id'); grid0.parentElement.appendChild(mine); }
    /* v50: yazilan aramada ikas'in siralamasi yerine model adina gore alaka sirasi ("canon r" -> EOS R ilk) */
    var q = inp.value.trim(), list = null, pats = null, S = window.__bg26 && window.__bg26.search;
    function picks() { return PICK.map(function (s) { return B.BYSLUG[s]; }).filter(Boolean); }
    if (q && S) {
      var sr = S(q); pats = sr.pats; list = sr.list.slice(0, 8);
      if (!list.length && (sr.blank || (sr.pats && !sr.rest))) list = picks();   /* yalniz "kaplama" ya da yalniz desen adi yazildi: populer cihazlar (o desenle) */
    } else if (q) list = (window.__bg26 && window.__bg26.find) ? window.__bg26.find(q).slice(0, 8) : [];
    else list = picks();
    if (mine.__q !== q) {
      mine.__q = q; mine.innerHTML = '';
      var cov = pats && pats.length ? list.map(function (d, k) { return pats[k % pats.length]; }) : (B.mix ? B.mix(list.length) : []);
      list.forEach(function (d, k) {
        var w = ov.__bgTpl.cloneNode(true), a = w.querySelector('a'); if (!a) return;
        var cv = cov[k] || 'line-black', dn = (B.DSLUG && B.DSLUG[cv]) || '';
        a.setAttribute('href', '/' + d.s); a.setAttribute('data-bg-v', cv);   /* desen tiklama aninda adrese eklenir (36_seo2 jit) */
        var im = a.querySelector('img');
        if (im) {
          im.removeAttribute('srcset'); im.removeAttribute('sizes');
          im.onerror = function () { this.onerror = null; this.src = B.img(d, cv); };
          im.src = B.timg ? B.timg(d, cv) : B.img(d, cv); im.alt = d.b + ' ' + d.m + ' ' + dn + ' kaplama';
        }
        var tx = a.querySelectorAll('div.rich-text');
        if (tx[0]) tx[0].textContent = d.b + ' ' + d.m + ' Kaplama';
        if (tx[1]) tx[1].textContent = fmt(d.p);
        if (tx[0] && dn) { var lb = document.createElement('div'); lb.className = 'bg-ara-dn'; lb.textContent = dn; tx[0].parentNode.insertBefore(lb, tx[0].nextSibling); }
        mine.appendChild(w);
      });
    }
    if (!inp.__bgAra) { inp.__bgAra = 1; inp.addEventListener('input', function () { setTimeout(run, 0); setTimeout(run, 400); setTimeout(run, 1200); }); }
    grids.concat([mine]).forEach(function (g) { if (!g.classList.contains('bg-ara-g')) g.classList.add('bg-ara-g'); });
    var ours = list.length > 0;
    grids.forEach(function (g) { if (g.classList.contains('bg-ara-hide') !== ours) g.classList.toggle('bg-ara-hide', ours); });
    if (mine.classList.contains('bg-ara-hide') === ours) mine.classList.toggle('bg-ara-hide', !ours);
  }
  var tm = 0;
  new MutationObserver(function () { if (!tm) tm = setTimeout(function () { tm = 0; try { run(); } catch (e) {} }, 150); }).observe(document.documentElement, { childList: true, subtree: true });
  try { run(); } catch (e) {}
})();
