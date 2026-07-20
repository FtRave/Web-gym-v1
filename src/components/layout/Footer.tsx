import { Link } from "@tanstack/react-router";
import { Dumbbell, Facebook, Instagram, Youtube, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { CONTACT } from "../../data/site";

const SOCIALS = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: MessageCircle, label: "WhatsApp", href: CONTACT.whatsapp },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "X (Twitter)", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-24">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                <Dumbbell className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-black">Iron Pulse</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Premium fitness experience with world-class equipment, expert trainers, and a motivating atmosphere.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/equipment" className="hover:text-primary">Equipment</Link></li>
              <li><Link to="/trainers" className="hover:text-primary">Trainers</Link></li>
              <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider">Programs</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Weight Loss</li>
              <li>Muscle Gain</li>
              <li>Strength Training</li>
              <li>CrossFit</li>
              <li>Yoga & Mobility</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider">Get In Touch</h3>
            <address className="mt-4 space-y-2 text-sm not-italic text-muted-foreground">
              <div>{CONTACT.address}</div>
              <div><a href={`tel:${CONTACT.phone}`} className="hover:text-primary">{CONTACT.phone}</a></div>
              <div><a href={`mailto:${CONTACT.email}`} className="hover:text-primary">{CONTACT.email}</a></div>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">© 2026 Iron Pulse Fitness. All rights reserved.</p>
          <ul className="flex items-center gap-2">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:scale-110 hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
