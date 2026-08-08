import { Link, createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { MaskReveal, Reveal } from "@/components/site/Reveal";
import diningRoom from "@/assets/dining-room.jpg";
import diningDish from "@/assets/dining-dish.jpg";
import expDine from "@/assets/exp-dine.jpg";
import journal3 from "@/assets/journal-3.jpg";

export const Route = createFileRoute("/dining")({
  head: () => ({
    meta: [
      { title: "Dining — AURELIA Boutique Retreat" },
      {
        name: "description",
        content:
          "The Table at AURELIA: one seasonal menu written each morning from the garden, the market and the coast.",
      },
      { property: "og:title", content: "Dining — AURELIA Boutique Retreat" },
      { property: "og:description", content: "Food worth slowing down for." },
    ],
  }),
  component: DiningPage,
});

const menu = [
  ["To begin", "Garden tomatoes, sheep's cheese, wild oregano"],
  ["", "Grilled flatbread, olive oil from the eastern terraces"],
  ["To follow", "Line-caught fish, fennel, preserved lemon"],
  ["", "Slow lamb, summer beans, charred onion"],
  ["To end", "Almond tart, thyme honey"],
  ["", "Figs, walnut, cold cream"],
];

function DiningPage() {
  return (
    <>
      <PageHeader
        label="04 — Dining"
        title={
          <>
            Food worth
            <br />
            slowing down for.
          </>
        }
        intro="One kitchen, one long table, and a menu that changes with the week. Guests eat when they are hungry; we simply keep the fire going."
      />

      <div className="mx-auto max-w-[1600px] px-6 pb-24 md:px-10 lg:pb-32">
        <MaskReveal className="overflow-hidden">
          <img
            src={diningRoom}
            alt="The Table at AURELIA, set beneath warm pendant light"
            width={1600}
            height={1200}
            className="aspect-[16/9] w-full object-cover"
            data-cursor="View"
          />
        </MaskReveal>

        <div className="mt-20 grid gap-16 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">The Table</p>
              <p className="display mt-6 text-3xl leading-snug sm:text-4xl">
                Local ingredients.
                <br />
                Seasonal menus.
                <br />
                Long evenings.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <dl className="mt-14 grid grid-cols-2 gap-8 border-t border-border pt-8">
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
            <Reveal delay={0.16}>
              <Link to="/book" className="btn-solid mt-12">
                Reserve a table
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="eyebrow">This week's menu</p>
              <ul className="mt-8">
                {menu.map(([course, dish], index) => (
                  <li
                    key={`${course}-${dish}`}
                    className="grid gap-2 border-b border-border py-5 sm:grid-cols-[9rem_1fr] sm:gap-8"
                  >
                    <span className="eyebrow pt-1">{course || (index === 0 ? "" : "")}</span>
                    <span className="text-sm leading-relaxed text-muted-foreground">{dish}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 grid gap-6 sm:grid-cols-3">
          {[
            { src: diningDish, alt: "Seasonal vegetable dish on handmade ceramic" },
            { src: expDine, alt: "Candlelit outdoor dinner table beneath olive trees" },
            { src: journal3, alt: "Chef arranging fresh herbs on a wooden counter" },
          ].map((image, index) => (
            <MaskReveal key={image.alt} className="overflow-hidden" delay={index * 0.08}>
              <img
                src={image.src}
                alt={image.alt}
                width={1400}
                height={1200}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
                data-cursor="View"
              />
            </MaskReveal>
          ))}
        </div>
      </div>
    </>
  );
}
