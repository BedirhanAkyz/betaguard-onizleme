/* v36: urun sayfasi animasyonlari (onizlemeden kalici): sepete eklenince set indirimi cubugu (sepetteki gercek adet), buton onayi + sepet ikonu nabzi, kaydirinca bir kez belirme. Hareketi azalt acikken animasyon yok */
(function () {
  if (window.__bgUrunAnim) return; window.__bgUrunAnim = 1;
  var RM = false; try { RM = matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
  var css = [
    '.bga-bar{box-sizing:border-box;width:100%;margin-top:10px;border:1px solid #2A292E;border-radius:14px;background:#141416;padding:0 14px;font:600 13px/1.4 Manrope,sans-serif;color:#D9D5CE;overflow:hidden;max-height:0;opacity:0;transition:max-height .45s ease,opacity .35s ease,padding .45s ease}',
    '.bga-bar.on{max-height:130px;opacity:1;padding-top:12px;padding-bottom:12px}',
    '.bga-bar b{color:#E2C285}.bga-tr{position:relative;height:6px;border-radius:6px;background:#26252A;margin-top:9px;overflow:hidden}',
    '.bga-tr i{position:absolute;left:0;top:0;bottom:0;width:0;border-radius:6px;background:linear-gradient(90deg,#C9A45C,#E2C285);transition:width .9s cubic-bezier(.2,.8,.2,1) .15s;overflow:hidden}',
    '.bga-tr i:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent);transform:translateX(-100%);animation:bgaSh 1.4s ease .9s 1}',
    '@keyframes bgaSh{to{transform:translateX(100%)}}',
    '.bga-st{display:flex;justify-content:space-between;margin-top:6px;font:600 11px/1 Manrope,sans-serif;color:#8E8A83}.bga-st span.on{color:#E2C285}',
    '.bga-ok{position:absolute;inset:0;z-index:20;display:flex;align-items:center;justify-content:center;gap:8px;border-radius:inherit;background:#E2C285;color:#141210;font:800 15px/1 Manrope,sans-serif;opacity:0;transform:scale(.96);transition:opacity .2s ease,transform .25s ease;pointer-events:none}',
    '.bga-ok.on{opacity:1;transform:none}',
    '.bga-ok svg{width:20px;height:20px}.bga-ok path{stroke-dasharray:24;stroke-dashoffset:24;transition:stroke-dashoffset .45s ease .1s}.bga-ok.on path{stroke-dashoffset:0}',
    '@keyframes bgaPulse{0%{transform:scale(1)}30%{transform:scale(1.28)}60%{transform:scale(.94)}100%{transform:scale(1)}}',
    '@keyframes bgaPing{0%{box-shadow:0 0 0 0 rgba(226,194,133,.7)}100%{box-shadow:0 0 0 12px rgba(226,194,133,0)}}',
    '.bga-pulse{animation:bgaPulse .6s cubic-bezier(.3,.7,.3,1) 1,bgaPing .8s ease-out 1;border-radius:50%}',
    '.bga-rv{opacity:0;transform:translateY(22px);transition:opacity .7s ease,transform .7s cubic-bezier(.2,.8,.2,1)}.bga-rv.in{opacity:1;transform:none}'
  ].join('');
  function isProd() { return !!document.querySelector('.bg-pp') && !!document.querySelector('[data-bg-pcart]'); }

  /* sepet ikonu ve sayisi (ust menu) */
  function cartIcon() {
    var c = [].filter.call(document.querySelectorAll('body *'), function (e) {
      var r = e.getBoundingClientRect(); if (r.top > 80 || r.bottom < 0 || r.width < 20 || r.width > 60 || !e.offsetParent) return false;
      return [].some.call(e.querySelectorAll('.rich-text'), function (x) { return /^\d+$/.test(x.textContent.trim()); });
    });
    return c.length ? c[c.length - 1] : null;
  }
  function count() { var ci = cartIcon(); if (!ci) return null; var t = [].filter.call(ci.querySelectorAll('.rich-text'), function (x) { return /^\d+$/.test(x.textContent.trim()); })[0]; return t ? +t.textContent.trim() : null; }

  function ensureBar(btn) {
    var bar = document.querySelector('.bga-bar'); if (bar) return bar;
    bar = document.createElement('div'); bar.className = 'bga-bar'; bar.setAttribute('aria-live', 'polite');
    bar.innerHTML = '<div class="bga-msg"></div><div class="bga-tr"><i></i></div><div class="bga-st"><span>1 kaplama</span><span>2 · 250 ₺ indirim</span><span>3+ · 500 ₺ indirim</span></div>';
    var host = btn;
    for (var i = 0; i < 6 && host.parentElement; i++) { var cs = getComputedStyle(host.parentElement); if (/flex|grid/.test(cs.display) && !/column/.test(cs.flexDirection) && host.parentElement.children.length > 1) host = host.parentElement; else if (/inline/.test(cs.display)) host = host.parentElement; else break; }
    host.parentNode.insertBefore(bar, host.nextSibling); return bar;
  }
  function showBar(btn, n) {
    var bar = ensureBar(btn), msg = bar.querySelector('.bga-msg'), fill = bar.querySelector('.bga-tr i'), sp = bar.querySelectorAll('.bga-st span');
    var k = Math.max(1, Math.min(3, n));
    msg.innerHTML = k === 1 ? 'Sepete eklendi. <b>1 kaplama daha</b> ekle, <b>250 ₺ indirim</b> kazan.' : k === 2 ? '<b>250 ₺ indirim</b> açıldı. Bir tane daha ekle, indirim <b>500 ₺</b> olsun.' : '<b>500 ₺ set indirimi</b> açıldı.';
    [].forEach.call(sp, function (s, i) { s.classList.toggle('on', i < k); });
    if (RM) { fill.style.transition = 'none'; bar.style.transition = 'none'; }
    fill.style.width = '0%';
    setTimeout(function () { bar.classList.add('on'); fill.style.width = [0, 18, 55, 100][k] + '%'; }, 30);
  }
  var local = 0;
  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('[data-bg-pcart]'); if (!btn || !isProd()) return;
    if (/tükendi/i.test(btn.textContent) && !/sepete ekle/i.test(btn.textContent)) return;
    var before = count(), ci = cartIcon();
    if (!RM) {
      if (getComputedStyle(btn).position === 'static') btn.style.position = 'relative';
      var ok = btn.querySelector('.bga-ok');
      if (!ok) { ok = document.createElement('div'); ok.className = 'bga-ok'; ok.setAttribute('aria-hidden', 'true'); ok.innerHTML = '<svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>Sepete eklendi'; btn.appendChild(ok); }
      ok.classList.remove('on'); void ok.offsetWidth; ok.classList.add('on'); clearTimeout(ok._t); ok._t = setTimeout(function () { ok.classList.remove('on'); }, 1500);
    }
    /* sepet sayisi guncellenince: ikon nabzi + cubuk; sayi bulunamazsa bu sayfadaki eklemeleri say */
    var t0 = Date.now();
    (function wait() {
      var now = count();
      if (now !== null && before !== null && now > before) { done(now); return; }
      if (Date.now() - t0 > 2500) { var c3 = count(); if (c3 === null) { local++; done(local); } else if (c3 > 0) done(c3); return; }
      setTimeout(wait, 120);
    })();
    function done(n) {
      var c2 = cartIcon() || ci;
      if (c2 && !RM) { c2.classList.remove('bga-pulse'); void c2.offsetWidth; c2.classList.add('bga-pulse'); setTimeout(function () { c2.classList.remove('bga-pulse'); }, 900); }
      showBar(btn, n);
    }
  }, true);

  /* kaydirinca bir kez belirme */
  var io = null;
  function reveal() {
    if (RM || !('IntersectionObserver' in window)) return;
    var gal = document.querySelector('.bg-gal'); if (!gal) return;
    var gy = gal.getBoundingClientRect().bottom + scrollY;
    var list = [].filter.call(document.querySelectorAll('.bg26-set, [data-bg-rev], .bg-ft'), function (e) {
      if (e.getAttribute('data-bga5') || e.closest('.bg-pp,.bg-gal')) return false;
      var r = e.getBoundingClientRect(); return r.height > 80 && r.top + scrollY > gy - 40 && r.top > innerHeight * .9;
    });
    if (!list.length) return;
    if (!io) io = new IntersectionObserver(function (es) { es.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }); }, { rootMargin: '0px 0px -12% 0px' });
    list.forEach(function (e) { e.setAttribute('data-bga5', '1'); e.classList.add('bga-rv'); io.observe(e); });
  }

  var q = false;
  function run() {
    if (!isProd()) return;
    if (!document.getElementById('bga-css')) { var s = document.createElement('style'); s.id = 'bga-css'; s.textContent = css; document.head.appendChild(s); }
    reveal();
  }
  function sch() { if (q) return; q = true; setTimeout(function () { q = false; run(); }, 400); }
  sch(); new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true });
})();
