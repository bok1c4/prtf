import ButtonLink from "@/components/ui/ButtonLink";
import { resume } from "@/data";

export default function ResumeButton({
  size = "md",
}: {
  size?: "md" | "sm";
}) {
  return (
    <>
      <ButtonLink href="/resume" variant="secondary" size={size} keyHint="r">
        resume
      </ButtonLink>
      <ButtonLink href={resume.url} download variant="ghost" size={size}>
        download pdf
      </ButtonLink>
    </>
  );
}
