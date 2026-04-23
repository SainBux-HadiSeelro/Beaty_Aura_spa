import Image from "next/image";
import Link from "next/link";

const values = [
  {
    title: "Refinement over transformation",
    copy:
      "We aim for visible freshness that still feels deeply familiar in the mirror."
  },
  {
    title: "Clinical care with emotional calm",
    copy:
      "Treatment rooms, pacing, and consultations are designed to lower noise and support trust."
  },
  {
    title: "Natural beauty, intelligently supported",
    copy:
      "We work with skin quality, structure, and proportion instead of following trends."
  }
];

export default function AboutPage() {
  return (
    <section className="section-gap">
      <div className="container-shell space-y-14">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="eyebrow">About BeautyAura</span>
            <h1 className="section-title">A sanctuary for modern aesthetic wellness</h1>
            <p className="mt-6 section-copy">
              BeautyAura was imagined as a place where aesthetic treatment could
              feel slower, gentler, and more intuitive. We combine advanced skin
              and facial therapies with the atmosphere of a private retreat,
              creating a clinic experience that feels restorative from arrival to
              aftercare.
            </p>
            <Link href="/booking" className="button-primary mt-8">
              Schedule a visit
            </Link>
          </div>
          <div className="glass-panel overflow-hidden rounded-[36px] p-4">
            <div className="relative h-[520px] overflow-hidden rounded-[30px]">
              <Image
                src="https://images.pexels.com/photos/3997981/pexels-photo-3997981.jpeg"
                alt="BeautyAura retreat interior"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="glass-panel rounded-[30px] p-7">
              <h2 className="font-serif text-2xl text-charcoal">{value.title}</h2>
              <p className="mt-4 text-sm leading-7 text-charcoal/68">{value.copy}</p>
            </div>
          ))}
        </div>

        {/* Full-width environment image */}
        <div className="glass-panel overflow-hidden rounded-[36px] p-3">
          <div className="relative h-72 overflow-hidden rounded-[28px] sm:h-96">
            <Image
              src="https://images.pexels.com/photos/3985330/pexels-photo-3985330.jpeg"
              alt="BeautyAura serene environment"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,25,22,0.6),rgba(30,25,22,0.1))]" />
            <div className="absolute inset-0 flex items-center px-10 lg:px-16">
              <div className="max-w-lg text-sand">
                <p className="text-xs uppercase tracking-[0.26em] text-sand/60">Our environment</p>
                <p className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
                  Soft architecture,<br />deliberate pace
                </p>
                <p className="mt-5 text-base leading-8 text-sand/72">
                  Every surface, sound, and transition is designed to reduce visual
                  and emotional strain. The goal is simple: to make the entire
                  experience feel grounded, private, and clear.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-[36px] p-8">
          <p className="text-xs uppercase tracking-[0.26em] text-charcoal/45">Our care standard</p>
          <h2 className="mt-4 font-serif text-4xl text-charcoal">Consultation comes first</h2>
          <p className="mt-5 text-base leading-8 text-charcoal/68">
            We spend time understanding your skin history, facial structure,
            lifestyle, and comfort level before treatment is suggested. This
            helps us build plans that are both beautiful and appropriate.
          </p>
        </div>
      </div>
    </section>
  );
}
