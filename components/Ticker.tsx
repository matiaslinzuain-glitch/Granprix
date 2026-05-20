export default function Ticker() {
  const items = [
    "NUEVA COLECCIÓN",
    "ROPA DE HOMBRE",
    "PICKUP EN LINIERS",
    "PAGO ONLINE Y EN LOCAL",
    "POLÍTICA DE CAMBIOS",
    "40+ PRODUCTOS",
  ];

  // Duplicamos para el loop continuo
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-[#d4a853] py-3 overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="font-display text-black text-sm tracking-[0.2em] uppercase px-6">
              {item}
            </span>
            <span className="text-black/40 text-sm">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
