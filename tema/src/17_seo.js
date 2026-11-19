/* v30: SEO - H1 olmayan sayfalarda ana basligi H1 yap, alt'i bos gorsellere anlamli alt ver. */
(function () {
  if (window.__bgSeo) return; window.__bgSeo = 1;
  function txt(e) { return (e && (e.innerText || e.textContent) || '').replace(/\s+/g, ' ').trim(); }
  function unwrapH1(h) { var p = h.parentNode; while (h.firstChild) p.insertBefore(h.firstChild, h); p.removeChild(h); }
  /* sayfanin asil basligi en buyuk yazi degilse (SSS: ustte 32 px "Kargo" bolumu var) dogru metni sec */
  var PREF = { '/pages/sss': /^sık sorulan sorular$/i }, MADE = {};
  function h1() {
    /* urun sayfasi: urun adi H1 olmali; gizli ya da baska H1'leri kaldir */
    var pt = document.querySelector('[data-bg-ptitle]');
    if (pt && pt.offsetHeight) {
      [].forEach.call(document.querySelectorAll('h1[data-bg-h1]'), function (x) { if (!pt.contains(x)) unwrapH1(x); });
      if (!pt.querySelector('h1')) { var hp = document.createElement('h1'); hp.setAttribute('data-bg-h1', '1'); hp.style.cssText = 'font:inherit;margin:0;padding:0;color:inherit;letter-spacing:inherit;text-transform:inherit;line-height:inherit'; while (pt.firstChild) hp.appendChild(pt.firstChild); pt.appendChild(hp); }
      return;
    }
    /* gorunmeyen H1 sayilmaz */
    [].forEach.call(document.querySelectorAll('h1[data-bg-h1]'), function (x) { if (!x.offsetHeight) unwrapH1(x); });
    if (document.querySelector('h1')) return;
    /* v56: aday yalniz GORUNEN metin olabilir. Onceden kapali mobil menu cekmecesindeki (.overlay) 34 px'lik gizli baslik
       seciliyordu; 31_blog cekmecedeki H1'i div'e cevirdigi icin ikisi birbirini bozuyor, H1'siz sayfalarda (SSS, KVKK, kargo,
       iade, giris...) yarim saniyede bir ic ice yeni bir div ekleniyordu (sonsuz dongu). */
    var pth = location.pathname.replace(/\/$/, ''), pf = PREF[pth];
    /* emniyet: ayni sayfada 8 sn icinde 4 kez H1 uretildiyse baska bir sey onu bozuyordur; dur */
    var now = Date.now(), mk = (MADE[pth] || []).filter(function (x) { return now - x < 8000; }); MADE[pth] = mk;
    if (mk.length >= 4) return;
    var best = null, bs = 0, vw = window.innerWidth || document.documentElement.clientWidth || 0;
    var all = document.querySelectorAll('#app div,#app p,#app span,main div,main p,main span');
    for (var i = 0; i < all.length; i++) {
      var e = all[i];
      if (e.childElementCount > 2 || e.closest('header,footer,nav,a,button,[data-bg-rev],[data-bg-faq],.overlay,[class*="overlay"],[data-bg-was-h1]')) continue;
      var t = (e.innerText || '').replace(/\s+/g, ' ').trim(); if (t.length < 3 || t.length > 120) continue;
      var r = e.getBoundingClientRect(); if (!r.width || !r.height || r.top + scrollY > 1400 || r.right <= 0 || (vw && r.left >= vw)) continue;
      var fs = parseFloat(getComputedStyle(e).fontSize) || 0;
      if (pf && fs >= 18 && pf.test(t)) { best = e; bs = 99; break; }
      if (fs > bs) { bs = fs; best = e; }
    }
    if (!best || bs < 24) return;
    mk.push(now);
    var h = document.createElement('h1'); h.setAttribute('data-bg-h1', '1');
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
  function names() {
    var L = document.querySelectorAll('a[href]:not([aria-label]),button:not([aria-label])');
    for (var i = 0; i < L.length; i++) {
      var e = L[i]; if (txt(e) || e.querySelector('img[alt]:not([alt=""])')) continue;
      var h = (e.getAttribute('href') || '').toLowerCase(), n = '';
      if (/account|login|hesab/.test(h)) n = 'Hesabım'; else if (/cart|sepet/.test(h)) n = 'Sepet'; else if (/search|arama/.test(h)) n = 'Ara';
      else if (/favori|wishlist/.test(h)) n = 'Favoriler'; else if (/wa\.me|whatsapp/.test(h)) n = 'WhatsApp'; else if (/instagram/.test(h)) n = 'Instagram';
      else if (h === '/' ) n = 'Ana sayfa'; else if (h === '#' || h === '') n = 'Menü'; else if (e.tagName === 'BUTTON') { var c = String(e.className); n = /close|kapat/i.test(c) ? 'Kapat' : /menu|burger/i.test(c) ? 'Menü' : ''; }
      if (n) e.setAttribute('aria-label', n);
    }
  }
  var q = 0;
  function run() { if (q) return; q = 1; setTimeout(function () { q = 0; try { h1(); alts(); names(); } catch (e) {} }, 400); }
  run();
  new MutationObserver(run).observe(document.documentElement, { childList: true, subtree: true });
})();
