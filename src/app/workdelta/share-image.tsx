import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { OG_IMAGE_ALT, OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH } from "./content";

export const shareImageAlt = OG_IMAGE_ALT;
export const shareImageSize = { width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT };
export const shareImageContentType = "image/png";

function DeltaMark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path fill="#C6F432" d="M12 3.4 21.6 21H2.4L12 3.4Z" />
    </svg>
  );
}

async function loadFonts() {
  const fontsDir = join(process.cwd(), "src/app/workdelta/fonts");
  const [semiBold, medium] = await Promise.all([
    readFile(join(fontsDir, "SpaceGrotesk-SemiBold.ttf")),
    readFile(join(fontsDir, "SpaceGrotesk-Medium.ttf")),
  ]);
  return [
    { name: "Space Grotesk", data: semiBold, style: "normal" as const, weight: 600 as const },
    { name: "Space Grotesk", data: medium, style: "normal" as const, weight: 500 as const },
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
        background: "#0F2A2E",
        color: "#F6F5F0",
        fontFamily: "Space Grotesk",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 44,
            height: 44,
            marginRight: 16,
            borderRadius: 10,
            background: "#1F7A75",
          }}
        >
          <DeltaMark size={22} />
        </div>
        <div
          style={{
            fontSize: 36,
            fontWeight: 500,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          workdelta
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
        <div
          style={{
            fontSize: 48,
            fontWeight: 500,
            letterSpacing: "-0.035em",
            lineHeight: 1.15,
          }}
        >
          Less repetitive admin.
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 500,
            letterSpacing: "-0.035em",
            lineHeight: 1.15,
            color: "#C6F432",
          }}
        >
          More time for your business.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 26,
            fontWeight: 500,
            letterSpacing: "-0.02em",
            lineHeight: 1.35,
            color: "#F6F5F0",
          }}
        >
          AI automation for SMEs with 10-50 staff.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 8,
            fontSize: 24,
            fontWeight: 500,
            letterSpacing: "-0.02em",
            lineHeight: 1.35,
            color: "#75ABA6",
          }}
        >
          A 20-minute research conversation. Not a sales call.
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            width: 36,
            height: 4,
            background: "#C6F432",
            marginBottom: 20,
            borderRadius: 2,
          }}
        />
        <div
          style={{
            fontSize: 24,
            fontWeight: 500,
            color: "#C6F432",
            letterSpacing: "-0.02em",
          }}
        >
          timb.dev/workdelta
        </div>
      </div>
    </div>,
    { ...shareImageSize, fonts },
  );
}
