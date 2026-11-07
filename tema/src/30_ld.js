/* v42: Google urun yapilandirilmis verisi (Search Console uyarilari): ikas'in Product JSON-LD'sine
   marka adi, kargo bilgisi (2.000 TL ustu ucretsiz, alti 200 TL; 1-2 is gunu hazirlik, 1-3 gun teslim)
   ve iade politikasi (kisiye ozel uretim: cayma yok) eklenir; bos priceValidUntil temizlenir. */
(function () {
  if (window.__bgLd) return; window.__bgLd = 1;
  function shipping(price) {
    return {
      '@type': 'OfferShippingDetails',
      shippingRate: { '@type': 'MonetaryAmount', value: price >= 2000 ? 0 : 200, currency: 'TRY' },
      shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'TR' },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 2, unitCode: 'DAY' },
        transitTime: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 3, unitCode: 'DAY' }
      }
    };
  }
  var RETURN = {
    '@type': 'MerchantReturnPolicy',
    applicableCountry: 'TR',
    returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
    merchantReturnLink: 'https://betaguard.com.tr/pages/iade-kosullari'
  };
  function patch() {
    var ss = document.querySelectorAll('script[type="application/ld+json"]:not([data-bg-ld])');
    for (var i = 0; i < ss.length; i++) {
      var s = ss[i], j;
      if (!/"@type"\s*:\s*"Product"/.test(s.textContent)) continue;
      try { j = JSON.parse(s.textContent); } catch (e) { continue; }
      j.brand = { '@type': 'Brand', name: 'Betaguard' };
      var offers = Array.isArray(j.offers) ? j.offers : (j.offers ? [j.offers] : []);
      offers.forEach(function (o) {
        if (!o.priceValidUntil) delete o.priceValidUntil;
        o.shippingDetails = shipping(parseFloat(o.price) || 0);
        o.hasMerchantReturnPolicy = RETURN;
      });
      s.setAttribute('data-bg-ld', '1');
      s.textContent = JSON.stringify(j);
    }
  }
  var tm = 0;
  new MutationObserver(function () { if (!tm) tm = setTimeout(function () { tm = 0; patch(); }, 200); })
    .observe(document.documentElement, { childList: true, subtree: true });
  patch();
})();
