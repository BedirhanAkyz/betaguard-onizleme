/* v31: ana sayfa - 'Kararsız mısın' desen testi ve cizik testi (onizlemeden kalici) */
(function () {
  if (window.__bgEkstra) return; window.__bgEkstra = 1;
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
  var PV = /[?&]onizleme=/.test(location.search);
  var DEF = PV ? { s: 'sony-alpha-a7r-v-kaplama', t: 'K', b: 'Sony', m: 'Alpha A7R V', p: 2000, f: 'kamera-sony-alpha-a7r-v' } : { s: 'sony-alpha-a7-iv-kaplama', t: 'K', b: 'Sony', m: 'Alpha A7 IV', p: 2000, f: 'kamera-sony-alpha-a7-mark-iv' };
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
    var a = document.querySelector('.bgs-go'); if (!a || a.__bgeW) return; a.__bgeW = 1;
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
    '.bge{position:relative;max-width:1452px;width:calc(100% - 48px);margin:44px auto;padding:28px 24px 30px;box-sizing:border-box;color:#F2F0EB;font-family:Manrope,sans-serif;border:1px solid #1E1E21;border-radius:24px;background:radial-gradient(60% 80% at 80% 40%,rgba(201,164,92,.05),transparent 70%)}',
    '.bge *{box-sizing:border-box}',
    '.bge-bd{position:absolute;top:-13px;left:22px;display:inline-flex;align-items:center;gap:8px;padding:5px 12px;border-radius:999px;background:' + G + ';color:#0E0E0F;font:800 11px/1.2 Manrope,sans-serif;letter-spacing:.1em;z-index:5}',
    '.bge h2{margin:0;font:italic 900 clamp(28px,3.4vw,42px)/1.05 Archivo,sans-serif!important;color:#F2F0EB}',
    '.bge-sub{margin:8px 0 0;font-size:15px;line-height:1.6;color:#A9A59D;max-width:620px}',
    '.bge-hd{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:16px;margin-bottom:22px}',
    '.bge-chips{display:flex;flex-wrap:wrap;gap:8px}',
    '.bge-chips button{width:40px;height:40px;padding:3px;border-radius:50%;border:2px solid #3A383F;background:#0E0E0F;cursor:pointer;transition:transform .2s,border-color .2s}',
    '.bge-chips button:hover{transform:translateY(-2px)}.bge-chips button.on{border-color:#E2C285}',
    '.bge-chips img{width:100%!important;height:100%!important;border-radius:50%!important;object-fit:cover;display:block}',
    '.bge-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:44px;padding:0 20px;border-radius:999px;border:1px solid #4A4850;background:transparent;color:#F2F0EB!important;font:700 14px Manrope,sans-serif;text-decoration:none!important;cursor:pointer;transition:background .2s,border-color .2s,color .2s}',
    '.bge-btn:hover{border-color:' + G + '}.bge-btn.g{background:' + G + ';border-color:' + G + ';color:#0E0E0F!important}.bge-btn.g:hover{background:#E2C285}',
    '.bge-old{position:relative;opacity:.5}.bge-old:before{content:"MEVCUT HALİ";position:absolute;top:-10px;right:24px;z-index:3;padding:4px 10px;border-radius:999px;background:#2A292E;color:#A9A59D;font:800 10px Manrope,sans-serif;letter-spacing:.12em}',
    /* nav */
    '.bge-nav{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:2147483000;display:flex;align-items:center;gap:6px;padding:6px 8px 6px 14px;border-radius:999px;background:rgba(14,14,15,.92);border:1px solid ' + G + ';box-shadow:0 10px 30px rgba(0,0,0,.5);font:800 11px Manrope,sans-serif;color:#E2C285;letter-spacing:.1em;backdrop-filter:blur(8px)}',
    '.bge-nav button{width:32px;height:32px;border-radius:50%;border:1px solid #3A383F;background:#141416;color:#F2F0EB;font:800 13px Manrope,sans-serif;cursor:pointer}',
    '.bge-nav button:hover{border-color:' + G + ';color:#E2C285}',
    /* 1+4 raf */
    '.bge-row{margin-bottom:30px}',
    '.bge-row-i{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;align-items:end;padding:0 6px}',
    '.bge-it{position:relative;display:flex;flex-direction:column;align-items:center;text-decoration:none!important;color:#F2F0EB!important;padding-top:44px}',
    '.bge-it canvas{width:100%;max-width:230px;aspect-ratio:1/1;display:block;transition:transform .35s ease,filter .35s ease;filter:drop-shadow(0 16px 16px rgba(0,0,0,.6));margin-bottom:-14%}',
    '.bge-it:hover canvas,.bge-it:focus-visible canvas{transform:translateY(-12px) scale(1.05);filter:drop-shadow(0 22px 22px rgba(0,0,0,.7)) drop-shadow(0 0 22px rgba(226,194,133,.35))}',
    '.bge-lb{position:absolute;top:0;left:0;right:0;text-align:center;display:flex;flex-direction:column;gap:2px;opacity:0;transform:translateY(6px);transition:opacity .3s,transform .3s;pointer-events:none}',
    '.bge-it:hover .bge-lb,.bge-it:focus-visible .bge-lb{opacity:1;transform:none}',
    '.bge-lb b{font-size:13px}.bge-lb span{font-size:12px;color:#E2C285}',
    '.bge-sp{position:absolute;left:8%;right:8%;bottom:-4px;height:120px;background:radial-gradient(60% 70% at 50% 100%,rgba(226,194,133,.2),transparent 70%);opacity:0;transition:opacity .35s;pointer-events:none}.bge-it:hover .bge-sp{opacity:1}',
    '.bge-plate{height:14px;border-radius:3px;background:linear-gradient(180deg,rgba(255,255,255,.16),rgba(255,255,255,.04));border-top:1px solid rgba(255,255,255,.35)}',
    '.bge-led{height:3px;margin:0 2%;border-radius:3px;background:' + G + ';box-shadow:0 0 14px 3px rgba(201,164,92,.55),0 14px 40px 10px rgba(201,164,92,.16)}',
    '.bge-wall{border-radius:20px;border:1px solid #26252A;padding:10px clamp(8px,2vw,28px) 4px;background:repeating-linear-gradient(90deg,#121214 0,#121214 118px,#141416 118px,#141416 120px)}',
    '.bge-tag{font-size:13px;color:#A3A09A}.bge-tag b{color:#E2C285}',
    '@media (max-width:760px){.bge{width:auto;margin:30px 12px;padding:24px 14px}.bge-row-i{grid-template-columns:repeat(2,minmax(0,1fr))}.bge-lb{opacity:1;transform:none}.bge-it{padding-top:40px}}',
    /* 5 test */
    '.bge-q{display:flex;flex-direction:column;gap:12px;margin-bottom:18px}',
    '.bge-q h3{margin:0;font:800 17px Manrope,sans-serif;color:#F2F0EB}.bge-q h3 i{font-style:normal;color:#E2C285;margin-right:8px}',
    '.bge-opts{display:flex;flex-wrap:wrap;gap:8px}',
    '.bge-opts button{min-height:44px;padding:0 18px;border-radius:999px;border:1px solid #3A383F;background:#141416;color:#F2F0EB;font:700 14px Manrope,sans-serif;cursor:pointer;transition:background .2s,border-color .2s,color .2s}',
    '.bge-opts button:hover{border-color:' + G + '}.bge-opts button.on{background:' + G + ';border-color:' + G + ';color:#0E0E0F}',
    '.bge-res{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin-top:8px}',
    '.bge-rc{border:1px solid #2A292E;border-radius:18px;background:radial-gradient(70% 60% at 50% 40%,rgba(201,164,92,.1),transparent 70%),#141416;padding:16px;display:flex;flex-direction:column;align-items:center;gap:8px;text-align:center}',
    '.bge-rc canvas{width:100%;max-width:240px;aspect-ratio:1/1;filter:drop-shadow(0 16px 16px rgba(0,0,0,.6))}',
    '.bge-rc em{font:italic 900 22px Archivo,sans-serif;color:#E2C285}.bge-rc small{font-size:12px;color:#A3A09A}.bge-rc .n{font:800 11px Manrope,sans-serif;letter-spacing:.14em;color:#8E8A83}',
    '.bge-rc div{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-top:4px}',
    '@media (max-width:760px){.bge-res{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:80%;overflow-x:auto;scroll-snap-type:x mandatory}.bge-rc{scroll-snap-align:start}}',
    /* 7 cizik */
    '.bge-sc{display:flex;flex-wrap:wrap;gap:28px;align-items:center}',
    '.bge-sc-l{flex:1 1 300px;max-width:420px;display:flex;flex-direction:column;gap:16px}',
    '.bge-sc-r{flex:2 1 420px;min-width:0;display:flex;flex-direction:column;align-items:center;position:relative}',
    '.bge-sc-r canvas{width:min(560px,100%);aspect-ratio:1/1;touch-action:none;cursor:crosshair;filter:drop-shadow(0 26px 26px rgba(0,0,0,.6))}',
    '.bge-hint{position:absolute;top:46%;left:50%;transform:translate(-50%,-50%);padding:10px 16px;border-radius:999px;background:rgba(14,14,15,.85);border:1px solid ' + G + ';font:700 13px Manrope,sans-serif;color:#E2C285;pointer-events:none;transition:opacity .4s;white-space:nowrap}',
    '.bge-msg{font-size:15px;line-height:1.6;color:#B9B5AD;min-height:48px}.bge-msg b{color:#7CD3A0}',
    '.bge-ped{width:min(420px,80%);height:50px;margin-top:-30px;border-radius:50%;background:radial-gradient(ellipse at 50% 30%,#2A292E 0%,#161618 55%,transparent 80%);border-top:1px solid rgba(226,194,133,.45);box-shadow:0 -4px 30px rgba(201,164,92,.25)}',
    /* 3 aski */
    '.bge-ak{display:flex;flex-wrap:wrap;gap:28px;align-items:center;margin-bottom:18px}',
    '.bge-ak-c{flex:2 1 420px;min-width:0;display:flex;flex-direction:column;align-items:center;position:relative}',
    '.bge-ak-c canvas{width:min(520px,100%);aspect-ratio:1/1;filter:drop-shadow(0 26px 26px rgba(0,0,0,.6));animation:bgeF 6s ease-in-out infinite}',
    '@keyframes bgeF{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}',
    '.bge-ak-i{flex:1 1 240px;max-width:320px;display:flex;flex-direction:column;gap:12px}',
    '.bge-ak-i em{font:italic 900 34px/1 Archivo,sans-serif;color:#E2C285}.bge-ak-i small{font-size:13px;color:#A3A09A}',
    '.bge-ak-sw{width:120px;height:160px;border-radius:12px;overflow:hidden;border:1px solid #3A383F;position:relative}.bge-ak-sw img{width:100%!important;height:100%!important;object-fit:cover;display:block}',
    '.bge-lim{position:absolute;top:8px;left:8px;padding:3px 7px;border-radius:5px;background:#0E0E0F;color:#E2C285;font:800 9px Manrope,sans-serif;letter-spacing:.12em}',
    '.bge-grp{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}',
    '.bge-grp button{min-height:36px;padding:0 14px;border-radius:999px;border:1px solid #3A383F;background:transparent;color:#F2F0EB;font:700 12px Manrope,sans-serif;cursor:pointer}',
    '.bge-grp button.on{background:' + G + ';border-color:' + G + ';color:#0E0E0F}',
    '.bge-rail{position:relative;border-radius:18px;border:1px solid #26252A;background:#121214;padding-bottom:12px}',
    '.bge-rail:before{content:"";position:absolute;left:18px;right:18px;top:24px;height:6px;border-radius:3px;background:linear-gradient(180deg,#F2D9A0,#C9A45C 50%,#8A6D35);box-shadow:0 4px 10px rgba(0,0,0,.6)}',
    '.bge-rail-t{position:relative;display:flex;gap:12px;overflow-x:auto;padding:16px 24px 8px;scroll-snap-type:x proximity;scrollbar-width:thin}',
    '.bge-hg{flex:0 0 auto;width:104px;border:0;background:transparent;padding:0;cursor:pointer;display:flex;flex-direction:column;align-items:center;color:#F2F0EB;font:700 11px Manrope,sans-serif;transform-origin:50% 0;scroll-snap-align:start}',
    '.bge-hg:hover{animation:bgeSw 1.1s ease}',
    '@keyframes bgeSw{0%{transform:rotate(0)}30%{transform:rotate(5deg)}60%{transform:rotate(-3deg)}85%{transform:rotate(1.5deg)}100%{transform:rotate(0)}}',
    '.bge-hg .cd{position:relative;width:92px;height:124px;margin-top:-2px;border-radius:9px;overflow:hidden;border:2px solid transparent;box-shadow:0 10px 18px rgba(0,0,0,.5);transition:transform .3s}',
    '.bge-hg .cd img{width:100%!important;height:100%!important;object-fit:cover;display:block}',
    '.bge-hg.on .cd{border-color:#E2C285;transform:translateY(8px) scale(1.07)}.bge-hg.on span{color:#E2C285}',
    '.bge-hg span{margin-top:9px;text-align:center}',
    /* 6 buyutec */
    '.bge-mg{display:flex;flex-wrap:wrap;gap:28px;align-items:center}',
    '.bge-mg-c{flex:2 1 420px;min-width:0;position:relative;display:flex;justify-content:center}',
    '.bge-mg-c canvas.d{width:min(560px,100%);aspect-ratio:1/1;cursor:none;touch-action:none;filter:drop-shadow(0 26px 26px rgba(0,0,0,.6))}',
    '.bge-lens{position:absolute;width:190px;height:190px;border-radius:50%;border:2px solid #E2C285;box-shadow:0 12px 30px rgba(0,0,0,.6),inset 0 0 0 4px rgba(14,14,15,.6);pointer-events:none;opacity:0;transition:opacity .2s;overflow:hidden;background:#0E0E0F}',
    '.bge-lens canvas{width:100%;height:100%;display:block}',
    '.bge-mg-l{flex:1 1 260px;max-width:380px;display:flex;flex-direction:column;gap:16px}',
    /* 2 adimlar */
    '.bge-st{max-width:none;margin:44px 12px;padding:0;border:0}',
    '.bge-st-scroll{position:relative;height:320vh}',
    '.bge-st-sticky{position:sticky;top:0;height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden}',
    '.bge-st-in{width:min(1240px,100%);display:flex;flex-wrap:wrap;gap:24px 40px;align-items:center;padding:0 24px;border:1px dashed rgba(201,164,92,.45);border-radius:24px;padding:40px 28px;position:relative}',
    '.bge-st-l{flex:1 1 300px;max-width:420px;display:flex;flex-direction:column;gap:10px}',
    '.bge-step{display:flex;gap:14px;padding:14px 16px;border-radius:14px;border:1px solid transparent;opacity:.4;transition:opacity .3s,border-color .3s,background .3s}',
    '.bge-step.on{opacity:1;border-color:#3A3426;background:linear-gradient(120deg,#1B1912,#141317 70%)}',
    '.bge-step i{font:italic 900 26px/1 Archivo,sans-serif;color:' + G + ';font-style:italic;min-width:38px}',
    '.bge-step b{display:block;font:800 17px Manrope,sans-serif;color:#F2F0EB;margin-bottom:4px}.bge-step span{font-size:14px;line-height:1.55;color:#A9A59D}',
    '.bge-st-r{flex:2 1 420px;min-width:0;display:flex;flex-direction:column;align-items:center}',
    '.bge-st-r canvas{width:min(520px,100%);aspect-ratio:1/1;filter:drop-shadow(0 26px 26px rgba(0,0,0,.6))}',
    '.bge-bar{width:min(420px,80%);height:4px;border-radius:4px;background:#2A292E;overflow:hidden;margin-top:6px}.bge-bar i{display:block;height:100%;width:0;background:' + G + '}',
    '@media (max-width:760px){.bge-st-in{padding:30px 14px;gap:14px}.bge-st-l{order:2}.bge-st-r{order:1}.bge-step{padding:10px 12px}.bge-step span{display:none}.bge-step.on span{display:block}.bge-st-r canvas{width:min(330px,100%)}}'
  ].join('');

  function badge() { return ''; }
  function chips(list, cls) { return '<div class="bge-chips ' + (cls || '') + '">' + list.map(function (s) { return '<button type="button" data-p="' + s + '" aria-label="' + esc(NAME[s]) + '" aria-pressed="false"><img alt="" loading="lazy" src="' + IMG + 'site/desen/' + s + '.webp"></button>'; }).join('') + '</div>'; }
  function markChips(root, s) { [].forEach.call(root.querySelectorAll('.bge-chips button'), function (b) { var on = b.getAttribute('data-p') === s; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); }); }

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
    var pop = document.querySelector('.bg26-pop'); if (!pop) return false; if (document.querySelector('[data-bge5]')) return true;
    var box = document.createElement('div'); box.className = 'bge'; box.setAttribute('data-bge5', '1'); box.id = 'bge-5';
    box.innerHTML = badge(5, 'Sana uygun deseni bulalım') +
      '<div class="bge-hd"><div><h2>Kararsız mısın? 3 soruda bulalım.</h2><p class="bge-sub">Cevaplarına göre 39 desen arasından üçünü seçip <b class="bge-dn"></b> üzerinde gösteriyoruz.</p></div></div>' +
      QS.map(function (q, i) { return '<div class="bge-q" data-k="' + q[0] + '"><h3><i>0' + (i + 1) + '</i>' + q[1] + '</h3><div class="bge-opts">' + q[2].map(function (o) { return '<button type="button" data-v="' + o[0] + '" aria-pressed="false">' + o[1] + '</button>'; }).join('') + '</div></div>'; }).join('') +
      '<div class="bge-res" aria-live="polite"></div>';
    pop.parentNode.insertBefore(box, pop.nextSibling);
    var ans = {}, dev = stage().d;
    box.querySelector('.bge-dn').textContent = dev.b + ' ' + dev.m;
    function inT(cat, key, s) { return (' ' + TAG[cat][key] + ' ').indexOf(' ' + s + ' ') >= 0; }
    function run() {
      var res = box.querySelector('.bge-res');
      if (!ans.style || !ans.color || !ans.place) { res.innerHTML = ''; return; }
      var sc = P.map(function (p, i) { var s = p[0]; return [s, (inT('color', ans.color, s) ? 3 : 0) + (inT('style', ans.style, s) ? 2 : 0) + (inT('place', ans.place, s) ? 1 : 0) - (FEAT.indexOf(s) < 0 ? .1 : 0) - i * .001]; }).sort(function (a, b) { return b[1] - a[1]; });
      var pick = [], fams = {};
      sc.forEach(function (x) { if (pick.length < 3 && !fams[FAM(x[0])]) { pick.push(x[0]); fams[FAM(x[0])] = 1; } });
      sc.forEach(function (x) { if (pick.length < 3 && pick.indexOf(x[0]) < 0) pick.push(x[0]); });
      res.innerHTML = pick.map(function (s, i) {
        return '<div class="bge-rc"><span class="n">' + (i ? (i + 1) + '. ÖNERİ' : 'EN UYGUN') + '</span><canvas width="500" height="500" role="img" aria-label="' + esc(dev.b + ' ' + dev.m + ' ' + NAME[s]) + '"></canvas><em>' + esc(NAME[s]) + '</em><small>' + esc(dev.b + ' ' + dev.m) + ' üzerinde</small><div><a class="bge-btn g" href="/' + dev.s + '?desen=' + s + '">İncele</a><button type="button" class="bge-btn" data-try="' + s + '">Sahnede dene</button></div></div>';
      }).join('');
      var cv = res.querySelectorAll('canvas');
      pick.forEach(function (s, i) { comp(dev, s, 500).then(function (c) { var b = document.createElement('canvas'); b.width = b.height = 500; wipe(cv[i], b, c, 900 + i * 200, 1); }); });
    }
    box.addEventListener('click', function (e) {
      var t = e.target.closest('[data-try]'); if (t) { stagePick(t.getAttribute('data-try')); return; }
      var b = e.target.closest('.bge-opts button'); if (!b) return;
      var q = b.closest('.bge-q'); ans[q.getAttribute('data-k')] = b.getAttribute('data-v');
      [].forEach.call(q.querySelectorAll('button'), function (x) { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      run();
    });
    onStage(function (s) { if (s.d.f !== dev.f) { dev = s.d; box.querySelector('.bge-dn').textContent = dev.b + ' ' + dev.m; run(); } });
    return true;
  }

  /* ===== 7: cizik testi ===== */
  function S7() {
    var why = document.querySelector('[data-bg-why]'); if (!why) return false; if (document.querySelector('[data-bge7]')) return true;
    var box = document.createElement('div'); box.className = 'bge'; box.setAttribute('data-bge7', '1'); box.id = 'bge-7';
    box.innerHTML = badge(7, 'Çizik testi') +
      '<div class="bge-sc"><div class="bge-sc-l"><h2>Çiz bakalım.</h2><p class="bge-sub">Fareyle ya da parmağınla cihazın üzerine çizik at. Sonra kaplamayı sök ve altına bak.</p>' +
      '<div class="bge-msg" aria-live="polite"></div><div style="display:flex;flex-wrap:wrap;gap:10px"><button type="button" class="bge-btn g" data-a="sok">Kaplamayı sök</button><button type="button" class="bge-btn" data-a="yeni">Yeniden kapla</button></div></div>' +
      '<div class="bge-sc-r"><canvas width="900" height="900" role="img" aria-label="Çizik testi: kaplamalı cihaz"></canvas><span class="bge-hint">✎ Cihazın üzerine çiz</span><div class="bge-ped" aria-hidden="true"></div></div></div>';
    why.parentNode.insertBefore(box, why);
    var cv = box.querySelector('canvas'), x = cv.getContext('2d'), N = 900;
    var sc = document.createElement('canvas'); sc.width = sc.height = N; var sx = sc.getContext('2d');
    var st = { d: stage().d, p: 'carbon', c: null, b: null, m: null, off: false, n: 0 };
    /* cizilebilir alan: cihaz govdesi eksi lens yuvasi (metal bayonet halkasi + ici: sensor/ayna). Halka = en buyuk, kareye yakin, ici bos acik gri metal bilesen */
    function wmask(c, b) {
      try {
        var B = b.getContext('2d').getImageData(0, 0, N, N).data, n = N * N, met = new Uint8Array(n), i, k, x0, y0;
        for (i = 0; i < n; i++) { k = i * 4; if (B[k + 3] > 100) { var r = B[k], g = B[k + 1], bl = B[k + 2], mx = Math.max(r, g, bl), mn = Math.min(r, g, bl); if ((r + g + bl) / 3 > 70 && mx - mn < 45) met[i] = 1; } }
        var dm = new Uint8Array(n);
        for (y0 = 0; y0 < N; y0++) for (x0 = 0; x0 < N; x0++) { if (!met[y0 * N + x0]) continue; for (var dy = -2; dy <= 2; dy++) for (var dx = -2; dx <= 2; dx++) { var yy = y0 + dy, xx = x0 + dx; if (yy >= 0 && yy < N && xx >= 0 && xx < N) dm[yy * N + xx] = 1; } }
        var lab = new Int32Array(n), q = new Int32Array(n), L = 0, best = null, bs = 0;
        for (i = 0; i < n; i++) {
          if (!dm[i] || lab[i]) continue; L++; var h = 0, t = 0, mnx = N, mny = N, mxx = 0, mxy = 0, cnt = 0; q[t++] = i; lab[i] = L;
          while (h < t) { var p = q[h++], px = p % N, py = (p / N) | 0; cnt++; if (px < mnx) mnx = px; if (px > mxx) mxx = px; if (py < mny) mny = py; if (py > mxy) mxy = py;
            for (var ey = -1; ey <= 1; ey++) for (var ex = -1; ex <= 1; ex++) { var nx = px + ex, ny = py + ey; if (nx < 0 || ny < 0 || nx >= N || ny >= N) continue; var o = ny * N + nx; if (dm[o] && !lab[o]) { lab[o] = L; q[t++] = o; } } }
          var w = mxx - mnx + 1, hh = mxy - mny + 1;
          if (w > .15 * N && hh > .15 * N && w / hh > .8 && w / hh < 1.25 && w * hh > bs) {
            /* ici bos mu: kutu kenarindan komsu olmayan pikselleri doldur, ulasilamayanlar = delik */
            var bw = w + 2, bh = hh + 2, seen = new Uint8Array(bw * bh), qq = new Int32Array(bw * bh), a = 0, z = 0, ins = 0;
            var isC = function (xx, yy) { var X = xx + mnx - 1, Y = yy + mny - 1; return X >= 0 && Y >= 0 && X < N && Y < N && lab[Y * N + X] === L; };
            qq[z++] = 0; seen[0] = 1;
            while (a < z) { var pp = qq[a++], qx = pp % bw, qy = (pp / bw) | 0; [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(function (d) { var sx2 = qx + d[0], sy2 = qy + d[1]; if (sx2 < 0 || sy2 < 0 || sx2 >= bw || sy2 >= bh) return; var o2 = sy2 * bw + sx2; if (seen[o2] || isC(sx2, sy2)) return; seen[o2] = 1; qq[z++] = o2; }); }
            var fill = bw * bh - z; /* bilesen + delik */
            if (fill / (w * hh) > .6 && cnt / fill < .7) { bs = w * hh; best = { L: L, x: mnx - 1, y: mny - 1, bw: bw, bh: bh, seen: seen }; }
          }
        }
        var ex2 = new Uint8Array(n), area = 0, al = 0;
        if (best) for (var yy2 = 0; yy2 < best.bh; yy2++) for (var xx2 = 0; xx2 < best.bw; xx2++) { if (best.seen[yy2 * best.bw + xx2]) continue; var X2 = xx2 + best.x, Y2 = yy2 + best.y; if (X2 < 0 || Y2 < 0 || X2 >= N || Y2 >= N) continue; ex2[Y2 * N + X2] = 1; area++; }
        for (i = 0; i < n; i++) if (B[i * 4 + 3] > 100) al++;
        if (area > al * .35) area = 0; /* hatali tespit: cok buyuk */
        var mc = document.createElement('canvas'); mc.width = mc.height = N; var mxc = mc.getContext('2d'), im = mxc.createImageData(N, N), D = im.data;
        for (i = 0; i < n; i++) D[i * 4 + 3] = B[i * 4 + 3] > 100 ? 255 : 0;
        mxc.putImageData(im, 0, 0);
        if (area) {
          var ec = document.createElement('canvas'); ec.width = ec.height = N; var exc = ec.getContext('2d'), im2 = exc.createImageData(N, N), D2 = im2.data;
          for (i = 0; i < n; i++) if (ex2[i]) D2[i * 4 + 3] = 255;
          exc.putImageData(im2, 0, 0);
          mxc.globalCompositeOperation = 'destination-out'; for (var s2 = 0; s2 < 8; s2++) { var an = s2 * Math.PI / 4; mxc.drawImage(ec, Math.round(Math.cos(an) * 5), Math.round(Math.sin(an) * 5)); } mxc.drawImage(ec, 0, 0);
        }
        return mc;
      } catch (e) { return null; }
    }
    var tmp = document.createElement('canvas'); tmp.width = tmp.height = N; var tx = tmp.getContext('2d');
    function scr() { tx.globalCompositeOperation = 'source-over'; tx.clearRect(0, 0, N, N); tx.drawImage(sc, 0, 0); if (st.m) { tx.globalCompositeOperation = 'destination-in'; tx.drawImage(st.m, 0, 0); } return tmp; }
    function render() { if (!st.c) return; x.clearRect(0, 0, N, N); x.drawImage(st.c, 0, 0); x.save(); x.globalCompositeOperation = 'source-atop'; x.drawImage(scr(), 0, 0); x.restore(); }
    function load() { Promise.all([comp(st.d, st.p, N), bare(st.d, N)]).then(function (r) { st.c = r[0]; st.b = r[1]; st.m = wmask(r[0], r[1]); st.off = false; render(); }); }
    function flat() { var c = document.createElement('canvas'); c.width = c.height = N; var y = c.getContext('2d'); y.drawImage(st.c, 0, 0); y.globalCompositeOperation = 'source-atop'; y.drawImage(scr(), 0, 0); return c; }
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
    cv.addEventListener('pointerdown', function (e) { if (st.off || !st.c) return; drawing = true; lp = pt(e); try { cv.setPointerCapture(e.pointerId); } catch (z) {} box.querySelector('.bge-hint').style.opacity = '0'; });
    cv.addEventListener('pointermove', function (e) { if (!drawing) return; var p = pt(e); line(lp, p); lp = p; st.n++; render(); if (st.n === 40) msg('İyi gidiyorsun. Şimdi <b>Kaplamayı sök</b> düğmesine bas.'); });
    window.addEventListener('pointerup', function () { drawing = false; });
    function msg(h) { box.querySelector('.bge-msg').innerHTML = h; }
    box.addEventListener('click', function (e) {
      var a = e.target.closest('[data-a]'); if (!a || !st.c) return;
      if (a.getAttribute('data-a') === 'sok' && !st.off) {
        st.off = true; wipe(cv, flat(), st.b, 1400, -1, function () { msg(st.n ? '<b>Cihaz tertemiz.</b> Çiziklerin hepsi kaplamada kaldı.' : '<b>Cihaz tertemiz.</b> Önce birkaç çizik atıp tekrar dene.'); });
      } else if (a.getAttribute('data-a') === 'yeni') {
        sx.clearRect(0, 0, N, N); st.n = 0; var from = st.off ? st.b : flat(); st.off = true;
        wipe(cv, from, st.c, 1100, 1, function () { st.off = false; msg(''); box.querySelector('.bge-hint').style.opacity = '1'; });
      }
    });
    onStage(function (s) { if (s.d.f !== st.d.f) { st.d = s.d; sx.clearRect(0, 0, N, N); st.n = 0; msg(''); load(); } });
    load();
    return true;
  }

  /* ===== kurulum ===== */
  var DONE = {};
  function build() {
    if (!document.getElementById('bge-css')) { var s = document.createElement('style'); s.id = 'bge-css'; s.textContent = css; document.head.appendChild(s); }
    if (!devs().length) return;
    watchStage();
    [['5', S5], ['7', S7]].forEach(function (f) { if (!DONE[f[0]] || !document.querySelector('[data-bge' + f[0] + ']')) { try { DONE[f[0]] = f[1](); } catch (e) { if (window.console) console.warn('bge', f[0], e); } } });
  }
  var q = false; function sch() { if (q) return; q = true; setTimeout(function () { q = false; if (location.pathname === '/' || location.pathname === '') build(); }, 300); }
  sch(); new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true });
})();
