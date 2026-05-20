"use client";

import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden pt-16">
      {/* Gradiente de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#d4a853]/5 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-[calc(100vh-64px)] py-16">
          {/* Columna izquierda */}
          <div className="flex flex-col justify-center animate-fade-in-up">
            <p className="text-[#d4a853] text-xs font-medium tracking-[0.3em] uppercase mb-4">
              Nueva Colección 2025
            </p>

            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-wide text-white mb-6">
              ESTILO
              <br />
              <span className="text-[#d4a853]">SIN</span>
              <br />
              LÍMITES
            </h1>

            <p className="text-[#9a9a9a] text-base sm:text-lg max-w-md mb-10 leading-relaxed">
              Ropa masculina premium diseñada para los que no pasan desapercibidos.
              Pickup en Liniers, CABA.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/productos"
                className="bg-[#d4a853] text-black font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:bg-[#e8c47a] transition-colors duration-200"
              >
                Ver Productos
              </Link>
              <Link
                href="/novedades"
                className="border border-white/30 text-white font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:border-[#d4a853] hover:text-[#d4a853] transition-colors duration-200"
              >
                Novedades
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-10">
              <div>
                <p className="font-display text-4xl text-[#d4a853]">40+</p>
                <p className="text-[#9a9a9a] text-xs tracking-wider uppercase mt-1">
                  Productos
                </p>
              </div>
              <div className="w-px bg-[#2a2a2a]" />
              <div>
                <p className="font-display text-4xl text-[#d4a853]">1 día</p>
                <p className="text-[#9a9a9a] text-xs tracking-wider uppercase mt-1">
                  Pickup
                </p>
              </div>
              <div className="w-px bg-[#2a2a2a]" />
              <div>
                <p className="font-display text-4xl text-[#d4a853]">100%</p>
                <p className="text-[#9a9a9a] text-xs tracking-wider uppercase mt-1">
                  Calidad
                </p>
              </div>
            </div>
          </div>

          {/* Columna derecha — imagen de campaña */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-none lg:w-[90%] aspect-[3/4]">
              {/* Marco decorativo */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-[#d4a853]/30" />
              <div className="w-full h-full overflow-hidden">
                <ImagePlaceholder
                  label="Foto de campaña"
                  className="w-full h-full"
                  icon="person"
                />
              </div>
              {/* Badge flotante */}
              <div className="absolute -bottom-6 -left-6 bg-[#d4a853] px-6 py-4">
                <p className="font-display text-black text-xl tracking-wider">
                  NUEVA
                </p>
                <p className="font-display text-black text-xl tracking-wider">
                  COLECCIÓN
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#555555]">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#555555] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
