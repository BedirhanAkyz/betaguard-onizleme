# Betaguard tema

- `src/` : tema bloklari (00_main ... 12_v26). Duzenleme burada yapilir.
- `devices.json` : onizlemeli cihaz listesi (slug, tur, marka, model, fiyat, gorsel klasoru).
- `build.py SHA` : src -> `bundle.js` (SHA = img/ klasorunun bulundugu commit).
- `loader.tpl` : ikas > Eklentiler > Scriptler "Betaguard tema" icine yapistirilan kisa yukleyici (`__SHA__` = bundle.js'in commit'i).

Yayin: 1) build.py, 2) commit+push, 3) loader.tpl'deki __SHA__'yi yeni commit ile degistirip ikas'a kaydet.

## ikas gorsel kontrolu (bakim)
ikas, ice aktarimda gorselleri jsDelivr'dan kopyalarken bir kismini (~%18) alamiyor; cdn.myikas.com'da 404 kaliyor.
Kontrol: Urunler > Disa Aktar (Ad + Gorsel URL + Varyantlar) -> her satirin Resim URL'sini image_180 boyutunda yukleyerek test et.
Duzeltme: bozuk varyantlarin Resim URL'sini jsDelivr adresiyle degistir, AYNI URUNUN TUM VARYANTLARINI (39 satir) dosyada tut
(ikas "eksik varyant" hatasi verir), sadece "Gorsel URL" secili olarak ice aktar; <=90 urunluk parcalar halinde. Kalanlar icin tekrarla.
