import roomGarden from "@/assets/room-garden.jpg";
import roomOcean from "@/assets/room-ocean.jpg";
import roomHorizon from "@/assets/room-horizon.jpg";
import roomBath from "@/assets/room-bath.jpg";
import expStay from "@/assets/exp-stay.jpg";
import introDetail from "@/assets/intro-detail.jpg";

export type Room = {
  slug: string;
  name: string;
  index: string;
  summary: string;
  description: string;
  price: number;
  size: string;
  guests: string;
  bed: string;
  view: string;
  category: "suite" | "villa" | "residence";
  meta: string[];
  amenities: string[];
  image: string;
  gallery: { src: string; alt: string }[];
};

export const rooms: Room[] = [
  {
    slug: "the-garden-suite",
    name: "The Garden Suite",
    index: "01",
    summary: "Private garden · King bed · 62 m²",
    description:
      "A ground-level suite wrapped around its own walled garden. Mornings arrive slowly here — filtered through olive leaves, warm on the limewash walls. Designed for one long, unhurried stay rather than a quick night away.",
    price: 420,
    size: "62 m²",
    guests: "2 guests",
    bed: "King bed",
    view: "Private garden",
    category: "suite",
    meta: ["Private garden", "King bed", "62 m²"],
    amenities: [
      "Walled private garden",
      "Outdoor rain shower",
      "Handmade linen bedding",
      "Stone soaking tub",
      "Breakfast served in the garden",
      "Nightly turndown ritual",
    ],
    image: roomGarden,
    gallery: [
      { src: roomGarden, alt: "Garden suite interior opening onto a walled private garden" },
      { src: roomBath, alt: "Stone basin and brass fittings in the suite bathroom" },
      { src: introDetail, alt: "Linen and ceramic details on a stone ledge" },
    ],
  },
  {
    slug: "the-ocean-villa",
    name: "The Ocean Villa",
    index: "02",
    summary: "Private terrace · Ocean view · 84 m²",
    description:
      "A villa built for the horizon. Timber shutters fold away entirely, so the terrace, the room and the sea become a single continuous space. Evenings end here, with the last of the light on the water.",
    price: 680,
    size: "84 m²",
    guests: "2 guests",
    bed: "King bed & daybed",
    view: "Open sea",
    category: "villa",
    meta: ["Private terrace", "Ocean view", "84 m²"],
    amenities: [
      "Sea-facing stone terrace",
      "Outdoor daybed",
      "Freestanding bath",
      "Curated minibar",
      "In-villa dining",
      "Sunrise swim access",
    ],
    image: roomOcean,
    gallery: [
      { src: roomOcean, alt: "Ocean villa terrace with a linen daybed above the sea" },
      { src: expStay, alt: "Villa bedroom in early morning light" },
      { src: roomBath, alt: "Minimal stone bathroom with brass tap" },
    ],
  },
  {
    slug: "the-horizon-residence",
    name: "The Horizon Residence",
    index: "03",
    summary: "Infinity pool · Panoramic view · 120 m²",
    description:
      "The most private address at AURELIA. A residence set apart on the ridge, with an infinity pool that dissolves into the water beyond it and no neighbours in any direction.",
    price: 1240,
    size: "120 m²",
    guests: "4 guests",
    bed: "Two king bedrooms",
    view: "Panoramic ridge",
    category: "residence",
    meta: ["Infinity pool", "Panoramic view", "120 m²"],
    amenities: [
      "Private infinity pool",
      "Two bedrooms, two baths",
      "Outdoor fireplace",
      "Private chef on request",
      "Dedicated host",
      "Airport transfer included",
    ],
    image: roomHorizon,
    gallery: [
      { src: roomHorizon, alt: "Infinity pool at dusk overlooking the sea and mountains" },
      { src: roomOcean, alt: "Stone terrace with daybed at golden hour" },
      { src: expStay, alt: "Residence bedroom opening to the landscape" },
    ],
  },
  {
    slug: "the-olive-loft",
    name: "The Olive Loft",
    index: "04",
    summary: "Treetop terrace · Queen bed · 54 m²",
    description:
      "A small upper-floor room tucked into the olive grove. Modest in size, generous in light — the quietest corner of the retreat, and the one guests ask for again.",
    price: 340,
    size: "54 m²",
    guests: "2 guests",
    bed: "Queen bed",
    view: "Olive grove",
    category: "suite",
    meta: ["Treetop terrace", "Queen bed", "54 m²"],
    amenities: [
      "Terrace among the olive trees",
      "Reading nook",
      "Rain shower",
      "Linen robes",
      "Morning pastry service",
      "Wellness access included",
    ],
    image: expStay,
    gallery: [
      { src: expStay, alt: "Loft bedroom with open doors onto the olive grove" },
      { src: introDetail, alt: "Linen, ceramic cup and olive branch detail" },
      { src: roomBath, alt: "Stone basin bathroom in warm daylight" },
    ],
  },
];

export const getRoom = (slug: string) => rooms.find((room) => room.slug === slug);
