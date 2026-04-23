import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Inicio"
      className="relative min-h-[85vh] lg:min-h-screen overflow-hidden"
    >
      {/* ── Foto full-width como fondo ── */}
      <Image
        src="/images/hero-despacho.png"
        alt="Sala de reuniones de RUA | LAREU, estudio jurídico contable en Mar del Plata"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />

      {/* ── Overlay general sutil ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#314A43]/30 pointer-events-none"
      />

      {/* ── Gradiente lateral: transparente a la izquierda → oscuro a la derecha ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, transparent 35%, rgba(49,74,67,0.55) 55%, rgba(49,74,67,0.85) 75%, rgba(49,74,67,0.95) 100%)",
        }}
      />

      {/* ── Gradiente mobile: de arriba transparente a abajo oscuro ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none lg:hidden"
        style={{
          background:
            "linear-gradient(to bottom, transparent 30%, rgba(49,74,67,0.6) 55%, rgba(49,74,67,0.9) 100%)",
        }}
      />

      {/* ── Gradiente superior para legibilidad del header/logo ── */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 100%)",
        }}
      />

      {/* ── Contenido posicionado a la derecha ── */}
      <div className="relative z-10 min-h-[85vh] lg:min-h-screen flex items-end lg:items-center">
        <div className="w-full lg:w-auto lg:ml-auto lg:mr-[5%] xl:mr-[8%] px-8 sm:px-10 lg:px-16 xl:px-20 pb-24 lg:pb-0 max-w-xl hero-fade-in text-left">
          {/* Eyebrow */}
          <p className="font-sackers-light text-white/50 text-[9px] sm:text-[10px] tracking-[0.20em] mb-6 whitespace-nowrap">
            Estudio jurídico contable en Mar del Plata
          </p>

          {/* Headline */}
          <h1 className="font-sackers-heavy text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-6 -ml-[0.07em]">
            Prevención hoy,
            <br />
            <span className="text-[#FAF5EC]/80">tranquilidad</span>{" "}
            mañana.
          </h1>

          {/* Línea decorativa */}
          <div className="w-10 h-px bg-white/30 mb-6" aria-hidden="true" />

          {/* Body */}
          <p className="text-white/65 text-sm sm:text-base leading-relaxed mb-8 max-w-sm">
            Asesoramiento jurídico y contable con enfoque estratégico.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white/40 text-white text-xs font-sackers-light tracking-[0.20em] px-8 py-3.5 hover:bg-white hover:text-primary transition-all duration-300"
            >
              Agendar consulta
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center border border-white/20 text-white/60 text-xs font-sackers-light tracking-[0.20em] px-8 py-3.5 hover:border-white/40 hover:text-white transition-all duration-300"
            >
              Nuestros servicios
            </a>
          </div>
        </div>
      </div>

      {/* ── Gradiente inferior para transición suave a la sección siguiente ── */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#FAF5EC] to-transparent pointer-events-none z-10"
      />
    </section>
  );
}
