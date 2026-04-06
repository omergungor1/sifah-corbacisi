import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import PhoneIcon from "@/components/icons/PhoneIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import MenuListIcon from "@/components/icons/MenuListIcon";

const baseBtn =
  "inline-flex items-center justify-center gap-2 rounded-full font-bold shadow-md transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const waRoundBase =
  "inline-flex shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition hover:bg-[#20bd5a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] active:scale-[0.98]";

export default function OrderAndWhatsApp({
  variant = "compact",
  className = "",
}) {
  if (variant === "prominent") {
    const pill =
      `${baseBtn} min-h-[2.75rem] w-full min-w-0 justify-center px-3 py-2.5 text-sm sm:px-4 sm:text-base`;
    return (
      <div className={`flex w-full flex-col items-center ${className}`}>
        <p className="mb-3 w-full text-center text-sm font-semibold leading-snug text-inherit sm:mb-3.5 sm:text-base">
          Sipariş için arayın
        </p>
        <div
          className="mx-auto grid w-full max-w-xl grid-cols-2 gap-2 sm:max-w-2xl sm:gap-3 md:max-w-3xl"
          role="group"
          aria-label="İletişim ve menü"
        >
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className={`${pill} bg-[#d4af37] font-bold tabular-nums text-[#3d0a0c] hover:bg-[#e8c547] focus-visible:outline-[#d4af37]`}
            aria-label={`Cep telefonu ${BUSINESS.phoneDisplay}`}
          >
            <PhoneIcon className="h-5 w-5 shrink-0" />
            {BUSINESS.phoneDisplay}
          </a>
          <a
            href={`tel:${BUSINESS.landlineTel}`}
            className={`${pill} bg-[#d4af37] font-bold tabular-nums text-[#3d0a0c] hover:bg-[#e8c547] focus-visible:outline-[#d4af37]`}
            aria-label={`Sabit hat ${BUSINESS.landlineDisplay}`}
          >
            <PhoneIcon className="h-5 w-5 shrink-0" />
            {BUSINESS.landlineDisplay}
          </a>
          <a
            href={BUSINESS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${pill} bg-[#25D366] font-semibold text-white hover:bg-[#20bd5a] focus-visible:outline-[#25D366]`}
          >
            <WhatsAppIcon className="h-5 w-5 shrink-0" />
            WhatsApp
          </a>
          <Link
            href="/menu"
            className={`${pill} border-2 border-[#d4af37]/55 bg-white/5 font-semibold text-[#f5e6a8] shadow-md backdrop-blur-[2px] transition hover:border-[#d4af37] hover:bg-white/10 focus-visible:outline-[#d4af37]`}
          >
            <MenuListIcon className="h-5 w-5 shrink-0" />
            Menüyü Gör
          </Link>
        </div>
      </div>
    );
  }

  if (variant === "bar") {
    return (
      <div
        className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 ${className}`}
      >
        <a
          href={`tel:${BUSINESS.phoneTel}`}
          className={`${baseBtn} border border-[#d4af37]/40 bg-white/10 px-5 py-2.5 text-sm text-white hover:bg-white/15 sm:px-6 sm:text-base`}
        >
          <PhoneIcon className="h-5 w-5" />
          Sipariş için hemen ara
        </a>
        <a
          href={BUSINESS.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${waRoundBase} h-10 w-10 sm:h-11 sm:w-11`}
          aria-label="WhatsApp ile yaz"
        >
          <WhatsAppIcon className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
        </a>
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={`tel:${BUSINESS.phoneTel}`}
        className={`${baseBtn} bg-[#6e0f14] px-4 py-2.5 text-sm text-white hover:bg-[#4a0a0d] sm:px-5`}
      >
        <PhoneIcon className="h-4 w-4" />
        Sipariş için hemen ara
      </a>
      <a
        href={BUSINESS.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${waRoundBase} h-11 w-11`}
        aria-label="WhatsApp ile yaz"
      >
        <WhatsAppIcon className="h-5 w-5" />
      </a>
    </div>
  );
}
