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
  //mobile menu
  $(".mobile_menu").simpleMobileMenu();
});