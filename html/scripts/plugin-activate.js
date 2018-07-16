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
  	  mode: 'horizontal',
      //auto: true,
      //infiniteLoop: true,
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
   //scroll body to 0px on click
   $("#back-to-top").click(function() {
     $("body,html").animate({
       scrollTop: 0
     }, 800);
     return false;
   });
 
$(document).on("scroll", onScroll);
$('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#Header .menu-items a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#Header ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
});s
  //  $(window).scroll(function() {
  //     var scroll = $(window).scrollTop();
  //     if (scroll >= 60) {
  //         $(".nav-link").addClass("active");
  //     } else {
  //         $(".nav-link").removeClass("active");
  //       }
  // });

  //  $('.nav-link').click(function() {
  //     var dis = $(this),
  //         disTarget = dis.getAttribute('a[href^="#"]'),
  //         ScrollTo = getAttribute('a[href^="#"]').offset().top;
  //     dis.addClass('active').siblings('nav-link').removeClass('active');
  //     $('html,body').animate({ scrollTop: ScrollTo });
  // });
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