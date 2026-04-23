import type { ServicePageData } from "@/types/service";

const data: ServicePageData = {
  slug: "nuevos-negocios",
  title: "Nuevos Negocios",
  subtitle:
    "Todo lo que necesitás para arrancar bien desde el primer día. Asesoramiento integral para emprendedores en Mar del Plata.",
  areas: [
    // ── Puesta en marcha ──
    {
      title: "Elección de la forma jurídica",
      items: [
        "Monotributo, responsable inscripto o sociedad: análisis comparativo",
        "Constitución de SAS, SRL o SA según tu proyecto",
        "Ventajas y costos de cada alternativa",
        "Responsabilidad patrimonial de cada figura",
        "Estructura óptima para socios o inversores",
        "Acuerdos entre socios: derechos, obligaciones y salida",
      ],
    },
    {
      title: "Inscripciones y habilitaciones",
      items: [
        "Inscripción ante ARCA como monotributista o responsable inscripto",
        "Alta en Ingresos Brutos (ARBA) y Convenio Multilateral",
        "Habilitación comercial ante la Municipalidad de General Pueyrredón",
        "Tasa de Seguridad e Higiene y tasas municipales",
        "Habilitaciones especiales: bromatología, bomberos, medio ambiente",
        "Registración de marca ante INPI",
      ],
    },
    {
      title: "Análisis de costos y precios",
      items: [
        "Estructura de costos fijos y variables del negocio",
        "Determinación del punto de equilibrio",
        "Fijación de precios: margen, competencia y valor percibido",
        "Cálculo de inversión inicial y capital de trabajo necesario",
        "Proyección de ventas y flujo de fondos del primer año",
        "Análisis de viabilidad económica del proyecto",
      ],
    },
    // ── Crecimiento y operación ──
    {
      title: "Plan de negocios",
      items: [
        "Armado de plan de negocios profesional",
        "Modelo de negocio: propuesta de valor, segmentos, canales",
        "Plan financiero: inversión, ingresos, egresos y rentabilidad",
        "Análisis de mercado y competencia local",
        "Presentación para inversores, socios o entidades de financiamiento",
        "Evaluación de alternativas: local propio, franquicia, e-commerce",
      ],
    },
    {
      title: "Financiamiento para emprendedores",
      items: [
        "Líneas de crédito para emprendedores y nuevos negocios",
        "Programas de fomento: SEPyME, Provincia de Buenos Aires, Municipio",
        "Capital semilla y aceleradoras",
        "Microcréditos y financiamiento no bancario",
        "Armado de carpeta de crédito y documentación requerida",
        "Subsidios y beneficios fiscales para nuevas actividades",
      ],
    },
    {
      title: "Importación y comercio exterior",
      items: [
        "Análisis de costos de importación (landed cost completo)",
        "Aranceles, IVA, tasas y derechos aduaneros",
        "Requisitos legales e impositivos para importadores",
        "Régimen de courier y pequeños envíos",
        "Coordinación con despachantes de aduana",
        "Normativa cambiaria y acceso al mercado de cambios",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Por dónde empiezo si quiero abrir un negocio?",
      answer:
        "Por el asesoramiento profesional. Antes de invertir en local, stock o marketing, es clave definir qué forma jurídica te conviene, cómo vas a tributar, qué habilitaciones necesitás y cuál es tu costo real de operación. Un buen diagnóstico inicial te ahorra tiempo, dinero y problemas futuros.",
    },
    {
      question: "¿Me conviene arrancar como monotributista o armar una sociedad?",
      answer:
        "Depende del volumen del negocio, si tenés socios, el tipo de actividad y tu exposición patrimonial. El monotributo es más simple y barato para empezar, pero tiene topes de facturación y no limita tu responsabilidad personal. Una SAS o SRL protege tu patrimonio personal y permite incorporar socios. Analizamos tu caso para recomendarte la mejor opción.",
    },
    {
      question: "¿Cuánto cuesta abrir un comercio en Mar del Plata?",
      answer:
        "Los costos de apertura incluyen la inscripción impositiva (ARCA, ARBA), la habilitación municipal, las tasas, y los honorarios profesionales. A eso se suma la inversión propia del negocio (local, equipamiento, stock). Te damos un presupuesto detallado con todos los costos de puesta en marcha para que no haya sorpresas.",
    },
    {
      question: "¿Necesito un plan de negocios?",
      answer:
        "No es obligatorio, pero sí muy recomendable. Un plan de negocios te obliga a pensar en los números antes de invertir: cuánto necesitás, cuánto vas a vender, cuándo recuperás la inversión. Además, es imprescindible si querés buscar financiamiento, socios o inversores.",
    },
    {
      question: "Quiero importar productos para vender, ¿por dónde empiezo?",
      answer:
        "Por entender los costos reales. El precio de compra en origen es solo una parte: hay que sumar arancel, IVA, tasas, flete internacional, seguro, gastos portuarios, transporte interno e impuestos locales. Muchos proyectos de importación fracasan por no hacer bien este análisis. Te ayudamos a calcular el landed cost real y evaluar si el negocio es viable.",
    },
    {
      question: "¿Hay financiamiento disponible para emprendedores?",
      answer:
        "Sí. Existen líneas de crédito específicas para nuevos negocios a través de bancos públicos y privados, programas de SEPyME, el gobierno provincial y la Municipalidad de General Pueyrredón. También hay opciones de capital semilla, aceleradoras y microcréditos. Te asesoramos sobre las alternativas vigentes y te ayudamos con la documentación.",
    },
    {
      question: "¿Cuánto tarda tener todo en regla para empezar a operar?",
      answer:
        "Si se gestiona de forma organizada, las inscripciones impositivas se resuelven en pocos días. La habilitación municipal puede demorar entre 2 y 6 semanas según la actividad y las condiciones del local. Si hay que constituir una sociedad, la SAS se hace en días y la SRL en 30-60 días. Planificamos todo en paralelo para que pierdas el menor tiempo posible.",
    },
    {
      question: "¿Me acompañan después de la apertura o solo en la puesta en marcha?",
      answer:
        "Te acompañamos todo lo que necesites. Muchos clientes arrancan con nosotros en la puesta en marcha y después nos quedamos como su estudio contable e impositivo de cabecera. Los primeros meses de un negocio son críticos y es cuando más se necesita el seguimiento profesional cercano.",
    },
  ],
  relatedSlugs: ["comercial-societario", "asesoramiento-impositivo"],
};

export default data;
