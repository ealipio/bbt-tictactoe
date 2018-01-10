"use strict";

import {helloMessage, css} from './message';
import { move } from "./game/tic-tac-toe";

document.querySelectorAll(".box").forEach(element => element.addEventListener("click", function(e) {
    move(this);
}));

console.log("%c %s", css, helloMessage);