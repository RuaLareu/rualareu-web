"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/constants";

const fade = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + i * 0.15, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

export default function Hero() {
  return (
    <section
      className="relative flex items-center overflow-hidden bg-primary"
      style={{ height: "100vh", minHeight: "640px" }}
      aria-label="Inicio"
    >
      {/* ── Background image ── */}
      <Image
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85&auto=format&fit=crop"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
        aria-hidden="true"
      />

      {/* ── Overlay ── */}
      <div className="absolute inset-0 bg-primary/70" />

      {/* ── Content: left-aligned, editorial ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl">

          <motion.div
            custom={0}
            variants={fade}
            initial="hidden"
            animate="visible"
            className="w-10 h-px bg-accent mb-8"
          />

          <motion.p
            custom={1}
            variants={fade}
            initial="hidden"
            animate="visible"
            className="font-sackers-light text-accent text-[10px] sm:text-[11px] tracking-[0.35em] mb-6"
          >
            Estudio Jurídico Contable
          </motion.p>

          <motion.h1
            custom={2}
            variants={fade}
            initial="hidden"
            animate="visible"
            className="text-white text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] font-light leading-[1.2] mb-6"
          >
            Respuestas claras
            <br />
            para decisiones
            <br />
            <span className="text-accent">seguras.</span>
          </motion.h1>

          <motion.p
            custom={3}
            variants={fade}
            initial="hidden"
            animate="visible"
            className="text-white/55 text-[15px] leading-relaxed mb-10 max-w-sm"
          >
            Asesoramiento jurídico y contable integral en Mar&nbsp;del&nbsp;Plata.
            Estamos con vos en cada paso.
          </motion.p>

          <motion.div
            custom={4}
            variants={fade}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-accent text-white text-sm font-medium px-7 py-3.5 tracking-wide hover:bg-[#b8935f] transition-colors"
            >
              Agenda tu consulta gratuita
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center border border-white/25 text-white/75 text-sm font-medium px-7 py-3.5 tracking-wide hover:bg-white/10 hover:border-white/40 hover:text-white transition-all"
            >
              Nuestros servicios
            </a>
          </motion.div>

        </div>
      </div>

      {/* ── Bottom fade ── */}
      <div
        className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to top, #F8F6F3 0%, transparent 100%)" }}
      />
    </section>
  );
}
