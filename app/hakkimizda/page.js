import { SITE_URL } from "@/lib/constants";
import OrderAndWhatsApp from "@/components/OrderAndWhatsApp";

export const metadata = {
  title: "Hakkımızda",
  description:
    "Şifah Çorba & Haşlama’nın hikâyesi: eski usul lezzetler, doğal malzemeler ve Bağcılar’daki şifa durağınız.",
  alternates: {
    canonical: "/hakkimizda",
  },
  openGraph: {
    url: `${SITE_URL}/hakkimizda`,
    title: "Hakkımızda | Şifah Çorba & Haşlama",
    description:
      "Eski usul lezzetleri modern şehir hayatında yaşatan bir gelenek.",
  },
  twitter: {
    title: "Hakkımızda | Şifah Çorba & Haşlama",
    description:
      "Eski usul lezzetleri modern şehir hayatında yaşatan bir gelenek.",
  },
};

const paragraphs = [
  "Şifah Çorba & Haşlama, eski usul lezzetlerin modern şehir hayatında kaybolmaması için doğmuş bir hikâyedir. Temeli, yıllar önce evlerde kaynayan şifa dolu kazanlara dayanır. Her tabakta sadece karın doyurmak değil, geçmişin sıcaklığını ve emeğini yaşatmak amaçlanır.",
  "Doğal malzemeler, sabırla kaynayan et suyu ve ustalıkla hazırlanan tariflerle Şifah; hastaya şifa, yolcuya güç, dost meclisine lezzet sunmak için kuruldu. Kısacası burası, bir çorbacıdan çok daha fazlası bir gelenek, bir hatıra ve bir lezzet durağıdır.",
];

const values = [
  {
    title: "Gelenek",
    text: "Tariflerimiz nesilden nesile aktarılan usullerle, acele etmeden pişirilir.",
  },
  {
    title: "Şeffaflık",
    text: "Malzemeyi ve süreci önemsiyoruz; sofranıza güvenle gelen bir tabak sunuyoruz.",
  },
  {
    title: "Erişilebilirlik",
    text: "7/24 açık adresimiz ve paket servisimizle gece gündüz yanınızdayız.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex min-h-0 flex-1 flex-col">
      <div className="relative flex flex-1 flex-col overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #6e0f14 0, transparent 45%), radial-gradient(circle at 80% 60%, #d4af37 0, transparent 40%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto flex w-full max-w-4xl flex-1 flex-col px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <h1 className="font-display text-4xl font-bold text-[#6e0f14] sm:text-5xl">
            Hakkımızda
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-stone-600">
            Bir kazanın başında başlayan hikâye, bugün Bağcılar’da sıcak bir
            durağa dönüştü.
          </p>

          <div className="mt-10 space-y-6 rounded-3xl border border-[#d4af37]/20 bg-white/90 p-8 shadow-sm backdrop-blur-sm sm:p-10">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-lg leading-relaxed text-stone-700 first:text-xl first:leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>

          <h2 className="font-display mt-14 text-2xl font-bold text-[#6e0f14] sm:text-3xl">
            Bizi tanımlayan üç değer
          </h2>
          <ul className="mt-8 grid flex-1 gap-6 pb-4 sm:grid-cols-3 sm:pb-8">
            {values.map(({ title, text }) => (
              <li
                key={title}
                className="flex flex-col rounded-2xl border border-[#d4af37]/15 bg-gradient-to-b from-white to-amber-50/40 p-6 shadow-sm"
              >
                <h3 className="font-display text-xl font-bold text-[#8b4513]">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-stone-600">{text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-auto rounded-2xl border border-[#d4af37]/25 bg-[#6e0f14] p-6 text-center sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#d4af37]">
              Sipariş &amp; bilgi
            </p>
            <p className="mt-2 text-amber-100/95">
              Menümüzü inceleyin veya doğrudan sipariş için arayın.
            </p>
            <div className="mt-6 flex justify-center">
              <OrderAndWhatsApp variant="bar" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
