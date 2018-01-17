import timeline from '../mojs/face';
import sadTimeline from '../mojs/sad';
import matchTimeline from '../mojs/match';

import minimax from "./minimax";
import winning from "./winning";

"use strict";

var board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var huPlayer = "P";
var aiPlayer = "C";
var iter = 0;
var round = 0;
var aiCo = "transparent";
var huCo = "#333";

export function move(element, player = huPlayer, color = huCo) {
    if (board[element.id] != "P" && board[element.id] != "C" && !winning(board, "C") ) {
        round++;
        element.style.backgroundColor = color;
        element.textContent = "X";
        board[element.id] = player;
        if (winning(board, player)) {
            setTimeout(function () {
                // Winner!
                document.querySelector(".like-button").classList.add("hidden");
                timeline.replay();
            }, 500);
            return;
        } else if (round > 8) {
            setTimeout(function () {
                // empate
                document.querySelector(".like-button").classList.add("hidden");
                matchTimeline.replay();                
                //reset();
            }, 500);
            return;
        } else {
            round++;
            var index = minimax(board, aiPlayer, huPlayer, iter).index;
            document.getElementById(index).style.backgroundColor = aiCo;
            document.getElementById(index).textContent = "0";;
            board[index] = aiPlayer;
            if (winning(board, aiPlayer)) {
                setTimeout(function () {
                    document.querySelector(".like-button").classList.add("hidden");
                    sadTimeline.replay();
                    //reset();
                }, 500);
                return;
            } else if (round === 0) {
                setTimeout(function () {
                    alert("tie");
                    //reset();
                }, 500);
                return;
            }
        }
    } else if(winning(board, "C")){
        sadTimeline.replay();
    }
}

/**
function reset() {
    round = 0;
    board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    $("td").css("background-color", "transparent");
}
*/