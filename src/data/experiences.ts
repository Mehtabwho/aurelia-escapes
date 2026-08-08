import expStay from "@/assets/exp-stay.jpg";
import expDine from "@/assets/exp-dine.jpg";
import expRestore from "@/assets/exp-restore.jpg";
import expExplore from "@/assets/exp-explore.jpg";

export type Experience = {
  index: string;
  title: string;
  copy: string;
  detail: string;
  image: string;
  alt: string;
};

export const experiences: Experience[] = [
  {
    index: "01",
    title: "Stay",
    copy: "Private spaces designed around light, silence and nature.",
    detail:
      "Eleven rooms only. Each one oriented to its own view, its own hour of light, its own quiet.",
    image: expStay,
    alt: "Suite interior at sunrise with linen bedding and open doors",
  },
  {
    index: "02",
    title: "Dine",
    copy: "Seasonal ingredients. Unhurried evenings.",
    detail:
      "One menu, written each morning from what the garden and the coast gave us that day.",
    image: expDine,
    alt: "Long candlelit dinner table set beneath olive trees at dusk",
  },
  {
    index: "03",
    title: "Restore",
    copy: "Wellness rituals inspired by the surrounding landscape.",
    detail:
      "Salt, stone, steam and oil. Treatments built around the rhythm of the day rather than a schedule.",
    image: expRestore,
    alt: "Candlelit stone soaking bath with folded linen towels",
  },
  {
    index: "04",
    title: "Explore",
    copy: "Hidden trails, quiet beaches and unforgettable horizons.",
    detail:
      "Guided at dawn or entirely alone — a folded map, a flask, and a path few people walk.",
    image: expExplore,
    alt: "Coastal cliff path descending toward a hidden turquoise cove",
  },
];
