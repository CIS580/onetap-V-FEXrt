"use strict;"

var oldTime;
var paused;
var render;
var update;

var backBuffer, backCtx, frontBuffer, frontCtx;

/**
 * @constructor Game
 * Creates a new game object
 * @param {canvasDOMElement} screen canvas object to draw into
 * @param {function} updateFunction function to update the game
 * @param {function} renderFunction function to render the game
 */
export function init(screen, updateFunction, renderFunction) {
  update = updateFunction;
  render = renderFunction;

  // Set up buffers
  frontBuffer = screen;
  frontCtx = screen.getContext('2d');
  backBuffer = document.createElement('canvas');
  backBuffer.width = screen.width;
  backBuffer.height = screen.height;
  backCtx = backBuffer.getContext('2d');

  // Start the game loop
  oldTime = performance.now();
  paused = false;
  window.requestAnimationFrame(loop);
}

/**
 * @function pause
 * Pause or unpause the game
 * @param {bool} pause true to pause, false to start
 */
export function pause(flag) {
  paused = (flag == true);
}

/**
 * @function loop
 * The main game loop.
 * @param{time} the current time as a DOMHighResTimeStamp
 */
loop(newTime) {
  var elapsedTime = newTime - oldTime;
  oldTime = newTime;

  if(!paused) update(elapsedTime);
  render(elapsedTime, frontCtx);

  // Flip the back buffer
  frontCtx.drawImage(backBuffer, 0, 0);

  // Run the next loop
  window.requestAnimationFrame(loop);
}

