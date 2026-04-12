import type { ServicePageData } from "@/types/service";

const data: ServicePageData = {
  slug: "auditoria-contabilidad",
  title: "Auditoría y Contabilidad",
  subtitle:
    "Estados contables, auditorías y certificaciones con rigor profesional y firma de contador público.",
  areas: [
    {
      title: "Estados contables",
      items: [
        "Preparación de estados contables anuales",
        "Balance de publicación para sociedades",
        "Estados contables para entidades sin fines de lucro",
        "Contabilidad general y registración",
      ],
    },
    {
      title: "Auditoría",
      items: [
        "Auditoría externa de estados contables",
        "Auditoría interna y control de gestión",
        "Revisión limitada de estados intermedios",
        "Auditoría de cumplimiento",
      ],
    },
    {
      title: "Certificaciones e informes",
      items: [
        "Certificaciones de ingresos y patrimonio",
        "Informes de auditoría para entidades financieras",
        "Informes especiales y forenses",
        "Libros societarios (Actas, Inventario y Balances)",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Qué sociedades están obligadas a presentar estados contables?",
      answer:
        "Las SA, SRL y SAS con ciertos umbrales de capital o facturación, entre otras. También las asociaciones civiles y fundaciones. Te indicamos si tu organización está obligada y cómo cumplir.",
    },
    {
      question: "¿Para qué sirve la auditoría de estados contables?",
      answer:
        "Da certeza a terceros (bancos, inversores, organismos) sobre la razonabilidad de la información financiera. También es útil internamente para detectar errores o irregularidades.",
    },
    {
      question: "¿Pueden emitir certificaciones de ingresos para trámites?",
      answer:
        "Sí. Emitimos certificaciones de ingresos, patrimonio y situación fiscal firmadas por contador público matriculado, válidas para trámites bancarios, judiciales y administrativos.",
    },
  ],
  relatedSlugs: ["asesoramiento-impositivo", "consultoria-empresarial"],
};

export default data;
