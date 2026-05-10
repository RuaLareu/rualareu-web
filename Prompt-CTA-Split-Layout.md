# Prompt: CTA Banner con split layout (foto + texto)

Modificar `src/components/sections/CtaBanner.tsx` para usar un layout dividido: foto de la recepción a la izquierda y el CTA sobre fondo verde a la derecha. En mobile se apilan (foto arriba, texto abajo).

---

## Reemplazar el archivo completo por esto:

```tsx
import Image from "next/image";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { WHATSAPP_URL } from "@/lib/constants";

export default function CtaBanner() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* Foto */}
      <div className="relative h-64 sm:h-80 lg:h-auto">
        <Image
          src="/images/estudio-recepcion.jpg"
          alt="Recepción del estudio RUA | LAREU"
          fill
          className="object-cover object-center"
          quality={80}
        />
      </div>

      {/* CTA */}
      <div className="bg-primary py-20 lg:py-24 xl:py-32">
        <ScrollAnimation className="max-w-lg mx-auto px-8 lg:px-12 text-center">
          <div className="w-10 h-px bg-white/30 mx-auto mb-8" />
          <h2 className="font-sackers-heavy text-white text-2xl sm:text-3xl lg:text-4xl leading-snug mb-5">
            Estamos para <span className="text-white/70">ayudarte</span>
          </h2>
          <p className="text-white/55 text-sm sm:text-[15px] leading-relaxed max-w-md mx-auto mb-10">
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

## Qué cambió respecto al original

1. Se agregó `import Image from "next/image";`
2. La `<section>` ya no tiene padding propio ni `bg-primary`. Ahora es un `grid grid-cols-1 lg:grid-cols-2`
3. La columna izquierda es un contenedor `relative` con la foto en `fill` + `object-cover`. En mobile tiene altura fija (`h-64 sm:h-80`), en desktop se estira al alto del contenido del CTA (`lg:h-auto`)
4. La columna derecha tiene el `bg-primary` y contiene todo el texto y botón original
5. El `max-w` del ScrollAnimation pasó de `max-w-2xl` a `max-w-lg` porque ahora ocupa la mitad del ancho

## Resultado esperado

- **Desktop (lg+):** Foto a la izquierda ocupando 50% del ancho, CTA verde a la derecha ocupando 50%. La foto se ve sin overlay, al 100%.
- **Mobile (<lg):** Foto arriba con altura fija (256px / 320px), CTA verde debajo.
- El texto, botón y estilos del CTA son idénticos al original.

## Lo que NO cambia

- El contenido de texto y el botón de WhatsApp son los mismos.
- La foto `estudio-recepcion.jpg` ya está en `public/images/`.

## Commit

```bash
git add src/components/sections/CtaBanner.tsx
git commit -m "feat: CTA banner con split layout (foto recepción + texto)"
git push origin main
```
