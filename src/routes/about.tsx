import { createFileRoute } from "@tanstack/react-router";
import { WhyChoose } from "../components/home/WhyChoose";
import { Stats } from "../components/home/Stats";
import { Facilities } from "../components/home/Facilities";
import { CtaBanner } from "../components/home/CtaBanner";
import { Section } from "../components/Section";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Iron Pulse Fitness" },
      { name: "description", content: "12+ years building a premium gym experience. Meet the vision, values, and facility behind Iron Pulse Fitness." },
      { property: "og:title", content: "About — Iron Pulse Fitness" },
      { property: "og:description", content: "Premium gym with certified trainers, elite equipment and a community that pushes you forward." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <Section
        className="pt-32"
        eyebrow="About us"
        title="A premium gym built by lifters, for lifters."
        subtitle="Since 2014, Iron Pulse Fitness has become the training home for 2,500+ members — from first-time gym-goers to competing athletes. We obsess over equipment quality, coaching credentials, and the daily details that make a great workout possible."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: "Our Mission", b: "Make world-class training accessible in a space that respects your time, effort and progress." },
            { t: "Our Standard", b: "Commercial-grade equipment, certified coaches, spotless facilities. Every day, no exceptions." },
            { t: "Our Community", b: "A judgement-free, high-energy floor where beginners and pros train side by side." },
          ].map((c) => (
            <div key={c.t} className="rounded-3xl border border-border bg-card p-6">
              <h3 className="font-display text-xl font-bold">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.b}</p>
            </div>
          ))}
        </div>
      </Section>
      <Stats />
      <WhyChoose />
      <Facilities />
      <CtaBanner />
    </>
  );
}
