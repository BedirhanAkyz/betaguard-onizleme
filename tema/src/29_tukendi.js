/* v41: tukenen desenler. Liste ikas script'inin ilk satirinda: window.BG_TUKENDI=['Royal Gold', ...]
   Urun sayfasinda desen karti soluk + "Tükendi", secilirse sepete ekle kapanir ve not cikar. */
(function () {
  if (window.__bgTk) return; window.__bgTk = 1;
  function norm(s) { return String(s || '').toLocaleLowerCase('tr').replace(/\s+/g, ' ').trim(); }
  /* ogeler: 'Royal Gold' (hemen) ya da ['Carbon','2026-11-05T14:00'] (o saatten itibaren, Turkiye saati) */
  function list() {
    var l = window.BG_TUKENDI, now = Date.now();
    return (Array.isArray(l) ? l : []).map(function (x) {
      if (Array.isArray(x)) { var t = Date.parse(String(x[1] || '').replace(/(T\d\d:\d\d)$/, '$1:00+03:00')); return isNaN(t) || now >= t ? norm(x[0]) : ''; }
      return norm(x);
    }).filter(Boolean);
  }
  var css = [
    '.bg-pp-one.bg-tk{position:relative}',
    '.bg-pp-one.bg-tk img,.bg-pp-one.bg-tk .bg-pp-ph{filter:grayscale(1) brightness(.55)}',
    '.bg-pp-one.bg-tk b,.bg-pp-one.bg-tk small{opacity:.55}',
    '.bg-pp-one.bg-tk::after{content:"Tükendi";position:absolute;left:50%;top:30%;transform:translate(-50%,-50%);padding:2px 6px;border-radius:999px;background:#141210;border:1px solid #E2C285;color:#E2C285;font:700 9.5px/1.3 Manrope,sans-serif;white-space:nowrap;pointer-events:none}',
    'html.bg-tk-sel [data-bg-pcart]{opacity:.4!important;pointer-events:none!important;filter:grayscale(1)}',
    '.bg-tk-note{margin:10px 0 0;padding:11px 14px;border:1px solid #E2C285;border-radius:12px;background:#1A1712;color:#F2EFEA;font:500 13px/1.5 Manrope,sans-serif}',
    '.bg-tk-note b{color:#E2C285}.bg-tk-note a{color:#E2C285!important;text-decoration:underline}'
  ].join('');
  var st = document.createElement('style'); st.id = 'bg-tk'; st.textContent = css;
  (document.head || document.documentElement).appendChild(st);

  function run() {
    var L = list(), sel = null;
    [].forEach.call(document.querySelectorAll('.bg-pp-one[title]'), function (b) {
      var out = L.indexOf(norm(b.getAttribute('title'))) > -1;
      if (out !== b.classList.contains('bg-tk')) b.classList.toggle('bg-tk', out);
      if (out && b.classList.contains('on')) sel = b.getAttribute('title');
    });
    var de = document.documentElement, has = de.classList.contains('bg-tk-sel');
    if (!!sel !== has) de.classList.toggle('bg-tk-sel', !!sel);
    var note = document.querySelector('.bg-tk-note'), btn = document.querySelector('[data-bg-pcart]');
    if (sel && btn) {
      if (!note) { note = document.createElement('div'); note.className = 'bg-tk-note'; btn.insertAdjacentElement('afterend', note); }
      var h = '<b>' + sel.replace(/[<>&"]/g, '') + '</b> şu an tükendi. Başka bir desen seçebilir ya da stok için <a href="https://wa.me/905353211911" target="_blank" rel="noopener">WhatsApp\'tan</a> sorabilirsin.';
      if (note.innerHTML !== h) note.innerHTML = h;
    } else if (note) note.remove();
  }
  /* son guvenlik: tukenmis desen seciliyken sepete ekleme tiklamasini durdur */
  document.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('[data-bg-pcart]')) run();
    if (!document.documentElement.classList.contains('bg-tk-sel')) return;
    if (e.target.closest && e.target.closest('[data-bg-pcart]')) { e.preventDefault(); e.stopPropagation(); }
  }, true);
  var tm = 0; new MutationObserver(function () { if (!tm) tm = setTimeout(function () { tm = 0; run(); }, 80); }).observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
  setInterval(run, 60000);
  run();
})();
