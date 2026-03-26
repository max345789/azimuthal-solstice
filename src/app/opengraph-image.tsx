import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Krud AI — The AI CLI Agent for Developers";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050505",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "80px",
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            width: 80,
            height: 80,
            background: "white",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="black"
          >
            {/* Simple rabbit silhouette */}
            <path d="M12 2C9 2 7 4 7 6c0 1.5.5 2.8 1.3 3.7C6.5 10.5 5 12.5 5 15c0 3.3 2.7 6 6 6h2c3.3 0 6-2.7 6-6 0-2.5-1.5-4.5-3.3-5.3C16.5 8.8 17 7.5 17 6c0-2-2-4-5-4zm-3 4c0-1.1 1.3-2 3-2s3 .9 3 2-.5 2-1 2.5V9H10V8.5C9.5 8 9 7.1 9 6z" />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "white",
            letterSpacing: "-2px",
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          Krud AI
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            color: "#9ca3af",
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          The AI CLI Agent for Developers
        </div>

        {/* Install command */}
        <div
          style={{
            marginTop: 50,
            background: "#0d0d0d",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "16px 32px",
            fontSize: 24,
            color: "#a07850",
            fontFamily: "monospace",
          }}
        >
          curl -fsSL https://install.krud.ai | sh
        </div>

        {/* URL */}
        <div
          style={{
            marginTop: 30,
            fontSize: 20,
            color: "rgba(255,255,255,0.3)",
          }}
        >
          dabcloud.in
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
