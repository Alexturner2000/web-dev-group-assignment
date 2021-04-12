//----------------------------------------------------------------
//  GOOGLE MAPS JS
//----------------------------------------------------------------
function initMap() {
  // The location of whistler
  const whistler= {
    lat: 50.059430,
    lng: -122.957110
  };
  // The map, centered at whistler
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: whistler,
    mapTypeId: 'satellite'
  });
  // The marker, positioned at whistler
  const marker = new google.maps.Marker({
    position: whistler,
    map: map,
  });
}