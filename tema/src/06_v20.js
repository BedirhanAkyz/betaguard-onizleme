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
