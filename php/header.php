<!DOCTYPE html>
<HTML lang="en">

<HEAD>
	<TITLE> INDEX </TITLE>
	<META name="author" content="Alex Turner & Keiran Conway">
	<META name="Description" content="Index page for 'Mt.Buggin' website">
	<!-- Font Stylesheets -->
	<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700" rel="stylesheet">
	<!-- Animation Stylesheets -->
	<link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet">
	<!-- style.css Stylesheets -->
	<link rel="stylesheet" href="../style.css">
	<link rel="stylesheet" href="../css/homepage.css">
	<!-- The core Firebase JS SDK is always required and must be listed first -->
	<script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js"></script>
	<script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-auth.js"></script>
	<script src="https://www.gstatic.com/firebasejs/8.3.1/firebase-analytics.js"></script>
</HEAD>

<BODY>
	<!-- Non-fixed header -->
	<div class="top_header">
		<div class="topContainer">
			<a href="https://instagram.com"><img src="../images/icons/instagram/instagram-24.png" class="instagram" id="socialMedia"></a>
		</div>
	</div>

	<!-- Dynamic Fixed Nav Bar -->
	<header id="myHeader">
		<div class="header_wrapper">
			<a href="#"><img src="../images/MtBuggin.png" alt="logo" class="logo"></a>
			<nav>
				<ul class="Nav_UI">
					<li><a href="#"> Home </a></li>
					<li><a href="#"> The Resort </a></li>
					<li><a href="#"> Tickets </a></li>
					<li><a href="#"> Lessons </a></li>
				</ul>
			</nav>
			<div class="header-right">
				<img src="../images/icons/user-icon.png" alt="user-icon" class="user-icon"></a>
				<button class="signin_button" id="signin_button"> Sign in </button>
				<button class="signout_button" id="signout_button" onclick="signout()"> Sign out </button>
			</div>
		</div>
	</header>

  <!-- Modal For Login Box -->
  <div class="login_modal">
    <!-- Modal For Login Popup -->
    <div class="animate__animated animate__fadeInLeft">
      <!-- Animation Stylesheet provided by https://animate.style/ -->
      <div class="login_box">

        <div class="second_header">
          <div class="close_login" id="close_login"> + </div>
          <p>Login</p>
          <img src="../images/MtBuggin.png" class="logo">
        </div>

        <div class="input_box">
          <input type="email" placeholder="Email..." id="login_email_id" /><br>
          <input type="password" placeholder="Password..." id="login_password_id" /><br>
        </div>

        <button class="login_button" onclick="login()">Login</button>
        <div class="login-register" register_button id="login-register">
          <p>Not a member?</p>
        </div>

        <div class="split">━━━━━━━ OR ━━━━━━━</div>

        <div class="google_login">
          <img src="../images/icons/google/1x/btn_google_signin_dark_normal_web.png" class="logo">
        </div>

      </div>
    </div>
  </div>

  <!-- Modal For Register Box -->
  <div class="register_modal">
    <!-- Modal For Register box -->
    <div class="animate__animated animate__fadeInLeft">
      <!-- Animation Stylesheet provided by https://animate.style/ -->
      <div class="register_box">

        <div class="close_registration" id="close_registration"> + </div>

        <div class="third_header">
          <p>Registration</p>
          <img src="../images/MtBuggin.png" class="logo">
        </div>

        <div class="input_box">
          <input type="string" placeholder="First Name" id="reg_Fname_id" />
          <input type="string" placeholder="Last Name" id="reg_Lname_id" /><br>
          <input type="string" placeholder="Address" id="reg_address_id" /><br>
          <input type="email" placeholder="Email" id="reg_email_id" /><br>
          <input type="password" placeholder="Password" id="reg_password_id" /><br>
          <input type="password" placeholder="Confirm Password" id="reg_Cpassword_id" /><br>
        </div>

        <button class="register_button" onclick="register()">Register</button>

      </div>
    </div>
  </div>