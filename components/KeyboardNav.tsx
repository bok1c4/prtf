"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const chords: Record<string, { target: string; label: string }> = {
  h: { target: "/", label: "home" },
  a: { target: "/#ai", label: "ai workflow" },
  w: { target: "/#work", label: "work" },
  l: { target: "/#homelab", label: "home lab" },
  s: { target: "/#capabilities", label: "skills" },
  e: { target: "/#experience", label: "experience" },
  c: { target: "/#contact", label: "contact" },
  r: { target: "/resume", label: "resume" },
};

function isTyping(target: EventTarget | null) {
  const el = target as HTMLElement | null;
  if (!el) return false;
  const tag = el.tagName;
  return (
    tag === "INPUT" ||
    tag === "TEXTAREA" ||
    tag === "SELECT" ||
    el.isContentEditable
  );
}

/** Vim-flavoured shortcuts: `g` + key jumps to a section, `:` focuses
 *  the shell, `?` opens this help dialog. Ignored while typing. */
export default function KeyboardNav() {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pending = useRef<number | null>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey || event.altKey) return;
      if (isTyping(event.target)) return;
      const dialog = dialogRef.current;

      if (event.key === "Escape" && dialog?.open) {
        dialog.close();
        return;
      }
      if (event.key === "?") {
        event.preventDefault();
        if (dialog?.open) dialog.close();
        else dialog?.showModal();
        return;
      }
      if (event.key === ":") {
        const input = document.getElementById("terminal-input");
        if (input) {
          event.preventDefault();
          input.scrollIntoView({ block: "center" });
          (input as HTMLInputElement).focus();
        } else {
          router.push("/");
        }
        return;
      }
      if (pending.current !== null) {
        window.clearTimeout(pending.current);
        pending.current = null;
        const chord = chords[event.key];
        if (chord) {
          event.preventDefault();
          if (chord.target.startsWith("/#") && window.location.pathname === "/") {
            const el = document.getElementById(chord.target.slice(2));
            el?.scrollIntoView({ block: "start", behavior: "instant" });
            el?.focus({ preventScroll: true });
          } else if (chord.target === "/" && window.location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "instant" });
          } else {
            router.push(chord.target);
          }
        }
        return;
      }
      if (event.key === "g") {
        pending.current = window.setTimeout(() => {
          pending.current = null;
        }, 900);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [router]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="help-title"
      className="m-auto w-[min(92vw,34rem)] rounded-sm border border-line-strong bg-canvas p-0 text-ink backdrop:bg-black/60"
    >
      <div className="statusline">
        <span className="seg-mode">HELP</span>
        <span className="seg-strong">keybindings</span>
        <span className="min-w-0 flex-1 truncate">~/prtf/help.md</span>
      </div>
      <div className="p-5 text-sm">
        <h2 id="help-title" className="font-bold text-gb-yellow">
          Keyboard
        </h2>
        <dl className="mt-3 grid grid-cols-[6rem_1fr] gap-x-4 gap-y-1.5">
          {Object.entries(chords).map(([key, chord]) => (
            <div key={key} className="contents">
              <dt className="text-gb-green">g {key}</dt>
              <dd className="text-ink-2">{chord.label}</dd>
            </div>
          ))}
          <dt className="text-gb-green">:</dt>
          <dd className="text-ink-2">focus the shell</dd>
          <dt className="text-gb-green">?</dt>
          <dd className="text-ink-2">toggle this help</dd>
          <dt className="text-gb-green">Esc</dt>
          <dd className="text-ink-2">close</dd>
        </dl>
        <p className="mt-4 text-xs text-muted">
          Shortcuts are ignored while typing in a field.
        </p>
        <form method="dialog" className="mt-4">
          <button
            type="submit"
            className="rounded-sm border border-line-strong px-3 py-1 text-sm text-ink hover:border-accent hover:text-accent"
          >
            close
          </button>
        </form>
      </div>
    </dialog>
  );
}
