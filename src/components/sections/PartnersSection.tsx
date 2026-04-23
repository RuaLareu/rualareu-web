import ScrollAnimation from "@/components/ui/ScrollAnimation";

const partners = [
  {
    name: "Joaquín Rua",
    title: "Abogado",
    area: "Área Jurídica",
    initials: "JR",
    bio: "Socio fundador. Responsable del Área Jurídica del estudio.\n\nEjerce en Derecho Laboral, accidentes de trabajo y enfermedades profesionales, Derecho Civil y Comercial, y Defensa del Consumidor. Asesora y litiga en representación de trabajadores, empleadores, empresas y particulares ante la justicia provincial y federal.\n\nMat. CAMP T. XVII, F. 441 | Mat. Federal T. 704, F. 501",
  },
  {
    name: "Francisco Lareu",
    title: "Contador Público",
    area: "Área Contable e Impositiva",
    initials: "FL",
    bio: "Socio fundador. Responsable del Área Contable e Impositiva del estudio.\n\nAsesora a monotributistas, responsables inscriptos, sociedades y PyMEs en materia tributaria, contable y financiera. Interviene en planificación fiscal, liquidación de impuestos, constitución de sociedades, comercio exterior y auditoría de estados contables.\n\nMat. CPCE PBA T. 184, F. 222, Leg. 48029/1",
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
                    className="w-20 h-20 flex-shrink-0 rounded-full bg-primary flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <span className="font-sackers-heavy text-white text-sm tracking-widest">
                      {partner.initials}
                    </span>
                  </div>
                  <div className="pt-1">
                    <p className="font-sackers-light text-accent text-[9px] tracking-[0.25em] mb-1.5">
                      {partner.area}
                    </p>
                    <h3 className="font-sackers-heavy text-primary text-base lg:text-lg leading-tight whitespace-nowrap">
                      {partner.name}
                    </h3>
                    <p className="text-text-secondary text-xs mt-0.5">{partner.title}</p>
                  </div>
                </div>

                <div className="w-8 h-px bg-accent mb-6" />

                {/* Bio */}
                <div className="text-text-secondary text-sm leading-relaxed space-y-3 text-justify">
                  {partner.bio.split("\n\n").map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </div>

              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* ── Profesionales asociados ── */}
        <ScrollAnimation className="text-center mt-10">
          <p className="text-text-secondary text-sm max-w-xl mx-auto leading-relaxed">
            Contamos con una red de profesionales asociados en áreas complementarias:
            peritos médicos e informáticos, ingenieros en seguridad e higiene,
            despachantes de aduana y abogados especializados.
          </p>
        </ScrollAnimation>

      </div>
    </section>
  );
}
