// Add to Cart button
let addToCart = document.getElementById("add-to-cart");

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

// Get name of product
let cartHoverName = addToCart.getAttribute("name");
// Get price of product
let cartHoverPrice = addToCart.getAttribute("price");
// p tags in cart dropdown
let pcartHoverName = document.getElementById("cart-hover-name");
let pcartHoverPrice = document.getElementById("cart-hover-price");
let pcartHoverQty = document.getElementById("cart-hover-qty");
let pcartHoverGlaze = document.getElementById("cart-hover-glaze");
// image in cart dropdown
let cartImage = document.getElementById("cart-hover-img");

glazeDropdown.onchange = function() {
    // selected glaze
    let selectedGlaze = glazeDropdown.value;

    // if glaze is not "None," change price
    if (selectedGlaze != "None") {
        price.innerHTML = "$2.75";
        cartHoverPrice = "$2.75";
    } else {
        price.innerHTML = "$2.50";
        cartHoverPrice = "$2.50";
    }

    // change image based on glaze
    if (selectedGlaze === "None") {
        image.src = "images/nathan-dumlao-pJllO6r0pKo-unsplash.jpg";
        cartImage.src = "images/nathan-dumlao-pJllO6r0pKo-unsplash.jpg";
    } else if (selectedGlaze === "Sugar-milk") {
        image.src = "images/rob-sarmiento-RbqgLewxyXo-unsplash.jpg";
        cartImage.src = "images/rob-sarmiento-RbqgLewxyXo-unsplash.jpg";
    } else if (selectedGlaze === "Vanilla-milk") {
        image.src = "images/sergio-arze-hQctjbWa8hc-unsplash.jpg";
        cartImage.src = "images/sergio-arze-hQctjbWa8hc-unsplash.jpg";
    } else if (selectedGlaze === "Double-chocolate") {
        image.src = "images/brina-blum-P9WkD82hLUI-unsplash.jpg";
        cartImage.src = "images/brina-blum-P9WkD82hLUI-unsplash.jpg";
    }
}

addToCart.onclick = function() {
    // selected quantity
    let selectedQty = qtyDropdown.value;
    // selected glaze
    let selectedGlaze = glazeDropdown.value;

    // update number in cart based on selected quantity
    cartNumber.innerHTML = selectedQty;

    // show cart dropdown
    cartHover.classList.remove("hidden");

    // hide cart dropdown after 3 seconds
    setTimeout(function() {
        cartHover.classList.add("hidden");
    }, 3000)

    // update info in cart dropdown
    pcartHoverName.innerHTML = cartHoverName;
    pcartHoverQty.innerHTML = selectedQty;
    pcartHoverGlaze.innerHTML = selectedGlaze;

    // if glaze is not "None," change price
    if (selectedGlaze != "None") {
        pcartHoverPrice.innerHTML = "$" + (2.75*selectedQty).toFixed(2);
    } else {
        pcartHoverPrice.innerHTML = "$" + (2.50*selectedQty).toFixed(2);
    }

    // change image based on glaze
    if (selectedGlaze === "None") {
        image.src = "images/nathan-dumlao-pJllO6r0pKo-unsplash.jpg";
        cartImage.src = "images/nathan-dumlao-pJllO6r0pKo-unsplash.jpg";
    } else if (selectedGlaze === "Sugar-milk") {
        image.src = "images/rob-sarmiento-RbqgLewxyXo-unsplash.jpg";
        cartImage.src = "images/rob-sarmiento-RbqgLewxyXo-unsplash.jpg";
    } else if (selectedGlaze === "Vanilla-milk") {
        image.src = "images/sergio-arze-hQctjbWa8hc-unsplash.jpg";
        cartImage.src = "images/sergio-arze-hQctjbWa8hc-unsplash.jpg";
    } else if (selectedGlaze === "Double-chocolate") {
        image.src = "images/brina-blum-P9WkD82hLUI-unsplash.jpg";
        cartImage.src = "images/brina-blum-P9WkD82hLUI-unsplash.jpg";
    }

}

