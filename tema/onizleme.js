/* Betaguard URUN SAYFASI ONIZLEME (animasyonlar) - yalnizca ?onizleme=<sha> ile yuklenir. Normal ziyaretci gormez.
   1 desen secim halkasi (+ mevcut gecis), 2 gorselde isik, 3 sepete eklenince set cubugu, 4 sepet onayi + sepet ikonu nabzi, 5 kaydirinca belirme */
(function () {
  if (window.__bgOnizU) return; window.__bgOnizU = 1;
  var RM = false; try { RM = matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
  var ON = { 1: true, 2: true, 3: true, 4: true, 5: true };
  var css = [
    '@keyframes bgaRing{0%{box-shadow:0 0 0 0 rgba(226,194,133,.9),0 0 0 0 rgba(226,194,133,.5)}100%{box-shadow:0 0 0 2px rgba(226,194,133,1),0 0 0 14px rgba(226,194,133,0)}}',
    '.bga-ring{animation:bgaRing .55s cubic-bezier(.2,.8,.2,1) both;border-radius:10px}',
    '.bga-light{position:absolute;inset:0;z-index:6;pointer-events:none;opacity:0;transition:opacity .35s ease;border-radius:inherit;mix-blend-mode:soft-light;background:radial-gradient(260px circle at var(--lx,50%) var(--ly,40%),rgba(255,240,205,.55),rgba(255,240,205,0) 70%)}',
    '.bg-gal-main:hover .bga-light.on{opacity:1}',
    '.bga-bar{margin-top:10px;border:1px solid #2A292E;border-radius:14px;background:#141416;padding:12px 14px;font:600 13px/1.4 Manrope,sans-serif;color:#D9D5CE;overflow:hidden;max-height:0;opacity:0;padding-top:0;padding-bottom:0;transition:max-height .45s ease,opacity .35s ease,padding .45s ease}',
    '.bga-bar.on{max-height:120px;opacity:1;padding-top:12px;padding-bottom:12px}',
    '.bga-bar b{color:#E2C285}.bga-tr{position:relative;height:6px;border-radius:6px;background:#26252A;margin-top:9px;overflow:hidden}',
    '.bga-tr i{position:absolute;left:0;top:0;bottom:0;width:0;border-radius:6px;background:linear-gradient(90deg,#C9A45C,#E2C285);transition:width .9s cubic-bezier(.2,.8,.2,1) .15s}',
    '.bga-tr i:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.55),transparent);transform:translateX(-100%);animation:bgaSh 1.4s ease .9s 1}',
    '@keyframes bgaSh{to{transform:translateX(100%)}}',
    '.bga-st{display:flex;justify-content:space-between;margin-top:6px;font:600 11px/1 Manrope,sans-serif;color:#8E8A83}.bga-st span.on{color:#E2C285}',
    '.bga-ok{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:8px;border-radius:inherit;background:#E2C285;color:#141210;font:800 15px/1 Manrope,sans-serif;opacity:0;transform:scale(.96);transition:opacity .2s ease,transform .25s ease;pointer-events:none;z-index:5}',
    '.bga-ok.on{opacity:1;transform:none}',
    '.bga-ok svg{width:20px;height:20px}.bga-ok path{stroke-dasharray:24;stroke-dashoffset:24;transition:stroke-dashoffset .45s ease .1s}.bga-ok.on path{stroke-dashoffset:0}',
    '@keyframes bgaPulse{0%{transform:scale(1)}30%{transform:scale(1.28)}60%{transform:scale(.94)}100%{transform:scale(1)}}',
    '.bga-pulse{animation:bgaPulse .6s cubic-bezier(.3,.7,.3,1) 1}',
    '@keyframes bgaPing{0%{box-shadow:0 0 0 0 rgba(226,194,133,.7)}100%{box-shadow:0 0 0 12px rgba(226,194,133,0)}}',
    '.bga-ping{animation:bgaPing .8s ease-out 1;border-radius:50%}',
    '.bga-rv{opacity:0;transform:translateY(22px);transition:opacity .7s ease,transform .7s cubic-bezier(.2,.8,.2,1)}.bga-rv.in{opacity:1;transform:none}',
    '.bga-nav{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:99994;display:flex;align-items:center;gap:6px;padding:6px 8px 6px 14px;border-radius:999px;background:rgba(20,20,22,.92);border:1px solid #3A383F;backdrop-filter:blur(8px);font:800 11px/1 Manrope,sans-serif;letter-spacing:.12em;color:#8E8A83;box-shadow:0 10px 30px rgba(0,0,0,.5)}',
    '.bga-nav button{appearance:none;border:1px solid #3A383F;background:#1A1A1D;color:#F2F0EB;border-radius:999px;height:30px;min-width:30px;padding:0 10px;font:800 12px/1 Manrope,sans-serif;cursor:pointer;letter-spacing:0}',
    '.bga-nav button.on{background:#E2C285;border-color:#E2C285;color:#141210}',
    '.bga-tip{position:fixed;left:50%;bottom:62px;transform:translateX(-50%);z-index:99994;max-width:min(520px,calc(100% - 24px));padding:10px 14px;border-radius:12px;background:rgba(20,20,22,.94);border:1px solid #3A383F;color:#D9D5CE;font:600 12.5px/1.45 Manrope,sans-serif;text-align:center;opacity:0;transition:opacity .25s ease;pointer-events:none}',
    '.bga-tip.on{opacity:1}',
    '@media (max-width:760px){.bga-nav{bottom:72px}.bga-tip{bottom:118px}}'
  ].join('');
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var TIP = {
    1: '1 · Desen seçince kutucukta altın halka belirir; görselde parlayarak geçiş zaten canlıda.',
    2: '2 · Fareyi ürün görselinin üzerinde gezdir: yüzeyde hafif ışık dolaşır (telefonda kapalı).',
    3: '3 · Sepete Ekle\'ye bas: altta set indirimi çubuğu dolar, sonraki indirime ne kaldığını söyler.',
    4: '4 · Sepete Ekle\'ye bas: butonda onay işareti, sağ üstte sepet ikonu bir kez atar.',
    5: '5 · Aşağı kaydır: alt bölümler ekrana girerken bir kez yumuşakça yükselir.'
  };
  function isProd() { return !!document.querySelector('.bg-pp') && !!document.querySelector('.bg-gal-main'); }

  /* 1 - desen secim halkasi */
  document.addEventListener('click', function (e) {
    if (!ON[1] || RM) return;
    var pp = e.target.closest && e.target.closest('.bg-pp'); if (!pp) return;
    var b = e.target.closest('button,a,[role=button],img'); if (!b || b.closest('[data-bg-pcart]')) return;
    var t = b.tagName === 'IMG' ? b.parentElement : b;
    t.classList.remove('bga-ring'); void t.offsetWidth; t.classList.add('bga-ring');
    setTimeout(function () { t.classList.remove('bga-ring'); }, 700);
  }, true);

  /* 2 - gorselde isik */
  function light() {
    var m = document.querySelector('.bg-gal-main'); if (!m || m.querySelector('.bga-light')) return;
    if (getComputedStyle(m).position === 'static') m.style.position = 'relative';
    var l = document.createElement('div'); l.className = 'bga-light on'; m.appendChild(l);
    var raf = 0, px = 50, py = 40;
    m.addEventListener('pointermove', function (e) {
      if (e.pointerType === 'touch') return;
      var r = m.getBoundingClientRect(); px = (e.clientX - r.left) / r.width * 100; py = (e.clientY - r.top) / r.height * 100;
      if (!raf) raf = requestAnimationFrame(function () { raf = 0; l.style.setProperty('--lx', px + '%'); l.style.setProperty('--ly', py + '%'); });
    });
  }
  function setLight() { var l = document.querySelector('.bga-light'); if (l) l.classList.toggle('on', !!ON[2] && !RM && matchMedia('(hover:hover)').matches); }

  /* 3 + 4 - sepete ekle */
  function cartIcon() {
    var c = [].filter.call(document.querySelectorAll('body *'), function (e) {
      var r = e.getBoundingClientRect(); if (r.top > 80 || r.width < 20 || r.width > 60 || !e.offsetParent) return false;
      return [].some.call(e.querySelectorAll('.rich-text'), function (x) { return /^\d+$/.test(x.textContent.trim()); });
    });
    return c.length ? c[c.length - 1] : null;
  }
  function ensureBar(btn) {
    var bar = document.querySelector('.bga-bar'); if (bar) return bar;
    bar = document.createElement('div'); bar.className = 'bga-bar';
    bar.innerHTML = '<div class="bga-msg"></div><div class="bga-tr"><i></i></div><div class="bga-st"><span>1 kaplama</span><span>2 · 250 ₺ indirim</span><span>3+ · 500 ₺ indirim</span></div>';
    btn.parentNode.insertBefore(bar, btn.nextSibling); return bar;
  }
  var adds = 0;
  document.addEventListener('click', function (e) {
    var btn = e.target.closest && e.target.closest('[data-bg-pcart]'); if (!btn) return;
    adds = Math.min(3, adds + 1);
    if (ON[4] && !RM) {
      if (getComputedStyle(btn).position === 'static') btn.style.position = 'relative';
      var ok = btn.querySelector('.bga-ok');
      if (!ok) { ok = document.createElement('div'); ok.className = 'bga-ok'; ok.innerHTML = '<svg viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>Sepete eklendi'; btn.appendChild(ok); }
      ok.classList.remove('on'); void ok.offsetWidth; ok.classList.add('on'); clearTimeout(ok._t); ok._t = setTimeout(function () { ok.classList.remove('on'); }, 1500);
      var ci = cartIcon();
      if (ci) setTimeout(function () { ci.classList.remove('bga-pulse', 'bga-ping'); void ci.offsetWidth; ci.classList.add('bga-pulse', 'bga-ping'); setTimeout(function () { ci.classList.remove('bga-pulse', 'bga-ping'); }, 900); }, 350);
    }
    if (ON[3]) {
      var bar = ensureBar(btn), msg = bar.querySelector('.bga-msg'), fill = bar.querySelector('.bga-tr i'), sp = bar.querySelectorAll('.bga-st span');
      msg.innerHTML = adds === 1 ? 'Sepete eklendi. <b>1 kaplama daha</b> ekle, <b>250 ₺ indirim</b> kazan.' : adds === 2 ? '<b>250 ₺ indirim</b> açıldı. Bir tane daha ekle, indirim <b>500 ₺</b> olsun.' : '<b>500 ₺ set indirimi</b> açıldı. Kargo da ücretsiz.';
      [].forEach.call(sp, function (s, i) { s.classList.toggle('on', i < adds); });
      fill.style.transition = RM ? 'none' : ''; fill.style.width = '0%';
      requestAnimationFrame(function () { requestAnimationFrame(function () { bar.classList.add('on'); fill.style.width = [0, 18, 55, 100][adds] + '%'; }); });
    }
  }, true);

  /* 5 - kaydirinca belirme */
  var io = null;
  function reveal() {
    if (RM || !('IntersectionObserver' in window)) return;
    var gal = document.querySelector('.bg-gal'); if (!gal) return;
    var gy = gal.getBoundingClientRect().bottom + scrollY;
    var list = [].filter.call(document.querySelectorAll('section, [data-bg], .bg26-set, [class*="bg-ft"]'), function (e) {
      if (e.closest('.bg-pp,.bg-gal,.bga-nav') || e.getAttribute('data-bga5')) return false;
      var r = e.getBoundingClientRect(); return r.height > 80 && r.top + scrollY > gy - 40 && r.top > innerHeight * .9 && !e.parentElement.closest('[data-bga5]');
    });
    if (!io) io = new IntersectionObserver(function (es) { es.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }); }, { rootMargin: '0px 0px -12% 0px' });
    list.forEach(function (e) { e.setAttribute('data-bga5', '1'); if (!ON[5]) return; e.classList.add('bga-rv'); io.observe(e); });
  }

  /* panel */
  function nav() {
    if (document.querySelector('.bga-nav')) return;
    var n = document.createElement('div'); n.className = 'bga-nav';
    n.innerHTML = 'ÖNİZLEME ' + [1, 2, 3, 4, 5].map(function (i) { return '<button type="button" class="on" data-n="' + i + '" aria-pressed="true">' + i + '</button>'; }).join('') + '<button type="button" data-x="1" aria-label="Önizlemeyi kapat">✕</button>';
    var tip = document.createElement('div'); tip.className = 'bga-tip';
    document.body.appendChild(tip); document.body.appendChild(n);
    var tt = 0;
    function show(i) { tip.textContent = TIP[i] + (ON[i] ? '' : ' (kapalı)'); tip.classList.add('on'); clearTimeout(tt); tt = setTimeout(function () { tip.classList.remove('on'); }, 4200); }
    n.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      if (b.getAttribute('data-x')) { location.href = location.pathname; return; }
      var i = +b.getAttribute('data-n'); ON[i] = !ON[i]; b.classList.toggle('on', ON[i]); b.setAttribute('aria-pressed', ON[i] ? 'true' : 'false');
      if (i === 2) setLight();
      if (i === 3 && !ON[3]) { var bar = document.querySelector('.bga-bar'); if (bar) bar.classList.remove('on'); }
      if (i === 5) { [].forEach.call(document.querySelectorAll('[data-bga5]'), function (e) { e.classList.toggle('bga-rv', ON[5]); e.classList.toggle('in', !ON[5] || e.getBoundingClientRect().top < innerHeight); }); }
      show(i);
    });
    n.addEventListener('pointerover', function (e) { var b = e.target.closest('button[data-n]'); if (b) show(+b.getAttribute('data-n')); });
    setTimeout(function () { tip.textContent = 'Ürün sayfası animasyon önizlemesi. Numaralara dokunarak aç/kapa; üzerine gelince ne yaptığını görürsün.'; tip.classList.add('on'); tt = setTimeout(function () { tip.classList.remove('on'); }, 5000); }, 900);
  }

  var q = false;
  function run() { if (!isProd()) return; light(); setLight(); reveal(); nav(); }
  function sch() { if (q) return; q = true; setTimeout(function () { q = false; run(); }, 400); }
  sch(); new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true });
})();
