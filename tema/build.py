"""tema/build.py SHA [--parcasiz] : tema/src/*.js -> tema/bundle.js (tek dosya, jsDelivr'dan yuklenir)

Yer tutucular:
  __DEVICES__  tema/devices.json
  __SHA__      komut satirindaki commit: parcasi olmayan gorseller icin eski, buyuk agacli taban
  __GP_SHAS__  tema/gorsel-parca.json icindeki parca commit'leri (40 haneli), __GP_IDX__ her cihazin parca harfi
               (devices.json sirasiyla). Gorseller bu kucuk agacli commit'lerden istenir: jsDelivr 403 vermez,
               yanit kalicidir. Bkz. araclar/gorsel_parca.py.
  __SITE__     site gorsellerinin (logo, giris gorseli, instagram) commit'i
--parcasiz verilirse (ya da gorsel-parca.json yoksa) hepsi __SHA__ tabanina doner.
Ayrica tema/ikas-snippet/guncel.html icindeki ana sayfa on yuklemesi ve favicon adresi ayni commit'lere esitlenir
(on yukleme, temanin isteyecegi adresle birebir ayni olmazsa bosa indirilir)."""
import sys, os, json, re, glob
H = os.path.dirname(os.path.abspath(__file__))
args = [a for a in sys.argv[1:] if not a.startswith('--')]
sha = args[0]
dev = json.load(open(os.path.join(H, 'devices.json'), encoding='utf8'))
A64 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
gp = None
gpf = os.path.join(H, 'gorsel-parca.json')
if '--parcasiz' not in sys.argv and os.path.isfile(gpf):
    gp = json.load(open(gpf, encoding='utf8'))
    assert len(gp['parca']) <= len(A64), 'parca sayisi harf sayisini asti'
    assert all(re.fullmatch('[0-9a-f]{40}', s) for s in gp['parca'] + [gp['site']])
shas = gp['parca'] if gp else []
idx = ''.join(A64[gp['klasor'][e[5]]] if gp and e[5] in gp['klasor'] else '-' for e in dev) if gp else ''
site = gp['site'] if gp else sha
parts = []
for f in sorted(glob.glob(os.path.join(H, 'src', '*.js'))):
    s = open(f, encoding='utf8').read().rstrip()
    if '__DEVICES__' in s:
        s = s.replace('__DEVICES__', json.dumps(dev, ensure_ascii=False))
    s = s.replace('__GP_SHAS__', json.dumps(shas)).replace('__GP_IDX__', idx).replace('__SITE__', site)
    s = s.replace('__SHA__', sha)
    assert '</script' not in s, f
    parts.append('/* ===== ' + os.path.basename(f) + ' ===== */\n' + s)
out = '/* Betaguard tema paketi - otomatik uretildi (tema/build.py). Kaynak: tema/src/ */\n' + '\n\n'.join(parts) + '\n'
for ph in ('__GP_SHAS__', '__GP_IDX__', '__SITE__', '__SHA__', '__DEVICES__'):
    assert ph not in out, ph
open(os.path.join(H, 'bundle.js'), 'w', encoding='utf8').write(out)
print('bundle.js', len(out), 'bytes,', len(parts), 'blok,', len(dev), 'cihaz,', (str(len(shas)) + ' gorsel parcasi, parcasiz cihaz: ' + str(idx.count('-'))) if gp else 'gorsel parcasi YOK (eski taban)')

# yukleyici: ana sayfa sahnesinin ilk iki gorseli ve favicon, temanin kullandigi commit'ten
HERO = 'kamera-sony-alpha-a7r-v'
sp = os.path.join(H, 'ikas-snippet', 'guncel.html')
t = open(sp, encoding='utf8').read()
hb = shas[gp['klasor'][HERO]] if gp and HERO in gp['klasor'] else sha
t2, n1 = re.subn(r'onizleme@[0-9a-f]+/img/' + HERO + '/', 'onizleme@' + hb + '/img/' + HERO + '/', t)
t2, n2 = re.subn(r'onizleme@[0-9a-f]+/img/site/favicon-', 'onizleme@' + site + '/img/site/favicon-', t2) if gp else (t2, 1)
assert n1 == 1 and n2 == 1, ('yukleyicide beklenen adres bulunamadi', n1, n2)
if t2 != t:
    open(sp, 'w', encoding='utf8').write(t2)
    print('yukleyici guncellendi: sahne on yuklemesi @' + hb[:8] + ', favicon @' + site[:8])
