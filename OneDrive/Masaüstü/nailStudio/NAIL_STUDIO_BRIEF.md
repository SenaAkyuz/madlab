# NAIL STUDIO — Web Sitesi Tasarım & İçerik Brief'i

> Bu dosya Claude Code için tek kaynak (single source of truth) brief'tir. Önce tamamını oku, sonra sırayla uygula.
> Proje klasörü: `C:\Users\Monster\OneDrive\Masaüstü\flowerShop` (mevcut klasörü kullan; içinde eski çiçekçi demosundan kalan dosyalar varsa nail projesiyle çakışanları temizle/üzerine yaz, ama önce klasörün içeriğine bak ve neyi sildiğini söyle).
> Amaç: Tırnak stüdyolarına **demo olarak pazarlanacak**, ekran görüntüsü alındığında çok etkileyici duran, tamamen dolu (boş bölüm yok) bir vitrin + katalog sitesi.

---

## 0. Kısa Özet

| Konu | Karar |
|---|---|
| Framework | Next.js (App Router, TypeScript) |
| Stil | Tailwind CSS + CSS değişkenleri (design token) |
| Animasyon | Framer Motion (az ve amaçlı) |
| Veri | Şimdilik yerel dosya: `data/` (TypeScript + JSON). **Sanity KURULMAYACAK** (bkz. Bölüm 12) |
| Görseller | `public/images/` altında yerel dosyalar (bkz. Bölüm 9) |
| Dil | Site metinleri **Türkçe**, marka adı ve bazı başlıklar İngilizce kalabilir. Fiyatlar ₺ |
| Çıktı | Responsive (mobil öncelikli), ekran görüntüsü almaya uygun, hızlı |

Sıra: (1) proje iskeleti → (2) design token + fontlar → (3) veri dosyaları → (4) görseller → (5) bileşenler → (6) sayfalar → (7) cila + test.

---

## 1. Marka Konsepti

- **Marka adı (demo):** `Reverie Nail Atelier` (tek yerden değiştirilebilsin: `config/site.ts`). Dükkana göre kolayca yeniden markalanabilir demo olması önemli: logo adı, slogan, telefon, adres, sosyal linkler, çalışma saatleri hepsi `config/site.ts` içinde.
- **Slogan:** "Parmak uçlarında küçük bir kaçış."
- **Alt slogan:** "Özenli bakım, kusursuz detaylar, acele etmeyen bir deneyim. İçeri gel, telefonu kapat, biraz kal."
- **Hissiyat:** Sakin, lüks, editoryal, kadınsı ama abartısız. Moda dergisi + butik spa karışımı. Sıcak mocha zemin, yumuşak lavanta ve gümüş vurgular, köşeleri çok yuvarlak kartlar, büyük ince serif başlıklar, el yazısı script aksanlar.
- **Hedef kitle:** 18–45 yaş kadın müşteriler; telefondan Instagram'dan gelip tasarım beğenip randevu alacaklar.
- **Ana iş:** Ziyaretçi tasarımları kategori kategori gezsin, beğendiği tırnağın fiyatını, süresini, özelliklerini görsün, "Randevu Al" desin.

---

## 2. Referans Analizi (Ne alınacak?)

Kullanıcı 5 referans görsel verdi. Hepsinden alınacak unsurlar:

1. **Reverie Nail Spa (Canva web sitesi) — ana iskelet:**
   - Üstte ince, sade navbar: sol logo (kalın condensed + script alt yazı), sağda küçük menü: HOME / MENU / RESULTS / ABOUT ME / BOOK.
   - Hero: büyük, **çok yuvarlak köşeli (≈48px) tam genişlik fotoğraf**, üstünde beyaz "WELCOME TO" + dev condensed başlık + script alt yazı, sağ altta **pastel pembe hap (pill) "BOOK HERE" butonu**.
   - Hero altı: ince, uzun, yüksek kontrastlı serif başlık: "A LITTLE *escape*, AT YOUR FINGERTIPS" (italik script/serif karışımı) + kısa paragraf.
   - 3'lü görsel şeridi: ortadaki daha küçük/alçak, **yuvarlak köşeli kartlar**, üzerinde dönen/yarı saydam script yazı ("a state of reverie") ve küçük pembe çiçek/yıldız sticker detayı.
   - Koyu gri-kahve pill "BOOK HERE" butonu, ardından "THINGS WE DO BEST / OUR SERVICES" bölümü.
2. **Acuity Booking Site (mobil/tek sütun):**
   - "Meet your artist" kartı: soluk gri-beyaz yuvarlak kart, solda metin (monospace font), sağda iki dikey-yuvarlak fotoğraf.
   - Hizmetler: **4'lü dikey "kapsül" kartlar** (üstte yüksek yuvarlak görsel, altında küçük pill etiket: GELS / NAIL ART / ACRYLIC / RUSSIAN, altında 2 satır küçük açıklama).
   - Çalışma saatleri + Konum: yan yana iki yumuşak gri yuvarlak kart.
   - İletişim pill'i: telefon, e-posta, instagram ikonlu tek satır.
   - **Randevu politikaları** (depozito, geç kalma, erteleme, ödeme) 2x2 minimal metin bloğu.
3. **Pembe/gül kurusu "Nail Studio" şablonu (3. görsel):**
   - Sıcak bej bölüm zemini, **dalgalı (scalloped) alt kenarlı** görsel kartlar, kart başlığı + 2 satır açıklama + fiyat, yuvarlak ikon rozetleri (kalp, çiçek) kartın alt orta kenarında.
   - "Öne çıkanlar" bölümü: **tam yuvarlak (daire) fotoğraflar**, altında başlık, açıklama, fiyat.
   - Koyu mürdüm/espresso footer, 3–4 sütun, yuvarlak ikonlu sosyal butonlar.
   - Gül kurusu (#A9697A civarı) pill butonlar.
4. **Nails by Amber / Services (4. görsel):**
   - Çok büyük, ince, yüksek kontrastlı serif **"SERVICES"** başlığı (görselin üstüne taşan).
   - Tam kesimli (köşesiz/az yuvarlak) 3'lü görsel grid, altında küçük caps etiket (CLASSIC MANICURE / NAIL ART / CUSTOM NAIL ART) ve alt çizgili "BOOK NOW" linki.
   - **"CUSTOMER LOVE"** — tam genişlik koyu görsel üzerine pastel pembe devasa serif başlık (yorumlar bölümü).
   - Footer'da 4'lü kare Instagram şeridi + konum/e-posta/sosyal ikon + ikinci menü sütunları.
   - Sayfa arkasında dev, soluk, taşan serif yazı ("…NAIL SALON") dekoratif watermark.
5. **Renk paleti Reels görseli (5. görsel) — sadece renk + his:**
   - Mocha Brown `#6F4E37`, Platinum Silver `#E5E4E2`, Pale Lavender `#E6E0F0`.
   - Koyu mocha zemin + **gümüş/krom (chrome) sıvı formlar** + lavanta dev italik serif başlık ("CHOREO CLASS" tarzı). Bu hissi **hero'da bir vurgu olarak** kullan (bkz. 6.2 "chrome blob").

**Karışım hedefi:** Reverie'nin yumuşak yuvarlak kartları + Amber'in dev editoryal başlıkları ve Customer Love bölümü + Acuity'nin kapsül hizmet kartları ve politika bloğu + gül kurusu şablonun scalloped fiyatlı kartları ve daire seçkisi + Reels'in mocha/lavanta/gümüş paleti ve krom formu.

---

## 3. Renk Paleti (Design Tokens)

Kullanıcının verdiği 3 ana renk **aynen** kullanılacak; uyumlu yardımcı renkler eklendi.

```css
:root {
  /* Ana (kullanıcı paleti) */
  --mocha:        #6F4E37;  /* ana koyu, hero zemini, başlık, buton */
  --platinum:     #E5E4E2;  /* ana açık gri, kart zemini */
  --lavender:     #E6E0F0;  /* vurgu, rozet, hover, bölüm zemini */

  /* Yardımcı (uyumlu ek tonlar) */
  --espresso:     #2B1D16;  /* footer, en koyu metin, koyu bölüm */
  --cocoa:        #4A3324;  /* ikincil koyu, hover koyu */
  --cream:        #F7F3EF;  /* sayfa zemini (hafif sıcak beyaz) */
  --sand:         #EADFD3;  /* scalloped kart bölüm zemini */
  --blush:        #F6D3DC;  /* Reverie'deki pastel pembe pill buton */
  --rosewood:     #A9697A;  /* gül kurusu vurgu buton / ikon */
  --lilac-deep:   #B7A6D6;  /* lavantanın koyusu: ikon, çizgi, focus */
  --chrome-hi:    #FFFFFF;
  --chrome-mid:   #CFC9D6;
  --chrome-lo:    #8E8697;  /* krom form gradient'i */

  /* Metin */
  --ink:          #2B1D16;
  --ink-soft:     #6B5A4E;
  --ink-on-dark:  #F7F3EF;
}
```

**Kullanım oranı:** %55 cream/platinum (açık alanlar), %25 mocha/espresso (koyu bölümler, footer, hero), %10 lavender, %7 blush/rosewood (butonlar, rozetler), %3 krom.

**Kontrast:** Metin/zemin WCAG AA (4.5:1). Mocha üstüne cream metin OK; blush buton üstüne espresso metin; lavender üstüne espresso metin. Beyaz metni açık zeminde kullanma.

**Gradient kuralı:** Dekoratif gradient yalnızca krom form ve hero'da çok hafif mocha→cocoa derinliği için. Başka yerde gradient kullanma.

---

## 4. Tipografi

Referans görsellerdeki fontların Google Fonts karşılıkları (hepsi `next/font/google` ile, `subsets: ['latin', 'latin-ext']` — **Türkçe karakterler (ğ, ş, ı, İ, ç, ö, ü) kesin test edilsin**):

| Rol | Font | Referans | Not |
|---|---|---|---|
| Dev/ince serif başlık | **Bodoni Moda** (italik dahil) | Amber "SERVICES", Reverie "A LITTLE escape", Choreo Class | Yüksek kontrast, `font-weight 400`, büyük `clamp()` boyut, dar harf aralığı (-0.02em) |
| Condensed kalın başlık / navbar / etiket | **Bebas Neue** (alternatif: Barlow Condensed 600) | Reverie logosu, "NAIL TECH" başlıkları, navbar | Uppercase, `letter-spacing: 0.04em` |
| Script (el yazısı) aksan | **Pinyon Script** (alternatif: Allura) | "Nail Spa", "a state of reverie" | Sadece 1–2 yerde: logo alt yazısı, görsel üstü süs yazı. Bol kullanma |
| Gövde metni | **Barlow** (400/500) | Reverie paragrafları | 16–17px, satır yüksekliği 1.65 |
| Monospace küçük metin | **DM Mono** (alternatif: Roboto Mono) | Acuity kartlarındaki mono yazı | Sadece "Sanatçıyla tanış" kartı, çalışma saatleri, politikalar, fiyat etiketlerinde |

**Tip ölçeği (clamp):**
- `display-xl`: `clamp(3.5rem, 11vw, 10rem)` — hero / "SERVICES" tarzı
- `display-l`: `clamp(2.5rem, 7vw, 6rem)` — bölüm başlıkları
- `h3`: `clamp(1.5rem, 3vw, 2.25rem)` — kart başlıkları
- `body`: 1rem–1.0625rem, `small`: 0.8125rem, `label`: 0.75rem uppercase `tracking-[0.12em]`

**Kurallar:**
- Başlık satır uzunluğu < 80 karakter, gövde paragraf max-width ≈ 60ch.
- Başlıkta tek kelimeyi renkli/italik yapma tekrarını abartma: "A LITTLE *escape*" Reverie referansı olduğu için **sadece hero altı slogan başlığında** serif+italik karışımı kullan.
- Her başlığın üstüne otomatik küçük etiket (eyebrow) ekleme; sadece referansta olan "THINGS WE DO BEST" yerinde kullan.
- Dev watermark yazı (Amber referansı): footer üstünde `NAIL ATELIER` metni, `opacity: .06`, `font-size: 20vw`, `pointer-events: none`.

---

## 5. Layout Sistemi, Şekil Dili, Gölgeler

- **Container:** max-width 1280px, yan padding mobil 20px / tablet 32px / masaüstü 48px.
- **Grid:** 12 kolon masaüstü, 4 kolon mobil. Bölümler arası dikey boşluk `clamp(4rem, 9vw, 8rem)`.
- **Köşe yarıçapları (hiyerarşi, hepsine aynı değer verme):**
  - Hero görseli: `48px` (mobilde `32px`)
  - Büyük kartlar (sanatçı, saatler, konum): `32px`
  - Kapsül hizmet kartları: `999px` üst / `28px` alt (uzun oval kapsül)
  - Galeri/tasarım kartları: `28px`
  - Pill buton/rozet: `999px`
  - Daire seçki görselleri: `50%`
  - Amber tarzı grid: `0–6px` (neredeyse köşesiz) — bilinçli kontrast
- **Gölge:** Çok az. Kartlarda `0 1px 0 rgba(43,29,22,.04)` + hover'da `0 18px 40px -18px rgba(43,29,22,.35)`. Standart gri SaaS gölgesi yok.
- **Scalloped (dalgalı) kenar:** Gül kurusu şablondaki kart alt kenarı için CSS `mask` ya da inline SVG ile tekrarlayan yarım daire deseni (`.scallop-bottom` utility sınıfı yaz).
- **Border:** 1px `rgba(111,78,55,.18)` ince çizgiler, bilgi taşıyorsa (ayırıcı, kart sınırı) kullan.
- **Metin hizalama:** Başlıklar ve hero **sol hizalı**, bölüm tanıtım paragrafı ve slogan başlığı **ortalı** (Reverie), kart içi metin sol hizalı, politika blokları sol hizalı.

---

## 6. Sayfa Yapısı ve Bölümler

Route'lar (App Router):

```
/                      Ana sayfa
/designs               Tüm tasarımlar (filtre + arama + sıralama)
/designs/[category]    Kategori sayfası (ör. /designs/chrome-ve-aynali)
/designs/[category]/[slug]   Tasarım detay sayfası
/services              Hizmetler & fiyat listesi
/about                 Sanatçı / stüdyo hakkında
/book                  Randevu (form + politikalar)
/contact               İletişim & konum
```

### 6.1 Navbar (sticky, ince)
- Sol: logo → "REVERIE" (Bebas Neue, kalın) + yanında küçük script "Nail Atelier" (Pinyon Script).
- Sağ (masaüstü): ANA SAYFA · TASARIMLAR · HİZMETLER · SONUÇLAR · HAKKIMDA · RANDEVU (son öğe blush pill buton).
- Scroll'da: arka plan `cream/80` + `backdrop-blur`, 1px alt çizgi.
- Mobil: sağda hamburger → tam ekran mocha overlay menü, devasa Bodoni linkler, altta sosyal ikonlar.
- Tasarımlar menüsünün üstüne gelince mega-menü: 6 kategori küçük dairesel önizleme + isim.

### 6.2 Hero (ana sayfa) — sitedeki **tek unutulmaz an**
- Tam genişlik, `48px` yuvarlak köşeli büyük kart, mocha→cocoa çok hafif zemin.
- Sağ yarıda **güzel bir el/tırnak fotoğrafı** (yuvarlak köşeli, hafif sağa taşan), onun etrafında **krom/gümüş sıvı blob** (5. referans): CSS/SVG ile yap — `--chrome-hi → --chrome-mid → --chrome-lo` radial + linear gradient, `filter: drop-shadow`, yavaş (20s) süzülen `transform` animasyonu. Görsel bulunamazsa SVG blob zaten yeterli. `prefers-reduced-motion` ise animasyon durur.
- Sol: üstte küçük "HOŞ GELDİN" (label), altında dev **Bebas Neue "REVERIE"** + altına script "Nail Atelier" (üst üste binen Reverie logosu hissi), altında 1 cümle alt metin.
- Sağ altta: **blush pill "RANDEVU AL"** + yanında ikincil lavender outline "TASARIMLARI GEZ".
- Hero altında yatay kayan (marquee, yavaş) kategori isimleri şeridi: `Chrome • French • Nail Art • Jel • Protez • Gelin` (Bodoni italik, mocha, `opacity .5`). Bu tek sürekli hareket; başka yerde marquee kullanma.

### 6.3 Slogan bloğu (ortalı)
- Bodoni, ortalı: "PARMAK UÇLARINDA *küçük bir kaçış*" (Reverie referansı), altında 2 satır paragraf, altında koyu mocha pill "RANDEVU AL".

### 6.4 "Bir Hâl Hikâyesi" 3'lü görsel şeridi (Reverie)
- 3 yuvarlak köşeli görsel; ortadaki daha küçük ve aşağıda (asimetrik hizalama, `translateY(32px)`).
- Üzerine biner: script yazı "a state of reverie" (beyaz, `rotate(-6deg)`, gölgeli) + pembe 8 yapraklı küçük çiçek SVG sticker.
- Görseller: cam bardakla tırnak, nail polish rafı/renk duvarı, nemli parlak ten + tırnak yakın çekimi (bkz. Bölüm 9 sorgular).

### 6.5 Kategori Kapsülleri (Acuity) — "Hizmetlerimiz / Tasarım Kategorileri"
- 6 adet **dikey kapsül kart** (masaüstü 6 sütun yatay kaydırılabilir `snap-x`, tablet 3, mobil 2): üstte yüksek yuvarlak görsel, altta lavender pill etiket (kategori adı), altında 2 satır açıklama. Tıklayınca `/designs/[category]`.
- Başlık: dev ince serif "KATEGORİLER" **Amber tarzı** — başlık görsellerin üzerine biraz taşsın (negatif margin).

### 6.6 Öne Çıkan Tasarımlar — **Scalloped fiyatlı kartlar** (gül kurusu şablon)
- Zemin `--sand`, 3 kolon. Her kart: görsel + **dalgalı alt kenar**, kart alt orta kenarında yuvarlak ikon rozeti (kalp/çiçek/yıldız, rosewood zemin), başlık (Bodoni), 2 satır açıklama, fiyat (DM Mono, "₺650'den").
- 6 kart (2 satır). Hover: görsel 1.03 scale + rozet hafif döner (yalnızca hover; otomatik animasyon yok).
- Sağ üstte "Tümünü gör" rosewood pill buton.

### 6.7 Daire Seçkisi — "Haftanın Favorileri"
- 3 **tam daire** fotoğraf (gül kurusu şablon), altında başlık, kısa açıklama, fiyat. Zemin cream. Arka plana çok soluk lavender büyük daire dekor.

### 6.8 Amber tarzı "SERVICES" Editoryal Grid
- Dev ince serif **"HİZMETLER"** başlığı (display-xl), altında 3'lü neredeyse köşesiz fotoğraf grid'i. Her fotoğrafın altında uppercase küçük etiket: `KLASİK MANİKÜR`, `NAIL ART`, `ÖZEL TASARIM`, altında alt çizgili "RANDEVU AL" linki (linkte ok ikonu yok).
- Fiyat listesi detayı için `/services` sayfasına link.

### 6.9 "Sanatçıyla Tanış" kartı (Acuity)
- `--platinum` zeminli 32px yuvarlak büyük kart; solda DM Mono metin, sağda iki dikey-yuvarlak görsel (biri portre, biri çalışma anı).
- Metin: "Merhaba, ben Olivia. Temiz, kişiye özel setlerde uzmanlaşmış sertifikalı bir nail artistiyim. Sade ve zarif tasarımlardan detaylı nail art'a kadar her randevu tırnağına, yaşam tarzına ve sevdiğin görünüme göre şekillenir."
- Altında 3 küçük istatistik pill'i: `8 yıl deneyim` · `4.000+ set` · `Sertifikalı`.

### 6.10 "SONUÇLAR / MÜŞTERİ SEVGİSİ" (Amber "CUSTOMER LOVE")
- Tam genişlik koyu foto zemini (espresso overlay %55), üstte dev **pastel pembe (blush) Bodoni** "MÜŞTERİ SEVGİSİ" (iki satırda, ikinci satır sağa kaydırılmış).
- Altında 4 yorum kartı (platinum, 28px köşe, kayar carousel — oklarla, otomatik değil): yıldızlar, 2–3 cümle yorum, isim + yaptırdığı hizmet.
- Yorum örnekleri (Bölüm 8.6'da).

### 6.11 Çalışma Saatleri + Konum (Acuity, yan yana)
- İki yumuşak platinum kart: saatler (Pzt–Cum 09:00–18:00, Cmt 11:00–18:00, Paz Kapalı) ve konum (adres, "Yol Tarifi" pill'i + stilize harita görseli; gerçek harita iframe ekleme).
- Altında iletişim pill'i: telefon · e-posta · @instagram.

### 6.12 Randevu Politikaları (Acuity 2x2)
- Depozito, Gecikme, Erteleme, Ödeme — mono metin, sol hizalı (metinler Bölüm 8.7).

### 6.13 Instagram Şeridi (Amber footer)
- 4 kare görsel, hover'da koyu overlay + instagram ikonu. "@reverienailatelier" başlığı.

### 6.14 Footer
- `--espresso` zemin, üstünde dev watermark yazı (opacity .06).
- 4 sütun: Logo + kısa paragraf · Menü · Kategoriler · İletişim; altta yuvarlak ikonlu sosyal butonlar (Instagram, TikTok, WhatsApp), telif satırı.

---

## 7. Tasarım Katalog Sayfaları (en önemli işlevsellik)

### 7.1 `/designs` — Tüm Tasarımlar
- Üstte dev başlık "TASARIMLAR", altında filtre çubuğu (yapışkan):
  - Kategori pill'leri (Tümü + 6 kategori) — seçili olan mocha dolu.
  - Filtreler: **Şekil** (Badem, Kare, Stiletto, Oval, Coffin), **Uzunluk** (Kısa, Orta, Uzun), **Fiyat aralığı** (slider), **Süre**.
  - Sıralama: Önerilen / Fiyat artan / Fiyat azalan / Yeni.
  - Arama kutusu (isim + etiket).
- Masonry benzeri 3–4 kolon grid (mobilde 2). Sayfalama yerine "Daha fazla göster" butonu.
- Filtre durumu URL query'sinde tutulsun (`?kategori=chrome&sekil=badem`).

### 7.2 Tasarım Kartı (`DesignCard`) — **en çok özen gösterilecek bileşen**
- Oran `4/5`, görsel `object-cover`, `28px` köşe.
- Görselin sol üstünde küçük cam efektli (backdrop-blur) kategori pill'i, sağ üstte kalp (favori) butonu (localStorage'a yazar).
- Alt kısımda cream zemin panel: tasarım adı (Bodoni 1.25rem), 1 satır özellik özeti (`Badem • Orta • Jel`), solda fiyat (DM Mono, `₺750'den`), sağda yuvarlak oka tıklanabilir alan.
- Hover: görsel yavaşça 1.04 scale, kart `translateY(-4px)`.
- Etiket rozeti (varsa): "Yeni" (lavender), "Çok Tercih Edilen" (blush), "Gelin" (platinum).

### 7.3 `/designs/[category]` — Kategori Sayfası
- Üstte kategorinin tam genişlik görselli banner'ı (32px köşe), dev serif kategori adı, 2–3 cümle açıklama, "bu kategoride X tasarım · ₺A–₺B" özet çipi.
- Altında o kategorinin tasarım grid'i (aynı filtre bileşeni, kategori kilitli).
- En altta "Diğer kategoriler" kapsül kartları.

### 7.4 `/designs/[category]/[slug]` — Tasarım Detay
- Sol: büyük ana görsel + altında 3–4 küçük galeri görseli (tıklayınca değişir, lightbox yok, basit).
- Sağ (masaüstünde sticky): kategori breadcrumb, başlık (display-l), fiyat ("₺750'den"), kısa açıklama, **Özellikler tablosu**:

| Özellik | Örnek |
|---|---|
| Şekil | Badem |
| Uzunluk | Orta |
| Teknik | Jel / Protez / Gel-X |
| Süre | 2 sa 15 dk |
| Kalıcılık | 3–4 hafta |
| Renkler | küçük renk noktaları (swatch) |
| Zorluk | ●●●○ |

  - "Fiyata dahil olanlar" listesi, "Ekstra seçenekler" (taş +₺50, ombre +₺100, uzatma +₺200) onay kutuları → toplam fiyat anlık güncellenir.
  - **RANDEVU AL** blush pill (tasarım adı ile `/book?tasarim=slug`'a gider) + "WhatsApp'tan sor" ikincil buton.
- Altta "Benzer Tasarımlar" 4'lü kart şeridi.

### 7.5 `/book` — Randevu
- Gerçek rezervasyon yok (demo): form (isim, telefon, tasarım seçimi, tarih, saat, not) gönderilince başarı kartı ("Talebin alındı. En kısa sürede WhatsApp'tan dönüş yapacağız.") gösterir. Form verisi sadece console'a/`/api/book` mock route'una yazılır.
- Yan tarafta politika kartları.

---

## 8. İçerik (Hazır Veri — Siteyi boş bırakma!)

Aşağıdaki veriyi `data/categories.ts` ve `data/designs.ts` içine **eksiksiz** yaz. Toplam **6 kategori × 6 tasarım = 36 tasarım**. Her tasarım için: `slug, name, categorySlug, price (başlangıç), duration (dk), shape, length, technique, colors[], tags[], badge?, description, includes[], extras[], images[]`.

### 8.1 Kategoriler

| Slug | Ad | Açıklama (2 cümle) | Kapsül görsel konsepti |
|---|---|---|---|
| `chrome-aynali` | Chrome & Aynalı | Sıvı metal parlaklığı, gümüş ve inci tonlarında aynalı finişler. Işığı yakalayan, ilk bakışta dikkat çeken setler. | Gümüş/inci chrome tırnak yakın çekim |
| `french-minimal` | French & Minimal | Zamansız, temiz ve zarif. Günlük hayata ve iş ortamına en uygun sade tasarımlar. | Nude/sütlü French tırnak |
| `nail-art` | Nail Art | Yıldız, çiçek, soyut çizgi ve el boyaması detaylar. Her parmakta ayrı bir hikâye. | Yıldızlı siyah detay, el çizimi |
| `jel-renkler` | Jel & Renkler | Uzun ömürlü jel oje ile pastel, toprak ve canlı tonlar. Bakımlı, parlak ve çatlamayan görünüm. | Mocha/lavanta/pembe düz renk jel |
| `protez-uzatma` | Protez & Uzatma | Akrilik, Gel-X ve polygel ile kusursuz şekil ve uzunluk. Badem, stiletto, coffin ve kare seçenekleri. | Uzun badem/coffin protez |
| `gelin-ozel` | Gelin & Özel Gün | Düğün, nişan ve davetler için taş, inci ve altın detaylı özel setler. Önceden deneme randevusu dahil. | İnci/taş detaylı gelin seti |

### 8.2 Tasarımlar (36 adet)

Tüm fiyatlar ₺, "başlangıç" fiyatıdır. Şekiller: Badem, Kare, Oval, Stiletto, Coffin. Süre dakika.

**Chrome & Aynalı**
| # | Ad | Fiyat | Süre | Şekil/Uzunluk | Teknik | Renkler | Rozet |
|---|---|---|---|---|---|---|---|
| 1 | Liquid Silver | 750 | 120 | Badem/Orta | Jel + krom pigment | Gümüş, platin | Çok Tercih Edilen |
| 2 | Pearl Mirror | 800 | 120 | Oval/Kısa | Jel + inci krom | İnci beyazı, lavanta | Yeni |
| 3 | Lavender Chrome | 780 | 120 | Badem/Orta | Jel + krom | Lavanta, gümüş | — |
| 4 | Mocha Glaze | 760 | 110 | Oval/Kısa | Jel + glazed donut | Mocha, krem | Çok Tercih Edilen |
| 5 | Rose Gold Aura | 820 | 130 | Stiletto/Uzun | Gel-X + krom | Gül altını, pudra | — |
| 6 | Midnight Mirror | 790 | 120 | Coffin/Orta | Jel + aynalı toz | Siyah, gümüş | — |

**French & Minimal**
| # | Ad | Fiyat | Süre | Şekil/Uzunluk | Teknik | Renkler | Rozet |
|---|---|---|---|---|---|---|---|
| 7 | Classic French | 550 | 90 | Kare/Kısa | Jel | Süt beyazı, nude | Çok Tercih Edilen |
| 8 | Milky Almond | 520 | 80 | Badem/Kısa | Jel | Sütlü nude | — |
| 9 | Micro French | 580 | 90 | Oval/Kısa | Jel | Nude, beyaz | Yeni |
| 10 | Soft Blush Gloss | 500 | 75 | Oval/Kısa | Jel | Pudra pembe | — |
| 11 | Cocoa French | 600 | 95 | Badem/Orta | Jel | Mocha, krem | — |
| 12 | Lavender French | 620 | 95 | Badem/Orta | Jel | Lavanta, beyaz | Yeni |

**Nail Art**
| # | Ad | Fiyat | Süre | Şekil/Uzunluk | Teknik | Renkler | Rozet |
|---|---|---|---|---|---|---|---|
| 13 | Starry Night | 900 | 140 | Badem/Orta | El boyaması | Şeffaf, siyah, altın | Çok Tercih Edilen |
| 14 | Wildflower | 880 | 135 | Oval/Orta | El boyaması | Pudra, lavanta, beyaz | — |
| 15 | Abstract Swirl | 850 | 130 | Badem/Orta | Jel + çizim | Mocha, krem, gümüş | Yeni |
| 16 | Cherry Charm | 870 | 130 | Kare/Kısa | El boyaması | Kırmızı, krem | — |
| 17 | Zebra Latte | 860 | 130 | Oval/Orta | El boyaması | Latte, kahve | — |
| 18 | Tiny Hearts | 820 | 120 | Oval/Kısa | Jel + sticker | Blush, beyaz | — |

**Jel & Renkler**
| # | Ad | Fiyat | Süre | Şekil/Uzunluk | Teknik | Renkler | Rozet |
|---|---|---|---|---|---|---|---|
| 19 | Mocha Brown | 450 | 70 | Oval/Kısa | Jel oje | Mocha | Çok Tercih Edilen |
| 20 | Pale Lavender | 450 | 70 | Oval/Kısa | Jel oje | Lavanta | — |
| 21 | Platinum Cloud | 450 | 70 | Kare/Kısa | Jel oje | Gri-gümüş | — |
| 22 | Cherry Wine | 470 | 70 | Badem/Kısa | Jel oje | Bordo | Yeni |
| 23 | Bubblegum Pink | 450 | 70 | Oval/Kısa | Jel oje | Pembe | — |
| 24 | Ombre Dusk | 560 | 90 | Badem/Orta | Jel ombre | Mocha→lavanta | — |

**Protez & Uzatma**
| # | Ad | Fiyat | Süre | Şekil/Uzunluk | Teknik | Renkler | Rozet |
|---|---|---|---|---|---|---|---|
| 25 | Almond Gel-X | 950 | 150 | Badem/Orta | Gel-X | Nude | Çok Tercih Edilen |
| 26 | Coffin Acrylic | 1000 | 160 | Coffin/Uzun | Akrilik | Pudra | — |
| 27 | Stiletto Glam | 1050 | 170 | Stiletto/Uzun | Akrilik | Bordo, gümüş | — |
| 28 | Square Short Set | 850 | 130 | Kare/Kısa | Polygel | Nude | — |
| 29 | Russian Manicure + Fill | 700 | 100 | Oval/Kısa | Rus manikürü + dolgu | Seçmeli | Yeni |
| 30 | Long Almond Chrome | 1150 | 180 | Badem/Uzun | Gel-X + krom | Lavanta, gümüş | — |

**Gelin & Özel Gün**
| # | Ad | Fiyat | Süre | Şekil/Uzunluk | Teknik | Renkler | Rozet |
|---|---|---|---|---|---|---|---|
| 31 | Pearl Bride | 1400 | 180 | Badem/Orta | Jel + inci | İnci, süt beyazı | Gelin |
| 32 | Crystal Veil | 1500 | 190 | Stiletto/Uzun | Gel-X + taş | Şeffaf, kristal | Gelin |
| 33 | Gold Leaf Romance | 1350 | 170 | Oval/Orta | Jel + altın yaprak | Nude, altın | — |
| 34 | Engagement Glow | 1200 | 150 | Badem/Orta | Jel | Pudra, gül altını | Yeni |
| 35 | Silk Ribbon | 1300 | 160 | Kare/Orta | Jel + 3D detay | Beyaz, blush | — |
| 36 | Evening Velvet | 1100 | 140 | Coffin/Orta | Jel + glitter | Mocha, altın | — |

> Her tasarım için `description` (2 cümle, Türkçe, spesifik: ne görünür, kime yakışır), `includes` (ör. "Tırnak bakımı, kütikül düzenleme, kalıcı oje, el masajı") ve `extras` (taş +50, ombre +100, uzatma/tırnak +200, nail art parmak başı +40) alanlarını **sen yaz**; her tasarım birbirinin kopyası olmasın.

### 8.3 Hizmetler (`data/services.ts`) — `/services` ve Acuity kapsüllerinde
`Jel Manikür ₺450 · Klasik Manikür ₺300 · Pedikür ₺550 · Protez Tırnak (tam set) ₺850 · Dolgu (Fill) ₺600 · Nail Art (parmak başı) ₺40+ · Tırnak Bakımı & Onarım ₺250 · Gelin Seti ₺1.200+ · Kaldırma (Removal) ₺150`. Her birine süre ve 1 cümle açıklama ekle.

### 8.4 Hakkında
2–3 paragraf stüdyo hikâyesi (steril malzeme, tek kullanımlık dosya, vegan/"toksinsiz" ürün dili ama sağlık iddiası yapma), değerler: *Hijyen · Detay · Sakin Ortam*.

### 8.5 SSS (Randevu sayfasında accordion)
Jel ne kadar kalır? Randevuya ne kadar önce gelinmeli? Kendi tasarımımı getirebilir miyim? Protez tırnak nasıl çıkarılır? Çocuk/refakatçi politikası? Ödeme yöntemleri?

### 8.6 Müşteri yorumları (8 adet, birbirinden farklı üslupta)
İsim + hizmet + 5 yıldız + 2–3 cümle, ör. "İlk defa 3 hafta boyunca tek bir çatlak olmadan taşıdım. Ortam o kadar sakin ki saatin nasıl geçtiğini anlamadım. — Selin K., Liquid Silver".

### 8.7 Randevu Politikaları (metin)
- **Depozito:** Randevuyu garantilemek için iadesiz ₺200 depozito alınır, hizmet bedelinden düşülür.
- **Gecikme:** Lütfen zamanında gel. 10 dakikadan sonra randevun ertelenebilir.
- **Erteleme:** Depozitonu kaybetmemek için en az 24 saat önceden haber ver.
- **Ödeme:** Bakiye randevu günü ödenir. Nakit, kart ve havale kabul edilir.

### 8.8 Site Bilgileri (`config/site.ts`, demo değerler)
Ad: Reverie Nail Atelier · Adres: "Örnek Mah. Güzellik Sk. No: 12, Muratpaşa / Antalya" · Tel: `+90 5xx xxx xx xx` · E-posta: `hello@reverienail.com` · Instagram: `@reverienailatelier` · Saatler Bölüm 6.11'deki gibi.

---

## 9. Görseller (Önemli — referanslar kadar güzel olmalı)

**Hedef:** Tüm siteyi dolduracak yaklaşık **60–70 görsel** (36 tasarım ana görseli + kategori/hero/galeri/sanatçı/instagram/yorum zemini). Görsellerin **ton uyumu** kritik: sıcak, yumuşak ışıklı, nötr-mocha/pudra/lavanta baskın, aşırı doygun/neon yok.

**Edinme sırası (token harcamadan):**
1. `scripts/fetch-images.mjs` yaz: Unsplash API (`UNSPLASH_ACCESS_KEY` env varsa) veya Pexels API (`PEXELS_API_KEY`) ile aşağıdaki sorguları arayıp en iyi dikey (portrait) sonucu indir, `public/images/<kategori>/<slug>.jpg` olarak kaydet, çıktıya yazar/lisans linkini `public/images/CREDITS.md`'ye ekle. API anahtarı yoksa kullanıcıya **tek satırda** nasıl anahtar alacağını söyle ve ilerle (adım 2).
2. Anahtar yoksa: internet erişimin varsa web aramasıyla **Unsplash/Pexels'in ücretsiz lisanslı** sayfalarından uygun görselleri bul ve indir. Telifli (Pinterest, Instagram, Canva şablon önizlemesi) görselleri **indirme/kullanma**; kullanıcının attığı referans görseller sadece tasarım ilhamı içindir.
3. Hiçbir şey bulunamazsa/indirilemezse: **`NailPlaceholder` bileşeni** (SVG): palet renkli zemin + stilize el/tırnak silüeti + krom gradient. Siteyi asla boş veya kırık görsel ikonuyla bırakma. Her `Image` bileşeni `onError`'da bu placeholder'a düşsün.
4. İsteğe bağlı: kullanıcı sonra kendi AI üretimli görsellerini aynı dosya adlarıyla `public/images/` altına atıp üzerine yazabilir. Dosya adı kuralı bunun için sabit olsun.

**Arama sorguları (İngilizce):**
- Hero: `manicured hands pastel nails soft light`, `nail art close up hand model`
- Chrome: `chrome nails mirror silver`, `pearl chrome nails`, `glazed donut nails`
- French: `french manicure nude`, `milky nails minimal`
- Nail art: `star nail art`, `floral nail art`, `abstract nail design`, `cherry nail art`
- Jel: `gel polish brown nails`, `lavender nails`, `pink gel nails`, `burgundy nails`
- Protez: `almond acrylic nails`, `coffin nails long`, `stiletto nails`
- Gelin: `bridal nails pearl`, `wedding nails crystal`, `gold leaf nails`
- Atmosfer: `nail salon interior minimal`, `nail polish bottles shelf`, `hand holding glass drink nails`, `nail technician working`, `glossy skin portrait beauty`
- Instagram şeridi: `nails flatlay`, `hands ring jewelry`

**Teknik:**
- `next/image` ile, `sizes` doğru, `placeholder="blur"` (küçük base64 blurDataURL üret), `priority` sadece hero.
- `next.config.js` içinde yerel dosyaları kullandığından uzak domain gerekmez; ama script `images.unsplash.com` indirmek için çalışır.
- Görselleri indirirken max 1600px genişliğe, ~250KB altına sıkıştır (sharp).
- Tüm görsellerde anlamlı Türkçe `alt` metni.

---

## 10. Teknik Mimari

```
flowerShop/
├─ app/
│  ├─ layout.tsx              (fontlar, metadata, Navbar/Footer)
│  ├─ page.tsx                (ana sayfa)
│  ├─ designs/page.tsx
│  ├─ designs/[category]/page.tsx
│  ├─ designs/[category]/[slug]/page.tsx
│  ├─ services/page.tsx
│  ├─ about/page.tsx
│  ├─ book/page.tsx
│  ├─ contact/page.tsx
│  └─ api/book/route.ts       (mock)
├─ components/
│  ├─ layout/ Navbar, MobileMenu, Footer, WatermarkText
│  ├─ home/ Hero, ChromeBlob, SloganBlock, TriptychStrip, CategoryCapsules,
│  │        FeaturedScalloped, CircleFavorites, ServicesEditorial, MeetArtist,
│  │        CustomerLove, HoursAndLocation, Policies, InstagramStrip
│  ├─ designs/ DesignCard, DesignGrid, FilterBar, DesignGallery, DesignSpecs, ExtrasCalculator
│  └─ ui/ Button (pill varyantları), Badge, SectionTitle, NailPlaceholder, Reveal
├─ data/ categories.ts, designs.ts, services.ts, reviews.ts, faq.ts
├─ config/site.ts
├─ lib/ data.ts (getAllDesigns, getDesignsByCategory, getDesign...), types.ts, format.ts (₺ formatı)
├─ styles/globals.css         (token'lar, utility sınıfları)
├─ scripts/fetch-images.mjs
└─ public/images/...
```

**Kritik mimari kural (Sanity için hazırlık):** Sayfalar/bileşenler **veriye asla doğrudan `data/*.ts` dosyalarından import ederek erişmesin**; hepsi `lib/data.ts` içindeki async fonksiyonlardan (`getCategories()`, `getDesigns({category, shape, ...})`, `getDesignBySlug()`) okusun. Böylece sonra sadece bu dosyanın içi Sanity GROQ sorgularıyla değiştirilecek, UI'a dokunulmayacak. `lib/types.ts` tipleri (Category, Design, Service, Review) Sanity şemasıyla birebir uyumlu tasarlansın.

**Performans/Kalite:**
- Server Components varsayılan; sadece filtre, carousel, favori, hesaplayıcı, mobil menü client.
- Lighthouse hedefi: Performance ≥ 90, Accessibility ≥ 95.
- `metadata` + OpenGraph (hero görseli), `sitemap.ts`, `robots.ts`.
- Klavye focus halkası (`--lilac-deep`, 2px offset), `prefers-reduced-motion` desteği, tüm interaktif alanlar ≥ 44px.
- Çevresel hareket (animasyon) kuralı: sayfa yüklenişinde **tek** koordineli hero girişi (başlık + görsel + blob sıralı), krom blob süzülmesi ve kategori marquee dışında otomatik animasyon yok. Kartlara/bölümlere "her şey aşağıdan fade-in" efekti **verme**. Hover/click kaynaklı geçişler serbest.

---

## 11. Tasarım Kalite Kontrol Listesi (bitirmeden önce)

- [ ] Hero ilk bakışta Reverie + krom blob hissini veriyor mu, ekran görüntüsünde etkileyici mi?
- [ ] Köşe yarıçapları hiyerarşik mi (hepsi aynı değil)?
- [ ] Palet: mocha/platinum/lavender baskın, ek renkler (blush, rosewood) sadece buton/rozet/ikonda mı?
- [ ] Tüm görseller aynı sıcak tonda, hiçbiri kırık/boş değil mi?
- [ ] Türkçe karakterler tüm fontlarda doğru mu? (ğ ş ı İ ç ö ü)
- [ ] 36 tasarımın hepsinin kartı, detay sayfası ve fiyatı var mı? Filtreler çalışıyor mu?
- [ ] Mobilde (375px) tüm bölümler düzgün, yatay kaydırma sadece kapsül/carousel'de mi?
- [ ] 1440px masaüstü ve 390px mobil için **ekran görüntüsü al**, gözden geçir, eksikleri düzelt (demo satışı için bu çok önemli).
- [ ] Süs ve etiket fazlalığı yok; her yazı bir iş yapıyor mu?
- [ ] `npm run build` hatasız, `npm run lint` temiz mi?

---

## 12. Sanity CMS — **ŞİMDİ KURMA**

- Bu demo aşamasında Sanity **kurulmayacak**, paket eklenmeyecek, `studio/` klasörü açılmayacak.
- Müşteri (dükkan) bağlandıktan sonra kurulacak. Gelecek plan (sadece bilgi):
  - Sanity Studio'da şemalar: `category` (ad, slug, açıklama, kapak görseli), `design` (ad, slug, kategori referansı, görseller[], fiyat, süre, şekil, uzunluk, teknik, renkler[], etiketler[], rozet, açıklama, dahil olanlar[], ekstralar[], yayında mı), `service`, `review`, `siteSettings` (ad, telefon, adres, saatler, sosyal linkler).
  - Dükkan sahibi paneli: görsel yükle, isim/açıklama/fiyat gir, yayınla → site otomatik güncellenir (ISR / `revalidateTag` webhook).
  - Geçiş: sadece `lib/data.ts` içeriği GROQ sorgularıyla değiştirilecek.
- Bu yüzden Bölüm 10'daki "veri erişim katmanı" kuralına **kesinlikle uy**.

---

## 13. Uygulama Sırası (Claude Code için)

1. Klasörü incele, çakışan eski çiçekçi dosyalarını raporla; Next.js (App Router, TS, Tailwind, ESLint) projesini kur/güncelle. Framer Motion, `sharp` ekle.
2. `globals.css` token'ları, `next/font` ayarları, Tailwind tema genişletmesi.
3. `config/site.ts`, `lib/types.ts`, `data/*` (36 tasarımın tamamı yazılı), `lib/data.ts`.
4. `scripts/fetch-images.mjs` + görselleri indir / `NailPlaceholder` fallback'i bağla.
5. `ui/` bileşenleri → `layout/` → `home/` bölümleri → `designs/` bileşenleri.
6. Sayfalar ve route'lar; filtre + URL query; detay sayfası ekstra hesaplayıcı.
7. Responsive ve erişilebilirlik cilası, ekran görüntüsü kontrolü, build/lint.
8. Bittiğinde: çalıştırma komutunu (`npm run dev`), eksik kalan/placeholder'a düşen görsellerin listesini ve görsel API anahtarı gerekiyorsa tek satırlık talimatı yaz.

**Önemli:** Bu brief'teki fiyatlar, isimler, adres ve yorumlar **demo içeriğidir**; sahte ödeme/rezervasyon entegrasyonu yapma. Gerçek kişi fotoğrafı iddiası ya da sahte sertifika/ödül yazısı ekleme.
