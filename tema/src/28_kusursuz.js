/* v40: kusursuz denetimi - mobil hediye ikonu, kategori sayfasinda ikas cubugu/sayfalama, desen ve kargo etiketleri kesilmesin, politika sayfasi aralik, sayfa basliklari */
(function () {
  if (window.__bgKus) return; window.__bgKus = 1;
  var GIFT = 'url("data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7M7.5 8a2.5 2.5 0 0 1 0-5C9 3 12 5 12 8c0-3 3-5 4.5-5a2.5 2.5 0 0 1 0 5"/></svg>') + '")';
  var css = [
    ':root{--bgv-gift:' + GIFT + '}',
    '@media (max-width:760px){html .bg-kt-pill:not(.code)::after{-webkit-mask-image:' + GIFT + ';mask-image:' + GIFT + '}}',
    /* desen etiketleri: tek satirda kesme yerine iki satira kadar */
    '.bg-pp-one b,.bg-pp-one small{white-space:normal;overflow:hidden;text-overflow:clip;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-break:break-word;hyphens:auto}',
    /* kargo kutusu yazilari kesilmesin */
    '.bg26-ship b,.bg26-ship small{white-space:normal;overflow:visible;text-overflow:clip}',
    '@media(max-width:420px){.bg26-ship small{font-size:10.5px;line-height:1.25}}',
    /* politika/bilgi sayfalari okunur aralik */
    'html.bg-kus-page .rich-text p{margin:0 0 12px!important;line-height:1.65!important}',
    'html.bg-kus-page .rich-text h1,html.bg-kus-page .rich-text h2,html.bg-kus-page .rich-text h3{margin:22px 0 10px!important;line-height:1.3!important}',
    'html.bg-kus-page .rich-text ul,html.bg-kus-page .rich-text ol{margin:0 0 12px!important;padding-left:20px!important;line-height:1.65!important}',
    'html.bg-kus-page .rich-text li{margin:0 0 6px!important}',
    '.bg-kus-hide{display:none!important}'
  ].join('');
  var st = document.createElement('style'); st.id = 'bg-kus'; st.textContent = css;
  (document.head || document.documentElement).appendChild(st);

  var TITLES = {
    '/pages/kargo-ve-teslimat': 'Kargo ve Teslimat | Betaguard',
    '/pages/iade-kosullari': 'İade Koşulları | Betaguard',
    '/pages/kvkk': 'Gizlilik ve KVKK | Betaguard',
    '/pages/mesafeli-satis-sozlesmesi': 'Mesafeli Satış Sözleşmesi | Betaguard',
    '/pages/kunye': 'Künye | Betaguard'
  };

  /* kategori sayfasinda bizim izgara varken ikas siralama secicisi ve sayfalama gereksiz */
  function hideIkas(){
    var g = document.querySelector('.bg27'); if (!g) return;
    var n = g;
    while (n && n.parentElement && n.parentElement !== document.body) {
      var p = n.parentElement;
      [].forEach.call(p.children, function (c) {
        if (c === n || c.classList.contains('bg-kus-hide') || c.querySelector('.bg27,.bg26-bar,.bg26-catdesc')) return;
        if (/^bg/.test(c.className + '')) return;
        var t = c.textContent.replace(/\s+/g, ' ').trim();
        if (/^Öne Çıkanlar/.test(t) && t.length < 120) c.classList.add('bg-kus-hide');
        else if (/^[\d\s.…<>‹›«»]+$/.test(t) && t.length < 40 && c.querySelector('a,button')) c.classList.add('bg-kus-hide');
      });
      n = p;
    }
  }
  function run(){
    var p = location.pathname.replace(/\/$/, '');
    var isPage = p.indexOf('/pages/') === 0;
    document.documentElement.classList.toggle('bg-kus-page', isPage);
    if (TITLES[p] && document.title !== TITLES[p]) document.title = TITLES[p];
    hideIkas();
  }
  var tm; new MutationObserver(function(){ clearTimeout(tm); tm = setTimeout(run, 120); }).observe(document.documentElement, { childList: true, subtree: true });
  run();
})();
