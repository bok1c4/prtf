const ROWS = [
  "....kkkkkk....",
  "...kkkkkkkk...",
  "..kkwwkkwwkk..",
  "..kkbwkkwbkk..",
  "..kkkkookkkk..",
  "..kkkkookkkk..",
  ".kkkwwwwwwkkk.",
  ".kkwwwwwwwwkk.",
  "kkkwwwwwwwwkkk",
  "kkkwwwwwwwwkkk",
  "kkkwwwwwwwwkkk",
  ".kkwwwwwwwwkk.",
  "..kkwwwwwwkk..",
  "...kkkkkkkk...",
  "..yyy....yyy..",
  ".yyyy....yyyy.",
];

const COLORS: Record<string, string> = {
  k: "var(--gb-gray)",
  w: "var(--gb-fg0)",
  b: "var(--gb-bg0h)",
  o: "var(--gb-orange)",
  y: "var(--gb-yellow)",
};

/** Pixel-art penguin drawn as a CSS grid in gruvbox colors. */
export default function PixelIcon({ size = 7 }: { size?: number }) {
  return (
    <div
      role="img"
      aria-label="Pixel-art penguin"
      className="grid shrink-0"
      style={{ gridTemplateColumns: `repeat(${ROWS[0].length}, ${size}px)` }}
    >
      {ROWS.flatMap((row, y) =>
        Array.from(row).map((cell, x) => (
          <span
            key={`${x}-${y}`}
            style={{
              width: size,
              height: size,
              backgroundColor: COLORS[cell] ?? "transparent",
            }}
          />
        )),
      )}
    </div>
  );
}
