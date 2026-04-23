import type { ServicePageData } from "@/types/service";

const data: ServicePageData = {
  slug: "laboral-seguridad-social",
  title: "Derecho Laboral y Seguridad Social",
  subtitle:
    "Defendemos tus derechos laborales con experiencia y compromiso. Asesoramiento integral para trabajadores y empleadores en Mar del Plata.",
  areas: [
    // ── Para trabajadores ──
    {
      title: "Despidos e indemnizaciones",
      items: [
        "Indemnización por antigüedad, preaviso e integración del mes de despido",
        "Despido durante embarazo, licencia por maternidad y matrimonio",
        "Despido discriminatorio y nulidad del despido",
        "Cálculo y verificación de liquidación final",
        "Diferencias salariales y horas extra impagas",
        "Trabajo no registrado: intimaciones, reclamos de daños y despido indirecto",
      ],
    },
    {
      title: "Accidentes de trabajo y ART",
      items: [
        "Reclamos a ART por prestaciones dinerarias y en especie",
        "Rechazo de siniestros y alta médica prematura",
        "Incapacidades permanentes parciales y totales, gran invalidez",
        "Accidentes in itinere (trayecto trabajo-hogar)",
        "Enfermedades profesionales listadas y no listadas",
        "Demandas por diferencias indemnizatorias ante la ART",
      ],
    },
    {
      title: "Acoso, discriminación y otras situaciones",
      items: [
        "Procedimiento de denuncia por mobbing",
        "Indemnización por daño moral y psicológico",
        "Reclamos por cambio de condiciones de trabajo",
        "Licencias por estrés laboral y burnout",
        "Homologación y recursos ante Comisiones Médicas",
        "Recursos judiciales y ejecución de sentencias",
      ],
    },
    // ── Para empleadores y PyMEs ──
    {
      title: "Contratos y relaciones laborales",
      items: [
        "Redacción y revisión de contratos de trabajo",
        "Modalidades contractuales: plazo fijo, eventual, temporada, pasantías",
        "Adecuación a convenios colectivos de trabajo",
        "Redacción de reglamentos internos y códigos de conducta",
        "Asesoramiento en teletrabajo y trabajo remoto",
        "Registración de empleados y gestión de altas y bajas",
      ],
    },
    {
      title: "Sanciones, desvinculaciones y conflictos",
      items: [
        "Sanciones disciplinarias: apercibimientos y suspensiones",
        "Procedimiento de despido con causa justificada",
        "Procedimiento preventivo de crisis y retiros voluntarios",
        "Defensa ante intimaciones y reclamos de trabajadores",
        "Negociación colectiva, paritarias y conflictos gremiales",
        "Relaciones con delegados sindicales y entidades gremiales",
      ],
    },
    {
      title: "Inspecciones, tercerización y cumplimiento",
      items: [
        "Defensa en inspecciones del Ministerio de Trabajo",
        "Procedimientos sancionatorios de ARCA y organismos provinciales",
        "Responsabilidad solidaria en tercerización y subcontratación",
        "Contratos con empresas de servicios eventuales",
        "Auditoría de legajos y prevención de contingencias",
        "Due diligence laboral en compraventas de empresas",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Qué hago si me despidieron sin causa?",
      answer:
        "Lo primero es no firmar nada sin asesoramiento profesional. Tenés derecho a una indemnización que incluye antigüedad, preaviso, integración del mes, SAC proporcional y vacaciones no gozadas. Exigí el telegrama de despido y consultá con un abogado laboralista para verificar que la liquidación sea correcta y evaluar si existen rubros adicionales como horas extra, diferencias salariales o daños y perjuicios.",
    },
    {
      question: "¿Cuánto me corresponde de indemnización por despido?",
      answer:
        "La indemnización por antigüedad equivale a un mes de la mejor remuneración mensual, normal y habitual por cada año trabajado o fracción mayor a 3 meses, con un piso mínimo de 2 meses de sueldo. A eso se suman el preaviso, la integración del mes de despido, el SAC proporcional y las vacaciones no gozadas. Si hay empleo no registrado, se suman rubros adicionales por daños y perjuicios. Cada caso tiene particularidades que pueden modificar el monto.",
    },
    {
      question: "Tuve un accidente de trabajo y la ART me rechazó el reclamo, ¿qué hago?",
      answer:
        "Si la ART rechaza tu siniestro o te da un alta prematura, podés recurrir ante la Comisión Médica jurisdiccional. Si el dictamen no es favorable, se recurre ante la Comisión Médica Central y luego ante la justicia. Si el empleador no tiene ART, podés iniciar la acción directamente contra él. Es fundamental actuar rápido porque hay plazos legales que deben respetarse.",
    },
    {
      question: "Trabajo en negro, ¿puedo reclamar?",
      answer:
        "Sí. El trabajo no registrado no te quita ningún derecho laboral. Podés intimar a tu empleador mediante telegrama laboral gratuito a que registre correctamente la relación. Si no lo hace en el plazo legal, podés considerarte despedido y reclamar las indemnizaciones por despido más los daños y perjuicios por falta de registración.",
    },
    {
      question: "Me dieron el alta médica pero sigo con dolor, ¿qué puedo hacer?",
      answer:
        "Si considerás que el alta es prematura, podés solicitar una revisión ante la Comisión Médica. No estás obligado a aceptar un alta con la que no estés de acuerdo. Un abogado puede presentar un recurso y solicitar estudios médicos complementarios. Mientras tanto, documentá tus síntomas con certificados de tu médico particular.",
    },
    {
      question: "Mi empleador no me registra correctamente, ¿qué opciones tengo?",
      answer:
        "Si te registraron con fecha de ingreso posterior a la real, con un salario menor al que percibís, o en una categoría incorrecta, podés intimar a la correcta registración. Si el empleador no cumple, podés considerarte en situación de despido indirecto y reclamar indemnizaciones con los daños y perjuicios correspondientes. Todo se inicia con un telegrama laboral gratuito.",
    },
    {
      question: "¿Cuánto tiempo tengo para reclamar por un accidente de trabajo?",
      answer:
        "El plazo de prescripción para reclamos por accidentes de trabajo es de 2 años desde que se determinó la incapacidad o desde la última prestación de la ART. Es recomendable actuar lo antes posible para preservar las pruebas médicas y no perder los plazos.",
    },
    {
      question: "¿Puedo demandar a mi empleador además de la ART?",
      answer:
        "Si el empleador no cuenta con ART, podés iniciar la acción por accidente de trabajo o enfermedad profesional directamente contra él. También es posible reclamar cuando la ART no cubre la totalidad del daño. En ambos casos, te acompañamos en todo el proceso para obtener la indemnización que te corresponde.",
    },
    {
      question: "¿Qué es una enfermedad profesional y cómo se reclama?",
      answer:
        "Es una enfermedad causada o agravada por las condiciones de trabajo. Hay un listado oficial de enfermedades profesionales reconocidas, pero también pueden reclamarse enfermedades no listadas si se demuestra la relación causal con el trabajo. Ejemplos comunes: hernias de disco, hipoacusia, tendinitis, síndrome del túnel carpiano, burnout. El reclamo se inicia ante la ART y, si es rechazado, ante la Comisión Médica.",
    },
    {
      question: "Me acosan en el trabajo, ¿qué puedo hacer legalmente?",
      answer:
        "El acoso laboral (mobbing) es una forma de violencia que la legislación protege. Podés iniciar un procedimiento de denuncia interno, presentar una denuncia ante el Ministerio de Trabajo provincial, o accionar ante el INADI si hay discriminación. Si la situación es insostenible, podés considerarte en situación de despido indirecto y reclamar indemnización más daño moral. Documentá cada episodio con fechas, testigos y capturas de pantalla.",
    },
  ],
  relatedSlugs: ["civil-familia-sucesiones", "defensa-del-consumidor"],
};

export default data;
