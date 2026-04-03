import { SIIR_STANZAS } from "@/lib/siir";

export default function SiirSection() {
  return (
    <section
      className="border-y border-[#d4af37]/20 bg-gradient-to-b from-[#fff8f0] to-amber-50/90 py-16"
      aria-labelledby="siir-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2
          id="siir-heading"
          className="font-display text-center text-3xl font-bold text-[#6e0f14] sm:text-4xl"
        >
          Çorbaya dair
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-stone-600">
          Divan edebiyatından seçilmiş beyitler — çorbanın şifa ve sofra
          kültüründeki yeri.
        </p>
        <div className="mt-10 space-y-10">
          {SIIR_STANZAS.map((lines, i) => (
            <blockquote
              key={i}
              className="space-y-3 rounded-2xl border border-[#d4af37]/25 bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:p-8"
            >
              {lines.map((line, j) => (
                <p
                  key={j}
                  className="font-display text-base italic leading-relaxed text-stone-800 sm:text-lg"
                >
                  {line}
                </p>
              ))}
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
