// Fallback landscape imagery — high-quality Unsplash sources.
// Replaced automatically when admin uploads brand images and edits section content.

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=80";

export const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80";

export const FOUNDER_IMAGE =
  "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1000&q=80";

export const SERVICE_IMAGES: Record<string, string> = {
  "landscape-design":
    "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
  "garden-development":
    "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=1200&q=80",
  "lawn-development":
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
  "terrace-garden":
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  "farmhouse-landscaping":
    "https://images.unsplash.com/photo-1445264718234-a623be589d37?auto=format&fit=crop&w=1200&q=80",
  "commercial-maintenance":
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1200&q=80",
  "plant-supply":
    "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80",
  other:
    "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80",
};

export const PROJECT_FALLBACKS = [
  {
    slug: "verdant-courtyard",
    title: "Verdant Courtyard Residence",
    category: "Residential",
    location: "Pune",
    description:
      "A private inner courtyard reworked into a shaded reading garden with terracotta paving and native ferns.",
    cover_image_url:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
    cover_image_alt: "Green courtyard with paved walkway",
  },
  {
    slug: "hilltop-farmhouse",
    title: "Hilltop Farmhouse Grounds",
    category: "Farmhouse",
    location: "Nashik",
    description:
      "A ten-acre estate composed around lawn rooms, orchard blocks and a long avenue of gulmohars.",
    cover_image_url:
      "https://images.unsplash.com/photo-1445264718234-a623be589d37?auto=format&fit=crop&w=1200&q=80",
    cover_image_alt: "Farmhouse with landscaped lawn",
  },
  {
    slug: "canopy-terrace",
    title: "Canopy Terrace Garden",
    category: "Terrace",
    location: "Mumbai",
    description:
      "A rooftop planted for four seasons, with structural planters and a wind-tuned plant palette.",
    cover_image_url:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    cover_image_alt: "Rooftop terrace garden with planters",
  },
  {
    slug: "corporate-campus",
    title: "Corporate Campus Grounds",
    category: "Commercial",
    location: "Pune",
    description:
      "Structured landscape for a technology campus, delivered with a five-year maintenance schedule.",
    cover_image_url:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1200&q=80",
    cover_image_alt: "Corporate campus landscape",
  },
  {
    slug: "riverbend-villa",
    title: "Riverbend Villa Garden",
    category: "Residential",
    location: "Lonavla",
    description:
      "A villa garden that opens toward the river, layered with grasses, boulders and evening lighting.",
    cover_image_url:
      "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=1200&q=80",
    cover_image_alt: "Villa garden by the river",
  },
  {
    slug: "boutique-hotel",
    title: "Boutique Hotel Landscape",
    category: "Hospitality",
    location: "Alibaug",
    description:
      "Arrival court, spa courtyard, and pool garden for a coastal boutique hotel.",
    cover_image_url:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80",
    cover_image_alt: "Boutique hotel courtyard garden",
  },
];

export const GALLERY_FALLBACKS = [
  "https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1445264718234-a623be589d37?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80",
];
