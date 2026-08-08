import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Intro } from "@/components/site/Intro";
import { ExperienceSection } from "@/components/site/ExperienceSection";
import { RoomsPreview } from "@/components/site/RoomsPreview";
import { DiningSection } from "@/components/site/DiningSection";
import { Wellness } from "@/components/site/Wellness";
import { Destination } from "@/components/site/Destination";
import { JournalPreview } from "@/components/site/JournalPreview";
import { Testimonials } from "@/components/site/Testimonials";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AURELIA — Stay somewhere worth remembering" },
      {
        name: "description",
        content:
          "A boutique retreat of eleven rooms between mountain and sea: slow mornings, seasonal dining, wellness rituals and hidden trails.",
      },
      { property: "og:title", content: "AURELIA — Stay somewhere worth remembering" },
      {
        property: "og:description",
        content: "A boutique retreat between nature and stillness.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <ExperienceSection />
      <RoomsPreview />
      <DiningSection />
      <Wellness />
      <Destination />
      <JournalPreview />
      <Testimonials />
      <FinalCta />
    </>
  );
}
