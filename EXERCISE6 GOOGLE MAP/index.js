// Initialize and add the map
function initMap() {
  // The location of Uluru
  var UON = { lat: 52.229352864911334, lng: -0.8837136453113665 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: UON,
  });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
    position: UON,
    map: map,
  });
}
