"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone, MapPin } from "lucide-react";
import { NAV_LINKS, CONTACT, WHATSAPP_URL } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 55);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const transparent = !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/96 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        {/* ── Top info bar: desktop only, collapses on scroll ── */}
        <div
          className={`hidden lg:block overflow-hidden transition-[max-height,opacity] duration-300 ${
            scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
          }`}
        >
          <div className="bg-primary/40 border-b border-white/8">
            <div className="max-w-7xl mx-auto px-8 h-9 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-white/55 text-[11px]">
                <MapPin size={10} className="flex-shrink-0" />
                <span>{CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-6 text-white/55 text-[11px]">
                <span>Lunes a Viernes · {CONTACT.hours}</span>
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="flex items-center gap-1.5 hover:text-white/90 transition-colors"
                >
                  <Phone size={10} />
                  {CONTACT.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Main navigation ── */}
        <nav
          className={`max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-16" : "h-[72px]"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/rua-lareu-horizontal-sin-fondo.png"
              alt="RUA | LAREU - Estudio Jurídico Contable"
              width={192}
              height={52}
              className={`w-auto transition-all duration-300 ${
                scrolled ? "h-10 brightness-0" : "h-11 brightness-0 invert drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
              }`}
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/" || link.href.startsWith("/#")
                  ? pathname === "/"
                  : pathname.startsWith(link.href.replace(/\/#.*/, "/"));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[13px] tracking-wide transition-colors group pb-0.5 ${
                    transparent
                      ? "text-white/90 hover:text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]"
                      : "text-text/65 hover:text-text"
                  }`}
                >
                  {link.label}
                  {/* Underline indicator */}
                  <span
                    className={`absolute -bottom-px left-0 h-px bg-accent transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden lg:inline-flex items-center text-[13px] font-medium px-5 py-2.5 tracking-wide transition-all duration-200 ${
                transparent
                  ? "bg-accent text-white hover:bg-[#b8935f]"
                  : "bg-primary text-white hover:bg-primary/90"
              }`}
            >
              Agenda tu consulta
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className={`lg:hidden p-2 -mr-1 rounded transition-colors ${
                transparent ? "text-white/80 hover:text-white" : "text-text/70 hover:text-text"
              }`}
              aria-label="Abrir menú"
            >
              <Menu size={22} />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
