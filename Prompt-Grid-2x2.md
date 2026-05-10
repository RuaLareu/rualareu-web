# Prompt: Layout 2×2 para servicios con 4 cards

Modificar `src/app/servicios/[slug]/page.tsx` para que los servicios con 4 áreas (Impositivo y Consultoría) muestren 2 cards por fila en vez de 3+1.

---

## Cambios requeridos

### 1. Agregar variable de corte dinámico (línea ~131)

Después de la línea `const hasSplitGrid = ...`, agregar:

```tsx
const splitAt = (isImpuestos || isConsultoria) ? 2 : 3;
```

### 2. Cambiar los slice y el grid en la primera fila (líneas ~422-440)

Reemplazar:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
  {data.areas.slice(0, 3).map((area, i) => (
```

Por:

```tsx
<div className={`grid grid-cols-1 md:grid-cols-2 ${splitAt === 3 ? "lg:grid-cols-3" : ""} gap-6 mb-12`}>
  {data.areas.slice(0, splitAt).map((area, i) => (
```

### 3. Cambiar los slice y el grid en la segunda fila (líneas ~451-453)

Reemplazar:

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {data.areas.slice(3, 6).map((area, i) => (
```

Por:

```tsx
<div className={`grid grid-cols-1 md:grid-cols-2 ${splitAt === 3 ? "lg:grid-cols-3" : ""} gap-6`}>
  {data.areas.slice(splitAt).map((area, i) => (
```

---

## Resultado esperado

- **Servicios con 6 áreas** (laboral, civil, sueldos, etc.): siguen mostrando 3+3 como antes, sin ningún cambio visual.
- **Impositivo** (4 áreas): muestra 2 cards arriba + 2 cards abajo, cada una ocupando la mitad del ancho.
- **Consultoría** (4 áreas): igual, 2+2.

## Lo que NO debe cambiar

- Los labels de cada fila no cambian.
- Los estilos de las cards (padding, border-top, colores) no cambian.
- Las secciones destacadas no cambian.
- El grid regular (no-split) para servicios sin hasSplitGrid no cambia.
- La versión mobile (1 columna) no cambia.

## Commit

```bash
git add src/app/servicios/\[slug\]/page.tsx
git commit -m "fix: layout 2x2 para servicios con 4 áreas (impositivo y consultoría)"
git push origin main
```
