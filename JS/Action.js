var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function loadData(name)
{
  if(name == "button1")	{
  document.getElementById("img1").src = "Images/new1.jpg"
  }
  else if(name == "button2"){
  document.getElementById("img1").src = "Images/new4.jpg"
  }
  else if(name == "button3"){
  document.getElementById("img1").src = "Images/new5.jpg"
  }
  else if(name == "button4"){
  document.getElementById("img1").src = "Images/new2.jpg"
  }
  else if(name == "button5"){
  document.getElementById("img1").src = "Images/new3.jpg"
  }
}
 function myFunction() {
  var txt;
  if (confirm("Buy Now!")) {
    txt = "You can book now !";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}