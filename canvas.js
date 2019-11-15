let lines = [];
let states = [];
let w;// weight for resizing rectangles

function setup() {
  createCanvas(windowWidth, windowHeight - document.getElementsByClassName("header")[0].clientHeight);
  reCreate(32);
}


function draw() {
  background(150);

  for (let i = 0; i < lines.length; i++) {
      if(states[i] == 0){
          fill(255, 0, 0);
      } else {
          fill(255);
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
    fill(255);
    rect(i * w, height - lines[i], w, height)
  }
}

async function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}