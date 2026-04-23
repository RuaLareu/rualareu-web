import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase, Building2, Shield, Users, Calculator,
  FileText, TrendingUp, Rocket, Clock, Wallet,
  ShieldAlert, Globe, ArrowRight, type LucideProps,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { JURIDICAL_SERVICES, ACCOUNTING_SERVICES, type Service } from "@/lib/services";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios jurídicos y contables en Mar del Plata. Derecho laboral, civil, familia, consumidor, impuestos, contabilidad, consultoría y más.",
  alternates: { canonical: "/servicios" },
};

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Briefcase, Building2, Shield, Users, Calculator,
  FileText, TrendingUp, Rocket, Clock, Wallet,
  ShieldAlert, Globe,
};

function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? Briefcase;
  return (
    <Link
      href={`/servicios/${service.slug}`}
      className="group flex flex-col h-full bg-white p-6 border border-primary/15 hover:border-accent hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="mb-5 w-10 h-10 flex items-center justify-center bg-primary-light text-primary group-hover:bg-primary group-hover:text-white transition-all duration-200">
        <Icon size={18} strokeWidth={1.5} />
      </div>
      <h3 className="font-sackers-medium text-[10px] sm:text-[11px] tracking-[0.18em] text-primary mb-3 leading-tight">
        {service.title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-5">
        {service.description}
      </p>
      <div className="flex items-center gap-1.5 text-accent text-xs font-medium mt-auto">
        Ver más
        <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
      </div>
    </Link>
  );
}

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <nav className="flex items-center justify-center gap-2 text-white/40 text-xs mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white/70 transition-colors">Inicio</Link>
              <span>/</span>
              <span className="text-white/70">Servicios</span>
            </nav>
            <p className="font-sackers-light text-white/70 text-[10px] sm:text-xs tracking-[0.3em] mb-4">
              Lo que hacemos
            </p>
            <h1 className="font-sackers-heavy text-3xl sm:text-4xl lg:text-5xl mb-6">
              Servicios
            </h1>
            <div className="w-12 h-px bg-white/30 mx-auto mb-6" />
            <p className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Asesoramiento jurídico y contable integral para personas, familias y empresas en Mar del Plata.
            </p>
          </div>
        </section>

        {/* Servicios */}
        <section className="section-padding bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            {/* Jurídicos */}
            <ScrollAnimation>
              <div className="flex items-center gap-5 mb-7">
                <span className="font-sackers-medium text-[10px] tracking-[0.28em] text-text-secondary/60 whitespace-nowrap">
                  Jurídicos
                </span>
                <span className="flex-1 h-px bg-primary/15" />
              </div>
            </ScrollAnimation>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
              {JURIDICAL_SERVICES.map((service, i) => (
                <ScrollAnimation key={service.slug} delay={i * 70}>
                  <ServiceCard service={service} />
                </ScrollAnimation>
              ))}
            </div>

            {/* Contables */}
            <ScrollAnimation>
              <div className="flex items-center gap-5 mb-7">
                <span className="font-sackers-medium text-[10px] tracking-[0.28em] text-text-secondary/60 whitespace-nowrap">
                  Contables
                </span>
                <span className="flex-1 h-px bg-primary/15" />
              </div>
            </ScrollAnimation>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ACCOUNTING_SERVICES.map((service, i) => (
                <ScrollAnimation key={service.slug} delay={i * 70}>
                  <ServiceCard service={service} />
                </ScrollAnimation>
              ))}
            </div>

          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
