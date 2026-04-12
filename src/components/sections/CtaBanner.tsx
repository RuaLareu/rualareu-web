import Image from "next/image";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { WHATSAPP_URL } from "@/lib/constants";

export default function CtaBanner() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80&auto=format&fit=crop"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-primary/85" />

      <ScrollAnimation className="relative z-10 max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <div className="w-10 h-px bg-accent mx-auto mb-8" />
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-light leading-snug mb-5">
          Tu primera consulta es <span className="text-accent">gratuita</span>
        </h2>
        <p className="text-white/50 text-sm sm:text-[15px] leading-relaxed max-w-lg mx-auto mb-10">
          Contanos tu situación y te orientamos sin compromiso.
          Podés escribirnos por WhatsApp o agendar una reunión en nuestro estudio.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-accent text-white text-sm font-medium px-9 py-3.5 tracking-wide hover:bg-[#b8935f] transition-colors"
        >
          Agenda tu consulta
        </a>
      </ScrollAnimation>
    </section>
  );
}
