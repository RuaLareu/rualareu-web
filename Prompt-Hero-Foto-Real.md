# Prompt: Reemplazar foto AI del Hero por foto real de la sala de reuniones

Modificar `src/components/sections/Hero.tsx` para usar la foto real de la sala de reuniones en vez de la imagen generada con IA.

---

## Cambios requeridos

### 1. Cambiar la imagen (línea 13)

```
ANTES: src="/images/hero-despacho.png"
DESPUÉS: src="/images/estudio-reuniones.jpg"
```

### 2. Actualizar alt text (línea 14)

```
ANTES: alt="Sala de reuniones de RUA | LAREU, estudio jurídico contable en Mar del Plata"
DESPUÉS: alt="Sala de reuniones del estudio jurídico contable RUA | LAREU en Mar del Plata"
```

### 3. Subir el overlay general (línea 24)

La foto real tiene más luz natural que la AI, así que el overlay base sube de 30% a 40%:

```
ANTES: className="absolute inset-0 bg-[#314A43]/30 pointer-events-none"
DESPUÉS: className="absolute inset-0 bg-[#314A43]/40 pointer-events-none"
```

### 4. Reforzar el gradiente lateral desktop (líneas 31-34)

El texto está a la derecha y la foto real tiene un ventanal con mucha luz. El gradiente necesita arrancar un poco antes y ser más opaco para mantener la legibilidad:

```
ANTES:
"linear-gradient(to right, transparent 35%, rgba(49,74,67,0.55) 55%, rgba(49,74,67,0.85) 75%, rgba(49,74,67,0.95) 100%)"

DESPUÉS:
"linear-gradient(to right, transparent 25%, rgba(49,74,67,0.55) 45%, rgba(49,74,67,0.85) 65%, rgba(49,74,67,0.95) 100%)"
```

### 5. Reforzar el gradiente mobile (líneas 41-43)

Mismo concepto, un poco más de cobertura para compensar la mayor luminosidad:

```
ANTES:
"linear-gradient(to bottom, transparent 30%, rgba(49,74,67,0.6) 55%, rgba(49,74,67,0.9) 100%)"

DESPUÉS:
"linear-gradient(to bottom, transparent 20%, rgba(49,74,67,0.6) 50%, rgba(49,74,67,0.92) 100%)"
```

### 6. Gradiente superior (líneas 51-53)

Queda igual. `rgba(0,0,0,0.35)` ya es suficiente para el header.

### 7. Gradiente inferior (línea 104)

Queda igual. La transición a `#FAF5EC` no depende de la foto.

---

## Lo que NO cambia

- Todo el contenido de texto (headline, body, eyebrow, CTAs).
- Los estilos de los botones.
- La estructura del layout (contenido a la derecha).
- El `priority` y `quality={90}` del Image.
- El `hero-fade-in` animation.
- El gradiente inferior (transición al cream).

## Notas de ajuste

- Si después de aplicar el texto se lee mal en desktop, subir el overlay de `/40` a `/45`.
- Si en mobile el texto no se lee bien abajo, subir el último stop del gradiente mobile de `0.92` a `0.95`.
- Si la foto se ve demasiado oscura y se pierde, bajar el overlay a `/35` y retrasar los gradientes 5% cada stop.

## Commit

```bash
git add src/components/sections/Hero.tsx
git commit -m "feat: reemplazar foto AI del Hero por foto real de sala de reuniones"
git push origin main
```
