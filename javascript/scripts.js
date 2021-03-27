
//----------------------------------
// Fixed NAV on scroll JS
//----------------------------------
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

//------------------------------------
//  Login & Registration Modal Box JS
//------------------------------------

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
  // The map, centered at whistler
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: whistler,
    mapTypeId: 'satellite'
  });
  // The marker, positioned at whistler
  const marker = new google.maps.Marker({
    position: whistler,
    map: map,
  });
}



//----------------------------------------------------------------
//  Firebase Login JS
//----------------------------------------------------------------

//IF USER IS LOGGED IN
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {// User is signed in.
      document.querySelector('.login_modal').style.display = 'none';
      document.querySelector('.register_modal').style.display = 'none';
    } else {// No user is signed in.
    }
});

//LOGIN
function login() {
  var email = document.getElementById("login_email_id").value;
  var password = document.getElementById("login_password_id").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
   var errorCode = error.code;
  var errorMessage = error.message;
    window.alert("Error : " + errorMessage);
  });
}

//REGISTER
function register() {
  var email = document.getElementById("reg_email_id").value;
  var password = document.getElementById("reg_password_id").value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
  });
}

//SIGNOUT
function signout() {
    firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}
