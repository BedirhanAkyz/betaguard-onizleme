/* v30: SEO - H1 olmayan sayfalarda ana basligi H1 yap, alt'i bos gorsellere anlamli alt ver. */
(function () {
  if (window.__bgSeo) return; window.__bgSeo = 1;
  function txt(e) { return (e && (e.innerText || e.textContent) || '').replace(/\s+/g, ' ').trim(); }
  function h1() {
    if (document.querySelector('h1')) return;
    var best = null, bs = 0, all = document.querySelectorAll('#app div,#app p,#app span,main div,main p,main span');
    for (var i = 0; i < all.length; i++) {
      var e = all[i];
      if (e.childElementCount > 2 || e.closest('header,footer,nav,a,button,[data-bg-rev],[data-bg-faq]')) continue;
      var t = txt(e); if (t.length < 3 || t.length > 120) continue;
      var r = e.getBoundingClientRect(); if (!r.width || !r.height || r.top + scrollY > 1400) continue;
      var fs = parseFloat(getComputedStyle(e).fontSize) || 0;
      if (fs > bs) { bs = fs; best = e; }
    }
    if (!best || bs < 24) return;
    var h = document.createElement('h1');
    h.style.cssText = 'font:inherit;margin:0;padding:0;color:inherit;letter-spacing:inherit;text-transform:inherit;line-height:inherit';
    while (best.firstChild) h.appendChild(best.firstChild);
    best.appendChild(h);
  }
  function alts() {
    var im = document.querySelectorAll('img:not([alt]),img[alt=""]');
    for (var i = 0; i < im.length; i++) {
      var g = im[i], a = '';
      if (g.closest('[aria-hidden=true]')) continue;
      var card = g.closest('.bg-pp-card');
      if (card) a = txt(card) + ' desen kaplama';
      else {
        var c = g.closest('a,figure,li,[class*=card]');
        a = c ? txt(c).slice(0, 80) : '';
        if (!a) { var m = (g.getAttribute('src') || '').match(/img\/([a-z0-9-]+)\/([a-z0-9-]+)\.webp/); if (m) a = m[1].replace(/^(kamera|lens|drone|gimbal|aksiyon)-/, '').replace(/-/g, ' ') + ' ' + m[2] + ' kaplama'; }
        if (!a) a = 'Betaguard kaplama';
      }
      g.setAttribute('alt', a);
    }
  }
  var q = 0;
  function run() { if (q) return; q = 1; setTimeout(function () { q = 0; try { h1(); alts(); } catch (e) {} }, 400); }
  run();
  new MutationObserver(run).observe(document.documentElement, { childList: true, subtree: true });
})();
