// lets on product browsing page
let cartNumberBrowsing = document.getElementById("cart-number-browsing");
let browsingCartContainer = document.getElementById("browsing-cart-container");
let cartHover = document.getElementById("cart-hover");
let cartHoverDetails = document.getElementById("cart-hover-details");

// display number of items in cart
displayNumberInCart();

// populate cart dropdown
populateCartDropdown();

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

// function to populate cart dropdown
function populateCartDropdown() {
    let orders = [];

    if (localStorage.getItem("Orders") !== null) {
        orders = JSON.parse(localStorage.getItem("Orders"));
        for (i = 0; i < orders.length; i++) {
            let prod = JSON.parse(localStorage.getItem(orders[i].productId));
            let totalPrice = "";
            if (orders[i].glaze != "None") {
                totalPrice = "$" + (2.75*orders[i].quantity).toFixed(2);
            } else {
                totalPrice = "$" + (2.50*orders[i].quantity).toFixed(2);
            }
        
            // create new image and append to cart dropdown
            let newImg = document.createElement("img");
            newImg.className = "cart-hover-img";
            if (orders[i].glaze === "None") {
                newImg.src = prod.imageSrcNone;
            } else if (orders[i].glaze === "Vanilla-milk") {
                newImg.src = prod.imageSrcVanilla;
            } else if (orders[i].glaze === "Double-chocolate") {
                newImg.src = prod.imageSrcChocolate;
            } else if (orders[i].glaze === "Sugar-milk") {
                newImg.src = prod.imageSrcSugar;
            }
            cartHoverDetails.appendChild(newImg);
        
            // create new ps and append to cart dropdown
            let newPs = document.createElement("div");
            newPs.className = "cart-hover-ps";
            newPs.innerHTML =   `<p class="cart-hover-name">` + prod.name + `</p>` + 
                                `<p class="cart-hover-price">` + totalPrice + `</p>` + 
                                `<p class="p-cart-hover-qty">Quantity: <span class="cart-hover-qty">` + orders[i].quantity + `</span></p>` + 
                                `<p class="p-cart-hover-glaze">Glaze: <span class="cart-hover-glaze">` + orders[i].glaze + `</span></p>`
            cartHoverDetails.appendChild(newPs);                
        }
    }
}

// show dropdown when hover over cart icon
browsingCartContainer.onmouseenter = function() {
    cartHover.classList.remove("hidden");
}

browsingCartContainer.onmouseleave = function() {
    cartHover.classList.add("hidden");
}