import { Link } from "@tanstack/react-router";
import { articles } from "@/data/journal";
import { Reveal } from "./Reveal";

export function JournalPreview() {
  const [lead, ...rest] = articles;

  return (
    <section className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 lg:py-40">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <div>
          <Reveal>
            <p className="eyebrow">07 — Journal</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mt-6 text-[clamp(2.4rem,6vw,4.5rem)]">From the journal</h2>
          </Reveal>
        </div>
        <Reveal delay={0.14}>
          <Link to="/journal" className="rule-link">
            All articles
          </Link>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-12">
        {lead ? (
          <Reveal className="lg:col-span-7">
            <Link
              to="/journal/$slug"
              params={{ slug: lead.slug }}
              className="group block"
              data-cursor="Read"
            >
              <div className="overflow-hidden">
                <img
                  src={lead.image}
                  alt={lead.alt}
                  width={1400}
                  height={1200}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
              </div>
              <p className="eyebrow mt-8">
                {lead.category} · {lead.date}
              </p>
              <h3 className="display mt-4 text-3xl transition-transform duration-700 group-hover:translate-x-2 sm:text-4xl">
                {lead.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">{lead.excerpt}</p>
            </Link>
          </Reveal>
        ) : null}

        <div className="space-y-14 lg:col-span-4 lg:col-start-9 lg:pt-24">
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
                    height={1200}
                    loading="lazy"
                    className="aspect-[3/2] w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                </div>
                <p className="eyebrow mt-6">
                  {article.category} · {article.date}
                </p>
                <h3 className="display mt-3 text-2xl transition-transform duration-700 group-hover:translate-x-2">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{article.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
