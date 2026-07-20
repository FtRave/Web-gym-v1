import { Link } from "@tanstack/react-router";
import { Section } from "../Section";
import { TRAINERS } from "../../data/site";
import { ArrowRight } from "lucide-react";

export function TrainersPreview() {
  return (
    <Section
      eyebrow="Team"
      title="Meet Your Coaches"
      subtitle="A world-class team of certified professionals ready to build a program around you."
      centered
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TRAINERS.slice(0, 6).map((t) => (
          <article key={t.name} className="group rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
            <div className="flex items-center gap-4">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-primary font-display text-xl font-black text-primary-foreground">
                {t.initials}
              </div>
              <div className="min-w-0">
                <h3 className="truncate font-display text-lg font-bold">{t.name}</h3>
                <div className="text-sm text-primary">{t.role}</div>
                <div className="text-xs text-muted-foreground">{t.experience} experience</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{t.bio}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {t.specialization.map((s) => (
                <span key={s} className="rounded-full border border-border px-2 py-0.5 text-[11px]">
                  {s}
                </span>
              ))}
            </div>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-all"
            >
              Book Session <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
