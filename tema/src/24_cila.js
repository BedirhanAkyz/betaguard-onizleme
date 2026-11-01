/* v37: denetim cilasi (Impeccable + Emil Kowalski + taste-skill, onizlemeden kalici): mobil urun sirasi, telefonda kucuk yuzen butonlar, okunur yazi boyu, basma tepkisi ve guclu ease-out, baslik ustu etiket/numara yok, buyuk harfli kucuk etiketler normal yazi, temali kaydirma cubugu/odak halkasi, telefonda iki satir baslik */
(function () {
  if (window.__bgCila) return; window.__bgCila = 1;
  var de = document.documentElement;
  for (var k = 1; k <= 7; k++) de.classList.add('bgv-' + k);
  var EZ = 'cubic-bezier(.23,1,.32,1)';
  de.style.setProperty('--bgv-gift', 'url("data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7M7.5 8a2.5 2.5 0 0 1 0-5C9 3 12 5 12 8c0-3 3-5 4.5-5a2.5 2.5 0 0 1 0 5"/></svg>') + '")');
  var css = [
    '.bgv-rep{display:none!important}@media (max-width:760px){html.bgv-1 .bg-rep:not(.bgv-rep){display:none!important}html.bgv-1 .bgv-rep{display:flex!important}}',
    /* 3 - yuzen butonlar: telefonda kucuk yuvarlak ikonlar, icerik altta kalmasin */
    '@media (max-width:760px){',
    'html.bgv-3 .bg-kt-pill:not(.code){width:46px;height:46px;padding:0!important;justify-content:center;max-width:none}',
    'html.bgv-3 .bg-kt-pill:not(.code) > *{display:none!important}',
    'html.bgv-3 .bg-kt-pill:not(.code)::after{content:"";display:block;width:22px;height:22px;background:#141210;-webkit-mask:var(--bgv-gift) center/contain no-repeat;mask:var(--bgv-gift) center/contain no-repeat}',
    'html.bgv-3 .bg-wa{width:46px;height:46px;padding:0!important;justify-content:center;font-size:0!important}',
    'html.bgv-3 .bg-wa svg{width:22px;height:22px;margin:0}',
    'html.bgv-3 body{padding-bottom:72px}',
    '}',
    /* 5 - animasyon cilasi (Emil): basma tepkisi, guclu ease-out, hover yalnizca fareli cihazda, hareketi azalt */
    'html.bgv-5 button,html.bgv-5 [role=button],html.bgv-5 .bgs-go,html.bgv-5 .bg-btn,html.bgv-5 [data-bg-pcart],html.bgv-5 .bge-btn,html.bgv-5 .bgx-chips button,html.bgv-5 .bgs-cl button,html.bgv-5 .bgs-ar{transition-property:transform,background-color,border-color,color,box-shadow,opacity!important;transition-duration:160ms!important;transition-timing-function:' + EZ + '!important}',
    'html.bgv-5 button:active,html.bgv-5 [role=button]:active,html.bgv-5 .bgs-go:active,html.bgv-5 .bg-btn:active,html.bgv-5 [data-bg-pcart]:active,html.bgv-5 .bge-btn:active,html.bgv-5 .bgx-chips button:active,html.bgv-5 .bgs-cl button:active,html.bgv-5 .bgs-ar:active,html.bgv-5 a.bg-ds-card:active{transform:scale(.97)!important}',
    '@media (hover:none){html.bgv-5 .bg-ds-card:hover,html.bgv-5 .bg26-pop a:hover,html.bgv-5 .bgs-cl button:hover{transform:none!important}}',
    'html.bgv-5 [data-bg-pcart][data-bg-pcart][data-bg-pcart][data-bg-pcart][data-bg-pcart]:hover{box-shadow:none!important}',
    '@media (prefers-reduced-motion:reduce){html.bgv-5 .bg-marq-track,html.bgv-5 .bgs-fl,html.bgv-5 #bg-splash i{animation:none!important}}',
    /* 6 - tasarim cilasi (Impeccable): baslik ustu etiketler ve gereksiz numaralar yok, kaydirma cubugu ve odak halkasi temaya uygun */
    'html.bgv-6 .bg-eyebrow,html.bgv-6 .bgs-tag{display:none!important}',
    'html.bgv-6 #bge-5 h3 > i{display:none!important}',
    'html.bgv-6{scrollbar-color:#3A383F #0E0E0F;scrollbar-width:thin}',
    'html.bgv-6 ::-webkit-scrollbar{width:10px;height:10px}html.bgv-6 ::-webkit-scrollbar-track{background:#0E0E0F}html.bgv-6 ::-webkit-scrollbar-thumb{background:#3A383F;border-radius:10px;border:2px solid #0E0E0F}html.bgv-6 ::-webkit-scrollbar-thumb:hover{background:#C9A45C}',
    'html.bgv-6 :focus-visible{outline:2px solid #E2C285!important;outline-offset:3px!important;border-radius:6px}',
    'html.bgv-6 ::selection{background:#C9A45C;color:#141210}',
    /* 7 - mobil baslik iki satir */
    '@media (max-width:760px){html.bgv-7 .bgs h1{font-size:min(9.4vw,40px)!important;line-height:1.02!important}}'
  ].join('');
  var st = document.createElement('style'); st.id = 'bg-cila-css'; st.textContent = css; (document.head || de).appendChild(st);

  /* mobil urun sirasi: galeri altindaki not gizlenir, kopyasi desen seciminin altina konur */
  function mob() {
    var r = document.querySelector('.bg-gal .bg-rep') || document.querySelector('.bg-rep:not(.bgv-rep)'), pp = document.querySelector('.bg-pp'), c = document.querySelector('.bgv-rep');
    if (!r || !pp) { if (c && !pp) c.remove(); return; }
    if (!c) { c = r.cloneNode(true); c.classList.add('bgv-rep'); c.style.marginTop = '14px'; }
    if (c.previousElementSibling !== pp) pp.parentNode.insertBefore(c, pp.nextSibling);
  }
  /* kucuk yazilar 12,5 px; buyuk harfli kucuk etiketler normal yazi; 0x numaralari gizli. Her ogeyi bir kez kontrol eder */
  function tr(t) { var l = t.toLocaleLowerCase('tr'); return l.charAt(0).toLocaleUpperCase('tr') + l.slice(1); }
  function scan() {
    var all = document.querySelectorAll('body *');
    for (var j = 0; j < all.length; j++) {
      var e = all[j];
      if (e.__bgvS || !e.offsetParent) continue;
      var tn = null; for (var i = 0; i < e.childNodes.length; i++) if (e.childNodes[i].nodeType === 3 && e.childNodes[i].textContent.trim().length > 1) { tn = e.childNodes[i]; break; }
      if (!tn) continue;
      e.__bgvS = 1;
      var t = tn.textContent.trim(), cs = getComputedStyle(e), fs = parseFloat(cs.fontSize);
      if (/^0\d$/.test(t) && e.children.length === 0) { e.style.display = 'none'; continue; }
      var up = cs.textTransform === 'uppercase' || (t === t.toLocaleUpperCase('tr') && /[A-ZÇĞİÖŞÜ]{3}/.test(t));
      if (up && parseFloat(cs.letterSpacing) > .8 && fs < 14 && !e.matches('.bg-eyebrow,.bgs-tag')) {
        e.style.textTransform = 'none'; e.style.letterSpacing = '0';
        if (t === t.toLocaleUpperCase('tr')) tn.textContent = tn.textContent.replace(t, tr(t));
      }
      if (fs >= 9 && fs < 12) e.style.setProperty('font-size', '12.5px', 'important');
    }
  }
  var q = false;
  function run() { mob(); scan(); }
  function sch() { if (q) return; q = true; setTimeout(function () { q = false; run(); }, 400); }
  sch(); new MutationObserver(sch).observe(de, { childList: true, subtree: true });
  window.addEventListener('resize', mob);
})();
