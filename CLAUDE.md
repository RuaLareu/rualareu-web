# RUA | LAREU - Estudio Juridico Contable
## Instrucciones del Proyecto para Claude Code

### CONTEXTO GENERAL
Estamos construyendo el sitio web publico y la plataforma digital de RUA | LAREU, un estudio juridico contable ubicado en Mar del Plata, Argentina.

**El proyecto tiene dos productos:**
1. **Sitio Web Publico** (rualareu.com) - La cara visible del estudio. Landing page principal, paginas individuales por servicio, seccion de socios, blog, contacto.
2. **Plataforma Digital** (portal.rualareu.com) - Panel de clientes, panel de administracion, portal de productores de casos.

**Prioridad:** Primero el sitio web publico. La plataforma se construye despues.

---

### STACK TECNOLOGICO
- **Framework:** Next.js 14+ con App Router y TypeScript
- **Estilos:** Tailwind CSS v4
- **Hosting:** Vercel
- **Base de datos (plataforma):** Supabase (PostgreSQL)
- **Blog CMS:** Sanity (headless CMS) o archivos MDX (a definir)
- **Animaciones:** Framer Motion (sutiles, fade-in on scroll)
- **Iconos:** Lucide React
- **Formularios:** React Hook Form + Zod para validacion
- **Analytics:** Google Analytics 4 + Google Tag Manager

---

### IDENTIDAD VISUAL

#### Paleta de colores
```
--color-primary: #314A43       /* Verde oscuro institucional - header, footer, botones */
--color-primary-light: #E8EFEC /* Verde claro - fondos alternativos, hover */
--color-accent: #C5A572        /* Dorado/ocre - acentos sutiles, lineas decorativas */
--color-background: #F8F6F3    /* Crema calido - fondo general (NO blanco puro) */
--color-text: #1A1A1A          /* Negro suave para texto */
--color-text-secondary: #666666 /* Gris para texto secundario */
--color-white: #FFFFFF
```

#### Tipografia
- **Logo y titulos grandes (hero, secciones):** Sackers Gothic (archivos en /public/fonts/)
  - Sackers Gothic Heavy: titulos principales
  - Sackers Gothic Medium: subtitulos
  - Sackers Gothic Light: acentos
- **Cuerpo de texto y UI:** Inter (Google Fonts) con fallback a system-ui
- **Espaciado de letras en logo:** tracking amplio (letter-spacing: 0.15em aprox)

#### Estilo de diseno
- Minimalista y elegante
- Mucho espacio en blanco (padding generoso entre secciones)
- Animaciones sutiles de entrada (fade-in, slide-up al hacer scroll)
- Sin bordes duros ni sombras agresivas
- Lineas finas como separadores
- Imagenes con overlay verde oscuro sutil cuando se usan de fondo

#### Tono de comunicacion
- Elegante y cercano. Profesional pero accesible.
- NO agresivo ni grandilocuente (no es una law firm de USA).
- Transmite confianza, transparencia y cercania humana.
- Ejemplos: "Estamos con vos en cada paso", "Respuestas claras para decisiones seguras"

---

### DATOS DEL ESTUDIO

#### Informacion general
- **Nombre:** RUA | LAREU - Estudio Juridico Contable
- **Direccion:** Almirante Brown 3071, Piso 2, Mar del Plata (7600), Buenos Aires, Argentina
- **Telefono/WhatsApp:** +54 9 223-579-0012
- **Email:** info@rualareu.com
- **Horario:** 08:00 a 17:00
- **Web actual:** www.rualareu.com

#### Socios
**Joaquin Rua** - Abogado. Socio fundador. Lidera el Area Juridica.
- Matriculado en el Colegio de Abogados de Mar del Plata (T XVII, F 441)
- Matricula Federal del Poder Judicial de la Nacion (T 704, F 501)
- Foco: Derecho Laboral y Comercial

**Francisco Lareu** - Contador Publico. Socio fundador. Lidera el Area Contable e Impositiva.
- Matriculado en el CPCE de la Provincia de Buenos Aires (T 184, F 222, Leg. 48029/1)
- Foco: Planificacion tributaria, auditoria, consultoria financiera

El estudio trabaja con profesionales asociados especializados en distintas areas. Mencion sutil: "Contamos con una red de profesionales especializados que colaboran en casos especificos."

---

### ESTRUCTURA DEL SITIO WEB PUBLICO

#### Mapa de paginas
```
/ (Home)
/servicios/laboral-seguridad-social
/servicios/comercial-societario
/servicios/defensa-del-consumidor
/servicios/civil-familia-sucesiones
/servicios/asesoramiento-impositivo
/servicios/auditoria-contabilidad
/servicios/consultoria-empresarial
/servicios/nuevos-negocios
/blog
/blog/[slug]
/contacto
```

#### Estructura de carpetas
```
src/
  app/
    layout.tsx              # Layout global (header + footer + WhatsApp button)
    page.tsx                # Home
    servicios/
      [slug]/
        page.tsx            # Landing page dinamica por servicio
    blog/
      page.tsx              # Listado del blog
      [slug]/
        page.tsx            # Articulo individual
    contacto/
      page.tsx              # Pagina de contacto
  components/
    layout/
      Header.tsx            # Header fijo con nav + CTA
      Footer.tsx            # Footer con datos, links, legal
      MobileMenu.tsx        # Menu hamburguesa para movil
    ui/
      WhatsAppButton.tsx    # Boton flotante WhatsApp (siempre visible)
      CTAButton.tsx         # Boton de llamada a la accion reutilizable
      ServiceCard.tsx       # Tarjeta de servicio para la home
      BlogCard.tsx          # Tarjeta de preview de articulo
      FAQAccordion.tsx      # Acordeon de preguntas frecuentes
      ContactForm.tsx       # Formulario de contacto
      ScrollAnimation.tsx   # Wrapper para animaciones on scroll
    sections/
      Hero.tsx              # Hero section de la home
      AboutSection.tsx      # Seccion "Estudio"
      ServicesGrid.tsx      # Grilla de servicios
      PartnersSection.tsx   # Seccion "Socios"
      BlogPreview.tsx       # Preview de ultimos articulos
      ContactSection.tsx    # Seccion de contacto
  lib/
    constants.ts            # Colores, datos de contacto, links sociales
    services.ts             # Datos de los 8 servicios
    metadata.ts             # Helpers de SEO (meta tags, schema markup)
  data/
    services/               # Datos completos de cada servicio
      laboral-seguridad-social.ts
      comercial-societario.ts
      defensa-del-consumidor.ts
      civil-familia-sucesiones.ts
      asesoramiento-impositivo.ts
      auditoria-contabilidad.ts
      consultoria-empresarial.ts
      nuevos-negocios.ts
public/
  fonts/                    # Sackers Gothic (.woff2)
  images/                   # Logo, imagenes de stock
  og/                       # Imagenes Open Graph para redes
```

---

### PAGINA PRINCIPAL (HOME) - ESPECIFICACIONES DETALLADAS

#### Header (componente global, fijo al hacer scroll)
- Barra superior fina: direccion | horario | telefono (oculta en mobile)
- Logo RUA | LAREU a la izquierda (version horizontal sin fondo)
- Navegacion: Estudio | Servicios | Socios | Blog | Contacto
- CTA a la derecha: "Agenda tu consulta" (enlace a WhatsApp)
- En mobile: logo + hamburguesa. Menu overlay a pantalla completa.
- Al hacer scroll: header se achica sutilmente, mantiene fondo con blur

#### Hero Section
- Full viewport height (100vh)
- Fondo: imagen profesional de stock con overlay verde oscuro (#314A43 al 60%)
- Texto principal en Sackers Gothic Heavy, blanco, grande
- Subtitulo en Inter, blanco con opacidad
- CTA primario: "Agenda tu consulta gratuita" (boton solido, abre WhatsApp)
- CTA secundario: "Conoce nuestros servicios" (boton outline, scroll a servicios)

#### Seccion Estudio
- Fondo crema (#F8F6F3)
- Titulo "ESTUDIO" en Sackers Gothic
- 2-3 parrafos describiendo el estudio
- Posible frase destacada en tamano grande o con linea lateral verde
- Diferenciadores: cercania, transparencia, comunicacion constante

#### Seccion Servicios
- Fondo blanco
- Titulo "SERVICIOS" + subtitulos "JURIDICOS" y "CONTABLES"
- 8 tarjetas (4+4) con: icono (Lucide), titulo, descripcion breve (2 lineas), link "Ver mas"
- Hover: elevacion sutil o cambio de borde

#### Seccion Socios
- Fondo verde claro (#E8EFEC)
- Foto placeholder (circulo o cuadrado redondeado) + nombre + titulo + bio breve
- Nota sutil sobre profesionales asociados

#### Seccion Blog (preview)
- 3-4 articulos mas recientes en formato tarjeta
- Imagen, categoria, titulo, fecha, extracto
- Boton "Ver todos los articulos"

#### Seccion Contacto
- Formulario: nombre, email, telefono, asunto, mensaje
- Google Maps embebido
- Datos de contacto al costado
- Boton WhatsApp grande

#### Footer
- Fondo verde oscuro (#314A43)
- Logo en blanco, datos de contacto, links rapidos, redes sociales
- Copyright: "2026 RUA | LAREU. Todos los derechos reservados."

---

### LANDING PAGES DE SERVICIOS - ESTRUCTURA

Cada servicio tiene la misma estructura de pagina:

1. **Hero especifico:** Titulo del servicio en grande + subtitulo descriptivo + CTA "Agenda tu consulta gratuita"
2. **Detalle del servicio:** Descripcion completa dividida por subareas (ej: "Asesoramiento a trabajadores" / "Asesoramiento a empleadores")
3. **FAQ (Preguntas frecuentes):** 3-5 preguntas relevantes en formato acordeon. Clave para SEO.
4. **CTA final:** Seccion con fondo verde oscuro + "Necesitas asesoramiento en [servicio]? Contactanos" + boton WhatsApp
5. **Articulos relacionados:** 2-3 posts del blog vinculados a ese servicio

---

### SERVICIOS - DATOS COMPLETOS

#### JURIDICOS

**1. Laboral y Seguridad Social** (slug: laboral-seguridad-social)
- Asesoramiento a trabajadores: despidos e indemnizaciones, accidentes de trabajo, trabajo no registrado, acoso laboral, diferencias salariales
- Asesoramiento a empleadores y empresas: contratos de trabajo, prevencion de conflictos, sanciones disciplinarias, procesos de desvinculacion, reestructuraciones
- Seguridad social: jubilaciones, pensiones, asignaciones familiares, obra social

**2. Comercial y Societario** (slug: comercial-societario)
- Constitucion y reorganizacion de sociedades
- Contratos y fusiones
- Resolucion de conflictos corporativos
- Asesoramiento en derecho societario

**3. Defensa del Consumidor** (slug: defensa-del-consumidor)
- Representacion a consumidores y empresas en reclamos
- Defensa ante organismos competentes (OMIC, etc.)
- Reclamos en sede judicial

**4. Civil, Familia y Sucesiones** (slug: civil-familia-sucesiones)
- Accidentes, amparos, contratos
- Divorcios y alimentos
- Gestion integral de sucesiones

#### CONTABLES

**5. Asesoramiento Impositivo** (slug: asesoramiento-impositivo)
- Gestion y planificacion impositiva
- Monotributistas, responsables inscriptos, sociedades
- Optimizacion de carga fiscal

**6. Auditoria y Contabilidad** (slug: auditoria-contabilidad)
- Estados contables, auditorias, certificaciones
- Informes profesionales
- Libros societarios

**7. Consultoria Empresarial** (slug: consultoria-empresarial)
- Costos, rentabilidad, flujos de fondos
- Acompanamiento en crecimiento empresarial
- Informacion clave para toma de decisiones

**8. Nuevos Negocios** (slug: nuevos-negocios)
- Asesoramiento integral para emprendedores e importadores
- Inscripciones y habilitaciones
- Analisis legal, impositivo y de costos

---

### SEO - ESPECIFICACIONES

#### Meta tags por pagina
- Cada pagina debe tener title y description unicos
- Formato title: "[Servicio] en Mar del Plata | RUA | LAREU - Estudio Juridico Contable"
- Home title: "RUA | LAREU - Estudio Juridico Contable en Mar del Plata"
- Incluir keywords geo: "Mar del Plata", "Buenos Aires", "Argentina"

#### Schema markup (JSON-LD)
- Pagina principal: LocalBusiness + LegalService
- Paginas de servicios: Service + LegalService
- Blog: Article + BlogPosting
- Socios: Person + Attorney
- Contacto: ContactPoint

#### Tecnico
- Sitemap.xml generado automaticamente
- robots.txt
- Canonical URLs
- Open Graph tags (og:title, og:description, og:image)
- Twitter cards
- Alt text en todas las imagenes
- Lazy loading de imagenes
- Core Web Vitals optimizados

#### Redirecciones de WordPress
Configurar redirects en next.config.js para las URLs viejas:
- /servicios/laboral-seguridad-social/ -> /servicios/laboral-seguridad-social (trailing slash)
- Y todas las demas URLs existentes

---

### WHATSAPP BUTTON
- Numero: +5492235790012
- Mensaje predeterminado: "Hola, me contacto desde la web de RUA | LAREU. Quisiera realizar una consulta."
- Boton flotante: esquina inferior derecha, siempre visible
- Icono de WhatsApp verde sobre circulo
- En mobile: un poco mas grande para facilitar el tap
- URL: https://wa.me/5492235790012?text=Hola%2C%20me%20contacto%20desde%20la%20web%20de%20RUA%20%7C%20LAREU.%20Quisiera%20realizar%20una%20consulta.

---

### RESENAS DE GOOGLE
- El estudio tiene 5.0 estrellas con 18+ opiniones en Google Business Profile
- Google Place ID del negocio: buscar con la API usando "RUA LAREU Estudio Juridico Contable Mar del Plata"
- Incluir una seccion de resenas en la home entre "Socios" y "Blog"
- Mostrar las mejores resenas (3-5) con nombre del cliente, estrellas, texto y fecha
- Usar la Google Places API (reviews) o, si no es viable, mostrar un widget estatico con link a "Ver todas las opiniones en Google"
- Agregar schema markup de tipo AggregateRating con rating 5.0 y reviewCount
- Incluir un badge/emblema visible: "5.0 en Google" con el icono de Google y link al perfil
- URL del perfil de Google: https://www.google.com/search?kgmid=/g/11n57jzt97
- CTA para dejar resena: link directo al formulario de opinion de Google

---

### GOOGLE ANALYTICS Y ADS
- Integrar Google Tag Manager (GTM) en el layout global
- Configurar eventos de conversion: click en WhatsApp, envio de formulario, click en telefono
- Preparar pixel de Google Ads para futuras campanas
- Pagina de agradecimiento post-formulario (/gracias) para medir conversiones

---

### RESPONSIVE DESIGN
- Mobile-first: disenar para 375px y expandir
- Breakpoints: sm:640px, md:768px, lg:1024px, xl:1280px
- Header: hamburguesa en < lg
- Hero: texto mas pequeno en mobile, CTAs apilados
- Servicios: 1 columna en mobile, 2 en tablet, 4 en desktop
- Socios: 1 columna en mobile, 2 en desktop
- Footer: columnas apiladas en mobile

---

### NOTAS IMPORTANTES
- NO hay fotos profesionales de los socios aun. Usar placeholders elegantes (iniciales sobre fondo verde, o silueta sutil). Se reemplazaran luego.
- La oficina no tiene foto real. Usar imagenes de stock de oficinas juridicas modernas.
- Todos los textos estan en espanol argentino (vos, sos, etc.)
- El sitio debe cargar en menos de 2 segundos (Lighthouse score > 90)
- Usar next/image para optimizacion automatica de imagenes
- Usar next/font para carga optima de Inter
