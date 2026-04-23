import type { ServicePageData } from "@/types/service";

const data: ServicePageData = {
  slug: "gestion-de-sueldos",
  title: "Gestión de Sueldos",
  subtitle:
    "Liquidación de sueldos, cargas sociales y administración de personal. Outsourcing integral para que te enfoques en tu negocio.",
  areas: [
    // ── Liquidación y cargas ──
    {
      title: "Liquidación de sueldos y jornales",
      items: [
        "Cálculo mensual según el Convenio Colectivo de Trabajo aplicable",
        "Horas extras, feriados y adicionales convencionales",
        "Liquidación de vacaciones y SAC (aguinaldo)",
        "Liquidaciones finales por renuncia, despido o jubilación",
        "Recibos de sueldo digitales y reportes de nómina",
        "Actualización permanente ante cambios normativos y paritarias",
      ],
    },
    {
      title: "Cargas sociales y contribuciones",
      items: [
        "Confección y presentación del F.931 mensual ante ARCA",
        "Aportes y contribuciones: jubilación, obra social, PAMI, asignaciones",
        "Contribuciones sindicales y cuotas de solidaridad",
        "ART: altas, bajas, declaración de nómina y denuncia de siniestros",
        "Seguro de vida obligatorio y coberturas adicionales",
        "Conciliación de pagos y generación de VEP",
      ],
    },
    {
      title: "Altas, bajas y libro de sueldos digital",
      items: [
        "Registro de empleados en ARCA (Mi Simplificación)",
        "Trámite de CUIL y alta temprana",
        "Armado y mantenimiento de legajos digitales",
        "Implementación del Libro de Sueldos Digital",
        "Mantenimiento y carga mensual del libro digital",
        "Adecuación a la normativa vigente y actualizaciones del sistema",
      ],
    },
    // ── Servicios complementarios ──
    {
      title: "Certificaciones y documentación laboral",
      items: [
        "Certificación de servicios y remuneraciones (art. 80)",
        "Constancias para ANSES (PS 6.2) y organismos previsionales",
        "Certificados de CUIL/CUIT para trámites varios",
        "Constancias de situación de revista y antigüedad",
        "Informes de remuneraciones para entidades bancarias",
        "Documentación para trámites migratorios de empleados",
      ],
    },
    {
      title: "Inspecciones y cumplimiento normativo",
      items: [
        "Preparación de documentación ante inspecciones de ARCA",
        "Asistencia en inspecciones del Ministerio de Trabajo de la Provincia",
        "Auditoría preventiva de legajos y cumplimiento laboral",
        "Adecuación a requerimientos de la Superintendencia de Riesgos del Trabajo",
        "Respuesta a intimaciones y descargos",
        "Actualización ante cambios en Convenios Colectivos",
      ],
    },
    {
      title: "Costos laborales y gestión de beneficios",
      items: [
        "Informes de costo total empleador por puesto",
        "Presupuestos de dotación y simulación de incorporaciones",
        "Simulación de impacto de aumentos paritarios",
        "Gestión de vales de almuerzo y beneficios corporativos",
        "Prepaga adicional y seguros de vida complementarios",
        "Administración de viáticos y gastos de representación",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Qué obligaciones tengo al contratar un empleado?",
      answer:
        "Debés registrarlo en ARCA a través de Mi Simplificación antes de que empiece a trabajar (alta temprana), afiliarlo a una ART y a una obra social, contratar el seguro de vida obligatorio y llevarlo en el Libro de Sueldos Digital. Además, mensualmente debés liquidar el sueldo, emitir el recibo y presentar el F.931 con los aportes y contribuciones. Te acompañamos en todo el proceso.",
    },
    {
      question: "¿Cada cuánto debo presentar el F.931?",
      answer:
        "El F.931 (Declaración Jurada de Cargas Sociales) se presenta mensualmente ante ARCA. El vencimiento depende del número de CUIT del empleador y generalmente cae entre el 7 y el 11 del mes siguiente al período liquidado. La falta de presentación o el pago tardío generan intereses y pueden derivar en sanciones.",
    },
    {
      question: "¿Qué es el Libro de Sueldos Digital?",
      answer:
        "Es un sistema implementado por ARCA que reemplaza al libro de sueldos en papel. Los empleadores deben cargar mensualmente la información de las liquidaciones de sueldo en el sistema digital. Es obligatorio para todos los empleadores y su incumplimiento puede generar sanciones. Nos encargamos de la implementación y la carga mensual.",
    },
    {
      question: "¿Cómo se calculan las vacaciones de un empleado?",
      answer:
        "El período de vacaciones depende de la antigüedad: 14 días corridos hasta 5 años, 21 días hasta 10 años, 28 días hasta 20 años y 35 días con más de 20 años. El pago se calcula dividiendo el sueldo por 25 y multiplicando por los días de vacaciones. Deben otorgarse entre el 1 de octubre y el 30 de abril del año siguiente.",
    },
    {
      question: "¿Qué hago si recibo una inspección de ARCA?",
      answer:
        "Lo primero es no entrar en pánico. ARCA notifica las inspecciones y da plazos para presentar la documentación requerida. Es fundamental tener los legajos completos, los recibos de sueldo firmados, el F.931 al día y el Libro de Sueldos Digital actualizado. Si nos encargamos de tu gestión de sueldos, toda esa documentación ya está en orden.",
    },
    {
      question: "¿Puedo tercerizar toda la gestión de sueldos de mi empresa?",
      answer:
        "Sí. Muchas PyMEs optan por tercerizar la liquidación de sueldos, la presentación de cargas sociales y la administración del personal en un estudio externo. Esto reduce costos, asegura el cumplimiento normativo y libera tiempo para que te concentres en tu actividad. Nos ocupamos de todo: desde el alta del empleado hasta la liquidación final.",
    },
  ],
  relatedSlugs: ["auditoria-contabilidad", "consultoria-empresarial"],
};

export default data;
