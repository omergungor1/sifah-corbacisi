import Image from "next/image";
import Link from "next/link";
import { MENU_ITEMS, SITE_URL } from "@/lib/constants";
import OrderAndWhatsApp from "@/components/OrderAndWhatsApp";

export const metadata = {
  title: "Menü",
  description:
    "Şifah Çorba & Haşlama menüsü: kelle paça, işkembe, tuzlama, mercimek, ezogelin ve tüm çorba çeşitleri.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    url: `${SITE_URL}/menu`,
    title: "Menü | Şifah Çorba & Haşlama",
    description:
      "Tüm çorba ve haşlama çeşitlerimizi inceleyin. Bağcılar’da 7/24 hizmet.",
  },
  twitter: {
    title: "Menü | Şifah Çorba & Haşlama",
    description:
      "Tüm çorba ve haşlama çeşitlerimizi inceleyin. Bağcılar’da 7/24 hizmet.",
  },
};

export default function MenuPage() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="font-display text-4xl font-bold text-[#6e0f14] sm:text-5xl">
          Menümüz
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-stone-600">
          Geleneksel tariflerle hazırlanan çorba ve haşlama çeşitlerimiz. Sipariş
          ve bilgi için telefon veya WhatsApp üzerinden ulaşın.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <OrderAndWhatsApp variant="compact" />
        </div>

        <ul className="mt-12 grid flex-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MENU_ITEMS.map(({ name, image }) => (
            <li
              key={name}
              className="overflow-hidden rounded-2xl border border-[#d4af37]/15 bg-white shadow-md transition hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={image}
                  alt={`${name} — Şifah Çorba & Haşlama`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h2 className="font-display text-lg font-bold text-[#6e0f14]">
                  {name}
                </h2>
              </div>
            </li>
          ))}
        </ul>

        <section
          className="mt-14 rounded-3xl border border-[#d4af37]/25 bg-gradient-to-br from-[#6e0f14] to-[#4a0a0d] p-8 text-center text-amber-50 sm:p-10"
          aria-label="Sipariş çağrısı"
        >
          <h2 className="font-display text-2xl font-bold text-[#f5e6a8]">
            Karar verdiniz mi?
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-amber-100/90">
            Siparişinizi hemen iletin; 7/24 hattımız ve WhatsApp hattımız açık.
          </p>
          <div className="mt-8 flex justify-center">
            <OrderAndWhatsApp variant="prominent" />
          </div>
          <div className="mt-8">
            <Link
              href="/iletisim"
              className="text-sm font-semibold text-[#d4af37] underline-offset-4 hover:underline"
            >
              Adres ve harita için iletişim sayfası
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
