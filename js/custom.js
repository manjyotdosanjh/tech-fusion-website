<script>
(function ($) {

  "use strict";

  // NAVBAR COLLAPSE ON CLICK
  $('.navbar-nav .nav-link').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });

  // STICKY NAVBAR
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('sticky-nav');
    } else {
      $('.navbar').removeClass('sticky-nav');
    }
  });

  // HERO BACKSTRETCH SLIDESHOW
  $('#section_1').backstretch([
    "images/slide/slide.1.jpg",
    "images/slide/slide.2.jpeg",
    "images/slide/slide.3.jpeg"
  ], {
    duration: 5000,
    fade: 1200
  });

})(jQuery);
</script>


