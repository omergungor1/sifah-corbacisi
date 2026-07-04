/** Site kök URL — production’da NEXT_PUBLIC_SITE_URL ile override edin */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://sifah-corbacisi.vercel.app";

const waText = encodeURIComponent("Merhaba, sipariş vermek istiyorum.");

export const BUSINESS = {
  name: "Şifah Çorba & Haşlama",
  address: "Fatih Mahallesi Velioğlu Caddesi 98N 34218 Bağcılar/İstanbul",
  phoneDisplay: "0555 011 01 52",
  phoneTel: "+905550110152",
  landlineDisplay: "0212 830 01 52",
  landlineTel: "+902128300152",
  whatsappUrl: `https://wa.me/905550110152?text=${waText}`,
  hours: "Sabah 06.00 gece 02.00",
  packageService: "Var",
  mapsUrl: "https://maps.app.goo.gl/Y9FR6g3njzVf4yX87",
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.756296345814!2d28.839551200000006!3d41.052458200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa505bafb9839%3A0x58863defdad3bbd1!2zxZ5pZmFoIMOHb3JiYSZIYcWfbGFtYQ!5e0!3m2!1str!2str!4v1775205188725!5m2!1str!2str",
};

/** Menüde görsel yoksa (ör. özel isim) */
export const DEFAULT_MENU_IMAGE = "/images/corba-1.jpg";

/** `public/menu` dosya adları (boşluk / Türkçe karakter için encode) */
const menuImg = (file) => encodeURI(`/menu/${file}`);

/**
 * Menü satırları: `public/menu` görselleriyle eşleştirildi.
 * Yeni görseli olmayan ürünler `public/images` yollarında kaldı.
 */
export const MENU_ITEMS = [
  { name: "Süzme Mercimek Çorbası", image: menuImg("Mercimek Çorbası.jpeg") },
  { name: "Yayla Çorbası", image: menuImg("Yayla Çorbası.jpeg") },
  { name: "Domates Çorbası", image: menuImg("Domates Çorbası.jpeg") },
  { name: "İskembe Çorbası", image: menuImg("İşkembe.jpeg") },
  { name: "Atom Çorbası", image: menuImg("Atom Çorbası.jpeg") },
  { name: "Dana Haşlama", image: menuImg("Dana Haşlama.jpeg") },
  { name: "Dana Et Kavurma", image: menuImg("Dana Et Kavurma.jpeg") },
  { name: "Kelle Paça", image: menuImg("Kelle Paça.jpeg") },
  { name: "Ezogelin Çorbası", image: menuImg("Ezogelin Çorbası.jpeg") },
  { name: "Karalahana Çorbası", image: menuImg("Karalahana Çorbası.jpeg") },
  { name: "Kelle Paça", image: menuImg("Kelle Paça.jpeg") },
  { name: "Kuzu Gerdan Çorbası", image: menuImg("Kuzu Gerdan Çorbası.jpeg") },
  { name: "Kuzu Gerdan Haşlama", image: menuImg("Kuzu Haşlama.jpeg") },
  { name: "Tavuk Suyu Çorbası", image: menuImg("Tavuk Suyu Çorbası.jpeg") },
  { name: "Çoban Salata", image: menuImg("Çoban salata.jpeg") },
];

export const FEATURED_COUNT = 6;

export const WHY_US = [
  {
    title: "Eski usul lezzet",
    text: "Doğal malzemeler ve sabırla kaynayan et suyu ile geleneksel tarifler.",
  },
  {
    title: "7/24 açık",
    text: "Gece gündüz sıcak çorba ve haşlama; yolcuya güç, hastaya şifa.",
  },
  {
    title: "Paket servis",
    text: "Evden çıkmadan sipariş; Bağcılar ve çevresine hızlı servis.",
  },
];
