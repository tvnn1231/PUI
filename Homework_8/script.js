// ******************* MAIN PAGE *******************
// lets
let initialHomeBody = document.getElementById("initial-home-body");
let lightbulb = document.getElementById("bulb-and-pipes");
let initialH1 = document.getElementById("initial-h1");
let initialP = document.getElementById("initial-p");
let backToLanding = document.getElementById("back-to-landing");
let clickOnLightbulb = document.getElementById("click-on-lightbulb");
// let mainPipes = document.getElementById("main-pipes");
let pipeElements = document.getElementsByClassName("pipes");
let backBtn = document.getElementById("back-btn");

// words and rectangles
let sunClick = document.getElementsByClassName("sun-click");
let windClick = document.getElementsByClassName("wind-click");
let waterClick = document.getElementsByClassName("water-click");

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

// titles
let sunTitle = document.getElementById("sun-title");
let windTitle = document.getElementById("wind-title");
let waterTitle = document.getElementById("water-title");

// summaries
let sunSum = document.getElementById("sun-summary");
let windSum = document.getElementById("wind-summary");
let waterSum = document.getElementById("water-summary");


// LIGHTBULB ANIMATION
let lightbulbtl = gsap.timeline({paused: true});

lightbulbtl
.to(lightbulb, 1, {x: "+=0", y: "-=200", scale: 1.2, transformOrigin: "50%, 50%"}, 0)
.to(initialH1, 1, {css: {opacity: 0}}, 0)
.to(initialP, 1, {css: {opacity: 0}}, 0)
.to(clickOnLightbulb, 1, {css: {opacity: 0}}, 0)
.to(pipeElements, 1, {css: {opacity: 1}}, 0.5)

function showPipes() {
    for (i=0;i<pipeElements.length;i+=1){
        pipeElements[i].style.display = 'block';
    }
}

function hidePipes() {
    for (i=0;i<pipeElements.length;i+=1){
        pipeElements[i].style.display = 'none';
    }
}


// lightbulb moves up, pipes come in, other elements disappear
lightbulb.onclick = function(){
    lightbulbtl.play();
    lightbulb.setAttribute("picture", "lightbulb");
    backToLanding.href = "initial_home.html"                  // back button goes back to "Click on lightbulb" page
    setTimeout(function() {                                   // so doesn't interfere with clicking on words
        clickOnLightbulb.style.display = "none";
    }, 1000)               
    setTimeout(showPipes, 1000);

    // pipeElements.style.display = "block";
    // initialHomeBody.style.height = "100vh";             // otherwise shows up below screen
}

// set modal attributes for shapes
let shape;
function setModalAttributes() {
    shape.setAttribute("type", "button");
    shape.setAttribute("data-toggle", "modal");
    shape.setAttribute("data-target", id);
}

// remove modal attributes for shapes so don't show up if click on lightbulb after going back
function removeModalAttributes(shape) {
    shape.removeAttribute("data-target");
}

// display back button
let backbtntl = gsap.timeline({paused: true});
backbtntl
.to(backBtn, 1.5, {css: {opacity: 1}}, 0);

function showBackBtn() {
    backBtn.style.display = "block";
    backbtntl.play();
    if (lightbulb.getAttribute("picture") === "sun") {
        backBtn.classList.add("sun-back-btn");
    } else if (lightbulb.getAttribute("picture") === "wind") {
        backBtn.classList.add("wind-back-btn");
    } else if (lightbulb.getAttribute("picture") === "water") {
        backBtn.classList.add("water-back-btn");                // DEBUG: button was gray not blue, had backbtn instead of backBtn (used inspect to find error "backbtn not defined")
    }
}

// display titles
let titletl = gsap.timeline({paused: true});
titletl
.to(sunTitle, 1.5, {css: {opacity: 1}}, 0)
.to(windTitle, 1.5, {css: {opacity: 1}}, 0)
.to(waterTitle, 1.5, {css: {opacity: 1}}, 0);


function showTitle() {
    if (lightbulb.getAttribute("picture") === "sun") {
        sunTitle.style.display = "block";
        windTitle.style.display = "none";                   // need or else after clicking back, new titles will display on top
        waterTitle.style.display = "none";
        titletl.play();
    } else if (lightbulb.getAttribute("picture") === "wind") {
        windTitle.style.display = "block";
        sunTitle.style.display = "none";
        waterTitle.style.display = "none";
        titletl.play();
    } else if (lightbulb.getAttribute("picture") === "water") {
        waterTitle.style.display = "block";
        sunTitle.style.display = "none";
        windTitle.style.display = "none";
        titletl.play();
    }
}

// display summaries
let sumtl = gsap.timeline({paused: true});
sumtl
.to(sunSum, 1.5, {css: {opacity: 1}}, 0)
.to(windSum, 1.5, {css: {opacity: 1}}, 0)
.to(waterSum, 1.5, {css: {opacity: 1}}, 0);


function showSum() {
    if (lightbulb.getAttribute("picture") === "sun") {
        sunSum.style.display = "block";
        windSum.style.display = "none";                   // need or else after clicking back, new Sums will display on top
        waterSum.style.display = "none";
        sumtl.play();
    } else if (lightbulb.getAttribute("picture") === "wind") {
        windSum.style.display = "block";
        sunSum.style.display = "none";
        waterSum.style.display = "none";
        sumtl.play();
    } else if (lightbulb.getAttribute("picture") === "water") {
        waterSum.style.display = "block";
        sunSum.style.display = "none";
        windSum.style.display = "none";
        sumtl.play();
    }
}

// SUN ANIMATION
let suntl = gsap.timeline({paused: true});

suntl
.to(initialHomeBody, 1, {ease: "circ.easeOut", css: {backgroundColor: "#FFFFFF"}}, 0)
.to(shape1, 1, {ease: "circ.easeOut", css: {x: "+=120.2245", y: "+=248.299", rotation: "+=74.19", transformOrigin: "50%, 50%", fill: "#FFD976"}}, 0)
.to(shape2, 1, {ease: "circ.easeOut", css: {x: "+=112.493", y: "+=230.113", rotation: "+=106.79", transformOrigin: "50%, 50%", fill: "#FFC700"}}, "-=0.9")
.to(shape3, 1, {ease: "circ.easeOut", css: {x: "-=101.2405", y: "+=231.475", rotation: "-=106.13", transformOrigin: "50%, 50%", fill: "#FC9700"}}, "-=0.9")
.to(shape4, 1, {ease: "circ.easeOut", css: {x: "-=319.989", y: "+=175.807", rotation: "-=69.35", transformOrigin: "50%, 50%", fill: "#FFD976"}}, "-=0.9")
.to(shape5, 1, {ease: "circ.easeOut", css: {x: "+=5", y: "+=241.785", rotation: "+=0", transformOrigin: "50%, 50%", fill: "#FFF500"}}, "-=0.9")
.to(shape6, 1, {ease: "circ.easeOut", css: {x: "+=227", y: "+=128.785", rotation: "-=180", transformOrigin: "50%, 50%", fill: "#FC9700"}}, "-=0.9")
.to(shape7, 1, {ease: "circ.easeOut", css: {x: "+=238.155", y: "+=223.7085", rotation: "+=128.12", transformOrigin: "50%, 50%", fill: "#FFC700"}}, "-=0.9")
.to(shape8, 1, {ease: "circ.easeOut", css: {x: "-=220.022", y: "-=88.809", rotation: "+=311.4", transformOrigin: "50%, 50%", fill: "#FFC700"}}, "-=0.9")
.to(shape9, 1, {ease: "circ.easeOut", css: {x: "-=76.795", y: "+=235.004", rotation: "-=124.51", transformOrigin: "50%, 50%", fill: "#FFF500"}}, "-=0.9")
.to(shape10, 1, {ease: "circ.easeOut", css: {x: "+=89.797", y: "-=102.6615", rotation: "+=29.37", transformOrigin: "50%, 50%", fill: "#FFF500"}}, "-=0.9")
.to(shape11, 1, {ease: "circ.easeOut", css: {x: "-=5.0475", y: "-=174.21", rotation: "+=155.94", transformOrigin: "50%, 50%", fill: "#FFD976"}}, "-=0.9")
.to(shape12, 1, {ease: "circ.easeOut", css: {x: "+=29.1265", y: "+=233.403", rotation: "+=357.87", transformOrigin: "50%, 50%", fill: "#FC9700"}}, "-=0.9")
.to(shape13, 1, {ease: "circ.easeOut", css: {x: "+=56.3398", y: "-=257.8546", rotation: "-=68.33", transformOrigin: "50%, 50%", fill: "#FC9700"}}, "-=0.9")
.to(shape14, 1, {ease: "circ.easeOut", css: {x: "-=51.6861", y: "+=83.1134", rotation: "-=68.36", transformOrigin: "50%, 50%", fill: "#FFC700"}}, "-=0.9")
.to(shape15, 1, {ease: "circ.easeOut", css: {x: "+=207.8748", y: "-=53.589", rotation: "+=14.86", transformOrigin: "50%, 50%", fill: "#FFF500"}}, "-=0.9")

// 1y, 2xy, 3xy, 7y, 8xy, 9y, 10xy 

// set viewport so lightbulb is positioned correctly
function viewport600() {
    lightbulb.setAttribute("viewBox", "-560 -50 1440 500")
    lightbulb.style.height = "300px"
    mainPipes.style.bottom = "250px";
}

// set viewport so animation isn't cut off
function viewport900() {
    lightbulb.setAttribute("viewBox", "-560 -83 1440 900");
    lightbulb.style.height = "540px";
}

let sunShapes = document.getElementsByClassName("sun-shape");
let windShapes = document.getElementsByClassName("wind-shape");
let waterShapes = document.getElementsByClassName("water-shape");

function sunHover(sunHoverShape) {
    sunHoverShape.onmouseenter = function() {
        sunHoverShape.classList.remove("sun-glow");
        sunHoverShape.classList.add("sun-hover");
    };
    sunHoverShape.onmouseleave = function() {
        sunHoverShape.classList.add("sun-glow");
        sunHoverShape.classList.remove("sun-hover");
    }
}

// so no shapes glow or animate when go back to lightbulb
function stopHover(hoverShape) {
    hoverShape.onmouseenter = function() {
        hoverShape.classList.remove("sun-glow");
        hoverShape.classList.remove("sun-hover");
        hoverShape.classList.remove("wind-glow");
        hoverShape.classList.remove("wind-hover");        
        hoverShape.classList.remove("water-glow");
        hoverShape.classList.remove("water-hover");
    }
    hoverShape.onmouseleave = function() {
        hoverShape.classList.remove("sun-glow");
        hoverShape.classList.remove("sun-hover");
        hoverShape.classList.remove("wind-glow");
        hoverShape.classList.remove("wind-hover");        
        hoverShape.classList.remove("water-glow");
        hoverShape.classList.remove("water-hover");
    }
} 

for (i = 0; i < sunClick.length; i += 1) {
    sunClick[i].onclick = function() {
        suntl.play();
        lightbulb.setAttribute("picture", "sun");
        backToLanding.style.display = "none";
        if (lightbulb.getAttribute("picture") === "sun") {

            // set modals and show clickable
            for (i = 0; i < sunShapes.length; i += 1) {
                shape = sunShapes[i];
                let str = sunShapes[i].id;
                id = "#sun" + str.slice(5);
                setModalAttributes();
                shape.classList.add("sun-glow");
            }

            sunHover(shape7);
            sunHover(shape8);
            sunHover(shape9);
            sunHover(shape10);
            
            // prevent pipes from showing up
            lightbulb.onclick = hidePipes();

            // show back button and title after 1 second (so doesn't distract from lightbulb animation)
            setTimeout(showBackBtn, 1000);
            setTimeout(showTitle, 1000);
            setTimeout(showSum, 1000);
        }
    }
}

// WIND ANIMATION
let windtl = gsap.timeline({paused: true});

windtl
.to(initialHomeBody, 1, {ease: "circ.easeOut", css: {backgroundColor: "#FFFFFF"}}, 0)
.to(shape1, 1, {ease: "circ.easeOut", css: {x: "-=492.2415", y: "-=10.5335", rotation: "+=74.13", transformOrigin: "50%, 50%", fill: "#0C9612"}}, 0)
.to(shape2, 1, {ease: "circ.easeOut", css: {x: "+=670.4012", y: "+=224.249", rotation: "+=51.5", transformOrigin: "50%, 50%", fill: "#09551C"}}, "-=0.9")
.to(shape3, 1, {ease: "circ.easeOut", css: {x: "-=331.6858", y: "+=276.3445", rotation: "+=134.93", transformOrigin: "50%, 50%", fill: "#0C9612"}}, "-=0.9")
.to(shape4, 1, {ease: "circ.easeOut", css: {x: "-=253.7858", y: "+=36.844", rotation: "-=83.97", transformOrigin: "50%, 50%", fill: "#71B637"}}, "-=0.9")
.to(shape5, 1, {ease: "circ.easeOut", css: {x: "+=196.7602", y: "+=218.959", rotation: "+=40.54", transformOrigin: "50%, 50%", fill: "#E5E5E5"}}, "-=0.9")
.to(shape6, 1, {ease: "circ.easeOut", css: {x: "+=36.8012", y: "-=87.0425", rotation: "+=18.66", transformOrigin: "50%, 50%", fill: "#0C9612"}}, "-=0.9")
.to(shape7, 1, {ease: "circ.easeOut", css: {x: "+=334.7462", y: "+=122.304", rotation: "+=117.66", transformOrigin: "50%, 50%", fill: "#FFFFFF"}}, "-=0.9")
.to(shape8, 1, {ease: "circ.easeOut", css: {x: "+=150.4717", y: "+=385.676", rotation: "+=196.05", transformOrigin: "50%, 50%", fill: "#FFFFFF"}}, "-=0.9")
.to(shape9, 1, {ease: "circ.easeOut", css: {x: "+=158.4067", y: "+=60.004", rotation: "-=73.67", transformOrigin: "50%, 50%", fill: "#FFFFFF"}}, "-=0.9")
.to(shape10, 1, {ease: "circ.easeOut", css: {x: "+=130.3247", y: "-=76.125", rotation: "-=1.58", transformOrigin: "50%, 50%", fill: "#FFFFFF"}}, "-=0.9")
.to(shape11, 1, {ease: "circ.easeOut", css: {x: "+=201.8997", y: "+=319.889", rotation: "-=172.93", transformOrigin: "50%, 50%", fill: "#FFFFFF"}}, "-=0.9")
.to(shape12, 1, {ease: "circ.easeOut", css: {x: "+=174.8332", y: "+=124.1895", rotation: "+=7.22", transformOrigin: "50%, 50%", fill: "#FFFFFF"}}, "-=0.9")
.to(shape13, 1, {ease: "circ.easeOut", css: {x: "+=496.0453", y: "-=259.2026", rotation: "+=17.87", transformOrigin: "50%, 50%", fill: "#71B637"}}, "-=0.9")
.to(shape14, 1, {ease: "circ.easeOut", css: {x: "-=417.581", y: "-=236.8879", rotation: "+=25.57", transformOrigin: "50%, 50%", fill: "#09551C"}}, "-=0.9")
.to(shape15, 1, {ease: "circ.easeOut", css: {x: "-=620.3759", y: "-=113.5079", rotation: "-=24.79", transformOrigin: "50%, 50%", fill: "#71B637"}}, "-=0.9")

// 5xy, 7xy, 8xy, 9xy, 11xy

// Hover on wind shapes
let windGroup = document.getElementsByClassName("wind-group");
function windHover(windHoverShape) {
    windHoverShape.onmouseenter = function() {
        windHoverShape.classList.remove("wind-glow");
        windHoverShape.classList.add("wind-hover");
    };
    windHoverShape.onmouseleave = function() {
        windHoverShape.classList.add("wind-glow");
        windHoverShape.classList.remove("wind-hover");
    }
}

for (i = 0; i < windClick.length; i += 1) {
    windClick[i].onclick = function() {
        windtl.play();
        lightbulb.style.width = "100%";         // so sides don't get cut off
        lightbulb.setAttribute("picture", "wind");
        backToLanding.style.display = "none";

        if (lightbulb.getAttribute("picture") === "wind") {

            // set modals and show clickable
            for (i = 0; i < windShapes.length; i += 1) {
                shape = windShapes[i];
                let str = windShapes[i].id;
                id = "#wind" + str.slice(5);
                setModalAttributes();
                shape.classList.add("wind-glow");
            }

            windHover(shape6);
            windHover(shape3);

            // hover over group
            for (j = 0; j < windGroup.length; j += 1) {
                windGroup[j].onmouseenter = function() {
                    for (k = 0; k < windGroup.length; k += 1) {
                        windGroup[k].classList.remove("wind-glow");
                        windGroup[k].classList.add("wind-hover");
                    }
                }
                windGroup[j].onmouseleave = function() {
                    for (k = 0; k < windGroup.length; k += 1) {
                        windGroup[k].classList.add("wind-glow");
                        windGroup[k].classList.remove("wind-hover");
                    }
                }
            }

            
            // DEBUG: had this outside if statement, needed to be inside for pipes not to show up after clicking (worked for sun bc had set up modals already)
            // prevent pipes from showing up
            lightbulb.onclick = hidePipes();

            // show back button and title after 1 second
            setTimeout(showBackBtn, 1000);
            setTimeout(showTitle, 1000);
            setTimeout(showSum, 1000);
        }
    }
}

// windRectangle.onclick = function() {
//     // viewport900();
//     // expand viewport
//     // lightbulb.setAttribute("viewBox", "0 0 963 957.35");
//     // lightbulb.style.height = "600px"
//     lightbulb.style.width = "100%";         /// so sides don't get cut off

//     windtl.play();
//     // so correct modals show up
//     // shapes clockwise: 8, 10, 7, 9
//     lightbulb.setAttribute("picture", "wind");
//     if (lightbulb.getAttribute("picture") === "wind") {

//         // set modal attributes for shapes 7, 8, 9, and 10
//         shape = shape8;
//         id = "#wind8";
//         setModalAttributes();
//         shape = shape10;
//         id = "#wind10";
//         setModalAttributes();
//         shape = shape7;
//         id = "#wind7";
//         setModalAttributes();
//         shape = shape9;
//         id = "#wind9";
//         setModalAttributes();
        
//         // prevent pipes from showing up
//         // ============== NEEDED THIS FOR PIPES NOT TO SHOW UP ============== //
//         lightbulb.onclick = hidePipes();
//     }
// }


// WATER ANIMATION
let watertl = gsap.timeline({paused: true});

watertl
.to(initialHomeBody, 1, {ease: "circ.easeOut", css: {backgroundColor: "#FFFFFF"}}, 0)
.to(shape1, 1, {ease: "circ.easeOut", css: {x: "+=252.525", y: "+=434.959", rotation: "+=146.46", transformOrigin: "50%, 50%", fill: "#1C5BFF"}}, 0)
.to(shape2, 1, {ease: "circ.easeOut", css: {x: "+=173.251", y: "+=591.9025", rotation: "+=149.4", transformOrigin: "50%, 50%", fill: "#1C5BFF"}}, "-=0.9")
.to(shape3, 1, {ease: "circ.easeOut", css: {x: "-=95.9055", y: "+=591.9025", rotation: "-=148.76", transformOrigin: "50%, 50%", fill: "#1313EF"}}, "-=0.9")
.to(shape4, 1, {ease: "circ.easeOut", css: {x: "-=175.518", y: "+=434.959", rotation: "-=145.83", transformOrigin: "50%, 50%", fill: "#1313EF"}}, "-=0.9")
.to(shape5, 1, {ease: "circ.easeOut", css: {x: "+=40.06", y: "+=354", rotation: "+=0", transformOrigin: "50%, 50%", fill: "#46A6FF"}}, "-=0.9")
.to(shape6, 1, {ease: "circ.easeOut", css: {x: "+=39", y: "+=356.44", rotation: "+=0", transformOrigin: "50%, 50%", fill: "#46A6FF"}}, "-=0.9")
.to(shape7, 1, {ease: "circ.easeOut", css: {x: "+=39", y: "+=353.44", rotation: "+=0", transformOrigin: "50%, 50%", fill: "#0085FF"}}, "-=0.9")
.to(shape8, 1, {ease: "circ.easeOut", css: {x: "+=39", y: "+=353.44", rotation: "+=0", transformOrigin: "50%, 50%", fill: "#46A6FF"}}, "-=0.9")
.to(shape9, 1, {ease: "circ.easeOut", css: {x: "-=14.951", y: "-=15.175", rotation: "-=172.82", transformOrigin: "50%, 50%", fill: "#1C5BFF"}}, "-=0.9")
.to(shape10, 1, {ease: "circ.easeOut", css: {x: "-=291.696", y: "-=15.0055", rotation: "-=186.81", transformOrigin: "50%, 50%", fill: "#1313EF"}}, "-=0.9")
.to(shape11, 1, {ease: "circ.easeOut", css: {x: "+=39", y: "+=353.44", rotation: "+=0", transformOrigin: "50%, 50%", fill: "#0085FF"}}, "-=0.9")
.to(shape12, 1, {ease: "circ.easeOut", css: {x: "+=39", y: "+=353.44", rotation: "+=0", transformOrigin: "50%, 50%", fill: "#0085FF"}}, "-=0.9")
.to(shape13, 1, {ease: "circ.easeOut", css: {x: "+=292", y: "-=54", rotation: "-=90", transformOrigin: "50%, 50%", fill: "#0085FF"}}, "-=0.9")
.to(shape14, 1, {ease: "circ.easeOut", css: {x: "-=288", y: "+=171", rotation: "-=90", transformOrigin: "50%, 50%", fill: "#46A6FF"}}, "-=0.9")
.to(shape15, 1, {ease: "circ.easeOut", css: {x: "+=130", y: "-=363", rotation: "-=90", transformOrigin: "50%, 50%", fill: "#1C5BFF"}}, "-=0.9")

// 1xy, 2xy, 3xy, 4xy, 9x

// Hover on water shapes
let waterBigGroup = document.getElementsByClassName("water-big-group");
let waterSmallGroup = document.getElementsByClassName("water-small-group");
function waterHover(waterHoverShape) {
    waterHoverShape.onmouseenter = function() {
        waterHoverShape.classList.remove("water-glow");
        waterHoverShape.classList.add("water-hover");
    };
    waterHoverShape.onmouseleave = function() {
        waterHoverShape.classList.add("water-glow");
        waterHoverShape.classList.remove("water-hover");
    }
}

for (i = 0; i < waterClick.length; i += 1) {
    waterClick[i].onclick = function() {
        watertl.play();
        lightbulb.setAttribute("picture", "water");
        backToLanding.style.display = "none";
        if (lightbulb.getAttribute("picture") === "water") {

            // set modals and show clickable
            for (i = 0; i < waterShapes.length; i += 1) {
                shape = waterShapes[i];
                let str = waterShapes[i].id;
                id = "#water" + str.slice(5);
                setModalAttributes();
                shape.classList.add("water-glow");
            }

            waterHover(shape13);
            
            // hover over big group
            for (j = 0; j < waterBigGroup.length; j += 1) {
                waterBigGroup[j].onmouseenter = function() {
                    for (k = 0; k < waterBigGroup.length; k += 1) {
                        waterBigGroup[k].classList.remove("water-glow");
                        waterBigGroup[k].classList.add("water-hover");
                    }
                }
                waterBigGroup[j].onmouseleave = function() {
                    for (k = 0; k < waterBigGroup.length; k += 1) {
                        waterBigGroup[k].classList.add("water-glow");
                        waterBigGroup[k].classList.remove("water-hover");
                    }
                }
            }

            // hover over small group
            for (j = 0; j < waterSmallGroup.length; j += 1) {
                waterSmallGroup[j].onmouseenter = function() {
                    for (k = 0; k < waterSmallGroup.length; k += 1) {
                        waterSmallGroup[k].classList.remove("water-glow");
                        waterSmallGroup[k].classList.add("water-hover");
                    }
                }
                waterSmallGroup[j].onmouseleave = function() {
                    for (k = 0; k < waterSmallGroup.length; k += 1) {
                        waterSmallGroup[k].classList.add("water-glow");
                        waterSmallGroup[k].classList.remove("water-hover");
                    }
                }
            }

            // prevent pipes from showing up
            lightbulb.onclick = hidePipes();

            // show back button and title after 1 second
            setTimeout(showBackBtn, 1000);
            setTimeout(showTitle, 1000);
            setTimeout(showSum, 1000);
        }
    }
}

// waterClick.onclick = function() {
//     // viewport900();
//     watertl.play();

//     // so correct modals show up
//     // shapes clockwise: 8, 10, 7, 9
//     lightbulb.setAttribute("picture", "water");
//     if (lightbulb.getAttribute("picture") === "water") {

//         // set modal attributes for shapes 7, 8, 9, and 10
//         shape = shape8;
//         id = "#water8";
//         setModalAttributes();
//         shape = shape10;
//         id = "#water10";
//         setModalAttributes();
//         shape = shape7;
//         id = "#water7";
//         setModalAttributes();
//         shape = shape9;
//         id = "#water9";
//         setModalAttributes();
        
//         // prevent pipes from showing up
//         // ============== NEEDED THIS FOR PIPES NOT TO SHOW UP ============== //
//         lightbulb.onclick = hidePipes();
//     }
// }


// REVERSE ANIMATIONS
let sunGlow = document.getElementsByClassName("sun-glow")
let windGlow = document.getElementsByClassName("sun-glow")
let waterGlow = document.getElementsByClassName("sun-glow")

backBtn.onclick = function() {
    suntl.reverse();
    windtl.reverse();
    watertl.reverse();
    setTimeout(showPipes, 2500)                 // delays pipes re-displaying for 2.5 seconds
    backbtntl.reverse();
    titletl.reverse();
    sumtl.reverse();
    backToLanding.style.display = "inline";
    lightbulb.setAttribute("picture", "lightbulb");
    for (i = 0; i < sunShapes.length; i += 1) {
        sunShapes[i].classList.remove("sun-glow");
        stopHover(sunShapes[i]);
        removeModalAttributes(sunShapes[i]);
    }
    for (i = 0; i < windShapes.length; i += 1) {
        windShapes[i].classList.remove("wind-glow");
        stopHover(windShapes[i]);
        removeModalAttributes(windShapes[i]);
    }
    for (i = 0; i < waterShapes.length; i += 1) {
        waterShapes[i].classList.remove("water-glow");
        stopHover(waterShapes[i]);
        removeModalAttributes(waterShapes[i]);
    }

    // DOESN'T WORK
    // for (i = 0; i < sunGlow.length; i += 1) {
    //     sunGlow[i].classList.remove("sun-glow");
    // }
    // for (i = 0; i < windGlow.length; i += 1) {
    //     windGlow[i].classList.remove("sun-glow");
    // }
    // for (i = 0; i < waterGlow.length; i += 1) {
    //     waterGlow[i].classList.remove("sun-glow");
    // }
    setTimeout(function() {                     
        backBtn.classList.remove("sun-back-btn", "wind-back-btn", "water-back-btn");    // so color stays until button disappears
        // so doesn't interfere with clicking on words
        backBtn.style.display = "none";
        sunTitle.style.display = "none";
        windTitle.style.display = "none";
        waterTitle.style.display = "none";
        sunSum.style.display = "none";
        windSum.style.display = "none";
        waterSum.style.display = "none";
    }, 3000)
    // setTimeout(function() {                 
    //     mainPipes.style.display = "block";
    // }, 3500);
    // setTimeout(viewport600, 3500)
}