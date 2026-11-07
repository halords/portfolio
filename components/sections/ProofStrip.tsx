export function ProofStrip() {
  const stats = [
    {
      value: "7",
      label: "PGLU systems in production — 6 internal · 1 public",
      accent: false,
    },
    {
      value: "8 yrs",
      label: "Inside government operations — records, compliance, reporting",
      accent: false,
    },
    {
      value: "2022",
      label: "Ten Outstanding Provincial Public Servants",
      accent: true,
    },
    {
      value: "2",
      label: "Google professional certificates — 2026, verifiable online",
      accent: false,
    },
  ];

  return (
    <section
      aria-label="Track record"
      className="border-y border-hairline bg-bone"
    >
      <div className="section-container grid grid-cols-2 gap-x-6 gap-y-8 py-9 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.value}>
            <p
              className={`font-display text-[40px] leading-none tabular ${
                stat.accent ? "text-accent" : "text-charcoal"
              }`}
            >
              {stat.value}
            </p>
            <p className="mt-2 font-mono text-[11px] uppercase leading-relaxed tracking-[0.16em] text-faded">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}