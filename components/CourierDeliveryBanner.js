import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import PhoneIcon from "@/components/icons/PhoneIcon";

/**
 * Tüm sayfalarda: kurye GIF + paket servis mesajı + ara / menü CTA.
 * Masaüstünde metin solda, animasyon sağda; mobilde üstte görsel, altta metin.
 */
export default function CourierDeliveryBanner() {
  return (
    <section
      className="border-y border-[#d4af37]/20 bg-gradient-to-br from-amber-50/90 via-[#fff8f0] to-amber-100/40"
      aria-labelledby="courier-banner-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between md:gap-10 lg:gap-14">
          <div className="order-2 max-w-xl flex-1 text-center md:order-1 md:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6e0f14]/80">
              Paket servis
            </p>
            <h2
              id="courier-banner-heading"
              className="font-display mt-2 text-2xl font-bold leading-tight text-[#6e0f14] sm:text-3xl"
            >
              Hemen sipariş ver
            </h2>
            <p className="mt-3 text-base leading-relaxed text-stone-700 sm:text-lg">
              7/24 kurye hizmet; dakikalar içinde sıcacık çorbanız kapınızda.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d4af37] px-5 py-3 text-sm font-bold text-[#3d0a0c] shadow-md transition hover:bg-[#e8c547] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37] sm:px-6 sm:text-base"
              >
                <PhoneIcon className="h-5 w-5 shrink-0" />
                Sipariş için ara
              </a>
              <Link
                href="/menu"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#6e0f14] bg-white px-5 py-3 text-sm font-bold text-[#6e0f14] shadow-sm transition hover:bg-[#6e0f14] hover:text-white sm:px-6 sm:text-base"
              >
                Menüyü gör
              </Link>
            </div>
          </div>

          <div className="relative order-1 flex shrink-0 justify-center md:order-2 md:justify-end">
            <div className="relative h-44 w-44 sm:h-52 sm:w-52 md:h-56 md:w-56">
              <Image
                src="/images/kurye.gif"
                alt="Kurye ile paket servis — siparişiniz yola çıkıyor"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 768px) 200px, 224px"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
