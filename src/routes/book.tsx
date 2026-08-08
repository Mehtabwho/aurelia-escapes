import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { BookingWidget } from "@/components/site/BookingWidget";
import { MaskReveal, Reveal } from "@/components/site/Reveal";
import ctaDusk from "@/assets/cta-dusk.jpg";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book your stay — AURELIA Boutique Retreat" },
      {
        name: "description",
        content:
          "Check availability at AURELIA. Eleven rooms, direct rates, breakfast and wellness access included.",
      },
      { property: "og:title", content: "Book your stay — AURELIA Boutique Retreat" },
      { property: "og:description", content: "Check availability and reserve your room." },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <>
      <PageHeader
        label="08 — Reservations"
        title={<>Begin your stay.</>}
        intro="Direct bookings include breakfast at The Table, full wellness access and a late, unhurried departure."
      />

      <div className="mx-auto max-w-[1600px] px-6 pb-24 md:px-10 lg:pb-32">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <MaskReveal className="overflow-hidden">
              <img
                src={ctaDusk}
                alt="AURELIA at dusk, warm windows against a deep blue sky"
                width={1600}
                height={1100}
                className="aspect-[4/3] w-full object-cover"
              />
            </MaskReveal>
            <Reveal delay={0.1}>
              <dl className="mt-12 grid gap-8 sm:grid-cols-3">
                {[
                  ["Check-in", "From 15:00"],
                  ["Check-out", "Until 12:00"],
                  ["Minimum stay", "Two nights"],
                ].map(([label, value]) => (
                  <div key={label} className="border-t border-border pt-5">
                    <dt className="eyebrow">{label}</dt>
                    <dd className="display mt-3 text-xl">{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal>
              <div className="border border-border bg-card p-8 sm:p-10">
                <p className="eyebrow">Check availability</p>
                <div className="mt-8">
                  <BookingWidget />
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                Prefer to speak with someone? Write to{" "}
                <a href="mailto:stay@aurelia-retreat.com" className="rule-link">
                  stay@aurelia-retreat.com
                </a>{" "}
                and a host will reply the same day.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
}
