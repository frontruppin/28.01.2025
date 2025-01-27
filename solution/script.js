// Sample data
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 999.99,
    stock: 5,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Headphones",
    price: 99.99,
    stock: 15,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Coffee Maker",
    price: 79.99,
    stock: 8,
    category: "Appliances",
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 89.99,
    stock: 12,
    category: "Sports",
  },
  {
    id: 5,
    name: "Backpack",
    price: 49.99,
    stock: 20,
    category: "Accessories",
  },
  {
    id: 6,
    name: "Smart Watch",
    price: 199.99,
    stock: 7,
    category: "Electronics",
  },
];

// State management
let cart = [];
let filteredProducts = [...products];

// Product rendering
function renderProducts(productsArray) {
  const productsGrid = document.querySelector(".products-grid");
  productsGrid.innerHTML = "";

  productsArray.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product-card";
    productElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <p>Category: ${product.category}</p>
                <p>Stock: ${product.stock}</p>
                ${
                  product.stock < 5
                    ? '<p class="stock-warning">Low Stock!</p>'
                    : ""
                }
                <button class="add-to-cart" data-id="${
                  product.id
                }">Add to Cart</button>
            `;
    productsGrid.appendChild(productElement);
  });

  // Add event listeners to new buttons
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (e) => {
      const productId = parseInt(e.target.dataset.id);
      addToCart(productId);
    });
  });
}

// Search functionality
function searchProducts(query) {
  query = query.toLowerCase().trim();
  filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
  );
  renderProducts(filteredProducts);
}

// Cart management
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const cartItem = cart.find((item) => item.id === productId);

  if (cartItem) {
    if (cartItem.quantity < product.stock) {
      cartItem.quantity++;
    } else {
      alert("No more stock available!");
      return;
    }
  } else {
    if (product.stock > 0) {
      cart.push({ ...product, quantity: 1 });
    } else {
      alert("Product out of stock!");
      return;
    }
  }

  saveCartToLocalStorage(cart);
  updateCartDisplay();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCartToLocalStorage(cart);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItemsContainer = document.querySelector(".cart-items");
  cartItemsContainer.innerHTML = "";

  cart.forEach((item) => {
    const itemElement = document.createElement("div");
    itemElement.className = "cart-item";
    itemElement.innerHTML = `
                <span>${item.name} (${item.quantity})</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
                <button class="remove-from-cart" data-id="${
                  item.id
                }">Remove</button>
            `;
    cartItemsContainer.appendChild(itemElement);
  });

  // Add event listeners to remove buttons
  document.querySelectorAll(".remove-from-cart").forEach((button) => {
    button.addEventListener("click", (e) => {
      const productId = parseInt(e.target.dataset.id);
      removeFromCart(productId);
    });
  });

  // Update total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.getElementById("cart-total").textContent = total.toFixed(2);
}

// localStorage management
function saveCartToLocalStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartDisplay();
  }
}

// Event listeners
document.querySelector(".search-bar").addEventListener("input", (e) => {
  searchProducts(e.target.value);
});

document.querySelector(".cart-toggle").addEventListener("click", () => {
  document.querySelector(".cart-section").classList.toggle("open");
});

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadCartFromLocalStorage();
  renderProducts(products);
});
