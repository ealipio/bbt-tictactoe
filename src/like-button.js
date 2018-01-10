"use strict";

// define a custom shape

class Heart extends mojs.CustomShape {
    getShape() {
        /**
         * I get my own path using https://designer.gravit.io/
         * and font-awesome 4 icons. first I copied the icon from  fontawesome.io/cheatsheet
         * pasted in gravity and exported to svg and copy the path inside that svg file
         */
        return '<path d=" M 50 100 C 50.893 100 51.786 99.609 52.455 98.828 L 87.221 59.766 C 87.723 59.18 100 46.094 100 30.469 C 100 11.393 90.011 0 73.326 0 C 63.56 0 54.408 8.984 50 14.062 C 45.592 8.984 36.44 0 26.674 0 C 9.989 0 0 11.393 0 30.469 C 0 46.094 12.277 59.18 12.723 59.635 L 47.545 98.828 C 48.214 99.609 49.107 100 50 100 Z " />'
    }
}

mojs.addShape("heart", Heart);

const elem = document.querySelector(".like-button");

// define motion elements and tiemline

var heart = new mojs.Shape({
    parent: elem,
    shape: "heart",
    fill: "#c4341d",
    scale: { 0: 1.5 },
    easing: "elastic.out",
    duration: 1500,
    delay: 300,
    radius: 10
});

const burst = new mojs.Burst({
    parent: elem,
    radius: {4: 40},
    angle:45,
    count: 14,
    timeline: {delay:400},
    children: {
        radius: 2.5,
        fill: "#fd7932",
        scale: {1:0, easing: "quad.in"},
        pathScale: [.8, null],
        degreeShift: [13, null],
        duration: [500, 700],
        easing: "quint.out"
    }
});

const timeline = new mojs.Timeline();

// Add motion elements to timeline
timeline.add(heart, burst);

// Add eventListener for click
elem.addEventListener("click", function(e) {
    this.classList.add("hidden");
    timeline.replay();
});

/**
 * All this stuffs I learned in this tutorial
 * https://webdesign.tutsplus.com/tutorials/introduction-to-mojs-motion-for-the-web--cms-28389
 * 
 */