/* Betaguard tema paketi - otomatik uretildi (tema/build.py). Kaynak: tema/src/ */
/* ===== 00_main.js ===== */
(function () {
  if (window.__bgTheme) return; window.__bgTheme = 1;
  (function(){ var p = document.createElement('style'); p.id = 'bg-pre'; p.textContent = 'html{background:#0E0E0F!important}body{opacity:0!important}html.bg-ready body{opacity:1!important;transition:opacity .25s ease}'; (document.head || document.documentElement).appendChild(p); setTimeout(function(){ document.documentElement.classList.add('bg-ready'); }, 8000); })();
  var GOLD = '#C9A45C', WA = 'https://wa.me/905353211911';
  var f = document.createElement('link');
  f.rel = 'stylesheet';
  f.href = 'https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,700;0,800;1,800;1,900&family=Manrope:wght@400;500;600;700&display=swap';
  (document.head || document.documentElement).appendChild(f);
  var css = [
    'html,body{background:#0E0E0F!important;color:#F2F0EB;font-family:Manrope,system-ui,sans-serif}',
    'body,button,input,select,textarea{font-family:Manrope,system-ui,sans-serif!important}',
    'h1,h2,h3,.bg-title{font-family:Archivo,sans-serif!important;font-weight:800!important;letter-spacing:-.005em}',
    'input,select,textarea{background:#18181A!important;color:#F2F0EB!important;border-color:#3A383F!important;border-radius:12px}',
    'input::placeholder,textarea::placeholder{color:#8A867F!important}',
    '::selection{background:' + GOLD + ';color:#141210}',
    'a{transition:color .15s ease}',
    '#app img{transition:transform .35s ease}',
    '#app a:hover img{transform:scale(1.03)}',
    '#app a>img,#app a picture img{border-radius:16px}',
    '.bg-eyebrow{display:block;font:700 13px/1 Manrope,sans-serif;letter-spacing:.14em;color:' + GOLD + ';margin:0 0 10px;text-transform:uppercase}',
    '.bg-h{font-family:Archivo,sans-serif!important;font-weight:800!important;font-size:34px!important;line-height:1.1!important;color:#F2F0EB!important}',
    '.bg-sec{max-width:1240px;margin:0 auto;padding:72px 24px;box-sizing:border-box;color:#F2F0EB}',
    '.bg-sec *{box-sizing:border-box}',
    '.bg-sec h2{margin:0 0 28px;font-size:34px;line-height:1.1;color:#F2F0EB}',
    '.bg-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px}',
    '.bg-card{background:#18181A;border:1px solid #26252A;border-radius:16px;padding:24px;display:flex;flex-direction:column;gap:10px}',
    '.bg-card h3{margin:0;font-size:20px;color:#F2F0EB}',
    '.bg-card p{margin:0;font-size:15px;line-height:1.6;color:#B9B5AD}',
    '.bg-num{font:italic 900 40px/1 Archivo,sans-serif;color:' + GOLD + '}',
    '.bg-band{border-top:1px solid #26252A;border-bottom:1px solid #26252A;background:#131315}',
    '.bg-band .bg-sec{padding:56px 24px}',
    '.bg-feat{display:flex;flex-direction:column;gap:12px}',
    '.bg-feat h3{margin:0;font-size:20px;color:#F2F0EB}',
    '.bg-feat p{margin:0;font-size:15px;line-height:1.6;color:#B9B5AD}',
    '.bg-cta{background:' + GOLD + ';color:#141210;border-radius:20px;padding:40px;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:20px}',
    '.bg-cta h2{margin:0 0 8px!important;font:italic 900 34px/1.1 Archivo,sans-serif!important;color:#141210!important}',
    '.bg-cta p{margin:0;font-size:17px;line-height:1.5;color:#141210;max-width:640px}',
    '.bg-btn{display:inline-flex;align-items:center;gap:8px;background:#141210;color:#F2F0EB!important;text-decoration:none!important;font-weight:700;font-size:16px;padding:16px 28px;border-radius:999px;white-space:nowrap}',
    '.bg-btn:hover{background:#000}',
    '.bg-info{margin:16px 0;border:1px solid #26252A;background:#18181A;border-radius:14px;padding:16px 18px;display:flex;flex-direction:column;gap:10px;font-size:14px;line-height:1.5;color:#B9B5AD}',
    '.bg-info b{color:#F2F0EB;font-weight:700}',
    '.bg-info .r{display:flex;gap:10px;align-items:flex-start}',
    '.bg-info svg{flex:none;margin-top:2px}',
    '.bg-disc{background:rgba(201,164,92,.12);border:1px solid rgba(201,164,92,.4);color:#E2C285;border-radius:10px;padding:10px 12px;font-weight:600}',
    '.bg-wa{position:fixed;right:18px;bottom:18px;z-index:9990;display:flex;align-items:center;gap:8px;background:#141210;color:#F2F0EB!important;border:1px solid #3A383F;border-radius:999px;padding:12px 18px;font:600 14px Manrope,sans-serif;text-decoration:none!important;box-shadow:0 8px 24px rgba(0,0,0,.45)}',
    '.bg-wa:hover{border-color:' + GOLD + '}',
    '@media (max-width:640px){.bg-sec{padding:48px 16px}.bg-sec h2,.bg-h{font-size:26px!important}.bg-cta{padding:28px}.bg-cta h2{font-size:26px!important}.bg-wa span{display:none}.bg-wa{padding:12px}}'
  ].join('');
  var st = document.createElement('style'); st.id = 'bg-theme-css'; st.textContent = css;
  (document.head || document.documentElement).appendChild(st);
  var I = {
    shield: '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="' + GOLD + '" stroke-width="1.6"><path d="M12 2.5 L20 5.5 V12 C20 16.5 16.5 20 12 21.5 C7.5 20 4 16.5 4 12 V5.5 Z"/><path d="M9 9 L15 15 M15 9 L9 15"/></svg>',
    cut: '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="' + GOLD + '" stroke-width="1.6"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><path d="M8 7.5 L20 18 M8 16.5 L20 6"/></svg>',
    swap: '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="' + GOLD + '" stroke-width="1.6"><path d="M4 12 A8 8 0 0 1 18 6.5"/><path d="M18 2.5 V6.5 H14"/><path d="M20 12 A8 8 0 0 1 6 17.5"/><path d="M6 21.5 V17.5 H10"/></svg>',
    hand: '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="' + GOLD + '" stroke-width="1.6"><path d="M7 11 V5.5 A1.5 1.5 0 0 1 10 5.5 V11"/><path d="M10 10 V4 A1.5 1.5 0 0 1 13 4 V10"/><path d="M13 10.5 V5 A1.5 1.5 0 0 1 16 5 V12"/><path d="M16 9.5 A1.5 1.5 0 0 1 19 9.5 V14 C19 18.5 16 21.5 12 21.5 C8.5 21.5 6.5 19.5 5 16.5 L3.5 13.5 A1.5 1.5 0 0 1 6.2 12 L7 13.5"/></svg>',
    wa: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20 L5.3 16.2 A8 8 0 1 1 8 18.8 Z"/><path d="M9 9.5 C9 12 11.5 14.5 14 14.5"/></svg>',
    dot: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="' + GOLD + '" stroke-width="2"><path d="M5 12.5 L10 17.5 L19 7"/></svg>'
  };
  function feat(icon, t, d) { return '<div class="bg-feat">' + I[icon] + '<h3>' + t + '</h3><p>' + d + '</p></div>'; }
  function step(n, t, d) { return '<div class="bg-card"><span class="bg-num">' + n + '</span><h3>' + t + '</h3><p>' + d + '</p></div>'; }
  var HOME_HTML =
    '<div class="bg-band" data-bg="feat"><div class="bg-sec"><span class="bg-eyebrow">NEDEN BETAGUARD</span><h2>Koru, kişiselleştir, fark yarat</h2><div class="bg-grid">' +
      feat('shield', 'Çizilme koruması', 'Günlük kullanımda oluşan çizik ve sürtünmeleri kaplama üstlenir.') +
      feat('cut', 'Cihazına özel kesim', 'Her parça modeline göre kesilir; düğmeler ve portlar açık kalır.') +
      feat('swap', 'İz bırakmadan sökülür', 'Tarzın değişince sök, yenisini uygula. Cihaz yüzeyine zarar vermez.') +
      feat('hand', 'Metal + plastik aksam', 'Metal aksam seçtiğin desenle, plastik aksam dokulu siyah kaplamayla kaplanır.') +
    '</div></div></div>' +
    '<div class="bg-sec" data-bg="steps"><span class="bg-eyebrow">NASIL UYGULANIR</span><h2>4 adımda kendin uygula</h2><div class="bg-grid">' +
      step('01', 'Temizle', 'Paketten çıkan ıslak ve kuru mendille yüzeyi tozsuz ve kuru hale getir.') +
      step('02', 'Hizala', 'Uygulamadan önce köşe ve kenar noktalarını dikkatlice hizala.') +
      step('03', 'Uygula', 'Kaplamayı yavaşça yerleştir, ortadan dışa doğru bastırarak havayı al.') +
      step('04', 'Sabitle', 'Gerekirse kenarları saç kurutma makinesiyle hafifçe ısıtarak yüzeye oturt.') +
    '</div></div>' +
    '<div class="bg-sec" data-bg="cta" style="padding-top:0"><div class="bg-cta"><div><h2>Cihazın listede yok mu?</h2><p>Modelini yaz, kesimi olup olmadığını hemen söyleyelim.</p></div>' +
      '<a class="bg-btn" href="' + WA + '" target="_blank" rel="noopener">' + I.wa + 'WhatsApp\'tan yaz</a></div></div>';
  var INFO_HTML =
    '<div class="bg-info" data-bg="info">' +
      '<div class="bg-disc">2 kaplamaya 250 ₺, 3 ve üzeri kaplamaya 500 ₺ indirim · 2.000 ₺ üzeri kargo ücretsiz</div>' +
      '<div class="r">' + I.dot + '<span><b>Metal aksam</b> seçtiğin desenle, <b>plastik aksam</b> dokulu siyah kaplamayla kaplanır.</span></div>' +
      '<div class="r">' + I.dot + '<span>Siparişe özel basılır ve kesilir, <b>1-2 iş gününde</b> kargoda.</span></div>' +
      '<div class="r">' + I.dot + '<span><b>Uygulama seti hediye.</b> Cihazın listede yoksa <a href="' + WA + '" target="_blank" rel="noopener" style="color:#E2C285">WhatsApp\'tan yaz</a>.</span></div>' +
    '</div>';
  function txt(e) { return (e.textContent || '').replace(/\s+/g, ' ').trim(); }
  function leafWithText(re) {
    var out = [], all = document.querySelectorAll('#app h1,#app h2,#app h3,#app p,#app span,#app div');
    for (var i = 0; i < all.length; i++) { var e = all[i]; if (e.children.length > 1) continue; if (re.test(txt(e))) out.push(e); }
    return out;
  }
  function isHome() { return location.pathname === '/' || location.pathname === ''; }
  var EYEBROWS = [[/^Cihazını seç$/i, 'KAMERA · LENS · DRONE · GIMBAL'], [/^Seriler$/i, 'DESENİNİ SEÇ']];
  function addEyebrows() {
    EYEBROWS.forEach(function (p) {
      leafWithText(p[0]).forEach(function (e) {
        if (e.children.length) return;
        if (e.closest('header') || e.closest('nav') || e.closest('a') || e.closest('[data-bg-home]')) return;
        if (e.offsetHeight < 18) return;
        var box = e.closest('.rich-text') || e;
        e.classList.add('bg-h');
        if (box.querySelector('.bg-eyebrow')) return;
        var s = document.createElement('span'); s.className = 'bg-eyebrow'; s.textContent = p[1];
        box.insertBefore(s, box.firstChild);
      });
    });
  }
  function mainWrap() { var app = document.getElementById('app'); if (!app) return null; return app.firstElementChild; }
  function addHome() {
    if (!isHome()) return;
    if (document.querySelector('[data-bg="steps"]')) return;
    var m = mainWrap(); if (!m) return;
    var box = document.createElement('div'); box.setAttribute('data-bg-home', '1'); box.innerHTML = HOME_HTML;
    m.appendChild(box);
  }
  function addInfo() {
    if (document.querySelector('[data-bg="info"]')) return;
    var btns = document.querySelectorAll('#app button');
    for (var i = 0; i < btns.length; i++) {
      if (/sepete ekle/i.test(txt(btns[i]))) {
        var b = btns[i], host = b.parentElement;
        for (var k = 0; k < 3 && host && host.parentElement && host.offsetWidth < 280; k++) host = host.parentElement;
        var d = document.createElement('div'); d.innerHTML = INFO_HTML;
        host.parentNode.insertBefore(d.firstChild, host.nextSibling);
        return;
      }
    }
  }
  function fixHero() {
    var imgs = document.querySelectorAll('#app img');
    for (var i = 0; i < imgs.length; i++) {
      var im = imgs[i];
      if (!im.naturalWidth || im.dataset.bgHero || im.closest('[data-bg-top]')) continue;
      var r = im.naturalWidth / im.naturalHeight;
      if (r < 2.1 || im.getBoundingClientRect().width < 500) continue;
      var h = im.getBoundingClientRect().height;
      im.dataset.bgHero = '1';
      im.style.setProperty('aspect-ratio', im.naturalWidth + ' / ' + im.naturalHeight, 'important');
      im.style.setProperty('height', 'auto', 'important');
      im.style.setProperty('object-fit', 'cover', 'important');
      var p = im.parentElement;
      for (var k = 0; k < 5 && p; k++, p = p.parentElement) {
        if (Math.abs(p.getBoundingClientRect().height - h) < 2) p.style.setProperty('height', 'auto', 'important');
        else break;
      }
    }
  }
  function tagArrows() {
    var hero = document.querySelector('img[data-bg-hero]:not([data-bg-top] img)'); if (!hero) return;
    var app = document.getElementById('app'), sec = hero;
    while (sec.parentElement && sec.parentElement.parentElement !== app) sec = sec.parentElement;
    var els = sec.querySelectorAll('div,button');
    for (var i = 0; i < els.length; i++) {
      var e = els[i];
      if (e.classList.contains('bg-arr-l') || e.classList.contains('bg-arr-r')) continue;
      if (getComputedStyle(e).position !== 'absolute') continue;
      var r = e.getBoundingClientRect();
      if (r.width < 24 || r.width > 64 || r.height < 24 || r.height > 64) continue;
      if (!e.querySelector('svg')) continue;
      e.classList.add(r.left + r.width / 2 < innerWidth / 2 ? 'bg-arr-l' : 'bg-arr-r');
    }
  }
  function addWA() {
    if (document.querySelector('.bg-wa')) return;
    var a = document.createElement('a'); a.className = 'bg-wa'; a.href = WA; a.target = '_blank'; a.rel = 'noopener';
    a.setAttribute('aria-label', 'WhatsApp');
    a.innerHTML = I.wa + '<span>WhatsApp</span>';
    document.body.appendChild(a);
  }
  var MAP = {
    'rgb(255, 255, 255)': '#0E0E0F', 'rgb(250, 250, 250)': '#141416', 'rgb(248, 248, 248)': '#141416',
    'rgb(246, 246, 246)': '#141416', 'rgb(245, 245, 245)': '#141416', 'rgb(243, 243, 243)': '#18181A',
    'rgb(242, 242, 242)': '#18181A', 'rgb(240, 240, 240)': '#18181A', 'rgb(238, 238, 238)': '#1E1E21',
    'rgb(235, 235, 235)': '#1E1E21', 'rgb(229, 229, 229)': '#2A292E'
  };
  var TXT = { 'rgb(0, 0, 0)': '#F2F0EB', 'rgb(20, 20, 26)': '#F2F0EB', 'rgb(17, 17, 17)': '#F2F0EB', 'rgb(33, 33, 33)': '#F2F0EB', 'rgb(51, 51, 51)': '#D9D5CD' };
  function darken() {
    var els = document.body ? document.body.getElementsByTagName('*') : [];
    for (var i = 0; i < els.length; i++) {
      var e = els[i], tn = e.tagName;
      if (tn === 'IMG' || tn === 'svg' || tn === 'SVG' || tn === 'path' || tn === 'SCRIPT' || tn === 'STYLE') continue;
      if (e.closest && e.closest('.bg-cta,.bg-disc')) continue;
      var cs = getComputedStyle(e);
      var b = MAP[cs.backgroundColor]; if (b) e.style.setProperty('background-color', b, 'important');
      var t = TXT[cs.color]; if (t) e.style.setProperty('color', t, 'important');
      var bc = cs.borderTopColor;
      if (cs.borderTopWidth !== '0px' && (bc === 'rgb(229, 229, 229)' || bc === 'rgb(240, 240, 240)' || bc === 'rgb(221, 221, 221)' || bc === 'rgb(238, 238, 238)')) e.style.setProperty('border-color', '#2A292E', 'important');
    }
  }
  /* ---------- v2: banner size, white feature icons, brand marquee, device silhouettes ---------- */
  var css2 = [
    'img[data-bg-hero]{display:block!important;width:min(1452px,calc(100% - 48px))!important;max-height:540px!important;margin:24px auto 0!important;border-radius:20px!important;object-fit:cover!important}',
    '@media (max-width:640px){img[data-bg-hero]{width:calc(100% - 24px)!important;margin:12px auto 0!important;border-radius:14px!important}}',
    '.bg-white-ico img,.bg-white-ico svg{filter:brightness(0) invert(1)!important}',
    '.bg-white-ico{width:min(1452px,calc(100% - 48px))!important;margin:20px auto 0!important;border:1px solid #26252A;border-radius:16px;box-sizing:border-box}',
    '.bg-arr-l{left:calc((100% - min(1452px,calc(100% - 48px))) / 2 + 16px)!important;right:auto!important}',
    '.bg-arr-r{right:calc((100% - min(1452px,calc(100% - 48px))) / 2 + 16px)!important;left:auto!important}',
    '.bg-arr-l,.bg-arr-r{background:rgba(14,14,15,.55)!important;border-radius:50%;backdrop-filter:blur(4px)}',
    '@media (max-width:640px){.bg-marq,.bg-white-ico{width:calc(100% - 24px)!important;margin-top:12px!important}.bg-arr-l{left:20px!important}.bg-arr-r{right:20px!important}}',
    '.bg-marq{width:min(1452px,calc(100% - 48px));margin:20px auto 0;border:1px solid #26252A;border-radius:16px;background:#121214;overflow:hidden;padding:20px 0;position:relative;box-sizing:border-box}',
    '.bg-marq:before,.bg-marq:after{content:"";position:absolute;top:0;bottom:0;width:80px;z-index:1;pointer-events:none}',
    '.bg-marq:before{left:0;background:linear-gradient(90deg,#121214,transparent)}',
    '.bg-marq:after{right:0;background:linear-gradient(-90deg,#121214,transparent)}',
    '.bg-marq-track{display:flex;width:max-content;animation:bgmarq 38s linear infinite}',
    '.bg-marq:hover .bg-marq-track{animation-play-state:paused}',
    '.bg-marq-item{display:flex;align-items:center;gap:56px;padding-right:56px;font:italic 800 26px/1 Archivo,sans-serif;letter-spacing:.06em;color:#8A867F;text-transform:uppercase;white-space:nowrap}',
    '.bg-marq-item i{width:6px;height:6px;border-radius:50%;background:#C9A45C;display:inline-block}',
    '@keyframes bgmarq{from{transform:translateX(0)}to{transform:translateX(-50%)}}',
    '@media (max-width:640px){.bg-marq{padding:16px 0}.bg-marq-item{font-size:19px;gap:36px;padding-right:36px}}',
    '.bg-logo{position:relative;display:inline-flex;align-items:center;height:40px;opacity:.72;transition:opacity .25s;cursor:default}',
    '.bg-logo:hover{opacity:1}',
    '.bg-logo img{height:26px;width:auto;display:block;transition:opacity .25s,filter .25s}',
    '.bg-logo img.c{position:absolute;left:0;top:50%;transform:translateY(-50%);opacity:0}',
    '.bg-logo.hasc:hover img.c{opacity:1}',
    '.bg-logo.hasc:hover img.w{opacity:0}',
    '.bg-logo.inv img{filter:brightness(0) invert(1)}',
    '.bg-logo.tam:hover img{filter:brightness(1.7) saturate(1.2)}',
    '.bg-logo.big img{height:40px}',
    '@media (max-width:640px){.bg-logo img{height:18px}.bg-logo.big img{height:28px}}',
    '.bg-sil{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none;z-index:1;padding-bottom:16%}',
    '.bg-sil svg{width:80%;max-width:190px;height:auto;fill:none;stroke:#fff;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round;opacity:.92}',
    '.bg-has-sil{background:radial-gradient(120% 90% at 50% 35%,#1E1E21 0%,#121214 70%)!important;border:1px solid #26252A;border-radius:14px;overflow:hidden}',
    '.bg-has-sil .rich-text{z-index:2!important;top:auto!important;bottom:16px!important;left:50%!important;right:auto!important;transform:translateX(-50%)!important;white-space:nowrap;text-align:center}',
    '.bg-has-sil .rich-text{text-shadow:0 2px 10px rgba(0,0,0,.8)}'
  ].join('');
  var st2 = document.createElement('style'); st2.id = 'bg-theme-css2'; st2.textContent = css2;
  (document.head || document.documentElement).appendChild(st2);
var LOGOS = [["sony", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAAAoCAQAAAAocszMAAAGWElEQVR42uVca46kOAz+uumjRKKOktVwlLSGo9AajpLSchRKylFA2R88ioedOED3dGuD1FMqqDj4c2zHj3nxYIea/9UAHJr5jsNnDLX4pOGgvoDmjxpvJNM0AA3N/sqh3sB3bmgACmYB137UaIDLKP7I8eK3bNPQyEW/7VEDqEeZr2ZWF0m7yUDhl/j5O9xMMQT+sDNpQRugDw8Dxc4wzaNGoZU9T/0qhR4A+OelvfWd996Pf8Njeqb11iuPxfcQXspXvvXpo/VVZOb4rDayMulKJs51Ses/SO+pBi00svFzJpDx6ZkcORSAfvxGalsslHAHb0eOHBoNysi+D73HL7Qog0q1D/Ci39xxxHfcrBnDIX69/dZmWUYV9cTUajdpKtMNKva1HlFqTxEpWGWTR9mWw6IIwJUJBFX6/PopRbpWWZzaGwvVHW5hkfZ2xsEIF7gdFX4zMDWEPuetGr873ChkKsJyi5KxXo+AID4F2C2Y/QiI1nrehljvHYoV+sfSZtmdlbLeCGyOHm1OF9HI66sibWLnK68CvzIEpWEYZm3Kw2tvvI0YAsNYrekyGwtovZ7vrekpr2aecLQU+5YDra1XsKSmBuPWJRjfvZOQAhYHlRZQahlHR0V+FzP+OkG8YtQGipZZaYyzJuwGYfYAn0MlgLVfXHsAKinFimS8PQlWTFRSweIFK7xWE3sWxISpYK2d5TagNo/sjD3j0ligRG61vhSsPePjgqHi+g0H1EIYiDZJOXSJ1DiZNSfB6gIzHAGLh6tlZrBxEQY5nTkA1+SmtEn7yibTUYmqUIkPrOZSsNLgshvHglwLAlEC66uIj7YGowuCdcW+Clk+mXqxQe9QR1XveaVN8WjrjzMRGgiCI8vLBGVesa6pumhf8RIbB2uS2DagDKsoPZOsb6hRBSBlg2nwJimu5X03Xq2vAuBQ+y685LMsaFkxWYJVBVlIr6k6ARbYA4dmOBPgSYpO51/PiM4qUvYeA6tLACsMl93MZE6BxQV5B7i2DlPwlEpHMNJH56sgYJ0o+vx1YIXhWovRObB4uNpddCRiw18BFLgfjPItY8m/YRc5rc8dV2SNC9zZt8lhL3yThgk4K/zZRAOLcHL1NbJwiGPJGAH7GrjwiXBlAHK0gUx5Olzvy1QHE6d/j+XBX+eFf+ySE0d2WP7D4HrfsXAZk78Orhp3ZCwtoMd7NHs9gwWUKPCBe2BCyQ7rkaP6QWUNNQo8CKlfw9VfQKmc07P03To+xevKEpQoUOID74fVYjYX3HzmuHLvNijQM1I/wFVfYiMdChb0hwQqqrqpHv/qsYRDQS0S/rK0u9lp35pMOKpvUWDmcINlEn8ZKjQXCUeDG1qCk724xMjD2zE6YaOxCTUW1UyXPOnwvQ7FKUkNecj46BFZHMd5ExWCucWnZpWg10Qiu0cGvdlbjtybxyTWkCsuT+1Sh4LdXZ+nghNnfAXQox+1aepCStxwI71IR1QZ0PV9x16uFxT2pCvDh8CZ+Iu+7uuombPR1hyTSYnTXzMWIR0qszmj9ExhzxFX/hG1zu5vg3VO0h1ZAQXB3uqRJ1JUsDt2ZmNt8DUeW0zw9HcBK7/kIJihJ8utatLRTwtR0XaluUzeHW4nozlfBhaQ4d9kZbg/VzVk4KTBB2ETcrRiuGio7knV9bK4xvccZIokLbFvD9YzpNE7X4rWJRwWTEKl+lnXXdwdwOezrK+iLFRkEaU9kJT3vg2mB1KLPJ8nw2pHRQVz2k+K3WVgPQtGO6ZYR7IivHhFnqqfKmZoUilJp5tqDnqgiFgQqny6Hy3dvqHHQLFnwQfbXPAMJ+cBJz+8Uk04M8ADt0TlVc1mImfDuG4R8mPXFAPrucStncqY5wqBsQ81JmxPTHz1OG+rZO8E/BNJSlDzpINlE/rPwrOv1GDr7aGOqWOWrj2RmY71aLVsSKxbXEpY+NYFKpOkRXpdMBs/3bdxmzU9Wo3V63ZVOCVJ+duEorWjzXSduJlOWleiRavsjrkDCa19QnfpbT7vTKfzwT4N/b1DU0+siaWGijS2cWeaMqlNdTj8OsGpapg51vbpRKczh2JuenWH8gRloGl2TUmF1/TiMSdD9g3d0x26NbsZW7LPH0gHZ8WsDss9caRu/t89+y/+eFz4asYt/ysHN2a7mr8fkfs+4z/1GaYjnEmqTgAAAABJRU5ErkJggg==", 0], ["canon", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAAAoCAQAAAAFgON2AAAFtElEQVR42u1bXY7rLAw908xSkDJL4apZCqN2KVw1S6ESS0kllhLE95CkzQ8OTkOuvoeSl5kGEnNsDsZ2vgKSTYyucXNwsHBw+LQ321dYB15CQkCgIHp4AA4WFvYDZk74FSQkAbsHFncesKg/KyEH/AoKZWKkH0E9rA6P+qOCffALaJwTwNue891obxjWiscV9QdYZgvTS4Y2rLU26CACopcIuh+tiR6fa3ZNrV9Bk5ssANxxTVCLhEEB4I5qkxWIpze1dYzb1YOWZPvIdyQa6UIl7F4x9Gn6viEYpgXIoEMT2tCGNjTBBMkYI4J6jqFGyGD6Pg1L8k4S83xuJ41myfO2RHzwOWKoUf+0Ajrgl82Q9DZQXJMwDBnMjERNUvImtCGEdkG+bTAJ9e2Q6PWIdrfliwWYOmErW5X92l3CRNHj/iqi0nVjkP2Ibl8T0SdQJhGTKEQkauMSDV2aVdvnbaU6IoSIAP+yg5YQPTZSEhN9gRsHLqVS1T91bGIiqkLFlui13hIScYinYTJnuxBAksCHBNVNrVUlzCOEZkQA7QYj0sTqiCOiNkjUMiQynefTrB6y/rACCtNnPFBPvH8BRfoFgjhnDO9VkKNxkpTVw8Kt3P+L6+J4eXv+/TuTt4n6gF0vvkT16v172vbNZuJpN/v9zQbKU6T9C5I44s+Tk9WmWTLFKOx9icwJgFy1asvyd1UfCfK442dhZanmiDNEyi8ft+FE4nCFZ71VP/8qIs+Nz7sYjUq1+ilRRUl0gliF37Pg7w5rBR6oUL0R87FkvJXbxhEoXghczyhBzhRAzbtkKmCMHCnRibQm/lQUzgAe+MXPm2FnG7WOIiHbntat1+nb5GzmnpxvNrlOZFCZSz0CGh5/8bMj0OY20U+OFpv1PJlEzb3IJ9f37icY2GQkaJ47ezG+e6q5JPq6g+BP/+ZWRte54E+RTwrMmi2K7HNnxYivhzyZI3j2GPjju8pc2RaKYAaZS67TzvGOCb6EgcEF5WhCBUpcYNBAosYjmlM7hn7iydMl+ztWXHQX/I4dfn2/aRicI1P28ChQwkS9iSLfNJmz4sJf5ITfHwy/wYVYxAWGvPGFeJM8RAGC+fvh5QPfh1s/nbp89AcTARldG4Od/bvcsYCcQG7hV/3CDNZvE9mZfQqQC/96oJ1f/KCGhUWNCr/kGjyC/R3TpTy8humUWGIFAR+3Ub7DPB1fk4GKfwk/l358LrWcyDNnjulTYYN7xF+qcT9k/cXhp9caL/SQFf41+y932D91orYbfi0OsH++TxNXlMsJP1Cv2r/ObH/U0qVs8gj6sczVHg89ZPOITv3j6t4FjFuEfoN2dDaojqAfLvwxmvG54QeueKy4WOfNYGpcSIakDi1UIe8x8N+ZyraRsdnhB50SAABcNilA49zXPm+hE0mswOIQ+qEId+l8Pma2n7GE8jR6TdXnqygFGJYVChhc4FGBDtqeI9t5lzUojoywzGy43hx68ADqnGfh00SgKkFBJukFKRic8XgmXigb07MnKWgAD4ISjgk9XPGImpsg2N+jwH1zIpUNf6eA+6oTekNDZHsEFBrcUOI+SjhSm3qBG0z/DYGCwQ0FPCpCXUflvTpz86zTiu+TqZljPnNNV4lC2xK3vqTDTqxToESsvPxKFpKc+x1i+DagWk1wHBH+cqhgFomeAmr0tiEtmd3yAQCbSueWZRfjOjW6+FyvlFPNi/jMoiypnZR6qej9cVVcV9ix7KPZ1XmvvmJUgLhW2domKvziEpl0zS4N/Pi/ZqXuf6ijbMl6GMVQlWTep+tV01WeU6lMX5XXJuqu1dsSNd8rC7NGDQnRU8vUKxki9a7/vjFFDRY/z2RjN34YbWcx1zrB8zZ6300KTeLPsAnp1OQjwhIlPBxc0tdxxH7JkOgr8Diq246WH5a6Nz5BEM9yw//bR6nTz2fdSrVDpvYfz21uF8uYyzEAAAAASUVORK5CYII=", 0], ["nikon", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAAAoCAQAAABK3eCmAAAFTUlEQVR42tVabY7jIAx92+xRkLJHQZoehZVylIyUo6QSR6ESR0nE/gglIcE2TWellv6ZTqiBF9vPHyCA+KjgQmn0h5k6UMNk8lTQQQcdVPVapdXe6kM/MsSB3GHmSMycElAq9MGFKX1cBiy91lSA+kPgGyvhU6TujUk7HfMUAaGvflUfAp8KE6kR+inTLUuaQkhy6LXMu8N3QXloNMSTBjr73hPzZngAgCElPeQoNJiLEizefFyEo5WGYr6tw8bDa+IlrL/U8ft++PgCPg4+XQ0frVu1mqNgiCcD8JnwUeb0eKo38FGmy8M3J4AV8QLm99c9WvtAatXW+ykGGp/p0Jw9n9EkgCk9958AX5l1pTGmeI1iVbORNqb/T2m+i7yrKiS88ee3SA1l81XwJD83uG9M1+OKHirNnWHhMUTdUiSxfILuFeBTZCiyh0+RQO8Nr9vQkc28Yol6ZjS4vX/QUoavRvsaaFgYtCR8dCBDkdA53i5JVHEP9v9r8BE+88RWy+NeHXJQpvs86xroaA/tZh8eHgoe3Q8gtdja7rX+CvtpE8O5OUSU9t1wTW5AFXXzGv8a8XVKwiKlg09zFLvrO4CuqNEjIf8hHeijhajkloaNpOpct8SO5f+bykIAvdajTOWY9U0sbNTvt38ixuhjzODYE6K2zlI/XCZr2i08bRY3xNFdLFON8Rf5K1tkaLKSw73ssXDa6bCLZY/r7qaDpMcOD/BNL8O3lqmmp+HdShgZDTcM+PzINdCRYDvhVZhSxcW87GDnRBta8KGLK24I3u7xRWY+3xhg0Ff56BLFrLmVIiOL9kzW8brpToKstVrIVbONoN3qBStxL5+W1D71svZZoWbjNzMoRuUC9zs6ACNb0rjjzuzQ/+BpM+3rX/Z8a2+iZ/0a7Rl5v7PINyzv69hbmUjtUyxxndY+dcqb0CWtUjrWiWtxfucKH+uDVJHrChujNrur8zxGG/Ve/8RpLxWOtJ42ulQIkNI5fUL6X9hEORS8lk0c17U5KTPuuDPOocHtQZBb+FrCk9wqD9iI4HRV1WwKmiHmGI3QXanxbAYtAdCMDn/ialQ10x+1TxHK7tExbyIH2jPl93lDLHw1uxysWBGWIYPPs+ShSHAW4Dw6Qm3yjFwIIxZn3zPOeh1aaF2mWP2JbGHfE6ZClimEXUudCrunoBjichVh3FhuVM6EKj9bPtKE7j08oyYNRzQWJtDNn2m2f0e3RmtqM35PHUrobtSQyi21fgxxvK20s6xHM/Y9M1eaVz3by7FitzEvxwk3BXrhCs+xN0EZRi/WWUZyldXsTYWBc1FlCEaos9Rl5Jnxcu54eWODwLmrO6WY0Rc1Medlyt23SRM8afZfaY7GyLDzwLD+wNhMuQHL6oMLMrUs76gXajYuEQvnkJ2o21y2u6zBZxM9Y0nb+1xGzOlTp432J8NGd2bWX3mhZmPZXHdGE7OFFudHi1HwqjM6Ir6d0WTar+q6OBc2A7CbvwbGdFd3agTT1azx0xGmOpQcynIaIfTm7tzItDGnNkMyXs6Vo+IO3namEkukTjB+mTzOF6v6UHtayXRVUMt+LuxFi9rIzDK0MYst75qmeLvZ57km5jc6liRtRaBmD53s4Mg4XhfuH08FzRkFst82jybhzTsyvzEVQUUQ21eu4tKnZvKVXPvUBS0ZQNrCzYGGofaeCEe9WMD3GVnJIfUVtycC7xv+pB0okdrqwvolb/a/8ZcQOQgpeWmmJe4XrDMVW4GmZhxN9goDE+c2pPtZKM+ypzpKt/gm5vgNeL7cJv+coeKVDF30uAPs/7/k9g+LTRwE8dPiKwAAAABJRU5ErkJggg==", 0], ["fujifilm", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO4AAAAoCAQAAABTVg4AAAAEAElEQVR42u1ca27jIBD+NuQoIzlHoWqO4qo5iqP1URKVo8QSR1nk/bFp1oYZwFbS2LHhT+XwmOFjXgwULVrdnto/2bVtLy1uVTMtqPN7v+r2EhkLkX4+DSdh9G79w7ZCi7b06EhxXHX6UtC3bXUwAzEz6AxOuX5tW0bXRuRlC40TFMYWHfR1kdYliuAbwSZnqbIorJjR+XafGF/KrFnKTFryeKDI+kfQ22Qu3OOK/eH5COWg9i57oTFgm8vU8RCO2vYbkVgnVos5Fxq4mdXozajuSDMN+n4tW5YEh32EiXmDy5cGdSbH9ATqlGC8Eht1y349wGBJxU2e46Hq+qqWlyKb8TL1zazvB+5anm8mzknJ7VrcBscV3HkYCcCiTrpOXYtbc7pnBXe6hsJ5LlXMDttVLc8pYPMB0xGL62A5xb2COxcnjyLg2qVJrnsxcHXE4pqlecsKDQ4vbHV1OnR9XXDP2A2I12l2stu1uAuT3CP2g2Cc5rGNjVBOKYsrHT9WUWYPEz7BclAAPrwoscvZp8ixdH5rnnZ+ZXrUaiHuFanjwS2i2cgpWzIFh73I7gnvQq/PqMo2T5Nc13GbqLP9unl0UdQ2ogTIdcqlwU6AgnDBu0j9NPm1PV66LhWlLa4kuXhyAn+8EyVZ2hK/o3xNlV/J6iZjXBncc9SqTtXi1jCe02Fv0JZomPgwY/fjuRkj3+rW+RZXAreeYT6XUKIK+DhcF6DuLNAXs133E451VSC5lGNxXysUKqC8ShPXNUNj3eLKUUaM+9qHGK9SuBPmLIu7gjv9wuWGKM//WcGdvuQ2Hrg6nTKYN7i0UNkl9E+qXhJcuyjZ7W/r7s2pVS3PXnL/n5Ip6LwYV45zV8mdruRW+auwmcUi06LBhXfCrHJi3MeAqyLOzjiQwqthbmEvIoyw9g+WXMNkTUiEljLJ7peSeYw1R8mlu4OLx4ILJi1eCWyUzFveOgPaMAd7mKX8laPhtb1YN1swtncA1wdN4RQ8rCJUHkgOKgOkyntN66BwnIFS5qSqwEXYzOm7Hja4PuF+AlyLfZBnKfCFBuaqPgmaeYGvcO6xSreL2HQL1vlec5BbXmXKNz5SQJlAf2WYpnuEQgZvzOP9IvGPA/zE+iUrYX6MQttNj7nIeLntJNjS/Q0ahn+XMXoh+jb9OW2CL8HmNoPVnsEO54B0F7nU8hFkUG2S+QZvCalV3t82s90Qfilznj1jJ5VQ5dF5OVVw7Er0e563eBvlwXLKmVBCdxLJ/Jt900udp9mK9+pScLwpdVzvMtZsu4/gixm0kcMvlp1nB907T8oZ83ssw/g2ukexDcY4et/qX+39HX66skTezvuukusULsS/9mamoc/Ty1/GGqsfd/FfqQAAAABJRU5ErkJggg==", 0], ["dji", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAAoCAQAAAAC7v8mAAACEklEQVR42sVYW46DMAwcAUeJ1KtEokdBWo7CSj0KHzkKlXKUIu8Hod1tbScGujV/PII9nrGdgLDz6ojoRs822VeqsNc8gPrlbrAvtN8Vx96N/++KY12ZP4GKZ5IDxM+gclB6jkCFs7BlqaY4Ui5yJ7wbxHWi8oc/2vY0MjWCsxt5Annh2VpvXq0jkGP/Mf1GZcBXMZoRIZMezyorilQPD1dGtIbEakDLriwBCF9Vd/q1Jo4tS3rRTa8EIOBV3ZNjs4W0tZgE/lkQqR4RmwT0SfzpzFYJjSk6Kk4oiknMXnTkirNYsJyRRXOG6gQCjaJovdLWb+IXvFxHAoEmVv5uHRKcmJxgrLOaXKOOZaXUTL2XOKURyklQKlElxpDrJd5Y8nPKSqhggytOqTcnI17xgYpFxlDkP2fSoykLlcqUaExPTEmw4RXWecUdzhRvxCuurvhNA1NrnGFiNnVoFFc6kSdeqUKKRhRlAUDhqFRiyzZsMNbg6bgt2RobcNk2Mh23JVt+VeOKS4Ypmd1BlWLZZzWuOCd+1aqyZqXLqX25lCNdyrcTmNflmUJoAJxFTZSNlvGurFGY65bI+0zDpWMuR4OoxcIDjmYDDiO7ia/F9/vCdc3x+03V5i1HPZwONOuL3zSjMpkwGcpXttPT0ijGd57FafR8tu9U9nYcatjPU7j9U289ZWnMqCwdR9tLBoQthz0/zk8kRQGjNL8AAAAASUVORK5CYII=", 0], ["sigma", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALwAAAAoCAQAAADut1h1AAAGHElEQVR42t1bYY7jKgz+tpmjIGWOgtQehVVzFEaTo2S0HCWVOEqivB9N2wA2mLSV9i3Rk2b7AMOHsT87zq8FZFNQABT0/RcPt/7l8N6m1xVc//Pw9xV4/DPt15JCbgCcM2MucADcyw9AQUNBo2X+/4z+LXL/AuA1DDQa4dgLgI6EwW5uyvWOdEXQLRQLeSq3R1+8N5b4VbbeazuJbxg93qPLzLA8HrtMi7RNm7/MgugZo95D0mP7qGWokPyQaxeVmXUkR2lS/iTuSz2aXb3hRx3uJzDiLNZ1bHo2xGn7wEAgqzkaI44Vkh9yzxhJTbu2ljBVV68ha3OFiWyY3vzq7sCPaCtEpZZXckRUM/izA/R9wDUAaX5o49rkYIv2wO3yyB/04Q47dgLQPeHsDAmEvPXVshsGuEp9DXq1RYZGtA8Ahhk6wwVGQhG6cXkCdg3LHnYoW0MRPXN3jacIpuiW65otqFbPO1fKDdlFE85FLXrRy7hMqzuZGAc0JLPJ3d+4GEL2VbK9Sy64rmQF2/nDnoZ1jaPItU6Ry4//zbhoLJrcOgo85Ar/INw2BbxlmEpJslqGZSzCMoqBtxnepIqw22SnVsboUuAl4m4gYDfwFAUbxZJRoJI54OObMmR62uI6xgS7mJwyuzokrkUemD8TwCvCW3xWzNjtlB5TSoNjdpV1jtWvT0hrNc1q1AvhlMNuCYbyrjZvqGWzuupyT3lW6TG6W5ViLrOmQ8JKdEWQ8br281LgQ57mcQqgaDc7VE/cI5VktBypui2FaAp8A/t26FMa2b34RuXNpwoSgiAysBIlVMwefKJElo9cw3hrxAQLDbU+rzc1sX1/p4FTCaCWXMecGLx89Gqj0T7S/OwBfsDjkgRQDYDz5iJdAqfhXg6TY0NxmZN3RRLgGQlNsAqXAKQyx6miPbjN3yGmDUx8pz/g4dBiziYM2mCaq372L8yLe6FB4lxizId04rZ9sMNmjSjVzpWlhzZHaLhImRVlajr8VOVpWhxxxJDNDb7vOMrJsJTkpa9PDKGzvoJQqmjvsV3vo3XpGKvDmvK/VCVCr1rTYhCbg/fxpqb6YDid7dabEfZRIgbvCuavoYEHPiu1/jbdNwb8P5oLIFXsbY3dqxJlHftiXBId4YPVnPAblx05+WO11rs3B2mKAdRHpFmTQHmRBB1FIb5w0InOHwLRn+jwgx9cKlm5+qt024g4T1swFnkJjSDq7nLr+kj0og863Zh8kzU4Fqe/CHjFANrje4cr18SRmCgKcaxxa6J74jjg6TNU90WYwiG80jic2N5DsIZ8Ws+LdJoP4UxecwEojEKPaDZrWOqfoZjjLqWF06StqpCvs2neOC1ritUEca841St/yVJqmxTxYYd+nvCT2Ms6B9sXWQLEoToq0ti9qJcvkOH90csGp8OuCbw40JBQOyaNtNNQ6Yid+2jdM8n1XWZ3ufl3xzCHl9jouTJ94ImcqDQeiF/NX4iYlM6gxIkDGcFtghnVrpBxq/NPAa8rr6ckLXYUaX36CiUGzWeluuobFO72eWphQlYzAnBrOqlW5/YA30MnL93OUIVXETriM7Ep2Xtfu+h4juxR2mrp8VFpKPgbq9F3D04XV4TVBeXaAEmVAV1xyFVEqkWTbGJM+o3Zd/xGVMbBzRHzokFUEjBSaHwE59igxTfSUiYuYstHbiVj0xEBTYMzzF26u2cQuXqtTpCZDFeaJpt90bCqtY/NpoJ5f9YSpitb0iNrZmdBU66mJa5Jlkq2xR5TIkMXi0MM+fsojDtMUuRkrjz+OYL0zGvqDl9PpHy/ipIpnewF5JgmlLZwm3h/5tOM5wEax511wlfYn8vSdPi9c+QX+4J8zjr9XmBo6DJzlXXJNRzOQO0zNBP7ScKeDxN0tu5rqSj1K4f7qbExgqTEwPwGcc1djLG5Wcb6rY+ZLybsWr45rUWcVlCSN4olD2xmR2+kTqwVDlfHfSMSz2OCUZP4e5GH19uOnh7fQBkoshCbusp9MRTRO3i+gWJ50+OFQ5+dK3yP6op9uJWl61dsunlX0Bl/9XedXpMAzGtlwTs/e7x95vkI0ma4lV7+U59b/gfJQU4gbSZ/PAAAAABJRU5ErkJggg==", 0], ["tamron", "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI4NSIgdmlld0JveD0iMzUuNSA0My45IDEwMDcuMiAxNTQuOCIgd2lkdGg9IjI1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTIyMy43IDQ3LjItNDIuOSAxNDguM2gzMi45bDkuMS0zMS40aDYyLjhsOS4xIDMxLjRoMzIuOWwtNDIuOS0xNDguM3ptNy44IDg2LjkgMTYuMi01NmgxM2wxNi4yIDU2em0tMTk2LTU2aDUzLjV2MTE3LjRoMzJ2LTExNy40aDUzLjZ2LTMwLjloLTEzOS4xem02NDIuNiA2NS42YzYuNi00IDExLTkuNCAxMy41LTE2LjggMS45LTUuNSAyLjgtMTEuMyAyLjgtMjcuOXMtMS0yMi41LTIuOC0yNy45Yy01LjUtMTYuMS0yMC42LTIzLjktNDUuOS0yMy45aC03OC41djE0OC4zaDMydi00NC43aDQ1LjJsMjIuNSA0NC43aDM1LjNsLTI1LjYtNTAuOHptLTE4LjItMzAuNWMtNCA2LjItMTEgNi43LTE5IDYuN2gtNDEuN3YtNDEuOGg0MS43YzggMCAxNSAuNSAxOSA2LjcgMS45IDIuOSAyLjUgNi4yIDIuNSAxNC4yLS4xIDgtLjYgMTEuMy0yLjUgMTQuMnptMzUwLjgtNjZ2MTAwLjhsLTU0LjktMTAwLjhoLTM5LjZ2MTQ4LjNoMzJ2LTEwMC44bDU0LjkgMTAwLjhoMzkuNnYtMTQ4LjN6bS01NzAuNyA4NS45LTI4LjktODUuOWgtNTB2MTQ4LjNoMzJ2LTExNS40bDMwIDg5LjJoMzMuNmwzMC04OS4ydjExNS40aDMydi0xNDguM2gtNTB6bTM2My4yLTg5LjJjLTI3LjggMC01My43IDIuMy02NC41IDI5LjQtMy44IDkuNS00LjQgMTkuOC00LjQgNDhzLjYgMzguNSA0LjQgNDhjMTAuOCAyNy4yIDM2LjcgMjkuNCA2NC41IDI5LjRzNTMuNy0yLjMgNjQuNS0yOS40YzMuOC05LjUgNC40LTE5LjggNC40LTQ4cy0uNi0zOC41LTQuNC00OGMtMTAuOC0yNy4yLTM2LjctMjkuNC02NC41LTI5LjR6bTM1LjIgMTA4LjJjLTQuNCAxNC0yMC4yIDE1LjktMzUuMiAxNS45cy0zMC44LTEuOS0zNS4yLTE1LjljLTEuNi01LjMtMS42LTE1LjktMS42LTMwLjdzMC0yNS41IDEuNi0zMC43YzQuNC0xNCAyMC4yLTE1LjkgMzUuMi0xNS45czMwLjggMS45IDM1LjIgMTUuOWMxLjYgNS4zIDEuNiAxNS45IDEuNiAzMC43IDAgMTQuNyAwIDI1LjUtMS42IDMwLjd6IiBmaWxsPSIjMDA1Y2E5Ii8+PC9zdmc+", 1], ["gopro", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAAAoCAQAAAB3T4HAAAACqUlEQVR42u2Zfa6iMBTFf1qW0kSX0kSXwuS9pXQyLKUmLIWXsBTInT8siMpHp4JvJtNLSDDpx+F47u25uhMA0BgMGs0tFD/5ZKswOBRt0Nia0t9bhSBanDQyFpWw2WXlT6MRJ3obNJn/VgBaoPb3NQq2jy/KhREaMCgUJwzHLTSRYVG0KC4Ui4CW4epRSTMBvUVRBiWexnKiRWE5z+xbRqLqBfeK3Iw4qaSRZjS5GmmkEif5U1I0ImID98j9+GGiarH9vtfL3c3oUI1juqIygoAf9AoNLji7q8EuMTTc16t85AWrnqAqGJUTMl8X4sNy8gIvqEfFr9EYDsABx/GFvdoBWsMv/3QZCLxLCsehrzzTqHIUcMK+nhShaqr8OBOphm68G2iwEXlItS5J78dOXbpDnwWVJz1SYOq+AA0/z539h+DVx9RkAPVweina2bK+jMmjygJtzrM8sxXOKQUYqoBR3a6fL55mkwdm/PG4zvmtgmpCDZQUW/nIZRpKjpheRIaP1e1TsSDcOefxRjXUA6C1r67rRIu6W/3bYn/ntkIaIhVYfv6pyLh4k+ooFno4jSHvLfCw1rYcsDOZ21X6d9FXe4eRz/alGsvhqsid6N5q0DdYS8Xsi3O/+HNrNubqu7k/+hSwfPhe5hz1qo4T0E60WravYcuoWo6dLa0mWu1nL149GRYz2ag/tslmpNF2kbatM8t60nxX4c37ToYmRc/2Y8xIbHp27VPn0WBpLBqinYDBwkJ/qjEezxQqv/eNhv869omCREOi4dE3VFHzNOdBaXOYCD+g+Rw4SEsetUYxKJI5NmqNMptof8N+ebw9q6h1/po19oH/FIT0B++Pdi0c+9UaJfUNNKi1cKQSmWhINCQaEg2JhkRDoiHRkGhINCQaEg2JhnXiN540MrNUg8GCAAAAAElFTkSuQmCC", 0], ["insta360", "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2Ny42IiBoZWlnaHQ9Ijc3Ny4yIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxnIHRyYW5zZm9ybT0ibWF0cml4KDEuMzMzMzMgMCAwIC0xLjMzMzMzIDAgNzc3LjIpIj4gPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzM3LjYgMzAzLjIpIj4gPHBhdGggZD0ibTAgMGMtMTAuMi0xMC4yLTI2LjgtMTAuMi0zNyAwcy0xMC4yIDI2LjggMCAzNyAyNi44IDEwLjIgMzcgMCAxMC4yLTI2LjcgMC0zN20xNC41IDUyLjdjLTE3LjEgMTcuMS0zOS44IDI2LjUtNjQgMjYuNXMtNDYuOS05LjQtNjQtMjYuNWMtMzUuMy0zNS4zLTM1LjMtOTIuNyAwLTEyOCAxNy4xLTE3LjEgMzkuOC0yNi41IDY0LTI2LjVzNDYuOSA5LjQgNjQgMjYuNWMzNS4zIDM1LjMgMzUuMyA5Mi43IDAgMTI4bTI3My44IDUxaC0zNS4zYy00LjMgMC03LjgtMy41LTcuOC03Ljh2LTIxNS41YzAtNC4zIDMuNS03LjggNy44LTcuOGgzNS4zYzQuMyAwIDcuOCAzLjUgNy44IDcuOHYyMTUuNmMwIDQuMy0zLjUgNy43LTcuOCA3LjdtMTgwLjctNzBjLTQuMiAzLjUtMTYuNyAxMy45LTM5LjcgMTYuNi0xNS40IDEuOC0zMC4xIDQtNTUuMy0yLjItMjUuMy02LjItMzcuOC0xNS40LTQyLjYtMTkuOS0xLjYtMS41LTIuNS0zLjUtMi41LTUuNnYtMTQxLjljMC00LjIgMy40LTggNy43LThoMzMuNmM0LjIgMCA3LjcgMy44IDcuNyA4djg3LjJjMCAxMC44LjIgMTQuMy4yIDI2LjRzMTQuNSAxNS44IDI5LjkgMTUuOGMxMi42IDAgMjYuNy0zLjggMjYuNy0xNS44IDAtNi43LS4yLTExLjctLjItMTYuMnYtOTcuNGMwLTQuMiAzLjQtOCA3LjctOGgzNC41YzQuMiAwIDcuNyAzLjggNy43IDh2MTAyLjJjLS4xIDIyLTMuOSA0MS4zLTE1LjQgNTAuOG0yOTMuMS0xMTcuNWMtMy40LS42LTcuOC0xLTEzLjMtMS4xLTcuNi0uMS0xMy42LjMtMTUuNCAyLjFzLTIuOCA0LjktMi44IDEyLjFsLS4yIDcyLjNoMjguM2M0LjMgMCA3LjkgMy41IDcuOSA3LjlsLjEgMjUuOWMwIDQuMy0zLjQgNy43LTcuNyA3LjdoLTI4LjJ2MzcuMmMwIDQuMy0zLjUgNy44LTcuOCA3LjhoLTM0LjZjLTQuMyAwLTcuOC0zLjUtNy44LTEyLjF2LTE1OS45YzAtNi42LTEuNC0yMiAxMC0zMS45IDExLjQtMTAgMzAuNi0xMS4zIDQ2LjYtMTEuMyAxMi42LS4xIDIyLjcgMS40IDI4LjggMi43IDMuNy44IDYuMyA0LjEgNi4yIDcuOWwtMS4yIDI1LjZjLS4xIDQuNS00LjMgNy45LTguOSA3LjFtLTE1NiA2My43Yy0yMS42IDIuNi00MS42IDYtNDcuMSA5LjItNS42IDMuMy00LjkgMTQuNy0xLjUgMTguOCA0LjggNS44IDI2LjcgNC41IDM5LjQgMy4yIDE1LjktMS43IDI4LjctNC45IDM2LjYtNy40IDQuNy0xLjUgOS41IDEuNyAxMCA2LjVsMi42IDI0LjJjLjQgMy41LTEuNyA2LjktNS4xIDguMS0xNy42IDYuMi0zMC42IDEwLTU5LjEgMTAtMTIuNCAwLTI2LjgtMS40LTM5LjctNi0yMC43LTcuNC0yNi42LTIxLjktMjcuOS0zNC43LS42LTYuNC0xLjEtOS41LTEuMS0xNy45LjEtMTMuOCAyLjktMjQuOCAxMC42LTMyLjEgNy44LTcuNCAyNC44LTEzLjEgNTAuNy0xNi42IDIzLTMuMSAyOC41LTUuOCAzMi40LTguNiA1LjUtNCA1LTE3LjggMS4zLTIxLTYtNS4yLTIwLjItNi40LTM3LjMtNS4zcy0zNS4zIDYuMy00NiA5LjljLTQuOCAxLjYtOS45LTEuOC0xMC4yLTYuOGwtMS42LTI1Yy0uMi0zIDEuNC01LjggNC4xLTcuMyAxMy43LTcuMyA0My40LTEyLjggNjYuOC0xMi44IDI1LjggMCA0NiA1LjMgNTYuOSAxNC43IDEyLjUgMTAuOCAxNC4yIDI0LjMgMTQuMiA0MS43IDAgMTMuMi4yIDI5LjYtOC40IDM4LjUtOC44IDguNi0xNy43IDEzLjktNDAuNiAxNi43bTI4NS43LTY1LjNjLTguMy01LjctMjAuNy02LjctMzAuNS02LjhzLTIxLjUgMi4xLTI2IDYuOGMtMy44IDQtMi40IDUuMi0yLjQgMTEuMSAwIDguNyAzLjggMTUuMSAxMi41IDE4LjUgOC43IDMuNSAyMS40IDMuNiAyOS4zIDMuOCAxNC4zLjQgMjQuNS0xLjUgMjQuNS0xLjV2LTcuOGMwLTE1IC45LTE4LjQtNy40LTI0LjFtMjkuNiAxMjYuNWMtMTQuNyA3LjUtMzEuNCAxMS4yLTUwLjMgMTEuMi0yNi4yIDAtNTEuNi0zLjQtNjYuNi0xMC43LTIuNy0xLjMtNC4zLTQuMi00LjItNy4ybDEuNC0yNWMuMy01LjEgNS40LTguNCAxMC4xLTYuNyAxMi4zIDQuNyAzMy44IDExIDU0LjMgMTEuMiAxMy45LjIgMjAuOS0xLjMgMjUuOC0zLjkgNC45LTIuNyA2LjktNS43IDYuOS0xMi44IDAtNS44LS4xLTE1LjQtLjEtMTUuNHMtMjQgMS43LTM1LjUgMWMtMTUuOS0xLTMwLjctMi45LTQ3LjMtMTEuMy0xMy42LTctMjQuNS0xNi44LTI0LjUtMzh2LTIyLjNjMC0xNC44IDktMjYuNiAyMS41LTMyLjggMTMuNi02LjggMjguOS0xMC4yIDU3LjEtMTAuMiAzOC42IDAgNjIuNyAxNi4yIDcwLjUgMjIuNCAxLjggMS40IDIuOCAzLjYgMi44IDUuOXYxMDIuMWMwIDIwLjgtNy4zIDM1LTIxLjkgNDIuNW0xOTQuNS04Ny40YzAgMTAuOC01LjcgMzAuMS0yNC44IDM2LjQtNC44IDEuNi03LjQgMi4zLTkuNiAyLjMgNS40IDIuMSAxMC43IDQuOCAxNy42IDExLjUgNyA2LjcgMTAuMiAxNy4zIDEwLjIgMzAuNnYxMWMwIDE5LTguNCAzNS41LTI1LjEgNDQuNS0xMy4yIDcuMS0zMS4yIDkuNC00Ny40IDkuNC0zMy4zIDAtNTYuNS05LTY2LjMtMTUtMi40LTEuNS0zLjgtNC4xLTMuNS02LjlsMS44LTIzLjdjLjQtNS4xIDUuNi04LjIgMTAuMy02LjMgMTEgNC43IDMwLjEgMTEuNSA0OC4zIDEyIDguOC4yIDIxLjQtLjIgMjcuOC0yLjggNy4yLTIuOSAxMS43LTkgMTEuOC0xNS43LjEtNy4yLjEtNi4xLjEtMTAuNiAwLTkuOS0zLjYtMTIuMy02LjgtMTUuMi00LjUtNC0xMi45LTUuMi0yMy02LjQtNi40LS44LTIxLjktMS44LTM1LjItMi4yLTQtLjEtNy4yLTMuNC03LjItNy40bC0uMS0yMy44YzAtNC4xIDMuMy03LjQgNy40LTcuNCAxMS42LS4xIDI3LjUtLjMgMzkuMS0xLjUgMTYuMS0xLjcgMjkuNy02LjEgMjkuNy0xOS4zdi0xMy43YzAtMTkuNi0xNy4xLTIyLjUtNDIuNy0yMi41LTE2LjcgMC0zNS44IDcuMi00NyAxMi4zLTQuNyAyLjEtMTAtMS4xLTEwLjQtNi4ybC0xLjktMjUuM2MtLjItMi43IDEuMS01LjQgMy40LTYuOCA4LjMtNS4yIDI5LjctMTYuNyA2MC0xNi43IDIxLjggMCA0OC45IDQuOCA2My4yIDE1LjMgNS4xIDMuOCAyMC4yIDE3LjkgMjAuMiAzOS41djE1LjljLjEgMTIuNy4xIDUuMi4xIDE0LjdtMzA3LjQgNzkuMXYtNDguOGMwLTE2LjEtLjItMjMtLjItMzQuNXYtMTEuMmMwLTE0LjEtLjktMTcuMy03LjYtMjMuNC01LjktNS40LTE2LjUtNS41LTIxLjgtNS41LTguMiAwLTE1LjQgMi4yLTIwLjcgNi45LTUuNyA1LjEtNi4zIDEwLTYuMyAyOSAwIDExLjctLjEgMTkuNC0uMSAzOS40IDAgMTQuNi4yIDI2LjguMSAzOS43LS4xIDE0LjkgMS4xIDIzIDkgMjkuMyA1LjUgNC4zIDEwLjQgNiAxOC42IDYgNy43IDAgMTcuMy0xLjggMjIuMS02LjEgNy4xLTYuNCA2LjktMTMuOCA2LjktMjAuOG00OC4yLTQ4Ljh2NTdjMCAxOC45LTEwLjUgMzktMzAuMSA0OC43LTEyLjIgNi4xLTI5LjIgOS42LTQ2LjkgOS42LTE4IDAtMzUuMy0yLjEtNDkuOS0xMi4xLTE3LjQtMTEuOS0yNC4xLTMyLjctMjQuMS01Mi4zdi05OC4xYzAtMzMgMTEuNy00NS43IDIzLjItNTMuNSAxMy44LTkuMyAzMy4xLTE1LjMgNTIuMy0xNS4zIDIxLjMgMCA0Ny41IDUuNyA2My4yIDI1LjEgMTAuNCAxMi44IDEyLjQgMzUuMSAxMi40IDU1LjktLjEgMjEuNC0uMSAxMS0uMSAzNW0tMjI2LTY2LjFjLTUuNi03LjQtMTguMy05LTI4LjEtOS0xMCAwLTE5LjUgMS40LTI2IDlzLTUuMyAxNi42LTUuMyAyOC43YzAgMTUgLjEgMjQuMy4xIDI0LjNzMTYuNyA3LjIgMzIuMyA2LjhjOS4zLS4zIDE5LjYtLjQgMjYtNy40czYuOS0xMyA2LjktMjYuMWMwLTExLjgtLjItMTguOS01LjktMjYuM20yNi4zIDkwLjdjLTkuNyA2LjItMzEuOSAxMC42LTQ3LjYgMTAuNy0xNy41LjItMzguNC02LjEtMzguNC02LjFzMCAxMi4yLjMgMjMuN2MuNSAxOS4yIDI4LjQgMjMuOCA0Mi43IDIzLjcgMTQuNS0uMSAzMC44LTQuMSA0MC42LTYuOSA0LjUtMS4zIDkgMS45IDkuNCA2LjVsMS43IDIzLjVjLjIgMy4yLTEuNiA2LjMtNC43IDcuNC0xNC4yIDUuNS0zMS45IDguMi01MC40IDguMi0xMC4xIDAtMjguNiAxLTQ3LjMtNi45LTEzLjgtNS44LTM1LjYtMjAuNi0zNS42LTQ3di0xMTMuM2MwLTEzIDUuNy0zNy4zIDIwLjYtNDguNSAxOS4xLTE0LjQgMzYuNi0xNS41IDU0LTE1LjUgMTkuMSAwIDMyLjEuNCA0OC4xIDguOSAyMC40IDEwLjkgMjguNyAzMiAyOS4zIDU0LjUuNCAxNSAwIDIxLjYtLjggMzMuOC0uNyAxMi4xLjkgMjguOS0yMS45IDQzLjMiLz4gPC9nPiA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNzQuNyAyMDUuMykiPiA8cGF0aCBkPSJtMCAwYy0yMy4xLTIzLjEtNTMuOS0zNS44OTktODYuNi0zNS44OTlzLTYzLjUgMTIuNy04Ni42IDM1Ljg5OWMtNDcuOCA0Ny43LTQ3LjggMTI1LjQgMCAxNzMuMiAyMy4xIDIzLjEgNTMuOSAzNS45MDEgODYuNiAzNS45MDFzNjMuNS0xMi43MDEgODYuNi0zNS45MDFjNDcuOC00Ny43IDQ3LjgtMTI1LjM5OSAwLTE3My4ybTY1LjggMTY0LjYwMWMtLjMuNTk5LTEuOCAzLjc5OS0yIDQuMjk5LTYuNCAxNC4zLTQuMSAzMS43MDEgNy4xIDQzLjguMy4yIDEuMiAxLjIgMS43IDEuNy4zLjMuNi42LjggMSAyLjMgMy43MDEgMS44IDguNi0xLjQgMTEuOC0uMS4xLS4yLjItLjQuMy0uOC42MDEtMS43IDEuMTAxLTIuNiAxLjYwMWwtMSAuNWMtNTguMyAzMC4zOTktMTI1LjEgMzguNjk5LTE4OCAyNWwtLjItLjMwMWMtMzIuMS02LjQtNjIuNy0yMi04Ny42LTQ2LjktNTQuNy01NC43LTY0LjctMTM3LTMwLjEtMjAxLjkuMy0uNiAxLjYtMi44IDEuOC0zLjM5OSA1LjYtMTQuMjAxIDIuOS0zMC44LTguMS00Mi41LS4zLS4zLTEtMS4yMDEtMS0xLjIwMS0zLjgtMy43OTktMy44LTkuNzk5IDAtMTMuNTk5LjktLjgwMSAxLjgtMS41IDIuOS0yLjEwMWwuMS0uMDk5YzU4LjctMzAuNjAxIDEyNi4xLTM4LjggMTg5LjUtMjQuNSAzMiA2LjM5OSA2Mi42IDIyIDg3LjQgNDYuODk5IDUzLjkgNTQgNjQuMyAxMzUuMTAxIDMxLjEgMTk5LjYwMSIvPiA8L2c+IDwvZz4gPC9zdmc+", 1], ["samyang", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAAAoCAQAAACrtvX3AAAGhElEQVR42u1ba24bOQxmmh5FQHsULpqjsNgcRcX6KArgoyjAHEWG9odfevAlO1h4AWtQIOloKIqfRH6klJcKXUNAQAjwCgAH2GCDPexhA70FCJef9+Bp5y82Q/ZV8rUnNu/3br3Gkfw6oyDhFmnhZN+jhY823sPeaTW91etDNVeulZpqqKA87XdR7Xl8Qi2NbLkfNpLj8mjXUWot0wyKUwo2MqLLAkGUlLpR25ZddlOf64+paq1UEoVQrZ3R7GGxk40uA6UGoqpANM+oMGD1Ome3rmRqKmkURRg9Nl6AMhuDaNMdFwGaw1LXP7mMmIURPV8XdZHoOuNgiXADlMGwrz0bN5Rpgq4Mayi73JhXnegyj9yrHxPNHU136IyTK1yFEs392MsPt0OJw6TwMuFz9MxuWCynt7KPtZ0TDeOS+p7T2Qsl72RlKAMDZKn58pTJ/5XboUwqAUiGaM51WCHcsycsExbVuPqu5XYJuaHklqoMZZ52HXU9sNKgT7wdyrxEWayJWru4py3yuNFYIKR8r+9ZWtIZXRFNgjI6iU0UCdoClK0DWA+6Eu/FRfjRsduTMwWyImkSqB0uLFZyQRkWAg/eB+QIZV78vM/ckpP6kGOdo2PfkGAmXQ9Z57gApexGJU1sBoH3JiM9Ucalz6kzmp6S67uimO6Vk8nlnWiYL3bgBTMjRlfawENZHLH4y5557awMORL+5FI9O1xWdrltZBykVQsaF24yFjIOSRrfm4OS3Ozhy6Akg2N56Euepp0d/LUIcbqXXJTlkYYRydiTs4a0wKRjt6db+RyU8b/ck+cSQRaqgsGd6EdhzevxtTVNYSWXjqpHo0BB5p7kYmNxgX8mJYWFnoMyOeqyXw6lVI8oNSvRszCqRpNGUAc2sdDnbudkdddEsWriLbDrOuPwlliXz0F5T5K3/gTuDMJXSuIjQTBdbOwWAJcK4bAPsxseK+UnszyfTShnp34rlOlUIOUf7RSG6588h1x8ziVRHItGpGGCaZpwHHZ7MngxuRP+bJIWnVpFZvHEO6DUWnQXSk+jes/UtMpiEaeeVHPOtIPMHujkxBYXzY7dKkHJOVkdSj5W3gKl5INihe/DSfTxPBuBAE/n3Mf2ChHemt+pebuH0Jy0A3zCj8v5e1DO7rfT14eLLIQd4OVrgF3T7/w913bwT/f7B3sq398+CN3tgFYHu+0A4dfltwg/2V5bM5Mg3EA4dFbuv+ZaZPsf4L2/RTDiH5UkPovZVlHP57k13rvYOK3voHJYTp9g0jRNZzI1np1sMvLKtLwraaFcQf0tArvEhqbItWIbMv9HLMmxS4uWW5eK6LbOKCxMmg6nRiit6lesuabm6cNEcBdX8nghxC6yoXM9aVErMsr2U67qbR4PlPEGkiGTPFlyMquzeelA3iqwRF3bb0ZU2DNxKrjiyTWqAhvrDk1U2DcxGYZI2WsRhGhp3/Dz6/zq7PvezEGKqdf2C6KhYVJvEobBkj27ATChDEwgxin0fsIH/IE/8AGf0/Swk8FfZuRIymfzfmvMfBuUtKQzuWRu8G5C+dn89rcCZoDUaHjoFoFNeLrLk0lwAMUg2XWqB4XpbhmxyXgyKDYJroducrCrOqNTcjbSNpzOU4JxSZR3xminLK3Xn4fh6hr91UUp+8ms35chSapBbA6L7uKbdPYThMimS54X4UhwInM8RjWcHmQKM/qFE5GgjclArHgaIg6fk7vKKldQ5GSf3DcG0g1QJqfOnA+y9ns0gUgDnZNuNcqVNfIkLEcjlWkQGX/f8TIPeXTfSyMRjLwMZbhLZ5sbZ3NPrTB+Wk1Czs832E0Vh1eGIryxVZ7Nyd6QqaRsA4XYN6z2MBGh7fJW57AHtsrzevl/Xee9UBuSJB/bm8lk3+C3i0gd4C+W8Pxg+77NfzNi3Z1OC8VyveBenPfgsnE0tlYiWLnwMvdFh3OOZnKvnz1plEipuvJ/aEDT5drzeSUNYs9PdqS8pebTv3RaMvIRTvuWWFny2+v7PMle05lOMq46ypKlA6ugWIQ/rNCO+e1CxOl5qX0G2P8R3DY5umCUe/Ws1Po6KG+9387vb9V5W/reO0o4lSuCYuUWk8Tmk79nR/xS4dkeuGU2Tn5yZzHfntZ64EYskMBXmZ678pFbYZ3rx8Rdn7vywZtddX1C+b9o0knITqJVTwf7qC01V04MwvPclY/ckAUSmFrQpX1/Wu1BueuByY/3GpT/ApdJNmU1QxeQAAAAAElFTkSuQmCC", 0], ["viltrox", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAAAoCAQAAABNnz6zAAAF4ElEQVR42s1ca27kIAy2kh4FaXoUpM5RWG2OkkpzFCrlKIyUo2SU/dFuNxgw/iDtNvnVAZuHXx82Ke1h36LX7QS8llH7qHWO2gJr26NWUx1rZmNh75G/A+jCPu+2MjOzu2Qf85xyq3TCTGt9/ftGHh8PCTBEtHzwuDWo2/Kv39ufrZOTF7bVsbXI85gz4t+iPrNoLmy/abfJEEYtPi58B0xsg9UmdAjQd3MKhX2ZGzjJqrmpd8DuVPhZ6T5l27WCeLlw646bUyDWFytPC6et4CVcEydkp8p+w+30LsBWJxoqlssXZ4S2utK4veexwnbpn/k0pXLiXnqFpX/0eSKihX7T8bGkeTxdor+vtLIeMZ9H1G6Etvyz0mv2dxvN40FLlpc09lIc3bI1OppY+6jk5VhPR7fo7yUayZJhfCyT0f1zJpl4pLEHq7BaCaZ4GMLo4jAOhjYo7lrRB1khAMj+SsYLJgEvnyPlvasH41FQ9JlBl9GGg8PJFHJ0QoBYLWh4tbpHsxiIiJg5cyeTPnPkEB7MsfzlMQpOzBTbsIdzWlQ0eopVoOW7hHHiTyyDyyEAzfQStb0d+w4fQz+K5Dl//sKGXqrbFC+PC3fpEOAIqoKFKIwghj5OlOzPg+1yKfpdj38OhS20wkTmQjiVIYwW3qACJFAVMApZDZFV1Hvf2B4ZIjLkGd01JsIF6Jn7vKomvAo4sMeF4qqAUeiR9ApxyvWObXAkm+w20cTphoIBXwomPzNgPRWmLccmPG6RUk3OppB6I5w0KsuPIC7Z7bcErXwKcK2c4vL+OMNQBWEu/w3CYBRSb3OiKpSAjBj9YgGmS3FZ+6Mq+qx7fDxunQdhDAg8JDVEgJhV9b4xP0j1YDUUpJ9qmN591tEbnWaBBAuQIAGWVQ2LpVrAU1aDwm4Ph6Xco5aRTVHvPmshG0+jnQdhsLElJI1BGG3v0p6Wd7ueLs1mHbZKtmNTF3O+NwuDpPDkfBO2Cn3OJqgKUJ/vU2S+v5OTyJo9PFDx8FCPD1+XhVlhm10/+Ngsd3faKpDIu7BAJR3VmAWWU7euUlZB8n662pfmNTCnEsWmquMZYRUWyqhawO4rl1wGMYQ6KPciFWy+PgISfIj/RzElES4XndqBGNKb2z2JWINkTdlUhdu+QpI5qZCkuxZVoqhdsvAdsRQpYLlKMTp55WC77xZ2nxiECT+kkGTBi0gYhNH2zlf4PSJAn+CfDd4mK9x30d/A6lOTXsXaxauA2Cr0vYMi+ooxMPW3F2XqujV/0YNB0ZKUnAGakoPzMz3Tc/YAfV4+Jy4TXLK/j1Jxb6hUpVTZgI402vdCGGkjF5bIcMJxuycdUFI1XmWtpTULApQ0+a2ChzRZByvg05402hlZmIn5Htcpkvy490KfWeAgFdjV1/f0F35/KoSpI0cttsTG1vQOyQlVGeGHSlnxmHtZlZYxqmtoPZVA3BXXcydxNaBsg2eVpErR7zW5pmL1LjTv+V/Vm63P4H9vGk1DsbBVzg2xFIcwLrm0NCVwciwp06DKiNdzL7oKwXkY1DZgUA3FpNi2vpJUWjjPV1lTUKUW4FJZVjuEOS+NhnPSlZ5WelPYYE9JakmqrPygtmblYAqXXBQhdT7teH0ehPFfVkiqH7ulbz5QCOOFPJcqAVDPGQawQrD1TagJg/pTKWo5VgukuuREpIMyrlutHpirDOpyL9rYNIreX36OAAO/FoVQ3KKKwJh80rLQPeL2QqEQUU1yOF+E9aeXlm4R/Zh8ElN0oe/6ujVU6yTt7ftAzDVX43CKmg22riRUCgcNfmMo6jvRqM69tEAY7Hl0XovCKG7siu2ctN8VFcR0DVN09ov90a+sFS/JHQmlBVrwY2uNxvR9424aPxBro6jXGgO8Apv8i4d6HD3ihqxHlNAkftkB+Sq+x/l8JYTRF6tmYEVevFYS2hNxT0WDvzYkugxL1sZXKXpOfUtxFKMsJGEURFN0dDaZ+U90I1c8n8Xwi2d47upz9k2exx+FUBEy+9HQsAAAAABJRU5ErkJggg==", 0], ["zhiyun", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAAoCAQAAACGRNpNAAABpklEQVR42u2ZQXLDIAxFNcBRmImPkoUPk6P0MF7kKCw4ihl30abFjmSTAILW+t5kCBHKsxACYJmTHrfA9+PQdrtpn4j+x/bnJdb8Y3/dTo1L+TlF9pP8MaDhVcW/sNGnlHZKFt4VZZ/yB9L8USBCJWAEjIARMDVlICSsPTny0YqwtRmiXq0UcN8MDGj3K3wUQjNGS+a0shmIsXmxDKhvYNB3ZYthiWPBg4cL8V07edwThWJxxbCs7dpuU4o9BvMqln7/bGbyTcES4EamaFc4WXcJhsIy7GQD/T8jRmViOUGBR2EZz4jldypJtKAR0y8W3xJMz9HyqH0s/1TKxRKqrk4aHAzPBTsHmFwsXz1rVcuPSklzl5UqexL56llFIz56jhzTV265kQch6yKCGUz7uuUOwwEallenEMfaHwTsoWGK6D6PNmk0bBO91zNfHA1j/uv3MNzDuEHDmv96viW4P6FizH9yfdIFGP+XwdQsti3DWIU2nQbdmeCrxHty5IVbPJYvdMd0KXUGbZCdSek3qHc2iOVjR9eaSiIBI2AEjIA5ORjfboRPSbNZHMWGiykAAAAASUVORK5CYII=", 0]];
  var LOGOC = {"zhiyun":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAAoCAMAAAAbk+L0AAAAYFBMVEXjWGTQIi7nl5rYFCHgdoq8CBn7nc7kKkx/CQnTLTixTVjp6el/AH+ZzMzZChgAAADYEB36AATZFSPRBiXgChfXCxr/AD/uU1fQBhn+qanfPz/ZPkfpKlTPKDHUf3/ybHgGs/0aAAAAIHRSTlMTGwnbDgYFGwJKCAMCBfwA9QTsEf/dBBcPCxgbDDcMFG0iH1EAAAJoSURBVHja7djrdqMgEABgKLWadpdhkBizjbvv/5YLKjch1kpbT8/p/EjRjvpljIAQycUiOHsAqNjc/gdA5hzW6DZL8gV7NjljU4oegMp5/xPAK+NjnHVOdZ7a7AWglSK9LuFJKE50sv5jQhqMmPd3uj3vX+Zf7JbBzE2pv9QfoaacmzunklcAzF433cnPI4Y7zEXM+zsHi2MVM2/cgnPmMTyHUXcw6gfzfTB3fvAfgwmfrS2Y6TG3h0+PcAkmPBsJ4vQ2BqfM2v532gTcjRnPIPzttjGILAaRBJgptQ8uZ6IA81t3jK4yDZr4RbVF5fqZx7gyMOY7DDFbTVFlEF95XJnK1UVflF3RH0hut3pRGfSVebR7dmP+hpVJLFwMULsDuQiesi/BLC3oKxM98l+BSSxwHGZp6eA4zNJSwXGYLrlHJRjFmwYLKkNTS0llBoDTbgx1fZ29R2UYVp/YbkymLiFG1oh0Q6fnRnMl3Ld7P4andYkwD34OvILR41c6N2bXZicmqEuEyQyUKUZ/DstZlxp78l2YyBJhFgNlHpNqlKxNT74PoytQgllqlKD6ru/F1GWVAd1xD2xh2Y0hpRitoU4zWQ7EQOu6O23p4FgMYmV7PkAswqCPNQym007/G7aj0tl1hh6DuB1zAdhamWBCfo2PcpinBFMHgLefptZGT1/uYwjtdYobl4k5gG7ACNq2w/bhwIdZn1l5iUvzib30SmWCeA9mXp+593qbXZ/5NAzf8eL/eZX5wXxLDFlfnynCiAiTLoEKM7uzy6fmxd/msMq3o3yHqeQUunOw09FMvlmS7X2mzpnjP60YSAR7OnZLAAAAAElFTkSuQmCC","fujifilm":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO4AAAAoCAMAAADOgTa5AAAAYFBMVEX//v4AAAD/////////////////////Ejz/////////AAD/VX//AH//ETv/Ej3/E0D/AFX/Ez3/VVX/AD//Cjf/Dzr/Fjf/Ejz/Ej3/Ej3/GkP/P3//QGP/Y3//4OoAAABpSCujAAAAIHRSTlP9AATNSpGs+XMsAQYCutb/A0gEBKvtFzdslSYEfhIZAAKUNlIAAANvSURBVHja3ZrXltwgDIbNTxlwsnZ20+v7P2ZwAUQxGWew5xxrr8YU6bMsEGg7JlRXFM5g/4T/beyvVehjhMdpG1+b3rPXYRhut9twe7E/lm6A5mXFclIM41vFMk3hUVBK2jpNGsESLaLrariyjKsquDzF7fthvM0yDh6XzFzCJc0Ol+luE5cYNI8v+GW1qTEuy3B79u7mxHnXjurquCrHlRVcHhvuvb6JdyTukOOKbrd378QNJtVeqp3EUEGiorF3Ka4WVMyjuCLgbr9UG+KZnIMr6op34+qAKyvORSyn4aKueDeuCriV0BWZ4Wfh1hXfjctXqzjciCV0ubwkrhKxqU6JFNf0Lso7tdDXxHWqpRuxmImr4kq6VvnQZc/CHV/YhyNxBZ0RzCzwz/LuOHzt+yNxQW11oas3vHv0vju+fGG9S2a3990HcJ1uveCq1fAirjk4qxq/v62fsqWlJrBGWZXFlTTtXs4HHGVcriIxrU9E31jf+9Sd7vxSUxGLZ/4PV7hEAz50JSvjZs5ui/vKPgZata1XPYKLYFUI3dNxh3H4wd78gmBqeh/B9UmymHCli9GTcX9+/tTT+5TuOFzp1yq40N1QqGQkaIf7+xfwZ112gSxhj9cM/RCuCO/M+FXr1JWZfryKue1GkGuTZiuzv76YfCr8nnTqvpvgrr0Ibrt9F94yw3zo4twkMsXNvYtm3vVoIuy6T8ZNk8i2uMYnGj56rozrgjeE7oVxg2nwoXtt3JXNKBe6Z+Gqp+CuypbakGLHLlXuHPI8XHTJlfMeXP0PXI50BNLr7VNx4+rYmgnfjytoFlK4xVZZ6TErkR6BiwougePYiYtCHdEmCVuDEDneoTXH1SxOwyJckx037sWNdLh8CIw+nLURzXkR9gDcPIQILpJq0R5c4kjuzhBGFSvlc3+Zfw3NcKnV5Og2n209bhS8ZidufGXIpRZCq7T4BDOVSm2LpE1Aa1yxWQ+OcXUUurtwqzXSGalcM5aethXuZik+wzWJN4q4HCjhTsPVVkF4WSZyM/j8gRVwZQFXFnFVtgPaefhduP71GyS4qvNFcxSdO3dnRuZEGgwo/keAEiC0Uwd/zYhgur95LL1ma2J0u+EmElJlMntfhp5urAwboVfVRVgbvJjjUyq+iLIhjDAACC/DttGmxoKH+/8FmLsx3sRREAAAAAAASUVORK5CYII=","canon":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAAAoCAMAAACYV9vPAAAAYFBMVEXMAAAAAAD+AACwAADLAADLAADLAADNAADLAADLAADLAAB/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAubJK6AAAAIHRSTlP9AAEDMa+QEdJwTgIAAAAAAAAAAAAAAAAAAAAAAAAAAODXmi0AAAVDSURBVHjazVnbluwoCFXw7v//7wiaRNCqWHNe2odeXcaQLZcNorHPAGx/ois5+NSHD8XFNonV/tFhBProsjdqpFDaFgD+OH5Cn5PZjhQcL/jD+NFiWdGzE/F/bQcV/iz+5h1ucRyfm/NHigd+lNuyrYgKiPsnAKj8rk3UD0tJyicv3QnqMWkG/KLRB/c4DLpAM7jZwP3J9VHFyzFnftiFEjz736liGH5y4L6I/pouMGvduy4LgLTb/qf9+ahQdvDRtQF6B50OnLs3TRPQJuKyElhFPOINTqBfBNlLkNnCz1IREIFdqG2gavAlUIAkX2BWED1zTAe+8DuMopCUlGcpvJkmxHOYEWFLTSyCoAtKQ5Ahu2j4Rdn43uBjgZ4rOvjbZDCZ192PcgN/ozfajqhpLzW6xk+CyCdxFmSaKLfARwXfXSJCJEWyv6LTdFsYFtuFA+aer4qb/a0eirzE0eay1sRGEGhB0QBEBSNoqkd8hLjxcJPo6GHHVYIMJqu3Wuwdynn4q32URL/7DotXgnSKKmZx/hSrpDh8yMkXMj1uwbM6ms42WTDomaGiBjIMe2CNMxDawIkgb2zcesEcQdeKlIfug/c+XMPLd2Puz6RUL3+H/o1Ld9kSl1QnGOSDIJ8U/qJ1qPLs0BH5/mDwKBbEGVdTZOzTs1WTE95x4b8Ny+YAqcnLxb4L8iZ6TZ2ovMfdGQEm7hwDEf3se+ReNA0i7mjLReN/DNsJCcQ7TRTyF7K0ShR04437EIOP9zBpl09FtGTf6220MxZXW9kw643xT2uYFVC6Qo8RGZ6OEmoU+JX7JMU9/D5lCpX1G6KW4RBu+9xxt8NPhKzxzy+Wvh+nNIkLfoIh8QfNDELLlWQ2x9dO9XhSFG7rx+sH+GdkATnrSl/O/46/GStRzMh8No5pbVANUqfsQAFWz/CLcOW4US8Zj2qXW/xL+ILMvM11pOM3CXjXDXw4yyttnOB3Om5UABiqk37Hr5OXSgdVZ8VWr6SF2d/xS7CsNrmmR8U/+v9SrVcbw7esOGqzE/1nURlwxWOXAHjFr6oH//2gPuj0y3Bn+BGsYvu6VMJH+DV/gv22AfnVRqylbEuzX/F3BlWl8BF+Xf64bwZQEZa5VohCaQH+j/+MjCxLiCP8EF6qZ3mW8zLoqH6oskTBlQr3+MtCli2qgzLlK35dv6X42QDSvn4cMVuS8CsVvvPPJttK+7oT/oG3Am6CL6n+XohqGn7OX1fcCAVxUnvHv7RO3IcNgCpmy4O/GFVCnNQPwlcobkCWEBxJ7/5TrV9OUXUbuy7EA/xMhUf1W5F+q+02KOkd/3IABsAN/KaaWN79h/d1ov+KSZq9yrNqPNP/pgERom4itQ1R3nXb+AXBSkO5r/gXMqa5+iwru/p/h9+uIeBlzcmNDE/9i6j4s58BsvI/2u47fpUM/WhPeXnEP8BvRxNGJNY4eqrt5DS6Lsl9zl9JMegZftG6SeIQeR3Dj/BTbPql++zuJhO3b7irVFWJTvUDvemKDIAj/KrgbKdkoujw1EPH+Mlj89rOCXRGGb3JzF097ev3p52O/xP8cgOefdbJXuQhfqtbdUs33V4qW+vn9jWMuguRT/BLcXRO5VVTp/4UP7d23P4CqV8fwXN+kf3W3L4m/Yo8IeiGqlvK/e659RGXvO+N5qlTo1ImVCEoGXlSoQs8iW65viMNPOdHn/lwT/c3z6DMU56f/e4phmcmz62k0Q6/BBYU1DcL8l3/syCztBWg7SGP3mAe16e4FBJ0rZTbY1zuG34d/Tqi5P69aH+7KfwP8R0vRikzyVwAAAAASUVORK5CYII=","gopro":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAAAoCAMAAADqmLl5AAAAYFBMVEUAf38HXKoNWrIAAP+8vP8PnNkOm9cAf/8Om9ez8/MA//8LndUGXaoAqqp/f/9///9/v78AAAD///8PnNj///8GXar///////////////8Jp+z///8QpOP///8QoN4GYrMc3BmNAAAAIHRSTlMCqRABA9BnAogEAQ/eAwICBAD8/QT9Lo5N0gus/Wr+/fMoxsAAAAKASURBVHja7ZZrVyMhDIZxt13dqaubNgYQ0f//LyVcptzS1vXjznuOxw4kmYcQwigEIO/sMUlDeL5RCOY4k3We4AtxQAG52n/qjJ0Kgz5KclTitD7TUCqvxVrHMiPC2b8bSgxWd3JpTQmi9RVCKd4FZxDljIc/IjJFRAkgM+jRJWbWISYrjL4IWEKZPpRKzGuWJghmrZY10z6FjAw4CDznBzkJpLOv43H0bqidQJcYZm8vqXLTuiN+g55WMWJhiDDZgYHstHRKHnBagGvdaX9OoI9Ls4hiHjJDPjehYLz3zBz92lARYmBoiwhw3atq1GYfoR7iuAvznEKP9Um2XdKIw495qKovM9juRMXYJjM46mTSppvMQMU5Muj+cNqRARNZFm9G2dp6s2oGQR4yK+VKywxN3SH8MwNcY7A6rr7koWaA6wy8F56lb2WwvlXYwtQ/vsowNmJqGDo19TA/0iAwoFQPZoxiaoZ+smGYnM3CMctDBxvPRewb2nS1rUtvi6C6SRT5xIfrGRTaW8cQU+vbUGxh1bx5nXvheqcVVXX/FYZzCfehSIUmPqWw8U7gFE6adbxfrzCEcdswhNZtp7e84veEvsJ3blG4gD1hbpn8jVNPhzlD+d4kZ625wGCs1dWZCj/J6zYUx1GAci6b/8ONPnT2C3ayNX8/LMvy9Ju1Oys8/X0OE8lqaabjw9MStXtOcX8K2i2ww+nnUyMF3xPC96VeZR0O0eRwkC1eo8WPS7ohD/uTpP3bL/gDcP/wvr9ooeDu4/FlrsePuzDPHzNiCwj94fQu6RTeENZ5v3+TLR6CBTO8SMoMF25YZpC1MsgWG8PGsDFsDBvDxrAx/IcMn4XTf4odELnRAAAAAElFTkSuQmCC","samyang":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAAAoCAMAAAA2Yc1OAAAAYFBMVEUAAADFHT7NJkfuZm/7+PjTVG27ITT7AgPLNlTmoKrvnl7PRmHddIr+/v2qVVV+AADMLk34zKH/AP+tDlfqgjd/f3/vE2P0u4j1qGjpucv52Kz+/fzsnGH77N3//wDOQ15abCHgAAAAIHRSTlMA/fQPBVsDAaoZ+5Ao+AMCUfwBA/oCBfoSEB2jpVIB4O3ef/wAAAewSURBVHja7Vnbcts4DIVJihRrreRYkWKnTfv/f7m84UapyetOZrkz25giIRwABA4oAAAXwA2jKWO8WYAd5LC3PGwIoIcr02rqDtNQJjeIZdct6m1NVlrIvybgJaHOaal7WfakZc5Dek9W+JI1Hp4AHr4aG8CQAV7yyNvkO5IBKvxrjx2mahbHOs5VUFrrA22bxeOy5WKmtDsbApd4IXWoqruVxLq6KYJFMWBH1PdSdIgQ3Fcg49h24L4h3vGpz68tsw6cRlkfmIGVTNDK1AhLRlT+nsAyyvKiBktK/lRqE4oofdZXKZw1BmHNsxEimYU2uSWQL5sJ5HsF/GRImkdkxSIIaYS1R+DCxiYpkm2PMltnPkXpwXYYq2Ej2E9A7q7CqNFTFY85iikuUQ4sct9K8CM62cOVpjabrKcwBPR0nWCTCEMwymSLPZygpAhoKvPfEyl9NpqBx8HayQ7qBAjFL2q6DHaFV1ZvQGzbiup6cuVyP0jejihJrEQ5J08yRHJMXfDZ2SxBns5KEzkmcSLEHVtLZonkPsdO9i1grdTQsTPz821Rvr1LyWwnRslWFShRSDmKNoOKth1Sc42fhGyT4WC/h2BTSpUuk/GR1wSVYnH+WUOWvVMNIpznQLh2PZG8nKBE6wmUM2cJVw5Bfl6SJ7npfDQLc8WDuz58WcQh70kt23xg79QzHJamX8aMVjFQjbi05GR0qrHy2LX3MUqKlrQh+C1jDNaXQpiL1yco8eW+BXXYVJFpehqdTZXj2rylgEW3kzNjmLuUS6CvrbbsR5R5n1Uom9EzSFG8U8Eehs9BAiW+4A9xjdVipBdt/GiUmJxKJ3imdmcatB0BN6+1xSQZi7FGWc1HL5+AjrZmKCvo/H8yZKB3QDn318CVIdseGQ6tNqOqBWLj4J1BRHdaJyWImirEiHOJB329awx2/4rgYRk2hT0GgROPQSrjVM8pxT7LzB8KZVz8R2qNRdVw7NqOILRoac5oD8y1paq4WEa5t6gXpQvHVv6vgtaJkanPhSjs1QJwit2ZkbkuSzRM5lpXuMyg658gSByVfjMYVYxWkhw0syGUxBU9o/SAp9J+Sc7ht/o1d2QiRe6sS2KSusLVqJKJJ3Zo/ySLuJoznfINpn4jakrGElHzVXFbRsl8diGUqM+TGHXshioeDx7VLeLEG2MbTK53gXyCWQKzh40lZJNPSD0jayvyPF39KavlA2LlBkKJ/DnFrERptBKjUUOwi9/vP15p/Cr2doNihEOFiSVt8L40UlrP+iy2IEpHosKeAj6wPUVkakpZza8du2VfIlW6wsGXAqWm7MzOHvDrFRpGeH20hu05jIoRWlHSHCcpjMTAL8SQPUw0erY4wR6szmqgJHuF0nPM0rk89GBdy0goH/DoXJmVzok4Dti2pdUrB+XV3obhNkzyDY0uJNXaH1cCR3/4vpcyWOX2v0jeFModY5awBQyu4M9Ripf+EOOdKmMmSjCN3B8SYVPcv5lLmrxl2bGlvxoBbNawu65jxCqku4qqohCs6ZGol9Sp5Zwr+xJCmSJUgNR3NpURluUpASkWcpGUXaZYJDUGk86CuZbYiO9000RdSg7afHWdwfwc+QxNlDhwqHsJZ510pZtdTQaYmQLX3T4cVFRgNE+tKJhGBlKoB9Apgj3Q4iwpZ04lZ90lSiSITBoxUzHr1j2yo05DufJRUwl1VN7fKHdEVUY1NV8oxW6LJLRJE86+tkNJJG46k4yti0ApVzbZxC6W2tmEENaVeopWc1MV4fGrgtwSF0IiwL4UScOUkCCcCZlIsfqKIgUdB/N8jpLvTXrJyRUKpZadUN7xrihxo9xdbHc7p14k6v4tVRGZekJN6ylxuHTYrZ13rk0r5Z6hMgrqyQdKDEXxjZ1eotn+JckiSpHVTiVLlGF1Rl0dzGx7Inm52F/EwY/wruL1He9AaE/E5O0pwSV3BV+atwlpWlBIOGTLMbV9ku1QirvIIrmkbGzQwqpQ8hUYHgHLgTDekmPscOMgq53AQ6eecm9S3V32TAMblYn60tpTG5jWKpReFMRAvuIk26H0nOAsSX72xeLahzff4Y399RYFEl5XvRHGt+za0l7KqojXsTOFbphEr3rtiiTdkctytSDpazlNo6Trh7ja/tazsBGNMqxOowyL+yT3lyoiQL65h2ov5UU1mtSIqldszpSvWKRVi4XvKayiuNsJykP1LIEZLJ0UjVJc27aknWrF1Rx1FoTg5Q3Hyztgm9JdVZdb6qVr4VWhY9JabUD5Xf0k1qpRanJ+vJToUVLMUmkKS1bZKIxjxPu+3+8CJDDI2pGI7gUsfukRnRzqXz/fTPIzDn7WGTi9yDYIfxeUpc3LQ956Ssn8PQkpGX5X4hvUFAWD7LlGS19JEqoXHs6Jm9UUzLdct8byWa8As2VMh6uwOg9T97j8jHpV9xR/W722lwzx+ObybIrym1H5tJd0TirneoTsLcKHAKnvsLz+lqW+6/0HxpkSVt7Z0Z1ciO5FulJ/pQuz90sanu/w7iH/d5CO093j+z39PK46/f2F5JPnZeLef5C0fs8a+5mfaFd+wDt8w+Gc+4fHT3DwLVHCT4HSBfe/K7+JK933dCV8CJAf39WV7udf4/Vfpf9cufIgLV4AAAAASUVORK5CYII="};
  function marqHTML() {
    var one = LOGOS.map(function (l) {
      var k = l[0], c = LOGOC[k];
      var cls = 'bg-logo' + (l[2] ? ' inv' : '') + (c ? ' hasc' : '') + (k === 'insta360' ? ' big' : '') + (k === 'tamron' ? ' tam' : '');
      return '<span class="' + cls + '"><img class="w" src="' + l[1] + '" alt="' + k + '" loading="eager">' + (c ? '<img class="c" src="' + c + '" alt="" aria-hidden="true">' : '') + '</span><i></i>';
    }).join('');
    return '<div class="bg-marq-track"><div class="bg-marq-item">' + one + '</div><div class="bg-marq-item" aria-hidden="true">' + one + '</div></div>';
  }
  var SIL = {
    kamera: '<svg viewBox="0 0 160 100"><rect x="22" y="30" width="116" height="58" rx="8"/><path d="M58 30 V19 H94 V30"/><rect x="28" y="22" width="16" height="8" rx="2"/><path d="M22 40 H33 V80 H22"/><circle cx="82" cy="60" r="22"/><circle cx="82" cy="60" r="14"/><circle cx="82" cy="60" r="5"/><rect x="116" y="38" width="12" height="7" rx="2"/></svg>',
    lens: '<svg viewBox="0 0 160 100"><rect x="28" y="36" width="20" height="32" rx="3"/><rect x="48" y="28" width="70" height="48" rx="4"/><rect x="118" y="20" width="16" height="64" rx="4"/><path d="M64 28 V76 M70 28 V76 M76 28 V76 M98 28 V76"/><path d="M84 40 H92 M84 52 H92 M84 64 H92"/></svg>',
    drone: '<svg viewBox="0 0 160 100"><rect x="64" y="38" width="32" height="24" rx="8"/><path d="M64 43 L42 27 M96 43 L118 27 M64 57 L42 73 M96 57 L118 73"/><ellipse cx="38" cy="24" rx="18" ry="6"/><ellipse cx="122" cy="24" rx="18" ry="6"/><ellipse cx="38" cy="76" rx="18" ry="6"/><ellipse cx="122" cy="76" rx="18" ry="6"/><circle cx="80" cy="50" r="5"/></svg>',
    gimbal: '<svg viewBox="0 0 160 100"><rect x="72" y="58" width="16" height="38" rx="6"/><path d="M80 58 V50 H114 V24 H100"/><circle cx="114" cy="50" r="5"/><rect x="46" y="12" width="54" height="32" rx="5"/><circle cx="64" cy="28" r="10"/><circle cx="64" cy="28" r="4"/><circle cx="80" cy="70" r="3"/></svg>',
    aksiyon: '<svg viewBox="0 0 160 100"><rect x="44" y="24" width="72" height="56" rx="9"/><path d="M60 24 V18 H76 V24"/><circle cx="96" cy="52" r="16"/><circle cx="96" cy="52" r="8"/><rect x="52" y="32" width="22" height="14" rx="3"/><circle cx="58" cy="68" r="2"/></svg>'
  };
  function silKey(t) {
    t = t.toLowerCase();
    if (t === 'kamera') return 'kamera';
    if (t === 'lens') return 'lens';
    if (t === 'drone') return 'drone';
    if (t === 'gimbal') return 'gimbal';
    if (t.indexOf('aksiyon') === 0) return 'aksiyon';
    return null;
  }
  function addSilhouettes() {
    var as = document.querySelectorAll('#app a');
    for (var i = 0; i < as.length; i++) {
      var a = as[i];
      if (a.querySelector('.bg-sil')) continue;
      var rt = null;
      for (var j = 0; j < a.children.length; j++) {
        var c = a.children[j];
        if (c.classList.contains('rich-text') && getComputedStyle(c).position === 'absolute') { rt = c; break; }
      }
      if (!rt) continue;
      var k = silKey(txt(rt)); if (!k) continue;
      a.classList.add('bg-has-sil');
      var d = document.createElement('div'); d.className = 'bg-sil'; d.innerHTML = SIL[k];
      a.insertBefore(d, a.firstChild);
    }
  }
  function featSection() {
    var all = document.querySelectorAll('#app p,#app div,#app span');
    for (var i = 0; i < all.length; i++) {
      var e = all[i];
      if (e.children.length) continue;
      if (txt(e) === 'Cihazına özel hassas kesim') {
        var app = document.getElementById('app');
        var s = e;
        while (s.parentElement && s.parentElement.parentElement && s.parentElement.parentElement !== app) s = s.parentElement;
        return s;
      }
    }
    return null;
  }
  function addMarqueeAndIcons() {
    if (!isHome()) { var old = document.querySelector('.bg-marq'); if (old) old.remove(); }
    var s = featSection(); if (!s) return;
    s.classList.add('bg-white-ico');
    if (!isHome()) return;
    if (document.querySelector('.bg-marq')) return;
    var m = document.createElement('div'); m.className = 'bg-marq'; m.setAttribute('aria-label', 'Desteklenen markalar'); m.innerHTML = marqHTML();
    s.parentNode.insertBefore(m, s);
  }

  var MODELS = window.__BG_MODELS = "Blackmagic:Pocket Cinema Camera 6K|Canon:EF 100-400mm f4.5-5.6 L IS II USM;EF 100-400mm f4.5-5.6 L IS USM (Mark I);EF 100mm f2 USM;EF 100mm F2.8 IS USM;EF 100mm f2.8L Macro IS USM;EF 11-24mm F4 L USM;EF 135mm f2L USM;EF 16-35mm F2.8 L II USM;EF 16-35mm F2.8 L III USM;EF 16-35mm F2.8 L USM (Mark I);EF 16-35mm F4 L IS USM;EF 17-35mm f2.8;EF 17-35mm f2.8 L USM;EF 17-40mm F4 L USM;EF 18-135mm F3.5-5.6 IS STM;EF 20-35mm F3.5-4.5 USM;EF 200mm f2.8L II USM;EF 20mm F1.8 USM;EF 20mm F2.8 USM;EF 24-105mm f3.5-5.6 IS STM;EF 24-105mm F4 L IS II USM;EF 24-105mm F4 L IS USM;EF 24-70mm F2.8 L I USM;EF 24-70mm F2.8 L II USM;EF 24-70mm F4 L IS USM;EF 24mm f2.8 IS USM;EF 28-105mm f3.5-4.5 II USM;EF 28-135mm f3.5-5.6 IS USM;EF 28-135mm F3.5-5.6 USM;EF 28-200mm F3.5-5.6 USM;EF 28-70mm f2.8L USM;EF 28-80mm F3.5-5.6 V USM;EF 35-80mm f4-5.6 II;EF 35mm f1.4L II USM;EF 35mm f1.4L USM;EF 35mm f2 (Non IS);EF 35mm f2 IS USM;EF 50mm F1.2 L USM;EF 50mm F1.4 USM;EF 50mm F1.8 II;EF 50mm F1.8 STM;EF 70-200mm F2.8 L IS I USM;EF 70-200mm F2.8 L IS II / III USM;EF 70-200mm F2.8 non IS L USM;EF 70-200mm F4 IS USM;EF 70-200mm F4 L IS USM;EF 70-200mm F4 L USM (non IS);EF 70-300mm F4-5.6 L IS USM;EF 70-300mm f4-5.6L IS II USM;EF 75-300mm f4-5.6 II;EF 75-300mm f4-5.6 III USM;EF 75-300mm f4-5.6 IS USM;EF 8-15mm F4 L Fisheye USM;EF 85mm f1.2 L II USM;EF 85mm F1.2 L USM;EF 85mm f1.4L IS USM;EF 85mm f1.8 USM;EF-M 15-45mm F3.5-6.3 IS STM;EF-M 18-150mm F3.5-6.3 IS STM;EF-M 18-55mm F3.5-5.6 IS STM;EF-M 22mm f2 STM;EF-M 55-200mm f4.5-6.3 IS STM;EF-S 10-18mm F4.5-5.6 IS STM;EF-S 10-22mm f3.5-4.5 USM;EF-S 17-55mm F2.8 IS USM;EF-S 17-85mm f4-5.6 IS USM;EF-S 18-135mm F3.5-5.6 IS STM;EF-S 18-135mm Nano USM;EF-S 18-200mm F3.5-5.6 IS;EF-S 18-55mm;EF-S 18-55mm F3.5-5.6 II;EF-S 18-55mm F3.5-5.6 IS II;EF-S 18-55mm F3.5-5.6 IS STM;EF-S 55-250mm f4-5.6 IS II;EF-S 55-250mm f4-5.6 IS STM;EOS 1100D;EOS 1300D (Rebel T6);EOS 1500D (Rebel T7);EOS 250D (200D Mark II);EOS 300X;EOS 40D;EOS 500D;EOS 50D;EOS 550D;EOS 5D;EOS 5D Mark II;EOS 5D Mark III;EOS 5D Mark IV;EOS 5DS R;EOS 600D;EOS 60D;EOS 650D;EOS 6D;EOS 6D Mark II;EOS 700D (T5i);EOS 70D;EOS 750D (T6i);EOS 77D;EOS 7D;EOS 7D Mark II;EOS 800D;EOS 80D;EOS 90D;EOS C50;EOS M;EOS M10;EOS M3;EOS M5;EOS M50 / M50 Mark II;EOS M6;EOS M6 Mark II;EOS R;EOS R1;EOS R10;EOS R100;EOS R3;EOS R5;EOS R5 C;EOS R5 Mark II;EOS R50;EOS R50 V;EOS R6;EOS R6 Mark II;EOS R6 Mark III;EOS R6 V;EOS R7;EOS R8;EOS RP;EOS-1D Mark IV;EOS-1D X;EOS-1D X Mark II;EOS-1D X Mark III;EOS-1Ds Mark III;Fisheye EF 15mm f2.8;Mount Adapter EF-EOS M;Mount Adapter EF-EOS R;PowerShot G7 X Mark II;RF 100-400mm F5.6-8 IS USM;RF 100-500mm f4.5-7.1 L IS USM;RF 100mm f2.8L Macro IS USM;RF 15-35mm F2.8 L IS USM;RF 18-150mm F3.5-6.3 IS STM;RF 24-105mm f2.8 L IS USM Z;RF 24-105mm F4 L IS USM;RF 24-105mm F4-7.1 IS STM;RF 24-105mm F4-7.1 IS STM Macro;RF 24-240mm f4-6.3 IS USM;RF 24-70mm F2.8 L IS USM;RF 28-70mm f2 L USM;RF 28-70mm F2.8 IS STM;RF 35mm F1.4 L VCM;RF 35mm f1.8 IS Macro STM;RF 50mm F1.2 L USM;RF 50mm F1.4 L VCM;RF 50mm F1.8 STM;RF 70-200mm F2.8 L IS USM;RF 70-200mm F2.8L IS USM Z;RF 70-200mm F4 L IS USM;RF 85mm F1.2 L USM;RF 85mm f1.4L VCM;RF 85mm F2 Macro IS STM;RF-S 14-30mm F4-6.3 IS STM PZ;RF-S 18-150mm F3.5-6.3 IS STM|Contax:Carl Zeiss Sonnar 90mm F2.8 G T|DJI:Air 2S;Air 3;Air 3S;Avata 2;Avata 360;Avata 360 Combo (Goggles N3);FPV;Goggles 3;Goggles N3;Inspire 1;Inspire 2;Mavic 2 Pro;Mavic 3 Classic;Mavic 3 Pro;Mavic 4 Pro;Mavic Air;Mavic Air 2;Mavic Mini;Mavic Mini 2;Mavic Pro;Mini 3;Mini 3 Pro;Mini 4 Pro;Mini 5 Pro;Neo;Neo 2;Osmo 360;Osmo Action 2;Osmo Action 5 Pro;Osmo Action 6;Osmo Mobile 3;Osmo Mobile SE;Osmo Nano;Osmo Pocket;Osmo Pocket 2;Osmo Pocket 3;Osmo Pocket 4;Phantom 3;Phantom 3 / 4 Pro Remote Controller;Phantom 3 Pro;Phantom 4 / 4 Pro;RC;RC 2;RC Motion 3;RC Pro;RC-N1 / N2 / N3;Ronin-S;Ronin-SC;RS 2;RS 3;RS 3 Mini;RS 3 Pro;RS 4;RS 4 Mini;RS 4 Pro;RS 5;RSC 2;Smart Controller;Spark|Feiyu:A2000|Fotga:Lens Mount Adapter MD-NEX;Minolta MD-NEX|Fujifilm:Fujinon XF 23mm f2 R WR;Fujinon XF 60mm f2.4 R Macro;GF 110mm f2 R LM WR;GF 120mm f4 Macro R LM OIS WR;GF 23mm f4 R LM WR;GF 250mm f4 R LM OIS WR;GF 32-64mm f4 R LM WR;GF 45-100mm f4 R LM OIS WR;GFX 50S;GFX100;GFX100S;X-A10;X-A2;X-A20;X-A20 Pro;X-A3;X-A5;X-E1;X-E2;X-E2s;X-E3;X-E4;X-H1;X-H2S;X-Pro1;X-Pro2;X-Pro3;X-S10;X-T1;X-T10;X-T100;X-T2;X-T20;X-T200;X-T3;X-T30;X-T30 II;X-T3a;X-T4;X-T4a;X-T5;X100;X100F;X100V;X100VI;XC 15-45mm f3.5-5.6 OIS PZ;XC 16-50mm F3.5-5.6 OIS;XC 16-50mm F3.5-5.6 OIS II;XC 50-230mm f4.5-6.7 OIS;XF 10-24mm f4 R OIS;XF 16-55mm f2.8 R LM WR;XF 16-80mm f4 R OIS WR;XF 16mm f1.4 R WR;XF 18-55mm F2.8-4 R LM OIS;XF 23mm f1.4 R;XF 23mm F1.4 R LM WR II;XF 33mm f1.4 R LM WR;XF 35mm f1.4 R;XF 50-140mm F2.8 R LM OIS WR;XF 50mm f1.0 WR;XF 56mm f1.2 R;XF 56mm f1.2 R APD;XF 56mm f1.2 R WR Mark II;XF 90mm f2 R LM WR|GoPro:Hero 5;Hero 7 Black;Hero 7 Silver / White;Hero 8 Black;Hero 9 / 10 / 11 / 12;Max|Insta360:Luna Ultra;One X2|Leica:Q2;SL2;Summicron M 90mm F2 Leitz Canada|Metabones:Canon EF, EF-S to Sony E Mount|Minolta:AF 135mm F2.8;AF 200mm;AF 200mm f2.8 APO G;AF 24-85mm;AF 24-85mm F3.5-4.5 A-mount;AF 50mm f2.8 Macro A-mount;MD 135mm f3.5|Moza:AirCross 2|Nikon:14-24mm f2.8 Nano;18-35mm f3.5-4.5D;18-55mm F3.5-5.6G II VR;18-55mm f3.5-5.6G VR DX;200-400mm F4 VR & VR II;24-120mm f4 ED;24-70mm F2.8 S;24-70mm F2.8 VR Nano;24-70mm Nano;24-70mm Nano Mark 2;24-85mm f2.8D;24mm f1.4;24mm F1.8 Nano;28-300mm F3.5-5.6;28-70mm 2.8;28-70mm F3.5-4.5D;28mm F1.8 N;300mm F4D AF-S;35mm f1.4 N;35mm F1.8G AF-S ED;50mm F1.8G AF-S;60mm f2.8 N ED;70-200mm F2.8 FL (VR III);70-200mm F2.8 VR I;70-200mm F2.8 VR II;70-200mm F2.8E FL ED AF-S VR;70-200mm F2.8G AF-S ED VR I;70-200mm F2.8G AF-S ED VR II;70-300mm f4.5-6.3G ED DX;70-300mm VR AF-P f4.5-6.3 DX ED;80-200mm F2.8 II AF;80-200mm F2.8 III;80-400mm F4.5-5.6 VR;80-400mm f4.5-5.6G AF-S ED VR Nano;85mm F1.4 Nano;85mm F1.4G AF-S;85mm F1.8 S;85mm F1.8G AF-S;AF 50mm f1.8D;AF 80-200mm F2.8D II;AF 80-200mm f2.8D III;AF Micro 105mm 2.8D;AF NIKKOR 28-105mm F3.5-4.5D;AF NIKKOR 28-70 f3.5-4.5 D;AF NIKKOR 35mm F2 D;AF Nikkor 50mm f1.4 D;AF Nikkor 85mm F1.4D IF;AF Nikkor 85mm f1.8D;AF-S 105mm 1.4 Nano;AF-S 105mm 2.8G VR;AF-S 105mm F1.4E ED Nano;AF-S 105mm F2.8 VR Micro Nano;AF-S 14-24mm f2.8G ED;AF-S 16-35mm f4 VR Nano;AF-S 16-35mm f4G ED VR;AF-S 17-35mm f2.8D IF-ED;AF-S 18-105mm F3.5-5.6 G ED VR DX NIKKOR;AF-S 18-200mm f3.5-5.6G ED VR II;AF-S 200-400mm f4G ED VR;AF-S 200-500mm f5.6 ED VR;AF-S 20mm f1.8G ED Nano;AF-S 24-120mm F4G ED VR Nano;AF-S 24mm f1.4G ED Nano;AF-S 28-70mm F2.8D ED;AF-S 28mm F1.4E ED Nano;AF-S 28mm f1.8G Nano;AF-S 300mm f2.8 G ED VR;AF-S 300mm f4 D IF-ED;AF-S 35mm F1.4G Nano;AF-S 50mm F1.8G;AF-S 58mm;AF-S 70-200mm f2.8E FL ED VR;AF-S 70-200mm f2.8G ED VR;AF-S 70-200mm f2.8G ED VR II;AF-S 70-200mm f4G;AF-S 8-15mm 3.5-4.5 ED;AF-S 85mm f1.4G Nano;AF-S DX 17-55mm f2.8G ED;AF-S DX 18-105mm 3.5-5.6 ED;AF-S DX 18-140mm f3.5-5.6G ED VR;AF-S DX 55-300mm F4.5-5.6 G ED VR;AF-S DX NIKKOR 18-140 F3.5-5.6 G ED VR;AF-S NIKKOR 200-500mm f5.6E ED VR;AF-S NIKKOR 24-70mm F2.8E ED VR;AF-S NIKKOR 24-85mm f3.5-4.5G ED VR;AF-S NIKKOR 24mm f1.8G ED;AF-S NIKKOR 28-300mm f3.5-5.6 G ED VR;AF-S NIKKOR 35mm F1.8G ED FX;AF-S NIKKOR 50mm f1.4 G;AF-S NIKKOR 58mm f1.4G Nano;AF-S NIKKOR 85mm f1.8 G;Coolpix A900;D200;D3;D300;D300S;D3100;D3300;D3500;D3s;D4;D4s;D5;D500;D5200;D5300;D5600;D600 / D610;D700;D7000;D7100 / D7200;D750;D7500;D780;D80;D800;D800E;D810;D850;D90;Df;F 80-200mm 2.8;F3;FTZ Mount Adapter;NIKKOR Z 24-70mm F2.8 S II;NIKKOR Z 35mm F1.2 S;NIKKOR Z 40mm F2;NIKKOR Z 50mm f1.2 S;NIKKOR Z 50mm f1.8 S;NIKKOR Z 800mm f6.3 VR S;NIKKOR Z 85mm F1.2 S;NIKKOR Z DX 18-140mm f3.5-6.3 VR;Nikkor AF 70-210mm F4;Nikkor Z 24-120mm f4 S;Nikkor Z 35mm F1.4;Nikkor Z 50mm F1.4;Nikkor Z 70-180mm F2.8;Z 14-24mm f2.8 S;Z 14-30mm f4 S;Z 20mm f1.8 S;Z 24-70mm f2.8 S;Z 24-70mm f4 S;Z 24mm f1.8 S;Z 28-75mm f2.8 S;Z 35mm f1.8 S;Z 70-200mm f2.8 VR S;Z 85mm f1.8 S;Z30;Z5;Z5 II;Z50;Z50 II;Z6 / Z7;Z6 II / Z7 II;Z6 III;Z8;Z9;Zf;ZR|Olympus:12-100mm f4;40-150mm f2.8 Pro;8mm f1.8;M.Zuiko Digital ED 12-40mm f2.8 Pro;M.Zuiko Digital ED 45mm F1.8;OM-D E-M1X;PEN-F|Panasonic:Leica DG Nocticron 42.5mm F1.2 ASPH OIS;Leica DG Vario-Elmarit 12-60mm f2.8-4 ASPH;Lumix 42.5mm f1.2;Lumix DC-G9;Lumix DC-S1R;Lumix DC-S5;Lumix DMC-GF1 Pro;Lumix DMC-GH2;Lumix DMC-GH4;Lumix GH5;Lumix GH6;Lumix S 24-105mm F4 Macro O.I.S;Lumix S 24mm F1.8;Lumix S 35mm F1.8;Lumix S 50mm F1.8;Lumix S Pro 50mm f1.4;Lumix S1H;Lumix S5 II / S5 IIX;Lumix TZ200|Pentacon:135mm f2.8|Ricoh:GR III;GR IV|Samyang:(Rokinon) 14mm f2.8 IF ED UMC;(Rokinon) 85mm f1.4 IF MC Aspherical;12mm f2.0;12mm F2.8 ED AS NCS Fisheye;135mm F2.0 ED UMC for Canon;14mm f2.8;35mm 1.5;35mm F1.4 PFE;AF 14mm f2.8 FE;AF 24mm F2.8 FE;AF 35mm F1.4 FE II;AF 35mm F1.8 FE;AF 35mm f2.8;AF 50mm F1.4 II;AF 85mm F1.4 E Mount For Sony;AF 85mm F1.4 EF for Canon;AF 85mm F1.4 FE II for Sony E;ED 12mm f2.8;FE 35mm F1.4 AF;FE 50mm f1.8|Sigma:100-400mm F5-6.3 DG DN OS for Sony E;105mm F1.4 Art;105mm f1.4 DG HSM Art for Sony E;12-24mm f4 DG HSM Art for Canon;135mm F1.8 Art (Canon/Nikon);135mm f1.8 DG HSM Art for Sony E-Mount;14-24mm F2.8 Art (Sony);14-24mm f2.8 DG DN Art For Sony E;14-24mm F2.8 DG HSM Art for Canon;14mm f1.8 DG HSM Art for Sony E;15-30mm;150-500mm;150-500mm APO HSM;150-500mm F5-6.3 DG OS HSM;150-600mm F5-6.3 DG OS HSM Sports Lens;150-600mm F5-6.3 DG Sport;16-28mm f2.8 DG DN for Sony E;16-300mm F3.5-6.7 DC OS;16mm f/1.4 DC DN Contemporary For Sony;16mm f1.4;17-35 mm F2.8-F4.0 EX DG HSM;17-40mm F1.8 DC ART Fujifilm;17-50mm F2.8 EX DC OS HSM;17-70mm f2.8-4.5 DC HSM;18-200 mm f3.5-6.3 DC OS;18-35mm f1.8 DC HSM ART;18-50mm f2.8 DC DN Contemporary for Sony;20mm f1.4 DG HSM Art Lens for Canon EF;20mm F1.8 EX DG;20mm f1.8 EX DG ASP RF;24-105mm F4 DG OS HSM Art for Canon, Nikon;24-35mm Art (Canon/Nikon);24-35mm f2 Art;24-70mm F2.8 Art (Sony);24-70mm F2.8 DG DN Art for Sony E, L-Mount;24-70mm f2.8 DG DN II Art (Sony E);24-70mm f2.8 DG OS HSM Art for Canon;24-70mm f2.8 EX DG Macro;24mm F1.4 Art (Sony);24mm f1.4 DG DN Art;24mm F1.4 DG HSM Art;28-105mm f2.8 DG DN (Art) for Sony E;28-300mm f3.5-6.3;28-45mm f1.8 DG DN Art for Sony E;28-70mm F2.8 DG DN;30mm DC HSM Art (Canon);30mm F1.4 (Sony);30mm F1.4 DC DN for Sony E;30mm f1.4 DC HSM Art;30mm F2.8 (Sony);30mm f2.8 EX DN For Sony E;35mm F1.2 Art (Sony);35mm f1.2 DG DN Art For Sony E;35mm F1.4 Art (Canon/Nikon);35mm f1.4 DG DN Art For Sony E;35mm f1.4 DG DN II Art Sony E;35mm f1.4 DG HSM Art Lens for Sony E;50-500mm F4.5-6.3 APO DG OS HSM;50mm F1.4 DG DN Art;50mm F1.4 DG HSM Art For Sony E;50mm F1.4 DG HSM For Canon, Nikon;56mm f1.4 DC DN;65mm f2 DG DN Contemporary for Sony E;70-200mm f2.8 APO EX DG OS HSM;70-200mm f2.8 DC HSM;70-200mm f2.8 DG DN;70-200mm f2.8 EX DG HSM II Macro;70mm f2.8 DG Macro Art for Sony E-mount;85mm F1.4 Art (Canon/Nikon);85mm F1.4 Art (Sony);85mm f1.4 DG DN Art for Sony E;APO Macro 150mm F2.8 EX DG OS HSM Lens;MC-11 Mount Converter Lens Adapter|SJCAM:SJ4000 Wifi|Snoppa:Atom|Sony:12-24mm F4 G;135mm F1.8 Carl Zeiss Sonnar;135mm F1.8 ZA (SAL, A-mount);16-35mm F2.8 ZA;16-35mm F4 CZ;16-50mm kit;16-70mm F4;18-105mm F4;18-55mm f3.5-5.6;24-240mm 3.5-6.3;24-70mm f2.8 GM;24-70mm F4;24-70mm f4 Zeiss;24mm F1.4 GM;24mm f2;32mm f1.8 Zeiss Touit;35mm f2.8;50mm 1.4 Zeiss Planar;50mm F1.8 OSS SEL;50mm f2.8 Macro;55mm f1.8 ZA;70-300mm F4;85mm F1.4 ZA Planar;90mm Macro;Alpha 1;Alpha 9 III;Alpha A5100;Alpha A6000;Alpha A6100;Alpha A6300;Alpha A6400;Alpha A6500;Alpha A6600;Alpha A6700;Alpha A7 / A7R / A7S;Alpha A7 II / A7R II;Alpha A7 III / A7R III;Alpha A7 IV;Alpha A7 V;Alpha A7C;Alpha A7C II;Alpha A7R IV;Alpha A7R V;Alpha A7R VI;Alpha A7S II;Alpha A7S III;Alpha A9;Alpha A9 II;Alpha A99 II;Alpha NEX-5;Alpha NEX-5R;Alpha NEX-6;Alpha NEX-7;Alpha NEX-C3;Carl Zeiss Planar T 85mm f1.4 ZA;Distagon T FE 35mm f1.4 ZA;E 10-18mm F4 OSS;E 11mm f/1.8 (SEL11F18);E 18-135mm F3.5-5.6 OSS;E 18-200mm F3.5-6.3 OSS LE;E 35mm F1.8 OSS (SEL35F18);E 55-210mm F4.5-6.3 OSS;E PZ 16-50mm F3.5-5.6 OSS;E PZ 18-105mm F4 G OSS;FE 100-400mm f4.5-5.6 GM OSS;FE 100mm f2.8 GM;FE 100mm F2.8 STF GM OSS;FE 135mm F1.8 GM;FE 14mm F1.8 GM;FE 16-25mm F2.8 G;FE 16-35mm F2.8 GM;FE 16-35mm F2.8 GM II;FE 200-600mm f5.6-6.3 G OSS;FE 20mm F1.8 G;FE 24-105mm F4 G OSS;FE 24-240mm f3.5-6.3 OSS;FE 24-50mm F2.8 G;FE 24-70mm F2.8 GM;FE 24-70mm f2.8 GM II;FE 24mm F1.4 GM;FE 28-70mm F2 GM;FE 28-70mm f3.5-5.6 OSS;FE 28mm F2;FE 35mm F1.4 GM;FE 35mm F1.8;FE 400mm F2.8 GM OSS;FE 50-150mm F2 GM;FE 50mm f1.2 GM;FE 50mm F1.4 GM;FE 50mm F1.8;FE 50mm F2.8 Macro;FE 55mm F1.8;FE 70-200mm F2.8 GM OSS;FE 70-200mm f2.8 GM OSS II;FE 70-200mm F4 G OSS;FE 70-300mm F4.5-5.6 G OSS;FE 85mm F1.4 GM;FE 85mm F1.4 GM II;FE 85mm F1.8;FE 90mm F2.8 Macro;FE Carl Zeiss 24-70mm F4 ZA OSS Vario-Tessar T;FE PZ 16-35mm F4 G;FE PZ 28-135mm F4 G OSS;FX2;FX3;FX30;FX5;FX6;Planar T FE 50mm F1.4 ZA;RX10 III;RX100;RX100 III;RX100 IV;RX100 VI;RX100 VII;Sonnar 135mm F1.8;Sonnar T FE 35mm f2.8 ZA;WX500;Zeiss Sonnar 90mm f2.8;ZV-1;ZV-1 II;ZV-E1;ZV-E10;ZV-E10 II|Tamron:150-500mm F5-6.7 Di III VC VXD For Sony E;17-28mm F2.8 Di III RXD for Sony;17-35mm F2.8-4 DI OSD;17-70mm f2.8 Di III-A VC RXD for Sony E;18-200mm;19-35mm f3.5-4.5;24-70mm F2.8 Di VC USD G2;24mm F2.8;24mm F2.8 DI III OSD;28-200mm F2.8-5.6 Di III RXD for Sony E;28-300mm VC (Nikon);28-75mm (Canon/Nikon);28-75mm f2.8 Di III VXD G2 for Sony E;28-75mm F2.8 for Sony;35-150mm f2-2.8 Di III VXD for Sony E;35mm Di III OSD M12;70-180mm F2.8 (Sony);70-200mm 2.8 Macro;70-200mm f2.8 DI VC USD G1;70-300mm F4.5-6.3 Di III RXD for Sony E;85mm f1.8 Di VC;AF 28-300mm F3.5-6.3 XR Di LD;AF 28-75mm f2.8 XR Di LD;SP 24-70mm f2.8 Di VC G1;SP 35mm F1.4 DI USD (Nikon);SP 35mm f1.8 DI VC USD;SP 45mm f1.8 DI VC USD (Canon);SP 70-200mm F2.8 Di VC G2 For Canon, Nikon;SP AF 17-50mm F2.8 VC;SP AF 17-50mm F2.8 XR Di II LD|Tokina:11-16mm;16-28mm 2.8;50mm 1.4 FF|Viltrox:56mm F1.4 XF;85mm F1.8 RF For Canon;AF 24mm f1.8 Z for Nikon Z;AF 33mm F1.4 XF;AF 35mm f1.8 Z Lens for Nikon Z;AF 50mm f1.8 FE for Sony E;AF 50mm f1.8 Z for Nikon Z;AF 56mm F1.4 E for Sony E;AF 85mm F1.4 Pro (Sony E);AF 85mm F1.4 Pro Z;AF 85mm f1.8 (Nikon Z);AF 85mm f1.8 II XF for Fujifilm;AF 85mm f1.8 Lens for Nikon Z;AF 85mm f1.8 XF II For Sony FE;EF-EOS R Lens Mount Adapter for Canon;EF-FX1 Lens Mount Adapter for Canon;EF-R2 Lens Mount Adapter for Canon|Xiaomi:FIMI X8 SE|Yongnuo:YN 50mm f1.8 Lens for Nikon F|Zeiss:Batis 25mm F2 for Sony FE;Batis 40mm F2 CF for Sony;Batis 85mm F1.8 for Sony;Otus 85mm F1.4 ZE for Canon|Zhiyun:Crane 2;Crane Plus;Smooth 4;Smooth X;Weebill;Weebill LAB;Weebill S";
  /* ---------- v3: design hero + device finder at top ---------- */
  var W3 = 'min(1452px,calc(100% - 48px))';
  var css3 = [
    '.bg-hide{display:none!important}',
    '.bg-hero{width:' + W3 + ';margin:36px auto 0;display:flex;flex-wrap:wrap;gap:48px;align-items:center;color:#F2F0EB;box-sizing:border-box}',
    '.bg-hero *{box-sizing:border-box}',
    '.bg-hero-l{flex:1 1 420px;min-width:0;display:flex;flex-direction:column;gap:22px}',
    '.bg-tag{display:flex;align-items:center;gap:10px;font:700 13px/1 Manrope,sans-serif;letter-spacing:.14em;color:' + GOLD + '}',
    '.bg-tag b{background:' + GOLD + ';color:#141210;padding:5px 10px;border-radius:4px;letter-spacing:.08em}',
    '.bg-hero h1{margin:0;font:italic 900 72px/.98 Archivo,sans-serif!important;letter-spacing:-.01em;color:#F2F0EB}',
    '.bg-hero p{margin:0;font-size:18px;line-height:1.6;color:#B9B5AD;max-width:500px}',
    '.bg-btns{display:flex;flex-wrap:wrap;gap:12px;margin-top:6px}',
    '.bg-pill{display:inline-flex;align-items:center;background:#F2F0EB;color:#0E0E0F!important;text-decoration:none!important;font-weight:700;font-size:16px;padding:16px 26px;border-radius:999px;transition:background .2s}',
    '.bg-pill:hover{background:#fff}',
    '.bg-pill.o{background:transparent;color:#F2F0EB!important;border:1px solid #4A4850}',
    '.bg-pill.o:hover{border-color:' + GOLD + '}',
    '.bg-facts{display:flex;flex-wrap:wrap;gap:10px;margin-top:4px}',
    '.bg-facts span{font-size:13px;font-weight:600;color:#D9D5CD;border:1px solid #2A292E;background:#141416;border-radius:999px;padding:8px 14px}',
    '.bg-hero-r{flex:1 1 480px;min-width:0}',
    '.bg-hero-r img{width:100%;aspect-ratio:5/4;max-height:620px;object-fit:cover;object-position:70% 50%;border-radius:20px;display:block;background:#141416}',
    '.bg-find{width:' + W3 + ';margin:40px auto 0;background:#18181A;border:1px solid #26252A;border-radius:20px;padding:32px;display:flex;flex-direction:column;gap:20px;color:#F2F0EB;box-sizing:border-box}',
    '.bg-find *{box-sizing:border-box}',
    '.bg-find-h{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:12px}',
    '.bg-find h2{margin:0;font:800 34px/1.1 Archivo,sans-serif!important;color:#F2F0EB}',
    '.bg-find-h small{font-size:14px;color:#A3A09A}',
    '.bg-cats{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px}',
    '.bg-cat{display:flex;flex-direction:column;gap:6px;border:1px solid #3A383F;background:#0E0E0F;color:#F2F0EB!important;border-radius:14px;padding:18px;text-decoration:none!important;transition:border-color .2s,transform .2s}',
    '.bg-cat:hover{border-color:' + GOLD + ';transform:translateY(-2px)}',
    '.bg-cat svg{width:96px;height:60px;fill:none;stroke:#fff;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round;margin-bottom:8px}',
    '.bg-cat b{font:800 18px/1.2 Archivo,sans-serif}',
    '.bg-cat span{font-size:13px;color:#A3A09A}',
    '.bg-srch{display:flex;flex-wrap:wrap;gap:12px;position:relative}',
    '.bg-srch input{flex:1 1 320px;min-width:0;background:#0E0E0F!important;border:1px solid #3A383F!important;border-radius:12px;padding:16px 18px;color:#F2F0EB!important;font:500 16px Manrope,sans-serif;outline:none}',
    '.bg-srch input:focus{border-color:' + GOLD + '!important}',
    '.bg-srch a.bg-go{background:' + GOLD + ';color:#141210!important;text-decoration:none!important;font-weight:700;font-size:16px;padding:16px 28px;border-radius:12px;display:inline-flex;align-items:center}',
    '.bg-sugg{position:absolute;left:0;right:0;top:calc(100% + 6px);background:#141416;border:1px solid #3A383F;border-radius:12px;max-height:280px;overflow:auto;z-index:30;display:none}',
    '.bg-sugg div{padding:11px 16px;cursor:pointer;font-size:15px;color:#D9D5CD}',
    '.bg-sugg div:hover{background:#1E1E21;color:#fff}',
    '.bg-sugg div b{color:#F2F0EB}',
    '.bg-res{font-size:15px;color:#B9B5AD;min-height:22px}',
    '.bg-res .ok{color:#7CD3A0;font-weight:700}',
    '.bg-find-n{font-size:14px;color:#A3A09A}',
    '.bg-find a.wl{color:#E2C285}',
    '@media (max-width:640px){.bg-hero{width:calc(100% - 24px);margin-top:20px;gap:24px}.bg-hero h1{font-size:44px!important}.bg-hero p{font-size:16px}.bg-find{width:calc(100% - 24px);padding:20px;margin-top:24px}.bg-find h2{font-size:26px!important}.bg-cats{grid-template-columns:repeat(2,1fr)}.bg-cat svg{width:72px;height:46px}}'
  ].join('');
  var st3 = document.createElement('style'); st3.id = 'bg-theme-css3'; st3.textContent = css3;
  (document.head || document.documentElement).appendChild(st3);

  var CATS = [
    ['kamera', 'Kamera', 'Sony, Canon, Nikon, Fujifilm', '/kamera'],
    ['lens', 'Lens', 'Sony, Canon, Sigma, Tamron', '/lens'],
    ['drone', 'Drone', 'DJI Mini, Air, Mavic, Avata', '/drone'],
    ['gimbal', 'Gimbal', 'DJI RS, Zhiyun', '/gimbal'],
    ['aksiyon', 'Aksiyon Kamera', 'Osmo Pocket, GoPro, Insta360', '/aksiyon-kamera']
  ];
  var MLIST = null;
  function models() {
    if (MLIST) return MLIST;
    MLIST = [];
    MODELS.split('|').forEach(function (g) {
      var i = g.indexOf(':'), b = g.slice(0, i);
      g.slice(i + 1).split(';').forEach(function (m) { MLIST.push([b, m, (b + ' ' + m).toLowerCase().replace(/[^a-z0-9ğüşıöç]+/g, '')]); });
    });
    return MLIST;
  }
  function norm(q) { return q.toLowerCase().replace(/[^a-z0-9ğüşıöç]+/g, ''); }

  function heroImg() {
    var h = document.querySelector('img[data-bg-hero]:not([data-bg-top] img)');
    if (!h) {
      var imgs = document.querySelectorAll('#app img');
      for (var i = 0; i < imgs.length; i++) if (!imgs[i].closest('[data-bg-top]') && /theme-images/.test(imgs[i].currentSrc || imgs[i].src) && imgs[i].naturalWidth >= 300 && imgs[i].naturalWidth / Math.max(1, imgs[i].naturalHeight) > 2) { h = imgs[i]; break; }
    }
    if (!h) return HERO_URL;
    return h.currentSrc || h.src;
  }
  function sectionOf(el) {
    var app = document.getElementById('app'), s = el;
    while (s && s.parentElement && s.parentElement.parentElement !== app) s = s.parentElement;
    return s;
  }

  function topHTML(img) {
    var cats = CATS.map(function (c) {
      return '<a class="bg-cat" href="' + c[3] + '">' + SIL[c[0]].replace('<svg ', '<svg aria-hidden="true" ') + '<b>' + c[1] + '</b><span>' + c[2] + '</span></a>';
    }).join('');
    return '<section class="bg-hero" data-bg="hero"><div class="bg-hero-l">' +
        '<div class="bg-tag"><b>YENİ</b>TACTICAL SERİSİ</div>' +
        '<h1>Tek desen.<br>Tek karakter.</h1>' +
        '<p>Kamera, lens, drone ve gimbal için cihazına özel kesilmiş, çizilmeye karşı koruyan ve iz bırakmadan sökülen kaplamalar.</p>' +
        '<div class="bg-btns"><a class="bg-pill" href="/betaguard-kaplama">Serileri keşfet</a><a class="bg-pill o" href="#bg-find">Cihazını seç</a></div>' +
        '<div class="bg-facts"><span>9 desen serisi</span><span>800+ model</span><span>1-2 iş gününde kargoda</span></div>' +
      '</div><div class="bg-hero-r"><img alt="Betaguard kaplamalı kamera, drone ve aksesuarlar" src="' + img + '"></div></section>' +
      '<section class="bg-find" id="bg-find" data-bg="find"><div class="bg-find-h"><div><span class="bg-eyebrow">CİHAZINI SEÇ</span><h2>Cihazın için kaplama bul</h2></div><small>800+ kamera, lens, drone ve gimbal modeli</small></div>' +
        '<div class="bg-cats">' + cats + '</div>' +
        '<div class="bg-srch"><label for="bg-q" style="position:absolute;width:1px;height:1px;overflow:hidden">Model ara</label><input id="bg-q" type="text" autocomplete="off" placeholder="Model ara: ZV-E10, Avata 2, X-S20…"><a class="bg-go" href="/betaguard-kaplama">Desenleri gör</a><div class="bg-sugg"></div></div>' +
        '<div class="bg-res"></div>' +
        '<div class="bg-find-n">Cihazın listede yok mu? <a class="wl" href="' + WA + '" target="_blank" rel="noopener">WhatsApp\'tan yaz</a>, kesimi var mı hemen söyleyelim.</div>' +
      '</section>';
  }

  function wireSearch(root) {
    var q = root.querySelector('#bg-q'), sg = root.querySelector('.bg-sugg'), res = root.querySelector('.bg-res');
    if (!q || q.dataset.wired) return; q.dataset.wired = '1';
    function show(list) {
      if (!list.length) { sg.style.display = 'none'; return; }
      sg.innerHTML = list.map(function (m, i) { return '<div data-i="' + i + '"><b>' + m[0] + '</b> ' + m[1] + '</div>'; }).join('');
      sg.style.display = 'block';
      sg._list = list;
    }
    function pick(m) {
      q.value = m[0] + ' ' + m[1]; sg.style.display = 'none';
      res.innerHTML = '<span class="ok">✓ ' + m[0] + ' ' + m[1] + ' için kaplamamız var.</span> Desenleri görmek için butona bas.';
      var go = root.querySelector('.bg-go'); if (go) go.href = KAPLAMA_URL + '?cihaz=' + encodeURIComponent(m[0] + '|' + m[1]);
    }
    var goB = root.querySelector('.bg-go');
    if (goB) goB.addEventListener('click', function (e) {
      if (goB.href.indexOf('cihaz=') < 0 && q.value.trim() && sg._list && sg._list.length) { e.preventDefault(); pick(sg._list[0]); location.href = goB.href; }
    });
    q.addEventListener('input', function () {
      if (goB) goB.href = KAPLAMA_URL;
      var v = norm(q.value); res.textContent = '';
      if (v.length < 2) { show([]); return; }
      var out = [], all = models();
      out = smartFind(all, q.value, function (m) { return m[0] + ' ' + m[1]; }, 8);
      show(out);
      if (!out.length) res.innerHTML = 'Bu model listede görünmüyor. <a class="wl" href="' + WA + '" target="_blank" rel="noopener" style="color:#E2C285">WhatsApp\'tan yaz</a>, kesimi var mı hemen söyleyelim.';
    });
    sg.addEventListener('mousedown', function (e) {
      var d = e.target.closest('div[data-i]'); if (!d) return; e.preventDefault(); pick(sg._list[+d.dataset.i]);
    });
    q.addEventListener('blur', function () { setTimeout(function () { sg.style.display = 'none'; }, 150); });
    q.addEventListener('keydown', function (e) { if (e.key === 'Enter' && sg._list && sg._list.length && sg.style.display === 'block') { pick(sg._list[0]); } });
  }

  function addTop() {
    if (!isHome()) { var o = document.querySelector('[data-bg-top]'); if (o) o.remove(); return; }
    var wrap = mainWrap(); if (!wrap) return;
    // hide original slider + original category-card section
    var hero = document.querySelector('img[data-bg-hero]:not([data-bg-top] img)');
    var heroSec = hero ? sectionOf(hero) : null;
    var catA = document.querySelector('a.bg-has-sil');
    var catSec = catA ? sectionOf(catA) : null;
    if (catSec && catSec !== wrap) catSec.classList.add('bg-hide');
    var box = document.querySelector('[data-bg-top]');
    if (!box) {
      var img = heroImg(); if (!img) return; // wait until slider image known
      box = document.createElement('div'); box.setAttribute('data-bg-top', '1'); box.innerHTML = topHTML(img);
      var anchor = heroSec && heroSec.parentElement === wrap ? heroSec : null;
      if (!anchor) { var kids = wrap.children; anchor = kids.length > 1 ? kids[1] : null; }
      wrap.insertBefore(box, anchor);
      wireSearch(box);
    }
    if (heroSec && heroSec !== wrap) heroSec.classList.add('bg-hide');
    // keep marquee right after the top block
    var mq = document.querySelector('.bg-marq');
    if (mq && box.nextElementSibling !== mq && mq.parentElement === wrap) wrap.insertBefore(mq, box.nextElementSibling);
  }

  /* ---------- v4/v5: product page (design layout): series -> color picker, synced gallery, device preselect ---------- */
  var css4 = [
    '.bg-pp{display:flex;flex-direction:column;gap:18px;padding:2px 0 6px}',
    '.bg-pp-h{display:flex;justify-content:space-between;align-items:center;gap:12px;font:700 15px/1.2 Manrope,sans-serif;color:#F2F0EB}',
    '.bg-pp-h em{font-style:normal;font-weight:500;color:#A3A09A}',
    '.bg-pp-all{border:1px solid #3A383F;background:transparent;color:#E2C285;border-radius:999px;padding:7px 14px;font:600 13px Manrope,sans-serif;cursor:pointer;min-height:36px}',
    '.bg-pp-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(84px,1fr));gap:10px;margin-top:10px}',
    '.bg-pp-card{display:flex;flex-direction:column;gap:4px;padding:4px 4px 8px;border-radius:12px;border:2px solid #2A292E;background:transparent;cursor:pointer;text-align:left;min-width:0;color:#F2F0EB;font-family:Manrope,sans-serif;transition:border-color .15s,opacity .15s}',
    '.bg-pp-card:hover{border-color:#5A5560}',
    '.bg-pp-card.on{border-color:#C9A45C;background:#211D15}',
    '.bg-pp-card.dim{opacity:.5}',
    '.bg-pp-card img,.bg-pp-ph{width:100%;aspect-ratio:1/1;object-fit:cover;display:block;border-radius:9px;background:#18181A}',
    '.bg-pp-ph{display:flex;align-items:center;justify-content:center;font:italic 900 22px Archivo,sans-serif;color:#C9A45C;background:radial-gradient(120% 90% at 50% 30%,#232227,#141416);border:1px solid #26252A;box-sizing:border-box}',
    '.bg-pp-card b{font-size:12px;font-weight:600;color:#D6D2CA;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
    '.bg-pp-card small{font-size:11px;color:#A3A09A}',
    '.bg-pp-need{font:600 14px Manrope,sans-serif;color:#E2C285;margin:4px 0 8px}',
    '.bg-pp-lock{opacity:.45;pointer-events:none;filter:grayscale(1)}',
    '.bg-dev{display:flex;flex-direction:column;gap:8px;margin:2px 0 12px;position:relative}',
    '.bg-dev label{font:700 15px Manrope,sans-serif;color:#F2F0EB}',
    '.bg-dev input{background:#18181A;border:1px solid #3A383F;border-radius:12px;padding:13px 16px;color:#F2F0EB;font:16px Manrope,sans-serif;outline:none}',
    '.bg-dev input:focus{border-color:#C9A45C}',
    '.bg-dev .bg-sugg{top:76px}',
    '.bg-chip{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;background:#211D15;border:1px solid #C9A45C;border-radius:12px;padding:11px 14px;font:14px Manrope,sans-serif;color:#F2F0EB}',
    '.bg-chip strong{color:#E2C285}',
    '.bg-chip button{border:1px solid #3A383F;background:transparent;color:#F2F0EB;border-radius:999px;padding:6px 14px;font:600 13px Manrope,sans-serif;cursor:pointer;min-height:34px}',
    '.bg-gal{display:flex;flex-direction:column;gap:12px;width:100%}',
    '.bg-gal-main{position:relative;border-radius:20px;overflow:hidden;background:#18181A}',
    '.bg-gal-main img{width:100%;aspect-ratio:1/1;object-fit:cover;display:block;border-radius:0!important}',
    '.bg-gal-nav{position:absolute;top:50%;transform:translateY(-50%);width:44px;height:44px;border-radius:999px;border:1px solid #3A383F;background:rgba(14,14,15,.75);display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:2}',
    '.bg-gal-nav svg{width:18px;height:18px;fill:none;stroke:#F2F0EB;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}',
    '.bg-gal-cap{position:absolute;left:14px;right:14px;bottom:14px;display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;z-index:2}',
    '.bg-gal-cap span{background:rgba(14,14,15,.8);border:1px solid #3A383F;border-radius:999px;padding:8px 14px;font:700 14px Manrope,sans-serif;color:#F2F0EB}',
    '.bg-gal-cap button{border:none;border-radius:999px;padding:10px 18px;background:#C9A45C;color:#141210;font:700 14px Manrope,sans-serif;cursor:pointer;min-height:42px}',
    '.bg-gal-th{display:grid;grid-template-columns:repeat(auto-fill,minmax(64px,1fr));gap:10px}',
    '.bg-gal-th button{padding:0;border:2px solid transparent;border-radius:10px;overflow:hidden;background:transparent;cursor:pointer}',
    '.bg-gal-th button.on{border-color:#C9A45C}',
    '.bg-gal-th img{width:100%;aspect-ratio:1/1;object-fit:cover;display:block;border-radius:8px!important}',
    '.bg-gal-note{margin:0;font:13px/1.5 Manrope,sans-serif;color:#A3A09A}',
    '.bg-float{position:absolute;z-index:5;box-sizing:border-box}',
    '.bg-pp,.bg-dev{width:100%;min-width:0;box-sizing:border-box;align-self:stretch}',
    '.bg-gal-ph{width:100%;aspect-ratio:1/1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;background:radial-gradient(110% 80% at 50% 30%,#26252B 0%,#141416 70%);color:#F2F0EB;text-align:center;padding:24px;box-sizing:border-box}',
    '.bg-gal-ph svg{width:28%;height:auto;fill:none;stroke:#C9A45C;stroke-width:1.6}',
    '.bg-gal-ph b{font:italic 900 clamp(26px,3.4vw,44px)/1.05 Archivo,sans-serif;letter-spacing:.01em}',
    '.bg-gal-ph small{font:600 13px Manrope,sans-serif;color:#A3A09A;letter-spacing:.12em;text-transform:uppercase}',
    '.bg-gal-th .bg-th-ph{width:100%;aspect-ratio:1/1;display:flex;align-items:center;justify-content:center;background:#1B1B1E;color:#C9A45C;font:italic 900 15px Archivo,sans-serif;border-radius:8px}',
    '[data-bg-pwrap]{max-width:none!important;width:min(1240px,calc(100% - 48px))!important;margin-left:auto!important;margin-right:auto!important}',
    '[data-bg-pgrid]>*:not([data-bg-pinfo]){visibility:hidden!important;height:0!important;min-height:0!important;overflow:hidden!important}',
    '@media (min-width:900px){[data-bg-pgrid]{grid-template-columns:minmax(0,1.08fr) minmax(0,1fr)!important;column-gap:48px!important;align-items:start!important}[data-bg-pgrid]>*{grid-column:1;grid-row:1}[data-bg-pgrid]>[data-bg-pinfo]{grid-column:2!important;grid-row:1!important}}',
    '@media (max-width:899px){[data-bg-pwrap]{width:calc(100% - 32px)!important}}',
    '[data-bg-ptitle]{font:italic 900 46px/1.02 Archivo,sans-serif!important;letter-spacing:.005em;color:#F2F0EB!important}',
    '[data-bg-ptitle]::after{content:"Cihazına özel hassas kesim. Kamera, lens, drone, gimbal ve aksiyon kameralar için.";display:block;margin-top:12px;font:400 16px/1.6 Manrope,sans-serif;font-style:normal;color:#B9B5AD}',
    '@media (max-width:640px){[data-bg-ptitle]{font-size:36px!important}}',
    '[data-bg-pprice]{font:800 30px Archivo,sans-serif!important;color:#E2C285!important}',
    '.pcz-title{display:none!important}',
    '[data-bg-pcart]{min-height:54px!important;border-radius:999px!important;font:700 17px Manrope,sans-serif!important}',
    '[data-bg-pcart] *{font-weight:700!important;font-size:17px!important;color:#141210!important}',
    '.bg-gal-main:has(.bg-gal-ph) .bg-gal-cap span{display:none}',
    '.bg-gal-main .bg-gal-cap{top:14px!important;bottom:auto!important;left:auto!important;right:14px!important}',
    '.bg-gal-bot{position:absolute;left:14px;right:14px;bottom:14px;display:flex;align-items:center;gap:10px;z-index:2}',
    '.bg-gal-pick{border:none;border-radius:999px;padding:10px 18px;background:#C9A45C;color:#141210;font:700 14px Manrope,sans-serif;cursor:pointer;min-height:42px}',
    '.bg-gal-ctl{margin-left:auto;display:flex;align-items:center;gap:2px;background:rgba(14,14,15,.82);border:1px solid #3A383F;border-radius:999px;padding:3px}',
    '.bg-gal-ctl button{width:36px;height:36px;border:none;background:transparent;border-radius:999px;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0}',
    '.bg-gal-ctl button:hover{background:#2A292E}',
    '.bg-gal-ctl svg{width:16px;height:16px;fill:none;stroke:#F2F0EB;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}',
    '.bg-gal-ctl span{font:700 13px Manrope,sans-serif;color:#F2F0EB;min-width:46px;text-align:center}',
    '@media (max-width:640px){.bg-gal-bot{left:10px;right:10px;bottom:10px}.bg-gal-main .bg-gal-cap{top:10px!important;right:10px!important;left:auto!important}.bg-gal-ctl button{width:32px;height:32px}.bg-gal-pick{padding:8px 14px;min-height:38px;font-size:13px}}',
    '.bg-gal-main:has(.bg-gal-ph) .bg-gal-cap{justify-content:center}',
    '.pcz-field:has(> select option:checked:not([value=""])) > .pcz-error{display:none!important}',
    '.pcz-field:has(> select option:checked:not([value=""])) > select{border-color:#3A383F!important}',
    '@media (max-width:640px){.bg-gal-th{display:flex;overflow-x:auto;gap:8px;scrollbar-width:none;padding-bottom:2px}.bg-gal-th::-webkit-scrollbar{display:none}.bg-gal-th button{flex:0 0 56px}.bg-gal-note{display:none}.bg-gal-ph{gap:10px}.bg-gal-ph b{font-size:30px}.bg-gal-ph svg{width:22%}.bg-gal-nav{width:38px;height:38px}.bg-gal-cap{bottom:10px;left:10px;right:10px}}'
  ].join('');
  var st4 = document.createElement('style'); st4.id = 'bg-theme-css4'; st4.textContent = css4;
  (document.head || document.documentElement).appendChild(st4);

  var MERCHANT = '3343706a-8edb-4c74-a651-8671f39feb90';
  var KAPLAMA_URL = '/betaguard-kaplama';
  function ikData() { return window.__IKAS_DATA__ || null; }
  function prodData() { var d = ikData(); return d && d.pageType === 'PRODUCT' ? d.pageSpecificData : null; }
  function imgUrl(id, size) { return '/images/' + MERCHANT + '/' + id + '/image_' + (size || 1080) + '.webp'; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function initials(s) { var w = s.trim().split(/\s+/); return (w.length > 1 ? w.map(function (x) { return x[0]; }).join('') : w[0].slice(0, 2)).slice(0, 2).toUpperCase(); }
  function leafText(t, root) {
    var all = (root || document.getElementById('app') || document).querySelectorAll('div,span,p');
    for (var i = 0; i < all.length; i++) if (!all[i].children.length && txt(all[i]) === t) return all[i];
    return null;
  }

  // the main product's "Desen" label (other copies sit off-screen in sliders / quick views)
  function findDesen() {
    var all = document.querySelectorAll('#app div,#app span'), cw = document.documentElement.clientWidth, first = null;
    for (var i = 0; i < all.length; i++) {
      var e = all[i]; if (e.children.length || txt(e) !== 'Desen' || (window.bgInFx && window.bgInFx(e))) continue;
      var r = e.getBoundingClientRect(); if (!first) first = e;
      if (r.right > 0 && r.left < cw) return e;
    }
    return null;
  }
  // ---- series model built from the "Desen" variant type ----
  function buildSeries(p) {
    var vt = null;
    for (var i = 0; i < (p.variantTypes || []).length; i++) { var t = p.variantTypes[i].variantType; if (t && /desen/i.test(t.name)) { vt = t; break; } }
    if (!vt) return null;
    var byVal = {};
    (p.variants || []).forEach(function (v) {
      (v.variantValues || []).forEach(function (vv) {
        if (vv.variantTypeId === vt.id) byVal[vv.id] = (v.images || []).slice().sort(function (a, b) { return (a.order || 0) - (b.order || 0); }).map(function (im) { return im.imageId; }).filter(Boolean);
      });
    });
    var order = [], map = {};
    vt.values.forEach(function (val) {
      var words = val.name.trim().split(/\s+/);
      var sName = words.length > 1 ? words.slice(0, -1).join(' ') : words[0];
      if (!map[sName]) { map[sName] = { name: sName, colors: [] }; order.push(sName); }
      map[sName].colors.push({ id: val.id, name: val.name, imgs: byVal[val.id] || [] });
    });
    return { vt: vt, list: order.map(function (k) { return map[k]; }) };
  }

  var PP = { series: null, color: 0, img: 0, picked: false };
  function curSel(p, S) {
    var sv = (p.selectedVariantValues || [])[0];
    if (!sv) return null;
    for (var i = 0; i < S.list.length; i++) for (var j = 0; j < S.list[i].colors.length; j++) if (S.list[i].colors[j].id === sv.id) return [i, j];
    return null;
  }
  var lastDev = null;
  function clickNative(name, block) {
    var root = document.querySelector('[data-bg-spacer="pp"]');
    var el = leafText(name, root || block); if (!el) return;
    // the theme resets option state on variant change: remember the chosen device options and re-apply them
    var snap = [], ss = document.querySelectorAll('#app select');
    for (var i = 0; i < ss.length; i++) if (ss[i].value) snap.push(ss[i].value);
    el.click();
    if (snap.length) setTimeout(function () { applyIds(snap); }, 700);
  }
  function applyIds(ids, done) {
    var k = 0, tries = 0;
    (function next() {
      if (k >= ids.length) { if (done) done(true); return; }
      if (setSel(ids[k])) { k++; tries = 0; setTimeout(next, 250); }
      else if (++tries < 20) setTimeout(next, 150);
      else if (done) done(false);
    })();
  }
  function cardImg(c) { return c.imgs[0] ? '<img src="' + imgUrl(c.imgs[0], 360) + '" alt="" loading="lazy">' : '<div class="bg-pp-ph">' + esc(initials(c.name)) + '</div>'; }

  function galleryItems(S) {
    if (PP.series === null) return S.list.map(function (s, i) { var c = s.colors[0]; return { id: c.imgs[0], name: s.name, sub: s.colors.length > 1 ? s.colors.length + ' renk' : 'tek renk', cap: s.name + ' serisi · ' + (s.colors.length > 1 ? s.colors.length + ' renk' : 'tek renk'), si: i }; });
    var s = S.list[PP.series], out = [];
    s.colors.forEach(function (c, ci) { out.push({ id: c.imgs[0], name: c.name, sub: s.name + ' serisi', cap: c.name, ci: ci }); });
    var sel = s.colors[PP.color];
    if (sel) sel.imgs.slice(1).forEach(function (id) { out.push({ id: id, cap: sel.name + ' · gerçek çekim', ci: -1 }); });
    return out;
  }

  function renderPP(box, S, block) {
    var sHTML = S.list.map(function (s, i) {
      var cls = 'bg-pp-card' + (PP.series === i ? ' on' : (PP.series !== null ? ' dim' : ''));
      return '<button type="button" class="' + cls + '" data-s="' + i + '" aria-label="' + esc(s.name) + ' serisi">' + cardImg(s.colors[0]) + '<b>' + esc(s.name) + '</b><small>' + (s.colors.length > 1 ? s.colors.length + ' renk' : 'tek renk') + '</small></button>';
    }).join('');
    var h = '<div><div class="bg-pp-h"><span>1. Seri</span>' + (PP.series !== null ? '<button type="button" class="bg-pp-all">Tüm seriler</button>' : '<em>' + S.list.length + ' seri</em>') + '</div><div class="bg-pp-grid">' + sHTML + '</div></div>';
    var s = PP.series !== null ? S.list[PP.series] : null;
    if (s && s.colors.length > 1) {
      h += '<div><div class="bg-pp-h"><span>2. Renk</span><em>' + esc(s.colors[PP.color].name) + '</em></div><div class="bg-pp-grid">' + s.colors.map(function (c, ci) {
        return '<button type="button" class="bg-pp-card' + (ci === PP.color ? ' on' : '') + '" data-c="' + ci + '" aria-label="' + esc(c.name) + '">' + cardImg(c) + '<b>' + esc(c.name) + '</b></button>';
      }).join('') + '</div></div>';
    }
    if (PP.series === null) h += '<div class="bg-pp-need">Önce serini seç, sonra cihazını.</div>';
    box.innerHTML = h;
    box.onclick = function (e) {
      var b = e.target.closest('button'); if (!b) return;
      if (b.classList.contains('bg-pp-all')) { PP.series = null; PP.color = 0; PP.img = 0; return refreshPP(); }
      if (b.dataset.s !== undefined) { selectSeries(+b.dataset.s, S, block); return; }
      if (b.dataset.c !== undefined) { selectColor(+b.dataset.c, S, block); }
    };
  }
  function selectSeries(i, S, block) {
    PP.series = i; PP.color = 0; PP.img = 0; PP.picked = true;
    clickNative(S.list[i].colors[0].name, block); refreshPP();
  }
  function selectColor(ci, S, block) {
    PP.color = ci; PP.picked = true;
    var items = galleryItems(S);
    for (var k = 0; k < items.length; k++) if (items[k].ci === ci) { PP.img = k; break; }
    clickNative(S.list[PP.series].colors[ci].name, block); refreshPP();
  }

  var CHEV_L = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 L8 12 L15 19"/></svg>', CHEV_R = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5 L16 12 L9 19"/></svg>';
  var SHIELD = '<svg viewBox="0 0 30 34" aria-hidden="true"><path d="M15 2 L27 6 V17 C27 24 21.5 29.5 15 32 C8.5 29.5 3 24 3 17 V6 Z"/><path d="M11 10 H17 C19.5 10 20.5 11.5 20.5 13 C20.5 14.6 19.4 15.8 17.6 16 C19.8 16.2 21 17.6 21 19.4 C21 21.4 19.6 23 17 23 H11 Z"/></svg>';
  function renderGal(g, S, block) {
    var items = galleryItems(S);
    if (!items.length) { g.innerHTML = ''; return false; }
    if (PP.syncImg) { PP.syncImg = false; for (var k0 = 0; k0 < items.length; k0++) if (items[k0].ci === PP.color) { PP.img = k0; break; } }
    if (PP.img >= items.length) PP.img = 0;
    var cur = items[PP.img];
    var h = '<div class="bg-gal-main">' + (cur.id ? '<img src="' + imgUrl(cur.id, 1080) + '" alt="' + esc(cur.cap) + '">' : '<div class="bg-gal-ph" role="img" aria-label="' + esc(cur.cap) + '">' + SHIELD + '<b>' + esc(cur.name) + '</b><small>' + esc(cur.sub) + '</small></div>');
    h += '<div class="bg-gal-cap"><span>' + esc(cur.cap) + '</span></div>';
    h += '<div class="bg-gal-bot">' + (PP.series === null ? '<button type="button" class="bg-gal-pick" data-pick="' + cur.si + '">Bu seriyi seç</button>' : '') +
      (items.length > 1 ? '<div class="bg-gal-ctl"><button type="button" data-n="-1" aria-label="Önceki görsel">' + CHEV_L + '</button><span>' + (PP.img + 1) + ' / ' + items.length + '</span><button type="button" data-n="1" aria-label="Sonraki görsel">' + CHEV_R + '</button></div>' : '') + '</div></div>';
    if (items.length > 1) h += '<div class="bg-gal-th">' + items.map(function (it, k) { return '<button type="button" class="' + (k === PP.img ? 'on' : '') + '" data-k="' + k + '" aria-label="' + esc(it.cap) + '">' + (it.id ? '<img src="' + imgUrl(it.id, 180) + '" alt="" loading="lazy">' : '<span class="bg-th-ph">' + esc(initials(it.name)) + '</span>') + '</button>'; }).join('') + '</div>';
    h += '<p class="bg-gal-note">' + (PP.series === null ? 'Tüm seriler. Bir seri seçince sadece o serinin renkleri kalır.' : 'Görseller arasında gezinince seçili renk de değişir.') + (items.some(function (x) { return !x.id; }) ? ' Görseli olmayan desenler için temsili kart gösteriliyor.' : '') + '</p>' + TRUST_HTML;
    g.innerHTML = h;
    g.onclick = function (e) {
      var b = e.target.closest('button'); if (!b) return;
      if (b.dataset.pick !== undefined) return selectSeries(+b.dataset.pick, S, block);
      var n = b.dataset.n !== undefined ? PP.img + (+b.dataset.n) : (b.dataset.k !== undefined ? +b.dataset.k : null);
      if (n === null) return;
      n = (n + items.length) % items.length; PP.img = n;
      var it = items[n];
      if (PP.series !== null && it.ci >= 0 && it.ci !== PP.color) { PP.color = it.ci; PP.picked = true; clickNative(S.list[PP.series].colors[it.ci].name, block); }
      refreshPP();
    };
    // swipe on touch screens
    var sx = null;
    g.ontouchstart = function (e) { sx = e.touches[0].clientX; };
    g.ontouchend = function (e) {
      if (sx === null) return; var dx = e.changedTouches[0].clientX - sx; sx = null;
      if (Math.abs(dx) > 40) { var bt = g.querySelector('.bg-gal-ctl button[data-n="' + (dx < 0 ? 1 : -1) + '"]'); if (bt) bt.click(); }
    };
    return true;
  }

  function nativeGalleryRoot(block) {
    var imgs = document.querySelectorAll('#app img'), best = null, bw = 0;
    for (var i = 0; i < imgs.length; i++) {
      var im = imgs[i]; if (im.closest('header,footer,.bg-gal,.bg-pp,[data-bg-home]')) continue;
      var w = im.getBoundingClientRect().width; if (w > bw && im.currentSrc.indexOf('/images/' + MERCHANT) >= 0) { bw = w; best = im; }
    }
    if (!best || bw < 200) return null;
    var a = best; while (a && !a.contains(block)) a = a.parentElement;
    if (!a) return null;
    var g = best; while (g.parentElement && g.parentElement !== a) g = g.parentElement;
    return g;
  }

  // ---- device option index from the product option set ----
  function devIndex(p) {
    var os = p.productOptionSet; if (!os || !os.options) return null;
    var type = null, brands = [], models = [];
    os.options.forEach(function (o) {
      if (/tür/i.test(o.name)) type = o; else if (/marka/i.test(o.name)) brands.push(o); else if (/model/i.test(o.name)) models.push(o);
    });
    if (!type) return null;
    var vals = function (o) { return (o.selectSettings && o.selectSettings.values) || (o.values) || []; };
    var tName = {}; vals(type).forEach(function (v) { tName[v.id] = v.value; });
    var bInfo = {};
    brands.forEach(function (b) { var t = (b.requiredOptionValueIds || [])[0]; vals(b).forEach(function (v) { bInfo[v.id] = { brand: v.value, type: tName[t] || '', typeId: t }; }); });
    var out = [];
    models.forEach(function (m) {
      var bid = (m.requiredOptionValueIds || [])[0], bi = bInfo[bid]; if (!bi) return;
      vals(m).forEach(function (v) { out.push({ type: bi.type, typeId: bi.typeId, brand: bi.brand, brandId: bid, model: v.value, modelId: v.id, key: norm(bi.brand + ' ' + v.value) }); });
    });
    return out;
  }
  function setSel(valueId) {
    var ss = document.querySelectorAll('#app select');
    for (var i = 0; i < ss.length; i++) {
      var s = ss[i];
      for (var j = 0; j < s.options.length; j++) if (s.options[j].value === valueId) {
        var setter = Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype, 'value').set;
        setter.call(s, valueId);
        s.dispatchEvent(new Event('input', { bubbles: true }));
        s.dispatchEvent(new Event('change', { bubbles: true }));
        return true;
      }
    }
    return false;
  }
  function applyDevice(e, done) { applyIds([e.typeId, e.brandId, e.modelId], done); }
  function findDevice(idx, q) {
    var n = norm(q); if (!n) return null;
    for (var i = 0; i < idx.length; i++) if (idx[i].key === n) return idx[i];
    for (i = 0; i < idx.length; i++) if (idx[i].key.indexOf(n) >= 0 || n.indexOf(idx[i].key) >= 0) return idx[i];
    return null;
  }
  function devHTML() {
    return '<label for="bg-dq">Cihazını ara</label><input id="bg-dq" type="text" autocomplete="off" placeholder="Model yaz: a7 iv, r6, mini 4 pro…"><div class="bg-sugg"></div><div class="bg-chip-wrap"></div>';
  }
  function wireDev(box, idx) {
    var q = box.querySelector('#bg-dq'), sg = box.querySelector('.bg-sugg'), chipW = box.querySelector('.bg-chip-wrap');
    function chip(e, from) {
      chipW.innerHTML = '<div class="bg-chip"><span>' + (from ? 'Ana sayfada seçtiğin cihaz: ' : 'Seçili cihaz: ') + '<strong>' + esc(e.brand + ' ' + e.model) + '</strong></span><button type="button">Değiştir</button></div>';
      chipW.querySelector('button').onclick = function () { chipW.innerHTML = ''; lastDev = null; q.value = ''; q.focus(); };
    }
    function pick(e, from) { q.value = ''; sg.style.display = 'none'; lastDev = e; applyDevice(e, function (ok) { if (ok) chip(e, from); }); }
    q.addEventListener('input', function () {
      var v = norm(q.value); if (v.length < 2) { sg.style.display = 'none'; return; }
      var out = smartFind(idx, q.value, function (m) { return m.brand + ' ' + m.model; }, 8);
      if (!out.length) { sg.innerHTML = '<div style="cursor:default">Bulamadık. <a href="' + WA + '" target="_blank" rel="noopener" style="color:#E2C285">WhatsApp\'tan yaz</a></div>'; sg.style.display = 'block'; sg._list = []; return; }
      sg.innerHTML = out.map(function (m, i) { return '<div data-i="' + i + '"><b>' + esc(m.brand) + '</b> ' + esc(m.model) + ' <span style="color:#A3A09A">· ' + esc(m.type) + '</span></div>'; }).join('');
      sg.style.display = 'block'; sg._list = out;
    });
    sg.addEventListener('mousedown', function (e) { var d = e.target.closest('div[data-i]'); if (!d) return; e.preventDefault(); pick(sg._list[+d.dataset.i], false); });
    q.addEventListener('blur', function () { setTimeout(function () { sg.style.display = 'none'; }, 150); });
    q.addEventListener('keydown', function (e) { if (e.key === 'Enter' && sg._list && sg._list.length) { e.preventDefault(); pick(sg._list[0], false); } });
    var param = new URLSearchParams(location.search).get('cihaz');
    if (param && !box.dataset.pre) { box.dataset.pre = '1'; var e = findDevice(idx, param.replace('|', ' ')); if (e) pick(e, true); }
    var tur = new URLSearchParams(location.search).get('tur');
    if (tur && !param && !box.dataset.pre) { box.dataset.pre = '1'; for (var ti = 0; ti < idx.length; ti++) if (norm(idx[ti].type) === norm(tur)) { applyIds([idx[ti].typeId]); break; } }
  }

  function cartWrap() {
    var c = leafText('Sepete Ekle') || leafText('Tükendi'); if (!c) return null;
    var w = c; for (var i = 0; i < 3 && w.parentElement; i++) w = w.parentElement;
    return w;
  }
  // Panels live in <body> (outside the theme's renderer) and are laid over invisible spacers.
  var spacerCss = document.createElement('style'); spacerCss.id = 'bg-theme-spacers';
  (document.head || document.documentElement).appendChild(spacerCss);
  var spacerH = {};
  function setSpacer(name, h) {
    if (spacerH[name] === h) return; spacerH[name] = h;
    var out = '';
    for (var k in spacerH) if (spacerH[k] != null) out += '[data-bg-spacer="' + k + '"]{visibility:hidden!important;height:' + spacerH[k] + 'px!important;min-height:0!important;overflow:hidden!important;align-self:stretch!important}';
    spacerCss.textContent = out;
  }
  function place(host, anchor) {
    var r = anchor.getBoundingClientRect();
    var l = Math.round(r.left + window.scrollX) + 'px', t = Math.round(r.top + window.scrollY) + 'px', w = Math.round(r.width) + 'px';
    if (host.style.left !== l) host.style.left = l;
    if (host.style.top !== t) host.style.top = t;
    if (host.style.width !== w) host.style.width = w;
  }
  var ppState = null;
  function refreshPP() {
    if (!ppState) return;
    renderPP(ppState.box, ppState.S, ppState.block);
    if (ppState.gal) { if (!renderGal(ppState.gal, ppState.S, ppState.block)) { ppState.gal.style.display = 'none'; setSpacer('gal', null); } else ppState.gal.style.display = ''; }
    syncPP();
  }
  function syncPP() {
    if (!ppState) return;
    var lab = findDesen(); if (lab) ppState.block = lab.parentElement;
    var b = ppState.block;
    if (b && document.body.contains(b)) {
      if (b.getAttribute('data-bg-spacer') !== 'pp') b.setAttribute('data-bg-spacer', 'pp');
      ppState.box.style.display = '';
      setSpacer('pp', ppState.box.offsetHeight + 4);
      place(ppState.box, b);
    } else ppState.box.style.display = 'none';
    layoutPP(b);
    var cw = cartWrap(); if (cw && cw.classList.contains('bg-pp-lock') !== (PP.series === null)) cw.classList.toggle('bg-pp-lock', PP.series === null);
  }
  window.bgInFx = function(el){ for (var x = el; x && x !== document.body; x = x.parentElement) { if (getComputedStyle(x).position === 'fixed') return true; } return false; };
  function tag(el, attr) { if (el && !el.hasAttribute(attr) && !window.bgInFx(el)) el.setAttribute(attr, '1'); }
  var layCss = document.createElement('style'); layCss.id = 'bg-theme-layout';
  (document.head || document.documentElement).appendChild(layCss);
  function layoutPP(b) {
    if (!b || !ppState.gal || (window.bgInFx && window.bgInFx(b))) return;
    var info = b; while (info.parentElement && getComputedStyle(info.parentElement).display !== 'grid') info = info.parentElement;
    var grid = info.parentElement; if (!grid || grid === document.body) return;
    tag(info, 'data-bg-pinfo'); tag(grid, 'data-bg-pgrid'); tag(grid.parentElement, 'data-bg-pwrap');
    // title / price / cart styling hooks
    var p = prodData(), all = info.querySelectorAll('div,span,h1,h2');
    for (var i = 0; i < all.length; i++) {
      var e = all[i]; if (e.children.length) continue; var tx = txt(e);
      if (p && tx === p.name && !e.closest('[data-bg-spacer]')) tag(e, 'data-bg-ptitle');
      else if (/^(₺\s?[\d.,]+|[\d.,]+\s?₺)$/.test(tx) && !info.querySelector('[data-bg-pprice]') && !e.closest('.pcz')) tag(e, 'data-bg-pprice');
    }
    var c = leafText('Sepete Ekle', info) || leafText('Tükendi', info); if (c && c.parentElement) tag(c.parentElement, 'data-bg-pcart');
    var lab = document.querySelector('.bg-dev label'); if (lab) { var n = (PP.series !== null && ppState.S.list[PP.series].colors.length > 1 ? 3 : 2) + '. Cihazın'; if (lab.textContent !== n) lab.textContent = n; }
    var wide = window.innerWidth >= 900, gr = grid.getBoundingClientRect();
    var gw = wide ? Math.round((gr.width - 48) * 1.08 / 2.08) : Math.round(gr.width);
    var g = ppState.gal; if (g.style.width !== gw + 'px') g.style.width = gw + 'px';
    var l = Math.round(gr.left + window.scrollX) + 'px', t = Math.round(gr.top + window.scrollY) + 'px';
    if (g.style.left !== l) g.style.left = l; if (g.style.top !== t) g.style.top = t;
    var gh = g.offsetHeight, css = wide ? '[data-bg-pgrid]{min-height:' + gh + 'px!important}' : '[data-bg-pgrid]{padding-top:' + (gh + 20) + 'px!important}';
    if (layCss.textContent !== css) layCss.textContent = css;
  }
  function addProductPage() {
    var p = prodData();
    if (ppState && (!p || ppState.pid !== p.id)) { ppState.box.remove(); if (ppState.gal) ppState.gal.remove(); ppState = null; spacerH = {}; spacerCss.textContent = ''; layCss.textContent = ''; }
    if (!p) return;
    if (ppState && ppState.pid === p.id) { syncPP(); addDev(p); return; }
    var lab = findDesen(); if (!lab) return;
    var S = buildSeries(p); if (!S || !S.list.length) return;
    PP = { series: null, color: 0, img: 0, picked: false };
    if (/[?&](desen|variant|v[a-z]*id)=/i.test(location.search) || (window.__bgIsDev && window.__bgIsDev())) { var cs = curSel(p, S); if (cs) { PP.series = cs[0]; PP.color = cs[1]; PP.syncImg = true; } }
    var box = document.createElement('div'); box.className = 'bg-pp bg-float'; box.setAttribute('data-bg-pp', '1');
    document.body.appendChild(box);
    var gal = document.createElement('div'); gal.className = 'bg-gal bg-float'; document.body.appendChild(gal);
    ppState = { pid: p.id, S: S, block: lab.parentElement, box: box, gal: gal };
    refreshPP(); addDev(p);
  }
  function addDev(p) {
    if (document.querySelector('.bg-dev')) return;
    var idx = devIndex(p), sel = document.querySelector('#app select');
    if (!idx || !idx.length || !sel) return;
    var pcz = sel.closest('.pcz') || sel.parentElement;
    var dv = document.createElement('div'); dv.className = 'bg-dev'; dv.innerHTML = devHTML();
    pcz.parentNode.insertBefore(dv, pcz);
    wireDev(dv, idx);
  }
  setInterval(function () { if (ppState) syncPP(); }, 400);
  window.addEventListener('resize', function () { if (ppState) syncPP(); });

  /* ---------- v7: "Neden Betaguard" redesign ---------- */
  var st7 = document.createElement('style'); st7.id = 'bg-theme-css7'; st7.textContent = "[data-bg=\"feat\"]{background:radial-gradient(70% 120% at 0% 0%,rgba(201,164,92,.10),transparent 60%),#0E0E0F!important;border-top:1px solid #1F1E23;border-bottom:1px solid #1F1E23}[data-bg=\"feat\"] .bg-sec{display:grid!important;grid-template-columns:minmax(0,.85fr) minmax(0,1.4fr);column-gap:56px;row-gap:0;align-items:start;padding-top:72px!important;padding-bottom:72px!important}[data-bg=\"feat\"] .bg-eyebrow{grid-column:1;grid-row:1;align-self:end}[data-bg=\"feat\"] h2{grid-column:1;grid-row:2;font-size:44px!important;line-height:1.05!important;margin:10px 0 0!important;font-style:italic;font-weight:900!important}[data-bg=\"feat\"] h2::after{content:\"Kamera, lens, drone ve gimbalın için cihazına özel kesilmiş kaplamalar. Korur, tarzını yansıtır, istediğinde iz bırakmadan çıkar.\";display:block;margin-top:18px;font:400 16px/1.65 Manrope,sans-serif;font-style:normal;color:#B9B5AD;max-width:400px}[data-bg=\"feat\"] .bg-grid{grid-column:2;grid-row:1 / span 3;display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:16px!important;margin:0!important}[data-bg=\"feat\"] .bg-feat{background:linear-gradient(180deg,#19191C,#131315)!important;border:1px solid #26252A;border-radius:18px;padding:26px 24px 24px!important;display:flex;flex-direction:column;gap:10px;transition:transform .2s ease,border-color .2s ease}[data-bg=\"feat\"] .bg-feat:hover{transform:translateY(-3px);border-color:rgba(201,164,92,.55)}[data-bg=\"feat\"] .bg-feat svg{width:48px!important;height:48px!important;padding:11px;box-sizing:border-box;border-radius:14px;background:rgba(201,164,92,.12);border:1px solid rgba(201,164,92,.28);margin-bottom:6px}[data-bg=\"feat\"] .bg-feat h3{margin:0!important;font:800 19px/1.25 Archivo,sans-serif!important;color:#F2F0EB}[data-bg=\"feat\"] .bg-feat p{margin:0!important;font:400 14.5px/1.6 Manrope,sans-serif!important;color:#A9A59D}[data-bg=\"steps\"] h2{margin-bottom:24px!important}@media (max-width:900px){[data-bg=\"feat\"] .bg-sec{grid-template-columns:1fr;padding-top:48px!important;padding-bottom:48px!important}[data-bg=\"feat\"] .bg-grid{grid-column:1;grid-row:3;margin-top:28px!important}[data-bg=\"feat\"] h2{font-size:34px!important}}@media (max-width:520px){[data-bg=\"feat\"] .bg-grid{grid-template-columns:1fr!important;gap:12px!important}[data-bg=\"feat\"] .bg-feat{display:grid!important;grid-template-columns:48px minmax(0,1fr);column-gap:14px;row-gap:4px;padding:18px 18px!important;align-items:start}[data-bg=\"feat\"] .bg-feat svg{grid-row:1 / span 2;margin:0!important}[data-bg=\"feat\"] .bg-feat h3{font-size:17px!important;align-self:center}[data-bg=\"feat\"] .bg-feat p{font-size:14px!important}}";
  (document.head || document.documentElement).appendChild(st7);

  /* ---------- v6: hide home "Seriler" slider, point menu/category links to the product page ---------- */
  var NAVMAP = { 'seriler': '', 'kamera': 'Kamera', 'lens': 'Lens', 'drone': 'Drone', 'gimbal': 'Gimbal', 'aksiyon-kamera': 'Aksiyon%20Kamera' };
  function fixHomeAndNav() {
    var as = document.querySelectorAll('a[href]');
    for (var i = 0; i < as.length; i++) {
      var a = as[i]; if (a.hasAttribute('data-bg-href')) continue;
      var m = (a.getAttribute('href') || '').match(/^(?:https?:\/\/[^\/]+)?\/(seriler)\/?$/);   /* kategoriler kendi ikas sayfasina gider */
      if (!m) continue;
      var to = KAPLAMA_URL + (NAVMAP[m[1]] ? '?tur=' + NAVMAP[m[1]] : '');
      a.setAttribute('href', to); a.setAttribute('data-bg-href', to);
    }
    if (isHome()) {
      var all = document.querySelectorAll('#app .rich-text');
      for (var j = 0; j < all.length; j++) {
        var t = all[j]; if (t.closest('[data-bg-top],[data-bg-home],a,header')) continue;
        if (!/^(DESENİNİ SEÇ\s*)?Seriler$/.test(txt(t))) continue;
        var w = mainWrap(), sec = t; while (sec && sec.parentElement !== w) sec = sec.parentElement;
        // only the product-slider section (its title carries our eyebrow); never the header block
        if (sec && sec !== w.firstElementChild && sec.textContent.indexOf('DESENİNİ SEÇ') >= 0 && sec.textContent.indexOf('indirim') < 0 && !sec.classList.contains('bg-hide')) sec.classList.add('bg-hide');
      }
    }
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[data-bg-href]'); if (!a || e.ctrlKey || e.metaKey || e.shiftKey) return;
    e.preventDefault(); e.stopPropagation(); location.href = a.getAttribute('data-bg-href');
  }, true);

  /* ---------- v8: Instagram section (Behold JSON feed) in place of the old "Seriler" slider ---------- */
  var IG_FEED = 'https://feeds.behold.so/LiwkjsS4R0djbMtyiwLC'; // Behold JSON feed URL, e.g. https://feeds.behold.so/XXXX
  var IG_USER = 'betaguard.tr', IG_URL = 'https://instagram.com/betaguard.tr';
  var css8 = [
    '[data-bg-insta]{width:min(1452px,calc(100% - 48px));margin:56px auto 56px;color:#F2F0EB;box-sizing:border-box}',
    '.bg-ig-h{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-end;gap:16px;margin-bottom:22px}',
    '[data-bg-insta] h2{margin:8px 0 0;font:italic 900 40px/1.05 Archivo,sans-serif;color:#F2F0EB}',
    '[data-bg-insta] p{margin:10px 0 0;font:400 15px/1.6 Manrope,sans-serif;color:#A9A59D;max-width:520px}',
    '.bg-ig-follow{display:inline-flex;align-items:center;gap:10px;background:#C9A45C;color:#141210!important;text-decoration:none!important;font:700 15px Manrope,sans-serif;padding:14px 22px;border-radius:999px;white-space:nowrap}',
    '.bg-ig-follow svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.9}',
    '.bg-ig-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:12px}',
    '.bg-ig-t{position:relative;display:block;aspect-ratio:1/1;border-radius:14px;overflow:hidden;background:#18181A;border:1px solid #26252A}',
    '.bg-ig-t img{width:100%;height:100%;object-fit:cover;display:block;border-radius:0!important;transition:transform .35s ease}',
    '.bg-ig-t:hover img{transform:scale(1.05)}',
    '.bg-ig-t .bg-ig-ov{position:absolute;inset:0;display:flex;align-items:flex-end;padding:12px;background:linear-gradient(transparent 40%,rgba(10,10,11,.85));opacity:0;transition:opacity .25s;font:500 12.5px/1.45 Manrope,sans-serif;color:#F2F0EB}',
    '.bg-ig-t:hover .bg-ig-ov{opacity:1}',
    '.bg-ig-ov span{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}',
    '.bg-ig-badge{position:absolute;top:9px;right:9px;width:26px;height:26px;border-radius:8px;background:rgba(10,10,11,.6);display:flex;align-items:center;justify-content:center}',
    '.bg-ig-badge svg{width:15px;height:15px;fill:#F2F0EB}',
    '.bg-ig-empty{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px;background:radial-gradient(90% 140% at 100% 0%,rgba(201,164,92,.12),transparent 60%),#141416;border:1px solid #26252A;border-radius:20px;padding:28px 30px}',
    '@media (max-width:900px){.bg-ig-grid{grid-template-columns:repeat(3,minmax(0,1fr))}[data-bg-insta] h2{font-size:32px}}',
    '@media (max-width:640px){[data-bg-insta]{width:calc(100% - 24px);margin-top:40px}.bg-ig-grid{gap:6px}.bg-ig-t{border-radius:10px}.bg-ig-ov{display:none!important}.bg-ig-follow{padding:12px 18px}}'
  ].join('');
  var st8 = document.createElement('style'); st8.id = 'bg-theme-css8'; st8.textContent = css8;
  (document.head || document.documentElement).appendChild(st8);
  var IG_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>';
  var IG_PLAY = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5 L19 12 L8 19 Z"/></svg>';
  var IG_STACK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3 H19 A2 2 0 0 1 21 5 V17 H19 V5 H7 Z"/><rect x="3" y="7" width="14" height="14" rx="2"/></svg>';
  function igHead() {
    return '<div><span class="bg-eyebrow">INSTAGRAM</span><h2>@' + IG_USER + '</h2><p>Kaplanmış cihazlar, yeni seriler ve uygulama videoları. Sende nasıl duracağını görmek için takipte kal.</p></div>' +
      '<a class="bg-ig-follow" href="' + IG_URL + '" target="_blank" rel="noopener">' + IG_ICON + 'Takip et</a>';
  }
  function igRender(box, data) {
    var posts = (data && data.posts || []).slice(0, 6);
    if (!posts.length) { box.innerHTML = '<div class="bg-ig-empty">' + igHead() + '</div>'; return; }
    box.innerHTML = '<div class="bg-ig-h">' + igHead() + '</div><div class="bg-ig-grid">' + posts.map(function (p) {
      var sz = p.sizes || {}, src = (sz.medium && sz.medium.mediaUrl) || (sz.small && sz.small.mediaUrl) || p.thumbnailUrl || p.mediaUrl;
      var badge = p.mediaType === 'VIDEO' ? IG_PLAY : (p.mediaType === 'CAROUSEL_ALBUM' ? IG_STACK : '');
      var cap = (p.prunedCaption || p.caption || '').replace(/\s+/g, ' ').trim();
      return '<a class="bg-ig-t" href="' + esc(p.permalink || IG_URL) + '" target="_blank" rel="noopener" aria-label="Instagram gönderisi' + (cap ? ': ' + esc(cap.slice(0, 80)) : '') + '">' +
        '<img src="' + esc(src) + '" alt="' + esc(p.altText || cap.slice(0, 100) || 'Betaguard Instagram gönderisi') + '" loading="lazy">' +
        (badge ? '<span class="bg-ig-badge">' + badge + '</span>' : '') +
        (cap ? '<span class="bg-ig-ov"><span>' + esc(cap.slice(0, 140)) + '</span></span>' : '') + '</a>';
    }).join('') + '</div>';
  }
  var igData = null, igLoading = false;
  function igLoad(cb) {
    if (!IG_FEED) return cb(null);
    try { var c0 = JSON.parse(localStorage.getItem('bg_ig') || 'null'); if (c0 && c0.u === IG_FEED && Date.now() - c0.t < 6 * 3600e3) return cb(c0.d); } catch (e) { }
    if (igLoading) return; igLoading = true;
    fetch(IG_FEED).then(function (r) { return r.ok ? r.json() : null; }).then(function (d) {
      igLoading = false; if (d && d.posts) { try { localStorage.setItem('bg_ig', JSON.stringify({ u: IG_FEED, t: Date.now(), d: d })); } catch (e) { } }
      cb(d);
    }).catch(function () { igLoading = false; cb(null); });
  }
  function addInsta() {
    var ex = document.querySelector('[data-bg-insta]');
    if (!isHome()) { if (ex) ex.remove(); return; }
    var w = mainWrap(); if (!w) return;
    var anchor = null, kids = w.children;
    for (var i = 0; i < kids.length; i++) if (kids[i].classList.contains('bg-hide') && kids[i].textContent.indexOf('DESENİNİ SEÇ') >= 0) { anchor = kids[i]; break; }
    if (!anchor) return;
    if (ex) { if (ex.previousElementSibling !== anchor) w.insertBefore(ex, anchor.nextSibling); return; }
    var box = document.createElement('section'); box.setAttribute('data-bg-insta', '1'); box.setAttribute('aria-label', 'Instagram');
    w.insertBefore(box, anchor.nextSibling);
    igRender(box, igData);
    igLoad(function (d) { if (d) { igData = d; var b = document.querySelector('[data-bg-insta]'); if (b) igRender(b, d); } });
  }

  /* ---------- v9: "Sahada Betaguard" two-row sliding image wall (after the how-to steps) ---------- */
  // Add image URLs here (square or 4:5). Empty = numbered placeholder boxes.
  var WALL = [];
  var WALL_N = 16;
  var css9 = [
    '[data-bg-wall]{padding:24px 0 64px;overflow:hidden;color:#F2F0EB}',
    '.bg-wall-h{max-width:1240px;margin:0 auto 26px;padding:0 24px;box-sizing:border-box}',
    '.bg-wall-h h2{margin:8px 0 0;font:italic 900 40px/1.05 Archivo,sans-serif;color:#F2F0EB}',
    '.bg-wall-h p{margin:10px 0 0;font:400 15px/1.6 Manrope,sans-serif;color:#A9A59D;max-width:560px}',
    '.bg-wall-row{position:relative;overflow:hidden;padding:6px 0}',
    '.bg-wall-row:before,.bg-wall-row:after{content:"";position:absolute;top:0;bottom:0;width:90px;z-index:2;pointer-events:none}',
    '.bg-wall-row:before{left:0;background:linear-gradient(90deg,#0E0E0F,rgba(14,14,15,0))}',
    '.bg-wall-row:after{right:0;background:linear-gradient(-90deg,#0E0E0F,rgba(14,14,15,0))}',
    '.bg-wall-track{display:flex;gap:14px;width:max-content;animation:bgwall 60s linear infinite}',
    '.bg-wall-row.rev .bg-wall-track{animation-direction:reverse;animation-duration:70s}',
    '[data-bg-wall]:hover .bg-wall-track{animation-play-state:paused}',
    '@keyframes bgwall{from{transform:translateX(0)}to{transform:translateX(calc(-50% - 7px))}}',
    '.bg-wall-t{flex:0 0 auto;width:230px;aspect-ratio:4/5;border-radius:16px;overflow:hidden;background:#18181A;border:1px solid #26252A;position:relative}',
    '.bg-wall-t img{width:100%;height:100%;object-fit:cover;display:block;border-radius:0!important;transition:transform .4s ease}',
    '.bg-wall-t:hover img{transform:scale(1.05)}',
    '.bg-wall-ph{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:radial-gradient(100% 80% at 50% 30%,#222126,#141416 70%);border:1px dashed #3A383F;border-radius:16px;box-sizing:border-box;color:#6F6B65;font:700 13px Manrope,sans-serif;letter-spacing:.08em}',
    '.bg-wall-ph svg{width:34px;height:34px;fill:none;stroke:#4A4740;stroke-width:1.5}',
    '@media (max-width:640px){[data-bg-wall]{padding:8px 0 44px}.bg-wall-h{padding:0 16px}.bg-wall-h h2{font-size:30px}.bg-wall-t{width:150px;border-radius:12px}.bg-wall-track{gap:10px}.bg-wall-row:before,.bg-wall-row:after{width:36px}@keyframes bgwall{from{transform:translateX(0)}to{transform:translateX(calc(-50% - 5px))}}}',
    '@media (prefers-reduced-motion:reduce){.bg-wall-track{animation:none}.bg-wall-row{overflow-x:auto}}'
  ].join('');
  var st9 = document.createElement('style'); st9.id = 'bg-theme-css9'; st9.textContent = css9;
  (document.head || document.documentElement).appendChild(st9);
  var WALL_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="9" cy="10.5" r="1.8"/><path d="M21 16 L15.5 11 L6 19"/></svg>';
  function wallTiles(list, label0) {
    return list.map(function (u, i) {
      return '<div class="bg-wall-t">' + (u ? '<img src="' + esc(u) + '" alt="Betaguard kaplamalı cihaz" loading="lazy">' : '<div class="bg-wall-ph" aria-hidden="true">' + WALL_ICON + 'GÖRSEL ' + (label0 + i + 1) + '</div>') + '</div>';
    }).join('');
  }
  function addWall() {
    var home = document.querySelector('[data-bg-home]');
    if (!home || home.querySelector('[data-bg-wall]')) return;
    var steps = home.querySelector('[data-bg="steps"]'); if (!steps) return;
    var all = [];
    for (var i = 0; i < Math.max(WALL.length, WALL.length ? 0 : WALL_N); i++) all.push(WALL[i] || '');
    if (WALL.length && WALL.length < 8) { var k = 0; while (all.length < 8) all.push(WALL[k++ % WALL.length]); }
    var half = Math.ceil(all.length / 2), a = all.slice(0, half), b = all.slice(half);
    var sec = document.createElement('section'); sec.setAttribute('data-bg-wall', '1'); sec.setAttribute('aria-label', 'Kaplanmış cihazlar');
    sec.innerHTML = '<div class="bg-wall-h"><span class="bg-eyebrow">SAHADA BETAGUARD</span><h2>Kaplanmış cihazlar</h2><p>Kamera, lens, drone ve gimballerde Betaguard desenleri gerçekte böyle duruyor.</p></div>' +
      '<div class="bg-wall-row"><div class="bg-wall-track">' + wallTiles(a, 0) + wallTiles(a, 0) + '</div></div>' +
      '<div class="bg-wall-row rev"><div class="bg-wall-track">' + wallTiles(b, half) + wallTiles(b, half) + '</div></div>';
    // duplicated halves are decorative copies for the loop
    var tr = sec.querySelectorAll('.bg-wall-track');
    for (var t = 0; t < tr.length; t++) { var kids = tr[t].children; for (var j = kids.length / 2; j < kids.length; j++) kids[j].setAttribute('aria-hidden', 'true'); }
    steps.parentNode.insertBefore(sec, steps.nextSibling);
  }

  // ---- v10: smart search, cart guard, desen grid, FAQ, footer, trust ----
  var HERO_URL = '/images/theme-images/7436e176-504b-4451-bf53-bba85766ce40/image_1080.webp';
  var LOGO_URL = '/images/theme-images/df5961f1-b887-4104-bb8d-23eb789540ee/image_360.webp';
  var css10 = [
    '.bg-need{margin-top:10px;padding:10px 12px;border-radius:10px;background:rgba(226,94,72,.12);border:1px solid rgba(226,94,72,.45);color:#F2C4BA;font:600 13px/1.45 Manrope,sans-serif}',
    '@keyframes bgShake{0%,100%{transform:none}20%{transform:translateX(-6px)}40%{transform:translateX(6px)}60%{transform:translateX(-4px)}80%{transform:translateX(4px)}}',
    '.bg-shake{animation:bgShake .45s ease}',
    '[data-bg-ftxt]{color:#8E8A83!important}',
    '[data-bg-flogo]{width:150px!important;max-width:150px!important;height:auto!important;object-fit:contain!important}',
    'a[href="x"]{display:none!important}',
    '.bg-trust{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:18px}',
    '.bg-trust div{display:flex;align-items:center;gap:10px;padding:12px;border:1px solid #2A2A2E;border-radius:12px;background:#151517;font:600 13px/1.3 Manrope,sans-serif;color:#E9E6DF}',
    '.bg-trust svg{width:22px;height:22px;flex:none;fill:none;stroke:#C9A45C;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}',
    '.bg-deal{margin-top:10px;padding:14px 16px;border-radius:12px;background:linear-gradient(135deg,rgba(201,164,92,.18),rgba(201,164,92,.05));border:1px solid rgba(201,164,92,.4);font:400 13px/1.45 Manrope,sans-serif;color:#C9C5BD}',
    '.bg-deal b{display:block;color:#E2C285;font:800 15px/1.3 Manrope,sans-serif;margin-bottom:2px}',
    '[data-bg-desen]{width:min(1240px,100%);margin:0 auto;padding:56px 24px 24px;box-sizing:border-box;color:#F2F0EB}',
    '.bg-ds-h{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:22px}',
    '.bg-ds-h h2{margin:8px 0 0;font:italic 900 40px/1.05 Archivo,sans-serif;color:#F2F0EB}',
    '.bg-ds-h p{margin:10px 0 0;font:400 15px/1.6 Manrope,sans-serif;color:#A9A59D;max-width:520px}',
    '.bg-ds-all{flex:none;color:#E2C285!important;font:700 14px Manrope,sans-serif;text-decoration:none!important;border:1px solid rgba(201,164,92,.5);padding:11px 18px;border-radius:999px}',
    '.bg-ds-all:hover{background:rgba(201,164,92,.12)}',
    '.bg-ds-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:14px}',
    '.bg-ds-card{display:flex;flex-direction:column;gap:4px;padding:10px 10px 14px;border:1px solid #26262A;border-radius:16px;background:#141416;text-decoration:none!important;color:#F2F0EB!important;transition:transform .2s,border-color .2s}',
    '.bg-ds-card:hover{transform:translateY(-3px);border-color:rgba(201,164,92,.6)}',
    '.bg-ds-card img,.bg-ds-ph{width:100%;aspect-ratio:1;border-radius:10px;object-fit:cover;background:#EDEDED;margin-bottom:6px}',
    '.bg-ds-ph{display:flex;align-items:center;justify-content:center;background:radial-gradient(circle at 30% 20%,#2A2722,#121214)!important;font:italic 900 34px Archivo,sans-serif;color:#C9A45C}',
    '.bg-ds-card b{font:800 15px/1.2 Manrope,sans-serif}',
    '.bg-ds-card small{font:500 12px Manrope,sans-serif;color:#8E8A83}',
    '@media (max-width:700px){[data-bg-desen]{padding:40px 16px 16px}.bg-ds-h{flex-direction:column;align-items:flex-start}.bg-ds-h h2{font-size:30px}.bg-ds-grid{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;gap:10px;margin:0 -16px;padding:0 16px 6px;scrollbar-width:none}.bg-ds-grid::-webkit-scrollbar{display:none}.bg-ds-card{flex:0 0 42%;scroll-snap-align:start}}',
    '[data-bg-faq]{padding:24px 0 64px;color:#F2F0EB}',
    '.bg-faq-in{max-width:1240px;margin:0 auto;padding:0 24px;box-sizing:border-box;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.6fr);gap:48px}',
    '.bg-faq-h h2{margin:8px 0 0;font:italic 900 40px/1.05 Archivo,sans-serif;color:#F2F0EB}',
    '.bg-faq-h p{margin:12px 0 0;font:400 15px/1.6 Manrope,sans-serif;color:#A9A59D}',
    '.bg-faq-h a{color:#E2C285!important}',
    '.bg-faq-l details{border-bottom:1px solid #26262A}',
    '.bg-faq-l summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:16px;padding:20px 0;font:700 16px/1.35 Manrope,sans-serif;color:#F2F0EB}',
    '.bg-faq-l summary::-webkit-details-marker{display:none}',
    '.bg-faq-l summary::after{content:"+";flex:none;width:30px;height:30px;border-radius:50%;border:1px solid #3A3A3F;display:flex;align-items:center;justify-content:center;color:#C9A45C;font:400 20px/1 Manrope,sans-serif;transition:transform .2s}',
    '.bg-faq-l details[open] summary::after{transform:rotate(45deg);border-color:#C9A45C}',
    '.bg-faq-l details p{margin:0 0 20px;font:400 15px/1.65 Manrope,sans-serif;color:#B5B1A9;max-width:640px}',
    '@media (max-width:800px){.bg-faq-in{grid-template-columns:1fr;gap:12px;padding:0 16px}.bg-faq-h h2{font-size:30px}.bg-faq-l summary{font-size:15px}}'
  ].join('');
  var st10 = document.createElement('style'); st10.id = 'bg-theme-css10'; st10.textContent = css10;
  (document.head || document.documentElement).appendChild(st10);

  function tokN(s) {
    s = String(s).toLowerCase().replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c');
    s = s.replace(/mark\s*/g, ' ').replace(/([a-z])(\d+)m(\d)(?![0-9])/g, '$1$2 $3').replace(/(\d)(iii|ii|iv|vi|v)(?![a-z])/g, '$1 $2');
    var R = { i: '1', ii: '2', iii: '3', iv: '4', v: '5', vi: '6' };
    return s.split(/[^a-z0-9]+/).filter(Boolean).map(function (t) { return R[t] || t; });
  }
  function smartFind(list, q, getText, max) {
    var qt = tokN(q); if (!qt.length) return [];
    var qj = qt.join(''), res = [];
    for (var i = 0; i < list.length; i++) {
      var it = list[i];
      if (!it._st) { var tt = tokN(getText(it)); it._st = { t: tt, j: tt.join('') }; }
      var e = it._st, sc = 0, ok = true;
      for (var a = 0; a < qt.length; a++) {
        var q1 = qt[a], best = 0;
        for (var b = 0; b < e.t.length; b++) { if (e.t[b] === q1) { best = 3; break; } if (e.t[b].indexOf(q1) === 0) best = 2; }
        if (!best && q1.length >= 2 && e.j.indexOf(q1) >= 0) best = 1;
        if (!best) { ok = false; break; }
        sc += best;
      }
      if (!ok && qj.length >= 3 && e.j.indexOf(qj) >= 0) { ok = true; sc = 1; }
      if (ok) res.push([sc, e.j.length, it]);
    }
    res.sort(function (x, y) { return y[0] - x[0] || x[1] - y[1]; });
    return res.slice(0, max || 8).map(function (x) { return x[2]; });
  }

  function devMissing(root) {
    var ss = (root || document).querySelectorAll('select');
    for (var i = 0; i < ss.length; i++) if (ss[i].offsetParent && !ss[i].value) return true;
    return false;
  }
  document.addEventListener('click', function (e) {
    if (!prodData()) return;
    var b = e.target.closest && e.target.closest('button');
    if (!b || !/Sepete Ekle/.test(b.textContent)) return;
    var info = b.closest('[data-bg-pinfo]') || document.getElementById('app');
    if (!devMissing(info)) return;
    e.preventDefault(); e.stopImmediatePropagation();
    var dev = document.querySelector('.bg-dev');
    if (!dev) {
      /* urun sayfasinda cihaz secici yok: eksik olan kumanda secimidir (v27) */
      var k = document.querySelector('.bg27k');
      if (!k) return;
      var w = k.querySelector('.bg27k-w');
      if (!w) { w = document.createElement('p'); w.className = 'bg27k-w'; w.setAttribute('role', 'alert'); k.appendChild(w); }
      w.textContent = 'Sepete eklemek için önce kumanda seçimini yap.';
      k.classList.remove('bg-shake'); void k.offsetWidth; k.classList.add('bg-shake');
      k.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    var m = dev.querySelector('.bg-need');
    if (!m) { m = document.createElement('div'); m.className = 'bg-need'; m.setAttribute('role', 'alert'); dev.appendChild(m); }
    m.textContent = 'Sepete eklemeden önce cihazını seç: modelini yaz ya da aşağıdan tür, marka ve modeli seç.';
    dev.classList.remove('bg-shake'); void dev.offsetWidth; dev.classList.add('bg-shake');
    dev.scrollIntoView({ behavior: 'smooth', block: 'center' });
    var q = dev.querySelector('#bg-dq'); if (q) setTimeout(function () { try { q.focus({ preventScroll: true }); } catch (x) {} }, 450);
  }, true);
  document.addEventListener('change', function () {
    var m = document.querySelector('.bg-dev .bg-need'); if (!m) return;
    setTimeout(function () { var info = document.querySelector('[data-bg-pinfo]') || document.getElementById('app'); if (!devMissing(info) && m.parentNode) m.parentNode.removeChild(m); }, 300);
  }, true);

  var TI = function (d) { return '<svg viewBox="0 0 24 24" aria-hidden="true">' + d + '</svg>'; };
  var TRUST_HTML = '<div class="bg-trust">' +
    '<div>' + TI('<path d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4"/><rect x="8" y="8" width="8" height="8" rx="1.5"/>') + 'Cihazına özel kesim</div>' +
    '<div>' + TI('<path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="17.5" r="1.6"/><circle cx="17" cy="17.5" r="1.6"/>') + '1-2 iş gününde kargoda</div>' +
    '<div>' + TI('<path d="M9 14 4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/>') + 'İz bırakmadan sökülür</div>' +
    '<div>' + TI('<path d="M4 11h16v9H4zM3 7h18v4H3zM12 7v13M12 7c-2-4-6-3-5 0M12 7c2-4 6-3 5 0"/>') + 'Uygulama seti hediye</div>' +
    '</div><div class="bg-deal"><b>2 kaplamaya 250 ₺, 3 ve üzeri kaplamaya 500 ₺ indirim</b>Kamera, lens ve droneunu aynı desenle birlikte kapla. 2.000 ₺ üzeri kargo ücretsiz.</div>';

  function fixFooter() {
    var ps = document.querySelectorAll('#app p');
    for (var i = 0; i < ps.length; i++) { var t = ps[i].textContent.trim(); if (/^©/.test(t) || /Siparişe özel basılır/.test(t)) tag(ps[i], 'data-bg-ftxt'); }
    var lg = document.querySelectorAll('#app img[src*="536abe0a"],#app img[srcset*="536abe0a"]');
    for (i = 0; i < lg.length; i++) { lg[i].removeAttribute('srcset'); lg[i].removeAttribute('sizes'); lg[i].src = LOGO_URL; lg[i].alt = 'Betaguard'; tag(lg[i], 'data-bg-flogo'); }
  }

  var DESEN_KEY = 'bg-desen-v1', desenBusy = false;
  function slugTR(s) { return s.toLowerCase().replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }
  function desenLoad(cb) {
    try { var c = JSON.parse(localStorage.getItem(DESEN_KEY) || 'null'); if (c && Date.now() - c.t < 6 * 3600e3 && c.list && c.list.length) return cb(c.list); } catch (e) {}
    fetch(KAPLAMA_URL, { credentials: 'same-origin' }).then(function (r) { return r.text(); }).then(function (t) {
      var a = t.indexOf('id="__IKAS' + '_DATA__"'); if (a < 0) return cb(null);
      a = t.indexOf('{', a); var b = t.indexOf('<' + '/scr' + 'ipt>', a); b = t.lastIndexOf('}', b) + 1;
      var d = JSON.parse(t.slice(a, b)), S = d && d.pageSpecificData && buildSeries(d.pageSpecificData);
      if (!S || !S.list.length) return cb(null);
      var list = S.list.map(function (s) {
        var img = null; for (var k = 0; k < s.colors.length && !img; k++) img = s.colors[k].imgs[0] || null;
        return { n: s.name, c: s.colors.length, s: slugTR(s.colors[0].name), i: img };
      });
      try { localStorage.setItem(DESEN_KEY, JSON.stringify({ t: Date.now(), list: list })); } catch (e) {}
      cb(list);
    }).catch(function () { cb(null); });
  }
  function addDesenler() {
    if (desenBusy || document.querySelector('[data-bg-desen]') || !document.querySelector('[data-bg-insta]')) return;
    desenBusy = true;
    desenLoad(function (list) {
      desenBusy = false;
      var ins = document.querySelector('[data-bg-insta]');
      if (!list || !list.length || !ins || document.querySelector('[data-bg-desen]')) return;
      var sec = document.createElement('section'); sec.setAttribute('data-bg-desen', '1'); sec.setAttribute('aria-label', 'Desenler');
      sec.innerHTML = '<div class="bg-ds-h"><div><span class="bg-eyebrow">DESENLER</span><h2>' + list.length + ' seri, tek karakter</h2><p>Serini seç, cihazında nasıl duracağını gör. Her kaplama modeline göre kesilir.</p></div><a class="bg-ds-all" href="' + KAPLAMA_URL + '">Tümünü gör →</a></div>' +
        '<div class="bg-ds-grid">' + list.map(function (d) {
          return '<a class="bg-ds-card" href="' + KAPLAMA_URL + '?desen=' + encodeURIComponent(d.s) + '">' + (d.i ? '<img src="' + imgUrl(d.i, 360) + '" alt="' + esc(d.n) + ' deseni" loading="lazy">' : '<span class="bg-ds-ph" aria-hidden="true">' + esc(initials(d.n)) + '</span>') + '<b>' + esc(d.n) + '</b><small>' + (d.c > 1 ? d.c + ' renk' : 'tek renk') + '</small></a>';
        }).join('') + '</div>';
      ins.parentNode.insertBefore(sec, ins);
    });
  }

  var FAQ = [
    ['Kaplama cihazıma zarar verir mi, iz bırakır mı?', 'Hayır. Kaplama yüzeyi günlük çizik ve sürtünmelere karşı korur; söküldüğünde cihazda iz bırakmaz.'],
    ['Kendim uygulayabilir miyim?', 'Evet. Paketten çıkan uygulama setiyle (spatula ve temizlik mendilleri) yukarıdaki 4 adımı izleyerek kendin uygulayabilirsin.'],
    ['Kesim cihazıma tam oturur mu?', 'Her kaplama seçtiğin modelin ölçülerine göre siparişe özel basılıp kesilir. Düğmeler, portlar ve ekran alanları açık bırakılır.'],
    ['Plastik kısımlar da kaplanıyor mu?', 'Evet. Cihazın metal aksamı seçtiğin desenle, plastik aksamı dokulu siyah kaplamayla kaplanır.'],
    ['Siparişim ne zaman kargoya verilir?', 'Kaplamalar siparişe özel üretilir ve 1-2 iş gününde kargoya verilir. 2.000 ₺ üzeri siparişlerde kargo ücretsizdir.'],
    ['Cihazım listede yok, ne yapmalıyım?', 'WhatsApp’tan modelini yaz, kesimi olup olmadığını hemen söyleyelim.']
  ];
  function addFaq() {
    var home = document.querySelector('[data-bg-home]');
    if (!home || home.querySelector('[data-bg-faq]')) return;
    var after = home.querySelector('[data-bg-wall]') || home.querySelector('[data-bg="steps"]'); if (!after) return;
    var sec = document.createElement('section'); sec.setAttribute('data-bg-faq', '1'); sec.setAttribute('aria-label', 'Sık sorulan sorular');
    sec.innerHTML = '<div class="bg-faq-in"><div class="bg-faq-h"><span class="bg-eyebrow">SIK SORULANLAR</span><h2>Aklına takılanlar</h2><p>Burada olmayan bir sorun varsa <a href="' + WA + '" target="_blank" rel="noopener">WhatsApp’tan sor</a>, hemen yanıtlayalım.</p></div><div class="bg-faq-l">' +
      FAQ.map(function (f, i) { return '<details' + (i === 0 ? ' open' : '') + '><summary>' + esc(f[0]) + '</summary><p>' + esc(f[1]) + '</p></details>'; }).join('') + '</div></div>';
    after.parentNode.insertBefore(sec, after.nextSibling);
    if (!document.getElementById('bg-faq-ld')) {
      var ld = document.createElement('script'); ld.type = 'application/ld+json'; ld.id = 'bg-faq-ld';
      ld.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map(function (f) { return { '@type': 'Question', name: f[0], acceptedAnswer: { '@type': 'Answer', text: f[1] } }; }) });
      document.head.appendChild(ld);
    }
  }


  var busy = false;
  function run() {
    if (busy) return; busy = true;
    try {
      if (!isHome()) { var h = document.querySelector('[data-bg-home]'); if (h) h.remove(); }
      addEyebrows(); addHome(); addInfo(); addWA(); fixHero(); tagArrows(); addMarqueeAndIcons(); addSilhouettes(); addTop(); addProductPage(); fixHomeAndNav(); addInsta(); addWall(); addDesenler(); addFaq(); fixFooter(); darken();
    } catch (e) { }
    busy = false;
  }
  var tmr = null;
  function schedule() { if (!started || tmr) return; tmr = setTimeout(function () { tmr = null; run(); }, 150); }
  var started = false;
  function start() { if (started) return; started = true; run(); setTimeout(function(){ document.documentElement.classList.add('bg-ready'); }, 380); }
  if (document.readyState !== 'loading') setTimeout(start, 500); else document.addEventListener('DOMContentLoaded', function () { setTimeout(start, 500); });
  window.addEventListener('load', function () { setTimeout(start, 200); });
  setTimeout(start, 6000);
  document.addEventListener('load', function (ev) { if (ev.target && ev.target.tagName === 'IMG') schedule(); }, true);
  new MutationObserver(function (muts) {
    for (var i = 0; i < muts.length; i++) {
      var n = muts[i].target;
      if (n && n.closest && n.closest('[data-bg-home],[data-bg-top],.bg-info,.bg-wa,.bg-pp,.bg-gal,.bg-dev,[data-bg-insta],[data-bg-desen]')) continue;
      schedule(); return;
    }
  }).observe(document.documentElement, { childList: true, subtree: true });
})();

/* v11+v12 (v13): desen kutucuklari, fiyat cihaz secilince, ana sayfa desenleri, mobil duzen */
;(function(){
  var ST = '3343706a-8edb-4c74-a651-8671f39feb90';
  var SW = {"carbon":"4c74d1b7-970d-4f31-8e21-f615f8bacb3f","hexagonal blue":"27a321e9-a31d-43bb-92df-8403b4e6a398","hexagonal green":"4b16ecee-2984-4e4b-a414-f242dfabdc97","hexagonal red":"81813318-bb98-4b38-aa1b-0817e43ff5d7","hexagonal silver":"3fd0fbf0-0e38-4889-9c26-fadbf3d89ff7","lego":"15f71641-bf6e-41c2-be17-cd3e0e67a67b","line black":"71fff861-b761-4157-9d4b-65a4cf4ebb07","line blue":"dec3737b-8df6-4534-b24a-5f8c15b03393","line cyan":"34f38997-0b83-4f0c-bc50-7ee81844d702","line navy":"29329acb-b006-4b68-bfd6-cd0ae66ea061","line red":"d8c63126-eb23-4b27-a42a-7f0a92962f11","line white":"f1950e2d-ea22-4147-8fed-864ef7bc8b0e","mono black":"b14e2fc0-5613-4bd5-8240-a6da166c913b","mono blue":"6fa1a5f6-ff9b-48f4-b0bc-b03b089f7b6c","mono brown":"df3a5afe-7211-4a84-866d-d1bd1c729fd1","mono green":"2fa890ce-ebb7-4338-bbae-235c67654149","mono orange":"5c6a41ca-5155-4076-b4e2-b2e694d79ff5","mono pink":"cc332160-89f5-4f07-9a00-b1e09168df6b","mono red":"879ed16a-0063-4f3a-a88e-036f98701641","mono series":"76fa0551-3782-41ce-9931-044d06a6ee6e","mono white":"8d306a34-efca-4b7e-a2c3-3e1f095ecf6b","mono yellow":"9fa654fe-63a0-4c87-8e24-65700099b70c","nexus blue":"22c0bb58-8184-4b43-b7da-25fbc28be2f3","nexus cyan":"01fff78b-187f-4209-bec7-4db86a2e7be6","nexus red":"5add67af-7825-4384-b69e-9ff3afa17490","nexus white":"6f9a6be3-bfc1-4d80-b1aa-e57c57cd2eaf","royal black":"057cdf5e-9600-43ea-8f86-756eaa3be003","royal gold":"a0ff97b8-c8c4-4c40-8e27-5d081eeeeea7","royal navy":"5088b186-b0c9-4681-b529-f688a04eee43","tactical black":"1e6fbcd9-8f37-47f5-bd91-542e70f7aeab","tactical blue":"23407e47-3514-4959-af59-a5de8d10178a","tactical green":"4b2ec6d7-d291-49cc-b8b6-8fbbb02de4ff","tactical grey":"03e39319-3406-4379-9a40-e35aa8f0f05b","tactical red":"df776e50-4fa6-4d45-bf2b-009f62e0e4dc","topografik black":"24e35daf-f2db-4e63-b93b-3a15c88930c5","topografik blue":"c516740c-21b4-407d-bf47-20ab2c67ad0d","topografik green":"57a51f63-450f-49ed-bb7d-0c1dce3efa4a","topografik navy":"04851bed-d3fe-46b9-beec-83adaf6803dc","topografik red":"9d34d7bc-2499-4225-b527-e1c6b391259b","topografik white":"5dc443c3-dfc1-4e72-bf5f-1e5d7377e81f"};
  var COL = [["Line Black","34e83c8a-cf1a-42ce-913e-f637973d160f"],["Line White","de334c15-5d6a-4013-a17c-f0142ef2951a"],["Line Navy","806386f9-ecd0-4e58-9e70-d50085f83550"],["Line Blue","9dc1f3ae-79b2-49fb-b0ee-100cf20d5df2"],["Line Cyan","639f0b9a-bfb9-431b-bf5d-6ae15bbfd15d"],["Line Red","4596f2a2-1395-4770-8308-c29ff69be314"],["Tactical Black","edc0806e-fcb2-4dd4-a4b6-4296286274dc"],["Tactical Grey","9ab61fd9-f39c-4c88-884d-83c8cdeac1da"],["Tactical Green","d34baff8-49f1-4d28-aaa3-a336d3781613"],["Tactical Blue","e93853e5-03a8-461d-b753-a839bb44133e"],["Tactical Red","aca1b195-372f-4bdf-8cc8-c2154347bcd7"],["Carbon","86262201-8f45-4862-89df-47491dcfa7ee"],["Royal Black","4d3650f6-5e72-4657-8340-1d101da2cf09"],["Royal Navy","493d8a8f-1e7d-4e33-9c5a-ffdc181c3505"],["Royal Gold","c9cf07ca-c474-4702-985a-74c262f06bf5"],["Mono Black","860300dc-d32f-4c93-b6b6-d1575843e68c"],["Mono White","9c2fc02e-94e0-4005-92cc-2985b59a76b8"],["Mono Red","ac30afaf-96db-4b9a-a1cb-75b02322524c"],["Mono Blue","bd7eeb46-f2cc-4fda-a99c-1a275231f795"],["Mono Green","3f491b68-1922-4524-a50b-ea79e4ed1530"],["Mono Yellow","aa203923-4534-42ed-96a6-ba80c497a95e"],["Mono Orange","33f41cb4-509a-4282-a06c-96f887771396"],["Mono Pink","a32ac313-daf1-4026-baf3-251c59ce6a03"],["Mono Brown","3f965147-7b70-4976-bcc6-a5b817b5f1b6"],["Topografik Black","32d99eca-c084-45d5-9601-2abf1c357e7d"],["Topografik White","6f109cb9-d307-4404-8841-a90bd3652ccd"],["Topografik Navy","344ef862-867c-44e2-a40a-cfeebd3ef3ea"],["Topografik Blue","bb1011ac-5d71-4ef9-a0c6-dc2bb1c92347"],["Topografik Green","a4535f5d-fd7a-4944-9d25-28bfec7cd14f"],["Topografik Red","472336e1-3baf-488c-9f2e-249ed657906e"],["Nexus White","4224f435-c97d-428f-a219-a13b6e2407e9"],["Nexus Blue","9a53577d-633d-45a9-982a-b0190dff7cff"],["Nexus Cyan","14888006-fd94-47f4-bb50-9916b97225a8"],["Nexus Red","2ba04450-9ba8-4f57-9b39-9b74ec13fcc4"],["Hexagonal Silver","29c6ae18-71de-499a-b6e1-80b36fb54d32"],["Hexagonal Blue","cb6760d3-8e69-470e-856c-04e7ec913f66"],["Hexagonal Green","64339101-e8b9-4a34-bab2-05a4d61b00f4"],["Hexagonal Red","ce176f08-794d-473f-8467-2dfc3dbd7de3"],["Lego","77e5f2c1-f763-4b83-92f5-cce4924a2b0e"]];
  var SER = {line:'line cyan', tactical:'tactical green', carbon:'carbon', royal:'royal gold', mono:'mono series', topografik:'topografik blue', nexus:'nexus cyan', hexagonal:'hexagonal red', lego:'lego'};
  function u(id, s){ return '/images/' + ST + '/' + id + '/image_' + (s || 180) + '.webp'; }
  function slug(n){ return n.toLowerCase().replace(/\s+/g, '-'); }
  function sKey(n){ var w = n.split(' '); return w.length > 1 ? w.slice(0, -1).join(' ') : w[0]; }
  function e(s){ return String(s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }
  if (!document.getElementById('bg-theme-css13')) {
    var cs = document.createElement('style'); cs.id = 'bg-theme-css13';
    cs.textContent = [
      '.bg-pp-card.bg-sw img,.bg-ds-card.bg-sw img{object-fit:cover!important;background:#111!important;padding:0!important;filter:none!important;opacity:1!important}',
      '.bg-pp-card.bg-sw.dim img{opacity:.55!important}',
      'html:not(.bg-hasprice) [data-bg-pprice]{font-size:0!important;line-height:0!important;color:transparent!important}',
      'html:not(.bg-hasprice) [data-bg-pprice]::before{content:"Fiyat, cihazını seçince görünür";display:block;font:500 15px/1.6 Manrope,sans-serif;color:#8E8A83;padding:4px 0}',
      '[data-bg-cprice]{display:none!important}',
      '.pcz-price[data-bg-zero]{display:none!important}',
      '.bg-ds-dots{display:flex;flex-wrap:wrap;gap:4px;margin-top:9px}',
      '.bg-ds-dots i{width:14px;height:14px;border-radius:50%;background-size:cover;background-position:center;border:1px solid rgba(255,255,255,.22);display:block}',
      '.bg-wall-t.bg-wt{display:block;aspect-ratio:1/1;background:#EDEDED;text-decoration:none}',
      '.bg-wall-t.bg-wt img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .35s ease}',
      '.bg-wall-t.bg-wt:hover img{transform:scale(1.04)}',
      '.bg-wall-t.bg-wt span{position:absolute;left:10px;bottom:10px;background:rgba(14,14,15,.8);color:#F2F0EB;font:600 12px/1 Manrope,sans-serif;padding:7px 10px;border-radius:999px}',
      'html.bg-hasprice [data-bg-price]::after{content:" · " attr(data-bg-price)}',
      '[data-bg-mtrust]{display:none;margin-top:14px}',
      '@media (max-width:899px){.bg-gal .bg-trust,.bg-gal .bg-deal{display:none!important}[data-bg-mtrust]{display:block}}'
    ].join('');
    document.head.appendChild(cs);
  }
  function fmt(t){ var s0 = String(t).trim(), n = s0.match(/^([\d.]+(?:,\d\d)?)\s?₺$/); if (n) return n[1] + ' ₺'; var m = s0.match(/^₺\s*([\d,]+)\.(\d\d)$/); if (!m) return null; return m[1].replace(/,/g, '.') + (m[2] !== '00' ? ',' + m[2] : '') + ' ₺'; }
  function setImg(b, id, sz){ var im = b.querySelector('img'); if (!im || !id) return; var s = u(id, sz); if (im.getAttribute('src') !== s) { im.removeAttribute('srcset'); im.setAttribute('src', s); } b.classList.add('bg-sw'); }
  function cartLeaf(){ return [].slice.call(document.querySelectorAll('.rich-text,button')).find(function(x){ return x.children.length === 0 && /^Sepete Ekle$/i.test(x.textContent.trim()) && !(window.bgInFx && window.bgInFx(x)); }); }
  function devSel(){ var f = [].slice.call(document.querySelectorAll('.pcz-field')).find(function(x){ var l = x.querySelector('.pcz-label'); return l && /Cihaz t/i.test(l.textContent); }); return f ? f.querySelector('select') : null; }
  function home(){
    [].forEach.call(document.querySelectorAll('a.bg-ds-card'), function(c){
      if (c.getAttribute('data-v13')) return;
      var b = c.querySelector('b'); if (!b) return;
      var name = b.textContent.trim(), key = name.toLowerCase(), rep = SER[key];
      if (rep && SW[rep]) setImg(c, SW[rep], 360);
      if (rep && rep !== 'mono series') c.setAttribute('href', '/betaguard-kaplama?desen=' + slug(rep));
      var cols = COL.filter(function(x){ return sKey(x[0]).toLowerCase() === key; });
      if (cols.length > 1) {
        var d = document.createElement('span'); d.className = 'bg-ds-dots'; d.setAttribute('aria-hidden', 'true');
        d.innerHTML = cols.map(function(x){ var s = SW[x[0].toLowerCase()]; return s ? '<i title="' + e(x[0]) + '" style="background-image:url(' + u(s) + ')"></i>' : ''; }).join('');
        c.appendChild(d);
      }
      c.setAttribute('data-v13', '1');
    });
    var w = document.querySelector('[data-bg-wall]');
    if (w && !w.getAttribute('data-v13')) {
      var by = {}, order = [];
      COL.forEach(function(x){ var k = sKey(x[0]); if (!by[k]) { by[k] = []; order.push(k); } by[k].push(x); });
      var mix = [], more = true, r = 0;
      while (more) { more = false; order.forEach(function(k){ if (by[k][r]) { mix.push(by[k][r]); more = true; } }); r++; }
      var half = Math.ceil(mix.length / 2), A = mix.slice(0, half), B = mix.slice(half);
      function tiles(L, hid){ return L.map(function(x){ return '<a class="bg-wall-t bg-wt" href="/betaguard-kaplama?desen=' + slug(x[0]) + '"' + (hid ? ' aria-hidden="true" tabindex="-1"' : '') + '><img src="' + u(x[1], 540) + '" alt="' + e(x[0]) + ' kaplama" loading="lazy"><span>' + e(x[0]) + '</span></a>'; }).join(''); }
      var tr = w.querySelectorAll('.bg-wall-track');
      if (tr.length === 2) {
        tr[0].innerHTML = tiles(A) + tiles(A, 1);
        tr[1].innerHTML = tiles(B) + tiles(B, 1);
        var ey = w.querySelector('.bg-eyebrow'); if (ey) ey.textContent = 'TÜM DESENLER';
        var h = w.querySelector('.bg-wall-h h2'); if (h) h.textContent = 'Her desen, her cihazda';
        var p = w.querySelector('.bg-wall-h p'); if (p) p.textContent = COL.length + ' renk seçeneğinin kamera, lens, drone ve gimbalda nasıl durduğunu gör. Beğendiğine dokun, o desenle başla.';
        w.setAttribute('aria-label', 'Tüm desenler');
        w.setAttribute('data-v13', '1');
      }
    }
    if (location.pathname === '/' && !document.title.trim()) {
      document.title = 'Betaguard | Kamera, Lens, Drone ve Gimbal Kaplamaları';
      var md = document.querySelector('meta[name="description"]');
      if (!md) { md = document.createElement('meta'); md.setAttribute('name', 'description'); document.head.appendChild(md); }
      if (!md.getAttribute('content')) md.setAttribute('content', 'Kamera, lens, drone, gimbal ve aksiyon kameralar için cihaza özel kesim desenli kaplamalar. Çizilmeye karşı korur, iz bırakmadan sökülür. 1-2 iş gününde kargoda.');
    }
  }
  function pp(){
    [].forEach.call(document.querySelectorAll('.bg-pp-card[data-c]'), function(b){ setImg(b, SW[(b.getAttribute('aria-label')||'').toLowerCase()]); });
    [].forEach.call(document.querySelectorAll('.bg-pp-card[data-s]'), function(b){ var s = (b.getAttribute('aria-label')||'').replace(/ serisi$/i,'').toLowerCase(); setImg(b, SW[SER[s]]); });
    [].forEach.call(document.querySelectorAll('.bg-pp-card[data-c] b'), function(b){
      var t = b.textContent.trim(), full = (b.parentNode.getAttribute('aria-label') || '').trim();
      if (t === full && t.indexOf(' ') > 0) b.textContent = t.split(' ').pop();
    });
    var sel = devSel();
    document.documentElement.classList.toggle('bg-hasprice', !!((sel && sel.value) || (window.__bgIsDev && window.__bgIsDev())));
    [].forEach.call(document.querySelectorAll('.pcz-price'), function(p){ var zt = p.textContent.trim(); if (/₺\s*0[.,]00/.test(zt) || /^\+?\s?0(,00)?\s?₺$/.test(zt)) p.setAttribute('data-bg-zero','1'); else p.removeAttribute('data-bg-zero'); });
    [].forEach.call(document.querySelectorAll('a[href*="betaguard-kaplama"] .rich-text'), function(x){ if (/^₺|₺$/.test(x.textContent.trim()) && !x.closest('[data-bg-pprice]')) x.setAttribute('data-bg-cprice','1'); });
    var pr = document.querySelector('[data-bg-pprice]'), val = null;
    if (pr) { var f = fmt(pr.textContent); if (f) pr.textContent = f; val = /₺/.test(pr.textContent) ? pr.textContent.trim() : null; }
    /* v27: kumanda secildiyse buton fiyati toplami gostersin */
    var ek = +window.__bgKumEk || 0;
    if (val && ek > 0 && val.indexOf(',') < 0) {
      var d0 = val.replace(/[^\d.]/g, '').replace(/\./g, '');
      if (d0) val = (parseInt(d0, 10) + ek).toLocaleString('tr-TR') + ' ₺';
    }
    var btn = cartLeaf();
    if (btn) { if (val) { if (btn.getAttribute('data-bg-price') !== val) btn.setAttribute('data-bg-price', val); } else btn.removeAttribute('data-bg-price'); }
  }
  function mob(){
    var gal = document.querySelector('.bg-gal'); var tr = gal && gal.querySelector('.bg-trust');
    var ex = document.querySelector('[data-bg-mtrust]');
    if (!gal || !tr) return;
    var leaf = cartLeaf(), ppEl = document.querySelector('.bg-pp');
    if (!leaf || !ppEl) return;
    var info = leaf.closest('[data-bg-pinfo]'); var x = leaf; if (info) { while (x.parentElement && x.parentElement !== info) x = x.parentElement; } else { while (x.parentElement && !x.parentElement.contains(ppEl)) x = x.parentElement; }
    if (!x.parentElement) return;
    if (ex && ex.previousElementSibling === x) return;
    if (ex) ex.remove();
    var box = document.createElement('div'); box.setAttribute('data-bg-mtrust', '1');
    var dl = gal.querySelector('.bg-deal');
    box.innerHTML = (dl ? dl.outerHTML : '') + tr.outerHTML;
    x.parentNode.insertBefore(box, x.nextSibling);
  }
  var ready = false;
  function apply(){ if (!ready) return; try { home(); pp(); mob(); } catch (er) {} }
  var q = false;
  function sch(){ if (q) return; q = true; setTimeout(function(){ q = false; apply(); }, 40); }
  function go(){ setTimeout(function(){ ready = true; apply(); new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true, characterData: true }); }, 580); }
  document.addEventListener('change', sch, true);
  if (document.readyState !== 'loading') go(); else document.addEventListener('DOMContentLoaded', go);
})();

/* v14: cok satanlar gizle + yeni footer */
;(function(){
  var LOGO = '/images/theme-images/df5961f1-b887-4104-bb8d-23eb789540ee/image_360.webp';
  var WA = 'https://wa.me/905353211911', IG = 'https://instagram.com/betaguard.tr';
  var IC = {
    chat: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.2A8.5 8.5 0 1 1 21 12z"/></svg>',
    cam: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>'
  };
  if (!document.getElementById('bg-theme-css14')) {
    var cs = document.createElement('style'); cs.id = 'bg-theme-css14';
    cs.textContent = [
      '[data-bg-hide]{display:none!important}',
      '[data-bg-ftop-old]{display:none!important}',
      '.bg-ft{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;padding:8px 0 36px;color:#A9A59D;font:400 14px/1.6 Manrope,sans-serif}',
      '.bg-ft-logo img{width:150px;height:auto;display:block}',
      '.bg-ft-brand p{margin:16px 0 18px;max-width:340px;color:#A9A59D}',
      '.bg-ft-social{display:flex;flex-wrap:wrap;gap:10px}',
      '.bg-ft-social a{display:inline-flex;align-items:center;gap:8px;padding:9px 14px;border:1px solid #2A292E;border-radius:999px;color:#F2F0EB;text-decoration:none;font:600 13px Manrope,sans-serif;transition:border-color .2s,color .2s}',
      '.bg-ft-social a:hover{border-color:#C9A45C;color:#E2C285}',
      '.bg-ft h4{margin:4px 0 14px;color:#F2F0EB;font:700 13px/1 Manrope,sans-serif;letter-spacing:.08em;text-transform:uppercase}',
      '.bg-ft ul{list-style:none;margin:0;padding:0;display:grid;gap:9px}',
      '.bg-ft ul a{color:#A9A59D;text-decoration:none;transition:color .2s}',
      '.bg-ft ul a:hover{color:#E2C285}',
      '.bg-ft-note{margin-top:14px;font-size:12px;color:#6F6B65}',
      '@media (max-width:899px){.bg-ft{grid-template-columns:1fr 1fr;gap:28px 20px}.bg-ft-brand{grid-column:1/-1}}',
      '[data-bg-fbottom]{padding-bottom:76px!important}','@media (max-width:899px){.bg-white-ico>div>div{display:grid!important;grid-template-columns:1fr 1fr;gap:18px 8px;overflow:visible!important;width:100%!important}.bg-white-ico>div>div>*{min-width:0!important;width:auto!important;margin:0!important}}','@media (max-width:899px){[data-bg-fbottom]{padding-bottom:84px!important;flex-wrap:wrap;gap:10px}}'
    ].join('');
    document.head.appendChild(cs);
  }
  function leaf(t){ return [].slice.call(document.querySelectorAll('div,p,span,a,h1,h2,h3,h4')).find(function(e){ return e.children.length === 0 && e.textContent.trim() === t; }); }
  function secRoot(el){ var x = el; while (x && x.parentElement && !(x.parentElement.className === '' && x.parentElement.parentElement && x.parentElement.parentElement.parentElement === document.body)) x = x.parentElement; return x && x.parentElement ? x : null; }
  function hideBest(){
    var h = leaf('Çok Satanlar'); if (!h) return;
    var r = secRoot(h); if (r && !r.hasAttribute('data-bg-hide') && !r.querySelector('[data-bg-pp],.bg-pp')) r.setAttribute('data-bg-hide', '1');
  }
  function ids(){
    var d = document.querySelector('[data-bg-desen]'); if (d && !d.id) d.id = 'desenler';
    var s = document.querySelector('[data-bg="steps"]'); if (s && !s.id) s.id = 'nasil-uygulanir';
    var f = document.querySelector('[data-bg-faq]'); if (f && !f.id) f.id = 'sss';
  }
  function footer(){
    if (document.querySelector('.bg-ft')) return;
    var k = leaf('Sözleşmeler'); if (!k) return;
    var top = k; var desc = null;
    while (top.parentElement) { top = top.parentElement; if (/Siparişe özel basılır/.test(top.textContent) && /Kategoriler/.test(top.textContent)) break; }
    if (!top || !top.parentElement) return;
    function href(t, def){ var a = [].slice.call(top.querySelectorAll('a')).find(function(x){ return x.textContent.trim() === t; }); return a ? a.getAttribute('href') : def; }
    var cats = ['Kamera','Lens','Drone','Gimbal','Aksiyon Kamera'];
    var legal = ['Gizlilik ve Çerez Politikası','Mesafeli Satış Sözleşmesi','İade Koşulları'];
    var box = document.createElement('div'); box.className = 'bg-ft';
    box.innerHTML =
      '<div class="bg-ft-brand"><a class="bg-ft-logo" href="/" aria-label="Betaguard ana sayfa"><img src="' + LOGO + '" alt="Betaguard" loading="lazy"></a>' +
      '<p>Kamera, lens, drone, gimbal ve aksiyon kameralar için cihazına özel kesim kaplamalar. Siparişe özel basılır, kesilir ve İzmir\'den gönderilir.</p>' +
      '<div class="bg-ft-social"><a href="' + WA + '" target="_blank" rel="noopener">' + IC.chat + 'WhatsApp\'tan yaz</a><a href="' + IG + '" target="_blank" rel="noopener">' + IC.cam + '@betaguard.tr</a></div></div>' +
      '<div><h4>Cihazlar</h4><ul>' + cats.map(function(c){ return '<li><a href="' + href(c, '/betaguard-kaplama') + '">' + c + '</a></li>'; }).join('') + '</ul></div>' +
      '<div><h4>Keşfet</h4><ul><li><a href="/betaguard-kaplama">Tüm desenler</a></li><li><a href="/#desenler">Seriler</a></li><li><a href="/#nasil-uygulanir">Nasıl uygulanır</a></li><li><a href="/#sss">Sık sorulanlar</a></li></ul></div>' +
      '<div><h4>Yardım</h4><ul><li><a href="' + WA + '" target="_blank" rel="noopener">İletişim · 0535 321 19 11</a></li>' + legal.map(function(c){ return '<li><a href="' + href(c, '#') + '">' + c + '</a></li>'; }).join('') + '</ul></div>';
    top.parentElement.insertBefore(box, top);
    top.setAttribute('data-bg-ftop-old', '1');
    var cp = leaf('© 2026 Betaguard · İzmir, Türkiye'); if (cp) { var b = cp; for (var i = 0; i < 3 && b.parentElement; i++) { b = b.parentElement; if (/E-Ticaret Altyapısı/.test(b.textContent)) { b.setAttribute('data-bg-fbottom', '1'); break; } } }
  }
  var ready = false, q = false;
  function apply(){ if (!ready) return; try { hideBest(); ids(); footer(); } catch (er) {} }
  function sch(){ if (q) return; q = true; setTimeout(function(){ q = false; apply(); }, 60); }
  function go(){ setTimeout(function(){ ready = true; apply(); new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true }); }, 580); }
  if (document.readyState !== 'loading') go(); else document.addEventListener('DOMContentLoaded', go);
})();

/* ===== 01_v15.js ===== */
/* v15: En çok tercih edilenler (Royal, Tactical, Lego) */
(function(){
  var BS=[{s:'Royal',slug:'royal-gold',n:'3 renk',d:'Siyah, lacivert ve altın; premium ve klasik.'},{s:'Tactical',slug:'tactical-red',n:'5 renk',d:'Kamuflaj dokusu; sahada sert, iddialı görünüm.'},{s:'Lego',slug:'lego',n:'tek renk',d:'Renkli tuğla deseni; eğlenceli ve dikkat çekici.'}];
  var css=['[data-bg-best]{max-width:1240px;margin:0 auto;padding:56px 24px 8px;box-sizing:border-box;color:#F2F0EB}',
  '.bg-best-h{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin-bottom:22px}',
  '.bg-best-h h2{margin:8px 0 0;font:italic 900 40px/1.05 Archivo,sans-serif;color:#F2F0EB}',
  '.bg-best-h p{margin:10px 0 0;font:400 15px/1.6 Manrope,sans-serif;color:#A9A59D;max-width:520px}',
  '.bg-best-g{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}',
  '.bg-best-c{position:relative;display:block;border-radius:18px;overflow:hidden;background:#18181A;border:1px solid #26252A;text-decoration:none;color:#F2F0EB;transition:border-color .2s,transform .2s}',
  '.bg-best-c:hover{border-color:#E2C285;transform:translateY(-2px)}',
  '.bg-best-i{aspect-ratio:1/1;background:#141416;overflow:hidden}',
  '.bg-best-i img{width:100%;height:100%;object-fit:cover;display:block;border-radius:0!important;transition:transform .4s ease}',
  '.bg-best-c:hover .bg-best-i img{transform:scale(1.04)}',
  '.bg-best-b{position:absolute;top:12px;left:12px;background:#E2C285;color:#141416;font:800 11px/1 Manrope,sans-serif;letter-spacing:.08em;padding:7px 10px;border-radius:999px}',
  '.bg-best-t{padding:16px 18px 18px}',
  '.bg-best-t strong{display:flex;justify-content:space-between;align-items:baseline;font:italic 900 24px/1.1 Archivo,sans-serif}',
  '.bg-best-t strong span{font:600 13px Manrope,sans-serif;font-style:normal;color:#A9A59D}',
  '.bg-best-t p{margin:6px 0 12px;font:400 14px/1.5 Manrope,sans-serif;color:#A9A59D}',
  '.bg-best-t em{font:700 14px Manrope,sans-serif;font-style:normal;color:#E2C285}',
  '@media (max-width:640px){[data-bg-best]{padding:36px 16px 0}.bg-best-h h2{font-size:30px}.bg-best-g{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:78%;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:6px}.bg-best-c{scroll-snap-align:start}}'].join('');
  var st=document.createElement('style'); st.id='bg-theme-css15'; st.textContent=css; (document.head||document.documentElement).appendChild(st);
  function img(slug){ var a=document.querySelector('[data-bg-wall] a[href*="desen='+slug+'"] img')||document.querySelector('[data-bg-wall] a[href*="desen='+slug.split('-')[0]+'"] img'); return a ? (a.currentSrc||a.getAttribute('src')) : ''; }
  function add(){
    var home=document.querySelector('[data-bg-home]'); if(!home) return;
    var ds=document.querySelector('[data-bg-desen]'); if(!ds) return;
    var ex=document.querySelector('[data-bg-best]');
    if(ex){ if(ex.getAttribute('data-ok')) return; [].forEach.call(ex.querySelectorAll('img[data-slug]'),function(im){ if(!im.getAttribute('src')){ var u=img(im.getAttribute('data-slug')); if(u) im.setAttribute('src',u);} }); if(![].some.call(ex.querySelectorAll('img[data-slug]'),function(im){return !im.getAttribute('src');})) ex.setAttribute('data-ok','1'); return; }
    var sec=document.createElement('section'); sec.setAttribute('data-bg-best','1'); sec.setAttribute('aria-label','En çok tercih edilen desenler');
    sec.innerHTML='<div class="bg-best-h"><div><span class="bg-eyebrow">EN ÇOK TERCİH EDİLENLER</span><h2>Çok satan 3 seri</h2><p>Kararsız kaldıysan buradan başla. Müşterilerimizin en çok seçtiği desenler.</p></div></div><div class="bg-best-g">'+BS.map(function(b){ var u=img(b.slug); return '<a class="bg-best-c" href="/betaguard-kaplama?desen='+b.slug+'"><div class="bg-best-i"><img data-slug="'+b.slug+'" '+(u?'src="'+u+'"':'')+' alt="'+b.s+' serisi kaplama" loading="lazy"></div><span class="bg-best-b">ÇOK SATAN</span><div class="bg-best-t"><strong>'+b.s+'<span>'+b.n+'</span></strong><p>'+b.d+'</p><em>İncele →</em></div></a>'; }).join('')+'</div>';
    ds.parentNode.insertBefore(sec, ds);
  }
  var ready=false,q=false;
  function ap(){ if(!ready) return; try{ add(); }catch(e){} }
  function sch(){ if(q) return; q=true; setTimeout(function(){ q=false; ap(); },80); }
  function go(){ setTimeout(function(){ ready=true; ap(); new MutationObserver(sch).observe(document.documentElement,{childList:true,subtree:true}); },640); }
  if(document.readyState!=='loading') go(); else document.addEventListener('DOMContentLoaded',go);
})();

/* ===== 02_v16.js ===== */
/* v16: cihaz secimi - yeniden cizim duzeltmesi + Hizli/Manuel basliklari */
(function(){
  if (window.__bgV16) return; window.__bgV16 = 1;
  var css = ['.bg-dev-sub{font:800 12px/1.3 Manrope,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#E2C285;display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 8px}',
    '.bg-dev-sub span{font:500 13px Manrope,sans-serif;letter-spacing:0;text-transform:none;color:#8E8A83}',
    '.bg-dev-or{order:10;display:flex;align-items:center;gap:10px;margin-top:8px;font:600 12px Manrope,sans-serif;color:#8E8A83}',
    '.bg-dev-or:before,.bg-dev-or:after{content:"";flex:1;height:1px;background:#2A292E}',
    '.bg-dev-man{order:11;margin-top:2px}',
    '.bg-dev .bg-sugg{top:102px!important}'].join('');
  var st = document.createElement('style'); st.id = 'bg-theme-css16'; st.textContent = css; (document.head || document.documentElement).appendChild(st);
  function labels(){
    var dv = document.querySelector('.bg-dev'); if (!dv || dv.querySelector('.bg-dev-sub')) return;
    var inp = dv.querySelector('input'); if (!inp) return;
    var a = document.createElement('div'); a.className = 'bg-dev-sub'; a.innerHTML = 'Hızlı cihaz seçimi<span>Modelini yaz, listeden seç</span>';
    dv.insertBefore(a, inp);
    var or = document.createElement('div'); or.className = 'bg-dev-or'; or.textContent = 'veya';
    var m = document.createElement('div'); m.className = 'bg-dev-sub bg-dev-man'; m.innerHTML = 'Manuel cihaz seçimi<span>Tür, marka ve modeli sırayla seç</span>';
    dv.appendChild(or); dv.appendChild(m);
  }
  function rootOf(el){ while (el && !el.__k) el = el.parentElement; return el; }
  function comps(root){ var out = []; (function w(v){ if (!v) return; if (Array.isArray(v)) { for (var i = 0; i < v.length; i++) w(v[i]); return; } if (v.__c && v.__c.props && v.__c.props.option) out.push(v.__c); if (v.__k) w(v.__k); })(root.__k); return out; }
  function vis(p, ch){ var r = ch.requiredOptionValueIds; return r && r.length ? r.some(function(id){ return (p.values || []).indexOf(id) >= 0; }) : !!(p.values && p.values.length); }
  function clearAll(o){ (o.childOptions || []).forEach(function(ch){ if (ch.values && ch.values.length) ch.values = []; clearAll(ch); }); }
  function clearHidden(o){ (o.childOptions || []).forEach(function(ch){ if (!vis(o, ch)) { if (ch.values && ch.values.length) ch.values = []; clearAll(ch); } else clearHidden(ch); }); }
  function refresh(t){
    var r = rootOf(t); if (!r) return;
    var cs = comps(r), field = t.closest('.pcz-field'), own = null;
    for (var i = 0; i < cs.length; i++) if (cs[i].base === field) { own = cs[i]; break; }
    if (own) { try { clearHidden(own.props.option); } catch (e) {} try { own.forceUpdate(); } catch (e) {} }
    setTimeout(function(){ var c2 = comps(r); for (var j = 0; j < c2.length; j++) { try { c2[j].forceUpdate(); } catch (e) {} } }, 40);
  }
  document.addEventListener('change', function(e){ var t = e.target; if (!t || !t.closest || !t.closest('.pcz')) return; setTimeout(function(){ refresh(t); }, 0); });
  var q = false;
  function sch(){ if (q) return; q = true; setTimeout(function(){ q = false; try { labels(); } catch (e) {} }, 120); }
  function go(){ setTimeout(function(){ sch(); new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true }); }, 700); }
  if (document.readyState !== 'loading') go(); else document.addEventListener('DOMContentLoaded', go);
})();

/* ===== 03_v17.js ===== */
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

/* ===== 04_v18.js ===== */
/* v18: model bazli gercek fiyat gosterimi + drone combo notu */
(function(){
  if (window.__bgV18) return; window.__bgV18 = 1;
  var PRICE = {"Canon|EOS 1100D":1750,"Canon|EOS-1D Mark IV":2500,"Canon|EOS-1Ds Mark III":2500,"Canon|EOS-1D X":2500,"Canon|EOS-1D X Mark II":2500,"Canon|EOS-1D X Mark III":2500,"Canon|EOS 250D (200D Mark II)":1750,"Canon|EOS 300X":1750,"Canon|EOS 40D":2000,"Canon|EOS 500D":1750,"Canon|EOS 50D":2000,"Canon|EOS 550D":1750,"Canon|EOS 5D":2000,"Canon|EOS 5D Mark II":2000,"Canon|EOS 5D Mark III":2000,"Canon|EOS 5D Mark IV":2000,"Canon|EOS 5DS R":2000,"Canon|EOS 600D":1750,"Canon|EOS 60D":2000,"Canon|EOS 650D":1750,"Canon|EOS 6D":2000,"Canon|EOS 6D Mark II":2000,"Canon|EOS 700D (T5i)":1750,"Canon|EOS 70D":2000,"Canon|EOS 750D (T6i)":1750,"Canon|EOS 77D":2000,"Canon|EOS 7D":2000,"Canon|EOS 7D Mark II":2000,"Canon|EOS 800D":1750,"Canon|EOS 80D":2000,"Canon|EOS 90D":2000,"Canon|EOS C50":2500,"Canon|EOS M":1750,"Canon|EOS M10":1750,"Canon|EOS M3":1750,"Canon|EOS M5":1750,"Canon|EOS M50 / M50 Mark II":1750,"Canon|EOS M6":1750,"Canon|EOS M6 Mark II":1750,"Canon|EOS R":2000,"Canon|EOS R1":2500,"Canon|EOS R10":2000,"Canon|EOS R100":2000,"Canon|EOS R3":2500,"Canon|EOS R5":2000,"Canon|EOS R5 Mark II":2000,"Canon|EOS R50":2000,"Canon|EOS R50 V":2000,"Canon|EOS R5 C":2000,"Canon|EOS R6":2000,"Canon|EOS R6 Mark II":2000,"Canon|EOS R6 Mark III":2000,"Canon|EOS R6 V":2000,"Canon|EOS R7":2000,"Canon|EOS R8":2000,"Canon|EOS 1300D (Rebel T6)":1750,"Canon|EOS 1500D (Rebel T7)":1750,"Canon|EOS RP":2000,"Canon|PowerShot G7 X Mark II":1750,"Sony|Alpha A7C II":2000,"Sony|Alpha 1":2000,"Sony|Alpha 9 III":2000,"Sony|Alpha A5100":1750,"Sony|Alpha A6000":2000,"Sony|Alpha A6100":2000,"Sony|Alpha A6300":2000,"Sony|Alpha A6400":2000,"Sony|Alpha A6500":2000,"Sony|Alpha A6600":2000,"Sony|Alpha A6700":2000,"Sony|Alpha A7 / A7R / A7S":2000,"Sony|Alpha A7 II / A7R II":2000,"Sony|Alpha A7 III / A7R III":2000,"Sony|Alpha A7 IV":2000,"Sony|Alpha A7 V":2000,"Sony|Alpha A7C":2000,"Sony|Alpha A7R IV":2000,"Sony|Alpha A7R V":2000,"Sony|Alpha A7R VI":2000,"Sony|Alpha A7S II":2000,"Sony|Alpha A7S III":2000,"Sony|Alpha A9":2000,"Sony|Alpha A9 II":2000,"Sony|Alpha A99 II":2000,"Sony|Alpha NEX-5":1750,"Sony|Alpha NEX-5R":1750,"Sony|Alpha NEX-6":1750,"Sony|Alpha NEX-7":1750,"Sony|Alpha NEX-C3":1750,"Sony|ZV-E10":2000,"Sony|RX100 III":1750,"Sony|RX100 IV":1750,"Sony|RX100 VI":1750,"Sony|RX100 VII":1750,"Sony|FX2":2000,"Sony|FX3":2000,"Sony|FX30":2000,"Sony|FX5":2000,"Sony|FX6":2500,"Sony|RX10 III":2500,"Sony|RX100":1750,"Sony|WX500":2000,"Sony|ZV-1":1750,"Sony|ZV-1 II":1750,"Sony|ZV-E1":2000,"Sony|ZV-E10 II":2000,"Nikon|Coolpix A900":2000,"Nikon|D200":2000,"Nikon|D3":2500,"Nikon|D300":2000,"Nikon|D300S":2000,"Nikon|D3100":1750,"Nikon|D3300":1750,"Nikon|D3500":1750,"Nikon|D3s":2500,"Nikon|D4":2500,"Nikon|D4s":2500,"Nikon|D5":2500,"Nikon|D500":2000,"Nikon|D5200":1750,"Nikon|D5300":1750,"Nikon|D5600":1750,"Nikon|D600 / D610":2000,"Nikon|D700":2000,"Nikon|D7000":2000,"Nikon|D7100 / D7200":2000,"Nikon|D750":2000,"Nikon|D7500":2000,"Nikon|D780":2000,"Nikon|D80":2000,"Nikon|D800":2000,"Nikon|D800E":2000,"Nikon|D810":2000,"Nikon|D850":2000,"Nikon|D90":2000,"Nikon|Df":2000,"Nikon|F3":2000,"Nikon|Z30":1750,"Nikon|Z5":2000,"Nikon|Z5 II":2000,"Nikon|Z50":2000,"Nikon|Z50 II":2000,"Nikon|Z6 / Z7":2000,"Nikon|Z6 II / Z7 II":2000,"Nikon|Z6 III":2000,"Nikon|Z8":2500,"Nikon|Z9":2500,"Nikon|Zf":2000,"Nikon|ZR":2000,"Fujifilm|GFX100":2500,"Fujifilm|GFX100S":2500,"Fujifilm|GFX 50S":2000,"Fujifilm|X-A10":1750,"Fujifilm|X-A2":1750,"Fujifilm|X-A20":1750,"Fujifilm|X-A20 Pro":1750,"Fujifilm|X-A3":1750,"Fujifilm|X-A5":1750,"Fujifilm|X-E1":2000,"Fujifilm|X-E2":2000,"Fujifilm|X-E2s":2000,"Fujifilm|X-E3":2000,"Fujifilm|X-E4":2000,"Fujifilm|X-H1":2000,"Fujifilm|X-H2S":2000,"Fujifilm|X-Pro1":2000,"Fujifilm|X-Pro2":2000,"Fujifilm|X-Pro3":2000,"Fujifilm|X-S10":2000,"Fujifilm|X-T1":2000,"Fujifilm|X-T10":1750,"Fujifilm|X-T100":2000,"Fujifilm|X-T2":2000,"Fujifilm|X-T20":1750,"Fujifilm|X-T200":2000,"Fujifilm|X-T3":2000,"Fujifilm|X-T30":1750,"Fujifilm|X-T30 II":1750,"Fujifilm|X-T3a":2000,"Fujifilm|X-T4":2000,"Fujifilm|X-T4a":2000,"Fujifilm|X-T5":2000,"Fujifilm|X100":1750,"Fujifilm|X100F":1750,"Fujifilm|X100V":1750,"Fujifilm|X100VI":1750,"Panasonic|Lumix DC-G9":2000,"Panasonic|Lumix DC-S1R":2000,"Panasonic|Lumix DC-S5":2000,"Panasonic|Lumix DMC-GF1 Pro":1750,"Panasonic|Lumix DMC-GH2":2000,"Panasonic|Lumix DMC-GH4":2000,"Panasonic|Lumix GH5":2000,"Panasonic|Lumix GH6":2000,"Panasonic|Lumix S1H":2000,"Panasonic|Lumix S5 II / S5 IIX":2000,"Panasonic|Lumix TZ200":1750,"Leica|Q2":2000,"Leica|SL2":2000,"Olympus|OM-D E-M1X":2000,"Olympus|PEN-F":2000,"Ricoh|GR III":1750,"Ricoh|GR IV":1750,"Blackmagic|Pocket Cinema Camera 6K":2000,"Canon|EF 100-400mm f4.5-5.6 L IS II USM":2000,"Canon|EF 100-400mm f4.5-5.6 L IS USM (Mark I)":2000,"Canon|EF 100mm f2 USM":1500,"Canon|EF 100mm F2.8 IS USM":1500,"Canon|EF 100mm f2.8L Macro IS USM":1500,"Canon|EF 11-24mm F4 L USM":1250,"Canon|EF 135mm f2L USM":1500,"Canon|EF 16-35mm F2.8 L II USM":1250,"Canon|EF 16-35mm F2.8 L III USM":1250,"Canon|EF 16-35mm F2.8 L USM (Mark I)":1250,"Canon|EF 16-35mm F4 L IS USM":1250,"Canon|EF 17-35mm f2.8":1250,"Canon|EF 17-35mm f2.8 L USM":1250,"Canon|EF 17-40mm F4 L USM":1250,"Canon|EF 18-135mm F3.5-5.6 IS STM":1500,"Canon|EF 20-35mm F3.5-4.5 USM":1250,"Canon|EF 200mm f2.8L II USM":2000,"Canon|EF 20mm F1.8 USM":1250,"Canon|EF 20mm F2.8 USM":1250,"Canon|EF 24-105mm f3.5-5.6 IS STM":1500,"Canon|EF 24-105mm F4 L IS II USM":1500,"Canon|EF 24-105mm F4 L IS USM":1500,"Canon|EF 24-70mm F2.8 L I USM":1500,"Canon|EF 24-70mm F2.8 L II USM":1500,"Canon|EF 24-70mm F4 L IS USM":1500,"Canon|EF 24mm f2.8 IS USM":1250,"Canon|EF 28-105mm f3.5-4.5 II USM":1500,"Canon|EF 28-135mm f3.5-5.6 IS USM":1500,"Canon|EF 28-135mm F3.5-5.6 USM":1500,"Canon|EF 28-200mm F3.5-5.6 USM":1500,"Canon|EF 28-70mm f2.8L USM":1500,"Canon|EF 28-80mm F3.5-5.6 V USM":1500,"Canon|EF 35-80mm f4-5.6 II":1500,"Canon|EF 35mm f1.4L II USM":1250,"Canon|EF 35mm f1.4L USM":1250,"Canon|EF 35mm f2 (Non IS)":1250,"Canon|EF 35mm f2 IS USM":1250,"Canon|EF 50mm F1.8 II":1250,"Canon|EF 50mm F1.2 L USM":1250,"Canon|EF 50mm F1.4 USM":1250,"Canon|EF 50mm F1.8 STM":1250,"Canon|EF 70-200mm F2.8 L IS I USM":1500,"Canon|EF 70-200mm F2.8 L IS II / III USM":1500,"Canon|EF 70-200mm F2.8 non IS L USM":1500,"Canon|EF 70-200mm F4 IS USM":1500,"Canon|EF 70-200mm F4 L IS USM":1500,"Canon|EF 70-200mm F4 L USM (non IS)":1500,"Canon|EF 70-300mm F4-5.6 L IS USM":2000,"Canon|EF 70-300mm f4-5.6L IS II USM":2000,"Canon|EF 75-300mm f4-5.6 II":2000,"Canon|EF 75-300mm f4-5.6 III USM":2000,"Canon|EF 75-300mm f4-5.6 IS USM":2000,"Canon|EF 8-15mm F4 L Fisheye USM":1250,"Canon|EF 85mm f1.2 L II USM":1500,"Canon|EF 85mm F1.2 L USM":1500,"Canon|EF 85mm f1.4L IS USM":1500,"Canon|EF 85mm f1.8 USM":1500,"Canon|EF-M 15-45mm F3.5-6.3 IS STM":1250,"Canon|EF-M 18-150mm F3.5-6.3 IS STM":1500,"Canon|EF-M 18-55mm F3.5-5.6 IS STM":1250,"Canon|EF-M 22mm f2 STM":1250,"Canon|EF-M 55-200mm f4.5-6.3 IS STM":1500,"Canon|EF-S 10-18mm F4.5-5.6 IS STM":1250,"Canon|EF-S 10-22mm f3.5-4.5 USM":1250,"Canon|EF-S 17-55mm F2.8 IS USM":1750,"Canon|EF-S 17-85mm f4-5.6 IS USM":1500,"Canon|EF-S 18-135mm F3.5-5.6 IS STM":1500,"Canon|EF-S 18-135mm Nano USM":1500,"Canon|EF-S 18-200mm F3.5-5.6 IS":1500,"Canon|EF-S 18-55mm":1500,"Canon|EF-S 18-55mm F3.5-5.6 II":1250,"Canon|EF-S 18-55mm F3.5-5.6 IS II":1250,"Canon|EF-S 18-55mm F3.5-5.6 IS STM":1250,"Canon|EF-S 55-250mm f4-5.6 IS II":1500,"Canon|EF-S 55-250mm f4-5.6 IS STM":1500,"Canon|Fisheye EF 15mm f2.8":1250,"Canon|Mount Adapter EF-EOS M":1000,"Canon|Mount Adapter EF-EOS R":1000,"Canon|RF 100-400mm F5.6-8 IS USM":2000,"Canon|RF 100-500mm f4.5-7.1 L IS USM":2000,"Canon|RF 100mm f2.8L Macro IS USM":1500,"Canon|RF 15-35mm F2.8 L IS USM":1250,"Canon|RF 18-150mm F3.5-6.3 IS STM":1500,"Canon|RF 24-105mm f2.8 L IS USM Z":1500,"Canon|RF 24-105mm F4 L IS USM":1500,"Canon|RF 24-105mm F4-7.1 IS STM":1500,"Canon|RF 24-105mm F4-7.1 IS STM Macro":1500,"Canon|RF 24-240mm f4-6.3 IS USM":1500,"Canon|RF 24-70mm F2.8 L IS USM":1500,"Canon|RF 28-70mm f2 L USM":1500,"Canon|RF 28-70mm F2.8 IS STM":1500,"Canon|RF 35mm F1.4 L VCM":1250,"Canon|RF 35mm f1.8 IS Macro STM":1250,"Canon|RF 50mm F1.2 L USM":1250,"Canon|RF 50mm F1.4 L VCM":1250,"Canon|RF 50mm F1.8 STM":1250,"Canon|RF 70-200mm F2.8 L IS USM":1500,"Canon|RF 70-200mm F2.8L IS USM Z":1500,"Canon|RF 70-200mm F4 L IS USM":1500,"Canon|RF 85mm F1.2 L USM":1500,"Canon|RF 85mm f1.4L VCM":1500,"Canon|RF 85mm F2 Macro IS STM":1500,"Canon|RF-S 14-30mm F4-6.3 IS STM PZ":1250,"Canon|RF-S 18-150mm F3.5-6.3 IS STM":1500,"Nikon|14-24mm f2.8 Nano":1750,"Nikon|18-35mm f3.5-4.5D":1250,"Nikon|18-55mm F3.5-5.6G II VR":1250,"Nikon|18-55mm f3.5-5.6G VR DX":1250,"Nikon|200-400mm F4 VR & VR II":2000,"Nikon|24-120mm f4 ED":1500,"Nikon|24-70mm F2.8 S":1750,"Nikon|24-70mm F2.8 VR Nano":1750,"Nikon|24-70mm Nano":1500,"Nikon|24-70mm Nano Mark 2":1500,"Nikon|24-85mm f2.8D":1750,"Nikon|24mm f1.4":1500,"Nikon|24mm F1.8 Nano":1250,"Nikon|28-300mm F3.5-5.6":1500,"Nikon|28-70mm 2.8":1500,"Nikon|28-70mm F3.5-4.5D":1500,"Nikon|28mm F1.8 N":1250,"Nikon|300mm F4D AF-S":3000,"Nikon|35mm f1.4 N":1500,"Nikon|35mm F1.8G AF-S ED":1250,"Nikon|50mm F1.8G AF-S":1250,"Nikon|60mm f2.8 N ED":1250,"Nikon|70-200mm F2.8 FL (VR III)":1750,"Nikon|70-200mm F2.8 VR I":1750,"Nikon|70-200mm F2.8 VR II":1750,"Nikon|70-200mm F2.8E FL ED AF-S VR":1750,"Nikon|70-200mm F2.8G AF-S ED VR I":1750,"Nikon|70-200mm F2.8G AF-S ED VR II":1750,"Nikon|70-300mm f4.5-6.3G ED DX":2000,"Nikon|70-300mm VR AF-P f4.5-6.3 DX ED":2000,"Nikon|80-200mm F2.8 II AF":1750,"Nikon|80-200mm F2.8 III":1750,"Nikon|80-400mm F4.5-5.6 VR":2000,"Nikon|80-400mm f4.5-5.6G AF-S ED VR Nano":2000,"Nikon|85mm F1.4 Nano":1500,"Nikon|85mm F1.4G AF-S":1500,"Nikon|85mm F1.8 S":1500,"Nikon|85mm F1.8G AF-S":1500,"Nikon|AF 50mm f1.8D":1250,"Nikon|AF 80-200mm F2.8D II":1500,"Nikon|AF 80-200mm f2.8D III":1500,"Nikon|AF Micro 105mm 2.8D":1500,"Nikon|AF NIKKOR 28-105mm F3.5-4.5D":1500,"Nikon|AF NIKKOR 28-70 f3.5-4.5 D":1500,"Nikon|AF NIKKOR 35mm F2 D":1250,"Nikon|AF Nikkor 50mm f1.4 D":1500,"Nikon|AF Nikkor 85mm F1.4D IF":1500,"Nikon|AF Nikkor 85mm f1.8D":1500,"Nikon|AF-S 105mm 1.4 Nano":1500,"Nikon|AF-S 105mm 2.8G VR":1500,"Nikon|AF-S 105mm F1.4E ED Nano":1750,"Nikon|AF-S 105mm F2.8 VR Micro Nano":1500,"Nikon|AF-S 14-24mm f2.8G ED":1750,"Nikon|AF-S 16-35mm f4 VR Nano":1500,"Nikon|AF-S 16-35mm f4G ED VR":1500,"Nikon|AF-S 17-35mm f2.8D IF-ED":1750,"Nikon|AF-S 18-105mm F3.5-5.6 G ED VR DX NIKKOR":1500,"Nikon|AF-S 18-200mm f3.5-5.6G ED VR II":1500,"Nikon|AF-S 200-400mm f4G ED VR":2000,"Nikon|AF-S 200-500mm f5.6 ED VR":2000,"Nikon|AF-S 20mm f1.8G ED Nano":1250,"Nikon|AF-S 24-120mm F4G ED VR Nano":1500,"Nikon|AF-S 24mm f1.4G ED Nano":1500,"Nikon|AF-S 28-70mm F2.8D ED":1750,"Nikon|AF-S 28mm F1.4E ED Nano":1500,"Nikon|AF-S 28mm f1.8G Nano":1250,"Nikon|AF-S 300mm f2.8 G ED VR":3000,"Nikon|AF-S 300mm f4 D IF-ED":3000,"Nikon|AF-S 35mm F1.4G Nano":1500,"Nikon|AF-S 50mm F1.8G":1250,"Nikon|AF-S 58mm":1500,"Nikon|AF-S 70-200mm f2.8E FL ED VR":1750,"Nikon|AF-S 70-200mm f2.8G ED VR":1750,"Nikon|AF-S 70-200mm f2.8G ED VR II":1750,"Nikon|AF-S 70-200mm f4G":1500,"Nikon|AF-S 8-15mm 3.5-4.5 ED":1500,"Nikon|AF-S 85mm f1.4G Nano":1500,"Nikon|AF-S DX 17-55mm f2.8G ED":1750,"Nikon|AF-S DX 18-105mm 3.5-5.6 ED":1500,"Nikon|AF-S DX 18-140mm f3.5-5.6G ED VR":1500,"Nikon|AF-S DX 55-300mm F4.5-5.6 G ED VR":2000,"Nikon|AF-S DX NIKKOR 18-140 F3.5-5.6 G ED VR":1500,"Nikon|AF-S NIKKOR 200-500mm f5.6E ED VR":2000,"Nikon|AF-S NIKKOR 24-70mm F2.8E ED VR":1750,"Nikon|AF-S NIKKOR 24-85mm f3.5-4.5G ED VR":1500,"Nikon|AF-S NIKKOR 24mm f1.8G ED":1250,"Nikon|AF-S NIKKOR 28-300mm f3.5-5.6 G ED VR":1500,"Nikon|AF-S NIKKOR 35mm F1.8G ED FX":1250,"Nikon|AF-S NIKKOR 50mm f1.4 G":1500,"Nikon|AF-S NIKKOR 58mm f1.4G Nano":1500,"Nikon|AF-S NIKKOR 85mm f1.8 G":1500,"Nikon|F 80-200mm 2.8":1500,"Nikon|FTZ Mount Adapter":1000,"Nikon|Nikkor AF 70-210mm F4":1500,"Nikon|Nikkor Z 24-120mm f4 S":1500,"Nikon|NIKKOR Z 24-70mm F2.8 S II":1750,"Nikon|NIKKOR Z 35mm F1.2 S":1750,"Nikon|Nikkor Z 35mm F1.4":1500,"Nikon|NIKKOR Z 40mm F2":1250,"Nikon|NIKKOR Z 50mm f1.2 S":1750,"Nikon|Nikkor Z 50mm F1.4":1500,"Nikon|NIKKOR Z 50mm f1.8 S":1250,"Nikon|Nikkor Z 70-180mm F2.8":1750,"Nikon|NIKKOR Z 800mm f6.3 VR S":3000,"Nikon|NIKKOR Z 85mm F1.2 S":1750,"Nikon|NIKKOR Z DX 18-140mm f3.5-6.3 VR":1500,"Nikon|Z 14-24mm f2.8 S":1750,"Nikon|Z 14-30mm f4 S":1500,"Nikon|Z 20mm f1.8 S":1250,"Nikon|Z 24-70mm f2.8 S":1750,"Nikon|Z 24-70mm f4 S":1500,"Nikon|Z 24mm f1.8 S":1250,"Nikon|Z 28-75mm f2.8 S":1750,"Nikon|Z 35mm f1.8 S":1250,"Nikon|Z 70-200mm f2.8 VR S":1750,"Nikon|Z 85mm f1.8 S":1500,"Sony|12-24mm F4 G":1500,"Sony|135mm F1.8 Carl Zeiss Sonnar":1750,"Sony|16-35mm F2.8 ZA":1750,"Sony|16-35mm F4 CZ":1500,"Sony|16-50mm kit":1250,"Sony|16-70mm F4":1500,"Sony|18-105mm F4":1500,"Sony|18-55mm f3.5-5.6":1250,"Sony|24-240mm 3.5-6.3":1500,"Sony|24-70mm f2.8 GM":1750,"Sony|24-70mm F4":1500,"Sony|24-70mm f4 Zeiss":1500,"Sony|24mm F1.4 GM":1500,"Sony|24mm f2":1250,"Sony|32mm f1.8 Zeiss Touit":1250,"Sony|35mm f2.8":1250,"Sony|50mm 1.4 Zeiss Planar":1500,"Sony|50mm F1.8 OSS SEL":1250,"Sony|50mm f2.8 Macro":1250,"Sony|55mm f1.8 ZA":1250,"Sony|70-300mm F4":2000,"Sony|85mm F1.4 ZA Planar":1500,"Sony|90mm Macro":1500,"Sony|Carl Zeiss Planar T 85mm f1.4 ZA":1500,"Sony|Distagon T FE 35mm f1.4 ZA":1500,"Sony|E 10-18mm F4 OSS":1500,"Sony|E 11mm f/1.8 (SEL11F18)":1250,"Sony|E 18-135mm F3.5-5.6 OSS":1500,"Sony|E 18-200mm F3.5-6.3 OSS LE":1500,"Sony|E 35mm F1.8 OSS (SEL35F18)":1250,"Sony|E 55-210mm F4.5-6.3 OSS":1500,"Sony|E PZ 16-50mm F3.5-5.6 OSS":1250,"Sony|E PZ 18-105mm F4 G OSS":1500,"Sony|FE 100-400mm f4.5-5.6 GM OSS":2000,"Sony|FE 100mm f2.8 GM":1500,"Sony|FE 100mm F2.8 STF GM OSS":1500,"Sony|135mm F1.8 ZA (SAL, A-mount)":1750,"Sony|FE 135mm F1.8 GM":1750,"Sony|FE 14mm F1.8 GM":1250,"Sony|FE 16-25mm F2.8 G":1750,"Sony|FE 16-35mm F2.8 GM":1750,"Sony|FE 16-35mm F2.8 GM II":1750,"Sony|FE 200-600mm f5.6-6.3 G OSS":2000,"Sony|FE 20mm F1.8 G":1250,"Sony|FE 24-105mm F4 G OSS":1500,"Sony|FE 24-240mm f3.5-6.3 OSS":1500,"Sony|FE 24-50mm F2.8 G":1750,"Sony|FE 24-70mm F2.8 GM":1750,"Sony|FE 24-70mm f2.8 GM II":1750,"Sony|FE 24mm F1.4 GM":1500,"Sony|FE 28-70mm F2 GM":1750,"Sony|FE 28-70mm f3.5-5.6 OSS":1500,"Sony|FE 28mm F2":1250,"Sony|FE 35mm F1.4 GM":1500,"Sony|FE 35mm F1.8":1250,"Sony|FE 400mm F2.8 GM OSS":3000,"Sony|FE 50-150mm F2 GM":1750,"Sony|FE 50mm f1.2 GM":1750,"Sony|FE 50mm F1.4 GM":1500,"Sony|FE 50mm F1.8":1250,"Sony|FE 50mm F2.8 Macro":1250,"Sony|FE 55mm F1.8":1250,"Sony|FE 70-200mm F2.8 GM OSS":1750,"Sony|FE 70-200mm f2.8 GM OSS II":1750,"Sony|FE 70-200mm F4 G OSS":1500,"Sony|FE 70-300mm F4.5-5.6 G OSS":2000,"Sony|FE 85mm F1.4 GM":1500,"Sony|FE 85mm F1.4 GM II":1500,"Sony|FE 85mm F1.8":1500,"Sony|FE 90mm F2.8 Macro":1500,"Sony|FE Carl Zeiss 24-70mm F4 ZA OSS Vario-Tessar T":1500,"Sony|FE PZ 16-35mm F4 G":1500,"Sony|FE PZ 28-135mm F4 G OSS":1500,"Sony|Planar T FE 50mm F1.4 ZA":1500,"Sony|Sonnar 135mm F1.8":1750,"Sony|Sonnar T FE 35mm f2.8 ZA":1250,"Sony|Zeiss Sonnar 90mm f2.8":1500,"Sigma|100-400mm F5-6.3 DG DN OS for Sony E":2000,"Sigma|105mm F1.4 Art":1750,"Sigma|105mm f1.4 DG HSM Art for Sony E":1750,"Sigma|12-24mm f4 DG HSM Art for Canon":1500,"Sigma|135mm F1.8 Art (Canon/Nikon)":1750,"Sigma|135mm f1.8 DG HSM Art for Sony E-Mount":1750,"Sigma|14-24mm F2.8 Art (Sony)":1750,"Sigma|14-24mm f2.8 DG DN Art For Sony E":1750,"Sigma|14-24mm F2.8 DG HSM Art for Canon":1750,"Sigma|14mm f1.8 DG HSM Art for Sony E":1250,"Sigma|15-30mm":1500,"Sigma|150-500mm":2000,"Sigma|150-500mm APO HSM":2000,"Sigma|150-500mm F5-6.3 DG OS HSM":2000,"Sigma|150-600mm F5-6.3 DG OS HSM Sports Lens":2000,"Sigma|150-600mm F5-6.3 DG Sport":2000,"Sigma|16-28mm f2.8 DG DN for Sony E":1750,"Sigma|16-300mm F3.5-6.7 DC OS":1500,"Sigma|16mm f/1.4 DC DN Contemporary For Sony":1500,"Sigma|16mm f1.4":1500,"Sigma|17-35 mm F2.8-F4.0 EX DG HSM":1750,"Sigma|17-40mm F1.8 DC ART Fujifilm":1750,"Sigma|17-50mm F2.8 EX DC OS HSM":1750,"Sigma|17-70mm f2.8-4.5 DC HSM":1500,"Sigma|18-200 mm f3.5-6.3 DC OS":1500,"Sigma|18-35mm f1.8 DC HSM ART":1750,"Sigma|18-50mm f2.8 DC DN Contemporary for Sony":1750,"Sigma|20mm f1.4 DG HSM Art Lens for Canon EF":1500,"Sigma|20mm F1.8 EX DG":1250,"Sigma|20mm f1.8 EX DG ASP RF":1250,"Sigma|24-105mm F4 DG OS HSM Art for Canon, Nikon":1500,"Sigma|24-35mm Art (Canon/Nikon)":1500,"Sigma|24-35mm f2 Art":1750,"Sigma|24-70mm F2.8 Art (Sony)":1750,"Sigma|24-70mm F2.8 DG DN Art for Sony E, L-Mount":1750,"Sigma|24-70mm f2.8 DG DN II Art (Sony E)":1750,"Sigma|24-70mm f2.8 DG OS HSM Art for Canon":1750,"Sigma|24-70mm f2.8 EX DG Macro":1750,"Sigma|24mm F1.4 Art (Sony)":1500,"Sigma|24mm f1.4 DG DN Art":1500,"Sigma|24mm F1.4 DG HSM Art":1500,"Sigma|28-105mm f2.8 DG DN (Art) for Sony E":1750,"Sigma|28-300mm f3.5-6.3":1500,"Sigma|28-45mm f1.8 DG DN Art for Sony E":1750,"Sigma|28-70mm F2.8 DG DN":1750,"Sigma|30mm DC HSM Art (Canon)":1500,"Sigma|30mm F1.4 (Sony)":1500,"Sigma|30mm F1.4 DC DN for Sony E":1500,"Sigma|30mm f1.4 DC HSM Art":1500,"Sigma|30mm F2.8 (Sony)":1250,"Sigma|30mm f2.8 EX DN For Sony E":1250,"Sigma|35mm F1.2 Art (Sony)":1750,"Sigma|35mm f1.2 DG DN Art For Sony E":1750,"Sigma|35mm F1.4 Art (Canon/Nikon)":1500,"Sigma|35mm f1.4 DG DN Art For Sony E":1500,"Sigma|35mm f1.4 DG DN II Art Sony E":1500,"Sigma|35mm f1.4 DG HSM Art Lens for Sony E":1500,"Sigma|50-500mm F4.5-6.3 APO DG OS HSM":2000,"Sigma|50mm F1.4 DG DN Art":1500,"Sigma|50mm F1.4 DG HSM Art For Sony E":1500,"Sigma|50mm F1.4 DG HSM For Canon, Nikon":1500,"Sigma|56mm f1.4 DC DN":1500,"Sigma|65mm f2 DG DN Contemporary for Sony E":1500,"Sigma|70-200mm f2.8 APO EX DG OS HSM":1750,"Sigma|70-200mm f2.8 DC HSM":1750,"Sigma|70-200mm f2.8 DG DN":1750,"Sigma|70-200mm f2.8 EX DG HSM II Macro":1750,"Sigma|70mm f2.8 DG Macro Art for Sony E-mount":1500,"Sigma|85mm F1.4 Art (Canon/Nikon)":1500,"Sigma|85mm F1.4 Art (Sony)":1500,"Sigma|85mm f1.4 DG DN Art for Sony E":1500,"Sigma|APO Macro 150mm F2.8 EX DG OS HSM Lens":2000,"Sigma|MC-11 Mount Converter Lens Adapter":1000,"Tamron|150-500mm F5-6.7 Di III VC VXD For Sony E":2000,"Tamron|17-28mm F2.8 Di III RXD for Sony":1750,"Tamron|17-35mm F2.8-4 DI OSD":1250,"Tamron|17-70mm f2.8 Di III-A VC RXD for Sony E":1750,"Tamron|18-200mm":1500,"Tamron|19-35mm f3.5-4.5":1250,"Tamron|24-70mm F2.8 Di VC USD G2":1750,"Tamron|24mm F2.8":1250,"Tamron|24mm F2.8 DI III OSD":1250,"Tamron|28-200mm F2.8-5.6 Di III RXD for Sony E":1500,"Tamron|28-300mm VC (Nikon)":1500,"Tamron|28-75mm (Canon/Nikon)":1500,"Tamron|28-75mm f2.8 Di III VXD G2 for Sony E":1750,"Tamron|28-75mm F2.8 for Sony":1750,"Tamron|35-150mm f2-2.8 Di III VXD for Sony E":1500,"Tamron|35mm Di III OSD M12":1500,"Tamron|70-180mm F2.8 (Sony)":1750,"Tamron|70-200mm 2.8 Macro":1500,"Tamron|70-200mm f2.8 DI VC USD G1":1750,"Tamron|70-300mm F4.5-6.3 Di III RXD for Sony E":2000,"Tamron|85mm f1.8 Di VC":1500,"Tamron|AF 28-300mm F3.5-6.3 XR Di LD":1500,"Tamron|AF 28-75mm f2.8 XR Di LD":1500,"Tamron|SP 24-70mm f2.8 Di VC G1":1750,"Tamron|SP 35mm F1.4 DI USD (Nikon)":1500,"Tamron|SP 35mm f1.8 DI VC USD":1250,"Tamron|SP 45mm f1.8 DI VC USD (Canon)":1250,"Tamron|SP 70-200mm F2.8 Di VC G2 For Canon, Nikon":1750,"Tamron|SP AF 17-50mm F2.8 VC":1250,"Tamron|SP AF 17-50mm F2.8 XR Di II LD":1250,"Fujifilm|Fujinon XF 23mm f2 R WR":1250,"Fujifilm|Fujinon XF 60mm f2.4 R Macro":1250,"Fujifilm|GF 110mm f2 R LM WR":1500,"Fujifilm|GF 120mm f4 Macro R LM OIS WR":1500,"Fujifilm|GF 23mm f4 R LM WR":1250,"Fujifilm|GF 250mm f4 R LM OIS WR":2000,"Fujifilm|GF 32-64mm f4 R LM WR":1500,"Fujifilm|GF 45-100mm f4 R LM OIS WR":1500,"Fujifilm|XC 15-45mm f3.5-5.6 OIS PZ":1250,"Fujifilm|XC 16-50mm F3.5-5.6 OIS":1250,"Fujifilm|XC 16-50mm F3.5-5.6 OIS II":1250,"Fujifilm|XC 50-230mm f4.5-6.7 OIS":1500,"Fujifilm|XF 10-24mm f4 R OIS":1250,"Fujifilm|XF 16-55mm f2.8 R LM WR":1250,"Fujifilm|XF 16-80mm f4 R OIS WR":1500,"Fujifilm|XF 16mm f1.4 R WR":1250,"Fujifilm|XF 18-55mm F2.8-4 R LM OIS":1250,"Fujifilm|XF 23mm f1.4 R":1250,"Fujifilm|XF 23mm F1.4 R LM WR II":1250,"Fujifilm|XF 33mm f1.4 R LM WR":1250,"Fujifilm|XF 35mm f1.4 R":1250,"Fujifilm|XF 50-140mm F2.8 R LM OIS WR":1500,"Fujifilm|XF 50mm f1.0 WR":1250,"Fujifilm|XF 56mm f1.2 R":1250,"Fujifilm|XF 56mm f1.2 R APD":1250,"Fujifilm|XF 56mm f1.2 R WR Mark II":1250,"Fujifilm|XF 90mm f2 R LM WR":1500,"Samyang|(Rokinon) 14mm f2.8 IF ED UMC":1250,"Samyang|(Rokinon) 85mm f1.4 IF MC Aspherical":1500,"Samyang|12mm f2.0":1250,"Samyang|12mm F2.8 ED AS NCS Fisheye":1250,"Samyang|135mm F2.0 ED UMC for Canon":1500,"Samyang|14mm f2.8":1250,"Samyang|35mm 1.5":1500,"Samyang|35mm F1.4 PFE":1500,"Samyang|AF 14mm f2.8 FE":1250,"Samyang|AF 24mm F2.8 FE":1250,"Samyang|AF 35mm F1.4 FE II":1250,"Samyang|AF 35mm F1.8 FE":1250,"Samyang|AF 35mm f2.8":1250,"Samyang|AF 50mm F1.4 II":1250,"Samyang|AF 85mm F1.4 E Mount For Sony":1500,"Samyang|AF 85mm F1.4 EF for Canon":1500,"Samyang|AF 85mm F1.4 FE II for Sony E":1500,"Samyang|ED 12mm f2.8":1250,"Samyang|FE 35mm F1.4 AF":1500,"Samyang|FE 50mm f1.8":1250,"Viltrox|56mm F1.4 XF":1500,"Viltrox|85mm F1.8 RF For Canon":1500,"Viltrox|AF 24mm f1.8 Z for Nikon Z":1250,"Viltrox|AF 33mm F1.4 XF":1250,"Viltrox|AF 35mm f1.8 Z Lens for Nikon Z":1250,"Viltrox|AF 50mm f1.8 FE for Sony E":1250,"Viltrox|AF 50mm f1.8 Z for Nikon Z":1250,"Viltrox|AF 56mm F1.4 E for Sony E":1250,"Viltrox|AF 85mm F1.4 Pro (Sony E)":1500,"Viltrox|AF 85mm F1.4 Pro Z":1500,"Viltrox|AF 85mm f1.8 (Nikon Z)":1500,"Viltrox|AF 85mm f1.8 II XF for Fujifilm":1500,"Viltrox|AF 85mm f1.8 Lens for Nikon Z":1500,"Viltrox|AF 85mm f1.8 XF II For Sony FE":1500,"Viltrox|EF-EOS R Lens Mount Adapter for Canon":1000,"Viltrox|EF-FX1 Lens Mount Adapter for Canon":1000,"Viltrox|EF-R2 Lens Mount Adapter for Canon":1000,"Panasonic|Leica DG Nocticron 42.5mm F1.2 ASPH OIS":1750,"Panasonic|Leica DG Vario-Elmarit 12-60mm f2.8-4 ASPH":1500,"Panasonic|Lumix 42.5mm f1.2":1750,"Panasonic|Lumix S 24-105mm F4 Macro O.I.S":1500,"Panasonic|Lumix S 24mm F1.8":1250,"Panasonic|Lumix S 35mm F1.8":1250,"Panasonic|Lumix S 50mm F1.8":1250,"Panasonic|Lumix S Pro 50mm f1.4":1500,"Minolta|AF 135mm F2.8":1500,"Minolta|AF 200mm":2000,"Minolta|AF 200mm f2.8 APO G":2000,"Minolta|AF 24-85mm":1500,"Minolta|AF 24-85mm F3.5-4.5 A-mount":1500,"Minolta|AF 50mm f2.8 Macro A-mount":1250,"Minolta|MD 135mm f3.5":1500,"Olympus|12-100mm f4":1500,"Olympus|40-150mm f2.8 Pro":1750,"Olympus|8mm f1.8":1250,"Olympus|M.Zuiko Digital ED 12-40mm f2.8 Pro":1750,"Olympus|M.Zuiko Digital ED 45mm F1.8":1250,"Zeiss|Batis 25mm F2 for Sony FE":1250,"Zeiss|Batis 40mm F2 CF for Sony":1250,"Zeiss|Batis 85mm F1.8 for Sony":1500,"Zeiss|Otus 85mm F1.4 ZE for Canon":1500,"Tokina|11-16mm":1500,"Tokina|16-28mm 2.8":1500,"Tokina|50mm 1.4 FF":1500,"Fotga|Lens Mount Adapter MD-NEX":1000,"Fotga|Minolta MD-NEX":1000,"Contax|Carl Zeiss Sonnar 90mm F2.8 G T":1500,"Leica|Summicron M 90mm F2 Leitz Canada":1500,"Metabones|Canon EF, EF-S to Sony E Mount":1000,"Pentacon|135mm f2.8":1500,"Yongnuo|YN 50mm f1.8 Lens for Nikon F":1250,"DJI|Air 2S":3000,"DJI|Air 3":3000,"DJI|Air 3S":3000,"DJI|Avata 2":3000,"DJI|Avata 360":3000,"DJI|Avata 360 Combo (Goggles N3)":3000,"DJI|FPV":3000,"DJI|Goggles 3":1500,"DJI|Goggles N3":1500,"DJI|Inspire 1":3500,"DJI|Inspire 2":3500,"DJI|Mavic 2 Pro":3000,"DJI|Mavic 3 Classic":3000,"DJI|Mavic 3 Pro":3000,"DJI|Mavic 4 Pro":3000,"DJI|Mavic Air":3000,"DJI|Mavic Air 2":3000,"DJI|Mavic Mini":2500,"DJI|Mavic Mini 2":2500,"DJI|Mavic Pro":3000,"DJI|Mini 3":2500,"DJI|Mini 3 Pro":2500,"DJI|Mini 4 Pro":2500,"DJI|Mini 5 Pro":2500,"DJI|Neo":2000,"DJI|Neo 2":2000,"DJI|Phantom 3":3500,"DJI|Phantom 3 / 4 Pro Remote Controller":1000,"DJI|Phantom 3 Pro":3500,"DJI|Phantom 4 / 4 Pro":3500,"DJI|RC":1000,"DJI|RC 2":1000,"DJI|RC Motion 3":1000,"DJI|RC Pro":1000,"DJI|RC-N1 / N2 / N3":1000,"DJI|Smart Controller":1000,"DJI|Spark":2500,"Xiaomi|FIMI X8 SE":3000,"DJI|Osmo Mobile 3":1500,"DJI|Osmo Mobile SE":1500,"DJI|Ronin-S":3000,"DJI|Ronin-SC":2500,"DJI|RS 2":3000,"DJI|RS 3":3000,"DJI|RS 3 Mini":2500,"DJI|RS 3 Pro":3000,"DJI|RS 4":3000,"DJI|RS 4 Mini":2500,"DJI|RS 4 Pro":3000,"DJI|RS 5":3000,"DJI|RSC 2":2500,"Zhiyun|Crane 2":3000,"Zhiyun|Crane Plus":1500,"Zhiyun|Smooth 4":1500,"Zhiyun|Smooth X":1500,"Zhiyun|Weebill":2500,"Zhiyun|Weebill LAB":2500,"Zhiyun|Weebill S":2500,"Feiyu|A2000":3000,"Moza|AirCross 2":2500,"Snoppa|Atom":1500,"DJI|Osmo Action 2":1500,"DJI|Osmo 360":1500,"DJI|Osmo Action 5 Pro":1500,"DJI|Osmo Action 6":1500,"DJI|Osmo Nano":1500,"DJI|Osmo Pocket":1500,"DJI|Osmo Pocket 2":1500,"DJI|Osmo Pocket 3":1500,"DJI|Osmo Pocket 4":1500,"GoPro|Hero 5":1500,"GoPro|Hero 7 Black":1500,"GoPro|Hero 7 Silver / White":1500,"GoPro|Hero 8 Black":1500,"GoPro|Hero 9 / 10 / 11 / 12":1500,"GoPro|Max":1500,"Insta360|Luna Ultra":1500,"Insta360|One X2":1500,"SJCAM|SJ4000 Wifi":1500};
  var css = [
    '.pcz-price{display:none!important}',
    'html.bg-nomodel [data-bg-pprice]{font-size:0!important;line-height:0!important;color:transparent!important}',
    'html.bg-nomodel [data-bg-pprice]::before{content:"Fiyat, modelini seçince görünür";display:block;font:500 15px/1.6 Manrope,sans-serif;color:#8E8A83;padding:4px 0}',
    '.bg-incl{display:inline-flex;align-items:center;gap:6px;margin:6px 0 2px;padding:5px 10px;border:1px solid #3A3426;border-radius:999px;background:#1B1912;color:#E2C285;font:600 12px/1.3 Manrope,sans-serif}',
    '.bg-incl a{color:#F2D9A5;text-decoration:underline;text-underline-offset:2px}',
    '.bg-incl a:hover{color:#fff}'
  ].join('');
  var st = document.createElement('style'); st.id = 'bg-theme-css18'; st.textContent = css; (document.head || document.documentElement).appendChild(st);
  function fieldVal(re){
    var f = [].slice.call(document.querySelectorAll('.pcz-field')).find(function(x){ var l = x.querySelector('.pcz-label'); return l && re.test(l.textContent) && x.offsetParent !== null; });
    if (!f) return ''; var s = f.querySelector('select'); if (!s || !s.value) return '';
    var o = s.options[s.selectedIndex]; return o ? o.text.trim() : '';
  }
  function lookup(brand, model){
    if (PRICE[brand + '|' + model] != null) return PRICE[brand + '|' + model];
    for (var k in PRICE) { var i = k.indexOf('|'); if (k.slice(i + 1) === model && k.slice(0, i).split('/').indexOf(brand) >= 0) return PRICE[k]; }
    return null;
  }
  function fmt(n){ return n.toLocaleString('tr-TR') + ' ₺'; }
  /* marka+model -> cihaz sayfasi slug'i (v26 BYSLUG tablosundan) */
  var REV = null;
  function devSlug(brand, model){
    var a = window.__BG; if (!a || !a.BYSLUG) return '';
    if (!REV) { REV = {}; for (var s in a.BYSLUG) { var d = a.BYSLUG[s]; if (d && d.b && d.m) REV[(d.b + '|' + d.m).toLowerCase()] = s; } }
    return REV[(brand + '|' + model).toLowerCase()] || '';
  }
  function run(){
    var pr = document.querySelector('[data-bg-pprice]'); if (!pr) return;
    var type = fieldVal(/Cihaz t/i), brand = fieldVal(/^\s*Marka/i), model = fieldVal(/^\s*Model/i);
    var total = model ? lookup(brand, model) : null;
    document.documentElement.classList.toggle('bg-nomodel', !!type && total == null);
    if (total != null) {
      var t = fmt(total);
      if (pr.textContent.trim() !== t) pr.textContent = t;
      var btn = [].slice.call(document.querySelectorAll('.rich-text,button')).find(function(x){ return x.children.length === 0 && /^Sepete Ekle$/i.test(x.textContent.trim()) && !(window.bgInFx && window.bgInFx(x)); });
      /* v27 kumanda eki: 00_main ile ayni degeri yaz, yoksa ikisi birbirini ezer (sonsuz dongu) */
      var bt = fmt(total + (+window.__bgKumEk || 0));
      if (btn && btn.getAttribute('data-bg-price') !== bt) btn.setAttribute('data-bg-price', bt);
    }
    var incl = document.querySelector('.bg-incl');
    var drone = /^Drone$/i.test(type) && model && !/\bRC\b|RC-|Controller|Goggles/i.test(model);
    if (drone) {
      /* kumanda secimi sadece cihazin kendi sayfasinda var; oraya yonlendir */
      var sl = devSlug(brand, model);
      var html = sl
        ? 'Kumanda kaplaması +1.000 ₺ · <a href="/' + sl + '">cihazın sayfasından ekle →</a>'
        : 'Kumanda kaplaması +1.000 ₺ ile eklenebilir';
      if (!incl) { incl = document.createElement('div'); incl.className = 'bg-incl'; pr.parentNode.insertBefore(incl, pr.nextSibling); }
      if (incl.innerHTML !== html) incl.innerHTML = html;
    } else if (incl) incl.remove();
  }
  var q = false;
  function sch(){ if (q) return; q = true; setTimeout(function(){ q = false; try { run(); } catch (e) {} }, 60); }
  function go(){ sch(); new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true, characterData: true }); document.addEventListener('change', sch, true); }
  if (document.readyState !== 'loading') setTimeout(go, 400); else document.addEventListener('DOMContentLoaded', function(){ setTimeout(go, 400); });
})();

/* ===== 05_v19.js ===== */
/* v19: "Cihazin neden kaplanmali?" bolumu - once/sonra kaydirici + 4 neden */
(function(){
  if (window.__bgV19) return; window.__bgV19 = 1;
  // Gercek fotograflar gelince doldurulacak (ayni aci, ayni isik). Bos kalirsa kaydirici gizlenir.
  var BEFORE = '', AFTER = '', DEVICE = '';
  var css = [
    '.bg-why{max-width:1180px;margin:56px auto;padding:0 20px;font-family:Manrope,sans-serif;color:#F2EFEA}',
    '.bg-why-h{text-align:center;margin:0 0 26px}',
    '.bg-why-h small{display:block;font:800 12px/1 Manrope,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#E2C285;margin-bottom:10px}',
    '.bg-why-h h2{margin:0;font:800 clamp(26px,4vw,40px)/1.15 Manrope,sans-serif;letter-spacing:-.01em}',
    '.bg-why-h p{margin:10px auto 0;max-width:560px;color:#8E8A83;font:500 15px/1.6 Manrope,sans-serif}',
    '.bg-ba{position:relative;max-width:920px;margin:0 auto 18px;aspect-ratio:16/10;border-radius:18px;overflow:hidden;background:#141317;border:1px solid #2A292E;user-select:none;touch-action:pan-y;--p:50%}',
    '.bg-ba img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none}',
    '.bg-ba .bg-ba-b{clip-path:inset(0 calc(100% - var(--p)) 0 0)}',
    '.bg-ba-line{position:absolute;top:0;bottom:0;left:var(--p);width:2px;margin-left:-1px;background:#E2C285;pointer-events:none}',
    '.bg-ba-knob{position:absolute;top:50%;left:var(--p);width:46px;height:46px;margin:-23px 0 0 -23px;border-radius:50%;background:#E2C285;color:#111;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 24px rgba(0,0,0,.45);pointer-events:none}',
    '.bg-ba-tag{position:absolute;top:14px;padding:6px 11px;border-radius:999px;background:rgba(10,10,12,.72);backdrop-filter:blur(6px);font:700 12px/1 Manrope,sans-serif;letter-spacing:.04em;pointer-events:none}',
    '.bg-ba-tag.l{left:14px;color:#C9C4BC}.bg-ba-tag.r{right:14px;color:#E2C285}',
    '.bg-ba input{position:absolute;inset:0;width:100%;height:100%;margin:0;opacity:0;cursor:ew-resize;-webkit-appearance:none;appearance:none}',
    '.bg-ba-cap{text-align:center;color:#8E8A83;font:500 13px/1.5 Manrope,sans-serif;margin:0 0 30px}',
    '.bg-why-g{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}',
    '.bg-why-c{padding:22px 20px;border:1px solid #2A292E;border-radius:16px;background:#141317}',
    '.bg-why-c i{display:flex;width:42px;height:42px;border-radius:12px;align-items:center;justify-content:center;background:#1E1C17;color:#E2C285;margin-bottom:14px}',
    '.bg-why-c b{display:block;font:800 16px/1.3 Manrope,sans-serif;margin-bottom:6px}',
    '.bg-why-c span{display:block;color:#8E8A83;font:500 14px/1.55 Manrope,sans-serif}',
    '.bg-why-cta{display:flex;justify-content:center;margin-top:26px}',
    '.bg-why-cta a{display:inline-flex;align-items:center;gap:8px;padding:14px 24px;border-radius:999px;background:#E2C285;color:#111!important;font:800 14px/1 Manrope,sans-serif;text-decoration:none}',
    '@media (max-width:900px){.bg-why-g{grid-template-columns:repeat(2,1fr)}}',
    '@media (max-width:520px){.bg-why{margin:40px auto}.bg-why-g{gap:10px}.bg-ba{aspect-ratio:4/5;border-radius:14px}.bg-why-c{padding:14px}.bg-why-c i{width:36px;height:36px;margin-bottom:10px}.bg-why-c b{font-size:14px}.bg-why-c span{font-size:12.5px;line-height:1.5}}'
  ].join('');
  var st = document.createElement('style'); st.id = 'bg-theme-css19'; st.textContent = css; (document.head || document.documentElement).appendChild(st);
  function ic(p){ return '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + p + '</svg>'; }
  var CARDS = [
    [ic('<path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/>'), 'Çizik ve sürtünmeye karşı', 'Çanta, sehpa, kemer tokası… Darbeler cihaza değil kaplamaya gelir.'],
    [ic('<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>'), 'İkinci el değerini korur', 'Satmaya karar verdiğinde kaplamayı sök; cihazın ilk günkü gibi çıksın.'],
    [ic('<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18c1.5 0 2-1 2-2s-1-1.5-1-2.5 1-1.5 2-1.5h2a4 4 0 0 0 4-4"/><circle cx="8" cy="10" r="1"/><circle cx="12" cy="7" r="1"/><circle cx="16" cy="10" r="1"/>'), 'Ekipmanına karakter kat', 'Onlarca desen ve renk. Kamerandan dronuna tüm setin aynı tarzda.'],
    [ic('<path d="M3 12a9 9 0 0 1 15.5-6.2L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.5 6.2L3 16"/><path d="M3 21v-5h5"/>'), 'İz bırakmadan sökülür', 'Cihazın yüzeyine zarar vermez. Canın sıkıldığında yeni desene geç.']
  ];
  function build(){
    var s = document.createElement('section'); s.className = 'bg-why'; s.setAttribute('data-bg-why', '1');
    var ba = '';
    if (BEFORE && AFTER) {
      ba = '<div class="bg-ba" role="group" aria-label="Kaplamasız ve kaplamalı karşılaştırma">' +
        '<img src="' + AFTER + '" alt="' + DEVICE + ' Betaguard kaplamalı" loading="lazy">' +
        '<img class="bg-ba-b" src="' + BEFORE + '" alt="' + DEVICE + ' kaplamasız" loading="lazy">' +
        '<span class="bg-ba-tag l">Kaplamasız</span><span class="bg-ba-tag r">Betaguard ile</span>' +
        '<span class="bg-ba-line"></span><span class="bg-ba-knob">' + ic('<path d="M9 6l-6 6 6 6"/><path d="M15 6l6 6-6 6"/>') + '</span>' +
        '<input type="range" min="0" max="100" value="50" aria-label="Karşılaştırma çubuğu"></div>' +
        '<p class="bg-ba-cap">Çubuğu kaydır, farkı gör' + (DEVICE ? ' · ' + DEVICE : '') + '</p>';
    }
    s.innerHTML = '<div class="bg-why-h"><small>Neden Betaguard?</small><h2>Cihazın neden kaplanmalı?</h2><p>Ekipmanına hem koruma hem kimlik kazandır. Üstelik istediğin an iz bırakmadan çıkar.</p></div>' + ba +
      '<div class="bg-why-g">' + CARDS.map(function(c){ return '<div class="bg-why-c"><i>' + c[0] + '</i><b>' + c[1] + '</b><span>' + c[2] + '</span></div>'; }).join('') + '</div>' +
      '<div class="bg-why-cta"><a href="/betaguard-kaplama">Cihazını seç, desenleri gör →</a></div>';
    var box = s.querySelector('.bg-ba');
    if (box) {
      var inp = box.querySelector('input');
      var set = function(v){ box.style.setProperty('--p', v + '%'); };
      inp.addEventListener('input', function(){ set(inp.value); hinted = true; });
      var hinted = false;
      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function(es){
          if (!es[0].isIntersecting || hinted) return; hinted = true; io.disconnect();
          var t0 = null, seq = [[50, 22, 500], [22, 78, 700], [78, 50, 500]], i = 0;
          (function step(ts){ if (i >= seq.length) return; if (t0 === null) t0 = ts; var a = seq[i], k = Math.min(1, (ts - t0) / a[2]), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2, v = a[0] + (a[1] - a[0]) * e; set(v); inp.value = v; if (k >= 1) { i++; t0 = null; } requestAnimationFrame(step); })(performance.now());
        }, { threshold: .5 });
        io.observe(box);
      }
    }
    return s;
  }
  function place(){
    if (location.pathname !== '/') return;
    if (document.querySelector('[data-bg-why]')) return;
    var best = document.querySelector('[data-bg-best]'), desen = document.querySelector('[data-bg-desen]');
    var sec = build();
    if (best && best.parentNode) best.parentNode.insertBefore(sec, best.nextSibling);
    else if (desen && desen.parentNode) desen.parentNode.insertBefore(sec, desen);
  }
  var q = false;
  function sch(){ if (q) return; q = true; setTimeout(function(){ q = false; try { place(); } catch (e) {} }, 200); }
  function go(){ sch(); new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true }); }
  if (document.readyState !== 'loading') setTimeout(go, 500); else document.addEventListener('DOMContentLoaded', function(){ setTimeout(go, 500); });
})();

/* ===== 06_v20.js ===== */
/* v20: "Kesimi Tuttur" indirim oyunu - ana sayfa karti + acilir oyun penceresi */
(function(){
  if (window.__bgV20) return; window.__bgV20 = 1;
  // Kademe kodlari (ikas'ta kupon olarak tanimli; musteri basina 1 kullanim). Hafifce gizlenmis.
  var K = ['QkdPWVVOMTAw', 'QkdPWVVOMTUw', 'QkdPWVVOMjUw']; // 100 / 150 / 250
  var AMT = [100, 150, 250];
  var LS = 'bg_kt_v1';
  var END = new Date('2026-11-05T23:59:59+03:00').getTime(); // acilisa ozel: bu tarihten sonra kart gorunmez
  function store(v){ try { if (v === undefined) return JSON.parse(localStorage.getItem(LS) || 'null'); localStorage.setItem(LS, JSON.stringify(v)); } catch (e) { return null; } }
  var css = [
    '.bg-kt{max-width:1180px;margin:40px auto;padding:0 20px;font-family:Manrope,sans-serif}',
    '.bg-kt-card{display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;padding:24px 26px;border:1px solid #3A3426;border-radius:18px;background:linear-gradient(120deg,#1B1912,#141317 60%)}',
    '.bg-kt-card small{display:block;font:800 12px/1 Manrope,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#E2C285;margin-bottom:8px}',
    '.bg-kt-card h3{margin:0;font:800 clamp(20px,3vw,28px)/1.2 Manrope,sans-serif;color:#F2EFEA}',
    '.bg-kt-card p{margin:6px 0 0;color:#8E8A83;font:500 14px/1.5 Manrope,sans-serif;max-width:52ch}',
    '.bg-kt-btn{appearance:none;border:0;border-radius:999px;padding:14px 24px;background:#E2C285;color:#111;font:800 14px/1 Manrope,sans-serif;cursor:pointer;white-space:nowrap}',
    '.bg-kt-btn.gh{background:transparent;color:#F2EFEA;border:1px solid #2A292E}',
    '.bg-kt-ov{position:fixed;inset:0;z-index:99990;background:rgba(6,6,8,.78);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;padding:16px}',
    '.bg-kt-m{width:100%;max-width:560px;max-height:100%;overflow:auto;background:#16151A;border:1px solid #2A292E;border-radius:20px;color:#F2EFEA;font-family:Manrope,sans-serif}',
    '.bg-kt-hd{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:14px 16px;border-bottom:1px solid #2A292E}',
    '.bg-kt-hd b{font-weight:800;font-size:16px}',
    '.bg-kt-x{appearance:none;border:0;background:transparent;color:#8E8A83;font-size:24px;line-height:1;cursor:pointer;padding:4px 8px}',
    '.bg-kt-rds{display:flex;gap:6px;padding:12px 16px 0;flex-wrap:wrap}',
    '.bg-kt-rd{padding:5px 9px;border-radius:9px;border:1px solid #2A292E;font:700 12px/1.2 Manrope,sans-serif;color:#8E8A83}',
    '.bg-kt-rd.on{border-color:#B8955A;color:#E2C285}.bg-kt-rd.done{color:#F2EFEA}',
    '.bg-kt-st{position:relative;aspect-ratio:4/3;margin:12px 16px 0;border-radius:14px;overflow:hidden;background:#0F0E12;cursor:pointer;touch-action:manipulation}',
    '.bg-kt-st canvas{display:block;width:100%;height:100%}',
    '.bg-kt-fl{position:absolute;left:50%;top:12px;transform:translateX(-50%);padding:8px 13px;border-radius:999px;background:rgba(14,13,16,.88);border:1px solid #2A292E;font:800 14px/1 Manrope,sans-serif;white-space:nowrap;opacity:0;transition:opacity .2s;pointer-events:none}',
    '.bg-kt-fl.on{opacity:1}',
    '.bg-kt-ft{padding:12px 16px 16px;color:#8E8A83;font:500 13px/1.5 Manrope,sans-serif}',
    '.bg-kt-res{padding:18px 16px 20px;text-align:center}',
    '.bg-kt-res .s{font:800 52px/1 Manrope,sans-serif;color:#E2C285}',
    '.bg-kt-res h4{margin:8px 0 4px;font:800 20px/1.3 Manrope,sans-serif}',
    '.bg-kt-res p{margin:0 auto;max-width:40ch;color:#8E8A83;font:500 14px/1.5 Manrope,sans-serif}',
    '.bg-kt-code{display:flex;gap:8px;justify-content:center;align-items:center;flex-wrap:wrap;margin-top:14px}',
    '.bg-kt-code output{font:800 18px/1 ui-monospace,Menlo,monospace;letter-spacing:.08em;padding:11px 14px;border:1px dashed #B8955A;border-radius:10px}',
    '.bg-kt-tiers{display:flex;gap:6px;justify-content:center;flex-wrap:wrap;margin-top:12px;font:600 12px/1.3 Manrope,sans-serif;color:#8E8A83}',
    '.bg-kt-tiers span{padding:5px 9px;border:1px solid #2A292E;border-radius:999px}',
    '.bg-kt-pill{position:fixed;left:calc(14px + env(safe-area-inset-left,0px));bottom:calc(14px + env(safe-area-inset-bottom,0px));z-index:9990;display:flex;align-items:center;gap:8px;padding:10px 12px 10px 14px;border-radius:999px;background:#E2C285;color:#111;font:800 13px/1.2 Manrope,sans-serif;box-shadow:0 8px 28px rgba(0,0,0,.45);cursor:pointer;max-width:calc(100vw - 120px)}',
    '.bg-kt-pill span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
    '.bg-kt-pill button{appearance:none;border:0;background:rgba(0,0,0,.12);color:#111;width:22px;height:22px;border-radius:50%;font:800 14px/1 Manrope,sans-serif;cursor:pointer;flex:none}',
    '.bg-kt-pill.code{background:#16151A;color:#F2EFEA;border:1px dashed #B8955A}.bg-kt-pill.code button{background:#2A292E;color:#F2EFEA}',
    '@media (max-width:520px){.bg-kt-card{padding:20px}.bg-kt-btn{width:100%;text-align:center}}'
  ].join('');
  var st0 = document.createElement('style'); st0.id = 'bg-theme-css20'; st0.textContent = css; (document.head || document.documentElement).appendChild(st0);

  /* ---------- game ---------- */
  function openGame(){
    var prev = store();
    var ov = document.createElement('div'); ov.className = 'bg-kt-ov'; ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true');
    ov.innerHTML = '<div class="bg-kt-m"><div class="bg-kt-hd"><b>🎯 Kesimi tuttur</b><button class="bg-kt-x" aria-label="Kapat">×</button></div><div class="bg-kt-body"></div></div>';
    document.body.appendChild(ov); document.documentElement.style.overflow = 'hidden';
    var body = ov.querySelector('.bg-kt-body'), raf = 0;
    function close(){ cancelAnimationFrame(raf); ov.remove(); document.documentElement.style.overflow = ''; document.removeEventListener('keydown', onKey); }
    ov.querySelector('.bg-kt-x').onclick = close;
    ov.addEventListener('pointerdown', function(e){ if (e.target === ov) close(); });
    function onKey(e){ if (e.key === 'Escape') close(); }
    document.addEventListener('keydown', onKey);
    if (prev && prev.code) { result(prev.avg, prev.tier, true); return; }

    body.innerHTML = '<div class="bg-kt-rds"><span class="bg-kt-rd on">Kamera —</span><span class="bg-kt-rd">Lens —</span><span class="bg-kt-rd">Drone —</span></div>' +
      '<div class="bg-kt-st" tabindex="0" role="button" aria-label="Kaplamayı yerleştir"><canvas></canvas><div class="bg-kt-fl"></div></div>' +
      '<div class="bg-kt-ft">Kaplama cihazın üstünde kayıyor. Tam hizaya geldiğinde dokun. 3 cihaz, her biri tek deneme.</div>';
    var stage = body.querySelector('.bg-kt-st'), cv = stage.querySelector('canvas'), ctx = cv.getContext('2d'), fl = stage.querySelector('.bg-kt-fl'), rds = body.querySelectorAll('.bg-kt-rd'), ft = body.querySelector('.bg-kt-ft');
    var W, H, DPR, pat = null;
    var R = [{n:'Kamera',sp:1.6,xy:false},{n:'Lens',sp:2.3,xy:false},{n:'Drone',sp:2.0,xy:true}];
    var s = {r:0, t:Math.random()*3, ph:'play', sc:[], lock:null, last:0};
    function size(){ var b = stage.getBoundingClientRect(); DPR = Math.min(2, window.devicePixelRatio || 1); W = b.width; H = b.height; cv.width = Math.round(W*DPR); cv.height = Math.round(H*DPR); ctx.setTransform(DPR,0,0,DPR,0,0); pat = null; }
    size(); window.addEventListener('resize', size);
    function rr(p,x,y,w,h,r){p.moveTo(x+r,y);p.arcTo(x+w,y,x+w,y+h,r);p.arcTo(x+w,y+h,x,y+h,r);p.arcTo(x,y+h,x,y,r);p.arcTo(x,y,x+w,y,r);p.closePath();}
    function shape(i,k){ var p = new Path2D();
      if (i===0){ rr(p,-1.15*k,-.55*k,2.3*k,1.25*k,.16*k); rr(p,-.32*k,-.85*k,.64*k,.4*k,.08*k); rr(p,-1.32*k,-.55*k,.42*k,1.25*k,.18*k); p.moveTo(.7*k,.08*k); p.arc(.18*k,.08*k,.52*k,0,Math.PI*2); }
      else if (i===1){ rr(p,-1.25*k,-.48*k,1.55*k,.96*k,.08*k); rr(p,.3*k,-.6*k,.95*k,1.2*k,.1*k); rr(p,-1.42*k,-.36*k,.2*k,.72*k,.05*k); }
      else { rr(p,-.42*k,-.62*k,.84*k,1.24*k,.3*k); [[-1,-1],[1,-1],[-1,1],[1,1]].forEach(function(d){ p.moveTo(d[0]*.28*k,d[1]*.38*k); p.lineTo(d[0]*1.05*k,d[1]*.85*k); p.moveTo(d[0]*1.05*k+.26*k,d[1]*.85*k); p.arc(d[0]*1.05*k,d[1]*.85*k,.26*k,0,Math.PI*2); }); }
      return p; }
    function pattern(){ if (pat) return pat; var c = document.createElement('canvas'), k = 14*DPR; c.width = Math.round(k*3); c.height = Math.round(k*Math.sqrt(3)*2); var g = c.getContext('2d'); g.fillStyle = '#1E1A12'; g.fillRect(0,0,c.width,c.height); g.strokeStyle = '#E2C285'; g.lineWidth = 1.2*DPR; var hh = k*Math.sqrt(3);
      function hex(x,y){ g.beginPath(); for (var a=0;a<6;a++){ var t=Math.PI/3*a; g.lineTo(x+k*.92*Math.cos(t), y+k*.92*Math.sin(t)); } g.closePath(); g.stroke(); }
      for (var y=-1;y<3;y++) for (var x=-1;x<3;x++){ hex(x*k*3,y*hh); hex(x*k*3+k*1.5,y*hh+hh/2); }
      pat = ctx.createPattern(c,'repeat'); return pat; }
    function pos(i,t){ var a = R[i], w = t*a.sp; return {x: Math.sin(w)*W*.3, y: a.xy ? Math.sin(w*1.7+1)*H*.16 : 0}; }
    function draw(ts){
      var dt = s.last ? Math.min(.05,(ts-s.last)/1000) : 0; s.last = ts; if (s.ph==='play') s.t += dt;
      ctx.clearRect(0,0,W,H); var cx = W/2, cy = H/2+6, k = Math.min(W,H)*.2;
      ctx.strokeStyle = '#2A292E'; ctx.lineWidth = 1; ctx.globalAlpha = .5;
      for (var gx=cx%28; gx<W; gx+=28){ ctx.beginPath(); ctx.moveTo(gx,0); ctx.lineTo(gx,H); ctx.stroke(); }
      for (var gy=cy%28; gy<H; gy+=28){ ctx.beginPath(); ctx.moveTo(0,gy); ctx.lineTo(W,gy); ctx.stroke(); }
      ctx.globalAlpha = 1;
      if (s.r < 3){
        ctx.save(); ctx.translate(cx,cy); var p0 = shape(s.r,k); ctx.fillStyle = 'rgba(255,255,255,.035)'; ctx.fill(p0,'evenodd'); ctx.strokeStyle = '#8E8A83'; ctx.lineWidth = 1.6; ctx.stroke(p0); ctx.restore();
        var p = s.ph==='play' ? pos(s.r,s.t) : s.lock;
        if (p){ ctx.save(); ctx.globalAlpha = s.ph==='play' ? .9 : 1; ctx.translate(cx+p.x,cy+p.y); var p1 = shape(s.r,k); ctx.fillStyle = pattern(); ctx.fill(p1,'evenodd'); if (s.r===2){ ctx.strokeStyle = pattern(); ctx.lineWidth = k*.14; ctx.lineCap = 'round'; ctx.stroke(p1); } ctx.strokeStyle = '#E2C285'; ctx.lineWidth = 1.5; ctx.stroke(p1); ctx.restore(); }
      }
      raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);
    function say(t,c){ fl.textContent = t; fl.style.color = c; fl.classList.add('on'); clearTimeout(say.t); say.t = setTimeout(function(){ fl.classList.remove('on'); }, 1000); }
    function hit(){
      if (s.ph!=='play' || s.r>2) return;
      var p = pos(s.r,s.t), k = Math.min(W,H)*.2, acc = Math.max(0, Math.round(100 - Math.hypot(p.x,p.y)/(k*1.2)*100));
      s.lock = p; s.ph = 'locked'; s.sc.push(acc);
      rds[s.r].textContent = R[s.r].n + ' %' + acc; rds[s.r].className = 'bg-kt-rd done';
      say(acc>=95 ? 'Kusursuz kesim! %'+acc : acc>=80 ? 'Çok yakın! %'+acc : acc>=50 ? 'Fena değil · %'+acc : 'Kaydı · %'+acc, acc>=80 ? '#7FC79A' : acc<50 ? '#E07A5F' : '#F2EFEA');
      setTimeout(function(){
        s.r++;
        if (s.r>2){ var avg = Math.round(s.sc.reduce(function(a,b){return a+b;},0)/3), tier = avg>=90 ? 2 : avg>=75 ? 1 : 0; store({avg:avg, tier:tier, code:1, at:Date.now()}); cancelAnimationFrame(raf); result(avg, tier, false); return; }
        s.ph = 'play'; s.t = Math.random()*3; s.lock = null; rds[s.r].className = 'bg-kt-rd on';
        if (R[s.r].xy) ft.textContent = 'Son tur: kaplama artık iki yönde kayıyor.';
      }, 1050);
    }
    stage.addEventListener('pointerdown', function(e){ e.preventDefault(); hit(); });
    stage.addEventListener('keydown', function(e){ if (e.key===' ' || e.key==='Enter'){ e.preventDefault(); hit(); } });
    stage.focus();

    function result(avg, tier, again){
      var code = atob(K[tier]);
      body.innerHTML = '<div class="bg-kt-res"><div class="s">%' + avg + '</div><h4>' + ['Isınma turu','Usta işi','Kesim ustası'][tier] + ' · ' + AMT[tier] + ' ₺ indirim</h4>' +
        '<p>' + (again ? 'Oyunu daha önce oynadın, kazandığın kod burada.' : 'Üç cihazda ortalama isabetin %' + avg + '.') + ' Kodu ödeme sayfasındaki indirim kodu alanına yaz. Her müşteri bir kez kullanabilir.</p>' +
        '<div class="bg-kt-code"><output>' + code + '</output><button class="bg-kt-btn" type="button">Kodu kopyala</button></div>' +
        '<div class="bg-kt-tiers"><span>%90+ → 250 ₺</span><span>%75–89 → 150 ₺</span><span>%75 altı → 100 ₺</span></div>' +
        '<div class="bg-kt-code"><a class="bg-kt-btn gh" href="/betaguard-kaplama" style="text-decoration:none">Desenleri gör →</a></div></div>';
      var b = body.querySelector('.bg-kt-res button');
      b.onclick = function(){ var done = function(){ b.textContent = 'Kopyalandı ✓'; }; try { navigator.clipboard.writeText(code).then(done, done); } catch (e) { done(); } };
    }
  }
  window.bgOpenGame = openGame;


  /* ---------- floating pill: invite before playing, code reminder after ---------- */
  function pill(){
    var el = document.querySelector('.bg-kt-pill');
    var off = Date.now() > END || /^\/(checkout|account)/.test(location.pathname) || (function(){ try { return sessionStorage.getItem('bg_kt_pill_x'); } catch (x) { return null; } })();
    if (off) { if (el) el.remove(); return; }
    var prev = store(), txt = prev && prev.code ? 'Kodun: ' + atob(K[prev.tier]) + ' · ödemede kullan' : '🎯 Oyna, 250 ₺\'ye kadar indirim kazan';
    if (!el) {
      el = document.createElement('div'); el.className = 'bg-kt-pill'; el.setAttribute('role', 'button'); el.tabIndex = 0;
      el.innerHTML = '<span></span><button type="button" aria-label="Kapat">×</button>';
      el.addEventListener('click', function(e){
        if (e.target.tagName === 'BUTTON') { try { sessionStorage.setItem('bg_kt_pill_x', '1'); } catch (x) {} el.remove(); return; }
        var p = store();
        if (p && p.code) { var c = atob(K[p.tier]); try { navigator.clipboard.writeText(c); } catch (x) {} el.querySelector('span').textContent = 'Kopyalandı ✓ ' + c; return; }
        openGame();
      });
      document.body.appendChild(el);
    }
    el.classList.toggle('code', !!(prev && prev.code));
    var sp = el.querySelector('span'); if (sp.textContent.indexOf('Kopyalandı') < 0 && sp.textContent !== txt) sp.textContent = txt;
  }

  /* ---------- home card ---------- */
  function place(){
    if (location.pathname !== '/') return;
    if (Date.now() > END) { var old = document.querySelector('[data-bg-kt]'); if (old) old.remove(); return; }
    if (document.querySelector('[data-bg-kt]')) return;
    var after = document.querySelector('[data-bg-why]') || document.querySelector('[data-bg-best]');
    if (!after || !after.parentNode) return;
    var sec = document.createElement('section'); sec.className = 'bg-kt'; sec.setAttribute('data-bg-kt', '1');
    var prev = store();
    sec.innerHTML = '<div class="bg-kt-card"><div><small>Açılışa özel · 5 Kasım\'a kadar</small><h3>🎯 Kesimi tuttur, indirim kazan</h3><p>Kaplamayı cihaza tam oturt; isabetine göre 100–250 ₺ indirim kodu senin. 20 saniye sürer.</p></div><button class="bg-kt-btn" type="button">' + (prev && prev.code ? 'Kodumu göster' : 'Hemen oyna') + '</button></div>';
    sec.querySelector('button').onclick = openGame;
    after.parentNode.insertBefore(sec, after.nextSibling);
  }
  var q = false;
  function sch(){ if (q) return; q = true; setTimeout(function(){ q = false; try { place(); } catch (e) {} try { pill(); } catch (e) {} }, 250); }
  function go(){ sch(); new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true }); }
  if (document.readyState !== 'loading') setTimeout(go, 600); else document.addEventListener('DOMContentLoaded', function(){ setTimeout(go, 600); });
})();

/* ===== 07_v21.js ===== */
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
    ['Fiyat neye göre değişiyor?', 'Fiyat cihazının modeline göre belirlenir; kaplama sayfasında cihazını seçtiğinde net fiyatı görürsün. 2 kaplamaya 250 ₺, 3 ve üzeri kaplamaya 500 ₺ indirim sepette uygulanır.'],
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
      var why = disabled(x), msg = why === 'seri' ? 'Sepete eklemek için önce yukarıdan serini seç.' : 'Şimdi cihazını seç; fiyatın ve sepete ekle açılsın.';
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
          '<div><b><em>04</em>Sabitle</b><span>Kenarları hafif ısıyla yüzeye oturt.</span></div></div></div>' +
        '<div class="bg-px-c"><h4><i>◆</i>Sık sorulanlar</h4>' +
          det(['Kaplama cihazıma zarar verir mi?', 'Hayır. Günlük çizik ve sürtünmelere karşı korur; söküldüğünde cihazda iz bırakmaz.']) +
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
        c.querySelector('span').textContent = 'Her parça modeline göre kesilir; düğmeler, portlar ve ekran açık kalır.';
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

/* ===== 08_v22.js ===== */
/* v22: urun galerisi altinda "gorseller temsilidir" bilgilendirmesi */
(function(){
  if (window.__bgV22) return; window.__bgV22 = 1;
  var css = [
    '.bg-rep{display:flex;gap:10px;align-items:flex-start;margin:10px 0 0;padding:11px 13px;border:1px solid #2A292E;border-radius:12px;background:#141317;font:500 12.5px/1.55 Manrope,sans-serif;color:#A3A09A}',
    '.bg-rep svg{flex:none;width:16px;height:16px;margin-top:1px;color:#E2C285}',
    '.bg-rep b{color:#F2EFEA;font-weight:700}',
    '.bg-rep p{margin:0}',
    '.bg-rep .s{display:none}',
    '@media (max-width:767px){.bg-rep{padding:9px 11px;font-size:12px;line-height:1.45;gap:8px}.bg-rep svg{width:14px;height:14px}.bg-rep .l{display:none}.bg-rep .s{display:inline}}'
  ].join('');
  var st = document.createElement('style'); st.id = 'bg-theme-css22'; st.textContent = css; (document.head || document.documentElement).appendChild(st);
  var HTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>' +
    '<p><b>Görseller temsilidir.</b> <span class="s">Kaplaman seçtiğin modele özel kesilir; renkler ekrana göre biraz farklı görünebilir.</span><span class="l">Deseni göstermek için fotoğraflarda örnek cihazlar kullanıyoruz; senin kaplaman seçtiğin modele özel kesilir. Renkler ekran ve parlaklık ayarına göre biraz farklı görünebilir.</span></p>';
  function run(){
    var note = document.querySelector('.bg-gal .bg-gal-note');
    if (!note) return;
    var nx = note.nextElementSibling;
    if (nx && nx.classList.contains('bg-rep')) return;
    var d = document.createElement('div'); d.className = 'bg-rep'; d.setAttribute('role', 'note'); d.innerHTML = HTML;
    note.parentNode.insertBefore(d, note.nextSibling);
    try { window.dispatchEvent(new Event('resize')); } catch (e) {}
  }
  var q = false;
  function sch(){ if (q) return; q = true; setTimeout(function(){ q = false; try { run(); } catch (e) {} }, 80); }
  function go(){ sch(); new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true }); }
  if (document.readyState !== 'loading') setTimeout(go, 500); else document.addEventListener('DOMContentLoaded', function(){ setTimeout(go, 500); });
})();

/* ===== 09_v23.js ===== */
/* v23: footer sozlesme linkleri (acilir pencere) + e-posta adresi */
(function(){
  if (window.__bgV23) return; window.__bgV23 = 1;
  var DOCS = {"gizlilik": "<h2>GİZLİLİK POLİTİKASI VE KVKK AYDINLATMA METNİ</h2><p>Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu (\"KVKK\") kapsamında betaguard.com.tr ziyaretçilerini ve müşterilerini bilgilendirmek amacıyla hazırlanmıştır.</p><h3>1. Veri Sorumlusu</h3><p>Bedirhan Akyüz (Betaguard) – Altıntepe Mahallesi, Babil Sitesi No:144, Menderes / İzmir – Telefon / WhatsApp: 0535 321 19 11 – E-posta: info@betaguard.com.tr</p><h3>2. İşlenen Kişisel Veriler</h3><ul><li><strong>Kimlik ve iletişim:</strong> ad, soyad, e-posta, telefon, teslimat ve fatura adresi</li><li><strong>Sipariş bilgileri:</strong> satın alınan ürünler, cihaz modeli, sipariş ve ödeme kayıtları (kart bilgileri tarafımızca saklanmaz, ödeme kuruluşu tarafından işlenir)</li><li><strong>İletişim kayıtları:</strong> WhatsApp, Instagram ve e-posta yazışmaları</li><li><strong>Dijital iz:</strong> IP adresi, tarayıcı ve cihaz bilgileri, çerez verileri</li></ul><h3>3. İşleme Amaçları ve Hukuki Sebepler</h3><ul><li>Siparişin alınması, üretimi, faturalandırılması ve teslimi – <em>sözleşmenin kurulması ve ifası (KVKK md. 5/2-c)</em></li><li>Yasal saklama ve vergi yükümlülükleri – <em>hukuki yükümlülük (md. 5/2-ç)</em></li><li>Müşteri desteği, iade ve şikayet süreçleri – <em>meşru menfaat (md. 5/2-f)</em></li><li>Kampanya ve tanıtım iletileri, reklam ve analiz çerezleri – <em>yalnızca açık rızanız ile (md. 5/1)</em></li></ul><h3>4. Aktarım</h3><p>Kişisel verileriniz yalnızca yukarıdaki amaçlarla sınırlı olarak; e-ticaret altyapı sağlayıcımız (ikas), ödeme kuruluşu, kargo firması (Aras Kargo), mali müşavir ve yetkili kamu kurumları ile paylaşılır. Reklam ve analiz hizmetleri (ör. Meta, Google) yurt dışında bulunan sunucular kullanabilir; bu hizmetler için veri aktarımı yalnızca açık rızanız veya KVKK md. 9'daki şartlar çerçevesinde yapılır.</p><h3>5. Çerezler</h3><p>Sitemizde, sitenin çalışması için zorunlu çerezler ile ziyaretçi istatistikleri ve reklam ölçümü için analiz/pazarlama çerezleri kullanılır. Zorunlu olmayan çerezler onayınız alınarak kullanılır. Tarayıcı ayarlarınızdan çerezleri dilediğiniz zaman silebilir veya engelleyebilirsiniz.</p><h3>6. Saklama Süresi</h3><p>Verileriniz, işleme amacının gerektirdiği süre ve ilgili mevzuatta öngörülen yasal saklama süreleri (ör. vergi mevzuatı gereği 10 yıl) boyunca saklanır, süre sonunda silinir, yok edilir veya anonim hale getirilir.</p><h3>7. Haklarınız</h3><p>KVKK md. 11 uyarınca; verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, amacına uygun kullanılıp kullanılmadığını öğrenme, aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini, silinmesini veya yok edilmesini isteme, otomatik sistemlerle analiz sonucu aleyhinize bir sonuca itiraz etme ve zarara uğramanız halinde tazminat talep etme haklarına sahipsiniz.</p><p>Başvurularınızı yukarıdaki adrese yazılı olarak, info@betaguard.com.tr adresine e-posta ile veya WhatsApp (0535 321 19 11) üzerinden iletebilirsiniz. Başvurular en geç 30 gün içinde ücretsiz olarak sonuçlandırılır.</p>", "mesafeli": "<h2>MESAFELİ SATIŞ SÖZLEŞMESİ</h2><h3>1. Taraflar</h3><p><strong>SATICI</strong><br>Ünvan: Bedirhan Akyüz (Betaguard)<br>Adres: Altıntepe Mahallesi, Babil Sitesi No:144, Menderes / İzmir<br>Vergi Dairesi / No: Avanos V.D. / 23897325346<br>Telefon / WhatsApp: 0535 321 19 11<br>E-posta: info@betaguard.com.tr<br>Web: betaguard.com.tr</p><p><strong>ALICI</strong><br>Ad Soyad: Sipariş sırasında belirtilen ad soyad<br>E-posta: Sipariş sırasında belirtilen e-posta<br>Telefon: Sipariş sırasında belirtilen telefon<br>Teslimat Adresi: Sipariş sırasında belirtilen teslimat adresi<br>Fatura Adresi: Sipariş sırasında belirtilen fatura adresi</p><h3>2. Konu</h3><p>İşbu sözleşmenin konusu, ALICI'nın betaguard.com.tr internet sitesi üzerinden elektronik ortamda siparişini verdiği aşağıda nitelikleri ve satış fiyatı belirtilen ürünün satışı ve teslimi ile ilgili olarak 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği hükümleri gereğince tarafların hak ve yükümlülüklerinin belirlenmesidir.</p><h3>3. Sözleşme Konusu Ürün ve Ödeme Bilgileri</h3><p>Sipariş No: Sipariş onayında belirtilir<br>Sipariş Tarihi: Sipariş tarihi<br>Ürünler: Sepetteki ürünler<br>Kargo Ücreti: Ödeme sayfasında belirtilir<br>Toplam Tutar (KDV dahil): Ödeme sayfasında belirtilir<br>Ödeme Şekli: Ödeme sayfasında seçilen yöntem</p><p>Ürünler, ALICI'nın sipariş sırasında seçtiği cihaz modeli, seri ve renk bilgilerine göre <strong>kişiye özel olarak kesilip üretilen</strong> koruyucu kaplama (skin) ürünleridir. Sitede yer alan ürün görselleri temsilidir; renkler ekran ve ışık koşullarına göre küçük farklılıklar gösterebilir.</p><h3>4. Genel Hükümler</h3><p>4.1. ALICI, sözleşme konusu ürünün temel nitelikleri, satış fiyatı, ödeme şekli, teslimat koşulları ve cayma hakkına ilişkin ön bilgileri okuyup bilgi sahibi olduğunu ve elektronik ortamda gerekli teyidi verdiğini kabul eder.</p><p>4.2. Sipariş sırasında cihaz modelinin doğru seçilmesi ALICI'nın sorumluluğundadır. SATICI, ALICI'nın seçtiği modele göre üretim yapar.</p><p>4.3. Ürün, siparişin onaylanmasından itibaren genellikle 1–2 iş günü içinde kargoya verilir; her durumda yasal 30 günlük süreyi aşmaz. Teslimat, ALICI'nın belirttiği adrese kargo firması aracılığıyla yapılır.</p><p>4.4. 2.000 TL ve üzeri siparişlerde kargo ücretsizdir; 2.000 TL altındaki siparişlerde kargo ücreti ödeme sayfasında gösterilir ve ALICI tarafından ödenir.</p><p>4.5. SATICI, mücbir sebepler veya olağanüstü durumlar nedeniyle siparişi teslim edemeyecek olursa durumu ALICI'ya bildirir ve ödenen tutarı en geç 14 gün içinde iade eder.</p><p>4.6. Ödemenin kredi kartı ile yapıldığı hallerde, kartın yetkisiz kullanımı nedeniyle bedelin ilgili banka veya ödeme kuruluşu tarafından SATICI'ya ödenmemesi halinde SATICI teslim yükümlülüğünden kurtulur.</p><h3>5. Cayma Hakkı</h3><p>Mesafeli Sözleşmeler Yönetmeliği'nin 15. maddesinin (ç) bendi uyarınca, <strong>tüketicinin istekleri veya kişisel ihtiyaçları doğrultusunda hazırlanan mallara ilişkin sözleşmelerde cayma hakkı kullanılamaz.</strong> Betaguard ürünleri ALICI'nın seçtiği cihaz modeline göre kişiye özel kesildiğinden, bu ürünlerde cayma hakkı bulunmamaktadır. ALICI bu durumu sipariş öncesinde bilerek kabul eder.</p><h3>6. Ayıplı veya Hatalı Ürün</h3><p>6.1. Ürünün hatalı kesilmesi, hasarlı ulaşması, yanlış seri/renk gönderilmesi gibi SATICI'dan kaynaklanan durumlarda ALICI, ürünü teslim aldıktan sonra fotoğraf ile birlikte WhatsApp (0535 321 19 11) veya info@betaguard.com.tr üzerinden SATICI'ya bildirimde bulunur.</p><p>6.2. SATICI, kendisinden kaynaklanan hatalarda <strong>aynı ürünü ücretsiz olarak yeniden üretip gönderir</strong>; bu süreçteki kargo masrafları SATICI'ya aittir.</p><p>6.3. Bu madde, ALICI'nın 6502 sayılı Kanun'un 11. maddesinde sayılan ayıplı mala ilişkin kanuni seçimlik haklarını (sözleşmeden dönme, bedelden indirim, ücretsiz onarım, ayıpsız misli ile değişim) ortadan kaldırmaz.</p><p>6.4. ALICI'nın hatalı cihaz modeli seçmesi, ürünün uygulama talimatlarına aykırı uygulanması veya kullanım sonucu oluşan aşınmalar ayıp kapsamında değildir.</p><h3>7. Uyuşmazlıkların Çözümü</h3><p>İşbu sözleşmeden doğan uyuşmazlıklarda, Ticaret Bakanlığı tarafından her yıl ilan edilen parasal sınırlar dahilinde ALICI'nın veya SATICI'nın yerleşim yerindeki Tüketici Hakem Heyetleri, bu sınırları aşan durumlarda Tüketici Mahkemeleri yetkilidir.</p><h3>8. Yürürlük</h3><p>ALICI, siparişi onaylamakla işbu sözleşmenin tüm koşullarını kabul etmiş sayılır. Sözleşme, sipariş tarihinde elektronik ortamda kurulmuş olup bir örneği ALICI'nın e-posta adresine gönderilir.</p><p><em>Bu metnin siparişinize özel, bilgileriniz doldurulmuş hali ödeme adımında onayınıza sunulur ve sipariş e-postanızla gönderilir.</em></p>", "iade": "<h2>İADE VE DEĞİŞİM POLİTİKASI</h2><h3>Kişiye özel ürün – cayma hakkı yoktur</h3><p>Betaguard kaplamaları, sipariş sırasında seçtiğiniz cihaz modeline göre <strong>kişiye özel olarak kesilir.</strong> Mesafeli Sözleşmeler Yönetmeliği md. 15/1-(ç) uyarınca kişisel istek ve ihtiyaçlara göre hazırlanan ürünlerde cayma hakkı bulunmadığından, \"fikrimi değiştirdim\" kaynaklı iade kabul edilmemektedir. Lütfen sipariş vermeden önce cihaz modelinizi kontrol edin; emin değilseniz WhatsApp'tan bize sorun.</p><h3>Bizden kaynaklanan hatalar</h3><p>Aşağıdaki durumlarda <strong>aynı ürünü ücretsiz olarak yeniden üretip gönderiyoruz:</strong></p><ul><li>Kesimin seçtiğiniz modele uymaması</li><li>Siparişinizden farklı seri, renk veya model gönderilmesi</li><li>Ürünün kargoda hasar görmüş olarak ulaşması</li></ul><p>Bunun için ürünü teslim aldıktan sonra sipariş numaranız ve ürünün fotoğraflarıyla birlikte WhatsApp (0535 321 19 11) veya info@betaguard.com.tr üzerinden bize ulaşmanız yeterli. Gerekirse ürünün geri gönderimi Aras Kargo ile ücretsiz yapılır. 6502 sayılı Kanun'dan doğan ayıplı mala ilişkin yasal haklarınız saklıdır.</p><h3>Kapsam dışı durumlar</h3><ul><li>Sipariş sırasında yanlış cihaz modelinin seçilmesi</li><li>Uygulama talimatlarına aykırı uygulama nedeniyle oluşan kabarma, yırtılma veya hizalama hataları</li><li>Kullanıma bağlı aşınma ve çizikler</li></ul><h3>İletişim</h3><p>Bedirhan Akyüz (Betaguard) – Altıntepe Mahallesi, Babil Sitesi No:144, Menderes / İzmir – 0535 321 19 11 – info@betaguard.com.tr</p>", "kargo": "<h2>KARGO VE TESLİMAT POLİTİKASI</h2><ul><li><strong>Hazırlık süresi:</strong> Kaplamalar cihazınıza özel kesildiği için siparişiniz onaylandıktan sonra genellikle 1–2 iş günü içinde kargoya verilir.</li><li><strong>Kargo firması:</strong> Tüm gönderiler Aras Kargo ile yapılır. Kargoya verildiğinde takip numaranız e-posta ile gönderilir.</li><li><strong>Kargo ücreti:</strong> 2.000 TL ve üzeri siparişlerde kargo ücretsizdir. 2.000 TL altındaki siparişlerde kargo ücreti 200 TL'dir ve ödeme sayfasında gösterilir.</li><li><strong>Teslimat bölgesi:</strong> Türkiye'nin tüm illerine gönderim yapılmaktadır.</li><li><strong>Yasal süre:</strong> Siparişiniz her durumda en geç 30 gün içinde teslim edilir.</li><li><strong>Hasarlı paket:</strong> Paket hasarlı ulaşırsa kargo görevlisine tutanak tutturmanızı ve bize fotoğrafla WhatsApp'tan (0535 321 19 11) bildirmenizi rica ederiz; ürünü ücretsiz olarak yeniden gönderiyoruz.</li></ul>", "kunye": "<h2>KÜNYE</h2><p><strong>Marka:</strong> Betaguard<br><strong>Satıcı:</strong> Bedirhan Akyüz (şahıs işletmesi)<br><strong>Adres:</strong> Altıntepe Mahallesi, Babil Sitesi No:144, Menderes / İzmir<br><strong>Vergi Dairesi / No:</strong> Avanos V.D. / 23897325346<br><strong>Telefon / WhatsApp:</strong> 0535 321 19 11<br><strong>E-posta:</strong> info@betaguard.com.tr<br><strong>Instagram:</strong> @betaguard.tr<br><strong>Web:</strong> betaguard.com.tr</p>"};
  var MAIL = 'info@betaguard.com.tr';
  var MAP = [[/Gizlilik/i,'gizlilik'],[/Mesafeli/i,'mesafeli'],[/İade Koşul/i,'iade'],[/Kargo ve Teslimat/i,'kargo'],[/Künye/i,'kunye']];
  var css = [
    '.bg-pol-ov{position:fixed;inset:0;z-index:99995;background:rgba(6,6,8,.8);backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;padding:16px}',
    '.bg-pol-m{width:100%;max-width:760px;max-height:100%;display:flex;flex-direction:column;background:#16151A;border:1px solid #2A292E;border-radius:18px;color:#D9D5CE;font-family:Manrope,sans-serif}',
    '.bg-pol-hd{display:flex;justify-content:flex-end;padding:8px 10px 0}',
    '.bg-pol-x{appearance:none;border:0;background:transparent;color:#8E8A83;font-size:26px;line-height:1;cursor:pointer;padding:4px 10px}',
    '.bg-pol-b{overflow:auto;padding:0 26px 26px;font:500 14px/1.65 Manrope,sans-serif}',
    '.bg-pol-b h2{display:block!important;width:100%;margin:0 0 14px;font:800 20px/1.3 Manrope,sans-serif;color:#F2EFEA}',
    '.bg-pol-b h3{display:block!important;width:100%;margin:20px 0 6px;font:800 15px/1.4 Manrope,sans-serif;color:#E2C285}',
    '.bg-pol-b p{display:block!important;margin:0 0 10px}.bg-pol-b ul{display:block!important}.bg-pol-b li{display:list-item!important}.bg-pol-b br{display:inline!important}.bg-pol-b ul{margin:0 0 10px;padding-left:20px}.bg-pol-b li{margin:0 0 6px}',
    '.bg-pol-b strong{color:#F2EFEA}',
    '.bg-mail{color:inherit;text-decoration:none}.bg-mail:hover{color:#E2C285}'
  ].join('');
  var st = document.createElement('style'); st.id = 'bg-theme-css23'; st.textContent = css; (document.head || document.documentElement).appendChild(st);
  function open(key){
    if (!DOCS[key]) return;
    var ov = document.createElement('div'); ov.className = 'bg-pol-ov'; ov.setAttribute('role','dialog'); ov.setAttribute('aria-modal','true');
    ov.innerHTML = '<div class="bg-pol-m"><div class="bg-pol-hd"><button class="bg-pol-x" aria-label="Kapat">×</button></div><div class="bg-pol-b">' + DOCS[key] + '</div></div>';
    document.body.appendChild(ov); document.documentElement.style.overflow = 'hidden';
    function close(){ ov.remove(); document.documentElement.style.overflow = ''; document.removeEventListener('keydown', key2); }
    function key2(e){ if (e.key === 'Escape') close(); }
    ov.querySelector('.bg-pol-x').onclick = close;
    ov.addEventListener('pointerdown', function(e){ if (e.target === ov) close(); });
    document.addEventListener('keydown', key2);
  }
  window.bgOpenPolicy = open;
  function which(a){ var t = (a.textContent || '').trim(); if (t.length > 40) return null; for (var i = 0; i < MAP.length; i++) if (MAP[i][0].test(t)) return MAP[i][1]; return null; }
  document.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('a'); if (!a) return;
    var h = a.getAttribute('href') || ''; if (h && h !== '#' && h.indexOf('javascript') !== 0) return;
    var k = which(a); if (!k) return;
    e.preventDefault(); e.stopPropagation(); open(k);
  }, true);
  function deco(){
    [].forEach.call(document.querySelectorAll('a'), function(a){
      var h = a.getAttribute('href'); if (h && h !== '#') return; var k = which(a); if (!k) return;
      if (!h) a.setAttribute('href', '#'); a.setAttribute('role','button');
      if (k === 'iade' && !a.getAttribute('data-bg-pol-more')) {
        a.setAttribute('data-bg-pol-more','1');
        var mk = function(txt){ var n = a.cloneNode(false); n.removeAttribute('data-bg-pol-more'); n.textContent = txt; return n; };
        var par = a.parentNode; if (!par) return;
        var holder = a; if (par.children.length === 1 && par.parentNode) { holder = par; }
        [['Kargo ve Teslimat'],['Künye']].reverse().forEach(function(x){
          if (holder === a) { a.parentNode.insertBefore(mk(x[0]), a.nextSibling); }
          else { var c = holder.cloneNode(false); c.appendChild(mk(x[0])); holder.parentNode.insertBefore(c, holder.nextSibling); }
        });
      }
    });
    [].forEach.call(document.querySelectorAll('a[href*="wa.me"]'), function(a){
      if (!/^İletişim · 0535/.test((a.textContent||'').trim()) || a.getAttribute('data-bg-mail')) return;
      a.setAttribute('data-bg-mail','1');
      var m = document.createElement('a'); m.className = 'bg-mail ' + (a.className || ''); m.href = 'mailto:' + MAIL; m.textContent = MAIL; m.setAttribute('data-bg-mail','1');
      var cs = a.getAttribute('style'); if (cs) m.setAttribute('style', cs);
      if (a.parentNode.children.length === 1 && a.parentNode.parentNode) { var w = a.parentNode.cloneNode(false); w.appendChild(m); a.parentNode.parentNode.insertBefore(w, a.parentNode.nextSibling); }
      else a.parentNode.insertBefore(m, a.nextSibling);
    });
    if (/^\/pages\/iletisim/.test(location.pathname) && !document.querySelector('.bg-contact-mail')) {
      var p = [].slice.call(document.querySelectorAll('.rich-text,p')).find(function(x){ return /İletişim formunu kullanarak/.test(x.textContent) && x.textContent.length < 120; });
      if (p) { var d = document.createElement('p'); d.className = 'bg-contact-mail'; d.style.cssText = 'margin:8px 0 0;font:500 14px/1.6 Manrope,sans-serif;color:#A3A09A'; d.innerHTML = 'E-posta: <a class="bg-mail" style="color:#E2C285" href="mailto:' + MAIL + '">' + MAIL + '</a> · WhatsApp: <a class="bg-mail" style="color:#E2C285" href="https://wa.me/905353211911">0535 321 19 11</a>'; p.parentNode.insertBefore(d, p.nextSibling); }
    }
  }
  var q = false;
  function sch(){ if (q) return; q = true; setTimeout(function(){ q = false; try { deco(); } catch (e) {} }, 200); }
  function go(){ sch(); new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true }); }
  if (document.readyState !== 'loading') setTimeout(go, 500); else document.addEventListener('DOMContentLoaded', function(){ setTimeout(go, 500); });
})();

/* ===== 10_v24.js ===== */
/* v24: Desen seçici + renge göre keşfet */
(function(){
  if (window.__bgV24) return; window.__bgV24 = 1;
  var IMG = '/images/3343706a-8edb-4c74-a651-8671f39feb90/';
  var DESC = {
    'Line': 'Kesişen keskin çizgiler. Dinamik ve modern bir görünüm.',
    'Tactical': 'Kamuflaj dokusu. Sahada sert, arazide iddialı.',
    'Carbon': 'Karbon fiber dokusu. Sade, teknik ve zamansız.',
    'Royal': 'Barok motifler. Klasik ve şık bir duruş.',
    'Mono': 'Tek düz renk. 9 tonla en sade seçenek.',
    'Topografik': 'Harita eş yükselti çizgileri. Gezginler için.',
    'Nexus': 'Devre kartı deseni. Teknolojiyi üstünde taşı.',
    'Hexagonal': 'Petek geometrisi. Güçlü ve dikkat çekici.',
    'Lego': 'Renkli tuğlalar. Eğlenceli ve tek.'
  };
  var FAM = [
    ['siyah','Siyah','#1b1b1d'],
    ['beyaz','Beyaz & Gri','#e6e3dc'],
    ['mavi','Mavi','#2f6fd6'],
    ['yesil','Yeşil','#3f8a4a'],
    ['kirmizi','Kırmızı & Pembe','#c8323c'],
    ['sicak','Sıcak & Renkli','linear-gradient(135deg,#e7b416,#e06a1b 55%,#8a5a3c)']
  ];
  function fam(name){
    var w = name.split(' ').pop().toLowerCase();
    if (/black|carbon/.test(w)) return 'siyah';
    if (/white|silver|grey|gray/.test(w)) return 'beyaz';
    if (/navy|blue|cyan/.test(w)) return 'mavi';
    if (/green/.test(w)) return 'yesil';
    if (/red|pink/.test(w)) return 'kirmizi';
    return 'sicak';
  }
  function iid(s){ var m = /\/images\/[^/]+\/([^/]+)\//.exec(s || ''); return m ? m[1] : ''; }
  function u(id, sz){ return IMG + id + '/image_' + sz + '.webp'; }
  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }

  function collect(){
    var ds = document.querySelector('[data-bg-desen]'), wl = document.querySelector('[data-bg-wall]');
    if (!ds || !wl || !ds.querySelector('.bg-ds-card') || !wl.querySelector('.bg-wall-t')) return null;
    var wall = {};
    [].forEach.call(wl.querySelectorAll('.bg-wall-t'), function(a){
      var n = (a.querySelector('span') || a).textContent.trim();
      var slug = (a.getAttribute('href') || '').split('desen=')[1] || '';
      var img = a.querySelector('img');
      if (!wall[n] && img) wall[n] = { slug: slug, dev: iid(img.getAttribute('src')) };
    });
    var series = [];
    [].forEach.call(ds.querySelectorAll('.bg-ds-card'), function(c){
      var n = c.querySelector('b').textContent.trim();
      var card = iid(c.querySelector('img').getAttribute('src'));
      var cols = [].map.call(c.querySelectorAll('.bg-ds-dots i'), function(i){ return { name: i.title, sw: iid(i.style.backgroundImage) }; });
      if (!cols.length) cols = [{ name: n, sw: card }];
      var def = (c.getAttribute('href') || '').split('desen=')[1] || '';
      cols = cols.filter(function(x){ return wall[x.name]; }).map(function(x){
        return { name: x.name, short: x.name === n ? n : x.name.replace(n + ' ', ''), sw: x.sw, dev: wall[x.name].dev, slug: wall[x.name].slug, series: n, fam: fam(x.name) };
      });
      if (!cols.length) return;
      var di = 0; cols.forEach(function(x, i){ if (x.slug === def) di = i; });
      series.push({ name: n, card: card, cols: cols, def: di });
    });
    return series.length ? series : null;
  }

  var css = [
    '[data-v24] *{box-sizing:border-box}[data-v24]{min-width:0;max-width:100%}',
    '[data-bg-wall][data-v24]{display:block;max-width:1240px;margin:0 auto;padding:56px 24px 24px;overflow:visible}',
    '[data-bg-desen][data-v24]{padding-bottom:40px}',
    '.bg24-h{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin:0 0 28px}',
    '.bg24-h .bg-eyebrow{display:block}.bg24-h h2{margin:6px 0 8px!important;font:italic 800 40px/1.1 Archivo,sans-serif!important;color:#F2F0EB!important;letter-spacing:-.01em}',
    '.bg24-h p{margin:0!important;max-width:560px;font:500 15px/1.6 Manrope,sans-serif!important;color:#A9A59D!important}',
    '@media (max-width:767px){.bg24-h h2{font-size:28px!important}}',
    '.bg24-studio{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(0,1fr);gap:28px;align-items:start}',
    '.bg24-stage{position:relative;border-radius:22px;overflow:hidden;background:#EFEEEC;aspect-ratio:1/1}',
    '.bg24-stage img.bg24-dev{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity .35s ease}',
    '.bg24-stage img.bg24-dev.out{opacity:0}',
    '.bg24-zoom{position:absolute;left:18px;bottom:18px;display:flex;align-items:center;gap:12px;padding:8px 18px 8px 8px;border-radius:999px;background:rgba(14,14,15,.86);backdrop-filter:blur(6px);color:#F2F0EB}',
    '.bg24-zoom i{width:54px;height:54px;border-radius:50%;background-size:cover;background-position:center;border:2px solid rgba(255,255,255,.85);flex:none}',
    '.bg24-zoom b{display:block;font:800 16px/1.2 Manrope,sans-serif}.bg24-zoom small{display:block;font:600 12px/1.3 Manrope,sans-serif;color:#A9A59D}',
    '.bg24-panel{display:flex;flex-direction:column;gap:22px}',
    '.bg24-lbl{font:700 12px/1 Manrope,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#8E8A83;margin:0 0 12px}',
    '.bg24-ser{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}',
    '.bg24-s{appearance:none;display:flex;align-items:center;gap:10px;padding:8px;border-radius:14px;border:1px solid #26262A;background:#141416;color:#D9D5CE;cursor:pointer;text-align:left;font:700 14px/1.2 Manrope,sans-serif;transition:border-color .2s,background .2s}',
    '.bg24-s i{width:40px;height:40px;border-radius:10px;background-size:cover;background-position:center;flex:none}',
    '.bg24-s small{display:block;font:600 11px/1.3 Manrope,sans-serif;color:#8E8A83;margin-top:2px}',
    '.bg24-s:hover{border-color:#4a463e}.bg24-s[aria-pressed=true]{border-color:#C9A45C;background:#1c1a16;color:#F2F0EB}',
    '.bg24-cols{display:flex;flex-wrap:wrap;gap:10px}',
    '.bg24-c{appearance:none;width:44px;height:44px;border-radius:50%;padding:0;border:2px solid transparent;background:transparent;cursor:pointer;transition:transform .15s}',
    '.bg24-c i{display:block;width:100%;height:100%;border-radius:50%;background-size:cover;background-position:center;border:1px solid rgba(255,255,255,.18)}',
    '.bg24-c:hover{transform:scale(1.08)}.bg24-c[aria-pressed=true]{border-color:#C9A45C;padding:3px}',
    '.bg24-cn{margin:10px 0 0;font:600 14px/1.4 Manrope,sans-serif;color:#F2F0EB}',
    '.bg24-desc{margin:0;font:500 15px/1.6 Manrope,sans-serif;color:#A9A59D}',
    '.bg24-cta{display:flex;flex-wrap:wrap;gap:12px;align-items:center}',
    '.bg24-go{display:inline-flex;align-items:center;gap:8px;padding:14px 26px;border-radius:999px;background:#C9A45C;color:#141210!important;font:800 15px/1 Manrope,sans-serif;text-decoration:none!important;transition:background .2s}',
    '.bg24-go:hover{background:#E2C285}',
    '.bg24-sec{display:inline-flex;padding:13px 22px;border-radius:999px;border:1px solid #4a463e;color:#E2C285!important;font:700 14px/1 Manrope,sans-serif;text-decoration:none!important}',
    '.bg24-sec:hover{border-color:#C9A45C}',
    '.bg24-f{display:flex;gap:8px;flex-wrap:wrap;margin:0 0 22px}',
    '.bg24-fb{appearance:none;display:inline-flex;align-items:center;gap:8px;padding:9px 16px 9px 10px;border-radius:999px;border:1px solid #2c2b30;background:#141416;color:#D9D5CE;font:700 13px/1 Manrope,sans-serif;cursor:pointer;white-space:nowrap}',
    '.bg24-fb i{width:16px;height:16px;border-radius:50%;border:1px solid rgba(255,255,255,.2)}',
    '.bg24-fb em{font-style:normal;color:#8E8A83;font-weight:600}',
    '.bg24-fb[aria-pressed=true]{border-color:#C9A45C;background:#1c1a16;color:#F2F0EB}',
    '.bg24-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}',
    '.bg24-t{display:block;border-radius:18px;overflow:hidden;background:#141416;border:1px solid #26262A;text-decoration:none!important;color:#F2F0EB;transition:border-color .2s,transform .2s}',
    '.bg24-t:hover{border-color:#C9A45C;transform:translateY(-2px)}',
    '.bg24-t .im{position:relative;display:block;aspect-ratio:1/1;background:#EFEEEC;overflow:hidden}',
    '.bg24-t .im img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .4s}',
    '.bg24-t:hover .im img{transform:scale(1.04)}',
    '.bg24-t .ft{display:flex;align-items:center;gap:10px;padding:10px 12px}',
    '.bg24-t .ft i{width:30px;height:30px;border-radius:50%;background-size:cover;background-position:center;flex:none;border:1px solid rgba(255,255,255,.18)}',
    '.bg24-t .ft b{display:block;font:800 14px/1.2 Manrope,sans-serif}.bg24-t .ft small{display:block;font:600 11px/1.3 Manrope,sans-serif;color:#8E8A83}',
    '.bg24-more{display:flex;justify-content:center;margin:22px 0 0}',
    '.bg24-more button{appearance:none;cursor:pointer;background:transparent}',
    '@media (max-width:1023px){.bg24-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}',
    '@media (max-width:899px){.bg24-studio{grid-template-columns:minmax(0,1fr);gap:20px}.bg24-ser{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;margin:0;padding:0 0 4px;scrollbar-width:none}.bg24-ser::-webkit-scrollbar{display:none}.bg24-s{flex:0 0 auto;scroll-snap-align:start;padding:6px 14px 6px 6px}.bg24-h{display:block}.bg24-h .bg24-sec{display:none}}',
    '@media (max-width:767px){.bg24-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.bg24-f{flex-wrap:nowrap;overflow-x:auto;margin:0 0 18px;padding:0 0 4px;scrollbar-width:none}.bg24-f::-webkit-scrollbar{display:none}.bg24-zoom{left:10px;bottom:10px;padding:6px 14px 6px 6px}.bg24-zoom i{width:42px;height:42px}.bg24-t .ft{padding:8px 10px}.bg24-t .ft i{width:24px;height:24px}.bg24-t .ft b{font-size:13px}.bg24-go{flex:1;justify-content:center}}'
  ].join('');

  function studio(sec, S){
    var st = { s: 0, c: S[0].def };
    sec.innerHTML =
      '<div class="bg24-h"><div><span class="bg-eyebrow">DESENLER</span><h2>Desenini seç, cihazında gör</h2>' +
      '<p>9 seri, 39 renk. Bir seri ve renk seç; kamera, lens, drone ve gimbalda nasıl durduğunu hemen gör.</p></div>' +
      '<a class="bg24-sec" href="/betaguard-kaplama">Tüm ürünler →</a></div>' +
      '<div class="bg24-studio"><div class="bg24-stage"><img class="bg24-dev" alt="" decoding="async">' +
      '<div class="bg24-zoom"><i></i><span><b></b><small>Desen yakın görünüm</small></span></div></div>' +
      '<div class="bg24-panel"><div><p class="bg24-lbl">Seri</p><div class="bg24-ser" role="group" aria-label="Seri">' +
      S.map(function(x, i){ return '<button type="button" class="bg24-s" data-i="' + i + '"><i style="background-image:url(' + u(x.card, 180) + ')"></i><span>' + esc(x.name) + '<small>' + (x.cols.length > 1 ? x.cols.length + ' renk' : 'tek renk') + '</small></span></button>'; }).join('') +
      '</div></div><div class="bg24-cw"><p class="bg24-lbl">Renk</p><div class="bg24-cols" role="group" aria-label="Renk"></div><p class="bg24-cn"></p></div>' +
      '<p class="bg24-desc"></p><div class="bg24-cta"><a class="bg24-go" href="#">Bu desenle başla →</a></div></div></div>';
    var dev = sec.querySelector('.bg24-dev'), zi = sec.querySelector('.bg24-zoom i'), zb = sec.querySelector('.bg24-zoom b');
    var cols = sec.querySelector('.bg24-cols'), cn = sec.querySelector('.bg24-cn'), desc = sec.querySelector('.bg24-desc'), go = sec.querySelector('.bg24-go'), cw = sec.querySelector('.bg24-cw');
    var tok = 0;
    function show(){
      var s = S[st.s], c = s.cols[st.c];
      [].forEach.call(sec.querySelectorAll('.bg24-s'), function(b, i){ b.setAttribute('aria-pressed', i === st.s ? 'true' : 'false'); });
      cols.innerHTML = s.cols.map(function(x, i){ return '<button type="button" class="bg24-c" data-i="' + i + '" title="' + esc(x.name) + '" aria-label="' + esc(x.name) + '" aria-pressed="' + (i === st.c) + '"><i style="background-image:url(' + u(x.sw, 180) + ')"></i></button>'; }).join('');
      cw.style.display = s.cols.length > 1 ? '' : 'none';
      cn.textContent = c.short + (s.cols.length > 1 ? ' · ' + (st.c + 1) + '/' + s.cols.length : '');
      desc.textContent = DESC[s.name] || '';
      zi.style.backgroundImage = 'url(' + u(c.sw, 360) + ')'; zb.textContent = c.name;
      go.setAttribute('href', '/betaguard-kaplama?desen=' + c.slug);
      dev.alt = c.name + ' kaplama: kamera, lens, drone ve gimbal';
      var src = u(c.dev, 1080), my = ++tok;
      if (dev.getAttribute('src') === src) return;
      if (!dev.getAttribute('src')) { dev.src = src; return; }
      dev.classList.add('out');
      var pre = new Image(); pre.onload = pre.onerror = function(){ if (my !== tok) return; dev.src = src; dev.classList.remove('out'); }; pre.src = src;
      s.cols.forEach(function(x){ (new Image()).src = u(x.dev, 1080); });
    }
    sec.addEventListener('click', function(e){
      var b = e.target.closest('.bg24-s'); if (b) { st.s = +b.getAttribute('data-i'); st.c = S[st.s].def; show(); return; }
      var c = e.target.closest('.bg24-c'); if (c) { st.c = +c.getAttribute('data-i'); show(); }
    });
    show();
  }

  var TR = { siyah: 'Siyah tonlar', beyaz: 'Beyaz & gri tonlar', mavi: 'Mavi tonlar', yesil: 'Yeşil tonlar', kirmizi: 'Kırmızı & pembe tonlar', sicak: 'Sıcak & renkli tonlar' };
  var HEAD = ['Line Cyan','Tactical Red','Topografik White','Mono Blue','Royal Gold','Carbon','Hexagonal Green','Lego'];
  function order(all){
    var head = [];
    HEAD.forEach(function(n){ for (var i = 0; i < all.length; i++) if (all[i].name === n) { head.push(all[i]); break; } });
    all = all.filter(function(x){ return head.indexOf(x) < 0; });
    var q = {}; FAM.forEach(function(f){ q[f[0]] = []; });
    all.forEach(function(x){ q[x.fam].push(x); });
    var seq = ['siyah','mavi','kirmizi','beyaz','yesil','sicak'], out = [], last = [];
    while (out.length < all.length) {
      seq.forEach(function(f){
        var a = q[f]; if (!a.length) return;
        var k = 0; for (var i = 0; i < a.length; i++) if (last.indexOf(a[i].series) < 0) { k = i; break; }
        var x = a.splice(k, 1)[0]; out.push(x); last.push(x.series); if (last.length > 3) last.shift();
      });
    }
    return head.concat(out);
  }

  function wall(sec, S){
    var all = []; S.forEach(function(s){ s.cols.forEach(function(c){ all.push(c); }); });
    var mix = order(all), st = { f: 'all', open: false }, LIM = 8;
    var cnt = {}; all.forEach(function(x){ cnt[x.fam] = (cnt[x.fam] || 0) + 1; });
    sec.innerHTML =
      '<div class="bg24-h"><div><span class="bg-eyebrow">RENGE GÖRE KEŞFET</span><h2>Önce rengini seç</h2>' +
      '<p>' + all.length + ' renk seçeneği. Bir tona dokun, o renkteki tüm desenleri kamera, lens, drone ve gimbal üzerinde gör.</p></div></div>' +
      '<div class="bg24-f" role="group" aria-label="Renk filtresi"><button type="button" class="bg24-fb" data-f="all"><i style="background:conic-gradient(#1b1b1d 0 60deg,#e6e3dc 0 120deg,#2f6fd6 0 180deg,#3f8a4a 0 240deg,#c8323c 0 300deg,#e7b416 0)"></i>Tümü <em>' + all.length + '</em></button>' +
      FAM.filter(function(f){ return cnt[f[0]]; }).map(function(f){ return '<button type="button" class="bg24-fb" data-f="' + f[0] + '"><i style="background:' + f[2] + '"></i>' + f[1] + ' <em>' + cnt[f[0]] + '</em></button>'; }).join('') +
      '</div><div class="bg24-grid"></div><div class="bg24-more"><button type="button" class="bg24-sec"></button></div>';
    var grid = sec.querySelector('.bg24-grid'), more = sec.querySelector('.bg24-more'), mb = more.querySelector('button');
    function show(){
      [].forEach.call(sec.querySelectorAll('.bg24-fb'), function(b){ b.setAttribute('aria-pressed', b.getAttribute('data-f') === st.f ? 'true' : 'false'); });
      var list = st.f === 'all' ? mix : mix.filter(function(x){ return x.fam === st.f; });
      var cut = st.f === 'all' && !st.open ? list.slice(0, LIM) : list;
      grid.innerHTML = cut.map(function(x){
        return '<a class="bg24-t" href="/betaguard-kaplama?desen=' + x.slug + '"><span class="im"><img src="' + u(x.dev, 540) + '" alt="' + esc(x.name) + ' kaplama" loading="lazy" decoding="async"></span>' +
          '<span class="ft"><i style="background-image:url(' + u(x.sw, 180) + ')"></i><span><b>' + esc(x.name) + '</b><small>' + esc(TR[x.fam]) + '</small></span></span></a>';
      }).join('');
      more.style.display = st.f === 'all' && list.length > LIM ? '' : 'none';
      mb.textContent = st.open ? 'Daha az göster' : 'Tüm ' + list.length + ' rengi göster';
    }
    sec.addEventListener('click', function(e){
      var b = e.target.closest('.bg24-fb'); if (b) { st.f = b.getAttribute('data-f'); show(); return; }
      if (e.target.closest('.bg24-more button')) { st.open = !st.open; show(); if (!st.open) sec.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
    show();
  }

  var hide = document.createElement('style'); hide.id = 'bg-hide24'; hide.textContent = '[data-bg-desen]:not([data-v24]),[data-bg-wall]:not([data-v24]){visibility:hidden}';
  (document.head || document.documentElement).appendChild(hide);
  setTimeout(function(){ hide.remove(); }, 5000);
  var DATA = null;
  function run(){
    var ds = document.querySelector('[data-bg-desen]'), wl = document.querySelector('[data-bg-wall]');
    if (!ds || !wl) return;
    if (ds.getAttribute('data-v24') && wl.getAttribute('data-v24')) return;
    if (!DATA) DATA = collect(); if (!DATA) return;
    if (!document.getElementById('bg-theme-css24')) { var st = document.createElement('style'); st.id = 'bg-theme-css24'; st.textContent = css; (document.head || document.documentElement).appendChild(st); }
    if (!ds.getAttribute('data-v24')) { ds.setAttribute('data-v24', '1'); studio(ds, DATA); }
    if (!wl.getAttribute('data-v24')) { wl.setAttribute('data-v24', '1'); wall(wl, DATA); }
  }
  var q = false;
  function sch(){ if (q) return; q = true; setTimeout(function(){ q = false; try { run(); } catch (e) {} }, 150); }
  function go(){ sch(); new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true }); }
  if (document.readyState !== 'loading') setTimeout(go, 300); else document.addEventListener('DOMContentLoaded', function(){ setTimeout(go, 300); });
})();

/* ===== 11_v25.js ===== */
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
    '.bg-hero h1 .bg-h1s{display:block;margin-top:14px;font:italic 800 26px/1.2 Archivo,sans-serif;color:#C9A45C;letter-spacing:0}',
    '@media (max-width:767px){.bg-hero h1 .bg-h1s{font-size:19px;margin-top:10px}}',
    /* odeme satiri */
    '.bg-pay{display:flex;flex-wrap:wrap;align-items:center;gap:10px 22px;padding:18px 0;margin:0 0 4px;font:600 13px/1.4 Manrope,sans-serif;color:#A9A59D}',
    '.bg-pay span{display:inline-flex;align-items:center;gap:8px}.bg-pay svg{width:18px;height:18px;flex:none;stroke:#C9A45C;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}',
    /* cerez seridi */
    '.bg-cookie{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:99990;width:min(720px,calc(100% - 24px));display:flex;align-items:center;gap:16px;padding:14px 16px 14px 20px;border-radius:16px;background:#16151A;border:1px solid #2A292E;box-shadow:0 12px 40px rgba(0,0,0,.5);color:#D9D5CE;font:500 13px/1.55 Manrope,sans-serif;box-sizing:border-box}',
    '.bg-cookie p{margin:0;flex:1}.bg-cookie a{color:#E2C285;text-decoration:underline;cursor:pointer}',
    '.bg-cookie .b{display:flex;gap:8px;flex:none}',
    '.bg-cookie button{appearance:none;cursor:pointer;border-radius:999px;padding:10px 16px;font:700 13px/1 Manrope,sans-serif;white-space:nowrap}',
    '.bg-cookie .n{background:transparent;border:1px solid #4a463e;color:#D9D5CE}.bg-cookie .y{background:#C9A45C;border:1px solid #C9A45C;color:#141210}',
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
    [/^Hangi ödeme yöntemleri var/, 'Kredi kartı ve banka kartıyla, ikas güvenli ödeme altyapısı üzerinden ödeyebilirsin. Kredi kartına 12 aya varan taksit seçeneği var; taksit farkı ödeme sayfasında gösterilir.'],
    [/^İade veya değişim yapabilir miyim/, 'Kaplamalar seçtiğin cihaza özel kesildiği için cayma hakkı kapsamında değildir. Kesim hatası, yanlış ürün ya da kargo hasarı gibi bizden kaynaklı bir sorunda aynı ürünü ücretsiz olarak yeniden gönderiyoruz; ürünün fotoğrafıyla WhatsApp\'tan bildirmen yeterli.']
  ];

  function texts(){
    /* hero */
    var h1 = document.querySelector('.bg-hero h1');
    if (h1 && !h1.getAttribute('data-v25')) { h1.setAttribute('data-v25', '1'); h1.innerHTML = 'Cihazına özel<br>kaplama.<span class="bg-h1s">Tek desen. Tek karakter.</span>'; }
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

/* ===== 12_v26.js ===== */
/* v26: cihaz bazli ilanlar - cihaz sayfasi, Setini tamamla, cihaz secici, kategori marka cipleri, populer cihazlar, eski urun yonlendirme */
(function(){
  if (window.__bgV26) return; window.__bgV26 = 1;
  var D = [["canon-eos-250d-200d-mark-ii-kaplama", "K", "Canon", "EOS 250D (200D Mark II)", 1750, "kamera-canon-eos-200d-mark-ii"], ["canon-eos-5d-mark-iv-kaplama", "K", "Canon", "EOS 5D Mark IV", 2000, "kamera-canon-eos-5d-mark-iv"], ["canon-eos-6d-mark-ii-kaplama", "K", "Canon", "EOS 6D Mark II", 2000, "kamera-canon-eos-6d-mark-ii"], ["canon-eos-90d-kaplama", "K", "Canon", "EOS 90D", 2000, "kamera-canon-eos-90d"], ["canon-eos-m50-m50-mark-ii-kaplama", "K", "Canon", "EOS M50 / M50 Mark II", 1750, "kamera-canon-eos-m50-m50-mark-ii"], ["canon-eos-r1-kaplama", "K", "Canon", "EOS R1", 2500, "kamera-canon-eos-r1"], ["canon-eos-r10-kaplama", "K", "Canon", "EOS R10", 2000, "kamera-canon-eos-r10"], ["canon-eos-r100-kaplama", "K", "Canon", "EOS R100", 2000, "kamera-canon-eos-r100"], ["canon-eos-r3-kaplama", "K", "Canon", "EOS R3", 2500, "kamera-canon-eos-r3"], ["canon-eos-r5-kaplama", "K", "Canon", "EOS R5", 2000, "kamera-canon-eos-r5"], ["canon-eos-r5-mark-ii-kaplama", "K", "Canon", "EOS R5 Mark II", 2000, "kamera-canon-eos-r5-mark-ii"], ["canon-eos-r50-kaplama", "K", "Canon", "EOS R50", 2000, "kamera-canon-eos-r50"], ["canon-eos-r50-v-kaplama", "K", "Canon", "EOS R50 V", 2000, "kamera-canon-eos-r50-v"], ["canon-eos-r5-c-kaplama", "K", "Canon", "EOS R5 C", 2000, "kamera-canon-eos-r5c"], ["canon-eos-r6-kaplama", "K", "Canon", "EOS R6", 2000, "kamera-canon-eos-r6"], ["canon-eos-r6-mark-ii-kaplama", "K", "Canon", "EOS R6 Mark II", 2000, "kamera-canon-eos-r6-mark-ii"], ["canon-eos-r6-mark-iii-kaplama", "K", "Canon", "EOS R6 Mark III", 2000, "kamera-canon-eos-r6-mark-iii"], ["canon-eos-r7-kaplama", "K", "Canon", "EOS R7", 2000, "kamera-canon-eos-r7"], ["canon-eos-r8-kaplama", "K", "Canon", "EOS R8", 2000, "kamera-canon-eos-r8"], ["canon-eos-rp-kaplama", "K", "Canon", "EOS RP", 2000, "kamera-canon-eos-rp"], ["canon-powershot-g7-x-mark-ii-kaplama", "K", "Canon", "PowerShot G7 X Mark II", 1750, "kamera-canon-powershot-g7x-mark-ii"], ["canon-rf-100-400mm-f5-6-8-is-usm-lens-kaplama", "L", "Canon", "RF 100-400mm F5.6-8 IS USM", 2500, "lens-canon-rf-100-400mm-f5-6-8-is-usm"], ["canon-rf-100-500mm-f4-5-7-1-l-is-usm-lens-kaplama", "L", "Canon", "RF 100-500mm f4.5-7.1 L IS USM", 2500, "lens-canon-rf-100-500mm-f4-5-7-1-l-is-usm"], ["canon-rf-100mm-f2-8l-macro-is-usm-lens-kaplama", "L", "Canon", "RF 100mm f2.8L Macro IS USM", 1500, "lens-canon-rf-100mm-f2-8l-macro-is-usm"], ["canon-rf-15-35mm-f2-8-l-is-usm-lens-kaplama", "L", "Canon", "RF 15-35mm F2.8 L IS USM", 1250, "lens-canon-rf-15-35mm-f2-8-l-is-usm"], ["canon-rf-24-105mm-f4-l-is-usm-lens-kaplama", "L", "Canon", "RF 24-105mm F4 L IS USM", 1500, "lens-canon-rf-24-105mm-f4-l-is-usm"], ["canon-rf-24-240mm-f4-6-3-is-usm-lens-kaplama", "L", "Canon", "RF 24-240mm f4-6.3 IS USM", 1500, "lens-canon-rf-24-240mm-f4-6-3-is-usm"], ["canon-rf-24-70mm-f2-8-l-is-usm-lens-kaplama", "L", "Canon", "RF 24-70mm F2.8 L IS USM", 1500, "lens-canon-rf-24-70mm-f2-8-l-is-usm"], ["canon-rf-35mm-f1-8-is-macro-stm-lens-kaplama", "L", "Canon", "RF 35mm f1.8 IS Macro STM", 1250, "lens-canon-rf-35mm-f1-8-is-macro-stm"], ["canon-rf-50mm-f1-8-stm-lens-kaplama", "L", "Canon", "RF 50mm F1.8 STM", 1250, "lens-canon-rf-50mm-f1-8-stm"], ["canon-rf-70-200mm-f4-l-is-usm-lens-kaplama", "L", "Canon", "RF 70-200mm F4 L IS USM", 2000, "lens-canon-rf-70-200mm-f4-l-is-usm"], ["canon-rf-85mm-f1-2-l-usm-lens-kaplama", "L", "Canon", "RF 85mm F1.2 L USM", 1500, "lens-canon-rf-85mm-f1-2-l-usm"], ["dji-air-3s-kaplama", "D", "DJI", "Air 3S", 3000, "drone-dji-air-3s"], ["dji-mini-3-kaplama", "D", "DJI", "Mini 3", 2500, "drone-dji-mini-3"], ["dji-mini-3-pro-kaplama", "D", "DJI", "Mini 3 Pro", 2500, "drone-dji-mini-3-pro"], ["dji-mini-4-pro-kaplama", "D", "DJI", "Mini 4 Pro", 2500, "drone-dji-mini-4-pro"], ["dji-mini-5-pro-kaplama", "D", "DJI", "Mini 5 Pro", 2500, "drone-dji-mini-5-pro"], ["dji-osmo-action-5-pro-kaplama", "A", "DJI", "Osmo Action 5 Pro", 1500, "aksiyon-kamera-dji-osmo-action-5-pro"], ["dji-osmo-pocket-3-kaplama", "A", "DJI", "Osmo Pocket 3", 1500, "aksiyon-kamera-dji-osmo-pocket-3"], ["fujifilm-fujinon-xf-23mm-f2-r-wr-lens-kaplama", "L", "Fujifilm", "Fujinon XF 23mm f2 R WR", 1250, "lens-fujifilm-fujinon-xf-23mm-f2-r-wr"], ["fujifilm-gf-110mm-f2-r-lm-wr-lens-kaplama", "L", "Fujifilm", "GF 110mm f2 R LM WR", 1500, "lens-fujifilm-gf-110mm-f2-r-lm-wr"], ["fujifilm-gf-120mm-f4-macro-r-lm-ois-wr-lens-kaplama", "L", "Fujifilm", "GF 120mm f4 Macro R LM OIS WR", 1500, "lens-fujifilm-gf-120mm-f4-macro-r-lm-ois-wr"], ["fujifilm-gf-23mm-f4-r-lm-wr-lens-kaplama", "L", "Fujifilm", "GF 23mm f4 R LM WR", 1250, "lens-fujifilm-gf-23mm-f4-r-lm-wr"], ["fujifilm-gf-250mm-f4-r-lm-ois-wr-lens-kaplama", "L", "Fujifilm", "GF 250mm f4 R LM OIS WR", 2500, "lens-fujifilm-gf-250mm-f4-r-lm-ois-wr"], ["fujifilm-gf-32-64mm-f4-r-lm-wr-lens-kaplama", "L", "Fujifilm", "GF 32-64mm f4 R LM WR", 1500, "lens-fujifilm-gf-32-64mm-f4-r-lm-wr"], ["fujifilm-gfx100s-kaplama", "K", "Fujifilm", "GFX100S", 2500, "kamera-fujifilm-gfx-100s"], ["fujifilm-x-e4-kaplama", "K", "Fujifilm", "X-E4", 2000, "kamera-fujifilm-x-e4"], ["fujifilm-x-h2s-kaplama", "K", "Fujifilm", "X-H2S", 2000, "kamera-fujifilm-x-h2s"], ["fujifilm-x-pro3-kaplama", "K", "Fujifilm", "X-Pro3", 2000, "kamera-fujifilm-x-pro-3"], ["fujifilm-x-s10-kaplama", "K", "Fujifilm", "X-S10", 2000, "kamera-fujifilm-x-s10"], ["fujifilm-x-t3-kaplama", "K", "Fujifilm", "X-T3", 2000, "kamera-fujifilm-x-t3"], ["fujifilm-x-t30-kaplama", "K", "Fujifilm", "X-T30", 1750, "kamera-fujifilm-x-t30"], ["fujifilm-x-t30-ii-kaplama", "K", "Fujifilm", "X-T30 II", 1750, "kamera-fujifilm-x-t30-mark-ii"], ["fujifilm-x-t3a-kaplama", "K", "Fujifilm", "X-T3a", 2000, "kamera-fujifilm-x-t3a"], ["fujifilm-x-t4-kaplama", "K", "Fujifilm", "X-T4", 2000, "kamera-fujifilm-x-t4"], ["fujifilm-x-t4a-kaplama", "K", "Fujifilm", "X-T4a", 2000, "kamera-fujifilm-x-t4a"], ["fujifilm-x-t5-kaplama", "K", "Fujifilm", "X-T5", 2000, "kamera-fujifilm-x-t5"], ["fujifilm-x100v-kaplama", "K", "Fujifilm", "X100V", 1750, "kamera-fujifilm-x100v"], ["fujifilm-x100vi-kaplama", "K", "Fujifilm", "X100VI", 1750, "kamera-fujifilm-x100vi"], ["fujifilm-xf-23mm-f1-4-r-lm-wr-ii-lens-kaplama", "L", "Fujifilm", "XF 23mm F1.4 R LM WR II", 1250, "lens-fujifilm-xf-23mm-f1-4-r-lm-wr-ii"], ["fujifilm-xf-33mm-f1-4-r-lm-wr-lens-kaplama", "L", "Fujifilm", "XF 33mm f1.4 R LM WR", 1250, "lens-fujifilm-xf-33mm-f1-4-r-lm-wr"], ["fujifilm-xf-50mm-f1-0-wr-lens-kaplama", "L", "Fujifilm", "XF 50mm f1.0 WR", 1250, "lens-fujifilm-xf-50mm-f1-0-wr"], ["fujifilm-xf-56mm-f1-2-r-wr-mark-ii-lens-kaplama", "L", "Fujifilm", "XF 56mm f1.2 R WR Mark II", 1250, "lens-fujifilm-xf-56mm-f1-2-r-wr-mark-ii"], ["nikon-d3500-kaplama", "K", "Nikon", "D3500", 1750, "kamera-nikon-d3500"], ["nikon-d500-kaplama", "K", "Nikon", "D500", 2000, "kamera-nikon-d500"], ["nikon-d7500-kaplama", "K", "Nikon", "D7500", 2000, "kamera-nikon-d7500"], ["nikon-d780-kaplama", "K", "Nikon", "D780", 2000, "kamera-nikon-d780"], ["nikon-d850-kaplama", "K", "Nikon", "D850", 2000, "kamera-nikon-d850"], ["nikon-nikkor-z-24-70mm-f2-8-s-ii-lens-kaplama", "L", "Nikon", "NIKKOR Z 24-70mm F2.8 S II", 1750, "lens-nikon-nikkor-z-24-70mm-f2-8-s-ii"], ["nikon-nikkor-z-35mm-f1-2-s-lens-kaplama", "L", "Nikon", "NIKKOR Z 35mm F1.2 S", 1750, "lens-nikon-nikkor-z-35mm-f1-2-s"], ["nikon-nikkor-z-40mm-f2-lens-kaplama", "L", "Nikon", "NIKKOR Z 40mm F2", 1250, "lens-nikon-nikkor-z-40mm-f2"], ["nikon-nikkor-z-50mm-f1-2-s-lens-kaplama", "L", "Nikon", "NIKKOR Z 50mm f1.2 S", 1750, "lens-nikon-nikkor-z-50mm-f1-2-s"], ["nikon-nikkor-z-50mm-f1-8-s-lens-kaplama", "L", "Nikon", "NIKKOR Z 50mm f1.8 S", 1250, "lens-nikon-nikkor-z-50mm-f1-8-s"], ["nikon-nikkor-z-800mm-f6-3-vr-s-lens-kaplama", "L", "Nikon", "NIKKOR Z 800mm f6.3 VR S", 2500, "lens-nikon-nikkor-z-800mm-f6-3-vr-s"], ["nikon-nikkor-z-85mm-f1-2-s-lens-kaplama", "L", "Nikon", "NIKKOR Z 85mm F1.2 S", 1750, "lens-nikon-nikkor-z-85mm-f1-2-s"], ["nikon-nikkor-z-dx-18-140mm-f3-5-6-3-vr-lens-kaplama", "L", "Nikon", "NIKKOR Z DX 18-140mm f3.5-6.3 VR", 1500, "lens-nikon-nikon-nikkor-z-dx-18-140mm-f3-5-6-3-vr"], ["nikon-nikkor-z-24-120mm-f4-s-lens-kaplama", "L", "Nikon", "Nikkor Z 24-120mm f4 S", 1500, "lens-nikon-nikkor-z-24-120mm-f4-s"], ["nikon-nikkor-z-35mm-f1-4-lens-kaplama", "L", "Nikon", "Nikkor Z 35mm F1.4", 1500, "lens-nikon-nikkor-z-35mm-f1-4"], ["nikon-nikkor-z-50mm-f1-4-lens-kaplama", "L", "Nikon", "Nikkor Z 50mm F1.4", 1500, "lens-nikon-nikkor-z-50mm-f1-4"], ["nikon-nikkor-z-70-180mm-f2-8-lens-kaplama", "L", "Nikon", "Nikkor Z 70-180mm F2.8", 2000, "lens-nikon-nikkor-z-70-180mm-f2-8"], ["nikon-z-14-24mm-f2-8-s-lens-kaplama", "L", "Nikon", "Z 14-24mm f2.8 S", 1750, "lens-nikon-z-14-24mm-f2-8-s"], ["nikon-z-14-30mm-f4-s-lens-kaplama", "L", "Nikon", "Z 14-30mm f4 S", 1500, "lens-nikon-z-14-30mm-f4-s"], ["nikon-z-20mm-f1-8-s-lens-kaplama", "L", "Nikon", "Z 20mm f1.8 S", 1250, "lens-nikon-z-20mm-f1-8-s"], ["nikon-z-24-70mm-f2-8-s-lens-kaplama", "L", "Nikon", "Z 24-70mm f2.8 S", 1750, "lens-nikon-z-24-70mm-f2-8-s"], ["nikon-z-24-70mm-f4-s-lens-kaplama", "L", "Nikon", "Z 24-70mm f4 S", 1500, "lens-nikon-z-24-70mm-f4-s"], ["nikon-z-24mm-f1-8-s-lens-kaplama", "L", "Nikon", "Z 24mm f1.8 S", 1250, "lens-nikon-z-24mm-f1-8-s"], ["nikon-z-28-75mm-f2-8-s-lens-kaplama", "L", "Nikon", "Z 28-75mm f2.8 S", 1750, "lens-nikon-z-28-75mm-f2-8-s"], ["nikon-z-35mm-f1-8-s-lens-kaplama", "L", "Nikon", "Z 35mm f1.8 S", 1250, "lens-nikon-z-35mm-f1-8-s"], ["nikon-z-70-200mm-f2-8-vr-s-lens-kaplama", "L", "Nikon", "Z 70-200mm f2.8 VR S", 2000, "lens-nikon-z-70-200mm-f2-8-vr-s"], ["nikon-z-85mm-f1-8-s-lens-kaplama", "L", "Nikon", "Z 85mm f1.8 S", 1500, "lens-nikon-z-85mm-f1-8-s"], ["nikon-z30-kaplama", "K", "Nikon", "Z30", 1750, "kamera-nikon-z30"], ["nikon-z5-kaplama", "K", "Nikon", "Z5", 2000, "kamera-nikon-z5"], ["nikon-z5-ii-kaplama", "K", "Nikon", "Z5 II", 2000, "kamera-nikon-z5-ii"], ["nikon-z50-kaplama", "K", "Nikon", "Z50", 2000, "kamera-nikon-z50"], ["nikon-z50-ii-kaplama", "K", "Nikon", "Z50 II", 2000, "kamera-nikon-z50-mark-ii"], ["nikon-z6-z7-kaplama", "K", "Nikon", "Z6 / Z7", 2000, "kamera-nikon-z6-z7"], ["nikon-z6-ii-z7-ii-kaplama", "K", "Nikon", "Z6 II / Z7 II", 2000, "kamera-nikon-z6-ii-z7-ii"], ["nikon-z6-iii-kaplama", "K", "Nikon", "Z6 III", 2000, "kamera-nikon-z6-iii"], ["nikon-z8-kaplama", "K", "Nikon", "Z8", 2500, "kamera-nikon-z8"], ["nikon-z9-kaplama", "K", "Nikon", "Z9", 2500, "kamera-nikon-z9"], ["nikon-zf-kaplama", "K", "Nikon", "Zf", 2000, "kamera-nikon-zf"], ["nikon-zr-kaplama", "K", "Nikon", "ZR", 2000, "kamera-nikon-zr"], ["panasonic-lumix-dc-g9-kaplama", "K", "Panasonic", "Lumix DC-G9", 2000, "kamera-panasonic-lumix-dc-g9"], ["panasonic-lumix-dc-s5-kaplama", "K", "Panasonic", "Lumix DC-S5", 2000, "kamera-panasonic-lumix-dc-s5"], ["panasonic-lumix-gh5-kaplama", "K", "Panasonic", "Lumix GH5", 2000, "kamera-panasonic-lumix-gh5"], ["panasonic-lumix-gh6-kaplama", "K", "Panasonic", "Lumix GH6", 2000, "kamera-panasonic-lumix-gh6"], ["panasonic-lumix-s5-ii-s5-iix-kaplama", "K", "Panasonic", "Lumix S5 II / S5 IIX", 2000, "kamera-panasonic-lumix-s5-ii-s5-iix"], ["sony-12-24mm-f4-g-lens-kaplama", "L", "Sony", "12-24mm F4 G", 1500, "lens-sony-12-24mm-f4-g"], ["sony-16-35mm-f4-cz-lens-kaplama", "L", "Sony", "16-35mm F4 CZ", 1500, "lens-sony-16-35mm-f4-cz"], ["sony-alpha-a7c-ii-kaplama", "K", "Sony", "Alpha A7C II", 2000, "kamera-sony-a7c-mark-ii"], ["sony-alpha-1-kaplama", "K", "Sony", "Alpha 1", 2000, "kamera-sony-alpha-1-a1"], ["sony-alpha-9-iii-kaplama", "K", "Sony", "Alpha 9 III", 2000, "kamera-sony-alpha-9-iii-a9-iii"], ["sony-alpha-a6100-kaplama", "K", "Sony", "Alpha A6100", 2000, "kamera-sony-alpha-a6100"], ["sony-alpha-a6400-kaplama", "K", "Sony", "Alpha A6400", 2000, "kamera-sony-alpha-a6400"], ["sony-alpha-a6600-kaplama", "K", "Sony", "Alpha A6600", 2000, "kamera-sony-alpha-a6600"], ["sony-alpha-a6700-kaplama", "K", "Sony", "Alpha A6700", 2000, "kamera-sony-alpha-a6700"], ["sony-alpha-a7-iii-a7r-iii-kaplama", "K", "Sony", "Alpha A7 III / A7R III", 2000, "kamera-sony-alpha-a7-mark-iii-a7r-iii"], ["sony-alpha-a7-iv-kaplama", "K", "Sony", "Alpha A7 IV", 2000, "kamera-sony-alpha-a7-mark-iv"], ["sony-alpha-a7-v-kaplama", "K", "Sony", "Alpha A7 V", 2000, "kamera-sony-alpha-a7-mark-v"], ["sony-alpha-a7c-kaplama", "K", "Sony", "Alpha A7C", 2000, "kamera-sony-alpha-a7c"], ["sony-alpha-a7r-iv-kaplama", "K", "Sony", "Alpha A7R IV", 2000, "kamera-sony-alpha-a7r-iv"], ["sony-alpha-a7r-v-kaplama", "K", "Sony", "Alpha A7R V", 2000, "kamera-sony-alpha-a7r-v"], ["sony-alpha-a7r-vi-kaplama", "K", "Sony", "Alpha A7R VI", 2000, "kamera-sony-alpha-a7r-vi"], ["sony-alpha-a7s-iii-kaplama", "K", "Sony", "Alpha A7S III", 2000, "kamera-sony-alpha-a7s-iii"], ["sony-alpha-a9-ii-kaplama", "K", "Sony", "Alpha A9 II", 2000, "kamera-sony-alpha-a9-mark-ii"], ["sony-zv-e10-kaplama", "K", "Sony", "ZV-E10", 2000, "kamera-sony-alpha-zv-e10"], ["sony-rx100-iii-kaplama", "K", "Sony", "RX100 III", 1750, "kamera-sony-dsc-rx100-iii"], ["sony-rx100-vi-kaplama", "K", "Sony", "RX100 VI", 1750, "kamera-sony-dsc-rx100-vi"], ["sony-rx100-vii-kaplama", "K", "Sony", "RX100 VII", 1750, "kamera-sony-dsc-rx100-vii"], ["sony-distagon-t-fe-35mm-f1-4-za-lens-kaplama", "L", "Sony", "Distagon T FE 35mm f1.4 ZA", 1500, "lens-sony-distagon-t-fe-35mm-f1-4-za"], ["sony-e-11mm-f-1-8-sel11f18-lens-kaplama", "L", "Sony", "E 11mm f/1.8 (SEL11F18)", 1250, "lens-sony-e-11mm-f-1-8-sel11f18"], ["sony-e-18-135mm-f3-5-5-6-oss-lens-kaplama", "L", "Sony", "E 18-135mm F3.5-5.6 OSS", 1500, "lens-sony-e-18-135mm-f3-5-5-6-oss"], ["sony-fe-100-400mm-f4-5-5-6-gm-oss-lens-kaplama", "L", "Sony", "FE 100-400mm f4.5-5.6 GM OSS", 2500, "lens-sony-fe-100-400mm-f4-5-5-6-gm-oss"], ["sony-fe-100mm-f2-8-stf-gm-oss-lens-kaplama", "L", "Sony", "FE 100mm F2.8 STF GM OSS", 1500, "lens-sony-fe-100mm-f2-8-stf-gm-oss"], ["sony-fe-100mm-f2-8-gm-lens-kaplama", "L", "Sony", "FE 100mm f2.8 GM", 1500, "lens-sony-fe-100mm-f2-8-gm"], ["sony-fe-135mm-f1-8-gm-lens-kaplama", "L", "Sony", "FE 135mm F1.8 GM", 1750, "lens-sony-fe-135mm-f1-8-gm"], ["sony-fe-14mm-f1-8-gm-lens-kaplama", "L", "Sony", "FE 14mm F1.8 GM", 1250, "lens-sony-fe-14mm-f1-8-gm"], ["sony-fe-16-35mm-f2-8-gm-lens-kaplama", "L", "Sony", "FE 16-35mm F2.8 GM", 1750, "lens-sony-fe-16-35mm-f2-8-gm"], ["sony-fe-16-35mm-f2-8-gm-ii-lens-kaplama", "L", "Sony", "FE 16-35mm F2.8 GM II", 1750, "lens-sony-fe-16-35mm-f2-8-gm-ii"], ["sony-fe-200-600mm-f5-6-6-3-g-oss-lens-kaplama", "L", "Sony", "FE 200-600mm f5.6-6.3 G OSS", 2500, "lens-sony-fe-200-600mm-f5-6-6-3-g-oss"], ["sony-fe-20mm-f1-8-g-lens-kaplama", "L", "Sony", "FE 20mm F1.8 G", 1250, "lens-sony-fe-20mm-f1-8-g"], ["sony-fe-24-70mm-f2-8-gm-ii-lens-kaplama", "L", "Sony", "FE 24-70mm f2.8 GM II", 1750, "lens-sony-fe-24-70mm-f2-8-gm-ii"], ["sony-fe-24-70mm-f2-8-gm-lens-kaplama", "L", "Sony", "FE 24-70mm F2.8 GM", 1750, "lens-sony-fe-24-70mm-f2-8-gm"], ["sony-fe-24mm-f1-4-gm-lens-kaplama", "L", "Sony", "FE 24mm F1.4 GM", 1500, "lens-sony-fe-24mm-f1-4-gm"], ["sony-fe-28-70mm-f2-gm-lens-kaplama", "L", "Sony", "FE 28-70mm F2 GM", 1750, "lens-sony-fe-28-70mm-f2-gm"], ["sony-fe-28mm-f2-lens-kaplama", "L", "Sony", "FE 28mm F2", 1250, "lens-sony-fe-28mm-f2"], ["sony-fe-35mm-f1-4-gm-lens-kaplama", "L", "Sony", "FE 35mm F1.4 GM", 1500, "lens-sony-fe-35mm-f1-4-gm"], ["sony-fe-35mm-f1-8-lens-kaplama", "L", "Sony", "FE 35mm F1.8", 1250, "lens-sony-fe-35mm-f1-8"], ["sony-fe-400mm-f2-8-gm-oss-lens-kaplama", "L", "Sony", "FE 400mm F2.8 GM OSS", 2500, "lens-sony-fe-400mm-f2-8-gm-oss"], ["sony-fe-50-150mm-f2-gm-lens-kaplama", "L", "Sony", "FE 50-150mm F2 GM", 1750, "lens-sony-fe-50-150mm-f2-gm"], ["sony-fe-50mm-f1-4-gm-lens-kaplama", "L", "Sony", "FE 50mm F1.4 GM", 1500, "lens-sony-fe-50mm-f1-4-gm"], ["sony-fe-50mm-f1-8-lens-kaplama", "L", "Sony", "FE 50mm F1.8", 1250, "lens-sony-fe-50mm-f1-8"], ["sony-fe-50mm-f2-8-macro-lens-kaplama", "L", "Sony", "FE 50mm F2.8 Macro", 1250, "lens-sony-fe-50mm-f2-8-macro"], ["sony-fe-50mm-f1-2-gm-lens-kaplama", "L", "Sony", "FE 50mm f1.2 GM", 1750, "lens-sony-fe-50mm-f1-2-gm"], ["sony-fe-55mm-f1-8-lens-kaplama", "L", "Sony", "FE 55mm F1.8", 1250, "lens-sony-fe-55mm-f1-8"], ["sony-fe-70-200mm-f2-8-gm-oss-lens-kaplama", "L", "Sony", "FE 70-200mm F2.8 GM OSS", 2000, "lens-sony-fe-70-200mm-f2-8-gm-oss"], ["sony-fe-70-200mm-f2-8-gm-oss-ii-lens-kaplama", "L", "Sony", "FE 70-200mm f2.8 GM OSS II", 2000, "lens-sony-fe-70-200mm-f2-8-gm-oss-ii"], ["sony-fe-70-300mm-f4-5-5-6-g-oss-lens-kaplama", "L", "Sony", "FE 70-300mm F4.5-5.6 G OSS", 2000, "lens-sony-fe-70-300mm-f4-5-5-6-g-oss"], ["sony-fe-85mm-f1-4-gm-lens-kaplama", "L", "Sony", "FE 85mm F1.4 GM", 1500, "lens-sony-fe-85mm-f1-4-gm"], ["sony-fe-85mm-f1-4-gm-ii-lens-kaplama", "L", "Sony", "FE 85mm F1.4 GM II", 1500, "lens-sony-fe-85mm-f1-4-gm-ii"], ["sony-fe-90mm-f2-8-macro-lens-kaplama", "L", "Sony", "FE 90mm F2.8 Macro", 1500, "lens-sony-fe-90mm-f2-8-macro"], ["sony-fe-pz-16-35mm-f4-g-lens-kaplama", "L", "Sony", "FE PZ 16-35mm F4 G", 1500, "lens-sony-fe-pz-16-35mm-f4-g"], ["sony-fx2-kaplama", "K", "Sony", "FX2", 2000, "kamera-sony-fx2"], ["sony-fx3-kaplama", "K", "Sony", "FX3", 2000, "kamera-sony-fx3"], ["sony-fx30-kaplama", "K", "Sony", "FX30", 2000, "kamera-sony-fx30"], ["sony-fx5-kaplama", "K", "Sony", "FX5", 2000, "kamera-sony-fx5"], ["sony-zv-1-kaplama", "K", "Sony", "ZV-1", 1750, "kamera-sony-zv-1"], ["sony-zv-1-ii-kaplama", "K", "Sony", "ZV-1 II", 1750, "kamera-sony-zv-1-mark-ii"], ["sony-zv-e1-kaplama", "K", "Sony", "ZV-E1", 2000, "kamera-sony-zv-e1"], ["sony-zv-e10-ii-kaplama", "K", "Sony", "ZV-E10 II", 2000, "kamera-sony-zv-e10-mark-ii"], ["sony-alpha-a6000-kaplama", "K", "Sony", "Alpha A6000", 2000, "kamera-sony-alpha-a6000"], ["sony-alpha-a5100-kaplama", "K", "Sony", "Alpha A5100", 1750, "kamera-sony-alpha-a5100"], ["sony-alpha-a6300-kaplama", "K", "Sony", "Alpha A6300", 2000, "kamera-sony-alpha-a6300"], ["sony-alpha-a6500-kaplama", "K", "Sony", "Alpha A6500", 2000, "kamera-sony-alpha-a6500"], ["sony-alpha-a7-a7r-a7s-kaplama", "K", "Sony", "Alpha A7 / A7R / A7S", 2000, "kamera-sony-alpha-a7-a7r-a7s"], ["sony-alpha-a7-ii-kaplama", "K", "Sony", "Alpha A7 II", 2000, "kamera-sony-alpha-a7-mark-ii-a7r-ii"], ["sony-alpha-a7r-ii-kaplama", "K", "Sony", "Alpha A7R II", 2000, "kamera-sony-alpha-a7r-ii"], ["sony-alpha-a7s-ii-kaplama", "K", "Sony", "Alpha A7S II", 2000, "kamera-sony-alpha-a7s-ii"], ["sony-alpha-a9-kaplama", "K", "Sony", "Alpha A9", 2000, "kamera-sony-alpha-a9-mark-i"], ["sony-alpha-a99-ii-kaplama", "K", "Sony", "Alpha A99 II", 2000, "kamera-sony-alpha-a99-ii"], ["sony-rx100-iv-kaplama", "K", "Sony", "RX100 IV", 1750, "kamera-sony-dsc-rx100-iv"], ["sony-rx10-iii-kaplama", "K", "Sony", "RX10 III", 2500, "kamera-sony-rx10-iii"], ["sony-rx100-kaplama", "K", "Sony", "RX100", 1750, "kamera-sony-rx100-mark-i"], ["sony-wx500-kaplama", "K", "Sony", "WX500", 2000, "kamera-sony-wx500"], ["canon-eos-550d-kaplama", "K", "Canon", "EOS 550D", 1750, "kamera-canon-eos-550d"], ["canon-eos-500d-kaplama", "K", "Canon", "EOS 500D", 1750, "kamera-canon-eos-500d"], ["canon-eos-1100d-kaplama", "K", "Canon", "EOS 1100D", 1750, "kamera-canon-eos-1100d"], ["canon-eos-1300d-rebel-t6-kaplama", "K", "Canon", "EOS 1300D (Rebel T6)", 1750, "kamera-canon-eos-rebel-t6-1300d"], ["canon-eos-40d-kaplama", "K", "Canon", "EOS 40D", 2000, "kamera-canon-eos-40d"], ["canon-eos-60d-kaplama", "K", "Canon", "EOS 60D", 2000, "kamera-canon-eos-60d"], ["canon-eos-5d-mark-ii-kaplama", "K", "Canon", "EOS 5D Mark II", 2000, "kamera-canon-eos-5d-mark-ii"], ["canon-eos-5d-mark-iii-kaplama", "K", "Canon", "EOS 5D Mark III", 2000, "kamera-canon-eos-5d-mark-iii"], ["canon-eos-5ds-r-kaplama", "K", "Canon", "EOS 5DS R", 2000, "kamera-canon-eos-5ds-r"], ["canon-eos-6d-kaplama", "K", "Canon", "EOS 6D", 2000, "kamera-canon-eos-6d-mark-i"], ["canon-eos-7d-kaplama", "K", "Canon", "EOS 7D", 2000, "kamera-canon-eos-7d"], ["canon-eos-7d-mark-ii-kaplama", "K", "Canon", "EOS 7D Mark II", 2000, "kamera-canon-eos-7d-mark-ii"], ["canon-eos-m-kaplama", "K", "Canon", "EOS M", 1750, "kamera-canon-eos-m"], ["canon-eos-m3-kaplama", "K", "Canon", "EOS M3", 1750, "kamera-canon-eos-m3"], ["canon-eos-m5-kaplama", "K", "Canon", "EOS M5", 1750, "kamera-canon-eos-m5"], ["canon-eos-m6-kaplama", "K", "Canon", "EOS M6", 1750, "kamera-canon-eos-m6"], ["canon-eos-m6-mark-ii-kaplama", "K", "Canon", "EOS M6 Mark II", 1750, "kamera-canon-eos-m6-mark-ii"], ["canon-eos-r-kaplama", "K", "Canon", "EOS R", 2000, "kamera-canon-eos-r"], ["canon-eos-70d-kaplama", "K", "Canon", "EOS 70D", 2000, "kamera-canon-eos-70d"], ["canon-eos-80d-kaplama", "K", "Canon", "EOS 80D", 2000, "kamera-canon-eos-80d"], ["canon-eos-77d-kaplama", "K", "Canon", "EOS 77D", 2000, "kamera-canon-eos-77d"], ["canon-eos-800d-kaplama", "K", "Canon", "EOS 800D", 1750, "kamera-canon-eos-800d"], ["canon-eos-750d-t6i-kaplama", "K", "Canon", "EOS 750D (T6i)", 1750, "kamera-canon-eos-750d-t6i"], ["canon-eos-700d-t5i-kaplama", "K", "Canon", "EOS 700D (T5i)", 1750, "kamera-canon-eos-700d-t5i"], ["canon-eos-650d-kaplama", "K", "Canon", "EOS 650D", 1750, "kamera-canon-eos-650d"], ["canon-eos-600d-kaplama", "K", "Canon", "EOS 600D", 1750, "kamera-canon-eos-600d"], ["canon-eos-50d-kaplama", "K", "Canon", "EOS 50D", 2000, "kamera-canon-eos-50d"], ["canon-eos-1d-mark-iv-kaplama", "K", "Canon", "EOS-1D Mark IV", 2500, "kamera-canon-eos-1d-mark-iv"], ["canon-eos-1d-x-mark-ii-kaplama", "K", "Canon", "EOS-1D X Mark II", 2500, "kamera-canon-eos-1dx-mark-ii"], ["canon-eos-1500d-rebel-t7-kaplama", "K", "Canon", "EOS 1500D (Rebel T7)", 1750, "kamera-canon-eos-rebel-t7-1500d"], ["canon-eos-1d-x-kaplama", "K", "Canon", "EOS-1D X", 2500, "kamera-canon-eos-1dx"], ["canon-eos-1d-x-mark-iii-kaplama", "K", "Canon", "EOS-1D X Mark III", 2500, "kamera-canon-eos-1dx-mark-iii"], ["canon-eos-5d-kaplama", "K", "Canon", "EOS 5D", 2000, "kamera-canon-eos-5d-mark-i"], ["canon-eos-m10-kaplama", "K", "Canon", "EOS M10", 1750, "kamera-canon-eos-m10"], ["canon-eos-r6-v-kaplama", "K", "Canon", "EOS R6 V", 2000, "kamera-canon-eos-r6-v"], ["canon-eos-300x-kaplama", "K", "Canon", "EOS 300X", 1750, "kamera-canon-eos-300x"], ["canon-eos-c50-kaplama", "K", "Canon", "EOS C50", 2500, "kamera-canon-eos-c50"], ["nikon-d300-kaplama", "K", "Nikon", "D300", 2000, "kamera-nikon-d300"], ["nikon-d300s-kaplama", "K", "Nikon", "D300S", 2000, "kamera-nikon-d300s"], ["nikon-d3100-kaplama", "K", "Nikon", "D3100", 1750, "kamera-nikon-d3100"], ["nikon-d3300-kaplama", "K", "Nikon", "D3300", 1750, "kamera-nikon-d3300"], ["nikon-d4s-kaplama", "K", "Nikon", "D4s", 2500, "kamera-nikon-d4s"], ["nikon-d5-kaplama", "K", "Nikon", "D5", 2500, "kamera-nikon-d5"], ["nikon-d5200-kaplama", "K", "Nikon", "D5200", 1750, "kamera-nikon-d5200"], ["nikon-d5300-kaplama", "K", "Nikon", "D5300", 1750, "kamera-nikon-d5300"], ["nikon-d5600-kaplama", "K", "Nikon", "D5600", 1750, "kamera-nikon-d5600"], ["nikon-d600-d610-kaplama", "K", "Nikon", "D600 / D610", 2000, "kamera-nikon-d600-d610"], ["nikon-d700-kaplama", "K", "Nikon", "D700", 2000, "kamera-nikon-d700"], ["nikon-d7000-kaplama", "K", "Nikon", "D7000", 2000, "kamera-nikon-d7000"], ["nikon-d7100-d7200-kaplama", "K", "Nikon", "D7100 / D7200", 2000, "kamera-nikon-d7100-d7200"], ["nikon-d750-kaplama", "K", "Nikon", "D750", 2000, "kamera-nikon-d750"], ["nikon-d80-kaplama", "K", "Nikon", "D80", 2000, "kamera-nikon-d80"], ["nikon-d800-kaplama", "K", "Nikon", "D800", 2000, "kamera-nikon-d800"], ["nikon-d800e-kaplama", "K", "Nikon", "D800E", 2000, "kamera-nikon-d800e"], ["nikon-d810-kaplama", "K", "Nikon", "D810", 2000, "kamera-nikon-d810"], ["nikon-d90-kaplama", "K", "Nikon", "D90", 2000, "kamera-nikon-d90"], ["nikon-df-kaplama", "K", "Nikon", "Df", 2000, "kamera-nikon-df"], ["nikon-coolpix-a900-kaplama", "K", "Nikon", "Coolpix A900", 2000, "kamera-nikon-coolpix-a900"], ["fujifilm-gfx-50s-kaplama", "K", "Fujifilm", "GFX 50S", 2000, "kamera-fujifilm-gfx-50s"], ["fujifilm-x-a2-kaplama", "K", "Fujifilm", "X-A2", 1750, "kamera-fujifilm-x-a2"], ["fujifilm-x-pro1-kaplama", "K", "Fujifilm", "X-Pro1", 2000, "kamera-fujifilm-x-pro-1"], ["fujifilm-x-t1-kaplama", "K", "Fujifilm", "X-T1", 2000, "kamera-fujifilm-x-t1"], ["fujifilm-x-t100-kaplama", "K", "Fujifilm", "X-T100", 2000, "kamera-fujifilm-x-t100"], ["fujifilm-x-t200-kaplama", "K", "Fujifilm", "X-T200", 2000, "kamera-fujifilm-x-t200"], ["fujifilm-x100-kaplama", "K", "Fujifilm", "X100", 1750, "kamera-fujifilm-x100"], ["fujifilm-x100f-kaplama", "K", "Fujifilm", "X100F", 1750, "kamera-fujifilm-x100f"], ["fujifilm-x-h1-kaplama", "K", "Fujifilm", "X-H1", 2000, "kamera-fujifilm-x-h1"], ["panasonic-lumix-dc-s1r-kaplama", "K", "Panasonic", "Lumix DC-S1R", 2000, "kamera-panasonic-lumix-dc-s1r"], ["panasonic-lumix-s1h-kaplama", "K", "Panasonic", "Lumix S1H", 2000, "kamera-panasonic-lumix-s1h"], ["panasonic-lumix-tz200-kaplama", "K", "Panasonic", "Lumix TZ200", 1750, "kamera-panasonic-lumix-tz200"], ["panasonic-lumix-dmc-gh4-kaplama", "K", "Panasonic", "Lumix DMC-GH4", 2000, "kamera-panasonic-lumix-dmc-gh4"], ["panasonic-lumix-dmc-gf1-pro-kaplama", "K", "Panasonic", "Lumix DMC-GF1 Pro", 1750, "kamera-panasonic-lumix-dmc-gf1-pro"], ["panasonic-lumix-dmc-gh2-kaplama", "K", "Panasonic", "Lumix DMC-GH2", 2000, "kamera-panasonic-lumix-dmc-gh2"], ["olympus-pen-f-kaplama", "K", "Olympus", "PEN-F", 2000, "kamera-olympus-pen-f"], ["ricoh-gr-iii-kaplama", "K", "Ricoh", "GR III", 1750, "kamera-ricoh-gr-iii"], ["sony-alpha-nex-5-kaplama", "K", "Sony", "Alpha NEX-5", 1750, "kamera-sony-alpha-nex-5"], ["sony-alpha-nex-5r-kaplama", "K", "Sony", "Alpha NEX-5R", 1750, "kamera-sony-alpha-nex-5r"], ["sony-alpha-nex-6-kaplama", "K", "Sony", "Alpha NEX-6", 1750, "kamera-sony-alpha-nex-6"], ["nikon-d200-kaplama", "K", "Nikon", "D200", 2000, "kamera-nikon-d200"], ["nikon-d3-kaplama", "K", "Nikon", "D3", 2500, "kamera-nikon-d3"], ["nikon-d3s-kaplama", "K", "Nikon", "D3s", 2500, "kamera-nikon-d3s"], ["fujifilm-x-a10-kaplama", "K", "Fujifilm", "X-A10", 1750, "kamera-fujifilm-x-a10"], ["fujifilm-x-a3-kaplama", "K", "Fujifilm", "X-A3", 1750, "kamera-fujifilm-x-a3"], ["fujifilm-x-a5-kaplama", "K", "Fujifilm", "X-A5", 1750, "kamera-fujifilm-x-a5"], ["fujifilm-x-e1-kaplama", "K", "Fujifilm", "X-E1", 2000, "kamera-fujifilm-x-e1"], ["fujifilm-x-e2-kaplama", "K", "Fujifilm", "X-E2", 2000, "kamera-fujifilm-x-e2"], ["fujifilm-x-e3-kaplama", "K", "Fujifilm", "X-E3", 2000, "kamera-fujifilm-x-e3"], ["fujifilm-x-t10-kaplama", "K", "Fujifilm", "X-T10", 1750, "kamera-fujifilm-x-t10"], ["fujifilm-x-t2-kaplama", "K", "Fujifilm", "X-T2", 2000, "kamera-fujifilm-x-t2"], ["leica-sl2-kaplama", "K", "Leica", "SL2", 2000, "kamera-leica-sl2"], ["ricoh-gr-iv-kaplama", "K", "Ricoh", "GR IV", 1750, "kamera-ricoh-gr-iv"], ["blackmagic-pocket-cinema-camera-6k-kaplama", "K", "Blackmagic", "Pocket Cinema Camera 6K", 2000, "kamera-blackmagic-design-pocket-cinema-camera-6k"], ["sony-alpha-nex-7-kaplama", "K", "Sony", "Alpha NEX-7", 1750, "kamera-sony-alpha-nex-7"], ["sony-alpha-nex-c3-kaplama", "K", "Sony", "Alpha NEX-C3", 1750, "kamera-sony-alpha-nex-c3"], ["fujifilm-x-t20-kaplama", "K", "Fujifilm", "X-T20", 1750, "kamera-fujifilm-x-t20"], ["dji-air-2s-kaplama", "D", "DJI", "Air 2S", 3000, "drone-dji-air-2s"], ["dji-mavic-3-classic-kaplama", "D", "DJI", "Mavic 3 Classic", 3000, "drone-dji-mavic-3-classic"], ["dji-phantom-3-kaplama", "D", "DJI", "Phantom 3", 3500, "drone-dji-phantom-3"], ["dji-mavic-4-pro-kaplama", "D", "DJI", "Mavic 4 Pro", 3000, "drone-dji-mavic-4-pro"], ["dji-mavic-pro-kaplama", "D", "DJI", "Mavic Pro", 3000, "drone-dji-mavic-pro"], ["dji-avata-2-kaplama", "D", "DJI", "Avata 2", 3000, "drone-dji-avata-2"], ["dji-avata-360-kaplama", "D", "DJI", "Avata 360", 3000, "drone-dji-avata-360"], ["dji-neo-2-kaplama", "D", "DJI", "Neo 2", 2000, "drone-dji-neo-2"], ["gopro-hero-8-black-kaplama", "A", "GoPro", "Hero 8 Black", 1500, "aksiyon-kamera-gopro-hero-8-black"], ["gopro-hero-7-black-kaplama", "A", "GoPro", "Hero 7 Black", 1500, "aksiyon-kamera-gopro-hero-7-black"], ["gopro-hero-5-kaplama", "A", "GoPro", "Hero 5", 1500, "aksiyon-kamera-gopro-hero-5"], ["gopro-hero-7-silver-white-kaplama", "A", "GoPro", "Hero 7 Silver / White", 1500, "aksiyon-kamera-gopro-hero-7-silver-white"], ["gopro-max-kaplama", "A", "GoPro", "Max", 1500, "aksiyon-kamera-gopro-max"], ["dji-osmo-action-2-kaplama", "A", "DJI", "Osmo Action 2", 1500, "aksiyon-kamera-dji-action-2"], ["dji-osmo-pocket-kaplama", "A", "DJI", "Osmo Pocket", 1500, "aksiyon-kamera-dji-osmo-pocket"], ["dji-osmo-pocket-2-kaplama", "A", "DJI", "Osmo Pocket 2", 1500, "aksiyon-kamera-dji-osmo-pocket-2"], ["dji-osmo-pocket-4-kaplama", "A", "DJI", "Osmo Pocket 4", 1500, "aksiyon-kamera-dji-osmo-pocket-4"], ["sjcam-sj4000-wifi-kaplama", "A", "SJCAM", "SJ4000 Wifi", 1500, "aksiyon-kamera-sjcam-sj4000-wifi"], ["nikon-24-70mm-f2-8-s-lens-kaplama", "L", "Nikon", "24-70mm F2.8 S", 1750, "lens-nikon-24-70mm-f2-8-s"], ["nikon-85mm-f1-8-s-lens-kaplama", "L", "Nikon", "85mm F1.8 S", 1500, "lens-nikon-85mm-f1-8-s"], ["sony-24mm-f1-4-gm-lens-kaplama", "L", "Sony", "24mm F1.4 GM", 1500, "lens-sony-24mm-f1-4-gm"], ["sony-24-70mm-f2-8-gm-lens-kaplama", "L", "Sony", "24-70mm f2.8 GM", 1750, "lens-sony-24-70mm-f2-8-gm"], ["sony-50mm-f2-8-macro-lens-kaplama", "L", "Sony", "50mm f2.8 Macro", 1250, "lens-sony-50mm-f2-8-macro"], ["sony-55mm-f1-8-za-lens-kaplama", "L", "Sony", "55mm f1.8 ZA", 1250, "lens-sony-55mm-f1-8-za"], ["canon-ef-100-400mm-f4-5-5-6-l-is-ii-usm-lens-kaplama", "L", "Canon", "EF 100-400mm f4.5-5.6 L IS II USM", 2500, "lens-canon-ef-100-400mm-f4-5-5-6-l-is-ii-usm"], ["canon-ef-100mm-f2-8l-macro-is-usm-lens-kaplama", "L", "Canon", "EF 100mm f2.8L Macro IS USM", 1500, "lens-canon-ef-100mm-f2-8l-macro-is-usm"], ["canon-ef-11-24mm-f4-l-usm-lens-kaplama", "L", "Canon", "EF 11-24mm F4 L USM", 1250, "lens-canon-ef-11-24mm-f4-l-usm"], ["canon-ef-16-35mm-f2-8-l-iii-usm-lens-kaplama", "L", "Canon", "EF 16-35mm F2.8 L III USM", 1250, "lens-canon-ef-16-35mm-f2-8-l-iii-usm"], ["canon-ef-16-35mm-f4-l-is-usm-lens-kaplama", "L", "Canon", "EF 16-35mm F4 L IS USM", 1250, "lens-canon-ef-16-35mm-f4-l-is-usm"], ["canon-ef-24-105mm-f4-l-is-ii-usm-lens-kaplama", "L", "Canon", "EF 24-105mm F4 L IS II USM", 1500, "lens-canon-ef-24-105mm-f4-l-is-ii-usm"], ["canon-ef-24-70mm-f2-8-l-ii-usm-lens-kaplama", "L", "Canon", "EF 24-70mm F2.8 L II USM", 1500, "lens-canon-ef-24-70mm-f2-8-l-ii-usm"], ["canon-ef-35mm-f1-4l-ii-usm-lens-kaplama", "L", "Canon", "EF 35mm f1.4L II USM", 1250, "lens-canon-ef-35mm-f1-4l-ii-usm"], ["canon-ef-50mm-f1-2-l-usm-lens-kaplama", "L", "Canon", "EF 50mm F1.2 L USM", 1250, "lens-canon-ef-50mm-f1-2-l-usm"], ["canon-ef-50mm-f1-8-stm-lens-kaplama", "L", "Canon", "EF 50mm F1.8 STM", 1250, "lens-canon-ef-50mm-f1-8-stm"], ["canon-ef-70-300mm-f4-5-6-l-is-usm-lens-kaplama", "L", "Canon", "EF 70-300mm F4-5.6 L IS USM", 2000, "lens-canon-ef-70-300mm-f4-5-6-l-is-usm"], ["canon-ef-8-15mm-f4-l-fisheye-usm-lens-kaplama", "L", "Canon", "EF 8-15mm F4 L Fisheye USM", 1250, "lens-canon-ef-8-15mm-f4-l-fisheye-usm"], ["canon-ef-85mm-f1-4l-is-usm-lens-kaplama", "L", "Canon", "EF 85mm f1.4L IS USM", 1500, "lens-canon-ef-85mm-f1-4l-is-usm"], ["canon-ef-85mm-f1-8-usm-lens-kaplama", "L", "Canon", "EF 85mm f1.8 USM", 1500, "lens-canon-ef-85mm-f1-8-usm"], ["canon-ef-m-22mm-f2-stm-lens-kaplama", "L", "Canon", "EF-M 22mm f2 STM", 1250, "lens-canon-ef-m-22mm-f2-stm"], ["canon-ef-s-10-18mm-f4-5-5-6-is-stm-lens-kaplama", "L", "Canon", "EF-S 10-18mm F4.5-5.6 IS STM", 1250, "lens-canon-ef-s-10-18mm-f4-5-5-6-is-stm"], ["canon-ef-s-10-22mm-f3-5-4-5-usm-lens-kaplama", "L", "Canon", "EF-S 10-22mm f3.5-4.5 USM", 1250, "lens-canon-ef-s-10-22mm-f3-5-4-5-usm"], ["canon-ef-s-18-135mm-f3-5-5-6-is-stm-lens-kaplama", "L", "Canon", "EF-S 18-135mm F3.5-5.6 IS STM", 1500, "lens-canon-ef-s-18-135mm-f3-5-5-6-is-stm"], ["canon-ef-s-18-55mm-f3-5-5-6-is-ii-lens-kaplama", "L", "Canon", "EF-S 18-55mm F3.5-5.6 IS II", 1250, "lens-canon-ef-s-18-55mm-f3-5-5-6-is-ii"], ["canon-ef-s-55-250mm-f4-5-6-is-stm-lens-kaplama", "L", "Canon", "EF-S 55-250mm f4-5.6 IS STM", 1500, "lens-canon-ef-s-55-250mm-f4-5-6-is-stm"], ["canon-rf-24-105mm-f4-7-1-is-stm-lens-kaplama", "L", "Canon", "RF 24-105mm F4-7.1 IS STM", 1500, "lens-canon-rf-24-105mm-f4-7-1-is-stm"], ["canon-rf-28-70mm-f2-8-is-stm-lens-kaplama", "L", "Canon", "RF 28-70mm F2.8 IS STM", 1500, "lens-canon-rf-28-70mm-f2-8-is-stm"], ["canon-rf-28-70mm-f2-l-usm-lens-kaplama", "L", "Canon", "RF 28-70mm f2 L USM", 1500, "lens-canon-rf-28-70mm-f2-l-usm"], ["canon-rf-50mm-f1-2-l-usm-lens-kaplama", "L", "Canon", "RF 50mm F1.2 L USM", 1250, "lens-canon-rf-50mm-f1-2-l-usm"], ["canon-rf-70-200mm-f2-8-l-is-usm-lens-kaplama", "L", "Canon", "RF 70-200mm F2.8 L IS USM", 2000, "lens-canon-rf-70-200mm-f2-8-l-is-usm"], ["canon-rf-85mm-f1-4l-vcm-lens-kaplama", "L", "Canon", "RF 85mm f1.4L VCM", 1500, "lens-canon-rf-85mm-f1-4l-vcm"], ["canon-rf-85mm-f2-macro-is-stm-lens-kaplama", "L", "Canon", "RF 85mm F2 Macro IS STM", 1500, "lens-canon-rf-85mm-f2-macro-is-stm"], ["canon-rf-s-18-150mm-f3-5-6-3-is-stm-lens-kaplama", "L", "Canon", "RF-S 18-150mm F3.5-6.3 IS STM", 1500, "lens-canon-rf-s-18-150mm-f3-5-6-3-is-stm"], ["fujifilm-gf-45-100mm-f4-r-lm-ois-wr-lens-kaplama", "L", "Fujifilm", "GF 45-100mm f4 R LM OIS WR", 1500, "lens-fujifilm-gf-45-100mm-f4-r-lm-ois-wr"], ["fujifilm-xf-10-24mm-f4-r-ois-lens-kaplama", "L", "Fujifilm", "XF 10-24mm f4 R OIS", 1250, "lens-fujifilm-xf-10-24mm-f4-r-ois"], ["fujifilm-xf-16mm-f1-4-r-wr-lens-kaplama", "L", "Fujifilm", "XF 16mm f1.4 R WR", 1250, "lens-fujifilm-xf-16mm-f1-4-r-wr"], ["fujifilm-xf-18-55mm-f2-8-4-r-lm-ois-lens-kaplama", "L", "Fujifilm", "XF 18-55mm F2.8-4 R LM OIS", 1250, "lens-fujifilm-xf-18-55mm-f2-8-4-r-lm-ois"], ["fujifilm-xf-35mm-f1-4-r-lens-kaplama", "L", "Fujifilm", "XF 35mm f1.4 R", 1250, "lens-fujifilm-xf-35mm-f1-4-r"], ["fujifilm-xf-50-140mm-f2-8-r-lm-ois-wr-lens-kaplama", "L", "Fujifilm", "XF 50-140mm F2.8 R LM OIS WR", 1500, "lens-fujifilm-xf-50-140mm-f2-8-r-lm-ois-wr"], ["fujifilm-xf-56mm-f1-2-r-lens-kaplama", "L", "Fujifilm", "XF 56mm f1.2 R", 1250, "lens-fujifilm-xf-56mm-f1-2-r"], ["fujifilm-xf-90mm-f2-r-lm-wr-lens-kaplama", "L", "Fujifilm", "XF 90mm f2 R LM WR", 1500, "lens-fujifilm-xf-90mm-f2-r-lm-wr"], ["nikon-14-24mm-f2-8-nano-lens-kaplama", "L", "Nikon", "14-24mm f2.8 Nano", 1750, "lens-nikon-14-24mm-f2-8-nano"], ["nikon-18-55mm-f3-5-5-6g-vr-dx-lens-kaplama", "L", "Nikon", "18-55mm f3.5-5.6G VR DX", 1250, "lens-nikon-18-55mm-f3-5-5-6g-vr-dx"], ["nikon-24-70mm-f2-8-vr-nano-lens-kaplama", "L", "Nikon", "24-70mm F2.8 VR Nano", 1750, "lens-nikon-24-70mm-f2-8-vr-nano"], ["nikon-24-70mm-nano-lens-kaplama", "L", "Nikon", "24-70mm Nano", 1500, "lens-nikon-24-70mm-nano"], ["nikon-24mm-f1-4-lens-kaplama", "L", "Nikon", "24mm f1.4", 1500, "lens-nikon-24mm-f1-4"], ["nikon-50mm-f1-8g-af-s-lens-kaplama", "L", "Nikon", "50mm F1.8G AF-S", 1250, "lens-nikon-50mm-f1-8g-af-s"], ["nikon-70-200mm-f2-8e-fl-ed-af-s-vr-lens-kaplama", "L", "Nikon", "70-200mm F2.8E FL ED AF-S VR", 2000, "lens-nikon-70-200mm-f2-8e-fl-ed-af-s-vr"], ["nikon-70-300mm-vr-af-p-f4-5-6-3-dx-ed-lens-kaplama", "L", "Nikon", "70-300mm VR AF-P f4.5-6.3 DX ED", 2000, "lens-nikon-70-300mm-vr-af-p-f4-5-6-3-dx-ed"], ["nikon-80-400mm-f4-5-5-6g-af-s-ed-vr-nano-lens-kaplama", "L", "Nikon", "80-400mm f4.5-5.6G AF-S ED VR Nano", 2500, "lens-nikon-80-400mm-f4-5-5-6g-af-s-ed-vr-nano"], ["nikon-85mm-f1-4-nano-lens-kaplama", "L", "Nikon", "85mm F1.4 Nano", 1500, "lens-nikon-85mm-f1-4-nano"], ["nikon-85mm-f1-4g-af-s-lens-kaplama", "L", "Nikon", "85mm F1.4G AF-S", 1500, "lens-nikon-85mm-f1-4g-af-s"], ["nikon-85mm-f1-8g-af-s-lens-kaplama", "L", "Nikon", "85mm F1.8G AF-S", 1500, "lens-nikon-85mm-f1-8g-af-s"], ["nikon-af-nikkor-50mm-f1-4-d-lens-kaplama", "L", "Nikon", "AF Nikkor 50mm f1.4 D", 1500, "lens-nikon-af-nikkor-50mm-f1-4-d"], ["nikon-af-s-105mm-1-4-nano-lens-kaplama", "L", "Nikon", "AF-S 105mm 1.4 Nano", 1500, "lens-nikon-af-s-105mm-1-4-nano"], ["nikon-af-s-105mm-f1-4e-ed-nano-lens-kaplama", "L", "Nikon", "AF-S 105mm F1.4E ED Nano", 1750, "lens-nikon-af-s-105mm-f1-4e-ed-nano"], ["nikon-af-s-105mm-f2-8-vr-micro-nano-lens-kaplama", "L", "Nikon", "AF-S 105mm F2.8 VR Micro Nano", 1500, "lens-nikon-af-s-105mm-f2-8-vr-micro-nano"], ["nikon-af-s-14-24mm-f2-8g-ed-lens-kaplama", "L", "Nikon", "AF-S 14-24mm f2.8G ED", 1750, "lens-nikon-af-s-14-24mm-f2-8g-ed"], ["nikon-af-s-16-35mm-f4-vr-nano-lens-kaplama", "L", "Nikon", "AF-S 16-35mm f4 VR Nano", 1500, "lens-nikon-af-s-16-35mm-f4-vr-nano"], ["nikon-af-s-16-35mm-f4g-ed-vr-lens-kaplama", "L", "Nikon", "AF-S 16-35mm f4G ED VR", 1500, "lens-nikon-af-s-16-35mm-f4g-ed-vr"], ["nikon-af-s-18-105mm-f3-5-5-6-g-ed-vr-dx-nikkor-lens-kaplama", "L", "Nikon", "AF-S 18-105mm F3.5-5.6 G ED VR DX NIKKOR", 1500, "lens-nikon-af-s-18-105mm-f3-5-5-6-g-ed-vr-dx-nikkor"], ["nikon-af-s-24-120mm-f4g-ed-vr-nano-lens-kaplama", "L", "Nikon", "AF-S 24-120mm F4G ED VR Nano", 1500, "lens-nikon-af-s-24-120mm-f4g-ed-vr-nano"], ["nikon-af-s-24mm-f1-4g-ed-nano-lens-kaplama", "L", "Nikon", "AF-S 24mm f1.4G ED Nano", 1500, "lens-nikon-af-s-24mm-f1-4g-ed-nano"], ["nikon-af-s-28mm-f1-8g-nano-lens-kaplama", "L", "Nikon", "AF-S 28mm f1.8G Nano", 1250, "lens-nikon-af-s-28mm-f1-8g-nano"], ["nikon-af-s-300mm-f4-d-if-ed-lens-kaplama", "L", "Nikon", "AF-S 300mm f4 D IF-ED", 2500, "lens-nikon-af-s-300mm-f4-d-if-ed"], ["nikon-af-s-35mm-f1-4g-nano-lens-kaplama", "L", "Nikon", "AF-S 35mm F1.4G Nano", 1500, "lens-nikon-af-s-35mm-f1-4g-nano"], ["nikon-af-s-50mm-f1-8g-lens-kaplama", "L", "Nikon", "AF-S 50mm F1.8G", 1250, "lens-nikon-af-s-50mm-f1-8g"], ["nikon-af-s-70-200mm-f2-8e-fl-ed-vr-lens-kaplama", "L", "Nikon", "AF-S 70-200mm f2.8E FL ED VR", 2000, "lens-nikon-af-s-70-200mm-f2-8e-fl-ed-vr"], ["nikon-af-s-85mm-f1-4g-nano-lens-kaplama", "L", "Nikon", "AF-S 85mm f1.4G Nano", 1500, "lens-nikon-af-s-85mm-f1-4g-nano"], ["nikon-af-s-dx-18-140mm-f3-5-5-6g-ed-vr-lens-kaplama", "L", "Nikon", "AF-S DX 18-140mm f3.5-5.6G ED VR", 1500, "lens-nikon-af-s-dx-18-140mm-f3-5-5-6g-ed-vr"], ["nikon-af-s-dx-55-300mm-f4-5-5-6-g-ed-vr-lens-kaplama", "L", "Nikon", "AF-S DX 55-300mm F4.5-5.6 G ED VR", 2000, "lens-nikon-af-s-dx-55-300mm-f4-5-5-6-g-ed-vr"], ["nikon-af-s-nikkor-24-70mm-f2-8e-ed-vr-lens-kaplama", "L", "Nikon", "AF-S NIKKOR 24-70mm F2.8E ED VR", 1750, "lens-nikon-af-s-nikkor-24-70mm-f2-8e-ed-vr"], ["nikon-af-s-nikkor-24mm-f1-8g-ed-lens-kaplama", "L", "Nikon", "AF-S NIKKOR 24mm f1.8G ED", 1250, "lens-nikon-af-s-nikkor-24mm-f1-8g-ed"], ["nikon-af-s-nikkor-50mm-f1-4-g-lens-kaplama", "L", "Nikon", "AF-S NIKKOR 50mm f1.4 G", 1500, "lens-nikon-af-s-nikkor-50mm-f1-4-g"], ["nikon-af-s-nikkor-85mm-f1-8-g-lens-kaplama", "L", "Nikon", "AF-S NIKKOR 85mm f1.8 G", 1500, "lens-nikon-af-s-nikkor-85mm-f1-8-g"], ["olympus-m-zuiko-digital-ed-45mm-f1-8-lens-kaplama", "L", "Olympus", "M.Zuiko Digital ED 45mm F1.8", 1250, "lens-olympus-m-zuiko-digital-ed-45mm-f1-8"], ["panasonic-leica-dg-nocticron-42-5mm-f1-2-asph-ois-lens-kaplama", "L", "Panasonic", "Leica DG Nocticron 42.5mm F1.2 ASPH OIS", 1750, "lens-panasonic-leica-dg-nocticron-42-5mm-f1-2-asph-ois"], ["panasonic-leica-dg-vario-elmarit-12-60mm-f2-8-4-asph-lens-kaplama", "L", "Panasonic", "Leica DG Vario-Elmarit 12-60mm f2.8-4 ASPH", 1500, "lens-panasonic-leica-dg-vario-elmarit-12-60mm-f2-8-4-asph"], ["panasonic-lumix-42-5mm-f1-2-lens-kaplama", "L", "Panasonic", "Lumix 42.5mm f1.2", 1750, "lens-panasonic-lumix-42-5mm-f1-2"], ["panasonic-lumix-s-24-105mm-f4-macro-o-i-s-lens-kaplama", "L", "Panasonic", "Lumix S 24-105mm F4 Macro O.I.S", 1500, "lens-panasonic-lumix-s-24-105mm-f4-macro-o-i-s"], ["panasonic-lumix-s-24mm-f1-8-lens-kaplama", "L", "Panasonic", "Lumix S 24mm F1.8", 1250, "lens-panasonic-lumix-s-24mm-f1-8"], ["panasonic-lumix-s-35mm-f1-8-lens-kaplama", "L", "Panasonic", "Lumix S 35mm F1.8", 1250, "lens-panasonic-lumix-s-35mm-f1-8"], ["panasonic-lumix-s-50mm-f1-8-lens-kaplama", "L", "Panasonic", "Lumix S 50mm F1.8", 1250, "lens-panasonic-lumix-s-50mm-f1-8"], ["panasonic-lumix-s-pro-50mm-f1-4-lens-kaplama", "L", "Panasonic", "Lumix S Pro 50mm f1.4", 1500, "lens-panasonic-lumix-s-pro-50mm-f1-4"], ["samyang-12mm-f2-0-lens-kaplama", "L", "Samyang", "12mm f2.0", 1250, "lens-samyang-12mm-f2-0"], ["samyang-35mm-1-5-lens-kaplama", "L", "Samyang", "35mm 1.5", 1500, "lens-samyang-35mm-1-5"], ["samyang-af-14mm-f2-8-fe-lens-kaplama", "L", "Samyang", "AF 14mm f2.8 FE", 1250, "lens-samyang-af-14mm-f2-8-fe"], ["samyang-fe-35mm-f1-4-af-lens-kaplama", "L", "Samyang", "FE 35mm F1.4 AF", 1500, "lens-samyang-fe-35mm-f1-4-af"], ["sony-18-105mm-f4-lens-kaplama", "L", "Sony", "18-105mm F4", 1500, "lens-sony-18-105mm-f4"], ["sony-50mm-f1-8-oss-sel-lens-kaplama", "L", "Sony", "50mm F1.8 OSS SEL", 1250, "lens-sony-50mm-f1-8-oss-sel"], ["sony-e-35mm-f1-8-oss-sel35f18-lens-kaplama", "L", "Sony", "E 35mm F1.8 OSS (SEL35F18)", 1250, "lens-sony-e-35mm-f1-8-oss-sel35f18"], ["sony-e-55-210mm-f4-5-6-3-oss-lens-kaplama", "L", "Sony", "E 55-210mm F4.5-6.3 OSS", 1500, "lens-sony-e-55-210mm-f4-5-6-3-oss"], ["sony-e-pz-18-105mm-f4-g-oss-lens-kaplama", "L", "Sony", "E PZ 18-105mm F4 G OSS", 1500, "lens-sony-e-pz-18-105mm-f4-g-oss"], ["sony-fe-16-25mm-f2-8-g-lens-kaplama", "L", "Sony", "FE 16-25mm F2.8 G", 1750, "lens-sony-fe-16-25mm-f2-8-g"], ["sony-fe-24-105mm-f4-g-oss-lens-kaplama", "L", "Sony", "FE 24-105mm F4 G OSS", 1500, "lens-sony-fe-24-105mm-f4-g-oss"], ["sony-fe-24-240mm-f3-5-6-3-oss-lens-kaplama", "L", "Sony", "FE 24-240mm f3.5-6.3 OSS", 1500, "lens-sony-fe-24-240mm-f3-5-6-3-oss"], ["sony-fe-24-50mm-f2-8-g-lens-kaplama", "L", "Sony", "FE 24-50mm F2.8 G", 1750, "lens-sony-fe-24-50mm-f2-8-g"], ["sony-fe-85mm-f1-8-lens-kaplama", "L", "Sony", "FE 85mm F1.8", 1500, "lens-sony-fe-85mm-f1-8"], ["sony-fe-carl-zeiss-24-70mm-f4-za-oss-vario-tessar-t-lens-kaplama", "L", "Sony", "FE Carl Zeiss 24-70mm F4 ZA OSS Vario-Tessar T", 1500, "lens-sony-fe-carl-zeiss-24-70mm-f4-za-oss-vario-tessar-t"], ["sony-fe-pz-28-135mm-f4-g-oss-lens-kaplama", "L", "Sony", "FE PZ 28-135mm F4 G OSS", 1500, "lens-sony-fe-pz-28-135mm-f4-g-oss"], ["tamron-17-28mm-f2-8-di-iii-rxd-for-sony-lens-kaplama", "L", "Tamron", "17-28mm F2.8 Di III RXD for Sony", 1750, "lens-tamron-17-28mm-f2-8-di-iii-rxd-for-sony"], ["tamron-17-35mm-f2-8-4-di-osd-lens-kaplama", "L", "Tamron", "17-35mm F2.8-4 DI OSD", 1250, "lens-tamron-17-35mm-f2-8-4-di-osd"], ["tamron-17-70mm-f2-8-di-iii-a-vc-rxd-for-sony-e-lens-kaplama", "L", "Tamron", "17-70mm f2.8 Di III-A VC RXD for Sony E", 1750, "lens-tamron-17-70mm-f2-8-di-iii-a-vc-rxd-for-sony-e"], ["tamron-24-70mm-f2-8-di-vc-usd-g2-lens-kaplama", "L", "Tamron", "24-70mm F2.8 Di VC USD G2", 1750, "lens-tamron-24-70mm-f2-8-di-vc-usd-g2"], ["tamron-28-200mm-f2-8-5-6-di-iii-rxd-for-sony-e-lens-kaplama", "L", "Tamron", "28-200mm F2.8-5.6 Di III RXD for Sony E", 1500, "lens-tamron-28-200mm-f2-8-5-6-di-iii-rxd-for-sony-e"], ["tamron-28-75mm-f2-8-di-iii-vxd-g2-for-sony-e-lens-kaplama", "L", "Tamron", "28-75mm f2.8 Di III VXD G2 for Sony E", 1750, "lens-tamron-28-75mm-f2-8-di-iii-vxd-g2-for-sony-e"], ["tamron-35-150mm-f2-2-8-di-iii-vxd-for-sony-e-lens-kaplama", "L", "Tamron", "35-150mm f2-2.8 Di III VXD for Sony E", 1500, "lens-tamron-35-150mm-f2-2-8-di-iii-vxd-for-sony-e"], ["tamron-70-300mm-f4-5-6-3-di-iii-rxd-for-sony-e-lens-kaplama", "L", "Tamron", "70-300mm F4.5-6.3 Di III RXD for Sony E", 2000, "lens-tamron-70-300mm-f4-5-6-3-di-iii-rxd-for-sony-e"], ["tamron-af-28-75mm-f2-8-xr-di-ld-lens-kaplama", "L", "Tamron", "AF 28-75mm f2.8 XR Di LD", 1500, "lens-tamron-af-28-75mm-f2-8-xr-di-ld"], ["tamron-sp-af-17-50mm-f2-8-xr-di-ii-ld-lens-kaplama", "L", "Tamron", "SP AF 17-50mm F2.8 XR Di II LD", 1250, "lens-tamron-sp-af-17-50mm-f2-8-xr-di-ii-ld"], ["viltrox-af-33mm-f1-4-xf-lens-kaplama", "L", "Viltrox", "AF 33mm F1.4 XF", 1250, "lens-viltrox-af-33mm-f1-4-xf"], ["viltrox-af-35mm-f1-8-z-lens-for-nikon-z-lens-kaplama", "L", "Viltrox", "AF 35mm f1.8 Z Lens for Nikon Z", 1250, "lens-viltrox-af-35mm-f1-8-z-lens-for-nikon-z"], ["viltrox-af-56mm-f1-4-e-for-sony-e-lens-kaplama", "L", "Viltrox", "AF 56mm F1.4 E for Sony E", 1250, "lens-viltrox-af-56mm-f1-4-e-for-sony-e"], ["zeiss-batis-40mm-f2-cf-for-sony-lens-kaplama", "L", "Zeiss", "Batis 40mm F2 CF for Sony", 1250, "lens-zeiss-batis-40mm-f2-cf-for-sony"], ["zeiss-batis-85mm-f1-8-for-sony-lens-kaplama", "L", "Zeiss", "Batis 85mm F1.8 for Sony", 1500, "lens-zeiss-batis-85mm-f1-8-for-sony"], ["dji-neo-kaplama", "D", "DJI", "Neo", 2000, "drone-dji-neo"], ["dji-goggles-3-kaplama", "D", "DJI", "Goggles 3", 1500, "drone-dji-goggles-3"], ["dji-mavic-3-pro-kaplama", "D", "DJI", "Mavic 3 Pro", 3000, "drone-dji-mavic-3-pro"], ["dji-mavic-air-kaplama", "D", "DJI", "Mavic Air", 3000, "drone-dji-mavic-air"], ["dji-mavic-mini-kaplama", "D", "DJI", "Mavic Mini", 2500, "drone-dji-mavic-mini"], ["dji-mavic-mini-2-kaplama", "D", "DJI", "Mavic Mini 2", 2500, "drone-dji-mavic-mini-2"], ["dji-rc-kaplama", "D", "DJI", "RC", 1500, "drone-dji-rc"], ["dji-rc-pro-kaplama", "D", "DJI", "RC Pro", 1500, "drone-dji-rc-pro"], ["dji-rc-n1-n2-n3-kaplama", "D", "DJI", "RC-N1 / N2 / N3", 1500, "drone-dji-rc-n1-n2-n3"], ["insta360-luna-ultra-kaplama", "A", "Insta360", "Luna Ultra", 1500, "aksiyon-kamera-insta360-luna-ultra"], ["dji-rs-3-mini-kaplama", "G", "DJI", "RS 3 Mini", 1500, "gimbal-dji-rs-3-mini"], ["dji-rs-4-kaplama", "G", "DJI", "RS 4", 1500, "gimbal-dji-rs-4"], ["dji-rs-4-mini-kaplama", "G", "DJI", "RS 4 Mini", 1500, "gimbal-dji-rs-4-mini"], ["dji-osmo-mobile-3-kaplama", "G", "DJI", "Osmo Mobile 3", 1500, "gimbal-dji-osmo-mobile-3"], ["dji-osmo-mobile-se-kaplama", "G", "DJI", "Osmo Mobile SE", 1500, "gimbal-dji-osmo-mobile-se"], ["dji-rs-2-kaplama", "G", "DJI", "RS 2", 1500, "gimbal-dji-rs-2"], ["dji-rs-3-pro-kaplama", "G", "DJI", "RS 3 Pro", 1500, "gimbal-dji-rs-3-pro"], ["dji-rs-5-kaplama", "G", "DJI", "RS 5", 1500, "gimbal-dji-rs-5"], ["dji-rsc-2-kaplama", "G", "DJI", "RSC 2", 1500, "gimbal-dji-rsc-2"], ["dji-ronin-sc-kaplama", "G", "DJI", "Ronin SC", 1500, "gimbal-dji-ronin-sc"], ["feiyu-a2000-kaplama", "G", "Feiyu", "A2000", 1500, "gimbal-feiyu-a2000"], ["zhiyun-plus-kaplama", "G", "Zhiyun", "Plus", 1500, "gimbal-zhiyun-plus"], ["zhiyun-weebill-kaplama", "G", "Zhiyun", "Weebill", 1500, "gimbal-zhiyun-weebill"], ["zhiyun-weebill-s-kaplama", "G", "Zhiyun", "Weebill S", 1500, "gimbal-zhiyun-weebill-s"]];
  var CDN = 'https://cdn.jsdelivr.net/gh/BedirhanAkyz/betaguard-onizleme@7e016882/img/';
  var WA = 'https://wa.me/905353211911';
  var TYPE = { K: 'Kamera', L: 'Lens', D: 'Drone', A: 'Aksiyon Kamera', G: 'Gimbal' };
  var DESEN = ['Line Black','Line White','Line Navy','Line Blue','Line Cyan','Line Red','Tactical Black','Tactical Grey','Tactical Green','Tactical Blue','Tactical Red','Carbon','Royal Black','Royal Navy','Royal Gold','Mono Black','Mono White','Mono Red','Mono Blue','Mono Green','Mono Yellow','Mono Orange','Mono Pink','Mono Brown','Topografik Black','Topografik White','Topografik Navy','Topografik Blue','Topografik Green','Topografik Red','Nexus White','Nexus Blue','Nexus Cyan','Nexus Red','Hexagonal Silver','Hexagonal Blue','Hexagonal Green','Hexagonal Red','Lego'];
  function slug(s){ return String(s).normalize('NFKD').replace(/[̀-ͯ]/g,'').replace(/ı/g,'i').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''); }
  var DSLUG = {}; DESEN.forEach(function(n){ DSLUG[slug(n)] = n; });
  var CATS = {
    K: { root: 'kamera', subs: [['Sony','sony-kamera'],['Canon','canon-kamera'],['Nikon','nikon-kamera'],['Fujifilm','fujifilm-kamera'],['Panasonic','panasonic-kamera']] },
    L: { root: 'lens', subs: [['Sony','sony-lens'],['Canon','canon-lens'],['Nikon','nikon-lens'],['Fujifilm','fujifilm-lens']] },
    D: { root: 'drone', subs: [['DJI','dji-drone']] },
    A: { root: 'aksiyon-kamera', subs: [['DJI Osmo','dji-osmo']] },
    G: { root: 'gimbal', subs: [] }
  };
  var TURCAT = { 'Kamera': '/kamera', 'Lens': '/lens', 'Drone': '/drone', 'Aksiyon Kamera': '/aksiyon-kamera', 'Gimbal': '/gimbal' };
  var BYSLUG = {}, BYKEY = {};
  D.forEach(function(d){ d = { s: d[0], t: d[1], b: d[2], m: d[3], p: d[4], f: d[5] }; BYSLUG[d.s] = d; BYKEY[(d.b + '|' + d.m).toLowerCase()] = d; d.key = searchKey(d); });
  var ALL = Object.keys(BYSLUG).map(function(k){ return BYSLUG[k]; });

  function esc(s){ return String(s).replace(/[&<>"']/g, function(c){ return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function fmt(n){ return Number(n).toLocaleString('tr-TR') + ' ₺'; }
  function img(d, desen){ return CDN + d.f + '/' + (desen || 'line-black') + '.webp'; }
  var COVERS = ['royal-gold','tactical-blue','line-cyan','hexagonal-red','topografik-navy','nexus-cyan','carbon','royal-navy','tactical-green','line-red','hexagonal-blue','nexus-red','topografik-red','tactical-red','royal-black','hexagonal-green'];
  function cover(d){ return COVERS[ALL.indexOf(d) % COVERS.length]; }
  function setCover(c, href){
    var dv = BYSLUG[href.split('?')[0].replace(/^\/|\/$/g, '')]; if (!dv) return href;
    var cv = cover(dv), url = img(dv, cv), nh = '/' + dv.s + '?desen=' + cv;
    [].forEach.call(c.querySelectorAll('a[href]'), function(a){ var h = a.getAttribute('href'); if (h && h.split('?')[0].replace(/\/$/, '') === '/' + dv.s && h !== nh) a.setAttribute('href', nh); });
    [].forEach.call(c.querySelectorAll('img'), function(im){
      if (im.closest('.bg26-cnt')) return;
      if (im.getAttribute('src') !== url) { im.removeAttribute('srcset'); im.removeAttribute('sizes'); im.setAttribute('src', url); im.style.objectFit = 'contain'; }
      var pc = im.parentElement; if (pc && pc.tagName === 'PICTURE') [].forEach.call(pc.querySelectorAll('source'), function(so){ so.remove(); });
    });
    return nh;
  }
  function cur(){ return BYSLUG[location.pathname.replace(/^\/|\/$/g, '')] || null; }
  function curDesen(){ var m = /[?&]desen=([a-z0-9-]+)/.exec(location.search); return m && DSLUG[m[1]] ? m[1] : 'line-black'; }
  function roman(s){ return s.replace(/\b(vi|v|iv|iii|ii)\b/g, function(r){ return { ii: '2', iii: '3', iv: '4', v: '5', vi: '6' }[r]; }); }
  function searchKey(d){
    var n = (d.b + ' ' + d.m + ' ' + (d.t === 'L' ? 'lens objektif' : TYPE[d.t])).toLowerCase();
    var r = roman(n.replace(/\bmark\s*/g, ''));
    var c = r.replace(/[^a-z0-9]/g, '');
    var m = r.replace(/\s+(\d)\b/g, 'm$1').replace(/[^a-z0-9]/g, '');
    return n + ' ' + r + ' ' + c + ' ' + m;
  }
  function find(q, type){
    q = roman(String(q || '').toLowerCase().replace(/\bmark\s*/g, '')).trim();
    var toks = q.split(/\s+/).filter(Boolean).map(function(t){ return t.replace(/[^a-z0-9.]/g, ''); }).filter(Boolean);
    return ALL.filter(function(d){
      if (type && d.t !== type) return false;
      return toks.every(function(t){ return d.key.indexOf(t) >= 0 || d.key.indexOf(t.replace(/\./g, '')) >= 0; });
    });
  }
  window.__bgIsDev = function(){ return !!cur(); };
  window.__bgDevices = ALL;

  /* ---------- css ---------- */
  var css = [
    /* urun karti: sade, tek tip gorsel karo */
    '.bg26-card-img{background:#fff!important;border-radius:16px!important;aspect-ratio:1/1;object-fit:contain!important;width:100%!important;height:auto!important;padding:0;box-sizing:border-box}',
    '.bg26-cnt{display:flex;width:100%;align-items:center;gap:6px;margin:4px 0 2px;font:600 11.5px/1.2 Manrope,sans-serif;color:#A9A59D}',
    '.bg26-cnt i{width:12px;height:12px;border-radius:50%;background:conic-gradient(#C9A45C,#2B6CB0,#C53030,#2F855A,#E2E8F0,#C9A45C);display:inline-block}',
    '.bg26-btn{background:#1A1A1D!important;border:1px solid #3A383F!important;border-radius:999px!important;cursor:pointer}',
    '.bg26-btn *{color:#F2F0EB!important}',
    '.bg26-btn:hover{border-color:#C9A45C!important}',
    '.bg26-hide{display:none!important}',
    /* marka cipleri */
    '.bg26-chips{display:flex;flex-wrap:wrap;justify-content:flex-start;gap:8px;margin:4px 0 12px}',
    '.bg26-chips a{display:inline-flex;align-items:center;gap:6px;padding:9px 16px;border:1px solid #2F2E33;border-radius:999px;background:#151517;color:#E7E4DE;text-decoration:none;font:600 13.5px/1 Manrope,sans-serif;transition:border-color .15s}',
    '.bg26-chips a:hover{border-color:#C9A45C}',
    '.bg26-chips a.on{background:#C9A45C;border-color:#C9A45C;color:#141210}',
    '.bg26-chips a small{font-size:11.5px;opacity:.7}',
    '.bg26-hint{display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:center;gap:10px 18px;margin:0 0 18px;font:500 13px/1.5 Manrope,sans-serif;color:#A9A59D}',
    '.bg26-hint b{color:#E2C285;font-weight:700}',
    '.bg26-hint a{color:#E2C285}',
    '.bg26-catdesc{width:100%;flex-basis:100%;box-sizing:border-box;margin:36px 0 12px;padding:24px 0 0;border-top:1px solid #2F2E33;align-self:stretch;font:400 14.5px/1.65 Manrope,sans-serif;color:#A9A59D}',
    '.bg26-catdesc .bg26-cd-body{max-width:760px}',
    '.bg26-catdesc h2{font:700 17px/1.3 Manrope,sans-serif;color:#E7E4DE;margin:0 0 10px}',
    '.bg26-catdesc p{margin:0 0 10px}.bg26-catdesc strong{color:#E7E4DE}.bg26-catdesc ul{margin:0 0 10px 18px;padding:0}.bg26-catdesc a{color:#E2C285}',
    /* setini tamamla */
    '.bg26-set{max-width:1192px;margin:40px auto 10px;padding:0 24px;box-sizing:border-box}',
    '.bg26-set-h{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:10px 24px;margin-bottom:16px}',
    '.bg26-set h2{margin:0;font:italic 800 30px/1.1 Archivo,sans-serif!important;color:#F2F0EB}',
    '.bg26-set p{margin:6px 0 0;font:400 14px/1.55 Manrope,sans-serif;color:#A9A59D}',
    '.bg26-off{display:inline-flex;gap:8px;align-items:center;padding:8px 14px;border:1px solid #3A3426;border-radius:999px;background:#1B1912;color:#E2C285;font:700 12.5px/1.3 Manrope,sans-serif}',
    '.bg26-row{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(200px,1fr);gap:14px;overflow-x:auto;padding-bottom:8px;scroll-snap-type:x mandatory}',
    '.bg26-row::-webkit-scrollbar{height:6px}.bg26-row::-webkit-scrollbar-thumb{background:#2F2E33;border-radius:9px}',
    '.bg26-it{scroll-snap-align:start;display:flex;flex-direction:column;border:1px solid #232227;border-radius:16px;background:#141416;overflow:hidden;text-decoration:none;color:#F2F0EB;transition:border-color .15s,transform .15s}',
    '.bg26-it:hover{border-color:#C9A45C;transform:translateY(-2px)}',
    '.bg26-it .im{position:relative;background:#fff;aspect-ratio:1/1;overflow:hidden}',
    '.bg26-it .im img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;padding:0;box-sizing:border-box}',
    '.bg26-it .tx{padding:12px 14px 14px;display:flex;flex-direction:column;gap:4px}',
    '.bg26-it .ty{font:700 10.5px/1 Manrope,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#C9A45C}',
    '.bg26-it .nm{font:700 14px/1.35 Manrope,sans-serif}',
    '.bg26-it .pr{font:600 13px/1.3 Manrope,sans-serif;color:#B9B5AD}',
    '.bg26-it .go{margin-top:6px;font:700 12.5px/1 Manrope,sans-serif;color:#E2C285}',
    '@media (max-width:640px){.bg26-set{padding:0 16px}.bg26-set h2{font-size:24px!important}.bg26-row{grid-auto-columns:72%}}',
    /* uyumluluk satiri */
    '.bg26-fit{display:inline-flex;align-items:center;gap:8px;margin:10px 0 2px;padding:7px 12px;border-radius:10px;background:#122017;border:1px solid #1F3A28;color:#9AE6B4;font:600 12.5px/1.35 Manrope,sans-serif}',
    '.bg26-fit svg{flex:none}',
    /* cihaz secici pencere */
    '.bg26-ov{position:fixed;inset:0;z-index:2147483000;background:rgba(8,8,9,.72);backdrop-filter:blur(4px);display:flex;align-items:flex-start;justify-content:center;padding:6vh 16px 16px;box-sizing:border-box}',
    '.bg26-md{width:100%;max-width:760px;max-height:86vh;display:flex;flex-direction:column;background:#121214;border:1px solid #2A292E;border-radius:20px;box-shadow:0 30px 80px rgba(0,0,0,.55);overflow:hidden;color:#F2F0EB;font-family:Manrope,sans-serif}',
    '.bg26-md-h{padding:20px 22px 14px;border-bottom:1px solid #222126}',
    '.bg26-md-t{display:flex;align-items:center;justify-content:space-between;gap:12px}',
    '.bg26-md-t h3{margin:0;font:italic 800 24px/1.1 Archivo,sans-serif!important}',
    '.bg26-x{width:36px;height:36px;border-radius:50%;border:1px solid #2F2E33;background:#18181A;color:#E7E4DE;font-size:20px;line-height:1;cursor:pointer}',
    '.bg26-ds{display:inline-flex;align-items:center;gap:8px;margin:8px 0 12px;font:600 13px/1.3 Manrope,sans-serif;color:#B9B5AD}',
    '.bg26-ds b{color:#E2C285}',
    '.bg26-in{width:100%;box-sizing:border-box;padding:13px 16px;border-radius:12px;border:1px solid #3A383F;background:#18181A;color:#F2F0EB;font:500 15px Manrope,sans-serif;outline:none}',
    '.bg26-in:focus{border-color:#C9A45C}',
    '.bg26-tabs{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px}',
    '.bg26-tabs button{padding:7px 13px;border-radius:999px;border:1px solid #2F2E33;background:#151517;color:#D6D2CA;font:600 12.5px Manrope,sans-serif;cursor:pointer}',
    '.bg26-tabs button.on{background:#C9A45C;border-color:#C9A45C;color:#141210}',
    '.bg26-list{overflow-y:auto;padding:10px 12px 6px}',
    '.bg26-li{display:grid;grid-template-columns:64px 1fr auto;align-items:center;gap:12px;padding:8px 10px;border-radius:12px;text-decoration:none;color:#F2F0EB}',
    '.bg26-li:hover,.bg26-li:focus{background:#1C1C1F;outline:none}',
    '.bg26-li .th{width:64px;height:48px;border-radius:8px;background:#F4F3F0;display:flex;align-items:center;justify-content:center;overflow:hidden}',
    '.bg26-li .th img{width:100%;height:100%;object-fit:contain}',
    '.bg26-li .n{font:700 14px/1.3 Manrope,sans-serif}.bg26-li .n small{display:block;font:500 12px/1.3 Manrope,sans-serif;color:#8E8A83}',
    '.bg26-li .p{font:700 13px Manrope,sans-serif;color:#E2C285;white-space:nowrap}',
    '.bg26-grp{padding:12px 10px 4px;font:700 11px/1 Manrope,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#8E8A83}',
    '.bg26-empty{padding:22px 12px;font:500 14px/1.6 Manrope,sans-serif;color:#B9B5AD}',
    '.bg26-md-f{padding:12px 22px 16px;border-top:1px solid #222126;font:500 13px/1.6 Manrope,sans-serif;color:#A9A59D}',
    '.bg26-md-f a{color:#E2C285}',
    '@media (max-width:640px){.bg26-ov{padding:0}.bg26-md{max-height:100vh;height:100%;border-radius:0}}',
    '.bg26-mm{position:fixed;z-index:2147482000;min-width:260px;padding:14px;background:#141416;border:1px solid #2A292E;border-radius:16px;box-shadow:0 24px 60px rgba(0,0,0,.5);display:none;font-family:Manrope,sans-serif}',
    '.bg26-mm.on{display:block}',
    '.bg26-mm b{display:block;margin:0 4px 8px;font:700 11px/1 Manrope,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#8E8A83}',
    '.bg26-mm a{display:flex;justify-content:space-between;gap:16px;padding:9px 10px;border-radius:10px;color:#F2F0EB;text-decoration:none;font:600 14px/1.2 Manrope,sans-serif}',
    '.bg26-mm a:hover{background:#1F1F23;color:#E2C285}',
    '.bg26-mm a small{color:#8E8A83;font-weight:500}',
    '.bg26-mm .all{margin-top:6px;border-top:1px solid #232227;padding-top:12px;color:#E2C285}',
    '.bg26-mm button{width:100%;margin-top:8px;padding:10px;border-radius:999px;border:1px solid #3A383F;background:#18181A;color:#F2F0EB;font:700 13px Manrope,sans-serif;cursor:pointer}',
    '.bg26-mm button:hover{border-color:#C9A45C}',
    /* cihaz sayfasi basligi */
    'html.bg26-dev [data-bg-ptitle]{font-size:38px!important;line-height:1.05!important}',
    'html.bg26-dev [data-bg-ptitle]::after{content:attr(data-bg26-sub)!important;color:#9AE6B4!important;font-weight:600!important;font-size:15px!important}',
    '@media (max-width:640px){html.bg26-dev [data-bg-ptitle]{font-size:30px!important}}',
    'html.bg26-dev .bg26-nodrone{display:none!important}',
    /* populer cihazlar */
    '.bg26-pop{max-width:1500px;margin:36px auto 0;padding:0 24px;box-sizing:border-box}',
    '.bg26-pop-h{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:10px 24px;margin-bottom:16px}',
    '.bg26-pop h2{margin:0;font:italic 800 34px/1.05 Archivo,sans-serif!important;color:#F2F0EB}',
    '.bg26-pop p{margin:6px 0 0;font:400 14.5px/1.55 Manrope,sans-serif;color:#A9A59D;max-width:560px}',
    '.bg26-pop-tabs{display:flex;flex-wrap:wrap;gap:6px}',
    '.bg26-pop-tabs a{padding:8px 14px;border-radius:999px;border:1px solid #2F2E33;background:#151517;color:#D6D2CA;text-decoration:none;font:600 12.5px Manrope,sans-serif}',
    '.bg26-pop-tabs a:hover{border-color:#C9A45C;color:#E2C285}',
    '.bg26-pop-g{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:14px}',
    '@media (max-width:1100px){.bg26-pop-g{grid-template-columns:repeat(4,minmax(0,1fr))}}',
    '@media (max-width:640px){.bg26-pop{padding:0 16px;margin-top:28px}.bg26-pop h2{font-size:26px!important}.bg26-pop-g{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}}',
    '.bg26-pop-g .bg26-it .im{aspect-ratio:1/1}',
    '.bg26-pop-more{display:flex;justify-content:center;margin-top:18px}',
    '.bg26-pop-more a{padding:12px 22px;border-radius:999px;border:1px solid #3A383F;color:#F2F0EB;text-decoration:none;font:700 13.5px Manrope,sans-serif}',
    '.bg26-pop-more a:hover{border-color:#C9A45C;color:#E2C285}',
    /* v27: akilli kategori izgarasi */
    '.bg27{width:100%;flex-basis:100%;box-sizing:border-box;margin:4px 0 28px}',
    '.bg27-h{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:10px 20px;margin:0 0 14px}',
    '.bg27-h h1{margin:0;font:italic 800 32px/1.05 Archivo,sans-serif!important;color:#F2F0EB}',
    '.bg27-h h1 small{display:block;margin-top:6px;font:500 13.5px/1.5 Manrope,sans-serif;color:#A9A59D;font-style:normal}',
    '.bg27-tools{display:flex;flex-wrap:wrap;align-items:center;gap:8px}',
    '.bg27-in{min-width:260px;padding:11px 14px 11px 38px;border:1px solid #2F2E33;border-radius:999px;background:#151517 url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23A9A59D%27 stroke-width=%272%27%3E%3Ccircle cx=%2711%27 cy=%2711%27 r=%277%27/%3E%3Cpath d=%27m20 20-3.5-3.5%27/%3E%3C/svg%3E") 13px center/16px no-repeat;color:#F2F0EB;font:500 14px Manrope,sans-serif;outline:none}',
    '.bg27-in:focus{border-color:#C9A45C}',
    '.bg27-sort{padding:11px 14px;border:1px solid #2F2E33;border-radius:999px;background:#151517;color:#D6D2CA;font:600 13px Manrope,sans-serif;cursor:pointer}',
    '.bg27-g{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}',
    '@media (max-width:1100px){.bg27-g{grid-template-columns:repeat(3,minmax(0,1fr))}}',
    '@media (max-width:640px){.bg27-g{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.bg27-h h1{font-size:26px!important}.bg27-in{min-width:0;flex:1}.bg27-tools{width:100%;flex-wrap:nowrap}html.bg27-on .bg26-hint span:nth-child(2){display:none}.bg27-c .nm{font-size:13.5px;min-height:0}.bg27-c .tx{padding:10px 11px 12px}.bg27-c .go{padding:8px 10px;font-size:12px}}',
    '.bg27-c{display:flex;flex-direction:column;border:1px solid #26252A;border-radius:16px;background:#141416;overflow:hidden;text-decoration:none;color:#F2F0EB;transition:border-color .2s,transform .2s}',
    '.bg27-c:hover{border-color:#C9A45C;transform:translateY(-2px)}',
    '.bg27-c .im{position:relative;aspect-ratio:1/1;background:#fff;overflow:hidden}',
    '.bg27-c .im img{width:100%;height:100%;object-fit:contain;display:block;transition:transform .35s}',
    '.bg27-c:hover .im img{transform:scale(1.04)}',
    '.bg27-c .im .tag{position:absolute;left:10px;top:10px;padding:5px 9px;border-radius:999px;background:#C9A45C;color:#141210;font:800 10.5px/1 Manrope,sans-serif;letter-spacing:.06em}',
    '.bg27-c .im .nw{background:#9AE6B4}',
    '.bg27-c .tx{display:flex;flex-direction:column;gap:3px;padding:12px 14px 14px}',
    '.bg27-c .ty{font:700 10.5px Manrope,sans-serif;letter-spacing:.1em;color:#C9A45C;text-transform:uppercase}',
    '.bg27-c .nm{font:700 15px/1.3 Manrope,sans-serif;color:#F2F0EB;min-height:2.6em}',
    '.bg27-c .pr{display:flex;justify-content:space-between;align-items:center;margin-top:4px;font:800 15px Manrope,sans-serif;color:#F2F0EB}',
    '.bg27-c .pr small{font:500 11.5px Manrope,sans-serif;color:#9AE6B4}',
    '.bg27-c .go{margin-top:10px;padding:10px 12px;border-radius:999px;border:1px solid #3A383F;text-align:center;font:700 13px Manrope,sans-serif;color:#F2F0EB;transition:background .2s,color .2s,border-color .2s}',
    '.bg27-c:hover .go{background:#C9A45C;border-color:#C9A45C;color:#141210}',
    '.bg27-more{display:flex;justify-content:center;gap:10px;margin:22px 0 0}',
    '.bg27-more button{padding:12px 24px;border-radius:999px;border:1px solid #3A383F;background:transparent;color:#F2F0EB;font:700 13.5px Manrope,sans-serif;cursor:pointer}',
    '.bg27-more button:hover{border-color:#C9A45C;color:#E2C285}',
    '.bg27-empty{padding:40px 20px;text-align:center;color:#A9A59D;font:500 14.5px/1.6 Manrope,sans-serif;border:1px dashed #2F2E33;border-radius:16px}',
    '.bg27-empty a{color:#E2C285}',
    'html.bg27-on .bg26-hide,html.bg27-on .bg27-ikas{display:none!important}',
    'html.bg27-on a[href*="?page="],html.bg27-on a[href*="&page="]{display:none!important}',
    /* gimbal (henuz ilan yok) ve fazla bolumler */
    '[data-bg-wall]{display:none!important}',
    /* urun sayfasi kargo satiri */
    '.bg26-ship{display:flex;flex-wrap:wrap;gap:6px 14px;margin:8px 0 4px;font:500 12.5px/1.5 Manrope,sans-serif;color:#A9A59D}',
    '.bg26-ship span{display:inline-flex;align-items:center;gap:6px}.bg26-ship b{color:#E7E4DE;font-weight:600}',
    /* sepet cekmecesi: setini tamamla */
    '.bg26-cart{margin:14px 0 6px;padding:14px;border:1px solid #2A292E;border-radius:14px;background:#141416;font-family:Manrope,sans-serif}',
    '.bg26-cart-h{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:10px}',
    '.bg26-cart-h b{font:700 13.5px/1.3 Manrope,sans-serif;color:#F2F0EB}.bg26-cart-h small{font:600 11.5px/1.3 Manrope,sans-serif;color:#E2C285}',
    '.bg26-cart-n{margin:0 0 10px;padding:8px 10px;border-radius:10px;background:#1B1912;border:1px solid #3A3426;color:#E2C285;font:600 12px/1.4 Manrope,sans-serif}',
    '.bg26-cart-g{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}',
    '.bg26-cart-g a{display:flex;gap:8px;align-items:center;padding:6px;border:1px solid #232227;border-radius:10px;background:#18181A;text-decoration:none;color:#F2F0EB}',
    '.bg26-cart-g a:hover{border-color:#C9A45C}',
    '.bg26-cart-g .im{width:54px;height:40px;border-radius:7px;background:#F4F3F0;flex:none;overflow:hidden}.bg26-cart-g .im img{width:100%;height:100%;object-fit:contain}',
    '.bg26-cart-g .n{font:600 11.5px/1.3 Manrope,sans-serif;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.bg26-cart-g .p{font:600 11px/1.2 Manrope,sans-serif;color:#A9A59D;margin-top:2px}',
    /* 404 */
    '.bg26-404{width:100%;box-sizing:border-box;min-height:60vh;display:flex;align-items:center;justify-content:center;padding:60px 24px;background:#0E0E0F;color:#F2F0EB;font-family:Manrope,sans-serif;text-align:center}',
    '.bg26-404>div{width:100%;max-width:720px;margin:0 auto}.bg26-404 h1{margin:0 0 10px;font:italic 800 40px/1.05 Archivo,sans-serif!important}.bg26-404 p{margin:0 auto 22px;max-width:520px;color:#A9A59D;font:400 15px/1.6 Manrope,sans-serif}',
    '.bg26-404 .r{display:flex;flex-wrap:wrap;gap:10px;justify-content:center}.bg26-404 .r a,.bg26-404 .r button{padding:12px 20px;border-radius:999px;border:1px solid #3A383F;background:#18181A;color:#F2F0EB;text-decoration:none;font:700 13.5px Manrope,sans-serif;cursor:pointer}.bg26-404 .r .g{background:#C9A45C;border-color:#C9A45C;color:#141210}',
    /* ana sayfa arama onerileri: onizlemeli rozet */
    '.bg26-pv{display:inline-block;margin-left:8px;padding:2px 7px;border-radius:999px;background:#1F3A28;color:#9AE6B4;font:700 10.5px/1.4 Manrope,sans-serif;vertical-align:middle}'
  ].join('');
  var st = document.createElement('style'); st.id = 'bg-theme-css26'; st.textContent = css; (document.head || document.documentElement).appendChild(st);

  /* ---------- cihaz secici pencere ---------- */
  var ov = null;
  function openPicker(desen, type){
    closePicker();
    var dn = DSLUG[desen] ? desen : null, tp = type || '';
    ov = document.createElement('div'); ov.className = 'bg26-ov';
    ov.innerHTML = '<div class="bg26-md" role="dialog" aria-modal="true" aria-label="Cihazını seç">' +
      '<div class="bg26-md-h"><div class="bg26-md-t"><h3>Hangi cihazın için?</h3><button class="bg26-x" aria-label="Kapat">×</button></div>' +
      (dn ? '<div class="bg26-ds">Seçtiğin desen: <b>' + esc(DSLUG[dn]) + '</b> · cihazını seç, bu desenle açalım.</div>' : '<div class="bg26-ds">Cihazını seç; tüm desenleri kendi cihazının üzerinde gör.</div>') +
      '<input class="bg26-in" type="search" placeholder="Model yaz: A7 IV, R6 Mark II, Mini 4 Pro, 24-70…" autocomplete="off">' +
      '<div class="bg26-tabs">' + [['', 'Tümü'], ['K', 'Kamera'], ['L', 'Lens'], ['D', 'Drone'], ['A', 'Aksiyon'], ['G', 'Gimbal']].map(function(t){ return '<button data-t="' + t[0] + '"' + (t[0] === tp ? ' class="on"' : '') + '>' + t[1] + '</button>'; }).join('') + '</div></div>' +
      '<div class="bg26-list"></div>' +
      '<div class="bg26-md-f">Cihazın listede yok mu? <a href="/betaguard-kaplama' + (dn ? '?desen=' + dn : '') + '">800+ modelin hepsine buradan sipariş ver</a> ya da <a href="' + WA + '" target="_blank" rel="noopener">WhatsApp\'tan yaz</a>.</div></div>';
    document.body.appendChild(ov);
    var inp = ov.querySelector('.bg26-in'), list = ov.querySelector('.bg26-list');
    function render(){
      var r = find(inp.value, tp);
      if (!r.length) { list.innerHTML = '<div class="bg26-empty">Bu aramayla eşleşen önizlemeli ilan yok. Aşağıdaki bağlantıdan 800+ model arasından seçebilir ya da bize yazabilirsin.</div>'; return; }
      var html = '', last = '';
      r.slice(0, 120).forEach(function(d){
        var g = TYPE[d.t] + ' · ' + d.b;
        if (g !== last) { html += '<div class="bg26-grp">' + esc(g) + '</div>'; last = g; }
        html += '<a class="bg26-li" href="/' + d.s + (dn ? '?desen=' + dn : '') + '"><span class="th"><img loading="lazy" src="' + img(d, dn) + '" alt=""></span><span class="n">' + esc(d.b + ' ' + d.m) + '<small>' + TYPE[d.t] + ' kaplama · 39 desen</small></span><span class="p">' + fmt(d.p) + '</span></a>';
      });
      list.innerHTML = html;
    }
    inp.addEventListener('input', render);
    inp.addEventListener('keydown', function(e){ if (e.key === 'Enter') { var a = list.querySelector('a.bg26-li'); if (a) location.href = a.getAttribute('href'); } });
    [].forEach.call(ov.querySelectorAll('.bg26-tabs button'), function(b){ b.addEventListener('click', function(){ tp = b.getAttribute('data-t'); [].forEach.call(ov.querySelectorAll('.bg26-tabs button'), function(x){ x.classList.toggle('on', x === b); }); render(); }); });
    ov.addEventListener('click', function(e){ if (e.target === ov || e.target.closest('.bg26-x')) closePicker(); });
    document.addEventListener('keydown', escKey);
    render(); setTimeout(function(){ try { inp.focus(); } catch (e) {} }, 60);
  }
  function escKey(e){ if (e.key === 'Escape') closePicker(); }
  function closePicker(){ if (ov) { ov.remove(); ov = null; document.removeEventListener('keydown', escKey); } }
  window.bgOpenPicker = openPicker;
  window.__bg26 = { find: function(q,t){ return find(q,t); }, comp: function(s){ return companions(BYSLUG[s]); } };

  function parseQ(h){
    if (!/^\/betaguard-kaplama\?/.test(h)) return null;
    var p = {}; (h.split('?')[1] || '').split('&').forEach(function(kv){ var i = kv.indexOf('='); if (i > 0) { try { p[kv.slice(0, i)] = decodeURIComponent(kv.slice(i + 1).replace(/\+/g, ' ')); } catch (x) {} } });
    return p;
  }
  /* ---------- tiklama yonlendirmeleri ---------- */
  document.addEventListener('click', function(e){
    var a = e.target.closest && e.target.closest('a[href]'); if (!a || a.closest('.bg26-ov')) return;
    var h = a.getAttribute('href') || '';
    var pr = parseQ(h);
    if (pr && pr.cihaz && BYKEY[pr.cihaz.toLowerCase()]) { e.preventDefault(); e.stopPropagation(); location.href = '/' + BYKEY[pr.cihaz.toLowerCase()].s + (pr.desen ? '?desen=' + pr.desen : ''); return; }
    if (pr && pr.tur && TURCAT[pr.tur] && !pr.desen) { e.preventDefault(); e.stopPropagation(); location.href = TURCAT[pr.tur]; return; }
    var m = /^\/betaguard-kaplama\?desen=([a-z0-9-]+)$/.exec(h);
    if (m && !/^\/betaguard-kaplama/.test(location.pathname)) { e.preventDefault(); e.stopPropagation(); openPicker(m[1]); return; }
    if (h === '/betaguard-kaplama' && a.classList.contains('bg-go')) {
      var inp = a.parentElement && a.parentElement.querySelector('input');
      var r = inp && inp.value.trim() ? find(inp.value) : [];
      e.preventDefault(); e.stopPropagation();
      if (r.length === 1) location.href = '/' + r[0].s; else openPicker(null, '');
      if (r.length > 1 && ov) { var i2 = ov.querySelector('.bg26-in'); i2.value = inp.value; i2.dispatchEvent(new Event('input')); }
      return;
    }
    if (/^\/betaguard-kaplama\/?$/.test(h) && /^(Seriler|Tüm desenler)$/i.test(a.textContent.trim())) { e.preventDefault(); e.stopPropagation(); var sec = document.querySelector('[data-bg-desen]'); if (sec && location.pathname === '/') sec.scrollIntoView({ behavior: 'smooth', block: 'start' }); else location.href = '/#desenler'; return; }
    if (/^\/betaguard-kaplama\/?$/.test(h) && (a.classList.contains('bg24-sec') || /Cihazını seç|Desenleri gör|Tüm ürünler/i.test(a.textContent))) { e.preventDefault(); e.stopPropagation(); openPicker(null); }
  }, true);

  /* ---------- link yeniden yazma (arama onerileri, tur karolari) ---------- */
  function rewrite(){
    [].forEach.call(document.querySelectorAll('a[href^="/betaguard-kaplama?"]'), function(a){
      if (a.getAttribute('data-bg26')) return;
      var h = a.getAttribute('href'), q = h.split('?')[1] || '', p = {};
      q.split('&').forEach(function(kv){ var i = kv.indexOf('='); if (i > 0) p[kv.slice(0, i)] = decodeURIComponent(kv.slice(i + 1).replace(/\+/g, ' ')); });
      if (p.cihaz) {
        var d = BYKEY[p.cihaz.toLowerCase()];
        if (d) { a.setAttribute('href', '/' + d.s + (p.desen ? '?desen=' + p.desen : '')); a.setAttribute('data-bg26', '1'); var sp = a.querySelector('span'); if (sp && !a.querySelector('.bg26-pv')) sp.insertAdjacentHTML('beforeend', '<i class="bg26-pv">önizlemeli</i>'); }
      } else if (p.tur && TURCAT[p.tur] && !p.desen) { a.setAttribute('href', TURCAT[p.tur]); a.setAttribute('data-bg26', '1'); }
    });
  }

  /* ---------- cihaz sayfasi ---------- */
  var MOUNT = function(d){
    var m = d.m;
    if (d.b === 'Sony') { if (d.t === 'L') return 'sony-e'; return /RX100|^ZV-1/.test(m) ? null : 'sony-e'; }
    if (d.b === 'Canon') { if (d.t === 'L') return 'canon-rf'; return /^EOS R/.test(m) ? 'canon-rf' : null; }
    if (d.b === 'Nikon') { if (d.t === 'L') return 'nikon-z'; return /^Z/i.test(m) ? 'nikon-z' : null; }
    if (d.b === 'Fujifilm') { if (d.t === 'L') return /^GF /.test(m) ? 'fuji-g' : 'fuji-x'; if (/^GFX/.test(m)) return 'fuji-g'; return /^X100/.test(m) ? null : 'fuji-x'; }
    return null;
  };
  var APSC = /A6\d00|ZV-E10|FX30|R10|R50|R7|R100|Z30|Z50|^X-/;
  var LPOP = [['24-70', 10], ['70-200', 9], ['24-105', 8], ['50mm', 8], ['35mm', 8], ['85mm', 7], ['16-35', 7], ['28-70', 7], ['20mm', 6], ['24mm', 6], ['14', 5], ['100-400', 5], ['200-600', 5], ['18-135', 6], ['11mm', 6], ['18-140', 6], ['23mm', 6], ['33mm', 6], ['56mm', 6]];
  var CPOP = ['Alpha A7 IV', 'Alpha A7 III / A7R III', 'FX3', 'Alpha A7C II', 'Alpha A6700', 'ZV-E10 II', 'Alpha A7 V', 'FX30', 'EOS R6 Mark II', 'EOS R5', 'EOS R8', 'EOS R6', 'Z6 III', 'Zf', 'Z8', 'Z6 II / Z7 II', 'X-T5', 'X-S10', 'X-H2S', 'GFX100S'];
  function score(dev, c){
    var s = 0;
    if (c.t === 'L') { LPOP.forEach(function(k){ if (new RegExp('(^|[^0-9])' + k[0].replace('-', '\\-')).test(c.m)) s = Math.max(s, k[1]); }); var apsLens = /^E |DX|^Fujinon XF|^XF /.test(c.m); if (APSC.test(dev.m) && apsLens) s += 4; if (!APSC.test(dev.m) && apsLens && dev.b === 'Sony') s -= 3; }
    else { var i = CPOP.indexOf(c.m); s = i >= 0 ? 30 - i : 0; }
    return s;
  }
  function companions(dev){
    var mt = MOUNT(dev), out = [];
    if (dev.t === 'K' && mt) out = ALL.filter(function(c){ return c.t === 'L' && MOUNT(c) === mt; });
    else if (dev.t === 'L' && mt) out = ALL.filter(function(c){ return c.t === 'K' && MOUNT(c) === mt; });
    else if (dev.t === 'D') out = ALL.filter(function(c){ return c.t === 'A'; }).concat(ALL.filter(function(c){ return c.t === 'D' && c.s !== dev.s; }));
    else if (dev.t === 'A') out = ALL.filter(function(c){ return c.t === 'A' && c.s !== dev.s; }).concat(ALL.filter(function(c){ return c.t === 'D'; }));
    if (dev.t === 'K' || dev.t === 'L') out.sort(function(a, b){ return score(dev, b) - score(dev, a); });
    if (dev.t === 'K') {
      var seen = {}, first = [], rest = [];
      out.forEach(function(c){ var g = (c.m.match(/\d+(-\d+)?mm/) || [c.m])[0]; if (seen[g]) rest.push(c); else { seen[g] = 1; first.push(c); } });
      out = first.concat(rest);
    }
    return out.slice(0, 8);
  }
  function setTitle(dev){
    if (dev.t === 'K') return 'Lensini de aynı desenle kaplat';
    if (dev.t === 'L') return 'Bu lensle kullanılan gövdeler';
    if (dev.t === 'D') return 'Dronunun yanına: Osmo ve diğerleri';
    return 'Setini tamamla';
  }
  function renderSet(dev){
    var info = document.querySelector('[data-bg-pinfo]'); if (!info) return;
    var anchor = info.parentElement && info.parentElement.parentElement; if (!anchor || !anchor.parentElement) return;
    var ds = curDesen(), list = companions(dev);
    var box = document.querySelector('.bg26-set');
    var sig = dev.s + '|' + ds;
    if (box && box.getAttribute('data-sig') === sig) return;
    if (!list.length) { if (box) box.remove(); return; }
    if (!box) { box = document.createElement('section'); box.className = 'bg26-set'; anchor.parentElement.insertBefore(box, anchor.nextSibling); }
    box.setAttribute('data-sig', sig);
    box.innerHTML = '<div class="bg26-set-h"><div><span class="bg-eyebrow">SETİNİ TAMAMLA</span><h2>' + esc(setTitle(dev)) + '</h2><p>Seçtiğin <b style="color:#E2C285">' + esc(DSLUG[ds]) + '</b> deseniyle açılır; kombin tek seferde gelsin.</p></div><span class="bg26-off">2 kaplamaya 250 ₺ · 3 ve üzerine 500 ₺ indirim</span></div>' +
      '<div class="bg26-row">' + list.map(function(c){
        return '<a class="bg26-it" href="/' + c.s + '?desen=' + ds + '"><span class="im"><img loading="lazy" src="' + img(c, ds) + '" alt="' + esc(c.b + ' ' + c.m) + ' ' + esc(DSLUG[ds]) + ' kaplama"></span><span class="tx"><span class="ty">' + TYPE[c.t] + '</span><span class="nm">' + esc(c.b + ' ' + c.m) + '</span><span class="pr">' + fmt(c.p) + '</span><span class="go">Bu desenle gör →</span></span></a>';
      }).join('') + '</div>';
  }
  function fitLine(dev){
    var t = document.querySelector('[data-bg-ptitle]');
    var sub = '✓ ' + dev.b + ' ' + dev.m + ' için birebir kesim · 39 desen' + (dev.t === 'D' ? ' · kumanda kaplaması +1.000 ₺' : '') + ' · 1-2 iş gününde kargoda';
    if (t && t.getAttribute('data-bg26-sub') !== sub) t.setAttribute('data-bg26-sub', sub);
    var old = document.querySelector('.bg26-fit'); if (old) old.remove();
    [].forEach.call(document.querySelectorAll('[data-bg-pinfo] li'), function(li){ if (/Drone siparişlerinde/.test(li.textContent)) li.classList.toggle('bg26-nodrone', dev.t !== 'D'); });
    var rep = document.querySelector('.bg-rep');
    var sp = rep && (rep.querySelector('p') || rep.lastElementChild);
    if (sp && sp.getAttribute('data-bg26') !== dev.s) { sp.setAttribute('data-bg26', dev.s); sp.innerHTML = '<b>Görseller ' + esc(dev.b + ' ' + dev.m) + ' üzerinde hazırlandı.</b> Desen yerleşimi üretimde cihazın yüzeyine göre küçük farklılıklar gösterebilir; renkler ekran ayarına göre değişebilir.'; }
    else if (sp && !/üzerinde hazırlandı/.test(sp.textContent)) { sp.innerHTML = '<b>Görseller ' + esc(dev.b + ' ' + dev.m) + ' üzerinde hazırlandı.</b> Desen yerleşimi üretimde cihazın yüzeyine göre küçük farklılıklar gösterebilir; renkler ekran ayarına göre değişebilir.'; }
  }
  function devPage(){
    var dev = cur(); if (!dev) return;
    document.documentElement.classList.add('bg-hasprice', 'bg26-dev');
    fitLine(dev); shipLine(dev); renderSet(dev);
  }

  /* ---------- kategori sayfalari ---------- */
  function catInfo(){
    var p = location.pathname.replace(/^\/|\/$/g, '');
    for (var k in CATS) { if (CATS[k].root === p) return { k: k, on: '' }; for (var i = 0; i < CATS[k].subs.length; i++) if (CATS[k].subs[i][1] === p) return { k: k, on: p }; }
    return null;
  }
  function cardRoot(leaf){
    var c = leaf;
    for (var i = 0; i < 8 && c; i++) { c = c.parentElement; if (c && c.querySelector('img') && c.querySelector('a[href*="-kaplama"]')) return c; }
    return null;
  }
  function lca(a, b){ var s = []; for (var x = a; x; x = x.parentElement) s.push(x); for (var y = b; y; y = y.parentElement) if (s.indexOf(y) >= 0) return y; return null; }
  function isProductPage(){ try { if (window.__IKAS_DATA__ && window.__IKAS_DATA__.pageType) return window.__IKAS_DATA__.pageType === 'PRODUCT'; } catch (e) {} return /-kaplama\/?$/.test(location.pathname); }
  function cards(){
    var grid = null, roots = [];
    if (isProductPage()) return null;
    [].forEach.call(document.querySelectorAll('.rich-text'), function(x){
      if (x.children.length || !/^(Sepete Ekle|Desen seç)$/i.test(x.textContent.trim()) || x.closest('[data-bg-pinfo]') || cur()) return;
      var c = cardRoot(x); if (!c || c.closest('.bg26-ov')) return;
      roots.push(c);
      var a = c.querySelector('a[href]'), href = a ? a.getAttribute('href') : '';
      if (/^\/betaguard-kaplama/.test(href) && catInfo()) { c.classList.add('bg26-hide'); return; }
      if (!/-kaplama/.test(href)) return;
      if (x.textContent.trim() !== 'Desen seç') x.textContent = 'Desen seç';
      href = setCover(c, href);
      var btn = x.parentElement;
      var t = x.nextElementSibling; if (t && /Tükendi/.test(t.textContent)) t.classList.add('bg26-hide');
      if (btn && !btn.getAttribute('data-bg26')) {
        btn.setAttribute('data-bg26', '1'); btn.classList.add('bg26-btn');
        btn.addEventListener('click', function(e){ e.preventDefault(); e.stopPropagation(); location.href = href; }, true);
      }
      var im = c.querySelector('img'); if (im && !im.classList.contains('bg26-card-img')) im.classList.add('bg26-card-img');
      [].forEach.call(c.querySelectorAll('.rich-text'), function(r){ var m = /^₺\s?([\d,]+)\.00$/.exec(r.textContent.trim()); if (m && !r.children.length) r.textContent = fmt(Number(m[1].replace(/,/g, ''))); });
      var nm = [].slice.call(c.querySelectorAll('a .rich-text')).find(function(r){ return /Kaplama$/.test(r.textContent.trim()); });
      var na = nm && nm.closest('a');
      if (na && !c.querySelector('.bg26-cnt')) na.insertAdjacentHTML('afterend', '<div class="bg26-cnt"><i></i>39 desen · önizlemeli</div>');
    });
    if (catInfo()) [].forEach.call(document.querySelectorAll('a[href^="/betaguard-kaplama"] img'), function(im){ var r = im; for (var i = 0; i < 9 && r; i++) { r = r.parentElement; if (r && r.querySelectorAll('a[href^="/betaguard-kaplama"]').length >= 2) break; } if (r && r.querySelectorAll('img').length === 1 && !r.closest('header')) r.classList.add('bg26-hide'); });
    var vis = roots.filter(function(r){ return !r.classList.contains('bg26-hide'); });
    if (vis.length > 1) grid = lca(vis[0], vis[1]);
    return grid;
  }
  function catPage(grid){
    var ci = catInfo(); if (!ci || !grid || document.querySelector('.bg26-chips')) return;
    var c = CATS[ci.k];
    var n = function(sl){ var t = sl ? ALL.filter(function(d){ return d.t === ci.k && c.subs.some(function(s){ return s[1] === sl && (d.b === s[0] || s[0] === 'DJI Osmo' && d.b === 'DJI'); }); }).length : ALL.filter(function(d){ return d.t === ci.k; }).length; return t; };
    var bar = document.createElement('div'); bar.className = 'bg26-bar'; bar.style.cssText = 'width:100%;flex-basis:100%;align-self:stretch;box-sizing:border-box';
    bar.innerHTML = '<div class="bg26-chips"><a href="/' + c.root + '"' + (ci.on ? '' : ' class="on"') + '>Tümü <small>' + n('') + '</small></a>' + c.subs.map(function(s){ return '<a href="/' + s[1] + '"' + (ci.on === s[1] ? ' class="on"' : '') + '>' + esc(s[0]) + ' <small>' + n(s[1]) + '</small></a>'; }).join('') + '</div>' +
      '<div class="bg26-hint"><span><b>39 desen</b> her cihazın kendi görselinde</span><span>Desenini ürün sayfasında seç</span><span>Modelin yok mu? <a href="#" data-bg26-open="' + ci.k + '">Cihazını ara</a> · <a href="' + WA + '" target="_blank" rel="noopener">WhatsApp</a></span></div>';
    grid.parentElement.insertBefore(bar, grid);
    bar.querySelector('[data-bg26-open]').addEventListener('click', function(e){ e.preventDefault(); openPicker(null, ci.k); });
    catDesc(grid);
  }
  /* kategori aciklamasi (tema gostermiyor): grid altina SEO metni */
  function catDesc(grid){
    try {
      var p = window.__IKAS_DATA__ && window.__IKAS_DATA__.pageSpecificData; if (!p || !p.description || !p.name) return;
      var sl = p.name.toLowerCase().replace(/ı/g, 'i').replace(/ş/g, 's').replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ö/g, 'o').replace(/ç/g, 'c').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      if (location.pathname.replace(/^\/|\/$/g, '') !== sl) return;
      var old = document.querySelector('.bg26-catdesc'); if (old) { if (old.getAttribute('data-id') === p.id) return; old.remove(); }
      var box = document.createElement('div'); box.className = 'bg26-catdesc'; box.setAttribute('data-id', p.id);
      box.innerHTML = '<h2>' + esc(p.name) + ' kaplama hakkında</h2><div class="bg26-cd-body">' + p.description + '</div>';
      grid.insertAdjacentElement('afterend', box);
    } catch (e) {}
  }


  /* ---------- ust menu acilir paneli (tema alt menu gostermezse) ---------- */
  var MMK = { '/kamera': 'K', '/lens': 'L', '/drone': 'D', '/aksiyon-kamera': 'A', '/gimbal': 'G' };
  var mm = null, mmT = null;
  function mmHide(){ mmT = setTimeout(function(){ if (mm) mm.classList.remove('on'); }, 180); }
  function mmShow(a, k){
    clearTimeout(mmT);
    if (!mm) { mm = document.createElement('div'); mm.className = 'bg26-mm'; document.body.appendChild(mm); mm.addEventListener('mouseenter', function(){ clearTimeout(mmT); }); mm.addEventListener('mouseleave', mmHide); }
    var c = CATS[k], n = function(b){ return ALL.filter(function(d){ return d.t === k && (d.b === b || b === 'DJI Osmo' && d.b === 'DJI'); }).length; };
    mm.innerHTML = '<b>' + TYPE[k] + ' kaplama</b>' + c.subs.map(function(s){ return '<a href="/' + s[1] + '">' + esc(s[0]) + ' <small>' + n(s[0]) + ' model</small></a>'; }).join('') +
      '<a class="all" href="/' + c.root + '">Tüm ' + TYPE[k].toLowerCase() + ' modelleri →</a><button type="button">Modelini ara</button>';
    mm.querySelector('button').onclick = function(){ mm.classList.remove('on'); openPicker(null, k); };
    var r = a.getBoundingClientRect(); mm.style.left = Math.max(12, r.left - 12) + 'px'; mm.style.top = (r.bottom + 10) + 'px'; mm.classList.add('on');
  }
  function wireMenu(){
    return;   /* menu tiklaninca direkt kategori sayfasi acilsin, acilir panel yok */
    if (window.innerWidth < 1024) return;
    [].forEach.call(document.querySelectorAll('a[href]'), function(a){
      var k = MMK[a.getAttribute('href')]; if (!k || a.getAttribute('data-bg26mm')) return;
      var r = a.getBoundingClientRect(); if (r.top > 140 || r.height === 0) return;
      a.setAttribute('data-bg26mm', '1');
      a.addEventListener('mouseenter', function(){ clearTimeout(mmT); setTimeout(function(){ var native = [].some.call(document.querySelectorAll('a[href$="-kamera-kaplama"],a[href$="-lens-kaplama"]'), function(x){ var b = x.getBoundingClientRect(); return b.height > 0 && b.top < 400 && !x.closest('.bg26-mm,.bg26-bar,.bg26-set'); }); if (!native && a.matches(':hover')) mmShow(a, k); }, 200); });
      a.addEventListener('mouseleave', mmHide);
    });
  }

  /* ---------- ana sayfa: populer cihazlar ---------- */
  var POP = ['sony-alpha-a7-iv-kaplama','sony-alpha-a6700-kaplama','sony-zv-e10-ii-kaplama','sony-fx3-kaplama','canon-eos-r6-mark-ii-kaplama','canon-eos-r50-kaplama','nikon-z6-iii-kaplama','nikon-zf-kaplama','fujifilm-x-t5-kaplama','dji-mini-4-pro-kaplama','dji-air-3s-kaplama','dji-osmo-pocket-3'];
  function popHome(){
    if (location.pathname !== '/' || document.querySelector('.bg26-pop')) return;
    var find = document.querySelector('.bg-find'); if (!find || !find.parentElement) return;
    var list = POP.map(function(k){ return BYSLUG[k]; }).filter(Boolean); if (!list.length) return;
    var sec = document.createElement('section'); sec.className = 'bg26-pop';
    sec.innerHTML = '<div class="bg26-pop-h"><div><span class="bg-eyebrow">POPÜLER CİHAZLAR</span><h2>En çok kaplanan cihazlar</h2><p>Her cihazın kendi sayfası var: 39 deseni kendi cihazının üzerinde gör, seç, sepete at.</p></div>' +
      '<div class="bg26-pop-tabs"><a href="/kamera">Tüm kameralar</a><a href="/lens">Tüm lensler</a><a href="/drone">Dronelar</a><a href="/aksiyon-kamera">Aksiyon</a><a href="/gimbal">Gimbal</a></div></div>' +
      '<div class="bg26-pop-g">' + list.map(function(d, i){ var cv = COVERS[i % COVERS.length]; return '<a class="bg26-it" href="/' + d.s + '?desen=' + cv + '"><span class="im"><img loading="lazy" src="' + img(d, cv) + '" alt="' + esc(d.b + ' ' + d.m) + ' kaplama"></span><span class="tx"><span class="ty">' + TYPE[d.t] + '</span><span class="nm">' + esc(d.b + ' ' + d.m) + '</span><span class="pr">' + fmt(d.p) + ' · 39 desen</span></span></a>'; }).join('') + '</div>' +
      '<div class="bg26-pop-more"><a href="#" data-bg26-open="">Cihazını ara · ' + ALL.length + ' önizlemeli model</a></div>';
    find.parentElement.insertBefore(sec, find.nextSibling);
    sec.querySelector('[data-bg26-open]').addEventListener('click', function(e){ e.preventDefault(); openPicker(null, ''); });
  }
  /* ---------- eski genel urun: cihaz sayfasi varsa oraya gonder ---------- */
  (function(){
    if (!/^\/betaguard-kaplama\/?$/.test(location.pathname)) return;
    var p = parseQ('/betaguard-kaplama' + location.search) || {};
    if (p.cihaz && BYKEY[p.cihaz.toLowerCase()]) location.replace('/' + BYKEY[p.cihaz.toLowerCase()].s + (p.desen ? '?desen=' + p.desen : ''));
  })();

  /* ---------- urun sayfasi: kargo / teslimat satiri ---------- */
  function shipLine(dev){
    var pr = document.querySelector('[data-bg-pprice]'); if (!pr || document.querySelector('.bg26-ship')) return;
    var el = document.createElement('div'); el.className = 'bg26-ship';
    el.innerHTML = '<span>🚚 <b>' + (dev.p >= 2000 ? 'Kargo ücretsiz' : '2.000 ₺ üzeri kargo ücretsiz') + '</b>' + (dev.p >= 2000 ? '' : ' · altında 200 ₺') + '</span><span>⏱ Bugün sipariş ver, <b>1-2 iş gününde</b> kargoda</span><span>🎁 Uygulama seti hediye</span>';
    pr.parentNode.insertBefore(el, pr.nextSibling);
  }
  /* ---------- sepet cekmecesi: setini tamamla ---------- */
  function cartUpsell(){
    var head = [].slice.call(document.querySelectorAll('.rich-text')).find(function(e){ return e.children.length === 0 && /^Alışveriş Sepetim/.test(e.textContent.trim()); });
    if (!head) { var old = document.querySelector('.bg26-cart'); if (old) old.remove(); return; }
    var root = head; for (var i = 0; i < 8 && root; i++) { root = root.parentElement; var r = root.getBoundingClientRect(); if (r.width > 300 && r.height > 400) break; }
    if (!root) return;
    var items = [].slice.call(root.querySelectorAll('a[href*="-kaplama"]')).filter(function(a){ return !a.closest('.bg26-cart'); }).map(function(a){ return a.getAttribute('href').split('?')[0].replace(/^\//, ''); });
    items = items.filter(function(v, i, arr){ return arr.indexOf(v) === i; });
    var devs = items.map(function(sl){ return BYSLUG[sl]; }).filter(Boolean);
    var tot = root.querySelector('.rich-text') ? [].slice.call(root.querySelectorAll('.rich-text')).find(function(e){ return e.children.length === 0 && e.textContent.trim() === 'Toplam'; }) : null;
    var foot = tot; for (var j = 0; j < 4 && foot; j++) { if (foot.parentElement === root) break; foot = foot.parentElement; }
    if (!foot || !devs.length) { var o2 = document.querySelector('.bg26-cart'); if (o2) o2.remove(); return; }
    var ds = 'line-black'; var dt = [].slice.call(root.querySelectorAll('.rich-text')).find(function(e){ return e.children.length === 0 && DSLUG[slug(e.textContent.trim())]; }); if (dt) ds = slug(dt.textContent.trim());
    var n = [].slice.call(root.querySelectorAll('a[href*="-kaplama"] img, a[href*="betaguard-kaplama"] img')).filter(function(im){ return !im.closest('.bg26-cart'); }).length || devs.length;
    var seen = {}; items.forEach(function(k){ seen[k] = 1; });
    var rec = []; devs.forEach(function(d){ companions(d).forEach(function(c){ if (!seen[c.s] && rec.indexOf(c) < 0) rec.push(c); }); });
    rec = rec.slice(0, 4);
    var sig = items.join(',') + '|' + ds + '|' + n; var box = document.querySelector('.bg26-cart');
    if (box && box.getAttribute('data-sig') === sig) return;
    if (!box) { box = document.createElement('div'); box.className = 'bg26-cart'; }
    box.setAttribute('data-sig', sig);
    var note = n >= 3 ? '✓ 3 kaplama: 500 ₺ indirim ödemede uygulanır' : n === 2 ? '✓ 250 ₺ indirim ödemede uygulanır · 3. kaplamada toplam 500 ₺' : 'Bir kaplama daha ekle, <b>250 ₺ indirim</b> kazan';
    box.innerHTML = '<div class="bg26-cart-h"><b>Setini tamamla</b><small>' + esc(DSLUG[ds]) + ' deseniyle</small></div><div class="bg26-cart-n">' + note + '</div>' +
      (rec.length ? '<div class="bg26-cart-g">' + rec.map(function(c){ return '<a href="/' + c.s + '?desen=' + ds + '"><span class="im"><img loading="lazy" src="' + img(c, ds) + '" alt=""></span><span><span class="n">' + esc(c.b + ' ' + c.m) + '</span><span class="p">' + fmt(c.p) + '</span></span></a>'; }).join('') + '</div>' : '');
    if (box.parentElement !== root) root.insertBefore(box, foot);
  }
  /* ---------- 404 ---------- */
  function notFound(){
    if (document.querySelector('.bg26-404')) return;
    var t = [].slice.call(document.querySelectorAll('.rich-text,h1,h2')).find(function(e){ return e.children.length === 0 && /Aradığınız sayfa bulunamadı/.test(e.textContent); });
    if (!t) return;
    var box = t.parentElement && t.parentElement.parentElement; if (!box) return;
    box.className = 'bg26-404'; box.removeAttribute('style');
    box.innerHTML = '<div><span class="bg-eyebrow">404</span><h1>Bu sayfa yok ama cihazın var</h1><p>Aradığın sayfa taşınmış ya da kaldırılmış olabilir. Cihazını aşağıdan bulabilir ya da kategorilere dönebilirsin.</p><div class="r"><button class="g" data-bg26-open="">Cihazını ara</button><a href="/kamera">Kamera</a><a href="/lens">Lens</a><a href="/drone">Drone</a><a href="/">Ana sayfa</a></div></div>';
    box.querySelector('[data-bg26-open]').addEventListener('click', function(){ openPicker(null, ''); });
  }

  /* ---------- v27: akilli kategori izgarasi (anlik filtre, arama, populerlik sirasi) ---------- */
  var BRANDRANK = { Sony: 0, Canon: 1, Nikon: 2, Fujifilm: 3, DJI: 0, Panasonic: 4, Sigma: 5, Tamron: 6, GoPro: 1, Insta360: 2, Zhiyun: 1 };
  var NEW = /\b(V|IV|III|II)\b$|Mark (II|III|IV)|Z6 III|Z8|Z9|Zf|R6 Mark II|R5 Mark II|R8|A7C II|A7 V|A6700|ZV-E10 II|X-T5|X-H2|Mini 5|Air 3S|Mavic 4|Neo 2|Avata 2|Osmo 360|Pocket 3|RS 4|RS 5|Action 5/;
  function rank(d){
    var r = 0, i = POP.indexOf(d.s); if (i >= 0) r += 100 - i * 4;
    i = CPOP.indexOf(d.m); if (i >= 0) r += 60 - i * 2;
    if (d.t === 'L') LPOP.forEach(function(k){ if (new RegExp('(^|[^0-9])' + k[0].replace('-', '\\-')).test(d.m)) r = Math.max(r, k[1] * 3); });
    if (NEW.test(d.m)) r += 6;
    r -= (BRANDRANK[d.b] === undefined ? 7 : BRANDRANK[d.b]) * 2;
    if (/^(E |DX|XC|EF-S|EF |AF-S|AF-P|D\d{2,4}\b|NEX|Alpha A5|Coolpix|PowerShot|1[0-9]00D|Rebel)/.test(d.m)) r -= 4;
    return r;
  }
  var SORTS = { pop: ['Popüler', function(a, b){ return rank(b) - rank(a) || a.b.localeCompare(b.b) || a.m.localeCompare(b.m, 'tr'); }],
                az: ['A → Z', function(a, b){ return a.b.localeCompare(b.b) || a.m.localeCompare(b.m, 'tr', { numeric: true }); }],
                pl: ['Fiyat ↑', function(a, b){ return a.p - b.p || a.m.localeCompare(b.m, 'tr'); }],
                ph: ['Fiyat ↓', function(a, b){ return b.p - a.p || a.m.localeCompare(b.m, 'tr'); }] };
  var LIMIT = 24;
  function brandOf(sl, c){ var s = c.subs.filter(function(x){ return x[1] === sl; })[0]; return s ? s[0] : ''; }
  function inBrand(d, bn){ return !bn || d.b === bn || (bn === 'DJI Osmo' && d.b === 'DJI'); }
  function smartGrid(grid){
    var ci = catInfo(); if (!ci) return;
    var host = document.querySelector('.bg27');
    if (host) { if (grid && !grid.classList.contains('bg27-ikas')) grid.classList.add('bg27-ikas'); return; }
    var bar = document.querySelector('.bg26-bar'); if (!bar || !grid) return;
    var c = CATS[ci.k], bn = brandOf(ci.on, c);
    /* base = kategorinin TUM markalari; marka filtresi st.brand ile list() icinde (cip ile marka degisince bos kalmasin) */
    var base = ALL.filter(function(d){ return d.t === ci.k; });
    if (!base.filter(function(d){ return inBrand(d, bn); }).length) return;
    document.documentElement.classList.add('bg27-on'); grid.classList.add('bg27-ikas');
    var st = { q: '', sort: 'pop', n: LIMIT, brand: bn };
    var TOPS = {};
    function topset(b){ if (!TOPS[b]) { var l = base.filter(function(d){ return inBrand(d, b); }), t = {}; l.slice().sort(SORTS.pop[1]).slice(0, Math.min(12, Math.ceil(l.length / 6))).forEach(function(d){ t[d.s] = 1; }); TOPS[b] = t; } return TOPS[b]; }
    host = document.createElement('section'); host.className = 'bg27'; host.setAttribute('aria-label', TYPE[ci.k] + ' kaplama modelleri');
    host.innerHTML = '<div class="bg27-h"><h1>' + esc((bn ? bn + ' ' : '') + TYPE[ci.k]) + ' kaplama<small></small></h1>' +
      '<div class="bg27-tools"><input class="bg27-in" type="search" placeholder="Model ara: ' + (ci.k === 'L' ? '24-70, 50mm, 70-200…' : ci.k === 'K' ? 'A7 IV, R6, Z6 III…' : ci.k === 'D' ? 'Mini 4 Pro, Air 3S…' : ci.k === 'G' ? 'RS 4, Weebill…' : 'Pocket 3, Hero…') + '" autocomplete="off" aria-label="Model ara">' +
      '<select class="bg27-sort" aria-label="Sırala">' + Object.keys(SORTS).map(function(k){ return '<option value="' + k + '">' + SORTS[k][0] + '</option>'; }).join('') + '</select></div></div>' +
      '<div class="bg27-g"></div><div class="bg27-more"></div>';
    bar.insertAdjacentElement('afterend', host);
    /* ikas'in kendi baslik satirini ve siralama arac cubugunu gizle (bizim izgara yerini aldi) */
    try {
      var pn = (window.__IKAS_DATA__ && window.__IKAS_DATA__.pageSpecificData && window.__IKAS_DATA__.pageSpecificData.name) || TYPE[ci.k];
      var bt = bar.getBoundingClientRect().top;
      [].forEach.call(document.querySelectorAll('div,span,h1,h2,h3'), function(e){
        if (e.children.length || e.offsetHeight <= 0 || e.textContent.trim() !== pn || e.getBoundingClientRect().top >= bt || e.closest('header,nav,a,button,.bg27,.bg26-bar,.bg26-ov,.bg-mob,[data-bg-top]') || e.getBoundingClientRect().top < 72) return;
        var r = e; for (var i = 0; i < 3 && r.parentElement; i++) { var pt = r.parentElement.textContent.trim().replace(/\s+/g, ' '); if (new RegExp('^' + pn.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*\\(\\s*\\d+ ürün\\s*\\)$').test(pt)) r = r.parentElement; else break; }
        r.classList.add('bg27-ikas');
      });
      var tb = [].filter.call(document.querySelectorAll('div'), function(e){ return e.offsetHeight > 0 && e.offsetHeight < 80 && /Öne Çıkanlar/.test(e.textContent) && /Sütun|Filtre/.test(e.textContent) && !e.contains(bar) && !e.closest('.bg27'); });
      tb.sort(function(a, b){ return b.offsetWidth - a.offsetWidth; }); if (tb[0]) tb[0].classList.add('bg27-ikas');
    } catch (x) {}
    var g = host.querySelector('.bg27-g'), more = host.querySelector('.bg27-more'), sub = host.querySelector('h1 small'), inp = host.querySelector('.bg27-in'), sel = host.querySelector('.bg27-sort');
    function list(){
      var l = base.filter(function(d){ return inBrand(d, st.brand); });
      if (st.q.trim()) l = find(st.q, ci.k).filter(function(d){ return inBrand(d, st.brand); });
      l = l.slice().sort(SORTS[st.sort][1]);
      return l;
    }
    function card(d, i){
      var cv = COVERS[(i + ALL.indexOf(d)) % COVERS.length], top = !!topset(st.brand)[d.s], nw = !top && NEW.test(d.m) && rank(d) > 0;
      return '<a class="bg27-c" href="/' + d.s + '?desen=' + cv + '"><span class="im">' + (top ? '<span class="tag">POPÜLER</span>' : nw ? '<span class="tag nw">YENİ MODEL</span>' : '') + '<img loading="lazy" decoding="async" src="' + img(d, cv) + '" alt="' + esc(d.b + ' ' + d.m) + ' ' + esc(DSLUG[cv] || '') + ' kaplama"></span>' +
        '<span class="tx"><span class="ty">' + TYPE[d.t] + ' · ' + esc(d.b) + '</span><span class="nm">' + esc(d.m) + '</span><span class="pr">' + fmt(d.p) + '<small>39 desen · önizlemeli</small></span><span class="go">Desen seç →</span></span></a>';
    }
    function draw(){
      var l = list(), show = l.slice(0, st.n);
      sub.textContent = l.length + ' model' + (st.q.trim() ? ' bulundu' : '') + ' · her birinde 39 desen · 1-2 iş gününde kargoda';
      g.innerHTML = show.length ? show.map(card).join('') : '<div class="bg27-empty">Bu aramayla eşleşen önizlemeli model yok.<br>Modelin listede yoksa <a href="#" data-bg27-open>cihazını ara</a> ya da <a href="' + WA + '" target="_blank" rel="noopener">WhatsApp\'tan yaz</a>, kesimi varsa hemen söyleyelim.</div>';
      more.innerHTML = l.length > show.length ? '<button type="button" data-more>Daha fazla göster <span style="opacity:.7">(' + (l.length - show.length) + ')</span></button><button type="button" data-all>Tümünü göster</button>' : '';
    }
    host.addEventListener('click', function(e){
      var b = e.target.closest('button,[data-bg27-open]'); if (!b) return; e.preventDefault();
      if (b.hasAttribute('data-more')) { st.n += LIMIT; draw(); }
      else if (b.hasAttribute('data-all')) { st.n = 9999; draw(); }
      else if (b.hasAttribute('data-bg27-open')) openPicker(null, ci.k);
    });
    inp.addEventListener('input', function(){ st.q = inp.value; st.n = LIMIT; draw(); });
    sel.addEventListener('change', function(){ st.sort = sel.value; st.n = LIMIT; draw(); });
    /* marka cipleri: sayfa yenilemeden filtrele */
    bar.addEventListener('click', function(e){
      var a = e.target.closest('.bg26-chips a'); if (!a) return;
      var sl = (a.getAttribute('href') || '').replace(/^\//, ''), nb = sl === c.root ? '' : brandOf(sl, c);
      if (sl !== c.root && !nb) return;
      e.preventDefault(); e.stopPropagation();
      st.brand = nb; st.n = LIMIT; draw();
      [].forEach.call(bar.querySelectorAll('.bg26-chips a'), function(x){ x.classList.toggle('on', x === a); });
      host.querySelector('h1').firstChild.textContent = (nb ? nb + ' ' : '') + TYPE[ci.k] + ' kaplama';
      var cd = document.querySelector('.bg26-catdesc'); if (cd) cd.style.display = nb === bn ? '' : 'none';   /* ikas aciklamasi ilk acilan markaya ait */
      try { history.replaceState(null, '', '/' + sl); } catch (x) {}
      window.scrollTo({ top: host.getBoundingClientRect().top + window.pageYOffset - 90, behavior: 'smooth' });
    }, true);
    draw();
  }
  /* ---------- dongu ---------- */
  /* diger bloklar icin kucuk API (13_v27 kumanda secimi kullanir) */
  var SLUGOF = {}; DESEN.forEach(function(n){ SLUGOF[n] = slug(n); });
  window.__BG = { CDN: CDN, DSLUG: DSLUG, SLUGOF: SLUGOF, curDesen: curDesen, cur: cur, img: img, BYSLUG: BYSLUG };

  var q = false;
  function run(){ try { rewrite(); var g = cards(); catPage(g); smartGrid(g); devPage(); wireMenu(); popHome(); cartUpsell(); notFound(); } catch (e) {} }
  function sch(){ if (q) return; q = true; setTimeout(function(){ q = false; run(); }, 120); }
  function go(){ run(); if (location.hash === '#desenler') { var tries = 0; (function t(){ var sec = document.querySelector('[data-bg-desen]'); if (sec) sec.scrollIntoView({ block: 'start' }); else if (tries++ < 30) setTimeout(t, 200); })(); } new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-bg-ptitle', 'data-bg-pinfo'] }); }
  if (document.readyState !== 'loading') setTimeout(go, 300); else document.addEventListener('DOMContentLoaded', function(){ setTimeout(go, 300); });
  var lastUrl = location.href;
  setInterval(function(){ if (location.href !== lastUrl) { lastUrl = location.href; var b = document.querySelector('.bg26-set'); if (b) b.removeAttribute('data-sig'); sch(); } }, 500);
})();

/* ===== 13_v27.js ===== */
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
  function curText(sel){ if (!sel.value) return ''; var o = sel.options[sel.selectedIndex]; return o ? o.text.trim() : ''; }

  /* kumanda secilmeden "Sepete Ekle"ye basilirsa: ikas sessizce yutuyor, biz uyaralim */
  function uyar(){
    var k = document.querySelector('.bg27k'); if (!k) return;
    var w = k.querySelector('.bg27k-w');
    if (!w) { w = document.createElement('p'); w.className = 'bg27k-w'; w.setAttribute('role', 'alert'); k.appendChild(w); }
    w.textContent = 'Sepete eklemek için önce kumanda seçimini yap: sadece drone mu, drone + kumanda mı?';
    k.classList.remove('bg-shake'); void k.offsetWidth; k.classList.add('bg-shake');
    k.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  document.addEventListener('click', function(e){
    var k = document.querySelector('.bg27k'); if (!k) return;
    var sel = nativeSel(); if (!sel || sel.value) return;
    if (k.contains(e.target)) return;
    var n = e.target, hit = 0;
    for (var i = 0; i < 5 && n; i++, n = n.parentElement) {
      if (/^Sepete Ekle(\s|·|$)/.test((n.textContent || '').trim())) { hit = 1; break; }
    }
    if (!hit) return;
    e.preventDefault(); e.stopImmediatePropagation();
    uyar();
  }, true);

  function render(box, sel){
    var cur = curText(sel);
    var isNone = cur.indexOf(NONE) === 0;
    var model = null; RC.forEach(function(r){ if (r.t === cur) model = r; });
    var withRc = !!model;
    window.__bgKumEk = withRc ? EK : 0;   /* 00_main buton fiyatina ekler */
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
      var dv = api().cur();
      h += '<p class="bg27k-n">Kumanda, drone ile <b>aynı desende</b> kesilir. Kumandanı seç, kutudan takım çıksın.' +
        (dv && dv.p ? '<br>Toplam <b>' + fmt(dv.p + EK) + '</b> · drone ' + fmt(dv.p) + ' + kumanda ' + fmt(EK) : '') + '</p>';
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
    if (!dev || dev.t !== 'D' || !sel) { if (box) box.remove(); window.__bgKumEk = 0; return; }
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
