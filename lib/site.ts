// Single place to edit: store URLs, social links, contact, and product images.
// To swap a screenshot, replace the file in /public/images (same name) or change the path here.

export const STORES = {
  ios: {
    label: "App Store",
    href: "#download",
    status: "Coming soon",
    isLive: false,
  },
  android: {
    label: "Google Play",
    href: "https://play.google.com",
    status: "Out now",
    isLive: true,
  },
};

export const LEGAL = {
  privacy: "/privacy",
  terms: "/terms",
};

export const CONTACT = {
  email: "support@riffly.click", // Placeholder: replace with actual support email
  feedback: "feedback@riffly.click",
};

export const SOCIAL = [
  { label: "Instagram", href: "#instagram-url" }, // TODO: Insert Instagram URL
  { label: "TikTok", href: "#tiktok-url" },       // TODO: Insert TikTok URL
  { label: "YouTube", href: "#youtube-url" },     // TODO: Insert YouTube URL
];

export const IMAGES = {
  home: {
    src: "/images/mockup1.jpeg",
    alt: "Riffly home screen showing upcoming gigs, practice streak, and quick shortcuts",
  },
  gigs: {
    src: "/images/mockup2.jpeg",
    alt: "Riffly gigs screen with the gig calendar and show details",
  },
  practice: {
    src: "/images/mockup4.jpeg",
    alt: "Riffly practice screen with goals, progress ring, and session history",
  },
  profile: {
    src: "/images/mockup3.jpeg",
    alt: "Riffly musician profile screen with instrument tags and connections",
  },
};

export interface FeatureItem {
  name: string;
  line: string;
  summary: string;
  points: string[];
}

export const FEATURES: FeatureItem[] = [
  {
    name: "Gigs",
    line: "Every performance, in one calendar.",
    summary: "Keep dates, venues, call times, and lineup details organised without digging through chat threads.",
    points: [
      "Dedicated gig calendar for upcoming and past performances",
      "Key gig details: venue, call time, stage time, and lineup",
      "Attach setlists and notes directly to the event",
      "Track fee and invoice status per show",
    ],
  },
  {
    name: "Setlists",
    line: "The right songs, in the right order.",
    summary: "Build running orders for each performance and keep them right where you need them on stage.",
    points: [
      "Create and order songs for specific gigs or general rehearsals",
      "Keep setlists linked directly to their scheduled gig",
      "Quick stage-ready view for rehearsals and live shows",
    ],
  },
  {
    name: "Practice",
    line: "Show up prepared, and see it add up.",
    summary: "Log your practice sessions, stay accountable with weekly goals, and track your active streaks.",
    points: [
      "Log practice sessions with duration and focus notes",
      "Set weekly practice time targets and view progress",
      "Review your complete practice history and streaks",
    ],
  },
  {
    name: "Business",
    line: "The paperwork, handled.",
    summary: "Create clean, professional PDF invoices for gig fees, rehearsals, and session work.",
    points: [
      "Generate clean invoices for your musical services",
      "Include gig details, agreed rates, and payment notes",
      "Download or share invoice documents directly with clients",
    ],
  },
  {
    name: "Profile",
    line: "Your musical identity, one page.",
    summary: "A focused musician profile showcasing your instruments, genres, experience, and credits.",
    points: [
      "Display your primary and secondary instruments",
      "Highlight genres, location, and bio",
      "Keep track of gigs played and rehearsal milestones",
    ],
  },
  {
    name: "Connections",
    line: "Find the people to play with.",
    summary: "Discover other working musicians, build your trusted roster, and connect for future gigs.",
    points: [
      "Discover vocalists, instrumentalists, and producers",
      "Connect and expand your active network for calls and deps",
      "Direct access to player profiles when building lineups",
    ],
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is Riffly?",
    answer:
      "Riffly is a focused mobile app for musicians and music creatives. It brings together gigs, setlists, practice tracking, invoices, musician profiles, and connections in one streamlined workflow.",
  },
  {
    question: "Who is Riffly for?",
    answer:
      "Riffly is built for musicians and music creatives, including vocalists, instrumentalists, producers, session players, bandleaders, and other creatives who want a simpler way to manage their music work.",
  },
  {
    question: "What can I do with Riffly?",
    answer:
      "With Riffly V1, you can manage your gig calendar and show details, attach setlists to gigs, log practice sessions and track goals and streaks, generate invoices for your musical work, build a musician profile, and connect with other musicians.",
  },
  {
    question: "Can I manage my gigs with Riffly?",
    answer:
      "Yes. Riffly includes a dedicated gig calendar where you can record upcoming and past shows, call times, venue information, lineup details, setlists, and payment notes.",
  },
  {
    question: "Can I track my practice with Riffly?",
    answer:
      "Yes. You can log individual practice sessions, set weekly practice time goals, record focus areas, and build consistent habits with practice history and streak tracking.",
  },
  {
    question: "Can I create invoices with Riffly?",
    answer:
      "Yes. You can generate clean, professional invoices for your performance and session work directly within Riffly.",
  },
  {
    question: "Can I connect with other musicians?",
    answer:
      "Yes. You can create a musician profile, discover other vocalists, instrumentalists, producers, and musicians, and connect with people for collaborations, deps, and band lineups.",
  },
  {
    question: "Is Riffly available on iOS and Android?",
    answer:
      "Riffly is available on Android through Google Play, with the iOS version coming soon. Check the Riffly website or follow Riffly's channels for availability updates.",
  },
  {
    question: "What is the difference between Riffly Free and Riffly Pro?",
    answer:
      "Riffly Free includes essential tools with monthly limits on practice goals, gigs, setlists, and invoices. Riffly Pro removes those limits and adds additional tools such as practice reminders, analytics, business tools, and priority support. Pro is available monthly or annually.",
  },
];

export interface PricingPlan {
  name: string;
  badge?: string;
  savings?: string;
  tagline: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  isPopular?: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Free",
    tagline: "Essential tools for any musician starting out.",
    price: "Free",
    description: "Get organized and keep your core music routine in flow with essential monthly limits.",
    features: [
      "Unlimited pratice logging",
       "Unlimited Networking",
      "Up to 2 practice goals",
      "Up to 2 active gigs",
      "Up to 2 setlists",
      "Up to 2 invoices",
    ],
    ctaLabel: "Get Started",
    ctaHref: "#download",
    isPopular: false,
  },
  {
    name: "Pro Monthly",
    tagline: "Full unlimited access on a flexible monthly basis.",
    price: "₦2,500",
    period: "/month",
    description: "Power your live performance schedule, daily practice, and music business with zero limits.",
    features: [
      "Unlimited practice goals – Set as manu goals as you need.",
      "Unlimited gigs – Book as many gigs as you want. No 2-gig limit.",
      "Unlimited setlists – Create unlimited setlists for every performance.",
      "Unlimited invoices – Bill every gig without limit.",
       "Unlimited Networking",
    ],
    ctaLabel: "Go Pro",
    ctaHref: "#download",
    isPopular: false,
  },
  {
    name: "Pro Yearly",
    badge: "Best Value",
    savings: "Save ₦5,000",
    tagline: "Full unlimited year of Riffly with maximum savings.",
    price: "₦25,000",
    period: "/year",
    description: "The best value for committed active musicians. Enjoy a full year of unlimited tools and save ₦5,000.",
    features: [
      "Unlimited practice goals – Set as manu goals as you need.",
      "Unlimited gigs – Book as many gigs as you want. No 2-gig limit.",
      "Unlimited setlists – Create unlimited setlists for every performance.",
      "Unlimited invoices – Bill every gig without limit.",
    ],
    ctaLabel: "Go Pro Yearly",
    ctaHref: "#download",
    isPopular: true,
  },
];


