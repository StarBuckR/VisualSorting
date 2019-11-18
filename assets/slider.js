/*
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
*/
var rangeSlider = document.getElementById("rs-range-line");
var rangeBullet = document.getElementById("rs-bullet");

var rangeSlider2 = document.getElementById("rs-range-line2");
var rangeBullet2 = document.getElementById("rs-bullet2");

rangeSlider.addEventListener("input", showSliderValue, false);
rangeSlider2.addEventListener("input", showSliderValue2, false);

function showSliderValue() {
  rangeBullet.innerHTML = rangeSlider.value;
  var bulletPosition = (rangeSlider.value /rangeSlider.max);
  rangeBullet.style.left = (bulletPosition * 578)/3 + "px";
}

function showSliderValue2() {
  rangeBullet2.innerHTML = rangeSlider2.value;
  var bulletPosition = (rangeSlider2.value /rangeSlider2.max);
  rangeBullet2.style.left = (bulletPosition * 578)/3 + "px";
}