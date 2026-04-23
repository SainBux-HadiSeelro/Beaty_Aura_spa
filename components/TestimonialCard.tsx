"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type TestimonialCardProps = {
  quote: string;
  name: string;
  treatment: string;
  avatar?: string;
};

export function TestimonialCard({
  quote,
  name,
  treatment,
  avatar
}: TestimonialCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="glass-panel rounded-[30px] p-7"
    >
      <p className="font-serif text-2xl leading-10 text-charcoal/92">&ldquo;{quote}&rdquo;</p>
      <div className="mt-8 flex items-center gap-4">
        {avatar ? (
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-sage/30">
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-cover"
              sizes="44px"
            />
          </div>
        ) : (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage/20 font-serif text-lg text-sage">
            {name[0]}
          </div>
        )}
        <div>
          <p className="text-sm font-medium text-charcoal">{name}</p>
          <p className="mt-0.5 text-xs uppercase tracking-[0.26em] text-charcoal/45">
            {treatment}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
