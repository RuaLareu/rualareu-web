import type { ServicePageData } from "@/types/service";

const data: ServicePageData = {
  slug: "laboral-seguridad-social",
  title: "Laboral y Seguridad Social",
  subtitle:
    "Asesoramiento integral a trabajadores y empleadores. Defendemos tus derechos con claridad y compromiso.",
  areas: [
    {
      title: "Asesoramiento a trabajadores",
      items: [
        "Despidos e indemnizaciones",
        "Accidentes de trabajo y enfermedades laborales",
        "Trabajo no registrado (empleo informal)",
        "Acoso laboral y violencia en el trabajo",
        "Diferencias salariales y horas extra",
      ],
    },
    {
      title: "Asesoramiento a empleadores y empresas",
      items: [
        "Redacción y revisión de contratos de trabajo",
        "Prevención de conflictos laborales",
        "Sanciones disciplinarias y sumarios internos",
        "Procesos de desvinculación laboral",
        "Reestructuraciones y reducción de personal",
      ],
    },
    {
      title: "Seguridad social",
      items: [
        "Trámites de jubilaciones y pensiones",
        "Asignaciones familiares",
        "Obra social y cobertura médica",
        "ANSES y AFIP",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuánto me corresponde de indemnización por despido sin causa?",
      answer:
        "La indemnización base equivale a un mes de sueldo por cada año trabajado (o fracción mayor a 3 meses), con un mínimo de dos meses. A eso se suman preaviso, integración del mes de despido y otros rubros según cada caso. Te asesoramos para calcular exactamente lo que te corresponde.",
    },
    {
      question: "Me accidenté en el trabajo, ¿qué debo hacer?",
      answer:
        "Lo primero es denunciar el accidente ante tu empleador y la ART. Si la ART no brinda la cobertura adecuada o minimiza el porcentaje de incapacidad, podés iniciar acciones legales. En muchos casos es posible reclamar tanto a la ART como al empleador en forma simultánea.",
    },
    {
      question: "Trabajo en negro, ¿puedo reclamar mis derechos?",
      answer:
        "Sí. El trabajo no registrado no te quita derechos laborales. Podés intimar a tu empleador a registrar la relación y, si no lo hace, considerarse en situación de despido indirecto y reclamar todas las indemnizaciones correspondientes, con multas adicionales.",
    },
    {
      question: "¿Cómo sé si me conviene aceptar lo que me ofrece la empresa?",
      answer:
        "Antes de firmar cualquier acuerdo o recibo, consultá con un abogado. En muchos casos las propuestas de las empresas no incluyen todos los rubros o los calculan incorrectamente. La consulta inicial no te compromete a nada.",
    },
    {
      question: "¿Pueden asesorar a mi empresa para prevenir conflictos laborales?",
      answer:
        "Sí. Trabajamos con empresas de todos los tamaños en la prevención y gestión de conflictos: desde la revisión de contratos y reglamentos internos hasta la capacitación en normativa laboral vigente.",
    },
  ],
  relatedSlugs: ["comercial-societario", "defensa-del-consumidor"],
};

export default data;
