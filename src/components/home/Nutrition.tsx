import { Section } from "../Section";
import { Apple, Beef, Sparkles } from "lucide-react";

const items = [
  { icon: Beef, title: "Protein guidance", body: "1.6–2.2 g / kg of bodyweight daily for muscle retention and growth." },
  { icon: Apple, title: "Sample meal plans", body: "Cutting, maintenance, and lean-bulk templates built by registered dietitians." },
  { icon: Sparkles, title: "Supplement basics", body: "Only what works: whey, creatine, vitamin D, omega-3. No hype, ever." },
];

export function Nutrition() {
  return (
    <Section
      eyebrow="Nutrition"
      title="Fuel that matches your training"
      subtitle="Training is only half the equation. Our in-house nutritionists help you eat like an athlete."
      centered
    >
      <div className="grid gap-5 md:grid-cols-3">
        {items.map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-3xl border border-border bg-card p-6">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
