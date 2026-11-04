/* v41: eski marka kategori sayfalari (ikas'ta bos kaliyor) -> ana kategori + marka filtresi.
   /sony-kamera-kaplama -> /kamera#sony ; mobil menude "Tum kameralar" satiri ; ayni sayfada hash degisince marka cipi */
(function () {
  if (window.__bgMarka) return; window.__bgMarka = 1;
  var B = { kamera: ['sony','canon','nikon','fujifilm','panasonic'], lens: ['sony','canon','nikon','fujifilm','sigma','tamron'] };
  var MAP = { 'dji-drone': '/drone', 'dji-drone-kaplama': '/drone', 'dji-osmo': '/aksiyon-kamera#dji-osmo', 'dji-osmo-kaplama': '/aksiyon-kamera#dji-osmo' };
  Object.keys(B).forEach(function (r) { B[r].forEach(function (b) { MAP[b + '-' + r] = MAP[b + '-' + r + '-kaplama'] = '/' + r + '#' + b; }); });
  var ALL = { '/kamera': 'Tüm kameralar', '/lens': 'Tüm lensler', '/drone': 'Tüm dronelar', '/aksiyon-kamera': 'Tüm aksiyon kameraları', '/gimbal': 'Tüm gimballer' };
  function legacy(h) { if (!h || h.charAt(0) !== '/') return null; return MAP[h.replace(/^\/|\/$/g, '').split('?')[0].split('#')[0]] || null; }
  /* 1 - dogrudan acilan eski marka sayfasi */
  var to = legacy(location.pathname);
  if (to) { try { location.replace(to); } catch (e) {} return; }
  function rootOf(t) { return t.split('#')[0]; }
  function fix() {
    var seen = [];
    [].forEach.call(document.querySelectorAll('a[href]'), function (a) {
      var t = legacy(a.getAttribute('href')); if (!t) return;
      a.setAttribute('href', t);
      var li = a.parentElement && a.parentElement.children.length === 1 ? a.parentElement : a;
      var list = li.parentElement; if (!list || seen.indexOf(list) >= 0) return; seen.push(list);
      var r = rootOf(t); if (!ALL[r] || list.querySelector('[data-bg-all]')) return;
      if ([].some.call(list.querySelectorAll('a[href]'), function (x) { return x.getAttribute('href') === r; })) return;
      var c = li.cloneNode(true), ca = c.tagName === 'A' ? c : c.querySelector('a');
      ca.setAttribute('href', r); ca.setAttribute('data-bg-all', '1');
      var leaf = ca; while (leaf.children.length === 1) leaf = leaf.children[0];
      if (!leaf.children.length) leaf.textContent = ALL[r]; else ca.textContent = ALL[r];
      list.insertBefore(c, list.firstElementChild);
    });
  }
  /* 3 - kategori sayfasindayken hash degisirse ilgili marka cipine bas */
  function chip() {
    var want = location.pathname + (location.hash || '');
    var bar = document.querySelector('.bg26-chips'); if (!bar) return;
    var a = [].filter.call(bar.querySelectorAll('a'), function (x) { return x.getAttribute('href') === want.toLowerCase(); })[0] || (!location.hash && bar.querySelector('a'));
    if (a && !a.classList.contains('on')) a.click();
  }
  window.addEventListener('hashchange', chip);
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href*="#"]'); if (!a) return;
    var h = a.getAttribute('href'); if (!/^\/(kamera|lens|drone|aksiyon-kamera|gimbal)#/.test(h) || rootOf(h) !== location.pathname || a.closest('.bg26-chips')) return;
    setTimeout(chip, 50);
  });
  var q = 0; function sch() { if (q) return; q = 1; setTimeout(function () { q = 0; try { fix(); } catch (e) {} }, 150); }
  function go() { fix(); new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true }); }
  if (document.readyState !== 'loading') go(); else document.addEventListener('DOMContentLoaded', go);
})();
