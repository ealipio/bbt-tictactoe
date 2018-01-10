import timeline from '../mojs/face';
import sadTimeline from '../mojs/sad';
import matchTimeline from '../mojs/match';

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
            var index = minimax(board, aiPlayer).index;
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
function minimax(reboard, player) {
    iter++;
    let array = avail(reboard);
    if (winning(reboard, huPlayer)) {
        return {
            score: -10
        };
    } else if (winning(reboard, aiPlayer)) {
        return {
            score: 10
        };
    } else if (array.length === 0) {
        return {
            score: 0
        };
    }

    var moves = [];
    for (var i = 0; i < array.length; i++) {
        var move = {};
        move.index = reboard[array[i]];
        reboard[array[i]] = player;

        if (player == aiPlayer) {
            var g = minimax(reboard, huPlayer);
            move.score = g.score;
        } else {
            var g = minimax(reboard, aiPlayer);
            move.score = g.score;
        }
        reboard[array[i]] = move.index;
        moves.push(move);
    }

    var bestMove;
    if (player === aiPlayer) {
        var bestScore = -10000;
        for (var i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        var bestScore = 10000;
        for (var i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }
    return moves[bestMove];
}

//available spots
 function avail(reboard) {
    return reboard.filter(s => s != "P" && s != "C");
}

// winning combinations
 function winning(board, player) {
    if (
        (board[0] == player && board[1] == player && board[2] == player) ||
        (board[3] == player && board[4] == player && board[5] == player) ||
        (board[6] == player && board[7] == player && board[8] == player) ||
        (board[0] == player && board[3] == player && board[6] == player) ||
        (board[1] == player && board[4] == player && board[7] == player) ||
        (board[2] == player && board[5] == player && board[8] == player) ||
        (board[0] == player && board[4] == player && board[8] == player) ||
        (board[2] == player && board[4] == player && board[6] == player)
    ) {
        return true;
    } else {
        return false;
    }
}