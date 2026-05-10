# Prompts para agregar fotos del estudio a la web

Las 3 imágenes ya están en `public/images/`:
- `estudio-recepcion.jpg` (1200x900, 61KB) — Recepción con el nombre RUA | LAREU
- `estudio-reuniones.jpg` (1448x1086, 142KB) — Sala de reuniones
- `estudio-espera.jpg` (1200x900, 85KB) — Sala de espera

---

## PROMPT 1: Foto de la recepción en AboutSection

Modificar `src/components/sections/AboutSection.tsx` para agregar la foto de la recepción.

### Cambios requeridos

1. Agregar `import Image from "next/image";` al inicio del archivo.

2. En la columna izquierda (la que tiene `lg:col-span-4`), DESPUÉS del párrafo que dice "Mar del Plata, Buenos Aires, Argentina.", agregar la imagen de la recepción:

```tsx
<div className="mt-8 overflow-hidden">
  <Image
    src="/images/estudio-recepcion.jpg"
    alt="Recepción del estudio RUA | LAREU"
    width={1200}
    height={900}
    className="w-full h-auto object-cover"
  />
</div>
```

3. En MOBILE (< lg) la imagen se va a mostrar entre el título y el texto del body, lo cual está bien. En DESKTOP (>= lg) queda debajo de "Mar del Plata" en la columna izquierda.

### Lo que NO debe cambiar
- El texto de la columna derecha no cambia.
- La cita con borde izquierdo no cambia.
- La estructura grid 4/8 no cambia.

---

## PROMPT 2: Foto de la sala de reuniones en CtaBanner

Modificar `src/components/sections/CtaBanner.tsx` para usar la foto de la sala de reuniones como fondo en vez del color sólido.

### Cambios requeridos

1. Agregar `import Image from "next/image";` al inicio del archivo.

2. Reemplazar la `<section>` actual:

```tsx
<section className="relative py-24 lg:py-32 overflow-hidden">
  {/* Foto de fondo */}
  <Image
    src="/images/estudio-reuniones.jpg"
    alt=""
    fill
    className="object-cover object-center"
    quality={80}
    aria-hidden="true"
  />
  {/* Overlay oscuro para legibilidad */}
  <div className="absolute inset-0 bg-primary/80" aria-hidden="true" />

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
```

### Notas
- La `<section>` necesita `relative` y `overflow-hidden` para contener la imagen `fill`.
- El `ScrollAnimation` necesita `relative z-10` para quedar por encima del overlay.
- El overlay `bg-primary/80` mantiene la legibilidad del texto blanco sobre la foto.
- En mobile se ve igual de bien porque `object-cover` adapta la foto.
- Si el overlay queda muy oscuro, bajar a `bg-primary/70`. Si se ve poco la foto, bajar a `bg-primary/60`.

---

## PROMPT 3: Foto de la sala de espera en ContactSection

Modificar `src/components/sections/ContactSection.tsx` para agregar la foto de la sala de espera encima de la info de contacto.

### Cambios requeridos

1. Agregar `import Image from "next/image";` al inicio del archivo (si no está ya).

2. DENTRO de la columna derecha (el `<ScrollAnimation delay={120}>`), agregar la foto ANTES del div con `space-y-8` que contiene la info de contacto:

```tsx
<ScrollAnimation delay={120}>
  <div className="space-y-8">
    {/* Foto sala de espera */}
    <div className="overflow-hidden">
      <Image
        src="/images/estudio-espera.jpg"
        alt="Sala de espera del estudio RUA | LAREU"
        width={1200}
        height={900}
        className="w-full h-48 sm:h-56 lg:h-64 object-cover"
      />
    </div>

    {/* Contact data (ya existente, no tocar) */}
    <div className="space-y-5">
      ...
    </div>
```

3. La foto se muestra con altura fija responsiva: `h-48` (192px) en mobile, `h-56` (224px) en sm, `h-64` (256px) en lg. Esto evita que ocupe demasiado espacio vertical.

### Lo que NO debe cambiar
- El formulario de contacto de la columna izquierda no cambia.
- Los datos de contacto, el botón de WhatsApp y el mapa no cambian.
- La estructura grid 1/2 no cambia.

---

## Después de aplicar los 3 prompts

```bash
git add public/images/estudio-recepcion.jpg public/images/estudio-reuniones.jpg public/images/estudio-espera.jpg src/components/sections/AboutSection.tsx src/components/sections/CtaBanner.tsx src/components/sections/ContactSection.tsx
git commit -m "feat: agregar fotos del estudio a secciones About, CTA y Contacto"
git push origin main
```
