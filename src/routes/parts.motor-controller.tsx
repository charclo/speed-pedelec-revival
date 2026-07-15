import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/site-shell";
import controllerImg from "@/assets/controller.jpg";

export const Route = createFileRoute("/parts/motor-controller")({
  head: () => ({
    meta: [
      { title: "Open motor controller (R-CTRL.02) — Resurrect" },
      { name: "description", content: "STM32G4 FOC motor controller for Klever speed pedelecs. Open firmware, documented CAN protocol, reflashable torque and assist curves." },
      { property: "og:title", content: "Open motor controller — Resurrect" },
      { property: "og:description", content: "Open firmware FOC controller for Klever speed pedelecs." },
      { property: "og:url", content: "/parts/motor-controller" },
    ],
    links: [{ rel: "canonical", href: "/parts/motor-controller" }],
  }),
  component: MotorControllerPage,
});

function MotorControllerPage() {
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
        <div className="eyebrow text-leaf-deep">R-CTRL.02 · In stock</div>
        <h1 className="mt-3 font-display text-5xl md:text-7xl font-medium tracking-tight max-w-4xl">
          Open motor controller
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          A drop-in FOC controller for Klever mid-drives that speaks a documented CAN
          protocol and boots firmware you can read, flash and tune. No locked drive
          units, no vendor tooling required.
        </p>

        <div className="mt-10 rounded-xl overflow-hidden border border-border shadow-[0_40px_80px_-30px_rgba(30,40,35,0.4)]">
          <img
            src={controllerImg}
            alt="Open motor controller PCB on the workbench"
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
            <div className="mt-2 font-display text-4xl">€ 320</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
              incl. workshop harness
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-foreground/90"
              >
                Order / fit at the workshop
              </Link>
              <a
                href="mailto:workshop@resurrect.bike?subject=R-CTRL.02"
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
            Documented, down to the pin.
          </h2>

          <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 text-sm">
            <Spec k="MCU" v="STM32G4 · 170 MHz Cortex-M4F" />
            <Spec k="Peak current" v="45 A phase · 30 A continuous" />
            <Spec k="Voltage" v="36 – 48 V nominal · 54.6 V max" />
            <Spec k="Control" v="Sensored FOC · 40 kHz loop" />
            <Spec k="Protocol" v="Open CAN 2.0B · documented" />
            <Spec k="Fits" v="Klever B / X / S45 mid-drive" />
            <Spec k="Firmware" v="GPL-3.0 · OTA capable" />
            <Spec k="Diagnostics" v="USB-C serial + CAN" />
            <Spec k="Housing" v="Milled aluminium · IP66" />
            <Spec k="Cooling" v="Conductive to frame mount" />
            <Spec k="Dimensions" v="118 × 74 × 22 mm · 210 g" />
            <Spec k="Warranty" v="2 years, workshop-serviced" />
          </dl>

          <div className="mt-14 grid gap-10 md:grid-cols-3 border-t border-border pt-10">
            <Block title="What you can tune">
              Assist curves per level, torque ramp, field-weakening headroom, wheel
              size, speed limit, and legal cut-off mode (EU / CH / US).
            </Block>
            <Block title="What ships with it">
              Full schematics, KiCad sources, firmware repository, and the CAN
              protocol reference. Released under CERN-OHL-S and GPL-3.0.
            </Block>
            <Block title="Fit &amp; support">
              Fitted and calibrated at the workshop in Gent. Remote flashing and
              tuning available for shops that stock the harness.
            </Block>
          </div>

          <div className="mt-14 border-t border-border pt-10">
            <div className="eyebrow">In the box</div>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm text-foreground/80">
              <li>· R-CTRL.02 controller in aluminium housing</li>
              <li>· Pre-crimped motor + battery harness</li>
              <li>· USB-C flashing cable</li>
              <li>· CAN diagnostic breakout</li>
              <li>· Frame-mount bracket &amp; hardware</li>
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
