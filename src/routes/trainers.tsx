import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "../components/Section";
import { TRAINERS } from "../data/site";
import { ArrowRight, Award } from "lucide-react";

export const Route = createFileRoute("/trainers")({
  head: () => ({
    meta: [
      { title: "Trainers — Iron Pulse Fitness" },
      { name: "description", content: "Meet our 15+ certified coaches specializing in strength, hypertrophy, CrossFit, yoga, mobility and nutrition." },
      { property: "og:title", content: "Meet Our Coaches — Iron Pulse" },
      { property: "og:description", content: "NASM, ACE, NSCA and ISSA-certified trainers with 5+ years experience." },
      { property: "og:url", content: "/trainers" },
    ],
    links: [{ rel: "canonical", href: "/trainers" }],
  }),
  component: TrainersPage,
});

function TrainersPage() {
  return (
    <Section
      className="pt-32"
      eyebrow="Team"
      title="Coaches who care about your progress"
      subtitle="Every trainer at Iron Pulse holds nationally-recognized certifications and re-credentials annually."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TRAINERS.map((t) => (
          <article key={t.name} className="rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
            <div className="flex items-center gap-4">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-primary font-display text-xl font-black text-primary-foreground">
                {t.initials}
              </div>
              <div className="min-w-0">
                <h2 className="truncate font-display text-lg font-bold">{t.name}</h2>
                <div className="text-sm text-primary">{t.role}</div>
                <div className="text-xs text-muted-foreground">{t.experience} experience</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{t.bio}</p>
            <div className="mt-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Specialization</div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {t.specialization.map((s) => (
                  <span key={s} className="rounded-full border border-border px-2 py-0.5 text-[11px]">{s}</span>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Certifications</div>
              <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                {t.certifications.map((c) => (
                  <li key={c} className="flex items-center gap-2"><Award className="h-3.5 w-3.5 text-primary" /> {c}</li>
                ))}
              </ul>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Book Session <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
