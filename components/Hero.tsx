"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type HeroProps = {
  image: string;
  title: string;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  eyebrow?: string;
};

export function Hero({
  image,
  title,
  description,
  primaryCta,
  secondaryCta,
  eyebrow
}: HeroProps) {
  return (
    <section className="container-shell pt-6 sm:pt-8">
      <div className="relative overflow-hidden rounded-[42px] border border-white/40 bg-mist shadow-soft">
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(30,25,22,0.68),rgba(30,25,22,0.2),rgba(30,25,22,0.08))]" />
        <div className="relative px-6 py-20 sm:px-10 sm:py-28 lg:min-h-[720px] lg:px-16 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {eyebrow ? (
              <span className="eyebrow border-white/15 bg-white/10 text-sand/80">
                {eyebrow}
              </span>
            ) : null}
            <h1 className="font-serif text-5xl leading-[1.02] text-sand sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-sand/78 sm:text-lg">
              {description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href={primaryCta.href}
                className="button-primary bg-sand text-charcoal hover:bg-sand/90"
              >
                {primaryCta.label}
              </Link>
              <Link
                href={secondaryCta.href}
                className="button-secondary border-white/25 bg-white/10 text-sand hover:bg-white/15 hover:text-sand"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
