import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { WHATSAPP_URL } from "@/lib/constants";

export default function CtaBanner() {
  return (
    <section className="py-24 lg:py-32 bg-primary">
      <ScrollAnimation className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <div className="w-10 h-px bg-white/30 mx-auto mb-8" />
        <h2 className="font-sackers-heavy text-white text-2xl sm:text-3xl lg:text-4xl leading-snug mb-5">
          Estamos para <span className="text-white/70">ayudarte</span>
        </h2>
        <p className="text-white/55 text-sm sm:text-[15px] leading-relaxed max-w-lg mx-auto mb-10">
          Contanos tu situación y te orientamos sin compromiso.
          Podés escribirnos por WhatsApp o agendar una reunión en nuestro estudio.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-white text-primary text-sm font-semibold px-9 py-3.5 rounded tracking-wide hover:bg-white/90 transition-all duration-300"
        >
          Agenda tu consulta
        </a>
      </ScrollAnimation>
    </section>
  );
}
