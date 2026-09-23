import Container from "@/components/ui/Container";
import Buffer, { type BufferLine } from "@/components/ui/Buffer";
import ButtonLink from "@/components/ui/ButtonLink";
import Terminal from "@/components/Terminal";
import { personal, positioning, resume } from "@/data";

const blank = (key: string): BufferLine => ({
  key,
  content: <span aria-hidden="true">&nbsp;</span>,
});

export default function Hero() {
  const lines: BufferLine[] = [
    {
      key: "title",
      content: (
        <h1 className="text-2xl leading-tight font-bold text-gb-yellow sm:text-3xl">
          <span aria-hidden="true" className="text-gb-bg4">
            #{" "}
          </span>
          {personal.name}
        </h1>
      ),
    },
    {
      key: "tagline",
      content: (
        <p className="text-lg leading-snug text-ink sm:text-[1.35rem]">
          {positioning.taglineLead} ·{" "}
          <strong className="font-bold text-gb-aqua">{positioning.taglineFocus}</strong>
          <span className="cursor" aria-hidden="true" />
        </p>
      ),
    },
    { key: "subline", content: <p className="eyebrow">{positioning.subline}</p> },
    blank("b1"),
    ...positioning.highlights.map<BufferLine>((item) => ({
      key: item,
      content: (
        <p className="text-[14px] leading-relaxed text-ink-2">
          <span aria-hidden="true" className="text-gb-bg4">
            -{" "}
          </span>
          {item}
        </p>
      ),
    })),
    blank("b2"),
    {
      key: "cta",
      content: (
        <div className="flex flex-wrap gap-2 py-1">
          <ButtonLink href={resume.url} download variant="primary" keyHint="d">
            {resume.label.toLowerCase()}
          </ButtonLink>
          <ButtonLink href={`mailto:${personal.email}`} keyHint="c">
            contact
          </ButtonLink>
          <ButtonLink href="#work" variant="ghost" keyHint="w">
            projects
          </ButtonLink>
          <ButtonLink href="/resume" variant="ghost" keyHint="r">
            resume
          </ButtonLink>
        </div>
      ),
    },
  ];

  return (
    <Container
      width="full"
      className="grid gap-5 py-6 sm:py-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-6"
    >
      <Buffer lines={lines} file="~/prtf/README.md" />
      {/* The shell is absolutely positioned on large screens so the row
          height comes from the buffer only; the shell scrolls inside. */}
      <div className="relative h-[28rem] lg:h-auto lg:min-h-[26rem]">
        <div className="h-full lg:absolute lg:inset-0">
          <Terminal />
        </div>
      </div>
    </Container>
  );
}
