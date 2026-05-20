import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import products from "@/data/products.json";

export const metadata = {
  title: "Productos — Gran Prix",
  description: "Explorá toda la colección de ropa masculina premium de Gran Prix.",
};

export default function ProductosPage() {
  return (
    <>
      {/* Header */}
      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#d4a853] text-xs tracking-[0.3em] uppercase mb-3">
            Toda la colección
          </p>
          <h1 className="font-display text-6xl sm:text-7xl text-white tracking-wide">
            PRODUCTOS
          </h1>
        </div>
      </div>

      {/* Grilla */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <ProductGrid
          products={products}
          showFilters={true}
          showSort={true}
        />
      </div>

      <Footer />
    </>
  );
}
