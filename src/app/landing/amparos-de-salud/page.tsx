import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import {
  Phone, MessageCircle, Star, ChevronDown,
  HeartPulse, Pill, Brain, Accessibility, Baby,
  ShieldOff, DollarSign, Stethoscope, Clock,
} from "lucide-react";
import { GOOGLE_REVIEWS } from "@/lib/constants";

const WHATSAPP_URL =
  "https://wa.me/5492236972421?text=Hola%2C%20necesito%20asesoramiento%20sobre%20un%20amparo%20de%20salud.";
const PHONE = "+54 9 223-697-2421";
const PHONE_RAW = "+5492236972421";

export const metadata: Metadata = {
  title: "Amparo de Salud Mar del Plata | Obra Social y Prepaga | Consulta Gratis | RUA | LAREU",
  description:
    "Tu obra social o prepaga te niega un tratamiento? Iniciamos amparos de salud en Mar del Plata. Medida cautelar en 48-72hs. Consulta gratuita.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/landing/amparos-de-salud" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "RUA | LAREU - Amparos de Salud",
  description: "Abogados especialistas en amparos de salud contra obras sociales y prepagas en Mar del Plata.",
  url: "https://rualareu.com/landing/amparos-de-salud",
  telephone: "+54-9-223-697-2421",
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

function GoogleLogo() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export default function AmparosSaludLanding() {
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
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary via-primary to-[#1a2e28]" />

          <div className="relative z-10 w-full max-w-3xl mx-auto px-6 py-32 text-center">
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
              ¿Tu obra social o prepaga
              <br />
              te niega un tratamiento?
            </h1>
            <p className="text-white/85 text-lg sm:text-xl mb-4">
              Podemos ayudarte.
            </p>
            <p className="text-white/50 text-base leading-relaxed max-w-lg mx-auto mb-10">
              Amparos de salud en Mar del Plata. Respuesta judicial rápida
              para proteger tu derecho a la salud.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap bg-white text-primary text-lg font-semibold px-10 py-5 rounded hover:bg-white/90 transition-all duration-300"
              >
                <MessageCircle size={20} />
                Consultá gratis ahora
              </a>
              <a
                href={`tel:${PHONE_RAW}`}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap border border-white/25 text-white/80 text-base font-medium px-8 py-5 rounded hover:bg-white/10 hover:text-white transition-all"
              >
                <Phone size={18} />
                {PHONE}
              </a>
            </div>
            <p className="text-white/30 text-xs">Medida cautelar en 48-72 horas · Consulta gratuita</p>
          </div>
        </section>

        {/* ══════════════════════════════════════
            2. SITUACIONES QUE RESOLVEMOS
        ══════════════════════════════════════ */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
              Situaciones que resolvemos
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-14" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: Stethoscope, title: "Negación de cirugía", desc: "Tu obra social o prepaga no autoriza una intervención quirúrgica prescripta por tu médico." },
                { icon: Pill, title: "Medicación de alto costo", desc: "Te niegan la cobertura de un medicamento que necesitás para tu tratamiento." },
                { icon: HeartPulse, title: "Tratamiento oncológico", desc: "Rechazan o demoran la cobertura de quimioterapia, radioterapia u otros tratamientos oncológicos." },
                { icon: Accessibility, title: "Discapacidad", desc: "No cubren las prestaciones que la ley garantiza para personas con discapacidad (Ley 24.901)." },
                { icon: Baby, title: "Fertilización asistida", desc: "Te niegan los tratamientos de reproducción médicamente asistida que la ley obliga a cubrir." },
                { icon: Brain, title: "Salud mental", desc: "Rechazan cobertura de tratamientos psicológicos, psiquiátricos o internaciones contemplados por la ley." },
                { icon: ShieldOff, title: "Baja unilateral", desc: "Tu prepaga te dio de baja o te cambió de plan sin tu consentimiento." },
                { icon: DollarSign, title: "Aumento abusivo de cuotas", desc: "Aumentos que exceden lo autorizado por la autoridad sanitaria." },
                { icon: Clock, title: "Demora injustificada", desc: "Tardan semanas en autorizar un estudio, práctica o tratamiento urgente." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-white p-6 border border-primary/15">
                    <div className="w-10 h-10 bg-primary-light text-primary flex items-center justify-center mb-4 rounded-full">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold text-primary text-sm mb-2">{item.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            3. QUÉ ES UN AMPARO DE SALUD
        ══════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
              ¿Qué es un amparo de salud?
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-10" />

            <div className="space-y-5 text-text-secondary text-[15px] leading-[1.85]">
              <p>
                El amparo es una <strong className="text-primary">acción judicial urgente</strong> que
                obliga a tu obra social o prepaga a brindarte la cobertura médica que te están negando.
                No es un juicio largo que dura años: se resuelve en <strong className="text-primary">días o semanas</strong>.
              </p>
              <p>
                El juez puede dictar una <strong className="text-primary">medida cautelar en 48 a 72 horas</strong> que
                ordena a la entidad cubrir el tratamiento de forma inmediata, incluso antes de que se
                resuelva el fondo del caso. Es la herramienta más efectiva para proteger tu salud
                cuando el tiempo apremia.
              </p>
            </div>

            <div className="mt-10 bg-primary-light border-l-4 border-accent p-6">
              <h3 className="font-semibold text-primary text-base mb-3">
                ¿Qué es el PMO (Plan Médico Obligatorio)?
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Es el conjunto de prestaciones mínimas que todas las obras sociales y prepagas
                <strong> deben</strong> garantizar por ley: consultas médicas, internación, cirugías,
                medicamentos, estudios, salud mental, discapacidad, fertilización asistida y más.
                Si tu prestación está en el PMO y te la niegan, el amparo tiene altísimas
                probabilidades de éxito.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            4. PROCESO EN 3 PASOS
        ══════════════════════════════════════ */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
              Cómo funciona
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-14" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  step: "1",
                  title: "Nos contactás",
                  desc: "Evaluamos tu caso de forma gratuita. Necesitamos la prescripción médica y la constancia de rechazo o demora de la obra social/prepaga.",
                },
                {
                  step: "2",
                  title: "Presentamos el amparo",
                  desc: "Redactamos la demanda y solicitamos una medida cautelar urgente para que el juez ordene la cobertura de forma inmediata.",
                },
                {
                  step: "3",
                  title: "Resolución rápida",
                  desc: "La medida cautelar puede obtenerse en 48 a 72 horas. Tu obra social o prepaga queda obligada a cubrir el tratamiento.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center flex flex-col items-center h-full">
                  <div className="w-14 h-14 bg-accent text-white flex items-center justify-center mx-auto mb-5 rounded-full font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-primary text-lg mb-3 min-h-[3.5rem] flex items-end justify-center">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed flex-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            5. TESTIMONIOS
        ══════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
              Casos que resolvimos
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-14" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  text: "Excelente trato y profesionalismo. No solo desde lo técnico, sino la comunicación constante con el cliente.",
                  name: "Carina L.",
                  city: "Mar del Plata",
                },
                {
                  text: "Impecable servicio. Activaron en un par de meses un proceso que esperaba hacía nueve años.",
                  name: "Juan Cruz P.",
                  city: "Mar del Plata",
                },
                {
                  text: "Un profesional con todas las letras. Se puso en mi lugar desde el primer momento y defendió mis derechos. Súper recomendable.",
                  name: "Cristian R.",
                  city: "Mar del Plata",
                },
              ].map((t) => (
                <div key={t.name} className="bg-background p-6 border border-primary/15 flex flex-col h-full">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#FBBC04] text-[#FBBC04]" />
                    ))}
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5 italic flex-1">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-5 border-t border-primary/15">
                    <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-semibold">{t.name.charAt(0)}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-text text-xs font-medium leading-snug truncate">{t.name}</p>
                      <p className="text-text-secondary text-[11px] mt-0.5">{t.city}</p>
                    </div>
                    <div className="ml-auto opacity-40 flex-shrink-0">
                      <GoogleLogo />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                href={GOOGLE_REVIEWS.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors"
              >
                Ver las {GOOGLE_REVIEWS.reviewCount} opiniones en Google
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            6. FAQ
        ══════════════════════════════════════ */}
        <section className="py-20 bg-background">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
              Preguntas frecuentes
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-12" />

            <FAQItem
              defaultOpen
              question="¿Cuánto tarda un amparo de salud?"
              answer="La medida cautelar (que ordena la cobertura inmediata) puede obtenerse en 48 a 72 horas desde la presentación. El juicio de fondo se resuelve en semanas o pocos meses, pero con la cautelar ya tenés la cobertura asegurada mientras tanto."
            />
            <FAQItem
              question="¿Cuánto cuesta?"
              answer="La consulta inicial es gratuita. Respecto de los honorarios del juicio, se pueden pactar de forma accesible dada la urgencia de la situación. Además, si ganás, las costas (gastos del juicio) las paga la obra social o prepaga que perdió."
            />
            <FAQItem
              question="¿Contra quién se presenta?"
              answer="Contra la obra social, prepaga o entidad que te niega la cobertura. Si corresponde, también puede incluirse a la Superintendencia de Servicios de Salud o al Estado como co-demandados."
            />
            <FAQItem
              question="¿Qué documentos necesito?"
              answer="Lo esencial es la prescripción médica del tratamiento y la constancia de la negativa (nota de rechazo, email, falta de respuesta en un plazo razonable). También ayudan la historia clínica y la constancia de afiliación. Si no tenés todo, no te preocupes — te orientamos para conseguir lo que falte."
            />
            <FAQItem
              question="¿Pueden negarme la cobertura de algo que la ley obliga a cubrir?"
              answer="No. Si la prestación está incluida en el PMO, en la Ley de Discapacidad (24.901), en la Ley de Fertilización Asistida (26.862) o en la Ley de Salud Mental (26.657), la obra social o prepaga está obligada a cubrirla. Si la niega, el amparo es la vía para hacerla cumplir."
            />
          </div>
        </section>

        {/* ══════════════════════════════════════
            7. CTA FINAL
        ══════════════════════════════════════ */}
        <section className="py-24 bg-primary">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Tu salud no puede esperar.
              <br />
              <span className="text-white/70">Actuamos hoy.</span>
            </h2>
            <p className="text-white/50 text-base mb-10">
              Consultanos ahora. Es gratis, es confidencial y podemos tener una respuesta judicial en horas.
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
