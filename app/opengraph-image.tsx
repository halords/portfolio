import { ImageResponse } from "next/og";

export const alt =
  "Harold Erick Jamora — Full-Stack Developer (Next.js · AI Integration)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F4F1EA",
          color: "#1B1A17",
          padding: "64px 72px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              width: 48,
              height: 4,
              flexShrink: 0,
              background: "#2244CC",
            }}
          />
          <span
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            HALORDS · LA UNION, PHILIPPINES
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 84,
              lineHeight: 1.02,
              fontWeight: 700,
            }}
          >
            Harold Erick Jamora
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 36,
              color: "#454139",
            }}
          >
            Full-Stack Developer — Next.js · AI Integration · Internal Tools
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #D9D2C2",
            paddingTop: 28,
            fontFamily: "'Courier New', monospace",
            fontSize: 20,
            color: "#6E675C",
          }}
        >
          <span>7 PGLU SYSTEMS IN PRODUCTION</span>
          <span>PART-TIME · REMOTE</span>
        </div>
      </div>
    ),
    { ...size },
  );
}