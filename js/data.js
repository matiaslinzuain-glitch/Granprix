const PRODUCTOS = [
  {
    id: "014",
    nombre: "Camisa Leñadora Clásica",
    categoria: "camisas",
    precio: 28000,
    precioAnterior: null,
    talles: ["38", "40", "42", "44", "46", "48", "50"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/lenadora-1.jpeg",
    galeria: ["img/lenadora-2.jpeg", "img/lenadora-3.jpeg", "img/lenadora-4.jpeg", "img/lenadora-5.jpeg", "img/lenadora-6.jpeg", "img/lenadora-7.jpeg"],
    descripcion: "Camisa leñadora clásica en franela, disponible en variedad de colores y cuadros. Cuello clásico, bolsillo en el pecho y manga larga. Del talle 38 al especial 50."
  },
  {
    id: "015",
    nombre: "Camisa Manga Larga Clásica",
    categoria: "camisas",
    precio: 30000,
    precioAnterior: null,
    talles: ["38", "40", "42", "44", "46", "48", "50", "52"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/camisa-manga-larga-1.jpeg",
    galeria: ["img/camisa-manga-larga-2.jpeg", "img/camisa-manga-larga-3.jpeg", "img/camisa-manga-larga-4.jpeg", "img/camisa-manga-larga-5.jpeg", "img/camisa-manga-larga-6.jpeg", "img/camisa-manga-larga-7.jpeg"],
    descripcion: "Camisa manga larga clásica disponible en gran variedad de colores. Cuello tradicional, botonera completa y bolsillo en el pecho. Del talle 38 al especial 52."
  },
  {
    id: "016",
    nombre: "Camisa Estampada Clásica",
    categoria: "camisas",
    precio: 30000,
    precioAnterior: null,
    talles: ["38", "40", "42", "44", "46", "48", "50", "52"],
    colores: ["Varios estampados"],
    badge: "nuevo",
    imagen: "img/camisa-estampada-2.jpeg",
    galeria: ["img/camisa-estampada-1.jpeg", "img/camisa-estampada-3.jpeg"],
    descripcion: "Camisa manga larga con estampados exclusivos. Cuello tradicional, botonera completa y bolsillo en el pecho. Del talle 38 al especial 52."
  },
  {
    id: "017",
    nombre: "Camisa Elastizada",
    categoria: "camisas",
    precio: 28000,
    precioAnterior: null,
    talles: ["S", "M", "L", "XL", "XXL"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/elastizada-negra.jpeg",
    galeria: ["img/elastizada-blanca.jpeg", "img/elastizada-bordo.jpeg", "img/elastizada-colores.jpeg", "img/elastizada-pack1.jpeg", "img/elastizada-pack2.jpeg"],
    descripcion: "Camisa elastizada manga larga con excelente ajuste y comodidad. Disponible en negro, blanco, bordó y más colores. Del talle S al XXL."
  }
];

function formatPrice(n) {
  return "$" + n.toLocaleString("es-AR");
}
function getProductById(id) {
  return PRODUCTOS.find(p => p.id === id);
}
function getRelated(id, n) {
  const p = getProductById(id);
  if (!p) return [];
  return PRODUCTOS.filter(x => x.id !== id && x.categoria === p.categoria).slice(0, n || 4);
}
