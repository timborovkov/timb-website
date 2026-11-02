import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
      <svg width="22" height="25" viewBox="0 0 64 72">
        <path
          d="M32 5C17.5 5 12 11.5 12 16.5V34c0 15.5 9.5 24.5 20 32 10.5-7.5 20-16.5 20-32V16.5C52 11.5 46.5 5 32 5Z"
          fill="none"
          stroke="#F7F7F4"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path d="M18 36h18" stroke="#F7F7F4" strokeWidth="5" strokeLinecap="round" />
        <path
          d="M32 30 39 39 53 22"
          fill="none"
          stroke="#12B76A"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>,
    { ...size },
  );
}
