import Image from "next/image";
import Link from "next/link";
import {
  BUSINESS,
  MENU_ITEMS,
  FEATURED_COUNT,
  WHY_US,
  SITE_URL,
} from "@/lib/constants";
import OrderAndWhatsApp from "@/components/OrderAndWhatsApp";
import SiirSection from "@/components/SiirSection";
import MapDirectionsLink from "@/components/MapDirectionsLink";

export const metadata = {
  title: {
    absolute: "Şifah Çorba & Haşlama | 7/24 Açık Çorbacı Bağcılar",
  },
  description:
    "Bağcılar’da 7/24 açık Şifah Çorba & Haşlama. Kelle paça, işkembe, tuzlama ve daha fazlası.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: SITE_URL,
    title: "Şifah Çorba & Haşlama | 7/24 Açık Çorbacı Bağcılar",
    description:
      "Bağcılar’da 7/24 açık Şifah Çorba & Haşlama. Kelle paça, işkembe, tuzlama ve daha fazlası.",
  },
  twitter: {
    title: "Şifah Çorba & Haşlama | 7/24 Açık Çorbacı Bağcılar",
    description:
      "Bağcılar’da 7/24 açık Şifah Çorba & Haşlama. Kelle paça, işkembe, tuzlama ve daha fazlası.",
  },
};

const featured = MENU_ITEMS.slice(0, FEATURED_COUNT);

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section
        className="relative overflow-hidden border-b border-[#d4af37]/20 bg-gradient-to-br from-[#4a0a0d] via-[#6e0f14] to-[#3d080a] text-amber-50"
        aria-labelledby="hero-heading"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#d4af37]/95">
              Bağcılar · 7/24 açık
            </p>
            <h1
              id="hero-heading"
              className="font-display mt-3 text-4xl font-bold leading-tight sm:text-5xl"
            >
              Gerçek lezzetin kaynadığı yer
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-amber-100/95">
              İstanbul’da çorbanın en sıcak hali. Her kaşıkta ustalık, her
              tabakta şifa.
            </p>
            <div className="mt-8">
              <OrderAndWhatsApp variant="prominent" />
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full max-lg:mx-auto max-lg:max-w-md">
            <Image
              src="/images/dana-haslama.jpeg"
              alt="Şifah Çorba & Haşlama — sıcak çorba kasesi"
              fill
              className="rounded-2xl object-cover shadow-2xl ring-2 ring-[#d4af37]/25"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section
        className="mx-auto w-full max-w-6xl flex-1 px-4 py-14 sm:px-6"
        aria-labelledby="featured-heading"
      >
        <h2
          id="featured-heading"
          className="font-display text-center text-3xl font-bold text-[#6e0f14] sm:text-4xl"
        >
          Çok beğenilen çorbalarımız
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-stone-600">
          En çok tercih edilen lezzetlerimizden bir seçki. Tüm çorba listemizi menü
          sayfasında görebilirsiniz.
        </p>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map(({ name, image }) => (
            <li
              key={name}
              className="overflow-hidden rounded-2xl border border-[#d4af37]/15 bg-white shadow-md transition hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={image}
                  alt={`${name} — Şifah Çorba`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-bold text-[#6e0f14]">
                  {name}
                </h3>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Link
            href="/menu"
            className="inline-flex rounded-full bg-[#d4af37] px-8 py-3 font-bold text-[#3d0a0c] shadow-md transition hover:bg-[#e8c547]"
          >
            Tüm menü
          </Link>
        </div>
      </section>

      <section
        className="border-y border-[#d4af37]/15 bg-gradient-to-b from-amber-50/90 to-[#fff8f0] py-14"
        aria-labelledby="why-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2
            id="why-heading"
            className="font-display text-center text-3xl font-bold text-[#6e0f14]"
          >
            Neden bizi seçmelisiniz?
          </h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-3">
            {WHY_US.map(({ title, text }) => (
              <li
                key={title}
                className="rounded-2xl border border-[#d4af37]/20 bg-white p-6 shadow-sm"
              >
                <h3 className="font-display text-xl font-bold text-[#8b4513]">
                  {title}
                </h3>
                <p className="mt-2 text-stone-600">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SiirSection />

      <section
        className="mx-auto w-full max-w-6xl flex-1 px-4 py-14 sm:px-6"
        aria-labelledby="map-preview-heading"
      >
        <h2
          id="map-preview-heading"
          className="font-display text-3xl font-bold text-[#6e0f14]"
        >
          Bizi ziyaret edin
        </h2>
        <p className="mt-2 max-w-2xl text-stone-600">{BUSINESS.address}</p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-[#d4af37]/20 shadow-lg ring-1 ring-black/5">
          <iframe
            title="Şifah Çorba & Haşlama konumu — Google Haritalar"
            src={BUSINESS.mapsEmbedSrc}
            width="600"
            height="450"
            className="aspect-video min-h-[280px] w-full border-0 sm:min-h-[360px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <MapDirectionsLink />
          <OrderAndWhatsApp variant="compact" />
        </div>
      </section>
    </main>
  );
}
