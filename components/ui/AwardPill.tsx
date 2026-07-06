"use client";

interface AwardPillProps {
  icon: string;
  title: string;
  subtitle: string;
}

export function AwardPill({ icon, title, subtitle }: AwardPillProps) {
  return (
    <div className="flex items-start gap-3 bg-white border border-[var(--border)] rounded-xl p-4 transition-all hover:border-sage-mid">
      <span className="text-xl shrink-0 mt-0.5">{icon}</span>
      <div>
        <div className="text-[14px] font-medium text-ink">{title}</div>
        <div className="font-mono text-[10px] uppercase tracking-wider text-ink-muted mt-0.5">
          {subtitle}
        </div>
      </div>
    </div>
  );
}
