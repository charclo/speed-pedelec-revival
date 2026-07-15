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
      <section className="container-x pt-12 md:pt-16 pb-24 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-6">
          <div className="rounded-lg overflow-hidden border border-border">
            <img
              src={gpsImg}
              alt="Compact GPS data logger PCB with u-blox module"
              width={1600}
              height={1200}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-6 md:pl-4">
          <Link to="/parts" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">
            ← Catalogue
          </Link>
          <div className="mt-4 eyebrow text-leaf-deep">R-LOG.01 · In stock</div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-medium tracking-tight">
            GPS data logger
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A pocket-sized logger that reads the bike's CAN bus, records position and
            speed, and hands you plain-text .fit / .gpx files. No vendor cloud, no
            subscription, no lock-in.
          </p>

          <div className="mt-6 flex items-baseline gap-4">
            <span className="font-display text-3xl">€ 210</span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              incl. LTE-M eSIM, one year
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-foreground/90"
            >
              Order / fit at the workshop
            </Link>
            <a
              href="mailto:workshop@resurrect.bike?subject=R-LOG.01"
              className="inline-flex items-center rounded-full border border-foreground/40 px-6 py-3 text-sm font-medium hover:border-foreground"
            >
              Ask a question
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
            <Spec k="GNSS" v="u-blox M10 · GPS/Galileo/GLONASS" />
            <Spec k="Cellular" v="LTE-M · eSIM · EU roaming" />
            <Spec k="Storage" v="8 GB onboard · ~4 years riding" />
            <Spec k="CAN" v="Sniff + decode Klever bus" />
            <Spec k="Export" v=".fit · .gpx · .csv" />
            <Spec k="Power" v="From bike 36–48 V · backup Li-ion" />
            <Spec k="Mount" v="Concealed under battery cover" />
            <Spec k="Firmware" v="GPL-3.0 · OTA capable" />
          </dl>
        </div>
      </section>

      <section className="border-t border-border bg-muted/40">
        <div className="container-x py-16 grid gap-10 md:grid-cols-3">
          <Block title="Trip logging">
            Automatic start/stop on motion, per-ride files with position, speed, assist
            level, motor power and battery draw. Import straight into Strava or Garmin
            Connect.
          </Block>
          <Block title="Anti-theft">
            Geofence alerts by email or SMS, live location on demand, and a 30-day backup
            battery so it keeps pinging even with the main pack disconnected.
          </Block>
          <Block title="Workshop diagnostics">
            The same device the workshop uses. Plug it in, ride once, and every CAN frame
            is on record — no more chasing intermittent faults.
          </Block>
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
