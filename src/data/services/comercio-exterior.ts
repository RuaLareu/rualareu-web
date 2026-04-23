import type { ServicePageData } from "@/types/service";

const data: ServicePageData = {
  slug: "comercio-exterior",
  title: "Comercio Exterior e Importaciones",
  subtitle:
    "Asesoramiento integral para importar y exportar. Te acompañamos en cada etapa de tu operación de comercio internacional.",
  areas: [
    // ── Importación ──
    {
      title: "Asesoramiento pre-operativo de importación",
      items: [
        "Análisis de viabilidad y cálculo de landed cost completo",
        "Clasificación arancelaria (nomenclatura NCM)",
        "Derechos de importación, tasa de estadística e IVA adicional",
        "Percepciones de Ganancias, IVA e Ingresos Brutos",
        "Regímenes: definitiva, temporaria, courier, muestras",
        "Licencias, SIRA/SEDI, certificados de origen e intervenciones previas",
      ],
    },
    {
      title: "Despacho, clasificación y permisos",
      items: [
        "Asistencia al despachante de aduana en la operación",
        "Verificación y defensa de clasificación arancelaria",
        "Contestación de cargos y diferencias de clasificación",
        "Intervenciones de INAL, ANMAT, INTI y SENASA según producto",
        "Declaración Jurada de Composición de Producto (DJCP)",
        "Admisión temporaria con y sin transformación",
      ],
    },
    {
      title: "Exportación y beneficios",
      items: [
        "Exportación definitiva, temporaria y de servicios",
        "Reintegros a la exportación y drawback",
        "Régimen Exporta Simple para e-commerce internacional",
        "Retenciones y derechos de exportación (DEX)",
        "Certificados de origen: Mercosur, acuerdos bilaterales, SGP",
        "Exportación por cuenta y orden de terceros",
      ],
    },
    // ── Cambiario, compliance y contable ──
    {
      title: "Régimen cambiario y pagos internacionales",
      items: [
        "Normativa BCRA: acceso al Mercado Libre de Cambios",
        "Plazos de ingreso y liquidación de divisas",
        "Cartas de crédito documentarias y cobranzas",
        "Transferencias SWIFT y garantías bancarias",
        "Prefinanciación y posfinanciación de exportaciones",
        "Financiamiento de importaciones y líneas BICE",
      ],
    },
    {
      title: "Compliance aduanero y defensa",
      items: [
        "Defensa en sumarios aduaneros por infracciones",
        "Declaraciones inexactas y diferencias de mercadería",
        "Auditoría aduanera preventiva de operaciones pasadas",
        "Régimen penal cambiario: defensa ante el BCRA",
        "Dumping y medidas antidumping ante la CNCE",
        "Regularización de irregularidades antes de cargos",
      ],
    },
    {
      title: "Aspecto contable e impositivo",
      items: [
        "Carga tributaria total de importación y exportación",
        "Registración contable: diferencias de cambio y ajustes",
        "Recupero de IVA para exportadores",
        "Precios de transferencia con empresas vinculadas del exterior",
        "Régimen informativo de operaciones internacionales ante ARCA",
        "Optimización fiscal de operaciones de comercio exterior",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuánto cuesta importar un producto a Argentina?",
      answer:
        "El costo final depende de la posición arancelaria del producto (NCM). Incluye el precio FOB, flete y seguro internacional, derechos de importación (0% a 35% según el producto), tasa de estadística (3%), IVA (21% o 10,5%), percepciones de Ganancias e IVA, gastos portuarios y transporte interno. Te hacemos el cálculo completo antes de que decidas importar.",
    },
    {
      question: "¿Necesito ser empresa para importar o puedo hacerlo como persona física?",
      answer:
        "Podés importar como persona física inscripta como importador/exportador ante ARCA y la Aduana. Sin embargo, para operaciones habituales o de volumen, suele convenir operar a través de una sociedad (SAS, SRL) por razones impositivas y de responsabilidad patrimonial. Te asesoramos sobre la mejor estructura.",
    },
    {
      question: "¿Qué es la clasificación arancelaria y por qué es importante?",
      answer:
        "La clasificación arancelaria es el código numérico (NCM) que se asigna a cada producto según la Nomenclatura Común del Mercosur. Determina los derechos de importación, las percepciones, las intervenciones previas necesarias y los beneficios aplicables. Una clasificación incorrecta puede generar cargos, multas y demoras en la aduana.",
    },
    {
      question: "¿Puedo recuperar impuestos cuando exporto?",
      answer:
        "Sí. Los exportadores pueden acceder a reintegros (devolución de un porcentaje del valor exportado) y al régimen de drawback (recupero de derechos de importación pagados sobre insumos incorporados al producto exportado). También pueden solicitar el recupero del IVA vinculado a la operación de exportación.",
    },
    {
      question: "¿Qué pasa si la aduana me retiene la mercadería?",
      answer:
        "La retención puede deberse a falta de documentación, diferencias de clasificación, valores declarados sospechosos o intervenciones pendientes de organismos como ANMAT o SENASA. Es fundamental actuar rápido: presentar la documentación faltante, contestar los cargos y, si corresponde, recurrir la resolución. Te asistimos en todo el proceso.",
    },
    {
      question: "¿Cuánto tardo en importar desde China, Brasil o Europa?",
      answer:
        "Los tiempos varían según el origen, el medio de transporte y los trámites aduaneros. Desde China por vía marítima: 35-50 días de tránsito más 5-15 días de despacho. Desde Brasil: 7-15 días. Desde Europa: 25-40 días. A eso se suman los plazos de tramitación de licencias y permisos si corresponden. Te ayudamos a planificar los tiempos reales.",
    },
    {
      question: "¿Qué es el régimen de Economía del Conocimiento y cómo me beneficia?",
      answer:
        "El Régimen de Economía del Conocimiento (Ley 27.506) otorga beneficios fiscales a empresas de software, servicios informáticos, biotecnología, audiovisual y otras actividades intensivas en conocimiento. Incluye reducción de contribuciones patronales, bono de crédito fiscal y estabilidad fiscal. Es especialmente relevante para empresas que exportan servicios desde Mar del Plata.",
    },
    {
      question: "La aduana me inició un sumario, ¿qué hago?",
      answer:
        "Un sumario aduanero es un procedimiento administrativo que puede derivar en multas significativas. Es fundamental contestar la vista o el traslado dentro del plazo legal, presentar la prueba adecuada y ejercer tu defensa. No lo dejes pasar: la falta de contestación se interpreta como reconocimiento de los hechos. Te representamos en todo el procedimiento.",
    },
  ],
  relatedSlugs: ["nuevos-negocios", "asesoramiento-impositivo"],
};

export default data;
