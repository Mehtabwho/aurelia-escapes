import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "./Reveal";
import wellnessImage from "@/assets/wellness.jpg";

const rituals = [
  ["Massage", "Deep-tissue and lymphatic work with cold-pressed local oils."],
  ["Meditation", "Guided sessions at first light in the stone pavilion."],
  ["Yoga", "Slow vinyasa on the upper terrace, twice daily."],
  ["Private rituals", "Salt, steam and silence — designed for one or two guests."],
];

export function Wellness() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="grain relative overflow-hidden bg-olive-deep text-background">
      <motion.div style={{ y }} className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-olive blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-accent/25 blur-3xl" />
      </motion.div>

      <div className="relative mx-auto max-w-[1600px] px-6 py-32 md:px-10 lg:py-48">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-background/55">05 — Wellness</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-8 text-[clamp(2.4rem,6vw,4.5rem)]">Return to yourself.</h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 max-w-sm text-sm leading-relaxed text-background/70">
                The spa sits half-buried in the hillside, cool in summer and warm in winter. There
                are no treatment menus here — only a conversation, and then an hour that belongs
                entirely to you.
              </p>
            </Reveal>

            <ul className="mt-14 divide-y divide-background/15 border-y border-background/15">
              {rituals.map(([title, copy], index) => (
                <Reveal as="li" key={title} delay={0.05 * index}>
                  <div className="grid gap-2 py-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
                    <p className="nav-label pt-1">{title}</p>
                    <p className="text-sm leading-relaxed text-background/65">{copy}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <motion.div style={{ y: imageY }} className="overflow-hidden">
              <img
                src={wellnessImage}
                alt="Dimly lit wellness pavilion with linen drapes and a single shaft of light"
                width={1600}
                height={1080}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover lg:aspect-[4/5]"
                data-cursor="View"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
