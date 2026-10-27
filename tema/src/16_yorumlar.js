/* v29: musteri yorumlari - uyelik yok; gorsel + isim + sehir + yorum. Yorum gonderme WhatsApp uzerinden. */
(function () {
  if (window.__bgRev) return; window.__bgRev = 1;
  var WA = '905353211911';
  var IMG = 'https://cdn.jsdelivr.net/gh/BedirhanAkyz/betaguard-onizleme@main/img/yorum/';
  /* [gorsel dosyasi ('' = gorselsiz), isim, sehir, yorum, cihaz/desen (opsiyonel)] */
  var R = [];
  var css = [
    '[data-bg-rev]{padding:56px 0 24px;color:#F2F0EB}',
    '.bg-rev-in{max-width:1240px;margin:0 auto;padding:0 24px;box-sizing:border-box}',
    '.bg-rev-top{display:flex;justify-content:space-between;align-items:flex-end;gap:16px;flex-wrap:wrap;margin-bottom:24px}',
    '.bg-rev-top h2{margin:8px 0 0;font:italic 900 40px/1.05 Archivo,sans-serif;color:#F2F0EB}',
    '.bg-rev-top p{margin:10px 0 0;font:400 15px/1.6 Manrope,sans-serif;color:#A9A59D;max-width:560px}',
    '.bg-rev-btn{flex:none;display:inline-flex;align-items:center;gap:8px;padding:13px 20px;border-radius:99px;border:1px solid #C9A45C;background:transparent;color:#E2C285;font:700 14px/1 Manrope,sans-serif;cursor:pointer}',
    '.bg-rev-btn:hover{background:#C9A45C;color:#0E0E0F}',
    '.bg-rev-g{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px}',
    '.bg-rev-c{background:#161618;border:1px solid #26262A;border-radius:18px;overflow:hidden;display:flex;flex-direction:column}',
    '.bg-rev-c img{width:100%;aspect-ratio:4/3;object-fit:cover;display:block;background:#1E1E21}',
    '.bg-rev-b{padding:16px 18px 18px;display:flex;flex-direction:column;gap:10px;flex:1}',
    '.bg-rev-t{margin:0;font:400 15px/1.6 Manrope,sans-serif;color:#E4E1DA}',
    '.bg-rev-w{margin-top:auto;font:700 14px/1.3 Manrope,sans-serif;color:#F2F0EB}',
    '.bg-rev-w span{display:block;font-weight:500;font-size:13px;color:#8F8B83;margin-top:3px}',
    '.bg-rev-e{border:1px dashed #3A3A3F;border-radius:18px;padding:28px;text-align:center;font:400 15px/1.6 Manrope,sans-serif;color:#A9A59D}',
    '.bg-rev-m{position:fixed;inset:0;z-index:2147483000;background:rgba(0,0,0,.7);display:flex;align-items:center;justify-content:center;padding:16px}',
    '.bg-rev-f{width:100%;max-width:440px;background:#161618;border:1px solid #2E2E33;border-radius:20px;padding:24px;box-sizing:border-box;color:#F2F0EB;max-height:92vh;overflow:auto}',
    '.bg-rev-f h3{margin:0 0 6px;font:italic 900 26px/1.1 Archivo,sans-serif}',
    '.bg-rev-f p{margin:0 0 16px;font:400 14px/1.55 Manrope,sans-serif;color:#A9A59D}',
    '.bg-rev-f label{display:block;margin:0 0 12px;font:600 13px/1.3 Manrope,sans-serif;color:#C9C5BD}',
    '.bg-rev-f input,.bg-rev-f textarea{display:block;width:100%;box-sizing:border-box;margin-top:6px;padding:12px 14px;border-radius:12px;border:1px solid #2E2E33;background:#0E0E0F;color:#F2F0EB;font:400 15px/1.4 Manrope,sans-serif}',
    '.bg-rev-f textarea{min-height:110px;resize:vertical}',
    '.bg-rev-f .bg-rev-a{display:flex;gap:10px;margin-top:6px}',
    '.bg-rev-f .bg-rev-a button{flex:1;padding:13px;border-radius:99px;border:0;font:700 14px/1 Manrope,sans-serif;cursor:pointer}',
    '.bg-rev-f .ok{background:#C9A45C;color:#0E0E0F}.bg-rev-f .no{background:#26262A;color:#F2F0EB}',
    '.bg-rev-f small{display:block;margin-top:12px;font:400 12px/1.5 Manrope,sans-serif;color:#8F8B83}',
    '@media (max-width:800px){.bg-rev-in{padding:0 16px}.bg-rev-top h2{font-size:30px}}'
  ].join('');
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function form() {
    if (document.querySelector('.bg-rev-m')) return;
    var m = document.createElement('div'); m.className = 'bg-rev-m';
    m.innerHTML = '<div class="bg-rev-f" role="dialog" aria-label="Yorum yaz"><h3>Yorumunu paylaş</h3>' +
      '<p>Üyelik gerekmez. Bilgileri doldur, WhatsApp açılınca kaplamalı cihazının fotoğrafını mesaja ekleyip gönder.</p>' +
      '<label>Adın<input name="ad" maxlength="40" placeholder="Örn. Ahmet Y."></label>' +
      '<label>Şehrin<input name="sehir" maxlength="30" placeholder="Örn. İzmir"></label>' +
      '<label>Cihaz ve desen (isteğe bağlı)<input name="cihaz" maxlength="60" placeholder="Örn. Sony A7 IV · Royal"></label>' +
      '<label>Yorumun<textarea name="yorum" maxlength="600" placeholder="Kaplamayı nasıl buldun?"></textarea></label>' +
      '<div class="bg-rev-a"><button type="button" class="no">Vazgeç</button><button type="button" class="ok">WhatsApp ile gönder</button></div>' +
      '<small>Gönderdiğin yorum ve fotoğraf, onayından sonra sitede adın ve şehrinle yayınlanabilir.</small></div>';
    document.body.appendChild(m);
    function close() { m.remove(); }
    m.addEventListener('click', function (e) { if (e.target === m) close(); });
    m.querySelector('.no').onclick = close;
    m.querySelector('.ok').onclick = function () {
      var v = function (n) { return (m.querySelector('[name=' + n + ']').value || '').trim(); };
      if (!v('ad') || !v('yorum')) { (v('ad') ? m.querySelector('[name=yorum]') : m.querySelector('[name=ad]')).focus(); return; }
      var t = 'Betaguard yorumum\nAd: ' + v('ad') + '\nŞehir: ' + (v('sehir') || '-') + (v('cihaz') ? '\nCihaz/desen: ' + v('cihaz') : '') + '\nYorum: ' + v('yorum') + '\n\n(Fotoğrafımı ekliyorum)';
      window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(t), '_blank');
      close();
    };
    setTimeout(function () { var i = m.querySelector('[name=ad]'); if (i) i.focus(); }, 50);
  }
  function build() {
    if (location.pathname !== '/') { var o = document.querySelector('[data-bg-rev]'); if (o) o.remove(); return; }
    if (document.querySelector('[data-bg-rev]')) return;
    var faq = document.querySelector('[data-bg-faq]');
    if (!faq || !faq.parentNode) return;
    if (!document.getElementById('bg-rev-css')) { var st = document.createElement('style'); st.id = 'bg-rev-css'; st.textContent = css; document.head.appendChild(st); }
    var s = document.createElement('section'); s.setAttribute('data-bg-rev', '1');
    var h = '<div class="bg-rev-in"><div class="bg-rev-top"><div><span class="bg-eyebrow">Müşteri yorumları</span><h2>Kullananlar ne diyor?</h2>' +
      '<p>Betaguard kaplamalı ekipmanlarını paylaşan müşterilerimizin yorumları.</p></div>' +
      '<button type="button" class="bg-rev-btn">Yorum yaz</button></div>';
    if (R.length) {
      h += '<div class="bg-rev-g">';
      R.forEach(function (r) {
        h += '<div class="bg-rev-c">' + (r[0] ? '<img loading="lazy" alt="' + esc(r[1]) + ' - Betaguard kaplama" src="' + IMG + esc(r[0]) + '">' : '') +
          '<div class="bg-rev-b"><p class="bg-rev-t">“' + esc(r[3]) + '”</p><div class="bg-rev-w">' + esc(r[1]) +
          '<span>' + esc(r[2]) + (r[4] ? ' · ' + esc(r[4]) : '') + '</span></div></div></div>';
      });
      h += '</div>';
    } else {
      h += '<div class="bg-rev-e">İlk yorumlar yakında burada olacak. Kaplamanı aldıysan, fotoğrafınla birlikte ilk yorumu sen yaz.</div>';
    }
    s.innerHTML = h + '</div>';
    faq.parentNode.insertBefore(s, faq);
    s.querySelector('.bg-rev-btn').onclick = form;
  }
  build();
  new MutationObserver(build).observe(document.documentElement, { childList: true, subtree: true });
})();
