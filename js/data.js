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
  },
  {
    id: "018",
    nombre: "Pantalón Jogging Cargo",
    categoria: "pantalones",
    precio: 45000,
    precioAnterior: null,
    talles: ["38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/cargo-jogging-1.jpeg",
    galeria: ["img/cargo-jogging-2.jpeg", "img/cargo-jogging-3.jpeg", "img/cargo-jogging-4.jpeg", "img/cargo-jogging-5.jpeg", "img/cargo-jogging-6.jpeg", "img/cargo-jogging-7.jpeg"],
    descripcion: "Pantalón jogging cargo disponible en varios colores. Cintura elástica, bolsillos cargo con cierre. Del talle 38 al especial 58."
  },
  {
    id: "019",
    nombre: "Pantalón Jogging Clásico",
    categoria: "pantalones",
    precio: 40000,
    precioAnterior: null,
    talles: ["38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/jogging-clasico-1.jpeg",
    galeria: ["img/jogging-clasico-2.jpeg", "img/jogging-clasico-3.jpeg", "img/jogging-clasico-4.jpeg", "img/jogging-clasico-5.jpeg"],
    descripcion: "Pantalón jogging clásico con bolsillos con cierre. Cintura elástica, corte recto. Del talle 38 al especial 58."
  },
  {
    id: "020",
    nombre: "Pantalón Jean Clásico",
    categoria: "pantalones",
    precio: 45000,
    precioAnterior: null,
    talles: ["38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/jean-clasico-1.jpeg",
    galeria: ["img/jean-clasico-2.jpeg", "img/jean-clasico-3.jpeg", "img/jean-clasico-4.jpeg", "img/jean-clasico-5.jpeg", "img/jean-clasico-6.jpeg", "img/jean-clasico-7.jpeg", "img/jean-clasico-8.jpeg", "img/jean-clasico-9.jpeg", "img/jean-clasico-10.jpeg", "img/jean-clasico-11.jpeg", "img/jean-clasico-12.jpeg", "img/jean-clasico-13.jpeg", "img/jean-clasico-14.jpeg", "img/jean-clasico-15.jpeg", "img/jean-clasico-16.jpeg", "img/jean-clasico-17.jpeg", "img/jean-clasico-18.jpeg", "img/jean-clasico-19.jpeg", "img/jean-clasico-20.jpeg"],
    descripcion: "Pantalón jean clásico disponible en varios colores y lavados. Corte recto, 5 bolsillos. Del talle 38 al especial 60."
  },
  {
    id: "021",
    nombre: "Pantalón Jean Clásico Talle Especial",
    categoria: "pantalones",
    precio: 65000,
    precioAnterior: null,
    talles: ["38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62", "64", "66", "68"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/jean-talle-especial-1.jpeg",
    galeria: [],
    descripcion: "Pantalón jean clásico en talles especiales. Disponible hasta talle 68."
  },
  {
    id: "022",
    nombre: "Pantalón Corte Chino Negro",
    categoria: "pantalones",
    precio: 50000,
    precioAnterior: null,
    talles: ["38", "40", "42", "44", "46", "48", "50", "52"],
    colores: ["Negro"],
    badge: "nuevo",
    imagen: "img/chino-negro-1.jpeg",
    galeria: ["img/chino-negro-2.jpeg"],
    descripcion: "Pantalón corte chino negro. Corte recto, bolsillos laterales. Del talle 38 al 52."
  },
  {
    id: "023",
    nombre: "Pantalón Corte Chino Beige",
    categoria: "pantalones",
    precio: 50000,
    precioAnterior: null,
    talles: ["38", "40", "42", "44", "46", "48", "50", "52"],
    colores: ["Beige"],
    badge: "nuevo",
    imagen: "img/chino-beige-1.jpeg",
    galeria: ["img/chino-beige-2.jpeg", "img/chino-beige-3.jpeg"],
    descripcion: "Pantalón corte chino beige. Corte recto, bolsillos laterales. Del talle 38 al 52."
  },
  {
    id: "024",
    nombre: "Pantalón Corte Chino Camel",
    categoria: "pantalones",
    precio: 50000,
    precioAnterior: null,
    talles: ["38", "40", "42", "44", "46", "48", "50", "52"],
    colores: ["Camel"],
    badge: "nuevo",
    imagen: "img/chino-camel-1.jpeg",
    galeria: ["img/chino-camel-2.jpeg", "img/chino-camel-3.jpeg", "img/chino-camel-4.jpeg"],
    descripcion: "Pantalón corte chino camel. Corte recto, bolsillos laterales. Del talle 38 al 52."
  },
  {
    id: "025",
    nombre: "Jean Elastizado Negro",
    categoria: "pantalones",
    precio: 50000,
    precioAnterior: null,
    talles: ["38", "40", "42", "44", "46", "48", "50", "52"],
    colores: ["Negro"],
    badge: "nuevo",
    imagen: "img/jean-elastizado-1.jpeg",
    galeria: ["img/jean-elastizado-2.jpeg"],
    descripcion: "Jean elastizado negro. Ajuste cómodo y flexible. Del talle 38 al 52."
  },
  {
    id: "026",
    nombre: "Pantalón Corte Chino Azul y Negro",
    categoria: "pantalones",
    precio: 50000,
    precioAnterior: null,
    talles: ["38", "40", "42", "44", "46", "48", "50", "52"],
    colores: ["Azul", "Negro"],
    badge: "nuevo",
    imagen: "img/chino-azul-negro-1.jpeg",
    galeria: [],
    descripcion: "Pantalón corte chino disponible en azul y negro. Corte recto, bolsillos laterales. Del talle 38 al 52."
  },
  {
    id: "027",
    nombre: "Pantalón Náutico Cargo",
    categoria: "pantalones",
    precio: 45000,
    precioAnterior: null,
    talles: ["38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62", "64", "66", "68"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/nautico-cargo-1.jpeg",
    galeria: ["img/nautico-cargo-2.jpeg", "img/nautico-cargo-3.jpeg", "img/nautico-cargo-4.jpeg", "img/nautico-cargo-5.jpeg"],
    descripcion: "Pantalón náutico cargo con múltiples bolsillos y cintura elástica. Del talle 38 al especial 68."
  },
  {
    id: "028",
    nombre: "Pantalón Vestir Mecano Tropical",
    categoria: "pantalones",
    precio: 50000,
    precioAnterior: null,
    talles: ["38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/mecano-tropical-1.jpeg",
    galeria: ["img/mecano-tropical-2.jpeg", "img/mecano-tropical-3.jpeg"],
    descripcion: "Pantalón de vestir mecano tropical. Corte clásico, tela liviana. Del talle 38 al especial 60."
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
