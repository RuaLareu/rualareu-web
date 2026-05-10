# Prompt: CTA Banner con foto de recepción y gradiente lateral (estilo Hero)

Modificar `src/components/sections/CtaBanner.tsx` para usar la foto de la recepción como fondo con un gradiente lateral: la foto se ve a la izquierda, el gradiente verde oscurece hacia la derecha donde va el texto.

---

## Reemplazar el archivo completo por esto:

```tsx
import Image from "next/image";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { WHATSAPP_URL } from "@/lib/constants";

export default function CtaBanner() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Foto de fondo */}
      <Image
        src="/images/estudio-recepcion.jpg"
        alt="Recepción del estudio RUA | LAREU"
        fill
        className="object-cover object-center"
        quality={80}
      />

      {/* Overlay base sutil */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#314A43]/25 pointer-events-none"
      />

      {/* Gradiente lateral desktop: foto visible a la izquierda → verde a la derecha */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, transparent 15%, rgba(49,74,67,0.5) 40%, rgba(49,74,67,0.85) 60%, rgba(49,74,67,0.95) 80%)",
        }}
      />

      {/* Gradiente mobile: foto visible arriba → verde abajo donde va el texto */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none lg:hidden"
        style={{
          background:
            "linear-gradient(to bottom, transparent 15%, rgba(49,74,67,0.5) 40%, rgba(49,74,67,0.9) 65%, rgba(49,74,67,0.95) 100%)",
        }}
      />

      {/* Contenido posicionado a la derecha */}
      <div className="relative z-10 flex items-center justify-end">
        <ScrollAnimation className="w-full lg:w-1/2 lg:ml-auto px-6 lg:px-12 xl:px-16 text-center lg:text-left">
          <div className="w-10 h-px bg-white/30 mx-auto lg:mx-0 mb-8" />
          <h2 className="font-sackers-heavy text-white text-2xl sm:text-3xl lg:text-4xl leading-snug mb-5">
            Estamos para <span className="text-white/70">ayudarte</span>
          </h2>
          <p className="text-white/55 text-sm sm:text-[15px] leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
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
      </div>
    </section>
  );
}
```

## Cómo funciona

- **Desktop:** La foto se ve clara a la izquierda (recepción, signage, madera). Un gradiente lateral va oscureciendo hacia la derecha donde se posiciona el texto. El texto ocupa la mitad derecha (`lg:w-1/2 lg:ml-auto`) y queda alineado a la izquierda (`lg:text-left`).
- **Mobile:** La foto se ve arriba y un gradiente vertical oscurece hacia abajo. El texto queda centrado en la zona oscura inferior.

## Ajustes de opacidad

- Si la foto se ve demasiado oscura a la izquierda, bajar el overlay base de `/25` a `/15` o quitarlo.
- Si el texto no se lee bien en desktop, adelantar los stops del gradiente lateral (e.g. `transparent 10%` en vez de `15%`).
- Si en mobile el texto no se lee, subir el stop final del gradiente mobile de `0.95` a `0.98`.

## Lo que NO cambia

- El texto, el botón y el link de WhatsApp son idénticos al original.
- La foto ya está en `public/images/estudio-recepcion.jpg`.

## Commit

```bash
git add src/components/sections/CtaBanner.tsx
git commit -m "feat: CTA banner con foto recepción y gradiente lateral estilo Hero"
git push origin main
```
