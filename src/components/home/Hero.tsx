import { Link } from "@tanstack/react-router";
import { Star, ArrowRight } from "lucide-react";
import heroImg from "../../assets/hero-gym.jpg";

const chips = [
  { value: "4.9★", label: "Member rating" },
  { value: "2,500+", label: "Members" },
  { value: "15+", label: "Trainers" },
  { value: "12+", label: "Years" },
];

export function Hero() {
  return (
    <section className="relative isolate min-h-dvh overflow-hidden pt-24">
      <img
        src={heroImg}
        alt=""
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-1/2 -z-10 h-96 -translate-y-1/2 opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, #00C2FF, transparent)" }}
      />

      <div className="mx-auto flex max-w-7xl flex-col justify-center px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            <span className="text-foreground">Rated 4.9 by 2,500+ members</span>
          </div>
          <h1 className="font-display text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Build Your <br />
            <span className="text-gradient-primary">Strongest Self.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            A premium fitness experience with world-class equipment, expert trainers, and a
            motivating atmosphere designed to help you win — every single day.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Join Today
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/equipment"
              className="inline-flex items-center gap-2 rounded-full border border-border glass px-6 py-3.5 text-sm font-semibold text-foreground transition-transform hover:scale-105"
            >
              Explore Gym
            </Link>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {chips.map((c) => (
            <div key={c.label} className="rounded-2xl glass p-5">
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{c.label}</dt>
              <dd className="mt-1 font-display text-2xl font-black text-foreground sm:text-3xl">{c.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
