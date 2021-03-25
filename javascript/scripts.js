
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
//  Login Box / Registration JS
//---------------------------

//Login Box OPEN
document.getElementById('signin_button').addEventListener('click',
function login_box_open(){
  document.querySelector('.login_modal').style.display = 'flex';
})

//Login Box CLOSE
document.getElementById('close_login').addEventListener('click',
function login_box_close(){
  document.querySelector('.login_modal').style.display = 'none';
})

//Registration Box OPEN / Login CLOSE
document.getElementById('login-register').addEventListener('click',
function register_box_open(){
  document.querySelector('.register_modal').style.display = 'flex';
})

//Registration Box CLOSE
document.getElementById('close_registration').addEventListener('click',
function login_box_close(){
  document.querySelector('.login_modal').style.display = 'flex';
  document.querySelector('.register_modal').style.display = 'none';
})


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
