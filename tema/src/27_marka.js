/* v43: marka kategori sayfalari artik gercek ikas sayfalari (/sony-kamera, /canon-lens ...): Google icin ayri URL.
   Burada: eski "-kaplama" adresleri yeni slug'a yonlendir; mobil menude marka listesinin basina "Tum kameralar" satiri;
   kok sayfada hash degisirse (eski /kamera#sony baglantilari) ilgili marka cipine bas. */
(function () {
  if (window.__bgMarka) return; window.__bgMarka = 1;
  var BG = window.__BG || {}, CATS = BG.CATS || {};
  var ROOTS = { kamera: 'Tüm kameralar', lens: 'Tüm lensler', drone: 'Tüm dronelar', 'aksiyon-kamera': 'Tüm aksiyon kameraları', gimbal: 'Tüm gimballer' };
  /* marka slug -> kok (duz slug'lar); hash'li olanlar zaten kok sayfada */
  var SUB = {};
  Object.keys(CATS).forEach(function (k) { CATS[k].subs.forEach(function (s) { if (s[1].indexOf('#') < 0) SUB[s[1]] = CATS[k].root; }); });
  /* eski adresler */
  var MAP = { 'tamron-lens': '/lens', 'tamron-lens-kaplama': '/lens' };
  Object.keys(SUB).forEach(function (s) { MAP[s + '-kaplama'] = '/' + s; });
  function clean(h) { return (h || '').replace(/^\/|\/$/g, '').split('?')[0].split('#')[0]; }
  function legacy(h) { if (!h || h.charAt(0) !== '/') return null; return MAP[clean(h)] || null; }
  var to = legacy(location.pathname);
  if (to) { try { location.replace(to); } catch (e) {} return; }
  function rootOfHref(h) { if (!h || h.charAt(0) !== '/') return ''; var c = clean(h); if (SUB[c]) return SUB[c]; var m = h.match(/^\/(kamera|lens|drone|aksiyon-kamera|gimbal)#/); return m ? m[1] : ''; }
  function fix() {
    var done = [];
    [].forEach.call(document.querySelectorAll('a[href]'), function (a) {
      var t = legacy(a.getAttribute('href')); if (t) a.setAttribute('href', t);
    });
    [].forEach.call(document.querySelectorAll('a[href]'), function (a) {
      var h = a.getAttribute('href'), r = rootOfHref(h);
      if (!r || a.closest('.bg26-chips,.bg26-mm,.bg27,.bg26-bar,footer,.ikas-editor-v1,.bg26-catdesc,.bg36-dz,.bg36-pr,.bg36-home')) return;   /* v49: yazi ve aciklama icindeki marka linkleri menu listesi degil */
      /* ayni kokun en az 2 marka linkini iceren en yakin ata = liste; a'yi iceren dogrudan cocugu = satir */
      var list = a.parentElement, item = a, guard = 0;
      while (list && guard++ < 8 && [].filter.call(list.querySelectorAll('a[href]'), function (x) { return rootOfHref(x.getAttribute('href')) === r; }).length < 2) { item = list; list = list.parentElement; }
      if (!list || list === document.body || done.indexOf(list) >= 0) return; done.push(list);
      if (list.querySelector('[data-bg-all]') || [].some.call(list.querySelectorAll('a[href]'), function (x) { return clean(x.getAttribute('href')) === r && !x.closest('[data-bg-all]'); })) return;
      while (item.parentElement !== list) item = item.parentElement;
      var c = item.cloneNode(true), ca = c.tagName === 'A' ? c : [].filter.call(c.querySelectorAll('a[href]'), function (x) { return rootOfHref(x.getAttribute('href')) === r; })[0];
      if (!ca) return;
      [].forEach.call(c.querySelectorAll('a'), function (x) { if (x !== ca) x.remove(); });
      ca.setAttribute('href', '/' + r); c.setAttribute('data-bg-all', '1');
      var leaf = ca; while (leaf.children.length === 1) leaf = leaf.children[0];
      if (!leaf.children.length) leaf.textContent = ROOTS[r]; else ca.textContent = ROOTS[r];
      list.insertBefore(c, list.firstElementChild);
    });
  }
  /* kok kategori sayfasinda hash degisirse ilgili marka cipine bas */
  function chip() {
    var bar = document.querySelector('.bg26-chips'); if (!bar) return;
    var root = clean(location.pathname), k = null;
    for (var x in CATS) if (CATS[x].root === root) k = x;
    if (!k) return;
    var h = (location.hash || '').toLowerCase().replace(/^#/, '');
    var want = h ? (BG.subByHash ? BG.subByHash(CATS[k], h) : '') : root;
    if (!want) return;
    var a = [].filter.call(bar.querySelectorAll('a'), function (x) { return x.getAttribute('href') === '/' + want; })[0];
    if (a && !a.classList.contains('on')) a.click();
  }
  window.addEventListener('hashchange', chip);
  var q = 0; function sch() { if (q) return; q = 1; setTimeout(function () { q = 0; try { fix(); } catch (e) {} }, 150); }
  function go() { fix(); new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true }); }
  if (document.readyState !== 'loading') go(); else document.addEventListener('DOMContentLoaded', go);
})();
