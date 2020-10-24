let addToCart = document.getElementById("add-to-cart");
let cartNumber = document.getElementById("cart-number");
let qtyDropdown = document.getElementById("quantity");
let glazeDropdown = document.getElementById("glaze")

let cartHover = document.getElementById("cart-hover");

let cartHoverName = addToCart.getAttribute("name");
let cartHoverPrice = addToCart.getAttribute("price");
let pcartHoverName = document.getElementById("cart-hover-name");
let pcartHoverPrice = document.getElementById("cart-hover-price");
let pcartHoverQty = document.getElementById("cart-hover-qty");
let pcartHoverGlaze = document.getElementById("cart-hover-glaze");

addToCart.onclick = function() {
    let selectedQty = qtyDropdown.value;
    let selectedGlaze = glazeDropdown.value;
    cartNumber.innerHTML = selectedQty;
    cartHover.classList.remove("hidden");
    setTimeout(function() {
        cartHover.classList.add("hidden");
        // cartHover.style.opacity = "0";
    }, 3000)
    pcartHoverName.innerHTML = cartHoverName;
    pcartHoverPrice.innerHTML = cartHoverPrice;
    pcartHoverQty.innerHTML = selectedQty;
    pcartHoverGlaze.innerHTML = selectedGlaze;
}
