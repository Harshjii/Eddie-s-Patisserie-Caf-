import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import BackToTop from "@/components/ui/BackToTop";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eddie's Patisserie & Café | Premium Luxury Bakery Kanpur",
  description: "Experience artisanal dessert perfection. Eddie's Patisserie & Café in Kanpur crafts luxurious custom wedding cakes, birthday cakes, chocolate fudge brownies, and premium bakes. Every celebration deserves something sweet.",
  keywords: ["bakery kanpur", "custom cakes kanpur", "birthday cakes", "wedding cakes", "brownies", "pastries", "desserts kanpur", "eggless cakes"],
  openGraph: {
    title: "Eddie's Patisserie & Café | Premium Luxury Bakery Kanpur",
    description: "Every Celebration Deserves Something Sweet. Luxurious cakes, gourmet brownies, and custom bakes.",
    url: "https://thecakecrumbles.com",
    siteName: "Eddie's Patisserie & Café",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${montserrat.variable} font-sans antialiased text-chocolate-900 bg-cream-100 flex flex-col min-h-screen`}
      >
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow pt-[80px]">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </body>
    </html>
  );
}
