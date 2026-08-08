import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { MaskReveal, Reveal } from "./Reveal";
import introArchitecture from "@/assets/intro-architecture.jpg";
import introDetail from "@/assets/intro-detail.jpg";

export function Intro() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yLarge = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const ySmall = useTransform(scrollYProgress, [0, 1], ["14%", "-14%"]);

  return (
    <section
      id="the-retreat"
      ref={ref}
      className="mx-auto max-w-[1600px] scroll-mt-24 px-6 py-28 md:px-10 lg:py-40"
    >
      <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5 lg:pt-16">
          <Reveal>
            <p className="eyebrow">01 — The Retreat</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mt-8 text-[clamp(2.4rem,6vw,4.5rem)]">
              A place between
              <br />
              nature and stillness.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-10 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              AURELIA is designed for travellers who want to step away from the noise and reconnect
              with what matters. Eleven rooms, one kitchen, and a landscape that asks nothing of
              you.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <dl className="mt-14 grid grid-cols-2 gap-8 border-t border-border pt-8">
              {[
                ["Eleven", "Rooms & villas"],
                ["Est. 2019", "Family run"],
                ["1 hour", "From the coast"],
                ["Year round", "Open season"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="display text-2xl">{value}</dt>
                  <dd className="eyebrow mt-2">{label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="relative lg:col-span-7">
          <motion.div style={{ y: yLarge }} className="lg:pl-16">
            <MaskReveal className="overflow-hidden">
              <img
                src={introArchitecture}
                alt="Sunlit limewash walls and timber beams of the retreat pavilion"
                width={1100}
                height={1400}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
                data-cursor="View"
              />
            </MaskReveal>
          </motion.div>

          <motion.div
            style={{ y: ySmall }}
            className="relative -mt-20 w-2/3 max-w-xs sm:max-w-sm lg:absolute lg:-bottom-24 lg:left-0 lg:mt-0 lg:w-[52%] lg:max-w-none"
          >
            <MaskReveal className="overflow-hidden" delay={0.15}>
              <img
                src={introDetail}
                alt="Linen, a ceramic cup and an olive branch on a stone ledge"
                width={900}
                height={700}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
                data-cursor="View"
              />
            </MaskReveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
