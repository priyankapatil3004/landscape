// Static content for the Omkar Landscape site. All copy lives here so it can
// later be lifted into a headless CMS or admin dashboard without touching JSX.

export const DEFAULT_SETTINGS = {
  brand_name: "Omkar Landscape",
  tagline: "Crafting timeless landscapes",
  contact_email: "omkar@omkarlandscape.com",
  contact_phone: "+91 8767952504",
  whatsapp_number: "918767952504",
  address: "Wakad, Pune, Maharashtra 411057",
  region: "Maharashtra",
  country: "IN",
};

export type SiteSettings = typeof DEFAULT_SETTINGS;

export const BRAND = {
  name: "Omkar Landscape",
  domain: "omkarlandscape.com",
  email: "omkar@omkarlandscape.com",
  phone: "+91 8767952504",
  whatsapp: "918767952504",
  address:
    "A/P Shantai Farm, Shedge Wasti, Wakad, Shankar Kalat Nagar, Pune, Maharashtra 411057",
  addressShort: "Wakad, Pune 411057",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Shantai+Farm+Shedge+Wasti+Wakad+Pune+411057",
  founder: {
    name: "Omkar Wadghare",
    role: "Founder & Principal Designer",
    yearsExperience: "10+",
    bio: "With over a decade of hands-on experience in the landscape industry, Omkar Wadghare has designed, built and cared for gardens across homes, farmhouses and commercial estates in and around Pune. His practice is rooted in a deep understanding of native plants, honest materials and site-first thinking — every project is walked, sketched and supervised personally.",
    bioShort:
      "10+ years shaping calm, living gardens across Pune and Maharashtra — hands-on, site-first, and deeply personal.",
  },
  socials: {
    instagram: "https://instagram.com/omkarlandscape",
    facebook: "https://facebook.com/omkarlandscape",
    youtube: "https://youtube.com/@omkarlandscape",
    linkedin: "https://linkedin.com/company/omkarlandscape",
    twitter: "https://x.com/omkarlandscape",
    whatsapp: "https://wa.me/918767952504",
  },
  credit: {
    label: "AnuRajya Technologies",
    url: "https://anurajya.com/",
  },
};

// ------------------------------- Process --------------------------------

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "First Site Visit",
    description:
      "We visit your site to understand the available space, land level, soil condition, sunlight, water access and complete project requirement. This helps us suggest the right landscaping solution for your home, farmhouse, society or commercial space.",
  },
  {
    number: "02",
    title: "Quotation & Planning",
    description:
      "After the site visit, we prepare the work scope, material requirement, plant selection, execution plan and estimated timeline. Planning is done based on precise site measurements, client needs and practical maintenance requirements.",
  },
  {
    number: "03",
    title: "Execution Process",
    description:
      "Once the plan is approved, our team starts the on-site work. Execution can include soil preparation, plantation, lawn installation, softscape work, irrigation support, planter setup and final garden finishing.",
  },
] as const;

// ------------------------------- Nursery --------------------------------

export type NurseryLocation = {
  name: string;
  address: string;
  mapsUrl: string;
  description: string;
  highlights: string[];
};

export const SAIRAJ_NURSERY = {
  brand: "Sairaj Nursery",
  tagline: "Premium plants that power every Omkar Landscape project",
  description:
    "Our own nursery ensures every landscape project receives healthy, climate-suited plants. From residential gardens to commercial green belts, we grow and source ornamentals, shrubs, trees, palms, lawn material and garden inputs directly from our nurseries.",
  locations: [
    {
      name: "Sairaj Nursery – Wakad",
      address: "A/P Shantai Farm, Shedge Wasti, Wakad, Shankar Kalat Nagar, Wakad, Pune, Maharashtra 411057",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sairaj+Nursery+Wakad+Pune+411057",
      description:
        "Our main nursery near Wakad supplies plants, lawn rolls, soil and garden inputs for Pune city projects. Ideal for home visits and quick material pickup.",
      highlights: ["Plant supply", "Lawn material", "Garden inputs", "Site consultation"],
    },
    {
      name: "Sairaj Nursery – Chande, Mulshi",
      address: "Chande, Mulshi, Pune, Maharashtra 412115",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sairaj+Nursery+Chande+Mulshi+Pune+412115",
      description:
        "A larger nursery spread serving farmhouse, resort and estate-scale projects across Mulshi and the Pune countryside. Source for specimen trees, palms and bulk plantation.",
      highlights: ["Specimen trees", "Palms & shrubs", "Bulk plantation", "Farmhouse projects"],
    },
  ] as const satisfies NurseryLocation[],
};

// ------------------------------- Services --------------------------------

export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  order: number;
  visible: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "landscape-execution",
    title: "Landscape Execution",
    description:
      "Complete garden development and landscape execution for residential, commercial, industrial and farmhouse projects — converting open areas into beautifully finished green spaces.",
    image:
      "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Landscaped garden with layered planting and pathway",
    order: 1,
    visible: true,
  },
  {
    slug: "lawn-supply-installation",
    title: "Lawn Supply & Installation",
    description:
      "Professional lawn supply and installation for homes, bungalows, societies, farmhouses and commercial properties — clean, fresh, attractive green lawns built to last.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Manicured green lawn with trees in the background",
    order: 2,
    visible: true,
  },
  {
    slug: "plant-supply-plantation",
    title: "Plant Supply & Plantation",
    description:
      "Selection and plantation of suitable plants, shrubs, trees and decorative greenery based on sunlight, soil condition, space and long-term maintenance needs.",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Nursery plants and shrubs ready for plantation",
    order: 3,
    visible: true,
  },
  {
    slug: "commercial-landscaping",
    title: "Commercial Landscaping",
    description:
      "Landscape development for offices, commercial buildings, hospitals, retail spaces, showrooms and business premises — focused on a clean, premium and professional outdoor appearance.",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Commercial building surrounded by manicured landscape",
    order: 4,
    visible: true,
  },
  {
    slug: "industrial-landscaping",
    title: "Industrial Landscaping",
    description:
      "Large-scale landscaping and green belt development for industrial premises, factories, warehouses and open commercial land areas.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Wide industrial premises with a green belt of trees",
    order: 5,
    visible: true,
  },
  {
    slug: "residential-landscaping",
    title: "Residential Landscaping",
    description:
      "Garden development for villas, bungalows, row houses, farmhouses and premium residences — outdoor spaces that feel peaceful, elegant and easy to maintain.",
    image:
      "https://images.unsplash.com/photo-1445264718234-a623be589d37?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Villa garden with lawn, plants and outdoor seating",
    order: 6,
    visible: true,
  },
  {
    slug: "tree-transplantation",
    title: "Tree Transplantation",
    description:
      "Safe shifting and replantation of mature trees and palms with proper trimming, rootball preparation and complete site handling support.",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Mature tree being carefully lifted for transplantation",
    order: 7,
    visible: true,
  },
  {
    slug: "landscape-design-boq",
    title: "Landscape Design & BOQ Planning",
    description:
      "Landscape planning, plantation layout, material requirement planning and BOQ support for new garden and outdoor development projects.",
    image:
      "https://images.unsplash.com/photo-1503174971373-b1f69850bded?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Landscape design drawings and plant layout on a desk",
    order: 8,
    visible: true,
  },
  {
    slug: "frp-planters",
    title: "FRP Planters Supply & Setup",
    description:
      "Supply and setup of FRP planters for indoor, outdoor, terrace, commercial and premium landscape spaces in a range of sizes and styles.",
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern FRP planters with green foliage",
    order: 9,
    visible: true,
  },
  {
    slug: "drain-cell-geotextile-grass-pavers",
    title: "Drain Cell, Geotextile & Grass Pavers",
    description:
      "Supply and installation of drain cells, geotextile layers and grass pavers for terrace gardens, podium landscapes and proper water drainage in landscape areas.",
    image:
      "https://images.unsplash.com/photo-1568385247474-a05dc4f0f6a2?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Grass pavers laid into a driveway surface",
    order: 10,
    visible: true,
  },
  {
    slug: "irrigation-sprinkler",
    title: "Irrigation & Sprinkler Systems",
    description:
      "Irrigation and sprinkler line setup as part of complete landscape execution — supporting healthy plant growth and easier long-term garden maintenance.",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Sprinkler watering a green lawn",
    order: 11,
    visible: true,
  },
  {
    slug: "soil-manure-cocopeat",
    title: "Soil, Manure & Cocopeat Supply",
    description:
      "Bulk supply and setup of red soil, manure, cocopeat, vermicompost and other garden materials as per your project requirement.",
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Bags of garden soil, manure and cocopeat",
    order: 12,
    visible: true,
  },
];

// Kept for the enquiry form dropdown.
export const SERVICE_OPTIONS = [
  ...SERVICES.map((s) => s.title),
  "Other",
] as const;

export const LEAD_STATUS_OPTIONS: Array<{
  value:
    | "new"
    | "contacted"
    | "site_visit_scheduled"
    | "quotation_sent"
    | "converted"
    | "closed";
  label: string;
}> = [
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "site_visit_scheduled", label: "Site Visit Scheduled" },
  { value: "quotation_sent", label: "Quotation Sent" },
  { value: "converted", label: "Converted" },
  { value: "closed", label: "Closed" },
];
