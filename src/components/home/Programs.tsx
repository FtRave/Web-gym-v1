import { Section } from "../Section";
import { PROGRAMS } from "../../data/site";

export function Programs() {
  return (
    <Section
      eyebrow="Programs"
      title="Workout programs for every goal"
      subtitle="Structured programming written by our head coaches — pick the goal, we handle the plan."
      centered
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PROGRAMS.map((p, i) => (
          <div
            key={p.title}
            className="rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="font-display text-xs font-bold uppercase tracking-wider text-primary">
              Program {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-2 font-display text-lg font-bold">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
