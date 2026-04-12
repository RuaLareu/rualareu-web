import type { ServicePageData } from "@/types/service";

const data: ServicePageData = {
  slug: "defensa-del-consumidor",
  title: "Defensa del Consumidor",
  subtitle:
    "Representamos tus derechos frente a empresas, comercios y prestadores de servicios.",
  areas: [
    {
      title: "Reclamos de consumidores",
      items: [
        "Productos defectuosos o con vicios ocultos",
        "Servicios no prestados o mal ejecutados",
        "Publicidad engañosa y cláusulas abusivas",
        "Incumplimiento de garantías legales",
      ],
    },
    {
      title: "Defensa ante organismos competentes",
      items: [
        "Representación ante la OMIC (Oficina Municipal de Información al Consumidor)",
        "Reclamos ante la Dirección de Comercio Provincial",
        "Procedimientos administrativos de defensa del consumidor",
      ],
    },
    {
      title: "Acciones judiciales",
      items: [
        "Demandas en sede judicial",
        "Acciones colectivas y de clase",
        "Daño directo y daño punitivo",
        "Defensa de empresas ante reclamos de consumidores",
      ],
    },
  ],
  faqs: [
    {
      question: "¿Qué puedo hacer si compré un producto y no funciona?",
      answer:
        "Tenés derecho a la reparación, reposición o devolución del dinero. Si el proveedor no responde, podés presentar un reclamo ante la OMIC o iniciar una acción judicial. Podemos acompañarte en todo el proceso.",
    },
    {
      question: "Una empresa no me da el servicio que contrató, ¿qué hago?",
      answer:
        "Podés intimar formalmente por carta documento y luego recurrir a la OMIC o a la Justicia. En muchos casos corresponde también una indemnización por daños y perjuicios.",
    },
    {
      question: "¿Cuánto cuesta hacer un reclamo?",
      answer:
        "Los reclamos ante la OMIC son gratuitos. En sede judicial, evaluamos caso a caso. En muchos supuestos las costas las paga el proveedor condenado. Consultanos sin compromiso.",
    },
  ],
  relatedSlugs: ["civil-familia-sucesiones", "laboral-seguridad-social"],
};

export default data;
