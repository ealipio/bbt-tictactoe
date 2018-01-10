"use strict";

// define a custom shape

class Sad extends mojs.CustomShape {
    getShape() {
        /**
         * I get my own path using https://designer.gravit.io/
         * and font-awesome 4 icons. first I copied the icon from  fontawesome.io/cheatsheet
         * pasted in gravity and exported to svg and copy the path inside that svg file
         */
        return '<path d=" M 73.828 71.68 C 70.573 61.198 61.003 54.167 50 54.167 C 38.997 54.167 29.427 61.198 26.172 71.68 C 25.456 73.893 26.693 76.172 28.906 76.888 C 31.055 77.604 33.398 76.367 34.115 74.154 C 36.263 67.188 42.708 62.5 50 62.5 C 57.292 62.5 63.737 67.188 65.885 74.154 C 66.602 76.367 68.945 77.604 71.159 76.888 C 73.307 76.172 74.544 73.893 73.828 71.68 Z  M 41.667 33.333 C 41.667 28.711 37.956 25 33.333 25 C 28.711 25 25 28.711 25 33.333 C 25 37.956 28.711 41.667 33.333 41.667 C 37.956 41.667 41.667 37.956 41.667 33.333 Z  M 75 33.333 C 75 28.711 71.289 25 66.667 25 C 62.044 25 58.333 28.711 58.333 33.333 C 58.333 37.956 62.044 41.667 66.667 41.667 C 71.289 41.667 75 37.956 75 33.333 Z  M 91.667 50 C 91.667 72.982 72.982 91.667 50 91.667 C 27.018 91.667 8.333 72.982 8.333 50 C 8.333 27.018 27.018 8.333 50 8.333 C 72.982 8.333 91.667 27.018 91.667 50 Z  M 100 50 C 100 22.396 77.604 0 50 0 C 22.396 0 0 22.396 0 50 C 0 77.604 22.396 100 50 100 C 77.604 100 100 77.604 100 50 Z " />';
    }
}

mojs.addShape("sad", Sad);

const elem = document.querySelector(".like-button");

// define motion elements and tiemline

var sad = new mojs.Shape({
    parent: elem,
    shape: "sad",
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
        fill: "#e93535",
        scale: {1:0, easing: "quad.in"},
        pathScale: [.8, null],
        degreeShift: [13, null],
        duration: [500, 700],
        easing: "quint.out"
    }
});

const timeline = new mojs.Timeline();

// Add motion elements to timeline
timeline.add(sad, burst);

export default timeline;
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