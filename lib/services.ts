export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  benefits: string[];
  idealFor: string[];
  process: string[];
};

export const services: Service[] = [
  {
    slug: "skin-rejuvenation",
    title: "Skin Rejuvenation Therapy",
    shortDescription:
      "A layered facial ritual designed to restore clarity, hydration, and quiet luminosity.",
    description:
      "This restorative therapy blends advanced resurfacing with deep hydration to soften texture, support skin renewal, and reveal a smoother, more settled complexion.",
    duration: "75 minutes",
    price: "$240",
    image: "https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg",
    benefits: [
      "Brightens dull or tired skin",
      "Softens visible texture and congestion",
      "Supports hydration and skin comfort"
    ],
    idealFor: [
      "First signs of fatigue or dehydration",
      "Uneven tone after travel or stress",
      "Clients wanting a calm reset without harsh recovery"
    ],
    process: [
      "Personal skin consultation and cleansing ritual",
      "Targeted exfoliation with infusion layers",
      "Finishing massage and barrier-support hydration"
    ]
  },
  {
    slug: "laser-glow",
    title: "Laser Glow Treatment",
    shortDescription:
      "A refined light-based treatment for tone, radiance, and soft visible renewal.",
    description:
      "Laser Glow Treatment works with controlled energy to improve clarity, support collagen response, and refresh the appearance of skin with measured precision.",
    duration: "60 minutes",
    price: "$320",
    image: "https://images.pexels.com/photos/3985330/pexels-photo-3985330.jpeg",
    benefits: [
      "Helps refine tone and surface irregularity",
      "Encourages a clearer, more even glow",
      "Supports long-term skin refinement"
    ],
    idealFor: [
      "Pigmentation or uneven tone",
      "Post-summer skin renewal",
      "Clients comfortable with clinically guided laser care"
    ],
    process: [
      "Skin mapping and treatment calibration",
      "Laser session with cooling comfort measures",
      "Post-treatment serum application and recovery guidance"
    ]
  },
  {
    slug: "natural-lift-hifu",
    title: "Natural Lift Therapy (HIFU)",
    shortDescription:
      "Focused ultrasound to support natural definition, lift, and facial harmony over time.",
    description:
      "Natural Lift Therapy uses HIFU technology to stimulate deeper structural support, encouraging a firmer and more defined look while preserving softness and natural expression.",
    duration: "90 minutes",
    price: "$460",
    image: "https://images.pexels.com/photos/4586741/pexels-photo-4586741.jpeg",
    benefits: [
      "Encourages gradual lift and contour",
      "Supports collagen and firmness",
      "Non-surgical approach with minimal interruption"
    ],
    idealFor: [
      "Soft jawline or lower-face laxity",
      "Clients seeking subtle structural support",
      "Those preferring non-invasive treatment paths"
    ],
    process: [
      "Facial assessment and contour planning",
      "Layered HIFU treatment across targeted zones",
      "Recovery guidance with ongoing collagen timeline"
    ]
  },
  {
    slug: "contour-fillers",
    title: "Contour Harmony Fillers",
    shortDescription:
      "Softly placed dermal filler to restore balance, volume, and elegant proportion.",
    description:
      "Contour Harmony Fillers are approached with restraint and anatomical care, restoring volume only where it supports refinement, hydration, and balanced profile harmony.",
    duration: "50 minutes",
    price: "$390",
    image: "https://images.pexels.com/photos/3985338/pexels-photo-3985338.jpeg",
    benefits: [
      "Restores softness to areas of volume loss",
      "Improves facial balance with a light hand",
      "Maintains expression and natural movement"
    ],
    idealFor: [
      "Subtle lip, cheek, or chin enhancement",
      "Volume restoration with measured results",
      "Clients seeking natural-looking refinement"
    ],
    process: [
      "Facial harmony consultation and mapping",
      "Precise filler placement with comfort-led technique",
      "Aftercare and settling timeline review"
    ]
  }
];

export const serviceLookup = Object.fromEntries(
  services.map((service) => [service.slug, service])
) as Record<string, Service>;
