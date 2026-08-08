import { Link, createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { MaskReveal, Reveal } from "@/components/site/Reveal";
import { articles } from "@/data/journal";

export const Route = createFileRoute("/journal/")({
  head: () => ({
    meta: [
      { title: "Journal — AURELIA Boutique Retreat" },
      {
        name: "description",
        content:
          "Notes from the retreat: seasonal cooking, quiet trails, design details and the slow craft of hospitality.",
      },
      { property: "og:title", content: "Journal — AURELIA Boutique Retreat" },
      { property: "og:description", content: "Notes from the retreat." },
    ],
  }),
  component: JournalPage,
});

function JournalPage() {
  const [lead, ...rest] = articles;

  return (
    <>
      <PageHeader
        label="07 — Journal"
        title={<>Notes from the retreat.</>}
        intro="Short essays on the things that shape a stay here — the harvest, the light, the walk nobody tells you about."
      />

      <div className="mx-auto max-w-[1600px] px-6 pb-24 md:px-10 lg:pb-32">
        {lead ? (
          <Link
            to="/journal/$slug"
            params={{ slug: lead.slug }}
            className="group grid gap-10 border-b border-border pb-20 lg:grid-cols-12 lg:items-end lg:gap-14"
            data-cursor="Read"
          >
            <div className="lg:col-span-8">
              <MaskReveal className="overflow-hidden">
                <img
                  src={lead.image}
                  alt={lead.alt}
                  width={1600}
                  height={1100}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
              </MaskReveal>
            </div>
            <div className="lg:col-span-4">
              <Reveal>
                <p className="eyebrow">
                  {lead.category} — {lead.date}
                </p>
                <h2 className="display mt-5 text-4xl leading-tight sm:text-5xl">{lead.title}</h2>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{lead.excerpt}</p>
                <span className="rule-link mt-8">Read the piece</span>
              </Reveal>
            </div>
          </Link>
        ) : null}

        <div className="mt-20 grid gap-x-10 gap-y-16 sm:grid-cols-2">
          {rest.map((article, index) => (
            <Reveal key={article.slug} delay={index * 0.08}>
              <Link
                to="/journal/$slug"
                params={{ slug: article.slug }}
                className="group block"
                data-cursor="Read"
              >
                <div className="overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.alt}
                    width={1400}
                    height={1000}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <p className="eyebrow mt-6">
                  {article.category} — {article.date}
                </p>
                <h3 className="display mt-4 text-2xl transition-transform duration-700 group-hover:translate-x-2 sm:text-3xl">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
