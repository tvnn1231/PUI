// product detail constructor function

function ProductDetail(id, imageSrc, alt, name, price, description) {
    this.id = id;
    this.imageSrc = imageSrc;
    this.alt = alt;
    this.name = name;
    this.price = price;
    this.description = description;
}

// create each product
let Original = new ProductDetail("originalId", "images/rob-sarmiento-RbqgLewxyXo-unsplash.jpg", "Original cinnamon roll", "Original", 2.75, "Our classic cinnamon roll. Gooey, buttery, cinnamon-y. The size of a small child’s head.");
let Blackberry = new ProductDetail("blackberryId", "images/joseph-gonzalez-AQSga3jii8A-unsplash.jpg", "Blackberry cinnamon roll", "Blackberry", 2.75, "Our cinnamon roll with blackberries, freshly picked from bushes down the road.");
let Walnut = new ProductDetail("walnutId", "images/1_fallon-michael-H6OBZaVveCA-unsplash.jpg", "Walnut cinnamon roll", "Walnut", 2.75, "A gooey cinnamon roll with some added crunch!");
let GF = new ProductDetail("gfId", "images/1_fallon-michael-H6OBZaVveCA-unsplash.jpg", "Gluten free original cinnamon roll", "Original (Gluten Free)", 2.75, "Exactly the same as our original cinnamon roll, just gluten free!");
let Pumpkin = new ProductDetail("pumpkinId", "images/cinnamon-roll-4719023_1920.jpg", "Pumpkin cinnamon roll", "Pumpkin", 2.75, "The perfect fall treat! A warm cinnamon roll flavored with pumpkin and warm spices.");
let Caramel = new ProductDetail("caramelId", "images/karolina-wv-b22kPrO6Zsk-unsplash.jpg", "Caramel Pecan cinnamon roll", "Caramel Pecan", 2.75, "Silky caramel + crunchy pecan = our most decadent cinnamon roll.");


let Orders = [{
    product: Original,
    quantity: 3,
    glaze: "Vanilla-milk"
},
{
    product: Original,
    quantity: 6,
    glaze: "None"
},
{
    product: Blackberry,
    quantity: 3,
    glaze: "Sugar-milk"
}]

let cartItems = document.getElementById("cart-items");
let total = 0;

// for loop to go through Orders array
var i;
for (i = 0; i < Orders.length; i++) {
    
    // set price based on glaze
    if (Orders[i].glaze != "None") {
        Orders[i].product.price = 2.75;
    } else {
        Orders[i].product.price = 2.50;
    }

    // set image based on glaze
    if (Orders[i].glaze === "None") {
        Orders[i].product.imageSrc = "images/nathan-dumlao-pJllO6r0pKo-unsplash.jpg";
    } else if (Orders[i].glaze === "Vanilla-milk") {
        Orders[i].product.imageSrc = "images/sergio-arze-hQctjbWa8hc-unsplash.jpg";
    } else if (Orders[i].glaze === "Double-chocolate") {
        Orders[i].product.imageSrc = "images/brina-blum-P9WkD82hLUI-unsplash.jpg";
    }

    // create new image and append to container
    let newCartImg = document.createElement("img");
    newCartImg.className = "cart-img";
    newCartImg.src = Orders[i].product.imageSrc;
    cartItems.appendChild(newCartImg);

    // create new details and append to container
    let newDetails = document.createElement("div");
    newDetails.className = "cart-items-details";
    newDetails.innerHTML = 
        `<p class="cart-details-name">Original</p>
        <p class="cart-details-price">$` + (Orders[i].product.price).toFixed(2) + `</p>
        <p class="cart-details-qty">Quantity: ` + Orders[i].quantity + `</p>
        <p class="cart-details-glaze">Glaze: ` + Orders[i].glaze + `</p>`
    cartItems.appendChild(newDetails);

    // create new X icon and append to container
    let newX = document.createElement("img");
    newX.className = "cart-X";
    newX.src = "images/cart-X.svg";
    cartItems.appendChild(newX);  

    // calculate price
    let productPrice = Orders[i].product.price;
    productPrice.toFixed(2);            // to include 2 decimal places for cents
    parseInt(productPrice);             // to make productPrice a number again
    let productPriceTotal = productPrice * Orders[i].quantity;
    total += productPriceTotal;
}

let cartTotal = document.getElementById("cart-total");
cartTotal.innerHTML = total.toFixed(2);     // to include 2 decimal places




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
