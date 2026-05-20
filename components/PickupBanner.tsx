export default function PickupBanner() {
  const waNumber = "5491100000000";

  return (
    <section className="bg-[#111111] border-y border-[#2a2a2a] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <p className="text-[#d4a853] text-xs tracking-[0.3em] uppercase mb-4">
              Sin envío, sin espera
            </p>
            <h2 className="font-display text-5xl sm:text-6xl text-white tracking-wide leading-tight mb-6">
              RETIRÁ EN
              <br />
              <span className="text-[#d4a853]">NUESTRO LOCAL</span>
            </h2>
            <p className="text-[#9a9a9a] text-base leading-relaxed mb-8 max-w-md">
              Comprá online y retirá cuando quieras en nuestro local en Liniers.
              Sin costo de envío, sin esperas largas. Coordinamos por WhatsApp.
            </p>

            {/* Dirección */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-10 h-10 border border-[#d4a853]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-[#d4a853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium text-base">
                  Rivadavia 11450, Local 4
                </p>
                <p className="text-[#9a9a9a] text-sm">Liniers, CABA, Argentina</p>
              </div>
            </div>

            <a
              href={`https://wa.me/${waNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#d4a853] text-black font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:bg-[#e8c47a] transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Coordinar retiro
            </a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Retiro en 1 día",
                desc: "Listo para buscar al día siguiente de tu compra",
              },
              {
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Pago en local",
                desc: "Efectivo, débito y crédito aceptados",
              },
              {
                icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
                title: "Política de cambios",
                desc: "Cambios aceptados en 30 días con etiqueta",
              },
              {
                icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
                title: "Pago online",
                desc: "Transferencia bancaria y Mercado Pago",
              },
            ].map((f, i) => (
              <div key={i} className="bg-[#0a0a0a] border border-[#2a2a2a] p-5">
                <div className="w-8 h-8 mb-4">
                  <svg className="w-full h-full text-[#d4a853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">{f.title}</h3>
                <p className="text-[#555555] text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
