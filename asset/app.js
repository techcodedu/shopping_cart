/**For upgrade
 * 1. Remove item
 * 2. update quantity
 * 3. product image
 * 4. search and filter products
 * 5. sort products
 */

// data store

// empty cart array
let cart = [];

// add to cart function
function addToCart(productName, productPrice) {
  // create a product object for name and price
  let product = {
    name: productName,
    price: productPrice,
  };

  //push to cart  array
  cart.push(product);

  console.log(cart);

  // updateCartdisplay
  updateCartDisplay();
  //   displayitems
  displayCartItems();
}

// update cart

function updateCartDisplay() {
  let totalPrice = 0;

  for (let item of cart) {
    totalPrice += item.price;
  }

   //total items in the cart
   document.getElementById("itemCount").textContent = cart.length;
  document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);
}

function displayCartItems() {
  let cartlist = document.getElementById("cart");

  //   clear cart list

  cartlist.innerHTML = "";

  //  iterate over the the items being added
  for (let item of cart) {
    let listitem = document.createElement("li");

    listitem.className = "list-group-item";

    listitem.textContent = `${item.name} - ₱ ${item.price} `;

    cartlist.appendChild(listitem);
  }
}
