// product detail constructor function

function productDetail(id, imageSrc, alt, name, price, description) {
    this.id = id;
    this.imageSrc = imageSrc;
    this.alt = alt;
    this.name = name;
    this.price = price;
    this.description = description;
}

// create each product
let Original = new productDetail("originalId", "images/rob-sarmiento-RbqgLewxyXo-unsplash.jpg", "Original cinnamon roll", "Original", "$2.75", "Our classic cinnamon roll. Gooey, buttery, cinnamon-y. The size of a small child’s head.");
let Blackberry = new productDetail("blackberryId", "images/joseph-gonzalez-AQSga3jii8A-unsplash.jpg", "Blackberry cinnamon roll", "Blackberry", "$2.75", "Our cinnamon roll with blackberries, freshly picked from bushes down the road.");
let Walnut = new productDetail("walnutId", "images/1_fallon-michael-H6OBZaVveCA-unsplash.jpg", "Walnut cinnamon roll", "Walnut", "$2.75", "A gooey cinnamon roll with some added crunch!");
let GF = new productDetail("gfId", "images/1_fallon-michael-H6OBZaVveCA-unsplash.jpg", "Gluten free original cinnamon roll", "Original (Gluten Free)", "$2.75", "Exactly the same as our original cinnamon roll, just gluten free!");
let Pumpkin = new productDetail("pumpkinId", "images/cinnamon-roll-4719023_1920.jpg", "Pumpkin cinnamon roll", "Pumpkin", "$2.75", "The perfect fall treat! A warm cinnamon roll flavored with pumpkin and warm spices.");
let Caramel = new productDetail("caramelId", "images/karolina-wv-b22kPrO6Zsk-unsplash.jpg", "Caramel Pecan cinnamon roll", "Caramel Pecan", "$2.75", "Silky caramel + crunchy pecan = our most decadent cinnamon roll.");

localStorage.setItem(Original.id, JSON.stringify(Original));
localStorage.setItem(Blackberry.id, JSON.stringify(Blackberry));
localStorage.setItem(Walnut.id, JSON.stringify(Walnut));
localStorage.setItem(GF.id, JSON.stringify(GF));
localStorage.setItem(Pumpkin.id, JSON.stringify(Pumpkin));
localStorage.setItem(Caramel.id, JSON.stringify(Caramel));

// load correct product detail page

let link = window.location.href;
let linkparts = link.split("?");
let productId = linkparts[1];
let product = JSON.parse(localStorage.getItem(productId));

function loadProduct() {
    document.getElementById("detail-img").src = product.imageSrc;
    document.getElementById("detail-img").alt = product.alt;
    document.getElementById("detail-name").innerHTML = product.name;
    document.getElementById("detail-price").innerHTML = product.price;
    document.getElementById("detail-desc").innerHTML = product.description
}

document.getElementById("product-detail-pg").onload = loadProduct();


// lets on product detail page

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

// initial number of items in cart
let itemsInCart = 0;


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
    if (selectedGlaze === "Sugar-milk") {
        image.src = product.imageSrc;
    } else if (selectedGlaze === "Vanilla-milk") {
        image.src = "images/sergio-arze-hQctjbWa8hc-unsplash.jpg";
    } else if (selectedGlaze === "Double-chocolate") {
        image.src = "images/brina-blum-P9WkD82hLUI-unsplash.jpg";
    } else if (selectedGlaze === "None") {
        image.src = "images/nathan-dumlao-pJllO6r0pKo-unsplash.jpg";
    } 
}

// function to add products to local storage
function addToCartStorage(prodId, orderQuantity, orderGlaze) {
    let orders = []

    if (localStorage.getItem("Orders") !== null) {
        orders = JSON.parse(localStorage.getItem("Orders"));
    }

    orders.push({
        productId: prodId,
        quantity: orderQuantity,
        glaze: orderGlaze
    })

    localStorage.setItem("Orders", JSON.stringify(orders));
}

// function when click on Add to Cart button
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
    } else if (selectedGlaze === "Vanilla-milk") {
        newImg.src = "images/sergio-arze-hQctjbWa8hc-unsplash.jpg";
    } else if (selectedGlaze === "Double-chocolate") {
        newImg.src = "images/brina-blum-P9WkD82hLUI-unsplash.jpg";
    } else if (selectedGlaze === "Sugar-milk") {
        newImg.src = product.imageSrc;
    }
    cartHoverDetails.appendChild(newImg);

    // create new ps and append to cart dropdown
    let newPs = document.createElement("div");
    newPs.className = "cart-hover-ps";
    newPs.innerHTML =   `<p class="cart-hover-name">` + product.name + `</p>` + 
                        `<p class="cart-hover-price">` + totalPrice + `</p>` + 
                        `<p class="p-cart-hover-qty">Quantity: <span class="cart-hover-qty">` + selectedQty + `</span></p>` + 
                        `<p class="p-cart-hover-glaze">Glaze: <span class="cart-hover-glaze">` + selectedGlaze + `</span></p>`
    cartHoverDetails.appendChild(newPs);

    // show cart dropdown
    cartHover.classList.remove("hidden");

    // hide cart dropdown after 3 seconds
    setTimeout(function() {
        cartHover.classList.add("hidden");
    }, 3000)

    // call addToCartStorage function to add item to orders array in local storage
    addToCartStorage(productId, selectedQty, selectedGlaze);
}
