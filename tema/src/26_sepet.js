/* v40: sepet cekmecesinde drone'a eklenen kumanda / gozluk kaplamasini ayri satir olarak goster.
   ikas cekmecesi kisisellestirme secimlerini listelemiyor; urun sayfasinda "Sepete Ekle"ye basildigi anda
   secimleri (urun adi + desen + ekler) kaydedip cekmecedeki ayni satirin altina yaziyoruz. */
(function () {
  if (window.__bgSepet) return; window.__bgSepet = 1;
  var KEY = 'bg_cart_ex', NONE = 'İstemiyorum', EK = 1000;
  function load() { try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) { return []; } }
  function save(a) { try { localStorage.setItem(KEY, JSON.stringify(a.slice(-30))); } catch (e) {} }
  function clean(t) { return String(t).split('·')[0].split('(')[0].replace(/\+?\s*[\d.]+\s*₺/, '').trim(); }
  function kind(sel) { for (var i = 0; i < sel.options.length; i++) if (/Goggles/.test(sel.options[i].text)) return 'Gözlük'; return 'Kumanda'; }
  function pname() { try { return window.__IKAS_DATA__.pageSpecificData.name; } catch (e) { return ''; } }
  function pdesen() {
    var el = document.querySelector('.bg-gal-cap span') || document.querySelector('.bg-pp-h em');
    return el ? (el.textContent || '').trim() : '';
  }

  /* 1 - urun sayfasinda Sepete Ekle: secimleri kaydet (secim eksikse 13_v27 tiklamayi zaten durdurur) */
  document.addEventListener('click', function (e) {
    if (!document.querySelector('.bg27k')) return;
    var n = e.target, hit = 0;
    for (var i = 0; i < 5 && n; i++, n = n.parentElement) if (/^Sepete Ekle(\s|·|$)/.test((n.textContent || '').trim())) { hit = 1; break; }
    if (!hit) return;
    var ex = [];
    [].forEach.call(document.querySelectorAll('select'), function (s) {
      var o = s.options[s.selectedIndex]; if (!s.value || !o) return;
      var t = o.text.trim(); if (!t || t.indexOf(NONE) === 0 || /^Seçiniz/.test(t)) return;
      if (!/DJI|RC|Goggles/.test(t)) return;
      ex.push({ k: kind(s), t: clean(t) });
    });
    var nm = pname(), ds = pdesen(); if (!nm) return;
    var a = load().filter(function (r) { return !(r.n === nm && r.d === ds); });
    a.push({ n: nm, d: ds, x: ex, at: Date.now() }); save(a);
  }, true);

  /* 2 - cekmece: ayni urun + desen satirinin altina ekleri yaz */
  var CSS = '.bg-cx{margin-top:4px;display:flex;flex-direction:column;gap:2px}.bg-cx span{font:600 12px/1.35 Manrope,sans-serif;color:#E2C285}.bg-cx small{font:500 11px/1.3 Manrope,sans-serif;color:#8E8A83}';
  function css() { if (document.getElementById('bg-cx-css')) return; var s = document.createElement('style'); s.id = 'bg-cx-css'; s.textContent = CSS; document.head.appendChild(s); }
  function drawer() {
    var h = [].filter.call(document.querySelectorAll('div,h2,h3,span'), function (e) { return e.children.length === 0 && /^Alışveriş Sepetim/.test((e.textContent || '').trim()); })[0];
    if (!h) return null;
    var p = h; for (var i = 0; i < 8 && p; i++) { p = p.parentElement; if (p && p.querySelectorAll('a').length && /Toplam/.test(p.textContent || '')) return p; }
    return null;
  }
  function run() {
    var dr = drawer(); if (!dr) return;
    var recs = load(); if (!recs.length) return;
    css();
    [].forEach.call(dr.querySelectorAll('div'), function (lab) {
      if (lab.children.length || (lab.textContent || '').trim() !== 'Desen') return;
      var row = lab.parentElement; if (!row || row.children.length !== 2) return;
      var ds = (row.children[1].textContent || '').trim();
      /* urun adi: yukari cikip ilk link metni */
      var box = row, nm = '';
      for (var i = 0; i < 5 && box && !nm; i++) { box = box.parentElement; var a = box && box.querySelector('a'); if (a && (a.textContent || '').trim()) nm = (a.textContent || '').trim(); }
      if (!nm) return;
      var r = null; for (var j = recs.length - 1; j >= 0; j--) if (recs[j].n === nm && recs[j].d === ds) { r = recs[j]; break; }
      var old = row.nextElementSibling && row.nextElementSibling.classList.contains('bg-cx') ? row.nextElementSibling : null;
      if (!r || !r.x.length) { if (old) old.remove(); return; }
      var html = r.x.map(function (x) { return '<span>+ ' + x.k + ': ' + x.t.replace(/[<>&]/g, '') + ' · ' + EK.toLocaleString('tr-TR') + ' ₺</span>'; }).join('') + '<small>Drone ile birlikte indirimli fiyat, aynı desende üretilir</small>';
      if (old) { if (old.innerHTML !== html) old.innerHTML = html; return; }
      var d = document.createElement('div'); d.className = 'bg-cx'; d.innerHTML = html; row.parentNode.insertBefore(d, row.nextSibling);
    });
  }
  var q = 0; function sch() { if (q) return; q = 1; setTimeout(function () { q = 0; try { run(); } catch (e) {} }, 200); }
  function go() { new MutationObserver(sch).observe(document.documentElement, { childList: true, subtree: true }); setInterval(sch, 1200); sch(); }
  if (document.readyState !== 'loading') go(); else document.addEventListener('DOMContentLoaded', go);
})();
