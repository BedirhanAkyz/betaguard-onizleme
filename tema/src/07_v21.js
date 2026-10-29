/* v21: arayuz duzeltmeleri - cerez/hap/whatsapp cakismasi, sepete ekle ipucu, urun sayfasi icerigi, SSS, izgara, tekrar eden bolum */
(function(){
  if (window.__bgV21) return; window.__bgV21 = 1;
  var WA = 'https://wa.me/905353211911';
  var css = [
    '.bg-ck>div{display:flex!important;align-items:center!important;gap:14px!important;padding:12px 14px 12px 16px!important;max-width:min(520px,calc(100vw - 20px))!important;width:auto!important;box-sizing:border-box}',
    '.bg-ck .rich-text p{font-size:12.5px!important;line-height:1.4!important;margin:0!important}',
    '.bg-ck>div>div:last-child{flex:none!important;margin:0!important;padding:8px 14px!important;cursor:pointer}',
    '.bg-ck>div{flex-wrap:nowrap!important;flex-direction:row!important}.bg-ck>div>div:first-child{flex:1 1 auto!important;min-width:0}',
    'html.bg-ck-on .bg-kt-pill{display:none!important}',
    'html.bg-ck-on .bg-wa{bottom:calc(var(--bgck,80px) + 22px)!important}',
    '@media (max-width:767px){html.bg-on-pp .bg-kt-pill{display:none!important}',
    '.bg-kt-pill:not(.code) span{font-size:0!important}.bg-kt-pill:not(.code) span::before{content:"🎯 Oyna, indirim kazan";font-size:13px}',
    'body{padding-bottom:64px}}',
    '.bg-cta-hint{display:none;align-items:center;gap:8px;margin:0 0 10px;padding:10px 14px;border-radius:12px;background:#1E1C17;border:1px solid #3A3222;color:#E2C285;font:700 13px/1.4 Manrope,sans-serif}',
    '.bg-cta-hint.on{display:flex}',
    '.bg-cta-hint svg{flex:none}',
    '.bg-flash{animation:bgFlash 1.4s ease 1}',
    '@keyframes bgFlash{0%,100%{box-shadow:0 0 0 0 rgba(226,194,133,0)}30%{box-shadow:0 0 0 4px rgba(226,194,133,.55)}}',
    '.bg-px{margin:18px 0 6px;display:flex;flex-direction:column;gap:12px;font-family:Manrope,sans-serif;color:#F2EFEA}',
    '.bg-px-c{border:1px solid #2A292E;border-radius:14px;background:#141317;padding:16px 16px 14px}',
    '.bg-px-c h4{margin:0 0 10px;font:800 15px/1.3 Manrope,sans-serif;color:#F2EFEA;display:flex;align-items:center;gap:8px}',
    '.bg-px-c h4 i{font-style:normal;color:#E2C285}',
    '.bg-px-box{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:8px}',
    '.bg-px-box li{display:flex;gap:10px;align-items:flex-start;color:#C9C4BC;font:500 13.5px/1.5 Manrope,sans-serif}',
    '.bg-px-box li:before{content:"";flex:none;width:6px;height:6px;margin-top:8px;border-radius:50%;background:#E2C285}',
    '.bg-px-st{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}',
    '.bg-px-st div{padding:11px 12px;border-radius:10px;background:#1B1A1F}',
    '.bg-px-st b{display:block;font:800 13px/1.3 Manrope,sans-serif;color:#F2EFEA;margin-bottom:3px}.bg-px-st b em{font-style:normal;color:#E2C285;margin-right:6px}',
    '.bg-px-st span{display:block;color:#8E8A83;font:500 12.5px/1.45 Manrope,sans-serif}',
    '.bg-px details{border-top:1px solid #2A292E}.bg-px details:first-of-type{border-top:0}',
    '.bg-px summary{list-style:none;cursor:pointer;padding:11px 26px 11px 0;position:relative;font:700 13.5px/1.4 Manrope,sans-serif;color:#F2EFEA}',
    '.bg-px summary::-webkit-details-marker{display:none}',
    '.bg-px summary:after{content:"+";position:absolute;right:2px;top:9px;color:#E2C285;font:600 18px/1 Manrope,sans-serif}',
    '.bg-px details[open] summary:after{content:"–"}',
    '.bg-px details p{margin:0 0 12px;color:#8E8A83;font:500 13px/1.55 Manrope,sans-serif}',
    '.bg-px a.bg-px-more{display:inline-block;margin-top:6px;color:#E2C285;font:700 13px Manrope,sans-serif;text-decoration:none}',
    '@media (max-width:520px){.bg-trust>div{flex-direction:column!important;align-items:flex-start!important;gap:8px!important}}',
    '@media (max-width:767px){.bg-cats>.bg-cat:last-child:nth-child(odd){grid-column:1/-1}}',
    '@media (min-width:768px){.bg-ds-grid{display:flex!important;flex-wrap:wrap!important;justify-content:center!important;gap:14px!important}.bg-ds-grid>*{flex:0 0 calc((100% - 56px)/5)!important;max-width:calc((100% - 56px)/5)!important;box-sizing:border-box}}',
    '.bg-dup-hide{display:none!important}',
    '.bg-why-note{max-width:760px;margin:16px auto 0;text-align:center;color:#8E8A83;font:500 13.5px/1.55 Manrope,sans-serif}'
  ].join('');
  var st = document.createElement('style'); st.id = 'bg-theme-css21'; st.textContent = css; (document.head || document.documentElement).appendChild(st);
  var FAQ = [
    ['Fiyat neye göre değişiyor?', 'Fiyat cihazın modeline göre değişir. Cihazını seçtiğinde net fiyatı görürsün. 2 kaplamaya 250 ₺, 3 ve üzeri kaplamaya 500 ₺ indirim sepette uygulanır.'],
    ['Hangi ödeme yöntemleri var?', 'Kredi kartı ve banka kartıyla, ikas güvenli ödeme altyapısı üzerinden ödeme yapabilirsin.'],
    ['İade veya değişim yapabilir miyim?', 'Kaplamalar seçtiğin cihaza özel üretildiği için cayma hakkı kapsamında değildir. Ürün hatalı ya da hasarlı ulaşırsa fotoğrafıyla WhatsApp’tan bildir, inceleyip çözelim.'],
    ['Yanlış cihazı seçtim, ne yapmalıyım?', 'Siparişin üretime girmeden WhatsApp’tan yaz, cihaz bilgisini birlikte düzeltelim.']
  ];
  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  function det(q){ return '<details><summary>' + esc(q[0]) + '</summary><p>' + esc(q[1]) + '</p></details>'; }
  function cookie(){
    var ck = document.querySelector('.bg-ck');
    var on = !!(ck && !ck.classList.contains('overlay--hide') && ck.offsetHeight > 0 && ck.firstElementChild && ck.firstElementChild.offsetHeight > 0);
    document.documentElement.classList.toggle('bg-ck-on', on);
    if (on) {
      var b = ck.firstElementChild.getBoundingClientRect();
      document.documentElement.style.setProperty('--bgck', Math.max(40, Math.round(window.innerHeight - b.top)) + 'px');
      var p = ck.querySelector('.rich-text p');
      if (p && p.textContent.length > 80) p.textContent = 'Sitede çerez kullanıyoruz. Ayrıntılar Gizlilik ve Çerez Politikası\'nda.';
    }
  }
  function addBtn(info){
    var leaf = [].slice.call(info.querySelectorAll('*')).filter(function(e){ return e.children.length === 0 && e.textContent.trim() === 'Sepete Ekle'; })[0];
    if (!leaf) return null;
    var b = leaf; while (b.parentElement && b.parentElement !== info) b = b.parentElement;
    if (b.parentElement !== info) return null;
    return { btn: b, leaf: leaf };
  }
  function disabled(x){
    if (x.btn.classList.contains('bg-pp-lock')) return 'seri'; if (window.__bgIsDev && window.__bgIsDev()) return '';
    var f = [].slice.call(document.querySelectorAll('.pcz-field')).find(function(z){ var l = z.querySelector('.pcz-label'); return l && /^\s*Model/i.test(l.textContent) && z.offsetParent !== null; });
    var sel = f && f.querySelector('select');
    if (!sel || !sel.value || document.documentElement.classList.contains('bg-nomodel')) return 'cihaz';
    return '';
  }
  function info0(){ return document.querySelector('[data-bg-pinfo]'); }
  function modelInput(){ return [].slice.call(document.querySelectorAll('input')).filter(function(i){ return /Model yaz/i.test(i.placeholder || ''); })[0]; }
  function toModel(){
    var y = info0() && addBtn(info0()), st = y ? disabled(y) : '';
    var inp = st === 'seri' ? document.querySelector('.bg-pp-grid') : modelInput(); if (!inp) return;
    var r = inp.getBoundingClientRect(); window.scrollTo({ top: window.scrollY + r.top - 140, behavior: 'smooth' });
    inp.classList.remove('bg-flash'); void inp.offsetWidth; inp.classList.add('bg-flash');
    setTimeout(function(){ try { inp.focus({ preventScroll: true }); } catch (e) {} }, 450);
  }
  function product(){
    var info = document.querySelector('[data-bg-pinfo]');
    document.documentElement.classList.toggle('bg-on-pp', !!info);
    if (!info) return;
    var x = addBtn(info);
    if (x) {
      var hint = info.querySelector('.bg-cta-hint');
      if (!hint) {
        hint = document.createElement('div'); hint.className = 'bg-cta-hint';
        hint.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16.5v.01"/></svg><span></span>';
        x.btn.parentNode.insertBefore(hint, x.btn);
      } else if (hint.nextElementSibling !== x.btn) { x.btn.parentNode.insertBefore(hint, x.btn); }
      var why = disabled(x), msg = why === 'seri' ? 'Sepete eklemek için önce yukarıdan desenini seç.' : 'Şimdi cihazını seç; fiyatın ve sepete ekle açılsın.';
      hint.classList.toggle('on', !!why);
      if (why && hint.lastChild.textContent !== msg) hint.lastChild.textContent = msg;
      if (!hint.__bgc) { hint.__bgc = 1; hint.style.cursor = 'pointer'; hint.addEventListener('click', toModel); }
      if (!x.btn.__bgc) { x.btn.__bgc = 1; x.btn.addEventListener('click', function(){ var y = addBtn(info); if (y && disabled(y)) toModel(); }, true); }
    }
    if (!info.querySelector('.bg-px')) {
      var accLeaf = [].slice.call(info.querySelectorAll('*')).filter(function(e){ return e.children.length === 0 && e.textContent.trim() === 'Ürün Açıklaması'; })[0];
      var acc = accLeaf; while (acc && acc.parentElement && acc.parentElement !== info) acc = acc.parentElement;
      var px = document.createElement('div'); px.className = 'bg-px';
      px.innerHTML =
        '<div class="bg-px-c"><h4><i>◆</i>Kutuda ne var?</h4><ul class="bg-px-box">' +
          '<li>Cihazının modeline özel kesilmiş kaplama parçaları</li>' +
          '<li>Uygulama seti: spatula, ıslak ve kuru temizlik mendili</li>' +
          '<li>Drone siparişlerinde kumanda kaplaması 1.000 ₺ ile eklenir</li></ul></div>' +
        '<div class="bg-px-c"><h4><i>◆</i>4 adımda kendin uygula</h4><div class="bg-px-st">' +
          '<div><b><em>01</em>Temizle</b><span>Mendille yüzeyi tozsuz ve kuru hale getir.</span></div>' +
          '<div><b><em>02</em>Hizala</b><span>Köşe ve kenar noktalarını önce hizala.</span></div>' +
          '<div><b><em>03</em>Uygula</b><span>Ortadan dışa bastırarak havayı al.</span></div>' +
          '<div><b><em>04</em>Sabitle</b><span>Kenarları hafif ısıyla yüzeye oturt.</span></div></div>' +
          '<a class="bg-px-more" href="/blog/uygulama-rehberi">Cihaz türüne göre detaylı uygulama rehberi →</a></div>' +
        '<div class="bg-px-c"><h4><i>◆</i>Sık sorulanlar</h4>' +
          det(['Kaplama cihazıma zarar verir mi?', 'Hayır. Günlük çizik ve sürtünmelere karşı korur. Söktüğünde cihazda iz kalmaz.']) +
          det(['Kesim cihazıma oturur mu?', 'Her kaplama seçtiğin modelin ölçülerine göre siparişe özel kesilir. Düğmeler, portlar ve ekran alanları açık kalır.']) +
          det(['Ne zaman kargoya verilir?', 'Siparişe özel üretilir ve 1-2 iş gününde kargoya verilir. 2.000 ₺ üzeri kargo ücretsiz.']) +
          det(FAQ[2]) +
          '<a class="bg-px-more" href="/#sss">Tüm sorular →</a> &nbsp; <a class="bg-px-more" href="' + WA + '" target="_blank" rel="noopener">WhatsApp’tan sor</a></div>';
      if (acc && acc.parentElement === info) info.insertBefore(px, acc.nextSibling); else info.appendChild(px);
    }
  }
  function home(){
    if (location.pathname !== '/') return;
    [].forEach.call(document.querySelectorAll('.bg-sec'), function(s){
      if (s.classList.contains('bg-dup-hide') || !/Koru, kişiselleştir/.test(s.textContent)) return;
      s.classList.add('bg-dup-hide');
      var t = (s.parentElement && s.parentElement.classList.contains('bg-band') && s.parentElement.children.length === 1) ? s.parentElement : s;
      t.style.setProperty('display', 'none', 'important');
    });
    var why = document.querySelector('[data-bg-why]');
    if (why && !why.getAttribute('data-bg-v21')) {
      var cards = why.querySelectorAll('.bg-why-c');
      if (cards.length === 4) {
        why.setAttribute('data-bg-v21', '1');
        var c = cards[2];
        c.querySelector('i').innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3"/><rect x="8" y="8" width="8" height="8" rx="1"/></svg>';
        c.querySelector('b').textContent = 'Cihazına özel kesim';
        c.querySelector('span').textContent = 'Her parça modeline göre kesilir. Düğmeler, portlar ve ekran açıkta kalır.';
        var g = why.querySelector('.bg-why-g');
        if (g && !why.querySelector('.bg-why-note')) { var n = document.createElement('p'); n.className = 'bg-why-note'; n.textContent = 'Metal aksam seçtiğin desenle, plastik aksam dokulu siyah kaplamayla kaplanır.'; g.parentNode.insertBefore(n, g.nextSibling); }
      }
    }
    var l = document.querySelector('#sss .bg-faq-l');
    if (l && !l.getAttribute('data-bg-v21')) { l.setAttribute('data-bg-v21', '1'); l.insertAdjacentHTML('beforeend', FAQ.map(det).join('')); }
  }
  function misc(){
    [].forEach.call(document.querySelectorAll('a[href="x"],a[href="/x"]'), function(a){ if (a.style.display !== 'none') a.style.display = 'none'; });
    [].forEach.call(document.querySelectorAll('img:not([alt])'), function(i){ i.setAttribute('alt', ''); });
  }
  function run(){ try { cookie(); } catch (e) {} try { product(); } catch (e) {} try { home(); } catch (e) {} try { misc(); } catch (e) {} }
  var q = false;
  function sch(){ if (q) return; q = true; setTimeout(function(){ q = false; run(); }, 180); }
  function go(){ run(); new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] }); window.addEventListener('resize', sch); }
  if (document.readyState !== 'loading') setTimeout(go, 600); else document.addEventListener('DOMContentLoaded', function(){ setTimeout(go, 600); });
})();
