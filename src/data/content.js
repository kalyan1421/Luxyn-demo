/* All page copy and assets in one place. Image URLs are verified Unsplash
   photos chosen to fit the LUXYN palette (navy, ivory, champagne gold). */

const img = (id, w) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const brand = {
  name: "LUXYN",
  lockup: "Salon · Wellness · Spa",
  tagline: ["Your reset.", "Your ritual."],
};

export const nav = {
  links: [
    { label: "Suites", to: "/leasing" },
    { label: "Professionals", to: "/professionals" },
    { label: "Our Story", to: "/" },
  ],
  cta: { label: "Book a Tour", to: "/tour" },
};

export const hero = {
  sub: "LUXYN leases private, design-led suites to independent beauty and wellness professionals. A calm, elevated home for your craft.",
  primary: { label: "Lease a Suite", to: "/leasing" },
  secondary: { label: "Find a Pro", to: "/professionals" },
  image: {
    src: img("1633681926022-84c23e8cb2d6", 1200),
    alt: "Calm salon interior with styling chairs, marble floors and warm lighting",
  },
};

export const stats = [
  { value: "150+", label: "Locations across the U.S. and Canada" },
  { value: "1997", label: "Founded in San Antonio, Texas" },
  { value: "Top Franchise", label: "Ranked a top franchise by Entrepreneur Magazine" },
];

export const services = {
  heading: "Every craft under one roof.",
  sub: "Hundreds of independent professionals. Book the person who owns the chair, not just the chain that rents it.",
  cta: { label: "Find a Pro", to: "/professionals" },
  items: [
    {
      name: "Hair",
      detail: "Cuts, color, extensions and styling",
      image: img("1580618672591-eb180b1a973f", 900),
      alt: "Stylist blow-drying a client's hair",
      tall: true,
    },
    {
      name: "Barbering",
      detail: "Men's cuts, beard trims and razor shaves",
      image: img("1503951914875-452162b0f3f1", 900),
      alt: "Barber shaping a client's beard with scissors",
    },
    {
      name: "Nails",
      detail: "Manicure, pedicure and nail art",
      image: img("1604654894610-df63bc536371", 900),
      alt: "Manicured nails in black and tortoiseshell polish",
    },
    {
      name: "Skin & Makeup",
      detail: "Facials, lashes, brows and lip blushing",
      image: img("1570172619644-dfd03ed5d881", 900),
      alt: "Esthetician applying a facial treatment",
    },
    {
      name: "Wellness",
      detail: "Massage, body contouring and spa therapy",
      image: img("1583416750470-965b2707b355", 900),
      alt: "Warmly lit private sauna interior",
    },
  ],
};

export const suitePreview = {
  heading: "Your name on the door. Our team behind it.",
  lede: "Each suite is custom-built and move-in ready. You set your prices, keep your profits and run your own brand.",
  cta: { label: "Lease a Suite", to: "/leasing" },
  image: {
    src: img("1600948836101-f9ffda59d250", 1200),
    alt: "Salon suite with dark feature wall, round mirrors and product shelving",
  },
  features: [
    {
      title: "Full-time concierge",
      body: "Every location is staffed to greet your clients, handle deliveries and keep the building calm and cared for.",
    },
    {
      title: "Design-led interiors",
      body: "Sound-insulated walls, premium fixtures, your lighting and your playlist. A private studio, not a booth.",
    },
    {
      title: "Booking built in",
      body: "Scheduling, payments and marketing tools powered by Vagaro, included from day one.",
    },
  ],
};

export const quotes = {
  featured: {
    text: "“I've been coming to April for twelve years. She is timely, professional and considerate.”",
    name: "Carolyn Gilbert",
    role: "Client, The Forum",
  },
  pair: [
    {
      text: "“If you are planning to start your own business, check out this lovely place. Beautiful, chic and calm.”",
      name: "Atefeh Azad",
      role: "Suite Owner, Ballston Gateway",
    },
    {
      text: "“Beautiful, clean, well maintained, with awesome management on a professional level.”",
      name: "Benecia Harper",
      role: "Client, Mobile",
    },
  ],
};

export const locations = [
  "Ballston Gateway",
  "Dallas Pavilion West",
  "Casa Linda",
  "Oxnard",
  "Mobile",
  "San Antonio",
  "The Forum",
  "Canada",
];

export const tourBand = {
  heading: "See it in person.",
  sub: "Walk the halls, open a suite door and picture your name on it. Tours take about twenty-five minutes.",
  cta: { label: "Book a Tour", to: "/tour" },
};

/* ---------- Leasing page ---------- */

export const leasing = {
  heading: "Suites built around your ritual.",
  sub: "Three suite types, every one private, plumbed where it matters and finished like a place you would want to stay.",
  suites: [
    {
      name: "The Studio",
      blurb: "A single-station suite for stylists, barbers and nail artists building a one-chair brand.",
      points: ["One styling station", "Storage and retail shelving", "Shared shampoo lounge access"],
      image: img("1560066984-138dadb4c035", 900),
      alt: "Single styling station beside tall windows",
    },
    {
      name: "The Double",
      blurb: "A two-station suite for partners, assistants or a growing book that needs a second chair.",
      points: ["Two styling stations", "In-suite shampoo bowl", "Room for a waiting seat"],
      image: img("1633681926022-84c23e8cb2d6", 900),
      alt: "Two-station salon suite with marble floors",
    },
    {
      name: "The Wellness Room",
      blurb: "A quiet, plumbed room for massage, skincare and spa therapies, away from dryer noise.",
      points: ["Treatment-table layout", "Hot water in suite", "Dimmable lighting"],
      image: img("1583416750470-965b2707b355", 900),
      alt: "Warmly lit private treatment room",
    },
  ],
  included: {
    heading: "Every suite includes",
    items: [
      { title: "Full-time concierge", body: "A staffed front desk that greets clients and signs for deliveries." },
      { title: "Vagaro booking suite", body: "Scheduling, payments and marketing tools from day one." },
      { title: "Sound-insulated walls", body: "Your conversation stays in your suite." },
      { title: "Utilities and laundry", body: "Water, power, wifi and on-site laundry in the lease." },
      { title: "24/7 secure access", body: "Work the hours your book demands, not mall hours." },
      { title: "Your brand, your rules", body: "Set your prices, sell your retail, decorate your way." },
    ],
  },
};

/* ---------- Professionals page ---------- */

export const professionals = {
  heading: "Find your professional.",
  sub: "Every chair at LUXYN is owned by the person standing behind it. Browse by craft and book direct.",
  categories: ["All", "Hair", "Barbering", "Nails", "Skin & Makeup", "Wellness"],
  people: [
    {
      name: "Renata Vasquez",
      craft: "Hair",
      role: "Colorist and stylist",
      location: "Dallas Pavilion West",
      photo: img("1580489944761-15a19d654956", 600),
    },
    {
      name: "Darius Cole",
      craft: "Barbering",
      role: "Master barber",
      location: "Ballston Gateway",
      photo: img("1595152772835-219674b2a8a6", 600),
    },
    {
      name: "Lena Marsh",
      craft: "Nails",
      role: "Nail artist",
      location: "Casa Linda",
      photo: img("1544005313-94ddf0286df2", 600),
    },
    {
      name: "Amara Diallo",
      craft: "Skin & Makeup",
      role: "Makeup artist and brow specialist",
      location: "San Antonio",
      photo: img("1531123897727-8f129e1688ce", 600),
    },
    {
      name: "Mateo Reyes",
      craft: "Wellness",
      role: "Licensed massage therapist",
      location: "Oxnard",
      photo: img("1507003211169-0a1dd7228f2d", 600),
    },
    {
      name: "Jonah Pierce",
      craft: "Hair",
      role: "Precision cuts and styling",
      location: "The Forum",
      photo: img("1506794778202-cad84cf45f1d", 600),
    },
    {
      name: "Maeve Connolly",
      craft: "Skin & Makeup",
      role: "Esthetician",
      location: "Mobile",
      photo: img("1438761681033-6461ffad8d80", 600),
    },
  ],
};

/* ---------- Tour page ---------- */

export const tour = {
  heading: "Book a tour.",
  sub: "Twenty-five minutes, no pressure. Walk the building, see open suites and get straight answers on terms.",
  expectations: [
    { title: "Walk the building", body: "Reception, shampoo lounge, laundry and the suite hallways." },
    { title: "Open real suites", body: "See what is available now, not a showroom mockup." },
    { title: "Talk terms", body: "Lease length, what is included and when you could move in." },
  ],
  locationsOptions: ["Ballston Gateway", "Dallas Pavilion West", "Casa Linda", "Oxnard", "Mobile", "San Antonio", "The Forum"],
  suiteOptions: ["The Studio", "The Double", "The Wellness Room", "Not sure yet"],
  success: {
    heading: "Request received.",
    body: "We'll confirm your tour time within one business day. Check your email for the details.",
  },
};

/* ---------- Footer ---------- */

export const footer = {
  blurb: "Private salon, wellness and spa suites for independent professionals since 1997.",
  social: [
    { name: "Instagram", slug: "instagram", href: "https://instagram.com" },
    { name: "Facebook", slug: "facebook", href: "https://facebook.com" },
    { name: "YouTube", slug: "youtube", href: "https://youtube.com" },
  ],
  columns: [
    {
      title: "Explore",
      links: [
        { label: "Suites", to: "/leasing" },
        { label: "Professionals", to: "/professionals" },
        { label: "Book a Tour", to: "/tour" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Our Story", to: "/" },
        { label: "Careers", to: "/" },
        { label: "News", to: "/" },
      ],
    },
  ],
  contact: {
    address: ["1723 North Loop 1604 E., Suite 202", "San Antonio, TX 78232"],
    phone: "210.314.3126",
    email: "hello@luxyn.com",
  },
  legal: {
    note: "© 2026 LUXYN. Each location is independently owned and operated.",
    links: [
      { label: "Privacy Policy", to: "/" },
      { label: "Terms & Conditions", to: "/" },
      { label: "Accessibility", to: "/" },
    ],
  },
};
