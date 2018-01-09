"use strict";

import helloMessage from './lib';
import animationHanlder from './mo';
//import {secondaryShape, basicShape} from './shape';

//secondaryShape.play();
//basicShape.play();

const css = `font-size: 20px; 
font-weight: bold; 
-webkit-text-fill-color: transparent; 
background: -webkit-linear-gradient(transparent, transparent), url(https://sarahdrasnerdesign.com/img/opt/crop-rainbow.gif) repeat; 
background: -o-linear-gradient(transparent, transparent); 
-webkit-background-clip: text;
text-shadow: 0px 0px 20px rgba(255,255,255,.35);`;

console.log("%c %s", css, helloMessage);