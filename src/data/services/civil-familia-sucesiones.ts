import type { ServicePageData } from "@/types/service";

const data: ServicePageData = {
  slug: "civil-familia-sucesiones",
  title: "Civil, Familia y Sucesiones",
  subtitle:
    "Acompañamiento cercano y profesional en los momentos más importantes de tu vida.",
  areas: [
    {
      title: "Derecho civil",
      items: [
        "Accidentes de tránsito y daños y perjuicios",
        "Acciones de amparo",
        "Contratos civiles y locaciones",
        "Responsabilidad civil",
      ],
    },
    {
      title: "Derecho de familia",
      items: [
        "Divorcios (consensuales y contenciosos)",
        "Alimentos y cuota alimentaria",
        "Régimen de comunicación y cuidado personal de hijos",
        "Violencia familiar y medidas de protección",
        "Adopciones e identidad",
      ],
    },
    {
      title: "Sucesiones",
      items: [
        "Apertura y tramitación de sucesiones",
        "Declaratoria de herederos",
        "Partición de bienes hereditarios",
        "Testamentos y donaciones",
        "Conflictos sucesorios",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cómo es un divorcio en Argentina hoy?",
      answer:
        "Desde 2015, el divorcio en Argentina es exprés: no se requiere alegar causas y puede ser unilateral. Se puede hacer de forma consensuada o con un convenio regulador que establezca alimentos, bienes y cuidado de los hijos. El trámite puede durar entre 30 días y varios meses según la complejidad.",
    },
    {
      question: "¿Qué pasa con los bienes cuando fallece un familiar?",
      answer:
        "Se abre la sucesión. Los herederos deben iniciar el trámite judicial o notarial para obtener la declaratoria de herederos y luego proceder a la partición de los bienes. Es importante hacerlo con asesoramiento para proteger los derechos de todos los herederos.",
    },
    {
      question: "Me chocaron y no quieren hacerse cargo, ¿puedo reclamar?",
      answer:
        "Sí. Podés reclamar al responsable del accidente y también a su aseguradora. Si no hay acuerdo extrajudicial, se puede iniciar una demanda civil por daños y perjuicios que incluya daño material, lucro cesante y daño moral.",
    },
  ],
  relatedSlugs: ["defensa-del-consumidor", "laboral-seguridad-social"],
};

export default data;
