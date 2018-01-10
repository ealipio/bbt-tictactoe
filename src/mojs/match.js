"use strict";

// define a custom shape

class Match extends mojs.CustomShape {
    getShape() {
        /**
         * I get my own path using https://designer.gravit.io/
         * and font-awesome 4 icons. first I copied the icon from  fontawesome.io/cheatsheet
         * pasted in gravity and exported to svg and copy the path inside that svg file
         */
        return '<path d=" M 75 62.5 C 75 60.221 73.112 58.333 70.833 58.333 L 29.167 58.333 C 26.888 58.333 25 60.221 25 62.5 C 25 64.779 26.888 66.667 29.167 66.667 L 70.833 66.667 C 73.112 66.667 75 64.779 75 62.5 Z  M 41.667 33.333 C 41.667 28.711 37.956 25 33.333 25 C 28.711 25 25 28.711 25 33.333 C 25 37.956 28.711 41.667 33.333 41.667 C 37.956 41.667 41.667 37.956 41.667 33.333 Z  M 75 33.333 C 75 28.711 71.289 25 66.667 25 C 62.044 25 58.333 28.711 58.333 33.333 C 58.333 37.956 62.044 41.667 66.667 41.667 C 71.289 41.667 75 37.956 75 33.333 Z  M 91.667 50 C 91.667 72.982 72.982 91.667 50 91.667 C 27.018 91.667 8.333 72.982 8.333 50 C 8.333 27.018 27.018 8.333 50 8.333 C 72.982 8.333 91.667 27.018 91.667 50 Z  M 100 50 C 100 22.396 77.604 0 50 0 C 22.396 0 0 22.396 0 50 C 0 77.604 22.396 100 50 100 C 77.604 100 100 77.604 100 50 Z " />';
    }
}

mojs.addShape("match", Match);

const elem = document.querySelector(".like-button");

// define motion elements and tiemline
var match = new mojs.Shape({
    parent: elem,
    shape: "match",
    fill: "#fff",
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
        fill: "#ffeb3c",
        scale: {1:0, easing: "quad.in"},
        pathScale: [.8, null],
        degreeShift: [13, null],
        duration: [500, 700],
        easing: "quint.out"
    }
});

const matchTimeline = new mojs.Timeline({isYoyo:true});

// Add motion elements to timeline
matchTimeline.add(match, burst);

export default matchTimeline;
// Add eventListener for click
/** 
elem.addEventListener("click", function(e) {
    this.classList.add("hidden");
    timeline.replay();
});
*/

/**
 * All this stuffs I learned in this tutorial
 * https://webdesign.tutsplus.com/tutorials/introduction-to-mojs-motion-for-the-web--cms-28389
 * 
 */