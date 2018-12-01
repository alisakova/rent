$(document).ready(function(){
  $('.reviews-slider').slick({
    slidesToScroll: 2,
    slidesToShow: 2,
    infinite: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  });
  if (window.innerWidth < 600) {
    $('.descr-slider').slick({
      arrows: false,
      dots: true,
      adaptiveHeight: true,
    });
  }
});
