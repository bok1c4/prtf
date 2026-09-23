import ButtonLink from "@/components/ui/ButtonLink";
import { resume } from "@/data";

export default function ResumeButton({
  size = "md",
}: {
  size?: "md" | "sm";
}) {
  return (
    <>
      <ButtonLink href={resume.url} download variant="secondary" size={size} keyHint="d">
        {resume.label.toLowerCase()}
      </ButtonLink>
      <ButtonLink href="/resume" variant="ghost" size={size} keyHint="r">
        resume
      </ButtonLink>
    </>
  );
}
