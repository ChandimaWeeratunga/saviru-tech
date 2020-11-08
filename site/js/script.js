//curtain menu
function openNav(){
    document.getElementById("menu").style.width = "100%";
}
function closeNav(){
    document.getElementById("menu").style.width = "0";
}


//fade and scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0, //giving time to fade-in
    rootMargin: "0px 0px -50px 0px" //the point where the fade-in starts to work. 50px after intersecting
};

const appearOnScroll = new IntersectionObserver(
    function(entries, appearOnScroll){
        entries.forEach(entry => {
            if (!entry.isIntersecting){
                return;
            }
            else{
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })


    }, appearOptions
);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

//read more
/*
function readMore(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read More";
        moreText.style.display = "none";
    }

    else {
        dots.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
    }
}
readMore();
*/

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }

var slideIndex = [2,2,2]; //for n types of dryers, n times of (n-1)
var slideId = ["mySlides1", "mySlides2","mySlides3"]
showSlides(2, 0);
showSlides(2, 1);
showSlides(2, 2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}