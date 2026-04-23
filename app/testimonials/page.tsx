import Image from "next/image";
import { TestimonialCard } from "@/components/TestimonialCard";

const items = [
  {
    quote:
      "I came in wanting brightness and left with something better: a version of my skin that felt rested and cared for.",
    name: "Elena Vale",
    treatment: "Skin Rejuvenation Therapy",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote:
      "The consultation was incredibly grounded. Nothing felt rushed, and the result was subtle in the best possible way.",
    name: "Mara Quinn",
    treatment: "Laser Glow Treatment",
    avatar: "https://images.unsplash.com/photo-1592621385612-4d7129426394?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote:
      "My profile looked softer and more balanced without losing any of my character.",
    name: "Ari Laurent",
    treatment: "Contour Harmony Fillers",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote:
      "There is a deep sense of calm in the clinic, and that care carries through to the final result.",
    name: "Iris Beaumont",
    treatment: "Natural Lift Therapy",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote:
      "The entire experience felt intelligent and understated. That is exactly what I had hoped for.",
    name: "Camille Rohe",
    treatment: "Consultation Journey",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote:
      "This was the first time aesthetic care felt like wellness rather than pressure.",
    name: "Nora Saye",
    treatment: "BeautyAura Experience",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  }
];

export default function TestimonialsPage() {
  return (
    <section className="section-gap">
      <div className="container-shell">
        <div className="max-w-3xl">
          <span className="eyebrow">Testimonials</span>
          <h1 className="section-title">Experiences shaped by softness, trust, and visible ease</h1>
          <p className="mt-6 section-copy">
            A few words from guests who value natural enhancement and the feeling
            of being carefully guided rather than persuaded.
          </p>
        </div>

        {/* Clinic atmosphere banner */}
        <div className="glass-panel mt-12 overflow-hidden rounded-[36px] p-3">
          <div className="relative h-64 overflow-hidden rounded-[28px] sm:h-80">
            <Image
              src="https://images.pexels.com/photos/3985330/pexels-photo-3985330.jpeg"
              alt="BeautyAura clinic atmosphere"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,25,22,0.55),rgba(30,25,22,0.08))]" />
            <div className="absolute inset-0 flex items-center px-10">
              <p className="font-serif text-3xl text-sand sm:text-4xl">
                &ldquo;Guided by trust, shaped by calm.&rdquo;
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
