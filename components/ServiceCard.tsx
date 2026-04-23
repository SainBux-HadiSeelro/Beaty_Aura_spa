"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  image: string;
  duration: string;
};

export function ServiceCard({
  title,
  description,
  href,
  image,
  duration
}: ServiceCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group glass-panel overflow-hidden rounded-[30px]"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.24em] text-charcoal/45">
            {duration}
          </p>
          <ArrowUpRight className="h-4 w-4 text-sage transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <h3 className="mt-4 font-serif text-2xl text-charcoal">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-charcoal/68">{description}</p>
        <Link href={href} className="mt-6 inline-block text-sm font-medium text-charcoal">
          Explore treatment
        </Link>
      </div>
    </motion.article>
  );
}
