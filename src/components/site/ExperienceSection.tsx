import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { experiences } from "@/data/experiences";
import { Reveal } from "./Reveal";

/**
 * Desktop: a sticky horizontal gallery driven by vertical scroll.
 * Mobile: the same content as a vertical, scroll-revealed sequence.
 */
export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${((experiences.length - 1) / experiences.length) * 100}%`]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const index = Math.min(experiences.length - 1, Math.floor(value * experiences.length));
    setActive(index);
  });

  return (
    <section className="bg-secondary">
      {/* Desktop horizontal gallery */}
      <div ref={ref} className="hidden h-[400vh] lg:block">
        <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
          <div className="mx-auto flex w-full max-w-[1600px] items-end justify-between px-10 pt-32 pb-10">
            <div>
              <p className="eyebrow">02 — The Experience</p>
              <h2 className="display mt-6 text-5xl">The Experience</h2>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">A slower way to see the world.</p>
              <p className="display mt-3 text-3xl tabular-nums">
                {experiences[active]?.index}
                <span className="text-muted-foreground text-lg"> / 0{experiences.length}</span>
              </p>
            </div>
          </div>

          <motion.div style={{ x }} className="flex h-full w-[400%]">
            {experiences.map((experience, index) => (
              <article
                key={experience.index}
                className="relative flex h-full w-1/4 shrink-0 items-end px-10 pb-24"
              >
                <motion.div
                  animate={{ opacity: active === index ? 1 : 0.35 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={experience.image}
                      alt={experience.alt}
                      width={1200}
                      height={1500}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                      animate={{ scale: active === index ? 1 : 1.06 }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                      data-cursor="View"
                    />
                  </div>
                  <div className="mt-8 flex items-start gap-8">
                    <span className="eyebrow pt-2">{experience.index}</span>
                    <div>
                      <h3 className="display text-4xl">{experience.title}</h3>
                      <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                        {experience.copy}
                      </p>
                      <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground/80">
                        {experience.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile / tablet vertical sequence */}
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 lg:hidden">
        <Reveal>
          <p className="eyebrow">02 — The Experience</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display mt-6 text-4xl sm:text-5xl">The Experience</h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-5 text-sm text-muted-foreground">A slower way to see the world.</p>
        </Reveal>

        <div className="mt-16 space-y-20">
          {experiences.map((experience) => (
            <Reveal as="figure" key={experience.index}>
              <img
                src={experience.image}
                alt={experience.alt}
                width={1200}
                height={1500}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="mt-6 flex gap-6">
                <span className="eyebrow pt-1">{experience.index}</span>
                <div>
                  <h3 className="display text-3xl">{experience.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {experience.copy}
                  </p>
                </div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
