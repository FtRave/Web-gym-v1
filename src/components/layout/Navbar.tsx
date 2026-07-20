import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Dumbbell } from "lucide-react";
import { NAV_LINKS } from "../../data/site";
import { cn } from "../../lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "glass border-b border-border"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-foreground" aria-label="Iron Pulse Fitness home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
            <Dumbbell className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-black tracking-tight">
            Iron Pulse
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => {
            const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            Join Now
          </Link>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-full glass lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border lg:hidden animate-in fade-in slide-in-from-top-2">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((l) => {
              const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-base font-medium",
                      active ? "bg-secondary text-primary" : "text-foreground hover:bg-secondary",
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link
                to="/contact"
                className="block rounded-full bg-gradient-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Join Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
