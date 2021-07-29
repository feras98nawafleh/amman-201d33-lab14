/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tr = document.getElementsById('tr');
  tr.remove();
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tableBody = document.getElementsById('bodyTable');
  // TODO: Iterate over the items in the cart
  for(let i=0;i<cart.items.length;i++) {
    // TODO: Create a TR
    trow = document.createElement(tr);
    // TODO: Create a TD for the delete link, quantity,  and the item
    tdDelete = document.createElement(td);
    tdQuantity = document.createElement(td);
    tdItem = document.createElement(td);
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tableBody.appendChild(trow);
    trow.appendChild(tdDelete);
    trow.appendChild(tdQuantity);
    trow.appendChild(tdItem);
  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  if(event.target.id === 'delete') {
    cart.splice(e.target.id, 1);
  }
  // TODO: Save the cart back to local storage
  loadCart();
  // TODO: Re-draw the cart table
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
