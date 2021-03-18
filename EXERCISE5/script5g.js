function clickdemo() {
 var element = document.getElementById('circle');
 var circleOpacity = element.style.opacity;
 element.style.opacity = circleOpacity - 0.01;
}
function clickinterval(){
  setInterval(clickdemo, 10);
}
function myLoadEvent() {
 var element = document.getElementById('circle');
 element.addEventListener('click', clickinterval);
 element.style.opacity = 1;
}
document.addEventListener('DOMContentLoaded', myLoadEvent);
