import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1d2021",
          color: "#b8bb26",
          fontSize: 17,
          fontWeight: 700,
          borderRadius: 6,
          fontFamily: "monospace",
        }}
      >
        {">_"}
      </div>
    ),
    { ...size },
  );
}
