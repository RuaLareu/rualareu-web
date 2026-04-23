import Link from "next/link";
import {
  Briefcase,
  Building2,
  Shield,
  Users,
  Calculator,
  FileText,
  TrendingUp,
  Rocket,
  ArrowRight,
  Clock,
  Wallet,
  ShieldAlert,
  Globe,
  type LucideProps,
} from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { JURIDICAL_SERVICES, ACCOUNTING_SERVICES, type Service } from "@/lib/services";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Briefcase,
  Building2,
  Shield,
  Users,
  Calculator,
  FileText,
  TrendingUp,
  Rocket,
  Clock,
  Wallet,
  ShieldAlert,
  Globe,
};

function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? Briefcase;
  return (
    <Link
      href={`/servicios/${service.slug}`}
      className="group flex flex-col h-full bg-white p-6 border border-primary/15 hover:border-accent hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Icon */}
      <div className="mb-5 w-10 h-10 flex items-center justify-center bg-primary-light text-primary group-hover:bg-primary group-hover:text-white transition-all duration-200">
        <Icon size={18} strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="font-sackers-medium text-[10px] sm:text-[11px] lg:text-xs xl:text-[13px] tracking-[0.18em] text-primary mb-3 leading-tight">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-5 line-clamp-3">
        {service.description}
      </p>

      {/* CTA */}
      <div className="flex items-center gap-1.5 text-accent text-xs font-medium mt-auto">
        Ver más
        <ArrowRight
          size={13}
          className="group-hover:translate-x-1 transition-transform duration-200"
        />
      </div>
    </Link>
  );
}

function AreaLabel({ children }: { children: React.ReactNode }) {
  return (
    <ScrollAnimation>
      <div className="flex items-center gap-5 mb-7">
        <span className="font-sackers-medium text-[10px] tracking-[0.28em] text-text-secondary/60 whitespace-nowrap">
          {children}
        </span>
        <span className="flex-1 h-px bg-primary/15" />
      </div>
    </ScrollAnimation>
  );
}

function ServiceRow({ services }: { services: Service[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {services.map((service, i) => (
        <ScrollAnimation key={service.slug} delay={i * 70}>
          <ServiceCard service={service} />
        </ScrollAnimation>
      ))}
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section id="servicios" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Header ── */}
        <ScrollAnimation className="text-center mb-14">
          <p className="font-sackers-light text-accent text-[10px] sm:text-xs tracking-[0.32em] mb-4">
            Lo que hacemos
          </p>
          <h2 className="font-sackers-heavy text-primary text-3xl sm:text-4xl lg:text-4xl xl:text-5xl">
            Servicios
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mt-6" />
        </ScrollAnimation>

        {/* ── Jurídicos ── */}
        <div className="mb-12">
          <AreaLabel>Jurídicos</AreaLabel>
          <ServiceRow services={JURIDICAL_SERVICES} />
        </div>

        {/* ── Contables ── */}
        <div>
          <AreaLabel>Contables</AreaLabel>
          <ServiceRow services={ACCOUNTING_SERVICES} />
        </div>

      </div>
    </section>
  );
}
