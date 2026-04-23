import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";

export default function PricingPage() {
  return (
    <section className="section-gap">
      <div className="container-shell">
        {/* Header + hero image */}
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="max-w-xl">
            <span className="eyebrow">Pricing</span>
            <h1 className="section-title">Transparent pricing for treatments shaped with restraint</h1>
            <p className="mt-6 section-copy">
              Pricing reflects consultation time, clinical expertise, aftercare, and
              the quality of products and technologies used during each session.
            </p>
          </div>
          <div className="glass-panel overflow-hidden rounded-[36px] p-3">
            <div className="relative h-72 overflow-hidden rounded-[28px]">
              <Image
                src="https://images.pexels.com/photos/3617021/pexels-photo-3617021.jpeg"
                alt="BeautyAura premium skincare"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div key={service.slug} className="glass-panel overflow-hidden rounded-[32px]">
              {/* Service thumbnail */}
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute bottom-4 right-4 rounded-full bg-white/90 px-4 py-1 font-serif text-xl text-charcoal shadow-sm">
                  {service.price}
                </span>
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h2 className="font-serif text-2xl text-charcoal">{service.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-charcoal/68">{service.shortDescription}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-charcoal/45">
                  <span>{service.duration}</span>
                  <span>Consultation led</span>
                  <span>Aftercare included</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[36px] bg-charcoal px-8 py-10 text-sand">
          <p className="text-sm leading-7 text-sand/72">
            Injectable treatments may vary based on product selection and facial
            plan. A confirmed quote is always provided during consultation.
          </p>
          <Link href="/booking" className="button-primary mt-6 bg-sand text-charcoal hover:bg-sand/90">
            Reserve a consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
