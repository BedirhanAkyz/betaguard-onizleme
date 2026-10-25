# Betaguard tema

- `src/` : tema bloklari (00_main ... 13_v27). Duzenleme burada yapilir.
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

## Drone akisi - bilinen tuzaklar (2026-10)
- Kumanda secimi yalnizca 18 drone URUN SAYFASINDA var (ikas Urun Ozellestirmesi).
  Genel /betaguard-kaplama sayfasinda yok; orada drone secilince v18
  "cihazin sayfasindan ekle" linkini gosterir.
- Buton fiyat etiketi (`data-bg-price`) iki yerden yaziliyor: 00_main ve 04_v18.
  Ikisi FARKLI deger yazarsa MutationObserver'lar birbirini tetikler ve sayfa kilitlenir.
  Kumanda eki `window.__bgKumEk` uzerinden ikisine de ayni sekilde uygulanmali.
- 00_main'deki devMissing bloklamasi urun sayfasinda `.bg-dev` bulamadigi icin
  sessizce donuyordu; uyari artik 13_v27 icindeki capture click dinleyicisinden geliyor.

## Govde doku bolgeleri (2026-10) - Canon + Nikon 99 govde

Sorun: kaucuk tutamak bolgesi specs.json'da kaba dikdortgen/cokgendi. Kaplama
duz bir levha gibi duruyor, bazi govdelerde siluetin disina tasiyordu. Ayrica
`doku_duz: blur` isigi %45'e kisiyordu, tutamagin hacmi kayboluyordu.

Cozum iki yontem (ikisi de `doku` alanini bitmap maskeye cevirir):
1. `kontrol/tutamak.py` - fotograftan doku analizi. grain = (L - gauss(L,4))'un
   yerel std'si / yerel parlaklik; haric alanlar disarida birakilip Otsu ile
   esiklenir, mount'un disinda kalan taraf tutamak sayilir. Canon fotograflarinda
   calisir. Oran 0.14-0.46 disinda cikarsa guvenilmez, kullanma.
2. `kontrol/snap.py` - mevcut elle cizilmis bolgeyi baslangic alip cv2.grabCut ile
   fotografin gercek malzeme kenarina oturtur (icerisi GC_FGD, disarisi GC_BGD,
   arada %2.8 genislikte belirsiz band). NIKON icin bunu kullan: Nikon govdeleri
   cok koyu oldugundan grain yontemi TERS calisiyor, boyali yuzeyi dokulu saniyor.

Maskeler `pipe/doku_maske/<cihaz>.png`, spec'te `{"t":"mask","f":"doku_maske/..."}`.
render2.py'ye `mask` sekil tipi ve `doku_isik` / `doku_blur` anahtarlari eklendi
(govde tutamaklarinda doku_isik=1.0, doku_blur=6 kullan; Fuji gibi duz deri
bandlarinda varsayilan 0.45/14 kalabilir).

## Render hizi - OUT'u asla /mnt/user-data/outputs'a verme
O dizin ag uzerinden bagli; 39 desen yazmak cihaz basina ~8 dakika suruyor.
Yerel diske (`/home/claude/render_out`) yazinca ayni is ~18 saniye. 25 kat fark.
Ayrica o diskte mtime gec guncellendiginden "dosya yazildi mi" kontrolu yaniltir.
Not: konteyner arac cagrilari ARASINDA donuyor; arka plan isleri ilerlemiyor.
Uzun render'lari 600sn'lik onplan parcalari halinde kostur.

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

## Drone govde formu (2026-10)

Kaplamalar "cok duz" goruluyordu: koyu desenlerde (carbon, topografik siyah)
carpimsal golge gorunmedigi icin govde kubbesi ve kol silindiri okunmuyordu.
18 DJI cihazina su preset uygulandi (specs.json):

    spec_esik=6  spec_kat=1.3
    opak_clip=[0.25,1.85]  opak_gamma=1.9  opak_sigma=2.5
    rim=[0.50,14]

opak_sigma'nin 4 -> 2.5 dusmesi isik alanini keskinlestirir (panel derzi,
kol kenari gorunur). opak_gamma+clip orta kontrasti acar, spec ek olarak
tepe isigini koyar; esik 6 oldugu icin siyahlar kalkmaz.

DIKKAT - parlak govdeli cihazlarda patlama yapar. Su 4 cihaz degistirilmedi:
DJI Mavic Pro, DJI Mavic Air, DJI Goggles 3, DJI Mavic 4 Pro.
Bu cihazlarda fotografin kendi parlamasi zaten guclu; clip hi=1.85 + gamma 1.9
onu ~3x buyutup beyaz serit birakiyor. Onlar icin ya eski ayar ya da
spec_esik=20 / spec_kat=0.5 / clip=[0.3,1.6] gibi yumusak bir varyant gerekir.

Olcut: `(a>235 & govde)` oraninin A->F degismemesi gerekir. Mavic Pro 1.2->1.7
ve Mavic Air 0.7->1.2 oldugu icin elendi.
