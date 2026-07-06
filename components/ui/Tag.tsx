"use client";

interface TagProps {
  text: string;
  variant?: "sage" | "gold";
}

export function Tag({ text, variant = "sage" }: TagProps) {
  const styles = {
    sage: "bg-sage-light text-sage border-sage/10",
    gold: "bg-gold-light text-gold border-gold/10",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-wide border ${styles[variant]}`}
    >
      {text}
    </span>
  );
}
