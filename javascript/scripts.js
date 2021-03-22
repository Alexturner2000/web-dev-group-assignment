
//----------------------------
// Sticky NAV JS
//----------------------------
window.onscroll = function() {
  stickyHeader()
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



//---------------------------
//  GOOGLE MAPS JS
//---------------------------
function initMap() {
  // The location of whistler
  const whistler= {
    lat: 50.059430,
    lng: -122.957110
  };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: whistler,
    mapTypeId: 'satellite'
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: whistler,
    map: map,
  });
}
