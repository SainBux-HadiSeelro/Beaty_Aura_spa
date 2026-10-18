import { services } from "./services";

export interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  quickReplies?: string[];
  actionLink?: {
    label: string;
    href: string;
  };
}

export const CLINIC_INFO = {
  name: "BeautyAura Luxury Aesthetic Retreat",
  shortName: "BeautyAura",
  tagline: "Reconnect With Your Natural Glow",
  address: "Ubud House, Serenity Avenue, Suite 400",
  phone: "+1 (555) 014-7788",
  email: "care@beautyaura.com",
  hours: {
    weekdays: "Monday – Friday: 9:00 AM – 7:00 PM",
    saturday: "Saturday: 10:00 AM – 6:00 PM",
    sunday: "Sunday: Private VIP Consultations by Prior Request"
  },
  consultationPolicy:
    "Complimentary initial 20-minute skin assessment with any treatment plan. Zero-pressure, calm guidance.",
  philosophy:
    "We believe in quiet luxury, facial harmony, and aesthetic restraint. Rather than radical alteration, our treatments enhance your inherent structure with medical precision and serene care."
};

export const QUICK_PROMPTS = [
  "✨ Recommend a treatment for dull skin",
  "💆 What is HIFU Natural Lift?",
  "💰 Treatment pricing & packages",
  "📅 How do I book a consultation?",
  "🌿 Clinic hours & location"
];

export function getSmartBotResponse(userQuery: string): {
  text: string;
  quickReplies?: string[];
  actionLink?: { label: string; href: string };
} {
  const query = userQuery.toLowerCase().trim();

  // Greetings
  if (
    query.match(/^(hi|hello|hey|salam|assalam|aoa|good morning|good afternoon|good evening|greetings)/i)
  ) {
    return {
      text: `Hello and welcome to **${CLINIC_INFO.name}**! 🌿\n\nI am **Aura**, your 24/7 dedicated Aesthetic Concierge. I can guide you through our treatments, suggest personalized skin therapies, provide transparent pricing, or reserve your private consultation.\n\nHow may I care for you today?`,
      quickReplies: [
        "✨ Treatment recommendation",
        "💰 View price list",
        "📅 Book consultation",
        "📍 Clinic location & hours"
      ]
    };
  }

  // Booking / Consultation
  if (
    query.includes("book") ||
    query.includes("appointment") ||
    query.includes("reserve") ||
    query.includes("schedule") ||
    query.includes("consultation")
  ) {
    return {
      text: `We would be honored to welcome you. 🌸\n\n**Consultation Details:**\n- **Duration:** 30–45 mins personal facial mapping\n- **Includes:** In-depth skin analysis & tailored treatment blueprint\n- **Policy:** ${CLINIC_INFO.consultationPolicy}\n\nYou can reserve instantly online or give our care team a call at **${CLINIC_INFO.phone}**.`,
      actionLink: {
        label: "Reserve Your Consultation",
        href: "/booking"
      },
      quickReplies: ["✨ Explore treatments first", "💰 Check treatment prices", "📞 Call clinic"]
    };
  }

  // Pricing / Cost
  if (
    query.includes("price") ||
    query.includes("cost") ||
    query.includes("fees") ||
    query.includes("rate") ||
    query.includes("how much") ||
    query.includes("pricing")
  ) {
    const serviceList = services
      .map((s) => `• **${s.title}**: ${s.price} (${s.duration})`)
      .join("\n");

    return {
      text: `Here is our transparent, luxury treatment pricing:\n\n${serviceList}\n\n*All signature therapies include restorative post-care hydration and a clinical recovery protocol.*`,
      actionLink: {
        label: "View Detailed Pricing Guide",
        href: "/pricing"
      },
      quickReplies: ["📅 Book with these prices", "✨ Which one is best for me?", "🌿 Read our philosophy"]
    };
  }

  // HIFU / Natural Lift
  if (
    query.includes("hifu") ||
    query.includes("lift") ||
    query.includes("sagging") ||
    query.includes("jawline") ||
    query.includes("tightening")
  ) {
    const hifu = services.find((s) => s.slug === "natural-lift-hifu");
    return {
      text: `**${hifu?.title || "Natural Lift Therapy (HIFU)"}** ($460 · 90 min) 🌿\n\n${hifu?.description}\n\n**Key Benefits:**\n${hifu?.benefits.map((b) => `✓ ${b}`).join("\n")}\n\n**Ideal For:** Clients noticing early jawline or mid-face softening wanting subtle, surgery-free lifting with zero downtime.`,
      actionLink: {
        label: "Learn More About HIFU",
        href: "/treatments/natural-lift-hifu"
      },
      quickReplies: ["📅 Book HIFU session", "💰 Compare with fillers", "✨ Ask another question"]
    };
  }

  // Laser Glow
  if (
    query.includes("laser") ||
    query.includes("pigment") ||
    query.includes("spots") ||
    query.includes("tone") ||
    query.includes("sun damage")
  ) {
    const laser = services.find((s) => s.slug === "laser-glow");
    return {
      text: `**${laser?.title || "Laser Glow Treatment"}** ($320 · 60 min) ✨\n\n${laser?.description}\n\n**Key Benefits:**\n${laser?.benefits.map((b) => `✓ ${b}`).join("\n")}\n\n**Ideal For:** Clearing sun spots, evening uneven skin tone, and stimulating cellular renewal without aggressive flaking.`,
      actionLink: {
        label: "Discover Laser Glow",
        href: "/treatments/laser-glow"
      },
      quickReplies: ["📅 Book Laser Glow", "✨ Treatment for dull skin", "💰 Full pricing"]
    };
  }

  // Fillers / Contour
  if (
    query.includes("filler") ||
    query.includes("contour") ||
    query.includes("lip") ||
    query.includes("cheek") ||
    query.includes("volume")
  ) {
    const fillers = services.find((s) => s.slug === "contour-fillers");
    return {
      text: `**${fillers?.title || "Contour Harmony Fillers"}** ($390 · 50 min) 💫\n\n${fillers?.description}\n\n**Philosophy:** We reject over-filled aesthetics. We use anatomical micro-aliquots to gently restore natural youth, hydration, and architectural proportion.`,
      actionLink: {
        label: "View Contour Fillers",
        href: "/treatments/contour-fillers"
      },
      quickReplies: ["📅 Book consultation", "💰 Pricing", "✨ Compare HIFU vs Fillers"]
    };
  }

  // Skin Rejuvenation / Hydration / Dull Skin
  if (
    query.includes("skin rejuvenation") ||
    query.includes("dull") ||
    query.includes("glow") ||
    query.includes("hydration") ||
    query.includes("dry") ||
    query.includes("facial")
  ) {
    const skin = services.find((s) => s.slug === "skin-rejuvenation");
    return {
      text: `**${skin?.title || "Skin Rejuvenation Therapy"}** ($240 · 75 min) 🌸\n\n${skin?.description}\n\n**Key Benefits:**\n${skin?.benefits.map((b) => `✓ ${b}`).join("\n")}\n\n**Why guests love it:** Immediate dewiness, softened texture, and a luminous rested glow with zero downtime.`,
      actionLink: {
        label: "Explore Skin Rejuvenation",
        href: "/treatments/skin-rejuvenation"
      },
      quickReplies: ["📅 Book Rejuvenation", "💰 View all prices", "🌿 Clinic philosophy"]
    };
  }

  // Location / Hours / Contact
  if (
    query.includes("location") ||
    query.includes("address") ||
    query.includes("where") ||
    query.includes("hours") ||
    query.includes("timing") ||
    query.includes("open") ||
    query.includes("phone") ||
    query.includes("contact")
  ) {
    return {
      text: `**${CLINIC_INFO.name}** 🌿\n\n📍 **Location:** ${CLINIC_INFO.address}\n📞 **Phone:** ${CLINIC_INFO.phone}\n✉️ **Email:** ${CLINIC_INFO.email}\n\n🕒 **Operating Hours:**\n- ${CLINIC_INFO.hours.weekdays}\n- ${CLINIC_INFO.hours.saturday}\n- ${CLINIC_INFO.hours.sunday}`,
      actionLink: {
        label: "Contact & Directions Page",
        href: "/contact"
      },
      quickReplies: ["📅 Book visit", "✨ See treatments", "💰 Check prices"]
    };
  }

  // Philosophy / About
  if (
    query.includes("philosophy") ||
    query.includes("about") ||
    query.includes("who are you") ||
    query.includes("natural") ||
    query.includes("story")
  ) {
    return {
      text: `**Our Philosophy: Subtle, Restorative, Believable.** 🌿\n\n${CLINIC_INFO.philosophy}\n\nWe prioritize biocompatible botanical serums, advanced medical ultrasound and light therapy, and mindful consultations that respect your individual facial balance.`,
      actionLink: {
        label: "Read Our Complete Philosophy",
        href: "/philosophy"
      },
      quickReplies: ["✨ View treatments", "📅 Book consultation", "📍 Where are you located?"]
    };
  }

  // Testimonials / Reviews
  if (
    query.includes("review") ||
    query.includes("testimonial") ||
    query.includes("feedback") ||
    query.includes("experience")
  ) {
    return {
      text: `Our clients cherish our unhurried approach:\n\n💬 *"The result was brighter and softer, but still completely me."* — **Amelia Hart** (Skin Rejuvenation)\n\n💬 *"There was no pressure, only thoughtful guidance. My face looked rested, not treated."* — **Lina Moreau** (HIFU Lift)\n\n💬 *"Every detail carried quiet luxury."* — **Naomi Vale** (Contour Harmony)`,
      actionLink: {
        label: "Read All Guest Stories",
        href: "/testimonials"
      },
      quickReplies: ["📅 Book my consultation", "✨ Explore treatments", "💰 Pricing"]
    };
  }

  // Fallback intelligent response
  return {
    text: `Thank you for asking about that. At **BeautyAura**, we curate serene aesthetic journeys customized to your skin's unique needs.\n\nWould you like me to recommend a treatment based on your skin concerns, share our transparent pricing, or help schedule your consultation?`,
    quickReplies: [
      "✨ Treatment recommendations",
      "💰 View price list",
      "📅 Book a consultation",
      "📞 Speak with a care advisor"
    ],
    actionLink: {
      label: "Browse All Treatments",
      href: "/treatments"
    }
  };
}
