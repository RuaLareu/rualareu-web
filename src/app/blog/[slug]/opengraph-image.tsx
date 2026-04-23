import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";

export const runtime = "nodejs";
export const alt = "Publicación de RUA | LAREU";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const title = post?.title ?? "RUA | LAREU";
  const category = post?.category ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#314A43",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Brand (top-left) */}
        <div
          style={{
            color: "#FFFFFF",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.25em",
          }}
        >
          RUA | LAREU
        </div>

        {/* Spacer that pushes the main content to the center */}
        <div style={{ display: "flex", flex: 1 }} />

        {/* Category */}
        {category && (
          <div
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: 22,
              letterSpacing: "0.25em",
              textTransform: "uppercase" as const,
              marginBottom: 28,
            }}
          >
            {category}
          </div>
        )}

        {/* Title */}
        <div
          style={{
            display: "flex",
            color: "#FFFFFF",
            fontSize: 60,
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            maxWidth: "85%",
            // Clamp to 3 lines using webkit line-clamp (supported by Satori)
            overflow: "hidden",
          }}
        >
          {title}
        </div>

        {/* Gold decorative line */}
        <div
          style={{
            width: 60,
            height: 2,
            backgroundColor: "rgba(255,255,255,0.4)",
            marginTop: 36,
          }}
        />

        {/* Spacer */}
        <div style={{ display: "flex", flex: 1 }} />

        {/* Bottom row (domain on the right) */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: 20,
              letterSpacing: "0.1em",
            }}
          >
            rualareu.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
