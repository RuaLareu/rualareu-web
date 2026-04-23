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
    metaTitle: "Abogado Laboral en Mar del Plata | Despidos, Accidentes de Trabajo, ART",
    metaDescription:
      "Abogado laboralista en Mar del Plata. Despidos, accidentes de trabajo, reclamos a ART, trabajo no registrado, jubilaciones. Asesoramiento integral para trabajadores y empleadores.",
  },
  {
    slug: "comercial-societario",
    title: "Civil y Comercial",
    shortTitle: "Civil y Comercial",
    area: "juridico",
    description:
      "Contratos, sucesiones, responsabilidad civil, sociedades, cobro de deudas y defensa del consumidor. Soluciones para personas y empresas.",
    icon: "Building2",
    metaTitle: "Abogado Civil y Comercial en Mar del Plata | Contratos, Sucesiones, Sociedades",
    metaDescription:
      "Abogados en derecho civil y comercial en Mar del Plata. Contratos, sucesiones, sociedades, cobro de deudas, responsabilidad civil, marcas. RUA | LAREU.",
  },
  {
    slug: "defensa-del-consumidor",
    title: "Defensa del Consumidor",
    shortTitle: "Consumidor",
    area: "juridico",
    description:
      "Reclamos por productos defectuosos, servicios bancarios abusivos, telecomunicaciones, medicina prepaga, compras online y más.",
    icon: "Shield",
    metaTitle: "Defensa del Consumidor en Mar del Plata | Reclamos, OMIC, COPREC",
    metaDescription:
      "Abogado de defensa del consumidor en Mar del Plata. Reclamos por productos defectuosos, bancos, telecomunicaciones, medicina prepaga, compras online. RUA | LAREU.",
  },
  {
    slug: "civil-familia-sucesiones",
    title: "Derecho de Familia",
    shortTitle: "Familia",
    area: "juridico",
    description:
      "Divorcios, alimentos, régimen de comunicación, violencia familiar, adopciones y uniones convivenciales. Acompañamiento cercano.",
    icon: "Users",
    metaTitle: "Abogado de Familia en Mar del Plata | Divorcios, Alimentos, Custodia",
    metaDescription:
      "Abogado de familia en Mar del Plata. Divorcios, cuota alimentaria, régimen de comunicación, violencia familiar, adopciones, tutela. RUA | LAREU.",
  },
  {
    slug: "derecho-previsional",
    title: "Derecho Previsional",
    shortTitle: "Previsional",
    area: "juridico",
    description:
      "Jubilaciones, pensiones, reajustes de haberes, reparación histórica y planificación previsional.",
    icon: "Clock",
    metaTitle: "Derecho Previsional en Mar del Plata | Jubilaciones, Reajustes, Pensiones",
    metaDescription:
      "Abogado previsionalista en Mar del Plata. Jubilaciones, reajustes de haberes, pensiones, retiro por invalidez, reparación histórica. RUA | LAREU.",
  },
  {
    slug: "compliance-prevencion-legal",
    title: "Compliance y Prevención Legal",
    shortTitle: "Compliance",
    area: "juridico",
    description:
      "Asesoramiento legal preventivo para PyMEs y empresas. Cumplimiento normativo, protección de datos, auditoría legal y prevención de contingencias.",
    icon: "ShieldAlert",
    metaTitle: "Compliance y Prevención Legal en Mar del Plata | Cumplimiento Normativo",
    metaDescription:
      "Compliance y prevención legal en Mar del Plata. Cumplimiento normativo, protección de datos personales, auditoría legal, prevención de contingencias. RUA | LAREU.",
  },
  {
    slug: "asesoramiento-impositivo",
    title: "Impuestos y Tributación",
    shortTitle: "Impuestos",
    area: "contable",
    description:
      "Ganancias, IVA, Bienes Personales, Monotributo, Ingresos Brutos y tasas municipales. Planificación fiscal para personas y PyMEs.",
    icon: "Calculator",
    metaTitle: "Contador en Mar del Plata | Impuestos, ARCA, Monotributo, Ganancias",
    metaDescription:
      "Contador en Mar del Plata. Impuestos nacionales, provinciales y municipales. Ganancias, IVA, Monotributo, Ingresos Brutos, planificación fiscal. RUA | LAREU.",
  },
  {
    slug: "auditoria-contabilidad",
    title: "Contabilidad y Auditoría",
    shortTitle: "Contabilidad",
    area: "contable",
    description:
      "Registración contable, balances, certificaciones, outsourcing contable, peritajes y due diligence para PyMEs y profesionales.",
    icon: "FileText",
    metaTitle: "Estudio Contable en Mar del Plata | Contabilidad para PyMEs",
    metaDescription:
      "Estudio contable en Mar del Plata. Contabilidad integral para PyMEs, balances, certificaciones, outsourcing contable, peritajes. RUA | LAREU.",
  },
  {
    slug: "consultoria-empresarial",
    title: "Consultoría Empresarial",
    shortTitle: "Consultoría",
    area: "contable",
    description:
      "Costos, rentabilidad, flujos de fondos, financiamiento, reestructuración y acompañamiento estratégico para PyMEs en crecimiento.",
    icon: "TrendingUp",
    metaTitle: "Consultoría Empresarial en Mar del Plata | Costos, Rentabilidad, Financiamiento",
    metaDescription:
      "Consultoría empresarial en Mar del Plata. Análisis de costos, rentabilidad, flujos de fondos, financiamiento, reestructuración. Acompañamos PyMEs. RUA | LAREU.",
  },
  {
    slug: "nuevos-negocios",
    title: "Nuevos Negocios",
    shortTitle: "Nuevos Negocios",
    area: "contable",
    description:
      "Asesoramiento integral para emprendedores: forma jurídica, inscripciones, habilitaciones, costos, plan de negocios y financiamiento.",
    icon: "Rocket",
    metaTitle: "Asesoramiento para Emprendedores en Mar del Plata | Abrir un Negocio",
    metaDescription:
      "Asesoramiento para emprendedores en Mar del Plata. Forma jurídica, inscripciones, habilitaciones, costos, plan de negocios, importación. RUA | LAREU.",
  },
  {
    slug: "gestion-de-sueldos",
    title: "Gestión de Sueldos",
    shortTitle: "Sueldos",
    area: "contable",
    description:
      "Liquidación de sueldos, cargas sociales, F.931, libro de sueldos digital, certificaciones y outsourcing de nómina.",
    icon: "Wallet",
    metaTitle: "Liquidación de Sueldos en Mar del Plata | Gestión de Personal",
    metaDescription:
      "Liquidación de sueldos en Mar del Plata. Cargas sociales, F.931, libro de sueldos digital, altas y bajas, certificaciones laborales. RUA | LAREU.",
  },
  {
    slug: "comercio-exterior",
    title: "Comercio Exterior",
    shortTitle: "Comercio Exterior",
    area: "contable",
    description:
      "Asesoramiento integral en importación y exportación. Regímenes aduaneros, clasificación arancelaria, drawback, reintegros y compliance aduanero.",
    icon: "Globe",
    metaTitle: "Comercio Exterior en Mar del Plata | Importación y Exportación",
    metaDescription:
      "Asesoramiento en comercio exterior en Mar del Plata. Importación, exportación, regímenes aduaneros, clasificación arancelaria, drawback, reintegros. RUA | LAREU.",
  },
];

export const ALL_SERVICES = SERVICES;

export const JURIDICAL_SERVICES = SERVICES.filter((s) => s.area === "juridico");
export const ACCOUNTING_SERVICES = SERVICES.filter((s) => s.area === "contable");

export function getServiceBySlug(slug: string): Service | undefined {
  return ALL_SERVICES.find((s) => s.slug === slug);
}
