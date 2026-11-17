"""araclar/kapak_onizleme.py HEDEF_KLASOR desen [desen ...]
Kart kapaklari icin 400px onizleme uretir: img/<cihaz>/<desen>.webp -> HEDEF/img/<cihaz>/t/<desen>.webp
(tema/src/12_v26.js icindeki THUMB / THUMB2 listeleri bu dosyalari kullanir; yoksa tam boy gorsele duser)."""
import sys, os
from PIL import Image
H = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
out, pats = sys.argv[1], sys.argv[2:]
n = 0; total = 0
for d in sorted(os.listdir(os.path.join(H, 'img'))):
    for p in pats:
        src = os.path.join(H, 'img', d, p + '.webp')
        if not os.path.isfile(src): continue
        dst = os.path.join(out, 'img', d, 't', p + '.webp')
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        Image.open(src).convert('RGB').resize((400, 400), Image.LANCZOS).save(dst, 'WEBP', quality=76, method=6)
        n += 1; total += os.path.getsize(dst)
print(n, 'dosya,', round(total / 1e6, 1), 'MB')
