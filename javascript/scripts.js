//Scroll Fixed Header Scripts
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

function initMap() {
  // The location of Uluru
  const uluru = {
    lat: -25.344,
    lng: 131.036
    //50.06013859607651, -122.95661669464884
  };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
