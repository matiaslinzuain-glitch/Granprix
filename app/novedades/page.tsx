import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import products from "@/data/products.json";

export const metadata = {
  title: "Novedades — Gran Prix",
  description: "Los últimos lanzamientos y ofertas de Gran Prix.",
};

export default function NovedadesPage() {
  const novedades = products.filter(
    (p) => p.badge === "nuevo" || p.badge === "oferta"
  );

  return (
    <>
      {/* Header */}
      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#d4a853] text-xs tracking-[0.3em] uppercase mb-3">
            Lo último
          </p>
          <h1 className="font-display text-6xl sm:text-7xl text-white tracking-wide">
            NOVEDADES
          </h1>
          <p className="text-[#9a9a9a] text-base mt-4 max-w-xl">
            Los últimos lanzamientos y las mejores ofertas de la temporada. Actualizamos
            el stock constantemente.
          </p>
        </div>
      </div>

      {/* Badges info */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pt-8">
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="bg-[#d4a853] text-black text-xs font-semibold px-2.5 py-1 tracking-wider uppercase">
              Nuevo
            </span>
            <span className="text-[#555555] text-sm">= recién llegado</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-red-600 text-white text-xs font-semibold px-2.5 py-1 tracking-wider uppercase">
              Oferta
            </span>
            <span className="text-[#555555] text-sm">= precio especial</span>
          </div>
        </div>
      </div>

      {/* Grilla */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {novedades.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-[#555555] text-sm tracking-wider uppercase">
              No hay novedades disponibles en este momento
            </p>
          </div>
        ) : (
          <ProductGrid
            products={novedades}
            showFilters={true}
            showSort={true}
          />
        )}
      </div>

      <Footer />
    </>
  );
}
