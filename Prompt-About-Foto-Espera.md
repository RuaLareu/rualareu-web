# Prompt: Foto de la sala de espera en AboutSection (columnas simétricas)

Modificar `src/components/sections/AboutSection.tsx` para agregar la foto de la sala de espera en la columna izquierda y equilibrar el grid a dos columnas simétricas.

---

## Reemplazar el archivo completo por esto:

```tsx
import Image from "next/image";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

export default function AboutSection() {
  return (
    <section id="estudio" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24">

          {/* ── Left: heading + foto ── */}
          <ScrollAnimation className="lg:pt-1">
            <p className="font-sackers-light text-accent text-[10px] sm:text-xs tracking-[0.32em] mb-5">
              Quiénes somos
            </p>
            <h2 className="font-sackers-heavy text-primary text-3xl sm:text-4xl lg:text-4xl xl:text-5xl mb-7">
              Estudio
            </h2>
            <div className="w-10 h-px bg-accent mb-8" />
            <p className="text-text-secondary text-sm leading-relaxed mb-8">
              Mar del Plata, Buenos Aires,<br className="hidden lg:block" /> Argentina.
            </p>
            <div className="overflow-hidden">
              <Image
                src="/images/estudio-espera.jpg"
                alt="Sala de espera del estudio RUA | LAREU"
                width={1200}
                height={900}
                className="w-full h-auto object-cover"
              />
            </div>
          </ScrollAnimation>

          {/* ── Right: body text ── */}
          <ScrollAnimation delay={120}>
            <div className="space-y-6 text-text-secondary text-[15px] lg:text-base leading-[1.85]">
              <p>
                RUA | LAREU es un estudio jurídico contable comprometido con la excelencia,
                la ética y la transparencia.
              </p>
              <p>
                Contamos con un equipo interdisciplinario de profesionales del derecho y de las
                ciencias económicas, lo que nos permite brindar un asesoramiento integral y
                estratégico a particulares, empresas y organizaciones.
              </p>
              <p>
                Nuestro objetivo es generar confianza a través de un servicio de alta calidad,
                con respuestas sólidas, claras y alineadas con las exigencias del presente.
              </p>
            </div>

            <div className="mt-10 pl-6 border-l-2 border-accent">
              <p className="text-text text-[15px] lg:text-base leading-[1.85] italic">
                Nos concebimos como aliados en cada decisión relevante, aportando respaldo legal
                y contable, una mirada preventiva y una visión integral para que nuestros clientes
                avancen con seguridad en sus proyectos personales y profesionales.
              </p>
            </div>
          </ScrollAnimation>

        </div>
      </div>
    </section>
  );
}
```

## Qué cambió respecto al original

1. Se agregó `import Image from "next/image";`
2. El grid pasó de `grid-cols-1 lg:grid-cols-12` a `grid-cols-1 lg:grid-cols-2` (dos columnas simétricas 50/50)
3. La columna izquierda pasó de `lg:col-span-4` a sin col-span (ocupa 1fr automáticamente)
4. Se agregó `mb-8` al párrafo de "Mar del Plata" para separarlo de la foto
5. Se agregó la imagen de la sala de espera debajo de la ubicación
6. La columna derecha pasó de `lg:col-span-8` a sin col-span

## Resultado esperado

- **Desktop:** Columna izquierda (título + ubicación + foto) y columna derecha (texto + cita) con peso visual equilibrado. Ambas ocupan 50% del ancho.
- **Mobile:** Todo apilado: título → ubicación → foto → texto → cita.

## Lo que NO cambia

- Todo el texto (los 3 párrafos y la cita con borde izquierdo) es idéntico.
- Los estilos de tipografía, colores y espaciado no cambian.
- La foto `estudio-espera.jpg` ya está en `public/images/` (1200x900, 85KB).

## Commit

```bash
git add src/components/sections/AboutSection.tsx
git commit -m "feat: foto sala de espera en AboutSection con grid simétrico"
git push origin main
```
