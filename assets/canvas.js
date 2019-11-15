let lines = [];
let states = []; // for better visualization
let w;// weight for resizing rectangles

function setup() {
  createCanvas(windowWidth, windowHeight - document.getElementsByClassName("header")[0].clientHeight);
  reCreate(32);
}


function draw() {
  background(150);

  for (let i = 0; i < lines.length; i++) {
      if(states[i] == 0){
          fill('#FF4136');
      } else if(states[i] == 1){
          fill('#0074D9');
      } else {
          fill("#eee");
      }
      rect(i * w, height - lines[i], w, height)
  }
}

function reCreate(lineSize) {
  lines = [];
  background(150);
  lines = new Array(lineSize);
  w = windowWidth / lineSize
  for (let i = 0; i < lineSize; i++) {
    lines[i] = random(height);
    states[i] = -1;
    fill("#eee");
    rect(i * w, height - lines[i], w, height)
  }
}

async function swap(arr, a, b) {
  await sleep(50);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}