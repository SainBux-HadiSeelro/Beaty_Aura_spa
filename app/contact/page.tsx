import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";

const faqItems = [
  {
    question: "How do I know which treatment is right for me?",
    answer:
      "We begin with a consultation that reviews your goals, skin history, and comfort level before any treatment is recommended."
  },
  {
    question: "Do you prioritize natural-looking outcomes?",
    answer:
      "Yes. Every plan is built around harmony, softness, and proportion rather than dramatic change."
  },
  {
    question: "Is there downtime after treatments?",
    answer:
      "Downtime varies by treatment. We explain expected recovery clearly during consultation and provide aftercare guidance for every visit."
  }
];

export default function ContactPage() {
  return (
    <section className="section-gap">
      <div className="container-shell space-y-12">
        {/* Top grid: info + map image */}
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="eyebrow">Contact</span>
            <h1 className="section-title">Reach us in a way that feels easy</h1>
            <p className="mt-6 section-copy">
              Whether you are ready to schedule or simply want guidance, our care
              team is here to help you take the next step calmly.
            </p>

            <div className="mt-10 space-y-4">
              <InfoCard icon={Phone} title="Phone" value="+1 (555) 014-7788" />
              <InfoCard icon={Mail} title="Email" value="care@beautyaura.com" />
              <InfoCard icon={MapPin} title="Clinic" value="Ubud House, Serenity Avenue" />
            </div>
          </div>

          {/* Clinic image */}
          <div className="glass-panel overflow-hidden rounded-[36px] p-3">
            <div className="relative h-[420px] overflow-hidden rounded-[28px]">
              <Image
                src="https://images.pexels.com/photos/6621187/pexels-photo-6621187.jpeg"
                alt="BeautyAura clinic reception"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-xs uppercase tracking-[0.26em] text-sand/80">Find us</p>
                <p className="mt-1 font-serif text-2xl text-sand">Ubud House, Serenity Avenue</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ below */}
        <div>
          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  value
}: {
  icon: typeof Phone;
  title: string;
  value: string;
}) {
  return (
    <div className="glass-panel rounded-[26px] p-6">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage/18 text-sage">
        <Icon className="h-5 w-5" />
      </span>
      <p className="mt-4 text-xs uppercase tracking-[0.24em] text-charcoal/45">{title}</p>
      <p className="mt-2 font-serif text-2xl text-charcoal">{value}</p>
    </div>
  );
}
