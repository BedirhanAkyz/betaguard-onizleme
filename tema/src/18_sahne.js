/* v34: ana sayfa sahnesi - tek cihaz (Sony A7R V) gercek 3D govde (6 cephe fotografindan, three.js), kaplama gecisi, desen secimi */
(function () {
  if (window.__bgSahne) return; window.__bgSahne = 1;
  if (window.__BG_SAHNE === false) return;
  var CDN = 'https://cdn.jsdelivr.net/gh/BedirhanAkyz/betaguard-onizleme@__SHA__/img/';
  var WA = 'https://wa.me/905353211911';
  var P = [
    ['royal-gold', 'Royal Gold', '201,164,92'], ['royal-navy', 'Royal Navy', '43,93,122'], ['royal-black', 'Royal Black', '120,130,140'],
    ['carbon', 'Carbon', '130,130,140'],
    ['tactical-black', 'Tactical Black', '110,110,118'], ['tactical-grey', 'Tactical Grey', '160,158,150'], ['tactical-green', 'Tactical Green', '90,165,72'], ['tactical-blue', 'Tactical Blue', '20,117,206'], ['tactical-red', 'Tactical Red', '198,20,28'],
    ['hexagonal-silver', 'Hexagonal Silver', '150,160,170'], ['hexagonal-blue', 'Hexagonal Blue', '20,90,190'], ['hexagonal-green', 'Hexagonal Green', '40,110,80'], ['hexagonal-red', 'Hexagonal Red', '192,40,58'],
    ['topografik-black', 'Topografik Black', '200,200,200'], ['topografik-white', 'Topografik White', '160,160,160'], ['topografik-navy', 'Topografik Navy', '40,90,170'], ['topografik-blue', 'Topografik Blue', '90,150,220'], ['topografik-green', 'Topografik Green', '120,170,130'], ['topografik-red', 'Topografik Red', '220,110,120'],
    ['line-black', 'Line Black', '150,150,150'], ['line-white', 'Line White', '200,205,210'], ['line-navy', 'Line Navy', '70,90,120'], ['line-blue', 'Line Blue', '0,96,202'], ['line-cyan', 'Line Cyan', '15,180,200'], ['line-red', 'Line Red', '208,26,44'],
    ['nexus-white', 'Nexus White', '200,200,200'], ['nexus-blue', 'Nexus Blue', '30,100,200'], ['nexus-cyan', 'Nexus Cyan', '31,181,201'], ['nexus-red', 'Nexus Red', '190,30,40'],
    ['mono-black', 'Mono Black', '90,90,100'], ['mono-white', 'Mono White', '232,230,224'], ['mono-red', 'Mono Red', '160,30,36'], ['mono-blue', 'Mono Blue', '3,71,152'], ['mono-green', 'Mono Green', '70,95,75'], ['mono-yellow', 'Mono Yellow', '226,182,0'], ['mono-orange', 'Mono Orange', '226,98,10'], ['mono-pink', 'Mono Pink', '231,119,175'], ['mono-brown', 'Mono Brown', '125,71,33'],
    ['lego', 'Lego', '233,152,4']
  ];
  var BYS = {}; P.forEach(function (p, i) { BYS[p[0]] = i; });
  var FEAT = ['royal-gold', 'carbon', 'topografik-navy', 'tactical-black', 'nexus-cyan', 'hexagonal-red', 'line-cyan', 'mono-white', 'royal-navy', 'tactical-green', 'line-red', 'mono-orange'];
  var LIMITED = { 'line-red': 1, 'nexus-red': 1 };
  var NOBARE = { 'kamera-sony-alpha-a6300': 1, 'kamera-canon-eos-50d': 1 };
  var TABS = [['K', 'Kamera', 'kamera-sony-alpha-a7r-v'], ['L', 'Lens', 'lens-sony-fe-24-70mm-f2-8-gm-ii'], ['D', 'Drone', 'drone-dji-mini-4-pro'], ['G', 'Gimbal', 'gimbal-dji-rs-4'], ['A', 'Aksiyon', 'aksiyon-kamera-dji-osmo-pocket-3']];
  var FALLBACK = { 'kamera-sony-alpha-a7r-v': { s: 'sony-alpha-a7r-v-kaplama', t: 'K', b: 'Sony', m: 'Alpha A7R V', f: 'kamera-sony-alpha-a7r-v' }, 'kamera-sony-alpha-a7-mark-iv': { s: 'sony-alpha-a7-iv-kaplama', t: 'K', b: 'Sony', m: 'Alpha A7 IV', f: 'kamera-sony-alpha-a7-mark-iv' }, 'lens-sony-fe-24-70mm-f2-8-gm-ii': { s: 'sony-fe-24-70mm-f2-8-gm-ii-lens-kaplama', t: 'L', b: 'Sony', m: 'FE 24-70mm f2.8 GM II', f: 'lens-sony-fe-24-70mm-f2-8-gm-ii' }, 'drone-dji-mini-4-pro': { s: 'dji-mini-4-pro-kaplama', t: 'D', b: 'DJI', m: 'Mini 4 Pro', f: 'drone-dji-mini-4-pro' } };
  var GHOST = { K: 'KAMERAN', L: 'LENSİN', D: 'DRONUN', G: 'GİMBALİN', A: 'KAMERAN' };
  var TYPEN = { K: 'Kamera', L: 'Lens', D: 'Drone', G: 'Gimbal', A: 'Aksiyon kamera' };
  var D3 = 'kamera-sony-alpha-a7r-v', A3 = 'https://cdn.jsdelivr.net/gh/BedirhanAkyz/betaguard-onizleme@9137e3dd/img/3d/a7rv/';
  var THREE_URL = 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.min.js';
  var RM = false; try { RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  function devs() { return window.__bgDevices || []; }
  function byDir(f) { var L = devs(); for (var i = 0; i < L.length; i++) if (L[i].f === f) return L[i]; return FALLBACK[f] || null; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function roman(s) { return s.replace(/\b(vi|v|iv|iii|ii)\b/g, function (r) { return { ii: '2', iii: '3', iv: '4', v: '5', vi: '6' }[r]; }); }
  function find(q) {
    q = roman(String(q || '').toLowerCase().replace(/\bmark\s*/g, '')).trim();
    var toks = q.split(/\s+/).filter(Boolean).map(function (t) { return t.replace(/[^a-z0-9.]/g, ''); }).filter(Boolean);
    if (!toks.length) return [];
    return devs().filter(function (d) { var k = d.key || (d.b + ' ' + d.m).toLowerCase(); return toks.every(function (t) { return k.indexOf(t) >= 0 || k.indexOf(t.replace(/\./g, '')) >= 0; }); }).slice(0, 7);
  }

  var G = '#C9A45C';
  var css = [
    '[data-bg-top] .bg-hero{display:none!important}',
    '.bgs{position:relative;width:min(1452px,calc(100% - 48px));margin:28px auto 0;border:1px solid #1E1E21;border-radius:28px;overflow:hidden;color:#F2F0EB;box-sizing:border-box;--g:201,164,92;--mx:50%;--my:55%;background:radial-gradient(42% 52% at var(--mx) var(--my),rgba(var(--g),.16),rgba(var(--g),.04) 55%,transparent 75%),radial-gradient(120% 90% at 50% 0%,#151517 0%,#0E0E0F 60%);transition:background-color .8s}',
    '.bgs *{box-sizing:border-box}',
    '.bgs-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}',
    '.bgs-gr{display:grid;grid-template-columns:minmax(300px,1fr) minmax(0,1.55fr) minmax(220px,.75fr);grid-template-areas:"l1 c r" "l2 c r" "ch ch ch";column-gap:28px;padding:44px 44px 30px}',
    '.bgs-l1{grid-area:l1;align-self:end;display:flex;flex-direction:column;gap:16px;position:relative;z-index:2}',
    '.bgs-l2{grid-area:l2;align-self:start;display:flex;flex-direction:column;gap:18px;margin-top:18px;position:relative;z-index:3}',
    '.bgs-tag{font:700 12px/1 Manrope,sans-serif;letter-spacing:.22em;color:' + G + '}',
    '.bgs h1{margin:0;font:italic 900 clamp(40px,4.2vw,66px)/.98 Archivo,sans-serif!important;letter-spacing:-.01em;color:#F2F0EB}',
    '.bgs-p{margin:0;font-size:16px;line-height:1.6;color:#B9B5AD;max-width:440px}',
    '.bgs-f{position:relative}',
    '.bgs-f label{display:block;font:700 13px Manrope,sans-serif;color:#F2F0EB;margin-bottom:8px}',
    '.bgs-f input{width:100%;background:#0E0E0F!important;border:1px solid #3A383F!important;border-radius:14px;padding:15px 16px 15px 44px;color:#F2F0EB!important;font:500 16px Manrope,sans-serif;outline:none;transition:border-color .2s}',
    '.bgs-f input:focus{border-color:' + G + '!important}',
    '.bgs-f svg.i{position:absolute;left:15px;bottom:16px;width:18px;height:18px;stroke:#8E8A83;fill:none;stroke-width:2;stroke-linecap:round;pointer-events:none}',
    '.bgs-sg{position:absolute;left:0;right:0;top:calc(100% + 6px);background:#141416;border:1px solid #3A383F;border-radius:14px;overflow:hidden;z-index:40;display:none;box-shadow:0 20px 40px rgba(0,0,0,.5)}',
    '.bgs-sg button{display:flex;width:100%;align-items:baseline;gap:8px;padding:12px 16px;border:0;background:transparent;color:#D9D5CD;font:500 15px Manrope,sans-serif;text-align:left;cursor:pointer}',
    '.bgs-sg button:hover,.bgs-sg button.on{background:#1E1E21;color:#fff}',
    '.bgs-sg b{color:#F2F0EB}.bgs-sg small{margin-left:auto;color:#8E8A83;font-size:12px}',
    '.bgs-msg{font-size:14px;color:#A3A09A;min-height:20px}.bgs-msg b{color:#7CD3A0}.bgs-msg a{color:#E2C285}',
    '.bgs-btns{display:flex;flex-wrap:wrap;gap:12px}',
    '.bgs-pill{display:inline-flex;align-items:center;min-height:48px;padding:0 24px;border-radius:999px;font:700 15px Manrope,sans-serif;text-decoration:none!important;transition:background .2s,color .2s,border-color .2s}',
    '.bgs-pill.g{background:' + G + ';color:#0E0E0F!important}.bgs-pill.g:hover{background:#E2C285}',
    '.bgs-pill.o{border:1px solid #4A4850;color:#F2F0EB!important}.bgs-pill.o:hover{border-color:' + G + '}',
    '.bgs-c{grid-area:c;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;min-width:0}',
    '.bgs-gh{position:absolute;left:50%;top:44%;transform:translate(-50%,-50%);font:italic 900 clamp(84px,10.5vw,190px)/.9 Archivo,sans-serif;letter-spacing:-.02em;white-space:nowrap;color:transparent;-webkit-text-stroke:1.5px rgba(226,194,133,.2);pointer-events:none;user-select:none;transition:opacity .4s}',
    '.bgs-st{position:relative;z-index:2;width:min(560px,100%);aspect-ratio:1/1;touch-action:pan-y;user-select:none;-webkit-user-select:none}',
    '.bgs-fl{position:absolute;inset:0;animation:bgsF 6s ease-in-out infinite}',
    '@keyframes bgsF{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}',
    '.bgs-dv{position:absolute;inset:0;transition:transform .35s ease,opacity .18s ease;will-change:transform;filter:drop-shadow(0 34px 34px rgba(0,0,0,.65))}',
    '.bgs-cv{position:absolute;inset:0;width:100%!important;height:100%!important;display:block}',
    '.bgs-bare{position:absolute;inset:0;width:100%!important;height:100%!important;max-width:none!important;object-fit:contain;display:block;border-radius:0!important;pointer-events:none}',
    '.bgs-bare{clip-path:inset(0 50% 0 0);opacity:0;transition:opacity .3s}',
    '.bgs.cmp .bgs-bare{opacity:1}',
    '.bgs-hd{position:absolute;top:10%;bottom:10%;left:50%;width:2px;margin-left:-1px;background:' + G + ';box-shadow:0 0 12px rgba(201,164,92,.7);opacity:0;pointer-events:none;transition:opacity .3s;z-index:3}',
    '.bgs-hd i{position:absolute;top:50%;left:50%;width:44px;height:44px;margin:-22px 0 0 -22px;border-radius:50%;background:#0E0E0F;border:2px solid ' + G + ';display:flex;align-items:center;justify-content:center;color:#E2C285;font:700 16px/1 Manrope,sans-serif;font-style:normal;cursor:ew-resize;pointer-events:auto}',
    '.bgs.cmp .bgs-hd{opacity:1}',
    '.bgs-lb{position:absolute;top:6%;font:800 11px/1 Manrope,sans-serif;letter-spacing:.18em;color:#A3A09A;opacity:0;transition:opacity .3s}.bgs-lb.l{left:4%}.bgs-lb.r{right:4%;color:#E2C285}.bgs.cmp .bgs-lb{opacity:1}',
    '.bgs-pd{position:relative;z-index:1;width:min(460px,86%);height:64px;margin-top:-110px;transition:margin-top .35s ease}',
    '.bgs-pd:before{content:"";position:absolute;left:0;right:0;top:0;height:58px;border-radius:50%;background:radial-gradient(ellipse at 50% 30%,#2A292E 0%,#161618 55%,#0E0E0F 82%);border-top:1px solid rgba(226,194,133,.55);box-shadow:0 -4px 34px rgba(var(--g),.35),inset 0 10px 24px rgba(226,194,133,.07)}',
    '.bgs-pd:after{content:"";position:absolute;left:8%;right:8%;top:50px;height:16px;border-radius:50%;background:radial-gradient(closest-side,rgba(var(--g),.45),transparent)}',
    '.bgs-cmpb{position:relative;z-index:3;margin-top:6px;display:inline-flex;align-items:center;gap:8px;min-height:40px;padding:0 16px;border-radius:999px;border:1px solid #3A383F;background:rgba(20,20,22,.8);color:#F2F0EB;font:700 13px Manrope,sans-serif;cursor:pointer;transition:border-color .2s,background .2s}',
    '.bgs-cmpb:hover{border-color:' + G + '}.bgs.cmp .bgs-cmpb{background:' + G + ';color:#0E0E0F;border-color:' + G + '}',
    '.bgs-r{grid-area:r;align-self:center;display:flex;flex-direction:column;gap:18px;position:relative;z-index:2}',
    '.bgs-tb{display:flex;flex-wrap:wrap;gap:6px}',
    '.bgs-tb button{min-height:38px;padding:0 14px;border-radius:999px;border:1px solid #3A383F;background:transparent;color:#F2F0EB;font:700 13px Manrope,sans-serif;cursor:pointer;transition:background .2s,color .2s,border-color .2s}',
    '.bgs-tb button.on{background:' + G + ';border-color:' + G + ';color:#0E0E0F}',
    '.bgs-k{display:flex;flex-direction:column;gap:6px}',
    '.bgs-k span{font:700 11px/1 Manrope,sans-serif;letter-spacing:.2em;color:#8E8A83}',
    '.bgs-k strong{font:700 18px/1.25 Manrope,sans-serif;color:#F2F0EB}',
    '.bgs-k em{font:italic 900 30px/1.05 Archivo,sans-serif;color:#E2C285}',
    '.bgs-k small{font-size:13px;color:#A3A09A}',
    '.bgs-lim{display:inline-block;margin-left:8px;vertical-align:middle;padding:3px 7px;border-radius:5px;border:1px solid ' + G + ';font:800 10px/1 Manrope,sans-serif;letter-spacing:.12em;color:#E2C285;font-style:normal}',
    '.bgs-go{font:700 15px Manrope,sans-serif;color:#E2C285!important;text-decoration:none!important}.bgs-go:hover{color:#F2F0EB!important}',
    '.bgs-ch{grid-area:ch;display:flex;align-items:center;justify-content:center;gap:12px;margin-top:22px;position:relative;z-index:2}',
    '.bgs-cl{display:flex;flex-wrap:wrap;justify-content:center;gap:9px;max-width:980px}',
    '.bgs-cl button{width:44px;height:44px;padding:3px;border-radius:50%;border:2px solid #3A383F;background:#0E0E0F;cursor:pointer;transition:transform .2s,border-color .2s}',
    '.bgs-cl button:hover{transform:translateY(-3px)}.bgs-cl button.on{border-color:#E2C285}',
    '.bgs-cl button img{width:100%!important;height:100%!important;border-radius:50%!important;object-fit:cover;display:block}',
    '.bgs-cl button.x{display:none}.bgs.all .bgs-cl button.x{display:block}',
    '.bgs-ar{flex:0 0 auto;width:46px;height:46px;border-radius:50%;border:1px solid #3A383F;background:#141416;color:#F2F0EB;font:700 18px/1 Manrope,sans-serif;cursor:pointer}',
    '.bgs-ar:hover{border-color:' + G + '}',
    '.bgs-more{width:auto!important;padding:0 14px!important;border-radius:999px!important;font:700 12px Manrope,sans-serif;color:#E2C285;white-space:nowrap}',
    '@media (max-width:1100px){.bgs-gr{grid-template-columns:minmax(0,1fr) minmax(0,1.3fr);grid-template-areas:"l1 c" "l2 c" "r r" "ch ch"}.bgs-r{flex-direction:row;flex-wrap:wrap;align-items:flex-end;margin-top:18px}}',
    '@media (max-width:760px){.bgs{width:calc(100% - 24px);margin-top:14px;border-radius:20px}.bgs-gr{display:flex;flex-direction:column;padding:26px 16px 22px}.bgs-l1{order:1}.bgs-c{order:2;margin-top:6px}.bgs-ch{order:3;margin-top:10px}.bgs-r{order:4;flex-direction:column;align-items:stretch;gap:12px;margin-top:16px;min-width:0;width:100%}.bgs-ch,.bgs-c,.bgs-l1,.bgs-l2{min-width:0;width:100%}.bgs-tb{flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none}.bgs-tb::-webkit-scrollbar{display:none}.bgs-tb button{flex:0 0 auto}.bgs-l2{order:5;margin-top:22px}.bgs h1{font-size:40px!important}.bgs-gh{font-size:76px}.bgs-ar{display:none}.bgs-cl{flex-wrap:nowrap;overflow-x:auto;justify-content:flex-start;padding:4px 2px 8px;max-width:100%;scrollbar-width:none}.bgs-cl::-webkit-scrollbar{display:none}.bgs-cl button{flex:0 0 auto}.bgs.all .bgs-cl{flex-wrap:wrap;justify-content:center}.bgs-k em{font-size:26px}}',
    '.bgs-3d{position:absolute;inset:0;width:100%!important;height:100%!important;display:block;cursor:grab;touch-action:pan-y}',
    '.bgs.drg .bgs-3d{cursor:grabbing}',
    '.bgs.is3d .bgs-cv{visibility:hidden}',
    '.bgs.is3d .bgs-dv{transform:none!important;filter:drop-shadow(0 30px 30px rgba(0,0,0,.6))}',
    '.bgs-3dh{display:none;font:700 11px/1 Manrope,sans-serif;letter-spacing:.14em;color:#8E8A83}.bgs.is3d .bgs-3dh{display:block}',
    '@media (prefers-reduced-motion:reduce){.bgs-fl{animation:none}}'
  ].join('');

  function chipsHTML() {
    var feat = {}; FEAT.forEach(function (s) { feat[s] = 1; });
    var order = FEAT.concat(P.map(function (p) { return p[0]; }).filter(function (s) { return !feat[s]; }));
    return order.map(function (s) {
      var p = P[BYS[s]];
      return '<button type="button" data-p="' + s + '" class="' + (feat[s] ? '' : 'x') + '" aria-label="' + esc(p[1]) + (LIMITED[s] ? ' (limited)' : '') + ' desenini göster" aria-pressed="false"><img alt="" loading="lazy" decoding="async" width="40" height="40" src="' + CDN + 'site/desen/' + s + '.webp"></button>';
    }).join('') + '<button type="button" class="bgs-more" aria-expanded="false">+27 desen</button>';
  }

  function html() {
    return '<div class="bgs-gr">' +
      '<div class="bgs-l1"><span class="bgs-tag">CİHAZA ÖZEL KESİM KAPLAMA</span>' +
        '<h1><span class="bgs-sr">Kamera, lens ve drone kaplama: </span>Ekipmanını koru.<br>Tarzını yansıt.</h1></div>' +
      '<div class="bgs-l2"><p class="bgs-p">Kamera, lens, drone ve gimbal kaplamaları. Her siparişi cihazının ölçüsüne göre basıp kesiyoruz. Kolay uygulanır, söktüğünde iz bırakmaz.</p>' +
        '<div class="bgs-btns"><a class="bgs-pill g" href="/betaguard-kaplama">Serileri keşfet</a><a class="bgs-pill o" href="#bg-find">Kategoriler</a></div></div>' +
      '<div class="bgs-c"><div class="bgs-gh" aria-hidden="true">KAMERAN</div>' +
        '<div class="bgs-st"><div class="bgs-fl"><div class="bgs-dv">' +
          '<canvas class="bgs-cv" width="1000" height="1000" role="img" aria-label="Kaplamalı cihaz"></canvas>' +
        '</div></div></div>' +
        '<div class="bgs-pd" aria-hidden="true"></div>' +
        '</div>' +
      '<div class="bgs-r"><span class="bgs-3dh" aria-hidden="true">↔ Çevirmek için sürükle</span>' +
        '<div class="bgs-k"><span>CİHAZ</span><strong class="bgs-dn"></strong></div>' +
        '<div class="bgs-k"><span>DESEN</span><em class="bgs-pn"></em><small class="bgs-ps"></small></div>' +
        '<a class="bgs-go" href="/betaguard-kaplama">Bu kombinasyonu incele →</a></div>' +
      '<div class="bgs-ch"><button type="button" class="bgs-ar" data-d="-1" aria-label="Önceki desen">‹</button><div class="bgs-cl">' + chipsHTML() + '</div><button type="button" class="bgs-ar" data-d="1" aria-label="Sonraki desen">›</button></div>' +
    '</div>';
  }

  function init(root) {
    var q = function (s) { return root.querySelector(s); };
    var CV = q('.bgs-cv'), CX = CV.getContext('2d'), N = CV.width, DV = q('.bgs-dv'), ST = q('.bgs-st');
    var st = { dev: null, p: 'royal-gold', busy: false, pend: null, hold: false, cmp: false, cx: 50, vis: true, cur: null };

    function url(d, s) { return CDN + d.f + '/' + s + '.webp'; }
    var IMC = {};
    function limg(u) {
      if (IMC[u]) return IMC[u];
      return (IMC[u] = new Promise(function (res) { var im = new Image(); im.crossOrigin = 'anonymous'; im.decoding = 'async'; im.onload = function () { res(im); }; im.onerror = function () { delete IMC[u]; res(null); }; im.src = u; }));
    }
    function prep(d, s) {
      return Promise.all([limg(url(d, s)), limg(CDN + d.f + '/bare.webp')]).then(function (r) {
        var c = document.createElement('canvas'); c.width = c.height = N; var x = c.getContext('2d');
        if (r[0]) x.drawImage(r[0], 0, 0, N, N);
        if (r[1]) { x.globalCompositeOperation = 'destination-in'; x.drawImage(r[1], 0, 0, N, N); }
        return r[0] ? c : null;
      });
    }
    function paint(c) { CX.clearRect(0, 0, N, N); if (c) CX.drawImage(c, 0, 0); st.dirty = true; }
    function ease(k) { return k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2; }
    function info() {
      var d = st.dev, p = P[BYS[st.p]];
      q('.bgs-dn').textContent = d.b + ' ' + d.m;
      q('.bgs-pn').innerHTML = esc(p[1]) + (LIMITED[st.p] ? '<i class="bgs-lim">LİMİTED</i>' : '');
      q('.bgs-ps').textContent = (BYS[st.p] + 1) + ' / 39 desen';
      q('.bgs-go').setAttribute('href', '/' + d.s + '?desen=' + st.p);
      root.style.setProperty('--g', p[2]);
      [].forEach.call(root.querySelectorAll('.bgs-cl button[data-p]'), function (b) { var on = b.getAttribute('data-p') === st.p; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on ? 'true' : 'false'); });
      q('.bgs-gh').textContent = GHOST[d.t] || 'KAMERAN';
      CV.setAttribute('aria-label', d.b + ' ' + d.m + ' ' + p[1] + ' kaplama');
    }
    function preNext() { var i = FEAT.indexOf(st.p), n = FEAT[(i + 1) % FEAT.length]; if (st.dev) limg(url(st.dev, n)); }
    function done() { preNext(); if (st.pend) { var n = st.pend; st.pend = null; setPat(n); } }
    function setPat(s) {
      if (!st.dev || s === st.p && !st.busy) return;
      if (st.busy) { st.pend = s; return; }
      st.busy = true; var dev = st.dev;
      prep(dev, s).then(function (nc) {
        if (dev !== st.dev) { st.busy = false; return; }
        if (!nc) { st.busy = false; return done(); }
        st.p = s; info();
        var oc = st.cur; st.cur = nc;
        if (RM || !oc) { paint(nc); st.busy = false; return done(); }
        var t0 = 0, D = 1300, W = N * 0.09;
        function fr(now) {
          if (dev !== st.dev) return;
          if (!t0) t0 = now;
          var k = Math.min(1, (now - t0) / D), x = ease(k) * (N + 2 * W) - W;
          CX.clearRect(0, 0, N, N); CX.drawImage(oc, 0, 0);
          CX.save(); CX.beginPath(); CX.rect(0, 0, Math.max(0, x), N); CX.clip(); CX.drawImage(nc, 0, 0); CX.restore();
          if (k < 1) {
            CX.save(); CX.globalCompositeOperation = 'source-atop';
            var g = CX.createLinearGradient(x - W, 0, x + W, 0);
            g.addColorStop(0, 'rgba(255,233,180,0)'); g.addColorStop(.5, 'rgba(255,238,196,.9)'); g.addColorStop(1, 'rgba(255,233,180,0)');
            CX.fillStyle = g; CX.fillRect(x - W, 0, 2 * W, N); CX.restore(); st.dirty = true;
            requestAnimationFrame(fr);
          } else { paint(nc); st.busy = false; done(); }
        }
        requestAnimationFrame(fr);
      });
    }
    function setDev(d) {
      if (!d) return;
      var same = st.dev && st.dev.f === d.f; st.dev = d;
      if (same) { info(); return; }
      var mk = CDN + d.f + '/bare.webp';
      DV.style.opacity = '0';
      st.pend = null;
      prep(d, st.p).then(function (c) {
        if (d !== st.dev) return;
        st.cur = c; st.busy = false;
        setTimeout(function () {
          paint(c); info(); bottom(mk); init3D();
          DV.style.opacity = '1'; preNext();
        }, 180);
      });
    }
    var PD = q('.bgs-pd'); st.bot = .8;
    function placePd() { var h = ST.offsetHeight || 0; PD.style.marginTop = Math.round(-(h * (1 - st.bot)) + 4) + 'px'; }
    function bottom(mk) {
      limg(mk).then(function (im) {
        try {
          var c = document.createElement('canvas'); c.width = c.height = 100; var x = c.getContext('2d'); x.drawImage(im, 0, 0, 100, 100);
          var a = x.getImageData(0, 0, 100, 100).data, b = 80;
          for (var y = 99; y >= 0; y--) { var hit = false; for (var k = 0; k < 100; k++) if (a[(y * 100 + k) * 4 + 3] > 60) { hit = true; break; } if (hit) { b = y + 1; break; } }
          st.bot = b / 100;
        } catch (e) { st.bot = .8; }
        placePd();
      });
    }
    window.addEventListener('resize', placePd);
    function stop() { st.hold = true; }
    function step(n) { var i = BYS[st.p]; setPat(P[(i + n + P.length) % P.length][0]); }
    function stepFeat(n) { var i = FEAT.indexOf(st.p); if (i < 0) return step(n); setPat(FEAT[(i + n + FEAT.length) % FEAT.length]); }

    /* isik fareyi izler; egim: 3D yoksa CSS, 3D varsa model doner */
    var R3 = null;
    if (!RM) {
      root.addEventListener('pointermove', function (e) {
        if (e.pointerType === 'touch') return;
        var r = root.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        root.style.setProperty('--mx', (x * 100).toFixed(1) + '%'); root.style.setProperty('--my', (y * 100).toFixed(1) + '%');
        var s = ST.getBoundingClientRect(), sx = (e.clientX - s.left) / s.width - .5, sy = (e.clientY - s.top) / s.height - .5;
        sx = Math.max(-1, Math.min(1, sx)); sy = Math.max(-1, Math.min(1, sy));
        if (R3) { R3.hover(sx, sy); return; }
        DV.style.transform = 'perspective(1100px) rotateY(' + (sx * 14).toFixed(2) + 'deg) rotateX(' + (-sy * 10).toFixed(2) + 'deg)';
      });
      root.addEventListener('pointerleave', function () { if (R3) R3.hover(null); DV.style.transform = ''; root.style.setProperty('--mx', '50%'); root.style.setProperty('--my', '55%'); });
    }
    /* 3D: Sony A7R V - 6 cephe fotografindan gorsel kabuk govde + doku atlasi. On yuz = CV (gecis dahil), diger yuzler = maske x desen */
    function init3D() {
      if (R3 || init3D.t || !window.WebGLRenderingContext || st.dev.f !== D3) return; init3D.t = 1;
      var imp; try { imp = new Function('u', 'return import(u)'); } catch (e) { return; }
      Promise.all([imp(THREE_URL), fetch(A3 + 'a7rv.json').then(function (r) { return r.json(); }), limg(A3 + 'atlas_base.webp'), limg(A3 + 'atlas_mask.webp')]).then(function (R) {
        var T = R[0], J = R[1], BA = R[2], MA = R[3]; if (!BA || !MA) return;
        function dec(b, Ty) { var s = atob(b), u = new Uint8Array(s.length); for (var i = 0; i < s.length; i++) u[i] = s.charCodeAt(i); return new Ty(u.buffer); }
        var p = dec(J.pos, Int16Array), uv = dec(J.uv, Uint16Array), nr = dec(J.nor, Int8Array), ix = dec(J.idx, J.i32 ? Uint32Array : Uint16Array);
        var C = J.cells, F = C.front.c, dm = J.dim, XM = dm[0], ZH = dm[2], RS = 1000; /* render px */
        var w = 0, h = 0; /* front render bbox (pad 6) */
        var u0 = F[0] + 6, v0 = F[1] + 6, u1 = F[2] - 6, v1 = F[3] - 6, ku = (u1 - u0) / (2 * XM), kv = (v1 - v0) / ZH;
        var n = p.length / 3, P = new Float32Array(n * 3), NN = new Float32Array(n * 3), U = new Float32Array(n * 2);
        for (var i = 0; i < n; i++) {
          var X = p[i * 3] / 50, Y = p[i * 3 + 1] / 50, Z = p[i * 3 + 2] / 50;
          P[i * 3] = (u0 + (XM - X) * ku - 500) / 500; P[i * 3 + 1] = (500 - (v1 - Z * kv)) / 500; P[i * 3 + 2] = Y * kv / 500;
          var a = -nr[i * 3], b = nr[i * 3 + 2], c = nr[i * 3 + 1], l = Math.sqrt(a * a + b * b + c * c) || 1; NN[i * 3] = a / l; NN[i * 3 + 1] = b / l; NN[i * 3 + 2] = c / l;
          U[i * 2] = uv[i * 2] / 65535; U[i * 2 + 1] = uv[i * 2 + 1] / 65535;
        }
        var geo = new T.BufferGeometry(); geo.setAttribute('position', new T.BufferAttribute(P, 3)); geo.setAttribute('normal', new T.BufferAttribute(NN, 3)); geo.setAttribute('uv', new T.BufferAttribute(U, 2)); geo.setIndex(new T.BufferAttribute(ix, 1));
        /* atlas tuvali */
        var AW = BA.naturalWidth || 2048, AS = AW / 2048, AT = document.createElement('canvas'); AT.width = AT.height = AW; var AX = AT.getContext('2d');
        var OV = {}, ovOld = null, ovNew = null, fade = 1;
        function overlay(s) {
          if (OV[s]) return Promise.resolve(OV[s]);
          return limg(url(st.dev, s)).then(function (im) {
            if (!im) return null;
            var t = J.tile, tw = t[2] - t[0], th = t[3] - t[1], tl = document.createElement('canvas'); tl.width = tw * 2; tl.height = th * 2; var tx = tl.getContext('2d'), sc = (im.naturalWidth || RS) / RS;
            [[1, 1, 0, 0], [-1, 1, 2 * tw, 0], [1, -1, 0, 2 * th], [-1, -1, 2 * tw, 2 * th]].forEach(function (m) { tx.setTransform(m[0], 0, 0, m[1], m[2], m[3]); tx.drawImage(im, t[0] * sc, t[1] * sc, tw * sc, th * sc, 0, 0, tw, th); });
            var o = document.createElement('canvas'); o.width = o.height = AW; var ox = o.getContext('2d'), pat = ox.createPattern(tl, 'repeat');
            Object.keys(C).forEach(function (k) { if (k === 'front') return; var c = C[k], m = new DOMMatrix([c.pk * AS, 0, 0, c.pk * AS, c.o[0] * AS, c.o[1] * AS]); pat.setTransform(m); ox.fillStyle = pat; ox.fillRect(c.o[0] * AS, c.o[1] * AS, 1024 * AS, 682 * AS); });
            ox.globalCompositeOperation = 'multiply'; ox.drawImage(MA, 0, 0, AW, AW);
            ox.globalCompositeOperation = 'destination-in'; ox.drawImage(MA, 0, 0, AW, AW);
            return (OV[s] = o);
          });
        }
        function compose() {
          AX.globalAlpha = 1; AX.drawImage(BA, 0, 0, AW, AW);
          var c = C.front, k = N / RS; AX.drawImage(CV, c.c[0] * k, c.c[1] * k, (c.c[2] - c.c[0]) * k, (c.c[3] - c.c[1]) * k, c.o[0] * AS, c.o[1] * AS, (c.c[2] - c.c[0]) * c.s * AS, (c.c[3] - c.c[1]) * c.s * AS);
          if (ovOld && fade < 1) { AX.globalAlpha = 1 - fade; AX.drawImage(ovOld, 0, 0); }
          if (ovNew) { AX.globalAlpha = fade; AX.drawImage(ovNew, 0, 0); }
          AX.globalAlpha = 1;
        }
        var cp = st.p, fT = 0;
        function want(s) { overlay(s).then(function (o) { if (s !== st.p || !o) return; ovOld = ovNew; ovNew = o; fade = ovOld ? 0 : 1; fT = performance.now(); st.dirty = true; }); }
        want(st.p);
        var tex = new T.CanvasTexture(AT); tex.colorSpace = T.SRGBColorSpace; tex.anisotropy = 8; tex.flipY = true;
        var mat = new T.MeshStandardMaterial({ map: tex, roughness: .58, metalness: .08 });
        var mesh = new T.Mesh(geo, mat);
        var scene = new T.Scene(), cam = new T.PerspectiveCamera(30, 1, .1, 50); cam.position.set(0, 0, 1 / Math.tan(15 * Math.PI / 180) + .5);
        scene.add(new T.HemisphereLight(0xffffff, 0x2a2622, 1.5));
        var key = new T.DirectionalLight(0xffffff, 1.5); key.position.set(-1.2, 1.4, 3); scene.add(key);
        var rim = new T.DirectionalLight(0xE2C285, 1.4); rim.position.set(2.5, .8, -2); scene.add(rim);
        var rim2 = new T.DirectionalLight(0xffffff, .5); rim2.position.set(-2.5, -.5, -1.5); scene.add(rim2);
        scene.add(mesh);
        var ren = new T.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
        ren.outputColorSpace = T.SRGBColorSpace; ren.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        var gl = ren.domElement; gl.className = 'bgs-3d'; gl.setAttribute('role', 'img'); gl.setAttribute('aria-label', CV.getAttribute('aria-label') || 'Kaplamalı cihaz 3D');
        compose(); DV.appendChild(gl); root.classList.add('is3d');
        function size() { var w = ST.clientWidth || 500; ren.setSize(w, w, false); }
        size(); window.addEventListener('resize', size);
        var ry = 0, rx = .06, tY = null, tX = null, drag = null, last = performance.now(), t = 0;
        R3 = { hover: function (sx, sy) { if (drag) return; if (sx === null) { tY = tX = null; return; } tY = sx * .9; tX = sy * .3 + .05; } };
        gl.addEventListener('pointerdown', function (e) { stop(); drag = { x: e.clientX, y: e.clientY, ry: ry, rx: rx }; try { gl.setPointerCapture(e.pointerId); } catch (z) {} root.classList.add('drg'); });
        gl.addEventListener('pointermove', function (e) { if (!drag) return; ry = drag.ry + (e.clientX - drag.x) * .009; rx = Math.max(-.6, Math.min(.75, drag.rx + (e.clientY - drag.y) * .005)); tY = ry; tX = rx; });
        function up() { if (!drag) return; drag = null; root.classList.remove('drg'); setTimeout(function () { if (!drag) { tY = tX = null; ry = Math.atan2(Math.sin(ry), Math.cos(ry)); } }, 2600); }
        gl.addEventListener('pointerup', up); gl.addEventListener('pointercancel', up);
        function loop(now) {
          if (!document.documentElement.contains(root)) return;
          requestAnimationFrame(loop);
          var dt = Math.min(.05, (now - last) / 1000); last = now;
          if (document.hidden || !st.vis) return;
          t += dt;
          if (st.p !== cp) { cp = st.p; want(cp); }
          if (fade < 1) { fade = Math.min(1, (now - fT) / 900); st.dirty = true; }
          var gy = tY !== null ? tY : (RM ? 0 : Math.sin(t * .4) * .55), gx = tX !== null ? tX : .08 + Math.sin(t * .29) * .07;
          if (!drag) { ry += (gy - ry) * Math.min(1, dt * 3); rx += (gx - rx) * Math.min(1, dt * 3); }
          mesh.rotation.set(rx, ry, 0);
          if (st.dirty) { compose(); tex.needsUpdate = true; st.dirty = false; gl.setAttribute('aria-label', CV.getAttribute('aria-label') || ''); }
          ren.render(scene, cam);
        }
        requestAnimationFrame(loop);
      }).catch(function (e) { if (window.console) console.warn('bgs 3d', e); });
    }
    /* mobilde kaydir */
    var tx = null, ty = null;
    ST.addEventListener('touchstart', function (e) { if (R3) { tx = null; return; } tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
    ST.addEventListener('touchend', function (e) { if (tx === null) return; var dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty; if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) { stop(); stepFeat(dx < 0 ? 1 : -1); } tx = null; });

    /* desen cipleri, oklar, kategoriler */
    q('.bgs-cl').addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return; stop();
      if (b.classList.contains('bgs-more')) { var on = !root.classList.contains('all'); root.classList.toggle('all', on); b.textContent = on ? 'Daha az' : '+27 desen'; b.setAttribute('aria-expanded', on ? 'true' : 'false'); return; }
      setPat(b.getAttribute('data-p'));
    });
    [].forEach.call(root.querySelectorAll('.bgs-ar'), function (b) { b.addEventListener('click', function () { stop(); step(+b.getAttribute('data-d')); }); });

    /* otomatik gecis */
    try { new IntersectionObserver(function (es) { st.vis = es[0].isIntersecting; }).observe(root); } catch (e) {}
    var timer = setInterval(function () {
      if (!document.documentElement.contains(root)) { clearInterval(timer); return; }
      if (st.hold || RM || document.hidden || !st.vis || st.busy) return;
      stepFeat(1);
    }, 4200);

    setDev(byDir(TABS[0][2]));
  }

  function build() {
    if (location.pathname !== '/' && location.pathname !== '') return;
    var top = document.querySelector('[data-bg-top]'); if (!top || top.querySelector('[data-bgs]')) return;
    var hero = top.querySelector('.bg-hero'); if (!hero) return;
    if (!document.getElementById('bgs-css')) { var s = document.createElement('style'); s.id = 'bgs-css'; s.textContent = css; document.head.appendChild(s); }
    var sec = document.createElement('section'); sec.className = 'bgs'; sec.setAttribute('data-bgs', '1'); sec.setAttribute('aria-label', 'Desen önizleme sahnesi'); sec.innerHTML = html();
    hero.parentNode.insertBefore(sec, hero);
    var oh = hero.querySelector('h1'); if (oh) { var dv = document.createElement('div'); dv.innerHTML = oh.innerHTML; oh.parentNode.replaceChild(dv, oh); }
    var r = hero.querySelector('.bg-hero-r'); if (r) r.remove();
    init(sec);
  }
  build();
  new MutationObserver(build).observe(document.documentElement, { childList: true, subtree: true });
})();
