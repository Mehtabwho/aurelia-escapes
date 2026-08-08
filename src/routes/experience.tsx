import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal, MaskReveal } from "@/components/site/Reveal";
import { experiences } from "@/data/experiences";
import { destinations } from "@/data/destinations";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "The Experience — AURELIA Boutique Retreat" },
      {
        name: "description",
        content:
          "Stay, dine, restore and explore: four ways to spend a week at AURELIA, built around the rhythm of the landscape.",
      },
      { property: "og:title", content: "The Experience — AURELIA Boutique Retreat" },
      { property: "og:description", content: "A slower way to see the world." },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <>
      <PageHeader
        label="02 — The Experience"
        title={<>A slower way to see the world.</>}
        intro="Nothing here is compulsory. These are simply the four things our guests return for, in the order most of them discover them."
      />

      <div className="mx-auto max-w-[1600px] px-6 pb-24 md:px-10 lg:pb-32">
        <div className="space-y-24 lg:space-y-40">
          {experiences.map((experience, index) => (
            <article
              key={experience.index}
              className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14"
            >
              <div className={index % 2 ? "lg:order-2 lg:col-span-7 lg:col-start-6" : "lg:col-span-7"}>
                <MaskReveal className="overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.alt}
                    width={1200}
                    height={1500}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                    data-cursor="View"
                  />
                </MaskReveal>
              </div>
              <div className={index % 2 ? "lg:order-1 lg:col-span-4" : "lg:col-span-4 lg:col-start-9"}>
                <Reveal>
                  <p className="eyebrow">{experience.index}</p>
                  <h2 className="display mt-5 text-4xl sm:text-5xl">{experience.title}</h2>
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                    {experience.copy}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground/80">
                    {experience.detail}
                  </p>
                </Reveal>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-28 border-t border-border pt-16 lg:mt-40">
          <Reveal>
            <h2 className="display text-3xl sm:text-4xl">Beyond the retreat</h2>
          </Reveal>
          <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((destination, index) => (
              <Reveal as="li" key={destination.index} delay={index * 0.06}>
                <img
                  src={destination.image}
                  alt={destination.alt}
                  width={1600}
                  height={1200}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover"
                />
                <p className="eyebrow mt-6">{destination.index}</p>
                <h3 className="display mt-3 text-2xl">{destination.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {destination.description}
                </p>
              </Reveal>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
