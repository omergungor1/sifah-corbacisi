import { BUSINESS } from "@/lib/constants";
import PhoneIcon from "@/components/icons/PhoneIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const baseBtn =
  "inline-flex items-center justify-center gap-2 rounded-full font-bold shadow-md transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export default function OrderAndWhatsApp({
  variant = "compact",
  className = "",
}) {
  if (variant === "prominent") {
    return (
      <div
        className={`flex flex-col gap-4 sm:flex-row sm:flex-wrap ${className}`}
      >
        <a
          href={`tel:${BUSINESS.phoneTel}`}
          className={`${baseBtn} bg-[#d4af37] px-8 py-4 text-base text-[#3d0a0c] hover:bg-[#e8c547] focus-visible:outline-[#d4af37]`}
        >
          <PhoneIcon className="h-6 w-6 shrink-0" />
          <span className="text-left leading-tight">
            Sipariş için hemen ara
            <span className="mt-0.5 block text-sm font-semibold opacity-90">
              {BUSINESS.phoneDisplay}
            </span>
          </span>
        </a>
        <a
          href={BUSINESS.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseBtn} bg-[#25D366] px-8 py-4 text-base text-white hover:bg-[#20bd5a] focus-visible:outline-[#25D366]`}
        >
          <WhatsAppIcon className="h-6 w-6 shrink-0" />
          WhatsApp ile yaz
        </a>
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
          className={`${baseBtn} bg-[#25D366] px-5 py-2.5 text-sm text-white hover:bg-[#20bd5a] sm:px-6 sm:text-base`}
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp
        </a>
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
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
        className={`${baseBtn} bg-[#25D366] px-4 py-2.5 text-sm text-white hover:bg-[#20bd5a] sm:px-5`}
      >
        <WhatsAppIcon className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  );
}
