import OrderAndWhatsApp from "@/components/OrderAndWhatsApp";

/** Tüm sayfalarda navbar altında sipariş şeridi */
export default function GlobalOrderStrip() {
  return (
    <div
      className="border-b border-[#d4af37]/25 bg-[#6e0f14] py-2.5 shadow-inner"
      role="region"
      aria-label="Sipariş kanalları"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <OrderAndWhatsApp variant="bar" />
      </div>
    </div>
  );
}
