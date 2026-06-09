// ── Wishlist con localStorage ──────────────────────────────────────────────────

const Wishlist = {
  get items() {
    try { return JSON.parse(localStorage.getItem("gp_wishlist") || "[]"); }
    catch { return []; }
  },

  save(items) {
    localStorage.setItem("gp_wishlist", JSON.stringify(items));
    this.updateUI();
  },

  add(product) {
    const items = this.items;
    if (!items.find(i => i.id === product.id)) {
      items.push({ id: product.id, nombre: product.nombre, precio: product.precio, imagen: product.imagen });
      this.save(items);
      this.showMessage(`❤️ Agregado a favoritos`);
    } else {
      this.showMessage(`Ya está en favoritos`);
    }
  },

  remove(id) {
    this.save(this.items.filter(i => i.id !== id));
  },

  toggle(product) {
    if (this.isFavorite(product.id)) this.remove(product.id);
    else this.add(product);
  },

  isFavorite(id) {
    return this.items.some(i => i.id === id);
  },

  open() {
    document.getElementById("wishlist-overlay")?.classList.add("show");
    document.getElementById("wishlist-drawer")?.classList.add("open");
  },

  close() {
    document.getElementById("wishlist-overlay")?.classList.remove("show");
    document.getElementById("wishlist-drawer")?.classList.remove("open");
  },

  showMessage(msg) {
    const t = document.getElementById("toast");
    if (t) {
      t.innerHTML = `<span style="color:var(--gold)">${msg}</span>`;
      t.style.display = "block";
      t.style.borderColor = "rgba(212,168,83,.3)";
      clearTimeout(t._timer);
      t._timer = setTimeout(() => t.style.display="none", 2000);
    }
  },

  updateUI() {
    // Badge
    const badge = document.getElementById("wishlist-badge");
    if (badge) {
      const count = this.items.length;
      badge.textContent = count;
      badge.style.display = count > 0 ? "flex" : "none";
    }

    // Drawer
    const body = document.getElementById("wishlist-body");
    if (!body) return;

    const items = this.items;
    if (items.length === 0) {
      body.innerHTML = `
        <div class="cart-empty">
          <svg width="56" height="56" fill="none" stroke="#2a2a2a" stroke-width="1" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
          <p>Tu lista está vacía</p>
          <button onclick="Wishlist.close()" class="btn-link">Seguir buscando</button>
        </div>`;
      return;
    }

    body.innerHTML = items.map(item => `
      <div class="cart-item">
        <div class="cart-item-img">
          ${item.imagen ? `<img src="${item.imagen}" style="width:100%;height:100%;object-fit:cover" />` : `<div class="placeholder-img small"></div>`}
        </div>
        <div class="cart-item-info">
          <p class="cart-item-name">${item.nombre}</p>
          <p class="cart-item-price">${formatPrice(item.precio)}</p>
        </div>
        <button class="cart-item-remove" onclick="Wishlist.remove('${item.id}')">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>`).join("");
  }
};

// HTML del drawer de wishlist
function injectWishlistDrawer() {
  document.body.insertAdjacentHTML("beforeend", `
    <div id="wishlist-overlay" onclick="Wishlist.close()"></div>
    <div id="wishlist-drawer">
      <div class="cart-header">
        <div>
          <h2>❤️ MIS FAVORITOS</h2>
          <p id="wishlist-count-text"></p>
        </div>
        <button onclick="Wishlist.close()" aria-label="Cerrar">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <div id="wishlist-body" class="cart-body"></div>
    </div>
  `);
  Wishlist.updateUI();
}
