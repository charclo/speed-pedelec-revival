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
      <section className="container-x pt-12 md:pt-16 pb-24 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-6">
          <div className="rounded-lg overflow-hidden border border-border">
            <img
              src={controllerImg}
              alt="Open motor controller PCB on the workbench"
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
          <div className="mt-4 eyebrow text-leaf-deep">R-CTRL.02 · In stock</div>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-medium tracking-tight">
            Open motor controller
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A drop-in FOC controller for Klever mid-drives that speaks a documented CAN
            protocol and boots firmware you can read, flash and tune. No locked drive units,
            no vendor tooling required.
          </p>

          <div className="mt-6 flex items-baseline gap-4">
            <span className="font-display text-3xl">€ 320</span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              incl. workshop harness
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
              href="mailto:workshop@resurrect.bike?subject=R-CTRL.02"
              className="inline-flex items-center rounded-full border border-foreground/40 px-6 py-3 text-sm font-medium hover:border-foreground"
            >
              Ask a question
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
            <Spec k="MCU" v="STM32G4 · 170 MHz" />
            <Spec k="Peak current" v="45 A · 30 A cont." />
            <Spec k="Voltage" v="36 – 48 V nominal" />
            <Spec k="Control" v="Sensored FOC · 40 kHz" />
            <Spec k="Protocol" v="Open CAN 2.0B" />
            <Spec k="Fits" v="Klever B / X / S45" />
            <Spec k="Firmware" v="GPL-3.0 · OTA capable" />
            <Spec k="Diagnostics" v="USB-C serial + CAN" />
          </dl>
        </div>
      </section>

      <section className="border-t border-border bg-muted/40">
        <div className="container-x py-16 grid gap-10 md:grid-cols-3">
          <Block title="What's in the box">
            Controller board in aluminium housing, pre-crimped motor and battery harness,
            USB-C flashing cable, and a printed quick-start with pinout.
          </Block>
          <Block title="What you can tune">
            Assist curves per level, torque ramp, field-weakening headroom, wheel size,
            speed limit, and legal cut-off mode (EU / CH / US).
          </Block>
          <Block title="What ships with it">
            Full schematics, KiCad sources, firmware repository, and the CAN protocol
            reference. Released under CERN-OHL-S and GPL-3.0.
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
