import { BUSINESS } from "@/lib/constants";
import PhoneIcon from "@/components/icons/PhoneIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const fab =
  "flex h-14 w-14 items-center justify-center rounded-full shadow-lg ring-2 ring-white/30 transition hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

/** Mobilde sağ altta sabit yuvarlak arama + WhatsApp */
export default function FloatingContactButtons() {
  return (
    <div
      className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      aria-label="Hızlı iletişim"
    >
      <a
        href={`tel:${BUSINESS.phoneTel}`}
        className={`${fab} bg-[#6e0f14] text-white focus-visible:outline-white`}
        aria-label="Sipariş için telefonla ara"
      >
        <PhoneIcon className="h-7 w-7" />
      </a>
      <a
        href={BUSINESS.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${fab} bg-[#25D366] text-white focus-visible:outline-[#25D366]`}
        aria-label="WhatsApp ile yaz"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
