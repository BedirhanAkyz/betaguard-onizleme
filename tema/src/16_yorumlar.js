/* v30: musteri yorumlari. Toplama Lehte (urun-yorumlari.com) ile: satin alma sonrasi e-posta daveti, fotografli, manuel onay. Ana sayfa vitrin + Lehte widget koyu tema. */
(function () {
  if (window.__bgRev) return; window.__bgRev = 1;
  var IMG = 'https://cdn.jsdelivr.net/gh/BedirhanAkyz/betaguard-onizleme@main/img/yorum/';
  /* [gorsel dosyasi ('' = gorselsiz), isim, sehir, yorum, cihaz/desen (opsiyonel)] */
  var R = [];
  var css = [
    '[data-bg-rev]{display:block;width:100%;padding:56px 0 24px;color:#F2F0EB}',
    '.bg-rev-in{width:100%;max-width:1500px;margin:0 auto;padding:0 24px;box-sizing:border-box}',
    '.bg-rev-top{display:flex;justify-content:space-between;align-items:flex-end;gap:16px;flex-wrap:wrap;margin-bottom:24px}',
    '.bg-rev-top h2{margin:8px 0 0;font:italic 900 40px/1.05 Archivo,sans-serif;color:#F2F0EB}',
    '.bg-rev-top p{margin:10px 0 0;font:400 15px/1.6 Manrope,sans-serif;color:#A9A59D;max-width:560px}',
    '.bg-rev-g{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px}',
    '.bg-rev-c{background:#161618;border:1px solid #26262A;border-radius:18px;overflow:hidden;display:flex;flex-direction:column}',
    '.bg-rev-c img{width:100%;aspect-ratio:4/3;object-fit:cover;display:block;background:#1E1E21}',
    '.bg-rev-b{padding:16px 18px 18px;display:flex;flex-direction:column;gap:10px;flex:1}',
    '.bg-rev-t{margin:0;font:400 15px/1.6 Manrope,sans-serif;color:#E4E1DA}',
    '.bg-rev-w{margin-top:auto;font:700 14px/1.3 Manrope,sans-serif;color:#F2F0EB}',
    '.bg-rev-w span{display:block;font-weight:500;font-size:13px;color:#8F8B83;margin-top:3px}',
    '.bg-rev-e{border:1px dashed #3A3A3F;border-radius:18px;padding:28px;text-align:center;font:400 15px/1.6 Manrope,sans-serif;color:#A9A59D}',
    '@media (max-width:800px){.bg-rev-in{padding:0 16px}.bg-rev-top h2{font-size:30px}}'
  ].join('');
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /* Lehte widget (shadow DOM) koyu tema uyumu */
  var UYCSS = ':host{color:#F2F0EB!important;--uy-primary:#C9A45C;--uy-font:Manrope,sans-serif}' +
    '.head h2{font-family:Archivo,sans-serif;font-style:italic;font-weight:900;color:#F2F0EB}' +
    '.cta:hover{color:#0E0E0F!important}' +
    '.note,.reply{background:#1E1E21!important;color:#C9C5BD!important}' +
    '.top,.review{border-color:#26262A!important}' +
    'select{background:#161618!important;color:#F2F0EB!important;border-color:#2E2E33!important}' +
    '.date,.vlabel{color:#8F8B83!important}.imported{background:#26262A!important;color:#A9A59D!important}' +
    '.media img{border-color:#2E2E33!important}.av{color:#0E0E0F!important}';
  function uy() {
    var all = document.querySelectorAll('body *');
    for (var i = 0; i < all.length; i++) {
      var r = all[i].shadowRoot;
      if (!r || r.querySelector('#bg-uy') || !r.querySelector('.wrap')) continue;
      var st = document.createElement('style'); st.id = 'bg-uy'; st.textContent = UYCSS; r.appendChild(st);
    }
  }
  function build() {
    if (location.pathname !== '/') { var o = document.querySelector('[data-bg-rev]'); if (o) o.remove(); return; }
    if (!R.length) { var e0 = document.querySelector('[data-bg-rev]'); if (e0) e0.remove(); return; }
    if (document.querySelector('[data-bg-rev]')) return;
    var faq = document.querySelector('[data-bg-faq]');
    if (!faq || !faq.parentNode) return;
    if (!document.getElementById('bg-rev-css')) { var st = document.createElement('style'); st.id = 'bg-rev-css'; st.textContent = css; document.head.appendChild(st); }
    var s = document.createElement('section'); s.setAttribute('data-bg-rev', '1');
    var h = '<div class="bg-rev-in"><div class="bg-rev-top"><div><h2>Müşteri yorumları</h2>' +
      '<p>Yorumlar yalnızca gerçek alıcılardan gelir: siparişin kargoya verildikten 3 gün sonra e-postana gelen davetle, fotoğraflı yorumunu bırakabilirsin. Her yorum onaylandıktan sonra yayınlanır.</p></div>' +
      '</div>';
    if (R.length) {
      h += '<div class="bg-rev-g">';
      R.forEach(function (r) {
        h += '<div class="bg-rev-c">' + (r[0] ? '<img loading="lazy" alt="' + esc(r[1]) + ' - Betaguard kaplama" src="' + IMG + esc(r[0]) + '">' : '') +
          '<div class="bg-rev-b"><p class="bg-rev-t">“' + esc(r[3]) + '”</p><div class="bg-rev-w">' + esc(r[1]) +
          '<span>' + esc(r[2]) + (r[4] ? ' · ' + esc(r[4]) : '') + '</span></div></div></div>';
      });
      h += '</div>';
    } else {
      h += '<div class="bg-rev-e">İlk yorumlar yakında burada olacak. Her ürün sayfasında o cihaza ait onaylı yorumları da görebilirsin.</div>';
    }
    s.innerHTML = h + '</div>';
    faq.parentNode.insertBefore(s, faq);
  }
  build(); uy();
  var uq = 0;
  new MutationObserver(function () { build(); if (!uq) { uq = 1; setTimeout(function () { uq = 0; uy(); }, 300); } }).observe(document.documentElement, { childList: true, subtree: true });
})();
