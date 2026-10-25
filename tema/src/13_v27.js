/* v27: drone urun sayfasinda zorunlu kumanda secimi - ikas kisisellestirme select'ini gorsel karta cevirir */
(function(){
  if (window.__bgKum) return; window.__bgKum = 1;
  var API = null;
  function api(){ return API || (API = window.__BG || null); }

  var RC = [
    { f: 'drone-dji-rc-n1-n2-n3', t: 'DJI RC-N1 / N2 / N3', n: 'RC-N1 / N2 / N3', s: 'Telefonlu kumanda' },
    { f: 'drone-dji-rc',          t: 'DJI RC',              n: 'DJI RC',          s: 'Ekranli kumanda' },
    { f: 'drone-dji-rc-pro',      t: 'DJI RC Pro',          n: 'DJI RC Pro',      s: 'Ekranli pro kumanda' }
  ];
  var NONE = 'İstemiyorum';   /* "Istemiyorum · sadece drone" degerinin basi */
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

  /* sayfadaki ikas kisisellestirme select'i (Kumanda kaplamasi) */
  function nativeSel(){
    var ss = document.querySelectorAll('select');
    for (var i = 0; i < ss.length; i++) {
      var s = ss[i], hit = 0;
      for (var k = 0; k < s.options.length; k++) if (s.options[k].text.indexOf(NONE) === 0) hit = 1;
      if (hit) return s;
    }
    return null;
  }
  function optByText(sel, txt){
    for (var i = 0; i < sel.options.length; i++) if (sel.options[i].text.trim() === txt) return sel.options[i];
    return null;
  }
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
  function curText(sel){ var o = sel.options[sel.selectedIndex]; return o ? o.text.trim() : ''; }

  function render(box, sel){
    var cur = curText(sel);
    var isNone = cur.indexOf(NONE) === 0;
    var model = null; RC.forEach(function(r){ if (r.t === cur) model = r; });
    var withRc = !!model;
    var ds = desen();
    var h = '<div class="bg27k-h"><span>3. Kumanda</span><em class="' + (cur ? 'on' : '') + '">' +
      (isNone ? 'Sadece drone' : model ? esc(model.n) : 'Seçim zorunlu') + '</em></div>';
    h += '<div class="bg27k-g">' +
      '<button type="button" class="bg27k-b' + (isNone ? ' on' : '') + '" data-k="none"><b>Sadece drone</b><small>Kumanda kaplaması yok</small></button>' +
      '<button type="button" class="bg27k-b' + (withRc ? ' on' : '') + '" data-k="rc"><b>Drone + kumanda</b><small>+' + fmt(EK) + ' · tek başına ' + fmt(1500) + '</small></button>' +
      '</div>';
    if (withRc) {
      h += '<div class="bg27k-m">' + RC.map(function(r){
        return '<button type="button" class="bg27k-c' + (model && model.f === r.f ? ' on' : '') + '" data-m="' + r.f + '">' +
          '<span class="im"><img loading="lazy" src="' + imgUrl(r.f, ds) + '" alt="' + esc(r.n + ' ' + ds) + ' kaplama"></span>' +
          '<b>' + esc(r.n) + '</b><small>' + esc(r.s) + '</small></button>';
      }).join('') + '</div>';
      h += '<p class="bg27k-n">Kumanda, drone ile <b>aynı desende</b> kesilir. Kumandanı seç, kutudan takım çıksın.</p>';
    } else if (!cur) {
      h += '<p class="bg27k-w">Devam etmek için bu seçimi yapman gerekiyor.</p>';
    }
    box.innerHTML = h;
    box.onclick = function(e){
      var b = e.target.closest('button'); if (!b) return;
      e.preventDefault();
      if (b.dataset.k === 'none') { setSel(sel, optNone(sel)); }
      else if (b.dataset.k === 'rc') { setSel(sel, optByText(sel, RC[0].t)); }
      else if (b.dataset.m) { var r = RC.filter(function(x){ return x.f === b.dataset.m; })[0]; if (r) setSel(sel, optByText(sel, r.t)); }
      setTimeout(function(){ render(box, sel); }, 60);
    };
  }

  function run(){
    var a = api(); if (!a) return;
    var dev = a.cur();
    var sel = nativeSel();
    var box = document.querySelector('.bg27k');
    if (!dev || dev.t !== 'D' || !sel) { if (box) box.remove(); return; }
    css();
    /* yerli alani gizle, kendi kutumuzu yerine koy */
    var field = sel.closest('.pcz') || sel.parentElement;
    if (field && !field.classList.contains('bg27k-hide')) field.classList.add('bg27k-hide');
    if (!box) {
      box = document.createElement('div'); box.className = 'bg27k';
      (field.parentElement || field).insertBefore(box, field);
    }
    var sig = curText(sel) + '|' + desen();
    if (box.getAttribute('data-sig') === sig) return;
    box.setAttribute('data-sig', sig);
    render(box, sel);
  }

  var q = false;
  function sch(){ if (q) return; q = true; setTimeout(function(){ q = false; try { run(); } catch (e) {} }, 150); }
  function go(){ sch(); new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true }); setInterval(sch, 900); }
  if (document.readyState !== 'loading') setTimeout(go, 450); else document.addEventListener('DOMContentLoaded', function(){ setTimeout(go, 450); });
})();
