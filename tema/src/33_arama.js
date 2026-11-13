/* v46: ust menu arama paneli. "Ara..." yazisi beyaz; arama kutusu bosken ikas'in rastgele urunleri
   yerine guncel/populer cihazlar gosterilir. Yazmaya baslayinca ikas sonuclari aynen gorunur.
   ikas'in React dugumleri degistirilmez: orijinal izgara sadece gizlenir, kopyasi yanina eklenir. */
(function () {
  if (window.__bgArama) return; window.__bgArama = 1;
  var PICK = ['sony-fx3-kaplama', 'canon-eos-r6-mark-iii-kaplama', 'dji-mini-5-pro-kaplama', 'insta360-x5-kaplama',
    'dji-rs-5-kaplama', 'sony-alpha-a7-v-kaplama', 'dji-osmo-pocket-4-kaplama', 'dji-osmo-action-6-kaplama'];
  var st = document.createElement('style'); st.id = 'bg-arama';
  st.textContent = '.bg-ara-ph{color:#F2F0EB!important;opacity:.85}.bg-ara-hide{display:none!important}.bg-ara-g{background:transparent!important}.bg-ara-all{background:#C9A45C!important;cursor:pointer}.bg-ara-all,.bg-ara-all *{color:#0E0E0F!important;font-weight:700}';
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
    var q = inp.value.trim(), list;
    if (!q) list = PICK.map(function (s) { return B.BYSLUG[s]; }).filter(Boolean);
    else list = (window.__bg26 && window.__bg26.find) ? window.__bg26.find(q).slice(0, 8) : [];
    if (mine.__q !== q) {
      mine.__q = q; mine.innerHTML = '';
      list.forEach(function (d) {
        var w = ov.__bgTpl.cloneNode(true), a = w.querySelector('a'); if (!a) return;
        a.setAttribute('href', '/' + d.s);
        var im = a.querySelector('img'); if (im) { im.removeAttribute('srcset'); im.removeAttribute('sizes'); im.src = B.img(d); im.alt = d.b + ' ' + d.m + ' kaplama'; }
        var tx = a.querySelectorAll('div.rich-text');
        if (tx[0]) tx[0].textContent = d.b + ' ' + d.m + ' Kaplama';
        if (tx[1]) tx[1].textContent = fmt(d.p);
        mine.appendChild(w);
      });
    }
    if (!inp.__bgAra) { inp.__bgAra = 1; inp.addEventListener('input', function () { setTimeout(run, 0); setTimeout(run, 400); setTimeout(run, 1200); }); }
    grids.forEach(function (g) { g.classList.add('bg-ara-g'); }); mine.classList.add('bg-ara-g');
    var ours = list.length > 0;
    grids.forEach(function (g) { g.classList.toggle('bg-ara-hide', ours); });
    mine.classList.toggle('bg-ara-hide', !ours);
  }
  var tm = 0;
  new MutationObserver(function () { if (!tm) tm = setTimeout(function () { tm = 0; try { run(); } catch (e) {} }, 150); }).observe(document.documentElement, { childList: true, subtree: true });
  try { run(); } catch (e) {}
})();
