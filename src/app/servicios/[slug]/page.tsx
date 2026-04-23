import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { ALL_SERVICES, getServiceBySlug } from "@/lib/services";
import { generatePageMetadata } from "@/lib/metadata";
import { CONTACT } from "@/lib/constants";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import FAQAccordion from "@/components/ui/FAQAccordion";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

import laboralData from "@/data/services/laboral-seguridad-social";
import comercialData from "@/data/services/comercial-societario";
import consumidorData from "@/data/services/defensa-del-consumidor";
import civilData from "@/data/services/civil-familia-sucesiones";
import impositivoData from "@/data/services/asesoramiento-impositivo";
import auditoriaData from "@/data/services/auditoria-contabilidad";
import consultoriaData from "@/data/services/consultoria-empresarial";
import negociosData from "@/data/services/nuevos-negocios";
import sueldosData from "@/data/services/gestion-de-sueldos";
import complianceData from "@/data/services/compliance-prevencion-legal";
import comexData from "@/data/services/comercio-exterior";
import previsionalData from "@/data/services/derecho-previsional";
import type { ServicePageData } from "@/types/service";

const serviceDataMap: Record<string, ServicePageData> = {
  "laboral-seguridad-social": laboralData,
  "comercial-societario": comercialData,
  "defensa-del-consumidor": consumidorData,
  "civil-familia-sucesiones": civilData,
  "asesoramiento-impositivo": impositivoData,
  "auditoria-contabilidad": auditoriaData,
  "consultoria-empresarial": consultoriaData,
  "nuevos-negocios": negociosData,
  "gestion-de-sueldos": sueldosData,
  "compliance-prevencion-legal": complianceData,
  "comercio-exterior": comexData,
  "derecho-previsional": previsionalData,
};

const relatedPosts: Record<string, { slug: string; title: string; category: string }[]> = {
  "laboral-seguridad-social": [
    { slug: "que-hacer-si-te-despiden-sin-causa", title: "Qué hacer si te despiden sin causa en Argentina (2026)", category: "Laboral" },
    { slug: "accidentes-de-trabajo-reclamar-art", title: "Accidentes de trabajo: todo lo que debés saber para reclamar a la ART", category: "Laboral" },
  ],
  "comercial-societario": [
    { slug: "como-constituir-sas-argentina", title: "Cómo constituir una SAS en Argentina paso a paso", category: "Societario" },
    { slug: "derechos-consumidor-reclamar-producto-defectuoso", title: "Derechos del consumidor: cómo reclamar por un producto defectuoso", category: "Consumidor" },
  ],
  "defensa-del-consumidor": [
    { slug: "derechos-consumidor-reclamar-producto-defectuoso", title: "Derechos del consumidor: cómo reclamar por un producto defectuoso", category: "Consumidor" },
    { slug: "amparo-de-salud-reclamar-obra-social", title: "Amparo de salud: cuándo y cómo reclamar a tu obra social o prepaga", category: "Salud" },
  ],
  "civil-familia-sucesiones": [
    { slug: "divorcios-argentina-guia-2026", title: "Divorcios en Argentina: guía actualizada 2026", category: "Familia" },
    { slug: "que-hacer-si-te-despiden-sin-causa", title: "Qué hacer si te despiden sin causa en Argentina (2026)", category: "Laboral" },
  ],
  "asesoramiento-impositivo": [
    { slug: "guia-completa-monotributo-2026", title: "Guía completa del monotributo 2026", category: "Impositivo" },
    { slug: "facturacion-electronica-guia-emprendedores", title: "Facturación electrónica ARCA: guía para emprendedores", category: "Impositivo" },
  ],
  "auditoria-contabilidad": [
    { slug: "guia-completa-monotributo-2026", title: "Guía completa del monotributo 2026", category: "Impositivo" },
    { slug: "como-constituir-sas-argentina", title: "Cómo constituir una SAS en Argentina paso a paso", category: "Societario" },
  ],
  "consultoria-empresarial": [
    { slug: "como-constituir-sas-argentina", title: "Cómo constituir una SAS en Argentina paso a paso", category: "Societario" },
    { slug: "guia-completa-monotributo-2026", title: "Guía completa del monotributo 2026", category: "Impositivo" },
  ],
  "nuevos-negocios": [
    { slug: "como-constituir-sas-argentina", title: "Cómo constituir una SAS en Argentina paso a paso", category: "Societario" },
    { slug: "facturacion-electronica-guia-emprendedores", title: "Facturación electrónica ARCA: guía para emprendedores", category: "Impositivo" },
  ],
  "compliance-prevencion-legal": [
    { slug: "como-constituir-sas-argentina", title: "Cómo constituir una SAS en Argentina paso a paso", category: "Societario" },
    { slug: "que-hacer-si-te-despiden-sin-causa", title: "Qué hacer si te despiden sin causa en Argentina (2026)", category: "Laboral" },
  ],
  "comercio-exterior": [
    { slug: "facturacion-electronica-guia-emprendedores", title: "Facturación electrónica ARCA: guía para emprendedores", category: "Impositivo" },
    { slug: "guia-completa-monotributo-2026", title: "Guía completa del monotributo 2026", category: "Impositivo" },
  ],
  "gestion-de-sueldos": [
    { slug: "que-hacer-si-te-despiden-sin-causa", title: "Qué hacer si te despiden sin causa en Argentina (2026)", category: "Laboral" },
    { slug: "guia-completa-monotributo-2026", title: "Guía completa del monotributo 2026", category: "Impositivo" },
  ],
  "derecho-previsional": [
    { slug: "que-hacer-si-te-despiden-sin-causa", title: "Qué hacer si te despiden sin causa en Argentina (2026)", category: "Laboral" },
    { slug: "accidentes-de-trabajo-reclamar-art", title: "Accidentes de trabajo: todo lo que debés saber para reclamar a la ART", category: "Laboral" },
  ],
};

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return ALL_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return generatePageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/servicios/${service.slug}`,
  });
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  const data = serviceDataMap[params.slug];

  if (!service || !data) notFound();

  const isLaboral = params.slug === "laboral-seguridad-social";
  const isCivil = params.slug === "comercial-societario";
  const isFamilia = params.slug === "civil-familia-sucesiones";
  const isConsumidor = params.slug === "defensa-del-consumidor";
  const isContabilidad = params.slug === "auditoria-contabilidad";
  const isImpuestos = params.slug === "asesoramiento-impositivo";
  const isConsultoria = params.slug === "consultoria-empresarial";
  const isNuevos = params.slug === "nuevos-negocios";
  const isSueldos = params.slug === "gestion-de-sueldos";
  const isCompliance = params.slug === "compliance-prevencion-legal";
  const isComex = params.slug === "comercio-exterior";
  const hasIntro = isLaboral || isCivil || isFamilia || isConsumidor || isContabilidad || isImpuestos || isConsultoria || isNuevos || isSueldos || isCompliance || isComex;
  const hasSplitGrid = isLaboral || isCivil || isContabilidad || isImpuestos || isConsultoria || isNuevos || isSueldos || isCompliance || isComex;
  const whatsappMsg = `https://wa.me/5492235790012?text=Hola%2C%20me%20contacto%20desde%20la%20web.%20Quisiera%20consultar%20sobre%20${encodeURIComponent(service.title)}.`;
  const posts = relatedPosts[params.slug] ?? [];

  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <section className="pt-32 pb-16 lg:pb-20 bg-primary text-white" style={{ minHeight: "40vh" }}>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <nav className="flex items-center justify-center gap-2 text-white/40 text-xs mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white/70 transition-colors">Inicio</Link>
              <span>/</span>
              <Link href="/#servicios" className="hover:text-white/70 transition-colors">Servicios</Link>
              <span>/</span>
              <span className="text-white/70">{service.shortTitle}</span>
            </nav>

            <p className="font-sackers-light text-white/60 text-[10px] sm:text-xs tracking-[0.3em] mb-4">
              {service.area === "juridico" ? "Servicio Jurídico" : "Servicio Contable"}
            </p>
            <h1 className="font-sackers-heavy text-3xl sm:text-4xl lg:text-5xl mb-6">{data.title}</h1>
            <div className="w-12 h-px bg-white/30 mx-auto mb-6" />
            <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              {data.subtitle}
            </p>
          </div>
        </section>

        {/* ── Introducción (landings destacadas) ── */}
        {hasIntro && (
          <section className="section-padding bg-background">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
              <ScrollAnimation>
                <div className="space-y-5 text-text-secondary text-[15px] leading-[1.85]">
                  {isLaboral && (
                    <>
                      <p>
                        En RUA | LAREU brindamos asesoramiento laboral integral tanto a trabajadores como
                        a empleadores y PyMEs. Nuestro enfoque combina rigor técnico con un trato cercano
                        y personalizado: entendemos que detrás de cada expediente hay una persona o una
                        familia que necesita respuestas claras.
                      </p>
                      <p>
                        Operamos desde Mar del Plata y atendemos casos en toda la Provincia de Buenos Aires
                        y ante la Justicia Nacional del Trabajo. Acompañamos a nuestros clientes en todas
                        las etapas: desde la consulta inicial y la negociación extrajudicial hasta el juicio
                        y la ejecución de sentencia.
                      </p>
                      <p>
                        Trabajamos con el mismo nivel de profundidad y detalle de los grandes estudios,
                        pero con la cercanía y accesibilidad que caracteriza a nuestro equipo. Si tenés un
                        problema laboral, podemos ayudarte.
                      </p>
                    </>
                  )}
                  {isCivil && (
                    <>
                      <p>
                        El derecho civil y comercial atraviesa la vida cotidiana de las personas y la
                        actividad de las empresas: desde un contrato de alquiler o una sucesión hasta
                        la constitución de una sociedad o el cobro de una deuda. En RUA | LAREU abordamos
                        estas cuestiones con la profundidad técnica que cada caso requiere.
                      </p>
                      <p>
                        Asesoramos a particulares, familias, comerciantes y PyMEs en Mar del Plata y toda
                        la Provincia de Buenos Aires. Nuestro enfoque prioriza la solución negociada cuando
                        es posible, reservando la vía judicial para los casos en que resulta necesaria.
                      </p>
                      <p>
                        Cada situación es distinta. Por eso ofrecemos un primer análisis personalizado
                        para evaluar las opciones disponibles y recomendar el camino más eficiente
                        para proteger tus intereses.
                      </p>
                    </>
                  )}
                  {isComex && (
                    <>
                      <p>
                        Argentina tiene un régimen de comercio exterior complejo y cambiante. Las
                        regulaciones aduaneras, cambiarias e impositivas se modifican con frecuencia,
                        y un error puede significar demoras en la aduana, multas o sobrecostos. Contar
                        con asesoramiento profesional desde el inicio de la operación es clave.
                      </p>
                      <p>
                        En RUA | LAREU combinamos el asesoramiento jurídico en normativa aduanera con
                        el soporte contable-impositivo que toda operación de comercio exterior requiere.
                        Esto nos permite ofrecer un servicio integral que pocos estudios brindan.
                      </p>
                      <p>
                        Asistimos tanto a empresas que dan sus primeros pasos en el comercio
                        internacional como a operadores habituales que necesitan optimizar sus
                        operaciones o resolver contingencias aduaneras.
                      </p>
                    </>
                  )}
                  {isCompliance && (
                    <>
                      <p>
                        El crecimiento de una empresa trae aparejado un aumento de obligaciones
                        legales en múltiples frentes: laboral, tributario, comercial, protección
                        de datos, defensa del consumidor. Un incumplimiento puede derivar en multas,
                        juicios, clausuras o daño reputacional. El compliance legal preventivo
                        busca anticiparse a estos riesgos.
                      </p>
                      <p>
                        En RUA | LAREU ofrecemos un servicio integral de prevención legal diseñado
                        especialmente para PyMEs y empresas medianas de Mar del Plata y zona. No se
                        trata de burocracia corporativa compleja, sino de soluciones concretas y
                        proporcionales al tamaño de cada empresa.
                      </p>
                      <p>
                        Trabajamos de manera interdisciplinaria con nuestras áreas jurídica y contable
                        para brindar un asesoramiento que cubra todos los frentes de exposición legal
                        de tu negocio.
                      </p>
                    </>
                  )}
                  {isSueldos && (
                    <>
                      <p>
                        Liquidar sueldos correctamente no es solo calcular un número: implica
                        aplicar el Convenio Colectivo de Trabajo correspondiente, cumplir con las
                        cargas sociales, mantener actualizado el Libro de Sueldos Digital y estar
                        preparado ante inspecciones. En RUA | LAREU nos encargamos de todo.
                      </p>
                      <p>
                        Ofrecemos un servicio de outsourcing de nómina completo para PyMEs y
                        comercios de Mar del Plata. Desde el alta del primer empleado hasta la
                        liquidación final, gestionamos la administración de personal con la
                        rigurosidad que la normativa exige.
                      </p>
                      <p>
                        Cada cliente tiene un profesional de referencia que conoce su convenio,
                        su dotación y sus particularidades. No somos un software: somos un equipo
                        que se ocupa de que todo esté en orden.
                      </p>
                    </>
                  )}
                  {isNuevos && (
                    <>
                      <p>
                        Emprender es mucho más que tener una buena idea. Para que un negocio
                        arranque bien hace falta definir la estructura legal, cumplir con las
                        inscripciones y habilitaciones, entender los costos reales y planificar
                        los primeros meses de operación. En RUA | LAREU acompañamos a emprendedores
                        en todo ese camino.
                      </p>
                      <p>
                        Trabajamos con personas que están por abrir su primer negocio, profesionales
                        que quieren formalizarse, comerciantes que se expanden y también con quienes
                        evalúan importar productos para vender. Nuestro enfoque es práctico: te
                        decimos lo que necesitás saber para tomar buenas decisiones desde el inicio.
                      </p>
                      <p>
                        No te vendemos servicios que no necesitás. Analizamos tu proyecto, te
                        recomendamos la mejor estructura y te acompañamos en la ejecución, adaptando
                        el asesoramiento al tamaño y la etapa de tu negocio.
                      </p>
                    </>
                  )}
                  {isConsultoria && (
                    <>
                      <p>
                        Muchos empresarios toman decisiones importantes basándose en la intuición
                        o en información incompleta. En RUA | LAREU creemos que las buenas decisiones
                        se apoyan en números claros: costos reales, márgenes verificados, flujos
                        de fondos proyectados y escenarios bien analizados.
                      </p>
                      <p>
                        Trabajamos con PyMEs, comercios y profesionales independientes de Mar del
                        Plata que quieren profesionalizar la gestión de su negocio. Desde un análisis
                        de costos puntual hasta un acompañamiento estratégico continuo, adaptamos
                        el servicio a lo que cada cliente necesita.
                      </p>
                      <p>
                        No importa si tu empresa factura mucho o poco: lo que importa es saber cuánto
                        ganás realmente, dónde están las oportunidades y cómo prepararte para crecer
                        de forma sostenible.
                      </p>
                    </>
                  )}
                  {isImpuestos && (
                    <>
                      <p>
                        La presión fiscal en Argentina es alta y cambiante. Mantenerse al día con
                        las obligaciones impositivas nacionales, provinciales y municipales requiere
                        un seguimiento profesional constante. En RUA | LAREU nos ocupamos de que
                        tu situación fiscal esté en orden y optimizada.
                      </p>
                      <p>
                        Asesoramos a monotributistas, responsables inscriptos, sociedades y
                        emprendedores en Mar del Plata y toda la Provincia de Buenos Aires.
                        Gestionamos las liquidaciones, las presentaciones ante ARCA y ARBA, y
                        te acompañamos frente a inspecciones y fiscalizaciones.
                      </p>
                      <p>
                        Además de cumplir con las obligaciones del presente, te ayudamos a planificar
                        para pagar lo justo: ni más ni menos de lo que corresponde.
                      </p>
                    </>
                  )}
                  {isContabilidad && (
                    <>
                      <p>
                        Una contabilidad ordenada y al día no es solo una obligación legal: es la
                        base para tomar buenas decisiones de negocio. En RUA | LAREU brindamos
                        servicios contables integrales para PyMEs, comerciantes y profesionales
                        independientes de Mar del Plata.
                      </p>
                      <p>
                        Nos ocupamos de la registración contable, los balances, las certificaciones
                        y los informes que tu empresa necesita. También ofrecemos la posibilidad de
                        tercerizar toda el área contable y administrativa, para que puedas enfocarte
                        en tu negocio.
                      </p>
                      <p>
                        Trabajamos con los estándares de calidad de los grandes estudios, pero con
                        la dedicación personalizada que caracteriza a nuestro equipo. Cada cliente
                        tiene un profesional de referencia que conoce su empresa en detalle.
                      </p>
                    </>
                  )}
                  {isConsumidor && (
                    <>
                      <p>
                        Todos los días consumimos productos y servicios que no siempre cumplen
                        con lo prometido. Cuando una empresa no responde, un banco cobra de más
                        o una prepaga niega una cobertura, tenés derechos concretos para reclamar.
                        En RUA | LAREU te ayudamos a hacerlos valer.
                      </p>
                      <p>
                        Atendemos reclamos de consumidores en Mar del Plata y toda la Provincia de
                        Buenos Aires, tanto en la vía administrativa (OMIC, COPREC) como en la
                        judicial. Conocemos las herramientas legales disponibles y elegimos la más
                        efectiva para cada caso.
                      </p>
                      <p>
                        Muchos reclamos se resuelven sin necesidad de ir a juicio. Pero cuando
                        es necesario, contamos con la experiencia para llevar el caso hasta las
                        últimas consecuencias.
                      </p>
                    </>
                  )}
                  {isFamilia && (
                    <>
                      <p>
                        Los conflictos familiares tienen una dimensión emocional que los distingue
                        de cualquier otro problema jurídico. En RUA | LAREU lo entendemos: trabajamos
                        con sensibilidad y firmeza para proteger tus derechos y los de tu familia,
                        buscando siempre la solución menos conflictiva posible.
                      </p>
                      <p>
                        Acompañamos a personas y familias en Mar del Plata y toda la Provincia de Buenos
                        Aires en procesos de divorcio, cuota alimentaria, régimen de comunicación con
                        hijos, situaciones de violencia familiar y trámites de adopción, entre otros.
                      </p>
                      <p>
                        Priorizamos el diálogo y la mediación, pero cuando la vía judicial es necesaria
                        actuamos con la urgencia y la contundencia que cada situación requiere.
                      </p>
                    </>
                  )}
                </div>
              </ScrollAnimation>
            </div>
          </section>
        )}

        {/* ── Áreas del servicio ── */}
        <section className={`section-padding ${hasIntro ? "bg-white" : "bg-background"}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollAnimation className="mb-12">
              <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl mb-2">
                {isLaboral ? "Áreas de práctica" : "¿Qué abarca este servicio?"}
              </h2>
              <div className="w-8 h-px bg-accent mt-4" />
            </ScrollAnimation>

            {hasSplitGrid ? (
              <>
                {/* Primera fila */}
                <ScrollAnimation>
                  <div className="flex items-center gap-5 mb-7">
                    <span className="font-sackers-medium text-[10px] tracking-[0.28em] text-text-secondary/60 whitespace-nowrap">
                      {isLaboral ? "Para trabajadores" : isCivil ? "Derecho Civil" : isContabilidad ? "Registración y contabilidad" : isImpuestos ? "Impuestos nacionales" : isConsultoria ? "Análisis y gestión financiera" : isSueldos ? "Liquidación y cargas sociales" : isCompliance ? "Prevención laboral y contractual" : isComex ? "Importación y exportación" : "Puesta en marcha"}
                    </span>
                    <span className="flex-1 h-px bg-primary/15" />
                  </div>
                </ScrollAnimation>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {data.areas.slice(0, 3).map((area, i) => (
                    <ScrollAnimation key={area.title} delay={i * 80}>
                      <div className="p-8 border-t-2 border-accent h-full bg-background">
                        <h3 className="font-sackers-medium text-[11px] tracking-[0.2em] text-primary mb-5">
                          {area.title}
                        </h3>
                        <ul className="space-y-3">
                          {area.items.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                              <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>

                {/* Segunda fila */}
                <ScrollAnimation>
                  <div className="flex items-center gap-5 mb-7">
                    <span className="font-sackers-medium text-[10px] tracking-[0.28em] text-text-secondary/60 whitespace-nowrap">
                      {isLaboral ? "Para empleadores y PyMEs" : isCivil ? "Derecho Comercial" : isContabilidad ? "Outsourcing y asesoría especializada" : isImpuestos ? "Provinciales, municipales y planificación" : isConsultoria ? "Estrategia y crecimiento" : isSueldos ? "Servicios complementarios" : isCompliance ? "Datos, compliance tributario y abono" : isComex ? "Cambiario, compliance y contable" : "Crecimiento y operación"}
                    </span>
                    <span className="flex-1 h-px bg-primary/15" />
                  </div>
                </ScrollAnimation>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data.areas.slice(3, 6).map((area, i) => (
                    <ScrollAnimation key={area.title} delay={i * 80}>
                      <div className="p-8 border-t-2 border-accent h-full bg-background">
                        <h3 className="font-sackers-medium text-[11px] tracking-[0.2em] text-primary mb-5">
                          {area.title}
                        </h3>
                        <ul className="space-y-3">
                          {area.items.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                              <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.areas.map((area, i) => (
                  <ScrollAnimation key={area.title} delay={i * 80}>
                    <div className={`p-8 border-t-2 border-accent h-full ${hasIntro ? "bg-background" : "bg-white"}`}>
                      <h3 className="font-sackers-medium text-[11px] tracking-[0.2em] text-primary mb-5">
                        {area.title}
                      </h3>
                      <ul className="space-y-3">
                        {area.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                            <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── Sección destacada: Accidentes de Trabajo (solo laboral) ── */}
        {isLaboral && (
          <section className="py-16 lg:py-20 bg-primary-light">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <ScrollAnimation>
                <div className="border-l-4 border-accent pl-8 lg:pl-10">
                  <p className="font-sackers-light text-accent text-[10px] tracking-[0.3em] mb-3">
                    Área destacada
                  </p>
                  <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl mb-4">
                    Accidentes de Trabajo
                  </h2>
                  <p className="text-text-secondary text-[15px] leading-[1.85] mb-8 max-w-2xl">
                    Si sufriste un accidente de trabajo o una enfermedad profesional, tenés derecho
                    a una indemnización justa. Te asesoramos desde el primer momento: alta médica,
                    tratamiento, Comisiones Médicas y juicio si es necesario.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {[
                      "Fracturas y traumatismos",
                      "Hernias de disco",
                      "Amputaciones",
                      "Quemaduras",
                      "Enfermedades respiratorias",
                      "Hipoacusia",
                      "Estrés y burnout",
                    ].map((tag) => (
                      <span key={tag} className="text-xs text-primary bg-white px-3 py-1.5 border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://wa.me/5492235790012?text=Hola%2C%20tuve%20un%20accidente%20de%20trabajo%20y%20quisiera%20asesorarme."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-accent text-white text-sm font-semibold px-8 py-4 rounded tracking-wide hover:bg-[#263B35] transition-all duration-300"
                  >
                    Consultanos ahora
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        )}

        {/* ── Secciones destacadas: Comercio Exterior ── */}
        {isComex && (
          <>
            <section className="py-16 lg:py-20 bg-primary-light">
              <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <ScrollAnimation>
                  <div className="border-l-4 border-accent pl-8 lg:pl-10">
                    <p className="font-sackers-light text-accent text-[10px] tracking-[0.3em] mb-3">
                      Foco local
                    </p>
                    <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl mb-4">
                      Mar del Plata y el comercio exterior
                    </h2>
                    <p className="text-text-secondary text-[15px] leading-[1.85] max-w-2xl">
                      Mar del Plata es el principal puerto pesquero de Argentina y un polo
                      industrial diversificado. Nuestro estudio conoce la realidad de las empresas
                      locales que importan insumos y exportan productos. Trabajamos con operadores
                      del puerto, industrias de la zona y empresas de servicios que operan
                      internacionalmente.
                    </p>
                  </div>
                </ScrollAnimation>
              </div>
            </section>

            <section className="py-16 lg:py-20 bg-white">
              <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <ScrollAnimation>
                  <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
                    Sectores que asistimos
                  </h2>
                  <div className="w-10 h-px bg-accent mx-auto mb-12" />
                </ScrollAnimation>
                <ScrollAnimation>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { title: "Industria pesquera", desc: "Exportación de productos del mar — relevante para Mar del Plata" },
                      { title: "Industria alimenticia", desc: "Exportación de alimentos e importación de insumos" },
                      { title: "Textil y calzado", desc: "Importación de materias primas y productos terminados" },
                      { title: "Tecnología y software", desc: "Exportación de servicios y régimen de Economía del Conocimiento" },
                      { title: "E-commerce internacional", desc: "Cross-border commerce y Exporta Simple" },
                      { title: "Maquinaria industrial", desc: "Importación de bienes de capital y equipamiento" },
                    ].map((item) => (
                      <div key={item.title} className="bg-background p-5 border border-primary/15">
                        <h3 className="font-semibold text-primary text-sm mb-1">{item.title}</h3>
                        <p className="text-text-secondary text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </ScrollAnimation>
              </div>
            </section>
          </>
        )}

        {/* ── Sección destacada: Por qué prevenir + Para quién (solo compliance) ── */}
        {isCompliance && (
          <>
            <section className="py-16 lg:py-20 bg-primary-light">
              <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <ScrollAnimation>
                  <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
                    ¿Por qué prevenir?
                  </h2>
                  <div className="w-10 h-px bg-accent mx-auto mb-14" />
                </ScrollAnimation>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Evitá juicios",
                      desc: "Un reclamo laboral promedio cuesta entre 10 y 50 veces más que prevenirlo. La auditoría legal preventiva detecta riesgos antes de que escalen.",
                    },
                    {
                      title: "Evitá multas",
                      desc: "ARCA, ARBA, el Ministerio de Trabajo y la Municipalidad pueden imponer sanciones significativas por incumplimientos que muchas veces son evitables con asesoramiento.",
                    },
                    {
                      title: "Protegé tu reputación",
                      desc: "Un conflicto legal público o una filtración de datos puede dañar la imagen de tu empresa ante clientes, proveedores y el mercado.",
                    },
                  ].map((item) => (
                    <ScrollAnimation key={item.title}>
                      <div className="bg-white p-8 border-t-2 border-accent h-full">
                        <h3 className="font-semibold text-primary text-lg mb-3">{item.title}</h3>
                        <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-16 lg:py-20 bg-white">
              <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <ScrollAnimation>
                  <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl text-center mb-4">
                    ¿Para quién es este servicio?
                  </h2>
                  <div className="w-10 h-px bg-accent mx-auto mb-12" />
                </ScrollAnimation>
                <ScrollAnimation>
                  <div className="flex flex-wrap justify-center gap-3">
                    {[
                      "PyMEs con empleados a cargo (5+)",
                      "Empresas familiares en crecimiento",
                      "Comercios con atención al público",
                      "Empresas con ventas online / e-commerce",
                      "Profesionales y estudios con clientes",
                      "Sector gastronómico, hotelero y turístico",
                      "Sector pesquero e industrial",
                    ].map((item) => (
                      <span key={item} className="text-sm text-primary bg-primary-light px-5 py-2.5 border border-primary/10">
                        {item}
                      </span>
                    ))}
                  </div>
                </ScrollAnimation>
              </div>
            </section>
          </>
        )}

        {/* ── Sección destacada: Outsourcing de nómina (solo sueldos) ── */}
        {isSueldos && (
          <section className="py-16 lg:py-20 bg-primary-light">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <ScrollAnimation>
                <div className="border-l-4 border-accent pl-8 lg:pl-10">
                  <p className="font-sackers-light text-accent text-[10px] tracking-[0.3em] mb-3">
                    Área destacada
                  </p>
                  <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl mb-4">
                    Outsourcing de nómina
                  </h2>
                  <p className="text-text-secondary text-[15px] leading-[1.85] mb-8 max-w-2xl">
                    Tercerizá la liquidación de sueldos y la gestión de personal completa.
                    Nos encargamos de los recibos, las cargas sociales, el libro de sueldos
                    digital y la documentación laboral para que vos te enfoques en tu negocio.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {[
                      "Liquidación mensual",
                      "F.931 y cargas sociales",
                      "Libro de sueldos digital",
                      "Altas y bajas",
                      "Certificaciones",
                      "Costos laborales",
                    ].map((tag) => (
                      <span key={tag} className="text-xs text-primary bg-white px-3 py-1.5 border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://wa.me/5492235790012?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20liquidaci%C3%B3n%20de%20sueldos."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-accent text-white text-sm font-semibold px-8 py-4 rounded tracking-wide hover:bg-[#263B35] transition-all duration-300"
                  >
                    Consultanos ahora
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        )}

        {/* ── Sección destacada: Puesta en marcha (solo nuevos negocios) ── */}
        {isNuevos && (
          <section className="py-16 lg:py-20 bg-primary-light">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <ScrollAnimation>
                <div className="border-l-4 border-accent pl-8 lg:pl-10">
                  <p className="font-sackers-light text-accent text-[10px] tracking-[0.3em] mb-3">
                    Área destacada
                  </p>
                  <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl mb-4">
                    Abrí tu negocio en Mar del Plata
                  </h2>
                  <p className="text-text-secondary text-[15px] leading-[1.85] mb-8 max-w-2xl">
                    Te acompañamos desde la idea hasta la apertura. Definimos la mejor estructura
                    legal y fiscal, gestionamos todas las inscripciones y habilitaciones, y te
                    dejamos operando con todo en regla.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {[
                      "Forma jurídica",
                      "Inscripción en ARCA",
                      "Ingresos Brutos",
                      "Habilitación municipal",
                      "Análisis de costos",
                      "Plan de negocios",
                    ].map((tag) => (
                      <span key={tag} className="text-xs text-primary bg-white px-3 py-1.5 border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://wa.me/5492235790012?text=Hola%2C%20quiero%20abrir%20un%20negocio%20y%20necesito%20asesoramiento."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-accent text-white text-sm font-semibold px-8 py-4 rounded tracking-wide hover:bg-[#263B35] transition-all duration-300"
                  >
                    Consultanos ahora
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        )}

        {/* ── Sección destacada: Financiamiento (solo consultoría) ── */}
        {isConsultoria && (
          <section className="py-16 lg:py-20 bg-primary-light">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <ScrollAnimation>
                <div className="border-l-4 border-accent pl-8 lg:pl-10">
                  <p className="font-sackers-light text-accent text-[10px] tracking-[0.3em] mb-3">
                    Área destacada
                  </p>
                  <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl mb-4">
                    Financiamiento para PyMEs
                  </h2>
                  <p className="text-text-secondary text-[15px] leading-[1.85] mb-8 max-w-2xl">
                    Te acompañamos en la búsqueda de financiamiento: armamos la carpeta de crédito,
                    preparamos las proyecciones financieras y te asesoramos sobre las líneas
                    disponibles, incluyendo programas con tasa subsidiada para PyMEs.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {[
                      "Carpetas de crédito",
                      "Proyecciones financieras",
                      "Líneas subsidiadas",
                      "Programas SEPyME",
                      "SGR y mercado de capitales",
                      "Negociación con bancos",
                    ].map((tag) => (
                      <span key={tag} className="text-xs text-primary bg-white px-3 py-1.5 border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://wa.me/5492235790012?text=Hola%2C%20necesito%20asesoramiento%20sobre%20financiamiento%20para%20mi%20empresa."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-accent text-white text-sm font-semibold px-8 py-4 rounded tracking-wide hover:bg-[#263B35] transition-all duration-300"
                  >
                    Consultanos ahora
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        )}

        {/* ── Sección destacada: Monotributo (solo impuestos) ── */}
        {isImpuestos && (
          <section className="py-16 lg:py-20 bg-primary-light">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <ScrollAnimation>
                <div className="border-l-4 border-accent pl-8 lg:pl-10">
                  <p className="font-sackers-light text-accent text-[10px] tracking-[0.3em] mb-3">
                    Área destacada
                  </p>
                  <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl mb-4">
                    Monotributo y Responsable Inscripto
                  </h2>
                  <p className="text-text-secondary text-[15px] leading-[1.85] mb-8 max-w-2xl">
                    Te ayudamos a elegir el régimen que mejor se adapta a tu actividad, a
                    mantenerte al día con las recategorizaciones y a planificar la transición
                    cuando tu negocio crece. Si tenés dudas sobre qué te conviene, consultanos.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {[
                      "Inscripción y categorización",
                      "Recategorización semestral",
                      "Transición a Resp. Inscripto",
                      "Facturación electrónica",
                      "Monotributo social",
                      "Planificación fiscal",
                    ].map((tag) => (
                      <span key={tag} className="text-xs text-primary bg-white px-3 py-1.5 border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://wa.me/5492235790012?text=Hola%2C%20necesito%20asesoramiento%20sobre%20monotributo."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-accent text-white text-sm font-semibold px-8 py-4 rounded tracking-wide hover:bg-[#263B35] transition-all duration-300"
                  >
                    Consultanos ahora
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        )}

        {/* ── Sección destacada: Outsourcing (solo contabilidad) ── */}
        {isContabilidad && (
          <section className="py-16 lg:py-20 bg-primary-light">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <ScrollAnimation>
                <div className="border-l-4 border-accent pl-8 lg:pl-10">
                  <p className="font-sackers-light text-accent text-[10px] tracking-[0.3em] mb-3">
                    Área destacada
                  </p>
                  <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl mb-4">
                    Outsourcing contable para PyMEs
                  </h2>
                  <p className="text-text-secondary text-[15px] leading-[1.85] mb-8 max-w-2xl">
                    Tercerizá el área contable y administrativa de tu empresa. Nos encargamos de
                    la registración, los balances, las conciliaciones y los reportes de gestión
                    para que vos te enfoques en hacer crecer tu negocio.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {[
                      "Registración mensual",
                      "Conciliaciones bancarias",
                      "Reportes de gestión",
                      "Análisis de costos",
                      "Cuentas a pagar y cobrar",
                      "Balances y certificaciones",
                    ].map((tag) => (
                      <span key={tag} className="text-xs text-primary bg-white px-3 py-1.5 border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://wa.me/5492235790012?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20outsourcing%20contable."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-accent text-white text-sm font-semibold px-8 py-4 rounded tracking-wide hover:bg-[#263B35] transition-all duration-300"
                  >
                    Consultanos ahora
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        )}

        {/* ── Sección destacada: Bancos (solo consumidor) ── */}
        {isConsumidor && (
          <section className="py-16 lg:py-20 bg-primary-light">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <ScrollAnimation>
                <div className="border-l-4 border-accent pl-8 lg:pl-10">
                  <p className="font-sackers-light text-accent text-[10px] tracking-[0.3em] mb-3">
                    Área destacada
                  </p>
                  <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl mb-4">
                    Reclamos contra bancos y financieras
                  </h2>
                  <p className="text-text-secondary text-[15px] leading-[1.85] mb-8 max-w-2xl">
                    Los cobros indebidos de bancos y entidades financieras son uno de los reclamos
                    más frecuentes. Te ayudamos a recuperar lo que te cobraron de más y a limpiar
                    tu situación crediticia si fuiste incluido indebidamente en bases de deudores.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {[
                      "Comisiones indebidas",
                      "Seguros no solicitados",
                      "Cargos ocultos en tarjetas",
                      "Débitos no autorizados",
                      "Veraz e informes crediticios",
                      "Refinanciaciones abusivas",
                    ].map((tag) => (
                      <span key={tag} className="text-xs text-primary bg-white px-3 py-1.5 border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://wa.me/5492235790012?text=Hola%2C%20tengo%20un%20reclamo%20contra%20un%20banco%20y%20quisiera%20asesorarme."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-accent text-white text-sm font-semibold px-8 py-4 rounded tracking-wide hover:bg-[#263B35] transition-all duration-300"
                  >
                    Consultanos ahora
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        )}

        {/* ── Sección destacada: Divorcios (solo familia) ── */}
        {isFamilia && (
          <section className="py-16 lg:py-20 bg-primary-light">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <ScrollAnimation>
                <div className="border-l-4 border-accent pl-8 lg:pl-10">
                  <p className="font-sackers-light text-accent text-[10px] tracking-[0.3em] mb-3">
                    Área destacada
                  </p>
                  <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl mb-4">
                    Divorcios
                  </h2>
                  <p className="text-text-secondary text-[15px] leading-[1.85] mb-8 max-w-2xl">
                    Te acompañamos en todo el proceso de divorcio, desde la redacción del convenio
                    regulador hasta la sentencia. Trabajamos para que sea lo más ágil y ordenado
                    posible, protegiendo tus derechos y los de tus hijos.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {[
                      "Divorcio de común acuerdo",
                      "Convenio regulador",
                      "División de bienes",
                      "Atribución de vivienda",
                      "Compensación económica",
                      "Cuota alimentaria",
                    ].map((tag) => (
                      <span key={tag} className="text-xs text-primary bg-white px-3 py-1.5 border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://wa.me/5492235790012?text=Hola%2C%20necesito%20asesoramiento%20sobre%20un%20divorcio."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-accent text-white text-sm font-semibold px-8 py-4 rounded tracking-wide hover:bg-[#263B35] transition-all duration-300"
                  >
                    Consultanos ahora
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        )}

        {/* ── Sección destacada: Sucesiones (solo civil) ── */}
        {isCivil && (
          <section className="py-16 lg:py-20 bg-primary-light">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <ScrollAnimation>
                <div className="border-l-4 border-accent pl-8 lg:pl-10">
                  <p className="font-sackers-light text-accent text-[10px] tracking-[0.3em] mb-3">
                    Área destacada
                  </p>
                  <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl mb-4">
                    Sucesiones y Herencias
                  </h2>
                  <p className="text-text-secondary text-[15px] leading-[1.85] mb-8 max-w-2xl">
                    Si necesitás iniciar una sucesión, resolver una herencia o regularizar la
                    titularidad de bienes, te acompañamos en todo el proceso. Gestionamos
                    la declaratoria de herederos, la partición de bienes y la inscripción
                    registral para que todo quede en orden.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {[
                      "Declaratoria de herederos",
                      "Partición de bienes",
                      "Testamentos y legados",
                      "Inmuebles y vehículos",
                      "Cuentas bancarias e inversiones",
                      "Herencias con bienes en el exterior",
                    ].map((tag) => (
                      <span key={tag} className="text-xs text-primary bg-white px-3 py-1.5 border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://wa.me/5492235790012?text=Hola%2C%20necesito%20asesoramiento%20sobre%20una%20sucesi%C3%B3n."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-accent text-white text-sm font-semibold px-8 py-4 rounded tracking-wide hover:bg-[#263B35] transition-all duration-300"
                  >
                    Consultanos ahora
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        )}

        {/* ── FAQ ── */}
        <section className="section-padding bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <ScrollAnimation className="mb-12">
              <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl mb-2">
                Preguntas frecuentes
              </h2>
              <div className="w-8 h-px bg-accent mt-4" />
            </ScrollAnimation>
            <ScrollAnimation delay={80}>
              <FAQAccordion faqs={data.faqs} />
            </ScrollAnimation>
          </div>
        </section>

        {/* ── CTA final ── */}
        <section className="py-20 lg:py-24 bg-primary-light">
          <ScrollAnimation>
            <div className="max-w-2xl mx-auto px-6 text-center">
              <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl lg:text-4xl mb-4">
                ¿Necesitás asesoramiento en {data.title}?
              </h2>
              <p className="text-text-secondary text-sm sm:text-base mb-10">
                Contactanos hoy y te asesoramos.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
                <a
                  href={whatsappMsg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-accent text-white text-sm font-semibold px-8 py-4 rounded tracking-wide hover:bg-[#263B35] transition-all duration-300"
                >
                  Escribinos por WhatsApp
                </a>
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 border border-primary/20 text-primary text-sm font-medium px-8 py-4 rounded tracking-wide hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Phone size={16} />
                  {CONTACT.phone}
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* ── Artículos relacionados ── */}
        {posts.length > 0 && (
          <section className="section-padding bg-background">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
              <ScrollAnimation className="mb-10">
                <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl mb-2">
                  Artículos relacionados
                </h2>
                <div className="w-8 h-px bg-accent mt-4" />
              </ScrollAnimation>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {posts.map((post, i) => (
                  <ScrollAnimation key={post.slug} delay={i * 80}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col bg-white border border-primary/15 hover:border-accent hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="h-1 bg-primary group-hover:bg-primary/80 transition-colors duration-200" />
                      <div className="p-6">
                        <span className="text-accent text-[10px] font-sackers-light tracking-[0.2em]">
                          {post.category}
                        </span>
                        <h3 className="font-semibold text-text text-[15px] leading-snug mt-3 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <div className="mt-4 flex items-center gap-1.5 text-accent text-xs font-medium">
                          Leer más
                          <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                        </div>
                      </div>
                    </Link>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
