"""tema/yayin.py : bundle.js ve yukleyici snippet'i kucuk agacli "yayin" dalina koyar.

Neden: ana dalin agaci ~1.3 GB (gorseller). jsDelivr yeni bir ana commit'i ilk istekte gecici olarak
"Package size exceeded the configured limit of 50 MB" (403) ile reddedebiliyor. "yayin" dalindaki
commit'lerde yalniz tema/bundle.js ve tema/ikas-snippet/guncel.html bulunur (1 MB'in altinda),
bu yuzden jsDelivr hemen ve sorunsuz sunar.

Kullanim (depo kokunden):
    python3 tema/build.py <gorselSHA>     # tema/bundle.js uretir
    python3 tema/yayin.py                 # iki commit olusturur ve "yayin" dalina iter
Cikti:
    BUNDLE  = snippet'in yukledigi commit (…@BUNDLE/tema/bundle.js)
    SNIPPET = ikas'a yapistirilacak metnin commit'i (…@SNIPPET/tema/ikas-snippet/guncel.html)
Calisma agacina dokunmaz (gecici index kullanir); yalniz tema/ikas-snippet/guncel.html icindeki
bundle SHA'sini gunceller. Bu dosyayi ana dala ayrica commit'lemek gerekir.
"""
import os, re, subprocess, sys, tempfile

H = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SNIP = 'tema/ikas-snippet/guncel.html'
TRAILER = ('\n\nCo-Authored-By: Claude Fable 5.2 <noreply@anthropic.com>\n'
           'Claude-Session: https://claude.ai/code/session_01DfCkmKuhxuJvVy6au2jVsJ\n')


def git(*a, env=None, inp=None):
    e = dict(os.environ); e.update(env or {})
    r = subprocess.run(['git', '-C', H] + list(a), capture_output=True, text=True, env=e, input=inp)
    if r.returncode:
        sys.exit('git %s: %s' % (' '.join(a), r.stderr.strip()))
    return r.stdout.strip()


def tree(files):
    """files: {yol: blob} -> agac SHA (gecici index ile, calisma agacina dokunmadan)"""
    with tempfile.TemporaryDirectory() as t:
        env = {'GIT_INDEX_FILE': os.path.join(t, 'idx')}
        git('read-tree', '--empty', env=env)
        for p, b in files.items():
            git('update-index', '--add', '--cacheinfo', '100644,%s,%s' % (b, p), env=env)
        return git('write-tree', env=env)


def main():
    note = sys.argv[1] if len(sys.argv) > 1 else git('log', '-1', '--format=%h %s')
    git('fetch', '-q', 'origin', '+refs/heads/yayin:refs/remotes/origin/yayin') if 'refs/heads/yayin' in git('ls-remote', '--heads', 'origin', 'yayin') else None
    parent = subprocess.run(['git', '-C', H, 'rev-parse', '-q', '--verify', 'refs/remotes/origin/yayin'], capture_output=True, text=True).stdout.strip()
    bundle = git('hash-object', '-w', 'tema/bundle.js')
    old_snip = git('hash-object', '-w', SNIP)
    a = ['commit-tree', tree({'tema/bundle.js': bundle, SNIP: old_snip}), '-m', 'yayin: bundle (' + note + ')' + TRAILER]
    if parent:
        a += ['-p', parent]
    y1 = git(*a)
    s = open(os.path.join(H, SNIP), encoding='utf8').read()
    n = len(re.findall(r'onizleme@[0-9a-f]{8,40}/tema/bundle\.js', s))
    if n != 3:
        sys.exit('snippet icinde 3 bundle adresi bekleniyordu, bulunan: %d' % n)
    # 40 haneli SHA: jsDelivr bunu "commit" sayar (kalici, immutable); 8 haneliyi "dal" sayip 12 saatte bir yeniden cekiyordu
    s = re.sub(r'onizleme@[0-9a-f]{8,40}/tema/bundle\.js', 'onizleme@' + y1 + '/tema/bundle.js', s)
    open(os.path.join(H, SNIP), 'w', encoding='utf8').write(s)
    snip = git('hash-object', '-w', SNIP)
    y2 = git('commit-tree', tree({'tema/bundle.js': bundle, SNIP: snip}), '-p', y1, '-m', 'yayin: snippet -> ' + y1[:8] + TRAILER)
    git('push', '-q', 'origin', y2 + ':refs/heads/yayin')
    print('BUNDLE  ' + y1[:8] + '  https://cdn.jsdelivr.net/gh/BedirhanAkyz/betaguard-onizleme@' + y1 + '/tema/bundle.js')
    print('SNIPPET ' + y2[:8] + '  https://cdn.jsdelivr.net/gh/BedirhanAkyz/betaguard-onizleme@' + y2 + '/' + SNIP)


if __name__ == '__main__':
    main()
