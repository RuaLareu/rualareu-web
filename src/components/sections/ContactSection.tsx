import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { CONTACT, WHATSAPP_URL } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section id="contacto" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollAnimation className="text-center mb-16">
          <p className="font-sackers-light text-accent text-xs tracking-[0.3em] mb-4">
            Hablemos
          </p>
          <h2 className="font-sackers-heavy text-primary text-4xl lg:text-5xl">
            Contacto
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mt-6" />
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <ScrollAnimation>
            <ContactForm />
          </ScrollAnimation>

          {/* Info + Map */}
          <ScrollAnimation delay={120}>
            <div className="space-y-8">
              {/* Contact data */}
              <div className="space-y-5">
                {[
                  { icon: MapPin, text: CONTACT.address },
                  { icon: Phone, text: CONTACT.phone, href: `tel:${CONTACT.phoneRaw}` },
                  { icon: Mail, text: CONTACT.email, href: `mailto:${CONTACT.email}` },
                  { icon: Clock, text: `Horario de atención: ${CONTACT.hours}` },
                ].map(({ icon: Icon, text, href }) => (
                  <div key={text} className="flex items-start gap-4">
                    <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-primary-light text-primary">
                      <Icon size={16} />
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="text-text-secondary text-sm leading-relaxed hover:text-primary transition-colors pt-2"
                      >
                        {text}
                      </a>
                    ) : (
                      <p className="text-text-secondary text-sm leading-relaxed pt-2">{text}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 hover:bg-[#1ebe5b] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="text-sm font-semibold">Escribinos por WhatsApp</span>
              </a>

              {/* Map */}
              <div className="aspect-video bg-primary-light">
                <iframe
                  title="Ubicación RUA | LAREU"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.8!2d-57.5442!3d-38.0055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAlmirante+Brown+3071%2C+Mar+del+Plata!5e0!3m2!1ses!2sar!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
