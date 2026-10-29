/* v19: "Cihazin neden kaplanmali?" bolumu - once/sonra kaydirici + 4 neden */
(function(){
  if (window.__bgV19) return; window.__bgV19 = 1;
  // Gercek fotograflar gelince doldurulacak (ayni aci, ayni isik). Bos kalirsa kaydirici gizlenir.
  var BEFORE = '', AFTER = '', DEVICE = '';
  var css = [
    '.bg-why{max-width:1180px;margin:56px auto;padding:0 20px;font-family:Manrope,sans-serif;color:#F2EFEA}',
    '.bg-why-h{text-align:center;margin:0 0 26px}',
    '.bg-why-h small{display:block;font:800 12px/1 Manrope,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#F4F2EE;margin-bottom:10px}',
    '.bg-why-h h2{margin:0;font:800 clamp(26px,4vw,40px)/1.15 Manrope,sans-serif;letter-spacing:-.01em}',
    '.bg-why-h p{margin:10px auto 0;max-width:560px;color:#8E8A83;font:500 15px/1.6 Manrope,sans-serif}',
    '.bg-ba{position:relative;max-width:920px;margin:0 auto 18px;aspect-ratio:16/10;border-radius:18px;overflow:hidden;background:#141317;border:1px solid #2A292E;user-select:none;touch-action:pan-y;--p:50%}',
    '.bg-ba img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;pointer-events:none}',
    '.bg-ba .bg-ba-b{clip-path:inset(0 calc(100% - var(--p)) 0 0)}',
    '.bg-ba-line{position:absolute;top:0;bottom:0;left:var(--p);width:2px;margin-left:-1px;background:#F4F2EE;pointer-events:none}',
    '.bg-ba-knob{position:absolute;top:50%;left:var(--p);width:46px;height:46px;margin:-23px 0 0 -23px;border-radius:50%;background:#F4F2EE;color:#111;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 24px rgba(0,0,0,.45);pointer-events:none}',
    '.bg-ba-tag{position:absolute;top:14px;padding:6px 11px;border-radius:999px;background:rgba(10,10,12,.72);backdrop-filter:blur(6px);font:700 12px/1 Manrope,sans-serif;letter-spacing:.04em;pointer-events:none}',
    '.bg-ba-tag.l{left:14px;color:#C9C4BC}.bg-ba-tag.r{right:14px;color:#F4F2EE}',
    '.bg-ba input{position:absolute;inset:0;width:100%;height:100%;margin:0;opacity:0;cursor:ew-resize;-webkit-appearance:none;appearance:none}',
    '.bg-ba-cap{text-align:center;color:#8E8A83;font:500 13px/1.5 Manrope,sans-serif;margin:0 0 30px}',
    '.bg-why-g{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}',
    '.bg-why-c{padding:22px 20px;border:1px solid #2A292E;border-radius:16px;background:#141317}',
    '.bg-why-c i{display:flex;width:42px;height:42px;border-radius:12px;align-items:center;justify-content:center;background:#1E1C17;color:#F4F2EE;margin-bottom:14px}',
    '.bg-why-c b{display:block;font:800 16px/1.3 Manrope,sans-serif;margin-bottom:6px}',
    '.bg-why-c span{display:block;color:#8E8A83;font:500 14px/1.55 Manrope,sans-serif}',
    '.bg-why-cta{display:flex;justify-content:center;margin-top:26px}',
    '.bg-why-cta a{display:inline-flex;align-items:center;gap:8px;padding:14px 24px;border-radius:999px;background:#F4F2EE;color:#111!important;font:800 14px/1 Manrope,sans-serif;text-decoration:none}',
    '@media (max-width:900px){.bg-why-g{grid-template-columns:repeat(2,1fr)}}',
    '@media (max-width:520px){.bg-why{margin:40px auto}.bg-why-g{gap:10px}.bg-ba{aspect-ratio:4/5;border-radius:14px}.bg-why-c{padding:14px}.bg-why-c i{width:36px;height:36px;margin-bottom:10px}.bg-why-c b{font-size:14px}.bg-why-c span{font-size:12.5px;line-height:1.5}}'
  ].join('');
  var st = document.createElement('style'); st.id = 'bg-theme-css19'; st.textContent = css; (document.head || document.documentElement).appendChild(st);
  function ic(p){ return '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + p + '</svg>'; }
  var CARDS = [
    [ic('<path d="M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6z"/><path d="M9 12l2 2 4-4"/>'), 'Çizik ve sürtünmeye karşı', 'Çantada, tripodda, kemer tokasında oluşan çizikleri kaplama alır.'],
    [ic('<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>'), 'İkinci el değerini korur', 'Satarken kaplamayı sökersin, gövde ilk günkü gibi çıkar.'],
    [ic('<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18c1.5 0 2-1 2-2s-1-1.5-1-2.5 1-1.5 2-1.5h2a4 4 0 0 0 4-4"/><circle cx="8" cy="10" r="1"/><circle cx="12" cy="7" r="1"/><circle cx="16" cy="10" r="1"/>'), 'Ekipmanına karakter kat', 'Onlarca desen ve renk. Kamerandan dronuna tüm setin aynı tarzda.'],
    [ic('<path d="M3 12a9 9 0 0 1 15.5-6.2L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.5 6.2L3 16"/><path d="M3 21v-5h5"/>'), 'İz bırakmadan sökülür', 'Yüzeyde yapışkan ya da iz kalmaz.']
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
    s.innerHTML = '<div class="bg-why-h"><h2>Neden kaplama?</h2><p>Hem cihazı korur hem de görünüşünü değiştirir. Sıkıldığında söker, başka desene geçersin.</p></div>' + ba +
      '<div class="bg-why-g">' + CARDS.map(function(c){ return '<div class="bg-why-c"><i>' + c[0] + '</i><b>' + c[1] + '</b><span>' + c[2] + '</span></div>'; }).join('') + '</div>' +
      '<div class="bg-why-cta"><a href="/betaguard-kaplama">Desenlere bak</a></div>';
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
