import Image from "next/image";
import Link from "next/link";
import { Leaf, ShieldCheck, Sparkles, Wand2 } from "lucide-react";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { blogPosts } from "@/lib/blog";
import { services } from "@/lib/services";

const reasons = [
  {
    title: "Gentle enhancements",
    icon: Sparkles,
    description:
      "Every treatment plan is designed to preserve expression and amplify what already feels naturally yours."
  },
  {
    title: "Calm experience",
    icon: Leaf,
    description:
      "Soft transitions, unhurried consultations, and restorative surroundings shape the entire visit."
  },
  {
    title: "Expert hands",
    icon: ShieldCheck,
    description:
      "Clinical precision is paired with aesthetic restraint so outcomes remain refined and believable."
  },
  {
    title: "Natural results",
    icon: Wand2,
    description:
      "We focus on texture, balance, luminosity, and proportion rather than dramatic change."
  }
];

const testimonials = [
  {
    quote:
      "The result was brighter and softer, but still completely me. The whole visit felt deeply considered.",
    name: "Amelia Hart",
    treatment: "Skin Rejuvenation Therapy"
  },
  {
    quote:
      "There was no pressure, only thoughtful guidance. My face looked rested, not treated.",
    name: "Lina Moreau",
    treatment: "Natural Lift Therapy"
  },
  {
    quote:
      "Every detail felt calm. The atmosphere, the consultation, and the final result all carried the same quiet luxury.",
    name: "Naomi Vale",
    treatment: "Contour Harmony Fillers"
  }
];

export default function HomePage() {
  return (
    <>
      <Hero
        image="https://images.pexels.com/photos/6629525/pexels-photo-6629525.jpeg"
        eyebrow="Luxury Aesthetic Retreat"
        title="Reconnect With Your Natural Glow"
        description="BeautyAura brings together restorative skin therapies, subtle aesthetic refinement, and a sanctuary-like pace designed to help you feel luminous, balanced, and fully at ease."
        primaryCta={{ href: "/booking", label: "Book Consultation" }}
        secondaryCta={{ href: "/treatments", label: "Explore Treatments" }}
      />

      <section className="section-gap">
        <div className="container-shell grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <span className="eyebrow">Intro</span>
            <h2 className="section-title">A quieter kind of aesthetic care</h2>
          </div>
          <p className="section-copy">
            BeautyAura is built around softness, trust, and measured enhancement.
            We believe luxury treatment should feel restorative rather than
            clinical, and visible results should arrive with ease rather than
            intensity.
          </p>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="container-shell">
          <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">Treatments</span>
              <h2 className="section-title">Signature therapies with a soft clinical edge</h2>
            </div>
            <Link href="/treatments" className="button-secondary">
              View all treatments
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.shortDescription}
                href={`/treatments/${service.slug}`}
                image={service.image}
                duration={service.duration}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="container-shell">
          <div className="glass-panel overflow-hidden rounded-[40px] px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="eyebrow">Philosophy</span>
                <h2 className="section-title">Beauty in its most natural form</h2>
                <p className="mt-6 section-copy">
                  Our approach is rooted in skin intelligence, facial harmony,
                  and emotional calm. We refine rather than transform, choosing
                  treatments that settle beautifully into your life and your
                  reflection.
                </p>
                <Link href="/philosophy" className="button-primary mt-8">
                  Explore our philosophy
                </Link>
              </div>
              <div className="relative min-h-[320px] overflow-hidden rounded-[34px] bg-white/55">
                <Image
                  src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg"
                  alt="BeautyAura philosophy"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="container-shell">
          <div className="mb-10">
            <span className="eyebrow">Preview</span>
            <h2 className="section-title">Before and after, without spectacle</h2>
            <p className="mt-4 section-copy">
              Quiet improvements in clarity, contour, and radiance presented with
              the same restraint that guides our treatment design.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg",
              "https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg",
              "https://images.pexels.com/photos/3985330/pexels-photo-3985330.jpeg"
            ].map((image) => (
              <div key={image} className="glass-panel overflow-hidden rounded-[30px] p-3">
                <div className="relative h-80 overflow-hidden rounded-[24px]">
                  <Image
                    src={image}
                    alt="Treatment preview"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="container-shell">
          <div className="mb-10">
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="section-title">A luxury clinic designed to feel deeply settled</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map(({ title, description, icon: Icon }) => (
              <div key={title} className="glass-panel rounded-[30px] p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/18 text-sage">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-serif text-2xl text-charcoal">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-charcoal/68">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="container-shell">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">Testimonials</span>
              <h2 className="section-title">Words from guests who chose subtle change</h2>
            </div>
            <Link href="/testimonials" className="button-secondary">
              Read more stories
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="container-shell">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">Journal</span>
              <h2 className="section-title">Quiet notes on skin, wellness, and refinement</h2>
            </div>
            <Link href="/blog" className="button-secondary">
              Visit the journal
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="glass-panel group overflow-hidden rounded-[30px]"
              >
                <div className="relative h-64">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-charcoal/45">
                    {post.category} · {post.readTime}
                  </p>
                  <h3 className="mt-4 font-serif text-2xl text-charcoal">{post.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-charcoal/68">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-shell">
          <div className="rounded-[40px] bg-charcoal px-6 py-12 text-sand shadow-soft sm:px-10 lg:px-14 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <span className="eyebrow border-white/10 bg-white/10 text-sand/72">
                  Final Invitation
                </span>
                <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                  Begin Your Renewal Journey
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-sand/72">
                  Schedule a calm consultation and let us shape a treatment path
                  that feels clear, measured, and naturally aligned with you.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <Link href="/booking" className="button-primary bg-sand text-charcoal hover:bg-sand/90">
                  Book now
                </Link>
                <Link href="/contact" className="button-secondary border-white/15 bg-white/10 text-sand hover:bg-white/15">
                  Contact the clinic
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
