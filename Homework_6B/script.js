// product detail constructor function

function productDetail(id, imageSrcSugar, imageSrcVanilla, imageSrcChocolate, imageSrcNone, alt, name, price, description) {
    this.id = id;
    this.imageSrcSugar = imageSrcSugar;
    this.imageSrcVanilla = imageSrcVanilla;
    this.imageSrcChocolate = imageSrcChocolate;
    this.imageSrcNone = imageSrcNone;
    this.alt = alt;
    this.name = name;
    this.price = price;
    this.description = description;
}

// create each product
let Original = new productDetail(
    "originalId", 
    "images/rob-sarmiento-RbqgLewxyXo-unsplash.jpg", 
    "images/sergio-arze-hQctjbWa8hc-unsplash.jpg",
    "images/brina-blum-P9WkD82hLUI-unsplash.jpg",
    "images/nathan-dumlao-pJllO6r0pKo-unsplash.jpg",
    "Original cinnamon roll", 
    "Original", 
    2.75, 
    "Our classic cinnamon roll. Gooey, buttery, cinnamon-y. The size of a small child’s head."
);
let Blackberry = new productDetail(
    "blackberryId", 
    "images/joseph-gonzalez-AQSga3jii8A-unsplash.jpg", 
    "images/sergio-arze-hQctjbWa8hc-unsplash.jpg",
    "images/brina-blum-P9WkD82hLUI-unsplash.jpg",
    "images/nathan-dumlao-pJllO6r0pKo-unsplash.jpg",
    "Blackberry cinnamon roll", 
    "Blackberry", 
    2.75, 
    "Our cinnamon roll with blackberries, freshly picked from bushes down the road."
);
let Walnut = new productDetail(
    "walnutId", 
    "images/1_fallon-michael-H6OBZaVveCA-unsplash.jpg", 
    "images/sergio-arze-hQctjbWa8hc-unsplash.jpg",
    "images/brina-blum-P9WkD82hLUI-unsplash.jpg",
    "images/nathan-dumlao-pJllO6r0pKo-unsplash.jpg",
    "Walnut cinnamon roll", 
    "Walnut", 
    2.75, 
    "A gooey cinnamon roll with some added crunch!"
    );
let GF = new productDetail(
    "gfId", 
    "images/1_fallon-michael-H6OBZaVveCA-unsplash.jpg", 
    "images/sergio-arze-hQctjbWa8hc-unsplash.jpg",
    "images/brina-blum-P9WkD82hLUI-unsplash.jpg",
    "images/nathan-dumlao-pJllO6r0pKo-unsplash.jpg",
    "Gluten free original cinnamon roll", 
    "Original (Gluten Free)", 
    2.75, 
    "Exactly the same as our original cinnamon roll, just gluten free!");
let Pumpkin = new productDetail(
    "pumpkinId", 
    "images/cinnamon-roll-4719023_1920.jpg", 
    "images/sergio-arze-hQctjbWa8hc-unsplash.jpg",
    "images/brina-blum-P9WkD82hLUI-unsplash.jpg",
    "images/nathan-dumlao-pJllO6r0pKo-unsplash.jpg",
    "Pumpkin cinnamon roll", 
    "Pumpkin", 
    2.75, 
    "The perfect fall treat! A warm cinnamon roll flavored with pumpkin and warm spices."
);
let Caramel = new productDetail(
    "caramelId", 
    "images/karolina-wv-b22kPrO6Zsk-unsplash.jpg", 
    "images/sergio-arze-hQctjbWa8hc-unsplash.jpg",
    "images/brina-blum-P9WkD82hLUI-unsplash.jpg",
    "images/nathan-dumlao-pJllO6r0pKo-unsplash.jpg",
    "Caramel Pecan cinnamon roll", 
    "Caramel Pecan", 
    2.75, 
    "Silky caramel + crunchy pecan = our most decadent cinnamon roll."
);

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
    document.getElementById("detail-img").src = product.imageSrcSugar;
    document.getElementById("detail-img").alt = product.alt;
    document.getElementById("detail-name").innerHTML = product.name;
    document.getElementById("detail-price").innerHTML = "$" + (product.price).toFixed(2);
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
    cartNumber.innerHTML = itemsInCart;
}


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
        image.src = product.imageSrcSugar;
    } else if (selectedGlaze === "Vanilla-milk") {
        image.src = product.imageSrcVanilla;
    } else if (selectedGlaze === "Double-chocolate") {
        image.src = product.imageSrcChocolate;
    } else if (selectedGlaze === "None") {
        image.src = product.imageSrcNone;
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

    // show cart dropdown
    cartHover.classList.remove("hidden");

    // hide cart dropdown after 3 seconds - leave at end of function outside of for loop
    setTimeout(function() {
        cartHover.classList.add("hidden");
    }, 3000)
}

// function when click on Add to Cart button
addToCartBtn.onclick = function() { 

    // selected quantity
    let selectedQty = parseInt(qtyDropdown.value, 10);
    // selected glaze
    let selectedGlaze = glazeDropdown.value;

    // call addToCartStorage function to add item to orders array in local storage
    addToCartStorage(productId, selectedQty, selectedGlaze);

    // UPDATE NUMBER IN CART
    displayNumberInCart();

    // CLEAR OUT CART DROPDOWN
    cartHoverDetails.innerHTML = "";

    // UPDATE CART DROPDOWN DETAILS
    populateCartDropdown();

}
