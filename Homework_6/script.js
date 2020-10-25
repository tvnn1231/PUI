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
        price.innerHTML = "$2.75"
        cartHoverPrice = "$2.75"
        pcartHoverPrice.innerHTML = "$" + (2.75*selectedQty).toFixed(2);
    } else {
        price.innerHTML = "$2.50"
        cartHoverPrice = "$2.50"
        pcartHoverPrice.innerHTML = "$" + (2.50*selectedQty).toFixed(2);
    }
}

