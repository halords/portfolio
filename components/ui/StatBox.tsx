"use client";

interface StatBoxProps {
  value: string;
  label: string;
}

export function StatBox({ value, label }: StatBoxProps) {
  return (
    <div className="bg-surface rounded-xl p-4 text-center">
      <div className="font-serif text-2xl text-ink">{value}</div>
      <div className="font-mono text-[10px] uppercase tracking-wider text-ink-muted mt-1">
        {label}
      </div>
    </div>
  );
}
