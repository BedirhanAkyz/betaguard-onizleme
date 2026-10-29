/* v15: En çok tercih edilenler (Royal, Tactical, Lego) */
(function(){
  var BS=[{s:'Royal',slug:'royal-gold',n:'3 renk',d:'Barok motif. Siyah, lacivert ve altın.'},{s:'Tactical',slug:'tactical-red',n:'5 renk',d:'Kamuflaj. Kırmızı, mavi, yeşil, gri ve siyah.'},{s:'Lego',slug:'lego',n:'tek renk',d:'Rengarenk tuğla deseni.'}];
  var css=['[data-bg-best]{max-width:1240px;margin:0 auto;padding:56px 24px 8px;box-sizing:border-box;color:#F2F0EB}',
  '.bg-best-h{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin-bottom:22px}',
  '.bg-best-h h2{margin:8px 0 0;font:italic 900 40px/1.05 Archivo,sans-serif;color:#F2F0EB}',
  '.bg-best-h p{margin:10px 0 0;font:400 15px/1.6 Manrope,sans-serif;color:#A9A59D;max-width:520px}',
  '.bg-best-g{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}',
  '.bg-best-c{position:relative;display:block;border-radius:18px;overflow:hidden;background:#18181A;border:1px solid #26252A;text-decoration:none;color:#F2F0EB;transition:border-color .2s,transform .2s}',
  '.bg-best-c:hover{border-color:#F4F2EE;transform:translateY(-2px)}',
  '.bg-best-i{aspect-ratio:1/1;background:#141416;overflow:hidden}',
  '.bg-best-i img{width:100%;height:100%;object-fit:cover;display:block;border-radius:0!important;transition:transform .4s ease}',
  '.bg-best-c:hover .bg-best-i img{transform:scale(1.04)}',
  '.bg-best-b{position:absolute;top:12px;left:12px;background:#F4F2EE;color:#141416;font:800 11px/1 Manrope,sans-serif;letter-spacing:.08em;padding:7px 10px;border-radius:999px}',
  '.bg-best-t{padding:16px 18px 18px}',
  '.bg-best-t strong{display:flex;justify-content:space-between;align-items:baseline;font:italic 900 24px/1.1 Archivo,sans-serif}',
  '.bg-best-t strong span{font:600 13px Manrope,sans-serif;font-style:normal;color:#A9A59D}',
  '.bg-best-t p{margin:6px 0 12px;font:400 14px/1.5 Manrope,sans-serif;color:#A9A59D}',
  '.bg-best-t em{font:700 14px Manrope,sans-serif;font-style:normal;color:#F4F2EE}',
  '@media (max-width:640px){[data-bg-best]{padding:36px 16px 0}.bg-best-h h2{font-size:30px}.bg-best-g{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:78%;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:6px}.bg-best-c{scroll-snap-align:start}}'].join('');
  var st=document.createElement('style'); st.id='bg-theme-css15'; st.textContent=css; (document.head||document.documentElement).appendChild(st);
  function img(slug){ var a=document.querySelector('[data-bg-wall] a[href*="desen='+slug+'"] img')||document.querySelector('[data-bg-wall] a[href*="desen='+slug.split('-')[0]+'"] img'); return a ? (a.currentSrc||a.getAttribute('src')) : ''; }
  function add(){
    var home=document.querySelector('[data-bg-home]'); if(!home) return;
    var ds=document.querySelector('[data-bg-desen]'); if(!ds) return;
    var ex=document.querySelector('[data-bg-best]');
    if(ex){ if(ex.getAttribute('data-ok')) return; [].forEach.call(ex.querySelectorAll('img[data-slug]'),function(im){ if(!im.getAttribute('src')){ var u=img(im.getAttribute('data-slug')); if(u) im.setAttribute('src',u);} }); if(![].some.call(ex.querySelectorAll('img[data-slug]'),function(im){return !im.getAttribute('src');})) ex.setAttribute('data-ok','1'); return; }
    var sec=document.createElement('section'); sec.setAttribute('data-bg-best','1'); sec.setAttribute('aria-label','En çok tercih edilen desenler');
    sec.innerHTML='<div class="bg-best-h"><div><h2>En çok satanlar</h2><p>Siparişlerin çoğu bu üç seriden geliyor.</p></div></div><div class="bg-best-g">'+BS.map(function(b){ var u=img(b.slug); return '<a class="bg-best-c" href="/betaguard-kaplama?desen='+b.slug+'"><div class="bg-best-i"><img data-slug="'+b.slug+'" '+(u?'src="'+u+'"':'')+' alt="'+b.s+' serisi kaplama" loading="lazy"></div><div class="bg-best-t"><strong>'+b.s+'<span>'+b.n+'</span></strong><p>'+b.d+'</p><em>İncele</em></div></a>'; }).join('')+'</div>';
    ds.parentNode.insertBefore(sec, ds);
  }
  var ready=false,q=false;
  function ap(){ if(!ready) return; try{ add(); }catch(e){} }
  function sch(){ if(q) return; q=true; setTimeout(function(){ q=false; ap(); },80); }
  function go(){ setTimeout(function(){ ready=true; ap(); new MutationObserver(sch).observe(document.documentElement,{childList:true,subtree:true}); },640); }
  if(document.readyState!=='loading') go(); else document.addEventListener('DOMContentLoaded',go);
})();
