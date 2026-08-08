import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { articles, getArticle, type Article } from "@/data/journal";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Story unavailable — AURELIA" }, { name: "robots", content: "noindex" }],
      };
    }
    const { article } = loaderData;
    return {
      meta: [
        { title: `${article.title} — AURELIA Journal` },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: `${article.title} — AURELIA Journal` },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: ArticleNotFound,
  component: ArticlePage,
});

function ArticleNotFound() {
  return (
    <div className="mx-auto max-w-[1600px] px-6 pt-52 pb-32 md:px-10">
      <p className="eyebrow">Not found</p>
      <h1 className="display mt-6 text-5xl">This story has been archived.</h1>
      <Link to="/journal" className="rule-link mt-10">
        All stories
      </Link>
    </div>
  );
}

function ArticlePage() {
  const { article } = Route.useLoaderData() as { article: Article };
  const more = articles.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <>
      <header className="mx-auto max-w-[1600px] px-6 pt-40 pb-14 md:px-10 lg:pt-52">
        <Link to="/journal" className="rule-link">
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Journal
        </Link>
        <p className="eyebrow mt-12">
          {article.category} — {article.date} — {article.readTime}
        </p>
        <h1 className="display mt-6 max-w-4xl text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.02]">
          {article.title}
        </h1>
      </header>

      <div className="overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          src={article.image}
          alt={article.alt}
          width={1600}
          height={1000}
          className="aspect-[16/9] w-full object-cover"
        />
      </div>

      <article className="mx-auto max-w-[46rem] px-6 py-20 md:px-10 lg:py-28">
        <Reveal>
          <p className="display text-2xl leading-snug sm:text-[1.7rem]">{article.excerpt}</p>
        </Reveal>
        <div className="mt-12 space-y-7">
          {article.body.map((paragraph, index) => (
            <Reveal key={index} delay={0.04 * index}>
              <p className="text-[0.95rem] leading-[1.9] text-muted-foreground">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </article>

      <section className="mx-auto max-w-[1600px] border-t border-border px-6 py-20 md:px-10">
        <p className="eyebrow">Keep reading</p>
        <div className="mt-10 grid gap-10 sm:grid-cols-2">
          {more.map((item) => (
            <Link
              key={item.slug}
              to="/journal/$slug"
              params={{ slug: item.slug }}
              className="group block"
              data-cursor="Read"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  width={1400}
                  height={1000}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
              </div>
              <h3 className="display mt-6 text-2xl transition-transform duration-700 group-hover:translate-x-2">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
