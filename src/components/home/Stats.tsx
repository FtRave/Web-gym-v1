import { STATS } from "../../data/site";

export function Stats() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-14 sm:grid-cols-4 sm:px-6 lg:px-8">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl font-black text-gradient-primary sm:text-5xl">
              {s.value}
            </div>
            <div className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-sm">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
