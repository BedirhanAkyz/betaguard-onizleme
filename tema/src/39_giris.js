/* v58: "Google ile giriş yap" (ve diger sosyal girisler). ikas'in /api/sf/ms/<saglayici>/login/authenticate ucu, ayar eksikken
   hata sayfasina KALICI yonlendirme donuyor ve tarayici bunu onbellege aliyor: ayar duzeltildikten sonra da o tarayici agdan
   sormadan eski hatayi goruyor, dugmeye basinca hicbir sey olmuyordu (19.11.2026'da olculdu: onbellekten 2 ms'de
   SETTINGS_NOT_FOUND, agdan sorulunca Google adresi). Tema bu istegi her zaman agdan ister. */
(function () {
  if (window.__bgSL) return; window.__bgSL = 1;
  var f = window.fetch; if (typeof f !== 'function') return;
  var RE = /\/api\/sf\/ms\/[^\/?#]+\/login\/authenticate/;
  window.fetch = function (u, o) {
    try {
      var s = typeof u === 'string' ? u : (u && u.url) || '';
      if (RE.test(s) && !(o && o.cache)) { var n = {}, k; for (k in (o || {})) n[k] = o[k]; n.cache = 'no-store'; return f.call(this, u, n); }
    } catch (e) {}
    return f.apply(this, arguments);
  };
})();
