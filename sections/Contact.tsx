import Pane from "@/components/ui/Pane";
import SectionHeader from "@/components/ui/SectionHeader";
import SmartLink from "@/components/ui/SmartLink";
import ResumeButton from "@/components/ResumeButton";
import { personal } from "@/data";

export default function Contact() {
  return (
    <Pane id="contact" title="~/contact.md" labelledBy="contact-title">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div>
          <SectionHeader
            id="contact-title"
            command="cat contact.md"
            title="Open to interesting projects and opportunities"
            lede="Backend-heavy full-stack roles and contract work, especially data and integration systems. Email is the fastest way to reach me."
            className="mb-4"
          />
          <a
            href={`mailto:${personal.email}`}
            className="link-inline text-lg font-bold break-all sm:text-xl"
          >
            {personal.email}
          </a>
        </div>
        <div className="lg:pt-12">
          <ul className="space-y-1.5 text-[14px]">
            {personal.links.map((link, index) => (
              <li key={link.href}>
                <span aria-hidden="true" className="text-muted">
                  [{index + 1}]{" "}
                </span>
                <SmartLink href={link.href} external className="link-inline">
                  {link.href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                </SmartLink>
              </li>
            ))}
            <li>
              <span aria-hidden="true" className="text-muted">
                [{personal.links.length + 1}]{" "}
              </span>
              <span className="text-ink-2">{personal.location}</span>
            </li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            <ResumeButton size="sm" />
          </div>
        </div>
      </div>
    </Pane>
  );
}
