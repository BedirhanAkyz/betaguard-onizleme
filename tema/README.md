# Betaguard tema

- `src/` : tema bloklari (00_main ... 12_v26). Duzenleme burada yapilir.
- `devices.json` : onizlemeli cihaz listesi (slug, tur, marka, model, fiyat, gorsel klasoru).
- `build.py SHA` : src -> `bundle.js` (SHA = img/ klasorunun bulundugu commit).
- `loader.tpl` : ikas > Eklentiler > Scriptler "Betaguard tema" icine yapistirilan kisa yukleyici (`__SHA__` = bundle.js'in commit'i).

Yayin: 1) build.py, 2) commit+push, 3) loader.tpl ve ikas Scriptler icindeki __SHA__ -> yeni commit.
   Not: ikas magaza onbellegi script degisikligini ~2-5 dk sonra yayina aliyor; hemen gorunmezse bekle.

## Kaplama kurali: deri -> doku, metal -> desen
Govdede deri/deri gorunumlu (plastik) alanlar siyah petek dokuyla, metal ust kapak/prizma/taban
desenli kaplamayla render edilir. specs.json'da bu alan `doku` listesine `"deri": 1` isaretli
dikdortgen olarak eklenir; `doku_ustte: true` oldugu icin desen maskesinden otomatik dusulur.
Gerekli anahtarlar: `doku_tex: hex_tile.jpg`, `doku_mm: 240`, `doku_duz: "blur"`, `doku_ustte: true`.

Deri bandinin ust/alt sinirini olcmek icin `pipe/fuji_seam.py` (govde kenarindan 90px'lik serit
uzerinde yerel standart sapma profili; duz metal ~2-5, deri ~9-25). Sonuclar `pipe/fuji_band.json`.
Kontrol: `render(..., check=True)` -> `_alan.jpg` (turuncu = desen, mavi = doku).

Uygulanmis govdeler: tum Fujifilm X ve GFX govdeleri, Nikon Zf/Df, Olympus PEN-F, Leica SL2.
Orta kismi metal olan modellerde (X-A3, X-A5, X-T10, X-T20) band tek parca degil, sol+sag iki
dikdortgendir.

## ikas gorsel kontrolu (bakim)
ikas, ice aktarimda gorselleri jsDelivr'dan kopyalarken bir kismini (~%18) alamiyor; cdn.myikas.com'da 404 kaliyor.
Kontrol: Urunler > Disa Aktar (Ad + Gorsel URL + Varyantlar) -> her satirin Resim URL'sini image_180 boyutunda yukleyerek test et.
Duzeltme: bozuk varyantlarin Resim URL'sini jsDelivr adresiyle degistir, AYNI URUNUN TUM VARYANTLARINI (39 satir) dosyada tut
(ikas "eksik varyant" hatasi verir), sadece "Gorsel URL" secili olarak ice aktar; <=90 urunluk parcalar halinde. Kalanlar icin tekrarla.

## Drone kumanda secimi (v27)
ikas > Urunler > Tanimlamalar > Urun Kisisellestirmeleri > "Drone kumanda kaplamasi":
tek secenek ("Kumanda kaplamasi", Secim/Liste, max 1, zorunlu), 4 deger:
Istemiyorum (0), DJI RC-N1/N2/N3 (1000), DJI RC (1000), DJI RC Pro (1000).
18 drone urununde "Urun Ozellestirmesi" alanindan bagli.
tema/src/13_v27.js bu select'i gizleyip "3. Kumanda" gorsel adimina cevirir;
kumanda onizlemesi img/drone-dji-rc*/<desen>.webp dosyalarindan gelir.
Yeni drone urunu eklenince: urun > Urun Ozellestirmesi > "Drone kumanda kaplamasi" sec.

## Lens gorsel tarama (2026-10)
186 lens fotografi tek tek okunur boyutta tarandi (pipe/tara/ sayfalari).
26 fotograf egik ya da ters bulundu; tam liste scratchpad/egik_liste.txt.
8 fotograf (10 urun) mevcuttan iyi alternatifle degistirildi:
Canon EF 24-70 II, Canon RF 70-200 F2.8, Nikon 50mm F1.8G (2 urun),
Nikon AF-S 18-105, Nikon 70-200 FL (2 urun), Olympus 45mm,
Panasonic Leica DG 12-60, Sony FE 24-105 (bu sonuncusu 180 derece donuktu).
Kalan 16'da aranan alternatifler mevcuttan kotu cikti (on cam buyuk elips
olarak giriyor), dokunulmadi.

Kesim artik `pipe/prep2.py` (grabCut): beyaz zeminde beyaz govdeyi de dogru
ayiriyor, eski `prep.py` esik yontemi bunu beceremiyordu.
`autolens.py` ON CAMI HARIC TUTMUYOR; yeni spec urettikten sonra
`haric` listesine sol tarafa bir dikdortgen elle eklemek gerekiyor.
Dikey (on yukari) cekilmis lenslerde once goruntuyu 90 derece cevir
(on sol, bayonet sag olacak sekilde), yoksa cyl golgesi ters cikar.

## ikas gorsel icin CSV uretimi (indirme engelliyse)
Chrome sekme basina tek indirmeye izin veriyor; disa aktarim dosyasi inmezse
URL.createObjectURL kancasiyla blob metnini sayfadan okuyup, filtrelenmis
CSV'yi File olarak dogrudan ice aktarim input'una atamak calisiyor.
Disa aktarim sutunlari: Urun Grup ID / Varyant ID / Isim / Resim URL /
Varyant Tip 1 / Varyant Deger 1 / Varyant Tip 2 / Varyant Deger 2.
Varyant Deger 1 = desen adi ("Line Black"); webp adi = slug(desen adi).
