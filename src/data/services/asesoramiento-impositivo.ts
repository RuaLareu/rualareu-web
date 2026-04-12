import type { ServicePageData } from "@/types/service";

const data: ServicePageData = {
  slug: "asesoramiento-impositivo",
  title: "Asesoramiento Impositivo",
  subtitle:
    "Planificación tributaria inteligente. Cumplís con AFIP y optimizás tu carga fiscal.",
  areas: [
    {
      title: "Personas y monotributistas",
      items: [
        "Alta y recategorización en monotributo",
        "Liquidación de IVA y Ganancias",
        "Bienes Personales",
        "Ingreso a Responsable Inscripto",
      ],
    },
    {
      title: "Empresas y sociedades",
      items: [
        "Impuesto a las Ganancias de sociedades",
        "IVA y régimen de retenciones",
        "Impuestos provinciales (Ingresos Brutos)",
        "Convenio Multilateral",
        "Planificación fiscal y optimización tributaria",
      ],
    },
    {
      title: "Representación ante AFIP",
      items: [
        "Fiscalizaciones y requerimientos de AFIP",
        "Planes de pago y moratorias",
        "Recursos y apelaciones",
        "ARCA y nuevas plataformas digitales",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuándo me conviene pasar de monotributo a responsable inscripto?",
      answer:
        "Cuando superás los topes de facturación o cantidad de empleados del monotributo. También puede convenir antes si tenés muchos gastos deducibles. Hacemos el análisis comparativo para que tomes la mejor decisión.",
    },
    {
      question: "Me llegó un requerimiento de AFIP, ¿qué hago?",
      answer:
        "No lo ignorés. AFIP tiene plazos estrictos para responder. Te ayudamos a preparar la respuesta correcta y, si es necesario, a presentar recursos o negociar planes de pago.",
    },
    {
      question: "¿Qué es la planificación tributaria?",
      answer:
        "Es organizar tus actividades de forma legal para pagar menos impuestos dentro del marco normativo. Incluye la elección de la figura jurídica adecuada, el timing de operaciones, la utilización de deducciones y beneficios fiscales.",
    },
  ],
  relatedSlugs: ["auditoria-contabilidad", "consultoria-empresarial"],
};

export default data;
