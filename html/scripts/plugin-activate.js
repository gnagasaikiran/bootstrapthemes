$(document).ready(function() {
	// fixed header on scroll
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 60) {
          $("#Header").addClass("active");
      } else {
          $("#Header").removeClass("active");
        }
  });
  // bxslider sscript 
  $('.bxslider').bxSlider({
  	  //auto: true,
      mode: 'horizontal',
      // infiniteLoop: true,
      controls: true,
      pager: false,
      speed: 1000
  });
  //portfolio script
  $('.portfolio-images').slick({
      //infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,     
      autoplaySpeed: 1000,
       responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  //mobile menu
  $(".mobile_menu").simpleMobileMenu();
  //form validation
  $("#formsimplevalidation").simpleValidation();
  // smoothscroll
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
     if(target.length) {
         event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 1000);
      }
  });
  // Back top Script start //
   $("#back-to-top").hide();
   // fade in #back-to-top
   $(window).scroll(function() {
     if ($(this).scrollTop() > 100) {
       $("#back-to-top").fadeIn();
     } else {
       $("#back-to-top").fadeOut();
     }
   });
// scroll body to 0px on click
   $("#back-to-top").click(function() {
     $("body,html").animate({
       scrollTop: 0
     }, 800);
     return false;
   });
});
// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};
// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("myBtn").style.display = "block";
//     } else {
//         document.getElementById("myBtn").style.display = "none";
//     }
// }
// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }





