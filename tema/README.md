# Betaguard tema

- `src/` : tema bloklari (00_main ... 12_v26). Duzenleme burada yapilir.
- `devices.json` : onizlemeli cihaz listesi (slug, tur, marka, model, fiyat, gorsel klasoru).
- `build.py SHA` : src -> `bundle.js` (SHA = img/ klasorunun bulundugu commit).
- `loader.tpl` : ikas > Eklentiler > Scriptler "Betaguard tema" icine yapistirilan kisa yukleyici (`__SHA__` = bundle.js'in commit'i).

Yayin: 1) build.py, 2) commit+push, 3) loader.tpl'deki __SHA__'yi yeni commit ile degistirip ikas'a kaydet.
