import type { ServicePageData } from "@/types/service";

const data: ServicePageData = {
  slug: "derecho-previsional",
  title: "Derecho Previsional",
  subtitle:
    "Jubilaciones, pensiones, reajustes de haberes y planificación previsional. Te acompañamos en cada trámite para que obtengas lo que te corresponde.",
  areas: [
    {
      title: "Jubilaciones y pensiones",
      items: [
        "Trámite de jubilación ordinaria ante ANSES",
        "Jubilación por edad avanzada",
        "Pensión por fallecimiento del titular",
        "Pensiones no contributivas",
        "Reconocimiento de servicios y cómputo de años",
        "Moratoria previsional y planes de regularización",
      ],
    },
    {
      title: "Reajustes de haberes",
      items: [
        "Juicios de reajuste por haberes mal liquidados",
        "Reclamos por movilidad jubilatoria",
        "Diferencias acumuladas e intereses",
        "Ejecución de sentencias contra ANSES",
        "Reparación histórica: verificación y reclamos",
      ],
    },
    {
      title: "Retiro por invalidez",
      items: [
        "Trámite ante ANSES y Comisiones Médicas",
        "Recursos por denegación o porcentaje insuficiente",
        "Revisión de dictámenes médicos",
        "Acciones judiciales por rechazo",
      ],
    },
    {
      title: "Planificación previsional",
      items: [
        "Asesoramiento para planificar tu jubilación",
        "Análisis de aportes y servicios reconocidos",
        "Cálculo proyectado del haber jubilatorio",
        "Estrategias para optimizar el haber futuro",
        "Compatibilidad entre jubilación y actividad laboral",
      ],
    },
    {
      title: "Liquidaciones y cálculos previsionales",
      items: [
        "Verificación de liquidación de haberes",
        "Cálculo de haber inicial correcto",
        "Detección de errores de ANSES en la liquidación",
        "Reclamos administrativos por diferencias",
      ],
    },
    {
      title: "Otras prestaciones de seguridad social",
      items: [
        "Asignaciones familiares y prestaciones de ANSES",
        "Obra social y cobertura médica obligatoria",
        "Subsidios por desempleo",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Cuándo puedo jubilarme?",
      answer:
        "Los requisitos generales son 65 años de edad para varones y 60 para mujeres, con 30 años de aportes. Si no llegás a los años de aportes, existen moratorias y planes de regularización que permiten completarlos. Cada caso tiene particularidades que conviene analizar con un profesional.",
    },
    {
      question: "Mi jubilación es muy baja, ¿puedo reclamar un reajuste?",
      answer:
        "Sí. Si tu haber jubilatorio fue mal calculado por ANSES o no se aplicó correctamente la movilidad, podés iniciar un juicio de reajuste para que se recalcule y se paguen las diferencias acumuladas con intereses. Muchos jubilados obtienen incrementos significativos por esta vía.",
    },
    {
      question: "¿Qué es la reparación histórica y todavía se puede reclamar?",
      answer:
        "La reparación histórica fue un programa para corregir haberes jubilatorios mal liquidados. Si no ingresaste al programa o si el cálculo fue incorrecto, existen vías administrativas y judiciales para reclamar las diferencias que te corresponden.",
    },
    {
      question: "Me rechazaron el retiro por invalidez, ¿qué hago?",
      answer:
        "Si la Comisión Médica dictaminó un porcentaje de incapacidad menor al que corresponde o rechazó tu solicitud, podés presentar un recurso ante la Comisión Médica Central. Si el resultado sigue siendo desfavorable, se puede recurrir ante la justicia. Es importante contar con informes médicos de parte que respalden tu reclamo.",
    },
    {
      question: "¿Conviene planificar la jubilación con anticipación?",
      answer:
        "Absolutamente. Analizar tu situación previsional con tiempo permite detectar errores en los registros de ANSES, regularizar aportes faltantes y proyectar el haber que vas a recibir. Una buena planificación puede marcar una diferencia importante en el monto de tu jubilación.",
    },
  ],
  relatedSlugs: ["laboral-seguridad-social", "civil-familia-sucesiones"],
};

export default data;
