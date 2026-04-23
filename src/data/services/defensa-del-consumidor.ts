import type { ServicePageData } from "@/types/service";

const data: ServicePageData = {
  slug: "defensa-del-consumidor",
  title: "Defensa del Consumidor",
  subtitle:
    "Defendemos tus derechos frente a empresas, bancos, prepagas y prestadores de servicios. Te ayudamos a reclamar lo que te corresponde.",
  areas: [
    {
      title: "Productos defectuosos y garantías",
      items: [
        "Garantía legal de 6 meses para productos nuevos",
        "Vicios ocultos y defectos de fabricación",
        "Sustitución del producto o devolución del precio",
        "Automotores 0km con defectos de fábrica",
        "Incumplimiento de planes de ahorro",
        "Recall y campañas de seguridad no cumplidas",
      ],
    },
    {
      title: "Bancos y servicios financieros",
      items: [
        "Comisiones indebidas y cargos ocultos",
        "Seguros no solicitados cobrados en tarjetas o cuentas",
        "Tarjetas de crédito con cargos no reconocidos",
        "Refinanciaciones abusivas y tasas usurarias",
        "Débitos automáticos no autorizados",
        "Inclusión indebida en Veraz o Central de Deudores del BCRA",
      ],
    },
    {
      title: "Telecomunicaciones y servicios públicos",
      items: [
        "Reclamos contra empresas de telefonía e internet",
        "TV por cable o satelital: planes no respetados",
        "Facturación excesiva de electricidad, gas y agua",
        "Cortes de servicio injustificados",
        "Cambio unilateral de condiciones contractuales",
        "Reclamos ante ENACOM y entes reguladores",
      ],
    },
    {
      title: "Medicina prepaga y obras sociales",
      items: [
        "Aumentos abusivos de cuotas",
        "Negación de cobertura de prestaciones",
        "Incumplimiento del Plan Médico Obligatorio (PMO)",
        "Amparos de salud por tratamientos urgentes",
        "Reintegro de gastos médicos no cubiertos",
        "Baja unilateral o exclusión por edad o enfermedad",
      ],
    },
    {
      title: "Comercio electrónico y compras online",
      items: [
        "Derecho de arrepentimiento (10 días desde la recepción)",
        "Publicidad engañosa e incumplimiento de oferta",
        "Productos que no coinciden con la descripción",
        "Demoras injustificadas en la entrega",
        "Plataformas de marketplace: responsabilidad del intermediario",
        "Reembolsos y devoluciones no procesados",
      ],
    },
    {
      title: "Transporte, turismo y otros servicios",
      items: [
        "Cancelación o reprogramación de vuelos",
        "Pérdida o daño de equipaje",
        "Incumplimiento de paquetes turísticos",
        "Reembolsos por servicios no prestados",
        "Estafas y fraudes al consumidor",
        "Publicidad comparativa y competencia desleal",
      ],
    },
  ],
  faqs: [
    {
      question: "Compré un producto defectuoso y no me lo quieren cambiar, ¿qué hago?",
      answer:
        "Tenés derecho a elegir entre la reparación gratuita, el cambio por otro igual o la devolución del dinero. La elección es tuya, no del vendedor. Si no te responden, podés hacer un reclamo gratuito ante la OMIC de tu municipio. Si no se resuelve, se puede ir a la vía judicial donde además podés reclamar daños y perjuicios.",
    },
    {
      question: "El banco me cobra comisiones o seguros que no contraté, ¿puedo reclamar?",
      answer:
        "Sí. Los cargos no autorizados son una práctica abusiva. Podés intimar al banco por carta documento o reclamo formal, solicitar el reintegro de todo lo cobrado indebidamente y, si no responden, reclamar ante el BCRA, el COPREC o la justicia. Es frecuente obtener la devolución con intereses y una indemnización adicional.",
    },
    {
      question: "¿Qué es el COPREC y cómo funciona?",
      answer:
        "El COPREC es el Servicio de Conciliación Previa en las Relaciones de Consumo, un organismo nacional donde podés hacer reclamos gratuitos y online contra empresas. Se cita al proveedor a una audiencia de conciliación. Si hay acuerdo, se homologa y tiene fuerza de sentencia. Si no hay acuerdo, queda habilitada la vía judicial.",
    },
    {
      question: "¿Puedo reclamar por una compra online que salió mal?",
      answer:
        "Sí. Las compras por internet tienen una protección especial: tenés 10 días desde que recibís el producto para arrepentirte y devolverlo sin dar explicaciones ni pagar costo alguno. Si el producto es defectuoso o no coincide con la publicación, tenés los mismos derechos que en una compra presencial más la protección adicional del comercio electrónico.",
    },
    {
      question: "Mi prepaga me aumentó la cuota de forma abusiva, ¿qué puedo hacer?",
      answer:
        "Los aumentos de prepagas deben estar autorizados por la autoridad sanitaria. Si considerás que el aumento es abusivo o excede lo autorizado, podés reclamar ante la Superintendencia de Servicios de Salud, hacer un reclamo en COPREC o iniciar una acción judicial. También podés solicitar la suspensión cautelar del aumento mientras se resuelve el reclamo.",
    },
    {
      question: "¿Cómo saco mi nombre del Veraz si la deuda no es mía?",
      answer:
        "Si fuiste incluido indebidamente en una base de datos de deudores (Veraz, Nosis, BCRA), podés intimar a la empresa que informó la deuda y al banco de datos para que rectifiquen o supriman la información. Si no responden en el plazo legal, podés iniciar una acción de habeas data. También podés reclamar daños y perjuicios por el perjuicio causado.",
    },
    {
      question: "Me cancelaron un vuelo y no me devuelven la plata, ¿qué hago?",
      answer:
        "Si la aerolínea cancela el vuelo, tenés derecho al reembolso completo del pasaje o a la reprogramación sin cargo. Si te generó gastos adicionales (hotel, transporte, comida), también podés reclamarlos. El reclamo se puede hacer ante la ANAC, el COPREC o directamente en la justicia.",
    },
    {
      question: "¿Es cierto que como consumidor no pago costas si pierdo el juicio?",
      answer:
        "En muchos casos sí. La legislación protege al consumidor eximiéndolo del pago de la tasa de justicia al iniciar el reclamo. Respecto de las costas por perder el juicio, depende del caso y la jurisdicción, pero los jueces suelen ser protectores del consumidor en esta materia. Te asesoramos sobre los riesgos concretos antes de iniciar cualquier acción.",
    },
  ],
  relatedSlugs: ["comercial-societario", "civil-familia-sucesiones"],
};

export default data;
