import Footer from "@/components/Footer";

export const metadata = {
  title: "Contacto — Gran Prix",
  description: "Contactanos por WhatsApp o visitanos en Rivadavia 11450, local 4, Liniers, CABA.",
};

export default function ContactoPage() {
  const waNumber = "5491100000000";

  const horarios = [
    { dia: "Lunes a Viernes", horario: "10:00 — 20:00" },
    { dia: "Sábados", horario: "10:00 — 18:00" },
    { dia: "Domingos", horario: "Cerrado" },
  ];

  return (
    <>
      {/* Header */}
      <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-b border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#d4a853] text-xs tracking-[0.3em] uppercase mb-3">
            Estamos para vos
          </p>
          <h1 className="font-display text-6xl sm:text-7xl text-white tracking-wide">
            CONTACTO
          </h1>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            {/* Dirección */}
            <div className="bg-[#111111] border border-[#2a2a2a] p-8 mb-6">
              <h2 className="font-display text-3xl text-white tracking-wide mb-6">
                NUESTRO LOCAL
              </h2>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 border border-[#d4a853]/40 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#d4a853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-lg mb-1">
                    Rivadavia 11450, Local 4
                  </p>
                  <p className="text-[#9a9a9a]">Liniers, CABA, Argentina</p>
                  <a
                    href="https://maps.google.com/?q=Rivadavia+11450+Liniers+Buenos+Aires"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-[#d4a853] text-sm hover:text-[#e8c47a] transition-colors"
                  >
                    Ver en Google Maps
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Mapa estático placeholder */}
              <div className="w-full h-48 bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-10 h-10 text-[#333333] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <p className="text-[#444444] text-xs tracking-wider uppercase">
                    Rivadavia 11450, Liniers
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-[#111111] border border-[#2a2a2a] p-8">
              <h2 className="font-display text-3xl text-white tracking-wide mb-4">
                ESCRIBINOS
              </h2>
              <p className="text-[#9a9a9a] text-sm leading-relaxed mb-6">
                Respondemos en minutos durante el horario de atención.
                Consultas sobre productos, talles, colores y disponibilidad.
              </p>
              <a
                href={`https://wa.me/${waNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25d366] text-white font-semibold text-sm tracking-widest uppercase py-5 flex items-center justify-center gap-3 hover:bg-[#22c55e] transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Abrir WhatsApp
              </a>
            </div>
          </div>

          {/* Horarios y políticas */}
          <div>
            {/* Horarios */}
            <div className="bg-[#111111] border border-[#2a2a2a] p-8 mb-6">
              <h2 className="font-display text-3xl text-white tracking-wide mb-6">
                HORARIOS
              </h2>
              <div className="flex flex-col divide-y divide-[#1a1a1a]">
                {horarios.map((h) => (
                  <div key={h.dia} className="flex items-center justify-between py-4">
                    <span className="text-[#9a9a9a] text-sm">{h.dia}</span>
                    <span
                      className={`text-sm font-medium ${
                        h.horario === "Cerrado"
                          ? "text-[#555555]"
                          : "text-white"
                      }`}
                    >
                      {h.horario}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Política de cambios */}
            <div className="bg-[#111111] border border-[#2a2a2a] p-8 mb-6">
              <h2 className="font-display text-3xl text-white tracking-wide mb-6">
                POLÍTICA DE CAMBIOS
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  {
                    check: true,
                    text: "Aceptamos cambios dentro de los 30 días corridos de la compra",
                  },
                  {
                    check: true,
                    text: "La prenda debe estar sin uso, sin lavar, con su etiqueta original",
                  },
                  {
                    check: true,
                    text: "Podés cambiar por otro producto, talle o color disponible",
                  },
                  {
                    check: true,
                    text: "Los cambios se gestionan en el local o coordinando retiro por WhatsApp",
                  },
                  {
                    check: false,
                    text: "No realizamos devoluciones de dinero",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        item.check ? "text-[#d4a853]" : "text-[#555555]"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {item.check ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      )}
                    </svg>
                    <p className={`text-sm leading-relaxed ${item.check ? "text-[#9a9a9a]" : "text-[#555555]"}`}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Medios de pago */}
            <div className="bg-[#111111] border border-[#2a2a2a] p-8">
              <h2 className="font-display text-3xl text-white tracking-wide mb-6">
                MEDIOS DE PAGO
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Efectivo",
                  "Débito",
                  "Crédito",
                  "Transferencia",
                  "Mercado Pago",
                  "DEBIN",
                ].map((m) => (
                  <div key={m} className="flex items-center gap-2 border border-[#2a2a2a] px-4 py-3">
                    <svg className="w-4 h-4 text-[#d4a853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#9a9a9a] text-sm">{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
