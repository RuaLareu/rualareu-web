import ScrollAnimation from "@/components/ui/ScrollAnimation";

const partners = [
  {
    name: "Joaquín Rua",
    title: "Abogado",
    area: "Área Jurídica",
    initials: "JR",
    bio: "Abogado matriculado en el Colegio de Abogados de Mar del Plata (T° XVII, F° 441) y en la Matrícula Federal del Poder Judicial de la Nación (T° 704, F° 501). Socio fundador de RUA | LAREU, lidera el Área Jurídica con foco en Derecho Laboral y Comercial. Representa a empleadores, trabajadores y empresas en conflictos laborales. Asesora en materia de contratos, cuestiones societarias, defensa del consumidor, sucesiones y amparos de salud.",
  },
  {
    name: "Francisco Lareu",
    title: "Contador Público",
    area: "Área Contable e Impositiva",
    initials: "FL",
    bio: "Contador Público matriculado en el Consejo Profesional de Ciencias Económicas de la Provincia de Buenos Aires (T° 184, F° 222, Leg. 48029/1). Socio fundador de RUA | LAREU, lidera el Área Contable e Impositiva del estudio. Asesora a monotributistas, responsables inscriptos, sociedades y emprendedores en planificación tributaria, auditoría, estados contables y consultoría financiera orientada al crecimiento del negocio.",
  },
];

export default function PartnersSection() {
  return (
    <section id="socios" className="section-padding bg-primary-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Header ── */}
        <ScrollAnimation className="text-center mb-14">
          <p className="font-sackers-light text-accent text-[10px] sm:text-xs tracking-[0.32em] mb-4">
            El equipo
          </p>
          <h2 className="font-sackers-heavy text-primary text-3xl sm:text-4xl lg:text-5xl">
            Socios
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mt-6" />
        </ScrollAnimation>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {partners.map((partner, i) => (
            <ScrollAnimation key={partner.name} delay={i * 110}>
              <div className="bg-white p-8 lg:p-10 flex flex-col h-full">

                {/* Avatar + name */}
                <div className="flex items-start gap-5 mb-7">
                  <div
                    className="w-14 h-14 flex-shrink-0 rounded-full bg-primary flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <span className="font-sackers-heavy text-white text-xs tracking-widest">
                      {partner.initials}
                    </span>
                  </div>
                  <div className="pt-1">
                    <p className="font-sackers-light text-accent text-[9px] tracking-[0.25em] mb-1.5">
                      {partner.area}
                    </p>
                    <h3 className="font-sackers-heavy text-primary text-lg leading-tight">
                      {partner.name}
                    </h3>
                    <p className="text-text-secondary text-xs mt-0.5">{partner.title}</p>
                  </div>
                </div>

                <div className="w-8 h-px bg-accent mb-6" />

                <p className="text-text-secondary text-sm leading-relaxed">
                  {partner.bio}
                </p>

              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* ── Network note ── */}
        <ScrollAnimation className="text-center mt-10">
          <p className="text-text-secondary text-sm max-w-md mx-auto leading-relaxed">
            Contamos con una red de profesionales especializados que colaboran en casos específicos,
            ampliando nuestra capacidad de respuesta en cada área.
          </p>
        </ScrollAnimation>

      </div>
    </section>
  );
}
