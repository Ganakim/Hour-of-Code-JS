const loadBlocks = () => {
  for (let y = 0; y < game.rows; y++) {
    for (let x = 0; x < game.blocksPerRow; x++) {
      game.addBlock(x, y);
    }
  }
};
document.addEventListener("keydown", event => {
    //  use switch case to check if the right or left arrow is pressed, take the parameter event.key

    //  first case - if the right arrow "ArrowRight" is pressed, the paddle has the moveRight() function applied to it, and the loop is broken (break;)

    //  second case - if the left arrow "ArrowLeft" is pressed, the paddle has the moveLeft() function applied to it, and the loop is broken (break;)

    //  default case

});
document.addEventListener("keyup", event => {
    // all that needs to be different here is the "keyup" parameter above and what the paddle does; it doesn't move, it needs to stop()
    // use switch case to check if the right or left arrow is pressed, take the parameter event.key

    //  first case - if the right arrow is released, the paddle has the stop() function applied to it, and the loop is broken (break;)

    //  second case - if the left arrow is released, the paddle has the stop() function applied to it, and the loop is broken (break;)

    //  default case

});
const paddleCheck = () => {
    //  the object "paddle" needs a left boundary, if its x property is less than 0, it needs to be set to 0

    //  and a right boundary, the "paddle" object's x property needs to be unable to go higher than the width of the scene (defaults.w) minus (-) the width of the paddle (paddle.w)

};
const ballBlockCheck = () => {
  //  for all blocks in the game - this is some new code, let's learn it!

    //  if the object "ball" isTouching a block

    //  then the object "ball" will bounceWith() the parameter "block"

    //  then the object "synth" will playBlockSound()

    //  then to the game object, apply the addPoints() function (the player gets a point for hitting a block with the ball)

    //  then to the game object, apply the remove() function with the "block" parameter

};
const ballPaddleCheck = () => {
  //  if the object "ball" isTouching() the parameter "paddle"

  // then the object "ball" will bounceWith() the parameter "paddle"

  // and then the object "synth" will playPaddleSound()

};
const ballBoundsCheck = () => {
  //  if ballHitLeftWall() is true(this is a boolean that already exists in the setup file!)
  
    //  then the object "ball" has its x property set equal to 0

    //  then the object "ball" has its vx property set to its negative

    //  then the object "synth" will playWallSound()

  //  if ballHitRightWall() is true
  
    //  then the object "ball" has its x property set equal to the game's width

    //  then the object "ball" has its vx property set to its negative

    //  then the object "synth" will playWallSound()

  //  if ballHitCeiling() is true

    //  then the object "ball" has its y property set equal to 0

    //  then the object "ball" has its vy property set to its negative

    //  then the object "synth" will playCeilingSound()

  //  if ballHitFloor() is true

    //  then the object "ball" has its y property set equal to 200

    //  then the object "synth" will playFloorSound()

    //  then the function removeLife() is called

};
const removeLife = () => {
  game.lives -= 1;
  const p = document.querySelector("#lives");
  if (game.lives == 2) {
    p.innerHTML = "❤️❤️🖤";
  }
  if (game.lives == 1) {
    p.innerHTML = "❤️🖤🖤";
  }
  if (game.lives == 0) {
    p.innerHTML = "🖤🖤🖤";
  }
  if (game.lives < 0) {
    game.setState("game-over");
    synth.playGameOverSound();
  }
};
function updateObjects() {
  paddle.update();
  ball.update();
  paddleCheck();
  ballBoundsCheck();
  ballPaddleCheck();
  ballBlockCheck();
  for (const block of game.blocks) {
    block.update();
  }
}
const gameLoop = () => {
  window.requestAnimationFrame(gameLoop);
  ctx.clearRect(0, 0, defaults.width, defaults.height);
  switch (game.state) {
    case "playing":
      updateObjects();
      break;
    case "level-up":
      game.levelUp();
      break;
    case "game-over":
      game.gameOver();
      break;
    case "paused":
      break;
    default:
      break;
  }
};
