import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/site-shell";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Resurrect" },
      { name: "description", content: "Get in touch to revive your Klever or Stromer speed pedelec." },
      { property: "og:title", content: "Contact — Resurrect" },
      { property: "og:description", content: "Get in touch to revive your speed pedelec." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <Page>
      <section className="container-x pt-16 md:pt-24 pb-24 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="eyebrow">Revive my bike</div>
          <h1 className="mt-4 font-display text-5xl md:text-6xl font-medium tracking-tight">
            Tell us the model.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-md">
            One or two sentences about what's dead is enough. We'll come back with a
            realistic answer — a part, a diagnosis, or an honest "not yet".
          </p>

          <div className="mt-10 space-y-4 text-sm">
            <ContactRow label="Workshop" value="Gent, Belgium" />
            <ContactRow label="Email" value="workshop@resurrect.bike" href="mailto:workshop@resurrect.bike" />
            <ContactRow label="Hours" value="Tue – Fri · by appointment" />
          </div>
        </div>

        <form
          className="md:col-span-6 md:col-start-7 rounded-lg border border-border bg-card p-8 md:p-10 space-y-5"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          <Field label="Your name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Bike model" name="model" placeholder="e.g. Klever B25, 2019" required />
          <div>
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
              What's wrong
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Display shows error 08 on my Klever B, want to log GPS trips…"
            />
          </div>
          <button
            type="submit"
            disabled={sent}
            className="w-full rounded-full bg-foreground px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-foreground/90 disabled:opacity-60"
          >
            {sent ? "Thanks — we'll be in touch" : "Send to the workshop"}
          </button>
          <p className="text-xs text-muted-foreground">
            We reply within two working days. No newsletter, no tracking.
          </p>
        </form>
      </section>
    </Page>
  );
}

function Field({
  label, name, type = "text", required, placeholder,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div className="flex justify-between border-b border-border pb-3">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      {href ? (
        <a href={href} className="text-foreground hover:text-leaf-deep">{value}</a>
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
}
