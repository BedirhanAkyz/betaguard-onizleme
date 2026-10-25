/* v17: sepet cekmecesi temizligi, arama model sonuclari, sayfa basliklari, kompakt cerez seridi, indirim metni */
(function(){
  if (window.__bgV17) return; window.__bgV17 = 1;
  var WA = 'https://wa.me/905353211911';
  var css = [
    '.bg-sr{margin:8px auto 28px;width:100%;box-sizing:border-box;max-width:960px;padding:20px;border:1px solid #2A292E;border-radius:14px;background:#141317;font-family:Manrope,sans-serif}',
    '.bg-sr h3{margin:0 0 4px;font:800 16px/1.3 Manrope,sans-serif;color:#F2EFEA}',
    '.bg-sr p{margin:0 0 14px;font:500 13px/1.5 Manrope,sans-serif;color:#8E8A83}',
    '.bg-sr-g{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:8px}',
    '.bg-sr-g a{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:11px 14px;border:1px solid #2A292E;border-radius:10px;color:#F2EFEA;text-decoration:none;font:600 13px/1.3 Manrope,sans-serif;background:#1B1A1F}',
    '.bg-sr-g a:hover{border-color:#E2C285}',
    '.bg-sr-g a b{font-weight:500;color:#8E8A83;font-size:12px}',
    '.bg-sr-g a span{color:#E2C285;flex:none}',
    '.bg-sr-wa{display:inline-flex;margin-top:14px;padding:10px 16px;border-radius:999px;background:#E2C285;color:#111!important;font:700 13px Manrope,sans-serif;text-decoration:none}',
    '@media (max-width:767px){',
      '.bg-ck>div{display:flex!important;align-items:center!important;gap:10px!important;padding:10px 12px!important;max-width:calc(100vw - 20px)!important;box-sizing:border-box}',
      '.bg-ck .rich-text p{font-size:11.5px!important;line-height:1.35!important;margin:0!important}',
      '.bg-ck>div>div:last-child{flex:none!important;margin:0!important;padding:7px 12px!important}',
    '}'
  ].join('');
  var st = document.createElement('style'); st.id = 'bg-theme-css17'; st.textContent = css; (document.head || document.documentElement).appendChild(st);

  function norm(s){ return (s || '').toLocaleLowerCase('tr').replace(/ı/g,'i').replace(/[^a-z0-9.]+/g,' ').trim(); }
  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }

  /* 1) sabit (fixed) kutular icindeki urun sayfasi etiketlerini temizle (sepet cekmecesi) */
  var PATTR = ['data-bg-pinfo','data-bg-pgrid','data-bg-pwrap','data-bg-ptitle','data-bg-pprice','data-bg-spacer'];
  function cleanFixed(){
    var sel = PATTR.map(function(a){ return '.overlay [' + a + ']'; }).join(',');
    [].forEach.call(document.querySelectorAll(sel), function(el){ PATTR.forEach(function(a){ el.removeAttribute(a); }); });
  }

  /* 2) arama sayfasi: model eslesmeleri */
  var DEV = null;
  function devices(){
    if (DEV) return DEV; var M = window.__BG_MODELS; if (!M) return null;
    DEV = [];
    M.split('|').forEach(function(g){ var i = g.indexOf(':'); if (i < 0) return; var b = g.slice(0, i); g.slice(i + 1).split(';').forEach(function(m){ if (m) DEV.push({ b: b, m: m, k: norm(b + ' ' + m) }); }); });
    return DEV;
  }
  function search(){
    if (!/^\/search/.test(location.pathname)) return;
    var q = new URLSearchParams(location.search).get('s') || '';
    var old = document.querySelector('.bg-sr');
    if (old && old.getAttribute('data-q') === q) return;
    var D = devices(); if (!D) return;
    var nq = norm(q); if (nq.length < 2) { if (old) old.remove(); return; }
    var toks = nq.split(' ');
    var hits = D.filter(function(d){ return toks.every(function(t){ return d.k.indexOf(t) >= 0; }); });
    hits.sort(function(a, b){ return a.k.length - b.k.length; });
    var nf = [].slice.call(document.querySelectorAll('.rich-text')).find(function(x){ return /bulunamad/i.test(x.textContent); });
    var anchor = nf ? nf.parentElement : null;
    if (!anchor) {
      var h = [].slice.call(document.querySelectorAll('.rich-text,h1,h2')).find(function(x){ return x.children.length === 0 && x.textContent.trim() === 'Arama'; });
      if (!h) return; anchor = h.parentElement;
    }
    var box = old || document.createElement('div'); box.className = 'bg-sr'; box.setAttribute('data-q', q);
    if (hits.length) {
      box.innerHTML = '<h3>Bu cihazlar için kaplamamız var</h3><p>Cihazına tıkla, kaplama sayfasında otomatik seçilsin.</p><div class="bg-sr-g">' +
        hits.slice(0, 24).map(function(d){ return '<a href="/betaguard-kaplama?cihaz=' + encodeURIComponent(d.b + '|' + d.m) + '"><span style="color:#F2EFEA">' + esc(d.m) + ' <b>' + esc(d.b) + '</b></span><span>→</span></a>'; }).join('') + '</div>' +
        (hits.length > 24 ? '<p style="margin:12px 0 0">+' + (hits.length - 24) + ' model daha. Aramayı biraz daralt.</p>' : '');
    } else {
      box.innerHTML = '<h3>Cihazını listede bulamadın mı?</h3><p>Modelini yaz, kesimi olup olmadığını hemen söyleyelim.</p><a class="bg-sr-wa" href="' + WA + '" target="_blank" rel="noopener">WhatsApp\'tan sor</a>';
    }
    if (!old) {
      while (anchor.parentElement && anchor.parentElement !== document.body && getComputedStyle(anchor.parentElement).flexDirection === 'row' && getComputedStyle(anchor.parentElement).display.indexOf('flex') >= 0) anchor = anchor.parentElement;
      if (nf && anchor === nf.parentElement) anchor.parentNode.insertBefore(box, anchor); else anchor.parentNode.insertBefore(box, anchor.nextSibling);
    }
  }

  /* 3) sayfa basliklari */
  var TITLES = {
    '/': ['Betaguard | Kamera, Lens, Drone ve Gimbal Kaplama', 'Kamera, lens, drone, gimbal ve aksiyon kameran için cihazına özel kesimli, iz bırakmadan sökülen Betaguard kaplamalar. İzmir\'den Türkiye\'ye kargo.'],
    '/search': ['Arama | Betaguard', ''],
    '/pages/iletisim': ['İletişim | Betaguard', 'Betaguard ile WhatsApp, Instagram ve e-posta üzerinden iletişime geç.']
  };
  function titles(){
    var t = TITLES[location.pathname]; if (!t) { if (/Contact Page/i.test(document.title)) document.title = 'İletişim | Betaguard'; return; }
    if (document.title !== t[0] && (!document.title.trim() || /Contact Page|^Arama$/i.test(document.title) || location.pathname !== '/' )) document.title = t[0];
    if (t[1]) {
      var md = document.querySelector('meta[name="description"]');
      if (!md) { md = document.createElement('meta'); md.setAttribute('name', 'description'); document.head.appendChild(md); }
      var c = md.getAttribute('content') || '';
      if (!c.trim() || /Contact Page/i.test(c)) md.setAttribute('content', t[1]);
    }
  }

  /* 4) cerez seridi (mobil) */
  function cookie(){
    var ov = [].slice.call(document.querySelectorAll('.overlay')).find(function(o){ return !o.classList.contains('bg-ck') && /Anlad/i.test(o.textContent) && o.querySelector('.rich-text p'); });
    if (!ov) return;
    ov.classList.add('bg-ck');
    if (window.matchMedia('(max-width:767px)').matches) {
      var p = ov.querySelector('.rich-text p'); if (p) p.textContent = 'Sitede çerez kullanıyoruz. Ayrıntılar Gizlilik ve Çerez Politikası\'nda.';
    }
  }

  /* 5) indirim metni tek tip */
  var FROM = /2 ürüne 250 ₺, 3 ve üzeri ürüne 500 ₺ indirim/;
  function wording(){
    [].forEach.call(document.querySelectorAll('.rich-text'), function(el){
      if (el.children.length === 0 && FROM.test(el.textContent)) el.textContent = el.textContent.replace(FROM, '2 kaplamaya 250 ₺, 3 ve üzeri kaplamaya 500 ₺ indirim');
    });
  }

  function run(){ try { cleanFixed(); } catch (e) {} try { search(); } catch (e) {} try { titles(); } catch (e) {} try { cookie(); } catch (e) {} try { wording(); } catch (e) {} }
  var q = false;
  function sch(){ if (q) return; q = true; setTimeout(function(){ q = false; run(); }, 150); }
  function go(){ run(); new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true }); }
  if (document.readyState !== 'loading') setTimeout(go, 300); else document.addEventListener('DOMContentLoaded', function(){ setTimeout(go, 300); });
})();
