import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/site-shell";

export const Route = createFileRoute("/parts")({
  head: () => ({
    meta: [
      { title: "Parts — Resurrect" },
      { name: "description", content: "Aftermarket batteries, controllers and drive parts for Klever and Stromer speed pedelecs." },
      { property: "og:title", content: "Parts — Resurrect" },
      { property: "og:description", content: "Aftermarket batteries, controllers and drive parts for speed pedelecs." },
      { property: "og:url", content: "/parts" },
    ],
    links: [{ rel: "canonical", href: "/parts" }],
  }),
  component: PartsPage,
});

const parts = [
  {
    tag: "R-BAT.01",
    title: "48V Battery pack",
    fits: "Klever B / X series",
    spec: "14s5p · 17.5 Ah · Samsung 50E cells · CAN-BMS",
    price: "€ 890",
    status: "In stock",
  },
  {
    tag: "R-BAT.02",
    title: "48V Battery pack — long range",
    fits: "Klever B / X series",
    spec: "14s7p · 24.5 Ah · LG M50LT · CAN-BMS",
    price: "€ 1.190",
    status: "Made to order",
  },
  {
    tag: "R-CTRL.02",
    title: "Open motor controller",
    fits: "Klever mid-drive",
    spec: "STM32G4 · FOC firmware · open CAN protocol",
    price: "€ 320",
    status: "In stock",
  },
  {
    tag: "R-DIS.01",
    title: "Colour display + keypad",
    fits: "Klever B / X / S45",
    spec: "2.4″ transflective · trip · diag · OTA",
    price: "€ 180",
    status: "Pre-order",
  },
  {
    tag: "R-HAR.01",
    title: "Main wiring harness",
    fits: "Klever B / X",
    spec: "Sealed connectors · tinned copper · frame-length",
    price: "€ 95",
    status: "In stock",
  },
  {
    tag: "R-STR.WL",
    title: "Stromer support",
    fits: "ST1 / ST2 / ST3",
    spec: "In R&D — join the waitlist to steer priorities",
    price: "—",
    status: "Waitlist",
  },
];

function PartsPage() {
  return (
    <Page>
      <section className="container-x pt-16 md:pt-24 pb-10">
        <div className="eyebrow">Catalogue</div>
        <h1 className="mt-4 font-display text-5xl md:text-6xl font-medium tracking-tight">
          Parts that outlive the manufacturer.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Every part is drop-in compatible, documented, and repairable with standard tools.
          Schematics and firmware are published under CERN-OHL-S.
        </p>
      </section>

      <section className="container-x pb-24">
        <div className="grid gap-px bg-border rounded-lg overflow-hidden border border-border">
          {parts.map((p) => (
            <div
              key={p.tag}
              className="bg-background p-6 md:p-8 grid gap-3 md:grid-cols-12 md:items-center"
            >
              <div className="md:col-span-2 font-display text-xs tracking-widest uppercase text-leaf-deep">
                {p.tag}
              </div>
              <div className="md:col-span-5">
                <div className="font-display text-lg font-medium">{p.title}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  Fits · {p.fits}
                </div>
              </div>
              <div className="md:col-span-3 text-sm text-muted-foreground">{p.spec}</div>
              <div className="md:col-span-1 text-sm">{p.price}</div>
              <div className="md:col-span-1 text-xs uppercase tracking-widest text-leaf-deep">
                {p.status}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-lg border border-border bg-muted/50 p-10 flex flex-col md:flex-row gap-6 md:items-center justify-between">
          <div className="max-w-lg">
            <div className="eyebrow">Don't see your part?</div>
            <h2 className="mt-2 font-display text-2xl font-medium tracking-tight">
              Tell us what's broken. We might already have a prototype.
            </h2>
          </div>
          <Link
            to="/contact"
            className="self-start inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-foreground/90"
          >
            Request a part
          </Link>
        </div>
      </section>
    </Page>
  );
}
