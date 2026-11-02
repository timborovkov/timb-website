import { ImageResponse } from "next/og";
import { TITLE } from "./content";

export const alt = TITLE;
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
        justifyContent: "space-between",
        padding: "72px 80px",
        background: "#0F2A2E",
        color: "#F6F5F0",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ fontSize: 36, color: "#C6F432", marginRight: 12 }}>Δ</div>
        <div style={{ fontSize: 32, letterSpacing: "-0.03em" }}>workdelta</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 64,
            fontWeight: 500,
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            maxWidth: 920,
          }}
        >
          AI automation for SMEs, paid on results.
        </div>
        <div style={{ fontSize: 28, marginTop: 28, color: "#1F7A75" }}>timb.dev/workdelta</div>
      </div>
    </div>,
    { ...size },
  );
}
