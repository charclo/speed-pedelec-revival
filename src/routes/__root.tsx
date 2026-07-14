import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow">Error 404</div>
        <h1 className="mt-3 font-display text-5xl font-medium tracking-tight">Nothing to resurrect here.</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          This page has been parted out. Try the workshop from the home page.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex items-center rounded-full bg-foreground px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-foreground/90"
        >
          Back home
        </a>
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
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow">Something snapped</div>
        <h1 className="mt-3 font-display text-3xl font-medium tracking-tight">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Try again, or head back to the workshop.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-foreground/90"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-input px-5 py-2 text-sm font-medium hover:bg-muted">
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
      { title: "Resurrect — Aftermarket parts for speed pedelecs" },
      {
        name: "description",
        content:
          "Resurrect builds open-source aftermarket parts to bring dead speed pedelecs back to life. Starting with Klever, expanding to Stromer.",
      },
      { name: "author", content: "Resurrect" },
      { property: "og:site_name", content: "Resurrect" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Resurrect — Aftermarket parts for speed pedelecs" },
      {
        property: "og:description",
        content:
          "Open-source aftermarket parts and repairs for orphaned Klever and Stromer speed pedelecs.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Resurrect",
          description: "Aftermarket parts for speed pedelecs.",
          areaServed: "EU",
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
      <Outlet />
    </QueryClientProvider>
  );
}
