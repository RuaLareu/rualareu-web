import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import { Phone, MessageCircle, Star, ClipboardList, ShieldCheck, Scale, ChevronDown } from "lucide-react";
import { GOOGLE_REVIEWS } from "@/lib/constants";

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

const WHATSAPP_URL =
  "https://wa.me/5492236972421?text=Hola%2C%20quiero%20consultar%20por%20el%20servicio%20de%20liquidaci%C3%B3n%20de%20sueldos%20para%20mi%20empresa.";
const PHONE = "+54 9 223-697-2421";
const PHONE_RAW = "+5492236972421";

export const metadata: Metadata = {
  title: "Liquidación de Sueldos para Empresas | Tercerizá tu Nómina | RUA | LAREU",
  description:
    "Tercerizá la liquidación de sueldos de tu empresa. Recibos, cargas sociales, F.931, convenios y altas y bajas en ARCA, con respaldo contable y laboral en Mar del Plata.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://rualareu.com/landing/liquidacion-de-sueldos" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "RUA | LAREU - Liquidación de Sueldos",
  description:
    "Servicio de liquidación de sueldos para pymes en Mar del Plata. Recibos, cargas sociales, F.931, convenios colectivos y presentaciones ante ARCA.",
  url: "https://rualareu.com/landing/liquidacion-de-sueldos",
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

export default function LiquidacionDeSueldosLanding() {
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
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1920&q=80&auto=format&fit=crop"
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
              Liquidación de sueldos
              <br />
              sin errores y sin dolores de cabeza
            </h1>
            <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Nos ocupamos de la nómina completa de tu empresa: recibos, cargas sociales, convenios y presentaciones
              ante ARCA. Vos te dedicás a tu negocio, nosotros a que cada sueldo salga bien y a tiempo.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap bg-white text-primary text-lg font-semibold px-10 py-5 rounded hover:bg-white/90 transition-all duration-300"
              >
                <MessageCircle size={20} />
                Consultanos por WhatsApp
              </a>
              <a
                href={`tel:${PHONE_RAW}`}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap border border-white/25 text-white/80 text-base font-medium px-8 py-5 rounded hover:bg-white/10 hover:text-white transition-all"
              >
                <Phone size={18} />
                {PHONE}
              </a>
            </div>
            <p className="text-white/35 text-xs">Monto fijo mensual por empleado · Sin sorpresas</p>
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
                  <ClipboardList size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-primary text-lg mb-3 text-balance md:min-h-[3.5rem] flex items-end justify-center">Nómina completa mes a mes</h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-1">
                  Liquidación mensual, aguinaldos, vacaciones, horas extras y adicionales de convenio, con recibos
                  listos para firmar.
                </p>
              </div>
              <div className="text-center flex flex-col h-full">
                <div className="w-14 h-14 bg-primary-light text-primary flex items-center justify-center mx-auto mb-5 rounded-full">
                  <ShieldCheck size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-primary text-lg mb-3 text-balance md:min-h-[3.5rem] flex items-end justify-center">Cargas sociales y F.931 al día</h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-1">
                  Presentaciones ante ARCA, sindicatos y obras sociales en fecha, para que no acumules multas ni intereses.
                </p>
              </div>
              <div className="text-center flex flex-col h-full">
                <div className="w-14 h-14 bg-primary-light text-primary flex items-center justify-center mx-auto mb-5 rounded-full">
                  <Scale size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-primary text-lg mb-3 text-balance md:min-h-[3.5rem] flex items-end justify-center">Respaldo contable y laboral</h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-1">
                  Somos estudio jurídico contable: ante una inspección, un reclamo o una duda de convenio, tenés
                  contadores y abogados laboralistas en el mismo equipo.
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
              Trabajamos con los convenios más habituales y estudiamos el tuyo si es menos común. Si tu caso no aparece
              en la lista, consultanos igual.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Liquidación mensual de haberes",
                "Aguinaldo y vacaciones",
                "Altas y bajas en ARCA",
                "Cargas sociales y F.931",
                "Convenios colectivos",
                "Liquidaciones finales",
                "Sanciones y suspensiones",
                "Personal de comercio",
                "Gastronómicos y hoteleros",
                "Industria y construcción",
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
                ¿Tu caso no está en la lista? Consultanos →
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
                { step: "1", title: "Relevamos tu nómina", desc: "Analizamos empleados, convenios y situación actual de tu empresa." },
                { step: "2", title: "Ordenamos tu situación", desc: "Regularizamos atrasos o inconsistencias antes de empezar a operar." },
                { step: "3", title: "Liquidamos cada mes", desc: "Nos pasás las novedades y recibís recibos y aportes listos en fecha." },
                { step: "4", title: "Te respaldamos siempre", desc: "Consultas laborales e impositivas incluidas, sin costos ocultos." },
              ].map((item) => (
                <div key={item.step} className="text-center flex flex-col items-center h-full">
                  <div className="w-12 h-12 bg-accent text-white flex items-center justify-center mx-auto mb-4 rounded-full font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-primary text-base mb-2 text-balance sm:min-h-[2.5rem] flex items-end justify-center">{item.title}</h3>
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
              Lo que dicen nuestros clientes
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-14" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  text: "Excelente estudio. Me asesoran permanentemente en todas sus áreas con mucha claridad y profesionalismo. Siempre con enorme predisposición para abordar cada tema y consulta. Sin dudas los recomiendo.",
                  name: "Real Step Sport Group",
                  city: "Mar del Plata",
                },
                {
                  text: "Excelente trato y profesionalismo. No solo desde lo técnico, sino la comunicación constante con el cliente.",
                  name: "Carina Luchini",
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
              question="¿Qué incluye el servicio de liquidación de sueldos?"
              answer="Liquidación mensual y de aguinaldo, recibos de haberes, F.931, cargas sociales, libro de sueldos, altas y bajas de personal y asesoramiento permanente en temas laborales e impositivos de la nómina."
            />
            <FAQItem
              question="¿Qué me conviene: contador interno o tercerizar?"
              answer="Para la mayoría de las pymes, tercerizar cuesta una fracción de un empleado administrativo y suma el respaldo de un estudio completo. Te hacemos la comparación con tus números."
            />
            <FAQItem
              question="¿Cómo les paso las novedades cada mes?"
              answer="Por WhatsApp, mail o planilla compartida, como te quede cómodo. Con las novedades cargadas, te devolvemos los recibos y aportes listos."
            />
            <FAQItem
              question="¿Trabajan con mi convenio colectivo?"
              answer="Trabajamos con los convenios más usados (comercio, gastronómicos, construcción, industria, entre otros) y estudiamos el tuyo si es menos habitual."
            />
            <FAQItem
              question="¿Qué pasa si tengo una inspección o un juicio laboral?"
              answer="Es nuestra ventaja: el mismo estudio que liquida tus sueldos tiene abogados laboralistas que te representan. La documentación ya está en regla y en nuestras manos."
            />
            <FAQItem
              question="¿Cuánto cuesta el servicio?"
              answer="Depende de la cantidad de empleados y el convenio. El presupuesto es un monto fijo mensual por empleado, sin sorpresas. Consultanos y te cotizamos en el día."
            />
          </div>
        </section>

        {/* ══════════════════════════════════════
            7. CTA FINAL
        ══════════════════════════════════════ */}
        <section className="py-24 bg-primary">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Dejá los sueldos
              <br />
              <span className="text-white/70">en manos de un estudio jurídico contable.</span>
            </h2>
            <p className="text-white/50 text-base mb-10">
              Nómina, cargas sociales y respaldo laboral en un solo lugar.
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
