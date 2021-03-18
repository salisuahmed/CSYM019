function clickdemo() {
 alert('The button was pressed');
}
function myLoadFunction() {
 var element = document.getElementById('circle');
 element.addEventListener('click', clickdemo);
}
document.addEventListener('DOMContentLoaded', myLoadFunction);
