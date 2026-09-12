import Tag from "@/components/ui/Tag";
import ButtonLink from "@/components/ui/ButtonLink";
import type { Link } from "@/types";

export function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="space-y-3 text-[15px] leading-relaxed text-ink-2">
      {items.map((paragraph) => (
        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
      ))}
    </div>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-[15px] leading-relaxed text-ink-2">
          <span aria-hidden="true" className="text-gb-bg4">
            -
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Steps({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2">
      {items.map((item, index) => (
        <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink-2">
          <span aria-hidden="true" className="shrink-0 text-gb-yellow">
            {index + 1}.
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export function TagList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-2 gap-y-1">
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}

export function LinkList({ links }: { links: Link[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {links.map((link) => (
        <li key={link.href}>
          <ButtonLink href={link.href} external={link.external} size="sm">
            {link.label} <span aria-hidden="true">↗</span>
          </ButtonLink>
        </li>
      ))}
    </ul>
  );
}
