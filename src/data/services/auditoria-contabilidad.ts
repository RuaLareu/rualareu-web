import type { ServicePageData } from "@/types/service";

const data: ServicePageData = {
  slug: "auditoria-contabilidad",
  title: "Contabilidad y Auditoría",
  subtitle:
    "Registración contable, balances, certificaciones y outsourcing para PyMEs y profesionales independientes en Mar del Plata.",
  areas: [
    {
      title: "Contabilidad integral",
      items: [
        "Registración contable mensual: libro diario, mayor e inventario",
        "Conciliaciones bancarias y control de saldos",
        "Contabilidad para monotributistas y responsables inscriptos",
        "Confección de estados contables anuales completos para todo tipo de sociedades y entidades",
        "Presentación de estados contables anuales ante todos los organismos",
      ],
    },
    {
      title: "Certificaciones e informes profesionales",
      items: [
        "Informe de auditoría de estados contables",
        "Certificaciones contables",
        "Actualización de carpetas de crédito e informes patrimoniales para bancos",
        "Proyecciones económicas y financieras para entidades crediticias",
        "Libros societarios: rúbrica y confección de actas. Mantenimiento general",
      ],
    },
    {
      title: "Auditoría y control de gestión",
      items: [
        "Auditoría externa de estados contables",
        "Auditoría interna y revisión de procesos",
        "Auditoría de cumplimiento normativo",
        "Detección de irregularidades y control de gestión",
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
      question: "¿Qué es una certificación contable y para qué sirve?",
      answer:
        "Es un documento firmado por un contador público matriculado que da fe sobre determinada información contable o financiera. Se usa para acreditar ingresos ante bancos, presentar informes en licitaciones, cumplir requisitos judiciales o tramitar créditos. Tiene valor legal y responsabilidad profesional del contador que la emite.",
    },
    {
      question: "¿Qué diferencia hay entre tener un contador interno y contratar un estudio externo?",
      answer:
        "Un contador interno forma parte de la nómina de la empresa y trabaja exclusivamente para ella. Un estudio externo aporta un equipo de profesionales con experiencia diversa, una mirada independiente y menores costos fijos. Para PyMEs que no necesitan un profesional full time, el estudio externo suele ser la opción más eficiente y económica.",
    },
  ],
  relatedSlugs: ["asesoramiento-impositivo", "consultoria-empresarial"],
};

export default data;
