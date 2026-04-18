import { ImageResponse } from "next/og";

export const alt = "Tim Borovkov — Founder & Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "80px",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
        color: "#fafafa",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ fontSize: 120, fontWeight: 700, letterSpacing: "-0.02em" }}>Tim Borovkov</div>
      <div style={{ fontSize: 40, marginTop: 24, color: "#a3a3a3" }}>
        Founder & Software Engineer
      </div>
      <div style={{ fontSize: 28, marginTop: 40, color: "#737373" }}>timb.dev</div>
    </div>,
    { ...size },
  );
}
