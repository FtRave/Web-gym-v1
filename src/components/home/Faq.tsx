import { Section } from "../Section";
import { FAQS } from "../../data/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export function Faq() {
  return (
    <Section
      eyebrow="FAQ"
      title="Questions, answered"
      subtitle="Everything you might want to know before joining Iron Pulse."
      centered
    >
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="rounded-3xl border border-border bg-card px-6">
          {FAQS.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
