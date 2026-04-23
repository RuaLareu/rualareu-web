import type { ServicePageData } from "@/types/service";

const data: ServicePageData = {
  slug: "auditoria-contabilidad",
  title: "Contabilidad y Auditoría",
  subtitle:
    "Registración contable, balances, certificaciones y outsourcing para PyMEs y profesionales independientes en Mar del Plata.",
  areas: [
    // ── Registración y contabilidad ──
    {
      title: "Contabilidad integral para PyMEs",
      items: [
        "Registración contable mensual: libro diario, mayor e inventario",
        "Adecuación a normas contables vigentes (Resoluciones Técnicas FACPCE)",
        "Conciliaciones bancarias y control de saldos",
        "Contabilidad para monotributistas y responsables inscriptos",
        "Puesta al día de contabilidades atrasadas",
        "Corrección de errores y adecuación a normas vigentes",
      ],
    },
    {
      title: "Balances y estados contables",
      items: [
        "Confección de estados contables anuales completos",
        "Balance de sumas y saldos",
        "Estado de resultados y estado de flujo de efectivo",
        "Notas y anexos a los estados contables",
        "Balance de publicación para sociedades comerciales",
        "Estados contables para entidades sin fines de lucro",
      ],
    },
    {
      title: "Certificaciones e informes profesionales",
      items: [
        "Certificación de ingresos para trámites bancarios y judiciales",
        "Certificación de estados contables con firma de contador público",
        "Informes especiales para licitaciones y organismos públicos",
        "Carpetas de crédito e informes patrimoniales para bancos",
        "Proyecciones financieras para entidades crediticias",
        "Libros societarios: rúbrica, actas de asamblea y directorio",
      ],
    },
    // ── Outsourcing y asesoría especializada ──
    {
      title: "Outsourcing contable",
      items: [
        "Tercerización integral del área contable y administrativa",
        "Gestión de cuentas a pagar y cuentas a cobrar",
        "Control de proveedores y conciliaciones",
        "Reportes mensuales de gestión y rentabilidad",
        "Análisis de costos y presupuestos",
        "Dashboards financieros e informes para la toma de decisiones",
      ],
    },
    {
      title: "Auditoría",
      items: [
        "Auditoría externa de estados contables",
        "Auditoría interna y revisión de procesos",
        "Revisión limitada de estados contables intermedios",
        "Auditoría de cumplimiento normativo",
        "Auditoría previa a compra-venta de empresas",
        "Detección de irregularidades y control de gestión",
      ],
    },
    {
      title: "Peritajes y due diligence",
      items: [
        "Peritaje contable de parte en juicios civiles, laborales y comerciales",
        "Due diligence contable para ingreso de socios o inversores",
        "Revisión de estados contables para compra-venta de empresas",
        "Valuación de empresas y participaciones societarias",
        "Informes periciales para mediaciones y arbitrajes",
        "Asesoramiento contable en procesos concursales",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Qué obligaciones contables tiene una SRL?",
      answer:
        "Una SRL debe llevar libros contables rubricados (diario, inventario y balances), confeccionar estados contables anuales y presentarlos ante el organismo de contralor (IGJ o DPPJ según la provincia). También debe llevar libros societarios con actas de reuniones de socios y registro de socios. El incumplimiento puede generar sanciones e incluso afectar la responsabilidad de los socios.",
    },
    {
      question: "¿Qué incluye un balance o estado contable?",
      answer:
        "Un juego completo de estados contables incluye el estado de situación patrimonial (activo, pasivo y patrimonio neto), el estado de resultados (ingresos y egresos del período), el estado de evolución del patrimonio neto, el estado de flujo de efectivo, y las notas y anexos que complementan la información numérica. Todo debe estar confeccionado según las normas contables vigentes.",
    },
    {
      question: "¿Cada cuánto debo presentar estados contables?",
      answer:
        "Los estados contables se confeccionan al cierre de cada ejercicio económico, que generalmente es anual. Las sociedades comerciales deben presentarlos ante el organismo de contralor dentro de los plazos establecidos (generalmente 15 días después de la asamblea que los aprueba). Algunos organismos y bancos pueden requerir también balances intermedios semestrales o trimestrales.",
    },
    {
      question: "¿Puedo tercerizar toda la contabilidad de mi empresa?",
      answer:
        "Sí. Muchas PyMEs optan por tercerizar el área contable y administrativa en un estudio externo, lo que les permite reducir costos fijos y contar con profesionales especializados sin necesidad de tener un contador en relación de dependencia. Nos encargamos de la registración, los balances, las conciliaciones y los reportes de gestión.",
    },
    {
      question: "¿Qué es una certificación contable y para qué sirve?",
      answer:
        "Es un documento firmado por un contador público matriculado que da fe sobre determinada información contable o financiera. Se usa para acreditar ingresos ante bancos, presentar informes en licitaciones, cumplir requisitos judiciales o tramitar créditos. Tiene valor legal y responsabilidad profesional del contador que la emite.",
    },
    {
      question: "¿Qué diferencia hay entre tener un contador interno y contratar un estudio externo?",
      answer:
        "Un contador interno forma parte de la nómina de la empresa y trabaja exclusivamente para ella. Un estudio externo aporta un equipo de profesionales con experiencia diversa, una mirada independiente y menores costos fijos. Para PyMEs que no necesitan un profesional full time, el estudio externo suele ser la opción más eficiente y económica.",
    },
    {
      question: "¿Pueden actuar como peritos contables en un juicio?",
      answer:
        "Sí. Actuamos como peritos contables de parte en juicios civiles, laborales y comerciales. Elaboramos informes periciales que analizan la documentación contable relevante y aportamos las conclusiones técnicas necesarias para respaldar la posición de nuestro cliente ante el juez.",
    },
    {
      question: "¿Qué es una due diligence contable?",
      answer:
        "Es una revisión exhaustiva de la información contable y financiera de una empresa, que se realiza antes de una operación como la compra-venta de un negocio, el ingreso de un socio o una inversión. El objetivo es detectar riesgos, pasivos ocultos, contingencias y verificar que la información presentada sea consistente y confiable.",
    },
  ],
  relatedSlugs: ["asesoramiento-impositivo", "consultoria-empresarial"],
};

export default data;
