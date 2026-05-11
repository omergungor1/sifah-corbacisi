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
  hours: "7/24",
  packageService: "Var",
  mapsUrl: "https://maps.app.goo.gl/Y9FR6g3njzVf4yX87",
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.756296345814!2d28.839551200000006!3d41.052458200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa505bafb9839%3A0x58863defdad3bbd1!2zxZ5pZmFoIMOHb3JiYSZIYcWfbGFtYQ!5e0!3m2!1str!2str!4v1775205188725!5m2!1str!2str",
};

/** Menüde görsel yoksa (ör. özel isim) */
export const DEFAULT_MENU_IMAGE = "/images/corba-1.jpg";

/**
 * Menü satırları: `public/images` dosya adlarıyla eşleştirildi.
 * TUZLAMA ve ŞEF'İN SPESİYELİ için ayrı görsel yok → DEFAULT_MENU_IMAGE.
 */
export const MENU_ITEMS = [
  { name: "Suzme Mercimek Çorbası", image: "/images/suzme-mercimek-corbasi.jpeg" },
  { name: "Yayla Çorbası", image: "/images/yayla-corbasi.jpeg" },
  { name: "Domates Çorbası", image: "/images/domates-corbasi.jpeg" },
  { name: "İskembe Çorbası", image: "/images/iskembe-corbasi.jpeg" },
  { name: "Atom Çorbası", image: "/images/atom-corbasi.jpeg" },
  { name: "Dana Haşlama", image: "/images/dana-haslama.jpeg" },
  { name: "Dana Kelle Paça Naturel", image: "/images/dana-kelle-paca-naturel.jpeg" },
  { name: "Dana Kelle Paça Terbiyeli", image: "/images/dana-kelle-paca-terbiyeli.jpeg" },
  { name: "Ezogelin Çorbası", image: "/images/ezogelin-corbasi.jpeg" },
  { name: "Karalahana Çorbası", image: "/images/karalahana-corbasi.jpeg" },
  { name: "Kuzu Kelle Paça", image: "/images/Kuzu kelle paça.jpeg" },
  { name: "Kuzu Gerdan Çorbası", image: "/images/kuzu-gerdan-corbası.jpeg" },
  { name: "Kuzu Gerdan Haşlama", image: "/images/kuzu-gerdan-haslama.jpeg" },
  { name: "Kuzu Paça Çorbası", image: "/images/kuzu-paca-corbasi.jpeg" },
  { name: "Sebze Çorbası", image: "/images/sebze-corbasi.jpeg" },
  { name: "Tavuk Suyu Çorbası", image: "/images/tavuksuyu-corbasi.jpeg" },
  { name: "Hayrabolu Tatlısı", image: "/images/hayrabolu-tatlisi.jpeg" },
  { name: "Zerde Tatlısı", image: "/images/zerde-tatlisi.jpeg" },
  // {
  //   name: "KELLE PAÇA İŞKEMBE",
  //   image: "/images/kelle-paca-iskembe-corbasi.jpg",
  // },
  // { name: "TUZLAMA", image: "/images/tuzlama-corbasi.webp" },
  // { name: "KUZU PÖÇ", image: "/images/kuzu-poc-corbasi.gif" },
  // {
  //   name: "HAŞLAMA OSMANLI",
  //   image: "/images/haslama-osmanli-corbasi.webp",
  // },
  // { name: "PAÇA SULTAN", image: "/images/paca-sultan-corbasi.jpg" },
  // { name: "MERCİMEK", image: "/images/mercimek-corbasi.jpg" },
  // { name: "EZOGELİN", image: "/images/ezogelin-corbasi.webp" },
  // { name: "TAVUKSUYU", image: "/images/tavuksuyu-corbasi.jpeg" },
  // { name: "MANTAR", image: "/images/mantar-corbasi.webp" },
  // { name: "TARHANA", image: "/images/tarhana-corbasi.webp" },
  // { name: "ŞEF'İN SPESİYELİ", image: DEFAULT_MENU_IMAGE },
  // { name: "ATOM SEBZE", image: "/images/sebze-corbasi.jpeg" },
  // { name: "DOMATES", image: "/images/domates-corbasi.avif" },
  // {
  //   name: "YAYLA DÜĞÜN ARABASI",
  //   image: "/images/yayla-dugun-arabasi-corbasi.webp",
  // },
  // { name: "4 KAŞIK", image: "/images/4-kasik-corbasi.jpeg" },
  // { name: "DİL", image: "/images/dil-corbasi.jpg" },
  // { name: "KUZU İNCİK", image: "/images/kuzu-incik-corbasi.avif" },
  // {
  //   name: "ŞEF'İN ÇOBAN KAVURMASI",
  //   image: "/images/coban-kavurma-corbasi.jpg",
  // },
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
