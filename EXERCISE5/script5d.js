function myLoadEvent() {
 var element = document.getElementById('circle');
 element.style.opacity = 0.5;
 element.addEventListener('click', clickdemo);
}

function clickdemo(){
  var element = document.getElementById('circle');
   element.style.opacity = 1;
}

document.addEventListener('DOMContentLoaded', myLoadEvent);
