import { Link } from "@tanstack/react-router";
import { Section } from "../Section";
import { EQUIPMENT } from "../../data/site";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function EquipmentPreview() {
  const featured = EQUIPMENT.slice(0, 6);
  return (
    <Section
      eyebrow="Equipment"
      title="Premium Equipment Collection"
      subtitle="100+ machines across 8 categories from Technogym, Life Fitness, Hammer Strength and Rogue."
      centered
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((e) => (
          <article
            key={e.name}
            className="group flex flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">{e.category}</div>
                <h3 className="mt-1 font-display text-xl font-bold">{e.name}</h3>
                <div className="mt-1 text-xs text-muted-foreground">by {e.brand}</div>
              </div>
              {e.beginnerFriendly && (
                <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-[10px] font-semibold text-primary">
                  <CheckCircle2 className="h-3 w-3" /> Beginner
                </span>
              )}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{e.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {e.targetMuscles.slice(0, 3).map((m) => (
                <span key={m} className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted-foreground">
                  {m}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
              <span className={e.availability === "Available" ? "text-primary" : "text-orange-400"}>
                ● {e.availability}
              </span>
              <span>{e.difficulty}</span>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          to="/equipment"
          className="inline-flex items-center gap-2 rounded-full border border-border glass px-6 py-3 text-sm font-semibold hover:scale-105 transition-transform"
        >
          View full catalogue <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
