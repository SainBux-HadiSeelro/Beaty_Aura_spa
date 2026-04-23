import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  Explore: [
    { href: "/about", label: "About" },
    { href: "/treatments", label: "Treatments" },
    { href: "/pricing", label: "Pricing" },
    { href: "/gallery", label: "Gallery" }
  ],
  Wellness: [
    { href: "/philosophy", label: "Philosophy" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/blog", label: "Journal" },
    { href: "/booking", label: "Booking" }
  ]
};

export function Footer() {
  return (
    <footer className="pb-8 pt-20">
      <div className="container-shell">
        <div className="glass-panel overflow-hidden rounded-[40px] px-6 py-10 sm:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <p className="font-serif text-3xl text-charcoal">BeautyAura</p>
              <p className="mt-4 max-w-md text-sm leading-7 text-charcoal/68">
                A quiet approach to aesthetic care rooted in gentle refinement,
                expert treatment, and restorative calm.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-charcoal/70">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2">
                  <MapPin className="h-4 w-4 text-sage" />
                  Ubud House, Serenity Avenue
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2">
                  <Phone className="h-4 w-4 text-sage" />
                  +1 (555) 014-7788
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2">
                  <Mail className="h-4 w-4 text-sage" />
                  care@beautyaura.com
                </span>
              </div>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <p className="text-xs uppercase tracking-[0.28em] text-charcoal/45">
                  {title}
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm text-charcoal/70 transition hover:text-charcoal"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-charcoal/8 pt-6 text-sm text-charcoal/55 sm:flex-row sm:items-center sm:justify-between">
            <p>BeautyAura. Crafted for calm, natural enhancement, and considered care.</p>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-2">
                <Instagram className="h-4 w-4" />
                @beautyaura.retreat
              </span>
              <span>Open daily, 9am to 7pm</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
