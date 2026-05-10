# Prompt: Foto de recepción como fondo del CTA Banner

Modificar `src/components/sections/CtaBanner.tsx` para usar la foto de la recepción como fondo en vez del color sólido verde.

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
        alt=""
        fill
        className="object-cover object-center"
        quality={80}
        aria-hidden="true"
      />
      {/* Overlay verde forest para legibilidad */}
      <div className="absolute inset-0 bg-[#314A43]/[0.78]" aria-hidden="true" />

      <ScrollAnimation className="relative z-10 max-w-2xl mx-auto px-6 lg:px-8 text-center">
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
```

## Qué cambió respecto al original

1. Se agregó `import Image from "next/image";`
2. La `<section>` pasó de `className="py-24 lg:py-32 bg-primary"` a `className="relative py-24 lg:py-32 overflow-hidden"` (se quitó `bg-primary`, se agregó `relative` y `overflow-hidden` para contener la imagen `fill`)
3. Se agregó el `<Image>` con `fill` y `object-cover` antes del `<ScrollAnimation>`
4. Se agregó un overlay `<div>` con `bg-[#314A43]/[0.78]` (verde forest al 78% de opacidad)
5. El `<ScrollAnimation>` recibió `relative z-10` para quedar por encima del overlay

## Ajuste de opacidad

Si el overlay queda muy oscuro (no se ve la foto), bajar a `bg-[#314A43]/[0.70]`.
Si el texto no se lee bien, subir a `bg-[#314A43]/[0.85]`.

## Lo que NO cambia

- El texto, el botón y los estilos del contenido son idénticos al original.
- En mobile se ve igual de bien porque `object-cover` adapta la foto.
- La foto `estudio-recepcion.jpg` ya está en `public/images/` (1200x900, 61KB).

## Commit

```bash
git add src/components/sections/CtaBanner.tsx
git commit -m "feat: foto de recepción como fondo del CTA banner con overlay"
git push origin main
```
