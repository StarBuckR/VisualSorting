var context = canvas.getContext("2d");
function swap(index1, index2) {
    //var tempX = lines[index1].x;
    var tempY = lines[index1].y;
    console.log(lines[index1].x + " " + lines[index1].y);
    console.log(lines[index2].x + " " + lines[index2].y);

    setTimeout(function() {
        transition1(index1, index2);
    }, 1000);

    setTimeout(function() {
        transition2(index2, tempY);
    }, 1000);
}

function transition1(index1, index2) {
    lines[index1].y = lines[index2].y;
    context.moveTo(lines[index1].x, 100);
    context.lineTo(lines[index1].x, lines[index1].y);
	context.lineWidth = 2;
	context.strokeStyle = "#eee";
    context.stroke();
}
function transition2(index2, tempY) {
    lines[index2].y = tempY;
    context.moveTo(lines[index2].x, 100);
    context.lineTo(lines[index2].x, lines[index2].y);
    context.lineWidth = 2;
    context.strokeStyle = "#eee";
    context.stroke();
}a

function bubblesort() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0; i < lines.length - 1; ++i){
        for(var j = 0; j < lines.length - i - 1; ++j){
            if(lines[j].y > lines[j + 1].y)
                swap(j, j + 1);
        }
    }
    console.log("------------");
    for(var i = 0; i < lines.length - 1; i++){
        console.log(lines[i].x + "   " + lines[i].y);
    }
}