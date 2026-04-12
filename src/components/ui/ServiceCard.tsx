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
  type LucideProps,
} from "lucide-react";
import type { Service } from "@/lib/services";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Briefcase,
  Building2,
  Shield,
  Users,
  Calculator,
  FileText,
  TrendingUp,
  Rocket,
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Briefcase;

  return (
    <Link
      href={`/servicios/${service.slug}`}
      className="group flex flex-col p-6 bg-white border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all duration-200"
    >
      <div className="mb-4 w-10 h-10 flex items-center justify-center bg-primary-light text-primary group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon size={20} />
      </div>
      <h3 className="font-sackers-medium text-xs tracking-widest text-primary mb-3">
        {service.title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed flex-1">
        {service.description}
      </p>
      <div className="mt-4 flex items-center gap-1.5 text-accent text-xs font-medium">
        Ver más <ArrowRight size={14} />
      </div>
    </Link>
  );
}
