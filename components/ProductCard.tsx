"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import ImagePlaceholder from "./ImagePlaceholder";

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

interface ProductCardProps {
  product: Product;
}

function formatPrice(price: number) {
  return "$" + price.toLocaleString("es-AR");
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [hovering, setHovering] = useState(false);

  function handleAdd(e: React.MouseEvent) {
    e.preventDefault();
    addItem({
      id: product.id,
      nombre: product.nombre,
      precio: product.precio,
      imagen: product.imagen,
      talle: product.talles[0],
    });
  }

  const badgeColor =
    product.badge === "nuevo"
      ? "bg-[#d4a853] text-black"
      : product.badge === "oferta"
      ? "bg-red-600 text-white"
      : "";

  return (
    <Link
      href={`/productos/${product.id}`}
      className="group block bg-[#111111] hover:bg-[#161616] transition-colors duration-300"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Imagen */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#1a1a1a]">
        <ImagePlaceholder className="w-full h-full" label={product.nombre} />

        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 text-xs font-semibold tracking-wider uppercase px-2.5 py-1 ${badgeColor}`}
          >
            {product.badge}
          </span>
        )}

        {/* Botón agregar (hover) */}
        <button
          onClick={handleAdd}
          className={`absolute bottom-3 right-3 w-10 h-10 bg-[#d4a853] text-black flex items-center justify-center hover:bg-[#e8c47a] transition-all duration-200 ${
            hovering ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
          aria-label="Agregar al carrito"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-[#9a9a9a] text-xs tracking-wider uppercase mb-1">
          {product.categoria}
        </p>
        <h3 className="text-white text-sm font-medium mb-2 group-hover:text-[#d4a853] transition-colors duration-200">
          {product.nombre}
        </h3>

        {/* Talles */}
        <div className="flex gap-1 mb-3 flex-wrap">
          {product.talles.slice(0, 4).map((t) => (
            <span
              key={t}
              className="text-[#555555] text-xs border border-[#2a2a2a] px-1.5 py-0.5"
            >
              {t}
            </span>
          ))}
          {product.talles.length > 4 && (
            <span className="text-[#555555] text-xs">+{product.talles.length - 4}</span>
          )}
        </div>

        {/* Precio */}
        <div className="flex items-center gap-3">
          <span className="text-white font-semibold text-base">
            {formatPrice(product.precio)}
          </span>
          {product.precioAnterior && (
            <span className="text-[#555555] text-sm line-through">
              {formatPrice(product.precioAnterior)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
