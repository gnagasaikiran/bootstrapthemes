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
  	  // auto: true,
      mode: 'horizontal',
      infiniteLoop: true,
      controls: false,
      speed: 1000
  });
  //portfolio script
  $('.portfolio-images').slick({
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
  //$("#formsimplevalidation").simpleValidation();
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
});