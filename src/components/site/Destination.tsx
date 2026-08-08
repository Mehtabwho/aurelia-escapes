import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { destinations } from "@/data/destinations";
import { Reveal } from "./Reveal";

export function Destination() {
  const [active, setActive] = useState(0);
  const current = destinations[active]!;

  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 lg:py-40">
        <Reveal>
          <p className="eyebrow">06 — Destination</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="display mt-6 text-[clamp(2.4rem,6vw,4.5rem)]">Beyond the retreat.</h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-14">
          <ul className="lg:col-span-5">
            {destinations.map((destination, index) => (
              <li key={destination.index}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  aria-current={active === index}
                  className="group w-full border-b border-border py-7 text-left"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="eyebrow">{destination.index}</span>
                    <span
                      className={[
                        "display text-3xl transition-all duration-700 sm:text-4xl",
                        active === index
                          ? "translate-x-2 text-foreground"
                          : "text-muted-foreground group-hover:translate-x-2",
                      ].join(" ")}
                    >
                      {destination.name}
                    </span>
                  </div>
                  <AnimatePresence initial={false}>
                    {active === index ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 max-w-sm pl-12 text-sm leading-relaxed text-muted-foreground">
                          {destination.description}
                        </p>
                        <p className="eyebrow mt-3 pl-12">{destination.distance}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </button>
              </li>
            ))}
          </ul>

          <div className="relative overflow-hidden lg:col-span-7">
            <div className="relative aspect-[4/5] w-full sm:aspect-[4/3]">
              <AnimatePresence mode="sync">
                <motion.img
                  key={current.index}
                  src={current.image}
                  alt={current.alt}
                  width={1600}
                  height={1200}
                  loading="lazy"
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              {destinations.map((destination, index) => (
                <span
                  key={destination.index}
                  aria-hidden="true"
                  className="absolute"
                  style={{ left: `${destination.x}%`, top: `${destination.y}%` }}
                >
                  <motion.span
                    className="block rounded-full border border-background bg-background/20"
                    animate={{
                      width: active === index ? 18 : 8,
                      height: active === index ? 18 : 8,
                      opacity: active === index ? 1 : 0.5,
                    }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                  {active === index ? (
                    <motion.span
                      className="absolute inset-0 rounded-full border border-background"
                      initial={{ scale: 1, opacity: 0.7 }}
                      animate={{ scale: 3.2, opacity: 0 }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                    />
                  ) : null}
                </span>
              ))}

              <div className="pointer-events-none absolute bottom-6 left-6 text-background">
                <p className="nav-label">{current.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
