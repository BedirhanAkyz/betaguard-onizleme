/* v25: cerez onayi, hero netligi, metin duzeltmeleri, hizalama, bolum sirasi, odeme satiri */
(function(){
  if (window.__bgV25) return; window.__bgV25 = 1;
  var CK = 'bg_cookie_v1';
  function getC(){ try { return localStorage.getItem(CK); } catch (e) { return null; } }
  function setC(v){ try { localStorage.setItem(CK, v); } catch (e) {} }

  /* --- Meta Pixel: onay yoksa beklet --- */
  function px(cmd){ var n = 0; (function t(){ if (typeof window.fbq === 'function') { try { window.fbq('consent', cmd); } catch (e) {} return; } if (n++ < 150) setTimeout(t, 100); })(); }
  if (getC() !== 'all') px('revoke');

  var css = [
    /* hizalama: tum bolumler hero ile ayni genislikte */
    '@media (min-width:768px){[data-bg-best],[data-bg-why],[data-bg-kt],[data-bg-desen],#nasil-uygulanir,[data-bg-wall],.bg-faq-in,[data-bg-home]>.bg-sec:last-child{max-width:1500px!important;width:100%!important;margin-left:auto!important;margin-right:auto!important;padding-left:24px!important;padding-right:24px!important;box-sizing:border-box!important}}',
    /* bolum sirasi: DOM tasimadan, CSS order ile */
    'div:has(> [data-bg-home]){display:flex!important;flex-direction:column!important}',
    '[data-bg-home]{display:contents!important}',
    '[data-bg-home]>*{order:8}',
    '[data-bg-best]{order:1}[data-bg-desen]{order:2}[data-bg-wall]{order:3}[data-bg-why]{order:4}#nasil-uygulanir{order:5}[data-bg-kt]{order:6}[data-bg-insta]{order:7}[data-bg-faq]{order:9}[data-bg-home]>.bg-sec:last-child{order:10}',
    '[data-bg-insta],[data-bg-why]{margin-top:56px!important;margin-bottom:0!important}[data-bg-kt]{margin-top:40px!important;margin-bottom:0!important}',
    '#nasil-uygulanir .bg-grid{margin-top:22px!important}[data-bg-faq]{margin-top:64px!important}',
    '[data-bg-wall],[data-bg-desen],[data-bg-best],[data-bg-why],[data-bg-kt],[data-bg-faq],#nasil-uygulanir{width:100%;box-sizing:border-box}@media (max-width:767px){[data-bg-desen][data-v24],[data-bg-wall][data-v24]{padding-left:16px!important;padding-right:16px!important}}',
    /* basliklar: marka stili (italik) */
    '.bg-why h2,#nasil-uygulanir h2{font-family:Archivo,sans-serif!important;font-style:italic!important;font-weight:800!important}',
    '.bg-kt h3{font-family:Archivo,sans-serif!important;font-style:italic!important;font-weight:800!important}',
    '#nasil-uygulanir h2{margin-bottom:24px!important}',
    /* hero */
    '.bg-hero h1 .bg-h1s{display:block;margin-top:14px;font:italic 800 26px/1.2 Archivo,sans-serif;color:#E7E5E0;letter-spacing:0}',
    '@media (max-width:767px){.bg-hero h1 .bg-h1s{font-size:19px;margin-top:10px}}',
    /* odeme satiri */
    '.bg-pay{display:flex;flex-wrap:wrap;align-items:center;gap:10px 22px;padding:18px 0;margin:0 0 4px;font:600 13px/1.4 Manrope,sans-serif;color:#A9A59D}',
    '.bg-pay span{display:inline-flex;align-items:center;gap:8px}.bg-pay svg{width:18px;height:18px;flex:none;stroke:#E7E5E0;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}',
    /* cerez seridi */
    '.bg-cookie{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:99990;width:min(720px,calc(100% - 24px));display:flex;align-items:center;gap:16px;padding:14px 16px 14px 20px;border-radius:16px;background:#16151A;border:1px solid #2A292E;box-shadow:0 12px 40px rgba(0,0,0,.5);color:#D9D5CE;font:500 13px/1.55 Manrope,sans-serif;box-sizing:border-box}',
    '.bg-cookie p{margin:0;flex:1}.bg-cookie a{color:#F4F2EE;text-decoration:underline;cursor:pointer}',
    '.bg-cookie .b{display:flex;gap:8px;flex:none}',
    '.bg-cookie button{appearance:none;cursor:pointer;border-radius:999px;padding:10px 16px;font:700 13px/1 Manrope,sans-serif;white-space:nowrap}',
    '.bg-cookie .n{background:transparent;border:1px solid #4a463e;color:#D9D5CE}.bg-cookie .y{background:#E7E5E0;border:1px solid #E7E5E0;color:#141210}',
    '@media (max-width:640px){.bg-cookie{flex-direction:column;align-items:stretch;gap:12px;bottom:10px;padding:14px}.bg-cookie .b button{flex:1}}'
  ].join('');
  var st = document.createElement('style'); st.id = 'bg-theme-css25'; st.textContent = css; (document.head || document.documentElement).appendChild(st);

  function banner(){
    if (getC() || document.querySelector('.bg-cookie') || !document.body) return;
    var b = document.createElement('div'); b.className = 'bg-cookie'; b.setAttribute('role', 'dialog'); b.setAttribute('aria-label', 'Çerez tercihi');
    b.innerHTML = '<p>Sitenin çalışması için zorunlu çerezler, reklamlarımızı ölçmek için pazarlama çerezleri kullanıyoruz. Ayrıntılar: <a data-p="1">Gizlilik ve Çerez Politikası</a>.</p><div class="b"><button type="button" class="n">Sadece zorunlu</button><button type="button" class="y">Kabul et</button></div>';
    b.querySelector('a').onclick = function(e){ e.preventDefault(); if (window.bgOpenPolicy) window.bgOpenPolicy('gizlilik'); };
    b.querySelector('.n').onclick = function(){ setC('min'); px('revoke'); b.remove(); };
    b.querySelector('.y').onclick = function(){ setC('all'); px('grant'); b.remove(); };
    document.body.appendChild(b);
  }

  var FAQ = [
    [/^Siparişim ne zaman kargoya verilir/, 'Kaplamalar siparişe özel üretilir ve 1-2 iş gününde Aras Kargo ile gönderilir. 2.000 ₺ ve üzeri siparişlerde kargo ücretsiz, altındaki siparişlerde 200 ₺\'dir.'],
    [/^Hangi ödeme yöntemleri var/, 'Kredi kartı ve banka kartıyla, ikas güvenli ödeme altyapısı üzerinden ödeyebilirsin. Kredi kartına 12 aya varan taksit var, taksit farkı ödeme sayfasında görünür.'],
    [/^İade veya değişim yapabilir miyim/, 'Kaplamalar seçtiğin cihaza özel kesildiği için cayma hakkı kapsamında değildir. Kesim hatası, yanlış ürün ya da kargo hasarı gibi bizden kaynaklı bir sorunda aynı ürünü ücretsiz olarak yeniden gönderiyoruz; ürünün fotoğrafıyla WhatsApp\'tan bildirmen yeterli.']
  ];

  function texts(){
    /* hero */
    var h1 = document.querySelector('.bg-hero h1');
    if (h1 && !h1.getAttribute('data-v25')) { h1.setAttribute('data-v25', '1'); h1.innerHTML = '<span style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap">Kamera, lens ve drone kaplama: </span>Ekipmanını koru.<br>Tarzını yansıt.'; }
    /* neden kaplanmali: darbe iddiasi */
    var why = document.querySelector('.bg-why');
    if (why && !why.getAttribute('data-v25')) {
      var w = document.createTreeWalker(why, NodeFilter.SHOW_TEXT), n, hit = false;
      while ((n = w.nextNode())) { if (/Darbeler cihaza değil kaplamaya gelir/.test(n.nodeValue)) { n.nodeValue = n.nodeValue.replace('Darbeler cihaza değil kaplamaya gelir', 'Çizik ve sürtünmeler cihaza değil kaplamaya gelir'); hit = true; } }
      if (hit) why.setAttribute('data-v25', '1');
    }
    /* kesimi tuttur emojisi */
    var kt = document.querySelector('.bg-kt h3');
    if (kt && /🎯/.test(kt.textContent)) { var tw = document.createTreeWalker(kt, NodeFilter.SHOW_TEXT), t; while ((t = tw.nextNode())) t.nodeValue = t.nodeValue.replace(/🎯\s*/g, ''); }
    /* SSS */
    var faq = document.querySelector('[data-bg-faq]');
    if (faq && !faq.getAttribute('data-v25')) {
      var items = faq.querySelectorAll('details'), done = 0;
      [].forEach.call(items, function(d){
        var s = d.querySelector('summary'); if (!s) return; var q = s.textContent.trim();
        FAQ.forEach(function(f){ if (f[0].test(q)) { var a = [].filter.call(d.children, function(c){ return c !== s; }); if (a.length) { var p = a[0].querySelector('p') || a[0]; p.textContent = f[1]; done++; } } });
      });
      if (done) faq.setAttribute('data-v25', '1');
      var ld = document.getElementById('bg-faq-ld');
      if (ld && !ld.getAttribute('data-v25')) {
        try { var j = JSON.parse(ld.textContent); (j.mainEntity || []).forEach(function(e){ FAQ.forEach(function(f){ if (f[0].test(e.name || '') && e.acceptedAnswer) e.acceptedAnswer.text = f[1]; }); }); ld.textContent = JSON.stringify(j); ld.setAttribute('data-v25', '1'); } catch (e) {}
      }
    }
  }

  function reorder(){
    var home = document.querySelector('[data-bg-home]'); if (!home || !home.parentElement) return;
    var P = home.parentElement;
    var seq = ['[data-bg-best]', '[data-bg-desen]', '[data-bg-wall]', '[data-bg-why]', '#nasil-uygulanir', '[data-bg-kt]', '[data-bg-insta]'].map(function(s){ return document.querySelector(s); });
    if (seq.some(function(x){ return !x; })) return;
    if (!document.querySelector('[data-bg-desen][data-v24]') || !document.querySelector('[data-bg-wall][data-v24]')) return;
    var ok = true;
    for (var i = 0; i < seq.length; i++) { var nx = i < seq.length - 1 ? seq[i + 1] : home; if (seq[i].parentElement !== P || seq[i].nextElementSibling !== nx) { ok = false; break; } }
    if (ok) return;
    seq.forEach(function(x){ P.insertBefore(x, home); });
  }

  function pay(){
    var fb = document.querySelector('[data-bg-fbottom]');
    if (!fb || !fb.parentElement || document.querySelector('.bg-pay')) return;
    var r = document.createElement('div'); r.className = 'bg-pay';
    r.innerHTML =
      '<span><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h3"/></svg>Kredi kartı / banka kartı</span>' +
      '<span><svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h10"/></svg>12 aya varan taksit</span>' +
      '<span><svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>Güvenli ödeme (ikas)</span>' +
      '<span><svg viewBox="0 0 24 24"><path d="M3 7h11v9H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="17.5" r="1.6"/><circle cx="17" cy="17.5" r="1.6"/></svg>Aras Kargo ile 1-2 iş gününde kargoda</span>';
    fb.parentElement.insertBefore(r, fb);
  }

  function run(){ try { texts(); } catch (e) {} try { pay(); } catch (e) {} try { banner(); } catch (e) {} }
  var q = false;
  function sch(){ if (q) return; q = true; setTimeout(function(){ q = false; run(); }, 200); }
  function go(){ sch(); new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true }); }
  if (document.readyState !== 'loading') setTimeout(go, 400); else document.addEventListener('DOMContentLoaded', function(){ setTimeout(go, 400); });
})();
