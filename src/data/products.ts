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
  longDesc: string;
  image: ImageMetadata | null;
  available: boolean;
};

export const products: Product[] = [
  {
    slug: "full-beef",
    name: "Full Beef",
    price: "$3,500",
    weight: "~450 lbs",
    shortDesc: "Whole-animal share. 21-day dry-aged. Feeds a family for the year.",
    longDesc:
      "Approximately 450 lbs of vacuum-packed 100% farm-fresh beef, 21-day dry-aged. Includes ground beef, roasts, ribeye and NY strip steaks, filet, brisket, stew meat, short ribs, tallow, marrow bones, liver, tongue, and heart. $500 deposit, balance due before shipping.",
    image: fullBeef,
    available: true,
  },
  {
    slug: "half-beef",
    name: "1/2 Beef",
    price: "$2,200",
    weight: "~220 lbs",
    shortDesc: "Half-animal share. 20-day dry-aged. 100% grass-fed.",
    longDesc:
      "Includes ribeye steaks (8 lbs), NY strip steaks (6 lbs), filet mignon (4 lbs), sirloin (12 lbs), London broil (8 lbs), stew meat (10 lbs), ground chuck (120 lbs), fajita meat (8 lbs), T-bones (12 lbs), roasts (12 lbs), brisket (15+ lbs), tri-tip, flank (1.5+ lbs), plus internal organs.",
    image: halfBeef,
    available: true,
  },
  {
    slug: "quarter-beef",
    name: "1/4 Beef",
    price: "$1,000",
    weight: "~110 lbs",
    shortDesc: "Quarter share. The most popular size — 6 months of dinner.",
    longDesc:
      "25 lbs of ground beef, 3 roasts, 6 ribeye steaks, 6 NY strip steaks, 6 sirloin, 2 filet, skirt/flank steak, brisket, 3–4 packs stew meat / cube steak / stir fry, 2 packs short ribs, marrow soup bones, beef tallow, liver, internal organs, shank, free bones, neck.",
    image: quarterBeef,
    available: true,
  },
  {
    slug: "eighth-beef",
    name: "1/8 Beef",
    price: "$500",
    weight: "~62 lbs",
    shortDesc: "Smallest share. Fits in most fridge-top freezers.",
    longDesc:
      "62 lbs of finished beef plus free bones. Includes 15 lbs ground beef, 1 roast, 3 ribeye steaks, 3 NY strip steaks, 1 skirt/flank steak or filet, 1 brisket, 1 pack stew meat / cube steak / stir fry, 1 pack short ribs.",
    image: eighthBeef,
    available: true,
  },
  {
    slug: "full-pig",
    name: "Full Pig",
    price: "$1,500",
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
    price: "$800",
    weight: "~60–80 lbs",
    shortDesc: "Half pasture-raised pork share. Premium pork without the full hog.",
    longDesc:
      "Approximately 60–80 lbs of pasture-raised pork. Includes pork chops, bacon, ham, pork shoulder, ribs, sausage, ground pork, and tenderloin. Half-share for the family that wants premium pork without committing to a full hog.",
    image: pigCuts,
    available: true,
  },
];
