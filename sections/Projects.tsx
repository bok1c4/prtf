"use client";

import { useState } from "react";
import { projects } from "@/data";
import DemoTerminal from "@/components/DemoTerminal";

interface DemoState {
  instanceId: string;
  port: number;
}

export default function Projects() {
  const [demoStates, setDemoStates] = useState<Record<string, DemoState | "loading">>({});

  const handleRunDemo = async (repoUrl: string, title: string) => {
    setDemoStates((prev) => ({ ...prev, [title]: "loading" }));
    try {
      const res = await fetch("/api/demo/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ repoUrl }),
      });
      const data = (await res.json()) as { instanceId?: string; port?: number; error?: string };
      if (!res.ok || !data.instanceId || !data.port) {
        throw new Error(data.error ?? "Failed to start demo");
      }
      setDemoStates((prev) => ({
        ...prev,
        [title]: { instanceId: data.instanceId!, port: data.port! },
      }));
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to start demo");
      setDemoStates((prev) => {
        const next = { ...prev };
        delete next[title];
        return next;
      });
    }
  };

  const handleStopDemo = (title: string) => {
    setDemoStates((prev) => {
      const next = { ...prev };
      delete next[title];
      return next;
    });
  };

  return (
    <section id="projects" className="py-24 px-6 border-t border-neutral-800">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-12">Projects</h2>
        <div className="grid gap-6">
          {projects.map((project) => {
            const demoState = demoStates[project.title];
            const isLoading = demoState === "loading";
            const isRunning = demoState && demoState !== "loading";

            return (
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
                    {project.demo && !isRunning && (
                      <button
                        onClick={() => handleRunDemo(project.demo!.repoUrl, project.title)}
                        disabled={isLoading}
                        className="text-xs text-neutral-400 hover:text-white transition-colors disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                      >
                        {isLoading ? "Starting..." : "Run ▶"}
                      </button>
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
                {isRunning && (
                  <DemoTerminal
                    instanceId={(demoState as DemoState).instanceId}
                    port={(demoState as DemoState).port}
                    onStop={() => handleStopDemo(project.title)}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
