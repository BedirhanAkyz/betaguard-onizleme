/* v52: mobil urun sayfasi alt cubugu.
   Sorun: 39 desenlik izgara telefonda ~1150 px. Desen secerken cihaz gorseli yukarida ekran disinda kaliyor (secilen desen
   cihazin ustunde gorulmuyor), "Sepete Ekle" ise ~2 ekran asagida. Cozum: gorsel ekrandan cikinca alta sabit bir cubuk gelir:
   secili desenle cihazin kucuk gorseli + desen adi + fiyat + Sepete Ekle. Cubuktaki dugme sayfadaki gercek dugmeye tiklar;
   kumanda secimi uyarisi, tukendi kontrolu ve sepete ekleme animasyonu aynen calisir. Yalniz cihaz sayfalarinda ve 767 px altinda. */
(function () {
  if (window.__bgMbar) return; window.__bgMbar = 1;
  var MQ = window.matchMedia ? window.matchMedia('(max-width: 767px)') : null;
  if (!MQ) return;
  var css = [
    '.bg-mbar{position:fixed;left:0;right:0;bottom:0;z-index:940;display:none;align-items:center;gap:10px;padding:8px 12px calc(8px + env(safe-area-inset-bottom,0px));background:rgba(17,17,19,.97);border-top:1px solid #2A292E;box-shadow:0 -10px 30px rgba(0,0,0,.45);transform:translateY(110%);transition:transform .22s ease;font-family:Manrope,sans-serif;box-sizing:border-box}',
    '@media (max-width:767px){.bg-mbar{display:flex}}',
    '.bg-mbar.on{transform:none}',
    '.bg-mbar-th{flex:none;width:52px;height:52px;padding:0;border:1px solid #2A292E;border-radius:12px;background:#fff;overflow:hidden;cursor:pointer}',
    '.bg-mbar-th img{width:100%;height:100%;object-fit:contain;display:block}',
    '.bg-mbar-tx{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}',
    '.bg-mbar-tx b{font:700 13.5px/1.25 Manrope,sans-serif;color:#E2C285;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
    '.bg-mbar-tx span{font:600 12.5px/1.25 Manrope,sans-serif;color:#A9A59D;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
    '.bg-mbar-go{flex:none;min-height:46px;padding:0 18px;border:0;border-radius:999px;background:#C9A45C;color:#141210;font:800 14.5px/1 Manrope,sans-serif;cursor:pointer;white-space:nowrap}',
    '.bg-mbar-go:active{transform:scale(.97)}',
    '.bg-mbar-go[disabled]{background:#2A292E;color:#8E8A83;cursor:default}',
    '@media (max-width:767px){html.bg-mbar-on .bg-wa{bottom:calc(84px + env(safe-area-inset-bottom,0px))!important}html.bg-mbar-on body{padding-bottom:72px}}',
    '@media (prefers-reduced-motion:reduce){.bg-mbar{transition:none}}'
  ].join('');
  var st = document.createElement('style'); st.id = 'bg-mbar-css'; st.textContent = css; (document.head || document.documentElement).appendChild(st);

  var bar = null, lastKey = '';
  function dev() { try { return window.__BG && window.__BG.cur ? window.__BG.cur() : null; } catch (e) { return null; } }
  function parts() {
    var btn = document.querySelector('[data-bg-pcart]'), gal = document.querySelector('.bg-gal'), pp = document.querySelector('.bg-pp');
    return btn && gal && pp ? { btn: btn, gal: gal, pp: pp } : null;
  }
  function desen() { var on = document.querySelector('.bg-pp-one.on'); return on ? (on.getAttribute('title') || '') : ''; }
  function price() { var p = document.querySelector('[data-bg-pprice]'); var m = p ? /[\d.]+\s*₺/.exec(p.textContent || '') : null; return m ? m[0] : ''; }
  function soldOut(btn) { return document.documentElement.classList.contains('bg-tk-sel') || (/tükendi/i.test(btn.textContent || '') && !/sepete ekle/i.test(btn.textContent || '')); }
  /* kucuk gorsel: galerideki secili varyant gorselinin 180 px hali (ikas CDN); bulunamazsa kendi onizlememiz */
  function thumb() {
    var im = document.querySelector('.bg-gal img'), u = im ? (im.currentSrc || im.getAttribute('src') || '') : '';
    if (/\/image_\d+\.(webp|jpe?g|png)/.test(u)) return u.replace(/\/image_\d+\./, '/image_180.');
    var B = window.__BG, d = dev(), s = B && B.SLUGOF ? B.SLUGOF[desen()] : '';
    if (B && d && s && B.timg) return B.timg(d, s);
    return u;
  }
  function ensure() {
    if (bar && document.body.contains(bar)) return bar;
    bar = document.createElement('div'); bar.className = 'bg-mbar'; bar.setAttribute('role', 'region'); bar.setAttribute('aria-label', 'Sepete ekle'); bar.setAttribute('aria-hidden', 'true');
    bar.innerHTML = '<button type="button" class="bg-mbar-th" aria-label="Önizlemeye dön"><img alt="" decoding="async"></button>' +
      '<div class="bg-mbar-tx"><b></b><span></span></div><button type="button" class="bg-mbar-go">Sepete Ekle</button>';
    document.body.appendChild(bar);
    bar.querySelector('.bg-mbar-th').addEventListener('click', function () {
      var g = document.querySelector('.bg-gal'); if (!g) return;
      window.scrollTo({ top: Math.max(0, g.getBoundingClientRect().top + window.pageYOffset - 84), behavior: 'smooth' });
    });
    bar.querySelector('.bg-mbar-go').addEventListener('click', function () {
      var p = parts(); if (!p || soldOut(p.btn)) return;
      var go = this, hit = p.btn.querySelector('.rich-text') || p.btn;
      hit.click();
      /* gercek dugmedeki "Sepete eklendi" onayini cubuga da yansit */
      setTimeout(function () {
        if (p.btn.querySelector('.bga-ok.on')) { go.textContent = '✓ Eklendi'; setTimeout(function () { go.textContent = 'Sepete Ekle'; lastKey = ''; sch(); }, 1600); }
      }, 120);
    });
    return bar;
  }
  function update() {
    var p = parts(), d = dev(), on = false;
    if (p && d && MQ.matches) {
      var g = p.gal.getBoundingClientRect(), b = p.btn.getBoundingClientRect(), vh = window.innerHeight || 0;
      var ckOn = document.documentElement.classList.contains('bg-ck-on');   /* cerez seridi aciksa ustune binme (07_v21) */
      on = g.bottom < 96 && !(b.top < vh - 6 && b.bottom > 64) && !ckOn;
    }
    var de = document.documentElement;
    /* not: classList.add/remove ve setAttribute deger degismese de mutasyon kaydi uretir; hepsi kosullu (gozlemcileri bos yere tetiklemesin) */
    if (!on) { if (bar && bar.classList.contains('on')) { bar.classList.remove('on'); bar.setAttribute('aria-hidden', 'true'); } if (de.classList.contains('bg-mbar-on')) de.classList.remove('bg-mbar-on'); return; }
    ensure();
    var nm = desen(), pr = price(), out = soldOut(p.btn), th = thumb(), key = [d.s, nm, pr, out, th].join('|');
    if (key !== lastKey) {
      lastKey = key;
      var im = bar.querySelector('img');
      if (th && im.getAttribute('src') !== th) {
        im.onerror = function () { this.onerror = null; var B = window.__BG, sl = B && B.SLUGOF ? B.SLUGOF[nm] : ''; if (B && sl && B.img) this.src = B.img(d, sl); };
        im.setAttribute('src', th);
      }
      bar.querySelector('.bg-mbar-tx b').textContent = nm || (d.b + ' ' + d.m);
      bar.querySelector('.bg-mbar-tx span').textContent = (nm ? d.m + (pr ? ' · ' : '') : '') + pr;
      var go = bar.querySelector('.bg-mbar-go');
      if (out) { go.disabled = true; go.textContent = 'Tükendi'; } else { go.disabled = false; if (!/Eklendi/.test(go.textContent)) go.textContent = 'Sepete Ekle'; }
    }
    if (!bar.classList.contains('on')) { bar.classList.add('on'); bar.setAttribute('aria-hidden', 'false'); }
    if (!de.classList.contains('bg-mbar-on')) de.classList.add('bg-mbar-on');
  }
  var tk = 0;
  function sch() { if (tk) return; tk = 1; (window.requestAnimationFrame || setTimeout)(function () { tk = 0; try { update(); } catch (e) {} }); }
  window.addEventListener('scroll', sch, { passive: true });
  window.addEventListener('resize', sch, { passive: true });
  document.addEventListener('click', function () { setTimeout(sch, 60); setTimeout(sch, 500); setTimeout(sch, 1400); }, true);   /* desen secimi: ad hemen, gorsel biraz sonra guncellenir */
  setInterval(sch, 1500);   /* SPA gecisleri ve gec yuklenen bolumler */
})();
