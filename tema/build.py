"""tema/build.py SHA : tema/src/*.js -> tema/bundle.js (tek dosya, jsDelivr'dan yuklenir)
v26 icindeki __DEVICES__ ve __SHA__ yer tutuculari doldurulur. SHA = gorsellerin bulundugu commit."""
import sys, os, json, re, glob
H = os.path.dirname(os.path.abspath(__file__))
sha = sys.argv[1]
dev = json.load(open(os.path.join(H, 'devices.json'), encoding='utf8'))
parts = []
for f in sorted(glob.glob(os.path.join(H, 'src', '*.js'))):
    s = open(f, encoding='utf8').read().rstrip()
    if '__DEVICES__' in s:
        s = s.replace('__DEVICES__', json.dumps(dev, ensure_ascii=False))
    s = s.replace('__SHA__', sha)
    assert '</script' not in s, f
    parts.append('/* ===== ' + os.path.basename(f) + ' ===== */\n' + s)
out = '/* Betaguard tema paketi - otomatik uretildi (tema/build.py). Kaynak: tema/src/ */\n' + '\n\n'.join(parts) + '\n'
open(os.path.join(H, 'bundle.js'), 'w', encoding='utf8').write(out)
print('bundle.js', len(out), 'bytes,', len(parts), 'blok,', len(dev), 'cihaz')
