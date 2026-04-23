import Image from "next/image";
import { notFound } from "next/navigation";
import { blogLookup, blogPosts } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogLookup[slug];

  if (!post) {
    notFound();
  }

  // Secondary in-article image per slug
  const secondaryImages: Record<string, string> = {
    "a-gentler-approach-to-aesthetic-care": "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg",
    "preparing-for-your-first-consultation": "https://images.pexels.com/photos/6621187/pexels-photo-6621187.jpeg",
    "how-we-think-about-natural-glow": "https://images.pexels.com/photos/3617021/pexels-photo-3617021.jpeg"
  };

  const secondaryImage = secondaryImages[slug];
  const midPoint = Math.floor(post.content.length / 2);

  return (
    <article className="section-gap">
      <div className="container-shell">
        <div className="mx-auto max-w-4xl">
          <span className="eyebrow">{post.category}</span>
          <h1 className="section-title">{post.title}</h1>
          <p className="mt-4 text-sm uppercase tracking-[0.24em] text-charcoal/45">
            {post.date} · {post.readTime}
          </p>

          {/* Hero image */}
          <div className="glass-panel mt-10 overflow-hidden rounded-[36px] p-4">
            <div className="relative h-[420px] overflow-hidden rounded-[28px]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
            </div>
          </div>

          {/* First half of content */}
          <div className="mt-10 space-y-7 text-base leading-8 text-charcoal/75">
            {post.content.slice(0, midPoint).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {/* Mid-article secondary image */}
          {secondaryImage && (
            <div className="my-10 overflow-hidden rounded-[28px]">
              <div className="relative h-64 sm:h-80">
                <Image
                  src={secondaryImage}
                  alt={`${post.title} – in article`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 60vw, 100vw"
                />
              </div>
            </div>
          )}

          {/* Second half of content */}
          <div className="space-y-7 text-base leading-8 text-charcoal/75">
            {post.content.slice(midPoint).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {/* Client portrait closing banner */}
          <div className="glass-panel mt-14 overflow-hidden rounded-[36px] p-3">
            <div className="relative h-56 overflow-hidden rounded-[28px]">
              <Image
                src="https://images.pexels.com/photos/3985330/pexels-photo-3985330.jpeg"
                alt="BeautyAura retreat"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,25,22,0.62),rgba(30,25,22,0.1))]" />
              <div className="absolute inset-0 flex items-center px-8 lg:px-12">
                <p className="max-w-md font-serif text-2xl leading-relaxed text-sand">
                  Ready to experience a calmer approach to aesthetic care?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
