import type { Metadata } from "next";
import { site } from "@/config/site";
import SectionTitle from "@/components/ui/SectionTitle";
import HoursAndLocation from "@/components/home/HoursAndLocation";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "İletişim",
  description: `${site.name} adres, telefon, çalışma saatleri ve yol tarifi.`,
};

export default function ContactPage() {
  return (
    <>
      <div className="container-x pt-10 md:pt-16">
        <SectionTitle as="h1" size="xl">İletişim</SectionTitle>
        <p className="mt-6 max-w-[60ch] text-ink-soft">
          Randevu, fiyat ya da tasarım sorun için WhatsApp&apos;tan yazabilirsin; mesai saatlerinde en geç
          birkaç saat içinde dönüş yaparız.
        </p>
        <div className="mt-8">
          <Button href={site.social.whatsapp}>WhatsApp&apos;tan yaz</Button>
        </div>
      </div>
      <HoursAndLocation />
    </>
  );
}
