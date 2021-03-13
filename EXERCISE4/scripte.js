function learningfunction() {
 var element = document.getElementById('mypageheading');
 element.firstChild.nodeValue = 'MASTER OF THE UNIVERSE';
 var element2 = document.getElementById('paragraph');
 element2.firstChild.nodeValue = 'HE CANNOT CHANGE';
}
function loadfunction() {
 var element = document.getElementById('mypageheading');
 element.firstChild.nodeValue = 'MASTER OF THE UNIVERSE';
}
document.addEventListener('click', loadfunction);
