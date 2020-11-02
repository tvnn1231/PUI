// put items in local storage into orders array
let orders = [];

if (localStorage.getItem("Orders") !== null) {
    orders = JSON.parse(localStorage.getItem("Orders"));
}

populateCart();


// function to populate cart
function populateCart() {
    let cartItems = document.getElementById("cart-items");
    let total = 0;

    // for loop to go through orders array and populate cart page
    var i;
    for (i = 0; i < orders.length; i++) {
        let prod = JSON.parse(localStorage.getItem(orders[i].productId));
        
        // set price based on glaze
        if (orders[i].glaze != "None") {
            prod.price = 2.75;
        } else {
            prod.price = 2.50;
        }

        // set image based on glaze
        if (orders[i].glaze === "None") {
            prod.imageSrc = "images/nathan-dumlao-pJllO6r0pKo-unsplash.jpg";
        } else if (orders[i].glaze === "Vanilla-milk") {
            prod.imageSrc = "images/sergio-arze-hQctjbWa8hc-unsplash.jpg";
        } else if (orders[i].glaze === "Double-chocolate") {
            prod.imageSrc = "images/brina-blum-P9WkD82hLUI-unsplash.jpg";
        }

        // create new image and append to container
        let newCartImg = document.createElement("img");
        newCartImg.className = "cart-img";
        newCartImg.src = prod.imageSrc;
        cartItems.appendChild(newCartImg);

        // create new details and append to container
        let newDetails = document.createElement("div");
        newDetails.className = "cart-items-details";
        newDetails.innerHTML = 
            `<p class="cart-details-name">` + prod.name + `</p>
            <p class="cart-details-price">$` + (prod.price).toFixed(2) + `</p>
            <p class="cart-details-qty">Quantity: ` + orders[i].quantity + `</p>
            <p class="cart-details-glaze">Glaze: ` + orders[i].glaze + `</p>`
        cartItems.appendChild(newDetails);

        // create new X icon and append to container
        let newX = document.createElement("img");
        newX.className = "cart-X";
        newX.src = "images/cart-X.svg";
        cartItems.appendChild(newX); 
        // set onclick attribute to allow removal
        newX.setAttribute("onclick", "removeFromCart(" + i + ")");

        // calculate price
        let productPrice = prod.price;
        productPrice.toFixed(2);            // to include 2 decimal places for cents
        parseInt(productPrice);             // to make productPrice a number again
        let productPriceTotal = productPrice * orders[i].quantity;
        total += productPriceTotal;
    }

    // show total price
    let cartTotal = document.getElementById("cart-total");
    cartTotal.innerHTML = total.toFixed(2);     // to include 2 decimal places
}

// function to remove item from cart
function removeFromCart(itemIndex) {
    orders.splice(itemIndex, 1);                                // removes item from array
    localStorage.setItem("Orders", JSON.stringify(orders));     // sets new local storage without the item

    // clear HTML elements on screen
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    // re-populate cart with new local storage items (without the deleted product)
    populateCart();
}


// dropdowns: choose option whose value matches Orders[i].quantity and Orders[i].glaze and set selected attribute for that option
    //    `<div class="cart-dropdowns">
    //     <div class="cart-details-dropdown">
    //         <label for="cart-quantity">Quantity:</label>
    //         <select name="cart-quantity" class="cart-quantity">
    //             <option value="1">1</option>
    //             <option value="3">3</option>
    //             <option value="6">6</option>
    //             <option value="12">12</option>
    //         </select>
    //     </div> <!-- .cart-details-dropdown -->
    //     <div class="cart-details-dropdown">
    //         <label for="cart-glaze">Glaze:</label>
    //         <select name="cart-glaze" class="cart-glaze">
    //             <option value="Sugar-milk">Sugar-milk</option>
    //             <option value="Vanilla-milk">Vanilla-milk</option>
    //             <option value="Double Chocolate">Double Chocolate</option>
    //             <option value="None">None</option>
    //         </select>
    //     </div> <!-- .cart-details-dropdown -->
    //     </div> <!-- .cart-dropdowns -->`


    // let orders = [{ 
//     // change product to productId - just need id, not whole object
//     productId: "originalId",
//     quantity: 3,
//     glaze: "Vanilla-milk"
// },
// {
//     productId: "originalId",
//     quantity: 6,
//     glaze: "None"
// },
// {
//     productId: "blackberryId",
//     quantity: 3,
//     glaze: "Sugar-milk"
// },
// {
//     productId: "walnutId",
//     quantity: 6,
//     glaze: "Double-chocolate"
// }]

