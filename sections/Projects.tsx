import { projects } from "@/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-neutral-800">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-12">Projects</h2>
        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="p-6 border border-neutral-800 rounded-lg hover:border-neutral-600 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="font-semibold">{project.title}</h3>
                <div className="flex gap-3 shrink-0">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-neutral-400 hover:text-white transition-colors"
                    >
                      Live ↗
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-neutral-400 hover:text-white transition-colors"
                    >
                      Repo ↗
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 bg-neutral-800 rounded text-neutral-400 font-mono"
                  >
                    {tag}
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
