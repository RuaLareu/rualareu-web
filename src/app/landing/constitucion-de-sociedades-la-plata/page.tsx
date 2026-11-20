import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import { Phone, MessageCircle, Star, Search, FileText, Rocket, ChevronDown } from "lucide-react";
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
  "https://wa.me/5492212015592?text=Hola%2C%20quiero%20asesorarme%20sobre%20la%20constituci%C3%B3n%20de%20una%20SRL%20o%20SA%20en%20La%20Plata.";
const PHONE = "+54 9 221-201-5592";
const PHONE_RAW = "+5492212015592";

export const metadata: Metadata = {
  title: "Abogados para Constituir SRL o SA en La Plata",
  description:
    "Estudio jurídico contable que asesora a emprendedores y empresas de La Plata. Elegimos entre SRL y SA, redactamos el estatuto y acompañamos legal y contablemente a tu empresa.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://rualareu.com/landing/constitucion-de-sociedades-la-plata" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "RUA | LAREU - Abogados y Contadores para SRL y SA (La Plata)",
  description:
    "Estudio jurídico contable que atiende a clientes de La Plata. Asesoramos en la constitución de SRL y SA: elección del tipo societario, redacción del estatuto y acompañamiento legal y contable posterior.",
  url: "https://rualareu.com/landing/constitucion-de-sociedades-la-plata",
  telephone: "+54-9-221-201-5592",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Almirante Brown 3071, Piso 2",
    addressLocality: "Mar del Plata",
    addressRegion: "Buenos Aires",
    postalCode: "7600",
    addressCountry: "AR",
  },
  areaServed: [
    { "@type": "City", name: "La Plata" },
    { "@type": "City", name: "Berisso" },
    { "@type": "City", name: "Ensenada" },
  ],
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

export default function ConstitucionDeSociedadesLaPlataLanding() {
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
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80&auto=format&fit=crop"
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
              Abogados y contadores para constituir tu SRL o SA en La Plata
            </h1>
            <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Te asesoramos para elegir la estructura societaria adecuada, redactamos el estatuto y acompañamos legal y contablemente a tu empresa desde el primer día.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap bg-white text-primary text-lg font-semibold px-10 py-5 rounded hover:bg-white/90 transition-all duration-300"
              >
                <MessageCircle size={20} />
                Quiero asesorarme
              </a>
              <a
                href={`tel:${PHONE_RAW}`}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap border border-white/25 text-white/80 text-base font-medium px-8 py-5 rounded hover:bg-white/10 hover:text-white transition-all"
              >
                <Phone size={18} />
                {PHONE}
              </a>
            </div>
            <p className="text-white/35 text-xs">Presupuesto cerrado · Reuniones por videollamada · Estudio jurídico contable</p>
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
                  <Search size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-primary text-lg mb-3 text-balance md:min-h-[4rem] flex items-end justify-center">Elegimos juntos entre SRL o SA</h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-1">
                  Analizamos tu actividad, tus socios y tu proyección para recomendarte la figura societaria que
                  mejor protege tu negocio.
                </p>
              </div>
              <div className="text-center flex flex-col h-full">
                <div className="w-14 h-14 bg-primary-light text-primary flex items-center justify-center mx-auto mb-5 rounded-full">
                  <FileText size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-primary text-lg mb-3 text-balance md:min-h-[4rem] flex items-end justify-center">Redactamos tu estatuto</h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-1">
                  Diseñamos las cláusulas que gobiernan tu sociedad: aportes, administración, toma de decisiones
                  y salida de socios. Un estatuto pensado para tu caso, no un formulario.
                </p>
              </div>
              <div className="text-center flex flex-col h-full">
                <div className="w-14 h-14 bg-primary-light text-primary flex items-center justify-center mx-auto mb-5 rounded-full">
                  <Rocket size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-primary text-lg mb-3 text-balance md:min-h-[4rem] flex items-end justify-center">Dejamos tu empresa ordenada</h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-1">
                  Coordinamos la constitución con nuestros contadores para que la parte impositiva y contable nazca
                  prolija. Rúbrica de libros, facturación, impuestos y sueldos son servicios contables aparte.
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
              Asesoramos a socios y emprendedores que necesitan constituir una SRL o SA, y también a sociedades ya
              constituidas que buscan ordenarse. Si tu caso no aparece en la lista, consultanos igual.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Constitución de SRL",
                "Constitución de SA",
                "SRL vs SA — asesoramiento",
                "Acuerdos entre socios",
                "Reorganización societaria",
                "Transformación de sociedades",
                "Sociedades entre familiares",
                "Incorporación de socios",
                "Adecuación de estatutos",
                "Monotributista que pasa a sociedad",
                "Sociedades para emprendimientos",
                "Holding familiar",
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
            4. CÓMO TRABAJAMOS
        ══════════════════════════════════════ */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
              Cómo trabajamos
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-14" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { step: "1", title: "Asesoramiento inicial", desc: "Escuchamos tu proyecto por videollamada y te recomendamos entre SRL o SA con fundamentos." },
                { step: "2", title: "Diseño del estatuto", desc: "Redactamos el estatuto a medida y coordinamos la escritura con la escribanía." },
                { step: "3", title: "Constitución", desc: "Nuestros abogados llevan adelante los actos legales necesarios para que la sociedad quede válidamente constituida." },
                { step: "4", title: "Puesta en marcha impositiva", desc: "Nuestros contadores dejan la sociedad en condiciones de operar desde el punto de vista fiscal." },
                { step: "5", title: "Acompañamiento", desc: "Seguimos a tu lado para la contabilidad, los impuestos y las decisiones societarias que vengan después." },
              ].map((item) => (
                <div key={item.step} className="text-center flex flex-col items-center h-full">
                  <div className="w-12 h-12 bg-accent text-white flex items-center justify-center mx-auto mb-4 rounded-full font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-primary text-base mb-2 text-balance sm:min-h-[3rem] flex items-end justify-center">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed flex-1">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-text-secondary/80 text-sm text-center max-w-2xl mx-auto mt-12 leading-relaxed">
              La rúbrica de libros, la facturación electrónica, la liquidación de sueldos y la contabilidad mensual
              son <strong className="text-primary">servicios contables aparte</strong>. Si querés seguir con nosotros,{" "}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-primary font-medium transition-colors"
              >
                consultanos
              </a>.
            </p>

            <p className="text-text-secondary/60 text-xs text-center max-w-2xl mx-auto mt-6 leading-relaxed">
              RUA | LAREU es un estudio jurídico contable privado e independiente. No somos un organismo público ni
              tenemos vinculación con la Dirección Provincial de Personas Jurídicas ni con ningún otro ente estatal.
            </p>
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
                  text: "RUA | LAREU es una excelente opción para quienes buscan un servicio serio, confiable y de alta calidad en el ámbito jurídico-contable. Totalmente recomendable.",
                  name: "Patricia Neto",
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
              question="¿Qué conviene más: SRL o SA?"
              answer="Depende de tu actividad, cantidad de socios, capital y planes de crecimiento. La SRL da un marco clásico y probado, con capital dividido en cuotas y gerencia, y suele ser la opción para pymes y estructuras familiares o de pocos socios. La SA conviene para estructuras más grandes, con directorio y capital dividido en acciones, o cuando se planea sumar inversores. En la primera consulta te lo definimos con números concretos."
            />
            <FAQItem
              question="¿Cuánto tarda constituir una sociedad?"
              answer="Depende del tipo societario y de la carga de trabajo del registro provincial. En la primera reunión te damos una estimación realista según tu caso."
            />
            <FAQItem
              question="¿Qué costos tiene?"
              answer="Hay costos de escribanía, publicaciones, tasas registrales, el capital mínimo según el tipo societario y nuestros honorarios profesionales. Te pasamos un presupuesto cerrado antes de empezar, con todos los ítems detallados."
            />
            <FAQItem
              question="¿Puedo constituir una sociedad si hoy soy monotributista?"
              answer="Sí, y muchas veces conviene: analizamos tu carga fiscal actual y te mostramos si el salto a sociedad te ahorra impuestos o te ordena la operación."
            />
            <FAQItem
              question="¿Necesito un contador además del abogado?"
              answer="En nuestro estudio tenés los dos. Los abogados arman la estructura legal y los contadores dejan la parte impositiva y contable funcionando desde el primer mes."
            />
            <FAQItem
              question="¿Constituyen SAS o inscriben ante IGJ (CABA)?"
              answer="No. Asesoramos exclusivamente en la constitución de SRL y SA con domicilio en la Provincia de Buenos Aires (registro ante la DPPJ). No trabajamos con sociedades de CABA (IGJ) ni con SAS."
            />
            <FAQItem
              question="¿Tienen oficina en La Plata?"
              answer="Nuestro estudio está en Mar del Plata. Con clientes de La Plata trabajamos a distancia, con reuniones por videollamada y documentación digital, corresponsales en la ciudad y viajando cuando hace falta. Constituimos SRL y SA con domicilio en cualquier punto de la Provincia de Buenos Aires."
            />
          </div>
        </section>

        {/* ══════════════════════════════════════
            7. CTA FINAL
        ══════════════════════════════════════ */}
        <section className="py-24 bg-primary">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Empezá tu empresa
              <br />
              <span className="text-white/70">con el respaldo de un estudio jurídico contable.</span>
            </h2>
            <p className="text-white/50 text-base mb-10">
              Asesoramiento, redacción del estatuto y acompañamiento posterior, en un solo lugar.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap bg-white text-primary text-lg font-semibold px-10 py-5 rounded hover:bg-white/90 transition-all duration-300"
              >
                <MessageCircle size={20} />
                Quiero asesorarme
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
              Lunes a viernes · 08:00 a 17:00 · Atención a La Plata y alrededores
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
