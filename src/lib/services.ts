export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  area: "juridico" | "contable";
  description: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
}

export const SERVICES: Service[] = [
  {
    slug: "laboral-seguridad-social",
    title: "Laboral y Seguridad Social",
    shortTitle: "Laboral",
    area: "juridico",
    description:
      "Asesoramiento integral a trabajadores y empleadores en derecho laboral: despidos, indemnizaciones, accidentes de trabajo, contratos y más.",
    icon: "Briefcase",
    metaTitle: "Derecho Laboral y Seguridad Social en Mar del Plata",
    metaDescription:
      "Asesoramiento laboral en Mar del Plata. Despidos, indemnizaciones, accidentes de trabajo, jubilaciones. Abogados laboralistas con experiencia.",
  },
  {
    slug: "comercial-societario",
    title: "Comercial y Societario",
    shortTitle: "Comercial",
    area: "juridico",
    description:
      "Constitución de sociedades, contratos comerciales, fusiones y asesoramiento en derecho societario para empresas de todo tamaño.",
    icon: "Building2",
    metaTitle: "Derecho Comercial y Societario en Mar del Plata",
    metaDescription:
      "Abogados comerciales en Mar del Plata. Constitución de sociedades, contratos, fusiones y derecho corporativo. RUA | LAREU.",
  },
  {
    slug: "defensa-del-consumidor",
    title: "Defensa del Consumidor",
    shortTitle: "Consumidor",
    area: "juridico",
    description:
      "Representación de consumidores y empresas en reclamos, defensa ante la OMIC y organismos competentes, acciones judiciales.",
    icon: "Shield",
    metaTitle: "Defensa del Consumidor en Mar del Plata",
    metaDescription:
      "Reclamos de defensa del consumidor en Mar del Plata. OMIC, reclamos judiciales, representación de consumidores y empresas. RUA | LAREU.",
  },
  {
    slug: "civil-familia-sucesiones",
    title: "Civil, Familia y Sucesiones",
    shortTitle: "Civil y Familia",
    area: "juridico",
    description:
      "Accidentes, amparos, divorcios, alimentos y gestión integral de sucesiones. Acompañamiento humano en momentos difíciles.",
    icon: "Users",
    metaTitle: "Derecho Civil, Familia y Sucesiones en Mar del Plata",
    metaDescription:
      "Abogados de familia y sucesiones en Mar del Plata. Divorcios, alimentos, herencias, accidentes. Atención personalizada. RUA | LAREU.",
  },
  {
    slug: "asesoramiento-impositivo",
    title: "Asesoramiento Impositivo",
    shortTitle: "Impositivo",
    area: "contable",
    description:
      "Gestión y planificación impositiva para monotributistas, responsables inscriptos y sociedades. Optimización de la carga fiscal.",
    icon: "Calculator",
    metaTitle: "Asesoramiento Impositivo en Mar del Plata",
    metaDescription:
      "Contador impositivo en Mar del Plata. Planificación tributaria, AFIP, monotributo, responsable inscripto. RUA | LAREU.",
  },
  {
    slug: "auditoria-contabilidad",
    title: "Auditoría y Contabilidad",
    shortTitle: "Auditoría",
    area: "contable",
    description:
      "Estados contables, auditorías, certificaciones, informes profesionales y libros societarios.",
    icon: "FileText",
    metaTitle: "Auditoría y Contabilidad en Mar del Plata",
    metaDescription:
      "Servicios de auditoría y contabilidad en Mar del Plata. Estados contables, certificaciones, informes. Contador público. RUA | LAREU.",
  },
  {
    slug: "consultoria-empresarial",
    title: "Consultoría Empresarial",
    shortTitle: "Consultoría",
    area: "contable",
    description:
      "Análisis de costos, rentabilidad y flujos de fondos. Información clave para la toma de decisiones y el crecimiento empresarial.",
    icon: "TrendingUp",
    metaTitle: "Consultoría Empresarial en Mar del Plata",
    metaDescription:
      "Consultoría empresarial en Mar del Plata. Costos, rentabilidad, gestión financiera. Acompañamos el crecimiento de tu empresa. RUA | LAREU.",
  },
  {
    slug: "nuevos-negocios",
    title: "Nuevos Negocios",
    shortTitle: "Nuevos Negocios",
    area: "contable",
    description:
      "Asesoramiento integral para emprendedores e importadores: inscripciones, habilitaciones, análisis legal, impositivo y de costos.",
    icon: "Rocket",
    metaTitle: "Asesoramiento para Nuevos Negocios en Mar del Plata",
    metaDescription:
      "Asesoramiento para emprendedores en Mar del Plata. Inscripciones, habilitaciones, análisis legal e impositivo. RUA | LAREU.",
  },
];

export const JURIDICAL_SERVICES = SERVICES.filter((s) => s.area === "juridico");
export const ACCOUNTING_SERVICES = SERVICES.filter((s) => s.area === "contable");

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
