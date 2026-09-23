import { ImageResponse } from "next/og";
import { personal, positioning, SITE } from "@/data";

export const alt = SITE.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const FONT_URL =
  "https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/fonts/ttf/JetBrainsMono-Regular.ttf";

async function loadFont() {
  try {
    const response = await fetch(FONT_URL);
    if (!response.ok) return undefined;
    return await response.arrayBuffer();
  } catch {
    return undefined;
  }
}

export default async function OpenGraphImage() {
  const font = await loadFont();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#1d2021",
          color: "#ebdbb2",
          fontFamily: font ? "JetBrains Mono" : "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            padding: "18px 40px",
            backgroundColor: "#3c3836",
            fontSize: 22,
          }}
        >
          <div
            style={{
              display: "flex",
              backgroundColor: "#b8bb26",
              color: "#1d2021",
              padding: "2px 12px",
              fontWeight: 700,
            }}
          >
            [prtf]
          </div>
          <div style={{ display: "flex", color: "#d5c4a1" }}>0:home 1:work 2:exp 3:skills</div>
          <div style={{ display: "flex", marginLeft: "auto", color: "#a89984" }}>
            {personal.handle}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "48px 64px",
            gap: 22,
          }}
        >
          <div style={{ display: "flex", fontSize: 26, color: "#d5c4a1" }}>
            <span style={{ color: "#b8bb26" }}>{personal.handle}</span>
            <span style={{ color: "#a89984" }}>:~$&nbsp;</span>
            <span>cat README.md</span>
          </div>
          <div style={{ display: "flex", fontSize: 54, color: "#fabd2f", fontWeight: 700 }}>
            # {personal.name}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 34,
              lineHeight: 1.25,
              maxWidth: 1040,
            }}
          >
            <div style={{ display: "flex" }}>{positioning.taglineLead} ·</div>
            <div style={{ display: "flex", color: "#8ec07c" }}>
              {positioning.taglineFocus}
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 22, lineHeight: 1.35, color: "#a89984", marginTop: 8, maxWidth: 1040 }}>
            {positioning.subline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#3c3836",
            fontSize: 22,
            color: "#d5c4a1",
          }}
        >
          <div
            style={{
              display: "flex",
              backgroundColor: "#b8bb26",
              color: "#1d2021",
              padding: "10px 24px",
              fontWeight: 700,
            }}
          >
            NORMAL
          </div>
          <div style={{ display: "flex", padding: "10px 24px" }}>
            Python · Go · PostgreSQL · React
          </div>
          <div style={{ display: "flex", marginLeft: "auto", padding: "10px 24px", color: "#a89984" }}>
            {SITE.url.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: font
        ? [
            {
              name: "JetBrains Mono",
              data: font,
              style: "normal" as const,
              weight: 400 as const,
            },
          ]
        : undefined,
    },
  );
}
