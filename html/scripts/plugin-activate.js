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
  // bxslider starts 
  $('.bxslider').bxSlider({
  	  // auto: true,
      mode: 'fade',
      infiniteLoop: true,
      controls: false
  });
  $('.portfolio-images').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
  });
  //mobile menu
  $(".mobile_menu").simpleMobileMenu();
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