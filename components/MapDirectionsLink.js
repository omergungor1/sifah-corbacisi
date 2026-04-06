import { BUSINESS } from "@/lib/constants";
import MapPinIcon from "@/components/icons/MapPinIcon";

const baseClass =
  "inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#6e0f14] px-4 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-[#4a0a0d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6e0f14] sm:px-5";

/** Google Haritalar yol tarifi — ana sayfa ve iletişimde aynı görünüm. */
export default function MapDirectionsLink({ className = "" }) {
  return (
    <a
      href={BUSINESS.mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className ? `${baseClass} ${className}` : baseClass}
    >
      <MapPinIcon />
      Yol tarifi al
    </a>
  );
}
