var range = document.querySelector('input[type="range"]');

var rangeValue = function(){
  var newValue = range.value;
  var target = document.querySelector('.value');
  target.innerHTML = newValue;
  reCreate();
}

range.addEventListener("input", rangeValue);