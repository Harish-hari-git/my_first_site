const products = [
  { id: 1, name: "Men's Casual Shirt", category: "Men", price: 999 },
  { id: 2, name: "Men's Jeans", category: "Men", price: 1299 },
  { id: 3, name: "Men's Jacket", category: "Men", price: 1999 },
  { id: 4, name: "Women's Kurti", category: "Women", price: 899 },
  { id: 5, name: "Women's Summer Dress", category: "Women", price: 1499 },
  { id: 6, name: "Women's Top", category: "Women", price: 799 },
  { id: 7, name: "Kids Hoodie", category: "Kids", price: 799 },
  { id: 8, name: "Kids T-Shirt", category: "Kids", price: 499 },
  { id: 9, name: "Kids Shorts", category: "Kids", price: 599 }
];

let cartCount = 0;
let currentCategory = "All";
let currentSearch = "";

/* Page load ஆனவுடன் products show ஆகணும் */
renderProducts(products);

/* Products render function */
function renderProducts(productList) {
  const productContainer = document.getElementById("product-container");

  if (productList.length === 0) {
    productContainer.innerHTML = `<p class="no-products">No products found.</p>`;
    return;
  }

  let cards = "";

  productList.forEach(function(product) {
    cards += `
      <div class="product-card">
        <h3>${product.name}</h3>
        <p class="product-category">Category: ${product.category}</p>
        <p class="product-price">₹${product.price}</p>
        <button onclick="addToCart('${product.name}')">Add to Cart</button>
      </div>
    `;
  });

  productContainer.innerHTML = cards;
}

/* Add to cart */
function addToCart(productName) {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
  alert(productName + " added to cart!");
}

/* Search */
function searchProducts() {
  currentSearch = document.getElementById("searchInput").value.toLowerCase();
  applyFilters();
}

/* Filter by category */
function filterProducts(category) {
  currentCategory = category;
  applyFilters();
}

/* Search + category filter சேர்த்து apply பண்ணும் function */
function applyFilters() {
  let filteredProducts = products.filter(function(product) {
    const matchesCategory =
      currentCategory === "All" || product.category === currentCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(currentSearch);

    return matchesCategory && matchesSearch;
  });

  renderProducts(filteredProducts);
}

/* Hero button click -> products section க்கு scroll */
function scrollToProducts() {
  document.getElementById("products").scrollIntoView({
    behavior: "smooth"
  });
}