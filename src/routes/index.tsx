import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/site-shell";
import heroImg from "@/assets/workshop-hero.jpg";
import controllerImg from "@/assets/controller.jpg";
import gpsImg from "@/assets/gps-logger.jpg";
import displayImg from "@/assets/display.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <Page>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-x pt-16 pb-24 md:pt-24 md:pb-32 grid gap-14 lg:grid-cols-12 lg:gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow">After market parts · speed pedelecs</div>
            <h1 className="mt-5 font-display text-5xl md:text-7xl font-medium leading-[0.95] tracking-tight">
              Smarter electronics <br />
              for speed <br />
              <span className="text-leaf-deep">pedelecs.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Resurrect designs open motor controllers, colour displays and GPS data loggers
              for high-speed e-bikes. Built for Klever today. Stromer next.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/parts"
                className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-foreground/90 transition-colors"
              >
                Browse parts
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-foreground/40 px-6 py-3 text-sm font-medium hover:border-foreground transition-colors"
              >
                Upgrade my bike →
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-border shadow-[0_30px_60px_-20px_rgba(30,40,35,0.35)]">
              <img
                src={heroImg}
                alt="A Klever speed pedelec on a repair stand next to controller boards"
                width={1600}
                height={1100}
                className="w-full h-[420px] md:h-[520px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-paper/90 font-display uppercase tracking-widest">
                <span>Workshop no. 01</span>
                <span>Gent · BE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="border-y border-border bg-muted/60">
          <div className="container-x grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            {[
              { t: "Open firmware", d: "FOC controller firmware you can read, flash and tune. No locked drive units." },
              { t: "Repairability", d: "Modular boards you can swap with hex keys and a soldering iron. Documented connectors." },
              { t: "Open source", d: "Schematics, firmware and BOMs published under CERN-OHL-S. Fork, remix, contribute." },
            ].map((p) => (
              <div key={p.t} className="p-8 md:p-10">
                <div className="eyebrow">{p.t}</div>
                <p className="mt-3 text-sm text-foreground/80">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="container-x py-24 md:py-32 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="eyebrow">The problem</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-medium tracking-tight">
            Great bikes, closed electronics.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg text-muted-foreground">
          <p>
            Speed pedelecs are the best commuter bikes ever built — and the most opaque.
            Proprietary controllers, encrypted diagnostic ports, displays that only talk to
            one brand of app.
          </p>
          <p>
            Riders can't read their own trip data. Shops can't tune motor curves. A GPS
            fix or a firmware update means waiting on a vendor roadmap that may never come.
          </p>
          <p className="text-foreground">
            We build the electronics that riders and workshops actually want.
          </p>
        </div>
      </section>

      {/* FEATURED PARTS */}
      <section className="bg-foreground text-paper">
        <div className="container-x py-24 md:py-32">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <div className="eyebrow text-leaf">Currently in production</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-medium tracking-tight">
                Parts, not promises.
              </h2>
            </div>
            <Link to="/parts" className="text-sm font-medium text-leaf hover:text-paper transition-colors">
              See the full catalogue →
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <PartCard
              to="/parts/motor-controller"
              img={controllerImg}
              tag="R-CTRL.02"
              title="Open motor controller"
              spec="STM32G4 · FOC firmware · reverse-engineered CAN protocol"
              price="€ 320"
            />
            <PartCard
              to="/parts"
              img={displayImg}
              tag="R-DIS.01"
              title="Colour display + keypad"
              spec="2.4″ transflective · trip data · diagnostics · OTA"
              price="€ 180"
            />
            <PartCard
              to="/parts/gps-logger"
              img={gpsImg}
              tag="R-LOG.01"
              title="GPS data logger"
              spec="u-blox GNSS · LTE-M · CAN sniff · open .fit export"
              price="€ 210"
            />
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="container-x py-24">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <div className="eyebrow">Bikes we support</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-medium tracking-tight">
              Started with Klever. Stromer is next.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg">
              We're independent from Klever Mobility — they still support their own bikes.
              We simply add what riders and workshops ask for: open controllers, better
              displays, and GPS logging. Stromer ST1/ST2/ST3 support is in
              reverse-engineering phase.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-3">
            {[
              ["Klever B-Series", "Supported"],
              ["Klever X-Speed", "Supported"],
              ["Klever S45", "Beta"],
              ["Stromer ST1", "In R&D"],
              ["Stromer ST2", "In R&D"],
              ["Stromer ST3", "Planned"],
            ].map(([name, status]) => (
              <li
                key={name}
                className="rounded-md border border-border bg-card p-4 flex flex-col gap-1"
              >
                <span className="font-display text-sm font-medium">{name}</span>
                <span className="text-xs text-leaf-deep uppercase tracking-widest">{status}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24">
        <div className="rounded-xl border border-border bg-muted/60 p-10 md:p-16 flex flex-col md:flex-row gap-8 md:items-center justify-between">
          <div className="max-w-xl">
            <div className="eyebrow">Want more from your pedelec?</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-medium tracking-tight">
              Tell us the model. We'll tell you what's possible.
            </h2>
          </div>
          <Link
            to="/contact"
            className="self-start inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-foreground/90"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </Page>
  );
}

function PartCard({
  img, tag, title, spec, price,
}: { img: string; tag: string; title: string; spec: string; price: string }) {
  return (
    <article className="group rounded-lg overflow-hidden border border-paper/10 bg-paper/[0.03]">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          width={1200}
          height={900}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between text-xs text-leaf font-display tracking-widest uppercase">
          <span>{tag}</span>
          <span>{price}</span>
        </div>
        <h3 className="mt-3 font-display text-xl font-medium text-paper">{title}</h3>
        <p className="mt-2 text-sm text-paper/60">{spec}</p>
      </div>
    </article>
  );
}
