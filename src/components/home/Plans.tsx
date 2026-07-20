import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Section } from "../Section";
import { PLANS } from "../../data/site";
import { cn } from "../../lib/utils";

export function Plans() {
  return (
    <Section
      eyebrow="Membership"
      title="Choose your plan"
      subtitle="Simple pricing, no hidden fees. Cancel anytime with 30 days notice."
      centered
    >
      <div className="grid gap-6 md:grid-cols-3">
        {PLANS.map((p) => (
          <div
            key={p.name}
            className={cn(
              "relative flex flex-col rounded-3xl border p-8 transition-all hover:-translate-y-1",
              p.highlighted
                ? "border-primary/50 bg-card shadow-glow"
                : "border-border bg-card hover:border-primary/40",
            )}
          >
            {p.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                Most popular
              </span>
            )}
            <h3 className="font-display text-2xl font-bold">{p.name}</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-display text-5xl font-black">{p.price}</span>
              <span className="text-sm text-muted-foreground">{p.period}</span>
            </div>
            <ul className="mt-8 flex-1 space-y-3 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <Check className="h-5 w-5 shrink-0 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className={cn(
                "mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-105",
                p.highlighted
                  ? "bg-gradient-primary text-primary-foreground shadow-glow"
                  : "border border-border text-foreground hover:border-primary/60",
              )}
            >
              {p.cta}
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
}
