// Iniciar carrusel
const myCarousel = document.querySelector("#carouselViajes");

const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 5000,
  pause: false
});

carousel.cycle();

// Color del navbar

const scrollOffsetLimit = $(window).height()*0.75;

$(window).scroll(function() {
  if ($(this).width() < 768) {
    return;
  }

  const offset = window.scrollY;

  transparency = offset/scrollOffsetLimit > 1? 1: offset/scrollOffsetLimit * 1;

  $('#top-navbar').css({
    "background-color": `rgba(0,139,139,${transparency})`,
  })
})


// Smooth scrolling
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});