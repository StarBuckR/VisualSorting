let lines = [];
let states = []; // for better visualization
let w;// weight for resizing rectangles
let delay = 50;

let secondBool = false;
let comparison = 0;
let swapCounter = 0;
let time0;

let headerHeight;
let counters = document.getElementsByClassName("counter");
function setup() {
  createCanvas(windowWidth, windowHeight - document.getElementsByClassName("header")[0].clientHeight);
  var oCanvas = document.getElementById("defaultCanvas0");
  headerHeight = document.getElementsByClassName("header")[0].clientHeight;
  oCanvas.style.marginTop = headerHeight + "px";

  counters[0].style.setProperty("padding-top", (headerHeight + 5) + "px");
  counters[1].style.setProperty("padding-top", (headerHeight + 30) + "px");
  counters[2].style.setProperty("padding-top", (headerHeight + 55) + "px");

  reCreate(32);
}

function draw() {
  background(150);

  let tempHeight = document.getElementsByClassName("header")[0].clientHeight;
  if(tempHeight != headerHeight) {
    counters[0].style.setProperty("padding-top", (headerHeight + 5) + "px");
    counters[1].style.setProperty("padding-top", (headerHeight + 30) + "px");
    counters[2].style.setProperty("padding-top", (headerHeight + 55) + "px");
    headerHeight = tempHeight;
  }
  
  if(secondBool) {
    var time1 = Date.now();
    counters[0].innerHTML = "Second Counter: " + ((time1 - time0) / 1000 + " sec");
    counters[1].innerHTML = "Comparison Counter: " + comparison;
    counters[2].innerHTML = "Swap Counter: " + swapCounter;
  }

  for (let i = 0; i < lines.length; i++) {
      if(document.body.clientWidth < 1366){
        stroke(0);
      }
      else{
        stroke(150);
      }
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

async function algorithmStarter() {
  closeMenus();
  comparison = 0;
  swapCounter = 0;
  time0 = Date.now();
  secondBool = true;
}

async function swap(arr, a, b) {
  swapCounter++;
  await sleep(delay);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function resetEverything() {
  window.location.reload(false);
}

async function reverseOrder() {
  let minIndex;
    for(let i = 0; i < lines.length - 1; ++i){
        minIndex = i;
        for(let j = i; j < lines.length; ++j){
            comparison++;
            if(lines[j] > lines[minIndex]){
                minIndex = j;
            }
        }
        states[minIndex] = 0;
        let temp = lines[minIndex];
        lines[minIndex] = lines[i];
        lines[i] = temp;
        states[minIndex] = -1;
    }
    secondBool = false;
}

function randomOrder() {
  reCreate(document.getElementById('rs-bullet2').innerHTML);
}

function resizeCanvas() {
  let headerHeight = document.getElementsByClassName("header")[0].clientHeight;
  var oCanvas = document.getElementById("defaultCanvas0");
  oCanvas.style.marginTop = headerHeight + "px";

  counters[0].style.setProperty("padding-top", (headerHeight + 5) + "px");
  counters[1].style.setProperty("padding-top", (headerHeight + 30) + "px");
  counters[2].style.setProperty("padding-top", (headerHeight + 55) + "px");
}
window.addEventListener("resize", resizeCanvas);