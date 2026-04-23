"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/treatments", label: "Treatments" },
  { href: "/pricing", label: "Pricing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6">
      <div className="container-shell">
        <div className="glass-panel flex items-center justify-between rounded-full px-5 py-4 sm:px-7">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/20 text-sage">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <p className="font-serif text-xl text-charcoal">BeautyAura</p>
              <p className="text-xs uppercase tracking-[0.24em] text-charcoal/50">
                Aesthetic Retreat
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  isActive(item.href)
                    ? "bg-charcoal text-sand"
                    : "text-charcoal/70 hover:bg-white/60 hover:text-charcoal"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link href="/booking" className="button-primary">
              Book Consultation
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/10 bg-white/50 text-charcoal lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="glass-panel mt-3 overflow-hidden rounded-[28px] p-4 lg:hidden"
            >
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-sm ${
                      isActive(item.href)
                        ? "bg-charcoal text-sand"
                        : "bg-white/50 text-charcoal/75"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/booking"
                  onClick={() => setOpen(false)}
                  className="button-primary mt-2"
                >
                  Book Consultation
                </Link>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
