import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { CONTACT, NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";
import { SERVICES } from "@/lib/services";

export default function Footer() {
  const year = new Date().getFullYear();
  const juridical = SERVICES.filter((s) => s.area === "juridico");
  const accounting = SERVICES.filter((s) => s.area === "contable");

  return (
    <footer className="bg-primary text-white">
      {/* Accent top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12 lg:pt-20 lg:pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* ── Brand column ── */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Image
              src="/images/rua-lareu-horizontal-sin-fondo.png"
              alt="RUA | LAREU"
              width={180}
              height={50}
              className="h-9 w-auto brightness-0 invert mb-5"
            />
            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-xs">
              Estudio jurídico contable en Mar del Plata.
              <br />
              Respuestas claras para decisiones seguras.
            </p>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/90 text-xs tracking-wide hover:text-white transition-colors group"
            >
              <span className="w-4 h-4 flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <span className="font-sackers-light text-[10px] tracking-[0.2em]">
                Agenda tu consulta
              </span>
              <span className="group-hover:translate-x-0.5 transition-transform text-xs">→</span>
            </a>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Juridical services ── */}
          <div className="lg:col-span-2">
            <h3 className="font-sackers-medium text-[10px] tracking-[0.22em] text-white/90 mb-5">
              Jurídicos
            </h3>
            <ul className="space-y-2.5">
              {juridical.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="text-white/50 text-xs leading-relaxed hover:text-white/85 transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Accounting services ── */}
          <div className="lg:col-span-2">
            <h3 className="font-sackers-medium text-[10px] tracking-[0.22em] text-white/90 mb-5">
              Contables
            </h3>
            <ul className="space-y-2.5">
              {accounting.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="text-white/50 text-xs leading-relaxed hover:text-white/85 transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Navigation ── */}
          <div className="lg:col-span-2">
            <h3 className="font-sackers-medium text-[10px] tracking-[0.22em] text-white/90 mb-5">
              Navegación
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 text-xs hover:text-white/85 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="font-sackers-medium text-[10px] tracking-[0.22em] text-white/90 mb-5">
              Contacto
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5">
                <MapPin size={13} className="mt-0.5 flex-shrink-0 text-white/50" />
                <span className="text-white/50 text-xs leading-relaxed">{CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={13} className="flex-shrink-0 text-white/50" />
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="text-white/50 text-xs hover:text-white/85 transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={13} className="flex-shrink-0 text-white/50" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-white/50 text-xs hover:text-white/85 transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock size={13} className="flex-shrink-0 text-white/50" />
                <span className="text-white/50 text-xs">{CONTACT.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-14 pt-7 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">
            © {year} RUA | LAREU. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs text-center sm:text-right">
            Estudio Jurídico Contable · Mar del Plata, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
