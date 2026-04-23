import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export default function BlogPage() {
  return (
    <section className="section-gap">
      <div className="container-shell">
        <div className="max-w-3xl">
          <span className="eyebrow">Journal</span>
          <h1 className="section-title">Notes on glow, structure, and the quieter side of aesthetic care</h1>
          <p className="mt-6 section-copy">
            Our journal shares concise guidance on treatment planning, skin
            health, and the philosophy behind natural-looking results.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="glass-panel grid overflow-hidden rounded-[32px] lg:grid-cols-[0.42fr_0.58fr]"
            >
              <div className="relative min-h-[280px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10">
                <p className="text-xs uppercase tracking-[0.24em] text-charcoal/45">
                  {post.category} · {post.date} · {post.readTime}
                </p>
                <h2 className="mt-4 font-serif text-3xl text-charcoal">{post.title}</h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-charcoal/68">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
