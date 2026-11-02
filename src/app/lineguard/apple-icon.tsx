import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0B1F33",
      }}
    >
      <svg width="108" height="122" viewBox="0 0 64 72">
        <path
          d="M32 5C17.5 5 12 11.5 12 16.5V34c0 15.5 9.5 24.5 20 32 10.5-7.5 20-16.5 20-32V16.5C52 11.5 46.5 5 32 5Z"
          fill="none"
          stroke="#F7F7F4"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <path d="M18 36h20" stroke="#F7F7F4" strokeWidth="3.5" strokeLinecap="round" />
        <path
          d="M34.5 31.5 40 38.5 51 24"
          fill="none"
          stroke="#12B76A"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>,
    { ...size },
  );
}
