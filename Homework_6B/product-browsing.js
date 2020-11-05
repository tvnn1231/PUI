// Number in cart on product browsing
let cartNumberBrowsing = document.getElementById("cart-number-browsing");

// display number of items in cart
displayNumberInCart();

function displayNumberInCart() {
    let orders = [];
    let itemsInCart = 0;
    if (localStorage.getItem("Orders") !== null) {
        orders = JSON.parse(localStorage.getItem("Orders"));
        for (i = 0; i < orders.length; i++) {
            itemsInCart += orders[i].quantity;
        }
    }
    cartNumberBrowsing.innerHTML = itemsInCart;
}