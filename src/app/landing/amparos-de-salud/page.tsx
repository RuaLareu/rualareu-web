import type { Metadata } from "next";
import Image from "next/image";
import {
  Phone, MessageCircle, Star, ChevronDown,
  HeartPulse, Pill, Brain, Accessibility, Baby,
  ShieldOff, DollarSign, Stethoscope, Clock,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5492235790012?text=Hola%2C%20necesito%20asesoramiento%20sobre%20un%20amparo%20de%20salud.";
const PHONE = "+54 9 223-579-0012";
const PHONE_RAW = "+5492235790012";

export const metadata: Metadata = {
  title: "Amparo de Salud Mar del Plata | Obra Social y Prepaga | Consulta Gratis | RUA | LAREU",
  description:
    "Tu obra social o prepaga te niega un tratamiento? Iniciamos amparos de salud en Mar del Plata. Medida cautelar en 48-72hs. Consulta gratuita.",
  robots: { index: true, follow: false },
  alternates: { canonical: "/landing/amparos-de-salud" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "RUA | LAREU - Amparos de Salud",
  description: "Abogados especialistas en amparos de salud contra obras sociales y prepagas en Mar del Plata.",
  url: "https://rualareu.com/landing/amparos-de-salud",
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
              <span className="text-white/70 text-xs">5.0 en Google · 18 opiniones</span>
            </div>

            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
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
                <div key={item.step} className="text-center">
                  <div className="w-14 h-14 bg-accent text-white flex items-center justify-center mx-auto mb-5 rounded-full font-bold text-xl">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-primary text-lg mb-3">{item.title}</h3>
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
              Casos que resolvimos
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-14" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  text: "Mi prepaga me negaba un medicamento oncológico. En 3 días tenía la cautelar y empecé el tratamiento.",
                  initials: "L.M.",
                  city: "Mar del Plata",
                },
                {
                  text: "La obra social no me cubría la rehabilitación de mi hijo con discapacidad. Gracias al amparo hoy tiene toda la cobertura.",
                  initials: "A.R.",
                  city: "Mar del Plata",
                },
                {
                  text: "Me querían dar de baja del plan por mi edad. Presentaron el amparo y no solo me mantuvieron sino que me reintegraron lo cobrado de más.",
                  initials: "E.V.",
                  city: "Miramar",
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
        <section className="py-24 bg-primary border-t border-white/8">
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
