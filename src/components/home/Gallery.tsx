import { useState } from "react";
import { Section } from "../Section";
import { GALLERY } from "../../data/site";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { X } from "lucide-react";

function tile(hue: number, label: string) {
  return `linear-gradient(135deg, oklch(0.25 0.08 ${hue}) 0%, oklch(0.15 0.04 ${hue}) 100%)`;
}

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
            className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl border border-border transition-transform hover:scale-[1.02]"
            style={{
              aspectRatio: g.tall ? "3 / 4" : "4 / 3",
              background: tile(g.hue, g.label),
            }}
            aria-label={`Open ${g.label}`}
          >
            <div className="absolute inset-0 grid place-items-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="rounded-full glass px-4 py-2 text-xs font-semibold">View</span>
            </div>
            <span className="absolute bottom-3 left-3 rounded-full bg-black/50 px-3 py-1 text-xs font-medium backdrop-blur">
              {g.label}
            </span>
          </button>
        ))}
      </div>

      <Dialog open={open !== null} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-3xl border-border bg-card p-0">
          <DialogTitle className="sr-only">{open !== null ? GALLERY[open].label : "Gallery image"}</DialogTitle>
          {open !== null && (
            <div
              className="aspect-video w-full rounded-lg"
              style={{ background: tile(GALLERY[open].hue, GALLERY[open].label) }}
            >
              <div className="flex h-full items-end p-6">
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
