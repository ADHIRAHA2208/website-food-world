let cart = [];
let menuItems = [
  { id: 1, name: "Burger", price: 149, image: "burgger.jfif" },
  { id: 2, name: "Pizza", price: 250, image: "pizza.jfif" },
  { id: 3, name: "Salad", price: 35, image: "salad.jfif" }
];

document.addEventListener("DOMContentLoaded", function() {
  displayMenu();
});

function displayMenu() {
  const menuListUl = document.getElementById("menu-list-ul");
  menuListUl.innerHTML = "";
  menuItems.forEach(function(menuItem) {
    const menuLi = document.createElement("li");
    menuLi.innerHTML = `
      <img src="${menuItem.image}" alt="${menuItem.name}">
      <h3>${menuItem.name}</h3>
      <p>$${menuItem.price}</p>
      <button class="add-to-cart-btn">Add to Cart</button>
    `;
    menuListUl.appendChild(menuLi);
  }); // <--- added closing bracket
}
let orderList = [];

function displayOrderList() {
	const orderListUl = document.getElementById("order-list-ul");
	orderListUl.innerHTML = "";
	orderList.forEach(function(order) {
		const orderLi = document.createElement("li");
		orderLi.textContent = `${order.name} - rs{order.price}`;
		orderListUl.appendChild(orderLi);
	})
}