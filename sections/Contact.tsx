import { personal } from "@/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-neutral-800">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="text-neutral-400 mb-8">
          Open to interesting projects and opportunities.
        </p>
        <div className="flex flex-col gap-3">
          <a
            href={`mailto:${personal.email}`}
            className="text-sm text-neutral-300 hover:text-white transition-colors"
          >
            {personal.email}
          </a>
          {personal.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
