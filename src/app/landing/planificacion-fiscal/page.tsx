import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import {
  Phone, MessageCircle, Star, ChevronDown,
  Calculator, TrendingDown, Receipt, Scale,
  AlertTriangle,
} from "lucide-react";
import { GOOGLE_REVIEWS } from "@/lib/constants";

const WHATSAPP_URL =
  "https://wa.me/5492236972421?text=Hola%2C%20necesito%20asesoramiento%20sobre%20planificaci%C3%B3n%20fiscal.";
const PHONE = "+54 9 223-697-2421";
const PHONE_RAW = "+5492236972421";

export const metadata: Metadata = {
  title: "Planificación Fiscal Mar del Plata | Contador | Optimización de Impuestos | RUA | LAREU",
  description:
    "¿Pagás más impuestos de los que deberías? Planificación fiscal para personas y PyMEs en Mar del Plata. Reducí tu carga impositiva de forma legal. Consultanos ahora.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/landing/planificacion-fiscal" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "RUA | LAREU - Planificación Fiscal",
  description:
    "Planificación fiscal y optimización impositiva para personas y PyMEs en Mar del Plata. Régimen óptimo, reducción de Ganancias e IVA, regularización con ARCA y ARBA.",
  url: "https://rualareu.com/landing/planificacion-fiscal",
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

export default function PlanificacionFiscalLanding() {
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
              ¿Sentís que
              <br />
              <span className="text-white/70">pagás de más?</span>
            </h1>
            <p className="text-white/85 text-lg leading-relaxed max-w-lg mx-auto mb-4">
              Planificación fiscal inteligente. Legal, transparente y a tu medida.
            </p>
            <p className="text-white/50 text-sm mb-10">
              Optimizamos tu carga impositiva analizando tu situación y el régimen que más te conviene.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap bg-white text-primary text-lg font-semibold px-10 py-5 rounded hover:bg-white/90 transition-all duration-300"
              >
                <MessageCircle size={20} />
                Consultá ahora
              </a>
              <a
                href={`tel:${PHONE_RAW}`}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap border border-white/25 text-white/80 text-base font-medium px-8 py-5 rounded hover:bg-white/10 hover:text-white transition-all"
              >
                <Phone size={18} />
                {PHONE}
              </a>
            </div>
            <p className="text-white/30 text-xs">Presupuesto cerrado · Sin sorpresas</p>
          </div>
        </section>

        {/* ══════════════════════════════════════
            2. ¿QUÉ HACEMOS POR VOS?
        ══════════════════════════════════════ */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
              ¿Qué hacemos por vos?
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-14" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Calculator,
                  title: "Régimen óptimo para tu caso",
                  desc: "Analizamos si te conviene monotributo, responsable inscripto o una estructura societaria. Cada caso es distinto.",
                },
                {
                  icon: TrendingDown,
                  title: "Reducción de Ganancias",
                  desc: "Identificamos deducciones que no estás usando, gastos computables y estrategias legales para reducir el impuesto.",
                },
                {
                  icon: Receipt,
                  title: "Optimización de IVA",
                  desc: "Controlamos tu posición mensual de IVA y gestionamos exclusiones y reducciones de retenciones y percepciones.",
                },
                {
                  icon: Scale,
                  title: "Regularización con ARCA y ARBA",
                  desc: "Deudas con ARCA o ARBA, planes de facilidades, moratorias vigentes y atención integral de inspecciones.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-white p-6 border border-primary/15 flex flex-col h-full">
                    <div className="w-10 h-10 bg-primary-light text-primary flex items-center justify-center mb-4">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-semibold text-primary text-sm mb-2 text-balance md:min-h-[3rem]">{item.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed flex-1">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            3. SITUACIONES QUE RESOLVEMOS
        ══════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
              Situaciones que resolvemos
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-14" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Pagás Ganancias sin aprovechar deducciones",
                  desc: "Muchos contribuyentes no deducen todo lo que la ley permite. Revisamos tu situación y recuperamos lo que corresponde.",
                },
                {
                  title: "ARBA te retiene de más",
                  desc: "Si acumulás saldo a favor en Ingresos Brutos, gestionamos la exclusión o reducción de alícuota ante ARBA.",
                },
                {
                  title: "Superaste el tope del monotributo",
                  desc: "Planificamos la transición a responsable inscripto para que el cambio sea ordenado y sin sorpresas de ARCA.",
                },
                {
                  title: "Tenés deuda impositiva",
                  desc: "Evaluamos moratorias y planes de facilidades vigentes para regularizar tu situación con el menor costo posible.",
                },
                {
                  title: "Te llegó una inspección de ARCA o ARBA",
                  desc: "Te representamos y acompañamos durante todo el proceso de fiscalización.",
                },
                {
                  title: "Querés saber si tu estructura societaria es óptima",
                  desc: "Analizamos si una reorganización empresarial puede reducir tu carga fiscal de forma legal.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-background p-6 border border-primary/15 h-full">
                  <AlertTriangle size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-primary text-sm mb-1">{item.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
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
                  title: "Diagnóstico fiscal",
                  desc: "Analizamos tu situación impositiva actual, los regímenes vigentes y las oportunidades de optimización.",
                },
                {
                  step: "2",
                  title: "Propuesta de ahorro",
                  desc: "Te presentamos un informe con las estrategias concretas y el ahorro estimado antes de avanzar.",
                },
                {
                  step: "3",
                  title: "Implementación y seguimiento",
                  desc: "Ejecutamos las acciones y hacemos seguimiento continuo para mantener la carga optimizada.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center flex flex-col items-center h-full">
                  <div className="w-14 h-14 bg-accent text-white flex items-center justify-center mx-auto mb-5 rounded-full font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-primary text-base mb-2 text-balance sm:min-h-[3rem] flex items-end justify-center">
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
                  text: "Excelentes profesionales. Me solucionaron todo. Los recomiendo.",
                  name: "Tomás O.",
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
              question="¿Qué es planificación fiscal?"
              answer="Es el análisis de tu situación impositiva para encontrar las opciones que la ley permite y que reducen tu carga tributaria de forma legal. No se trata de evadir, sino de aprovechar las herramientas que el sistema ofrece: deducciones, regímenes especiales, estructura societaria adecuada y timing de operaciones."
            />
            <FAQItem
              question="¿Me conviene monotributo o responsable inscripto?"
              answer="Depende de tu facturación, tus gastos deducibles y el tipo de clientes que tenés. El monotributo es más simple, pero como responsable inscripto podés deducir gastos y computar crédito fiscal de IVA. Analizamos tu caso y te recomendamos la opción que te deje mejor parado."
            />
            <FAQItem
              question="¿Puedo reducir legalmente lo que pago de Ganancias?"
              answer="Sí. Hay deducciones que muchos contribuyentes no usan: cargas de familia, alquiler de vivienda, seguros, créditos hipotecarios, gastos médicos, servicio doméstico, entre otras. Además, para empresas, existen estrategias de diferimiento y reinversión que pueden reducir el impuesto."
            />
            <FAQItem
              question="Tengo deuda con ARCA, ¿me conviene un plan de pagos?"
              answer="Generalmente sí, sobre todo si hay moratorias vigentes con condonación de intereses. Evaluamos tu deuda, las opciones disponibles y te asesoramos sobre el plan más conveniente. Cuanto antes se regularice, menor es el costo total."
            />
            <FAQItem
              question="¿Cuánto cuesta el asesoramiento fiscal?"
              answer="Depende de la complejidad. Antes de avanzar te damos un presupuesto cerrado que incluye el diagnóstico, la propuesta y la implementación."
            />
          </div>
        </section>

        {/* ══════════════════════════════════════
            7. CTA FINAL
        ══════════════════════════════════════ */}
        <section className="py-24 bg-primary">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Cada peso que pagás de más
              <br />
              <span className="text-white/70">es un peso que no invertís en tu negocio.</span>
            </h2>
            <p className="text-white/50 text-base mb-10">
              Consultanos y hacemos un diagnóstico inicial de tu situación fiscal.
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
