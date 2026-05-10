# Prompt: Formulario de contacto funcional con Resend

Hacer funcional el formulario de contacto para que los mensajes lleguen a `info@rualareu.com`. Se usa **Resend** como servicio de email (dominio ya verificado, API key ya configurada en Vercel).

---

## Paso 1: Instalar Resend SDK

```bash
npm install resend
```

## Paso 2: Crear archivo `.env.local` en la raíz del proyecto

```env
RESEND_API_KEY=re_XoDnL5jG_4wWAvC7B8a4Dt924iBTaatPq
```

> Esta key ya está configurada en Vercel como variable de entorno para Production y Preview.

## Paso 3: Crear la API Route `src/app/api/contact/route.ts`

```ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { nombre, email, telefono, asunto, mensaje } = await request.json();

    // Validación básica en servidor
    if (!nombre || !email || !asunto || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    // Enviar email al estudio
    await resend.emails.send({
      from: "Consultas Web <consultas@rualareu.com>",
      to: ["info@rualareu.com"],
      replyTo: email,
      subject: `[Web] ${asunto}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1B1B1B;">
          <div style="background-color: #314A43; padding: 24px 32px;">
            <h1 style="color: #FFFFFF; font-size: 18px; margin: 0; letter-spacing: 0.1em;">
              RUA | LAREU
            </h1>
          </div>
          
          <div style="padding: 32px; background-color: #FAF5EC;">
            <h2 style="color: #314A43; font-size: 16px; margin: 0 0 24px 0;">
              Nueva consulta desde la web
            </h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px; width: 100px; vertical-align: top;">Nombre</td>
                <td style="padding: 8px 0; font-size: 14px;">${nombre}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px; vertical-align: top;">Email</td>
                <td style="padding: 8px 0; font-size: 14px;">
                  <a href="mailto:${email}" style="color: #314A43;">${email}</a>
                </td>
              </tr>
              ${telefono ? `
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px; vertical-align: top;">Teléfono</td>
                <td style="padding: 8px 0; font-size: 14px;">
                  <a href="tel:${telefono}" style="color: #314A43;">${telefono}</a>
                </td>
              </tr>
              ` : ""}
              <tr>
                <td style="padding: 8px 0; color: #666; font-size: 13px; vertical-align: top;">Asunto</td>
                <td style="padding: 8px 0; font-size: 14px; font-weight: 600;">${asunto}</td>
              </tr>
            </table>
            
            <div style="margin-top: 24px; padding: 20px; background-color: #FFFFFF; border-left: 3px solid #314A43;">
              <p style="margin: 0 0 4px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">
                Mensaje
              </p>
              <p style="margin: 0; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${mensaje}</p>
            </div>
          </div>
          
          <div style="padding: 16px 32px; background-color: #314A43; text-align: center;">
            <p style="margin: 0; color: rgba(255,255,255,0.4); font-size: 11px;">
              Este mensaje fue enviado desde rualareu.com
            </p>
          </div>
        </div>
      `,
    });

    // Enviar email de confirmación al usuario
    await resend.emails.send({
      from: "RUA | LAREU <consultas@rualareu.com>",
      to: [email],
      subject: "Recibimos tu consulta — RUA | LAREU",
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1B1B1B;">
          <div style="background-color: #314A43; padding: 24px 32px;">
            <h1 style="color: #FFFFFF; font-size: 18px; margin: 0; letter-spacing: 0.1em;">
              RUA | LAREU
            </h1>
          </div>
          
          <div style="padding: 32px; background-color: #FAF5EC;">
            <p style="font-size: 15px; line-height: 1.7; margin: 0 0 16px 0;">
              Hola <strong>${nombre}</strong>,
            </p>
            <p style="font-size: 15px; line-height: 1.7; margin: 0 0 16px 0;">
              Recibimos tu consulta sobre <em>"${asunto}"</em> y nos pondremos en contacto a la brevedad.
            </p>
            <p style="font-size: 15px; line-height: 1.7; margin: 0 0 24px 0;">
              Si necesitás una respuesta urgente, podés comunicarte por WhatsApp:
            </p>
            <a href="https://wa.me/5492235790012?text=Hola%2C%20me%20contacto%20desde%20la%20web%20de%20RUA%20%7C%20LAREU.%20Quisiera%20realizar%20una%20consulta." 
               style="display: inline-block; background-color: #314A43; color: #FFFFFF; padding: 12px 28px; text-decoration: none; font-size: 13px; letter-spacing: 0.05em;">
              Escribinos por WhatsApp →
            </a>
          </div>
          
          <div style="padding: 16px 32px; background-color: #314A43; text-align: center;">
            <p style="margin: 0; color: rgba(255,255,255,0.4); font-size: 11px;">
              Almirante Brown 3071, Piso 2 · Mar del Plata · Argentina
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
```

## Paso 4: Actualizar `src/components/ui/ContactForm.tsx`

Reemplazar el archivo completo por esto:

```tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  nombre: z.string().min(2, "Ingresá tu nombre completo"),
  email: z.string().email("Ingresá un email válido"),
  telefono: z.string().optional(),
  asunto: z.string().min(3, "Indicá el asunto de tu consulta"),
  mensaje: z.string().min(10, "Contanos un poco más sobre tu consulta"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Error al enviar");
      }

      setSubmitted(true);
    } catch {
      setError("Hubo un error al enviar tu consulta. Por favor, intentá de nuevo o escribinos por WhatsApp.");
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-12 h-12 bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-sackers-medium text-sm tracking-widest text-primary mb-2">
          Mensaje enviado
        </h3>
        <p className="text-text-secondary text-sm">
          Nos pondremos en contacto a la brevedad.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs tracking-wide text-text-secondary mb-1.5">
            Nombre *
          </label>
          <input
            {...register("nombre")}
            type="text"
            placeholder="Tu nombre completo"
            className="w-full px-4 py-3 border border-primary/20 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-colors bg-white"
          />
          {errors.nombre && (
            <p className="mt-1 text-xs text-red-500">{errors.nombre.message}</p>
          )}
        </div>
        <div>
          <label className="block text-xs tracking-wide text-text-secondary mb-1.5">
            Email *
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="tu@email.com"
            className="w-full px-4 py-3 border border-primary/20 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-colors bg-white"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs tracking-wide text-text-secondary mb-1.5">
            Teléfono
          </label>
          <input
            {...register("telefono")}
            type="tel"
            placeholder="223 000 0000"
            className="w-full px-4 py-3 border border-primary/20 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-colors bg-white"
          />
        </div>
        <div>
          <label className="block text-xs tracking-wide text-text-secondary mb-1.5">
            Asunto *
          </label>
          <input
            {...register("asunto")}
            type="text"
            placeholder="¿Sobre qué necesitás asesoramiento?"
            className="w-full px-4 py-3 border border-primary/20 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-colors bg-white"
          />
          {errors.asunto && (
            <p className="mt-1 text-xs text-red-500">{errors.asunto.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-wide text-text-secondary mb-1.5">
          Mensaje *
        </label>
        <textarea
          {...register("mensaje")}
          rows={5}
          placeholder="Contanos brevemente tu situación..."
          className="w-full px-4 py-3 border border-primary/20 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-colors bg-white resize-none"
        />
        {errors.mensaje && (
          <p className="mt-1 text-xs text-red-500">{errors.mensaje.message}</p>
        )}
      </div>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white text-sm font-semibold py-4 tracking-wide hover:bg-primary/90 transition-colors disabled:opacity-60"
      >
        {isSubmitting ? "Enviando..." : "Enviar consulta"}
      </button>
    </form>
  );
}
```

## Qué cambió en ContactForm.tsx

1. Se agregó estado `error` para mostrar errores de envío
2. El `onSubmit` ahora hace `fetch` a `/api/contact` en vez de `console.log`
3. Se agregó un bloque de error visual (fondo rojo claro) antes del botón
4. Se agregó `try/catch` para manejar fallos de red

## Lo que NO cambia

- El esquema de validación zod es idéntico
- Los estilos de todos los campos son idénticos
- El estado `submitted` y su vista de confirmación son idénticos
- La estructura del formulario (nombre, email, teléfono, asunto, mensaje) no cambia

## Resumen de lo que se envía

- **Al estudio** (`info@rualareu.com`): Email con formato HTML con los datos del formulario, subject `[Web] {asunto}`, reply-to con el email del usuario
- **Al usuario**: Email de confirmación agradeciéndole y con link a WhatsApp para urgencias

## Commit

```bash
npm install resend
git add src/app/api/contact/route.ts src/components/ui/ContactForm.tsx .env.local package.json package-lock.json
git commit -m "feat: formulario de contacto funcional con Resend"
git push origin main
```

> **IMPORTANTE**: No subir `.env.local` al repo. Agregar `.env.local` al `.gitignore` si no está ya. La variable `RESEND_API_KEY` ya está configurada en Vercel como Environment Variable.

## Verificación

Después del deploy, probar el formulario en `rualareu.com/contacto` y verificar que:
1. El email llega a `info@rualareu.com`
2. El usuario recibe email de confirmación
3. El formulario muestra "Mensaje enviado" después de enviar
4. Si hay error de red, muestra el mensaje de error
