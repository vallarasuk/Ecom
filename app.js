const products = [
  { id: 1, name: "Product 1", price: 20 },
  { id: 2, name: "Product 2", price: 30 },
  { id: 3, name: "Product 3", price: 40 },
];

const productList = document.getElementById("product-list");

// Display Products
function displayProducts() {
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("col-md-4");

    productCard.innerHTML = `
        <div class="card">
          <img src="https://via.placeholder.com/150" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">$${product.price}</p>
            <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
          </div>
        </div>
      `;

    productList.appendChild(productCard);
  });
}

// Add to Cart function
function addToCart(productId) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const productIndex = cart.findIndex((item) => item.id === productId);
  if (productIndex === -1) {
    const product = products.find((p) => p.id === productId);
    cart.push({ ...product, quantity: 1 });
  } else {
    cart[productIndex].quantity += 1; // Increment quantity
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart!");
}

// Load products when the page loads
window.onload = function () {
  displayProducts();
};
