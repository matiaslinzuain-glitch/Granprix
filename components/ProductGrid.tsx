"use client";

import { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import FilterBar from "./FilterBar";

interface Product {
  id: string;
  nombre: string;
  categoria: string;
  precio: number;
  precioAnterior: number | null;
  talles: string[];
  colores: string[];
  imagen: string;
  badge: string | null;
  descripcion: string;
}

interface ProductGridProps {
  products: Product[];
  title?: string;
  showFilters?: boolean;
  showSort?: boolean;
  initialCategory?: string;
  limit?: number;
}

export default function ProductGrid({
  products,
  title,
  showFilters = false,
  showSort = false,
  initialCategory = "todo",
  limit,
}: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState("default");

  const filtered = useMemo(() => {
    let result =
      activeCategory === "todo"
        ? products
        : products.filter((p) => p.categoria === activeCategory);

    if (sortBy === "precio-asc") result = [...result].sort((a, b) => a.precio - b.precio);
    if (sortBy === "precio-desc") result = [...result].sort((a, b) => b.precio - a.precio);
    if (sortBy === "nuevo") result = [...result].sort((a) => (a.badge === "nuevo" ? -1 : 1));

    return limit ? result.slice(0, limit) : result;
  }, [products, activeCategory, sortBy, limit]);

  return (
    <div>
      {title && (
        <div className="mb-8">
          <p className="text-[#d4a853] text-xs tracking-[0.3em] uppercase mb-2">
            Colección
          </p>
          <h2 className="font-display text-5xl text-white tracking-wide">{title}</h2>
        </div>
      )}

      {showFilters && (
        <FilterBar
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          showSort={showSort}
        />
      )}

      {filtered.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-[#555555] text-sm tracking-wider uppercase">
            No hay productos en esta categoría
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
