# -*- coding: utf-8 -*-
"""araclar/blog_seo2.py : SEO icin blog yazilari (model listeleri + rehberler) -> ikas/blog_seo2.json
Model listeleri tema/devices.json'dan uretilir; cihaz eklendikce yeniden calistirilip yazi guncellenir."""
import json, os, re, collections
H = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(H)
D = json.load(open(os.path.join(ROOT, 'tema', 'devices.json'), encoding='utf8'))
DEV = [dict(s=x[0], t=x[1], b=x[2], m=x[3]) for x in D]
BYM = {(d['b'], d['m']): d for d in DEV}

def nat(s):
    return [int(p) if p.isdigit() else p.lower() for p in re.split(r'(\d+)', s)]
def esc(s):
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;')
def a(d, full=True):
    return '<a href="/%s">%s</a>' % (d['s'], esc((d['b'] + ' ' + d['m']) if full else d['m']))
def links(lst):
    return '<p>' + ' · '.join(a(d) for d in sorted(lst, key=lambda d: nat(d['m']))) + '</p>'
def slug_of(b, m):
    return '/' + BYM[(b, m)]['s']
def groups(t):
    g = collections.OrderedDict()
    for d in DEV:
        if d['t'] == t: g.setdefault(d['b'], []).append(d)
    return sorted(g.items(), key=lambda kv: (-len(kv[1]), kv[0]))

posts = []

# ---------- 1) kamera modelleri ----------
HUBK = {'Sony': '/sony-kamera', 'Canon': '/canon-kamera', 'Nikon': '/nikon-kamera', 'Fujifilm': '/fujifilm-kamera', 'Panasonic': '/panasonic-kamera'}
gk = groups('K'); nk = sum(len(v) for _, v in gk)
h = ['<p>Betaguard kaplamaları her cihazın kendi ölçülerine göre üretilir; bu yüzden ilk iş, kameranı listede bulmak. Aşağıda kaplama (skin) ürettiğimiz bütün kamera gövdeleri marka marka duruyor: toplam %d model. Modelinin adına tıkladığında o kameranın sayfası açılır ve 39 deseni kendi kameranın görseli üzerinde görürsün.</p>' % nk,
     '<p>Dikkat edilecek tek şey sürüm ekleri: Mark II, II, R, S gibi ekler farklı bir gövde demektir. Emin değilsen önce <a href="/blog/dogru-kaplama-model-secimi">doğru modeli seçme rehberine</a> bak.</p>']
small = []
for b, lst in gk:
    if len(lst) < 5: small += lst; continue
    h.append('<h2>%s kamera kaplama modelleri</h2>' % esc(b))
    h.append('<p>%d model. Hepsini görselleriyle birlikte görmek için <a href="%s">%s kamera kaplamaları</a> sayfasına git.</p>' % (len(lst), HUBK[b], esc(b)))
    h.append(links(lst))
if small:
    h.append('<h2>Diğer markalar</h2>')
    h.append('<p>' + ' · '.join(a(d) for d in sorted(small, key=lambda d: (d['b'], nat(d['m'])))) + '</p>')
h.append('<h2>Modelin listede yoksa</h2>')
h.append('<p>Bu liste Kasım 2026 itibarıyla günceldir; yeni modeller eklendikçe güncelliyoruz. Kameranı bulamadıysan WhatsApp\'tan yaz, üretebiliyorsak hemen söyleyelim. Lens arıyorsan <a href="/blog/lens-kaplama-modelleri">lens kaplama modelleri</a>, drone ya da gimbal arıyorsan <a href="/blog/drone-gimbal-aksiyon-kamera-kaplama-modelleri">drone, gimbal ve aksiyon kamera modelleri</a> listesine bak. Kaplamanın ne olduğunu merak ediyorsan <a href="/blog/kamera-skin-nedir">kamera skin nedir</a> yazısı iyi bir başlangıç.</p>')
posts.append(dict(
    slug='kamera-kaplama-modelleri',
    title='Kamera Kaplama Modelleri: Sony, Canon, Nikon, Fujifilm Tam Liste',
    meta_title='Kamera Kaplama Modelleri: %d Model Tam Liste | Betaguard' % nk,
    meta='Betaguard\'ın kaplama (skin) ürettiği tüm kamera modelleri: Sony Alpha, Canon EOS, Nikon Z ve D, Fujifilm X, Panasonic Lumix. Modelini bul, 39 deseni üzerinde gör.',
    short='Kaplama ürettiğimiz %d kamera modelinin marka marka tam listesi.' % nk,
    cover='kapak_kamera.jpg', html='\n'.join(h)))

# ---------- 2) lens modelleri ----------
HUBL = {'Sony': '/sony-lens', 'Canon': '/canon-lens', 'Nikon': '/nikon-lens', 'Fujifilm': '/fujifilm-lens', 'Sigma': '/sigma-lens'}
gl = groups('L'); nl = sum(len(v) for _, v in gl)
h = ['<p>Lens kaplaması, lensin gövdesine ve halkalarına göre parça parça üretilir; odak ve zoom halkaları dönmeye devam eder, yazılar ve düğmeler açık kalır. Bunun için kaplamanın lensinle birebir aynı modele ait olması gerekir. Aşağıda kaplama (skin) ürettiğimiz %d lensin tamamı marka marka listeli. Lensinin adına tıkla, 39 deseni kendi lensinin görseli üzerinde gör.</p>' % nl,
     '<p>Lenslerde aynı odak uzaklığının birden fazla sürümü olur: II ve III ekleri, Art ya da Contemporary gibi seri adları, DG DN ve DG HSM gibi yapı ekleri ve bayonet (Sony E, Canon EF, Nikon Z) farklı gövde ölçüsü demektir. Lensinin tam adı ön halkasında ya da gövdesinde yazar; ayrıntısı <a href="/blog/dogru-kaplama-model-secimi">model seçimi rehberinde</a>.</p>']
small = []
for b, lst in gl:
    if len(lst) < 5: small += lst; continue
    h.append('<h2>%s lens kaplama modelleri</h2>' % esc(b))
    if b in HUBL: h.append('<p>%d model. Görselleriyle birlikte görmek için <a href="%s">%s lens kaplamaları</a> sayfasına git.</p>' % (len(lst), HUBL[b], esc(b)))
    else: h.append('<p>%d model.</p>' % len(lst))
    h.append(links(lst))
if small:
    h.append('<h2>Diğer markalar ve adaptörler</h2>')
    h.append('<p>' + ' · '.join(a(d) for d in sorted(small, key=lambda d: (d['b'], nat(d['m'])))) + '</p>')
h.append('<h2>Lensin listede yoksa</h2>')
h.append('<p>Bu liste Kasım 2026 itibarıyla günceldir. Lensini bulamadıysan WhatsApp\'tan yaz, üretebiliyorsak hemen söyleyelim. Kaplama ile kılıf arasında kararsızsan <a href="/blog/lens-kaplama-mi-lens-kilifi-mi">lens kaplama mı, lens kılıfı mı</a> yazısına bak; gövdeni de aynı desenle kaplatmak istersen <a href="/blog/kamera-kaplama-modelleri">kamera kaplama modelleri</a> listesi burada. Tüm lensler için <a href="/lens">lens kaplamaları</a> sayfasında arama yapabilirsin.</p>')
posts.append(dict(
    slug='lens-kaplama-modelleri',
    title='Lens Kaplama Modelleri: Sony, Canon, Nikon, Sigma, Tamron Tam Liste',
    meta_title='Lens Kaplama Modelleri: %d Lens Tam Liste | Betaguard' % nl,
    meta='Betaguard\'ın kaplama (skin) ürettiği tüm lensler: Sony FE, Canon RF ve EF, Nikon Z, Sigma Art, Tamron, Fujifilm XF. Lensini bul, 39 deseni üzerinde gör.',
    short='Kaplama ürettiğimiz %d lensin marka marka tam listesi.' % nl,
    cover='kapak_lens.jpg', html='\n'.join(h)))

# ---------- 3) drone, gimbal, aksiyon ----------
dr = [d for d in DEV if d['t'] == 'D']
ctrl = [d for d in dr if re.search(r'^(RC|FPV Remote|Goggles|FPV Goggles)', d['m'])]
drones = [d for d in dr if d not in ctrl]
gim = [d for d in DEV if d['t'] == 'G']; act = [d for d in DEV if d['t'] == 'A']
h = ['<p>Drone, gimbal ve aksiyon kameralar ekipmanın en çok yıpranan parçaları: dışarıda, elde ve çantada sürekli hareket halindeler. Aşağıda kaplama (skin) ürettiğimiz %d modelin tamamı var. Modelinin adına tıkla, 39 deseni kendi cihazının görseli üzerinde gör.</p>' % (len(dr) + len(gim) + len(act)),
     '<h2>DJI drone kaplama modelleri</h2>',
     '<p>%d drone. Görselleriyle birlikte görmek için <a href="/dji-drone">DJI drone kaplamaları</a> sayfasına git; seçim yaparken nelere bakacağını <a href="/blog/drone-kaplama-rehberi">drone kaplama rehberinde</a> anlattık.</p>' % len(drones),
     links(drones),
     '<h2>Kumanda ve gözlük kaplamaları</h2>',
     '<p>Drone\'la birlikte en çok yıpranan parça kumandadır. Drone ve kumandayı aynı desende kaplatırsan sepette set indirimi uygulanır.</p>',
     links(ctrl),
     '<h2>Gimbal kaplama modelleri</h2>',
     '<p>%d model: DJI RS ve Ronin serisi, Osmo Mobile, Zhiyun Crane ve Weebill. Tümü <a href="/gimbal">gimbal kaplamaları</a> sayfasında.</p>' % len(gim),
     '<p>' + ' · '.join(a(d) for d in sorted(gim, key=lambda d: (d['b'] != 'DJI', d['b'], nat(d['m'])))) + '</p>',
     '<h2>Aksiyon kamera kaplama modelleri</h2>',
     '<p>%d model: DJI Osmo Pocket ve Osmo Action, GoPro Hero, Insta360. DJI modelleri <a href="/dji-osmo">DJI Osmo kaplamaları</a>, hepsi <a href="/aksiyon-kamera">aksiyon kamera kaplamaları</a> sayfasında.</p>' % len(act),
     '<p>' + ' · '.join(a(d) for d in sorted(act, key=lambda d: (d['b'] != 'DJI', d['b'], nat(d['m'])))) + '</p>',
     '<h2>Modelin listede yoksa</h2>',
     '<p>Bu liste Kasım 2026 itibarıyla günceldir. Cihazını bulamadıysan WhatsApp\'tan yaz, üretebiliyorsak hemen söyleyelim. Kamera ve lens için <a href="/blog/kamera-kaplama-modelleri">kamera kaplama modelleri</a> ve <a href="/blog/lens-kaplama-modelleri">lens kaplama modelleri</a> listelerine bakabilirsin.</p>']
posts.append(dict(
    slug='drone-gimbal-aksiyon-kamera-kaplama-modelleri',
    title='Drone, Gimbal ve Aksiyon Kamera Kaplama Modelleri: Tam Liste',
    meta_title='Drone, Gimbal ve Aksiyon Kamera Kaplama Modelleri | Betaguard',
    meta='Betaguard\'ın kaplama (skin) ürettiği tüm DJI drone, kumanda, gimbal ve aksiyon kamera modelleri: Mini, Air, Mavic, Avata, RS, Osmo Pocket, GoPro ve Insta360.',
    short='Kaplama ürettiğimiz drone, kumanda, gimbal ve aksiyon kamera modellerinin tam listesi.',
    cover='kapak_drone.jpg', html='\n'.join(h)))

# ---------- 4) hediye rehberi ----------
h = """<p>Fotoğraf ya da video çeken birine hediye almak zor görünür: ekipman pahalı, zevkler belli, yanlış modeli almak da cabası. Aslında işin sırrı basit: onun zaten kullandığı ekipmanı daha keyifli, daha güvenli ya da daha "ona ait" hale getiren şeyler her zaman işe yarar. Yılbaşı, doğum günü ya da mezuniyet için küçükten büyüğe 12 fikir.</p>
<h2>Önce küçük bir dedektiflik: hangi kamerayı kullanıyor?</h2>
<p>Aksesuarların çoğu modele göre değişir. Kameranın modeli genellikle gövdenin ön yüzünde ya da üstünde, lensinki ise ön halkasında yazar. Ekipmanının bir fotoğrafını çekmen ya da sosyal medyada paylaştığı bir kareye bakman yeter. Sürüm eklerine dikkat et: "Mark II" ya da "II" farklı bir gövde demektir. Emin olamazsan <a href="/blog/dogru-kaplama-model-secimi">model eklerini anlattığımız yazıya</a> göz at.</p>
<h2>Küçük bütçeli ama gerçekten kullanılan hediyeler</h2>
<ul>
<li><strong>Lens temizlik seti:</strong> Körük, mikrofiber bez ve lens kalemi. Her çantada olması gereken, kimsenin kendine almaya üşendiği şey.</li>
<li><strong>Hafıza kartı ve kart kutusu:</strong> Yedek kart her zaman lazım. Kameranın desteklediği kart türünü (SD, microSD, CFexpress) kontrol et; hızlı bir kart video çekenleri ayrıca sevindirir.</li>
<li><strong>Yedek batarya:</strong> Uzun çekim günlerinin kurtarıcısı. Modele özeldir, o yüzden kamera modelini bilmen şart.</li>
<li><strong>Bilek askısı:</strong> Boyun askısını sevmeyenler için hafif ve pratik bir alternatif.</li>
</ul>
<h2>Orta bütçe: "bunu düşünmüşsün" dedirtenler</h2>
<ul>
<li><strong>Kişiye özel kamera kaplaması:</strong> Kameranın, lensin ya da drone'un modeline göre üretilen, 39 desen seçeneği olan bir kaplama. Cihazı çiziklerden korur, söküldüğünde iz bırakmaz ve ekipmanı başka hiçbir kameraya benzemeyen bir hale getirir. Modelini <a href="/kamera">kamera</a>, <a href="/lens">lens</a>, <a href="/drone">drone</a>, <a href="/gimbal">gimbal</a> ya da <a href="/aksiyon-kamera">aksiyon kamera</a> listesinden seçip deseni cihazın kendi görseli üzerinde görebilirsin.</li>
<li><strong>Omuz ya da boyun askısı:</strong> Kutudan çıkan askıyı değiştirmek, gün boyu kamera taşıyan biri için büyük konfor farkı yaratır.</li>
<li><strong>Mini tripod:</strong> Masa üstü çekimler, vlog ve uzun pozlama için çantada yer kaplamayan bir yardımcı.</li>
<li><strong>ND ya da polarize filtre:</strong> Manzara ve video çekenlerin vazgeçilmezi. Lensin filtre çapını bilmen gerekir; ön halkada ya da lens kapağının içinde milimetre olarak yazar.</li>
</ul>
<h2>Büyük bütçe ve özel günler</h2>
<ul>
<li><strong>Kamera çantası ya da sırt çantası:</strong> Ekipman büyüdükçe çanta küçük gelir. Kaç gövde ve lens taşıdığına göre seç.</li>
<li><strong>Sabit odaklı bir lens:</strong> 50mm f/1.8 gibi "ilk prime" lensler çoğu sistemde uygun fiyatlıdır ve fotoğrafa bakışı değiştirir. Bayoneti (Sony E, Canon RF, Nikon Z gibi) mutlaka doğrula.</li>
<li><strong>Atölye ya da fotoğraf gezisi:</strong> Eşya değil deneyim. Portre, sokak fotoğrafı ya da drone çekimi üzerine bir günlük atölye uzun süre hatırlanır.</li>
<li><strong>Çektiği bir karenin baskısı:</strong> En sevdiği fotoğrafını büyük boy bastırıp çerçeveletmek, belki de listedeki en kişisel hediye.</li>
</ul>
<h2>Drone ve video çekenler için ek fikirler</h2>
<p>Drone kullanan biri için ND filtre seti, iniş pedi ve yedek pervane her zaman işe yarar; drone'u ve kumandasını aynı desende kaplatmak da şık bir set olur. Gimbal ya da aksiyon kamera kullananlar için de modele özel kaplamalar var: <a href="/dji-drone">DJI drone</a>, <a href="/gimbal">gimbal</a> ve <a href="/dji-osmo">DJI Osmo</a> modellerine bakabilirsin.</p>
<h2>Hediye olarak kaplama alırken 4 ipucu</h2>
<ul>
<li><strong>Modeli doğru seç:</strong> Kaplama her cihazın ölçüsüne göre üretilir; bir üst ya da alt sürümün kaplaması uymaz. Kişiye özel üretildiği için iadesi de yoktur.</li>
<li><strong>Deseni tarzına göre seç:</strong> Sade sevenler için Carbon ve Mono Black, dikkat çekmek isteyenler için Royal Gold ya da Tactical serisi iyi gider. Kararsızsan <a href="/blog/desen-rehberi">desen rehberine</a> bak.</li>
<li><strong>Set yap:</strong> Kamera ve lensi ya da drone ve kumandayı birlikte kaplatırsan sepette set indirimi uygulanır.</li>
<li><strong>Zamanı hesapla:</strong> Siparişler 1-2 iş gününde kargoya verilir. Yılbaşı gibi yoğun dönemlerde son haftaya bırakma.</li>
</ul>
<p>Uygulaması da zor değil; hediye ettiğin kişiye <a href="/blog/kamera-kaplama-nasil-uygulanir">adım adım uygulama rehberini</a> göndermen yeter.</p>"""
posts.append(dict(
    slug='fotografciya-hediye-fikirleri',
    title='Fotoğrafçıya Hediye: Her Bütçeye 12 Fikir',
    meta_title='Fotoğrafçıya Hediye: Her Bütçeye 12 Fikir | Betaguard',
    meta='Fotoğraf ya da video çeken birine ne hediye alınır? Küçük bütçeden kişiye özel hediyeye 12 fikir: temizlik seti, askı, hafıza kartı, kamera kaplaması ve dahası.',
    short='Fotoğraf ya da video çeken birine ne hediye alınır? Küçükten büyüğe 12 fikir.',
    cover='kapak_hediye.jpg', html=h))

# ---------- 5) DJI Mini aksesuarlari ----------
h = """<p>Mini serisi kutudan çıktığı gibi uçmaya hazır gelir, ama birkaç küçük parça uçuş süresini, görüntü kalitesini ve drone'un ömrünü ciddi biçimde uzatır. DJI Mini 4 Pro ve Mini 5 Pro için, önem sırasına göre almaya değer 8 aksesuar.</p>
<h2>1. Yedek batarya ve şarj istasyonu</h2>
<p>Tek bataryayla sahaya çıkmak, en güzel ışıkta inişe geçmek demektir. İki yedek batarya ve hepsini sırayla dolduran şarj istasyonu, en çok hissedilen yatırımdır. Drone'u yeni alacaksan Fly More Combo paketinde bataryalar, şarj istasyonu ve çanta birlikte gelir; ayrı ayrı almaktan genellikle daha hesaplıdır.</p>
<h2>2. ND filtre seti</h2>
<p>Güneşli havada video çekerken enstantaneyi düşük tutmanın yolu ND filtredir; hareketler daha yumuşak ve sinematik görünür. Her modelin filtresi kendi kamerasına göre üretilir, o yüzden Mini 4 Pro ile Mini 5 Pro'nun filtreleri birbirinin yerine kullanılmaz.</p>
<h2>3. Hızlı bir microSD kart</h2>
<p>4K video için V30 (U3) sınıfı bir kart gerekir; yavaş kart çekimi yarıda kesebilir. Tek büyük kart yerine iki orta boy kart kullanmak, bir kart bozulduğunda bütün çekimi kaybetmemeni sağlar.</p>
<h2>4. Pervane koruyucu</h2>
<p>İç mekânda, ağaçların arasında ya da insanlara yakın uçacaksan pervane koruyucu hem drone'u hem çevreyi korur. Rüzgârda uçuşu biraz zorlaştırır; açık alanda çıkarıp uçmak daha rahattır.</p>
<h2>5. İniş pedi</h2>
<p>Mini serisinin gövdesi yere çok yakındır. Toz, kum ve ıslak çimen kalkış sırasında kameraya ve motorlara gider. Katlanır bir iniş pedi bu sorunu çözer.</p>
<h2>6. Yedek pervane</h2>
<p>Pervaneler sarf malzemesidir; ucunda çentik ya da eğrilik varsa uçuş sesi değişir ve görüntüde titreme başlar. Çantada bir takım yedek pervane ve küçük bir tornavida bulunsun.</p>
<h2>7. Gövde ve kumanda kaplaması</h2>
<p>Drone en çok çantaya girip çıkarken, kumanda ise elde yıpranır. Modele özel üretilen bir kaplama gövdeyi kılcal çiziklerden ve lekelerden korur, söküldüğünde iz bırakmaz; ikinci el satışta gövde temiz çıkar. Sensörler, kamera ve havalandırma menfezleri açık kalır. Parlak bir desen, drone'u havada ve çimende gözle takip etmeyi de kolaylaştırır.</p>
<p><a href="/dji-mini-4-pro-kaplama">DJI Mini 4 Pro kaplama</a> ve <a href="/dji-mini-5-pro-kaplama">DJI Mini 5 Pro kaplama</a> sayfalarında 39 deseni drone'un kendi görseli üzerinde görebilirsin. Kumanda için <a href="%(rc2)s">DJI RC 2</a> ve <a href="%(rcn)s">RC-N serisi</a> kaplamaları da var; drone ve kumandayı birlikte alırsan sepette set indirimi uygulanır.</p>
<h2>8. Taşıma çantası</h2>
<p>Drone, kumanda, bataryalar ve filtreler tek çantada durduğunda hem hazırlık kısalır hem parçalar birbirine sürtünmez. Sert kabuklu küçük bir çanta sırt çantasının içine de sığar.</p>
<h2>250 gram notu</h2>
<p>Mini serisini seçenlerin çoğu için 250 gramın altında kalmak önemlidir. Pervane koruyucu gibi aksesuarlar ve kaplama drone'a ağırlık ekler. Kaplama birkaç gram ağırlığındadır ve uçuş dengesini bozmaz; yine de uçtuğun ülkenin kurallarına göre bunu göz önünde bulundur.</p>
<p>Drone kaplaması seçerken nelere bakman gerektiğini <a href="/blog/drone-kaplama-rehberi">drone kaplama rehberinde</a> anlattık. Diğer modeller için <a href="/dji-drone">DJI drone kaplamaları</a> sayfasına bakabilirsin.</p>""" % dict(rc2=slug_of('DJI', 'RC 2'), rcn=slug_of('DJI', 'RC-N1 / N2 / N3'))
posts.append(dict(
    slug='dji-mini-4-pro-mini-5-pro-aksesuarlari',
    title='DJI Mini 4 Pro ve Mini 5 Pro Aksesuarları: Almaya Değer 8 Parça',
    meta_title='DJI Mini 4 Pro ve Mini 5 Pro Aksesuarları: 8 Öneri | Betaguard',
    meta='DJI Mini 4 Pro ve Mini 5 Pro için hangi aksesuarlar işe yarar? Yedek batarya, ND filtre, pervane koruyucu, hafıza kartı, iniş pedi ve kaplama için kısa rehber.',
    short='Mini 4 Pro ve Mini 5 Pro için önem sırasına göre almaya değer 8 aksesuar.',
    cover='kapak_mini.jpg', html=h))

# ---------- 6) Osmo Pocket 3 aksesuarlari ----------
h = """<p>Osmo Pocket 3 cebe sığan bir kamera, ama doğru birkaç parçayla küçük bir çekim setine dönüşüyor. Hangi aksesuarın ne işe yaradığını ve hangisini ne zaman almak gerektiğini kısaca anlatalım.</p>
<h2>Önce pakete bak: Creator Combo'da neler var?</h2>
<p>Creator Combo paketinde kablosuz mikrofon vericisi, batarya sapı, geniş açı lens, mini tripod ve taşıma çantası birlikte gelir. Kamerayı yeni alacaksan ve ses kaydı senin için önemliyse bu paket, parçaları tek tek almaktan genellikle daha hesaplıdır. Standart paketi aldıysan aşağıdaki parçaları ihtiyacına göre ekleyebilirsin.</p>
<h2>1. ND filtre seti</h2>
<p>Gündüz dışarıda video çekiyorsan en çok fark yaratan aksesuar ND filtredir. Enstantaneyi düşük tutmanı sağlar; yürürken ve hareketli sahnelerde görüntü daha doğal akar. Pocket 3'ün filtreleri mıknatısla takılır, saniyeler içinde değiştirilir.</p>
<h2>2. Geniş açı lens</h2>
<p>Kendini çekerken ya da dar mekânlarda kadraj dar gelebilir. Mıknatıslı geniş açı lens görüş alanını genişletir; vlog çekenlerin en çok kullandığı parçalardan biridir.</p>
<h2>3. Batarya sapı</h2>
<p>Sap hem çekim süresini uzatır hem de kamerayı tutmayı rahatlatır. Altındaki vida yuvası sayesinde tripoda da bağlanır. Uzun çekim günlerinde ilk alınacak parça.</p>
<h2>4. Kablosuz mikrofon</h2>
<p>Pocket 3'ün dahili mikrofonları iyidir, ama rüzgârda ve kalabalıkta yakaya takılan kablosuz bir mikrofonun yerini tutmaz. Kamera, uyumlu DJI mikrofon vericisine alıcı takmadan doğrudan bağlanabilir.</p>
<h2>5. Mini tripod</h2>
<p>Timelapse, masa başı çekim ve sabit röportaj kadrajları için gerekli. Vida yuvalı sapa ya da batarya sapına bağlanır, cepte taşınır.</p>
<h2>6. Hızlı microSD kart</h2>
<p>4K video için V30 (U3) sınıfı bir microSD kart kullan. Yavaş kartlar yüksek kare hızlı çekimlerde kaydı durdurabilir.</p>
<h2>7. Gövde kaplaması (skin)</h2>
<p>Pocket 3 gün içinde defalarca cebe ve çantaya girip çıkar; sap kısmı kısa sürede kılcal çiziklerle dolar. Modele özel üretilen bir kaplama gövdeyi korur, söküldüğünde iz bırakmaz ve kameraya kendi tarzını verir. Ekran, lens ve düğmeler açık kalır. <a href="/dji-osmo-pocket-3-kaplama">DJI Osmo Pocket 3 kaplama</a> sayfasında 39 deseni kameranın kendi görseli üzerinde görebilirsin.</p>
<h2>Hangi sırayla almalı?</h2>
<p>Dışarıda çok çekim yapıyorsan önce ND filtre ve batarya sapı; vlog çekiyorsan geniş açı lens ve mikrofon; kamerayı her gün yanında taşıyorsan kaplama ve bir taşıma kutusu. Hepsini birden almak gerekmiyor; eksikliğini hissettiğin parçadan başla.</p>
<p>Daha yeni modeli kullanıyorsan <a href="/dji-osmo-pocket-4-kaplama">Osmo Pocket 4 kaplama</a> da listede. Diğer modeller için <a href="/dji-osmo">DJI Osmo kaplamaları</a> sayfasına, kaplamanın ne olduğunu merak ediyorsan <a href="/blog/kamera-skin-nedir">kamera skin nedir</a> yazısına bakabilirsin.</p>"""
posts.append(dict(
    slug='dji-osmo-pocket-3-aksesuarlari',
    title='DJI Osmo Pocket 3 Aksesuarları: Hangileri Gerçekten İşe Yarar?',
    meta_title='DJI Osmo Pocket 3 Aksesuarları: İşe Yarayan 7 Parça | Betaguard',
    meta='Osmo Pocket 3 için hangi aksesuarlar almaya değer? ND filtre, geniş açı lens, batarya sapı, mikrofon, mini tripod ve kaplama (skin, sticker) hakkında kısa rehber.',
    short='Osmo Pocket 3 için hangi aksesuar ne işe yarar, hangisi ne zaman alınmalı?',
    cover='kapak_pocket.jpg', html=h))

# ---------- kontrol ----------
slugs = set(d['s'] for d in DEV)
KNOWN = {'kamera','lens','drone','gimbal','aksiyon-kamera','sony-kamera','canon-kamera','nikon-kamera','fujifilm-kamera','panasonic-kamera','sony-lens','canon-lens','nikon-lens','fujifilm-lens','sigma-lens','dji-drone','dji-osmo',
         'blog/drone-kaplama-rehberi','blog/kamera-skin-nedir','blog/uygulama-rehberi','blog/dogru-kaplama-model-secimi','blog/lens-kaplama-mi-lens-kilifi-mi','blog/kamera-kaplamasi-zarar-verir-mi','blog/kamera-kaplama-nasil-uygulanir','blog/desen-rehberi'}
KNOWN |= set('blog/' + p['slug'] for p in posts)
for p in posts:
    hrefs = re.findall(r'href="/([^"]*)"', p['html'])
    bad = [x for x in hrefs if x not in slugs and x not in KNOWN]
    assert not bad, (p['slug'], bad[:5])
    assert not re.search(r'kesim|kesil', p['html'] + p['title'] + p['meta'], re.I), p['slug']
    assert '?' not in ''.join(hrefs)
    print('%-48s %6d kr  %4d link  baslik %2d  meta %3d' % (p['slug'], len(p['html']), len(hrefs), len(p['meta_title']), len(p['meta'])))
allp = set(h for p in posts[:3] for h in re.findall(r'href="/([^"]*-kaplama)"', p['html']))
print('liste yazilarindaki urun linki:', len(allp), '/', len(slugs), 'eksik:', sorted(slugs - allp)[:5])
json.dump(posts, open(os.path.join(ROOT, 'ikas', 'blog_seo2.json'), 'w', encoding='utf8'), ensure_ascii=False, indent=1)
