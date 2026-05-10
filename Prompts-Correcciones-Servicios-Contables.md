# Correcciones de servicios contables — Prompts para Claude Code

Correcciones indicadas por Francisco Lareu para las páginas de servicios del área contable.

**Regla general:** Nunca mencionar AFIP, siempre usar ARCA.

---

## PROMPT 1: Correcciones en ASESORAMIENTO IMPOSITIVO (data file)

Modificar `src/data/services/asesoramiento-impositivo.ts`. Reemplazar las 6 áreas actuales por estas 4 áreas:

```ts
areas: [
  {
    title: "Ganancias, IVA y Bienes Personales",
    items: [
      "Liquidación de Ganancias para personas físicas y sociedades",
      "Presentación anual de SIRADIG",
      "Liquidación mensual de IVA",
      "Solicitud de exclusión de retenciones y percepciones de IVA",
      "Bienes Personales: liquidación anual, bienes en el país y exterior",
      "Régimen de información y declaraciones juradas informativas",
    ],
  },
  {
    title: "Ingresos Brutos e Impuestos Municipales",
    items: [
      "Inscripciones y liquidación mensual de Ingresos Brutos local y Convenio Multilateral",
      "Regímenes de retención y percepción ARBA y SIRCREB",
      "Solicitud de exclusión y reducción de alícuotas",
      "Tasa por Inspección de Seguridad e Higiene: habilitación y liquidación",
    ],
  },
  {
    title: "Monotributo",
    items: [
      "Inscripciones generales y análisis de categoría",
      "Proyecciones mensuales",
      "Recategorizaciones semestrales",
    ],
  },
  {
    title: "Planificación fiscal, moratorias e inspecciones",
    items: [
      "Estructura óptima de negocios y elección del régimen impositivo",
      "Reorganización empresarial y societaria con beneficios impositivos. Puente del régimen simplificado al régimen general",
      "Proyecciones de Impuesto a las Ganancias. Diseño de estrategias para reducirlo",
      "Control mensual de IVA. Diseño de estrategias para optimizarlo",
      "Asesoramiento para regularización de deuda impositiva y previsional",
      "Adhesión a planes de facilidades de ARCA y ARBA",
      "Atención de inspecciones y fiscalizaciones de ARCA y ARBA",
    ],
  },
],
```

Las FAQs NO cambian.

---

## PROMPT 2: Correcciones en ASESORAMIENTO IMPOSITIVO (page template — intro y labels)

Modificar `src/app/servicios/[slug]/page.tsx`. Hay 3 cambios:

### 2A. Texto introductorio de impuestos

Buscar el bloque `{isImpuestos && (` en la sección de intro (aprox. líneas 314-333).

Cambiar el segundo párrafo:

```
ANTES: "te acompañamos frente a inspecciones y fiscalizaciones."
DESPUÉS: "te asesoramos para evitar inspecciones y fiscalizaciones."
```

Cambiar el tercer párrafo completo:

```
ANTES:
<p>
  Además de cumplir con las obligaciones del presente, te ayudamos a planificar
  para pagar lo justo: ni más ni menos de lo que corresponde.
</p>

DESPUÉS:
<p>
  Te ayudamos a planificar e implementar estrategias para atenuar la carga
  impositiva, cumpliendo con la normativa vigente.
</p>
```

### 2B. Label de la primera fila del grid

En la línea del label de la primera fila (aprox. línea 417), dentro del ternario largo, cambiar:

```
ANTES: isImpuestos ? "Impuestos nacionales"
DESPUÉS: isImpuestos ? "Impuestos nacionales, provinciales y municipales"
```

### 2C. Label de la segunda fila del grid

En la línea del label de la segunda fila (aprox. línea 446), cambiar:

```
ANTES: isImpuestos ? "Provinciales, municipales y planificación"
DESPUÉS: isImpuestos ? "Planificación, moratorias e inspecciones"
```

### 2D. Sección destacada "Monotributo"

La sección destacada de Monotributo (aprox. líneas 799-841) queda como está. Monotributo sigue siendo un servicio que ofrecen, solo que la card tiene menos ítems.

### Nota sobre layout

Con 4 áreas en vez de 6, la segunda fila del grid mostrará solo 1 card. Esto es aceptable porque esa card ("Planificación fiscal, moratorias e inspecciones") tiene 7 ítems y es visualmente densa. Si se prefiere evitar la fila con 1 sola card, se puede sacar `isImpuestos` de la condición `hasSplitGrid` (línea 131) para mostrar las 4 cards en un grid regular sin labels. En ese caso, también eliminar los labels de impuestos de las líneas 417 y 446.

---

## PROMPT 3: Correcciones en CONTABILIDAD Y AUDITORÍA (data file)

Modificar `src/data/services/auditoria-contabilidad.ts`. Reemplazar las 6 áreas actuales por estas 3 áreas:

```ts
areas: [
  {
    title: "Contabilidad integral",
    items: [
      "Registración contable mensual: libro diario, mayor e inventario",
      "Conciliaciones bancarias y control de saldos",
      "Contabilidad para monotributistas y responsables inscriptos",
      "Confección de estados contables anuales completos para todo tipo de sociedades y entidades",
      "Presentación de estados contables anuales ante todos los organismos",
    ],
  },
  {
    title: "Certificaciones e informes profesionales",
    items: [
      "Informe de auditoría de estados contables",
      "Certificaciones contables",
      "Actualización de carpetas de crédito e informes patrimoniales para bancos",
      "Proyecciones económicas y financieras para entidades crediticias",
      "Libros societarios: rúbrica y confección de actas. Mantenimiento general",
    ],
  },
  {
    title: "Auditoría y control de gestión",
    items: [
      "Auditoría externa de estados contables",
      "Auditoría interna y revisión de procesos",
      "Auditoría de cumplimiento normativo",
      "Detección de irregularidades y control de gestión",
    ],
  },
],
```

### FAQs: eliminar 3 preguntas

Eliminar estas 3 FAQs del array `faqs`:

1. `"¿Puedo tercerizar toda la contabilidad de mi empresa?"` (la que empieza con "Sí. Muchas PyMEs optan por tercerizar...")
2. `"¿Pueden actuar como peritos contables en un juicio?"` (la que empieza con "Sí. Actuamos como peritos contables de parte...")
3. `"¿Qué es una due diligence contable?"` (la que empieza con "Es una revisión exhaustiva...")

Las demás FAQs se mantienen sin cambios.

---

## PROMPT 4: Correcciones en CONTABILIDAD Y AUDITORÍA (page template — labels y layout)

Modificar `src/app/servicios/[slug]/page.tsx`.

### 4A. Sacar contabilidad del split grid

Con solo 3 áreas, el split grid (3+3) no tiene sentido. Sacar `isContabilidad` de la condición `hasSplitGrid` en la línea 131:

```
ANTES: const hasSplitGrid = isLaboral || isCivil || isContabilidad || isImpuestos || ...
DESPUÉS: const hasSplitGrid = isLaboral || isCivil || isImpuestos || ...
```

Esto hará que las 3 cards se muestren en un grid regular de 3 columnas sin labels, que es el layout perfecto para 3 cards.

### 4B. Sección destacada "Outsourcing contable"

La sección destacada de Outsourcing (aprox. líneas 844-890) ya no tiene sentido porque se eliminó la card de Outsourcing. Hay dos opciones:

**Opción A (recomendada):** Cambiar el tema de la sección destacada a "Auditoría" o "Certificaciones contables" — algo que siga siendo relevante con las nuevas cards.

**Opción B:** Eliminar toda la sección `{isContabilidad && (...)}` de secciones destacadas.

Yo recomiendo la Opción A. Si eligen Opción A, reemplazar el contenido así:

```tsx
{isContabilidad && (
  <section className="py-16 lg:py-20 bg-primary-light">
    <div className="max-w-4xl mx-auto px-6 lg:px-8">
      <ScrollAnimation>
        <div className="border-l-4 border-accent pl-8 lg:pl-10">
          <p className="font-sackers-light text-accent text-[10px] tracking-[0.3em] mb-3">
            Área destacada
          </p>
          <h2 className="font-sackers-heavy text-primary text-2xl sm:text-3xl mb-4">
            Auditoría de estados contables
          </h2>
          <p className="text-text-secondary text-[15px] leading-[1.85] mb-8 max-w-2xl">
            Realizamos auditorías externas e internas de estados contables,
            revisión de procesos y control de gestión. Un informe profesional
            que aporta confianza a socios, inversores y organismos de control.
          </p>
          <div className="flex flex-wrap gap-2 mb-10">
            {[
              "Auditoría externa",
              "Auditoría interna",
              "Control de gestión",
              "Cumplimiento normativo",
              "Detección de irregularidades",
            ].map((tag) => (
              <span key={tag} className="text-xs text-primary bg-white px-3 py-1.5 border border-primary/20">
                {tag}
              </span>
            ))}
          </div>
          <a
            href="https://wa.me/5492235790012?text=Hola%2C%20necesito%20asesoramiento%20sobre%20auditor%C3%ADa%20contable."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-accent text-white text-sm font-semibold px-8 py-4 rounded tracking-wide hover:bg-[#263B35] transition-all duration-300"
          >
            Consultanos ahora
          </a>
        </div>
      </ScrollAnimation>
    </div>
  </section>
)}
```

### 4C. Limpiar labels (solo si NO se hizo 4A)

Si por alguna razón se decide mantener `isContabilidad` en `hasSplitGrid`, los labels deben actualizarse. Pero lo recomendado es sacarlo del split grid (4A).

---

## PROMPT 5: Correcciones en CONSULTORÍA EMPRESARIAL (data file)

Modificar `src/data/services/consultoria-empresarial.ts`.

### 5A. Agregar referencia a CFO Externo en el subtitle

```
ANTES:
subtitle: "Información clara para decisiones seguras. Acompañamos el crecimiento de tu empresa con análisis financiero y visión estratégica.",

DESPUÉS:
subtitle: "Director financiero externo para tu empresa. Información clara para decisiones seguras, con análisis financiero y visión estratégica.",
```

### 5B. Reemplazar las 6 áreas por estas 4

```ts
areas: [
  {
    title: "Costos y Precios",
    items: [
      "Relevamiento y análisis de costos fijos y variables",
      "Determinación de punto de equilibrio económico y financiero",
      "Rentabilidad por producto, línea de negocio y/o cliente",
      "Márgenes de contribución y análisis de precios",
    ],
  },
  {
    title: "Análisis económico y financiero",
    items: [
      "Armado de estados de resultados mensuales",
      "Armado de flujo de fondos y proyectados a corto y mediano plazo",
      "Análisis operativo: cobros, pagos y capital de trabajo",
      "Rentabilidad económica vs. caja real. Identificación de desvíos y fugas",
      "Gestión de tesorería y optimización de excedentes",
      "Presupuestos por proyectos. Elaboración, control y análisis de desvíos",
      "Informes mensuales con implementación de tableros, KPIs y OKRs",
    ],
  },
  {
    title: "Financiamiento y acceso al crédito",
    items: [
      "Armado de carpetas de crédito para bancos y entidades",
      "Proyecciones financieras para solicitudes de préstamos",
      "Análisis de alternativas de financiamiento: bancario, SGR, mercado de capitales",
      "Subsidios y programas de fomento para PyMEs (SEPyME, Provincia, Municipio)",
      "Evaluación de líneas de crédito a tasa subsidiada",
      "Soporte en negociaciones con entidades financieras",
    ],
  },
  {
    title: "Planificación estratégica y crecimiento",
    items: [
      "Análisis de viabilidad de nuevos proyectos e inversiones",
      "Evaluación de apertura de sucursales o nuevas unidades de negocio",
      "Análisis de escenarios: optimista, probable y pesimista",
      "Plan de negocios para inversores o socios potenciales",
      "Acompañamiento en etapas de expansión y profesionalización",
      "Definición de estructura organizativa y roles clave",
    ],
  },
],
```

### 5C. FAQs: eliminar la de reestructuración

Eliminar esta FAQ:

`"Mi empresa está en dificultades, ¿pueden ayudarme?"` (la que empieza con "Sí. Hacemos un diagnóstico financiero integral...")

Las demás FAQs se mantienen. Opcionalmente, se puede editar la primera FAQ para que no mencione "reestructuración":

```
ANTES (en la respuesta de la primera FAQ):
"...mejorar la rentabilidad, reducir costos, planificar inversiones o encarar una reestructuración. Es mirar hacia adelante, no solo hacia atrás."

DESPUÉS:
"...mejorar la rentabilidad, reducir costos y planificar inversiones. Es mirar hacia adelante, no solo hacia atrás."
```

---

## PROMPT 6: Correcciones en CONSULTORÍA EMPRESARIAL (page template — labels y layout)

Modificar `src/app/servicios/[slug]/page.tsx`.

### 6A. Texto introductorio de consultoría

Buscar el bloque `{isConsultoria && (` en la sección de intro (aprox. líneas 293-312).

El primer párrafo menciona "costos reales, márgenes verificados, flujos de fondos proyectados y escenarios bien analizados" — esto sigue siendo correcto, no cambia.

Opcionalmente, agregar mención a "director financiero externo" en el intro. Ejemplo, cambiar el segundo párrafo:

```
ANTES:
<p>
  Trabajamos con PyMEs, comercios y profesionales independientes de Mar del
  Plata que quieren profesionalizar la gestión de su negocio. Desde un análisis
  de costos puntual hasta un acompañamiento estratégico continuo, adaptamos
  el servicio a lo que cada cliente necesita.
</p>

DESPUÉS:
<p>
  Funcionamos como director financiero externo para PyMEs, comercios y
  profesionales independientes de Mar del Plata. Desde un análisis de costos
  puntual hasta un acompañamiento estratégico continuo, adaptamos el servicio
  a lo que cada cliente necesita.
</p>
```

### 6B. Labels del grid

En la primera fila (línea 417), el label actual `isConsultoria ? "Análisis y gestión financiera"` sigue siendo adecuado para las primeras 3 cards (Costos y Precios, Análisis económico y financiero, Financiamiento). No cambiar.

En la segunda fila (línea 446), el label actual `isConsultoria ? "Estrategia y crecimiento"` también sigue bien para la 4ta card (Planificación estratégica). No cambiar.

### 6C. Sección destacada de Financiamiento

La sección destacada de Financiamiento para PyMEs (líneas 754-796) sigue siendo válida porque la card de Financiamiento se mantiene. No cambiar.

### 6D. FAQ de reestructuración en sección destacada

Verificar si hay alguna mención a reestructuración/crisis en la sección destacada. Si no hay, no hacer nada.

---

## PROMPT 7: Correcciones en GESTIÓN DE SUELDOS (data file)

Modificar `src/data/services/gestion-de-sueldos.ts`. Solo 2 cambios puntuales:

### 7A. Eliminar ítem de cargas sociales

En el área "Cargas sociales y contribuciones" (segunda área, aprox. línea 24), eliminar este ítem:

```
"Aportes y contribuciones: jubilación, obra social, PAMI, asignaciones",
```

### 7B. Agregar "análisis de reducción de alícuota" a ART

En el mismo área, modificar el ítem de ART:

```
ANTES: "ART: altas, bajas, declaración de nómina y denuncia de siniestros",
DESPUÉS: "ART: altas, bajas, declaración de nómina, denuncia de siniestros y análisis de reducción de alícuota",
```

No tocar nada más de este archivo.

---

## Orden de aplicación recomendado

1. **Prompt 7** (Sueldos) — el más simple, 2 cambios puntuales
2. **Prompt 3** (Contabilidad data) — reemplazar áreas y eliminar FAQs
3. **Prompt 4** (Contabilidad page template) — sacar del split grid + sección destacada
4. **Prompt 1** (Impositivo data) — reemplazar áreas
5. **Prompt 2** (Impositivo page template) — intro + labels
6. **Prompt 5** (Consultoría data) — reemplazar áreas + eliminar FAQ
7. **Prompt 6** (Consultoría page template) — intro + labels opcionales

## Después de aplicar todos los prompts

```bash
git add src/data/services/asesoramiento-impositivo.ts src/data/services/auditoria-contabilidad.ts src/data/services/consultoria-empresarial.ts src/data/services/gestion-de-sueldos.ts src/app/servicios/\[slug\]/page.tsx
git commit -m "fix: correcciones de contenido en servicios contables (impositivo, contabilidad, consultoría, sueldos)"
git push origin main
```
