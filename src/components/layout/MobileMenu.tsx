"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { NAV_LINKS, WHATSAPP_URL, CONTACT } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 animate-[fadeIn_0.2s_ease]"
        onClick={onClose}
      />

      {/* Side panel */}
      <div className="absolute right-0 top-0 bottom-0 w-[min(320px,90vw)] bg-primary flex flex-col shadow-2xl animate-[slideInRight_0.3s_ease]">
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
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center justify-between py-4 font-sackers-medium text-white/80 text-base hover:text-white hover:translate-x-1 transition-all duration-200 border-b border-white/6 last:border-0"
                >
                  {link.label}
                  <span className="text-white/40 text-xs font-sans normal-case tracking-normal">→</span>
                </Link>
              </li>
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
            className="flex items-center justify-center gap-2 bg-white text-primary py-4 text-sm font-semibold tracking-wide hover:bg-white/90 transition-colors"
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
      </div>
    </div>
  );
}
