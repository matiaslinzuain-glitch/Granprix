const http = require("http");
const fs   = require("fs");
const path = require("path");
const PORT = 3333;
const DIR  = __dirname;

const MIME = {
  ".html": "text/html",
  ".css":  "text/css",
  ".js":   "application/javascript",
  ".jpeg": "image/jpeg",
  ".jpg":  "image/jpeg",
  ".png":  "image/png",
  ".svg":  "image/svg+xml",
  ".webp": "image/webp",
  ".ico":  "image/x-icon",
};

function buildProductosJS(productos) {
  const lines = productos.map(p => {
    const galeria = (p.galeria  || []).map(g => `"${g}"`).join(", ");
    const colores = (p.colores  || []).map(c => `"${c.replace(/"/g,'\\"')}"`).join(", ");
    const talles  = (p.talles   || []).map(t => `"${t}"`).join(", ");
    const imagen  = p.imagen   ? `"${p.imagen}"`  : "null";
    const badge   = p.badge    ? `"${p.badge}"`   : "null";
    const precAnt = p.precioAnterior || "null";
    const desc    = (p.descripcion || "").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n");
    const nombre  = (p.nombre  || "").replace(/"/g,'\\"');
    return `  {\n    id: "${p.id}",\n    nombre: "${nombre}",\n    categoria: "${p.categoria}",\n    precio: ${p.precio},\n    precioAnterior: ${precAnt},\n    talles: [${talles}],\n    colores: [${colores}],\n    badge: ${badge},\n    imagen: ${imagen},\n    galeria: [${galeria}],\n    descripcion: "${desc}"\n  }`;
  }).join(",\n");
  return `const PRODUCTOS = [\n${lines}\n]`;
}

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") { res.writeHead(204); res.end(); return; }

  // ── Guardar productos en index.html ───────────────────────────────────────
  if (req.method === "POST" && req.url === "/guardar-productos") {
    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", () => {
      try {
        const { productos } = JSON.parse(body);
        const indexPath = path.join(DIR, "index.html");
        let html = fs.readFileSync(indexPath, "utf8");

        // Reemplazar el bloque const PRODUCTOS = [...];
        const nuevo = buildProductosJS(productos);
        html = html.replace(/const PRODUCTOS = \[[\s\S]*?\];/, nuevo + ";");

        fs.writeFileSync(indexPath, html, "utf8");
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ ok: true }));
        console.log("✅ index.html actualizado —", productos.length, "productos");
      } catch (e) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ ok: false, error: e.message }));
        console.error("❌ Error:", e.message);
      }
    });
    return;
  }

  // ── Archivos estáticos ────────────────────────────────────────────────────
  let filePath = path.join(DIR, req.url === "/" ? "admin.html" : req.url.split("?")[0]);
  if (!fs.existsSync(filePath)) { res.writeHead(404); res.end("No encontrado"); return; }
  const ext  = path.extname(filePath);
  const mime = MIME[ext] || "application/octet-stream";
  res.writeHead(200, { "Content-Type": mime });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(PORT, () => {
  console.log("─────────────────────────────────────────");
  console.log("  GRAN PRIX — Panel de administración");
  console.log("─────────────────────────────────────────");
  console.log(`  Abierto en: http://localhost:${PORT}`);
  console.log("  Cerrá esta ventana para detener.");
  console.log("─────────────────────────────────────────");
});
