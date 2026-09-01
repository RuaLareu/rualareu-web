import { NextRequest, NextResponse } from "next/server";

/**
 * Protección del panel de métricas (/panel) con Basic Auth.
 * Credenciales en variables de entorno (Vercel → Settings → Environment Variables):
 *   PANEL_USER  → usuario
 *   PANEL_PASS  → clave
 * Sin esas variables definidas, el panel queda inaccesible (deny by default).
 */
export const config = {
  matcher: ["/panel", "/panel/:path*"],
};

export function middleware(req: NextRequest) {
  const user = process.env.PANEL_USER;
  const pass = process.env.PANEL_PASS;

  const unauthorized = () =>
    new NextResponse("Autenticación requerida.", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Panel RUA | LAREU", charset="UTF-8"',
        "X-Robots-Tag": "noindex, nofollow",
      },
    });

  // Deny by default si faltan las credenciales del entorno
  if (!user || !pass) return unauthorized();

  const auth = req.headers.get("authorization");
  if (!auth?.startsWith("Basic ")) return unauthorized();

  let decoded: string;
  try {
    decoded = atob(auth.slice(6));
  } catch {
    return unauthorized();
  }
  const sep = decoded.indexOf(":");
  const u = decoded.slice(0, sep);
  const p = decoded.slice(sep + 1);
  if (u !== user || p !== pass) return unauthorized();

  // Autenticado: servir el estático public/panel/index.html en /panel
  const res =
    req.nextUrl.pathname === "/panel"
      ? NextResponse.rewrite(new URL("/panel/index.html", req.url))
      : NextResponse.next();
  res.headers.set("X-Robots-Tag", "noindex, nofollow");
  return res;
}
