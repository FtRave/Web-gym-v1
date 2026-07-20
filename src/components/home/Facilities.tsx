import { Section } from "../Section";
import { FACILITIES } from "../../data/site";

export function Facilities() {
  return (
    <Section
      eyebrow="Facilities"
      title="Everything you need under one roof"
      subtitle="From steam rooms to a full protein bar — designed for a complete training experience."
      centered
    >
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {FACILITIES.map(({ icon: Icon, label }) => (
          <li
            key={label}
            className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-5 text-center transition-all hover:-translate-y-1 hover:border-primary/40"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-sm font-medium">{label}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
