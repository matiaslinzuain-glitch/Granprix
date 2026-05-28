// ── Carrito con localStorage ──────────────────────────────────────────────────

const Cart = {
  WA_NUMBER: "5491136196053",

  get items() {
    try { return JSON.parse(localStorage.getItem("gp_cart") || "[]"); }
    catch { return []; }
  },

  save(items) {
    localStorage.setItem("gp_cart", JSON.stringify(items));
    this.updateUI();
  },

  add(product, talle) {
    const items = this.items;
    const idx = items.findIndex(i => i.id === product.id && i.talle === talle);
    if (idx >= 0) {
      items[idx].cantidad++;
    } else {
      items.push({ id: product.id, nombre: product.nombre, precio: product.precio, talle, cantidad: 1 });
    }
    this.save(items);
    this.open();
  },

  remove(id, talle) {
    this.save(this.items.filter(i => !(i.id === id && i.talle === talle)));
  },

  get total() {
    return this.items.reduce((s, i) => s + i.precio * i.cantidad, 0);
  },

  get count() {
    return this.items.reduce((s, i) => s + i.cantidad, 0);
  },

  open() {
    document.getElementById("cart-drawer")?.classList.add("open");
    document.getElementById("cart-overlay")?.classList.add("show");
  },

  close() {
    document.getElementById("cart-drawer")?.classList.remove("open");
    document.getElementById("cart-overlay")?.classList.remove("show");
  },

  updateUI() {
    // Badge contador
    const badge = document.getElementById("cart-badge");
    const count = this.count;
    if (badge) {
      badge.textContent = count;
      badge.style.display = count > 0 ? "flex" : "none";
    }

    // Renderizar items del drawer
    const body = document.getElementById("cart-body");
    const footer = document.getElementById("cart-footer");
    if (!body) return;

    const items = this.items;

    if (items.length === 0) {
      body.innerHTML = `
        <div class="cart-empty">
          <svg width="56" height="56" fill="none" stroke="#2a2a2a" stroke-width="1" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
          </svg>
          <p>Tu carrito está vacío</p>
          <button onclick="Cart.close()" class="btn-link">Seguir comprando</button>
        </div>`;
      if (footer) footer.style.display = "none";
      return;
    }

    body.innerHTML = items.map(item => `
      <div class="cart-item">
        <div class="cart-item-img">
          <div class="placeholder-img small">
            <svg width="28" height="28" fill="none" stroke="#333" stroke-width="1" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 6v14h12V6M3 6l3-3 3 3M18 6l3-3-3-3"/>
            </svg>
          </div>
        </div>
        <div class="cart-item-info">
          <p class="cart-item-name">${item.nombre}</p>
          <p class="cart-item-meta">Talle: ${item.talle} · Cant: ${item.cantidad}</p>
          <p class="cart-item-price">${formatPrice(item.precio * item.cantidad)}</p>
        </div>
        <button class="cart-item-remove" onclick="Cart.remove('${item.id}','${item.talle}')">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>`).join("");

    if (footer) {
      footer.style.display = "block";
      const msg = encodeURIComponent(
        "Hola! Quiero realizar el siguiente pedido:\n" +
        items.map(i => `- ${i.nombre} (Talle ${i.talle}) x${i.cantidad} — ${formatPrice(i.precio * i.cantidad)}`).join("\n") +
        `\n\nTotal: ${formatPrice(this.total)}`
      );
      footer.innerHTML = `
        <div class="cart-total">
          <span>Total</span>
          <span>${formatPrice(this.total)}</span>
        </div>
        <a href="https://api.whatsapp.com/send?phone=${this.WA_NUMBER}&text=${msg}" target="_blank" class="btn-gold btn-block">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Ir a pagar por WhatsApp
        </a>`;
    }
  }
};

// HTML compartido del drawer (se inyecta en cada página)
function injectCartDrawer() {
  document.body.insertAdjacentHTML("beforeend", `
    <div id="cart-overlay" onclick="Cart.close()"></div>
    <div id="cart-drawer">
      <div class="cart-header">
        <div>
          <h2>MI CARRITO</h2>
          <p id="cart-count-text"></p>
        </div>
        <button onclick="Cart.close()" aria-label="Cerrar">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div id="cart-body" class="cart-body"></div>
      <div id="cart-footer" class="cart-footer" style="display:none"></div>
    </div>

    <a href="https://api.whatsapp.com/send?phone=${Cart.WA_NUMBER}&text=Hola!%20Quisiera%20consultar%20sobre%20sus%20productos." target="_blank" class="whatsapp-fab" aria-label="WhatsApp">
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  `);
  Cart.updateUI();
}
