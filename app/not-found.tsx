import Container from "@/components/ui/Container";
import ButtonLink from "@/components/ui/ButtonLink";
import Prompt from "@/components/ui/Prompt";

export default function NotFound() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="pane max-w-[60ch]">
        <span className="pane-title" aria-hidden="true">
          ┤ 404 ├
        </span>
        <Prompt command="cat this-page.md" />
        <p className="mt-2 text-gb-red">cat: this-page.md: No such file or directory</p>
        <h1 className="mt-4 text-xl font-bold text-gb-yellow">This page does not exist.</h1>
        <p className="mt-2 text-[14px] text-ink-2">The link may be old or mistyped.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <ButtonLink href="/" variant="primary" keyHint="h">
            home
          </ButtonLink>
          <ButtonLink href="/#work" keyHint="w">
            work
          </ButtonLink>
        </div>
      </div>
    </Container>
  );
}
