import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/services";

export default function TreatmentsPage() {
  return (
    <section className="section-gap">
      <div className="container-shell">
        <div className="max-w-3xl">
          <span className="eyebrow">Treatments</span>
          <h1 className="section-title">Considered therapies for skin, contour, and natural renewal</h1>
          <p className="mt-6 section-copy">
            Each treatment is delivered with a restrained clinical approach and
            adapted to your comfort, timing, and desired level of refinement.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.description}
              href={`/treatments/${service.slug}`}
              image={service.image}
              duration={`${service.duration} · From ${service.price}`}
            />
          ))}
        </div>

        <div className="mt-14 rounded-[36px] bg-charcoal px-8 py-10 text-sand">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-sand/55">Not sure where to begin</p>
              <h2 className="mt-3 font-serif text-4xl">Start with a calm consultation</h2>
            </div>
            <Link href="/booking" className="button-primary bg-sand text-charcoal hover:bg-sand/90">
              Book consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
