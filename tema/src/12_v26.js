/* v26: cihaz bazli ilanlar - cihaz sayfasi, Setini tamamla, cihaz secici, kategori marka cipleri, populer cihazlar, eski urun yonlendirme */
(function(){
  if (window.__bgV26) return; window.__bgV26 = 1;
  var D = __DEVICES__;
  var CDN = 'https://cdn.jsdelivr.net/gh/BedirhanAkyz/betaguard-onizleme@__SHA__/img/';
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
    '@media (max-width:640px){.bg27-g{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.bg27-h h1{font-size:26px!important}.bg27-in{min-width:0;width:100%}.bg27-tools{width:100%}}',
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
    var sub = '✓ ' + dev.b + ' ' + dev.m + ' için birebir kesim · 39 desen' + (dev.t === 'D' ? ' · kumanda kaplaması dahil' : '') + ' · 1-2 iş gününde kargoda';
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
    var base = ALL.filter(function(d){ return d.t === ci.k && inBrand(d, bn); });
    if (!base.length) return;
    document.documentElement.classList.add('bg27-on'); grid.classList.add('bg27-ikas');
    var st = { q: '', sort: 'pop', n: LIMIT, brand: bn };
    var TOPSET = {}; base.slice().sort(SORTS.pop[1]).slice(0, Math.min(12, Math.ceil(base.length / 6))).forEach(function(d){ TOPSET[d.s] = 1; });
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
        if (e.children.length || e.offsetHeight <= 0 || e.textContent.trim() !== pn || e.getBoundingClientRect().top >= bt || e.closest('header,nav,.bg27,.bg26-bar')) return;
        var r = e; for (var i = 0; i < 3 && r.parentElement; i++) { var pt = r.parentElement.textContent.trim().replace(/\s+/g, ' '); if (new RegExp('^' + pn.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*\\(\\s*\\d+ ürün\\s*\\)$').test(pt)) r = r.parentElement; else break; }
        r.classList.add('bg27-ikas');
      });
      var tb = [].filter.call(document.querySelectorAll('div'), function(e){ return e.offsetHeight > 0 && e.offsetHeight < 80 && /Öne Çıkanlar/.test(e.textContent) && /Sütun/.test(e.textContent) && !e.contains(bar) && !e.closest('.bg27'); });
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
      var cv = COVERS[(i + ALL.indexOf(d)) % COVERS.length], top = !!TOPSET[d.s], nw = !top && NEW.test(d.m) && rank(d) > 0;
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
      try { history.replaceState(null, '', '/' + sl); } catch (x) {}
      window.scrollTo({ top: host.getBoundingClientRect().top + window.pageYOffset - 90, behavior: 'smooth' });
    }, true);
    draw();
  }
  /* ---------- dongu ---------- */
  var q = false;
  function run(){ try { rewrite(); var g = cards(); catPage(g); smartGrid(g); devPage(); wireMenu(); popHome(); cartUpsell(); notFound(); } catch (e) {} }
  function sch(){ if (q) return; q = true; setTimeout(function(){ q = false; run(); }, 120); }
  function go(){ run(); if (location.hash === '#desenler') { var tries = 0; (function t(){ var sec = document.querySelector('[data-bg-desen]'); if (sec) sec.scrollIntoView({ block: 'start' }); else if (tries++ < 30) setTimeout(t, 200); })(); } new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ['data-bg-ptitle', 'data-bg-pinfo'] }); }
  if (document.readyState !== 'loading') setTimeout(go, 300); else document.addEventListener('DOMContentLoaded', function(){ setTimeout(go, 300); });
  var lastUrl = location.href;
  setInterval(function(){ if (location.href !== lastUrl) { lastUrl = location.href; var b = document.querySelector('.bg26-set'); if (b) b.removeAttribute('data-sig'); sch(); } }, 500);
})();
