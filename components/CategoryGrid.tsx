import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";

const categories = [
  { slug: "remeras", label: "Remeras" },
  { slug: "pantalones", label: "Pantalones" },
  { slug: "buzos", label: "Buzos" },
  { slug: "camperas", label: "Camperas" },
];

export default function CategoryGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-[#d4a853] text-xs tracking-[0.3em] uppercase mb-2">
            Explorá
          </p>
          <h2 className="font-display text-5xl text-white tracking-wide">
            CATEGORÍAS
          </h2>
        </div>
        <Link
          href="/productos"
          className="hidden sm:flex items-center gap-2 text-[#9a9a9a] hover:text-[#d4a853] text-sm tracking-wider uppercase transition-colors duration-200"
        >
          Ver todo
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/productos?categoria=${cat.slug}`}
            className="group relative aspect-[3/4] overflow-hidden bg-[#1a1a1a] block"
          >
            <ImagePlaceholder className="w-full h-full" label={cat.label} />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300" />

            {/* Contenido */}
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
              <span className="font-display text-white text-2xl tracking-wider group-hover:text-[#d4a853] transition-colors duration-200">
                {cat.label.toUpperCase()}
              </span>
              <div className="w-8 h-8 border border-white/40 flex items-center justify-center group-hover:border-[#d4a853] group-hover:bg-[#d4a853] transition-all duration-200">
                <svg
                  className="w-4 h-4 text-white group-hover:text-black transition-colors duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
