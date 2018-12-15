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
          autoplay: true,
          autoplaySpeed: 5000,
        }
      }
    ]
  });
  if (window.innerWidth < 600) {
    $('.descr-slider').slick({
      arrows: true,
      dots: true,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 5000,
    });
  }
  $('.team-slider').slick({
    rows: 2,
    slidesPerRow: 6,
    infinite: true,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesPerRow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesPerRow: 2,
          arrows: false,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2500,
        }
      }
    ]
  });
});
