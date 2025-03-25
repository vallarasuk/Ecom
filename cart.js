function displayCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItemsDiv = document.getElementById("cart-items");

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  let totalPrice = 0;
  cartItemsDiv.innerHTML = `
      <div class="list-group">
        ${cart
          .map((item) => {
            totalPrice += item.price * item.quantity;
            return `
            <div class="list-group-item d-flex justify-content-between">
              <span>${item.name} (x${item.quantity})</span>
              <span>$${item.price * item.quantity}</span>
            </div>
          `;
          })
          .join("")}
      </div>
      <hr>
      <div class="d-flex justify-content-between">
        <h4>Total: $${totalPrice}</h4>
      </div>
    `;
}

// Proceed to Checkout
function proceedToCheckout() {
  window.location.href = "checkout.html";
}

// Display Cart when the page loads
window.onload = function () {
  displayCart();
};
