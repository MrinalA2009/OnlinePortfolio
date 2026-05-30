type Props = {
  hint: string;
  label: string;
};

export default function ImagePlaceholder({ hint, label }: Props) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
        style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          style={{ color: "var(--text-3)" }}
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      </div>
      <p className="text-sm font-medium mb-1" style={{ color: "var(--text-2)" }}>
        {label}
      </p>
      <p className="body-sm max-w-xs select-text">
        Add image: <code className="text-xs px-1.5 py-0.5 rounded" style={{ background: "var(--surface)" }}>{hint}</code>
      </p>
    </div>
  );
}
