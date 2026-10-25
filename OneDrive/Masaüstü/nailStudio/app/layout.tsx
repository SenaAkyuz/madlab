import type { Metadata } from "next";
import {
  Bodoni_Moda,
  Bebas_Neue,
  Pinyon_Script,
  Barlow,
  DM_Mono,
} from "next/font/google";
import "../styles/globals.css";
import { site } from "@/config/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  display: "swap",
});
const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
});
const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
});
const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});
const dmMono = DM_Mono({
  variable: "--font-dmmono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.subtagline,
  openGraph: {
    title: site.name,
    description: site.tagline,
    images: ["/images/hero/hero.webp"],
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${bodoni.variable} ${bebas.variable} ${pinyon.variable} ${barlow.variable} ${dmMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
