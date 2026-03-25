import { skills } from "@/data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-neutral-800">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-12">Skills</h2>
        <div className="grid gap-8">
          {skills.map((skill) => (
            <div key={skill.category}>
              <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-3">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1 bg-neutral-800 rounded-full text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
