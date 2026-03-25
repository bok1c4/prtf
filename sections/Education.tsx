import { education } from "@/data";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 border-t border-neutral-800">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-12">Education</h2>
        <div>
          <h3 className="font-semibold mb-1">{education.degree}</h3>
          <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
            {education.status}
          </p>
        </div>
      </div>
    </section>
  );
}
