import type { ServicePageData } from "@/types/service";

const data: ServicePageData = {
  slug: "nuevos-negocios",
  title: "Nuevos Negocios",
  subtitle:
    "Para emprendedores e importadores: todo lo que necesitás para arrancar bien desde el primer día.",
  areas: [
    {
      title: "Asesoramiento para emprendedores",
      items: [
        "Elección de la figura jurídica más conveniente",
        "Inscripciones impositivas (AFIP, ARBA, municipio)",
        "Habilitaciones comerciales",
        "Análisis de costos y precio de venta",
        "Requisitos legales por rubro de actividad",
      ],
    },
    {
      title: "Importación y comercio exterior",
      items: [
        "Asesoramiento en normativa aduanera",
        "Análisis de costos de importación (landed cost)",
        "Requisitos legales e impositivos para importadores",
        "Coordinación con despachantes de aduana",
      ],
    },
    {
      title: "Acompañamiento integral",
      items: [
        "Revisión del plan de negocios",
        "Estructura legal y societaria óptima",
        "Planificación tributaria desde el inicio",
        "Seguimiento en los primeros meses de actividad",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Por dónde empiezo si quiero abrir un negocio?",
      answer:
        "Por el asesoramiento profesional. Antes de gastar dinero en local, stock o marketing, es clave entender qué figura jurídica te conviene, cómo tributás, qué habilitaciones necesitás y cuál es tu costo real. Eso te ahorra tiempo y dinero.",
    },
    {
      question: "¿Qué diferencia hay entre una SAS, una SRL y un monotributo?",
      answer:
        "El monotributo es para personas físicas con actividad individual hasta ciertos topes. La SRL y la SAS son sociedades con socios. Cada una tiene diferente costo de mantenimiento, responsabilidad y tratamiento impositivo. Te asesoramos para elegir bien.",
    },
    {
      question: "Quiero importar productos para vender, ¿por dónde empiezo?",
      answer:
        "Por entender los costos reales (arancel, IVA, tasas, flete, almacenamiento) y la normativa vigente. Muchos proyectos de importación fracasan por no hacer bien este análisis previo. Podemos acompañarte desde la planificación.",
    },
  ],
  relatedSlugs: ["comercial-societario", "asesoramiento-impositivo"],
};

export default data;
