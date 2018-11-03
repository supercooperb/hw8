// laugh-1.mp3 was found at http://soundbible.com/1279-Goofy-Laugh.html
// gasp.mp3 was found at http://soundbible.com/809-Sad.html
// laugh-2.mp3 was found at https://freesound.org/people/SoundCollectah/sounds/108928/
// yipee.mp3 was found at https://freesound.org/people/zippi1/sounds/18054/
// sad.mp3 was found at https://freesound.org/people/Julalvr/sounds/429882/
// grrr.mp3 was found at https://freesound.org/people/davidou/sounds/88462/
// meh.mp3 was found at https://freesound.org/people/prucanada/sounds/415363/
// displeased.mp3 was found at https://freesound.org/people/jammaj/sounds/409013/
// oooh.mp3 was found at https://freesound.org/people/Reitanna/sounds/323707/

var laugh;
var gasp;
var smile;
var laugh2;
var sad;
var oooh;
var grumble;
var eh;
var angry;
var backgroundColor;

function preload() {
  soundFormats('mp3', 'ogg');
  laugh = loadSound('assets/laugh-1.mp3');
  gasp = loadSound('assets/gasp.mp3');
  smile = loadSound('assets/yipee.mp3');
  laugh2 = loadSound('assets/laugh-2.mp3');
  sad = loadSound('assets/sad.mp3');
  oooh = loadSound('assets/oooh.mp3');
  grumble = loadSound('assets/displeased.mp3')
  eh = loadSound('assets/meh.mp3')
  angry = loadSound('assets/grrr.mp3')
}

var A = [
  [0, 0, 0, 0, 0],
  [1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0]
]

var S = [
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1]
]

var D = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1]
]

var F = [
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1]
]

var G = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]

var H = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0]
]

var J = [
  [0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0]
]

var K = [
  [1, 1, 1, 1, 1],
  [0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0]
]

var L = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [0, 1, 1, 1, 0]
];

var backgroundColor = 'magenta'

var circles = [];

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  for (var r = 0; r < 7; r++) {
    for (var c = 0; c < 5; c++) {
      circles.push({
        x: random(-width, 2 * width),
        y: random(-height, 2 * height)
      });
    }
  }
}

function draw() {
   background(backgroundColor);
   if (key == 'a') {
     letter = A;
     backgroundColor = 'magenta';
   }
   if (key == 's') {
     letter = S;
     backgroundColor = 'rgb(255, 204, 0)';
   }
   if (key == 'd') {
     letter = D;
     backgroundColor = '#222222';
   }
   if (key == 'f') {
     letter = F;
     backgroundColor = 'rgb(0%, 0%, 100%)';
   }
   if (key == 'g') {
     letter = G;
     backgroundColor = 'rgb(30, 170, 60)';
   }
   if (key == 'h') {
     letter = H;
     backgroundColor = 'rgb(72, 61, 139)';
   }
   if (key == 'j') {
     letter = J;
     backgroundColor = 'rgba(0, 120, 40, 20)';
   }
   if (key == 'k') {
     letter = K;
     backgroundColor = 'red';
   }
   if (key == 'l') {
     letter = L;
     backgroundColor = 'hsl(35, 100%, 50%)';
   }

  for (var i = 0; i < circles.length; i++) {
    let circle = circles[i];
    noStroke();
    rect(circle.x, circle.y, 85, 55);
    if (circle.targetX) {
      circle.x = 0.9 * circle.x + 0.1 * circle.targetX;
    }
    if (circle.targetY) {
      circle.y = 0.9 * circle.y + 0.1 * circle.targetY;
    }
  }
}

function keyPressed() {
  var letter;
  if (key == 'a') {
    letter = A;
    laugh2.play();
  }
  if (key == 's') {
    letter = S;
    smile.play();
  }
  if (key == 'd') {
    letter = D;
    gasp.play();
  }
  if (key == 'f') {
    letter = F;
    sad.play();
  }
  if (key == 'g') {
    letter = G;
    oooh.play();
  }
  if (key == 'h') {
    letter = H;
    grumble.play();
  }
  if (key == 'j') {
    letter = J;
    eh.play();
  }
  if (key == 'k') {
    letter = K;
    angry.play();
  }
  if (key == 'l') {
    letter = L;
    laugh.play();
  }


  for (var r = 0; r < 7; r++) {
    for (var c = 0; c < 5; c++) {
      let circle = circles[r * 5 + c];
      let x = width / 5 * (c + 0.5);
      let y = height / 7 * (r + 0.5);

      if (letter[r][c] > 0) {
        circle.targetX = x;
        circle.targetY = y;
      } else {
        if (x < width / 2) {
          x = -50;
        } else {
          x = width + 50;
        }
        circle.targetX = x;
        circle.targetY = y;
      }
    }
  }
}
