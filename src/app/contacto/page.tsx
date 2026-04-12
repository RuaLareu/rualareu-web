import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ContactSection from "@/components/sections/ContactSection";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Contacto | RUA | LAREU - Estudio Jurídico Contable",
  description:
    "Contactate con RUA | LAREU en Mar del Plata. Atendemos de lunes a viernes de 08:00 a 17:00. Escribinos por WhatsApp o completá el formulario.",
  path: "/contacto",
});

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <div className="pt-24 bg-primary text-white text-center py-16">
          <div className="max-w-2xl mx-auto px-6">
            <p className="font-sackers-light text-accent text-xs tracking-[0.3em] mb-4">
              Estamos para ayudarte
            </p>
            <h1 className="font-sackers-heavy text-4xl sm:text-5xl">Contacto</h1>
            <div className="w-12 h-px bg-accent mx-auto mt-6" />
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
