$('.slider-cont').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 2,
  asNavFor: '.slider-cont',
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  variableWidth: true,
  touchMove: true,
  swipe: true,
  arrows: false
});

$('.btn__row').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('btn__row-clicked');
  $('.menu__drop-down').toggleClass('menu__drop-down-active');
});