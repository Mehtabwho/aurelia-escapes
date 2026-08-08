import journal1 from "@/assets/journal-1.jpg";
import journal2 from "@/assets/journal-2.jpg";
import journal3 from "@/assets/journal-3.jpg";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  alt: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "the-art-of-doing-nothing",
    title: "The Art of Doing Nothing",
    excerpt: "A guide to slow mornings at AURELIA",
    category: "Slow living",
    date: "12 March 2026",
    readTime: "4 min",
    image: journal1,
    alt: "Coffee tray resting on rumpled white linen in morning light",
    body: [
      "There is a particular hour here — somewhere between first light and breakfast — when the retreat belongs to almost no one. The staff move quietly. The pool is untouched. The light comes in low and sideways across the plaster.",
      "We built the mornings deliberately. Nothing is scheduled before nine. Breakfast is served whenever you arrive, not within a window. The intention is simple: to remove the small decisions that pull you out of a place and back into your own head.",
      "Guests often tell us the first morning feels uncomfortable. By the third, they stop asking what time it is.",
    ],
  },
  {
    slug: "beyond-the-horizon",
    title: "Beyond the Horizon",
    excerpt: "Places worth waking up early for",
    category: "Destination",
    date: "28 February 2026",
    readTime: "6 min",
    image: journal2,
    alt: "Golden dawn light spilling over layered hills and the sea",
    body: [
      "The ridge above the retreat takes fifty minutes to walk and rewards you with a horizon that changes character three times before breakfast.",
      "Take the eastern path — it is longer, but it passes the old terraces where wild thyme grows between the stones. Our kitchen still harvests there.",
      "Bring water, leave the phone. The view does not photograph the way it looks.",
    ],
  },
  {
    slug: "a-table-for-the-season",
    title: "A Table for the Season",
    excerpt: "Inside our seasonal kitchen",
    category: "Dining",
    date: "9 February 2026",
    readTime: "5 min",
    image: journal3,
    alt: "Hands arranging fresh herbs and vegetables on a wooden counter",
    body: [
      "Our menu is written each morning, on paper, by whoever walked the garden first. It changes more often than most guests expect.",
      "This is less a philosophy than a constraint. The village market runs twice a week and the coast decides the rest. We cook what exists.",
      "The result is a table that tastes like a specific week in a specific place — which is, we think, the entire point of eating somewhere far from home.",
    ],
  },
];

export const getArticle = (slug: string) => articles.find((article) => article.slug === slug);
