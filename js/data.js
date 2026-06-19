const PRODUCTOS = [
  {
    id: "014",
    fechaCreacion: "2026-06-09",
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
  ,
    stockAgotado: []
  },
  {
    id: "015",
    fechaCreacion: "2026-06-09",
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
  ,
    stockAgotado: []
  },
  {
    id: "016",
    fechaCreacion: "2026-06-09",
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
  ,
    stockAgotado: []
  },
  {
    id: "017",
    fechaCreacion: "2026-06-09",
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
  ,
    stockAgotado: []
  },
  {
    id: "018",
    fechaCreacion: "2026-06-09",
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
  ,
    stockAgotado: []
  },
  {
    id: "019",
    fechaCreacion: "2026-06-09",
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
  ,
    stockAgotado: []
  },
  {
    id: "020",
    fechaCreacion: "2026-06-09",
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
  ,
    stockAgotado: []
  },
  {
    id: "021",
    fechaCreacion: "2026-06-09",
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
  ,
    stockAgotado: []
  },
  {
    id: "022",
    fechaCreacion: "2026-06-09",
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
  ,
    stockAgotado: []
  },
  {
    id: "023",
    fechaCreacion: "2026-06-09",
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
  ,
    stockAgotado: []
  },
  {
    id: "024",
    fechaCreacion: "2026-06-09",
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
  ,
    stockAgotado: []
  },
  {
    id: "025",
    fechaCreacion: "2026-06-09",
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
  ,
    stockAgotado: []
  },
  {
    id: "026",
    fechaCreacion: "2026-06-09",
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
  ,
    stockAgotado: []
  },
  {
    id: "027",
    fechaCreacion: "2026-06-09",
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
  ,
    stockAgotado: []
  },
  {
    id: "028",
    fechaCreacion: "2026-06-09",
    nombre: "Pantalón Vestir Mecano Tropical",
    categoria: "pantalones",
    precio: 40000,
    precioAnterior: null,
    talles: ["38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/mecano-tropical-1.jpeg",
    galeria: ["img/mecano-tropical-2.jpeg", "img/mecano-tropical-3.jpeg"],
    descripcion: "Pantalón de vestir mecano tropical. Corte clásico, tela liviana. Del talle 38 al especial 60."
  ,
    stockAgotado: []
  },
  {
    id: "029",
    fechaCreacion: "2026-06-09",
    nombre: "Polera Lana de Hilo",
    categoria: "sueters",
    precio: 30000,
    precioAnterior: null,
    talles: ["S", "M", "L", "XL", "XXL"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/polera-lana-hilo-fb-2.png",
    galeria: ["img/polera-lana-hilo-fb-1.png", "img/polera-lana-hilo-2.jpeg", "img/polera-lana-hilo-3.jpeg", "img/polera-lana-hilo-4.jpeg"],
    descripcion: "Polera de lana de hilo, ¡no pica! Suave al tacto, ideal para el frío. Del talle S al XXL."
  ,
    stockAgotado: []
  },
  {
    id: "030",
    fechaCreacion: "2026-06-09",
    nombre: "Suéter Medio Cierre",
    categoria: "sueters",
    precio: 30000,
    precioAnterior: null,
    talles: ["S", "M", "L", "XL", "XXL"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/sueter-medio-cierre-fb-1.png",
    galeria: ["img/sueter-medio-cierre-fb-2.png", "img/sueter-medio-cierre-2.jpeg", "img/sueter-medio-cierre-3.jpeg", "img/sueter-medio-cierre-4.jpeg"],
    descripcion: "Suéter con medio cierre. Abrigado y cómodo, disponible en varios colores. Del talle S al XXL."
  ,
    stockAgotado: []
  },
  {
    id: "031",
    fechaCreacion: "2026-06-09",
    nombre: "Pulóver Cuello V Talle Especial",
    categoria: "sueters",
    precio: 50000,
    precioAnterior: null,
    talles: ["6", "7", "8", "9", "10"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/pulover-cuello-v-fb.png",
    galeria: ["img/pulover-cuello-v-1.jpeg", "img/pulover-cuello-v-2.jpeg", "img/pulover-cuello-v-3.jpeg"],
    descripcion: "Pulóver cuello V en talles especiales. Amplio rango de talles para mayor comodidad."
  ,
    stockAgotado: []
  },
  {
    id: "032",
    fechaCreacion: "2026-06-09",
    nombre: "Campera de Lana",
    categoria: "sueters",
    precio: 35000,
    precioAnterior: null,
    talles: ["2", "3", "4", "5", "6", "7", "8"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/campera-lana-1.jpeg",
    galeria: ["img/campera-lana-2.jpeg", "img/campera-lana-3.jpeg"],
    descripcion: "Campera de lana abrigada. Excelente calidad y terminación. Del talle S al XXL."
  ,
    stockAgotado: []
  },
  {
    id: "033",
    fechaCreacion: "2026-06-09",
    nombre: "Suéter Cuello V",
    categoria: "sueters",
    precio: 35000,
    precioAnterior: null,
    talles: ["S", "M", "L", "XL", "XXL", "3XL", "4XL"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/sueter-cuello-v-1.jpeg",
    galeria: ["img/sueter-cuello-v-2.jpeg", "img/sueter-cuello-v-3.jpeg", "img/sueter-cuello-v-4.jpeg"],
    descripcion: "Suéter cuello V clásico. Disponible en varios colores. Del talle S al XXL."
  ,
    stockAgotado: []
  },
  {
    id: "034",
    fechaCreacion: "2026-06-09",
    nombre: "Suéter Cuello Redondo",
    categoria: "sueters",
    precio: 35000,
    precioAnterior: null,
    talles: ["S", "M", "L", "XL", "XXL", "3XL", "4XL"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/sueter-cuello-redondo-1.jpeg",
    galeria: ["img/sueter-cuello-redondo-2.jpeg", "img/sueter-cuello-redondo-3.jpeg"],
    descripcion: "Suéter cuello redondo clásico. Abrigado y versátil. Del talle S al XXL."
  ,
    stockAgotado: []
  },
  {
    id: "035",
    fechaCreacion: "2026-06-09",
    nombre: "Campera de Lana Tramada",
    categoria: "sueters",
    precio: 40000,
    precioAnterior: null,
    talles: ["S", "M", "L", "XL", "XXL"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/campera-lana-tramada-1.jpeg",
    galeria: [],
    descripcion: "Campera de lana tramada. Diseño exclusivo, muy abrigada. Del talle S al XXL."
  ,
    stockAgotado: []
  },
  {
    id: "036",
    fechaCreacion: "2026-06-09",
    nombre: "Pulóver Cuello V Varios Tonos",
    categoria: "sueters",
    precio: 38000,
    precioAnterior: null,
    talles: ["S", "M", "L", "XL", "XXL", "3XL", "4XL"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/pulover-cuello-v-4.jpeg",
    galeria: [],
    descripcion: "Pulóver cuello V disponible en gran variedad de tonos y colores. Del talle S al XXL."
  ,
    stockAgotado: []
  },
  {
    id: "037",
    fechaCreacion: "2026-06-09",
    nombre: "Campera Canguro Frisado Engomado",
    categoria: "camperas",
    precio: 50000,
    precioAnterior: null,
    talles: ["S", "M", "L", "XL", "XXL"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/campera-canguro-1.jpeg",
    galeria: ["img/campera-canguro-2.jpeg", "img/campera-canguro-3.jpeg", "img/campera-canguro-4.jpeg", "img/campera-canguro-5.jpeg", "img/campera-canguro-6.jpeg", "img/campera-canguro-7.jpeg"],
    descripcion: "Campera canguro frisado engomado en varios tonos. Bolsillo canguro, interior frisado, muy abrigada. Del talle S al XXL."
  ,
    stockAgotado: []
  },
  {
    id: "038",
    fechaCreacion: "2026-06-09",
    nombre: "Campera Cuero Ecológico con Piel",
    categoria: "camperas",
    precio: 70000,
    precioAnterior: null,
    talles: ["S", "M", "L", "XL", "XXL"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/campera-cuero-ecologico-1.jpeg",
    galeria: [],
    descripcion: "Campera de cuero ecológico con piel interior. Elegante y muy abrigada. Del talle S al XXL."
  ,
    stockAgotado: []
  },
  {
    id: "039",
    fechaCreacion: "2026-06-09",
    nombre: "Campera de Lana con Botones",
    categoria: "camperas",
    precio: 35000,
    precioAnterior: null,
    talles: ["S", "M", "L", "XL", "XXL"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/campera-lana-botones-1.jpeg",
    galeria: [],
    descripcion: "Campera de lana con cierre de botones. Clásica y abrigada. Del talle S al XXL."
  ,
    stockAgotado: []
  },
  {
    id: "040",
    fechaCreacion: "2026-06-09",
    nombre: "Campera Puffer",
    categoria: "camperas",
    precio: 75000,
    precioAnterior: null,
    talles: ["S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL", "6XL"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/campera-puffer-1.jpeg",
    galeria: [],
    descripcion: "Campera puffer ultraabrigada. Disponible del talle S hasta talle especial."
  ,
    stockAgotado: []
  },
  {
    id: "041",
    fechaCreacion: "2026-06-09",
    nombre: "Campera Abrigo con Capucha",
    categoria: "camperas",
    precio: 55000,
    precioAnterior: null,
    talles: ["2", "3", "4", "5", "6"],
    colores: ["Azul", "Negro"],
    badge: "nuevo",
    imagen: "img/campera-abrigo-capucha-1.jpeg",
    galeria: [],
    descripcion: "Campera abrigo con capucha en azul o negro. Talles 2 al 6 (equivalente a talle 54)."
  ,
    stockAgotado: []
  },
  {
    id: "042",
    fechaCreacion: "2026-06-09",
    nombre: "Campera Cuero con Piel",
    categoria: "camperas",
    precio: 70000,
    precioAnterior: null,
    talles: ["S", "M", "L", "XL", "XXL"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/campera-cuero-piel-1.jpeg",
    galeria: ["img/campera-cuero-piel-2.jpeg", "img/campera-cuero-piel-3.jpeg", "img/campera-cuero-piel-4.jpeg"],
    descripcion: "Campera de cuero con piel interior. Máximo abrigo y estilo. Del talle S al XXL."
  ,
    stockAgotado: []
  },
  {
    id: "043",
    fechaCreacion: "2026-06-09",
    nombre: "Campera Frisa con Piel",
    categoria: "camperas",
    precio: 50000,
    precioAnterior: null,
    talles: ["S", "M", "L", "XL", "XXL"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/campera-frisa-piel-1.jpeg",
    galeria: [],
    descripcion: "Campera de frisa con piel interior. Abrigada y cómoda. Del talle S al XXL."
  ,
    stockAgotado: []
  },
  {
    id: "044",
    fechaCreacion: "2026-06-09",
    nombre: "Campera con Cierre Tramado",
    categoria: "camperas",
    precio: 35000,
    precioAnterior: null,
    talles: ["S", "M", "L", "XL", "XXL"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/campera-cierre-tramado-1.jpeg",
    galeria: [],
    descripcion: "Campera con cierre tramado. Diseño exclusivo y abrigado. Del talle S al XXL."
  ,
    stockAgotado: []
  },
  {
    id: "045",
    fechaCreacion: "2026-06-09",
    nombre: "Campera Chaleco Sin Mangas Impermeable",
    categoria: "camperas",
    precio: 50000,
    precioAnterior: null,
    talles: ["S", "M", "L", "XL", "XXL", "3XL", "4XL"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/campera-chaleco-1.jpeg",
    galeria: ["img/campera-chaleco-2.jpeg"],
    descripcion: "Chaleco sin mangas impermeable. Liviano y funcional, disponible en talles especiales. Del talle S al 4XL."
  ,
    stockAgotado: []
  },
  {
    id: "046",
    fechaCreacion: "2026-06-09",
    nombre: "Campera de Lana Talle Super Especial",
    categoria: "camperas",
    precio: 45000,
    precioAnterior: null,
    talles: ["M", "L", "XL", "XXL", "3XL", "4XL", "5XL", "6XL", "7XL"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/campera-lana-super-esp-1.jpeg",
    galeria: ["img/campera-lana-super-esp-2.jpeg"],
    descripcion: "Campera de lana hasta talle super especial. Del talle M hasta 7XL."
  ,
    stockAgotado: []
  },
  {
    id: "047",
    fechaCreacion: "2026-06-09",
    nombre: "Campera Lana de Hilo Varios Tonos",
    categoria: "camperas",
    precio: 35000,
    precioAnterior: null,
    talles: ["S", "M", "L", "XL", "XXL"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/campera-lana-hilo-c-1.jpeg",
    galeria: ["img/campera-lana-hilo-c-2.jpeg"],
    descripcion: "Campera de lana de hilo en varios tonos y colores. Del talle S al XXL."
  ,
    stockAgotado: []
  },
  {
    id: "048",
    fechaCreacion: "2026-06-09",
    nombre: "Buzo Canguro Frisado Pecho y Espalda",
    categoria: "buzos",
    precio: 50000,
    precioAnterior: null,
    talles: ["2", "3", "4", "5", "6"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/buzo-canguro-frisado-nuevo-1.jpeg",
    galeria: ["img/buzo-canguro-frisado-fb-1.png", "img/buzo-canguro-frisado-1.jpeg", "img/buzo-canguro-frisado-2.jpeg"],
    descripcion: "Buzo canguro frisado con frisa en pecho y espalda. Abrigado y cómodo. Talle 2 al 6."
  ,
    stockAgotado: []
  },
  {
    id: "049",
    fechaCreacion: "2026-06-09",
    nombre: "Buzo Frisado Medio Cierre",
    categoria: "buzos",
    precio: 45000,
    precioAnterior: null,
    talles: ["2", "3", "4", "5", "6"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/buzo-frisado-mc-1.jpeg",
    galeria: ["img/buzo-frisado-mc-2.jpeg", "img/buzo-frisado-mc-3.jpeg"],
    descripcion: "Buzo frisado con medio cierre. Disponible en varios colores. Talle 2 al 6."
  ,
    stockAgotado: []
  },
  {
    id: "050",
    fechaCreacion: "2026-06-09",
    nombre: "Buzo Polar Medio Cierre Talle Especial",
    categoria: "buzos",
    precio: 60000,
    precioAnterior: null,
    talles: ["6", "7", "8", "9", "10"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/buzo-polar-mc-esp-1.jpeg",
    galeria: [],
    descripcion: "Buzo polar con medio cierre en talle especial. Talle 6 al 10."
  ,
    stockAgotado: []
  },
  {
    id: "051",
    fechaCreacion: "2026-06-09",
    nombre: "Buzo Frisa Cuello Redondo",
    categoria: "buzos",
    precio: 45000,
    precioAnterior: null,
    talles: ["2", "3", "4", "5", "6", "7", "8"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/buzo-frisa-cr-1.jpeg",
    galeria: ["img/buzo-frisa-cr-2.jpeg"],
    descripcion: "Buzo de frisa cuello redondo, hay talle especial. Del talle 2 al 8."
  ,
    stockAgotado: []
  },
  {
    id: "052",
    fechaCreacion: "2026-06-09",
    nombre: "Buzo Frisa Cuello Redondo Talle Especial",
    categoria: "buzos",
    precio: 50000,
    precioAnterior: null,
    talles: ["6", "7", "8", "9", "10"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/buzo-frisa-cr-esp-1.jpeg",
    galeria: ["img/buzo-frisa-cr-esp-2.jpeg", "img/buzo-frisa-cr-esp-3.jpeg"],
    descripcion: "Buzo de frisa cuello redondo en talle especial. Del talle 6 al 10."
  ,
    stockAgotado: []
  },
  {
    id: "053",
    fechaCreacion: "2026-06-09",
    nombre: "Buzo Canguro Talle Especial",
    categoria: "buzos",
    precio: 60000,
    precioAnterior: null,
    talles: ["6", "7", "8", "9", "10"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/buzo-canguro-esp-1.jpeg",
    galeria: ["img/buzo-canguro-esp-2.jpeg"],
    descripcion: "Buzo canguro en talle especial. Del talle 6 al 10."
  ,
    stockAgotado: []
  },
  {
    id: "054",
    fechaCreacion: "2026-06-09",
    nombre: "Buzo Polar Medio Cierre Varios Tonos",
    categoria: "buzos",
    precio: 45000,
    precioAnterior: null,
    talles: ["2", "3", "4", "5", "6"],
    colores: ["Varios tonos"],
    badge: "nuevo",
    imagen: "img/buzo-polar-mc-vt-1.jpeg",
    galeria: ["img/buzo-polar-mc-vt-2.jpeg", "img/buzo-polar-mc-vt-3.jpeg"],
    descripcion: "Buzo polar con medio cierre en varios tonos y colores. Del talle 2 al 6."
  ,
    stockAgotado: []
  },
  {
    id: "055",
    fechaCreacion: "2026-06-09",
    nombre: "Campera Polar Talle Especial",
    categoria: "buzos",
    precio: 60000,
    precioAnterior: null,
    talles: ["6", "7", "8", "9", "10"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/campera-polar-esp-1.jpeg",
    galeria: ["img/campera-polar-esp-2.jpeg", "img/campera-polar-esp-3.jpeg"],
    descripcion: "Campera polar en talle especial. Del talle 6 al 10."
  ,
    stockAgotado: []
  },
  {
    id: "056",
    fechaCreacion: "2026-06-09",
    nombre: "Chaleco Vestir",
    categoria: "accesorios",
    precio: 40000,
    precioAnterior: null,
    talles: ["38", "40", "42", "44", "46", "48", "50", "52", "54"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/chaleco-vestir-fb.png",
    galeria: ["img/chaleco-vestir-1.jpeg", "img/chaleco-vestir-2.jpeg", "img/chaleco-vestir-3.jpeg"],
    descripcion: "Chaleco de vestir disponible en varios colores. Del talle 38 al 54."
  ,
    stockAgotado: []
  },
  {
    id: "057",
    fechaCreacion: "2026-06-09",
    nombre: "Corbatas y Corbatines Vestir",
    categoria: "accesorios",
    precio: 10000,
    precioAnterior: null,
    talles: ["Talle único"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/corbata-vestir-1.jpeg",
    galeria: ["img/corbata-vestir-2.jpeg", "img/corbata-vestir-3.jpeg", "img/corbata-vestir-4.jpeg", "img/corbata-vestir-5.jpeg", "img/corbata-vestir-6.jpeg"],
    descripcion: "Corbatas y corbatines de vestir en gran variedad de colores y diseños."
  ,
    stockAgotado: []
  },
  {
    id: "058",
    fechaCreacion: "2026-06-09",
    nombre: "Moños Vestir",
    categoria: "accesorios",
    precio: 9000,
    precioAnterior: null,
    talles: ["Adultos", "Niños"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/mono-vestir-1.jpeg",
    galeria: ["img/mono-vestir-2.jpeg"],
    descripcion: "Moños de vestir para adultos y niños, en variedad de colores."
  ,
    stockAgotado: []
  },
  {
    id: "059",
    fechaCreacion: "2026-06-09",
    nombre: "Tiradores Varios Tonos",
    categoria: "accesorios",
    precio: 10000,
    precioAnterior: null,
    talles: ["Talle único"],
    colores: ["Varios tonos"],
    badge: "nuevo",
    imagen: "img/tirador-vestir-1.jpeg",
    galeria: ["img/tirador-vestir-2.jpeg"],
    descripcion: "Tiradores en gran variedad de tonos y colores."
  ,
    stockAgotado: []
  },
  {
    id: "060",
    fechaCreacion: "2026-06-09",
    nombre: "Trabacorbatas",
    categoria: "accesorios",
    precio: 13000,
    precioAnterior: null,
    talles: ["Talle único"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/travacorbata-1.jpeg",
    galeria: [],
    descripcion: "Trabacorbatas de vestir en varios colores y diseños."
  ,
    stockAgotado: []
  },
  {
    id: "061",
    fechaCreacion: "2026-06-09",
    nombre: "Camperón Forrado con Piel",
    categoria: "camperas",
    precio: 70000,
    precioAnterior: null,
    talles: ["S", "M", "L", "XL", "XXL"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/camperon-forrado-piel-1.jpeg",
    galeria: [],
    descripcion: "Camperón forrado con piel. Abrigado y elegante. Del talle S al XXL."
  ,
    stockAgotado: []
  }
,
  {
    id: "062",
    fechaCreacion: "2026-06-09",
    nombre: "Campera Frisa con Piel",
    categoria: "buzos",
    precio: 50000,
    precioAnterior: null,
    talles: ["S", "M", "L", "XL", "XXL"],
    colores: ["Varios colores"],
    badge: "nuevo",
    imagen: "img/campera-frisa-piel-1.jpeg",
    galeria: [],
    descripcion: "Campera de frisa con piel interior. Abrigada y cómoda. Del talle S al XXL."
  ,
    stockAgotado: []
  }

];

function formatPrice(n) {
  return "$" + n.toLocaleString("es-AR");
}
function getProductById(id) {
  return PRODUCTOS.find(p => p.id === id);
}
function getRelated(p, n) {
  if (!p) return [];
  n = n || 6;

  // Primero, productos de la misma categoría
  const sameCat = PRODUCTOS.filter(x => x.id !== p.id && x.categoria === p.categoria);

  // Ordenar por similitud de precio
  sameCat.sort((a, b) => {
    const diffA = Math.abs(a.precio - p.precio);
    const diffB = Math.abs(b.precio - p.precio);
    return diffA - diffB;
  });

  // Si no hay suficientes en la misma categoría, agregar de otras
  let related = sameCat.slice(0, n);
  if (related.length < n) {
    const otherCat = PRODUCTOS.filter(x => x.id !== p.id && x.categoria !== p.categoria);
    otherCat.sort((a, b) => Math.abs(a.precio - p.precio) - Math.abs(b.precio - p.precio));
    related = related.concat(otherCat.slice(0, n - related.length));
  }

  return related;
}


function isNew(product) {
  if (product.badge === "nuevo" || product.badge === "oferta") return true;
  if (!product.fechaCreacion) return false;
  const createdDate = new Date(product.fechaCreacion);
  const today = new Date();
  const daysOld = (today - createdDate) / (1000 * 60 * 60 * 24);
  return daysOld <= 30;
}

// ── Estadísticas de productos (localStorage)
function trackProductView(id) {
  const stats = JSON.parse(localStorage.getItem("gp_stats") || "{}");
  if (!stats[id]) stats[id] = { views: 0, clicks: 0 };
  stats[id].views++;
  localStorage.setItem("gp_stats", JSON.stringify(stats));
}

function trackProductClick(id) {
  const stats = JSON.parse(localStorage.getItem("gp_stats") || "{}");
  if (!stats[id]) stats[id] = { views: 0, clicks: 0 };
  stats[id].clicks++;
  localStorage.setItem("gp_stats", JSON.stringify(stats));
}

function getProductStats(id) {
  const stats = JSON.parse(localStorage.getItem("gp_stats") || "{}");
  return stats[id] || { views: 0, clicks: 0 };
}

function getAllStats() {
  return JSON.parse(localStorage.getItem("gp_stats") || "{}");
}
