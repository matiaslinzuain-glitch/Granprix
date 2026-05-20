"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import ImagePlaceholder from "./ImagePlaceholder";
import ProductCard from "./ProductCard";

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

interface ProductDetailProps {
  product: Product;
  related: Product[];
}

function formatPrice(price: number) {
  return "$" + price.toLocaleString("es-AR");
}

export default function ProductDetail({ product, related }: ProductDetailProps) {
  const { addItem } = useCart();
  const [selectedTalle, setSelectedTalle] = useState(product.talles[0]);

  function handleAdd() {
    addItem({
      id: product.id,
      nombre: product.nombre,
      precio: product.precio,
      imagen: product.imagen,
      talle: selectedTalle,
    });
  }

  const badgeColor =
    product.badge === "nuevo"
      ? "bg-[#d4a853] text-black"
      : product.badge === "oferta"
      ? "bg-red-600 text-white"
      : "";

  const discount = product.precioAnterior
    ? Math.round((1 - product.precio / product.precioAnterior) * 100)
    : null;

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[#555555] text-xs tracking-wider uppercase mb-10">
          <a href="/" className="hover:text-[#d4a853] transition-colors">Inicio</a>
          <span>/</span>
          <a href="/productos" className="hover:text-[#d4a853] transition-colors">Productos</a>
          <span>/</span>
          <span className="text-[#9a9a9a]">{product.nombre}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Galería */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[3/4] bg-[#1a1a1a] w-full">
              <ImagePlaceholder className="w-full h-full" label={product.nombre} />
              {product.badge && (
                <span className={`absolute top-4 left-4 text-xs font-semibold tracking-wider uppercase px-3 py-1.5 ${badgeColor}`}>
                  {product.badge}
                </span>
              )}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-[#1a1a1a] cursor-pointer border-2 border-transparent hover:border-[#d4a853] transition-colors">
                  <ImagePlaceholder className="w-full h-full" label="" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <p className="text-[#d4a853] text-xs tracking-[0.3em] uppercase mb-3 capitalize">
              {product.categoria}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl text-white tracking-wide mb-6">
              {product.nombre.toUpperCase()}
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <span className="font-display text-4xl text-white tracking-wide">
                {formatPrice(product.precio)}
              </span>
              {product.precioAnterior && (
                <>
                  <span className="text-[#555555] text-xl line-through">
                    {formatPrice(product.precioAnterior)}
                  </span>
                  {discount && (
                    <span className="bg-red-600 text-white text-xs font-semibold px-2 py-0.5">
                      {discount}% OFF
                    </span>
                  )}
                </>
              )}
            </div>

            {/* Talle */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white text-sm font-semibold tracking-wider uppercase">
                  Talle
                </span>
                <span className="text-[#555555] text-xs tracking-wider">
                  Seleccionado: {selectedTalle}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.talles.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTalle(t)}
                    className={`min-w-[52px] h-12 text-sm font-medium tracking-wider uppercase transition-all duration-200 px-3 ${
                      selectedTalle === t
                        ? "bg-[#d4a853] text-black border-2 border-[#d4a853]"
                        : "border border-[#2a2a2a] text-[#9a9a9a] hover:border-[#d4a853] hover:text-white"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Colores */}
            <div className="mb-8">
              <span className="text-white text-sm font-semibold tracking-wider uppercase block mb-3">
                Colores disponibles
              </span>
              <div className="flex flex-wrap gap-2">
                {product.colores.map((c) => (
                  <span
                    key={c}
                    className="border border-[#2a2a2a] text-[#9a9a9a] text-xs tracking-wider px-3 py-1.5 capitalize"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={handleAdd}
              className="w-full bg-[#d4a853] text-black font-semibold text-sm tracking-widest uppercase py-5 hover:bg-[#e8c47a] transition-colors duration-200 mb-4"
            >
              Agregar al carrito
            </button>

            <a
              href={`https://wa.me/5491100000000?text=${encodeURIComponent(`Hola! Quiero consultar por el producto: ${product.nombre}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full border border-[#2a2a2a] text-[#9a9a9a] font-semibold text-sm tracking-widest uppercase py-5 flex items-center justify-center gap-2 hover:border-[#25d366] hover:text-[#25d366] transition-colors duration-200 mb-8"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Consultar por WhatsApp
            </a>

            <div className="border-t border-[#2a2a2a] pt-6 mb-6">
              <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-3">
                Descripción
              </h3>
              <p className="text-[#9a9a9a] text-sm leading-relaxed">
                {product.descripcion}
              </p>
            </div>

            <div className="border-t border-[#2a2a2a] pt-6">
              <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-3">
                Política de cambios
              </h3>
              <div className="flex flex-col gap-2">
                {[
                  { ok: true, text: "Cambios aceptados dentro de los 30 días con etiqueta" },
                  { ok: true, text: "La prenda debe estar sin uso y sin lavar" },
                  { ok: false, text: "No se aceptan devoluciones de dinero" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <svg className={`w-4 h-4 flex-shrink-0 ${item.ok ? "text-[#d4a853]" : "text-[#555555]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.ok
                        ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      }
                    </svg>
                    <span className={item.ok ? "text-[#9a9a9a]" : "text-[#555555]"}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Relacionados */}
        {related.length > 0 && (
          <div className="mt-20 pt-16 border-t border-[#1a1a1a]">
            <h2 className="font-display text-4xl text-white tracking-wide mb-8">
              TAMBIÉN TE PUEDE GUSTAR
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
