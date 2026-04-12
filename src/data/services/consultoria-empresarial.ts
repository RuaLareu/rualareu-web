import type { ServicePageData } from "@/types/service";

const data: ServicePageData = {
  slug: "consultoria-empresarial",
  title: "Consultoría Empresarial",
  subtitle:
    "Información clara para decisiones seguras. Acompañamos el crecimiento de tu empresa.",
  areas: [
    {
      title: "Análisis financiero",
      items: [
        "Análisis de costos y punto de equilibrio",
        "Rentabilidad por producto, línea o unidad de negocio",
        "Flujos de fondos y proyecciones financieras",
        "Indicadores de gestión (KPIs)",
      ],
    },
    {
      title: "Gestión y crecimiento",
      items: [
        "Acompañamiento en etapas de expansión",
        "Análisis de viabilidad de nuevos proyectos",
        "Estructuras de financiamiento",
        "Presupuestos y control presupuestario",
      ],
    },
    {
      title: "Información para la toma de decisiones",
      items: [
        "Informes de gestión mensuales",
        "Tableros de control ejecutivos",
        "Análisis de escenarios",
        "Soporte en negociaciones con inversores o bancos",
      ],
    },
  ],
  faqs: [
    {
      question: "¿En qué se diferencia la consultoría empresarial de la contabilidad?",
      answer:
        "La contabilidad registra lo que pasó; la consultoría te ayuda a decidir qué hacer. Analizamos tu situación actual y te damos información accionable para mejorar la rentabilidad, reducir costos o encarar nuevos proyectos.",
    },
    {
      question: "¿Es solo para empresas grandes?",
      answer:
        "No. Trabajamos con pymes, comercios y profesionales que quieren tener un control real de su negocio. Muchas veces los empresarios más chicos son los que más necesitan este tipo de acompañamiento.",
    },
    {
      question: "¿Pueden ayudarme a presentarme ante un banco para pedir financiamiento?",
      answer:
        "Sí. Preparamos la documentación financiera, proyecciones y el análisis de viabilidad que los bancos requieren para evaluar solicitudes de crédito.",
    },
  ],
  relatedSlugs: ["nuevos-negocios", "asesoramiento-impositivo"],
};

export default data;
