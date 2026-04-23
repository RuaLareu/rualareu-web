import type { ServicePageData } from "@/types/service";

const data: ServicePageData = {
  slug: "civil-familia-sucesiones",
  title: "Derecho de Familia",
  subtitle:
    "Acompañamiento cercano y profesional en los momentos más importantes de tu vida familiar. Soluciones sensibles para situaciones complejas.",
  areas: [
    {
      title: "Divorcios",
      items: [
        "Divorcio de común acuerdo y unilateral",
        "Convenio regulador: bienes, alimentos, vivienda e hijos",
        "División de bienes gananciales",
        "Atribución de la vivienda familiar",
        "Compensación económica entre cónyuges",
        "Liquidación de la sociedad conyugal",
      ],
    },
    {
      title: "Alimentos",
      items: [
        "Cuota alimentaria para hijos menores de edad",
        "Alimentos para hijos mayores hasta los 25 años",
        "Alimentos provisorios de urgencia",
        "Incidente de aumento, reducción o cesación de cuota",
        "Ejecución de cuota alimentaria adeudada",
        "Alimentos entre cónyuges y ex cónyuges",
      ],
    },
    {
      title: "Régimen de comunicación y cuidado personal",
      items: [
        "Plan de parentalidad y acuerdos entre progenitores",
        "Cuidado personal compartido y unilateral",
        "Régimen de comunicación con abuelos y otros familiares",
        "Revinculación familiar",
        "Impedimento de contacto y retención indebida",
        "Autorizaciones judiciales para viajes al exterior de menores",
      ],
    },
    {
      title: "Violencia familiar y de género",
      items: [
        "Medidas cautelares urgentes de protección",
        "Exclusión del hogar y perímetro de restricción",
        "Botón antipánico y dispositivos de seguridad",
        "Acompañamiento en denuncias penales y civiles",
        "Representación en audiencias de protección",
        "Asesoramiento integral a víctimas de violencia",
      ],
    },
    {
      title: "Adopción, tutela y curatela",
      items: [
        "Guarda con fines de adopción",
        "Adopción plena y simple",
        "Inscripción en el Registro de Adoptantes",
        "Designación de tutor para menores",
        "Restricción de capacidad y curatela",
        "Inhabilitación judicial",
      ],
    },
    {
      title: "Uniones convivenciales y otras cuestiones",
      items: [
        "Pactos de convivencia y efectos patrimoniales",
        "Compensación económica al cesar la unión convivencial",
        "Protección de la vivienda familiar",
        "Acciones de filiación y reconocimiento",
        "Autorizaciones judiciales para venta de bienes de incapaces",
        "Mediación familiar prejudicial obligatoria",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuánto tarda un divorcio en Argentina?",
      answer:
        "El divorcio en Argentina no requiere alegar causas y puede ser solicitado por uno o ambos cónyuges. Si hay acuerdo y se presenta un convenio regulador completo, puede resolverse en pocas semanas. Si hay cuestiones pendientes como la división de bienes o los alimentos, el proceso puede extenderse algunos meses hasta que se resuelvan esas cuestiones.",
    },
    {
      question: "¿Cómo se calcula la cuota alimentaria?",
      answer:
        "No hay una fórmula fija. El juez evalúa las necesidades del hijo (vivienda, educación, salud, vestimenta, esparcimiento) y los ingresos y capacidad económica de ambos progenitores. Como referencia general, se suele tomar entre un 25% y un 35% de los ingresos del alimentante por cada hijo, pero cada caso es diferente y se analiza integralmente.",
    },
    {
      question: "¿Qué hago si no me pagan la cuota alimentaria?",
      answer:
        "Podés solicitar la ejecución judicial de la cuota adeudada. El juez puede ordenar el embargo del sueldo, de cuentas bancarias o de otros bienes del alimentante. También se pueden aplicar sanciones como la restricción para salir del país, la inscripción en el Registro de Deudores Alimentarios y, en casos graves, dar intervención penal.",
    },
    {
      question: "¿Qué puedo hacer ante una situación de violencia familiar?",
      answer:
        "Podés solicitar medidas de protección urgentes ante el Juzgado de Familia, que se resuelven en horas. El juez puede ordenar la exclusión del agresor del hogar, fijar un perímetro de restricción, otorgar un botón antipánico y establecer la prohibición de acercamiento. También podés hacer la denuncia penal en la comisaría o fiscalía.",
    },
    {
      question: "¿Me puedo divorciar sin abogado?",
      answer:
        "No. En Argentina es obligatorio contar con patrocinio letrado para tramitar un divorcio. Sin embargo, el proceso puede ser muy ágil si ambas partes están de acuerdo. Se presenta la petición con un convenio regulador ante el juzgado y en pocas semanas se dicta la sentencia.",
    },
    {
      question: "¿Qué es el cuidado personal compartido?",
      answer:
        "Es el régimen por el cual ambos progenitores comparten la responsabilidad y el tiempo de convivencia con los hijos. Puede ser alternado (el hijo vive períodos con cada progenitor) o indistinto (el hijo vive principalmente con uno pero ambos toman las decisiones). Es el régimen que la ley presume como prioritario cuando no hay acuerdo.",
    },
    {
      question: "¿Cómo hago para adoptar en Argentina?",
      answer:
        "El proceso comienza con la inscripción en el Registro de Adoptantes, donde se realiza una evaluación psicológica y social. Cuando un niño es declarado en situación de adoptabilidad, el juez selecciona a los postulantes según el registro. Se otorga un período de guarda y luego se dicta la sentencia de adopción. Los tiempos son variables y dependen de cada caso.",
    },
    {
      question: "Mi ex pareja no me deja ver a mis hijos, ¿qué puedo hacer?",
      answer:
        "El impedimento de contacto es una situación grave que podés denunciar ante el Juzgado de Familia. El juez puede fijar un régimen de comunicación provisorio de forma urgente, ordenar una revinculación asistida por profesionales y, si hay incumplimiento reiterado, aplicar sanciones. En casos extremos, puede dar lugar a un cambio del cuidado personal.",
    },
  ],
  relatedSlugs: ["comercial-societario", "laboral-seguridad-social"],
};

export default data;
