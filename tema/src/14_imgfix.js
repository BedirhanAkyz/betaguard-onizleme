/* Gorsel yedekleme: jsDelivr bir dosyayi ilk kez cekerken zaman asimi/hata verirse
   once ayni adresi tekrar dene, olmazsa GitHub raw kopyasina gec. Kirik kart gorseli kalmasin. */
(function () {
  if (window.__bgImgFix) return; window.__bgImgFix = 1;
  var RE = /^https:\/\/cdn\.jsdelivr\.net\/gh\/BedirhanAkyz\/betaguard-onizleme@([0-9a-f]+)\/(.+?)(\?.*)?$/;
  function fix(img) {
    var src = img.currentSrc || img.src || '';
    var n = +(img.getAttribute('data-bgfix') || 0);
    var m = src.match(RE);
    if (n === 0 && m) {
      img.setAttribute('data-bgfix', '1');
      if (img.srcset) img.removeAttribute('srcset');
      setTimeout(function () { img.src = 'https://cdn.jsdelivr.net/gh/BedirhanAkyz/betaguard-onizleme@' + m[1] + '/' + m[2] + '?r=1'; }, 1200);
    } else if (n === 1) {
      var o = img.getAttribute('data-bgfix-org') || src;
      var mm = o.match(RE);
      if (!mm) return;
      img.setAttribute('data-bgfix', '2');
      img.src = 'https://raw.githubusercontent.com/BedirhanAkyz/betaguard-onizleme/' + mm[1] + '/' + mm[2];
    }
  }
  document.addEventListener('error', function (e) {
    var t = e.target;
    if (!t || t.tagName !== 'IMG') return;
    var src = t.currentSrc || t.src || '';
    if (!t.getAttribute('data-bgfix') && RE.test(src)) t.setAttribute('data-bgfix-org', src.replace(/\?.*$/, ''));
    fix(t);
  }, true);
  /* sayfa acilmadan once kirilmis olanlari da yakala */
  function sweep() {
    var a = document.images;
    for (var i = 0; i < a.length; i++) {
      var im = a[i];
      if (im.complete && im.naturalWidth === 0 && !im.getAttribute('data-bgfix') && RE.test(im.currentSrc || im.src || '')) {
        im.setAttribute('data-bgfix-org', (im.currentSrc || im.src).replace(/\?.*$/, ''));
        fix(im);
      }
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', sweep); else sweep();
  window.addEventListener('load', sweep);
})();
