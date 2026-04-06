import { BUSINESS, SITE_URL } from "@/lib/constants";
import OrderAndWhatsApp from "@/components/OrderAndWhatsApp";
import MapDirectionsLink from "@/components/MapDirectionsLink";

export const metadata = {
  title: "İletişim",
  description:
    "Şifah Çorba & Haşlama adres, telefon, çalışma saatleri ve harita. Bağcılar Fatih Mahallesi Velioğlu Caddesi.",
  alternates: {
    canonical: "/iletisim",
  },
  openGraph: {
    url: `${SITE_URL}/iletisim`,
    title: "İletişim | Şifah Çorba & Haşlama",
    description:
      "Adres, telefon ve harita ile bize ulaşın. 7/24 açık, paket servis mevcut.",
  },
  twitter: {
    title: "İletişim | Şifah Çorba & Haşlama",
    description:
      "Adres, telefon ve harita ile bize ulaşın. 7/24 açık, paket servis mevcut.",
  },
};

export default function ContactPage() {
  return (
    <main className="flex min-h-0 flex-1 flex-col">
      <div className="relative flex flex-1 flex-col overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 10%, #d4af37 0, transparent 35%), radial-gradient(circle at 10% 80%, #6e0f14 0, transparent 45%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <h1 className="font-display text-4xl font-bold text-[#6e0f14] sm:text-5xl">
            İletişim
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-stone-600">
            Soru ve siparişleriniz için bizi arayın, WhatsApp’tan yazın veya
            haritadan yol tarifi alın.
          </p>

          <div className="mt-10 flex flex-wrap justify-center rounded-2xl border border-[#d4af37]/25 bg-[#6e0f14] p-6 sm:p-8">
            <OrderAndWhatsApp variant="bar" />
          </div>

          <div className="mt-12 grid flex-1 gap-10 lg:grid-cols-2 lg:gap-12">
            <section
              aria-labelledby="contact-info-heading"
              className="flex flex-col rounded-3xl border border-[#d4af37]/20 bg-white/95 p-8 shadow-sm backdrop-blur-sm"
            >
              <h2
                id="contact-info-heading"
                className="font-display text-2xl font-bold text-[#6e0f14]"
              >
                İletişim bilgileri
              </h2>
              <dl className="mt-8 space-y-6 text-stone-700">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-stone-500">
                    Adres
                  </dt>
                  <dd className="mt-2 text-lg leading-snug">
                    {BUSINESS.address}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-stone-500">
                    Cep telefonu
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`tel:${BUSINESS.phoneTel}`}
                      className="text-xl font-bold text-[#6e0f14] underline-offset-2 hover:underline"
                    >
                      {BUSINESS.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-stone-500">
                    Sabit hat
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`tel:${BUSINESS.landlineTel}`}
                      className="text-xl font-bold text-[#6e0f14] underline-offset-2 hover:underline"
                    >
                      {BUSINESS.landlineDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-stone-500">
                    Çalışma saatleri
                  </dt>
                  <dd className="mt-2 text-lg font-semibold">{BUSINESS.hours}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wide text-stone-500">
                    Paket servis
                  </dt>
                  <dd className="mt-2 text-lg font-semibold">
                    {BUSINESS.packageService}
                  </dd>
                </div>
              </dl>
              <MapDirectionsLink className="mt-8" />
            </section>

            <section
              aria-labelledby="map-heading"
              className="flex flex-col rounded-3xl border border-[#d4af37]/20 bg-white/95 p-2 shadow-sm backdrop-blur-sm sm:p-3"
            >
              <h2
                id="map-heading"
                className="font-display px-4 pt-4 text-2xl font-bold text-[#6e0f14] sm:px-2 sm:pt-2"
              >
                Harita
              </h2>
              <div className="mt-4 flex-1 overflow-hidden rounded-2xl border border-[#d4af37]/15 shadow-inner">
                <iframe
                  title="Şifah Çorba & Haşlama — Google Haritalar gömülü harita"
                  src={BUSINESS.mapsEmbedSrc}
                  width="600"
                  height="450"
                  className="aspect-video min-h-[320px] w-full flex-1 border-0 lg:min-h-[400px]"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </section>
          </div>

          <section
            className="mt-12 mb-4 rounded-2xl border border-dashed border-[#d4af37]/35 bg-amber-50/50 p-6 text-center sm:p-8"
            aria-label="Sipariş hatırlatması"
          >
            <p className="font-display text-lg font-semibold text-[#6e0f14]">
              Paket servis ile kapınıza kadar
            </p>
            <p className="mx-auto mt-2 max-w-xl text-stone-600">
              Yoğun saatlerde bile mümkün olan en kısa sürede hazırlıyoruz.
              Menü için menü sayfasına göz atmayı unutmayın.
            </p>
            <div className="mt-6 flex justify-center">
              <OrderAndWhatsApp variant="compact" />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
