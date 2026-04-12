/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Trailing slash redirects from old WordPress URLs
      {
        source: "/servicios/laboral-seguridad-social/",
        destination: "/servicios/laboral-seguridad-social",
        permanent: true,
      },
      {
        source: "/servicios/comercial-societario/",
        destination: "/servicios/comercial-societario",
        permanent: true,
      },
      {
        source: "/servicios/defensa-del-consumidor/",
        destination: "/servicios/defensa-del-consumidor",
        permanent: true,
      },
      {
        source: "/servicios/civil-familia-sucesiones/",
        destination: "/servicios/civil-familia-sucesiones",
        permanent: true,
      },
      {
        source: "/servicios/asesoramiento-impositivo/",
        destination: "/servicios/asesoramiento-impositivo",
        permanent: true,
      },
      {
        source: "/servicios/auditoria-contabilidad/",
        destination: "/servicios/auditoria-contabilidad",
        permanent: true,
      },
      {
        source: "/servicios/consultoria-empresarial/",
        destination: "/servicios/consultoria-empresarial",
        permanent: true,
      },
      {
        source: "/servicios/nuevos-negocios/",
        destination: "/servicios/nuevos-negocios",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
