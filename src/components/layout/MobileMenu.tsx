"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, WHATSAPP_URL, CONTACT } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const panelVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      duration: 0.38,
      ease: [0.32, 0.72, 0, 1] as [number, number, number, number],
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.28,
      ease: [0.4, 0, 1, 1] as [number, number, number, number],
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.08 + i * 0.055, duration: 0.3 },
  }),
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />

          {/* Side panel */}
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute right-0 top-0 bottom-0 w-[min(320px,90vw)] bg-primary flex flex-col shadow-2xl"
          >
            {/* Panel header */}
            <div className="flex items-center justify-between px-6 h-[72px] border-b border-white/8 flex-shrink-0">
              <Image
                src="/images/rua-lareu-horizontal-sin-fondo.png"
                alt="RUA | LAREU"
                width={140}
                height={40}
                className="h-8 w-auto brightness-0 invert"
              />
              <button
                onClick={onClose}
                className="p-2 -mr-1 text-white/50 hover:text-white transition-colors"
                aria-label="Cerrar menú"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-7 py-8 overflow-y-auto">
              <ul className="space-y-0">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center justify-between py-4 font-sackers-medium text-white/80 text-base hover:text-white hover:translate-x-1 transition-all duration-200 border-b border-white/6 last:border-0"
                    >
                      {link.label}
                      <span className="text-accent/60 text-xs font-sans normal-case tracking-normal">→</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Panel footer */}
            <div className="flex-shrink-0 px-7 pb-10 pt-4 space-y-3 border-t border-white/8">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-center gap-2 bg-accent text-white py-4 text-sm font-medium tracking-wide hover:bg-[#b8935f] transition-colors"
              >
                Agenda tu consulta
              </a>
              <div className="text-center">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="text-white/35 text-xs hover:text-white/60 transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
