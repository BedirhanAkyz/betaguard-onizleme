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
var LOGOS = [["sony", "data:image/png;base64,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", 0], ["canon", "data:image/png;base64,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", 0], ["nikon", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAAAoCAQAAABK3eCmAAAFTUlEQVR42tVabY7jIAx92+xRkLJHQZoehZVylIyUo6QSR6ESR0nE/gglIcE2TWellv6ZTqiBF9vPHyCA+KjgQmn0h5k6UMNk8lTQQQcdVPVapdXe6kM/MsSB3GHmSMycElAq9MGFKX1cBiy91lSA+kPgGyvhU6TujUk7HfMUAaGvflUfAp8KE6kR+inTLUuaQkhy6LXMu8N3QXloNMSTBjr73hPzZngAgCElPeQoNJiLEizefFyEo5WGYr6tw8bDa+IlrL/U8ft++PgCPg4+XQ0frVu1mqNgiCcD8JnwUeb0eKo38FGmy8M3J4AV8QLm99c9WvtAatXW+ykGGp/p0Jw9n9EkgCk9958AX5l1pTGmeI1iVbORNqb/T2m+i7yrKiS88ee3SA1l81XwJD83uG9M1+OKHirNnWHhMUTdUiSxfILuFeBTZCiyh0+RQO8Nr9vQkc28Yol6ZjS4vX/QUoavRvsaaFgYtCR8dCBDkdA53i5JVHEP9v9r8BE+88RWy+NeHXJQpvs86xroaA/tZh8eHgoe3Q8gtdja7rX+CvtpE8O5OUSU9t1wTW5AFXXzGv8a8XVKwiKlg09zFLvrO4CuqNEjIf8hHeijhajkloaNpOpct8SO5f+bykIAvdajTOWY9U0sbNTvt38ixuhjzODYE6K2zlI/XCZr2i08bRY3xNFdLFON8Rf5K1tkaLKSw73ssXDa6bCLZY/r7qaDpMcOD/BNL8O3lqmmp+HdShgZDTcM+PzINdCRYDvhVZhSxcW87GDnRBta8KGLK24I3u7xRWY+3xhg0Ff56BLFrLmVIiOL9kzW8brpToKstVrIVbONoN3qBStxL5+W1D71svZZoWbjNzMoRuUC9zs6ACNb0rjjzuzQ/+BpM+3rX/Z8a2+iZ/0a7Rl5v7PINyzv69hbmUjtUyxxndY+dcqb0CWtUjrWiWtxfucKH+uDVJHrChujNrur8zxGG/Ve/8RpLxWOtJ42ulQIkNI5fUL6X9hEORS8lk0c17U5KTPuuDPOocHtQZBb+FrCk9wqD9iI4HRV1WwKmiHmGI3QXanxbAYtAdCMDn/ialQ10x+1TxHK7tExbyIH2jPl93lDLHw1uxysWBGWIYPPs+ShSHAW4Dw6Qm3yjFwIIxZn3zPOeh1aaF2mWP2JbGHfE6ZClimEXUudCrunoBjichVh3FhuVM6EKj9bPtKE7j08oyYNRzQWJtDNn2m2f0e3RmtqM35PHUrobtSQyi21fgxxvK20s6xHM/Y9M1eaVz3by7FitzEvxwk3BXrhCs+xN0EZRi/WWUZyldXsTYWBc1FlCEaos9Rl5Jnxcu54eWODwLmrO6WY0Rc1Medlyt23SRM8afZfaY7GyLDzwLD+wNhMuQHL6oMLMrUs76gXajYuEQvnkJ2o21y2u6zBZxM9Y0nb+1xGzOlTp432J8NGd2bWX3mhZmPZXHdGE7OFFudHi1HwqjM6Ir6d0WTar+q6OBc2A7CbvwbGdFd3agTT1azx0xGmOpQcynIaIfTm7tzItDGnNkMyXs6Vo+IO3namEkukTjB+mTzOF6v6UHtayXRVUMt+LuxFi9rIzDK0MYst75qmeLvZ57km5jc6liRtRaBmD53s4Mg4XhfuH08FzRkFst82jybhzTsyvzEVQUUQ21eu4tKnZvKVXPvUBS0ZQNrCzYGGofaeCEe9WMD3GVnJIfUVtycC7xv+pB0okdrqwvolb/a/8ZcQOQgpeWmmJe4XrDMVW4GmZhxN9goDE+c2pPtZKM+ypzpKt/gm5vgNeL7cJv+coeKVDF30uAPs/7/k9g+LTRwE8dPiKwAAAABJRU5ErkJggg==", 0], ["fujifilm", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO4AAAAoCAQAAABTVg4AAAAEAElEQVR42u1ca27jIBD+NuQoIzlHoWqO4qo5iqP1URKVo8QSR1nk/bFp1oYZwFbS2LHhT+XwmOFjXgwULVrdnto/2bVtLy1uVTMtqPN7v+r2EhkLkX4+DSdh9G79w7ZCi7b06EhxXHX6UtC3bXUwAzEz6AxOuX5tW0bXRuRlC40TFMYWHfR1kdYliuAbwSZnqbIorJjR+XafGF/KrFnKTFryeKDI+kfQ22Qu3OOK/eH5COWg9i57oTFgm8vU8RCO2vYbkVgnVos5Fxq4mdXozajuSDMN+n4tW5YEh32EiXmDy5cGdSbH9ATqlGC8Eht1y349wGBJxU2e46Hq+qqWlyKb8TL1zazvB+5anm8mzknJ7VrcBscV3HkYCcCiTrpOXYtbc7pnBXe6hsJ5LlXMDttVLc8pYPMB0xGL62A5xb2COxcnjyLg2qVJrnsxcHXE4pqlecsKDQ4vbHV1OnR9XXDP2A2I12l2stu1uAuT3CP2g2Cc5rGNjVBOKYsrHT9WUWYPEz7BclAAPrwoscvZp8ixdH5rnnZ+ZXrUaiHuFanjwS2i2cgpWzIFh73I7gnvQq/PqMo2T5Nc13GbqLP9unl0UdQ2ogTIdcqlwU6AgnDBu0j9NPm1PV66LhWlLa4kuXhyAn+8EyVZ2hK/o3xNlV/J6iZjXBncc9SqTtXi1jCe02Fv0JZomPgwY/fjuRkj3+rW+RZXAreeYT6XUKIK+DhcF6DuLNAXs133E451VSC5lGNxXysUKqC8ShPXNUNj3eLKUUaM+9qHGK9SuBPmLIu7gjv9wuWGKM//WcGdvuQ2Hrg6nTKYN7i0UNkl9E+qXhJcuyjZ7W/r7s2pVS3PXnL/n5Ip6LwYV45zV8mdruRW+auwmcUi06LBhXfCrHJi3MeAqyLOzjiQwqthbmEvIoyw9g+WXMNkTUiEljLJ7peSeYw1R8mlu4OLx4ILJi1eCWyUzFveOgPaMAd7mKX8laPhtb1YN1swtncA1wdN4RQ8rCJUHkgOKgOkyntN66BwnIFS5qSqwEXYzOm7Hja4PuF+AlyLfZBnKfCFBuaqPgmaeYGvcO6xSreL2HQL1vlec5BbXmXKNz5SQJlAf2WYpnuEQgZvzOP9IvGPA/zE+iUrYX6MQttNj7nIeLntJNjS/Q0ahn+XMXoh+jb9OW2CL8HmNoPVnsEO54B0F7nU8hFkUG2S+QZvCalV3t82s90Qfilznj1jJ5VQ5dF5OVVw7Er0e563eBvlwXLKmVBCdxLJ/Jt900udp9mK9+pScLwpdVzvMtZsu4/gixm0kcMvlp1nB907T8oZ83ssw/g2ukexDcY4et/qX+39HX66skTezvuukusULsS/9mamoc/Ty1/GGqsfd/FfqQAAAABJRU5ErkJggg==", 0], ["dji", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAAoCAQAAAAC7v8mAAACEklEQVR42sVYW46DMAwcAUeJ1KtEokdBWo7CSj0KHzkKlXKUIu8Hod1tbScGujV/PII9nrGdgLDz6ojoRs822VeqsNc8gPrlbrAvtN8Vx96N/++KY12ZP4GKZ5IDxM+gclB6jkCFs7BlqaY4Ui5yJ7wbxHWi8oc/2vY0MjWCsxt5Annh2VpvXq0jkGP/Mf1GZcBXMZoRIZMezyorilQPD1dGtIbEakDLriwBCF9Vd/q1Jo4tS3rRTa8EIOBV3ZNjs4W0tZgE/lkQqR4RmwT0SfzpzFYJjSk6Kk4oiknMXnTkirNYsJyRRXOG6gQCjaJovdLWb+IXvFxHAoEmVv5uHRKcmJxgrLOaXKOOZaXUTL2XOKURyklQKlElxpDrJd5Y8nPKSqhggytOqTcnI17xgYpFxlDkP2fSoykLlcqUaExPTEmw4RXWecUdzhRvxCuurvhNA1NrnGFiNnVoFFc6kSdeqUKKRhRlAUDhqFRiyzZsMNbg6bgt2RobcNk2Mh23JVt+VeOKS4Ypmd1BlWLZZzWuOCd+1aqyZqXLqX25lCNdyrcTmNflmUJoAJxFTZSNlvGurFGY65bI+0zDpWMuR4OoxcIDjmYDDiO7ia/F9/vCdc3x+03V5i1HPZwONOuL3zSjMpkwGcpXttPT0ijGd57FafR8tu9U9nYcatjPU7j9U289ZWnMqCwdR9tLBoQthz0/zk8kRQGjNL8AAAAASUVORK5CYII=", 0], ["sigma", "data:image/png;base64,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", 0], ["tamron", "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI4NSIgdmlld0JveD0iMzUuNSA0My45IDEwMDcuMiAxNTQuOCIgd2lkdGg9IjI1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTIyMy43IDQ3LjItNDIuOSAxNDguM2gzMi45bDkuMS0zMS40aDYyLjhsOS4xIDMxLjRoMzIuOWwtNDIuOS0xNDguM3ptNy44IDg2LjkgMTYuMi01NmgxM2wxNi4yIDU2em0tMTk2LTU2aDUzLjV2MTE3LjRoMzJ2LTExNy40aDUzLjZ2LTMwLjloLTEzOS4xem02NDIuNiA2NS42YzYuNi00IDExLTkuNCAxMy41LTE2LjggMS45LTUuNSAyLjgtMTEuMyAyLjgtMjcuOXMtMS0yMi41LTIuOC0yNy45Yy01LjUtMTYuMS0yMC42LTIzLjktNDUuOS0yMy45aC03OC41djE0OC4zaDMydi00NC43aDQ1LjJsMjIuNSA0NC43aDM1LjNsLTI1LjYtNTAuOHptLTE4LjItMzAuNWMtNCA2LjItMTEgNi43LTE5IDYuN2gtNDEuN3YtNDEuOGg0MS43YzggMCAxNSAuNSAxOSA2LjcgMS45IDIuOSAyLjUgNi4yIDIuNSAxNC4yLS4xIDgtLjYgMTEuMy0yLjUgMTQuMnptMzUwLjgtNjZ2MTAwLjhsLTU0LjktMTAwLjhoLTM5LjZ2MTQ4LjNoMzJ2LTEwMC44bDU0LjkgMTAwLjhoMzkuNnYtMTQ4LjN6bS01NzAuNyA4NS45LTI4LjktODUuOWgtNTB2MTQ4LjNoMzJ2LTExNS40bDMwIDg5LjJoMzMuNmwzMC04OS4ydjExNS40aDMydi0xNDguM2gtNTB6bTM2My4yLTg5LjJjLTI3LjggMC01My43IDIuMy02NC41IDI5LjQtMy44IDkuNS00LjQgMTkuOC00LjQgNDhzLjYgMzguNSA0LjQgNDhjMTAuOCAyNy4yIDM2LjcgMjkuNCA2NC41IDI5LjRzNTMuNy0yLjMgNjQuNS0yOS40YzMuOC05LjUgNC40LTE5LjggNC40LTQ4cy0uNi0zOC41LTQuNC00OGMtMTAuOC0yNy4yLTM2LjctMjkuNC02NC41LTI5LjR6bTM1LjIgMTA4LjJjLTQuNCAxNC0yMC4yIDE1LjktMzUuMiAxNS45cy0zMC44LTEuOS0zNS4yLTE1LjljLTEuNi01LjMtMS42LTE1LjktMS42LTMwLjdzMC0yNS41IDEuNi0zMC43YzQuNC0xNCAyMC4yLTE1LjkgMzUuMi0xNS45czMwLjggMS45IDM1LjIgMTUuOWMxLjYgNS4zIDEuNiAxNS45IDEuNiAzMC43IDAgMTQuNyAwIDI1LjUtMS42IDMwLjd6IiBmaWxsPSIjMDA1Y2E5Ii8+PC9zdmc+", 1], ["gopro", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAAAoCAQAAAB3T4HAAAACqUlEQVR42u2Zfa6iMBTFf1qW0kSX0kSXwuS9pXQyLKUmLIWXsBTInT8siMpHp4JvJtNLSDDpx+F47u25uhMA0BgMGs0tFD/5ZKswOBRt0Nia0t9bhSBanDQyFpWw2WXlT6MRJ3obNJn/VgBaoPb3NQq2jy/KhREaMCgUJwzHLTSRYVG0KC4Ui4CW4epRSTMBvUVRBiWexnKiRWE5z+xbRqLqBfeK3Iw4qaSRZjS5GmmkEif5U1I0ImID98j9+GGiarH9vtfL3c3oUI1juqIygoAf9AoNLji7q8EuMTTc16t85AWrnqAqGJUTMl8X4sNy8gIvqEfFr9EYDsABx/GFvdoBWsMv/3QZCLxLCsehrzzTqHIUcMK+nhShaqr8OBOphm68G2iwEXlItS5J78dOXbpDnwWVJz1SYOq+AA0/z539h+DVx9RkAPVweina2bK+jMmjygJtzrM8sxXOKQUYqoBR3a6fL55mkwdm/PG4zvmtgmpCDZQUW/nIZRpKjpheRIaP1e1TsSDcOefxRjXUA6C1r67rRIu6W/3bYn/ntkIaIhVYfv6pyLh4k+ooFno4jSHvLfCw1rYcsDOZ21X6d9FXe4eRz/alGsvhqsid6N5q0DdYS8Xsi3O/+HNrNubqu7k/+hSwfPhe5hz1qo4T0E60WravYcuoWo6dLa0mWu1nL149GRYz2ag/tslmpNF2kbatM8t60nxX4c37ToYmRc/2Y8xIbHp27VPn0WBpLBqinYDBwkJ/qjEezxQqv/eNhv869omCREOi4dE3VFHzNOdBaXOYCD+g+Rw4SEsetUYxKJI5NmqNMptof8N+ebw9q6h1/po19oH/FIT0B++Pdi0c+9UaJfUNNKi1cKQSmWhINCQaEg2JhkRDoiHRkGhINCQaEg2JhnXiN540MrNUg8GCAAAAAElFTkSuQmCC", 0], ["insta360", "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2Ny42IiBoZWlnaHQ9Ijc3Ny4yIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+IDxnIHRyYW5zZm9ybT0ibWF0cml4KDEuMzMzMzMgMCAwIC0xLjMzMzMzIDAgNzc3LjIpIj4gPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzM3LjYgMzAzLjIpIj4gPHBhdGggZD0ibTAgMGMtMTAuMi0xMC4yLTI2LjgtMTAuMi0zNyAwcy0xMC4yIDI2LjggMCAzNyAyNi44IDEwLjIgMzcgMCAxMC4yLTI2LjcgMC0zN20xNC41IDUyLjdjLTE3LjEgMTcuMS0zOS44IDI2LjUtNjQgMjYuNXMtNDYuOS05LjQtNjQtMjYuNWMtMzUuMy0zNS4zLTM1LjMtOTIuNyAwLTEyOCAxNy4xLTE3LjEgMzkuOC0yNi41IDY0LTI2LjVzNDYuOSA5LjQgNjQgMjYuNWMzNS4zIDM1LjMgMzUuMyA5Mi43IDAgMTI4bTI3My44IDUxaC0zNS4zYy00LjMgMC03LjgtMy41LTcuOC03Ljh2LTIxNS41YzAtNC4zIDMuNS03LjggNy44LTcuOGgzNS4zYzQuMyAwIDcuOCAzLjUgNy44IDcuOHYyMTUuNmMwIDQuMy0zLjUgNy43LTcuOCA3LjdtMTgwLjctNzBjLTQuMiAzLjUtMTYuNyAxMy45LTM5LjcgMTYuNi0xNS40IDEuOC0zMC4xIDQtNTUuMy0yLjItMjUuMy02LjItMzcuOC0xNS40LTQyLjYtMTkuOS0xLjYtMS41LTIuNS0zLjUtMi41LTUuNnYtMTQxLjljMC00LjIgMy40LTggNy43LThoMzMuNmM0LjIgMCA3LjcgMy44IDcuNyA4djg3LjJjMCAxMC44LjIgMTQuMy4yIDI2LjRzMTQuNSAxNS44IDI5LjkgMTUuOGMxMi42IDAgMjYuNy0zLjggMjYuNy0xNS44IDAtNi43LS4yLTExLjctLjItMTYuMnYtOTcuNGMwLTQuMiAzLjQtOCA3LjctOGgzNC41YzQuMiAwIDcuNyAzLjggNy43IDh2MTAyLjJjLS4xIDIyLTMuOSA0MS4zLTE1LjQgNTAuOG0yOTMuMS0xMTcuNWMtMy40LS42LTcuOC0xLTEzLjMtMS4xLTcuNi0uMS0xMy42LjMtMTUuNCAyLjFzLTIuOCA0LjktMi44IDEyLjFsLS4yIDcyLjNoMjguM2M0LjMgMCA3LjkgMy41IDcuOSA3LjlsLjEgMjUuOWMwIDQuMy0zLjQgNy43LTcuNyA3LjdoLTI4LjJ2MzcuMmMwIDQuMy0zLjUgNy44LTcuOCA3LjhoLTM0LjZjLTQuMyAwLTcuOC0zLjUtNy44LTEyLjF2LTE1OS45YzAtNi42LTEuNC0yMiAxMC0zMS45IDExLjQtMTAgMzAuNi0xMS4zIDQ2LjYtMTEuMyAxMi42LS4xIDIyLjcgMS40IDI4LjggMi43IDMuNy44IDYuMyA0LjEgNi4yIDcuOWwtMS4yIDI1LjZjLS4xIDQuNS00LjMgNy45LTguOSA3LjFtLTE1NiA2My43Yy0yMS42IDIuNi00MS42IDYtNDcuMSA5LjItNS42IDMuMy00LjkgMTQuNy0xLjUgMTguOCA0LjggNS44IDI2LjcgNC41IDM5LjQgMy4yIDE1LjktMS43IDI4LjctNC45IDM2LjYtNy40IDQuNy0xLjUgOS41IDEuNyAxMCA2LjVsMi42IDI0LjJjLjQgMy41LTEuNyA2LjktNS4xIDguMS0xNy42IDYuMi0zMC42IDEwLTU5LjEgMTAtMTIuNCAwLTI2LjgtMS40LTM5LjctNi0yMC43LTcuNC0yNi42LTIxLjktMjcuOS0zNC43LS42LTYuNC0xLjEtOS41LTEuMS0xNy45LjEtMTMuOCAyLjktMjQuOCAxMC42LTMyLjEgNy44LTcuNCAyNC44LTEzLjEgNTAuNy0xNi42IDIzLTMuMSAyOC41LTUuOCAzMi40LTguNiA1LjUtNCA1LTE3LjggMS4zLTIxLTYtNS4yLTIwLjItNi40LTM3LjMtNS4zcy0zNS4zIDYuMy00NiA5LjljLTQuOCAxLjYtOS45LTEuOC0xMC4yLTYuOGwtMS42LTI1Yy0uMi0zIDEuNC01LjggNC4xLTcuMyAxMy43LTcuMyA0My40LTEyLjggNjYuOC0xMi44IDI1LjggMCA0NiA1LjMgNTYuOSAxNC43IDEyLjUgMTAuOCAxNC4yIDI0LjMgMTQuMiA0MS43IDAgMTMuMi4yIDI5LjYtOC40IDM4LjUtOC44IDguNi0xNy43IDEzLjktNDAuNiAxNi43bTI4NS43LTY1LjNjLTguMy01LjctMjAuNy02LjctMzAuNS02LjhzLTIxLjUgMi4xLTI2IDYuOGMtMy44IDQtMi40IDUuMi0yLjQgMTEuMSAwIDguNyAzLjggMTUuMSAxMi41IDE4LjUgOC43IDMuNSAyMS40IDMuNiAyOS4zIDMuOCAxNC4zLjQgMjQuNS0xLjUgMjQuNS0xLjV2LTcuOGMwLTE1IC45LTE4LjQtNy40LTI0LjFtMjkuNiAxMjYuNWMtMTQuNyA3LjUtMzEuNCAxMS4yLTUwLjMgMTEuMi0yNi4yIDAtNTEuNi0zLjQtNjYuNi0xMC43LTIuNy0xLjMtNC4zLTQuMi00LjItNy4ybDEuNC0yNWMuMy01LjEgNS40LTguNCAxMC4xLTYuNyAxMi4zIDQuNyAzMy44IDExIDU0LjMgMTEuMiAxMy45LjIgMjAuOS0xLjMgMjUuOC0zLjkgNC45LTIuNyA2LjktNS43IDYuOS0xMi44IDAtNS44LS4xLTE1LjQtLjEtMTUuNHMtMjQgMS43LTM1LjUgMWMtMTUuOS0xLTMwLjctMi45LTQ3LjMtMTEuMy0xMy42LTctMjQuNS0xNi44LTI0LjUtMzh2LTIyLjNjMC0xNC44IDktMjYuNiAyMS41LTMyLjggMTMuNi02LjggMjguOS0xMC4yIDU3LjEtMTAuMiAzOC42IDAgNjIuNyAxNi4yIDcwLjUgMjIuNCAxLjggMS40IDIuOCAzLjYgMi44IDUuOXYxMDIuMWMwIDIwLjgtNy4zIDM1LTIxLjkgNDIuNW0xOTQuNS04Ny40YzAgMTAuOC01LjcgMzAuMS0yNC44IDM2LjQtNC44IDEuNi03LjQgMi4zLTkuNiAyLjMgNS40IDIuMSAxMC43IDQuOCAxNy42IDExLjUgNyA2LjcgMTAuMiAxNy4zIDEwLjIgMzAuNnYxMWMwIDE5LTguNCAzNS41LTI1LjEgNDQuNS0xMy4yIDcuMS0zMS4yIDkuNC00Ny40IDkuNC0zMy4zIDAtNTYuNS05LTY2LjMtMTUtMi40LTEuNS0zLjgtNC4xLTMuNS02LjlsMS44LTIzLjdjLjQtNS4xIDUuNi04LjIgMTAuMy02LjMgMTEgNC43IDMwLjEgMTEuNSA0OC4zIDEyIDguOC4yIDIxLjQtLjIgMjcuOC0yLjggNy4yLTIuOSAxMS43LTkgMTEuOC0xNS43LjEtNy4yLjEtNi4xLjEtMTAuNiAwLTkuOS0zLjYtMTIuMy02LjgtMTUuMi00LjUtNC0xMi45LTUuMi0yMy02LjQtNi40LS44LTIxLjktMS44LTM1LjItMi4yLTQtLjEtNy4yLTMuNC03LjItNy40bC0uMS0yMy44YzAtNC4xIDMuMy03LjQgNy40LTcuNCAxMS42LS4xIDI3LjUtLjMgMzkuMS0xLjUgMTYuMS0xLjcgMjkuNy02LjEgMjkuNy0xOS4zdi0xMy43YzAtMTkuNi0xNy4xLTIyLjUtNDIuNy0yMi41LTE2LjcgMC0zNS44IDcuMi00NyAxMi4zLTQuNyAyLjEtMTAtMS4xLTEwLjQtNi4ybC0xLjktMjUuM2MtLjItMi43IDEuMS01LjQgMy40LTYuOCA4LjMtNS4yIDI5LjctMTYuNyA2MC0xNi43IDIxLjggMCA0OC45IDQuOCA2My4yIDE1LjMgNS4xIDMuOCAyMC4yIDE3LjkgMjAuMiAzOS41djE1LjljLjEgMTIuNy4xIDUuMi4xIDE0LjdtMzA3LjQgNzkuMXYtNDguOGMwLTE2LjEtLjItMjMtLjItMzQuNXYtMTEuMmMwLTE0LjEtLjktMTcuMy03LjYtMjMuNC01LjktNS40LTE2LjUtNS41LTIxLjgtNS41LTguMiAwLTE1LjQgMi4yLTIwLjcgNi45LTUuNyA1LjEtNi4zIDEwLTYuMyAyOSAwIDExLjctLjEgMTkuNC0uMSAzOS40IDAgMTQuNi4yIDI2LjguMSAzOS43LS4xIDE0LjkgMS4xIDIzIDkgMjkuMyA1LjUgNC4zIDEwLjQgNiAxOC42IDYgNy43IDAgMTcuMy0xLjggMjIuMS02LjEgNy4xLTYuNCA2LjktMTMuOCA2LjktMjAuOG00OC4yLTQ4Ljh2NTdjMCAxOC45LTEwLjUgMzktMzAuMSA0OC43LTEyLjIgNi4xLTI5LjIgOS42LTQ2LjkgOS42LTE4IDAtMzUuMy0yLjEtNDkuOS0xMi4xLTE3LjQtMTEuOS0yNC4xLTMyLjctMjQuMS01Mi4zdi05OC4xYzAtMzMgMTEuNy00NS43IDIzLjItNTMuNSAxMy44LTkuMyAzMy4xLTE1LjMgNTIuMy0xNS4zIDIxLjMgMCA0Ny41IDUuNyA2My4yIDI1LjEgMTAuNCAxMi44IDEyLjQgMzUuMSAxMi40IDU1LjktLjEgMjEuNC0uMSAxMS0uMSAzNW0tMjI2LTY2LjFjLTUuNi03LjQtMTguMy05LTI4LjEtOS0xMCAwLTE5LjUgMS40LTI2IDlzLTUuMyAxNi42LTUuMyAyOC43YzAgMTUgLjEgMjQuMy4xIDI0LjNzMTYuNyA3LjIgMzIuMyA2LjhjOS4zLS4zIDE5LjYtLjQgMjYtNy40czYuOS0xMyA2LjktMjYuMWMwLTExLjgtLjItMTguOS01LjktMjYuM20yNi4zIDkwLjdjLTkuNyA2LjItMzEuOSAxMC42LTQ3LjYgMTAuNy0xNy41LjItMzguNC02LjEtMzguNC02LjFzMCAxMi4yLjMgMjMuN2MuNSAxOS4yIDI4LjQgMjMuOCA0Mi43IDIzLjcgMTQuNS0uMSAzMC44LTQuMSA0MC42LTYuOSA0LjUtMS4zIDkgMS45IDkuNCA2LjVsMS43IDIzLjVjLjIgMy4yLTEuNiA2LjMtNC43IDcuNC0xNC4yIDUuNS0zMS45IDguMi01MC40IDguMi0xMC4xIDAtMjguNiAxLTQ3LjMtNi45LTEzLjgtNS44LTM1LjYtMjAuNi0zNS42LTQ3di0xMTMuM2MwLTEzIDUuNy0zNy4zIDIwLjYtNDguNSAxOS4xLTE0LjQgMzYuNi0xNS41IDU0LTE1LjUgMTkuMSAwIDMyLjEuNCA0OC4xIDguOSAyMC40IDEwLjkgMjguNyAzMiAyOS4zIDU0LjUuNCAxNSAwIDIxLjYtLjggMzMuOC0uNyAxMi4xLjkgMjguOS0yMS45IDQzLjMiLz4gPC9nPiA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNzQuNyAyMDUuMykiPiA8cGF0aCBkPSJtMCAwYy0yMy4xLTIzLjEtNTMuOS0zNS44OTktODYuNi0zNS44OTlzLTYzLjUgMTIuNy04Ni42IDM1Ljg5OWMtNDcuOCA0Ny43LTQ3LjggMTI1LjQgMCAxNzMuMiAyMy4xIDIzLjEgNTMuOSAzNS45MDEgODYuNiAzNS45MDFzNjMuNS0xMi43MDEgODYuNi0zNS45MDFjNDcuOC00Ny43IDQ3LjgtMTI1LjM5OSAwLTE3My4ybTY1LjggMTY0LjYwMWMtLjMuNTk5LTEuOCAzLjc5OS0yIDQuMjk5LTYuNCAxNC4zLTQuMSAzMS43MDEgNy4xIDQzLjguMy4yIDEuMiAxLjIgMS43IDEuNy4zLjMuNi42LjggMSAyLjMgMy43MDEgMS44IDguNi0xLjQgMTEuOC0uMS4xLS4yLjItLjQuMy0uOC42MDEtMS43IDEuMTAxLTIuNiAxLjYwMWwtMSAuNWMtNTguMyAzMC4zOTktMTI1LjEgMzguNjk5LTE4OCAyNWwtLjItLjMwMWMtMzIuMS02LjQtNjIuNy0yMi04Ny42LTQ2LjktNTQuNy01NC43LTY0LjctMTM3LTMwLjEtMjAxLjkuMy0uNiAxLjYtMi44IDEuOC0zLjM5OSA1LjYtMTQuMjAxIDIuOS0zMC44LTguMS00Mi41LS4zLS4zLTEtMS4yMDEtMS0xLjIwMS0zLjgtMy43OTktMy44LTkuNzk5IDAtMTMuNTk5LjktLjgwMSAxLjgtMS41IDIuOS0yLjEwMWwuMS0uMDk5YzU4LjctMzAuNjAxIDEyNi4xLTM4LjggMTg5LjUtMjQuNSAzMiA2LjM5OSA2Mi42IDIyIDg3LjQgNDYuODk5IDUzLjkgNTQgNjQuMyAxMzUuMTAxIDMxLjEgMTk5LjYwMSIvPiA8L2c+IDwvZz4gPC9zdmc+", 1], ["samyang", "data:image/png;base64,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", 0], ["viltrox", "data:image/png;base64,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", 0], ["zhiyun", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAAoCAQAAACGRNpNAAABpklEQVR42u2ZQXLDIAxFNcBRmImPkoUPk6P0MF7kKCw4ihl30abFjmSTAILW+t5kCBHKsxACYJmTHrfA9+PQdrtpn4j+x/bnJdb8Y3/dTo1L+TlF9pP8MaDhVcW/sNGnlHZKFt4VZZ/yB9L8USBCJWAEjIARMDVlICSsPTny0YqwtRmiXq0UcN8MDGj3K3wUQjNGS+a0shmIsXmxDKhvYNB3ZYthiWPBg4cL8V07edwThWJxxbCs7dpuU4o9BvMqln7/bGbyTcES4EamaFc4WXcJhsIy7GQD/T8jRmViOUGBR2EZz4jldypJtKAR0y8W3xJMz9HyqH0s/1TKxRKqrk4aHAzPBTsHmFwsXz1rVcuPSklzl5UqexL56llFIz56jhzTV265kQch6yKCGUz7uuUOwwEallenEMfaHwTsoWGK6D6PNmk0bBO91zNfHA1j/uv3MNzDuEHDmv96viW4P6FizH9yfdIFGP+XwdQsti3DWIU2nQbdmeCrxHty5IVbPJYvdMd0KXUGbZCdSek3qHc2iOVjR9eaSiIBI2AEjIA5ORjfboRPSbNZHMWGiykAAAAASUVORK5CYII=", 0]];
  var LOGOC = {"zhiyun":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAAoCAMAAAAbk+L0AAAAYFBMVEXjWGTQIi7nl5rYFCHgdoq8CBn7nc7kKkx/CQnTLTixTVjp6el/AH+ZzMzZChgAAADYEB36AATZFSPRBiXgChfXCxr/AD/uU1fQBhn+qanfPz/ZPkfpKlTPKDHUf3/ybHgGs/0aAAAAIHRSTlMTGwnbDgYFGwJKCAMCBfwA9QTsEf/dBBcPCxgbDDcMFG0iH1EAAAJoSURBVHja7djrdqMgEABgKLWadpdhkBizjbvv/5YLKjch1kpbT8/p/EjRjvpljIAQycUiOHsAqNjc/gdA5hzW6DZL8gV7NjljU4oegMp5/xPAK+NjnHVOdZ7a7AWglSK9LuFJKE50sv5jQhqMmPd3uj3vX+Zf7JbBzE2pv9QfoaacmzunklcAzF433cnPI4Y7zEXM+zsHi2MVM2/cgnPmMTyHUXcw6gfzfTB3fvAfgwmfrS2Y6TG3h0+PcAkmPBsJ4vQ2BqfM2v532gTcjRnPIPzttjGILAaRBJgptQ8uZ6IA81t3jK4yDZr4RbVF5fqZx7gyMOY7DDFbTVFlEF95XJnK1UVflF3RH0hut3pRGfSVebR7dmP+hpVJLFwMULsDuQiesi/BLC3oKxM98l+BSSxwHGZp6eA4zNJSwXGYLrlHJRjFmwYLKkNTS0llBoDTbgx1fZ29R2UYVp/YbkymLiFG1oh0Q6fnRnMl3Ld7P4andYkwD34OvILR41c6N2bXZicmqEuEyQyUKUZ/DstZlxp78l2YyBJhFgNlHpNqlKxNT74PoytQgllqlKD6ru/F1GWVAd1xD2xh2Y0hpRitoU4zWQ7EQOu6O23p4FgMYmV7PkAswqCPNQym007/G7aj0tl1hh6DuB1zAdhamWBCfo2PcpinBFMHgLefptZGT1/uYwjtdYobl4k5gG7ACNq2w/bhwIdZn1l5iUvzib30SmWCeA9mXp+593qbXZ/5NAzf8eL/eZX5wXxLDFlfnynCiAiTLoEKM7uzy6fmxd/msMq3o3yHqeQUunOw09FMvlmS7X2mzpnjP60YSAR7OnZLAAAAAElFTkSuQmCC","fujifilm":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO4AAAAoCAMAAADOgTa5AAAAYFBMVEX//v4AAAD/////////////////////Ejz/////////AAD/VX//AH//ETv/Ej3/E0D/AFX/Ez3/VVX/AD//Cjf/Dzr/Fjf/Ejz/Ej3/Ej3/GkP/P3//QGP/Y3//4OoAAABpSCujAAAAIHRSTlP9AATNSpGs+XMsAQYCutb/A0gEBKvtFzdslSYEfhIZAAKUNlIAAANvSURBVHja3ZrXltwgDIbNTxlwsnZ20+v7P2ZwAUQxGWew5xxrr8YU6bMsEGg7JlRXFM5g/4T/beyvVehjhMdpG1+b3rPXYRhut9twe7E/lm6A5mXFclIM41vFMk3hUVBK2jpNGsESLaLrariyjKsquDzF7fthvM0yDh6XzFzCJc0Ol+luE5cYNI8v+GW1qTEuy3B79u7mxHnXjurquCrHlRVcHhvuvb6JdyTukOOKbrd378QNJtVeqp3EUEGiorF3Ka4WVMyjuCLgbr9UG+KZnIMr6op34+qAKyvORSyn4aKueDeuCriV0BWZ4Wfh1hXfjctXqzjciCV0ubwkrhKxqU6JFNf0Lso7tdDXxHWqpRuxmImr4kq6VvnQZc/CHV/YhyNxBZ0RzCzwz/LuOHzt+yNxQW11oas3vHv0vju+fGG9S2a3990HcJ1uveCq1fAirjk4qxq/v62fsqWlJrBGWZXFlTTtXs4HHGVcriIxrU9E31jf+9Sd7vxSUxGLZ/4PV7hEAz50JSvjZs5ui/vKPgZata1XPYKLYFUI3dNxh3H4wd78gmBqeh/B9UmymHCli9GTcX9+/tTT+5TuOFzp1yq40N1QqGQkaIf7+xfwZ112gSxhj9cM/RCuCO/M+FXr1JWZfryKue1GkGuTZiuzv76YfCr8nnTqvpvgrr0Ibrt9F94yw3zo4twkMsXNvYtm3vVoIuy6T8ZNk8i2uMYnGj56rozrgjeE7oVxg2nwoXtt3JXNKBe6Z+Gqp+CuypbakGLHLlXuHPI8XHTJlfMeXP0PXI50BNLr7VNx4+rYmgnfjytoFlK4xVZZ6TErkR6BiwougePYiYtCHdEmCVuDEDneoTXH1SxOwyJckx037sWNdLh8CIw+nLURzXkR9gDcPIQILpJq0R5c4kjuzhBGFSvlc3+Zfw3NcKnV5Og2n209bhS8ZidufGXIpRZCq7T4BDOVSm2LpE1Aa1yxWQ+OcXUUurtwqzXSGalcM5aethXuZik+wzWJN4q4HCjhTsPVVkF4WSZyM/j8gRVwZQFXFnFVtgPaefhduP71GyS4qvNFcxSdO3dnRuZEGgwo/keAEiC0Uwd/zYhgur95LL1ma2J0u+EmElJlMntfhp5urAwboVfVRVgbvJjjUyq+iLIhjDAACC/DttGmxoKH+/8FmLsx3sRREAAAAAAASUVORK5CYII=","canon":"data:image/png;base64,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","gopro":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAAAoCAMAAADqmLl5AAAAYFBMVEUAf38HXKoNWrIAAP+8vP8PnNkOm9cAf/8Om9ez8/MA//8LndUGXaoAqqp/f/9///9/v78AAAD///8PnNj///8GXar///////////////8Jp+z///8QpOP///8QoN4GYrMc3BmNAAAAIHRSTlMCqRABA9BnAogEAQ/eAwICBAD8/QT9Lo5N0gus/Wr+/fMoxsAAAAKASURBVHja7ZZrVyMhDIZxt13dqaubNgYQ0f//LyVcptzS1vXjznuOxw4kmYcQwigEIO/sMUlDeL5RCOY4k3We4AtxQAG52n/qjJ0Kgz5KclTitD7TUCqvxVrHMiPC2b8bSgxWd3JpTQmi9RVCKd4FZxDljIc/IjJFRAkgM+jRJWbWISYrjL4IWEKZPpRKzGuWJghmrZY10z6FjAw4CDznBzkJpLOv43H0bqidQJcYZm8vqXLTuiN+g55WMWJhiDDZgYHstHRKHnBagGvdaX9OoI9Ls4hiHjJDPjehYLz3zBz92lARYmBoiwhw3atq1GYfoR7iuAvznEKP9Um2XdKIw495qKovM9juRMXYJjM46mTSppvMQMU5Muj+cNqRARNZFm9G2dp6s2oGQR4yK+VKywxN3SH8MwNcY7A6rr7koWaA6wy8F56lb2WwvlXYwtQ/vsowNmJqGDo19TA/0iAwoFQPZoxiaoZ+smGYnM3CMctDBxvPRewb2nS1rUtvi6C6SRT5xIfrGRTaW8cQU+vbUGxh1bx5nXvheqcVVXX/FYZzCfehSIUmPqWw8U7gFE6adbxfrzCEcdswhNZtp7e84veEvsJ3blG4gD1hbpn8jVNPhzlD+d4kZ625wGCs1dWZCj/J6zYUx1GAci6b/8ONPnT2C3ayNX8/LMvy9Ju1Oys8/X0OE8lqaabjw9MStXtOcX8K2i2ww+nnUyMF3xPC96VeZR0O0eRwkC1eo8WPS7ohD/uTpP3bL/gDcP/wvr9ooeDu4/FlrsePuzDPHzNiCwj94fQu6RTeENZ5v3+TLR6CBTO8SMoMF25YZpC1MsgWG8PGsDFsDBvDxrAx/IcMn4XTf4odELnRAAAAAElFTkSuQmCC","samyang":"data:image/png;base64,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"};
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
    /* seri sirasi (Bedirhan'in katalog sirasi); listede olmayan seri sona, kendi sirasiyla */
    var RANK = ['royal', 'carbon', 'lego', 'line', 'tactical', 'mono', 'topografik', 'nexus', 'hexagonal'];
    var rk = function (n) { var i = RANK.indexOf(n.toLowerCase()); return i < 0 ? 99 : i; };
    order = order.map(function (k, i) { return [k, i]; }).sort(function (a, b) { return (rk(a[0]) - rk(b[0])) || (a[1] - b[1]); }).map(function (x) { return x[0]; });
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
