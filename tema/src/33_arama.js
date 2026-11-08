/* v46: ust menu arama paneli. "Ara..." yazisi beyaz; arama kutusu bosken ikas'in rastgele urunleri
   yerine guncel/populer cihazlar gosterilir. Yazmaya baslayinca ikas sonuclari aynen gorunur.
   ikas'in React dugumleri degistirilmez: orijinal izgara sadece gizlenir, kopyasi yanina eklenir. */
(function () {
  if (window.__bgArama) return; window.__bgArama = 1;
  var PICK = ['sony-fx3-kaplama', 'canon-eos-r6-mark-iii-kaplama', 'dji-mini-5-pro-kaplama', 'insta360-x5-kaplama',
    'dji-rs-5-kaplama', 'sony-alpha-a7-v-kaplama', 'dji-osmo-pocket-4-kaplama', 'dji-osmo-action-6-kaplama'];
  var st = document.createElement('style'); st.id = 'bg-arama';
  st.textContent = '.bg-ara-ph{color:#F2F0EB!important;opacity:.85}.bg-ara-hide{display:none!important}';
  (document.head || document.documentElement).appendChild(st);
  function fmt(n) { return Number(n).toLocaleString('tr-TR') + ' ₺'; }
  function run() {
    var B = window.__BG; if (!B || !B.BYSLUG) return;
    [].forEach.call(document.querySelectorAll('.overlay div.rich-text:not(.bg-ara-ph)'), function (e) { if (e.textContent.trim() === 'Ara...') e.classList.add('bg-ara-ph'); });
    var first = [].filter.call(document.querySelectorAll('.overlay a[href*="?desen="]'), function (a) { return a.querySelector('img') && !a.closest('.bg-ara-grid'); })[0];
    if (!first) return;
    var wrap = first.parentElement, grid = wrap && wrap.parentElement; if (!grid || !grid.parentElement) return;
    var ov = grid.closest('.overlay'); var inp = ov && ov.querySelector('input'); if (!inp) return;
    var mine = grid.parentElement.querySelector(':scope > .bg-ara-grid');
    if (!mine) {
      mine = grid.cloneNode(false); mine.classList.add('bg-ara-grid'); mine.removeAttribute('id');
      PICK.forEach(function (s) {
        var d = B.BYSLUG[s]; if (!d) return;
        var w = wrap.cloneNode(true), a = w.querySelector('a'); if (!a) return;
        a.setAttribute('href', '/' + s);
        var im = a.querySelector('img'); if (im) { im.removeAttribute('srcset'); im.removeAttribute('sizes'); im.src = B.img(d); im.alt = d.b + ' ' + d.m + ' kaplama'; }
        var tx = a.querySelectorAll('div.rich-text');
        if (tx[0]) tx[0].textContent = d.b + ' ' + d.m + ' Kaplama';
        if (tx[1]) tx[1].textContent = fmt(d.p);
        mine.appendChild(w);
      });
      grid.insertAdjacentElement('afterend', mine);
      if (!inp.__bgAra) { inp.__bgAra = 1; inp.addEventListener('input', function () { setTimeout(run, 0); }); }
    }
    var empty = !inp.value.trim();
    grid.classList.toggle('bg-ara-hide', empty);
    mine.classList.toggle('bg-ara-hide', !empty);
  }
  var tm = 0;
  new MutationObserver(function () { if (!tm) tm = setTimeout(function () { tm = 0; try { run(); } catch (e) {} }, 150); }).observe(document.documentElement, { childList: true, subtree: true });
  try { run(); } catch (e) {}
})();
