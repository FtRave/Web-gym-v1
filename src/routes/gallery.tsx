import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "../components/home/Gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Iron Pulse Fitness" },
      { name: "description", content: "A visual tour of the strength zone, cardio deck, functional turf, yoga studio and more." },
      { property: "og:title", content: "Inside the gym — Iron Pulse" },
      { property: "og:description", content: "Take a visual tour of every zone in the facility." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: () => (
    <div className="pt-24">
      <Gallery />
    </div>
  ),
});
