/* v32: urun sahnesi, setini kapla, kombinini paylas, iki desen karsilastir, kesim haritasi (onizlemeden kalici) */
(function () {
  if (window.__bgOzellik) return; window.__bgOzellik = 1;
  var IMG = 'https://cdn.jsdelivr.net/gh/BedirhanAkyz/betaguard-onizleme@__SHA__/img/';
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
    var a = document.querySelector('.bgs-go'); if (!a || a.__bgxW) return; a.__bgxW = 1;
    var sec = document.querySelector('[data-bgs]'), touched = 0;
    if (sec) ['pointerdown', 'keydown', 'input', 'touchend'].forEach(function (ev) { sec.addEventListener(ev, function (e) { if (e.target && e.target.closest && e.target.closest('.bgs-share')) return; touched = Date.now(); }, true); });
    new MutationObserver(function () { var h = a.getAttribute('href'); if (h === last) return; last = h; if (Date.now() - touched > 3000) return; var s = stage(); SUBS.forEach(function (f) { try { f(s); } catch (e) {} }); }).observe(a, { attributes: true, attributeFilter: ['href'] });
    last = a.getAttribute('href');
  }
  function stagePick(slug) {
    var b = document.querySelector('.bgs-cl button[data-p="' + slug + '"]');
    if (b) { b.click(); var s = document.querySelector('[data-bgs]'); if (s) s.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  }

  var css = [
    '.bgx{position:relative;max-width:1240px;margin:44px auto;padding:28px 24px 30px;box-sizing:border-box;color:#F2F0EB;font-family:Manrope,sans-serif;border:1px solid #1E1E21;border-radius:24px;background:radial-gradient(60% 80% at 80% 40%,rgba(201,164,92,.05),transparent 70%)}',
    '.bgx *{box-sizing:border-box}',
    '.bgx-bd{position:absolute;top:-13px;left:22px;display:inline-flex;align-items:center;gap:8px;padding:5px 12px;border-radius:999px;background:' + G + ';color:#0E0E0F;font:800 11px/1.2 Manrope,sans-serif;letter-spacing:.1em;z-index:5}',
    '.bgx h2{margin:0;font:italic 900 clamp(28px,3.4vw,42px)/1.05 Archivo,sans-serif!important;color:#F2F0EB}',
    '.bgx-sub{margin:8px 0 0;font-size:15px;line-height:1.6;color:#A9A59D;max-width:620px}',
    '.bgx-hd{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:16px;margin-bottom:22px}',
    '.bgx-chips{display:flex;flex-wrap:wrap;gap:8px}',
    '.bgx-chips button{width:40px;height:40px;padding:3px;border-radius:50%;border:2px solid #3A383F;background:#0E0E0F;cursor:pointer;transition:transform .2s,border-color .2s}',
    '.bgx-chips button:hover{transform:translateY(-2px)}.bgx-chips button.on{border-color:#E2C285}',
    '.bgx-chips img{width:100%!important;height:100%!important;border-radius:50%!important;object-fit:cover;display:block}',
    '.bgx-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:44px;padding:0 20px;border-radius:999px;border:1px solid #4A4850;background:transparent;color:#F2F0EB!important;font:700 14px Manrope,sans-serif;text-decoration:none!important;cursor:pointer;transition:background .2s,border-color .2s,color .2s}',
    '.bgx-btn:hover{border-color:' + G + '}.bgx-btn.g{background:' + G + ';border-color:' + G + ';color:#0E0E0F!important}.bgx-btn.g:hover{background:#E2C285}',
    '.bgx-old{position:relative;opacity:.5}.bgx-old:before{content:"MEVCUT HALİ";position:absolute;top:-10px;right:24px;z-index:3;padding:4px 10px;border-radius:999px;background:#2A292E;color:#A9A59D;font:800 10px Manrope,sans-serif;letter-spacing:.12em}',
    /* nav */
    '.bgx-nav{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:2147483000;display:flex;align-items:center;gap:6px;padding:6px 8px 6px 14px;border-radius:999px;background:rgba(14,14,15,.92);border:1px solid ' + G + ';box-shadow:0 10px 30px rgba(0,0,0,.5);font:800 11px Manrope,sans-serif;color:#E2C285;letter-spacing:.1em;backdrop-filter:blur(8px)}',
    '.bgx-nav button{width:32px;height:32px;border-radius:50%;border:1px solid #3A383F;background:#141416;color:#F2F0EB;font:800 13px Manrope,sans-serif;cursor:pointer}',
    '.bgx-nav button:hover{border-color:' + G + ';color:#E2C285}',
    /* 1+4 raf */
    '.bgx-row{margin-bottom:30px}',
    '.bgx-row-i{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;align-items:end;padding:0 6px}',
    '.bgx-it{position:relative;display:flex;flex-direction:column;align-items:center;text-decoration:none!important;color:#F2F0EB!important;padding-top:44px}',
    '.bgx-it canvas{width:100%;max-width:230px;aspect-ratio:1/1;display:block;transition:transform .35s ease,filter .35s ease;filter:drop-shadow(0 16px 16px rgba(0,0,0,.6));margin-bottom:-14%}',
    '.bgx-it:hover canvas,.bgx-it:focus-visible canvas{transform:translateY(-12px) scale(1.05);filter:drop-shadow(0 22px 22px rgba(0,0,0,.7)) drop-shadow(0 0 22px rgba(226,194,133,.35))}',
    '.bgx-lb{position:absolute;top:0;left:0;right:0;text-align:center;display:flex;flex-direction:column;gap:2px;opacity:0;transform:translateY(6px);transition:opacity .3s,transform .3s;pointer-events:none}',
    '.bgx-it:hover .bgx-lb,.bgx-it:focus-visible .bgx-lb{opacity:1;transform:none}',
    '.bgx-lb b{font-size:13px}.bgx-lb span{font-size:12px;color:#E2C285}',
    '.bgx-sp{position:absolute;left:8%;right:8%;bottom:-4px;height:120px;background:radial-gradient(60% 70% at 50% 100%,rgba(226,194,133,.2),transparent 70%);opacity:0;transition:opacity .35s;pointer-events:none}.bgx-it:hover .bgx-sp{opacity:1}',
    '.bgx-plate{height:14px;border-radius:3px;background:linear-gradient(180deg,rgba(255,255,255,.16),rgba(255,255,255,.04));border-top:1px solid rgba(255,255,255,.35)}',
    '.bgx-led{height:3px;margin:0 2%;border-radius:3px;background:' + G + ';box-shadow:0 0 14px 3px rgba(201,164,92,.55),0 14px 40px 10px rgba(201,164,92,.16)}',
    '.bgx-wall{border-radius:20px;border:1px solid #26252A;padding:10px clamp(8px,2vw,28px) 4px;background:repeating-linear-gradient(90deg,#121214 0,#121214 118px,#141416 118px,#141416 120px)}',
    '.bgx-tag{font-size:13px;color:#A3A09A}.bgx-tag b{color:#E2C285}',
    '@media (max-width:760px){.bgx{margin:30px 12px;padding:24px 14px}.bgx-row-i{grid-template-columns:repeat(2,minmax(0,1fr))}.bgx-lb{opacity:1;transform:none}.bgx-it{padding-top:40px}}',
    /* 5 test */
    '.bgx-q{display:flex;flex-direction:column;gap:12px;margin-bottom:18px}',
    '.bgx-q h3{margin:0;font:800 17px Manrope,sans-serif;color:#F2F0EB}.bgx-q h3 i{font-style:normal;color:#E2C285;margin-right:8px}',
    '.bgx-opts{display:flex;flex-wrap:wrap;gap:8px}',
    '.bgx-opts button{min-height:44px;padding:0 18px;border-radius:999px;border:1px solid #3A383F;background:#141416;color:#F2F0EB;font:700 14px Manrope,sans-serif;cursor:pointer;transition:background .2s,border-color .2s,color .2s}',
    '.bgx-opts button:hover{border-color:' + G + '}.bgx-opts button.on{background:' + G + ';border-color:' + G + ';color:#0E0E0F}',
    '.bgx-res{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin-top:8px}',
    '.bgx-rc{border:1px solid #2A292E;border-radius:18px;background:radial-gradient(70% 60% at 50% 40%,rgba(201,164,92,.1),transparent 70%),#141416;padding:16px;display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center}',
    '.bgx-rc canvas{width:100%;max-width:240px;aspect-ratio:1/1;filter:drop-shadow(0 16px 16px rgba(0,0,0,.6))}',
    '.bgx-rc em{font:italic 900 22px Archivo,sans-serif;color:#E2C285}.bgx-rc small{font-size:12px;color:#A3A09A}.bgx-rc .n{font:800 11px Manrope,sans-serif;letter-spacing:.14em;color:#8E8A83}',
    '.bgx-rc div{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-top:4px}',
    '@media (max-width:760px){.bgx-res{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:80%;overflow-x:auto;scroll-snap-type:x mandatory}.bgx-rc{scroll-snap-align:start}}',
    /* 7 cizik */
    '.bgx-sc{display:flex;flex-wrap:wrap;gap:28px;align-items:center}',
    '.bgx-sc-l{flex:1 1 300px;max-width:420px;display:flex;flex-direction:column;gap:16px}',
    '.bgx-sc-r{flex:2 1 420px;min-width:0;display:flex;flex-direction:column;align-items:center;position:relative}',
    '.bgx-sc-r canvas{width:min(560px,100%);aspect-ratio:1/1;touch-action:none;cursor:crosshair;filter:drop-shadow(0 26px 26px rgba(0,0,0,.6))}',
    '.bgx-hint{position:absolute;top:46%;left:50%;transform:translate(-50%,-50%);padding:10px 16px;border-radius:999px;background:rgba(14,14,15,.85);border:1px solid ' + G + ';font:700 13px Manrope,sans-serif;color:#E2C285;pointer-events:none;transition:opacity .4s;white-space:nowrap}',
    '.bgx-msg{font-size:15px;line-height:1.6;color:#B9B5AD;min-height:48px}.bgx-msg b{color:#7CD3A0}',
    '.bgx-ped{width:min(420px,80%);height:50px;margin-top:-30px;border-radius:50%;background:radial-gradient(ellipse at 50% 30%,#2A292E 0%,#161618 55%,transparent 80%);border-top:1px solid rgba(226,194,133,.45);box-shadow:0 -4px 30px rgba(201,164,92,.25)}',
    /* 3 aski */
    '.bgx-ak{display:flex;flex-wrap:wrap;gap:28px;align-items:center;margin-bottom:18px}',
    '.bgx-ak-c{flex:2 1 420px;min-width:0;display:flex;flex-direction:column;align-items:center;position:relative}',
    '.bgx-ak-c canvas{width:min(520px,100%);aspect-ratio:1/1;filter:drop-shadow(0 26px 26px rgba(0,0,0,.6));animation:bgxF 6s ease-in-out infinite}',
    '@keyframes bgxF{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}',
    '.bgx-ak-i{flex:1 1 240px;max-width:320px;display:flex;flex-direction:column;gap:12px}',
    '.bgx-ak-i em{font:italic 900 34px/1 Archivo,sans-serif;color:#E2C285}.bgx-ak-i small{font-size:13px;color:#A3A09A}',
    '.bgx-ak-sw{width:120px;height:160px;border-radius:12px;overflow:hidden;border:1px solid #3A383F;position:relative}.bgx-ak-sw img{width:100%!important;height:100%!important;object-fit:cover;display:block}',
    '.bgx-lim{position:absolute;top:8px;left:8px;padding:3px 7px;border-radius:5px;background:#0E0E0F;color:#E2C285;font:800 9px Manrope,sans-serif;letter-spacing:.12em}',
    '.bgx-grp{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}',
    '.bgx-grp button{min-height:36px;padding:0 14px;border-radius:999px;border:1px solid #3A383F;background:transparent;color:#F2F0EB;font:700 12px Manrope,sans-serif;cursor:pointer}',
    '.bgx-grp button.on{background:' + G + ';border-color:' + G + ';color:#0E0E0F}',
    '.bgx-rail{position:relative;border-radius:18px;border:1px solid #26252A;background:#121214;padding-bottom:12px}',
    '.bgx-rail:before{content:"";position:absolute;left:18px;right:18px;top:24px;height:6px;border-radius:3px;background:linear-gradient(180deg,#F2D9A0,#C9A45C 50%,#8A6D35);box-shadow:0 4px 10px rgba(0,0,0,.6)}',
    '.bgx-rail-t{position:relative;display:flex;gap:12px;overflow-x:auto;padding:16px 24px 8px;scroll-snap-type:x proximity;scrollbar-width:thin}',
    '.bgx-hg{flex:0 0 auto;width:104px;border:0;background:transparent;padding:0;cursor:pointer;display:flex;flex-direction:column;align-items:center;color:#F2F0EB;font:700 11px Manrope,sans-serif;transform-origin:50% 0;scroll-snap-align:start}',
    '.bgx-hg:hover{animation:bgxSw 1.1s ease}',
    '@keyframes bgxSw{0%{transform:rotate(0)}30%{transform:rotate(5deg)}60%{transform:rotate(-3deg)}85%{transform:rotate(1.5deg)}100%{transform:rotate(0)}}',
    '.bgx-hg .cd{position:relative;width:92px;height:124px;margin-top:-2px;border-radius:9px;overflow:hidden;border:2px solid transparent;box-shadow:0 10px 18px rgba(0,0,0,.5);transition:transform .3s}',
    '.bgx-hg .cd img{width:100%!important;height:100%!important;object-fit:cover;display:block}',
    '.bgx-hg.on .cd{border-color:#E2C285;transform:translateY(8px) scale(1.07)}.bgx-hg.on span{color:#E2C285}',
    '.bgx-hg span{margin-top:9px;text-align:center}',
    /* 6 buyutec */
    '.bgx-mg{display:flex;flex-wrap:wrap;gap:28px;align-items:center}',
    '.bgx-mg-c{flex:2 1 420px;min-width:0;position:relative;display:flex;justify-content:center}',
    '.bgx-mg-c canvas.d{width:min(560px,100%);aspect-ratio:1/1;cursor:none;touch-action:none;filter:drop-shadow(0 26px 26px rgba(0,0,0,.6))}',
    '.bgx-lens{position:absolute;width:190px;height:190px;border-radius:50%;border:2px solid #E2C285;box-shadow:0 12px 30px rgba(0,0,0,.6),inset 0 0 0 4px rgba(14,14,15,.6);pointer-events:none;opacity:0;transition:opacity .2s;overflow:hidden;background:#0E0E0F}',
    '.bgx-lens canvas{width:100%;height:100%;display:block}',
    '.bgx-mg-l{flex:1 1 260px;max-width:380px;display:flex;flex-direction:column;gap:16px}',
    /* 2 adimlar */
    '.bgx-st{max-width:none;margin:44px 12px;padding:0;border:0}',
    '.bgx-st-scroll{position:relative;height:360vh}',
    '.bgx-st-sticky{position:sticky;top:0;height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden}',
    '.bgx-st-in{width:min(1240px,100%);display:flex;flex-wrap:wrap;gap:24px 40px;align-items:center;padding:0 24px;border:1px dashed rgba(201,164,92,.45);border-radius:24px;padding:40px 28px;position:relative}',
    '.bgx-st-l{flex:1 1 300px;max-width:420px;display:flex;flex-direction:column;gap:10px}',
    '.bgx-eb{font:800 12px/1 Manrope,sans-serif;letter-spacing:.2em;color:' + G + '}',
    '.bgx-step{display:flex;gap:14px;align-items:flex-start;width:100%;text-align:left;font-family:Manrope,sans-serif;color:inherit;cursor:pointer;padding:14px 16px;border-radius:14px;border:1px solid transparent;background:transparent;opacity:.42;transition:opacity .3s,border-color .3s,background .3s}',
    '.bgx-step:hover{opacity:.75}.bgx-step.dn{opacity:.6}',
    '.bgx-step .ic{flex:0 0 auto;width:42px;height:42px;border-radius:12px;border:1px solid #3A383F;display:flex;align-items:center;justify-content:center;transition:border-color .3s,background .3s}',
    '.bgx-step .ic svg{width:22px;height:22px;fill:none;stroke:#E2C285;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}',
    '.bgx-step.on .ic{border-color:' + G + ';background:rgba(201,164,92,.12)}',
    '.bgx-step b em{font:italic 900 14px Archivo,sans-serif;color:' + G + ';margin-right:8px;font-style:italic}',
    '.bgx-num{position:absolute;top:2%;left:50%;transform:translateX(-50%);font:italic 900 clamp(150px,18vw,260px)/1 Archivo,sans-serif;color:transparent;-webkit-text-stroke:1.5px rgba(226,194,133,.16);pointer-events:none;user-select:none}',
    '.bgx-num.in{animation:bgxNum .5s ease}@keyframes bgxNum{from{opacity:0;transform:translate(-50%,16px)}to{opacity:1;transform:translateX(-50%)}}',
    '.bgx-st-r{position:relative}',
    '.bgx-st-r canvas{position:relative;z-index:1}',
    '.bgx-cap{margin:2px 0 0;font:700 15px Manrope,sans-serif;color:#E2C285;min-height:22px;text-align:center}',
    '.bgx-dots{display:flex;gap:8px;margin-top:10px}.bgx-dots i{width:46px;height:4px;border-radius:4px;background:#2A292E;overflow:hidden;position:relative}.bgx-dots i:after{content:"";position:absolute;inset:0;background:' + G + ';transform-origin:0 50%;transform:scaleX(var(--f,0))}',
    '.bgx-end{display:flex;flex-wrap:wrap;gap:10px;margin-top:8px;opacity:0;transform:translateY(8px);transition:opacity .4s,transform .4s;pointer-events:none}.bgx-end.on{opacity:1;transform:none;pointer-events:auto}',
    '.bgx-step.on{opacity:1;border-color:#3A3426;background:linear-gradient(120deg,#1B1912,#141317 70%)}',
    '.bgx-step i{font:italic 900 26px/1 Archivo,sans-serif;color:' + G + ';font-style:italic;min-width:38px}',
    '.bgx-step b{display:block;font:800 17px Manrope,sans-serif;color:#F2F0EB;margin-bottom:4px}.bgx-step span{font-size:14px;line-height:1.55;color:#A9A59D}',
    '.bgx-st-r{flex:2 1 420px;min-width:0;display:flex;flex-direction:column;align-items:center}',
    '.bgx-st-r canvas{width:min(520px,100%);aspect-ratio:1/1;filter:drop-shadow(0 26px 26px rgba(0,0,0,.6))}',
    '.bgx-bar{width:min(420px,80%);height:4px;border-radius:4px;background:#2A292E;overflow:hidden;margin-top:6px}.bgx-bar i{display:block;height:100%;width:0;background:' + G + '}',
    '@media (max-width:760px){.bgx-st-in{padding:30px 14px;gap:14px}.bgx-st-l{order:2}.bgx-st-r{order:1}.bgx-step{padding:10px 12px}.bgx-step span{display:none}.bgx-step.on span{display:block}.bgx-st-r canvas{width:min(330px,100%)}}'
  ].join('');

  function badge() { return ''; }
  function chips(list, cls) { return '<div class="bgx-chips ' + (cls || '') + '">' + list.map(function (s) { return '<button type="button" data-p="' + s + '" aria-label="' + esc(NAME[s]) + '" aria-pressed="false"><img alt="" loading="lazy" src="' + IMG + 'site/desen/' + s + '.webp"></button>'; }).join('') + '</div>'; }
  function markChips(root, s) { [].forEach.call(root.querySelectorAll('.bgx-chips button'), function (b) { var on = b.getAttribute('data-p') === s; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); }); }

  /* ================= ONIZLEME v3: urun sahnesi, set kurucu, paylas, karsilastir, kesim haritasi ================= */
  var TYPEN = { K: 'Kamera', L: 'Lens', D: 'Drone', G: 'Gimbal', A: 'Aksiyon kamera' };
  var css2 = [
    /* 1 urun sahnesi */
    '.bgp{position:absolute;inset:0;z-index:2;background:radial-gradient(55% 55% at 50% 50%,rgba(var(--g,201,164,92),.18),rgba(var(--g,201,164,92),.04) 55%,transparent 75%),radial-gradient(120% 90% at 50% 0%,#18181A 0%,#0E0E0F 70%);transition:opacity .3s}',
    '.bgp.off{opacity:0;pointer-events:none}',
    '.bgp-st{position:absolute;left:6%;right:6%;top:4%;bottom:12%;touch-action:pan-y;user-select:none;-webkit-user-select:none}',
    '.bgp-st canvas,.bgp-st img{position:absolute;inset:0;width:100%!important;height:100%!important;object-fit:contain;display:block;border-radius:0!important;aspect-ratio:auto!important}',
    '.bgp-st canvas{filter:drop-shadow(0 26px 26px rgba(0,0,0,.6))}',
    '.bgp-bare{clip-path:inset(0 50% 0 0);opacity:0;transition:opacity .3s;pointer-events:none}',
    '.bgp.cmp .bgp-bare{opacity:1}',
    '.bgp-hd{position:absolute;top:8%;bottom:8%;left:50%;width:2px;margin-left:-1px;background:' + G + ';box-shadow:0 0 12px rgba(201,164,92,.7);opacity:0;transition:opacity .3s;pointer-events:none}',
    '.bgp-hd i{position:absolute;top:50%;left:50%;width:40px;height:40px;margin:-20px 0 0 -20px;border-radius:50%;background:#0E0E0F;border:2px solid ' + G + ';display:flex;align-items:center;justify-content:center;color:#E2C285;font:700 14px Manrope,sans-serif;font-style:normal}',
    '.bgp.cmp .bgp-hd{opacity:1}',
    '.bgp-lb{position:absolute;top:4%;font:800 10px Manrope,sans-serif;letter-spacing:.16em;color:#A3A09A;opacity:0;transition:opacity .3s}.bgp-lb.l{left:6%}.bgp-lb.r{right:6%;color:#E2C285}.bgp.cmp .bgp-lb{opacity:1}',
    '.bgp-pd{position:absolute;left:20%;right:20%;bottom:9%;height:7%;border-radius:50%;background:radial-gradient(ellipse at 50% 30%,#2A292E 0%,#161618 55%,transparent 80%);border-top:1px solid rgba(226,194,133,.45);box-shadow:0 -4px 26px rgba(var(--g,201,164,92),.3)}',
    '.bgp-bt{position:absolute;left:14px;bottom:62px;display:flex;flex-wrap:wrap;gap:8px;z-index:4}',
    '.bgp-bt button{display:inline-flex;align-items:center;gap:6px;min-height:38px;padding:0 14px;border-radius:999px;border:1px solid #3A383F;background:rgba(14,14,15,.85);color:#F2F0EB;font:700 12px Manrope,sans-serif;cursor:pointer}',
    '.bgp-bt button:hover{border-color:' + G + '}.bgp.cmp .bgp-bt button[data-a="cmp"]{background:' + G + ';color:#0E0E0F;border-color:' + G + '}',
    '.bgp-bd{position:absolute;top:12px;left:12px;z-index:4}',
    '.bgp-back{position:absolute;right:14px;bottom:62px;z-index:4;display:none;min-height:38px;padding:0 14px;border-radius:999px;border:1px solid ' + G + ';background:rgba(14,14,15,.85);color:#E2C285;font:700 12px Manrope,sans-serif;cursor:pointer}',
    /* 2 set kurucu */
    '.bgk-sl{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-bottom:16px}',
    '.bgk-s{position:relative;border:1px solid #2A292E;border-radius:14px;background:#141416;padding:12px}',
    '.bgk-s label{display:block;font:800 11px Manrope,sans-serif;letter-spacing:.16em;color:#8E8A83;margin-bottom:6px}',
    '.bgk-s input{width:100%;background:#0E0E0F!important;border:1px solid #3A383F!important;border-radius:10px;padding:11px 12px;color:#F2F0EB!important;font:600 14px Manrope,sans-serif;outline:none}',
    '.bgk-s input:focus{border-color:' + G + '!important}',
    '.bgk-sg{position:absolute;left:12px;right:12px;top:calc(100% - 6px);z-index:20;background:#141416;border:1px solid #3A383F;border-radius:12px;overflow:hidden;display:none;box-shadow:0 16px 30px rgba(0,0,0,.5)}',
    '.bgk-sg button{display:block;width:100%;text-align:left;padding:10px 12px;border:0;background:transparent;color:#D9D5CD;font:500 14px Manrope,sans-serif;cursor:pointer}.bgk-sg button:hover{background:#1E1E21;color:#fff}',
    '.bgk-x{position:absolute;top:10px;right:10px;width:26px;height:26px;border-radius:50%;border:1px solid #3A383F;background:transparent;color:#A3A09A;cursor:pointer;font:700 13px/1 Manrope,sans-serif}',
    '.bgk-sc{position:relative;border-radius:20px;border:1px solid #26252A;background:linear-gradient(180deg,#141416 0%,#0F0F10 78%,#121110 100%);padding:10px;overflow:hidden}',
    '.bgk-sc canvas{width:100%;aspect-ratio:1500/700;display:block}',
    '.bgk-bot{display:flex;flex-wrap:wrap;gap:20px;align-items:flex-start;justify-content:space-between;margin-top:16px}',
    '.bgk-sum{flex:1 1 320px;max-width:520px;border:1px solid #2A292E;border-radius:16px;background:#141416;padding:16px 18px;font-size:14px}',
    '.bgk-sum div{display:flex;justify-content:space-between;gap:12px;padding:5px 0;color:#D9D5CD}.bgk-sum div a{color:#D9D5CD!important;text-decoration:none!important}.bgk-sum div a:hover{color:#E2C285!important}.bgk-sum div>:last-child{white-space:nowrap;flex:none}',
    '.bgk-sum .ds{color:#7CD3A0}.bgk-sum .tt{border-top:1px solid #2A292E;margin-top:6px;padding-top:10px;font:800 18px Manrope,sans-serif;color:#F2F0EB}',
    '.bgk-act{flex:1 1 240px;display:flex;flex-direction:column;gap:10px;align-items:flex-start}',
    '.bgk-act small{font-size:12px;color:#8E8A83;line-height:1.5}',
    '@media (max-width:760px){.bgk-sl{grid-template-columns:none;gap:8px}.bgk-s{padding:8px 10px}.bgk-sc{padding:4px}.bgk-sc canvas{aspect-ratio:1000/540}}',
    /* 4 karsilastir */
    '.bgc{display:flex;flex-wrap:wrap;gap:24px;align-items:center}',
    '.bgc-c{flex:2 1 460px;min-width:0;position:relative;display:flex;flex-direction:column;align-items:center}',
    '.bgc-st{position:relative;width:min(600px,100%);aspect-ratio:1/1;touch-action:pan-y;cursor:ew-resize;user-select:none}',
    '.bgc-st canvas{position:absolute;inset:0;width:100%;height:100%;filter:drop-shadow(0 26px 26px rgba(0,0,0,.6))}',
    '.bgc-hd{position:absolute;top:6%;bottom:6%;width:2px;margin-left:-1px;background:' + G + ';box-shadow:0 0 12px rgba(201,164,92,.7);pointer-events:none}',
    '.bgc-hd i{position:absolute;top:50%;left:50%;width:44px;height:44px;margin:-22px 0 0 -22px;border-radius:50%;background:#0E0E0F;border:2px solid ' + G + ';display:flex;align-items:center;justify-content:center;color:#E2C285;font:700 15px Manrope,sans-serif;font-style:normal}',
    '.bgc-nm{position:absolute;top:2%;font:italic 900 20px Archivo,sans-serif;color:#E2C285;pointer-events:none}.bgc-nm.l{left:2%}.bgc-nm.r{right:2%;text-align:right}',
    '.bgc-l{flex:1 1 280px;max-width:400px;display:flex;flex-direction:column;gap:14px}',
    '.bgc-l h3{margin:6px 0 0;font:800 13px Manrope,sans-serif;letter-spacing:.14em;color:#8E8A83}',
    '.bgx-chips .bgc-bare{width:auto!important;height:40px!important;padding:0 14px!important;border-radius:999px!important;border:2px solid #3A383F;background:#0E0E0F;color:#F2F0EB;font:700 12px Manrope,sans-serif;cursor:pointer}.bgx-chips .bgc-bare.on{border-color:#E2C285;color:#E2C285}',
    '.bgc-q{padding:0;border:0;background:transparent}.bgc-q .bgk-sg{left:0;right:0;top:calc(100% + 4px)}',
    '.bgc-dn{margin:4px 0 0;font:700 14px Manrope,sans-serif;color:#A9A59D;text-align:center}',
    /* 5 kesim haritasi */
    '.bgm{display:flex;flex-wrap:wrap;gap:28px;align-items:center}',
    '.bgm-c{flex:2 1 460px;min-width:0;display:flex;flex-direction:column;align-items:center}',
    '.bgm-c canvas{width:min(580px,100%);aspect-ratio:1/1;filter:drop-shadow(0 26px 26px rgba(0,0,0,.6))}',
    '.bgm-l{flex:1 1 300px;max-width:420px;display:flex;flex-direction:column;gap:12px}',
    '.bgm-k{display:flex;gap:12px;align-items:flex-start;width:100%;text-align:left;padding:12px 14px;border-radius:14px;border:1px solid #2A292E;background:#141416;color:#F2F0EB;font-family:Manrope,sans-serif;cursor:pointer;transition:border-color .2s,background .2s}',
    '.bgm-k:hover,.bgm-k.on{border-color:' + G + ';background:#1B1912}',
    '.bgm-k i{flex:0 0 auto;width:18px;height:18px;border-radius:5px;margin-top:2px}',
    '.bgm-k b{display:block;font-size:15px;margin-bottom:3px}.bgm-k span{font-size:13px;line-height:1.5;color:#A9A59D}',
    '.bgm-tb{display:flex;flex-wrap:wrap;gap:6px}',
    '.bgm-tb button{min-height:36px;padding:0 14px;border-radius:999px;border:1px solid #3A383F;background:transparent;color:#F2F0EB;font:700 12px Manrope,sans-serif;cursor:pointer}.bgm-tb button.on{background:' + G + ';border-color:' + G + ';color:#0E0E0F}',
    /* paylas */
    '.bgs-share{display:inline-flex;align-items:center;gap:8px;min-height:40px;padding:0 16px;border-radius:999px;border:1px solid ' + G + ';background:transparent;color:#E2C285;font:700 13px Manrope,sans-serif;cursor:pointer;align-self:flex-start}',
    '.bgs-share:hover{background:rgba(201,164,92,.12)}',
    '.bgx-toast{position:fixed;left:50%;bottom:70px;transform:translateX(-50%);z-index:2147483001;padding:10px 16px;border-radius:999px;background:#141416;border:1px solid ' + G + ';color:#E2C285;font:700 13px Manrope,sans-serif;box-shadow:0 10px 30px rgba(0,0,0,.5)}'
  ].join('');
  var SHARE_IC = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7"/><path d="M12 3v12"/><path d="M7 8l5-5 5 5"/></svg>';
  function toast(t) { var d = document.createElement('div'); d.className = 'bgx-toast'; d.textContent = t; document.body.appendChild(d); setTimeout(function () { d.remove(); }, 2600); }

  /* ===== 3: kombinini paylas (1080x1920 hikaye gorseli) ===== */
  function ped(x, cx, cy, w, h) {
    var g = x.createRadialGradient(cx, cy - h * .2, 10, cx, cy, w * .55); g.addColorStop(0, '#2A292E'); g.addColorStop(.6, '#161618'); g.addColorStop(1, 'rgba(14,14,15,0)');
    x.save(); x.fillStyle = g; x.beginPath(); x.ellipse(cx, cy, w / 2, h / 2, 0, 0, 6.283); x.fill();
    x.strokeStyle = 'rgba(226,194,133,.55)'; x.lineWidth = 2; x.beginPath(); x.ellipse(cx, cy, w / 2, h / 2, 0, Math.PI * 1.05, Math.PI * 1.95); x.stroke(); x.restore();
  }
  function card(list, slug) {
    var W = 1080, H = 1920, c = document.createElement('canvas'); c.width = W; c.height = H; var x = c.getContext('2d');
    var bg = x.createRadialGradient(W / 2, H * .45, 50, W / 2, H * .45, W * .9); bg.addColorStop(0, '#1C1A16'); bg.addColorStop(.55, '#111112'); bg.addColorStop(1, '#0B0B0C');
    x.fillStyle = bg; x.fillRect(0, 0, W, H);
    x.strokeStyle = 'rgba(201,164,92,.7)'; x.lineWidth = 3; x.strokeRect(46, 46, W - 92, H - 92);
    x.fillStyle = '#E2C285'; x.font = 'italic 900 64px Archivo, sans-serif'; x.textAlign = 'center'; x.fillText('BETAGUARD', W / 2, 190);
    x.fillStyle = '#8E8A83'; x.font = '700 26px Manrope, sans-serif'; x.fillText('CİHAZA ÖZEL KESİM KAPLAMA', W / 2, 245);
    return Promise.all(list.map(function (d) { return comp(d, slug, 1000); })).then(function (cs) {
      if (cs.length === 1) { ped(x, W / 2, 1210, 760, 120); x.save(); x.shadowColor = 'rgba(0,0,0,.6)'; x.shadowBlur = 50; x.shadowOffsetY = 30; x.drawImage(cs[0], 40, 260, 1000, 1000); x.restore(); }
      else {
        var n = cs.length, sz = n === 2 ? 560 : 470, pos = n === 2 ? [[300, 640], [780, 980]] : [[540, 560], [300, 1000], [780, 1000]];
        cs.forEach(function (cc, i) { var p = pos[i]; ped(x, p[0], p[1] + sz * .36, sz * .8, 80); x.save(); x.shadowColor = 'rgba(0,0,0,.6)'; x.shadowBlur = 40; x.shadowOffsetY = 24; x.drawImage(cc, p[0] - sz / 2, p[1] - sz / 2, sz, sz); x.restore(); });
      }
      x.fillStyle = '#E2C285'; x.font = 'italic 900 110px Archivo, sans-serif'; x.fillText(NAME[slug], W / 2, 1460);
      x.fillStyle = '#F2F0EB'; x.font = '700 40px Manrope, sans-serif';
      var t = list.length === 1 ? list[0].b + ' ' + list[0].m : list.map(function (d) { return d.m; }).join(' · ');
      while (x.measureText(t).width > W - 160 && t.length > 10) t = t.slice(0, -2); x.fillText(t, W / 2, 1540);
      x.fillStyle = '#A9A59D'; x.font = '600 34px Manrope, sans-serif'; x.fillText(list.length === 1 ? '39 desenden biri' : 'Aynı desenle set', W / 2, 1600);
      x.fillStyle = '#C9A45C'; x.fillRect(W / 2 - 60, 1680, 120, 3);
      x.fillStyle = '#F2F0EB'; x.font = '800 40px Manrope, sans-serif'; x.fillText('betaguard.com.tr', W / 2, 1760);
      x.fillStyle = '#E2C285'; x.font = '700 34px Manrope, sans-serif'; x.fillText('@betaguard.tr', W / 2, 1815);
      return c;
    });
  }
  function shareCard(list, slug) {
    toast('Görsel hazırlanıyor…');
    card(list, slug).then(function (c) {
      c.toBlob(function (b) {
        if (!b) { toast('Görsel oluşturulamadı'); return; }
        var fn = 'betaguard-' + (list.length === 1 ? list[0].s.replace(/-kaplama$/, '') : 'set') + '-' + slug + '.png';
        try { var f = new File([b], fn, { type: 'image/png' }); if (navigator.canShare && navigator.canShare({ files: [f] }) && /Mobi|Android|iPhone/i.test(navigator.userAgent)) { navigator.share({ files: [f], title: 'Betaguard', text: NAME[slug] + ' · betaguard.com.tr' }).catch(function () {}); return; } } catch (e) {}
        var a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = fn; document.body.appendChild(a); a.click(); setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
        toast('Görsel indirildi');
      }, 'image/png');
    });
  }
  function S3share() {
    var r = document.querySelector('[data-bgs] .bgs-r'); if (!r) return false; if (r.querySelector('.bgs-share')) return true;
    var b = document.createElement('button'); b.type = 'button'; b.className = 'bgs-share'; b.innerHTML = SHARE_IC + 'Kombinini paylaş';
    b.addEventListener('click', function () { var s = stage(); shareCard([s.d], s.p); });
    r.appendChild(b); return true;
  }

  /* ===== 1: urun sayfasi sahnesi ===== */
  function S1() {
    var d = bySlug(location.pathname.replace(/^\/|\/$/g, '')); if (!d) return false;
    var main = document.querySelector('.bg-gal-main'); if (!main) return false;
    if (main.querySelector('.bgp')) return true;
    var o = document.createElement('div'); o.className = 'bgp'; o.setAttribute('data-bgx1', '1');
    o.innerHTML = '' +
      '<div class="bgp-pd" aria-hidden="true"></div><div class="bgp-st"><canvas width="1000" height="1000" role="img"></canvas></div>' +
      '<div class="bgp-bt"><button type="button" data-a="sh">' + SHARE_IC + 'Paylaş</button></div>';
    main.appendChild(o);
    var back = document.createElement('button'); back.type = 'button'; back.className = 'bgp-back'; back.textContent = 'Sahneye dön'; main.appendChild(back);
    var cv = o.querySelector('canvas'), st = { p: null, c: null };
    function cur() { var pp = document.querySelector('.bg-pp'); var m = pp && /Desen:\s*([^\n]+)/.exec(pp.innerText || ''); var nm = m && m[1].trim(); for (var k in NAME) if (NAME[k] === nm) return k; var q = /[?&]desen=([a-z0-9-]+)/.exec(location.search); return q && NAME[q[1]] ? q[1] : 'line-black'; }
    function setP(s) {
      if (s === st.p) return; st.p = s;
      o.style.setProperty('--g', ({ 'royal-gold': '201,164,92', 'line-red': '208,26,44', 'nexus-cyan': '31,181,201', 'tactical-green': '90,165,72', 'mono-white': '232,230,224', 'mono-orange': '226,98,10', 'hexagonal-red': '192,40,58', 'topografik-navy': '40,90,170' })[s] || '201,164,92');
      comp(d, s, 1000).then(function (c) { if (st.p !== s) return; if (st.c) wipe(cv, st.c, c, 1100, 1); else show(cv, c); st.c = c; });
      o.classList.remove('off'); back.style.display = 'none';
    }
    o.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-a]'); if (!b) return;
      shareCard([d], st.p || cur());
    });
    var ctl = main.querySelector('.bg-gal-ctl');
    if (ctl) ctl.addEventListener('click', function () { o.classList.add('off'); back.style.display = 'inline-flex'; }, true);
    back.addEventListener('click', function () { o.classList.remove('off'); back.style.display = 'none'; });
    var pp = document.querySelector('.bg-pp');
    if (pp) new MutationObserver(function () { setP(cur()); }).observe(pp, { subtree: true, childList: true, characterData: true });
    setP(cur());
    return true;
  }

  /* ===== 2: setini kapla ===== */
  var KDEF = [['K', 'kamera-sony-alpha-a7-mark-iv'], ['L', 'lens-sony-fe-24-70mm-f2-8-gm-ii'], ['D', 'drone-dji-mini-4-pro']];
  function byDir(f) { var L = devs(); for (var i = 0; i < L.length; i++) if (L[i].f === f) return L[i]; return null; }
  function find(q, types) {
    q = String(q || '').toLowerCase().replace(/\bmark\s*/g, '').trim(); var toks = q.split(/\s+/).filter(Boolean);
    return devs().filter(function (d) { if (types && types.indexOf(d.t) < 0) return false; var k = d.key || (d.b + ' ' + d.m).toLowerCase(); return toks.every(function (t) { return k.indexOf(t) >= 0; }); }).slice(0, 6);
  }
  function S2k() {
    var anchor = document.querySelector('[data-bge5]') || document.querySelector('.bg26-pop'); if (!anchor) return false; if (document.querySelector('[data-bgx2k]')) return true;
    var box = document.createElement('div'); box.className = 'bgx'; box.setAttribute('data-bgx2k', '1'); box.id = 'bgx-2';
    var SL = [['K', 'KAMERA', ['K']], ['L', 'LENS', ['L']], ['D', 'DRONE / AKSİYON / GİMBAL', ['D', 'A', 'G']]];
    box.innerHTML = badge(2, 'Setini kapla') +
      '<div class="bgx-hd"><div><h2>Setini aynı desenle kapla.</h2><p class="bgx-sub">Cihazlarını seç, deseni seç, üçünü yan yana gör. 2 kaplamaya 250 ₺, 3 ve üzerine 500 ₺ indirim otomatik hesaplanır.</p></div>' + chips(FEAT) + '</div>' +
      '<div class="bgk-sl">' + SL.map(function (s, i) { return '<div class="bgk-s" data-i="' + i + '"><label for="bgk-q' + i + '">' + s[1] + '</label><input id="bgk-q' + i + '" type="text" autocomplete="off" placeholder="Model yaz…"><button type="button" class="bgk-x" aria-label="Bu cihazı çıkar">×</button><div class="bgk-sg"></div></div>'; }).join('') + '</div>' +
      '<div class="bgk-sc"><canvas width="1500" height="700" role="img" aria-label="Set önizlemesi"></canvas></div>' +
      '<div class="bgk-bot"><div class="bgk-sum" aria-live="polite"></div><div class="bgk-act"><button type="button" class="bgx-btn g" data-a="sh">' + SHARE_IC + 'Setimi paylaş</button><small>Cihaz adına dokun, kendi sayfası seçtiğin desenle açılsın. İndirim sepette otomatik uygulanır.</small></div></div>';
    anchor.parentNode.insertBefore(box, anchor.nextSibling);
    var st = { p: 'royal-gold', it: KDEF.map(function (k) { return byDir(k[1]); }), cs: [] };
    var cv = box.querySelector('canvas'), x = cv.getContext('2d'), W = 1500, H = 700, prev = null, tok = 0;
    function dims() { var mob = (box.clientWidth || 1000) < 640; var w = mob ? 1000 : 1500, h = mob ? 540 : 700; if (cv.width !== w || cv.height !== h) { cv.width = W = w; cv.height = H = h; prev = null; } }
    function bb(c) {
      if (c.__bb) return c.__bb;
      var t = document.createElement('canvas'); t.width = t.height = 120; var y = t.getContext('2d'); y.drawImage(c, 0, 0, 120, 120);
      var x0 = 120, x1 = 0, y0 = 120, y1 = 0;
      try { var a = y.getImageData(0, 0, 120, 120).data; for (var j = 0; j < 120; j++) for (var i = 0; i < 120; i++) if (a[(j * 120 + i) * 4 + 3] > 40) { if (i < x0) x0 = i; if (i > x1) x1 = i; if (j < y0) y0 = j; if (j > y1) y1 = j; } } catch (e) { x0 = 10; y0 = 10; x1 = 110; y1 = 110; }
      if (x1 < x0) { x0 = 10; y0 = 10; x1 = 110; y1 = 110; }
      return (c.__bb = [x0 / 120, y0 / 120, (x1 + 1) / 120, (y1 + 1) / 120]);
    }
    function scene(cs) {
      var c = document.createElement('canvas'); c.width = W; c.height = H; var y = c.getContext('2d');
      var dl = document.createElement('canvas'); dl.width = W; dl.height = H; var z = dl.getContext('2d'); c.__dev = dl;
      var on = st.it.map(function (d, i) { return d ? i : -1; }).filter(function (i) { return i >= 0; }), n = on.length;
      var fy = H * .8;
      /* raf: cam plaka + altin LED + yansima zemini */
      var fl = y.createLinearGradient(0, fy, 0, H); fl.addColorStop(0, 'rgba(201,164,92,.10)'); fl.addColorStop(1, 'rgba(14,14,15,0)'); y.fillStyle = fl; y.fillRect(0, fy, W, H - fy);
      var pl = y.createLinearGradient(0, fy - 2, 0, fy + 16); pl.addColorStop(0, 'rgba(255,255,255,.22)'); pl.addColorStop(1, 'rgba(255,255,255,.04)'); y.fillStyle = pl; y.fillRect(W * .04, fy - 2, W * .92, 18);
      y.fillStyle = 'rgba(255,255,255,.45)'; y.fillRect(W * .04, fy - 2, W * .92, 1.5);
      y.save(); y.shadowColor = 'rgba(226,194,133,.9)'; y.shadowBlur = 22; y.fillStyle = '#E2C285'; y.fillRect(W * .06, fy + 16, W * .88, 3); y.restore();
      if (!n) return c;
      /* gercek boyuta yakin ortak olcek: her cihaz turu icin yaklasik mm; lens bayonet altta dik durur */
      var it = on.map(function (i) {
        var cc = cs[i]; if (!cc) return null; var d = st.it[i], t = d.t;
        var q = bb(cc), S = cc.width, sw = (q[2] - q[0]) * S, sh = (q[3] - q[1]) * S, img = document.createElement('canvas');
        if (t === 'L') { img.width = Math.round(sh); img.height = Math.round(sw); var g = img.getContext('2d'); g.translate(img.width, 0); g.rotate(Math.PI / 2); g.drawImage(cc, q[0] * S, q[1] * S, sw, sh, 0, 0, sw, sh); }
        else { img.width = Math.round(sw); img.height = Math.round(sh); img.getContext('2d').drawImage(cc, q[0] * S, q[1] * S, sw, sh, 0, 0, sw, sh); }
        var w = img.width, h = img.height, mm = t === 'K' ? 132 / w : t === 'L' ? 82 / w : t === 'D' ? 175 / w : t === 'A' ? 72 / w : t === 'G' ? 260 / h : 130 / w;
        return { img: img, w: w, h: h, mw: w * mm, mh: h * mm };
      }).filter(Boolean);
      var gap = W * .045, tw = it.reduce(function (a, o) { return a + o.mw; }, 0), mh = Math.max.apply(null, it.map(function (o) { return o.mh; }));
      var K = Math.min((W * (W < 1200 ? .9 : .82) - gap * (it.length - 1)) / tw, H * .68 / mh), tot = tw * K + gap * (it.length - 1), x0 = (W - tot) / 2;
      it.forEach(function (o) {
        var cc = o.img, b = [0, 0, 1, 1], S = 1, bw = o.w, bh = o.h, dw = o.mw * K, dh = o.mh * K, dx = x0, cx = dx + dw / 2, dy = fy - dh; x0 += dw + gap;
        /* temas golgesi */
        y.save(); var cg = y.createRadialGradient(cx, fy, 4, cx, fy, dw * .55); cg.addColorStop(0, 'rgba(0,0,0,.75)'); cg.addColorStop(1, 'rgba(0,0,0,0)'); y.fillStyle = cg; y.beginPath(); y.ellipse(cx, fy + 2, dw * .55, 14, 0, 0, 6.283); y.fill(); y.restore();
        /* yansima */
        var rf = document.createElement('canvas'); rf.width = Math.max(1, Math.round(dw)); rf.height = Math.max(1, Math.round(dh * .45)); var r = rf.getContext('2d');
        r.save(); r.translate(0, dh); r.scale(1, -1); r.drawImage(cc, b[0] * S, b[1] * S, bw, bh, 0, 0, dw, dh); r.restore();
        r.globalCompositeOperation = 'destination-in'; var rg = r.createLinearGradient(0, 0, 0, rf.height); rg.addColorStop(0, 'rgba(0,0,0,.28)'); rg.addColorStop(1, 'rgba(0,0,0,0)'); r.fillStyle = rg; r.fillRect(0, 0, rf.width, rf.height);
        y.drawImage(rf, dx, fy + 18);
        /* cihaz */
        y.save(); y.shadowColor = 'rgba(0,0,0,.55)'; y.shadowBlur = 26; y.shadowOffsetY = 10; y.drawImage(cc, b[0] * S, b[1] * S, bw, bh, dx, dy, dw, dh); y.restore();
        z.drawImage(cc, b[0] * S, b[1] * S, bw, bh, dx, dy, dw, dh);
      });
      return c;
    }
    function render() {
      dims(); var my = ++tok;
      Promise.all(st.it.map(function (d) { return d ? comp(d, st.p, 600) : Promise.resolve(null); })).then(function (cs) {
        if (my !== tok) return; var s = scene(cs);
        var k = function () { prev = s; };
        if (prev) { var tmp = document.createElement('canvas'); tmp.width = W; tmp.height = H; wipeWide(prev, s, k); } else { x.clearRect(0, 0, W, H); x.drawImage(s, 0, 0); k(); }
      });
      sum(); markChips(box, st.p); box.style.setProperty('--g', '201,164,92');
      st.it.forEach(function (d, i) { box.querySelector('#bgk-q' + i).value = d ? d.b + ' ' + d.m : ''; });
    }
    function wipeWide(a, b, cb) {
      var t0 = 0, D = 1100, Wd = 120, my = tok, gl = null;
      function fr(now) { if (my !== tok) return; if (!t0) t0 = now; var k = Math.min(1, (now - t0) / D), px = ease(k) * (W + 2 * Wd) - Wd;
        x.clearRect(0, 0, W, H); x.drawImage(a, 0, 0); x.save(); x.beginPath(); x.rect(0, 0, Math.max(0, px), H); x.clip(); x.drawImage(b, 0, 0); x.restore();
        if (k < 1) {
          if (!gl) { gl = document.createElement('canvas'); gl.width = W; gl.height = H; }
          var gx = gl.getContext('2d'); gx.globalCompositeOperation = 'source-over'; gx.clearRect(0, 0, W, H); gx.drawImage(b.__dev || b, 0, 0); gx.globalCompositeOperation = 'source-in';
          var g = gx.createLinearGradient(px - Wd, 0, px + Wd, 0); g.addColorStop(0, 'rgba(255,236,190,0)'); g.addColorStop(.5, 'rgba(255,236,190,.85)'); g.addColorStop(1, 'rgba(255,236,190,0)'); gx.fillStyle = g; gx.fillRect(px - Wd, 0, 2 * Wd, H);
          x.drawImage(gl, 0, 0); requestAnimationFrame(fr);
        } else { x.clearRect(0, 0, W, H); x.drawImage(b, 0, 0); cb(); } }
      requestAnimationFrame(fr);
    }
    function sum() {
      var L = st.it.filter(Boolean), sub = L.reduce(function (a, d) { return a + (+d.p || 0); }, 0), ds = L.length >= 3 ? 500 : L.length === 2 ? 250 : 0, tot = sub - ds;
      var h = L.map(function (d) { return '<div><a href="/' + d.s + '?desen=' + st.p + '">' + esc(d.b + ' ' + d.m) + ' · ' + esc(NAME[st.p]) + ' →</a><span>' + fmt(d.p) + '</span></div>'; }).join('');
      if (!L.length) h = '<div><span>Bir cihaz seç.</span></div>';
      h += '<div><span>Ara toplam</span><span>' + fmt(sub) + '</span></div>';
      h += '<div class="ds"><span>Set indirimi' + (ds ? ' (' + L.length + ' kaplama)' : '') + '</span><span>' + (ds ? '−' + fmt(ds) : (L.length === 1 ? 'bir cihaz daha ekle: −250 ₺' : '—')) + '</span></div>';
      h += '<div><span>Kargo</span><span>' + (tot >= 2000 ? 'Ücretsiz' : '200 ₺') + '</span></div>';
      h += '<div class="tt"><span>Toplam</span><span>' + fmt(tot + (tot >= 2000 || !L.length ? 0 : 200)) + '</span></div>';
      box.querySelector('.bgk-sum').innerHTML = h;
    }
    [].forEach.call(box.querySelectorAll('.bgk-s'), function (s) {
      var i = +s.getAttribute('data-i'), inp = s.querySelector('input'), sg = s.querySelector('.bgk-sg'), list = [];
      inp.addEventListener('focus', function () { inp.select(); });
      inp.addEventListener('input', function () { list = inp.value.trim().length < 2 ? [] : find(inp.value, SL[i][2]); sg.innerHTML = list.map(function (d, k) { return '<button type="button" data-k="' + k + '"><b>' + esc(d.b) + '</b> ' + esc(d.m) + ' <span style="color:#8E8A83;font-size:12px">· ' + fmt(d.p) + '</span></button>'; }).join(''); sg.style.display = list.length ? 'block' : 'none'; });
      sg.addEventListener('mousedown', function (e) { var b = e.target.closest('button'); if (!b) return; e.preventDefault(); st.it[i] = list[+b.getAttribute('data-k')]; sg.style.display = 'none'; inp.blur(); render(); });
      inp.addEventListener('blur', function () { setTimeout(function () { sg.style.display = 'none'; var d = st.it[i]; inp.value = d ? d.b + ' ' + d.m : ''; }, 150); });
      s.querySelector('.bgk-x').addEventListener('click', function () { st.it[i] = null; render(); });
    });
    box.querySelector('.bgx-chips').addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) { st.p = b.getAttribute('data-p'); render(); } });
    function pre(s) { st.it.forEach(function (d) { if (d) { limg(IMG + d.f + '/' + s + '.webp'); limg(IMG + d.f + '/bare.webp'); } }); }
    ['pointerover', 'pointerdown', 'focusin'].forEach(function (ev) { box.querySelector('.bgx-chips').addEventListener(ev, function (e) { var b = e.target.closest('button'); if (b) pre(b.getAttribute('data-p')); }); });
    try { var io = new IntersectionObserver(function (es) { if (!es[0].isIntersecting) return; io.disconnect(); if (navigator.connection && navigator.connection.saveData) return; var i = 0; (function nx() { if (i >= FEAT.length) return; pre(FEAT[i++]); setTimeout(nx, 350); })(); }, { rootMargin: '300px' }); io.observe(box); } catch (e) {}
    window.addEventListener('resize', function () { var w = box.clientWidth; if ((w < 640) !== (W < 1200)) render(); });
    box.querySelector('[data-a="sh"]').addEventListener('click', function () { var L = st.it.filter(Boolean); if (L.length) shareCard(L, st.p); });
    onStage(function (s) { if (s.p !== st.p) { st.p = s.p; render(); } });
    render();
    return true;
  }

  /* ===== 4: iki deseni karsilastir ===== */
  var CT = [['K', 'Kamera', 'kamera-sony-alpha-a7-mark-iv'], ['L', 'Lens', 'lens-sony-fe-24-70mm-f2-8-gm-ii'], ['D', 'Drone', 'drone-dji-mini-4-pro'], ['A', 'Aksiyon', 'aksiyon-kamera-dji-osmo-pocket-3']];
  function S4() {
    var anchor = document.querySelector('[data-bgx2k]'); if (!anchor) return false; if (document.querySelector('[data-bgx4]')) return true;
    var box = document.createElement('div'); box.className = 'bgx'; box.setAttribute('data-bgx4', '1'); box.id = 'bgx-4';
    var bareChip = '<button type="button" class="bgc-bare" data-p="__bare" aria-pressed="false">Kaplamasız</button>';
    box.innerHTML = '<div class="bgc"><div class="bgc-l"><h2>Karşılaştır.</h2><p class="bgx-sub">Cihazını seç; solda kaplamasız halini ya da bir deseni, sağda başka bir deseni gör. Ortadaki tutamacı sürükle.</p>' +
      '<h3>CİHAZ</h3><div class="bgm-tb" role="group" aria-label="Cihaz">' + CT.filter(function (t) { return byDir(t[2]); }).map(function (t) { return '<button type="button" data-f="' + t[2] + '">' + t[1] + '</button>'; }).join('') + '</div>' +
      '<div class="bgk-s bgc-q"><input type="text" autocomplete="off" placeholder="Başka model yaz…" aria-label="Cihaz ara"><div class="bgk-sg"></div></div>' +
      '<h3>SOL</h3><div class="bgx-chips L">' + bareChip + chips(FEAT).replace(/^<div class="bgx-chips ">/, '').replace(/<\/div>$/, '') + '</div><h3>SAĞ</h3>' + chips(FEAT, 'R') + '</div>' +
      '<div class="bgc-c"><div class="bgc-st"><canvas width="1000" height="1000" role="img" aria-label="Karşılaştırma"></canvas><span class="bgc-nm l"></span><span class="bgc-nm r"></span><div class="bgc-hd" aria-hidden="true"><i>‹›</i></div></div><div class="bgx-ped" aria-hidden="true"></div><p class="bgc-dn"></p></div></div>';
    anchor.parentNode.insertBefore(box, anchor.nextSibling);
    var cv = box.querySelector('canvas'), x = cv.getContext('2d'), stg = box.querySelector('.bgc-st'), hd = box.querySelector('.bgc-hd');
    var st = { d: stage().d, l: '__bare', r: 'royal-gold', cl: null, cr: null, pos: 50 };
    function nm(p) { return p === '__bare' ? 'Kaplamasız' : NAME[p]; }
    function img(p) { return p === '__bare' ? bare(st.d, 1000) : comp(st.d, p, 1000); }
    function draw() {
      x.clearRect(0, 0, 1000, 1000); var X = st.pos * 10;
      if (st.cr) { x.save(); x.beginPath(); x.rect(X, 0, 1000 - X, 1000); x.clip(); x.drawImage(st.cr, 0, 0); x.restore(); }
      if (st.cl) { x.save(); x.beginPath(); x.rect(0, 0, X, 1000); x.clip(); x.drawImage(st.cl, 0, 0); x.restore(); }
      hd.style.left = st.pos + '%';
    }
    function load() {
      box.querySelector('.bgc-dn').textContent = st.d.b + ' ' + st.d.m;
      box.querySelector('.bgc-nm.l').textContent = nm(st.l); box.querySelector('.bgc-nm.r').textContent = nm(st.r);
      [].forEach.call(box.querySelectorAll('.bgx-chips.L button'), function (b) { var on = b.getAttribute('data-p') === st.l; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); });
      [].forEach.call(box.querySelectorAll('.bgx-chips.R button'), function (b) { var on = b.getAttribute('data-p') === st.r; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); });
      [].forEach.call(box.querySelectorAll('.bgm-tb button'), function (b) { b.classList.toggle('on', b.getAttribute('data-f') === st.d.f); });
      var d = st.d; Promise.all([img(st.l), img(st.r)]).then(function (r) { if (d !== st.d) return; st.cl = r[0]; st.cr = r[1]; draw(); });
    }
    var drag = false;
    function pos(e) { var r = stg.getBoundingClientRect(); st.pos = clamp((e.clientX - r.left) / r.width * 100, 3, 97); draw(); }
    stg.addEventListener('pointerdown', function (e) { drag = true; pos(e); try { stg.setPointerCapture(e.pointerId); } catch (z) {} });
    stg.addEventListener('pointermove', function (e) { if (drag || e.pointerType === 'mouse' && e.buttons) pos(e); });
    stg.addEventListener('pointerup', function () { drag = false; });
    box.addEventListener('click', function (e) {
      var t = e.target.closest('.bgm-tb button'); if (t) { st.d = byDir(t.getAttribute('data-f')) || st.d; load(); return; }
      var b = e.target.closest('.bgx-chips button'); if (!b) return; if (b.closest('.L')) st.l = b.getAttribute('data-p'); else st.r = b.getAttribute('data-p'); load();
    });
    var inp = box.querySelector('.bgc-q input'), sg = box.querySelector('.bgc-q .bgk-sg'), list = [];
    inp.addEventListener('input', function () { list = inp.value.trim().length < 2 ? [] : find(inp.value); sg.innerHTML = list.map(function (d, k) { return '<button type="button" data-k="' + k + '"><b>' + esc(d.b) + '</b> ' + esc(d.m) + '</button>'; }).join(''); sg.style.display = list.length ? 'block' : 'none'; });
    sg.addEventListener('mousedown', function (e) { var b = e.target.closest('button'); if (!b) return; e.preventDefault(); st.d = list[+b.getAttribute('data-k')]; sg.style.display = 'none'; inp.value = ''; inp.blur(); load(); });
    inp.addEventListener('blur', function () { setTimeout(function () { sg.style.display = 'none'; }, 150); });
    load();
    return true;
  }

  /* ===== kurulum ===== */
  function nav() {
    if (document.querySelector('.bgx-nav')) return;
    var n = document.createElement('div'); n.className = 'bgx-nav'; n.setAttribute('role', 'navigation'); n.setAttribute('aria-label', 'Önizlemeler');
    n.innerHTML = 'ÖNİZLEME ' + [1, 2, 3, 4, 5].map(function (i) { return '<button type="button" data-n="' + i + '" aria-label="Önizleme ' + i + '">' + i + '</button>'; }).join('') + '<button type="button" data-x="1" aria-label="Önizlemeyi kapat">×</button>';
    n.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      if (b.getAttribute('data-x')) { location.href = location.pathname; return; }
      var k = +b.getAttribute('data-n'), V = (/[?&]onizleme=([0-9a-f]+)/.exec(location.search) || [])[1] || '';
      var home = location.pathname === '/' || location.pathname === '';
      if (k === 1) { if (home) { location.href = '/sony-alpha-a7-iv-kaplama?desen=royal-gold&onizleme=' + V; } else { var g = document.querySelector('.bg-gal'); if (g) g.scrollIntoView({ behavior: 'smooth', block: 'center' }); } return; }
      if (!home) { location.href = '/?onizleme=' + V + '#bgx-' + k; return; }
      var el = k === 3 ? document.querySelector('[data-bgs]') : document.getElementById('bgx-' + k); if (!el) return;
      scrollTo({ top: el.getBoundingClientRect().top + scrollY - 70, behavior: 'smooth' });
    });
    document.body.appendChild(n);
  }
  function build() {
    if (!document.getElementById('bgx-css')) { var s = document.createElement('style'); s.id = 'bgx-css'; s.textContent = css + css2; document.head.appendChild(s); }
    if (!devs().length) return;
    var home = location.pathname === '/' || location.pathname === '';
    var L = home ? [['3', S3share], ['2k', S2k], ['4', S4]] : [['1', S1]];
    if (home) watchStage();
    L.forEach(function (f) { try { f[1](); } catch (e) { if (window.console) console.warn('bgx', f[0], e); } });
    if (home && location.hash && /^#bgx-\d$/.test(location.hash) && !build.j) { var el = document.querySelector(location.hash); if (el) { build.j = 1; setTimeout(function () { el.scrollIntoView({ block: 'start' }); }, 600); } }
  }
  var q = false; function sch() { if (q) return; q = true; setTimeout(function () { q = false; build(); }, 400); }
  sch(); new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true });
})();
