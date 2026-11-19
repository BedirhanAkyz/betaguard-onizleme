/* Gorsel yedekleme. jsDelivr buyuk agacli commit'teki bir dosyayi ilk kez cekerken yaklasik 6 istekte bir
   "Package size exceeded" (403) donuyor ve bu yaniti 60 sn onbellekte tutuyor; dosya GitHub'da duruyor.
   v56: eskiden once 1,2 sn bekleyip ayni adres yeniden deneniyordu (kartta 1,5-2 sn bos gorsel). Artik hemen
   GitHub raw kopyasina gecilir; o da olmazsa 1,2 sn sonra jsDelivr yeniden denenir. Bu iki adim bitene kadar etiketteki
   satir ici onerror calismaz (iki yedek birbirini ezmesin); ikisi de olmazsa sira ona gecer (or. kucuk onizleme -> tam boy). */
(function () {
  if (window.__bgImgFix) return; window.__bgImgFix = 1;
  var REPO = 'BedirhanAkyz/betaguard-onizleme';
  var RC = /^https:\/\/(?:cdn|fastly)\.jsdelivr\.net\/gh\/BedirhanAkyz\/betaguard-onizleme@([0-9a-f]+)\/([^?#]+)/;
  var RR = /^https:\/\/raw\.githubusercontent\.com\/BedirhanAkyz\/betaguard-onizleme\/([0-9a-f]+)\/([^?#]+)/;
  function key(u) { var m = RC.exec(u) || RR.exec(u); return m ? m[1] + '/' + m[2] : ''; }
  /* tuval icin yuklenen gorseller (ana sahne, urun sahnesi, karsilastirma) de ayni sirayi kullanir: once jsDelivr,
     olmazsa GitHub raw (her zaman var), en son jsDelivr'in diger agi */
  window.__bgAlts = function (u) {
    var m = RC.exec(u); if (!m) return [u];
    return [u, 'https://raw.githubusercontent.com/' + REPO + '/' + m[1] + '/' + m[2], 'https://fastly.jsdelivr.net/gh/' + REPO + '@' + m[1] + '/' + m[2]];
  };
  /* true: siradaki adresi biz denedik (olay burada kalsin); false: bizlik bir sey yok / adimlar bitti */
  function next(img, src) {
    var k = key(src); if (!k) return false;                       /* bizim depo degil */
    var cur = img.getAttribute('data-bgfix-k') || '', n = +(img.getAttribute('data-bgfix') || 0);
    if (k !== cur) { cur = k; n = 0; img.setAttribute('data-bgfix-k', k); }   /* baska bir gorsel istenmis: bastan */
    if (n >= 2) return false;
    img.setAttribute('data-bgfix', String(n + 1));
    if (img.srcset) img.removeAttribute('srcset');
    if (n === 0) img.src = 'https://raw.githubusercontent.com/' + REPO + '/' + k;
    else setTimeout(function () { if (img.getAttribute('data-bgfix-k') === cur && img.getAttribute('data-bgfix') === '2') img.src = 'https://cdn.jsdelivr.net/gh/' + REPO + '@' + k + '?r=1'; }, 1200);
    return true;
  }
  document.addEventListener('error', function (e) {
    var t = e.target;
    if (!t || t.tagName !== 'IMG') return;
    if (next(t, t.currentSrc || t.src || '')) e.stopPropagation();
  }, true);
  /* dinleyici eklenmeden once kirilmis olanlari da yakala */
  function sweep() {
    var a = document.images;
    for (var i = 0; i < a.length; i++) {
      var im = a[i];
      if (im.complete && im.naturalWidth === 0 && !im.getAttribute('data-bgfix')) { var s = im.currentSrc || im.src || ''; if (s) next(im, s); }
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', sweep); else sweep();
  window.addEventListener('load', sweep);
})();
