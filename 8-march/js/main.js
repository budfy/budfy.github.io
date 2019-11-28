$(function () {
  $('.nav__link').each(function () {
    var location = window.location.pathname;
    var link = this.pathname;
    if (location == link) {
      $(this).addClass('nav__link--current');
    }
  });

  $(function () {
    $('.footer__popup').hide();
    $('.footer__popup').delay(5000).fadeIn(1000);
  });
});