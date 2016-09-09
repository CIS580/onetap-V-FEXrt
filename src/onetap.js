"use strict;"
//const Game = require('./game.js');
import {init, pause} from './game';
import * as player from './player';

var canvas = document.getElementById('screen');
var game = init(canvas, update, render);

var background = new Image();
background.src = '/assets/Menu.png';

/**
 * @function update
 * Updates the game state, moving
 * game objects and handling interactions
 * between them.
 * @param {elapsedTime} A DOMHighResTimeStamp indicting
 * the number of milliseconds passed since the last frame.
 */
function update(elapsedTime) {

  // TODO: Update the game objects
  player.update(elapsedTime);
}

/**
  * @function render
  * Renders the current game state into a back buffer.
  * @param {elapsedTime} A DOMHighResTimeStamp indicting
  * the number of milliseconds passed since the last frame.
  */
function render(elapsedTime, ctx) {

  // TODO: Draw the game objects using the supplied context
  if(background) ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  player.render(elapsedTime, ctx);

}
