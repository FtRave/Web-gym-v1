import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ScrollProgress } from "../components/layout/ScrollProgress";
import { ScrollToTop } from "../components/layout/ScrollToTop";
import { WhatsAppFab } from "../components/layout/WhatsAppFab";
import { Toaster } from "../components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-black text-gradient-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0D0D0D" },
      { title: "Iron Pulse Fitness — Premium Gym & Personal Training" },
      {
        name: "description",
        content:
          "Iron Pulse Fitness is a premium gym with world-class equipment, certified trainers, and personalized programs. Join 2,500+ members transforming their lives.",
      },
      { name: "author", content: "Iron Pulse Fitness" },
      { property: "og:site_name", content: "Iron Pulse Fitness" },
      { property: "og:title", content: "Iron Pulse Fitness — Premium Gym & Personal Training" },
      {
        property: "og:description",
        content:
          "Iron Pulse Fitness is a premium gym with world-class equipment, certified trainers, and personalized programs. Join 2,500+ members transforming their lives.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Iron Pulse Fitness — Premium Gym & Personal Training" },
      { name: "twitter:description", content: "Iron Pulse Fitness is a premium gym with world-class equipment, certified trainers, and personalized programs. Join 2,500+ members transforming their lives." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/54c8ad75-61ef-4be4-b45d-c0643baac184/id-preview-a4de3edd--ce45d98e-ef53-48d4-b2a8-5f6b4513efe2.lovable.app-1784302573617.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/54c8ad75-61ef-4be4-b45d-c0643baac184/id-preview-a4de3edd--ce45d98e-ef53-48d4-b2a8-5f6b4513efe2.lovable.app-1784302573617.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800;900&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthClub",
          name: "Iron Pulse Fitness",
          description: "Premium gym with world-class equipment and certified trainers.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "204 Ironworks Avenue",
            addressLocality: "Downtown",
            addressRegion: "CA",
            postalCode: "90014",
          },
          telephone: "+1-415-555-0142",
          openingHours: ["Mo-Sa 05:00-23:00", "Su 06:00-20:00"],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "2500",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppFab />
      <Toaster theme="dark" position="bottom-center" />
    </QueryClientProvider>
  );
}
