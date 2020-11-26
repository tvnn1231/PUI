gsap.registerPlugin()

// lets
let initialHomeBody = document.getElementById("initial-home-body");
let lightbulb = document.getElementById("initial-home-bulb");
let initialH1 = document.getElementById("initial-h1");
let initialP = document.getElementById("initial-p");
let clickOnLightbulb = document.getElementById("click-on-lightbulb");
let mainPipes = document.getElementById("main-pipes");

// words
let sunWord = document.getElementById("sun-word");
let windWord = document.getElementById("wind-word");
let waterWord = document.getElementById("water-word");

// shapes
let shape1 = document.getElementById("shape1");
let shape2 = document.getElementById("shape2");
let shape3 = document.getElementById("shape3");
let shape4 = document.getElementById("shape4");
let shape5 = document.getElementById("shape5");
let shape6 = document.getElementById("shape6");
let shape7 = document.getElementById("shape7");
let shape8 = document.getElementById("shape8");
let shape9 = document.getElementById("shape9");
let shape10 = document.getElementById("shape10");
let shape11 = document.getElementById("shape11");
let shape12 = document.getElementById("shape12");
let shape13 = document.getElementById("shape13");
let shape14 = document.getElementById("shape14");
let shape15 = document.getElementById("shape15");





// lightbulb animation
let lightbulbtl = gsap.timeline({paused: true});

lightbulbtl
.to(lightbulb, 1, {x: "+=0", y: "-=357", transformOrigin: "50%, 50%"}, 0)
.to(initialH1, 1, {css: {opacity: 0}}, 0)
.to(initialP, 1, {css: {opacity: 0}}, 0)
.to(clickOnLightbulb, 1, {css: {opacity: 0}}, 0)
.to(mainPipes, 1, {css: {opacity: 1}}, 0.5)


// lightbulb moves up, pipes come in, other elements disappear
lightbulb.onclick = function(){
    lightbulbtl.play();
    mainPipes.style.display = "block";
    initialHomeBody.style.height = "100vh";             // otherwise show up below screen
}

// sun animation
let suntl = gsap.timeline({paused: true});

suntl
.to(shape1, 2, {css: {x: "+=120.2245", y: "+=248.299", rotation: "+=74.19", transformOrigin: "50%, 50%", fill: "#FFD976"}}, 0)
.to(shape2, 2, {css: {x: "+=105.493", y: "+=234.113", rotation: "+=106.79", transformOrigin: "50%, 50%", fill: "#FFC700"}}, 0)
.to(shape3, 2, {css: {x: "-=94.2405", y: "+=235.475", rotation: "-=106.13", transformOrigin: "50%, 50%", fill: "#FC9700"}}, 0)
.to(shape4, 2, {css: {x: "-=319.989", y: "+=175.807", rotation: "-=69.35", transformOrigin: "50%, 50%", fill: "#FFD976"}}, 0)
.to(shape5, 2, {css: {x: "+=5", y: "+=241.785", rotation: "+=0", transformOrigin: "50%, 50%", fill: "#FFF500"}}, 0)
.to(shape6, 2, {css: {x: "+=227", y: "+=128.785", rotation: "-=180", transformOrigin: "50%, 50%", fill: "#FC9700"}}, 0)
.to(shape7, 2, {css: {x: "+=238.155", y: "+=223.7085", rotation: "+=128.12", transformOrigin: "50%, 50%", fill: "#FFF500"}}, 0)
.to(shape8, 2, {css: {x: "-=220.022", y: "-=88.809", rotation: "+=311.4", transformOrigin: "50%, 50%", fill: "#FFC700"}}, 0)
.to(shape9, 2, {css: {x: "-=76.795", y: "+=235.004", rotation: "-=124.51", transformOrigin: "50%, 50%", fill: "#FFF500"}}, 0)
.to(shape10, 2, {css: {x: "+=89.797", y: "-=102.6615", rotation: "+=29.37", transformOrigin: "50%, 50%", fill: "#FFD976"}}, 0)
.to(shape11, 2, {css: {x: "-=5.0475", y: "-=174.21", rotation: "+=155.94", transformOrigin: "50%, 50%", fill: "#FFD976"}}, 0)
.to(shape12, 2, {css: {x: "+=29.1265", y: "+=233.403", rotation: "+=357.87", transformOrigin: "50%, 50%", fill: "#FC9700"}}, 0)
.to(shape13, 2, {css: {x: "+=56.3398", y: "-=257.8546", rotation: "-=68.33", transformOrigin: "50%, 50%", fill: "#FC9700"}}, 0)
.to(shape14, 2, {css: {x: "-=51.6861", y: "+=83.1134", rotation: "-=68.36", transformOrigin: "50%, 50%", fill: "#FFF500"}}, 0)
.to(shape15, 2, {css: {x: "+=207.8748", y: "-=53.589", rotation: "+=14.86", transformOrigin: "50%, 50%", fill: "#FFC700"}}, 0)

// 1y, 7y, 8xy, 9y, 10xy 

sunWord.onclick = function(){
    suntl.play();
    mainPipes.style.display = "none"
}