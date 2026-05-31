import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import {
  Phone, MessageCircle, Star, ChevronDown,
  ShieldCheck, Search, FileText, CheckCircle,
  Type, Image as ImageIcon, Layers, Box, Volume2,
} from "lucide-react";
import { GOOGLE_REVIEWS } from "@/lib/constants";

const WHATSAPP_URL =
  "https://wa.me/5492236972421?text=Hola%2C%20quiero%20registrar%20una%20marca%20y%20necesito%20asesoramiento.";
const PHONE = "+54 9 223-697-2421";
const PHONE_RAW = "+5492236972421";

export const metadata: Metadata = {
  title: "Registro de Marcas Mar del Plata | INPI | Protegé tu Negocio | RUA | LAREU",
  description:
    "Registro de marcas ante INPI en Mar del Plata. Búsqueda de antecedentes, solicitud, oposiciones y renovación. Protegé tu negocio. Consulta sin compromiso.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/landing/registro-de-marcas" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "RUA | LAREU - Registro de Marcas",
  description: "Registro de marcas ante INPI. Asesoramiento en propiedad intelectual en Mar del Plata.",
  url: "https://rualareu.com/landing/registro-de-marcas",
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

export default function RegistroMarcasLanding() {
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
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-white text-white" />
                ))}
              </div>
              <span className="text-white/70 text-xs">{GOOGLE_REVIEWS.rating} en Google · {GOOGLE_REVIEWS.reviewCount} opiniones</span>
            </div>

            <h1 className="text-white text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              Protegé tu marca.
              <br />
              <span className="text-white/70">Registrala antes de que otro lo haga.</span>
            </h1>
            <p className="text-white/55 text-base sm:text-lg leading-relaxed max-w-lg mx-auto mb-10">
              Registro de marcas ante INPI. Trámite rápido y asesoramiento integral desde Mar del Plata.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap bg-white text-primary text-lg font-semibold px-10 py-5 rounded hover:bg-white/90 transition-all duration-300"
              >
                <MessageCircle size={20} />
                Consultanos ahora
              </a>
              <a
                href={`tel:${PHONE_RAW}`}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto whitespace-nowrap border border-white/25 text-white/80 text-base font-medium px-8 py-5 rounded hover:bg-white/10 hover:text-white transition-all"
              >
                <Phone size={18} />
                {PHONE}
              </a>
            </div>
            <p className="text-white/30 text-xs">Consulta sin compromiso · Presupuesto cerrado</p>
          </div>
        </section>

        {/* ══════════════════════════════════════
            2. QUÉ ES UNA MARCA
        ══════════════════════════════════════ */}
        <section className="py-20 bg-background">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
              ¿Qué es una marca y por qué registrarla?
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-10" />

            <div className="space-y-5 text-text-secondary text-[15px] leading-[1.85]">
              <p>
                Una marca es el <strong className="text-primary">nombre, logo, slogan o signo</strong> que
                identifica tu negocio y lo diferencia de la competencia. Es uno de los activos más
                valiosos de cualquier emprendimiento o empresa.
              </p>
              <p>
                Registrarla ante el <strong className="text-primary">INPI</strong> (Instituto Nacional
                de la Propiedad Industrial) te otorga el <strong className="text-primary">derecho
                exclusivo de uso</strong> en todo el territorio argentino por <strong className="text-primary">10
                años renovables</strong>. Sin registro, cualquier tercero podría usar un nombre igual
                o similar — e incluso registrarlo antes que vos.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: ShieldCheck, text: "Derecho exclusivo de uso en todo el país" },
                { icon: CheckCircle, text: "Protección por 10 años renovables" },
                { icon: FileText, text: "Base para accionar contra imitadores" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-start gap-3 bg-white p-4 border border-primary/15">
                    <Icon size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary text-sm leading-relaxed">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            3. PROCESO PASO A PASO
        ══════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
              Proceso de registro
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-14" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1", icon: Search,
                  title: "Búsqueda de antecedentes",
                  desc: "Verificamos en la base del INPI que no existan marcas iguales o similares registradas en las mismas clases.",
                },
                {
                  step: "2", icon: FileText,
                  title: "Solicitud de registro",
                  desc: "Presentamos la solicitud ante el INPI, eligiendo las clases de Niza que correspondan a tu actividad.",
                },
                {
                  step: "3", icon: Layers,
                  title: "Publicación",
                  desc: "La marca se publica en el Boletín de Marcas por 30 días para que terceros puedan presentar oposiciones.",
                },
                {
                  step: "4", icon: CheckCircle,
                  title: "Concesión del registro",
                  desc: "Si no hay oposiciones (o se resuelven favorablemente), el INPI concede el registro. Plazo total: 6 a 12 meses aproximadamente.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center flex flex-col items-center h-full">
                  <div className="w-14 h-14 bg-accent text-white flex items-center justify-center mx-auto mb-5 rounded-full font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-primary text-base mb-2 min-h-[3.5rem] flex items-end justify-center">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed flex-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            4. TIPOS DE MARCAS
        ══════════════════════════════════════ */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
              ¿Qué podemos registrar?
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-14" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Type, title: "Denominativas", desc: "El nombre o las palabras que identifican tu marca. Ejemplo: \"Havanna\"." },
                { icon: ImageIcon, title: "Figurativas", desc: "Un logo o diseño gráfico sin palabras. Ejemplo: la manzana de Apple." },
                { icon: Layers, title: "Mixtas", desc: "Combinación de nombre + logo. Es la más común. Ejemplo: el logo de Nike con el nombre." },
                { icon: Box, title: "Tridimensionales", desc: "La forma del producto o su envase. Ejemplo: la botella de Coca-Cola." },
                { icon: Volume2, title: "Sonoras", desc: "Un sonido que identifica a la marca. Ejemplo: el jingle de Intel." },
                { icon: ShieldCheck, title: "Eslóganes", desc: "Frases publicitarias registrables. Ejemplo: \"Just Do It\"." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-white p-6 border border-primary/15 flex flex-col h-full">
                    <div className="w-10 h-10 bg-primary-light text-primary flex items-center justify-center mb-4 rounded-full">
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
            5. CLASES DE NIZA
        ══════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
              Clases de Niza: ¿qué son?
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-10" />

            <p className="text-text-secondary text-[15px] leading-[1.85] text-center mb-10 max-w-xl mx-auto">
              La Clasificación Internacional de Niza agrupa todos los productos y servicios en
              <strong className="text-primary"> 45 clases</strong> (34 de productos + 11 de servicios).
              Al registrar tu marca, debés elegir en qué clase o clases la registrás según tu actividad.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { clase: "Clase 25", ejemplo: "Ropa, calzado, sombrerería" },
                { clase: "Clase 35", ejemplo: "Publicidad, gestión de negocios, comercio minorista" },
                { clase: "Clase 41", ejemplo: "Educación, formación, entretenimiento" },
                { clase: "Clase 42", ejemplo: "Desarrollo de software, consultoría tecnológica" },
                { clase: "Clase 43", ejemplo: "Restaurantes, bares, alojamiento" },
                { clase: "Clase 30", ejemplo: "Café, panadería, confitería, pastas" },
                { clase: "Clase 9", ejemplo: "Software, apps, electrónica" },
                { clase: "Clase 36", ejemplo: "Servicios financieros, inmobiliarios, seguros" },
              ].map((item) => (
                <div key={item.clase} className="flex items-start gap-3 bg-background p-4 border border-primary/15">
                  <span className="text-xs font-semibold text-accent whitespace-nowrap mt-0.5">{item.clase}</span>
                  <span className="text-text-secondary text-sm">{item.ejemplo}</span>
                </div>
              ))}
            </div>

            <p className="text-text-secondary/60 text-xs text-center mt-6">
              Hay 45 clases en total. Te asesoramos sobre cuáles corresponden a tu negocio.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════
            5b. TESTIMONIOS (Google Reviews reales)
        ══════════════════════════════════════ */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl mb-4">
                Lo que dicen quienes ya confiaron en nosotros
              </h2>
              <div className="w-10 h-px bg-accent mx-auto mb-4" />
              <a
                href={GOOGLE_REVIEWS.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-secondary text-sm hover:text-primary transition-colors"
              >
                <GoogleLogo />
                <span>{GOOGLE_REVIEWS.rating} en Google · {GOOGLE_REVIEWS.reviewCount} opiniones</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  name: "Patricia N.",
                  text: "Excelente atención y profesionalismo. Resolvieron todas mis consultas con claridad y rapidez. Muy recomendable.",
                },
                {
                  name: "Real Step Sport Group",
                  text: "Trabajamos con el estudio en todo el armado societario y la asesoría sigue siendo permanente. Cumplen y responden siempre.",
                },
                {
                  name: "Tomás O.",
                  text: "Un servicio muy completo, con explicaciones claras y acompañamiento durante todo el proceso. Quedé muy conforme.",
                },
              ].map((review) => (
                <div key={review.name} className="bg-white p-6 border border-primary/10 flex flex-col h-full">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed italic mb-4 flex-1">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <p className="text-primary text-sm font-semibold">{review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            6. FAQ
        ══════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
              Preguntas frecuentes
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-12" />

            <FAQItem
              defaultOpen
              question="¿Cuánto cuesta registrar una marca?"
              answer="El costo incluye la tasa oficial del INPI (que se paga por clase) y los honorarios profesionales por la búsqueda de antecedentes, la presentación y el seguimiento del trámite. Te damos un presupuesto cerrado antes de empezar para que sepas exactamente cuánto vas a invertir."
            />
            <FAQItem
              question="¿Cuánto tiempo tarda el registro?"
              answer="El trámite completo tarda entre 6 y 12 meses aproximadamente. Incluye la presentación, la publicación en el Boletín de Marcas (30 días), el período de oposición y la resolución del INPI. Si hay oposiciones de terceros, el plazo puede extenderse."
            />
            <FAQItem
              question="¿Qué pasa si alguien ya registró mi marca?"
              answer="Si la marca ya está registrada en la misma clase, no podés registrar una igual o confusamente similar. Pero hay alternativas: modificar el nombre, buscar una variante que no genere confusión, o evaluar si el registro anterior tiene debilidades que permitan cuestionarlo. Te asesoramos sobre las opciones."
            />
            <FAQItem
              question="¿En cuántas clases debo registrar mi marca?"
              answer="Depende de tu actividad. Si vendés ropa, con la clase 25 alcanza. Si además tenés un e-commerce, podrías necesitar también la clase 35. Si fabricás los productos, sumarías la clase de fabricación. Registrar en más clases da más protección pero tiene más costo. Te ayudamos a elegir las imprescindibles."
            />
            <FAQItem
              question="¿Qué pasa si no registro mi marca?"
              answer="Sin registro no tenés derecho exclusivo de uso. Cualquier tercero podría usar un nombre igual o similar para su negocio, e incluso podría registrarlo antes que vos y obligarte a cambiar de nombre. Registrar tu marca es la única forma de protegerla legalmente en Argentina."
            />
          </div>
        </section>

        {/* ══════════════════════════════════════
            7. CTA FINAL
        ══════════════════════════════════════ */}
        <section className="py-24 bg-primary">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Tu marca es tu identidad.
              <br />
              <span className="text-white/70">Protegela.</span>
            </h2>
            <p className="text-white/50 text-base mb-10">
              Consultanos y te damos un presupuesto cerrado para registrar tu marca.
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
