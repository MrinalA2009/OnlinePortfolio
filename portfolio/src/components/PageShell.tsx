type MaxWidth = "4xl" | "5xl" | "6xl";

const maxWidthClass: Record<MaxWidth, string> = {
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
};

export default function PageShell({
  children,
  maxWidth = "5xl",
  className = "",
}: {
  children: React.ReactNode;
  maxWidth?: MaxWidth;
  className?: string;
}) {
  return (
    <div style={{ background: "var(--bg-base)" }} className={`pt-24 pb-20 ${className}`}>
      <div className={`${maxWidthClass[maxWidth]} mx-auto px-5`}>{children}</div>
    </div>
  );
}
