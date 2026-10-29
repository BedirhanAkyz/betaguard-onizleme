/* v22: urun galerisi altinda "gorseller temsilidir" bilgilendirmesi */
(function(){
  if (window.__bgV22) return; window.__bgV22 = 1;
  var css = [
    '.bg-rep{display:flex;gap:10px;align-items:flex-start;margin:10px 0 0;padding:11px 13px;border:1px solid #2A292E;border-radius:12px;background:#141317;font:500 12.5px/1.55 Manrope,sans-serif;color:#A3A09A}',
    '.bg-rep svg{flex:none;width:16px;height:16px;margin-top:1px;color:#F4F2EE}',
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
