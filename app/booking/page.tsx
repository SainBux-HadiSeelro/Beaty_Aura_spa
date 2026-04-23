import Image from "next/image";
import { BookingForm } from "@/components/BookingForm";
import { FAQAccordion } from "@/components/FAQAccordion";

const faqItems = [
  {
    question: "What happens after I submit my request?",
    answer:
      "A care advisor reviews your request and replies with confirmation, preparation notes, and any questions needed before your visit."
  },
  {
    question: "Can I change my treatment later?",
    answer:
      "Yes. Your booking holds time for consultation first, so your plan can be refined once we assess your needs in person."
  },
  {
    question: "Do you offer bespoke treatment plans?",
    answer:
      "Yes. Many guests combine skin renewal with contour-focused care over a phased schedule tailored to their pace."
  }
];

export default function BookingPage() {
  return (
    <section className="section-gap">
      <div className="container-shell grid gap-12 lg:grid-cols-[1fr_0.82fr]">
        <div>
          <span className="eyebrow">Booking</span>
          <h1 className="section-title">Reserve a calm consultation</h1>
          <p className="mt-6 section-copy">
            Share a few details and we will shape the best starting point for
            your visit, whether you already have a treatment in mind or are still
            exploring.
          </p>
          <div className="mt-10">
            <BookingForm />
          </div>
        </div>

        <div className="space-y-6">
          {/* Clinic image */}
          <div className="glass-panel overflow-hidden rounded-[34px] p-3">
            <div className="relative h-56 overflow-hidden rounded-[26px]">
              <Image
                src="https://images.pexels.com/photos/6629525/pexels-photo-6629525.jpeg"
                alt="BeautyAura consultation room"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 38vw, 100vw"
              />
            </div>
          </div>

          <div className="rounded-[34px] bg-charcoal px-8 py-10 text-sand">
            <p className="text-xs uppercase tracking-[0.26em] text-sand/55">Consultation note</p>
            <h2 className="mt-4 font-serif text-4xl">Thoughtful planning comes before treatment</h2>
            <p className="mt-5 text-base leading-8 text-sand/72">
              We reserve space to understand your goals, answer questions, and
              create a measured recommendation before proceeding.
            </p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
