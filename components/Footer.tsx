import Container from "@/components/ui/Container";
import SmartLink from "@/components/ui/SmartLink";
import { personal, SITE } from "@/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line print:hidden">
      <Container
        width="full"
        className="flex flex-col gap-3 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between"
      >
        <p>
          <span className="text-gb-green">{personal.handle}</span>
          <span className="text-muted">:~$ </span>
          echo &quot;© {year} {personal.name}&quot;
        </p>
        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          {personal.links.map((link) => (
            <li key={link.href}>
              <SmartLink href={link.href} external className="link-inline">
                {link.label.toLowerCase()}
              </SmartLink>
            </li>
          ))}
          <li>
            <a href={`mailto:${personal.email}`} className="link-inline">
              email
            </a>
          </li>
          <li>
            <SmartLink href={SITE.repo} external className="link-inline">
              source
            </SmartLink>
          </li>
        </ul>
      </Container>
    </footer>
  );
}
