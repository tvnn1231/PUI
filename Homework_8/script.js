// lets
let initialHomeBody = document.getElementById("initial-home-body");
let lightbulb = document.getElementById("initial-home-bulb");
let initialH1 = document.getElementById("initial-h1");
let initialP = document.getElementById("initial-p");
let clickOnLightbulb = document.getElementById("click-on-lightbulb");
let mainPipes = document.getElementById("main-pipes");
let sunWord = document.getElementById("sun-word");
let windWord = document.getElementById("wind-word");
let waterWord = document.getElementById("water-word");


// lightbulb animation
let lightbulbtl = gsap.timeline({paused: true});

lightbulbtl
.to(lightbulb, 1, {x: "+=0", y: "-=357", transformOrigin: "50%, 50%"}, 0)
.to(initialH1, 1, {css: {opacity: 0}}, 0)
.to(initialP, 1, {css: {opacity: 0}}, 0)
.to(clickOnLightbulb, 1, {css: {opacity: 0}}, 0)
.to(mainPipes, 1, {css: {opacity: 1}}, 1)       // timestamp of 1 so it shows up after lightbulb has moved and everything else disappeared


// lightbulb moves up, pipes come in, other elements disappear
lightbulb.onclick = function(){
    lightbulbtl.play();
    mainPipes.style.display = "block";
    initialHomeBody.style.height = "100vh";
}