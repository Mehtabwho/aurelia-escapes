import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import ctaImage from "@/assets/cta-dusk.jpg";

export function FinalCta() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.14, 1]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[560px] overflow-hidden">
      <motion.img
        style={{ scale }}
        src={ctaImage}
        alt="Lantern-lit retreat terrace at dusk above the sea"
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[oklch(0.219_0.008_120_/_0.5)]" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-background">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="display max-w-4xl text-[clamp(2.4rem,7vw,5.5rem)]"
        >
          Your next chapter
          <br />
          starts somewhere quiet.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-14"
        >
          <Link to="/book" className="btn-ghost group border-background/50 text-background">
            Plan your stay
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1.5"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
