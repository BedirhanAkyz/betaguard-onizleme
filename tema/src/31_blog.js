/* v44: blog SEO ve gorunum. /blog listesi: baslik+aciklama, "Blog Basligi" yerine gercek H1;
   yazi sayfasi: kapak gorseli uzerine okunurluk golgesi, BlogPosting yapilandirilmis verisi;
   her sayfada: mobil menu cekmecesindeki gizli H1'i (DESENINI SEC) div'e cevir (tek H1 kalsin). */
(function () {
  if (window.__bgBlog) return; window.__bgBlog = 1;
  var css = [
    '.bg-blog-hero{position:relative}',
    '.bg-blog-hero::after{content:"";position:absolute;inset:0;z-index:1;pointer-events:none;background:linear-gradient(180deg,rgba(10,10,11,.15) 0%,rgba(10,10,11,.55) 100%)}',
    '.bg-blog-hero h1{position:relative;z-index:2;text-shadow:0 2px 14px rgba(0,0,0,.7)}',
    '.bg-blog-hero > *:not(img){z-index:2}',
    '.bg-blog-h1{font:inherit;margin:0}'
  ].join('');
  var st = document.createElement('style'); st.id = 'bg-blog'; st.textContent = css;
  (document.head || document.documentElement).appendChild(st);
  function esc(s) { return String(s || '').replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function setMeta(t, d) {
    if (t && document.title !== t) document.title = t;
    if (!d) return;
    var m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement('meta'); m.setAttribute('name', 'description'); document.head.appendChild(m); }
    if (m.getAttribute('content') !== d) m.setAttribute('content', d);
  }
  function demoteDrawerH1() {
    [].forEach.call(document.querySelectorAll('.overlay h1, [class*="overlay"] h1'), function (h) {
      if (h.closest('.bg27, main, article')) return;
      var d = document.createElement('div'); d.className = h.className; d.innerHTML = h.innerHTML; d.setAttribute('data-bg-was-h1', '1');
      h.parentNode.replaceChild(d, h);
    });
  }
  function blogList() {
    setMeta('Kaplama Rehberi ve Blog | Betaguard', 'Kamera, lens, drone ve gimbal kaplaması hakkında rehberler: nasıl uygulanır, cihaza zarar verir mi, hangi desen hangi kullanıma yakışır, drone için nelere dikkat etmeli.');
    var bt = null;
    [].forEach.call(document.querySelectorAll('div.rich-text'), function (e) { if (!bt && e.textContent.trim() === 'Blog Başlığı') bt = e; });
    if (bt && !bt.querySelector('h1')) bt.innerHTML = '<h1 class="bg-blog-h1">Kaplama Rehberi</h1>';
  }
  function blogPost() {
    var h1 = document.querySelector('main h1, article h1, h1'); if (!h1 || h1.closest('.overlay')) return;
    /* kapak: h1 ile ayni kapsayicida img olan en yakin ata */
    var w = h1.parentElement, hero = null;
    for (var i = 0; i < 5 && w && w !== document.body; i++) { if (w.querySelector('img') && !w.querySelector('article, .rich-text p')) { hero = w; break; } w = w.parentElement; }
    if (hero && !hero.classList.contains('bg-blog-hero')) hero.classList.add('bg-blog-hero');
    if (document.getElementById('bg-blog-ld')) return;
    var img = hero && hero.querySelector('img'); var md = document.querySelector('meta[name="description"]');
    var can = document.querySelector('link[rel="canonical"]');
    var ld = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: h1.textContent.trim(), inLanguage: 'tr',
      mainEntityOfPage: (can && can.getAttribute('href')) || location.href.split('?')[0],
      author: { '@type': 'Organization', name: 'Betaguard', url: 'https://betaguard.com.tr' },
      publisher: { '@type': 'Organization', name: 'Betaguard', url: 'https://betaguard.com.tr' } };
    if (img && img.currentSrc) ld.image = [img.currentSrc];
    if (md && md.getAttribute('content')) ld.description = md.getAttribute('content');
    var s = document.createElement('script'); s.type = 'application/ld+json'; s.id = 'bg-blog-ld'; s.textContent = JSON.stringify(ld);
    document.head.appendChild(s);
  }
  /* ust menu ve mobil cekmeceye "Rehber" baglantisi (Aksiyon Kamera'nin yanina) */
  function navLink() {
    [].forEach.call(document.querySelectorAll('a[href]'), function (a) {
      if (a.getAttribute('href') !== '/aksiyon-kamera' || a.textContent.trim() !== 'Aksiyon Kamera') return;
      if (a.closest('footer, .bg26-mm, .bg27, .bg26-bar, [data-bg-insta], main')) return;
      var item = a, p = a.parentElement, guard = 0;
      while (p && guard++ < 3 && p.children.length === 1) { item = p; p = p.parentElement; }
      if (!p || p.querySelector('[data-bg-blog]')) return;
      var c = item.cloneNode(true), ca = c.tagName === 'A' ? c : c.querySelector('a[href]');
      if (!ca) return;
      ca.setAttribute('href', '/blog'); ca.removeAttribute('data-bg-href');
      var leaf = ca; while (leaf.children.length === 1 && leaf.firstElementChild.tagName !== 'SVG') leaf = leaf.firstElementChild;
      if (!leaf.children.length) leaf.textContent = 'Rehber'; else ca.textContent = 'Rehber';
      c.setAttribute('data-bg-blog', '1');
      item.insertAdjacentElement('afterend', c);
    });
  }
  function run() {
    demoteDrawerH1(); navLink();
    var p = location.pathname.replace(/\/$/, '');
    if (p === '/blog') blogList();
    else if (p.indexOf('/blog/') === 0) blogPost();
    else { var old = document.getElementById('bg-blog-ld'); if (old) old.remove(); }
  }
  var tm = 0;
  new MutationObserver(function () { if (!tm) tm = setTimeout(function () { tm = 0; run(); }, 200); }).observe(document.documentElement, { childList: true, subtree: true });
  run();
})();
