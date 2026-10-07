import type { SiteConfig } from "@/lib/types";

// The ONLY file a builder edits (plus images in /public).
// Empty or missing optional fields hide their section automatically.
// Use real facts only: the leads JSON, the IG profile, and posts. Never invent hours, prices, or reviews.
// No double hyphens anywhere in copy; the build fails if one slips in.

export const site: SiteConfig = {
  name: "Nailsbyblyssa",
  tagline: "Gel and structured nail art from a private home studio in Toronto.",
  category: "Gel and natural nail art",
  schemaType: "BeautySalon",
  area: "Toronto, ON",
  siteUrl: "https://nailsbyblyssa.vercel.app",

  theme: {
    preset: "floral-elegant",
    colors: { accent: "#120f10" },
  },
  // No profile picture URL in the brief; Instagram page fetch did not yield a usable logo.
  // Leave empty so the kit monogram fallback is used.
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Private home studio in Toronto",
    headline: "Creating and growing, one set at a time",
    subhead:
      "Dry manis, soft and hard gel, and structured nail art by appointment. Book online on Setmore, or send a DM if you need a different time.",
    images: [
      { src: "/images/fall-favourites.jpg", alt: "Fall nail art set by Nailsbyblyssa", width: 1080, height: 1440 },
      { src: "/images/spooky-set.jpg", alt: "Spooky season nail art set", width: 1080, height: 1440 },
      { src: "/images/hand-drawn-faces.jpg", alt: "Hand drawn face nail art", width: 1080, height: 1440 },
    ],
    primaryCta: { label: "Book on Setmore", href: "https://nailsbyblyssa.setmore.com" },
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Private home studio in Toronto",
    "Online booking via Setmore",
    "Natural nail and gel specialist",
    "Doing nails since 2020",
  ],

  about: {
    title: "Hi, I am Alyssa",
    body: [
      "I have been doing nails since 2020, and I always knew I wanted to be my own boss one day. Now I create gel and structured sets from my private home studio in Toronto, one appointment at a time.",
      "Whether you want a clean gel manicure, a structured set with art, or something from the seasonal Mix n Match collection, book a slot online or message me and we will make it work.",
    ],
    image: { src: "/images/hi-alyssa.jpg", alt: "Alyssa of Nailsbyblyssa", width: 1080, height: 1350 },
  },

  menu: {
    label: "Services",
    title: "Services",
    intro: "October Mix n Match pricing posted for gel and structured manicures. Full policies and updated prices are shared on Instagram.",
    variant: "list",
    groups: [
      {
        title: "October Mix n Match",
        note: "Prices posted October 1, 2026",
        items: [
          {
            name: "Gel Manicure",
            price: "$120",
            description: "Mix n Match gel manicure.",
            href: "https://www.instagram.com/p/Dd9FVmJm1QZ/",
          },
          {
            name: "Structured Manicure",
            price: "$130",
            description: "Soft gel with art Level 1, 2 or 3.",
            href: "https://www.instagram.com/p/Dd9FVmJm1QZ/",
          },
        ],
      },
      {
        title: "Also offered",
        note: "Ask when you book for current details",
        items: [
          { name: "Dry manis" },
          { name: "Soft and hard gel" },
          { name: "Events" },
          { name: "Courses" },
        ],
      },
    ],
    footnote: "Prices shown were posted for the October Mix n Match collection. Confirm when you book.",
  },

  gallery: {
    title: "Recent sets",
    items: [
      {
        src: "/images/spooky-set.jpg",
        width: 1080,
        height: 1440,
        alt: "Spooky season nail art",
        caption: "Spooky season sets",
        href: "https://www.instagram.com/p/DeMbasPkXMw/",
      },
      {
        src: "/images/october-mix.jpg",
        width: 1080,
        height: 1440,
        alt: "October Mix n Match nail designs",
        caption: "October Mix n Match",
        href: "https://www.instagram.com/p/Dd9FVmJm1QZ/",
      },
      {
        src: "/images/inspo-set.jpg",
        width: 1080,
        height: 1080,
        alt: "Inspired nail art set",
        caption: "Inspired set",
        href: "https://www.instagram.com/p/Dd6gwE7kYEb/",
      },
      {
        src: "/images/phone-match.jpg",
        width: 1080,
        height: 1440,
        alt: "Nails matching a phone case",
        caption: "When your nails match your phone case",
        href: "https://www.instagram.com/p/Dd4689MGxh7/",
      },
      {
        src: "/images/fall-favourites.jpg",
        width: 1080,
        height: 1440,
        alt: "Favourite fall nail art sets",
        caption: "Fall favourites",
        href: "https://www.instagram.com/p/Dd3-jXVEWk9/",
      },
      {
        src: "/images/besties-chair.jpg",
        width: 1080,
        height: 1920,
        alt: "Clients in the nail chair",
        caption: "A day in the nail chair",
        href: "https://www.instagram.com/p/DdyvTpLRww2/",
      },
      {
        src: "/images/hand-drawn-faces.jpg",
        width: 1080,
        height: 1440,
        alt: "Hand drawn face nail art",
        caption: "Hand drawn faces",
        href: "https://www.instagram.com/p/Ddtp9xrEXap/",
      },
      {
        src: "/images/nyc-set.jpg",
        width: 1080,
        height: 1440,
        alt: "NYC themed nail art set",
        caption: "Nailsbyblyssa in NYC",
        href: "https://www.instagram.com/p/DdtpYwOES5Q/",
      },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "nailsbyblyssa",
    embeds: [
      "https://www.instagram.com/p/DeMbasPkXMw/",
      "https://www.instagram.com/p/Dd9FVmJm1QZ/",
      "https://www.instagram.com/p/Dct3bYUD_Bt/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    label: "How to book",
    headerCtaLabel: "DM to book",
    title: "Book your appointment",
    intro:
      "Most clients book online on Setmore. If no slot works, send a DM and I will try to make it work. Tap below to open booking, or copy a starter message for Instagram.",
    dmMessage:
      "Hi Alyssa! I would love to book a nail appointment.\nPreferred date:\nService (gel or structured):\nDesign idea:",
    links: [
      { label: "Book on Setmore", href: "https://nailsbyblyssa.setmore.com" },
      { label: "Linktree", href: "https://linktr.ee/nailsbyblyssa_" },
    ],
    note: "Limited slots each month. Book early for the seasonal Mix n Match collection.",
  },

  reviews: { items: [] },

  faq: [
    {
      q: "How do I book?",
      a: "Use the Setmore booking link to pick a time. If nothing fits, send an Instagram DM and I will try to make it work.",
    },
    {
      q: "Where is the studio?",
      a: "Appointments are at my private home studio in Toronto. Details are shared when you book.",
    },
    {
      q: "What services do you offer?",
      a: "Dry manis, soft and hard gel, structured manicures with art, plus events and courses. October Mix n Match gel manicures are posted at $120 and structured manicures at $130.",
    },
    {
      q: "How long have you been doing nails?",
      a: "I have been doing nails since 2020, and I celebrated one year in my own home studio in 2026.",
    },
  ],

  contact: {
    title: "Contact and booking",
    area: "Toronto, Ontario",
    email: "nailsbyblyssa@gmail.com",
    socials: [
      { label: "TikTok @nailsbyblyssa", href: "https://www.tiktok.com/@nailsbyblyssa" },
      { label: "Linktree", href: "https://linktr.ee/nailsbyblyssa_" },
    ],
  },

  seo: {
    title: "Nailsbyblyssa | Gel and natural nail art in Toronto",
    description:
      "Gel and structured nail art from a private home studio in Toronto. Book dry manis, soft and hard gel on Setmore, or send a DM.",
    keywords: [
      "gel nails Toronto",
      "structured manicure Toronto",
      "nail art Toronto",
      "home studio nails Toronto",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
