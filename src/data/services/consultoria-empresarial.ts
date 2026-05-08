import type { ServicePageData } from "@/types/service";

const data: ServicePageData = {
  slug: "consultoria-empresarial",
  title: "Consultoría Empresarial",
  subtitle:
    "Director financiero externo para tu empresa. Información clara para decisiones seguras, con análisis financiero y visión estratégica.",
  areas: [
    {
      title: "Costos y Precios",
      items: [
        "Relevamiento y análisis de costos fijos y variables",
        "Determinación de punto de equilibrio económico y financiero",
        "Rentabilidad por producto, línea de negocio y/o cliente",
        "Márgenes de contribución y análisis de precios",
      ],
    },
    {
      title: "Análisis económico y financiero",
      items: [
        "Armado de estados de resultados mensuales",
        "Armado de flujo de fondos y proyectados a corto y mediano plazo",
        "Análisis operativo: cobros, pagos y capital de trabajo",
        "Rentabilidad económica vs. caja real. Identificación de desvíos y fugas",
        "Gestión de tesorería y optimización de excedentes",
        "Presupuestos por proyectos. Elaboración, control y análisis de desvíos",
        "Informes mensuales con implementación de tableros, KPIs y OKRs",
      ],
    },
    {
      title: "Financiamiento y acceso al crédito",
      items: [
        "Armado de carpetas de crédito para bancos y entidades",
        "Proyecciones financieras para solicitudes de préstamos",
        "Análisis de alternativas de financiamiento: bancario, SGR, mercado de capitales",
        "Subsidios y programas de fomento para PyMEs (SEPyME, Provincia, Municipio)",
        "Evaluación de líneas de crédito a tasa subsidiada",
        "Soporte en negociaciones con entidades financieras",
      ],
    },
    {
      title: "Planificación estratégica y crecimiento",
      items: [
        "Análisis de viabilidad de nuevos proyectos e inversiones",
        "Evaluación de apertura de sucursales o nuevas unidades de negocio",
        "Análisis de escenarios: optimista, probable y pesimista",
        "Plan de negocios para inversores o socios potenciales",
        "Acompañamiento en etapas de expansión y profesionalización",
        "Definición de estructura organizativa y roles clave",
      ],
    },
  ],
  faqs: [
    {
      question: "¿En qué se diferencia la consultoría empresarial de la contabilidad?",
      answer:
        "La contabilidad registra lo que pasó; la consultoría te ayuda a decidir qué hacer con esa información. Analizamos tu situación financiera actual y te damos herramientas concretas para mejorar la rentabilidad, reducir costos y planificar inversiones. Es mirar hacia adelante, no solo hacia atrás.",
    },
    {
      question: "¿Es solo para empresas grandes?",
      answer:
        "No. De hecho, las PyMEs y los comercios son quienes más se benefician de este tipo de acompañamiento, porque suelen tomar decisiones importantes sin información suficiente. No hace falta ser una empresa grande para necesitar saber si tu negocio es rentable, cuánto podés invertir o si te conviene pedir un crédito.",
    },
    {
      question: "¿Pueden ayudarme a conseguir financiamiento?",
      answer:
        "Sí. Preparamos toda la documentación que los bancos y entidades requieren: carpetas de crédito, proyecciones financieras, análisis de viabilidad y estados contables actualizados. También te asesoramos sobre las líneas de crédito disponibles, incluyendo programas de fomento para PyMEs con tasas subsidiadas.",
    },
    {
      question: "¿Cómo sé si mi negocio es realmente rentable?",
      answer:
        "Muchos empresarios confunden facturación con rentabilidad. Un análisis de costos detallado permite saber cuánto ganás realmente por cada producto o servicio, cuál es tu punto de equilibrio y dónde se concentran los gastos innecesarios. A veces pequeños ajustes generan mejoras significativas en el margen.",
    },
    {
      question: "¿Qué es un tablero de control y para qué me sirve?",
      answer:
        "Es un informe visual que resume los indicadores clave de tu negocio en una sola página: ventas, costos, rentabilidad, cobranzas, deudas y otros datos relevantes. Te permite ver de un vistazo cómo está tu empresa y detectar problemas antes de que se agraven. Lo diseñamos a medida según tu actividad y lo actualizamos periódicamente.",
    },
    {
      question: "¿Cuánto cuesta el servicio de consultoría?",
      answer:
        "Depende del alcance y la complejidad. Puede ser un proyecto puntual (análisis de costos, plan de negocios, evaluación de inversión) o un acompañamiento mensual continuo. En todos los casos damos un presupuesto cerrado antes de empezar para que sepas exactamente qué incluye y cuánto cuesta.",
    },
    {
      question: "Quiero abrir una segunda sucursal, ¿cómo sé si me conviene?",
      answer:
        "Hacemos un análisis de viabilidad que incluye la estimación de inversión inicial, costos operativos de la nueva sede, proyección de ventas, punto de equilibrio y retorno de la inversión. También evaluamos alternativas como franquiciar, asociarte o crecer de otras formas menos riesgosas. La decisión queda en tus manos, pero con números concretos.",
    },
  ],
  relatedSlugs: ["nuevos-negocios", "auditoria-contabilidad"],
};

export default data;
