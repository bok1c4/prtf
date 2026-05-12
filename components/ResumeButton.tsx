import { resume } from "@/data";

export default function ResumeButton() {
  return (
    <div className="inline-flex items-stretch border border-neutral-700 rounded-md overflow-hidden">
      <a
        href="/resume"
        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium hover:bg-neutral-900 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        View resume
      </a>
      <a
        href={resume.url}
        download
        aria-label="Download resume PDF"
        className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium border-l border-neutral-700 hover:bg-neutral-900 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        PDF
      </a>
    </div>
  );
}
