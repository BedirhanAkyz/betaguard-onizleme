/* v35: ana sayfa bolum sirasi - tek akis (kesfet -> karar -> guven -> sepet -> sss). Bolumler [data-bg-top] icinde sirayla dizilir */
(function () {
  if (window.__bgSira) return; window.__bgSira = 1;
  var ORDER = [
    'section.bgs', 'section.bg-hero', '#bg-find', 'section.bg26-pop', '.bg-marq',
    '[data-bg-desen]', '#bge-5', '#bgx-4',
    '[data-bg-why]', '#bge-7', '#nasil-uygulanir',
    '#bgx-2', '[data-bg-kt]',
    '[data-bg-best]', '[data-bg-insta]', '[data-bg-faq]'
  ];
  var NEED = ['section.bgs', '#bg-find', '[data-bg-desen]', '[data-bg-why]', '[data-bg-faq]'];
  var moves = 0;
  function home() { return location.pathname === '/' || location.pathname === ''; }
  function run() {
    if (!home() || moves > 40) return;
    var top = document.querySelector('[data-bg-top]'); if (!top) return;
    for (var i = 0; i < NEED.length; i++) if (!document.querySelector(NEED[i])) return;
    var els = ORDER.map(function (s) { return document.querySelector(s); }).filter(function (e) { return e && !e.contains(top) && !top.parentElement.isSameNode(e); });
    var ok = true;
    for (var k = 0; k < els.length; k++) {
      if (els[k].parentElement !== top) { ok = false; break; }
      if (k && !(els[k - 1].compareDocumentPosition(els[k]) & 4)) { ok = false; break; }
    }
    if (ok) return;
    moves++;
    els.forEach(function (e) { top.appendChild(e); });
  }
  var q = false; function sch() { if (q) return; q = true; setTimeout(function () { q = false; run(); }, 350); }
  sch(); new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true });
})();
