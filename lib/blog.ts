export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "a-gentler-approach-to-aesthetic-care",
    title: "A Gentler Approach to Aesthetic Care",
    excerpt:
      "Why modern luxury lies in restraint, skin intelligence, and treatment plans that leave room for softness.",
    category: "Philosophy",
    date: "April 1, 2026",
    readTime: "4 min read",
    image: "https://images.pexels.com/photos/3850682/pexels-photo-3850682.jpeg",
    content: [
      "The most refined aesthetic results rarely announce themselves. They settle quietly into the face, making someone appear rested, balanced, and fully themselves.",
      "At BeautyAura, treatment planning begins with pace. We look at the skin, the structure, and the lifestyle surrounding it. This helps us choose interventions that work with the body rather than against it.",
      "Luxury care is not about adding more. It is about removing urgency from the process so treatment can be intentional, measured, and comfortable."
    ]
  },
  {
    slug: "preparing-for-your-first-consultation",
    title: "Preparing for Your First Consultation",
    excerpt:
      "A calm guide to what to bring, what to ask, and how to think about results before your first visit.",
    category: "Guidance",
    date: "March 16, 2026",
    readTime: "3 min read",
    image: "https://images.pexels.com/photos/6621187/pexels-photo-6621187.jpeg",
    content: [
      "A first consultation should feel spacious, not rushed. Bringing a short history of your skin or prior treatments helps create clarity without pressure.",
      "It can also be helpful to describe outcomes emotionally rather than technically. Words like brighter, fresher, smoother, or more rested often reveal more than a list of procedures.",
      "Good planning creates better results. The consultation is where priorities are refined and timelines are made realistic."
    ]
  },
  {
    slug: "how-we-think-about-natural-glow",
    title: "How We Think About Natural Glow",
    excerpt:
      "Radiance is usually a reflection of barrier health, circulation, and subtle tone correction rather than a single dramatic fix.",
    category: "Skin Health",
    date: "February 25, 2026",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg",
    content: [
      "Glow is often mistaken for shine, but the two are different. True luminosity comes from even tone, healthy hydration, and a calm skin barrier.",
      "This is why many of our treatment plans combine resurfacing, hydration, and recovery support. The goal is not to chase brightness at the expense of comfort.",
      "When the skin feels settled, light reflects differently. The result appears more natural because it is."
    ]
  }
];

export const blogLookup = Object.fromEntries(
  blogPosts.map((post) => [post.slug, post])
) as Record<string, BlogPost>;
