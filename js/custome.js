$(document).ready(function () {
    $('.product_detail__involve-list').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      prevArrow: '.btn-prev',
      nextArrow: '.btn-next',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            dots: false,
      infinite: true,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false,
      infinite: true,
          }
        },
        {
          breakpoint: 670,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
      infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
      infinite: true,
          }
        },
        {
          breakpoint: 330,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
      infinite: true
          }
        }
      ]
    });
    $('.product__detail__buymore-list').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      prevArrow: '.btn--prev',
      nextArrow: '.btn--next',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            dots: false,
      infinite: true,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false,
      infinite: true,
          }
        },
        {
          breakpoint: 670,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
      infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
      infinite: true,
          }
        },
        {
          breakpoint: 330,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
      infinite: true
          }
        }
      ]
    });
});