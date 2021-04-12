//----------------------------------------------------------------
// Fixed NAV on scroll JS
//----------------------------------------------------------------
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


//----------------------------------------------------------------
//  Login & Registration Modal Box JS
//----------------------------------------------------------------

  //Login Box [OPEN]
  document.getElementById('signin_button').addEventListener('click',
  function login_box_open(){
    document.querySelector('.login_modal').style.display = 'flex';
  })

  //Login Box [CLOSE]
  document.getElementById('close_login').addEventListener('click',
  function login_box_close(){
    document.querySelector('.login_modal').style.display = 'none';
  })

  //Registration Box [OPEN]
  document.getElementById('login-register').addEventListener('click',
  function register_box_open(){
    document.querySelector('.register_modal').style.display = 'flex';
  })

  //Registration Box [CLOSE]
  document.getElementById('close_registration').addEventListener('click',
  function login_box_close(){
    document.querySelector('.login_modal').style.display = 'flex';
    document.querySelector('.register_modal').style.display = 'none';
  })

  //Profile Box [OPEN]
  document.getElementById('profile_button').addEventListener('click',
  function profile_box_open(){
    document.querySelector('.profile_modal').style.display = 'flex';
  })

  //Profile Box [CLOSE]
  document.getElementById('close_profile').addEventListener('click',
  function profile_box_open(){
    document.querySelector('.profile_modal').style.display = 'none';
  })




//----------------------------------------------------------------
//  Firebase Login JS
//----------------------------------------------------------------

//IF USER IS LOGGED IN
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {// User is signed in.
      var user = firebase.auth().currentUser;
      var email = user.email;


      document.getElementById("email").innerHTML=email;


      document.querySelector('.login_modal').style.display = 'none';
      document.querySelector('.register_modal').style.display = 'none';
      document.querySelector('.signin_button').style.display = 'none';
      document.querySelector('.signout_button').style.display = 'inline-block';
      document.querySelector('.profile_button').style.display = 'inline-block';
    } else {// No user is signed in.
      document.querySelector('.signin_button').style.display = 'inline-block';
      document.querySelector('.signout_button').style.display = 'none';
      document.querySelector('.profile_button').style.display = 'none';
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

//----------------------------------------------------------------
//----------------------------------------------------------------
//----------------------------------------------------------------
