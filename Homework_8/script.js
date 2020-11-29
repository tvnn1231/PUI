// lets
let initialHomeBody = document.getElementById("initial-home-body");
let lightbulb = document.getElementById("initial-home-bulb");
let initialH1 = document.getElementById("initial-h1");
let initialP = document.getElementById("initial-p");
let clickOnLightbulb = document.getElementById("click-on-lightbulb");
let mainPipes = document.getElementById("main-pipes");
let backBtn = document.getElementById("back-btn");

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


// LIGHTBULB ANIMATION
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
    initialHomeBody.style.height = "100vh";             // otherwise shows up below screen
}

// SUN ANIMATION
let suntl = gsap.timeline({paused: true});

suntl
.to(initialHomeBody, 2, {css: {backgroundColor: "#FFFFFF"}}, 0)
.to(shape1, 2, {css: {x: "+=120.2245", y: "+=248.299", rotation: "+=74.19", transformOrigin: "50%, 50%", fill: "#FFD976"}}, 0)
.to(shape2, 2, {css: {x: "+=112.493", y: "+=230.113", rotation: "+=106.79", transformOrigin: "50%, 50%", fill: "#FFC700"}}, "-=1.9")
.to(shape3, 2, {css: {x: "-=101.2405", y: "+=231.475", rotation: "-=106.13", transformOrigin: "50%, 50%", fill: "#FC9700"}}, "-=1.9")
.to(shape4, 2, {css: {x: "-=319.989", y: "+=175.807", rotation: "-=69.35", transformOrigin: "50%, 50%", fill: "#FFD976"}}, "-=1.9")
.to(shape5, 2, {css: {x: "+=5", y: "+=241.785", rotation: "+=0", transformOrigin: "50%, 50%", fill: "#FFF500"}}, "-=1.9")
.to(shape6, 2, {css: {x: "+=227", y: "+=128.785", rotation: "-=180", transformOrigin: "50%, 50%", fill: "#FC9700"}}, "-=1.9")
.to(shape7, 2, {css: {x: "+=238.155", y: "+=223.7085", rotation: "+=128.12", transformOrigin: "50%, 50%", fill: "#FFC700"}}, "-=1.9")
.to(shape8, 2, {css: {x: "-=220.022", y: "-=88.809", rotation: "+=311.4", transformOrigin: "50%, 50%", fill: "#FFC700"}}, "-=1.9")
.to(shape9, 2, {css: {x: "-=76.795", y: "+=235.004", rotation: "-=124.51", transformOrigin: "50%, 50%", fill: "#FFF500"}}, "-=1.9")
.to(shape10, 2, {css: {x: "+=89.797", y: "-=102.6615", rotation: "+=29.37", transformOrigin: "50%, 50%", fill: "#FFF500"}}, "-=1.9")
.to(shape11, 2, {css: {x: "-=5.0475", y: "-=174.21", rotation: "+=155.94", transformOrigin: "50%, 50%", fill: "#FFD976"}}, "-=1.9")
.to(shape12, 2, {css: {x: "+=29.1265", y: "+=233.403", rotation: "+=357.87", transformOrigin: "50%, 50%", fill: "#FC9700"}}, "-=1.9")
.to(shape13, 2, {css: {x: "+=56.3398", y: "-=257.8546", rotation: "-=68.33", transformOrigin: "50%, 50%", fill: "#FC9700"}}, "-=1.9")
.to(shape14, 2, {css: {x: "-=51.6861", y: "+=83.1134", rotation: "-=68.36", transformOrigin: "50%, 50%", fill: "#FFC700"}}, "-=1.9")
.to(shape15, 2, {css: {x: "+=207.8748", y: "-=53.589", rotation: "+=14.86", transformOrigin: "50%, 50%", fill: "#FFF500"}}, "-=1.9")

// 1y, 2xy, 3xy, 7y, 8xy, 9y, 10xy 

// set viewport so lightbulb is positioned correctly
function viewport600() {
    lightbulb.setAttribute("viewBox", "-560 -100 1440 600");
    lightbulb.style.height = "600px";
    mainPipes.style.bottom = "450px";
}

// set viewport so animation isn't cut off
function viewport900() {
    lightbulb.setAttribute("viewBox", "-560 -100 1440 900");
    lightbulb.style.height = "900px";
}

// set modal attributes for shapes
let shape;
function setModalAttributes() {
    shape.setAttribute("type", "button");
    shape.setAttribute("data-toggle", "modal");
    shape.setAttribute("data-target", id);
}

sunWord.onclick = function() {
    viewport900();
    suntl.play();
    mainPipes.style.display = "none";

    // so correct modals show up
    // shapes clockwise: 8, 10, 7, 9
    lightbulb.setAttribute("picture", "sun");
    if (lightbulb.getAttribute("picture") === "sun") {

        // set modal attributes for shapes 7, 8, 9, and 10
        shape = shape8;
        id = "#sun8";
        setModalAttributes();
        shape = shape10;
        id = "#sun10";
        setModalAttributes();
        shape = shape7;
        id = "#sun7";
        setModalAttributes();
        shape = shape9;
        id = "#sun9";
        setModalAttributes();
        
        // prevent pipes from showing up
        lightbulb.onclick = function() {
            mainPipes.style.display = "none";
        }
    }
}

// WIND ANIMATION
let windtl = gsap.timeline({paused: true});

windtl
.to(initialHomeBody, 2, {css: {backgroundColor: "#FFFFFF"}}, 0)
.to(shape1, 2, {css: {x: "-=492.2415", y: "-=10.5335", rotation: "+=74.13", transformOrigin: "50%, 50%", fill: "#0C9612"}}, 0)
.to(shape2, 2, {css: {x: "+=670.4012", y: "+=224.249", rotation: "+=51.5", transformOrigin: "50%, 50%", fill: "#09551C"}}, "-=1.9")
.to(shape3, 2, {css: {x: "-=331.6858", y: "+=276.3445", rotation: "+=134.93", transformOrigin: "50%, 50%", fill: "#0C9612"}}, "-=1.9")
.to(shape4, 2, {css: {x: "-=253.7858", y: "+=36.844", rotation: "-=83.97", transformOrigin: "50%, 50%", fill: "#71B637"}}, "-=1.9")
.to(shape5, 2, {css: {x: "+=196.7602", y: "+=218.959", rotation: "+=40.54", transformOrigin: "50%, 50%", fill: "#E5E5E5"}}, "-=1.9")
.to(shape6, 2, {css: {x: "+=36.8012", y: "-=111.0425", rotation: "+=18.66", transformOrigin: "50%, 50%", fill: "#0C9612"}}, "-=1.9")
.to(shape7, 2, {css: {x: "+=334.7462", y: "+=122.304", rotation: "+=117.66", transformOrigin: "50%, 50%", fill: "#FFFFFF"}}, "-=1.9")
.to(shape8, 2, {css: {x: "+=150.4717", y: "+=385.676", rotation: "+=196.05", transformOrigin: "50%, 50%", fill: "#FFFFFF"}}, "-=1.9")
.to(shape9, 2, {css: {x: "+=158.4067", y: "+=60.004", rotation: "-=73.67", transformOrigin: "50%, 50%", fill: "#FFFFFF"}}, "-=1.9")
.to(shape10, 2, {css: {x: "+=130.3247", y: "-=76.125", rotation: "-=1.58", transformOrigin: "50%, 50%", fill: "#FFFFFF"}}, "-=1.9")
.to(shape11, 2, {css: {x: "+=201.8997", y: "+=319.889", rotation: "-=172.93", transformOrigin: "50%, 50%", fill: "#FFFFFF"}}, "-=1.9")
.to(shape12, 2, {css: {x: "+=174.8332", y: "+=124.1895", rotation: "+=7.22", transformOrigin: "50%, 50%", fill: "#FFFFFF"}}, "-=1.9")
.to(shape13, 2, {css: {x: "+=496.0453", y: "-=259.2026", rotation: "+=17.87", transformOrigin: "50%, 50%", fill: "#71B637"}}, "-=1.9")
.to(shape14, 2, {css: {x: "-=417.581", y: "-=236.8879", rotation: "+=25.57", transformOrigin: "50%, 50%", fill: "#09551C"}}, "-=1.9")
.to(shape15, 2, {css: {x: "-=620.3759", y: "-=113.5079", rotation: "-=24.79", transformOrigin: "50%, 50%", fill: "#71B637"}}, "-=1.9")

// 5xy, 7xy, 8xy, 9xy, 11xy

windWord.onclick = function() {
    viewport900();
    windtl.play();
    mainPipes.style.display = "none";
}


// WATER ANIMATION
let watertl = gsap.timeline({paused: true});

watertl
.to(initialHomeBody, 2, {css: {backgroundColor: "#FFFFFF"}}, 0)
.to(shape1, 2, {css: {x: "+=252.525", y: "+=434.959", rotation: "+=146.46", transformOrigin: "50%, 50%", fill: "#1C5BFF"}}, 0)
.to(shape2, 2, {css: {x: "+=173.251", y: "+=591.9025", rotation: "+=149.4", transformOrigin: "50%, 50%", fill: "#1C5BFF"}}, "-=1.9")
.to(shape3, 2, {css: {x: "-=95.9055", y: "+=591.9025", rotation: "-=148.76", transformOrigin: "50%, 50%", fill: "#1313EF"}}, "-=1.9")
.to(shape4, 2, {css: {x: "-=175.518", y: "+=434.959", rotation: "-=145.83", transformOrigin: "50%, 50%", fill: "#1313EF"}}, "-=1.9")
.to(shape5, 2, {css: {x: "+=40.06", y: "+=354", rotation: "+=0", transformOrigin: "50%, 50%", fill: "#46A6FF"}}, "-=1.9")
.to(shape6, 2, {css: {x: "+=39", y: "+=356.44", rotation: "+=0", transformOrigin: "50%, 50%", fill: "#46A6FF"}}, "-=1.9")
.to(shape7, 2, {css: {x: "+=39", y: "+=353.44", rotation: "+=0", transformOrigin: "50%, 50%", fill: "#0085FF"}}, "-=1.9")
.to(shape8, 2, {css: {x: "+=39", y: "+=353.44", rotation: "+=0", transformOrigin: "50%, 50%", fill: "#46A6FF"}}, "-=1.9")
.to(shape9, 2, {css: {x: "-=14.951", y: "-=15.175", rotation: "-=172.82", transformOrigin: "50%, 50%", fill: "#1C5BFF"}}, "-=1.9")
.to(shape10, 2, {css: {x: "-=291.696", y: "-=15.0055", rotation: "-=186.81", transformOrigin: "50%, 50%", fill: "#1313EF"}}, "-=1.9")
.to(shape11, 2, {css: {x: "+=39", y: "+=353.44", rotation: "+=0", transformOrigin: "50%, 50%", fill: "#0085FF"}}, "-=1.9")
.to(shape12, 2, {css: {x: "+=39", y: "+=353.44", rotation: "+=0", transformOrigin: "50%, 50%", fill: "#0085FF"}}, "-=1.9")
.to(shape13, 2, {css: {x: "+=292", y: "-=54", rotation: "-=90", transformOrigin: "50%, 50%", fill: "#0085FF"}}, "-=1.9")
.to(shape14, 2, {css: {x: "-=288", y: "+=171", rotation: "-=90", transformOrigin: "50%, 50%", fill: "#46A6FF"}}, "-=1.9")
.to(shape15, 2, {css: {x: "+=130", y: "-=371", rotation: "-=90", transformOrigin: "50%, 50%", fill: "#1C5BFF"}}, "-=1.9")

// 1xy, 2xy, 3xy, 4xy, 9x

waterWord.onclick = function() {
    viewport900();
    watertl.play();
    mainPipes.style.display = "none";
}


// REVERSE ANIMATIONS

backBtn.onclick = function() {
    suntl.reverse();
    windtl.reverse();
    watertl.reverse();
    setTimeout(function() {                 // delays pipes re-displaying for 3.5 seconds
        mainPipes.style.display = "block";
    }, 3500);
    setTimeout(viewport600, 3000)
    // viewport600();
}