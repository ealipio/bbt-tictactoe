// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({5:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const helloMessage = exports.helloMessage = 'I check the console, Eisson';
const css = exports.css = `font-size: 20px; 
font-weight: bold; 
-webkit-text-fill-color: transparent; 
background: -webkit-linear-gradient(transparent, transparent), url(https://sarahdrasnerdesign.com/img/opt/crop-rainbow.gif) repeat; 
background: -o-linear-gradient(transparent, transparent); 
-webkit-background-clip: text;
text-shadow: 0px 0px 20px rgba(255,255,255,.35);`;
},{}],10:[function(require,module,exports) {
"use strict";

// define a custom shape

Object.defineProperty(exports, "__esModule", {
  value: true
});
class Smile extends mojs.CustomShape {
  getShape() {
    /**
     * I get my own path using https://designer.gravit.io/
     * and font-awesome 4 icons. first I copied the icon from  fontawesome.io/cheatsheet
     * pasted in gravity and exported to svg and copy the path inside that svg file
     */
    return '<path d=" M 73.828 61.654 C 74.544 59.44 73.307 57.161 71.159 56.445 C 68.945 55.729 66.602 56.966 65.885 59.18 C 63.737 66.146 57.292 70.833 50 70.833 C 42.708 70.833 36.263 66.146 34.115 59.18 C 33.398 56.966 31.055 55.729 28.906 56.445 C 26.693 57.161 25.456 59.44 26.172 61.654 C 29.427 72.135 38.997 79.167 50 79.167 C 61.003 79.167 70.573 72.135 73.828 61.654 Z  M 41.667 33.333 C 41.667 28.711 37.956 25 33.333 25 C 28.711 25 25 28.711 25 33.333 C 25 37.956 28.711 41.667 33.333 41.667 C 37.956 41.667 41.667 37.956 41.667 33.333 Z  M 75 33.333 C 75 28.711 71.289 25 66.667 25 C 62.044 25 58.333 28.711 58.333 33.333 C 58.333 37.956 62.044 41.667 66.667 41.667 C 71.289 41.667 75 37.956 75 33.333 Z  M 91.667 50 C 91.667 72.982 72.982 91.667 50 91.667 C 27.018 91.667 8.333 72.982 8.333 50 C 8.333 27.018 27.018 8.333 50 8.333 C 72.982 8.333 91.667 27.018 91.667 50 Z  M 100 50 C 100 22.396 77.604 0 50 0 C 22.396 0 0 22.396 0 50 C 0 77.604 22.396 100 50 100 C 77.604 100 100 77.604 100 50 Z "/>';
  }
}

mojs.addShape("smile", Smile);

const elem = document.querySelector(".like-button");

// define motion elements and tiemline

var smile = new mojs.Shape({
  parent: elem,
  shape: "smile",
  fill: "#e4e42e",
  scale: { 0: 1.5 },
  easing: "elastic.out",
  duration: 1500,
  delay: 300,
  radius: 10
});

const burst = new mojs.Burst({
  parent: elem,
  radius: { 4: 40 },
  angle: 45,
  count: 14,
  timeline: { delay: 400 },
  children: {
    radius: 2.5,
    fill: "#fff",
    scale: { 1: 0, easing: "quad.in" },
    pathScale: [.8, null],
    degreeShift: [13, null],
    duration: [500, 700],
    easing: "quint.out"
  }
});

const timeline = new mojs.Timeline();

// Add motion elements to timeline
timeline.add(smile, burst);

exports.default = timeline;
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
},{}],11:[function(require,module,exports) {
"use strict";

// define a custom shape

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
  fill: "#e82b2b",
  scale: { 0: 2.5 },
  easing: "elastic.out",
  duration: 1500,
  delay: 200,
  radius: 10
});

const burst = new mojs.Burst({
  parent: elem,
  radius: { 5: 40 },
  angle: 45,
  count: 15,
  timeline: { delay: 150 },
  children: {
    radius: 5.5,
    fill: "#39cfaf",
    scale: { 1: 0, easing: "quad.in" },
    pathScale: [1.5, null],
    degreeShift: [15, null],
    duration: [500, 700],
    easing: "quint.out"
  }
});

const timeline = new mojs.Timeline();

// Add motion elements to timeline
timeline.add(sad, burst);

exports.default = timeline;
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
},{}],9:[function(require,module,exports) {
"use strict";

// define a custom shape

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
  radius: { 4: 40 },
  angle: 45,
  count: 14,
  timeline: { delay: 400 },
  children: {
    radius: 2.5,
    fill: "#ffeb3c",
    scale: { 1: 0, easing: "quad.in" },
    pathScale: [.8, null],
    degreeShift: [13, null],
    duration: [500, 700],
    easing: "quint.out"
  }
});

const matchTimeline = new mojs.Timeline({ isYoyo: true });

// Add motion elements to timeline
matchTimeline.add(match, burst);

exports.default = matchTimeline;
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
},{}],13:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = winning;
// winning combinations
function winning(board, player) {
  if (board[0] == player && board[1] == player && board[2] == player || board[3] == player && board[4] == player && board[5] == player || board[6] == player && board[7] == player && board[8] == player || board[0] == player && board[3] == player && board[6] == player || board[1] == player && board[4] == player && board[7] == player || board[2] == player && board[5] == player && board[8] == player || board[0] == player && board[4] == player && board[8] == player || board[2] == player && board[4] == player && board[6] == player) {
    return true;
  } else {
    return false;
  }
}
},{}],12:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = minimax;

var _winning = require("./winning");

var _winning2 = _interopRequireDefault(_winning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var aiPlayer = "C";
//available spots
function avail(reboard) {
  return reboard.filter(s => s != "P" && s != "C");
}

function minimax(reboard, player, huPlayer, iter) {
  iter++;
  let array = avail(reboard);
  if ((0, _winning2.default)(reboard, huPlayer)) {
    return {
      score: -10
    };
  } else if ((0, _winning2.default)(reboard, aiPlayer)) {
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
    // oli
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
},{"./winning":13}],6:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.move = move;

var _face = require("../mojs/face");

var _face2 = _interopRequireDefault(_face);

var _sad = require("../mojs/sad");

var _sad2 = _interopRequireDefault(_sad);

var _match = require("../mojs/match");

var _match2 = _interopRequireDefault(_match);

var _minimax = require("./minimax");

var _minimax2 = _interopRequireDefault(_minimax);

var _winning = require("./winning");

var _winning2 = _interopRequireDefault(_winning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

"use strict";

var board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var huPlayer = "P";
var aiPlayer = "C";
var iter = 0;
var round = 0;
var aiCo = "transparent";
var huCo = "#333";

function move(element, player = huPlayer, color = huCo) {
  if (board[element.id] != "P" && board[element.id] != "C" && !(0, _winning2.default)(board, "C")) {
    round++;
    element.style.backgroundColor = color;
    element.textContent = "X";
    board[element.id] = player;
    if ((0, _winning2.default)(board, player)) {
      setTimeout(function () {
        // Winner!
        document.querySelector(".like-button").classList.add("hidden");
        _face2.default.replay();
      }, 500);
      return;
    } else if (round > 8) {
      setTimeout(function () {
        // empate
        document.querySelector(".like-button").classList.add("hidden");
        _match2.default.replay();
        //reset();
      }, 500);
      return;
    } else {
      round++;
      var index = (0, _minimax2.default)(board, aiPlayer, huPlayer, iter).index;
      document.getElementById(index).style.backgroundColor = aiCo;
      document.getElementById(index).textContent = "0";;
      board[index] = aiPlayer;
      if ((0, _winning2.default)(board, aiPlayer)) {
        setTimeout(function () {
          document.querySelector(".like-button").classList.add("hidden");
          _sad2.default.replay();
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
  } else if ((0, _winning2.default)(board, "C")) {
    _sad2.default.replay();
  }
}

/**
function reset() {
    round = 0;
    board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    $("td").css("background-color", "transparent");
}
*/
},{"../mojs/face":10,"../mojs/sad":11,"../mojs/match":9,"./minimax":12,"./winning":13}],2:[function(require,module,exports) {
"use strict";

var _message = require("./message");

var _ticTacToe = require("./game/tic-tac-toe");

document.querySelectorAll(".box").forEach(element => element.addEventListener("click", function (e) {
  (0, _ticTacToe.move)(this);
}));

var rect = new mojs.Shape({
  shape: 'rect',
  radius: 1,
  radiusX: { 1: 150 },
  angle: '35',
  duration: 500,
  delay: 100,
  easing: 'cubic.out',
  fill: 'cyan',
  isShowStart: true
}).play();

console.log("%c %s", _message.css, _message.helloMessage);
},{"./message":5,"./game/tic-tac-toe":6}],0:[function(require,module,exports) {
var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var ws = new WebSocket('ws://' + window.location.hostname + ':58727/');
  ws.onmessage = function(event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        window.location.reload();
      }
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id)
  });
}
},{}]},{},[0,2])