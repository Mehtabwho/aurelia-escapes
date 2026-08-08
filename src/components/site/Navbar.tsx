import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";

const links = [
  { to: "/stay", label: "Stay" },
  { to: "/experience", label: "Experience" },
  { to: "/dining", label: "Dining" },
  { to: "/journal", label: "Journal" },
] as const;

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  const overHero = pathname === "/" || /^\/stay\/.+/.test(pathname);
  const solid = scrolled || !overHero || open;

  useMotionValueEvent(scrollY, "change", (value) => setScrolled(value > 60));

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: overHero ? 1.5 : 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={[
          "fixed inset-x-0 top-0 z-[75] transition-[background-color,border-color,color] duration-700",
          solid
            ? "border-b border-border bg-background/95 text-foreground backdrop-blur-sm"
            : "border-b border-transparent bg-transparent text-background",
        ].join(" ")}
      >
        <nav
          aria-label="Primary"
          className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-6 py-5 md:px-10 lg:grid-cols-[1fr_auto_1fr]"
        >
          <Link to="/" className="min-w-0 leading-none" aria-label="AURELIA — home">
            <span className="display block text-xl tracking-[0.34em]">AURELIA</span>
            <span className="mt-1 block text-[0.5rem] tracking-[0.44em] uppercase opacity-70">
              Boutique Retreat
            </span>
          </Link>

          <ul className="hidden items-center gap-10 lg:flex">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="nav-label link-underline opacity-80 transition-opacity hover:opacity-100"
                  activeProps={{ className: "nav-label link-underline opacity-100" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end gap-6">
            <Link to="/book" className="nav-label link-underline hidden lg:inline-block">
              Book
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="nav-label flex items-center gap-3 lg:hidden"
            >
              {open ? "Close" : "Menu"}
              <span className="flex h-3 w-5 flex-col justify-between" aria-hidden="true">
                <motion.span
                  className="block h-px w-full bg-current"
                  animate={{ rotate: open ? 45 : 0, y: open ? 5.5 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.span
                  className="block h-px w-full bg-current"
                  animate={{ opacity: open ? 0 : 1 }}
                  transition={{ duration: 0.25 }}
                />
                <motion.span
                  className="block h-px w-full bg-current"
                  animate={{ rotate: open ? -45 : 0, y: open ? -5.5 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </span>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[74] flex flex-col justify-center bg-background px-6 lg:hidden"
          >
            <ul className="space-y-2">
              {[...links, { to: "/book", label: "Book" } as const].map((link, index) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.18 + index * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link to={link.to} className="display block py-2 text-5xl">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="eyebrow mt-16"
            >
              hello@aurelia-retreat.com
            </motion.p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
