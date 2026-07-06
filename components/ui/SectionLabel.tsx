"use client";

interface SectionLabelProps {
  text: string;
}

export function SectionLabel({ text }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-8 h-[1px] bg-sage" />
      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-sage">
        {text}
      </span>
    </div>
  );
}
