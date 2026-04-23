import type { Metadata } from "next";
import Image from "next/image";
import { Phone, MessageCircle, Star, Shield, Clock, Award, ChevronDown } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5492235790012?text=Hola%2C%20tuve%20un%20accidente%20de%20trabajo%20y%20quisiera%20asesorarme.";
const PHONE = "+54 9 223-579-0012";
const PHONE_RAW = "+5492235790012";

export const metadata: Metadata = {
  title: "Abogado Accidentes de Trabajo Mar del Plata | Reclamos ART | Consulta Gratis",
  description:
    "Sufriste un accidente de trabajo? Somos abogados especialistas en reclamos contra ART en Mar del Plata. Consulta gratuita. Cobramos solo si ganás.",
  robots: { index: true, follow: false },
  alternates: { canonical: "/landing/accidentes-de-trabajo" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "RUA | LAREU - Abogados de Accidentes de Trabajo",
  description: "Abogados especialistas en accidentes de trabajo y reclamos contra ART en Mar del Plata.",
  url: "https://rualareu.com/landing/accidentes-de-trabajo",
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
    <details className="group border-b border-white/10 last:border-0">
      <summary className="flex items-center justify-between py-5 cursor-pointer text-white text-[15px] font-medium list-none">
        {question}
        <ChevronDown size={18} className="text-accent flex-shrink-0 ml-4 group-open:rotate-180 transition-transform" />
      </summary>
      <p className="pb-5 text-white/60 text-sm leading-relaxed pr-8">{answer}</p>
    </details>
  );
}

export default function AccidentesLanding() {
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
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80&auto=format&fit=crop"
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
              <span className="text-white/70 text-xs">5.0 en Google · 18 opiniones</span>
            </div>

            <h1 className="text-white text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              ¿Tuviste un accidente
              <br />
              de trabajo?
            </h1>
            <p className="text-white/60 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto mb-4">
              Te ayudamos a cobrar lo que te corresponde.
            </p>
            <p className="text-white/85 text-sm sm:text-base mb-10">
              Abogados especialistas en accidentes de trabajo y enfermedades profesionales en Mar del Plata.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary text-lg font-semibold px-10 py-5 rounded hover:bg-white/90 transition-all duration-300"
              >
                <MessageCircle size={20} />
                Consultanos ahora — Es gratis
              </a>
              <a
                href={`tel:${PHONE_RAW}`}
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white/80 text-base font-medium px-8 py-5 rounded hover:bg-white/10 hover:text-white transition-all"
              >
                <Phone size={18} />
                Llamanos: {PHONE}
              </a>
            </div>
            <p className="text-white/35 text-xs">Consulta gratuita · Cobramos solo si ganás</p>
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
              <div className="text-center">
                <div className="w-14 h-14 bg-primary-light text-primary flex items-center justify-center mx-auto mb-5 rounded-full">
                  <Shield size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-primary text-lg mb-3">Si la ART te rechazó</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Recurrimos el rechazo ante las Comisiones Médicas y, si es necesario, ante la justicia.
                  Muchos rechazos son injustificados y se revierten con el reclamo adecuado.
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-primary-light text-primary flex items-center justify-center mx-auto mb-5 rounded-full">
                  <Clock size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-primary text-lg mb-3">Si te dieron el alta antes de tiempo</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  No estás obligado a aceptar un alta con la que no estés de acuerdo.
                  Solicitamos la revisión y los estudios médicos complementarios que correspondan.
                </p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-primary-light text-primary flex items-center justify-center mx-auto mb-5 rounded-full">
                  <Award size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-primary text-lg mb-3">Si quedaste con una incapacidad</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Verificamos que el porcentaje de incapacidad sea justo y reclamamos la indemnización
                  correcta. Las ART suelen minimizar — nosotros no dejamos que eso pase.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            3. TIPOS DE ACCIDENTES
        ══════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
              Tipos de accidentes y lesiones
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-12" />

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Fracturas y traumatismos",
                "Quemaduras",
                "Hernias de disco",
                "Amputaciones",
                "Caídas de altura",
                "Aplastamientos",
                "Electrocución",
                "Lesiones de columna",
                "Hipoacusia",
                "Enfermedades respiratorias",
                "Estrés y burnout",
                "Accidente in itinere",
              ].map((item) => (
                <span
                  key={item}
                  className="text-sm text-primary bg-primary-light px-5 py-2.5 border border-primary/10"
                >
                  {item}
                </span>
              ))}
            </div>
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
                { step: "1", title: "Nos contactás", desc: "Gratis y sin compromiso. Contanos qué pasó." },
                { step: "2", title: "Evaluamos tu caso", desc: "Revisamos la documentación y te decimos cómo seguir." },
                { step: "3", title: "Iniciamos el reclamo", desc: "Ante la ART, Comisiones Médicas o la justicia." },
                { step: "4", title: "Cobrás tu indemnización", desc: "Te acompañamos hasta que cobres lo que te corresponde." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-accent text-white flex items-center justify-center mx-auto mb-4 rounded-full font-bold text-lg">
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
                  text: "Tuve un accidente en la obra y la ART me quería dar el alta sin estar recuperado. Gracias al estudio pude reclamar y cobrar una indemnización justa.",
                  initials: "M.G.",
                  city: "Mar del Plata",
                },
                {
                  text: "Me habían rechazado el reclamo y pensé que no tenía opciones. Ellos lo llevaron a Comisiones Médicas y lograron que me reconocieran la incapacidad.",
                  initials: "R.L.",
                  city: "Mar del Plata",
                },
                {
                  text: "Me caí en el trayecto al trabajo y no sabía que eso también estaba cubierto. Me asesoraron, hicieron todo el trámite y pude cobrar.",
                  initials: "C.P.",
                  city: "Batán",
                },
              ].map((t) => (
                <div key={t.initials} className="bg-background p-6 border border-primary/15">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed mb-5 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">{t.initials}</span>
                    </div>
                    <span className="text-text-secondary text-xs">{t.city}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            6. FAQ
        ══════════════════════════════════════ */}
        <section className="py-20 bg-primary">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="font-sackers-heavy text-white text-2xl sm:text-3xl text-center mb-4">
              Preguntas frecuentes
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-12" />

            <FAQItem
              question="¿Cuánto tiempo tengo para reclamar?"
              answer="El plazo de prescripción es de 2 años desde que se determinó la incapacidad o desde la última prestación de la ART. Es fundamental actuar lo antes posible para preservar la prueba médica."
            />
            <FAQItem
              question="¿Me pueden despedir por reclamar a la ART?"
              answer="No. Reclamar a la ART es tu derecho y no constituye causa de despido. Si te despiden por ese motivo, el despido puede considerarse discriminatorio y dar lugar a indemnizaciones agravadas."
            />
            <FAQItem
              question="¿Cuánto puedo cobrar?"
              answer="Depende del grado de incapacidad, tu edad y tu salario. No podemos darte un número sin evaluar tu caso, pero sí podemos decirte que las ART suelen ofrecer menos de lo que corresponde. Te hacemos el cálculo correcto."
            />
            <FAQItem
              question="¿Qué documentos necesito?"
              answer="Idealmente: el parte de accidente, los estudios médicos, el alta de la ART (si la tenés), recibos de sueldo y DNI. Pero si no tenés todo, no importa — nos encargamos de conseguir lo que falte."
            />
            <FAQItem
              question="¿Cobran algo por la consulta?"
              answer="No. La consulta inicial es gratuita y sin compromiso. Evaluamos tu caso y te decimos cuáles son tus opciones. Si decidís avanzar, cobramos honorarios solo si ganás."
            />
          </div>
        </section>

        {/* ══════════════════════════════════════
            7. CTA FINAL
        ══════════════════════════════════════ */}
        <section className="py-24 bg-primary border-t border-white/8">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              No dejes pasar más tiempo.
              <br />
              <span className="text-white/70">Cada día cuenta.</span>
            </h2>
            <p className="text-white/50 text-base mb-10">
              Consultanos hoy. Es gratis, es confidencial y no te compromete a nada.
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
