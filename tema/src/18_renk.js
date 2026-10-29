/* v31: renk duzeni. Ana vurgu titanyum (#E7E5E0); altin (#C9A45C / #E2C285) sadece satin alma ve firsat:
   fiyat, Sepete Ekle, indirim rozeti, kampanya kutusu, duyuru cubugu, oyun. Fiyatin altina indirim rozeti ekler. */
(function () {
  if (window.__bgRenk) return; window.__bgRenk = 1;
  var css = [
    '[data-bg-pcart]{background:#C9A45C!important;border-color:#C9A45C!important}',
    '.bg-sigb{display:inline-flex;align-items:center;margin:8px 0 2px;align-self:flex-start;width:max-content;max-width:100%;background:#211D15;color:#E2C285;border:1px solid rgba(201,164,92,.5);border-radius:999px;padding:7px 12px;font:800 12.5px/1 Manrope,sans-serif;white-space:nowrap;box-sizing:border-box}',
    'html:not(.bg-hasprice) .bg-sigb{display:none}'
  ].join('');
  var st = document.createElement('style'); st.id = 'bg-theme-renk'; st.textContent = css; (document.head || document.documentElement).appendChild(st);
  function run() {
    var pr = document.querySelector('[data-bg-pprice]');
    var ex = document.querySelector('.bg-sigb');
    if (!pr) { if (ex) ex.remove(); return; }
    if (ex && ex.previousElementSibling === pr) return;
    if (ex) ex.remove();
    var b = document.createElement('span'); b.className = 'bg-sigb'; b.textContent = '2. kaplamaya 250 ₺ indirim';
    pr.insertAdjacentElement('afterend', b);
  }
  var q = 0;
  function sch() { if (q) return; q = 1; setTimeout(function () { q = 0; try { run(); } catch (e) {} }, 120); }
  run();
  new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true });
})();
