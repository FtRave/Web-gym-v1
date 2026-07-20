import { useState } from "react";
import { Section } from "../Section";
import { GALLERY } from "../../data/site";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { X } from "lucide-react";

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Section
      id="gallery"
      eyebrow="Gallery"
      title="Inside the gym"
      subtitle="A quick look at our spaces, zones and community."
      centered
    >
      <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
        {GALLERY.map((g, i) => (
          <button
            key={g.label}
            onClick={() => setOpen(i)}
            className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card transition-transform hover:scale-[1.02]"
            style={{ aspectRatio: g.tall ? "3 / 4" : "4 / 3" }}
            aria-label={`Open ${g.label}`}
          >
            <img
              src={g.src}
              alt={g.label}
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 grid place-items-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="rounded-full glass px-4 py-2 text-xs font-semibold">View</span>
            </div>
            <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium backdrop-blur">
              {g.label}
            </span>
          </button>
        ))}
      </div>

      <Dialog open={open !== null} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-3xl border-border bg-card p-0 overflow-hidden">
          <DialogTitle className="sr-only">{open !== null ? GALLERY[open].label : "Gallery image"}</DialogTitle>
          {open !== null && (
            <div className="relative">
              <img
                src={GALLERY[open].src}
                alt={GALLERY[open].label}
                width={1024}
                height={1024}
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <span className="font-display text-2xl font-bold">{GALLERY[open].label}</span>
              </div>
            </div>
          )}
          <button
            onClick={() => setOpen(null)}
            aria-label="Close"
            className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full glass"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogContent>
      </Dialog>
    </Section>
  );
}
