"use strict";

import {helloMessage, css} from './message';
import { move } from "./game/tic-tac-toe";

document.querySelectorAll(".box").forEach(element => element.addEventListener("click", function(e) {
    move(this);
}));

var rect = new mojs.Shape({
    shape:        'rect',
    radius:       1,
    radiusX:      {1:150},
    angle:         '35',
    duration:      500,
    delay:         100,
    easing:        'cubic.out',  
    fill:         'cyan',
    isShowStart:  true,
  }).play();
  
console.log("%c %s", css, helloMessage);