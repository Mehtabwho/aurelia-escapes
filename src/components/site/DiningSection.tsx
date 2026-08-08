import { Link } from "@tanstack/react-router";
import { MaskReveal, Reveal } from "./Reveal";
import diningRoom from "@/assets/dining-room.jpg";
import diningDish from "@/assets/dining-dish.jpg";

export function DiningSection() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 lg:py-40">
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <MaskReveal className="overflow-hidden">
            <img
              src={diningRoom}
              alt="Long communal table in the AURELIA dining room under warm pendant light"
              width={1600}
              height={1200}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
              data-cursor="View"
            />
          </MaskReveal>
        </div>

        <div className="lg:col-span-5 lg:pt-20">
          <Reveal>
            <p className="eyebrow">04 — Dining</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mt-8 text-[clamp(2.2rem,5vw,4rem)]">
              Food worth
              <br />
              slowing down for.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-10 max-w-sm">
              <p className="eyebrow">The Table</p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Local ingredients. Seasonal menus. Long evenings.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.22}>
            <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <dt className="eyebrow">Breakfast</dt>
                <dd className="display mt-3 text-2xl">07:00 — 10:30</dd>
              </div>
              <div>
                <dt className="eyebrow">Dinner</dt>
                <dd className="display mt-3 text-2xl">18:00 — 22:30</dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={0.3}>
            <Link to="/dining" className="rule-link mt-12">
              Explore dining
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="mt-20 grid gap-10 lg:mt-28 lg:grid-cols-12">
        <div className="lg:col-span-4 lg:col-start-3">
          <MaskReveal className="overflow-hidden">
            <img
              src={diningDish}
              alt="Seasonal vegetable dish plated on handmade ceramic"
              width={1000}
              height={1200}
              loading="lazy"
              className="aspect-[5/6] w-full object-cover"
              data-cursor="View"
            />
          </MaskReveal>
        </div>
        <div className="flex items-end lg:col-span-4">
          <Reveal>
            <blockquote className="display max-w-sm text-2xl leading-tight sm:text-3xl">
              “The menu is written each morning, on paper, by whoever walked the garden first.”
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
