let canvas = document.getElementById('canvas');
var lines = [];

function resizeCanvas() {
  canvas.setAttribute("width", window.innerWidth);
  
  var height = document.getElementsByClassName("header")[0].clientHeight;
  canvas.setAttribute("height", window.innerHeight - height);
};

function createValues() {
  var context = canvas.getContext("2d");
  context.translate(0, canvas.height);
  context.scale(1, -1);

  reCreate();
}

function reCreate() {
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  lines = [];
  var size = document.getElementsByClassName("value")[0].innerHTML;
  var xScale = document.body.clientWidth / (514);
  var x = 5;
  for(var i = 0; i < size; i++){
    var y = parseInt(Math.random() * 700 + 99);
    context.moveTo(x, 100);
    context.lineTo(x, y);
    lines.push({
      x: x,
      y: y
    });
    x += xScale;
  } 
	context.lineWidth = 2;
	// set line color
	context.strokeStyle = "#eee";
	context.stroke();
}

resizeCanvas();
createValues();