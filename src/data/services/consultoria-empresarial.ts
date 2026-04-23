import type { ServicePageData } from "@/types/service";

const data: ServicePageData = {
  slug: "consultoria-empresarial",
  title: "Consultoría Empresarial",
  subtitle:
    "Información clara para decisiones seguras. Acompañamos el crecimiento de tu empresa con análisis financiero y visión estratégica.",
  areas: [
    // ── Análisis y gestión financiera ──
    {
      title: "Análisis de costos y rentabilidad",
      items: [
        "Determinación de costos fijos, variables y punto de equilibrio",
        "Rentabilidad por producto, línea de negocio o cliente",
        "Márgenes de contribución y análisis de precios",
        "Detección de ineficiencias y oportunidades de ahorro",
        "Benchmarking con indicadores del sector",
        "Informes de rentabilidad periódicos para la dirección",
      ],
    },
    {
      title: "Flujos de fondos y presupuestos",
      items: [
        "Proyección de flujo de fondos a corto y mediano plazo",
        "Cash flow operativo: cobros, pagos y capital de trabajo",
        "Elaboración de presupuestos anuales por área o proyecto",
        "Control presupuestario: desvíos y acciones correctivas",
        "Análisis de necesidades de financiamiento",
        "Gestión de tesorería y optimización de excedentes",
      ],
    },
    {
      title: "Tableros de control e indicadores (KPIs)",
      items: [
        "Diseño de tableros de control ejecutivos",
        "Definición de KPIs relevantes para tu negocio",
        "Informes de gestión mensuales con análisis de tendencias",
        "Seguimiento de metas comerciales y operativas",
        "Alertas tempranas ante desvíos críticos",
        "Reportes visuales para reuniones de socios o directorio",
      ],
    },
    // ── Estrategia y crecimiento ──
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
    {
      title: "Reestructuración y situaciones de crisis",
      items: [
        "Diagnóstico financiero integral de empresas en dificultades",
        "Plan de reestructuración de deudas y refinanciación",
        "Reducción de costos y reorganización operativa",
        "Asesoramiento previo a concurso preventivo",
        "Análisis de continuidad del negocio vs. cierre ordenado",
        "Acompañamiento a socios en decisiones críticas",
      ],
    },
  ],
  faqs: [
    {
      question: "¿En qué se diferencia la consultoría empresarial de la contabilidad?",
      answer:
        "La contabilidad registra lo que pasó; la consultoría te ayuda a decidir qué hacer con esa información. Analizamos tu situación financiera actual y te damos herramientas concretas para mejorar la rentabilidad, reducir costos, planificar inversiones o encarar una reestructuración. Es mirar hacia adelante, no solo hacia atrás.",
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
      question: "Mi empresa está en dificultades, ¿pueden ayudarme?",
      answer:
        "Sí. Hacemos un diagnóstico financiero integral para entender la situación real y evaluar las alternativas: reestructuración de deudas, reducción de costos, refinanciación con acreedores o, si es necesario, asesoramiento previo a un concurso preventivo. Lo importante es actuar rápido y con información clara para tomar la mejor decisión posible.",
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
