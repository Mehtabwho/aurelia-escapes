import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroImage from "@/assets/hero-retreat.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease }}
        style={{ y }}
      >
        <img
          src={heroImage}
          alt="Cliffside boutique retreat with an infinity pool at golden hour"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[oklch(0.219_0.008_120_/_0.45)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[oklch(0.219_0.008_120_/_0.55)] to-transparent" />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-background"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease }}
          className="display text-2xl tracking-[0.4em] sm:text-3xl"
        >
          AURELIA
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ duration: 1.2, delay: 0.8, ease }}
          className="mt-3 text-[0.55rem] tracking-[0.5em] uppercase sm:text-[0.6rem]"
        >
          Boutique Retreat
        </motion.p>

        <h1 className="display mt-12 max-w-4xl text-[clamp(2.6rem,8vw,6.5rem)]">
          {["Stay somewhere", "worth remembering."].map((line, index) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.4, delay: 0.95 + index * 0.14, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.6, ease }}
          className="mt-14"
        >
          <a href="#the-retreat" className="btn-ghost border-background/50 text-background">
            Explore the retreat
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        style={{ opacity: fade }}
        className="absolute inset-x-0 bottom-10 z-10 flex justify-center"
      >
        <motion.span
          className="block h-12 w-px bg-background/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 1, 0.2], y: [0, 10, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </motion.div>

      <Link
        to="/book"
        className="nav-label absolute right-6 bottom-10 z-10 hidden text-background/80 lg:block"
      >
        <span className="link-underline">Reserve · 2026</span>
      </Link>
    </section>
  );
}
