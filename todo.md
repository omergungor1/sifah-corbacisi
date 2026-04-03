Sen kıdemli bir Next.js (App Router) + TailwindCSS geliştiricisisin.

Amacın: Mahalle çorbacısı için ultra hızlı, SEO uyumlu, mobil-first bir web sitesi geliştirmek.

## TEKNİK GEREKSİNİMLER

- Next.js App Router kullan
- Tüm sayfalar SSG (Static Site Generation) olmalı
- Build sırasında tüm sayfalar HTML olarak generate edilmeli
- Vercel deploy uyumlu olmalı
- Lighthouse skorları yüksek olmalı (özellikle Performance + SEO)
- Tüm sayfalarda semantic HTML kullan (header, nav, main, section, footer)
- Tüm görseller <Image> (next/image) ile optimize edilmeli
- CLS, LCP, FCP optimize edilmeli
- Font olarak Google Fonts optimize şekilde yüklenmeli (display=swap)
- TailwindCSS ile mobil-first responsive tasarım yapılmalı
- Gereksiz JS kullanılmamalı (minimum client component)
- Metadata API ile her sayfaya özel title + description eklenmeli
- OpenGraph ve Twitter meta tagları eklenmeli
- Schema.org LocalBusiness JSON-LD eklenmeli

---

## SAYFALAR

### 1. Ana Sayfa (/)
İçerik:
- Hero alanı (başlık + kısa açıklama + “Hemen Ara” butonu)
- Öne çıkan çorbalar (3-6 ürün)
- “Neden bizi seçmelisiniz?” alanı
- Harita preview + yol tarifi butonu
- Footer

SEO:
- Title: "Şifah Çorba & Haşlama | 7/24 Açık Çorbacı Bağcılar"
- Description: "Bağcılar’da 7/24 açık Şifah Çorba & Haşlama. Kelle paça, işkembe, tuzlama ve daha fazlası."

---

### 2. Menü Sayfası (/menu)
- Tüm ürünleri listele
- Her ürün kartında:
  - Ürün adı
  - Placeholder görsel: /images/corba-1.jpg
- Grid layout responsive olmalı

---

### 3. Hakkımızda (/hakkimizda)
Metin:

"Şifah Çorba & Haşlama, eski usul lezzetlerin modern şehir hayatında kaybolmaması için doğmuş bir hikâyedir. Temeli, yıllar önce evlerde kaynayan şifa dolu kazanlara dayanır. Her tabakta sadece karın doyurmak değil, geçmişin sıcaklığını ve emeğini yaşatmak amaçlanır.

Doğal malzemeler, sabırla kaynayan et suyu ve ustalıkla hazırlanan tariflerle Şifah; hastaya şifa, yolcuya güç, dost meclisine lezzet sunmak için kuruldu. Kısacası burası, bir çorbacıdan çok daha fazlası bir gelenek, bir hatıra ve bir lezzet durağıdır."

---

### 4. İletişim (/iletisim)
İçerik:
- Adres
- Telefon (tıklanabilir)
- Çalışma saatleri
- Paket servis bilgisi
- Google Maps embed
- “Yol tarifi al” butonu (maps linkine gitsin)

MAP LINK:
https://maps.app.goo.gl/Y9FR6g3njzVf4yX87

EMBED:
(iframe aynen kullanılacak)

---

## İŞLETME BİLGİLERİ

- İşletme adı: Şifah Çorba & Haşlama
- Adres: Fatih Mahallesi Velioğlu Caddesi 98N 34218 Bağcılar/İstanbul
- Telefon: 0555 011 01 52
- Çalışma saatleri: 7/24
- Paket servis: Var

---

## MENÜ

Aşağıdaki ürünleri listele:

- KELLE PAÇA İŞKEMBE
- TUZLAMA
- KUZU PÖÇ
- HAŞLAMA OSMANLI
- PAÇA SULTAN
- MERCİMEK
- EZOGELİN
- TAVUKSUYU
- MANTAR
- TARHANA
- ŞEF'İN SPESİYELİ
- ATOM SEBZE
- DOMATES
- YAYLA DÜĞÜN ARABASI
- 4 KAŞIK
- DİL
- KUZU İNCİK
- ŞEF'İN ÇOBAN KAVURMASI

---

## TASARIM

- Temiz, modern ama esnaf sitesi hissi vermeli
- Renkler: sıcak tonlar (kırmızı, turuncu, krem)
- Büyük okunabilir fontlar
- Butonlar belirgin olmalı (özellikle telefon CTA)
- Mobilde sticky “Ara” butonu ekle

---

## NAVBAR

- Ana Sayfa
- Menü
- Hakkımızda
- İletişim

---

## FOOTER

- Adres
- Telefon
- Çalışma saatleri
- Google Maps link

---

## EKSTRA

- Sitemap.xml oluştur
- robots.txt ekle
- canonical URL kullan
- 404 sayfası oluştur
- Basit loading skeleton ekle

---

## PERFORMANS

- Tüm sayfalar static export edilebilir olmalı
- Gereksiz dependency ekleme
- Lazy loading kullan
- Image optimization kullan

---

Şimdi tüm projeyi dosya yapısıyla birlikte eksiksiz oluştur.








- map
    
    https://maps.app.goo.gl/Y9FR6g3njzVf4yX87
    
    Embedded
    
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.756296345814!2d28.839551200000006!3d41.052458200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa505bafb9839%3A0x58863defdad3bbd1!2zxZ5pZmFoIMOHb3JiYSZIYcWfbGFtYQ!5e0!3m2!1str!2str!4v1775205188725!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
- Firma Hakkında Bilgi:
    
    İşletme adı : Şifah Çorba&Haşlama
    
    Adres: Fatih Mahallesi Velioğlu Caddesi 98N 34218 Bağcılar/İstanbul
    
    Cep telefon : 0555 011 01 52
    
    Sabit Telefon: 1-2 güne belli olur
    
    Google Maps :https://maps.app.goo.gl/d5F7pnNx3DHyv31x5?g_st=ic
    
    Çalışma Saatleri: 7/24
    
    Paket servis : Var
    
- Menü:
    - KELLE PAÇA iSKEMBE
    - TUZLAMA
    - KUZU PÖÇ
    - HASLAMA OSMANLI
    - PAÇA SULTAN
    - MERCIMEK
    - EZOGELiN
    - TAVUKSUYU
    - MANTAR
    - TARHANA
    - SEF'iN SPESiYELi
    - ATOM SEBZE
    - DOMATES
    - YAYLA DÜGÜN ARABASI
    - 4 KASIK
    - DiL
    - KUZU iNCiK
    - SEF'IN ÇOBAN KAVURMASI
- Firma Hakkında Açıklama:
    
    Şifah Çorba & Haşlama, eski usul lezzetlerin modern şehir hayatında kaybolmaması için doğmuş bir hikâyedir. Temeli, yıllar önce evlerde kaynayan şifa dolu kazanlara dayanır. Her tabakta sadece karın doyurmak değil, geçmişin sıcaklığını ve emeğini yaşatmak amaçlanır.
    
    Doğal malzemeler, sabırla kaynayan et suyu ve ustalıkla hazırlanan tariflerle Şifah; hastaya şifa, yolcuya güç, dost meclisine lezzet sunmak için kuruldu. Kısacası burası, bir çorbacıdan çok daha fazlası bir gelenek, bir hatıra ve bir lezzet durağıdır.