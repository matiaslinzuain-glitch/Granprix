# Gran Prix — Indumentaria Masculina

Sitio web estático (HTML/CSS/JS puro, sin frameworks) para una tienda de ropa masculina ubicada en Rivadavia 11450 Local 4, Liniers, CABA, Argentina.

## Páginas

- `index.html` — Home con hero, ticker, categorías, productos destacados, novedades, pickup banner, newsletter y footer
- `productos.html` — Grilla completa de productos con filtros por categoría y orden
- `novedades.html` — Solo productos con badge "nuevo" u "oferta", con filtros
- `producto.html` — Detalle de producto (carga dinámico por ?id=XXX), galería de imágenes con click para cambiar, talles, colores, productos relacionados
- `contacto.html` — Dirección, horarios, WhatsApp, política de cambios, medios de pago

## Archivos JS

- `js/data.js` — Array `PRODUCTOS` con los 12 productos, funciones `formatPrice()`, `getProductById()`, `getRelated()`
- `js/cart.js` — Carrito con `localStorage`, función `injectCartDrawer()` que renderiza el drawer

## Estructura de carpetas

```
/
├── index.html
├── productos.html
├── novedades.html
├── producto.html
├── contacto.html
├── CLAUDE.md
├── css/
│   └── styles.css
├── js/
│   ├── data.js
│   └── cart.js
└── img/
    (21 imágenes en formato .jpeg)
```

## Productos y sus imágenes

| ID  | Nombre                     | Imagen principal              | Galería                                                                                                         |
|-----|----------------------------|-------------------------------|-----------------------------------------------------------------------------------------------------------------|
| 001 | Remera Oversize Essential  | img/camisa-cuadros.jpeg       | —                                                                                                               |
| 002 | Pantalón Cargo Urbano      | img/cargo-negro-hombre.jpeg   | img/cargo-verde-flat.jpeg, img/cargo-3colores.jpeg                                                              |
| 003 | Buzo Canguro Premium       | img/buzo-canguro-colores.jpeg | —                                                                                                               |
| 004 | Campera Bomber Satin       | img/campera-cuero-flat.jpeg   | —                                                                                                               |
| 005 | Remera Gráfica Street      | img/chaleco-negro.jpeg        | —                                                                                                               |
| 006 | Jean Slim Destroyed        | img/jean-negro-lateral.jpeg   | jean-negro-frente, jean-negro-full, jean-azul-frente, jean-azul-hombre, jean-azul-lateral, jean-gris-lateral, jean-negro-lateral2 |
| 007 | Buzo Zip Técnico           | img/buzo-zip-verde.jpeg       | img/buzo-zip-gris.jpeg                                                                                          |
| 008 | Campera Cortaviento        | null (sin imagen)             | —                                                                                                               |
| 009 | Remera Polo Piqué          | null (sin imagen)             | —                                                                                                               |
| 010 | Jogger Fleece Sport        | img/jogger-negro-flat.jpeg    | —                                                                                                               |
| 011 | Campera de Cuero Sintético | img/campera-cuero-hombre.jpeg | img/campera-cuero-flat.jpeg                                                                                     |
| 012 | Buzo Crewneck Bordado      | img/buzo-crewneck.jpeg        | img/buzo-cuello-alto.jpeg                                                                                       |

## Categorías (index.html)

Cada categoría usa una imagen real como fondo con overlay gradiente oscuro:
- Remeras → img/camisa-cuadros.jpeg
- Pantalones → img/cargo-negro-hombre.jpeg
- Buzos → img/buzo-canguro-colores.jpeg
- Camperas → img/campera-cuero-hombre.jpeg

## CSS — Decisiones clave

- Variables en `:root`: `--gold: #d4a853`, `--black: #0a0a0a`, `--surface: #111111`, etc.
- Tipografías: **Bebas Neue** (títulos/display) + **Outfit** (cuerpo)
- Ripple effect en todos los botones: `.ripple-wave` se inyecta con JS al hacer click
- Cards de producto: `aspect-ratio: 3/4`, imagen con `object-fit: cover`, zoom al hover
- `html { scroll-behavior: smooth }` — navegación por anclas en index.html

## Navegación en index.html

El navbar usa anclas (scroll suave en la misma página), NO navega a otras páginas:
- Inicio → `#hero`
- Productos → `#section-productos`
- Novedades → `#section-novedades`
- Contacto → `#section-contacto`

Los botones del hero también usan anclas.

## Carrito

- Persiste en `localStorage` con clave `gp_cart`
- `Cart.add(producto, talle)` para agregar
- `Cart.open()` para abrir el drawer
- `injectCartDrawer()` debe llamarse en cada página para inicializar

## Número de WhatsApp

Actualmente hardcodeado como `5491100000000` (placeholder). Hay que reemplazarlo con el número real en:
- `index.html` (pickup banner y footer)
- `contacto.html`
- `producto.html` (botón "Consultar por WhatsApp", incluye nombre del producto en el mensaje)

## Pendientes

- Agregar imágenes para productos 008 (Campera Cortaviento) y 009 (Remera Polo Piqué)
- Reemplazar número de WhatsApp placeholder por el número real
- Agregar imagen de campaña en el hero de index.html (actualmente placeholder)
- Completar links de redes sociales en el footer (Instagram, TikTok tienen `href="#"`)
