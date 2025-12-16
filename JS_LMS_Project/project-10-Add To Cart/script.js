const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");
const addToCartBtns = document.querySelectorAll(".add-to-cart");

let cart = [];

// ADD TO CART
addToCartBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const { id, name, price, image } = btn.dataset;

    const existing = cart.find(item => item.id === id);

    if (existing) {
      existing.qty++;
    } else {
      cart.push({
        id,
        name,
        price: parseFloat(price),
        image,
        qty: 1
      });
    }
    renderCart();
  });
});

// cart box
function renderCart() {
  cartItemsEl.innerHTML = "";

  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "flex items-center justify-between gap-4";

    div.innerHTML = `
      <img src="${item.image}"
        class="w-14 h-14 rounded-xl bg-white shadow p-1 object-contain"/>

      <div class="flex-1">
        <p class="font-semibold">${item.name}</p>
        <p class="text-sm text-gray-500">$${item.price.toFixed(2)}</p>
      </div>

      <div class="flex items-center gap-2">
        <!-- QTY -->
        <div class="flex items-center gap-2 bg-gray-100 rounded-full px-2 py-1">
          <button onclick="changeQty('${item.id}', -1)"
            class="w-6 h-6 rounded-full bg-white shadow hover:bg-gray-200">−</button>

          <span class="font-bold w-5 text-center">${item.qty}</span>

          <button onclick="changeQty('${item.id}', 1)"
            class="w-6 h-6 rounded-full bg-white shadow hover:bg-gray-200">+</button>
        </div>

        <!-- REMOVE -->
        <button onclick="removeItem('${item.id}')"
          class="text-red-500 hover:text-red-700 text-xl font-bold">
          ✕
        </button>
      </div>
    `;

    cartItemsEl.appendChild(div);
  });

  updateTotal();
}

// item ++/--
function changeQty(id, change) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.qty += change;

  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
  }

  renderCart();
}

// delete btn
function removeItem(id) {
  cart = cart.filter(item => item.id !== id);
  renderCart();
}

// total bill update
function updateTotal() {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  cartTotalEl.textContent = "$" + total.toFixed(2);
}
