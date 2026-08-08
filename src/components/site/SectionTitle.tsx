import { Reveal } from "./Reveal";

type SectionTitleProps = {
  label: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionTitle({
  label,
  title,
  intro,
  align = "left",
  tone = "dark",
}: SectionTitleProps) {
  return (
    <div
      className={[
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "",
        tone === "light" ? "text-background" : "",
      ].join(" ")}
    >
      <Reveal>
        <p className={tone === "light" ? "eyebrow text-background/60" : "eyebrow"}>{label}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="display mt-6 text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
      </Reveal>
      {intro ? (
        <Reveal delay={0.16}>
          <p
            className={[
              "mt-7 max-w-xl text-sm leading-relaxed sm:text-base",
              align === "center" ? "mx-auto" : "",
              tone === "light" ? "text-background/70" : "text-muted-foreground",
            ].join(" ")}
          >
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
