import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Section } from "../components/Section";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { CONTACT } from "../data/site";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Iron Pulse Fitness" },
      { name: "description", content: "Visit Iron Pulse Fitness in Downtown or send us a message. Book your free day pass today." },
      { property: "og:title", content: "Contact — Iron Pulse Fitness" },
      { property: "og:description", content: "Get in touch or book your complimentary day pass." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sending, setSending] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent! We'll get back to you within 24 hours.");
    }, 700);
  };

  return (
    <Section
      className="pt-32"
      eyebrow="Contact"
      title="Come train with us"
      subtitle="Drop by the gym, call, or send a message — we'll help you get started."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-3xl border border-border bg-card p-6">
            <h2 className="font-display text-xl font-bold">Visit the studio</h2>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div><div className="font-semibold">Address</div><div className="text-muted-foreground">{CONTACT.address}</div></div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div><div className="font-semibold">Phone</div><a href={`tel:${CONTACT.phone}`} className="text-muted-foreground hover:text-primary">{CONTACT.phone}</a></div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div><div className="font-semibold">Email</div><a href={`mailto:${CONTACT.email}`} className="text-muted-foreground hover:text-primary">{CONTACT.email}</a></div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <div className="font-semibold">Opening hours</div>
                  <div className="text-muted-foreground">{CONTACT.hoursWeek}</div>
                  <div className="text-muted-foreground">{CONTACT.hoursSun}</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-card">
            <div
              className="grid aspect-[4/3] w-full place-items-center"
              style={{ background: "linear-gradient(135deg, oklch(0.25 0.06 220), oklch(0.15 0.03 220))" }}
              aria-label="Map placeholder"
            >
              <div className="text-center">
                <MapPin className="mx-auto h-10 w-10 text-primary" />
                <div className="mt-2 text-sm font-semibold">204 Ironworks Avenue</div>
                <div className="text-xs text-muted-foreground">Interactive map coming soon</div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-6 sm:p-8">
          <h2 className="font-display text-xl font-bold">Send an inquiry</h2>
          <p className="mt-2 text-sm text-muted-foreground">We reply within 24 hours.</p>
          <div className="mt-6 grid gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required autoComplete="name" className="mt-2" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required autoComplete="email" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" autoComplete="tel" className="mt-2" />
              </div>
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required rows={5} className="mt-2" />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105 disabled:opacity-60"
            >
              {sending ? "Sending..." : (<>Send Inquiry <Send className="h-4 w-4" /></>)}
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}
