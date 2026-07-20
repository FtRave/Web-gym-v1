import { Section } from "../Section";
import { WHY_CHOOSE } from "../../data/site";

export function WhyChoose() {
  return (
    <Section
      id="about"
      eyebrow="Why us"
      title="Why Choose Iron Pulse Fitness?"
      subtitle="Every detail engineered so you can focus on one thing — showing up and getting stronger."
      centered
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_CHOOSE.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="group rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
