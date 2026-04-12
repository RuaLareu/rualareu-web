import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SERVICES, getServiceBySlug } from "@/lib/services";
import { generatePageMetadata } from "@/lib/metadata";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTAButton from "@/components/ui/CTAButton";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

// Import all service data
import laboralData from "@/data/services/laboral-seguridad-social";
import comercialData from "@/data/services/comercial-societario";
import consumidorData from "@/data/services/defensa-del-consumidor";
import civilData from "@/data/services/civil-familia-sucesiones";
import impositivoData from "@/data/services/asesoramiento-impositivo";
import auditoriaData from "@/data/services/auditoria-contabilidad";
import consultoriaData from "@/data/services/consultoria-empresarial";
import negociosData from "@/data/services/nuevos-negocios";
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
};

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return generatePageMetadata({
    title: `${service.metaTitle} | RUA | LAREU`,
    description: service.metaDescription,
    path: `/servicios/${service.slug}`,
  });
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  const data = serviceDataMap[params.slug];

  if (!service || !data) notFound();

  const whatsappMsg = `https://wa.me/5492235790012?text=Hola%2C%20me%20contacto%20desde%20la%20web.%20Quisiera%20consultar%20sobre%20${encodeURIComponent(service.title)}.`;

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <p className="font-sackers-light text-accent text-xs tracking-[0.3em] mb-4">
              {service.area === "juridico" ? "Servicio Jurídico" : "Servicio Contable"}
            </p>
            <h1 className="font-sackers-heavy text-4xl sm:text-5xl mb-6">{data.title}</h1>
            <div className="w-12 h-px bg-accent mx-auto mb-6" />
            <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              {data.subtitle}
            </p>
            <CTAButton href={whatsappMsg} variant="solid" size="lg" external>
              Agenda tu consulta gratuita
            </CTAButton>
          </div>
        </section>

        {/* Service areas */}
        <section className="section-padding bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.areas.map((area, i) => (
                <ScrollAnimation key={area.title} delay={i * 80}>
                  <div className="bg-white p-8 border-t-2 border-accent">
                    <h2 className="font-sackers-medium text-xs tracking-[0.2em] text-primary mb-5">
                      {area.title}
                    </h2>
                    <ul className="space-y-3">
                      {area.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                          <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <ScrollAnimation className="mb-12">
              <h2 className="font-sackers-heavy text-primary text-3xl mb-2">
                Preguntas frecuentes
              </h2>
              <div className="w-8 h-px bg-accent mt-4" />
            </ScrollAnimation>
            <ScrollAnimation delay={80}>
              <FAQAccordion faqs={data.faqs} />
            </ScrollAnimation>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-24 bg-primary text-white text-center">
          <ScrollAnimation>
            <div className="max-w-2xl mx-auto px-6">
              <h2 className="font-sackers-heavy text-3xl sm:text-4xl mb-4">
                ¿Necesitás asesoramiento en {data.title}?
              </h2>
              <p className="text-white/70 mb-8">Contactanos hoy. La primera consulta es gratuita.</p>
              <CTAButton href={whatsappMsg} variant="solid" size="lg" external>
                Escribinos por WhatsApp
              </CTAButton>
            </div>
          </ScrollAnimation>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
