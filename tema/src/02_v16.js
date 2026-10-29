/* v16: cihaz secimi - yeniden cizim duzeltmesi + Hizli/Manuel basliklari */
(function(){
  if (window.__bgV16) return; window.__bgV16 = 1;
  var css = ['.bg-dev-sub{font:800 12px/1.3 Manrope,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#F4F2EE;display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 8px}',
    '.bg-dev-sub span{font:500 13px Manrope,sans-serif;letter-spacing:0;text-transform:none;color:#8E8A83}',
    '.bg-dev-or{order:10;display:flex;align-items:center;gap:10px;margin-top:8px;font:600 12px Manrope,sans-serif;color:#8E8A83}',
    '.bg-dev-or:before,.bg-dev-or:after{content:"";flex:1;height:1px;background:#2A292E}',
    '.bg-dev-man{order:11;margin-top:2px}',
    '.bg-dev .bg-sugg{top:102px!important}'].join('');
  var st = document.createElement('style'); st.id = 'bg-theme-css16'; st.textContent = css; (document.head || document.documentElement).appendChild(st);
  function labels(){
    var dv = document.querySelector('.bg-dev'); if (!dv || dv.querySelector('.bg-dev-sub')) return;
    var inp = dv.querySelector('input'); if (!inp) return;
    var a = document.createElement('div'); a.className = 'bg-dev-sub'; a.innerHTML = 'Hızlı cihaz seçimi<span>Modelini yaz, listeden seç</span>';
    dv.insertBefore(a, inp);
    var or = document.createElement('div'); or.className = 'bg-dev-or'; or.textContent = 'veya';
    var m = document.createElement('div'); m.className = 'bg-dev-sub bg-dev-man'; m.innerHTML = 'Manuel cihaz seçimi<span>Tür, marka ve modeli sırayla seç</span>';
    dv.appendChild(or); dv.appendChild(m);
  }
  function rootOf(el){ while (el && !el.__k) el = el.parentElement; return el; }
  function comps(root){ var out = []; (function w(v){ if (!v) return; if (Array.isArray(v)) { for (var i = 0; i < v.length; i++) w(v[i]); return; } if (v.__c && v.__c.props && v.__c.props.option) out.push(v.__c); if (v.__k) w(v.__k); })(root.__k); return out; }
  function vis(p, ch){ var r = ch.requiredOptionValueIds; return r && r.length ? r.some(function(id){ return (p.values || []).indexOf(id) >= 0; }) : !!(p.values && p.values.length); }
  function clearAll(o){ (o.childOptions || []).forEach(function(ch){ if (ch.values && ch.values.length) ch.values = []; clearAll(ch); }); }
  function clearHidden(o){ (o.childOptions || []).forEach(function(ch){ if (!vis(o, ch)) { if (ch.values && ch.values.length) ch.values = []; clearAll(ch); } else clearHidden(ch); }); }
  function refresh(t){
    var r = rootOf(t); if (!r) return;
    var cs = comps(r), field = t.closest('.pcz-field'), own = null;
    for (var i = 0; i < cs.length; i++) if (cs[i].base === field) { own = cs[i]; break; }
    if (own) { try { clearHidden(own.props.option); } catch (e) {} try { own.forceUpdate(); } catch (e) {} }
    setTimeout(function(){ var c2 = comps(r); for (var j = 0; j < c2.length; j++) { try { c2[j].forceUpdate(); } catch (e) {} } }, 40);
  }
  document.addEventListener('change', function(e){ var t = e.target; if (!t || !t.closest || !t.closest('.pcz')) return; setTimeout(function(){ refresh(t); }, 0); });
  var q = false;
  function sch(){ if (q) return; q = true; setTimeout(function(){ q = false; try { labels(); } catch (e) {} }, 120); }
  function go(){ setTimeout(function(){ sch(); new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true }); }, 700); }
  if (document.readyState !== 'loading') go(); else document.addEventListener('DOMContentLoaded', go);
})();
