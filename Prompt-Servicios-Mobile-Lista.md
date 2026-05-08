# Prompt para Claude Code: Servicios mobile como lista compacta

## Contexto

La sección de servicios en `src/components/sections/ServicesGrid.tsx` muestra 12 cards (6 jurídicos + 6 contables) apiladas de a una en mobile. Es demasiado largo y poco amigable. Necesito que EN MOBILE (< lg, o sea < 1024px) los servicios se muestren como una lista compacta en vez de cards, pero EN DESKTOP (>= lg) todo quede exactamente igual.

## Qué hacer

Modificar `ServicesGrid.tsx` para que el componente `ServiceRow` renderice DOS layouts diferentes:

1. **Desktop (>= lg)**: El grid de cards actual, sin cambios. Usar `hidden lg:grid` en el grid de cards.
2. **Mobile (< lg)**: Una lista compacta. Usar `lg:hidden` en la lista.

### Diseño de la lista mobile

Cada servicio es una fila horizontal con:

```
┌──────────────────────────────────────────┐
│  [ícono 32x32]  TÍTULO DEL SERVICIO   › │
│  bg-primary-light  Sackers Medium       │
└──────────────────────────────────────────┘
```

Especificaciones de cada fila:
- Contenedor: `<Link>` a `/servicios/${service.slug}`
- Layout: `flex items-center gap-3 px-4 py-3.5`
- Fondo: `bg-white`
- Borde: `border border-primary/10`
- Separación entre filas: `gap-1.5` o `space-y-1.5`
- Hover: `hover:bg-primary-light hover:border-primary/20 transition-all`

Ícono:
- Contenedor: `w-9 h-9 flex items-center justify-center bg-primary-light flex-shrink-0`
- Ícono de Lucide: `size={16} strokeWidth={1.5}` en `text-primary`
- Usar el mismo `iconMap` que ya existe

Título:
- `font-sackers-medium text-[10px] sm:text-[11px] tracking-[0.15em] text-primary flex-1`
- El título viene de `service.title`

Flecha:
- `<ArrowRight size={14} className="text-primary/30 group-hover:text-primary/60 transition-colors" />`
- Agregar `group` al `<Link>` contenedor

### Estructura del código

```tsx
function ServiceRow({ services }: { services: Service[] }) {
  return (
    <>
      {/* Desktop: grid de cards (sin cambios) */}
      <div className="hidden lg:grid grid-cols-3 gap-4">
        {services.map((service, i) => (
          <ScrollAnimation key={service.slug} delay={i * 70}>
            <ServiceCard service={service} />
          </ScrollAnimation>
        ))}
      </div>

      {/* Mobile: lista compacta */}
      <div className="lg:hidden space-y-1.5">
        {services.map((service) => {
          const Icon = iconMap[service.icon] ?? Briefcase;
          return (
            <Link
              key={service.slug}
              href={`/servicios/${service.slug}`}
              className="group flex items-center gap-3 px-4 py-3.5 bg-white border border-primary/10 hover:bg-primary-light hover:border-primary/20 transition-all"
            >
              <div className="w-9 h-9 flex items-center justify-center bg-primary-light flex-shrink-0">
                <Icon size={16} strokeWidth={1.5} className="text-primary" />
              </div>
              <span className="font-sackers-medium text-[10px] sm:text-[11px] tracking-[0.15em] text-primary flex-1">
                {service.title}
              </span>
              <ArrowRight
                size={14}
                className="text-primary/30 group-hover:text-primary/60 flex-shrink-0 transition-colors"
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}
```

### Lo que NO debe cambiar

- El componente `ServiceCard` sigue existiendo (se usa en desktop).
- El componente `AreaLabel` no cambia.
- El header de la sección ("Lo que hacemos" / "Servicios") no cambia.
- La estructura general de la sección (jurídicos arriba, contables abajo) no cambia.
- En desktop (>= 1024px) debe verse EXACTAMENTE igual que ahora.
- Las animaciones `ScrollAnimation` se mantienen en desktop. En la lista mobile no hacen falta (queda más limpio sin ellas).

### Verificación

1. En mobile (< 1024px): los 12 servicios se ven como una lista compacta, tocable, con ícono y flecha.
2. En desktop (>= 1024px): las cards se ven exactamente igual que antes.
3. Cada fila de la lista lleva a la página del servicio correcto.
4. El ícono de cada servicio es el correcto (usa el iconMap existente).
5. La sección en mobile ocupa mucho menos alto que antes.
