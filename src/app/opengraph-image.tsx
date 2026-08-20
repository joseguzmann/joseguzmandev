import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0a09",
          color: "#f5f2ee",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            left: -120,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "rgba(251, 146, 60, 0.20)",
            filter: "blur(120px)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "#f5f2ee",
              color: "#0b0a09",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            {site.shortName}
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#a9a29b" }}>joseguzman.dev</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
              maxWidth: 940,
            }}
          >
            {site.tagline}
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#fb923c" }}>
            {site.name} · {site.role}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#7c756e" }}>
          Next.js · Python · PostgreSQL · Agentes de IA
        </div>
      </div>
    ),
    size,
  );
}
