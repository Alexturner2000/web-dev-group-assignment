<?php include_once 'header.php'; ?>

<link rel="stylesheet" href="../css/resort.css">
<script src="../javascript/resort.js"></script>

<div class="content">
  <div class="Welcome">
  <h1>Yerrrrrrrrp! Welcome to Mt.Buggin, a place where everyone can have fun! <br> from skiing to snowtubing we offer everything you need to enjoy a day out in the snow!</h1>
  </div>
  <div class="grid-container">


    <div class="Activities">
        <h1> Activities </h1>
  <div class="slideshow-container">
  <div class="mySlides fade">
    <div class="numbertext">1 / 4</div>
    <img src="../images/Resort/SKI.jpg" id="Show" style="width:100%">
    <div class="text"> Skiing </div>
  </div>
  <div class="mySlides fade">
    <div class="numbertext">2 / 4</div>
    <img src="../images/Resort/Board.jpg" id="Show" style="width:100%">
    <div class="text"> Boarding </div>
  </div>
  <div class="mySlides fade">
    <div class="numbertext">3 / 4</div>
    <img src="../images/Resort/Tube.jpg" id="Show" style="width:100%">
    <div class="text"> Snow-Tubing</div>
  </div>
  <div class="mySlides fade">
    <div class="numbertext">4 / 4</div>
    <img src="../images/Resort/HELI.jpg" id="Show" style="width:100%">
    <div class="text">Heli-Skiing</div>
  </div>

  </div>
  <div style="text-align:center">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>

  <script>
  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
  }
  </script>
    </div>
    <div class="Map">
      <h1>Mt. Buggin Map</h1>
      <br>
      <img src="../images/Resort/Buggin_Trail_map.jpg" id="Trail" alt="Trails Map";>
    </div>
    <div class="Village">
      <h1>The Village</h1>
      <h3>- Three restaurants</h3>
      <h3>- Four bars</h3>
      <h3>- One beaver tail stand</h3>
      <h3>- Two food trucks (truck choices are changed weekly)</h3>
      <h3>- Two dedicated ski shops</h3>
      <h3>- One dedicated board shop</h3>
      <img src="../images/Resort/VillageNight.jpg" style="width:100%">

    </div>
  </div>
</div>



<?php include_once 'footer.php'; ?>
