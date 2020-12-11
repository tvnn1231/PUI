// initial home
let initialHomeBody = document.getElementById("initial-home-body");
let lightbulb = document.getElementById("bulb-and-pipes");
let initialH1 = document.getElementById("initial-h1");
let initialP = document.getElementById("initial-p");
let backToLanding = document.getElementById("back-to-landing");
let clickOnLightbulb = document.getElementById("click-on-lightbulb");
let pipeElements = document.getElementsByClassName("pipes");
let backBtn = document.getElementById("back-btn");

// words and rectangles to click
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

// shapes that are clickable on each energy source page
let sunShapes = document.getElementsByClassName("sun-shape");
let windShapes = document.getElementsByClassName("wind-shape");
let waterShapes = document.getElementsByClassName("water-shape");

// titles of energy sources
let sunTitle = document.getElementById("sun-title");
let windTitle = document.getElementById("wind-title");
let waterTitle = document.getElementById("water-title");

// summaries of energy sources
let sunSum = document.getElementById("sun-summary");
let windSum = document.getElementById("wind-summary");
let waterSum = document.getElementById("water-summary");


// LIGHTBULB ANIMATION
let lightbulbtl = gsap.timeline({paused: true});

lightbulbtl
.to(lightbulb, 1, {x: "+=0", y: "-=230", scale: 1.2, transformOrigin: "50%, 50%"}, 0)
.to(initialH1, 1, {css: {opacity: 0}}, 0)
.to(initialP, 1, {css: {opacity: 0}}, 0)
.to(clickOnLightbulb, 1, {css: {opacity: 0}}, 0)
.to(pipeElements, 1, {css: {opacity: 1}}, 0.5)

// functions to show and hide pipes
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
}

// FUNCTIONS

// set modal attributes for shapes
let shape;
function setModalAttributes() {
    shape.setAttribute("type", "button");
    shape.setAttribute("data-toggle", "modal");
    shape.setAttribute("data-target", id);
}

// remove modal attribute for shapes so they don't show up if click on lightbulb after going back to home
function removeModalAttributes(shape) {
    shape.removeAttribute("data-target");
}

// display back button on each energy source page
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
        backBtn.classList.add("water-back-btn");
    }
}

// display titles of each energy source
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

// display summaries of each energy source

// animate opacity of summaries
let sumtl = gsap.timeline({paused: true});
sumtl
.to(sunSum, 1.5, {css: {opacity: 1}}, 0)
.to(windSum, 1.5, {css: {opacity: 1}}, 0)
.to(waterSum, 1.5, {css: {opacity: 1}}, 0);

// function to show summary depending on which source was chosen
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

// function so that no shapes glow or animate when go back to lightbulb on home page
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

// SUN ANIMATION

// timeline to animate shapes into position
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

// function to add and remove classes while hovering over sun shapes
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

// sun animations when click on SUN on home page
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

            // set hover classes for clickable sun shapes
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

// timeline to animate shapes into position
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

// function to add and remove classes when hovering over wind shapes
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

// let for group of wind shapes that hover and click together
let windGroup = document.getElementsByClassName("wind-group");

// wind animations when click on WIND on home page
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

            // set hover classes for clickable wind shapes
            windHover(shape6);
            windHover(shape3);

            // set hover for clickable wind group
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

            // prevent pipes from showing up
            lightbulb.onclick = hidePipes();

            // show back button and title after 1 second
            setTimeout(showBackBtn, 1000);
            setTimeout(showTitle, 1000);
            setTimeout(showSum, 1000);
        }
    }
}

// WATER ANIMATION

// timeline to animate shapes into position
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

// function to add and remove classes when hovering over water shapes
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

// lets for groups of water shapes that hover and click together
let waterBigGroup = document.getElementsByClassName("water-big-group");
let waterSmallGroup = document.getElementsByClassName("water-small-group");

// water animations when click on WATER on home page
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
            
            // set hover classes for big clickable water group
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

            // set hover classes for small clickable water group
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

// REVERSE ANIMATIONS TO GO BACK TO HOME

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

    setTimeout(function() {                     
        backBtn.classList.remove("sun-back-btn", "wind-back-btn", "water-back-btn");    // delay so color stays until button disappears
        
        // so nothing interferes with clicking on words
        backBtn.style.display = "none";
        sunTitle.style.display = "none";
        windTitle.style.display = "none";
        waterTitle.style.display = "none";
        sunSum.style.display = "none";
        windSum.style.display = "none";
        waterSum.style.display = "none";
    }, 3000)
}