import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import {
  Phone, MessageCircle, Star, ChevronDown,
  TrendingUp, DollarSign, BarChart3, PieChart,
  Briefcase, Store, Landmark,
} from "lucide-react";
import { GOOGLE_REVIEWS } from "@/lib/constants";

const WHATSAPP_URL =
  "https://wa.me/5492235790012?text=Hola%2C%20tengo%20una%20PyME%20y%20necesito%20asesoramiento%20financiero.";
const PHONE = "+54 9 223-579-0012";
const PHONE_RAW = "+5492235790012";

export const metadata: Metadata = {
  title: "Consultoría Financiera para PyMEs en Mar del Plata | Análisis, Costos, Rentabilidad | RUA | LAREU",
  description:
    "¿Sabés cuánto gana realmente tu negocio? Análisis de costos, rentabilidad, flujo de fondos y acceso al crédito para PyMEs en Mar del Plata. Consultá sin compromiso.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/landing/consultoria-financiera" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "RUA | LAREU - Consultoría Financiera para PyMEs",
  description:
    "Consultoría financiera para PyMEs en Mar del Plata. Análisis de costos, rentabilidad, flujo de fondos y acceso al crédito.",
  url: "https://rualareu.com/landing/consultoria-financiera",
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

export default function ConsultoriaFinancieraLanding() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Minimal header ── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="/">
            <Image
              src="/images/rua-lareu-horizontal-sin-fondo.png"
              alt="RUA | LAREU — Ir al inicio"
              width={140}
              height={38}
              className="h-8 w-auto brightness-0"
            />
          </a>
          <a
            href={`tel:${PHONE_RAW}`}
            className="flex items-center gap-2 text-text-secondary text-sm hover:text-primary transition-colors"
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
        <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-primary">
          <div className="max-w-3xl mx-auto px-6 text-center">
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
              ¿Tu negocio factura
              <br />
              <span className="text-white/70">pero no sabés si gana?</span>
            </h1>
            <p className="text-white/85 text-lg leading-relaxed max-w-lg mx-auto mb-4">
              Te damos la información que necesitás para decidir bien.
            </p>
            <p className="text-white/50 text-sm mb-10">
              Análisis financiero, costos, rentabilidad y planificación para PyMEs en Mar del Plata.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap bg-white text-primary text-lg font-semibold px-10 py-5 rounded hover:bg-white/90 transition-all duration-300"
              >
                <MessageCircle size={20} />
                Consultá sin compromiso
              </a>
              <a
                href={`tel:${PHONE_RAW}`}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap border border-white/25 text-white/80 text-base font-medium px-8 py-5 rounded hover:bg-white/10 hover:text-white transition-all"
              >
                <Phone size={18} />
                {PHONE}
              </a>
            </div>
            <p className="text-white/30 text-xs">Primera reunión gratuita · Sin compromiso</p>
          </div>
        </section>

        {/* ══════════════════════════════════════
            2. ¿QUÉ ANALIZAMOS?
        ══════════════════════════════════════ */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
              ¿Qué analizamos?
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-14" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: "Rentabilidad real",
                  desc: "¿Cuánto ganás por producto, servicio o cliente? Identificamos dónde está el margen y dónde se pierde.",
                },
                {
                  icon: DollarSign,
                  title: "Costos y punto de equilibrio",
                  desc: "Relevamos costos fijos y variables para saber cuánto necesitás facturar para cubrir gastos.",
                },
                {
                  icon: BarChart3,
                  title: "Flujo de fondos",
                  desc: "Proyección de cobros y pagos a corto y mediano plazo. Anticipamos problemas de caja.",
                },
                {
                  icon: PieChart,
                  title: "Tablero de control",
                  desc: "Indicadores clave de tu negocio en una sola página. Información clara para decisiones rápidas.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-white p-6 border border-primary/15 flex flex-col h-full">
                    <div className="w-10 h-10 bg-primary-light text-primary flex items-center justify-center mb-4">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold text-primary text-sm mb-2">{item.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed flex-1">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            3. ¿PARA QUIÉN ES?
        ══════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
              ¿Para quién es?
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-6" />
            <p className="text-text-secondary text-[15px] leading-relaxed text-center mb-14 max-w-2xl mx-auto">
              No hace falta ser una empresa grande para necesitar información financiera clara. Si tomás decisiones sobre tu negocio, este servicio es para vos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: Briefcase,
                  title: "Dueños de PyMEs",
                  desc: "Que facturan pero no tienen claro cuánto les queda de ganancia real.",
                },
                {
                  icon: Store,
                  title: "Comercios en crecimiento",
                  desc: "Que necesitan saber si pueden abrir una sucursal, contratar o invertir.",
                },
                {
                  icon: Landmark,
                  title: "Emprendedores buscando crédito",
                  desc: "Que necesitan armar la carpeta para presentarse ante un banco o SGR.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-background p-6 border border-primary/15 flex flex-col h-full">
                    <div className="w-10 h-10 bg-primary-light text-primary flex items-center justify-center mb-4">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold text-primary text-sm mb-2">{item.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed flex-1">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            4. CÓMO TRABAJAMOS
        ══════════════════════════════════════ */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
              Cómo trabajamos
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-14" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {[
                {
                  step: "1",
                  title: "Diagnóstico inicial",
                  desc: "Analizamos tu situación actual: estados contables, costos, márgenes y flujo de fondos.",
                },
                {
                  step: "2",
                  title: "Propuesta concreta",
                  desc: "Te presentamos un informe con los hallazgos clave y las acciones recomendadas.",
                },
                {
                  step: "3",
                  title: "Acompañamiento",
                  desc: "Te acompañamos en la implementación con informes periódicos y reuniones de seguimiento.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center flex flex-col items-center h-full">
                  <div className="w-14 h-14 bg-accent text-white flex items-center justify-center mx-auto mb-5 rounded-full font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-primary text-base mb-2 min-h-[2.5rem] flex items-end justify-center">
                    {item.title}
                  </h3>
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  text: "Excelente estudio. Me asesoran permanentemente en todas sus áreas con mucha claridad y profesionalismo. Siempre con enorme predisposición para abordar cada tema y consulta.",
                  name: "Real Step Sport Group",
                  city: "Mar del Plata",
                },
                {
                  text: "Una excelente opción para quienes buscan un servicio serio, confiable y de alta calidad en el ámbito jurídico-contable. Totalmente recomendable.",
                  name: "Patricia N.",
                  city: "Mar del Plata",
                },
                {
                  text: "Excelente trato y profesionalismo. No solo desde lo técnico, sino la comunicación constante con el cliente.",
                  name: "Carina L.",
                  city: "Mar del Plata",
                },
              ].map((t) => (
                <div key={t.name} className="bg-white p-6 border border-primary/15 flex flex-col h-full">
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
              question="¿Cuánto cuesta el servicio de consultoría?"
              answer="Depende del alcance. Puede ser un proyecto puntual (análisis de costos, evaluación de inversión) o un acompañamiento mensual. En todos los casos damos un presupuesto cerrado antes de empezar. La primera reunión es gratuita."
            />
            <FAQItem
              question="¿En qué se diferencia de la contabilidad?"
              answer="La contabilidad registra lo que pasó. La consultoría financiera analiza esa información para ayudarte a decidir qué hacer: si te conviene invertir, si tu negocio es rentable por producto, cuánto podés endeudarte o dónde reducir costos."
            />
            <FAQItem
              question="¿Pueden ayudarme a conseguir un crédito?"
              answer="Sí. Preparamos carpetas de crédito con toda la documentación que piden los bancos: proyecciones, balances, flujos de fondos. También te asesoramos sobre líneas de crédito con tasas subsidiadas para PyMEs."
            />
            <FAQItem
              question="¿Cómo sé si mi negocio es realmente rentable?"
              answer="Con un análisis de costos detallado. Muchos empresarios confunden facturación con ganancia. Identificamos cuánto ganás por producto o servicio, cuál es tu punto de equilibrio y dónde están los gastos que se pueden optimizar."
            />
          </div>
        </section>

        {/* ══════════════════════════════════════
            7. CTA FINAL
        ══════════════════════════════════════ */}
        <section className="py-24 bg-primary">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Mejores decisiones,
              <br />
              <span className="text-white/70">mejores resultados.</span>
            </h2>
            <p className="text-white/50 text-base mb-10">
              Escribinos y coordinamos una primera reunión sin costo ni compromiso.
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
