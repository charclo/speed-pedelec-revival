import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/site-shell";
import gpsImg from "@/assets/gps-logger.jpg";

export const Route = createFileRoute("/parts/gps-logger")({
  head: () => ({
    meta: [
      { title: "GPS data logger (R-LOG.01) — Resurrect" },
      { name: "description", content: "u-blox GNSS + LTE-M data logger for speed pedelecs. Trip logging, CAN sniff, .fit and .gpx export. Open firmware." },
      { property: "og:title", content: "GPS data logger — Resurrect" },
      { property: "og:description", content: "Trip logging and CAN sniff for speed pedelecs." },
      { property: "og:url", content: "/parts/gps-logger" },
    ],
    links: [{ rel: "canonical", href: "/parts/gps-logger" }],
  }),
  component: GpsLoggerPage,
});

function GpsLoggerPage() {
  return (
    <Page>
      {/* Breadcrumb */}
      <div className="container-x pt-8">
        <Link to="/parts" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">
          ← Catalogue
        </Link>
      </div>

      {/* HERO — big picture */}
      <section className="container-x pt-6 pb-10">
        <div className="eyebrow text-leaf-deep">R-LOG.01 · In stock</div>
        <h1 className="mt-3 font-display text-5xl md:text-7xl font-medium tracking-tight max-w-4xl">
          GPS data logger
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          A pocket-sized logger that reads the bike's CAN bus, records position and
          speed, and hands you plain-text .fit / .gpx files. No vendor cloud, no
          subscription, no lock-in.
        </p>

        <div className="mt-10 rounded-xl overflow-hidden border border-border shadow-[0_40px_80px_-30px_rgba(30,40,35,0.4)]">
          <img
            src={gpsImg}
            alt="Compact GPS data logger PCB with u-blox module"
            width={2000}
            height={1250}
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Price + CTA + Specs */}
      <section className="container-x py-16 grid gap-14 md:grid-cols-12">
        <aside className="md:col-span-4">
          <div className="sticky top-24 rounded-lg border border-border bg-card p-6">
            <div className="eyebrow">Price</div>
            <div className="mt-2 font-display text-4xl">€ 210</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
              incl. LTE-M eSIM, one year
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-foreground/90"
              >
                Order / fit at the workshop
              </Link>
              <a
                href="mailto:workshop@resurrect.bike?subject=R-LOG.01"
                className="inline-flex items-center justify-center rounded-full border border-foreground/40 px-6 py-3 text-sm font-medium hover:border-foreground"
              >
                Ask a question
              </a>
            </div>

            <ul className="mt-6 space-y-2 text-xs text-muted-foreground border-t border-border pt-4">
              <li>· Fitted at the workshop in Gent</li>
              <li>· Ships across the EU</li>
              <li>· Two-year workshop warranty</li>
            </ul>
          </div>
        </aside>

        <div className="md:col-span-8">
          <div className="eyebrow">Specifications</div>
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight">
            Every number, on the record.
          </h2>

          <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 text-sm">
            <Spec k="GNSS" v="u-blox M10 · GPS / Galileo / GLONASS / BeiDou" />
            <Spec k="Fix rate" v="10 Hz · cold start < 25 s" />
            <Spec k="Cellular" v="LTE-M · eSIM · EU roaming included" />
            <Spec k="Storage" v="8 GB onboard · ~4 years of daily riding" />
            <Spec k="CAN" v="Sniff + decode Klever bus" />
            <Spec k="Export" v=".fit · .gpx · .csv" />
            <Spec k="Power" v="From bike 36 – 48 V · Li-ion backup" />
            <Spec k="Backup" v="30 days standby off main pack" />
            <Spec k="Mount" v="Concealed under battery cover" />
            <Spec k="Dimensions" v="62 × 42 × 14 mm · 38 g" />
            <Spec k="Firmware" v="GPL-3.0 · OTA capable" />
            <Spec k="Warranty" v="2 years, workshop-serviced" />
          </dl>

          <div className="mt-14 grid gap-10 md:grid-cols-3 border-t border-border pt-10">
            <Block title="Trip logging">
              Automatic start/stop on motion. Per-ride files with position, speed,
              assist level, motor power and battery draw. Import straight into Strava
              or Garmin Connect.
            </Block>
            <Block title="Anti-theft">
              Geofence alerts by email or SMS, live location on demand, and a 30-day
              backup battery so it keeps pinging even with the main pack disconnected.
            </Block>
            <Block title="Workshop diagnostics">
              The same device the workshop uses. Plug it in, ride once, and every CAN
              frame is on record — no more chasing intermittent faults.
            </Block>
          </div>

          <div className="mt-14 border-t border-border pt-10">
            <div className="eyebrow">In the box</div>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm text-foreground/80">
              <li>· R-LOG.01 logger in aluminium shell</li>
              <li>· Pre-crimped CAN + power harness</li>
              <li>· LTE-M eSIM (activated, one year)</li>
              <li>· Concealed mounting bracket</li>
              <li>· USB-C service cable</li>
              <li>· Printed quick-start with pinout</li>
            </ul>
          </div>
        </div>
      </section>
    </Page>
  );
}

function Spec({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-t border-border pt-3">
      <dt className="text-xs uppercase tracking-widest text-muted-foreground">{k}</dt>
      <dd className="mt-1 font-display">{v}</dd>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="eyebrow">{title}</div>
      <p className="mt-3 text-sm text-foreground/80">{children}</p>
    </div>
  );
}
