import { BUSINESS, SITE_URL } from "@/lib/constants";

export default function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#isletme`,
    name: BUSINESS.name,
    image: `${SITE_URL}/images/corba-1.jpg`,
    url: SITE_URL,
    telephone: BUSINESS.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Fatih Mahallesi Velioğlu Caddesi 98N",
      addressLocality: "Bağcılar",
      addressRegion: "İstanbul",
      postalCode: "34218",
      addressCountry: "TR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
