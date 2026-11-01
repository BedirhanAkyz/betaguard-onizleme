/* Betaguard ana sayfa ONIZLEME - yalnizca ?onizleme=<sha> ile yuklenir (19_onizleme.js). Normal ziyaretci gormez. */
(function () {
  if (window.__bgOniz) return; window.__bgOniz = 1;
  if (location.pathname !== '/' && location.pathname !== '') return;
  var IMG = 'https://cdn.jsdelivr.net/gh/BedirhanAkyz/betaguard-onizleme@eb5ee5c0/img/';
  var P = [
    ['royal-gold', 'Royal Gold'], ['royal-navy', 'Royal Navy'], ['royal-black', 'Royal Black'], ['carbon', 'Carbon'],
    ['tactical-black', 'Tactical Black'], ['tactical-grey', 'Tactical Grey'], ['tactical-green', 'Tactical Green'], ['tactical-blue', 'Tactical Blue'], ['tactical-red', 'Tactical Red'],
    ['hexagonal-silver', 'Hexagonal Silver'], ['hexagonal-blue', 'Hexagonal Blue'], ['hexagonal-green', 'Hexagonal Green'], ['hexagonal-red', 'Hexagonal Red'],
    ['topografik-black', 'Topografik Black'], ['topografik-white', 'Topografik White'], ['topografik-navy', 'Topografik Navy'], ['topografik-blue', 'Topografik Blue'], ['topografik-green', 'Topografik Green'], ['topografik-red', 'Topografik Red'],
    ['line-black', 'Line Black'], ['line-white', 'Line White'], ['line-navy', 'Line Navy'], ['line-blue', 'Line Blue'], ['line-cyan', 'Line Cyan'], ['line-red', 'Line Red'],
    ['nexus-white', 'Nexus White'], ['nexus-blue', 'Nexus Blue'], ['nexus-cyan', 'Nexus Cyan'], ['nexus-red', 'Nexus Red'],
    ['mono-black', 'Mono Black'], ['mono-white', 'Mono White'], ['mono-red', 'Mono Red'], ['mono-blue', 'Mono Blue'], ['mono-green', 'Mono Green'], ['mono-yellow', 'Mono Yellow'], ['mono-orange', 'Mono Orange'], ['mono-pink', 'Mono Pink'], ['mono-brown', 'Mono Brown'],
    ['lego', 'Lego']
  ];
  var NAME = {}; P.forEach(function (p) { NAME[p[0]] = p[1]; });
  var FEAT = ['royal-gold', 'carbon', 'topografik-navy', 'tactical-black', 'nexus-cyan', 'hexagonal-red', 'line-cyan', 'mono-white', 'royal-navy', 'tactical-green', 'line-red', 'mono-orange'];
  var LIM = { 'line-red': 1, 'nexus-red': 1 };
  var NOBARE = { 'kamera-sony-alpha-a6300': 1, 'kamera-canon-eos-50d': 1 };
  var G = '#C9A45C';

  function devs() { return window.__bgDevices || []; }
  function bySlug(s) { var L = devs(); for (var i = 0; i < L.length; i++) if (L[i].s === s) return L[i]; return null; }
  var DEF = { s: 'sony-alpha-a7-iv-kaplama', t: 'K', b: 'Sony', m: 'Alpha A7 IV', p: 2000, f: 'kamera-sony-alpha-a7-mark-iv' };
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function fmt(n) { return Number(n).toLocaleString('tr-TR') + ' ₺'; }
  function ease(k) { return k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2; }
  function clamp(x, a, b) { return Math.max(a, Math.min(b, x)); }

  var IMC = {};
  function limg(u) {
    if (IMC[u]) return IMC[u];
    return (IMC[u] = new Promise(function (res) { var im = new Image(); im.crossOrigin = 'anonymous'; im.decoding = 'async'; im.onload = function () { res(im); }; im.onerror = function () { delete IMC[u]; res(null); }; im.src = u; }));
  }
  function comp(d, slug, N) {
    return Promise.all([limg(IMG + d.f + '/' + slug + '.webp'), limg(IMG + d.f + '/bare.webp')]).then(function (r) {
      var c = document.createElement('canvas'); c.width = c.height = N; var x = c.getContext('2d');
      if (r[0]) x.drawImage(r[0], 0, 0, N, N);
      if (r[1]) { x.globalCompositeOperation = 'destination-in'; x.drawImage(r[1], 0, 0, N, N); }
      return c;
    });
  }
  function bare(d, N) {
    return limg(IMG + d.f + '/bare.webp').then(function (im) { var c = document.createElement('canvas'); c.width = c.height = N; if (im) c.getContext('2d').drawImage(im, 0, 0, N, N); return c; });
  }
  function glint(x, cx, N, W, col) {
    x.save(); x.globalCompositeOperation = 'source-atop';
    var g = x.createLinearGradient(cx - W, 0, cx + W, 0);
    g.addColorStop(0, 'rgba(' + col + ',0)'); g.addColorStop(.5, 'rgba(' + col + ',.9)'); g.addColorStop(1, 'rgba(' + col + ',0)');
    x.fillStyle = g; x.fillRect(cx - W, 0, 2 * W, N); x.restore();
  }
  /* cv tuvalinde from -> to gecisi (soldan saga, altin isik) */
  function wipe(cv, from, to, D, dir, cb) {
    var x = cv.getContext('2d'), N = cv.width, W = N * .09, t0 = 0, tok = {}; cv.__tok = tok;
    function fr(now) {
      if (cv.__tok !== tok) return;
      if (!t0) t0 = now;
      var k = Math.min(1, (now - t0) / D), e = ease(k), px = dir < 0 ? N - (e * (N + 2 * W) - W) : e * (N + 2 * W) - W;
      x.clearRect(0, 0, N, N); if (from) x.drawImage(from, 0, 0);
      x.save(); x.beginPath(); if (dir < 0) x.rect(Math.max(0, px), 0, N, N); else x.rect(0, 0, Math.max(0, px), N); x.clip(); x.drawImage(to, 0, 0); x.restore();
      if (k < 1) { glint(x, px, N, W, '255,236,190'); requestAnimationFrame(fr); } else { x.clearRect(0, 0, N, N); x.drawImage(to, 0, 0); if (cb) cb(); }
    }
    requestAnimationFrame(fr);
  }
  function show(cv, c) { cv.__tok = {}; var x = cv.getContext('2d'); x.clearRect(0, 0, cv.width, cv.height); x.drawImage(c, 0, 0); }

  /* sahnedeki secim: cihaz + desen */
  function stage() {
    var a = document.querySelector('.bgs-go'); var h = a ? a.getAttribute('href') || '' : '';
    var m = /^\/([^?]+)\?desen=([a-z0-9-]+)/.exec(h);
    var d = m && bySlug(m[1]);
    return { d: d || bySlug(DEF.s) || DEF, p: m && NAME[m[2]] ? m[2] : 'royal-gold', live: !!m };
  }
  var SUBS = [], last = '';
  function onStage(fn) { SUBS.push(fn); }
  function watchStage() {
    var a = document.querySelector('.bgs-go'); if (!a || a.__bgoW) return; a.__bgoW = 1;
    var sec = document.querySelector('[data-bgs]'), touched = 0;
    if (sec) ['pointerdown', 'keydown', 'input', 'touchend'].forEach(function (ev) { sec.addEventListener(ev, function () { touched = Date.now(); }, true); });
    new MutationObserver(function () { var h = a.getAttribute('href'); if (h === last) return; last = h; if (Date.now() - touched > 8000) return; var s = stage(); SUBS.forEach(function (f) { try { f(s); } catch (e) {} }); }).observe(a, { attributes: true, attributeFilter: ['href'] });
    last = a.getAttribute('href');
  }
  function stagePick(slug) {
    var b = document.querySelector('.bgs-cl button[data-p="' + slug + '"]');
    if (b) { b.click(); var s = document.querySelector('[data-bgs]'); if (s) s.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  }

  var css = [
    '.bgo{position:relative;max-width:1240px;margin:44px auto;padding:28px 24px 30px;box-sizing:border-box;color:#F2F0EB;font-family:Manrope,sans-serif;border:1px dashed rgba(201,164,92,.45);border-radius:24px}',
    '.bgo *{box-sizing:border-box}',
    '.bgo-bd{position:absolute;top:-13px;left:22px;display:inline-flex;align-items:center;gap:8px;padding:5px 12px;border-radius:999px;background:' + G + ';color:#0E0E0F;font:800 11px/1.2 Manrope,sans-serif;letter-spacing:.1em;z-index:5}',
    '.bgo h2{margin:0;font:italic 900 clamp(28px,3.4vw,42px)/1.05 Archivo,sans-serif!important;color:#F2F0EB}',
    '.bgo-sub{margin:8px 0 0;font-size:15px;line-height:1.6;color:#A9A59D;max-width:620px}',
    '.bgo-hd{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:16px;margin-bottom:22px}',
    '.bgo-chips{display:flex;flex-wrap:wrap;gap:8px}',
    '.bgo-chips button{width:40px;height:40px;padding:3px;border-radius:50%;border:2px solid #3A383F;background:#0E0E0F;cursor:pointer;transition:transform .2s,border-color .2s}',
    '.bgo-chips button:hover{transform:translateY(-2px)}.bgo-chips button.on{border-color:#E2C285}',
    '.bgo-chips img{width:100%!important;height:100%!important;border-radius:50%!important;object-fit:cover;display:block}',
    '.bgo-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:44px;padding:0 20px;border-radius:999px;border:1px solid #4A4850;background:transparent;color:#F2F0EB!important;font:700 14px Manrope,sans-serif;text-decoration:none!important;cursor:pointer;transition:background .2s,border-color .2s,color .2s}',
    '.bgo-btn:hover{border-color:' + G + '}.bgo-btn.g{background:' + G + ';border-color:' + G + ';color:#0E0E0F!important}.bgo-btn.g:hover{background:#E2C285}',
    '.bgo-old{position:relative;opacity:.5}.bgo-old:before{content:"MEVCUT HALİ";position:absolute;top:-10px;right:24px;z-index:3;padding:4px 10px;border-radius:999px;background:#2A292E;color:#A9A59D;font:800 10px Manrope,sans-serif;letter-spacing:.12em}',
    /* nav */
    '.bgo-nav{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:2147483000;display:flex;align-items:center;gap:6px;padding:6px 8px 6px 14px;border-radius:999px;background:rgba(14,14,15,.92);border:1px solid ' + G + ';box-shadow:0 10px 30px rgba(0,0,0,.5);font:800 11px Manrope,sans-serif;color:#E2C285;letter-spacing:.1em;backdrop-filter:blur(8px)}',
    '.bgo-nav button{width:32px;height:32px;border-radius:50%;border:1px solid #3A383F;background:#141416;color:#F2F0EB;font:800 13px Manrope,sans-serif;cursor:pointer}',
    '.bgo-nav button:hover{border-color:' + G + ';color:#E2C285}',
    /* 1+4 raf */
    '.bgo-row{margin-bottom:30px}',
    '.bgo-row-i{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;align-items:end;padding:0 6px}',
    '.bgo-it{position:relative;display:flex;flex-direction:column;align-items:center;text-decoration:none!important;color:#F2F0EB!important;padding-top:44px}',
    '.bgo-it canvas{width:100%;max-width:230px;aspect-ratio:1/1;display:block;transition:transform .35s ease,filter .35s ease;filter:drop-shadow(0 16px 16px rgba(0,0,0,.6));margin-bottom:-14%}',
    '.bgo-it:hover canvas,.bgo-it:focus-visible canvas{transform:translateY(-12px) scale(1.05);filter:drop-shadow(0 22px 22px rgba(0,0,0,.7)) drop-shadow(0 0 22px rgba(226,194,133,.35))}',
    '.bgo-lb{position:absolute;top:0;left:0;right:0;text-align:center;display:flex;flex-direction:column;gap:2px;opacity:0;transform:translateY(6px);transition:opacity .3s,transform .3s;pointer-events:none}',
    '.bgo-it:hover .bgo-lb,.bgo-it:focus-visible .bgo-lb{opacity:1;transform:none}',
    '.bgo-lb b{font-size:13px}.bgo-lb span{font-size:12px;color:#E2C285}',
    '.bgo-sp{position:absolute;left:8%;right:8%;bottom:-4px;height:120px;background:radial-gradient(60% 70% at 50% 100%,rgba(226,194,133,.2),transparent 70%);opacity:0;transition:opacity .35s;pointer-events:none}.bgo-it:hover .bgo-sp{opacity:1}',
    '.bgo-plate{height:14px;border-radius:3px;background:linear-gradient(180deg,rgba(255,255,255,.16),rgba(255,255,255,.04));border-top:1px solid rgba(255,255,255,.35)}',
    '.bgo-led{height:3px;margin:0 2%;border-radius:3px;background:' + G + ';box-shadow:0 0 14px 3px rgba(201,164,92,.55),0 14px 40px 10px rgba(201,164,92,.16)}',
    '.bgo-wall{border-radius:20px;border:1px solid #26252A;padding:10px clamp(8px,2vw,28px) 4px;background:repeating-linear-gradient(90deg,#121214 0,#121214 118px,#141416 118px,#141416 120px)}',
    '.bgo-tag{font-size:13px;color:#A3A09A}.bgo-tag b{color:#E2C285}',
    '@media (max-width:760px){.bgo{margin:30px 12px;padding:24px 14px}.bgo-row-i{grid-template-columns:repeat(2,minmax(0,1fr))}.bgo-lb{opacity:1;transform:none}.bgo-it{padding-top:40px}}',
    /* 5 test */
    '.bgo-q{display:flex;flex-direction:column;gap:12px;margin-bottom:18px}',
    '.bgo-q h3{margin:0;font:800 17px Manrope,sans-serif;color:#F2F0EB}.bgo-q h3 i{font-style:normal;color:#E2C285;margin-right:8px}',
    '.bgo-opts{display:flex;flex-wrap:wrap;gap:8px}',
    '.bgo-opts button{min-height:44px;padding:0 18px;border-radius:999px;border:1px solid #3A383F;background:#141416;color:#F2F0EB;font:700 14px Manrope,sans-serif;cursor:pointer;transition:background .2s,border-color .2s,color .2s}',
    '.bgo-opts button:hover{border-color:' + G + '}.bgo-opts button.on{background:' + G + ';border-color:' + G + ';color:#0E0E0F}',
    '.bgo-res{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin-top:8px}',
    '.bgo-rc{border:1px solid #2A292E;border-radius:18px;background:radial-gradient(70% 60% at 50% 40%,rgba(201,164,92,.1),transparent 70%),#141416;padding:16px;display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center}',
    '.bgo-rc canvas{width:100%;max-width:240px;aspect-ratio:1/1;filter:drop-shadow(0 16px 16px rgba(0,0,0,.6))}',
    '.bgo-rc em{font:italic 900 22px Archivo,sans-serif;color:#E2C285}.bgo-rc small{font-size:12px;color:#A3A09A}.bgo-rc .n{font:800 11px Manrope,sans-serif;letter-spacing:.14em;color:#8E8A83}',
    '.bgo-rc div{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-top:4px}',
    '@media (max-width:760px){.bgo-res{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:80%;overflow-x:auto;scroll-snap-type:x mandatory}.bgo-rc{scroll-snap-align:start}}',
    /* 7 cizik */
    '.bgo-sc{display:flex;flex-wrap:wrap;gap:28px;align-items:center}',
    '.bgo-sc-l{flex:1 1 300px;max-width:420px;display:flex;flex-direction:column;gap:16px}',
    '.bgo-sc-r{flex:2 1 420px;min-width:0;display:flex;flex-direction:column;align-items:center;position:relative}',
    '.bgo-sc-r canvas{width:min(560px,100%);aspect-ratio:1/1;touch-action:none;cursor:crosshair;filter:drop-shadow(0 26px 26px rgba(0,0,0,.6))}',
    '.bgo-hint{position:absolute;top:46%;left:50%;transform:translate(-50%,-50%);padding:10px 16px;border-radius:999px;background:rgba(14,14,15,.85);border:1px solid ' + G + ';font:700 13px Manrope,sans-serif;color:#E2C285;pointer-events:none;transition:opacity .4s;white-space:nowrap}',
    '.bgo-msg{font-size:15px;line-height:1.6;color:#B9B5AD;min-height:48px}.bgo-msg b{color:#7CD3A0}',
    '.bgo-ped{width:min(420px,80%);height:50px;margin-top:-30px;border-radius:50%;background:radial-gradient(ellipse at 50% 30%,#2A292E 0%,#161618 55%,transparent 80%);border-top:1px solid rgba(226,194,133,.45);box-shadow:0 -4px 30px rgba(201,164,92,.25)}',
    /* 3 aski */
    '.bgo-ak{display:flex;flex-wrap:wrap;gap:28px;align-items:center;margin-bottom:18px}',
    '.bgo-ak-c{flex:2 1 420px;min-width:0;display:flex;flex-direction:column;align-items:center;position:relative}',
    '.bgo-ak-c canvas{width:min(520px,100%);aspect-ratio:1/1;filter:drop-shadow(0 26px 26px rgba(0,0,0,.6));animation:bgoF 6s ease-in-out infinite}',
    '@keyframes bgoF{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}',
    '.bgo-ak-i{flex:1 1 240px;max-width:320px;display:flex;flex-direction:column;gap:12px}',
    '.bgo-ak-i em{font:italic 900 34px/1 Archivo,sans-serif;color:#E2C285}.bgo-ak-i small{font-size:13px;color:#A3A09A}',
    '.bgo-ak-sw{width:120px;height:160px;border-radius:12px;overflow:hidden;border:1px solid #3A383F;position:relative}.bgo-ak-sw img{width:100%!important;height:100%!important;object-fit:cover;display:block}',
    '.bgo-lim{position:absolute;top:8px;left:8px;padding:3px 7px;border-radius:5px;background:#0E0E0F;color:#E2C285;font:800 9px Manrope,sans-serif;letter-spacing:.12em}',
    '.bgo-grp{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}',
    '.bgo-grp button{min-height:36px;padding:0 14px;border-radius:999px;border:1px solid #3A383F;background:transparent;color:#F2F0EB;font:700 12px Manrope,sans-serif;cursor:pointer}',
    '.bgo-grp button.on{background:' + G + ';border-color:' + G + ';color:#0E0E0F}',
    '.bgo-rail{position:relative;border-radius:18px;border:1px solid #26252A;background:#121214;padding-bottom:12px}',
    '.bgo-rail:before{content:"";position:absolute;left:18px;right:18px;top:24px;height:6px;border-radius:3px;background:linear-gradient(180deg,#F2D9A0,#C9A45C 50%,#8A6D35);box-shadow:0 4px 10px rgba(0,0,0,.6)}',
    '.bgo-rail-t{position:relative;display:flex;gap:12px;overflow-x:auto;padding:16px 24px 8px;scroll-snap-type:x proximity;scrollbar-width:thin}',
    '.bgo-hg{flex:0 0 auto;width:104px;border:0;background:transparent;padding:0;cursor:pointer;display:flex;flex-direction:column;align-items:center;color:#F2F0EB;font:700 11px Manrope,sans-serif;transform-origin:50% 0;scroll-snap-align:start}',
    '.bgo-hg:hover{animation:bgoSw 1.1s ease}',
    '@keyframes bgoSw{0%{transform:rotate(0)}30%{transform:rotate(5deg)}60%{transform:rotate(-3deg)}85%{transform:rotate(1.5deg)}100%{transform:rotate(0)}}',
    '.bgo-hg .cd{position:relative;width:92px;height:124px;margin-top:-2px;border-radius:9px;overflow:hidden;border:2px solid transparent;box-shadow:0 10px 18px rgba(0,0,0,.5);transition:transform .3s}',
    '.bgo-hg .cd img{width:100%!important;height:100%!important;object-fit:cover;display:block}',
    '.bgo-hg.on .cd{border-color:#E2C285;transform:translateY(8px) scale(1.07)}.bgo-hg.on span{color:#E2C285}',
    '.bgo-hg span{margin-top:9px;text-align:center}',
    /* 6 buyutec */
    '.bgo-mg{display:flex;flex-wrap:wrap;gap:28px;align-items:center}',
    '.bgo-mg-c{flex:2 1 420px;min-width:0;position:relative;display:flex;justify-content:center}',
    '.bgo-mg-c canvas.d{width:min(560px,100%);aspect-ratio:1/1;cursor:none;touch-action:none;filter:drop-shadow(0 26px 26px rgba(0,0,0,.6))}',
    '.bgo-lens{position:absolute;width:190px;height:190px;border-radius:50%;border:2px solid #E2C285;box-shadow:0 12px 30px rgba(0,0,0,.6),inset 0 0 0 4px rgba(14,14,15,.6);pointer-events:none;opacity:0;transition:opacity .2s;overflow:hidden;background:#0E0E0F}',
    '.bgo-lens canvas{width:100%;height:100%;display:block}',
    '.bgo-mg-l{flex:1 1 260px;max-width:380px;display:flex;flex-direction:column;gap:16px}',
    /* 2 adimlar */
    '.bgo-st{max-width:none;margin:44px 12px;padding:0;border:0}',
    '.bgo-st-scroll{position:relative;height:360vh}',
    '.bgo-st-sticky{position:sticky;top:0;height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden}',
    '.bgo-st-in{width:min(1240px,100%);display:flex;flex-wrap:wrap;gap:24px 40px;align-items:center;padding:0 24px;border:1px dashed rgba(201,164,92,.45);border-radius:24px;padding:40px 28px;position:relative}',
    '.bgo-st-l{flex:1 1 300px;max-width:420px;display:flex;flex-direction:column;gap:10px}',
    '.bgo-eb{font:800 12px/1 Manrope,sans-serif;letter-spacing:.2em;color:' + G + '}',
    '.bgo-step{display:flex;gap:14px;align-items:flex-start;width:100%;text-align:left;font-family:Manrope,sans-serif;color:inherit;cursor:pointer;padding:14px 16px;border-radius:14px;border:1px solid transparent;background:transparent;opacity:.42;transition:opacity .3s,border-color .3s,background .3s}',
    '.bgo-step:hover{opacity:.75}.bgo-step.dn{opacity:.6}',
    '.bgo-step .ic{flex:0 0 auto;width:42px;height:42px;border-radius:12px;border:1px solid #3A383F;display:flex;align-items:center;justify-content:center;transition:border-color .3s,background .3s}',
    '.bgo-step .ic svg{width:22px;height:22px;fill:none;stroke:#E2C285;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}',
    '.bgo-step.on .ic{border-color:' + G + ';background:rgba(201,164,92,.12)}',
    '.bgo-step b em{font:italic 900 14px Archivo,sans-serif;color:' + G + ';margin-right:8px;font-style:italic}',
    '.bgo-num{position:absolute;top:2%;left:50%;transform:translateX(-50%);font:italic 900 clamp(150px,18vw,260px)/1 Archivo,sans-serif;color:transparent;-webkit-text-stroke:1.5px rgba(226,194,133,.16);pointer-events:none;user-select:none}',
    '.bgo-num.in{animation:bgoNum .5s ease}@keyframes bgoNum{from{opacity:0;transform:translate(-50%,16px)}to{opacity:1;transform:translateX(-50%)}}',
    '.bgo-st-r{position:relative}',
    '.bgo-st-r canvas{position:relative;z-index:1}',
    '.bgo-cap{margin:2px 0 0;font:700 15px Manrope,sans-serif;color:#E2C285;min-height:22px;text-align:center}',
    '.bgo-dots{display:flex;gap:8px;margin-top:10px}.bgo-dots i{width:46px;height:4px;border-radius:4px;background:#2A292E;overflow:hidden;position:relative}.bgo-dots i:after{content:"";position:absolute;inset:0;background:' + G + ';transform-origin:0 50%;transform:scaleX(var(--f,0))}',
    '.bgo-end{display:flex;flex-wrap:wrap;gap:10px;margin-top:8px;opacity:0;transform:translateY(8px);transition:opacity .4s,transform .4s;pointer-events:none}.bgo-end.on{opacity:1;transform:none;pointer-events:auto}',
    '.bgo-step.on{opacity:1;border-color:#3A3426;background:linear-gradient(120deg,#1B1912,#141317 70%)}',
    '.bgo-step i{font:italic 900 26px/1 Archivo,sans-serif;color:' + G + ';font-style:italic;min-width:38px}',
    '.bgo-step b{display:block;font:800 17px Manrope,sans-serif;color:#F2F0EB;margin-bottom:4px}.bgo-step span{font-size:14px;line-height:1.55;color:#A9A59D}',
    '.bgo-st-r{flex:2 1 420px;min-width:0;display:flex;flex-direction:column;align-items:center}',
    '.bgo-st-r canvas{width:min(520px,100%);aspect-ratio:1/1;filter:drop-shadow(0 26px 26px rgba(0,0,0,.6))}',
    '.bgo-bar{width:min(420px,80%);height:4px;border-radius:4px;background:#2A292E;overflow:hidden;margin-top:6px}.bgo-bar i{display:block;height:100%;width:0;background:' + G + '}',
    '@media (max-width:760px){.bgo-st-in{padding:30px 14px;gap:14px}.bgo-st-l{order:2}.bgo-st-r{order:1}.bgo-step{padding:10px 12px}.bgo-step span{display:none}.bgo-step.on span{display:block}.bgo-st-r canvas{width:min(330px,100%)}}'
  ].join('');

  function badge(n, t) { return '<span class="bgo-bd">ÖNİZLEME ' + n + ' · ' + t + '</span>'; }
  function chips(list, cls) { return '<div class="bgo-chips ' + (cls || '') + '">' + list.map(function (s) { return '<button type="button" data-p="' + s + '" aria-label="' + esc(NAME[s]) + '" aria-pressed="false"><img alt="" loading="lazy" src="' + IMG + 'site/desen/' + s + '.webp"></button>'; }).join('') + '</div>'; }
  function markChips(root, s) { [].forEach.call(root.querySelectorAll('.bgo-chips button'), function (b) { var on = b.getAttribute('data-p') === s; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); }); }

  /* ===== 1 + 4: vitrin rafi + secilen desen tum cihazlarda ===== */
  function S14() {
    var pop = document.querySelector('.bg26-pop'); if (!pop || pop.querySelector('[data-bgo14]')) return !!pop;
    var g = pop.querySelector('.bg26-pop-g'); if (!g) return false;
    var items = [].map.call(g.querySelectorAll('a.bg26-it'), function (a) { var h = a.getAttribute('href') || ''; var m = /^\/([^?]+)(?:\?desen=([a-z0-9-]+))?/.exec(h); var d = m && bySlug(m[1]); return d ? { d: d, p: m[2] && NAME[m[2]] ? m[2] : 'royal-gold' } : null; }).filter(Boolean);
    if (!items.length) return false;
    var box = document.createElement('div'); box.className = 'bgo'; box.setAttribute('data-bgo14', '1'); box.id = 'bgo-1';
    var per = window.matchMedia('(max-width:760px)').matches ? 2 : 4, rows = '';
    for (var i = 0; i < items.length; i += per) {
      rows += '<div class="bgo-row"><div class="bgo-row-i">' + items.slice(i, i + per).map(function (it, k) {
        return '<a class="bgo-it" data-i="' + (i + k) + '" href="/' + it.d.s + '?desen=' + it.p + '"><span class="bgo-sp" aria-hidden="true"></span><span class="bgo-lb"><b>' + esc(it.d.b + ' ' + it.d.m) + '</b><span>' + fmt(it.d.p) + ' · bu desenle gör →</span></span><canvas width="500" height="500" role="img" aria-label="' + esc(it.d.b + ' ' + it.d.m) + '"></canvas></a>';
      }).join('') + '</div><div class="bgo-plate" aria-hidden="true"></div><div class="bgo-led" aria-hidden="true"></div></div>';
    }
    box.innerHTML = badge('1 + 4', 'Vitrin rafı · seçtiğin desen her cihazda') +
      '<div class="bgo-hd"><div><p class="bgo-tag">Rafın deseni: <b class="bgo-cur">Her cihaz kendi deseninde</b></p><p class="bgo-sub" style="margin-top:4px">Yukarıdaki sahnede bir desen seçince raftaki bütün cihazlar o desene bürünür. Buradan da seçebilirsin.</p></div>' + chips(FEAT) + '</div>' +
      '<div class="bgo-wall">' + rows + '</div>';
    g.parentNode.insertBefore(box, g); g.style.display = 'none';
    var cvs = box.querySelectorAll('canvas'), cur = {};
    items.forEach(function (it, i) { comp(it.d, it.p, 500).then(function (c) { cur[i] = c; show(cvs[i], c); }); });
    function all(slug, src) {
      markChips(box, slug); box.querySelector('.bgo-cur').textContent = NAME[slug] + (src ? ' (sahneden)' : '');
      items.forEach(function (it, i) {
        it.p = slug; var a = box.querySelector('.bgo-it[data-i="' + i + '"]'); a.setAttribute('href', '/' + it.d.s + '?desen=' + slug);
        comp(it.d, slug, 500).then(function (c) { setTimeout(function () { wipe(cvs[i], cur[i], c, 900, 1, null); cur[i] = c; }, i * 90); });
      });
    }
    box.querySelector('.bgo-chips').addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) all(b.getAttribute('data-p')); });
    onStage(function (s) { all(s.p, 1); });
    return true;
  }

  /* ===== 5: desen bulucu test ===== */
  var FAM = function (s) { return s.split('-')[0]; };
  var TAG = {
    style: { sade: 'mono-black mono-white mono-green mono-blue mono-brown carbon line-black tactical-black tactical-grey royal-black topografik-black topografik-white hexagonal-silver', dikkat: 'line-red nexus-red hexagonal-red tactical-red mono-red mono-orange mono-yellow nexus-cyan line-cyan hexagonal-blue tactical-blue line-blue nexus-blue mono-pink lego', klasik: 'royal-gold royal-navy royal-black carbon mono-black mono-brown line-navy topografik-black mono-white', eglenceli: 'lego mono-pink mono-yellow mono-orange nexus-cyan line-cyan tactical-blue topografik-red topografik-blue tactical-green' },
    color: { siyah: 'carbon mono-black tactical-black line-black royal-black topografik-white hexagonal-silver tactical-grey line-navy', mavi: 'line-blue line-cyan line-navy tactical-blue hexagonal-blue nexus-blue nexus-cyan topografik-navy topografik-blue mono-blue royal-navy', sicak: 'royal-gold line-red tactical-red hexagonal-red nexus-red mono-red mono-orange mono-yellow topografik-red mono-brown lego mono-pink', yesil: 'tactical-green hexagonal-green topografik-green mono-green', acik: 'mono-white line-white nexus-white topografik-black topografik-green topografik-blue topografik-red tactical-grey' },
    place: { studyo: 'carbon mono-black royal-black line-black tactical-black mono-white royal-gold royal-navy', sokak: 'line-black line-white line-navy line-blue line-cyan line-red nexus-white nexus-blue nexus-cyan nexus-red hexagonal-silver hexagonal-blue hexagonal-red mono-red mono-orange mono-yellow', doga: 'tactical-black tactical-grey tactical-green tactical-blue tactical-red topografik-black topografik-white topografik-navy topografik-blue topografik-green topografik-red hexagonal-green mono-green mono-brown', etkinlik: 'royal-gold royal-navy nexus-red line-red mono-white carbon hexagonal-silver' }
  };
  var QS = [
    ['style', 'Tarzın nasıl?', [['sade', 'Sade'], ['klasik', 'Klasik, şık'], ['dikkat', 'Dikkat çekici'], ['eglenceli', 'Eğlenceli']]],
    ['color', 'Hangi renkler?', [['siyah', 'Siyah – gri'], ['mavi', 'Mavi tonları'], ['sicak', 'Kırmızı – altın – turuncu'], ['yesil', 'Yeşil'], ['acik', 'Beyaz – açık']]],
    ['place', 'En çok nerede çekiyorsun?', [['studyo', 'Stüdyo / iş'], ['sokak', 'Sokak / seyahat'], ['doga', 'Doğa / outdoor'], ['etkinlik', 'Düğün / etkinlik']]]
  ];
  function S5() {
    var pop = document.querySelector('.bg26-pop'); if (!pop) return false; if (document.querySelector('[data-bgo5]')) return true;
    var box = document.createElement('div'); box.className = 'bgo'; box.setAttribute('data-bgo5', '1'); box.id = 'bgo-5';
    box.innerHTML = badge(5, 'Sana uygun deseni bulalım') +
      '<div class="bgo-hd"><div><h2>Kararsız mısın? 3 soruda bulalım.</h2><p class="bgo-sub">Cevaplarına göre 39 desen arasından üçünü seçip <b class="bgo-dn"></b> üzerinde gösteriyoruz.</p></div></div>' +
      QS.map(function (q, i) { return '<div class="bgo-q" data-k="' + q[0] + '"><h3><i>0' + (i + 1) + '</i>' + q[1] + '</h3><div class="bgo-opts">' + q[2].map(function (o) { return '<button type="button" data-v="' + o[0] + '" aria-pressed="false">' + o[1] + '</button>'; }).join('') + '</div></div>'; }).join('') +
      '<div class="bgo-res" aria-live="polite"></div>';
    pop.parentNode.insertBefore(box, pop.nextSibling);
    var ans = {}, dev = stage().d;
    box.querySelector('.bgo-dn').textContent = dev.b + ' ' + dev.m;
    function inT(cat, key, s) { return (' ' + TAG[cat][key] + ' ').indexOf(' ' + s + ' ') >= 0; }
    function run() {
      var res = box.querySelector('.bgo-res');
      if (!ans.style || !ans.color || !ans.place) { res.innerHTML = ''; return; }
      var sc = P.map(function (p, i) { var s = p[0]; return [s, (inT('color', ans.color, s) ? 3 : 0) + (inT('style', ans.style, s) ? 2 : 0) + (inT('place', ans.place, s) ? 1 : 0) - (FEAT.indexOf(s) < 0 ? .1 : 0) - i * .001]; }).sort(function (a, b) { return b[1] - a[1]; });
      var pick = [], fams = {};
      sc.forEach(function (x) { if (pick.length < 3 && !fams[FAM(x[0])]) { pick.push(x[0]); fams[FAM(x[0])] = 1; } });
      sc.forEach(function (x) { if (pick.length < 3 && pick.indexOf(x[0]) < 0) pick.push(x[0]); });
      res.innerHTML = pick.map(function (s, i) {
        return '<div class="bgo-rc"><span class="n">' + (i ? (i + 1) + '. ÖNERİ' : 'EN UYGUN') + '</span><canvas width="500" height="500" role="img" aria-label="' + esc(dev.b + ' ' + dev.m + ' ' + NAME[s]) + '"></canvas><em>' + esc(NAME[s]) + '</em><small>' + esc(dev.b + ' ' + dev.m) + ' üzerinde</small><div><a class="bgo-btn g" href="/' + dev.s + '?desen=' + s + '">İncele</a><button type="button" class="bgo-btn" data-try="' + s + '">Sahnede dene</button></div></div>';
      }).join('');
      var cv = res.querySelectorAll('canvas');
      pick.forEach(function (s, i) { comp(dev, s, 500).then(function (c) { var b = document.createElement('canvas'); b.width = b.height = 500; wipe(cv[i], b, c, 900 + i * 200, 1); }); });
    }
    box.addEventListener('click', function (e) {
      var t = e.target.closest('[data-try]'); if (t) { stagePick(t.getAttribute('data-try')); return; }
      var b = e.target.closest('.bgo-opts button'); if (!b) return;
      var q = b.closest('.bgo-q'); ans[q.getAttribute('data-k')] = b.getAttribute('data-v');
      [].forEach.call(q.querySelectorAll('button'), function (x) { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      run();
    });
    onStage(function (s) { if (s.d.f !== dev.f) { dev = s.d; box.querySelector('.bgo-dn').textContent = dev.b + ' ' + dev.m; run(); } });
    return true;
  }

  /* ===== 7: cizik testi ===== */
  function S7() {
    var why = document.querySelector('[data-bg-why]'); if (!why) return false; if (document.querySelector('[data-bgo7]')) return true;
    var box = document.createElement('div'); box.className = 'bgo'; box.setAttribute('data-bgo7', '1'); box.id = 'bgo-7';
    box.innerHTML = badge(7, 'Çizik testi') +
      '<div class="bgo-sc"><div class="bgo-sc-l"><h2>Çiz bakalım.</h2><p class="bgo-sub">Fareyle ya da parmağınla cihazın üzerine çizik at. Sonra kaplamayı sök ve altına bak.</p>' +
      '<div class="bgo-msg" aria-live="polite"></div><div style="display:flex;flex-wrap:wrap;gap:10px"><button type="button" class="bgo-btn g" data-a="sok">Kaplamayı sök</button><button type="button" class="bgo-btn" data-a="yeni">Yeniden kapla</button></div></div>' +
      '<div class="bgo-sc-r"><canvas width="900" height="900" role="img" aria-label="Çizik testi: kaplamalı cihaz"></canvas><span class="bgo-hint">✎ Cihazın üzerine çiz</span><div class="bgo-ped" aria-hidden="true"></div></div></div>';
    why.parentNode.insertBefore(box, why);
    var cv = box.querySelector('canvas'), x = cv.getContext('2d'), N = 900;
    var sc = document.createElement('canvas'); sc.width = sc.height = N; var sx = sc.getContext('2d');
    var st = { d: stage().d, p: 'carbon', c: null, b: null, off: false, n: 0 };
    function render() { if (!st.c) return; x.clearRect(0, 0, N, N); x.drawImage(st.c, 0, 0); x.save(); x.globalCompositeOperation = 'source-atop'; x.drawImage(sc, 0, 0); x.restore(); }
    function load() { Promise.all([comp(st.d, st.p, N), bare(st.d, N)]).then(function (r) { st.c = r[0]; st.b = r[1]; st.off = false; render(); }); }
    function flat() { var c = document.createElement('canvas'); c.width = c.height = N; var y = c.getContext('2d'); y.drawImage(st.c, 0, 0); y.globalCompositeOperation = 'source-atop'; y.drawImage(sc, 0, 0); return c; }
    var drawing = false, lp = null;
    function pt(e) { var r = cv.getBoundingClientRect(); return [(e.clientX - r.left) / r.width * N, (e.clientY - r.top) / r.height * N]; }
    function line(a, b) {
      var segs = 6, px = a[0], py = a[1];
      for (var i = 1; i <= segs; i++) {
        var t = i / segs, nx = a[0] + (b[0] - a[0]) * t + (Math.random() - .5) * 4, ny = a[1] + (b[1] - a[1]) * t + (Math.random() - .5) * 4;
        sx.strokeStyle = 'rgba(0,0,0,.35)'; sx.lineWidth = 3.2; sx.lineCap = 'round'; sx.beginPath(); sx.moveTo(px + 1.5, py + 1.5); sx.lineTo(nx + 1.5, ny + 1.5); sx.stroke();
        sx.strokeStyle = 'rgba(235,235,235,.75)'; sx.lineWidth = 1.6; sx.beginPath(); sx.moveTo(px, py); sx.lineTo(nx, ny); sx.stroke();
        px = nx; py = ny;
      }
    }
    cv.addEventListener('pointerdown', function (e) { if (st.off || !st.c) return; drawing = true; lp = pt(e); try { cv.setPointerCapture(e.pointerId); } catch (z) {} box.querySelector('.bgo-hint').style.opacity = '0'; });
    cv.addEventListener('pointermove', function (e) { if (!drawing) return; var p = pt(e); line(lp, p); lp = p; st.n++; render(); if (st.n === 40) msg('İyi gidiyorsun. Şimdi <b>Kaplamayı sök</b> düğmesine bas.'); });
    window.addEventListener('pointerup', function () { drawing = false; });
    function msg(h) { box.querySelector('.bgo-msg').innerHTML = h; }
    box.addEventListener('click', function (e) {
      var a = e.target.closest('[data-a]'); if (!a || !st.c) return;
      if (a.getAttribute('data-a') === 'sok' && !st.off) {
        st.off = true; wipe(cv, flat(), st.b, 1400, -1, function () { msg(st.n ? '<b>Cihaz tertemiz.</b> Çiziklerin hepsi kaplamada kaldı.' : '<b>Cihaz tertemiz.</b> Önce birkaç çizik atıp tekrar dene.'); });
      } else if (a.getAttribute('data-a') === 'yeni') {
        sx.clearRect(0, 0, N, N); st.n = 0; var from = st.off ? st.b : flat(); st.off = true;
        wipe(cv, from, st.c, 1100, 1, function () { st.off = false; msg(''); box.querySelector('.bgo-hint').style.opacity = '1'; });
      }
    });
    onStage(function (s) { if (s.d.f !== st.d.f) { st.d = s.d; sx.clearRect(0, 0, N, N); st.n = 0; msg(''); load(); } });
    load();
    return true;
  }

  /* ===== 3: desen askisi ===== */
  var GRP = [['all', 'Tümü'], ['royal', 'Royal'], ['carbon', 'Carbon'], ['tactical', 'Tactical'], ['hexagonal', 'Hexagonal'], ['topografik', 'Topografik'], ['line', 'Line'], ['nexus', 'Nexus'], ['mono', 'Mono'], ['lego', 'Lego']];
  function S3() {
    var wall = document.querySelector('[data-bg-wall][data-v24]'); if (!wall) return false; if (document.querySelector('[data-bgo3]')) return true;
    var box = document.createElement('div'); box.className = 'bgo'; box.setAttribute('data-bgo3', '1'); box.id = 'bgo-3';
    box.innerHTML = badge(3, 'Desen askısı') +
      '<div class="bgo-ak"><div class="bgo-ak-i"><h2>Askıdan seç.</h2><p class="bgo-sub">Bir desene dokun, <b class="bgo-dn"></b> o desenle kaplansın.</p>' +
      '<div class="bgo-ak-sw"><img alt=""><span class="bgo-lim" hidden>LİMİTED</span></div><em class="bgo-pn"></em><small class="bgo-ps"></small>' +
      '<div style="display:flex;flex-wrap:wrap;gap:10px"><a class="bgo-btn g bgo-go" href="#">Bu desenle incele</a><button type="button" class="bgo-btn" data-try="1">Sahnede göster</button></div></div>' +
      '<div class="bgo-ak-c"><canvas width="900" height="900" role="img"></canvas><div class="bgo-ped" aria-hidden="true"></div></div></div>' +
      '<div class="bgo-grp" role="group" aria-label="Seri">' + GRP.map(function (g) { return '<button type="button" data-g="' + g[0] + '"' + (g[0] === 'all' ? ' class="on"' : '') + '>' + g[1] + '</button>'; }).join('') + '</div>' +
      '<div class="bgo-rail"><div class="bgo-rail-t">' + P.map(function (p) {
        return '<button type="button" class="bgo-hg" data-p="' + p[0] + '" aria-label="' + esc(p[1]) + (LIM[p[0]] ? ' (limited)' : '') + '"><svg aria-hidden="true" width="24" height="32" viewBox="0 0 26 34" fill="none" stroke="#C9A45C" stroke-width="2" stroke-linecap="round"><path d="M13 30V20"></path><path d="M13 20c0-4 6-4 6-9a6 6 0 0 0-12 0"></path></svg><span class="cd"><img alt="" loading="lazy" src="' + IMG + 'site/desen/' + p[0] + '.webp">' + (LIM[p[0]] ? '<span class="bgo-lim">LİMİTED</span>' : '') + '</span><span>' + esc(p[1]) + '</span></button>';
      }).join('') + '</div></div>';
    wall.parentNode.insertBefore(box, wall); wall.classList.add('bgo-old');
    var cv = box.querySelector('canvas'), st = { d: stage().d, p: 'royal-gold', c: null };
    function info() {
      box.querySelector('.bgo-dn').textContent = st.d.b + ' ' + st.d.m;
      box.querySelector('.bgo-pn').textContent = NAME[st.p];
      box.querySelector('.bgo-ps').textContent = st.p.split('-')[0].toUpperCase() + ' serisi · ' + (P.map(function (p) { return p[0]; }).indexOf(st.p) + 1) + ' / 39';
      box.querySelector('.bgo-ak-sw img').src = IMG + 'site/desen/' + st.p + '.webp';
      box.querySelector('.bgo-ak-sw .bgo-lim').hidden = !LIM[st.p];
      box.querySelector('.bgo-go').setAttribute('href', '/' + st.d.s + '?desen=' + st.p);
      cv.setAttribute('aria-label', st.d.b + ' ' + st.d.m + ' ' + NAME[st.p] + ' kaplama');
      [].forEach.call(box.querySelectorAll('.bgo-hg'), function (b) { b.classList.toggle('on', b.getAttribute('data-p') === st.p); });
    }
    function set(s, first) { st.p = s; info(); comp(st.d, s, 900).then(function (c) { if (first || !st.c) show(cv, c); else wipe(cv, st.c, c, 1100, 1); st.c = c; }); }
    box.addEventListener('click', function (e) {
      var h = e.target.closest('.bgo-hg'); if (h) { set(h.getAttribute('data-p')); return; }
      var g = e.target.closest('[data-g]'); if (g) { var k = g.getAttribute('data-g'); [].forEach.call(box.querySelectorAll('[data-g]'), function (x) { x.classList.toggle('on', x === g); }); [].forEach.call(box.querySelectorAll('.bgo-hg'), function (b) { b.style.display = k === 'all' || b.getAttribute('data-p').split('-')[0] === k ? '' : 'none'; }); return; }
      if (e.target.closest('[data-try]')) stagePick(st.p);
    });
    onStage(function (s) { if (s.d.f !== st.d.f) { st.d = s.d; st.c = null; set(st.p, 1); } });
    set('royal-gold', 1);
    return true;
  }

  /* ===== 6: desen buyuteci ===== */
  function S6() {
    var a3 = document.querySelector('[data-bgo3]'); if (!a3) return false; if (document.querySelector('[data-bgo6]')) return true;
    var box = document.createElement('div'); box.className = 'bgo'; box.setAttribute('data-bgo6', '1'); box.id = 'bgo-6';
    box.innerHTML = badge(6, 'Desen büyüteci') +
      '<div class="bgo-mg"><div class="bgo-mg-l"><h2>Dokuyu yakından gör.</h2><p class="bgo-sub">Fareyi (telefonda parmağını) cihazın üzerinde gezdir; büyüteç baskıyı ve kesimi yakından gösterir.</p>' + chips(FEAT) + '</div>' +
      '<div class="bgo-mg-c"><canvas class="d" width="1000" height="1000" role="img"></canvas><div class="bgo-lens" aria-hidden="true"><canvas width="380" height="380"></canvas></div></div></div>';
    a3.parentNode.insertBefore(box, a3.nextSibling);
    var cv = box.querySelector('canvas.d'), lens = box.querySelector('.bgo-lens'), lc = lens.querySelector('canvas'), lx = lc.getContext('2d'), st = { d: stage().d, p: 'royal-gold', c: null };
    function set(s, first) { st.p = s; markChips(box, s); cv.setAttribute('aria-label', st.d.b + ' ' + st.d.m + ' ' + NAME[s]); comp(st.d, s, 1000).then(function (c) { if (first || !st.c) show(cv, c); else wipe(cv, st.c, c, 1000, 1); st.c = c; }); }
    function mv(e) {
      if (!st.c) return; var r = cv.getBoundingClientRect(), wr = cv.parentNode.getBoundingClientRect();
      var u = (e.clientX - r.left) / r.width, v = (e.clientY - r.top) / r.height;
      if (u < 0 || u > 1 || v < 0 || v > 1) { lens.style.opacity = '0'; return; }
      lens.style.opacity = '1'; lens.style.left = (e.clientX - wr.left - 95) + 'px'; lens.style.top = (e.clientY - wr.top - 95 - (e.pointerType === 'touch' ? 90 : 0)) + 'px';
      var Z = 2.6, src = 190 * 1000 / (r.width * Z);
      lx.fillStyle = '#0E0E0F'; lx.fillRect(0, 0, 380, 380);
      lx.drawImage(st.c, u * 1000 - src / 2, v * 1000 - src / 2, src, src, 0, 0, 380, 380);
    }
    cv.addEventListener('pointermove', mv); cv.addEventListener('pointerdown', mv);
    cv.addEventListener('pointerleave', function () { lens.style.opacity = '0'; });
    cv.addEventListener('pointerup', function (e) { if (e.pointerType === 'touch') lens.style.opacity = '0'; });
    box.querySelector('.bgo-chips').addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) set(b.getAttribute('data-p')); });
    onStage(function (s) { if (s.d.f !== st.d.f) { st.d = s.d; st.c = null; set(st.p, 1); } });
    set('royal-gold', 1);
    return true;
  }

  /* ===== 2: nasil uygulanir - kaydirdikca kaplanan cihaz (v2) ===== */
  var ICO = [
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 18c3-1 5-4 6-8l6 6c-4 1-7 3-8 6z"/><path d="M15 3l1 2 2 1-2 1-1 2-1-2-2-1 2-1z"/><path d="M19 10l.6 1.2 1.2.6-1.2.6-.6 1.2-.6-1.2-1.2-.6 1.2-.6z"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="7"/><path d="M12 2v5M12 17v5M2 12h5M17 12h5"/><circle cx="12" cy="12" r="1.5"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></svg>',
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h10a3 3 0 0 1 0 6H9l-2 6H5l1-6H4z"/><path d="M17 9c1.5 0 2 1 3 1M17 13c1.5 0 2 1 3 1"/></svg>'
  ];
  var CAP = ['Toz ve parmak izi kalmasın.', 'Düğme boşluklarına göre yerini bul.', 'Ortadan kenarlara doğru bastır.', 'Kenarları ısıt, bastır. Hazır.'];
  function S2() {
    var steps = document.querySelector('[data-bg="steps"]'); if (!steps) return false; if (document.querySelector('[data-bgo2]')) return true;
    var T = [].map.call(steps.querySelectorAll('.bg-card'), function (c) { var h = c.querySelector('h3'), p = c.querySelector('p'); return [h ? h.textContent : '', p ? p.textContent : '']; });
    if (T.length < 4) T = [['Temizle', ''], ['Hizala', ''], ['Yapıştır', ''], ['Kenarları oturt', '']];
    var box = document.createElement('div'); box.className = 'bgo bgo-st'; box.setAttribute('data-bgo2', '1'); box.id = 'bgo-2';
    box.innerHTML = '<div class="bgo-st-scroll"><div class="bgo-st-sticky"><div class="bgo-st-in">' + badge(2, 'Nasıl uygulanır · v2') +
      '<div class="bgo-st-l"><span class="bgo-eb">4 ADIMDA, 10 DAKİKADA</span><h2 style="margin-bottom:10px">Nasıl uygulanır?</h2>' + T.slice(0, 4).map(function (t, i) { return '<button type="button" class="bgo-step" data-s="' + i + '"><i class="ic">' + ICO[i] + '</i><div><b><em>0' + (i + 1) + '</em>' + esc(t[0]) + '</b><span>' + esc(t[1]) + '</span></div></button>'; }).join('') +
      '<div class="bgo-end"><a class="bgo-btn g" href="#" data-top="1">Cihazını seç</a><a class="bgo-btn" href="/blog/uygulama-rehberi">Ayrıntılı rehber</a></div></div>' +
      '<div class="bgo-st-r"><span class="bgo-num" aria-hidden="true">01</span><canvas width="900" height="900" role="img" aria-label="Kaplama uygulama adımları"></canvas><div class="bgo-ped" aria-hidden="true"></div>' +
      '<p class="bgo-cap" aria-live="polite"></p><div class="bgo-dots" aria-hidden="true"><i></i><i></i><i></i><i></i></div></div>' +
      '</div></div></div>';
    steps.parentNode.insertBefore(box, steps); steps.classList.add('bgo-old');
    var cv = box.querySelector('canvas'), x = cv.getContext('2d'), N = 900, st = { d: stage().d, p: 'royal-gold', c: null, b: null, o: null, dust: [] };
    var sc = box.querySelector('.bgo-st-scroll'), stepEls = box.querySelectorAll('.bgo-step'), dots = box.querySelectorAll('.bgo-dots i'), num = box.querySelector('.bgo-num'), cap = box.querySelector('.bgo-cap'), endB = box.querySelector('.bgo-end');
    function outline(b) {
      var o = document.createElement('canvas'); o.width = o.height = N; var y = o.getContext('2d');
      var s = document.createElement('canvas'); s.width = s.height = N; var z = s.getContext('2d'); z.drawImage(b, 0, 0); z.globalCompositeOperation = 'source-in'; z.fillStyle = '#E2C285'; z.fillRect(0, 0, N, N);
      [[-4, 0], [4, 0], [0, -4], [0, 4], [-3, -3], [3, 3], [-3, 3], [3, -3]].forEach(function (d) { y.drawImage(s, d[0], d[1]); });
      y.globalCompositeOperation = 'destination-out'; y.drawImage(s, 0, 0); return o;
    }
    function dust(b) {
      var t = document.createElement('canvas'); t.width = t.height = 90; var y = t.getContext("2d"), out = []; y.drawImage(b, 0, 0, 90, 90);
      try { var a = y.getImageData(0, 0, 90, 90).data; for (var k = 0; k < 4000 && out.length < 70; k++) { var px = Math.random() * 90 | 0, py = Math.random() * 90 | 0; if (a[(py * 90 + px) * 4 + 3] > 220) out.push([px * 10 + Math.random() * 10, py * 10 + Math.random() * 10, 1.5 + Math.random() * 3.5, .25 + Math.random() * .45]); } } catch (e) {}
      return out;
    }
    function load() { Promise.all([comp(st.d, st.p, N), bare(st.d, N)]).then(function (r) { st.c = r[0]; st.b = r[1]; st.o = outline(r[1]); st.dust = dust(r[1]); draw(); }); }
    function prog() { var r = sc.getBoundingClientRect(), h = r.height - innerHeight; return clamp(-r.top / Math.max(1, h), 0, 1); }
    function star(cx, cy, r, a) { x.save(); x.globalAlpha = a; x.fillStyle = '#FFF4D6'; x.beginPath(); for (var i = 0; i < 8; i++) { var ang = i * Math.PI / 4, rr = i % 2 ? r * .28 : r; x.lineTo(cx + Math.cos(ang) * rr, cy + Math.sin(ang) * rr); } x.closePath(); x.fill(); x.restore(); }
    var lastSi = -1;
    function draw() {
      if (!st.c) return;
      var p = prog(), si = Math.min(3, Math.floor(p * 4)), t = clamp((p - si * .25) / .25, 0, 1), e = ease(t);
      if (si !== lastSi) {
        lastSi = si; [].forEach.call(stepEls, function (el, i) { el.classList.toggle('on', i === si); el.classList.toggle('dn', i < si); });
        num.textContent = '0' + (si + 1); num.classList.remove('in'); void num.offsetWidth; num.classList.add('in');
        cap.textContent = CAP[si];
      }
      [].forEach.call(dots, function (d, i) { d.style.setProperty('--f', (i < si ? 1 : i > si ? 0 : t).toFixed(3)); });
      endB.classList.toggle('on', p > .96);
      x.clearRect(0, 0, N, N);
      if (si === 0) {
        x.drawImage(st.b, 0, 0); var sx = t * (N + 240) - 120;
        x.save(); x.globalCompositeOperation = 'source-atop';
        st.dust.forEach(function (d) { if (d[0] > sx) { x.globalAlpha = d[3]; x.fillStyle = '#D8D4CC'; x.beginPath(); x.arc(d[0], d[1], d[2], 0, 6.283); x.fill(); } });
        x.restore();
        glint(x, sx, N, 110, '255,255,255');
        st.dust.forEach(function (d, i) { if (i % 6 === 0 && d[0] < sx && d[0] > sx - 260) star(d[0], d[1], 9 + (i % 3) * 3, clamp(1 - (sx - d[0]) / 260, 0, 1)); });
      } else if (si === 1) {
        x.drawImage(st.b, 0, 0);
        x.save(); x.globalAlpha = .35 + .35 * Math.sin(t * 18) * (1 - e) + (t > .9 ? (t - .9) * 6 : 0); x.drawImage(st.o, 0, 0); x.restore();
        x.save(); x.globalAlpha = .6 + .4 * e; x.translate(N / 2 + (1 - e) * N * .2, N / 2 - (1 - e) * N * .14); x.rotate(-(1 - e) * .1); var sc2 = 1 + (1 - e) * .06; x.scale(sc2, sc2);
        x.shadowColor = 'rgba(0,0,0,.55)'; x.shadowBlur = 40 * (1 - e); x.shadowOffsetY = 34 * (1 - e); x.drawImage(st.c, -N / 2, -N / 2); x.restore();
        if (t > .9) { x.save(); x.globalAlpha = (1 - t) * 10 * .8; x.drawImage(st.o, 0, 0); x.restore(); }
      } else if (si === 2) {
        x.drawImage(st.b, 0, 0);
        x.save(); x.globalCompositeOperation = 'source-atop'; x.fillStyle = 'rgba(242,240,235,.16)'; x.fillRect(0, 0, N, N); x.restore();
        var R = e * N * .78;
        x.save(); x.beginPath(); x.arc(N / 2, N / 2, Math.max(1, R), 0, 6.283); x.clip(); x.drawImage(st.c, 0, 0); x.restore();
        if (t < .98) {
          var tmp = document.createElement('canvas'); tmp.width = tmp.height = N; var y = tmp.getContext('2d'); y.drawImage(st.b, 0, 0); y.globalCompositeOperation = 'source-in';
          var g = y.createRadialGradient(N / 2, N / 2, Math.max(0, R - 30), N / 2, N / 2, R + 6); g.addColorStop(0, 'rgba(255,236,190,0)'); g.addColorStop(.8, 'rgba(255,236,190,.85)'); g.addColorStop(1, 'rgba(201,164,92,0)');
          y.fillStyle = g; y.fillRect(0, 0, N, N); x.drawImage(tmp, 0, 0);
        }
      } else {
        x.drawImage(st.c, 0, 0);
        var h = Math.sin(clamp(t / .55, 0, 1) * Math.PI);
        if (h > .01) { x.save(); x.globalAlpha = h * .9; x.shadowColor = 'rgba(255,130,40,.9)'; x.shadowBlur = 26; x.globalCompositeOperation = 'lighter'; x.drawImage(st.o, 0, 0); x.restore(); }
        if (t > .45 && t < .95) glint(x, ((t - .45) / .5) * (N + 200) - 100, N, 80, '255,236,190');
        if (t > .85) {
          var k = ease(clamp((t - .85) / .15, 0, 1)), r = 58 * k, cx = N * .5, cy = N * .5;
          x.save(); x.globalAlpha = k; x.fillStyle = '#C9A45C'; x.beginPath(); x.arc(cx, cy, r, 0, 6.283); x.fill();
          x.strokeStyle = '#0E0E0F'; x.lineWidth = 9 * k; x.lineCap = 'round'; x.lineJoin = 'round'; x.beginPath(); x.moveTo(cx - r * .42, cy + r * .02); x.lineTo(cx - r * .1, cy + r * .32); x.lineTo(cx + r * .45, cy - r * .3); x.stroke(); x.restore();
        }
      }
    }
    function goStep(i) { var r = sc.getBoundingClientRect(), h = r.height - innerHeight, y = r.top + scrollY + h * (i * .25 + .2); scrollTo({ top: y, behavior: 'smooth' }); }
    [].forEach.call(stepEls, function (el, i) { el.addEventListener('click', function () { goStep(i); }); });
    box.querySelector('[data-top]').addEventListener('click', function (e) { e.preventDefault(); var s = document.querySelector('[data-bgs]'); if (s) { s.scrollIntoView({ behavior: 'smooth', block: 'start' }); setTimeout(function () { var q = document.getElementById('bgs-q'); if (q) q.focus({ preventScroll: true }); }, 700); } });
    var tick = false;
    window.addEventListener('scroll', function () { if (tick) return; tick = true; requestAnimationFrame(function () { tick = false; if (document.documentElement.contains(box)) draw(); }); }, { passive: true });
    window.addEventListener('resize', draw);
    onStage(function (s) { if (s.d.f !== st.d.f || s.p !== st.p) { st.d = s.d; st.p = s.p; load(); } });
    load();
    return true;
  }

  /* ===== kurulum ===== */
  function nav() {
    if (document.querySelector('.bgo-nav')) return;
    var n = document.createElement('div'); n.className = 'bgo-nav'; n.setAttribute('role', 'navigation'); n.setAttribute('aria-label', 'Önizlemeler');
    n.innerHTML = 'ÖNİZLEME ' + [2].map(function (i) { return '<button type="button" data-n="' + i + '" aria-label="Önizleme ' + i + '">' + i + '</button>'; }).join('') + '<button type="button" data-x="1" aria-label="Önizlemeyi kapat">×</button>';
    n.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      if (b.getAttribute('data-x')) { location.href = '/'; return; }
      var k = +b.getAttribute('data-n'), id = { 1: 'bgo-1', 4: 'bgo-1', 2: 'bgo-2', 3: 'bgo-3', 5: 'bgo-5', 6: 'bgo-6', 7: 'bgo-7' }[k];
      var el = document.getElementById(id); if (!el) return;
      var y = el.getBoundingClientRect().top + scrollY - 70; scrollTo({ top: y, behavior: 'smooth' });
    });
    document.body.appendChild(n);
  }
  var DONE = {};
  function build() {
    if (!document.getElementById('bgo-css')) { var s = document.createElement('style'); s.id = 'bgo-css'; s.textContent = css; document.head.appendChild(s); }
    if (!devs().length) return;
    watchStage();
    [['2', S2]].forEach(function (f) { if (!DONE[f[0]] || !document.querySelector('[data-bgo' + f[0] + ']')) { try { DONE[f[0]] = f[1](); } catch (e) { if (window.console) console.warn('bgo', f[0], e); } } });
    nav();
  }
  var tries = 0, iv = setInterval(function () { build(); if (++tries > 60) clearInterval(iv); }, 500);
  new MutationObserver(function () { if (tries > 60) build(); }).observe(document.documentElement, { childList: true, subtree: false });
})();
