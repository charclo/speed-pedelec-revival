import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import logoAsset from "@/assets/resurrect-logo.png.asset.json";


function Wordmark({ tone = "ink" }: { tone?: "ink" | "paper" }) {
  const color = tone === "ink" ? "text-foreground" : "text-paper";
  return (
    <Link to="/" className={`flex items-center gap-2 ${color}`}>
      <img
        src={logoAsset.url}
        alt="Resurrect"
        width={140}
        height={40}
        className="h-9 w-auto"
      />
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
        <Link
          to="/contact"
          className="hidden sm:inline-flex items-center rounded-full border border-foreground/80 px-4 py-1.5 text-xs font-medium tracking-wide uppercase hover:bg-foreground hover:text-primary-foreground transition-colors"
        >
          Request a part
        </Link>
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
            <li>Utrecht, Netherlands</li>
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


