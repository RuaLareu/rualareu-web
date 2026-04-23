import type { Metadata } from "next";
import Image from "next/image";
import {
  Phone, MessageCircle, Star, ChevronDown,
  ShieldCheck, Search, FileText, CheckCircle,
  Type, Image as ImageIcon, Layers, Box, Volume2,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5492235790012?text=Hola%2C%20quiero%20registrar%20una%20marca%20y%20necesito%20asesoramiento.";
const PHONE = "+54 9 223-579-0012";
const PHONE_RAW = "+5492235790012";

export const metadata: Metadata = {
  title: "Registro de Marcas Mar del Plata | INPI | Protegé tu Negocio | RUA | LAREU",
  description:
    "Registro de marcas ante INPI en Mar del Plata. Búsqueda de antecedentes, solicitud, oposiciones y renovación. Protegé tu negocio. Consulta sin compromiso.",
  robots: { index: true, follow: false },
  alternates: { canonical: "/landing/registro-de-marcas" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "RUA | LAREU - Registro de Marcas",
  description: "Registro de marcas ante INPI. Asesoramiento en propiedad intelectual en Mar del Plata.",
  url: "https://rualareu.com/landing/registro-de-marcas",
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
    reviewCount: "18",
    bestRating: "5",
  },
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-primary/20 last:border-0">
      <summary className="flex items-center justify-between py-5 cursor-pointer text-text text-[15px] font-medium list-none">
        {question}
        <ChevronDown size={18} className="text-accent flex-shrink-0 ml-4 group-open:rotate-180 transition-transform" />
      </summary>
      <p className="pb-5 text-text-secondary text-sm leading-relaxed pr-8">{answer}</p>
    </details>
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
              <span className="text-white/70 text-xs">5.0 en Google · 18 opiniones</span>
            </div>

            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
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
                className="inline-flex items-center justify-center gap-2 bg-white text-primary text-lg font-semibold px-10 py-5 rounded hover:bg-white/90 transition-all duration-300"
              >
                <MessageCircle size={20} />
                Consultanos ahora
              </a>
              <a
                href={`tel:${PHONE_RAW}`}
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white/80 text-base font-medium px-8 py-5 rounded hover:bg-white/10 hover:text-white transition-all"
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
                <div key={item.step} className="text-center">
                  <div className="w-14 h-14 bg-accent text-white flex items-center justify-center mx-auto mb-5 rounded-full font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-primary text-base mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
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
            6. FAQ
        ══════════════════════════════════════ */}
        <section className="py-20 bg-background">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
              Preguntas frecuentes
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-12" />

            <FAQItem
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
                className="inline-flex items-center justify-center gap-2 bg-white text-primary text-lg font-semibold px-10 py-5 rounded hover:bg-white/90 transition-all duration-300"
              >
                <MessageCircle size={20} />
                Escribinos por WhatsApp
              </a>
              <a
                href={`tel:${PHONE_RAW}`}
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white/80 text-base font-medium px-8 py-5 rounded hover:bg-white/10 hover:text-white transition-all"
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

      {/* ── Minimal footer ── */}
      <footer className="bg-[#1a2e28] py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} RUA | LAREU. Todos los derechos reservados.
          </p>
          <a href="/" className="text-white/30 text-xs hover:text-white/60 transition-colors">
            Conocé más sobre nuestro estudio →
          </a>
          <p className="text-white/20 text-xs">
            Almirante Brown 3071, Piso 2, Mar del Plata (7600)
          </p>
        </div>
      </footer>
    </>
  );
}
