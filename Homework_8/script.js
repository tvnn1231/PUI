// get initial_home body
let initialHomeBody = document.getElementById("initial-home-body");
let initialH1 = document.getElementById("initial-h1");
let initialP = document.getElementById("initial-p");
let clickOnLightbulb = document.getElementById("click-on-lightbulb");
let mainPipes = document.getElementById("main-pipes");

// get lightbulb
let lightbulb = document.getElementById("initial-home-bulb");

lightbulb.onclick = function() {
    console.log('hello')
}

// lightbulb animation
let introtl = gsap.timeline({paused: true});

introtl
.to(lightbulb, 1, {x: "+=0", y: "-=357", transformOrigin: "50%, 50%"}, 0)
.to(initialH1, 1, {css: {opacity: 0}}, 0)
.to(initialP, 1, {css: {opacity: 0}}, 0)
.to(clickOnLightbulb, 1, {css: {opacity: 0}}, 0)
.to(mainPipes, 1, {css: {opacity: 1}}, 0)

lightbulb.onclick = function(){

    introtl.play();
    mainPipes.style.display = "block";
    initialHomeBody.style.height = "100vh";
}