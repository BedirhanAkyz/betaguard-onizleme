/* v30: gizli onizleme yukleyici - yalnizca ?onizleme=<commit> ile tema/onizleme.js yuklenir; normal ziyaretci etkilenmez */
(function () {
  if (window.__bgOnizL) return; window.__bgOnizL = 1;
  var m = /[?&]onizleme=([0-9a-f]{7,40})\b/.exec(location.search); if (!m) return;
  var s = document.createElement('script'); s.defer = true;
  s.src = 'https://cdn.jsdelivr.net/gh/BedirhanAkyz/betaguard-onizleme@' + m[1] + '/tema/onizleme.js';
  (document.head || document.documentElement).appendChild(s);
})();
