import Image from "next/image";
import Link from "next/link";
import { Service } from "@/lib/services";

export function ServiceDetailPage({ service }: { service: Service }) {
  return (
    <section className="section-gap">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="eyebrow">Treatment Detail</span>
            <h1 className="section-title">{service.title}</h1>
            <p className="mt-6 section-copy">{service.description}</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-charcoal/70">
              <span className="rounded-full bg-white/60 px-4 py-2">{service.duration}</span>
              <span className="rounded-full bg-white/60 px-4 py-2">From {service.price}</span>
            </div>
            <Link href="/booking" className="button-primary mt-8">
              Book this treatment
            </Link>
          </div>
          <div className="glass-panel overflow-hidden rounded-[36px] p-4">
            <div className="relative h-[520px] overflow-hidden rounded-[28px]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <DetailList title="Benefits" items={service.benefits} />
          <DetailList title="Ideal For" items={service.idealFor} />
          <DetailList title="Treatment Flow" items={service.process} />
        </div>
      </div>
    </section>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="glass-panel rounded-[30px] p-7">
      <h2 className="font-serif text-2xl text-charcoal">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm leading-7 text-charcoal/68">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
