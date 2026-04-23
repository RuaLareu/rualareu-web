import type { ServicePageData } from "@/types/service";

const data: ServicePageData = {
  slug: "comercial-societario",
  title: "Derecho Civil y Comercial",
  subtitle:
    "Soluciones jurídicas para tus relaciones personales, patrimoniales y comerciales.",
  areas: [
    // ── Derecho Civil ──
    {
      title: "Contratos civiles",
      items: [
        "Redacción, revisión y negociación de contratos",
        "Compraventa, locación, comodato y donación",
        "Cesión de derechos y permutas",
        "Contratos de obra y de servicios",
        "Rescisión, resolución e incumplimiento contractual",
        "Mediación y negociación extrajudicial",
      ],
    },
    {
      title: "Responsabilidad civil y daños",
      items: [
        "Accidentes de tránsito: reclamo a aseguradoras y responsables",
        "Mala praxis médica y profesional",
        "Daños por productos defectuosos",
        "Daño moral y pérdida de chance",
        "Daño ambiental y molestias entre vecinos",
        "Reclamos contra consorcios y administraciones",
      ],
    },
    {
      title: "Sucesiones, herencias y derechos reales",
      items: [
        "Declaratoria de herederos y partición de bienes",
        "Testamentos, legados y administración de herencia",
        "Usucapión (prescripción adquisitiva)",
        "Desalojos, medianería y servidumbres",
        "Hipotecas, prendas y boletos de compraventa",
        "Cobro de alquileres adeudados",
      ],
    },
    // ── Derecho Comercial ──
    {
      title: "Contratos comerciales y societario",
      items: [
        "Distribución, franquicia, agencia y concesión",
        "Suministro, joint ventures y colaboración empresaria",
        "Constitución de SRL, SA y SAS",
        "Modificación de estatutos y asambleas",
        "Conflictos societarios, exclusión de socios",
        "Disolución y liquidación de sociedades",
      ],
    },
    {
      title: "Cobro de deudas y ejecuciones",
      items: [
        "Intimaciones extrajudiciales y mediación",
        "Juicio ejecutivo: pagarés, cheques y letras de cambio",
        "Reconocimiento de deuda y preparación de vía ejecutiva",
        "Ejecución de sentencias y embargo de bienes",
        "Cobro de facturas y créditos comerciales",
        "Concursos preventivos y verificación de créditos",
      ],
    },
    {
      title: "Consumidor, marcas y propiedad intelectual",
      items: [
        "Reclamos ante OMIC y COPREC por productos y servicios",
        "Vicios ocultos, garantías y publicidad engañosa",
        "Servicios financieros abusivos y tarjetas de crédito",
        "Registro de marcas ante INPI y oposiciones",
        "Nombres comerciales, patentes y derechos de autor",
        "Licencias de uso y contratos de transferencia de tecnología",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuánto cuesta constituir una SRL o SAS?",
      answer:
        "Los costos varían según la forma societaria y la complejidad del estatuto. La SAS es más económica y rápida porque se constituye de forma digital. La SRL requiere escritura pública e inscripción ante el Registro Público, lo que implica gastos notariales y tasas. En todos los casos te damos un presupuesto cerrado antes de empezar.",
    },
    {
      question: "Me deben plata y no me pagan, ¿cómo puedo cobrar?",
      answer:
        "Depende del tipo de deuda. Si tenés un pagaré, cheque o documento ejecutivo, podés iniciar un juicio ejecutivo que es más rápido. Si no tenés título ejecutivo, primero se intima por carta documento y luego se evalúa la vía judicial ordinaria o la mediación. En muchos casos la sola intervención de un abogado logra que el deudor pague.",
    },
    {
      question: "Quiero registrar mi marca, ¿cuál es el proceso?",
      answer:
        "El registro se realiza ante el Instituto Nacional de la Propiedad Industrial (INPI). Se hace una búsqueda previa de antecedentes para verificar que la marca esté disponible, se presenta la solicitud indicando las clases de productos o servicios, y si no hay oposiciones de terceros, el registro se otorga en un plazo aproximado de 12 a 18 meses. La marca registrada tiene una validez de 10 años renovables.",
    },
    {
      question: "Heredé un inmueble, ¿qué trámites debo hacer?",
      answer:
        "Es necesario iniciar el trámite de sucesión ante la justicia para obtener la declaratoria de herederos. Una vez dictada, se inscribe en el Registro de la Propiedad para que el inmueble quede a tu nombre. Si hay varios herederos, puede ser necesaria una partición. También se resuelven deudas del causante y se liquidan impuestos pendientes.",
    },
    {
      question: "Tuve un accidente de tránsito, ¿puedo reclamar daños?",
      answer:
        "Sí. Podés reclamar los daños materiales (reparación del vehículo), daño físico (lesiones, tratamientos, incapacidad), lucro cesante (lo que dejaste de ganar) y daño moral. El reclamo se dirige contra el responsable del accidente y su aseguradora. Es importante hacer la denuncia policial, guardar toda la documentación médica y no firmar acuerdos sin asesoramiento.",
    },
    {
      question: "Compré un producto defectuoso y no me lo cambian, ¿qué hago?",
      answer:
        "Tenés derecho a exigir la reparación, el cambio o la devolución del dinero. Si el vendedor no responde, podés hacer un reclamo gratuito ante la OMIC de tu municipio o ante el COPREC a nivel nacional. Si no se resuelve, se puede ir a la vía judicial donde además podés reclamar daños y perjuicios.",
    },
    {
      question: "¿Qué diferencia hay entre SRL, SA y SAS?",
      answer:
        "La SAS es la más simple: se constituye online, permite un solo socio y tiene menores requisitos formales. La SRL es la forma más usada para PyMEs: requiere al menos dos socios y escritura pública. La SA es más compleja y costosa, pero permite cotizar en bolsa y no tiene límite de socios. La elección depende del tamaño del negocio, la cantidad de socios y los planes de crecimiento.",
    },
    {
      question: "¿Cuánto tiempo tarda un juicio por cobro de deudas?",
      answer:
        "Un juicio ejecutivo (con pagaré, cheque u otro título) puede resolverse en pocos meses si el deudor no se opone. Si hay excepciones o defensas, puede extenderse a 6-12 meses. Un juicio ordinario por cobro de deuda sin título ejecutivo es más largo y puede demorar entre 1 y 3 años. En muchos casos, la mediación previa logra un acuerdo sin necesidad de llegar a juicio.",
    },
  ],
  relatedSlugs: ["nuevos-negocios", "consultoria-empresarial"],
};

export default data;
