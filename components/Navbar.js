import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { NAV_LINKS } from "@/lib/navLinks";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#d4af37]/35 bg-[#6e0f14] shadow-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6">
        <Link
          href="/"
          className="flex min-w-0 max-w-[65%] flex-1 items-center gap-2 rounded-lg outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d4af37] sm:max-w-none sm:flex-none sm:gap-3"
        >
          <Image
            src="/logo.png"
            alt="Şifah Çorba & Haşlama logosu"
            width={120}
            height={48}
            className="h-11 w-auto shrink-0 object-contain sm:h-12"
            priority
          />
          <span className="font-display min-w-0 text-sm font-bold leading-snug text-white sm:max-w-[240px] sm:text-xl sm:leading-tight">
            {BUSINESS.name}
          </span>
        </Link>
        <nav
          aria-label="Ana menü"
          className="order-last flex w-full basis-full flex-wrap justify-center gap-x-5 gap-y-2 sm:order-none sm:w-auto sm:basis-auto sm:justify-end md:flex-1"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-semibold text-amber-100/95 transition hover:text-[#d4af37] sm:text-base"
            >
              {label}
            </Link>
          ))}
        </nav>
        <a
          href={`tel:${BUSINESS.phoneTel}`}
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#d4af37] px-4 py-2.5 text-xs font-bold text-[#3d0a0c] shadow-md transition hover:bg-[#e8c547] sm:text-sm"
        >
          Sipariş için hemen ara
        </a>
      </div>
    </header>
  );
}
