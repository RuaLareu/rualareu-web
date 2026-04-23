import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "RUA | LAREU - Estudio Jurídico Contable en Mar del Plata";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#314A43",
          position: "relative",
        }}
      >
        {/* Gold line */}
        <div
          style={{
            width: 60,
            height: 1,
            backgroundColor: "rgba(255,255,255,0.4)",
            marginBottom: 40,
          }}
        />

        {/* Brand name */}
        <div
          style={{
            color: "#FFFFFF",
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            marginBottom: 16,
          }}
        >
          RUA | LAREU
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: 20,
            letterSpacing: "0.3em",
            textTransform: "uppercase" as const,
            marginBottom: 40,
          }}
        >
          Estudio Jurídico Contable
        </div>

        {/* Gold line */}
        <div
          style={{
            width: 60,
            height: 1,
            backgroundColor: "rgba(255,255,255,0.4)",
            marginBottom: 40,
          }}
        />

        {/* Location */}
        <div
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: 16,
            letterSpacing: "0.2em",
          }}
        >
          Mar del Plata · Buenos Aires · Argentina
        </div>
      </div>
    ),
    { ...size }
  );
}
