import type { ServicePageData } from "@/types/service";

const data: ServicePageData = {
  slug: "comercial-societario",
  title: "Comercial y Societario",
  subtitle:
    "Asesoramiento jurídico para empresas y emprendedores. Desde la constitución hasta la resolución de conflictos.",
  areas: [
    {
      title: "Constitución y reorganización de sociedades",
      items: [
        "Constitución de SRL, SA, SAS y otras formas societarias",
        "Modificaciones estatutarias y cambios de objeto social",
        "Fusiones, escisiones y transformaciones",
        "Reorganización societaria y reestructuraciones",
      ],
    },
    {
      title: "Contratos comerciales",
      items: [
        "Redacción y revisión de contratos comerciales",
        "Contratos de distribución y franquicia",
        "Acuerdos de confidencialidad y no competencia",
        "Contratos de locación comercial",
      ],
    },
    {
      title: "Resolución de conflictos corporativos",
      items: [
        "Conflictos entre socios",
        "Impugnación de asambleas y decisiones societarias",
        "Exclusión de socios",
        "Representación en mediaciones y litigios comerciales",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuál es la mejor forma societaria para mi negocio?",
      answer:
        "Depende del tamaño, los socios involucrados, la actividad y los objetivos de cada empresa. La SAS es ágil para pequeños negocios; la SRL y SA tienen mayor estructura. Te asesoramos para elegir la más conveniente en tu caso.",
    },
    {
      question: "¿Cuánto tarda constituir una sociedad?",
      answer:
        "Una SAS puede constituirse en pocos días de forma online. Una SRL o SA tradicional tarda entre 30 y 60 días hábiles según el Registro Público. Acompañamos todo el proceso.",
    },
    {
      question: "Tengo un conflicto con mi socio, ¿qué puedo hacer?",
      answer:
        "Los conflictos societarios pueden resolverse por mediación, vía asambleas o, en casos extremos, judicialmente. Lo ideal es actuar rápido y con asesoramiento legal para proteger tus derechos e intereses en la sociedad.",
    },
  ],
  relatedSlugs: ["nuevos-negocios", "consultoria-empresarial"],
};

export default data;
