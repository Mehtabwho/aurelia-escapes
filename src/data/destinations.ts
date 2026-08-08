import destCove from "@/assets/dest-cove.jpg";
import destTrail from "@/assets/dest-trail.jpg";
import destSunset from "@/assets/dest-sunset.jpg";
import destVillage from "@/assets/dest-village.jpg";

export type Destination = {
  index: string;
  name: string;
  description: string;
  distance: string;
  image: string;
  alt: string;
  /** marker position in percent, for the map-style composition */
  x: number;
  y: number;
};

export const destinations: Destination[] = [
  {
    index: "01",
    name: "Hidden Cove",
    description: "A twenty-minute walk down the cliff path to water no boat can reach.",
    distance: "1.4 km on foot",
    image: destCove,
    alt: "Turquoise hidden cove framed by pale limestone rocks",
    x: 26,
    y: 62,
  },
  {
    index: "02",
    name: "Mountain Trail",
    description: "A ridge walk through wild grass and stone, best begun before sunrise.",
    distance: "6 km loop",
    image: destTrail,
    alt: "Stone trail winding along a green mountain ridge in morning mist",
    x: 58,
    y: 28,
  },
  {
    index: "03",
    name: "Sunset Point",
    description: "One pine, one bench, and the last forty minutes of light over the water.",
    distance: "800 m from the terrace",
    image: destSunset,
    alt: "Silhouetted pine tree against a golden sunset over the sea",
    x: 78,
    y: 54,
  },
  {
    index: "04",
    name: "Local Village",
    description: "Whitewashed lanes, a Tuesday market, and the baker who supplies our kitchen.",
    distance: "9 km by car",
    image: destVillage,
    alt: "Quiet whitewashed village lane with bougainvillea",
    x: 44,
    y: 82,
  },
];
