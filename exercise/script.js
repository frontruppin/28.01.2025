// Sample data
const products = [
  { id: 1, name: "Laptop", price: 999.99, stock: 5, category: "Electronics" },
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
  { id: 4, name: "Running Shoes", price: 89.99, stock: 12, category: "Sports" },
  { id: 5, name: "Backpack", price: 49.99, stock: 20, category: "Accessories" },
  {
    id: 6,
    name: "Smart Watch",
    price: 199.99,
    stock: 7,
    category: "Electronics",
  },
];

// TODO: Students should implement the following functions

// 1. Product rendering function
function renderProducts(productsArray) {
  // Should render products in the products-grid
}

// 2. Search function
function searchProducts(query) {
  // Should filter products based on search query
}

// 3. Cart management functions
function addToCart(productId) {
  // Should add product to cart and save to localStorage
}

function removeFromCart(productId) {
  // Should remove product from cart and update localStorage
}

function updateCartDisplay() {
  // Should update the cart display with current items
}

// 4. localStorage functions
function saveCartToLocalStorage(cart) {
  // Should save cart data to localStorage
}

function loadCartFromLocalStorage() {
  // Should load cart data from localStorage
}

// 5. Event listeners
document.querySelector(".search-bar").addEventListener("input", (e) => {
  // Implement search functionality
});

document.querySelector(".cart-toggle").addEventListener("click", () => {
  // Implement cart toggle
});

// Initial load
// Add code here to:
// 1. Load cart from localStorage
// 2. Render products
// 3. Set up initial state
