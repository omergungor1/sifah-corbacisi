import Link from "next/link";
import { BUSINESS, SITE_URL } from "@/lib/constants";
import { NAV_LINKS } from "@/lib/navLinks";
import SocialPlaceholders from "@/components/SocialPlaceholders";

const FOOTER_SLOGAN =
  "Her kaşıkta şifa, her kasede gönül ısısı — kazandan sofraya, sofradan yüreğe.";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#d4af37]/30 bg-[#4a0a0d] text-amber-50">
      <div className="mx-auto max-w-6xl space-y-10 px-4 py-12 sm:px-6 lg:space-y-12">
        <p className="mx-auto max-w-2xl text-center font-display text-lg italic leading-relaxed text-[#f5e6a8] sm:text-xl">
          {FOOTER_SLOGAN}
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-bold text-white">
              {BUSINESS.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-amber-100/85">
              {BUSINESS.address}
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#d4af37]/90">
              Sayfalar
            </p>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm font-medium text-amber-100/90 hover:text-[#d4af37]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/sitemap.xml"
              className="mt-4 inline-block text-sm font-semibold text-[#d4af37] underline-offset-4 hover:underline"
            >
              Site haritası (sitemap)
            </Link>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#d4af37]/90">
              İletişim
            </p>
            <a
              href={`tel:${BUSINESS.phoneTel}`}
              className="mt-3 block text-lg font-bold text-white hover:text-[#d4af37]"
            >
              {BUSINESS.phoneDisplay}
            </a>
            <p className="mt-3 text-sm text-amber-100/85">
              Çalışma:{" "}
              <span className="font-semibold text-white">{BUSINESS.hours}</span>
            </p>
            <Link
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-semibold text-[#d4af37] underline-offset-4 hover:underline"
            >
              Google Maps
            </Link>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#d4af37]/90">
              Sosyal medya
            </p>
            <p className="mt-2 text-xs text-amber-100/60">
              Hesaplar yakında eklenecek.
            </p>
            <div className="mt-4">
              <SocialPlaceholders />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#d4af37]/15 py-5 text-center text-xs text-amber-200/55">
        © {new Date().getFullYear()} {BUSINESS.name} ·{" "}
        <a
          href={SITE_URL}
          className="text-[#d4af37]/80 hover:text-[#d4af37]"
        >
          {SITE_URL.replace(/^https?:\/\//, "")}
        </a>
      </div>
    </footer>
  );
}
