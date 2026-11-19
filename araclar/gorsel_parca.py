#!/usr/bin/env python3
"""araclar/gorsel_parca.py [--it] : cihaz gorsellerini kucuk agacli commit'lere boler.

Neden: ana dalin agaci ~1.3 GB. jsDelivr boyle bir commit'teki dosyayi ilk kez cekerken yaklasik 6 istekte bir
"Package size exceeded the configured limit of 50 MB" (403) donuyor (olcum 19.11.2026: 3.636 istekte %15) ve kisa
SHA'yi "dal" saydigi icin onbellegi 12 saatte bir bosaltip yeniden cekiyor. Agaci 50 MB'in altinda olan commit'ler
(yayin, kapak-onizleme) ise her zaman sorunsuz sunuluyor; tam 40 haneli SHA ile istenince yanit kalici (immutable).

Ne yapar:
  - tema/devices.json'daki her gorsel klasorunu (img/<klasor>: 39 desen + bare + t/ onizlemeleri) ana daldan alir,
    kapak-onizleme dalindaki t/tactical-black ve t/tactical-grey onizlemelerini de ayni klasore ekler;
  - klasorleri en fazla LIMIT MB'lik parcalara boler, her parca icin yalniz o klasorleri iceren bir commit uretir;
  - site gorselleri (img/logo, img/site, img/insta, img/3d) icin ayri bir "site" commit'i uretir;
  - hepsini tek bir dizin commit'ine baglar (ebeveynleri = parcalar) ve --it verilirse "gorsel-parca" dalina iter;
  - tema/gorsel-parca.json dosyasini yazar (tema/build.py bunu okuyup pakete gomer).
Hicbir dosya kopyalanmaz: commit'ler depodaki mevcut blob'lari gosterir, calisma agacina dokunulmaz.
Ayni icerik ayni SHA'yi verir (sabit tarih). Onceki gorsel-parca.json varsa klasorlerin parcasi korunur; yeni
klasorler son parcaya (yer yoksa yeni parcaya) eklenir, boylece eski parcalarin adresleri degismez."""
import collections, json, os, subprocess, sys, tempfile

H = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(H, 'tema', 'gorsel-parca.json')
LIMIT = 30 * 1024 * 1024
SRC = 'HEAD'
KAPAK = 'origin/kapak-onizleme'
SITE = ['logo', 'site', 'insta', '3d']
BRANCH = 'gorsel-parca'
TRAILER = ('\n\nCo-Authored-By: Claude Fable 5.2 <noreply@anthropic.com>\n'
           'Claude-Session: https://claude.ai/code/session_01DfCkmKuhxuJvVy6au2jVsJ\n')
DATE = '2026-11-19T12:00:00+0300'


def git(*a, env=None, inp=None):
    e = dict(os.environ); e.update(env or {})
    r = subprocess.run(['git', '-C', H] + list(a), capture_output=True, text=True, env=e, input=inp)
    if r.returncode:
        sys.exit('git %s: %s' % (' '.join(a[:3]), r.stderr.strip()[:400]))
    return r.stdout.strip()


def ls(ref):
    """{klasor: [(mod, sha, boyut, yol)]}  yol = img/<klasor>/..."""
    by = collections.defaultdict(list)
    for l in git('ls-tree', '-r', '-l', ref, '--', 'img').splitlines():
        meta, p = l.split('\t'); mode, typ, sha, size = meta.split()
        by[p.split('/')[1]].append((mode, sha, int(size), p))
    return by


def tree(entries):
    with tempfile.TemporaryDirectory() as t:
        env = {'GIT_INDEX_FILE': os.path.join(t, 'idx')}
        git('read-tree', '--empty', env=env)
        git('update-index', '--index-info', env=env, inp=''.join('%s %s\t%s\n' % (m, s, p) for m, s, _, p in entries))
        return git('write-tree', env=env)


def commit(tr, msg, parents=()):
    env = {'GIT_AUTHOR_DATE': DATE, 'GIT_COMMITTER_DATE': DATE}
    a = ['commit-tree', tr, '-m', msg + TRAILER]
    for p in parents:
        a += ['-p', p]
    return git(*a, env=env)


def main():
    push = '--it' in sys.argv
    dev = json.load(open(os.path.join(H, 'tema', 'devices.json'), encoding='utf8'))
    folders = sorted(set(e[5] for e in dev))
    head, kap = ls(SRC), ls(KAPAK)
    files = {}
    for f in folders:
        if f not in head:
            sys.exit('gorsel klasoru yok: ' + f)
        have = set(e[3] for e in head[f])
        files[f] = sorted(head[f] + [e for e in kap.get(f, []) if e[3] not in have], key=lambda e: e[3])
    size = {f: sum(e[2] for e in files[f]) for f in folders}

    # parcalara dagit: onceki dagilim korunur
    prev = {}
    if os.path.isfile(OUT):
        prev = json.load(open(OUT, encoding='utf8')).get('klasor', {})
    groups = collections.defaultdict(list)
    for f in folders:
        if f in prev:
            groups[prev[f]].append(f)
    n = (max(groups) + 1) if groups else 0
    for f in folders:
        if f in prev:
            continue
        if n and sum(size[x] for x in groups[n - 1]) + size[f] <= LIMIT:
            groups[n - 1].append(f)
        else:
            groups[n].append(f); n += 1
    for i in range(n):
        tot = sum(size[x] for x in groups[i])
        if tot > 45 * 1024 * 1024:
            sys.exit('parca %d cok buyuk: %.1f MB' % (i, tot / 1048576))

    shas = []
    for i in range(n):
        fs = sorted(groups[i]); ent = [e for f in fs for e in files[f]]
        tot = sum(e[2] for e in ent)
        c = commit(tree(ent), 'gorsel parca %02d: %d klasor, %d dosya, %.1f MB (%s .. %s)' % (i, len(fs), len(ent), tot / 1048576, fs[0], fs[-1]))
        shas.append(c)
        print('parca %02d  %s  %3d klasor %5d dosya %5.1f MB  %s .. %s' % (i, c[:8], len(fs), len(ent), tot / 1048576, fs[0], fs[-1]))
    sent = [e for s in SITE for e in sorted(head.get(s, []), key=lambda e: e[3])]
    site = commit(tree(sent), 'gorsel site: %s (%d dosya, %.2f MB)' % (', '.join('img/' + s for s in SITE), len(sent), sum(e[2] for e in sent) / 1048576))
    print('site      %s  %d dosya %.2f MB' % (site[:8], len(sent), sum(e[2] for e in sent) / 1048576))

    data = {'aciklama': 'araclar/gorsel_parca.py uretir; elle duzenleme. parca[i] = img/<klasor> dosyalarini tasiyan kucuk agacli commit.',
            'kaynak': git('rev-parse', SRC), 'site': site, 'parca': shas,
            'klasor': {f: i for i in range(n) for f in sorted(groups[i])}}
    data['klasor'] = dict(sorted(data['klasor'].items()))
    txt = json.dumps(data, ensure_ascii=False, separators=(',', ':'))
    changed = (not os.path.isfile(OUT)) or open(OUT, encoding='utf8').read() != txt
    open(OUT, 'w', encoding='utf8').write(txt)
    print('tema/gorsel-parca.json', 'guncellendi' if changed else 'ayni', '|', n, 'parca,', len(folders), 'klasor,', round(sum(size.values()) / 1048576, 1), 'MB')

    # dizin commit'i: butun parcalar tek daldan ulasilabilir kalsin
    blob = git('hash-object', '-w', OUT)
    with tempfile.TemporaryDirectory() as t:
        env = {'GIT_INDEX_FILE': os.path.join(t, 'idx')}
        git('read-tree', '--empty', env=env)
        git('update-index', '--add', '--cacheinfo', '100644,%s,gorsel-parca.json' % blob, env=env)
        itree = git('write-tree', env=env)
    par = []
    r = subprocess.run(['git', '-C', H, 'rev-parse', '-q', '--verify', 'refs/remotes/origin/' + BRANCH], capture_output=True, text=True).stdout.strip()
    if r:
        par.append(r)
    if r and git('rev-parse', r + '^{tree}') == itree:
        idx = r; print('dizin ayni, yeni commit yok')
    else:
        idx = commit(itree, 'gorsel parca dizini: %d parca + site' % n, par + shas + [site])
    print('DIZIN', idx)
    if push:
        git('push', '-q', 'origin', idx + ':refs/heads/' + BRANCH)
        git('fetch', '-q', 'origin', '+refs/heads/%s:refs/remotes/origin/%s' % (BRANCH, BRANCH))
        print('itildi: origin/' + BRANCH)
    else:
        print('(itmek icin --it)')


if __name__ == '__main__':
    main()
