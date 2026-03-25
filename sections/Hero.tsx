import { personal } from "@/data";
import ResumeButton from "@/components/ResumeButton";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl">
        <p className="text-sm font-mono text-neutral-500 mb-4 tracking-widest uppercase">
          {personal.location}
        </p>
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          {personal.name}
        </h1>
        <p className="text-xl text-neutral-400 mb-2">{personal.title}</p>
        <p className="text-neutral-500 mb-8 leading-relaxed">{personal.bio}</p>
        <div className="flex gap-4 flex-wrap">
          {personal.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium border border-neutral-700 px-4 py-2 rounded-md hover:border-neutral-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <ResumeButton />
          <a
            href={`mailto:${personal.email}`}
            className="text-sm font-medium bg-white text-black px-4 py-2 rounded-md hover:bg-neutral-200 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
