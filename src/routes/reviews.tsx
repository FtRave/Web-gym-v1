import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import { TESTIMONIALS } from "../data/site";
import { Star } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Iron Pulse Fitness" },
      { name: "description", content: "Read authentic reviews from Iron Pulse members transforming their fitness and lives." },
      { property: "og:title", content: "Member Reviews — Iron Pulse" },
      { property: "og:description", content: "Rated 4.9 by 2,500+ members." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: Reviews,
});

function Reviews() {
  return (
    <Section
      className="pt-32"
      eyebrow="Members"
      title="Reviews from our community"
      subtitle="Rated 4.9 across 2,500+ members. Here's what a few of them have to say."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="rounded-3xl border border-border bg-card p-6">
            <div className="flex items-center gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-4 text-sm text-foreground/90">"{t.text}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-sm font-black text-primary-foreground">
                {t.initials}
              </div>
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
