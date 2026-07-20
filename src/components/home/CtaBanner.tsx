import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card p-10 text-center sm:p-16">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle at 50% 50%, #00C2FF, transparent 60%)" }}
        />
        <h2 className="font-display text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
          Your Fitness Journey <br />
          <span className="text-gradient-primary">Starts Today.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Book a free day pass and experience the full facility. No commitment, no pressure — just training.
        </p>
        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            Join Now <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
