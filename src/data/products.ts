import fullBeef from "../assets/full-beef.png";
import halfBeef from "../assets/half-beef.png";
import quarterBeef from "../assets/quarter-beef.png";
import eighthBeef from "../assets/eighth-beef.png";
import pigCuts from "../assets/products/pig-cuts.jpg";
import type { ImageMetadata } from "astro";

export type Product = {
  slug: string;
  name: string;
  price: string;
  weight: string;
  shortDesc: string;
  /** Optional short tag shown above the title in the modal (e.g. "Most Popular") */
  badge?: string;
  /** Hanging weight range, e.g. "275–350 lbs" */
  hangingWeight?: string;
  /** Expected packaged yield, e.g. "150–230 lbs" */
  packagedYield?: string;
  /** A 1–2 line note shown above the cut list in the modal */
  note?: string;
  /** Itemized list of cuts shown as bullets in the modal */
  cuts?: string[];
  /** Trailing line in the modal — usually starts with "Plus:" */
  plus?: string;
  /** Fallback long description for products without a structured breakdown (e.g. pigs) */
  longDesc?: string;
  image: ImageMetadata | null;
  available: boolean;
};

export const products: Product[] = [
  {
    slug: "full-beef",
    name: "Full Beef",
    price: "$3,500",
    weight: "~550 lbs packaged",
    shortDesc: "Whole-animal share. Feeds a family for the year.",
    hangingWeight: "600–700 lbs",
    packagedYield: "550 lbs",
    note: "Double everything in the ½ Beef. Ideal for large families or long-term storage.",
    cuts: [
      "Ribeye Steaks: 25–40+ steaks",
      "NY Strip Steaks: 20–32+ steaks",
      "Filet Mignon: 12–20+ steaks",
      "Sirloin Steaks: 16–24+ steaks",
      "T-Bones / Porterhouse: 16–28+ steaks",
      "London Broil: 4–8 roasts",
      "Tri-Tip: 2–4 roasts",
      "Flank Steak: 2–4 steaks",
      "Fajita Meat: 8–16+ lbs",
      "Roasts: 80–120+ lbs total",
      "Brisket: 16–30+ lbs",
      "Stew Meat: 20–40+ lbs",
      "Ground Chuck / Ground Beef: 100–180+ lbs",
    ],
    plus: "Plus: All ribs, bones, tallow, and optional organs.",
    image: fullBeef,
    available: true,
  },
  {
    slug: "half-beef",
    name: "1/2 Beef",
    price: "$2,200",
    weight: "~150–230 lbs packaged",
    shortDesc: "Half-animal share. The most popular size.",
    badge: "Most Popular",
    hangingWeight: "~275–350 lbs",
    packagedYield: "~150–230 lbs",
    cuts: [
      "Ribeye Steaks: 12–20 steaks (¾–1¼” thick)",
      "NY Strip Steaks: 10–16 steaks",
      "Filet Mignon: 6–10 steaks",
      "Sirloin Steaks: 8–12 steaks",
      "T-Bones / Porterhouse: 8–14 steaks",
      "London Broil: 2–4 roasts (~3–5 lbs each)",
      "Tri-Tip: 1–2 roasts",
      "Flank Steak: 1–2 steaks",
      "Fajita Meat (skirt/flank): 4–8 lbs",
      "Roasts (Chuck, Arm, Sirloin Tip, Rump, etc.): 40–60+ lbs total (multiple 3–5 lb roasts)",
      "Brisket: 8–15 lbs (whole or split)",
      "Stew Meat: 10–20 lbs",
      "Ground Chuck / Ground Beef: 50–90 lbs (in 1–2 lb packs)",
    ],
    plus: "Plus: Short ribs, soup bones, tallow/suet, internal organs (liver, heart, tongue — optional), and trim as requested.",
    image: halfBeef,
    available: true,
  },
  {
    slug: "quarter-beef",
    name: "1/4 Beef",
    price: "$1,000",
    weight: "~200–230 lbs packaged",
    shortDesc: "Quarter share. Roughly six months of dinner.",
    hangingWeight: "300–350 lbs",
    packagedYield: "200–230 lbs",
    note: "Roughly half of a ½ beef (proportional share).",
    cuts: [
      "Ribeye Steaks: 6–10 steaks",
      "NY Strip Steaks: 5–8 steaks",
      "Filet Mignon: 3–5 steaks",
      "Sirloin Steaks: 4–6 steaks",
      "T-Bones: 4–7 steaks",
      "London Broil: 1–2 roasts",
      "Tri-Tip: 1 roast",
      "Flank Steak: 1 steak",
      "Fajita Meat: 2–5 lbs",
      "Roasts: 20–30+ lbs total",
      "Brisket: 4–8 lbs (half or smaller)",
      "Stew Meat: 5–10 lbs",
      "Ground Chuck / Ground Beef: 25–45 lbs",
    ],
    plus: "Plus: Short ribs, bones, tallow, and optional organs.",
    image: quarterBeef,
    available: true,
  },
  {
    slug: "eighth-beef",
    name: "1/8 Beef",
    price: "$500",
    weight: "~50–60 lbs packaged",
    shortDesc: "Smallest share. Fits in most fridge-top freezers.",
    hangingWeight: "80–90 lbs",
    packagedYield: "50–60 lbs",
    note: "Great entry size for trying grass-fed beef.",
    cuts: [
      "Ribeye Steaks: 3–6 steaks",
      "NY Strip Steaks: 2–5 steaks",
      "Filet Mignon: 2–4 steaks",
      "Sirloin Steaks: 2–4 steaks",
      "T-Bones: 2–4 steaks",
      "London Broil / Tri-Tip: 1 smaller roast",
      "Flank Steak: 1 small or shared",
      "Fajita Meat: 1–3 lbs",
      "Roasts: 8–15 lbs total (2–4 roasts)",
      "Brisket: 2–5 lbs",
      "Stew Meat: 3–6 lbs",
      "Ground Chuck / Ground Beef: 15–30 lbs",
    ],
    plus: "Plus: Smaller amounts of ribs, bones, tallow, and optional organs.",
    image: eighthBeef,
    available: true,
  },
  {
    slug: "full-pig",
    name: "Full Pig",
    price: "$900",
    weight: "~120–160 lbs",
    shortDesc: "Whole pasture-raised pork share. Cut to your specifications.",
    longDesc:
      "Approximately 120–160 lbs of pasture-raised pork, vacuum-sealed and flash-frozen. Includes pork chops, bacon, ham, pork shoulder, ribs, sausage, ground pork, tenderloin, and lard. Cut to your specifications. Whole-animal share — perfect for families filling a freezer for the year.",
    image: pigCuts,
    available: true,
  },
  {
    slug: "half-pig",
    name: "1/2 Pig",
    price: "$500",
    weight: "~60–80 lbs",
    shortDesc: "Half pasture-raised pork share. Premium pork without the full hog.",
    longDesc:
      "Approximately 60–80 lbs of pasture-raised pork. Includes pork chops, bacon, ham, pork shoulder, ribs, sausage, ground pork, and tenderloin. Half-share for the family that wants premium pork without committing to a full hog.",
    image: pigCuts,
    available: true,
  },
];
