"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [nombre, setNombre] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [sent, setSent] = useState(false);

  const waNumber = "5491100000000";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nombre || !whatsapp) return;
    const msg = encodeURIComponent(
      `Hola! Soy ${nombre} y quiero suscribirme a las novedades de Gran Prix. Mi WhatsApp es ${whatsapp}.`
    );
    window.open(`https://wa.me/${waNumber}?text=${msg}`, "_blank");
    setSent(true);
  }

  return (
    <section className="bg-[#d4a853] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-black/60 text-xs tracking-[0.3em] uppercase mb-4">
          Sé el primero en enterarte
        </p>
        <h2 className="font-display text-5xl sm:text-6xl text-black tracking-wide mb-4">
          NOVEDADES AL INSTANTE
        </h2>
        <p className="text-black/70 text-base mb-10">
          Dejá tu nombre y WhatsApp y te avisamos cuando lleguen nuevos productos,
          ofertas exclusivas y colecciones especiales.
        </p>

        {sent ? (
          <div className="bg-black/10 px-8 py-6 inline-block">
            <p className="font-display text-black text-2xl tracking-wider">
              ¡GRACIAS, {nombre.toUpperCase()}!
            </p>
            <p className="text-black/70 text-sm mt-2">
              Te vamos a avisar por WhatsApp cuando haya novedades.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          >
            <input
              type="text"
              placeholder="Tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="flex-1 bg-black/10 border border-black/20 text-black placeholder-black/40 px-5 py-4 text-sm focus:outline-none focus:border-black/50 font-body"
            />
            <input
              type="tel"
              placeholder="Tu WhatsApp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              required
              className="flex-1 bg-black/10 border border-black/20 text-black placeholder-black/40 px-5 py-4 text-sm focus:outline-none focus:border-black/50 font-body"
            />
            <button
              type="submit"
              className="bg-black text-[#d4a853] font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:bg-[#0a0a0a] transition-colors duration-200 whitespace-nowrap"
            >
              Suscribirme
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
