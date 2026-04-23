import Image from "next/image";

const pillars = [
  {
    title: "Skin first",
    copy:
      "Healthy tone, texture, and hydration create the foundation for every luminous result."
  },
  {
    title: "Harmony over excess",
    copy:
      "Facial balance is protected by choosing less, placing carefully, and allowing space between interventions."
  },
  {
    title: "Wellness in the room",
    copy:
      "The setting matters. Calm surroundings help guests feel safe, informed, and fully present."
  }
];

export default function PhilosophyPage() {
  return (
    <section className="section-gap">
      <div className="container-shell space-y-14">
        {/* Hero: text + image */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="eyebrow">Wellness Philosophy</span>
            <h1 className="section-title">Beauty as a return to balance</h1>
            <p className="mt-6 section-copy">
              We see aesthetic care as part of a broader wellness rhythm. When a
              face appears luminous and settled, it often reflects softness in
              process as much as precision in treatment.
            </p>
          </div>
          <div className="glass-panel overflow-hidden rounded-[38px] p-4">
            <div className="relative h-[520px] overflow-hidden rounded-[30px]">
              <Image
                src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg"
                alt="BeautyAura wellness philosophy"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="glass-panel rounded-[30px] p-7">
              <h2 className="font-serif text-2xl text-charcoal">{pillar.title}</h2>
              <p className="mt-4 text-sm leading-7 text-charcoal/68">{pillar.copy}</p>
            </div>
          ))}
        </div>

        {/* Skincare products image + promise side by side */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-stretch">
          <div className="glass-panel overflow-hidden rounded-[36px] p-3">
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-[28px]">
              <Image
                src="https://images.pexels.com/photos/3617021/pexels-photo-3617021.jpeg"
                alt="BeautyAura curated treatments"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>

          <div className="rounded-[38px] bg-charcoal px-8 py-12 text-sand">
            <div className="flex h-full flex-col justify-center gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-sand/55">Our promise</p>
                <h2 className="mt-4 font-serif text-4xl">Never louder than you</h2>
              </div>
              <p className="text-base leading-8 text-sand/72">
                Every BeautyAura recommendation is held against a simple question:
                will this still feel like you, only more rested, clear, and in
                balance? If the answer is no, we do not pursue it.
              </p>
            </div>
          </div>
        </div>

        {/* Client portrait full-width banner */}
        <div className="glass-panel overflow-hidden rounded-[36px] p-3">
          <div className="relative h-72 overflow-hidden rounded-[28px] sm:h-96">
            <Image
              src="https://images.pexels.com/photos/4586741/pexels-photo-4586741.jpeg"
              alt="Natural beauty result at BeautyAura"
              fill
              className="object-cover object-top"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_left,rgba(30,25,22,0.55),rgba(30,25,22,0.05))]" />
            <div className="absolute inset-0 flex items-center justify-end px-10 lg:px-16">
              <p className="max-w-sm text-right font-serif text-2xl leading-relaxed text-sand sm:text-3xl">
                &ldquo;Results that settle quietly into who you already are.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
