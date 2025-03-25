function displayCheckoutSummary() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalPrice = 0;

  const checkoutSummary = document.getElementById("checkout-summary");

  if (cart.length === 0) {
    checkoutSummary.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  checkoutSummary.innerHTML = `
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

// Place Order (Simulate Cash on Delivery)
function placeOrder() {
  localStorage.removeItem("cart"); // Clear cart after placing the order
  alert("Order placed successfully! Cash on Delivery.");
  window.location.href = "index.html"; // Redirect to homepage
}

// Display checkout summary on page load
window.onload = function () {
  displayCheckoutSummary();
};
