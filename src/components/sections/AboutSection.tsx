import Image from "next/image";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function AboutSection() {
  return (
    <section id="estudio" className="relative section-padding overflow-hidden">
      {/* Foto de fondo */}
      <Image
        src="/images/estudio-recepcion.jpg"
        alt=""
        fill
        className="object-cover object-center"
        quality={80}
        aria-hidden="true"
      />
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-primary/85" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24">

          {/* ── Left: heading ── */}
          <ScrollAnimation className="lg:col-span-4 lg:pt-1">
            <p className="font-sackers-light text-white/50 text-[10px] sm:text-xs tracking-[0.32em] mb-5">
              Quiénes somos
            </p>
            <h2 className="font-sackers-heavy text-white text-3xl sm:text-4xl lg:text-4xl xl:text-5xl mb-7">
              Estudio
            </h2>
            <div className="w-10 h-px bg-white/30 mb-8" />
            <p className="text-white/50 text-sm leading-relaxed">
              Mar del Plata, Buenos Aires,<br className="hidden lg:block" /> Argentina.
            </p>
          </ScrollAnimation>

          {/* ── Right: body text ── */}
          <ScrollAnimation delay={120} className="lg:col-span-8">
            <div className="space-y-6 text-white/70 text-[15px] lg:text-base leading-[1.85]">
              <p>
                RUA | LAREU es un estudio jurídico contable comprometido con la excelencia,
                la ética y la transparencia.
              </p>
              <p>
                Contamos con un equipo interdisciplinario de profesionales del derecho y de las
                ciencias económicas, lo que nos permite brindar un asesoramiento integral y
                estratégico a particulares, empresas y organizaciones.
              </p>
              <p>
                Nuestro objetivo es generar confianza a través de un servicio de alta calidad,
                con respuestas sólidas, claras y alineadas con las exigencias del presente.
              </p>
            </div>

            <div className="mt-10 pl-6 border-l-2 border-white/30">
              <p className="text-white/90 text-[15px] lg:text-base leading-[1.85] italic">
                Nos concebimos como aliados en cada decisión relevante, aportando respaldo legal
                y contable, una mirada preventiva y una visión integral para que nuestros clientes
                avancen con seguridad en sus proyectos personales y profesionales.
              </p>
            </div>
          </ScrollAnimation>

        </div>
      </div>
    </section>
  );
}
