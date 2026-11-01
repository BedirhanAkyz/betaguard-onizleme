/* Betaguard ONIZLEME - Impeccable + Emil Kowalski denetim duzeltmeleri. Yalnizca ?onizleme=<sha> ile yuklenir. Normal ziyaretci gormez.
   1 mobil urun sirasi, 2 tek cihaz (A7R V), 3 yuzen butonlar, 4 kucuk yazilar, 5 animasyon cilasi, 6 tasarim cilasi */
(function () {
  if (window.__bgOnizV) return; window.__bgOnizV = 1;
  var de = document.documentElement;
  var ON = { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1 };
  var EZ = 'cubic-bezier(.23,1,.32,1)';
  var css = [
    /* 3 - yuzen butonlar: telefonda kucuk yuvarlak ikonlar, icerik altta kalmasin */
    '@media (max-width:760px){',
    'html.bgv-3 .bg-kt-pill{width:46px;height:46px;padding:0!important;justify-content:center;max-width:none}',
    'html.bgv-3 .bg-kt-pill:not(.code) span::before{content:"🎯"!important;font-size:20px!important}',
    'html.bgv-3 .bg-kt-pill > *:not(span){display:none!important}',
    'html.bgv-3 .bg-wa{width:46px;height:46px;padding:0!important;justify-content:center;font-size:0!important}',
    'html.bgv-3 .bg-wa svg{width:22px;height:22px;margin:0}',
    'html.bgv-3 body{padding-bottom:72px}',
    '}',
    /* 5 - animasyon cilasi (Emil): basma tepkisi, guclu ease-out, hover yalnizca fareli cihazda, hareketi azalt */
    'html.bgv-5 button,html.bgv-5 [role=button],html.bgv-5 .bgs-go,html.bgv-5 .bg-btn,html.bgv-5 [data-bg-pcart],html.bgv-5 .bge-btn,html.bgv-5 .bgx-chips button,html.bgv-5 .bgs-cl button,html.bgv-5 .bgs-ar{transition-property:transform,background-color,border-color,color,box-shadow,opacity!important;transition-duration:160ms!important;transition-timing-function:' + EZ + '!important}',
    'html.bgv-5 button:active,html.bgv-5 [role=button]:active,html.bgv-5 .bgs-go:active,html.bgv-5 .bg-btn:active,html.bgv-5 [data-bg-pcart]:active,html.bgv-5 .bge-btn:active,html.bgv-5 .bgx-chips button:active,html.bgv-5 .bgs-cl button:active,html.bgv-5 .bgs-ar:active,html.bgv-5 a.bg-ds-card:active{transform:scale(.97)!important}',
    '@media (hover:none){html.bgv-5 .bg-ds-card:hover,html.bgv-5 .bg26-pop a:hover,html.bgv-5 .bgs-cl button:hover{transform:none!important}}',
    '@media (prefers-reduced-motion:reduce){html.bgv-5 .bg-marq-track,html.bgv-5 .bgs-fl,html.bgv-5 #bg-splash i{animation:none!important}}',
    /* 6 - tasarim cilasi (Impeccable): baslik ustu etiketler ve gereksiz numaralar yok, kaydirma cubugu ve odak halkasi temaya uygun */
    'html.bgv-6 .bg-eyebrow,html.bgv-6 .bgs-tag{display:none!important}',
    'html.bgv-6 #bge-5 h3 > i{display:none!important}',
    'html.bgv-6{scrollbar-color:#3A383F #0E0E0F;scrollbar-width:thin}',
    'html.bgv-6 ::-webkit-scrollbar{width:10px;height:10px}html.bgv-6 ::-webkit-scrollbar-track{background:#0E0E0F}html.bgv-6 ::-webkit-scrollbar-thumb{background:#3A383F;border-radius:10px;border:2px solid #0E0E0F}html.bgv-6 ::-webkit-scrollbar-thumb:hover{background:#C9A45C}',
    'html.bgv-6 :focus-visible{outline:2px solid #E2C285!important;outline-offset:3px!important;border-radius:6px}',
    'html.bgv-6 ::selection{background:#C9A45C;color:#141210}',
    /* panel */
    '.bgv-nav{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:2147483000;display:flex;align-items:center;gap:6px;padding:6px 8px 6px 14px;border-radius:999px;background:rgba(20,20,22,.94);border:1px solid #3A383F;backdrop-filter:blur(8px);font:800 11px/1 Manrope,sans-serif;letter-spacing:.12em;color:#8E8A83;box-shadow:0 10px 30px rgba(0,0,0,.5)}',
    '.bgv-nav button{appearance:none;border:1px solid #3A383F;background:#1A1A1D;color:#F2F0EB;border-radius:999px;height:30px;min-width:30px;padding:0 10px;font:800 12px/1 Manrope,sans-serif;cursor:pointer;letter-spacing:0}',
    '.bgv-nav button.on{background:#E2C285;border-color:#E2C285;color:#141210}',
    '.bgv-tip{position:fixed;left:50%;bottom:62px;transform:translateX(-50%);z-index:2147483000;width:min(560px,calc(100% - 24px));box-sizing:border-box;padding:11px 14px;border-radius:12px;background:rgba(20,20,22,.96);border:1px solid #3A383F;color:#D9D5CE;font:600 12.5px/1.5 Manrope,sans-serif;text-align:center;opacity:0;transition:opacity .2s ease;pointer-events:none}',
    '.bgv-tip.on{opacity:1}.bgv-tip b{color:#E2C285}',
    '@media (max-width:760px){.bgv-nav{bottom:auto;top:8px}.bgv-tip{bottom:auto;top:52px}}'
  ].join('');
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var TIP = {
    1: '<b>1 · Mobil ürün sırası</b> (telefonda ürün sayfası): "Görseller temsilidir" kutusu görselle başlık arasından alınıp desen seçiminin altına iner; ad, fiyat ve desenler hemen görünür.',
    2: '<b>2 · Tek cihaz</b>: "Kararsız mısın", "Setini kapla" ve "Karşılaştır" da sahnedeki A7R V ile açılır (önizlemede hep açık, kapatılamaz).',
    3: '<b>3 · Yüzen butonlar</b> (telefonda): "Oyna, indirim kazan" ve WhatsApp küçük yuvarlak ikona döner, içeriğin üstünü kapatmaz.',
    4: '<b>4 · Küçük yazılar</b>: 11 px olan fiyat, cihaz adı ve etiketler 12,5 px olur.',
    5: '<b>5 · Animasyon cilası</b> (Emil): butonlara basınca hafif içe basma, güçlü yumuşak geçiş eğrisi, sahne fare üzerindeyken durur, desen geçişi 1,3 sn yerine 0,75 sn, "hareketi azalt" ayarına uyum.',
    6: '<b>6 · Tasarım cilası</b> (Impeccable): başlık üstü küçük etiketler ve 01/02/03 numaraları kalkar, kaydırma çubuğu ve klavye odak halkası altın temaya uyar.'
  };
  function cls() { for (var i = 1; i <= 6; i++) de.classList.toggle('bgv-' + i, !!ON[i]); }

  /* 1 - mobil urun sirasi */
  var rep = null, repHome = null, repNext = null;
  function mob() {
    var r = document.querySelector('.bg-rep'); if (!r) return;
    var pp = document.querySelector('.bg-pp');
    var small = matchMedia('(max-width:760px)').matches;
    if (ON[1] && small && pp) {
      if (!rep) { rep = r; repHome = r.parentNode; repNext = r.nextSibling; }
      if (r.previousElementSibling !== pp) { pp.parentNode.insertBefore(r, pp.nextSibling); r.style.marginTop = '14px'; }
    } else if (rep && repHome && rep.parentNode !== repHome) { repHome.insertBefore(rep, repNext); rep.style.marginTop = ''; }
  }

  /* 4 - kucuk yazilar */
  var bumped = [];
  function fonts() {
    if (!ON[4]) { bumped.forEach(function (e) { e.style.fontSize = ''; }); bumped = []; return; }
    [].forEach.call(document.querySelectorAll('body *'), function (e) {
      if (e.__bgvF || !e.offsetParent || e.closest('.bgv-nav,.bgv-tip')) return;
      var has = false; for (var i = 0; i < e.childNodes.length; i++) if (e.childNodes[i].nodeType === 3 && e.childNodes[i].textContent.trim().length > 1) { has = true; break; }
      if (!has) return;
      var fs = parseFloat(getComputedStyle(e).fontSize); if (fs >= 9 && fs < 12) { e.__bgvF = 1; e.style.setProperty('font-size', '12.5px', 'important'); bumped.push(e); }
    });
  }

  function nav() {
    if (document.querySelector('.bgv-nav')) return;
    var n = document.createElement('div'); n.className = 'bgv-nav';
    n.innerHTML = 'ÖNİZLEME ' + [1, 2, 3, 4, 5, 6].map(function (i) { return '<button type="button" class="on" data-n="' + i + '">' + i + '</button>'; }).join('') + '<button type="button" data-x="1" aria-label="Önizlemeyi kapat">✕</button>';
    var tip = document.createElement('div'); tip.className = 'bgv-tip';
    document.body.appendChild(tip); document.body.appendChild(n);
    var tt = 0;
    function show(i) { tip.innerHTML = TIP[i] + (i !== 2 ? (ON[i] ? ' <i>(açık)</i>' : ' <i>(kapalı: eski hali)</i>') : ''); tip.classList.add('on'); clearTimeout(tt); tt = setTimeout(function () { tip.classList.remove('on'); }, 5200); }
    n.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      if (b.getAttribute('data-x')) { location.href = location.pathname; return; }
      var i = +b.getAttribute('data-n'); if (i === 2) { show(2); return; }
      ON[i] = ON[i] ? 0 : 1; b.classList.toggle('on', !!ON[i]); cls(); if (i === 1) mob(); if (i === 4) { fonts(); if (ON[4]) [].forEach.call(document.querySelectorAll('body *'), function (x) { x.__bgvF = 0; }), fonts(); } show(i);
    });
    n.addEventListener('pointerover', function (e) { var b = e.target.closest('button[data-n]'); if (b) show(+b.getAttribute('data-n')); });
    setTimeout(function () { tip.innerHTML = 'Denetim düzeltmeleri önizlemesi. <b>Numaraya dokun</b>: aç/kapa yapıp eski haliyle karşılaştır. Üzerine gelince ne değiştiğini yazar.'; tip.classList.add('on'); tt = setTimeout(function () { tip.classList.remove('on'); }, 6000); }, 1000);
  }

  cls();
  var q = false;
  function run() { nav(); mob(); fonts(); }
  function sch() { if (q) return; q = true; setTimeout(function () { q = false; run(); }, 500); }
  sch(); new MutationObserver(function (m) { for (var i = 0; i < m.length; i++) { var t = m[i].target; if (t.closest && t.closest('.bgv-nav,.bgv-tip')) continue; sch(); return; } }).observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener('resize', mob);
})();
