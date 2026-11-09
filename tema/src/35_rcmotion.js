/* v47: RC Motion kumanda fiyati (tek basina 1.250 TL, drone setiyle 750 TL). Avata sayfalarindaki
   ikas aciklama metnindeki eski "1.000 TL / tek basina 1.500 TL" kumanda cumlesini sayfada duzeltir. */
(function () {
  if (window.__bgRcm) return; window.__bgRcm = 1;
  var OLD = /Kumanda kaplamasını sipariş adımında 1\.000 ₺ ile ekleyebilirsin \(tek başına 1\.500 ₺\)/g;
  var NEW = 'RC Motion kumanda kaplamasını sipariş adımında 750 ₺ ile ekleyebilirsin (tek başına 1.250 ₺)';
  function isAvata() { return /avata/i.test(location.pathname); }
  function run() {
    if (!isAvata()) return;
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null), n;
    while ((n = w.nextNode())) { if (n.data.indexOf('ekleyebilirsin') < 0) continue; var v = n.data.replace(OLD, NEW); if (v !== n.data) n.data = v; }
  }
  var t = 0;
  function later() { clearTimeout(t); t = setTimeout(run, 120); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
  new MutationObserver(later).observe(document.documentElement, { childList: true, subtree: true });
})();
