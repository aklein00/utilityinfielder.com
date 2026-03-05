import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f0f0f",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            color: "#888888",
            fontSize: 20,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          utilityinfielder.com
        </div>
        <div
          style={{
            color: "#e07b39",
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.05,
          }}
        >
          Utility Infielder
        </div>
        <div
          style={{
            color: "#888888",
            fontSize: 28,
            marginTop: 28,
            lineHeight: 1.4,
          }}
        >
          Games, tools, and experiments.
        </div>
      </div>
    ),
    { ...size }
  );
}
