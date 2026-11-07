/* v45: "kesim" dili -> "üretim" dili. ikas tarafindaki metinler (urun aciklamalari, kategori/blog/sayfa
   icerikleri, meta aciklamalar) CSV/duzenleme ile guncellenene kadar ve gozden kacan her yer icin
   sayfadaki metin dugumlerinde sozcuk duzeltmesi. Yalnizca kaplama-uretim anlamindaki kaliplar degisir;
   "keskin", "kesişen", "makasla kesip" gibi sozcuklere dokunulmaz. */
(function () {
  if (window.__bgUretim) return; window.__bgUretim = 1;
  var R = [
    [/Kesimin seçtiğiniz modele/g, 'Kaplamanın seçtiğiniz modele'],
    [/Kesim cihazıma/g, 'Kaplama cihazıma'],
    [/Kesim hatası/g, 'Üretim hatası'],
    [/kesim hatası/g, 'üretim hatası'],
    [/kesimini hazırlayalım/g, 'senin için üretelim'],
    [/kesim yapıp yapamayacağımızı/g, 'üretip üretemeyeceğimizi'],
    [/kesimi olup olmadığını/g, 'üretip üretemeyeceğimizi'],
    [/kesimi var mı/g, 'üretebiliyor muyuz'],
    [/kesimi varsa/g, 'üretebiliyorsak'],
    [/basılıp kesilir/g, 'üretilir'],
    [/basılır ve kesilir/g, 'üretilir'],
    [/basılır, kesilir ve/g, 'üretilir ve'],
    [/basıp kesiyoruz/g, 'üretiyoruz'],
    [/kesilip üretilen/g, 'üretilen'],
    [/parçanın kesimleri/g, 'parçanın açıklıkları'],
    [/\bkesilen\b/g, 'üretilen'],
    [/\bKesilen\b/g, 'Üretilen'],
    [/kesilmiş/g, 'üretilmiş'],
    [/Kesilmiş/g, 'Üretilmiş'],
    [/kesildiğinden/g, 'üretildiğinden'],
    [/kesildiği/g, 'üretildiği'],
    [/kesilmesi/g, 'üretilmesi'],
    [/kesilir/g, 'üretilir'],
    [/Kesilir/g, 'Üretilir'],
    [/kesiyoruz/g, 'üretiyoruz'],
    [/özel kesimli/g, 'özel üretilen'],
    [/özel kesim/g, 'özel üretim'],
    [/ÖZEL KESİM/g, 'ÖZEL ÜRETİM'],
    [/hassas kesim/g, 'hassas üretim'],
    [/Hassas kesim/g, 'Hassas üretim'],
    [/birebir kesim/g, 'birebir üretim'],
    [/kesim kaplama/g, 'üretim kaplama'],
    [/Kesim kaplama/g, 'Üretim kaplama']
  ];
  var Q = /kes/i;
  function fix(s) { if (!Q.test(s)) return s; for (var i = 0; i < R.length; i++) s = s.replace(R[i][0], R[i][1]); return s; }
  var SKIP = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, INPUT: 1, NOSCRIPT: 1, CODE: 1, PRE: 1 };
  function walk(root) {
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), n, chg = 0;
    while ((n = w.nextNode())) {
      var d = n.data; if (!Q.test(d)) continue;
      var p = n.parentNode; if (!p || SKIP[p.nodeName]) continue;
      var v = fix(d); if (v !== d) { n.data = v; chg++; }
    }
    return chg;
  }
  function metas() {
    var t = fix(document.title); if (t !== document.title) document.title = t;
    [].forEach.call(document.querySelectorAll('meta[name="description"],meta[property="og:description"],meta[name="twitter:description"],meta[property="og:title"]'), function (m) {
      var c = m.getAttribute('content') || '', v = fix(c); if (v !== c) m.setAttribute('content', v);
    });
    [].forEach.call(document.querySelectorAll('#app [alt],#app [title],#app [aria-label],#app [placeholder]'), function (e) {
      ['alt', 'title', 'aria-label', 'placeholder'].forEach(function (a) { var c = e.getAttribute(a); if (c && Q.test(c)) { var v = fix(c); if (v !== c) e.setAttribute(a, v); } });
    });
  }
  function run() { var app = document.getElementById('app') || document.body; if (!app) return; walk(app); metas(); }
  var tm = 0;
  new MutationObserver(function () { if (!tm) tm = setTimeout(function () { tm = 0; run(); }, 250); }).observe(document.documentElement, { childList: true, subtree: true, characterData: true });
  run();
  window.__bgFixKesim = fix;
})();
