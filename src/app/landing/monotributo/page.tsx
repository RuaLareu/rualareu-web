import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import { Phone, MessageCircle, Star, ChevronDown, CheckCircle, AlertTriangle, Users, FileText, Calculator, RefreshCw } from "lucide-react";
import { GOOGLE_REVIEWS } from "@/lib/constants";

const WHATSAPP_URL =
  "https://wa.me/5492235790012?text=Hola%2C%20necesito%20asesoramiento%20sobre%20monotributo.";
const PHONE = "+54 9 223-579-0012";
const PHONE_RAW = "+5492235790012";

export const metadata: Metadata = {
  title: "Monotributo Mar del Plata | Contador | Inscripción y Recategorización | RUA | LAREU",
  description:
    "Estudio contable en Mar del Plata. Inscripción, recategorización, facturación electrónica y asesoramiento permanente para monotributistas. Consultá sin compromiso.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/landing/monotributo" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "RUA | LAREU - Monotributo",
  description: "Estudio contable especializado en monotributo en Mar del Plata.",
  url: "https://rualareu.com/landing/monotributo",
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

export default function MonotributoLanding() {
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
              Monotributo
              <br />
              <span className="text-white/70">sin complicaciones.</span>
            </h1>
            <p className="text-white/55 text-lg leading-relaxed max-w-lg mx-auto mb-4">
              Nos encargamos de todo.
            </p>
            <p className="text-white/40 text-sm mb-10">
              Estudio contable en Mar del Plata. Inscripción, recategorización y asesoramiento permanente.
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
            <p className="text-white/30 text-xs">Sin compromiso · Respuesta inmediata</p>
          </div>
        </section>

        {/* ══════════════════════════════════════
            2. SERVICIOS
        ══════════════════════════════════════ */}
        <section className="py-20 bg-background">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
              ¿Qué hacemos por vos?
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-14" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: FileText, title: "Inscripción desde cero", desc: "Te damos de alta en ARCA, elegimos la categoría correcta y te dejamos facturando." },
                { icon: RefreshCw, title: "Recategorización semestral", desc: "Controlamos tu facturación y te recategorizamos en enero y julio sin que tengas que preocuparte." },
                { icon: Calculator, title: "Paso a Resp. Inscripto", desc: "Si superás los topes, planificamos la transición para que el cambio sea ordenado y sin sorpresas." },
                { icon: Users, title: "Asesoramiento permanente", desc: "Facturación electrónica, consulta de deudas, planes de pago, trámites ARCA. Estamos siempre." },
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
            3. CATEGORÍAS
        ══════════════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
              Categorías del monotributo
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-6" />
            <p className="text-text-secondary text-sm text-center mb-4 max-w-lg mx-auto">
              Valores vigentes desde el 1 de febrero de 2026. Los montos se actualizan periódicamente por resolución de ARCA.
            </p>
            <p className="text-text-secondary/60 text-xs text-center mb-12">
              La cuota total incluye impuesto integrado + aportes al SIPA + obra social (afiliación individual sin adherentes).
            </p>

            <div className="overflow-x-auto -mx-6 px-6">
              <table className="w-full text-sm min-w-[640px]">
                <thead>
                  <tr className="border-b-2 border-primary/10">
                    <th className="text-left py-3 px-3 font-sackers-medium text-[9px] tracking-[0.2em] text-primary">Cat.</th>
                    <th className="text-left py-3 px-3 font-sackers-medium text-[9px] tracking-[0.2em] text-primary">Ingresos brutos anuales</th>
                    <th className="text-left py-3 px-3 font-sackers-medium text-[9px] tracking-[0.2em] text-primary">Actividad</th>
                    <th className="text-right py-3 px-3 font-sackers-medium text-[9px] tracking-[0.2em] text-primary">Cuota servicios</th>
                    <th className="text-right py-3 px-3 font-sackers-medium text-[9px] tracking-[0.2em] text-primary">Cuota comercio</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { cat: "A", tope: "$10.277.988", act: "Servicios / Comercio", serv: "$42.387", com: "$42.387" },
                    { cat: "B", tope: "$15.058.448", act: "Servicios / Comercio", serv: "$48.251", com: "$48.251" },
                    { cat: "C", tope: "$21.113.697", act: "Servicios / Comercio", serv: "$56.502", com: "$55.227" },
                    { cat: "D", tope: "$26.212.853", act: "Servicios / Comercio", serv: "$72.414", com: "$70.661" },
                    { cat: "E", tope: "$30.833.964", act: "Servicios / Comercio", serv: "$102.538", com: "$92.658" },
                    { cat: "F", tope: "$38.642.048", act: "Servicios / Comercio", serv: "$129.045", com: "$111.198" },
                    { cat: "G", tope: "$46.211.109", act: "Servicios / Comercio", serv: "$197.108", com: "$135.918" },
                    { cat: "H", tope: "$70.113.407", act: "Servicios (máx.) / Comercio", serv: "$447.347", com: "$272.063" },
                    { cat: "I", tope: "$78.479.212", act: "Solo comercio", serv: "—", com: "$406.512" },
                    { cat: "J", tope: "$89.872.640", act: "Solo comercio", serv: "—", com: "$497.059" },
                    { cat: "K", tope: "$108.357.084", act: "Solo comercio", serv: "—", com: "$600.880" },
                  ].map((row) => (
                    <tr key={row.cat} className="border-b border-primary/15 hover:bg-background/50 transition-colors">
                      <td className="py-3 px-3 font-semibold text-primary">{row.cat}</td>
                      <td className="py-3 px-3 text-text-secondary">{row.tope}</td>
                      <td className="py-3 px-3 text-text-secondary text-xs">{row.act}</td>
                      <td className="py-3 px-3 text-text-secondary text-right tabular-nums">{row.serv}</td>
                      <td className="py-3 px-3 text-text-secondary text-right tabular-nums">{row.com}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:text-[#263B35] transition-colors"
              >
                Consultanos los valores actualizados →
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            4. ERRORES COMUNES
        ══════════════════════════════════════ */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
              Errores que te pueden costar caro
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-14" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "No recategorizarse a tiempo", desc: "ARCA puede recategorizarte de oficio con diferencias e intereses. Lo hacemos por vos en enero y julio." },
                { title: "Superar el tope sin darse cuenta", desc: "Si tu facturación supera el límite, te excluyen del monotributo. Llevamos el control mes a mes." },
                { title: "No emitir facturas electrónicas", desc: "ARCA cruza datos con bancos y plataformas de pago. La informalidad se detecta y trae consecuencias." },
                { title: "No pagar la obra social", desc: "Si no pagás la cuota, perdés la cobertura médica. Te avisamos antes de que pase." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-white p-6 border border-primary/15 h-full">
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
            5. PARA QUIÉN ES
        ══════════════════════════════════════ */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
              ¿Para quién es este servicio?
            </h2>
            <div className="w-10 h-px bg-accent mx-auto mb-14" />

            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Emprendedores",
                "Freelancers",
                "Profesionales independientes",
                "Oficios y servicios",
                "Comerciantes pequeños",
                "Docentes con horas cátedra",
                "Diseñadores y programadores",
                "Kinesiólogos y terapeutas",
                "Electricistas y plomeros",
                "Vendedores online",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-sm text-primary bg-primary-light px-5 py-2.5 border border-primary/10"
                >
                  <CheckCircle size={14} className="text-accent flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            5.5 TESTIMONIOS
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
                  text: "Excelente estudio. Me asesoran permanentemente en todas sus áreas con mucha claridad y profesionalismo. Siempre con enorme predisposición para abordar cada tema y consulta. Sin dudas los recomiendo.",
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
              question="¿Cuánto pago de monotributo?"
              answer="La cuota depende de tu categoría, que se define por tu facturación anual, la superficie de tu local y el consumo de energía eléctrica. Incluye el componente impositivo, el aporte jubilatorio y la obra social. Consultanos para saber cuánto pagarías según tu situación."
            />
            <FAQItem
              question="¿Qué pasa si me excluyen del monotributo?"
              answer="Si ARCA te excluye, pasás automáticamente al régimen general (responsable inscripto) y debés inscribirte en IVA y Ganancias. Puede haber un recálculo de obligaciones retroactivo. Lo ideal es planificar la transición antes de llegar a ese punto."
            />
            <FAQItem
              question="¿Puedo volver al monotributo después de ser responsable inscripto?"
              answer="Sí, pero debés esperar 3 años desde la exclusión para reingresar, siempre que cumplas los requisitos de la categoría a la que quieras adherirte. Si la baja fue voluntaria (no por exclusión), podés volver cuando quieras."
            />
            <FAQItem
              question="¿Qué impuestos pago como responsable inscripto?"
              answer="Como responsable inscripto pagás IVA (mensual), Impuesto a las Ganancias (anual con anticipos), Ingresos Brutos (mensual o bimestral) y aportes de autónomos. Es más complejo que el monotributo, pero permite deducir gastos y computar crédito fiscal de IVA."
            />
            <FAQItem
              question="¿Necesito un contador para el monotributo?"
              answer="No es obligatorio, pero sí muy recomendable. Un contador te asegura estar en la categoría correcta, te recategoriza a tiempo, te avisa si estás por superar los topes y te ayuda con la facturación electrónica. Prevenir un error de ARCA cuesta mucho menos que corregirlo."
            />
          </div>
        </section>

        {/* ══════════════════════════════════════
            7. CTA FINAL
        ══════════════════════════════════════ */}
        <section className="py-24 bg-primary">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
              Dejá el monotributo
              <br />
              <span className="text-white/70">en buenas manos.</span>
            </h2>
            <p className="text-white/50 text-base mb-10">
              Escribinos y te asesoramos sin compromiso.
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
