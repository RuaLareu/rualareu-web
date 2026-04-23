import type { ServicePageData } from "@/types/service";

const data: ServicePageData = {
  slug: "compliance-prevencion-legal",
  title: "Compliance y Prevención Legal para Empresas",
  subtitle:
    "Protegé tu empresa antes de que aparezcan los problemas. Asesoramiento legal preventivo integral para PyMEs.",
  areas: [
    // ── Prevención legal laboral ──
    {
      title: "Auditoría de legajos y documentación laboral",
      items: [
        "Revisión integral de legajos de personal y contratos de trabajo",
        "Verificación de registraciones ante ARCA y recibos de sueldo",
        "Detección de irregularidades antes de que generen reclamos o juicios",
        "Informe de riesgos laborales con recomendaciones de acción",
        "Adecuación a escalas salariales y condiciones del CCT aplicable",
        "Verificación de jornada, licencias y adicionales convencionales",
      ],
    },
    {
      title: "Protocolos obligatorios y prevención de riesgos",
      items: [
        "Protocolo de violencia laboral (Convenio 190 OIT)",
        "Protocolo de acoso sexual y canal de denuncias interno",
        "Protocolo de igualdad de género en el ámbito laboral",
        "Revisión de cumplimiento de higiene y seguridad",
        "Verificación de contratos con ART y planes de mejoramiento",
        "Capacitación al equipo sobre prevención de riesgos",
      ],
    },
    {
      title: "Revisión y redacción de contratos",
      items: [
        "Contratos comerciales, de servicios y de distribución",
        "Contratos de franquicia, agencia y concesión",
        "Acuerdos con proveedores y clientes",
        "Términos y condiciones de venta (presencial y online)",
        "Contratos de confidencialidad (NDA)",
        "Políticas de devolución y libro de quejas online",
      ],
    },
    // ── Protección de datos y compliance tributario ──
    {
      title: "Protección de datos personales",
      items: [
        "Adecuación a la Ley 25.326 de Protección de Datos Personales",
        "Registro de bases de datos ante la AAIP",
        "Política de privacidad y consentimiento informado",
        "Derechos ARCO: acceso, rectificación, cancelación, oposición",
        "Protocolos de respuesta ante incidentes de seguridad",
        "Contratos con proveedores tecnológicos y responsabilidad por datos",
      ],
    },
    {
      title: "Compliance tributario y prevención de lavado",
      items: [
        "Revisión de cumplimiento ante ARCA, ARBA y Municipalidad",
        "Detección de riesgos de determinaciones de oficio e intereses",
        "Prevención de lavado de activos (UIF) para sujetos obligados",
        "Manual de procedimientos y reporte de operaciones sospechosas",
        "Due diligence legal integral: laboral, tributario y contractual",
        "Revisión de situación jurídica para compra, venta o ingreso de socios",
      ],
    },
    {
      title: "Asesoría legal permanente (abono mensual)",
      items: [
        "Consultas ilimitadas por teléfono, email y WhatsApp",
        "Revisión de contratos y consultas laborales y comerciales",
        "Atención prioritaria ante inspecciones e intimaciones",
        "Respuesta urgente ante conflictos y contingencias",
        "Capacitaciones in-company para RRHH, administración y gerencia",
        "Actualización permanente sobre novedades normativas",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Qué es el compliance legal y por qué lo necesita mi empresa?",
      answer:
        "Compliance es el sistema de prevención y cumplimiento normativo de una empresa. Incluye políticas, procedimientos y controles diseñados para evitar incumplimientos legales que pueden derivar en multas, juicios, clausuras o daño reputacional. No es burocracia: es protección concreta para tu negocio.",
    },
    {
      question: "¿Cuánto cuesta un servicio de prevención legal para PyMEs?",
      answer:
        "Depende del alcance. Una auditoría legal puntual tiene un costo fijo que presupuestamos de antemano. El abono de asesoramiento mensual se adapta al tamaño de la empresa y la frecuencia de consultas. En todos los casos damos un presupuesto cerrado antes de empezar.",
    },
    {
      question: "Mi empresa es chica, ¿igual necesito compliance?",
      answer:
        "Sí. De hecho, las empresas pequeñas son las más vulnerables porque un solo juicio laboral, una multa fiscal o un reclamo de consumidor puede tener un impacto desproporcionado. La prevención adaptada a tu tamaño cuesta mucho menos que enfrentar el problema después.",
    },
    {
      question: "Ya tengo un problema legal, ¿me sirve este servicio?",
      answer:
        "Si ya tenés un conflicto, lo atendemos desde nuestras áreas de litigio (laboral, comercial, consumidor). Pero en paralelo podemos hacer una auditoría preventiva para detectar y corregir otros riesgos antes de que se conviertan en problemas adicionales.",
    },
    {
      question: "¿Con qué frecuencia se hace una auditoría legal?",
      answer:
        "Recomendamos una auditoría integral anual y revisiones parciales semestrales en las áreas de mayor exposición (laboral y tributario). Si tenés el abono mensual, el seguimiento es continuo y los riesgos se detectan en tiempo real.",
    },
    {
      question: "¿Estoy obligado a tener un protocolo de violencia laboral?",
      answer:
        "Argentina ratificó el Convenio 190 de la OIT sobre violencia y acoso en el trabajo. Aunque la implementación de protocolos específicos depende de la normativa de cada jurisdicción, tener un protocolo es una obligación creciente y una práctica recomendada que protege tanto a los trabajadores como a la empresa ante reclamos.",
    },
    {
      question: "¿Qué es la Ley de Protección de Datos Personales y me aplica?",
      answer:
        "La Ley 25.326 regula el tratamiento de datos personales en Argentina. Si tu empresa recopila datos de clientes, empleados, proveedores o usuarios (nombres, emails, teléfonos, datos de pago), te aplica. Debés registrar tus bases de datos, tener política de privacidad y respetar los derechos de los titulares.",
    },
    {
      question: "¿Qué incluye el abono de asesoramiento mensual?",
      answer:
        "Consultas ilimitadas por teléfono, email y WhatsApp sobre cuestiones laborales, comerciales y tributarias de complejidad baja-media. Revisión de contratos, atención prioritaria ante urgencias (inspecciones, intimaciones, conflictos) y actualización sobre novedades normativas que afecten a tu empresa.",
    },
  ],
  relatedSlugs: ["comercial-societario", "consultoria-empresarial"],
};

export default data;
