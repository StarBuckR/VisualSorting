var sliders = document.querySelectorAll('input[type="range"]');
var delayRange = sliders[0];
var range = sliders[1];

var delayValue = function() {
  var newValue = delayRange.value;
  var target = document.querySelector('.delay');
  target.innerHTML = newValue;
  delay = newValue;
}

var rangeValue = function () {
  var newValue = range.value;
  var target = document.querySelector('.value');
  target.innerHTML = newValue;
  reCreate(target.innerHTML);
}

delayRange.addEventListener("input", delayValue);
range.addEventListener("input", rangeValue);