interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  className?: string;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  className,
}: SectionHeadingProps) {
  return (
    <div className={`${className ?? ""}`}>
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[13px] font-medium text-accent tabular">
          {index}
        </span>
        <span className="kicker text-faded">{eyebrow}</span>
      </div>
      <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-[-0.01em] text-charcoal sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}
