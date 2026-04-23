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

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // TODO: integrate with email service (Resend, Formspree, etc.)
    console.log("Form data:", data);
    await new Promise((res) => setTimeout(res, 800));
    setSubmitted(true);
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
