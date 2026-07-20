import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import { EQUIPMENT, EQUIPMENT_CATEGORIES, type EquipmentCategory, type Equipment } from "../data/site";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog";
import { CheckCircle2 } from "lucide-react";
import { cn } from "../lib/utils";

export const Route = createFileRoute("/equipment")({
  head: () => ({
    meta: [
      { title: "Equipment — Iron Pulse Fitness" },
      { name: "description", content: "Explore 100+ premium machines: cardio, chest, back, shoulder, arms, legs, functional and free weights from Technogym, Life Fitness, Hammer Strength and Rogue." },
      { property: "og:title", content: "Premium Gym Equipment — Iron Pulse" },
      { property: "og:description", content: "100+ commercial-grade machines across 8 categories." },
      { property: "og:url", content: "/equipment" },
    ],
    links: [{ rel: "canonical", href: "/equipment" }],
  }),
  component: EquipmentPage,
});

type Cat = "All" | EquipmentCategory;

function EquipmentPage() {
  const [cat, setCat] = useState<Cat>("All");
  const [active, setActive] = useState<Equipment | null>(null);
  const filtered = useMemo(
    () => (cat === "All" ? EQUIPMENT : EQUIPMENT.filter((e) => e.category === cat)),
    [cat],
  );
  const cats: Cat[] = ["All", ...EQUIPMENT_CATEGORIES];

  return (
    <Section
      className="pt-32"
      eyebrow="Equipment"
      title="Premium Equipment Collection"
      subtitle="Filter by category and tap any card for full details, target muscles and safety tips."
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-all",
              cat === c
                ? "border-primary bg-gradient-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:text-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((e) => (
          <button
            key={e.name}
            onClick={() => setActive(e)}
            className="group flex flex-col rounded-3xl border border-border bg-card p-6 text-left transition-all hover:-translate-y-1 hover:border-primary/40"
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
            <p className="mt-4 text-sm text-muted-foreground line-clamp-2">{e.description}</p>
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
          </button>
        ))}
      </div>

      <Dialog open={!!active} onOpenChange={(v) => !v && setActive(null)}>
        <DialogContent className="max-w-lg border-border bg-card">
          {active && (
            <>
              <DialogHeader>
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">{active.category}</div>
                <DialogTitle className="font-display text-2xl">{active.name}</DialogTitle>
                <DialogDescription>by {active.brand} · {active.difficulty}</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 text-sm">
                <p className="text-foreground/90">{active.description}</p>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Usage</div>
                  <div className="mt-1">{active.usage}</div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Target muscles</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {active.targetMuscles.map((m) => (
                      <span key={m} className="rounded-full border border-border px-2 py-0.5 text-xs">{m}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Recommended for</div>
                  <div className="mt-1">{active.recommendedFor}</div>
                </div>
                <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary">Safety tips</div>
                  <div className="mt-1 text-foreground/90">{active.safetyTips}</div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
