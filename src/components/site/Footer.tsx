import { Link } from "@tanstack/react-router";
import { ArrowUp } from "lucide-react";

const explore = [
  { to: "/stay", label: "Stay" },
  { to: "/experience", label: "Experience" },
  { to: "/dining", label: "Dining" },
  { to: "/journal", label: "Journal" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <p className="display text-2xl tracking-[0.34em]">AURELIA</p>
            <p className="mt-2 text-[0.55rem] tracking-[0.44em] text-muted-foreground uppercase">
              Boutique Retreat
            </p>
            <p className="display mt-8 text-2xl leading-tight sm:text-3xl">
              Stay somewhere worth remembering.
            </p>
          </div>

          <nav aria-label="Explore">
            <p className="eyebrow">Explore</p>
            <ul className="mt-6 space-y-3">
              {explore.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="link-underline text-sm text-muted-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:hello@aurelia-retreat.com" className="link-underline">
                  hello@aurelia-retreat.com
                </a>
              </li>
              <li>
                <a href="tel:+00123456789" className="link-underline">
                  +00 123 456 789
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Social</p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="https://instagram.com" className="link-underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://pinterest.com" className="link-underline">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase">
            © 2026 AURELIA
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="nav-label inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
