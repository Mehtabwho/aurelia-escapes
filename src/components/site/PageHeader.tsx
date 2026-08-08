import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type PageHeaderProps = {
  label: string;
  title: ReactNode;
  intro?: string;
};

/** Shared top-of-page block for non-hero routes. */
export function PageHeader({ label, title, intro }: PageHeaderProps) {
  return (
    <header className="mx-auto max-w-[1600px] px-6 pt-40 pb-16 md:px-10 lg:pt-52 lg:pb-24">
      <Reveal>
        <p className="eyebrow">{label}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h1 className="display mt-8 max-w-4xl text-[clamp(2.6rem,7vw,5.5rem)]">{title}</h1>
      </Reveal>
      {intro ? (
        <Reveal delay={0.16}>
          <p className="mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {intro}
          </p>
        </Reveal>
      ) : null}
    </header>
  );
}
