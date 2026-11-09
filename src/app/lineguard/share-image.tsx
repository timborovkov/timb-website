import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { OG_IMAGE_ALT, OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH } from "./content";

export const shareImageAlt = OG_IMAGE_ALT;
export const shareImageSize = { width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT };
export const shareImageContentType = "image/png";

function ShieldMark({
  stroke,
  check,
  width,
  height,
}: {
  stroke: string;
  check: string;
  width: number;
  height: number;
}) {
  return (
    <svg width={width} height={height} viewBox="0 0 64 72">
      <path
        d="M32 5C17.5 5 12 11.5 12 16.5V34c0 15.5 9.5 24.5 20 32 10.5-7.5 20-16.5 20-32V16.5C52 11.5 46.5 5 32 5Z"
        fill="none"
        stroke={stroke}
        strokeWidth="3.25"
        strokeLinejoin="round"
      />
      <path d="M18 36h20" stroke={stroke} strokeWidth="3.25" strokeLinecap="round" />
      <path
        d="M34.5 31.5 40 38.5 51 24"
        fill="none"
        stroke={check}
        strokeWidth="3.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

async function loadFonts() {
  const fontsDir = join(process.cwd(), "src/app/lineguard/fonts");
  const [semiBold, medium] = await Promise.all([
    readFile(join(fontsDir, "Inter-SemiBold.woff")),
    readFile(join(fontsDir, "Inter-Medium.woff")),
  ]);
  return [
    { name: "Inter", data: semiBold, style: "normal" as const, weight: 600 as const },
    { name: "Inter", data: medium, style: "normal" as const, weight: 500 as const },
  ];
}

export async function renderShareImage() {
  const fonts = await loadFonts();

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: "#0B1F33",
        color: "#F7F7F4",
        fontFamily: "Inter",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ display: "flex", marginRight: 22 }}>
          <ShieldMark stroke="#F7F7F4" check="#12B76A" width={64} height={72} />
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 600,
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          lineguard
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", maxWidth: 920 }}>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            fontWeight: 500,
            color: "#8FA0B0",
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          An early project by Tim Borovkov
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            fontWeight: 500,
            letterSpacing: "-0.03em",
            lineHeight: 1.25,
          }}
        >
          Every carrier invoice, checked line by line.
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            width: 36,
            height: 4,
            background: "#12B76A",
            marginBottom: 20,
            borderRadius: 2,
          }}
        />
        <div
          style={{
            fontSize: 24,
            fontWeight: 500,
            color: "#12B76A",
            letterSpacing: "-0.02em",
          }}
        >
          timb.dev/lineguard
        </div>
      </div>
    </div>,
    { ...shareImageSize, fonts },
  );
}
