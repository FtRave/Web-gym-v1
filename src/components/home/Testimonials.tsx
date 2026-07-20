import { Section } from "../Section";
import { TESTIMONIALS } from "../../data/site";
import { Star } from "lucide-react";
import {
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from "../ui/carousel";

export function Testimonials() {
  return (
    <Section
      id="reviews"
      eyebrow="Members"
      title="What our community says"
      subtitle="Real reviews from real members transforming their lives at Iron Pulse."
      centered
    >
      <Carousel opts={{ align: "start", loop: true }} className="mx-auto max-w-6xl">
        <CarouselContent>
          {TESTIMONIALS.map((t) => (
            <CarouselItem key={t.name} className="md:basis-1/2 lg:basis-1/3">
              <div className="h-full rounded-3xl border border-border bg-card p-6">
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </Section>
  );
}
