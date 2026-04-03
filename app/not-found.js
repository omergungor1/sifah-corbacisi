import Link from "next/link";

export const metadata = {
  title: "Sayfa bulunamadı",
  description: "Aradığınız sayfa taşınmış veya silinmiş olabilir.",
};

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-lg flex-1 flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-orange-700">
        404
      </p>
      <h1 className="font-display mt-2 text-3xl font-bold text-red-950">
        Bu sayfayı bulamadık
      </h1>
      <p className="mt-3 text-stone-600">
        Adres yanlış yazılmış olabilir veya sayfa kaldırılmış olabilir.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-red-700 px-8 py-3 font-bold text-white shadow-md transition hover:bg-red-800"
      >
        Ana sayfaya dön
      </Link>
    </main>
  );
}
