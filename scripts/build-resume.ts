import PDFDocument from "pdfkit";
import { createWriteStream, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import {
  personal,
  experience,
  projects,
  education,
} from "../data";

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(SCRIPT_DIR, "../public/resume.pdf");

const PAGE = { size: "A4" as const, margin: 38 };
const COLOR = {
  ink: "#111111",
  text: "#222222",
  mute: "#666666",
  rule: "#cccccc",
};

const doc = new PDFDocument({
  size: PAGE.size,
  margin: PAGE.margin,
  info: {
    Title: `${personal.name} — Resume`,
    Author: personal.name,
  },
});

const stream = createWriteStream(OUT);
doc.pipe(stream);

const PAGE_WIDTH = doc.page.width;
const CONTENT_WIDTH = PAGE_WIDTH - PAGE.margin * 2;

// ── Header ──────────────────────────────────────────────────────────────
doc
  .fillColor(COLOR.ink)
  .font("Helvetica-Bold")
  .fontSize(20)
  .text(personal.name, { lineGap: 1 });

doc
  .font("Helvetica")
  .fontSize(10.5)
  .fillColor(COLOR.text)
  .text(personal.title, { lineGap: 1 });

const contactParts = [
  personal.location,
  personal.email,
  ...personal.links.map((l) => l.label),
];
doc
  .moveDown(0.2)
  .fontSize(9)
  .fillColor(COLOR.mute)
  .text(contactParts.join("  ·  "), { lineGap: 1 });

doc.moveDown(0.5);

// ── Bio ─────────────────────────────────────────────────────────────────
doc
  .fontSize(9.5)
  .fillColor(COLOR.text)
  .text(personal.bio, { align: "justify", lineGap: 1 });

doc.moveDown(0.4);

// ── Helpers ─────────────────────────────────────────────────────────────
function sectionTitle(label: string) {
  doc.moveDown(0.3);
  doc
    .font("Helvetica-Bold")
    .fontSize(8.5)
    .fillColor(COLOR.mute)
    .text(label.toUpperCase(), PAGE.margin, doc.y, {
      characterSpacing: 1.4,
      lineGap: 1,
      width: CONTENT_WIDTH,
    });
  const y = doc.y + 0.5;
  doc
    .moveTo(PAGE.margin, y)
    .lineTo(PAGE_WIDTH - PAGE.margin, y)
    .strokeColor(COLOR.rule)
    .lineWidth(0.5)
    .stroke();
  doc.moveDown(0.4);
}

function rightAlignedRow(left: string, right: string, boldLeft = true) {
  const startY = doc.y;
  doc
    .font(boldLeft ? "Helvetica-Bold" : "Helvetica")
    .fontSize(10)
    .fillColor(COLOR.ink);
  const rightWidth = doc.widthOfString(right);
  const leftWidth = CONTENT_WIDTH - rightWidth - 12;
  doc.text(left, PAGE.margin, startY, {
    width: leftWidth,
    continued: false,
    lineGap: 1,
  });
  const afterLeftY = doc.y;
  doc
    .font("Helvetica")
    .fontSize(9)
    .fillColor(COLOR.mute)
    .text(right, PAGE_WIDTH - PAGE.margin - rightWidth, startY + 1, {
      width: rightWidth,
      lineBreak: false,
    });
  doc.y = afterLeftY;
}

// ── Experience ──────────────────────────────────────────────────────────
sectionTitle("Experience");
for (const e of experience) {
  rightAlignedRow(`${e.role} · ${e.company}`, e.period);
  doc
    .font("Helvetica")
    .fontSize(9)
    .fillColor(COLOR.text)
    .text(e.description, PAGE.margin, doc.y + 1, {
      width: CONTENT_WIDTH,
      lineGap: 1,
    });
  doc.moveDown(0.2);
  doc
    .fontSize(9)
    .fillColor(COLOR.text)
    .list(e.highlights, PAGE.margin + 10, doc.y, {
      width: CONTENT_WIDTH - 10,
      bulletRadius: 1.2,
      textIndent: 8,
      lineGap: 1,
      paragraphGap: 1,
    });
  doc.moveDown(0.2);
}

// ── Projects ────────────────────────────────────────────────────────────
sectionTitle("Projects");
for (const p of projects) {
  rightAlignedRow(p.title, p.tags.join(" · "));
  if (p.context) {
    doc
      .font("Helvetica")
      .fontSize(8)
      .fillColor(COLOR.mute)
      .text(p.context.toUpperCase(), PAGE.margin, doc.y + 1, {
        width: CONTENT_WIDTH,
        characterSpacing: 0.8,
        lineGap: 1,
      });
  }
  doc
    .font("Helvetica")
    .fontSize(9)
    .fillColor(COLOR.text)
    .text(p.description, PAGE.margin, doc.y + 1, {
      width: CONTENT_WIDTH,
      lineGap: 1,
    });
  doc.moveDown(0.2);
}

// ── Education ───────────────────────────────────────────────────────────
sectionTitle("Education");
rightAlignedRow(education.degree, education.status);

const pageCount = doc.bufferedPageRange().count;
doc.end();

await new Promise<void>((done, fail) => {
  stream.on("finish", () => done());
  stream.on("error", fail);
});

if (pageCount !== 1) {
  // Single-page guarantee — fail loud so the layout is fixed at source.
  const bytes = readFileSync(OUT).length;
  throw new Error(
    `Resume spilled to ${pageCount} pages (${bytes} bytes). ` +
      `Tighten content in data/index.ts or layout in scripts/build-resume.ts.`,
  );
}

console.log(`Wrote ${OUT} (${pageCount} page)`);
