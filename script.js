let cart = [];

function addToCart(productName) {
  cart.push(productName);
  alert(productName + " added to cart!");
  console.log("Cart items:", cart);
}
