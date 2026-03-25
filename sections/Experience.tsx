import { experience } from "@/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-neutral-800">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-12">Experience</h2>
        <div className="grid gap-10">
          {experience.map((entry) => (
            <div key={entry.company}>
              <div className="flex items-baseline justify-between gap-4 mb-1">
                <h3 className="font-semibold">{entry.role}</h3>
                <span className="text-sm font-mono text-neutral-500 shrink-0">
                  {entry.period}
                </span>
              </div>
              <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-3">
                {entry.company}
              </p>
              <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
                {entry.description}
              </p>
              <ul className="grid gap-1.5">
                {entry.highlights.map((point) => (
                  <li key={point} className="text-sm text-neutral-500 flex gap-2">
                    <span className="text-neutral-700 shrink-0">—</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
