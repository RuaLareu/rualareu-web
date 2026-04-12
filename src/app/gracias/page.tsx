import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Mensaje enviado | RUA | LAREU",
  description: "Tu consulta fue enviada correctamente.",
  robots: { index: false },
};

export default function GraciasPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-background pt-20">
        <div className="text-center max-w-lg mx-auto px-6 py-20">
          <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="font-sackers-heavy text-primary text-3xl mb-4">
            Mensaje enviado
          </h1>
          <div className="w-8 h-px bg-accent mx-auto mb-6" />
          <p className="text-text-secondary leading-relaxed mb-8">
            Recibimos tu consulta. Nos pondremos en contacto a la brevedad
            durante nuestro horario de atención (lunes a viernes, 08:00 a 17:00).
          </p>
          <Link
            href="/"
            className="text-primary text-sm font-medium hover:text-accent transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
