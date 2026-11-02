/* v27: drone urun sayfasinda zorunlu kumanda secimi - ikas kisisellestirme select'ini gorsel karta cevirir */
(function(){
  if (window.__bgKum) return; window.__bgKum = 1;
  var API = null;
  function api(){ return API || (API = window.__BG || null); }

  /* tum kumanda + gozluk modelleri; sayfadaki select'te hangileri varsa onlar gosterilir */
  var CAT = [
    { f: 'drone-dji-rc-n1-n2-n3',     t: 'DJI RC-N1 / N2 / N3', n: 'RC-N1 / N2 / N3', s: 'Telefonlu kumanda' },
    { f: 'drone-dji-rc',              t: 'DJI RC',              n: 'DJI RC',          s: 'Ekranlı kumanda' },
    { f: 'drone-dji-rc-pro',          t: ['DJI RC 2', 'DJI RC Pro'], n: 'DJI RC 2',   s: 'Ekranlı kumanda' },
    { f: 'drone-dji-rc-motion-3',     t: 'DJI RC Motion 3',     n: 'RC Motion 3',     s: 'Hareket kumandası' },
    { f: 'drone-dji-rc-motion-2',     t: 'DJI RC Motion 2',     n: 'RC Motion 2',     s: 'Hareket kumandası' },
    { f: 'drone-dji-goggles-3',       t: 'DJI Goggles 3',       n: 'Goggles 3',       s: 'FPV gözlük' },
    { f: 'drone-dji-goggles-n3',      t: 'DJI Goggles N3',      n: 'Goggles N3',      s: 'FPV gözlük' },
    { f: 'drone-dji-goggles-integra', t: 'DJI Goggles Integra', n: 'Goggles Integra', s: 'FPV gözlük' },
    { f: 'drone-dji-fpv-goggles-v2',  t: 'DJI FPV Goggles V2',  n: 'FPV Goggles V2',  s: 'FPV gözlük' }
  ];
  var KIND = {
    kum: { h: 'Kumanda', none: 'Sadece drone', noneS: 'Kumanda kaplaması yok', yes: 'Drone + kumanda', what: 'kumanda', note: 'Kumanda, drone ile <b>aynı desende</b> kesilir. Kumandanı seç, kutudan takım çıksın.' },
    goz: { h: 'Gözlük', none: 'Gözlük yok', noneS: 'Gözlük kaplaması yok', yes: 'Gözlük de olsun', what: 'gözlük', note: 'Gözlük, drone ile <b>aynı desende</b> kesilir. Gözlüğünün modelini seç.' }
  };
  var NONE = 'İstemiyorum';   /* "Istemiyorum · ..." degerlerinin basi */
  var EK = 1000;

  var CSS = [
    '.bg27k{margin:14px 0 4px;font-family:Manrope,sans-serif}',
    '.bg27k-h{display:flex;align-items:baseline;justify-content:space-between;gap:10px;margin:0 0 8px}',
    '.bg27k-h span{font:700 13px/1.2 Manrope,sans-serif;color:#F2F0EB}',
    '.bg27k-h em{font-style:normal;font:600 11.5px/1.2 Manrope,sans-serif;color:#A9A59D}',
    '.bg27k-h em.on{color:#E2C285}',
    '.bg27k-g{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}',
    '.bg27k-b{display:flex;flex-direction:column;gap:3px;padding:11px 12px;border:1px solid #2A292E;border-radius:12px;background:#141416;color:#F2F0EB;cursor:pointer;text-align:left;transition:border-color .15s,background .15s}',
    '.bg27k-b:hover{border-color:#5A5560}',
    '.bg27k-b.on{border-color:#C9A45C;background:#1B1912}',
    '.bg27k-b b{font:700 12.5px/1.25 Manrope,sans-serif}',
    '.bg27k-b small{font:600 11px/1.25 Manrope,sans-serif;color:#A9A59D}',
    '.bg27k-b.on small{color:#E2C285}',
    '.bg27k-m{margin-top:8px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}',
    '.bg27k-c{display:flex;flex-direction:column;gap:4px;padding:7px;border:1px solid #232227;border-radius:12px;background:#18181A;color:#F2F0EB;cursor:pointer;transition:border-color .15s,background .15s}',
    '.bg27k-c:hover{border-color:#5A5560}',
    '.bg27k-c.on{border-color:#C9A45C;background:#1B1912}',
    '.bg27k-c .im{aspect-ratio:4/3;border-radius:8px;background:#F4F3F0;overflow:hidden}',
    '.bg27k-c .im img{width:100%;height:100%;object-fit:contain;display:block}',
    '.bg27k-c b{font:700 11px/1.2 Manrope,sans-serif;text-align:center}',
    '.bg27k-c small{font:600 10px/1.2 Manrope,sans-serif;color:#8E8A84;text-align:center}',
    '.bg27k-n{margin:8px 0 0;padding:7px 10px;border-radius:10px;background:#1B1912;border:1px solid #3A3426;color:#E2C285;font:600 11.5px/1.4 Manrope,sans-serif}',
    '.bg27k-w{margin:8px 0 0;padding:7px 10px;border-radius:10px;background:#1A1618;border:1px solid #42302F;color:#E4A9A2;font:600 11.5px/1.4 Manrope,sans-serif}',
    '.bg27k-hide{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}',
    '@media(max-width:560px){.bg27k-m{grid-template-columns:repeat(3,minmax(0,1fr))}.bg27k-c b{font-size:10px}.bg27k-c small{display:none}}'
  ].join('');

  function css(){ if (document.getElementById('bg27k-css')) return; var s = document.createElement('style'); s.id = 'bg27k-css'; s.textContent = CSS; document.head.appendChild(s); }
  function esc(s){ return String(s).replace(/[&<>"']/g, function(c){ return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function fmt(n){ return Number(n).toLocaleString('tr-TR') + ' ₺'; }

  /* su an secili desen: once galeri basligi, sonra secici basligi, sonra url */
  function desen(){
    var a = api();
    var el = document.querySelector('.bg-gal-cap span') || document.querySelector('.bg-pp-h em');
    var nm = el ? (el.textContent || '').trim() : '';
    if (a && nm && a.SLUGOF[nm]) return a.SLUGOF[nm];
    return a ? a.curDesen() : 'line-black';
  }
  function imgUrl(f, ds){ var a = api(); return (a ? a.CDN : '') + f + '/' + ds + '.webp'; }

  /* sayfadaki ikas kisisellestirme select'leri (Kumanda / Gozluk kaplamasi) */
  function nativeSels(){
    var out = [], ss = document.querySelectorAll('select');
    for (var i = 0; i < ss.length; i++) {
      var s = ss[i], hit = 0, goz = 0;
      for (var k = 0; k < s.options.length; k++) { var tx = s.options[k].text; if (tx.indexOf(NONE) === 0) hit = 1; if (/Goggles/.test(tx)) goz = 1; }
      if (hit) out.push({ sel: s, kind: goz ? 'goz' : 'kum' });
    }
    return out;
  }
  function itemsFor(sel){ return CAT.filter(function(r){ return !!optByText(sel, r.t); }); }
  function optByText(sel, txt){
    var ts = [].concat(txt);
    for (var j = 0; j < ts.length; j++) for (var i = 0; i < sel.options.length; i++) if (sel.options[i].text.trim() === ts[j]) return sel.options[i];
    return null;
  }
  function isT(r, txt){ return [].concat(r.t).indexOf(txt) >= 0; }
  function optNone(sel){
    for (var i = 0; i < sel.options.length; i++) if (sel.options[i].text.indexOf(NONE) === 0) return sel.options[i];
    return null;
  }
  function setSel(sel, opt){
    if (!opt) return;
    var set = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, 'value').set;
    set.call(sel, opt.value);
    sel.dispatchEvent(new Event('input', { bubbles: true }));
    sel.dispatchEvent(new Event('change', { bubbles: true }));
  }
  function curText(sel){ if (!sel.value) return ''; var o = sel.options[sel.selectedIndex]; return o ? o.text.trim() : ''; }

  /* secim yapilmadan "Sepete Ekle"ye basilirsa: ikas sessizce yutuyor, biz uyaralim */
  function uyar(kind){
    var k = document.querySelector('.bg27k[data-kind="' + kind + '"]') || document.querySelector('.bg27k'); if (!k) return;
    var w = k.querySelector('.bg27k-w');
    if (!w) { w = document.createElement('p'); w.className = 'bg27k-w'; w.setAttribute('role', 'alert'); k.appendChild(w); }
    w.textContent = 'Sepete eklemek için önce ' + KIND[kind].what + ' seçimini yap.';
    k.classList.remove('bg-shake'); void k.offsetWidth; k.classList.add('bg-shake');
    k.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  document.addEventListener('click', function(e){
    if (!document.querySelector('.bg27k')) return;
    var miss = nativeSels().filter(function(x){ return !x.sel.value; })[0]; if (!miss) return;
    if (e.target.closest && e.target.closest('.bg27k')) return;
    var n = e.target, hit = 0;
    for (var i = 0; i < 5 && n; i++, n = n.parentElement) {
      if (/^Sepete Ekle(\s|·|$)/.test((n.textContent || '').trim())) { hit = 1; break; }
    }
    if (!hit) return;
    e.preventDefault(); e.stopImmediatePropagation();
    uyar(miss.kind);
  }, true);

  function extras(){ var t = 0; nativeSels().forEach(function(x){ var c = curText(x.sel); if (c && c.indexOf(NONE) !== 0) t += EK; }); return t; }

  function render(box, sel, kind, no){
    var K = KIND[kind], LIST = itemsFor(sel);
    var cur = curText(sel);
    var isNone = cur.indexOf(NONE) === 0;
    var model = null; LIST.forEach(function(r){ if (isT(r, cur)) model = r; });
    var withM = !!model;
    window.__bgKumEk = extras();   /* 00_main buton fiyatina ekler */
    var ds = desen();
    var h = '<div class="bg27k-h"><span>' + no + '. ' + K.h + '</span><em class="' + (cur ? 'on' : '') + '">' +
      (isNone ? K.none : model ? esc(model.n) : 'Seçim zorunlu') + '</em></div>';
    h += '<div class="bg27k-g">' +
      '<button type="button" class="bg27k-b' + (isNone ? ' on' : '') + '" data-k="none"><b>' + K.none + '</b><small>' + K.noneS + '</small></button>' +
      '<button type="button" class="bg27k-b' + (withM ? ' on' : '') + '" data-k="rc"><b>' + K.yes + '</b><small>+' + fmt(EK) + '</small></button>' +
      '</div>';
    if (withM) {
      h += '<div class="bg27k-m">' + LIST.map(function(r){
        return '<button type="button" class="bg27k-c' + (model && model.f === r.f ? ' on' : '') + '" data-m="' + r.f + '">' +
          '<span class="im"><img decoding="async" src="' + imgUrl(r.f, ds) + '" alt="' + esc(r.n + ' ' + ds) + ' kaplama"></span>' +
          '<b>' + esc(r.n) + '</b><small>' + esc(r.s) + '</small></button>';
      }).join('') + '</div>';
      var dv = api().cur(), ex = extras();
      h += '<p class="bg27k-n">' + K.note +
        (dv && dv.p ? '<br>Toplam <b>' + fmt(dv.p + ex) + '</b> · drone ' + fmt(dv.p) + ' + ek ' + fmt(ex) : '') + '</p>';
    } else if (!cur) {
      h += '<p class="bg27k-w">Devam etmek için bu seçimi yapman gerekiyor.</p>';
    }
    box.innerHTML = h;
    box.onclick = function(e){
      var b = e.target.closest('button'); if (!b) return;
      e.preventDefault();
      if (b.dataset.k === 'none') { setSel(sel, optNone(sel)); }
      else if (b.dataset.k === 'rc') { setSel(sel, optByText(sel, LIST[0].t)); }
      else if (b.dataset.m) { var r = LIST.filter(function(x){ return x.f === b.dataset.m; })[0]; if (r) setSel(sel, optByText(sel, r.t)); }
      setTimeout(function(){ box.removeAttribute('data-sig'); run(); }, 60);
    };
  }

  function run(){
    var a = api(); if (!a) return;
    var dev = a.cur();
    var list = nativeSels();
    if (!dev || dev.t !== 'D' || !list.length) { [].forEach.call(document.querySelectorAll('.bg27k'), function(b){ b.remove(); }); window.__bgKumEk = 0; return; }
    css();
    var sig0 = desen() + '|' + list.map(function(x){ return curText(x.sel); }).join('|');
    list.forEach(function(x, i){
      var sel = x.sel;
      /* yerli alani gizle, kendi kutumuzu yerine koy */
      var field = sel.closest('.pcz') || sel.parentElement;
      if (field && !field.classList.contains('bg27k-hide')) field.classList.add('bg27k-hide');
      var box = field.previousElementSibling && field.previousElementSibling.classList.contains('bg27k') ? field.previousElementSibling : null;
      if (!box) {
        box = document.createElement('div'); box.className = 'bg27k'; box.setAttribute('data-kind', x.kind);
        (field.parentElement || field).insertBefore(box, field);
      }
      var sig = sig0 + '|' + i;
      if (box.getAttribute('data-sig') === sig) return;
      box.setAttribute('data-sig', sig);
      render(box, sel, x.kind, 3 + i);
    });
  }

  var q = false;
  function sch(){ if (q) return; q = true; setTimeout(function(){ q = false; try { run(); } catch (e) {} }, 150); }
  function go(){ sch(); new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true }); setInterval(sch, 900); }
  if (document.readyState !== 'loading') setTimeout(go, 450); else document.addEventListener('DOMContentLoaded', function(){ setTimeout(go, 450); });
})();
