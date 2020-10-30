// Add to Cart button
let addToCartBtn = document.getElementById("add-to-cart");

// Number in cart
let cartNumber = document.getElementById("cart-number");

// Quantity dropdown
let qtyDropdown = document.getElementById("quantity");

// Glaze dropdown
let glazeDropdown = document.getElementById("glaze")

// Price
let price = document.getElementById("detail-price")

// Image
let image = document.getElementById("detail-img");


// Cart dropdown
let cartHover = document.getElementById("cart-hover");
let cartHoverDetails = document.getElementById("cart-hover-details");


// update price and photo when choose glaze
glazeDropdown.onchange = function() {
    // selected glaze
    let selectedGlaze = glazeDropdown.value;
    
    // if glaze is not "None," change price
    if (selectedGlaze != "None") {
        price.innerHTML = "$2.75";
    } else {
        price.innerHTML = "$2.50";
    }

    // change image based on glaze
    if (selectedGlaze === "None") {
        image.src = "images/nathan-dumlao-pJllO6r0pKo-unsplash.jpg";
    } else if (selectedGlaze === "Sugar-milk") {
        image.src = "images/rob-sarmiento-RbqgLewxyXo-unsplash.jpg";
    } else if (selectedGlaze === "Vanilla-milk") {
        image.src = "images/sergio-arze-hQctjbWa8hc-unsplash.jpg";
    } else if (selectedGlaze === "Double-chocolate") {
        image.src = "images/brina-blum-P9WkD82hLUI-unsplash.jpg";
    }
}

let itemsInCart = 0;

addToCartBtn.onclick = function() {

    // selected quantity
    let selectedQty = parseInt(qtyDropdown.value, 10);
    // selected glaze
    let selectedGlaze = glazeDropdown.value;

    // UPDATE NUMBER IN CART

    itemsInCart = itemsInCart + selectedQty;
    cartNumber.innerHTML = itemsInCart;

    // UPDATE CART DROPDOWN DETAILS

    // if glaze is not "None," change price
    let totalPrice = "";
    if (selectedGlaze != "None") {
        totalPrice = "$" + (2.75*selectedQty).toFixed(2);
    } else {
        totalPrice = "$" + (2.50*selectedQty).toFixed(2);
    }

    // create new image and append to cart dropdown
    let newImg = document.createElement("img");
    newImg.className = "cart-hover-img";
    if (selectedGlaze === "None") {
        newImg.src = "images/nathan-dumlao-pJllO6r0pKo-unsplash.jpg";
    } else if (selectedGlaze === "Sugar-milk") {
        newImg.src = "images/rob-sarmiento-RbqgLewxyXo-unsplash.jpg";
    } else if (selectedGlaze === "Vanilla-milk") {
        newImg.src = "images/sergio-arze-hQctjbWa8hc-unsplash.jpg";
    } else if (selectedGlaze === "Double-chocolate") {
        newImg.src = "images/brina-blum-P9WkD82hLUI-unsplash.jpg";
    }
    cartHoverDetails.appendChild(newImg);

    // create new ps and append to cart dropdown
    let newPs = document.createElement("div");
    newPs.className = "cart-hover-ps";
    newPs.innerHTML =   "<p class='cart-hover-name'>Original</p>" + 
                        "<p class='cart-hover-price'>" + totalPrice + "</p>" + 
                        "<p class='p-cart-hover-qty'>Quantity: <span class='cart-hover-qty'>" + selectedQty + "</span></p>" + 
                        "<p class='p-cart-hover-glaze'>Glaze: <span class='cart-hover-glaze'>" + selectedGlaze + "</span></p>"
    cartHoverDetails.appendChild(newPs);

    // show cart dropdown
    cartHover.classList.remove("hidden");

    // hide cart dropdown after 3 seconds
    setTimeout(function() {
        cartHover.classList.add("hidden");
    }, 3000)
}
