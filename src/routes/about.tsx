import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/site-shell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Resurrect" },
      { name: "description", content: "A small workshop building open-source aftermarket parts to keep speed pedelecs on the road." },
      { property: "og:title", content: "About — Resurrect" },
      { property: "og:description", content: "A small workshop keeping speed pedelecs on the road." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Page>
      <section className="container-x pt-16 md:pt-24 pb-16">
        <div className="eyebrow">About the workshop</div>
        <h1 className="mt-4 font-display text-5xl md:text-6xl font-medium tracking-tight max-w-3xl">
          A garage-sized answer to closed e-bike electronics.
        </h1>

      </section>

      <section className="container-x pb-24 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-7 space-y-6 text-lg text-muted-foreground">
          <p>
            Resurrect started with a simple frustration: a Klever rider who wanted to see
            his own trip data and couldn't. The controller spoke a closed CAN dialect and
            the display only talked to a single vendor app.
          </p>
          <p>
            We reverse-engineered the protocol, built an open controller and a colour
            display that showed the data riders actually cared about. Then we added GPS
            logging. Word spread — a year later we're a small workshop of engineers and
            mechanics building electronics that manufacturers won't.
          </p>
          <p>
            Everything we design is documented, modular, and released under an open
            hardware licence. If we disappear tomorrow, your bike still runs.
          </p>
        </div>

        <aside className="md:col-span-4 md:col-start-9 space-y-8">
          <Stat n="3" label="Engineers in the workshop" />
          <Stat n="140+" label="Bikes upgraded to date" />
          <Stat n="6" label="Open firmware releases" />
          <Stat n="OHL-S" label="Open hardware licence" />
        </aside>

      </section>

      <section className="bg-foreground text-paper">
        <div className="container-x py-24 grid gap-10 md:grid-cols-2">
          <div>
            <div className="eyebrow text-leaf">Principles</div>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-tight">
              How we choose what to build.
            </h2>
          </div>
          <ul className="space-y-6 text-lg text-paper/80">
            <li><span className="text-leaf font-display mr-3">01</span> If it's out of production and worth saving, it goes on the list.</li>
            <li><span className="text-leaf font-display mr-3">02</span> Every part must be serviceable with hand tools and off-the-shelf electronics.</li>
            <li><span className="text-leaf font-display mr-3">03</span> Schematics, firmware and BOMs ship with the part — no exceptions.</li>
            <li><span className="text-leaf font-display mr-3">04</span> We price to sustain the workshop, not to extract from riders.</li>
          </ul>
        </div>
      </section>
    </Page>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="border-t border-border pt-4">
      <div className="font-display text-4xl font-medium tracking-tight">{n}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}
