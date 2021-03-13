function updateParagraph() {
 var element = document.getElementById('paragraph');
 element.firstChild.nodeValue = 'HARDWORK ONLY REFINE';
}
function updateH1() {
 var element = document.getElementById('mypageheading');
 element.firstChild.nodeValue = 'NEVER WORK ALONE';
}
function myLoadFunction() {
 var element = document.getElementById('mypageheading');
 element.addEventListener('click', updateH1);
 var element = document.getElementById('paragraph');
 element.addEventListener('click', updateParagraph);
}
document.addEventListener('DOMContentLoaded', myLoadFunction);
