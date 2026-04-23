import type { ServicePageData } from "@/types/service";

const data: ServicePageData = {
  slug: "asesoramiento-impositivo",
  title: "Impuestos y Tributación",
  subtitle:
    "Gestión, liquidación y planificación fiscal integral. Impuestos nacionales, provinciales y municipales para personas y PyMEs.",
  areas: [
    // ── Impuestos nacionales ──
    {
      title: "Ganancias, IVA y Bienes Personales",
      items: [
        "Impuesto a las Ganancias: liquidación anual para personas y sociedades",
        "Deducciones, retenciones y percepciones de Ganancias",
        "IVA: liquidación mensual y regímenes especiales",
        "Solicitud de exclusión de retenciones y percepciones de IVA",
        "Bienes Personales: liquidación anual, bienes en el país y exterior",
        "Régimen de información y declaraciones juradas informativas",
      ],
    },
    {
      title: "Monotributo",
      items: [
        "Inscripción y elección de categoría",
        "Recategorización semestral obligatoria",
        "Exclusión del monotributo y transición a Responsable Inscripto",
        "Monotributo social y régimen simplificado",
        "Facturación electrónica y obligaciones formales",
        "Análisis de conveniencia: monotributo vs. responsable inscripto",
      ],
    },
    {
      title: "Ingresos Brutos y tributos provinciales",
      items: [
        "Inscripción y liquidación mensual o bimestral en ARBA",
        "Convenio Multilateral para contribuyentes con actividad en varias provincias",
        "Regímenes de retención y percepción ARBA y SIRCREB",
        "Solicitud de exclusión y reducción de alícuotas",
        "Impuesto Inmobiliario y Automotor: valuaciones y exenciones",
        "Impuesto de Sellos en operaciones inmobiliarias y comerciales",
      ],
    },
    // ── Municipales y planificación ──
    {
      title: "Impuestos municipales (Mar del Plata)",
      items: [
        "Tasa por Inspección de Seguridad e Higiene: habilitación y liquidación",
        "Exenciones y reducciones de tasas municipales",
        "Tasas por servicios urbanos, publicidad y espectáculos",
        "Trámites de habilitación comercial e industrial",
        "Gestión ante la Municipalidad de General Pueyrredón",
        "Asesoramiento para nuevos comercios y emprendimientos locales",
      ],
    },
    {
      title: "Planificación fiscal",
      items: [
        "Estructura óptima de negocios y elección del régimen impositivo",
        "Elección del tipo societario según impacto fiscal",
        "Planificación fiscal preventiva para reducir la carga tributaria",
        "Reorganización empresaria con beneficios impositivos",
        "Precios de transferencia: documentación e informes",
        "Operaciones con sujetos vinculados del exterior",
      ],
    },
    {
      title: "Moratoria, regularización y defensa fiscal",
      items: [
        "Adhesión a planes de facilidades de ARCA y ARBA",
        "Mis Facilidades: planes permanentes y especiales",
        "Regularización de deuda impositiva y previsional",
        "Atención de inspecciones y fiscalizaciones de ARCA y ARBA",
        "Descargos, recursos de reconsideración y apelaciones",
        "Determinaciones de oficio y defensa ante el Tribunal Fiscal",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Qué me conviene, monotributo o responsable inscripto?",
      answer:
        "Depende de tu facturación, tus gastos deducibles y el tipo de clientes que tenés. El monotributo es más simple y tiene una cuota fija, pero tiene topes de facturación. Como responsable inscripto podés deducir gastos y computar crédito fiscal de IVA, lo que puede resultar en una carga menor si tenés muchos gastos. Analizamos tu caso particular para recomendarte la mejor opción.",
    },
    {
      question: "Tengo deuda con ARCA, ¿qué puedo hacer?",
      answer:
        "ARCA ofrece planes de facilidades permanentes y especiales que permiten regularizar deudas impositivas y previsionales en cuotas. El sistema Mis Facilidades permite adherirse de forma online. Según el tipo de deuda y el plan vigente, pueden incluirse intereses reducidos o condonación parcial. Te ayudamos a evaluar la mejor alternativa y a gestionar la adhesión.",
    },
    {
      question: "¿Qué pasa si no presento una declaración jurada?",
      answer:
        "La falta de presentación genera multas automáticas y puede derivar en una estimación de oficio por parte de ARCA, donde el organismo determina el impuesto que considera que debés pagar. Además, acumula antecedentes negativos en el SIPER (Sistema de Perfil de Riesgo) que pueden afectar tu categorización como contribuyente. Lo recomendable es regularizar la situación lo antes posible.",
    },
    {
      question: "ARBA me retiene demasiado, ¿qué puedo hacer?",
      answer:
        "Si las retenciones y percepciones de Ingresos Brutos generan saldos a favor permanentes, podés solicitar un certificado de exclusión o una reducción de alícuota ante ARBA. El trámite es online y requiere tener la situación fiscal al día. También se puede solicitar la devolución de los saldos a favor acumulados.",
    },
    {
      question: "¿Cuánto pago de Ganancias como empleado en relación de dependencia?",
      answer:
        "El impuesto a las Ganancias para empleados se calcula sobre el sueldo bruto menos las deducciones permitidas (cónyuge, hijos, servicio doméstico, alquiler de vivienda, seguros de vida, gastos médicos, entre otros). El empleador retiene mensualmente según una escala progresiva. Podés cargar tus deducciones en el SIRADIG para reducir la retención mensual.",
    },
    {
      question: "¿Qué deducciones puedo tomar en Ganancias?",
      answer:
        "Las deducciones más comunes incluyen: cargas de familia (cónyuge e hijos), intereses de créditos hipotecarios, alquiler de vivienda habitual, servicio doméstico, seguros de vida y retiro, gastos médicos (con tope), donaciones a entidades exentas, e indumentaria y herramientas de trabajo. El detalle y los topes se actualizan anualmente.",
    },
    {
      question: "¿Cuándo me conviene pasar de monotributo a responsable inscripto?",
      answer:
        "El cambio conviene cuando superás los topes del monotributo, cuando tus clientes necesitan que factures con IVA (para computar crédito fiscal) o cuando tenés muchos gastos deducibles que no aprovechás en el monotributo. También puede convenir si estás cerca del tope y querés planificar el crecimiento de tu actividad de forma ordenada.",
    },
    {
      question: "¿Cómo me inscribo para abrir un comercio en Mar del Plata?",
      answer:
        "Necesitás inscribirte en ARCA (nivel nacional), en ARBA para Ingresos Brutos (nivel provincial) y obtener la habilitación municipal con la Tasa de Seguridad e Higiene en la Municipalidad de General Pueyrredón. Según la actividad, pueden requerirse habilitaciones especiales (bromatología, bomberos, medio ambiente). Te acompañamos en todo el proceso de inscripción y habilitación.",
    },
  ],
  relatedSlugs: ["auditoria-contabilidad", "nuevos-negocios"],
};

export default data;
