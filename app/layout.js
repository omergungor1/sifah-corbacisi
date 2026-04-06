import { Fraunces, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";
import CourierDeliveryBanner from "@/components/CourierDeliveryBanner";
import { BUSINESS, SITE_URL } from "@/lib/constants";

/** Başlıklar: sıcak, şık, çorba / esnaf sitesine uygun (Merriweather yerine) */
const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const defaultTitle = "Şifah Çorba & Haşlama | 7/24 Açık Çorbacı Bağcılar";
const defaultDescription =
  "Bağcılar’da 7/24 açık Şifah Çorba & Haşlama. Kelle paça, işkembe, tuzlama ve daha fazlası.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: "%s | Şifah Çorba & Haşlama",
  },
  description: defaultDescription,
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: BUSINESS.name,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/images/corba-1.jpg",
        width: 1200,
        height: 800,
        alt: "Şifah Çorba & Haşlama",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/images/corba-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="tr"
      className={`${fraunces.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-[#fff8f0] font-body text-stone-900">
        <LocalBusinessJsonLd />
        <FloatingContactButtons />
        <div className="flex flex-1 flex-col pb-[5.5rem] md:pb-0">
          <Navbar />
          <div className="flex flex-1 flex-col">{children}</div>
          <CourierDeliveryBanner />
          <Footer />
        </div>
      </body>
    </html>
  );
}
