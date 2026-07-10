import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import { Phone, MessageCircle, Star, Shield, Scale, Gavel, ChevronDown } from "lucide-react";
import { GOOGLE_REVIEWS } from "@/lib/constants";

const WHATSAPP_URL =
  "https://wa.me/5492235790012?text=Hola%2C%20necesito%20asesoramiento%20penal%20urgente.";
const PHONE = "+54 9 223-579-0012";
const PHONE_RAW = "+5492235790012";

export const metadata: Metadata = {
  title: "Abogado Penalista en Mar del Plata | Defensa Penal | Consulta Reservada",
  description:
    "¿Vos o un familiar enfrentan una causa penal? Abogados penalistas en Mar del Plata. Atención inmediata y confidencial. Consultá ahora.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/landing/derecho-penal" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "RUA | LAREU - Abogados Penalistas",
  description:
    "Abogados penalistas en Mar del Plata. Defensa penal, excarcelaciones, particular damnificado y recursos con estrategia y confidencialidad.",
  url: "https://rualareu.com/landing/derecho-penal",
  telephone: "+54-9-223-579-0012",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Almirante Brown 3071, Piso 2",
    addressLocality: "Mar del Plata",
    addressRegion: "Buenos Aires",
    postalCode: "7600",
    addressCountry: "AR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "19",
    bestRating: "5",
  },
};

function FAQItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  return (
    <details className="group border-b border-primary/15 last:border-0" {...(defaultOpen ? { open: true } : {})}>
      <summary className="flex items-center justify-between py-5 cursor-pointer text-primary text-[15px] font-medium list-none [&::-webkit-details-marker]:hidden">
        {question}
        <ChevronDown size={18} className="text-primary/40 flex-shrink-0 ml-4 transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <p className="pb-5 text-text-secondary text-sm leading-relaxed pr-8">{answer}</p>
    </details>
  );
}

export default function DerechoPenalLanding() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Minimal header ── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-primary/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="/">
            <Image
              src="/images/rua-lareu-horizontal-sin-fondo.png"
              alt="RUA | LAREU — Ir al inicio"
              width={140}
              height={38}
              className="h-8 w-auto brightness-0 invert"
            />
          </a>
          <a
            href={`tel:${PHONE_RAW}`}
            className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors"
          >
            <Phone size={14} />
            <span className="hidden sm:inline">{PHONE}</span>
          </a>
        </div>
      </header>

      <main>
        {/* ══════════════════════════════════════
            1. HERO
        ══════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80&auto=format&fit=crop"
            alt=""
            fill
            priority
            className="object-cover z-0"
            sizes="100vw"
            aria-hidden="true"
          />
          <div className="absolute inset-0 z-10 bg-primary/80" />

          <div className="relative z-20 w-full max-w-3xl mx-auto px-6 py-32 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-white text-white" />
                ))}
              </div>
              <span className="text-white/70 text-xs">{GOOGLE_REVIEWS.rating} en Google · {GOOGLE_REVIEWS.reviewCount} opiniones</span>
            </div>

            <h1 className="text-white text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              ¿Vos o un familiar
              <br />
              enfrentan una causa penal?
            </h1>
            <p className="text-white/60 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto mb-4">
              Actuar rápido puede cambiar el resultado.
            </p>
            <p className="text-white/85 text-sm sm:text-base mb-10">
              Abogados penalistas en Mar del Plata. Defensa penal con estrategia, experiencia y absoluta confidencialidad.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap bg-white text-primary text-lg font-semibold px-10 py-5 rounded hover:bg-white/90 transition-all duration-300"
              >
                <MessageCircle size={20} />
                Consultá ahora por WhatsApp
              </a>
              <a
                href={`tel:${PHONE_RAW}`}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap border border-white/25 text-white/80 text-base font-medium px-8 py-5 rounded hover:bg-white/10 hover:text-white transition-all"
              >
                <Phone size={18} />
                {PHONE}
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            2. QUÉ PODEMOS HACER POR VOS
        ══════════════════════════════════════ */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
              ¿Qué podemos hacer por vos?
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-14" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center flex flex-col h-full">
                <div className="w-14 h-14 bg-primary-light text-primary flex items-center justify-center mx-auto mb-5 rounded-full">
                  <Shield size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-primary text-lg mb-3 min-h-[3.5rem] flex items-end justify-center">Si te citaron a declarar</h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-1">
                  Antes de declarar, hablá con un abogado. Analizamos tu situación procesal, preparamos tu declaración
                  y te acompañamos en cada audiencia. Declarar sin asesoramiento puede comprometer tu defensa.
                </p>
              </div>
              <div className="text-center flex flex-col h-full">
                <div className="w-14 h-14 bg-primary-light text-primary flex items-center justify-center mx-auto mb-5 rounded-full">
                  <Gavel size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-primary text-lg mb-3 min-h-[3.5rem] flex items-end justify-center">Si un familiar fue detenido</h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-1">
                  Las primeras horas son decisivas. Evaluamos la situación, pedimos acceso a la causa y trabajamos para
                  obtener la libertad cuanto antes: eximición de prisión, excarcelación o morigeración según el caso.
                </p>
              </div>
              <div className="text-center flex flex-col h-full">
                <div className="w-14 h-14 bg-primary-light text-primary flex items-center justify-center mx-auto mb-5 rounded-full">
                  <Scale size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-primary text-lg mb-3 min-h-[3.5rem] flex items-end justify-center">Si sos víctima de un delito</h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-1">
                  Te representamos como particular damnificado para que tu voz cuente en el proceso: impulso de la
                  investigación, medidas de prueba y reclamo de la reparación del daño.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            3. CASOS QUE ATENDEMOS
        ══════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
              Casos que atendemos
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-6" />
            <p className="text-text-secondary text-sm text-center max-w-xl mx-auto mb-10">
              Actuamos en todas las etapas del proceso: instrucción, juicio, ejecución y recursos.
              Si tu caso no aparece en la lista, consultanos igual.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Defensas en causas penales",
                "Eximición de prisión",
                "Excarcelaciones",
                "Delitos culposos y de tránsito",
                "Lesiones",
                "Amenazas y hostigamiento",
                "Estafas y defraudaciones",
                "Delitos contra la propiedad",
                "Violencia de género (defensa y asistencia)",
                "Particular damnificado",
                "Habeas corpus",
                "Recursos y apelaciones",
              ].map((item) => (
                <span
                  key={item}
                  className="text-sm text-primary bg-primary-light px-5 py-3 rounded-sm border border-primary/15"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="text-center mt-10">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:text-primary font-medium transition-colors"
              >
                ¿Tu situación no está en la lista? Consultanos →
              </a>
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════
            4. PROCESO EN 4 PASOS
        ══════════════════════════════════════ */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
              Cómo funciona
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-14" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Nos contactás", desc: "Escribinos por WhatsApp. Tu consulta es confidencial." },
                { step: "2", title: "Analizamos la causa", desc: "Pedimos acceso al expediente y evaluamos tu situación procesal." },
                { step: "3", title: "Definimos la estrategia", desc: "Te explicamos opciones, riesgos y plazos en lenguaje claro." },
                { step: "4", title: "Te defendemos", desc: "Te representamos en cada instancia, manteniéndote informado siempre." },
              ].map((item) => (
                <div key={item.step} className="text-center flex flex-col items-center h-full">
                  <div className="w-12 h-12 bg-accent text-white flex items-center justify-center mx-auto mb-4 rounded-full font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-primary text-base mb-2 min-h-[2.5rem] flex items-end justify-center">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed flex-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            5. FAQ
        ══════════════════════════════════════ */}
        <section className="py-20 bg-background">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
              Preguntas frecuentes
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-12" />

            <FAQItem
              defaultOpen
              question="¿Qué hago si detienen a un familiar?"
              answer="Contactá a un abogado penalista de inmediato y no firmes nada sin asesoramiento. Con los datos de la causa podemos presentarnos en el expediente y pedir su libertad (eximición de prisión o excarcelación según la etapa). Las primeras horas son clave."
            />
            <FAQItem
              question="¿Qué es la eximición de prisión?"
              answer="Es un pedido para evitar la detención de una persona imputada mientras dura el proceso. Se solicita antes de que se ordene la detención. Si ya hay detención, el instituto equivalente es la excarcelación."
            />
            <FAQItem
              question="¿Tengo que declarar si me citan?"
              answer="Tenés derecho a negarte a declarar sin que eso se use en tu contra. Nunca declares sin hablar antes con tu abogado: la estrategia correcta depende de cada causa."
            />
            <FAQItem
              question="¿La consulta es confidencial?"
              answer="Absolutamente. El secreto profesional protege todo lo que nos cuentes, hayas decidido contratarnos o no."
            />
          </div>
        </section>

        {/* ══════════════════════════════════════
            6. CTA FINAL
        ══════════════════════════════════════ */}
        <section className="py-24 bg-primary">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              En una causa penal, el tiempo juega en contra.
              <br />
              <span className="text-white/70">Consultanos hoy.</span>
            </h2>
            <p className="text-white/50 text-base mb-10">
              Respuesta rápida, estrategia clara y confidencialidad absoluta.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap bg-white text-primary text-lg font-semibold px-10 py-5 rounded hover:bg-white/90 transition-all duration-300"
              >
                <MessageCircle size={20} />
                Escribinos por WhatsApp
              </a>
              <a
                href={`tel:${PHONE_RAW}`}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap border border-white/25 text-white/80 text-base font-medium px-8 py-5 rounded hover:bg-white/10 hover:text-white transition-all"
              >
                <Phone size={18} />
                {PHONE}
              </a>
            </div>

            <p className="text-white/30 text-xs">
              Lunes a viernes · 08:00 a 17:00 · Mar del Plata, Buenos Aires
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
