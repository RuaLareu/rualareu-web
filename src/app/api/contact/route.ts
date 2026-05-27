import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY no configurada en el entorno");
      return NextResponse.json(
        { error: "Servicio de email no configurado" },
        { status: 500 }
      );
    }
    const resend = new Resend(apiKey);

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
