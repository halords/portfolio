"use client";

interface SkillItemProps {
  name: string;
  variant?: "sage" | "gold";
}

export function SkillItem({ name, variant = "sage" }: SkillItemProps) {
  const dotColor = variant === "sage" ? "bg-sage" : "bg-gold";

  return (
    <div className="flex items-center gap-2.5">
      <div className={`w-1.5 h-1.5 rounded-full ${dotColor} shrink-0`} />
      <span className="text-[15px] text-ink-soft">{name}</span>
    </div>
  );
}
