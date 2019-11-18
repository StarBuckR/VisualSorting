var rangeSlider = document.getElementById("rs-range-line");
var rangeBullet = document.getElementById("rs-bullet");
showSliderValue();

var rangeSlider2 = document.getElementById("rs-range-line2");
var rangeBullet2 = document.getElementById("rs-bullet2");
setTimeout(() => {
  showSliderValue2();
}, 1000);

rangeSlider.addEventListener("input", showSliderValue, false);
rangeSlider2.addEventListener("input", showSliderValue2, false);

function showSliderValue() {
  rangeBullet.innerHTML = rangeSlider.value;
  var bulletPosition = (rangeSlider.value /rangeSlider.max);
  rangeBullet.style.left = (bulletPosition * 565)/3 + "px";
  delay = rangeSlider.value;
}

function showSliderValue2() {
  rangeBullet2.innerHTML = rangeSlider2.value;
  var bulletPosition = (rangeSlider2.value /rangeSlider2.max);
  rangeBullet2.style.left = (bulletPosition * 582)/3 + "px";
  reCreate(document.getElementById("rs-bullet2").innerHTML);
}