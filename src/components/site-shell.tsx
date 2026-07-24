import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import type { ReactNode } from "react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


function Wordmark({ tone = "ink" }: { tone?: "ink" | "paper" }) {
  const color = tone === "ink" ? "text-foreground" : "text-paper";
  return (
    <Link to="/" className={`flex items-center gap-3 ${color}`} aria-label="Resurrect — home">
      <svg
        viewBox="0 0 40 40"
        width="32"
        height="32"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M13 28 V13 h8 a5 5 0 0 1 0 10 h-4 l7 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <path
          d="M27 11 c-3 1 -5 3 -5 6 c3 0 5 -2 5 -6 z"
          className="fill-current text-leaf"
        />

      </svg>
      <span className="font-display text-lg tracking-tight lowercase">resurrect</span>
    </Link>
  );
}


const nav = [
  { to: "/", label: "Home" },
  { to: "/parts", label: "Parts" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-border/60 bg-background/80 backdrop-blur sticky top-0 z-40">
      <div className="container-x flex h-16 items-center justify-between">
        <Wordmark />
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground font-medium" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center rounded-full border border-foreground/80 px-4 py-1.5 text-xs font-medium tracking-wide uppercase hover:bg-foreground hover:text-primary-foreground transition-colors"
          >
            Request a part
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <button
                type="button"
                className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/60 bg-background hover:bg-muted transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(85vw,20rem)]">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-2">
                {nav.map((n) => (
                  <SheetTrigger asChild key={n.to}>
                    <Link
                      to={n.to}
                      className="flex items-center rounded-lg px-4 py-3 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                      activeProps={{ className: "bg-muted text-foreground" }}
                      activeOptions={{ exact: n.to === "/" }}
                    >
                      {n.label}
                    </Link>
                  </SheetTrigger>
                ))}
                <SheetTrigger asChild>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center justify-center rounded-full border border-foreground/80 px-4 py-2.5 text-sm font-medium tracking-wide uppercase hover:bg-foreground hover:text-primary-foreground transition-colors"
                  >
                    Request a part
                  </Link>
                </SheetTrigger>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-foreground text-paper">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Wordmark tone="paper" />
          <p className="mt-4 max-w-sm text-sm text-paper/70">
            Aftermarket parts and open-source repairs for orphaned speed pedelecs. Built in the workshop, shared with the community.
          </p>
        </div>
        <div>
          <div className="eyebrow text-leaf">Navigate</div>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-paper/80 hover:text-leaf">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="eyebrow text-leaf">Workshop</div>
          <ul className="mt-4 space-y-2 text-sm text-paper/80">
            <li>Gent, Belgium</li>
            <li>
              <a href="mailto:workshop@resurrect.bike" className="hover:text-leaf">
                workshop@resurrect.bike
              </a>
            </li>
            <li>By appointment only</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10">
        <div className="container-x py-6 flex flex-wrap items-center justify-between gap-2 text-xs text-paper/50">
          <span>© {new Date().getFullYear()} Resurrect. All schematics released under CERN-OHL-S.</span>
          <span>After market parts for speed pedelecs</span>
        </div>
      </div>
    </footer>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}


