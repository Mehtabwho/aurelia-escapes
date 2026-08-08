import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const testimonials = [
  {
    quote: "Some places give you a room.\nAURELIA gives you a memory.",
    name: "Elena Martin",
    location: "Lisbon, Portugal",
  },
  {
    quote: "We arrived exhausted and left\nspeaking more slowly.",
    name: "Johan Reuter",
    location: "Copenhagen, Denmark",
  },
  {
    quote: "The silence here is designed,\nnot accidental.",
    name: "Mira Okafor",
    location: "London, United Kingdom",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index]!;

  useEffect(() => {
    const timer = window.setInterval(
      () => setIndex((value) => (value + 1) % testimonials.length),
      7000,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="border-y border-border">
      <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 lg:py-40">
        <div className="min-h-[16rem] sm:min-h-[18rem]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="display max-w-4xl text-[clamp(2rem,5.5vw,4.25rem)] whitespace-pre-line">
                “{current.quote}”
              </blockquote>
              <figcaption className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2">
                <span className="nav-label">— {current.name}</span>
                <span className="text-xs text-muted-foreground">{current.location}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex gap-3">
          {testimonials.map((testimonial, dotIndex) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setIndex(dotIndex)}
              aria-label={`Show testimonial from ${testimonial.name}`}
              aria-current={index === dotIndex}
              className="group py-3"
            >
              <span
                className={[
                  "block h-px w-12 transition-colors duration-500",
                  index === dotIndex ? "bg-foreground" : "bg-border group-hover:bg-muted-foreground",
                ].join(" ")}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
