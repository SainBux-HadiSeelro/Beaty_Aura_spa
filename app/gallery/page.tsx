import Image from "next/image";

const images = [
  "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg",
  "https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg",
  "https://images.pexels.com/photos/3985330/pexels-photo-3985330.jpeg",
  "https://images.pexels.com/photos/6629525/pexels-photo-6629525.jpeg",
  "https://images.pexels.com/photos/3617021/pexels-photo-3617021.jpeg",
  "https://images.pexels.com/photos/3762871/pexels-photo-3762871.jpeg"
];

export default function GalleryPage() {
  return (
    <section className="section-gap">
      <div className="container-shell">
        <div className="max-w-3xl">
          <span className="eyebrow">Gallery</span>
          <h1 className="section-title">A visual study in calm light, refined space, and subtle outcomes</h1>
          <p className="mt-6 section-copy">
            A quiet collection of treatment moments, textures, and spaces that
            reflect how BeautyAura feels in person.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={image}
              className={`glass-panel overflow-hidden rounded-[30px] p-3 ${
                index % 3 === 0 ? "xl:translate-y-8" : ""
              }`}
            >
              <div className="relative h-[420px] overflow-hidden rounded-[24px]">
                <Image
                  src={image}
                  alt="BeautyAura gallery"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
