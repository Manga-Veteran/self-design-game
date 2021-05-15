var astroid1, astroid2, astroid3, p1, p2;
var blast, blastImg, space, spaceImg;
var spaceship, spaceshipImg, laserImg;
var astroidGroup, laser, laserGroup;
var laserSound, explosionSound, explosionImg;
var gameState;

function preload() {
  spaceImg = loadImage("space.png");

  laserImg = loadImage("laser.png");

  spaceshipImg = loadImage("spaceship.png");

  astroid1 = loadImage("as1.png");
  astroid2 = loadImage("as2.png");
  astroid3 = loadImage("as3.png");

  blastImg = loadImage("blast.png");

  explosionImg = loadImage("explosion.png");

  explosionSound = loadSound("explosion.mp3");

  laserSound = loadSound("laser sound.mp3");
}
