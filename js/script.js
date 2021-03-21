$(function () {
  $('#js-buttonHamburger').click(function () {
    $(this).toggleClass('is-drawerActive');
    
    if ($(this).attr('aria-expanded') == 'false') {
      $true = $(this).attr('aria-expanded', true);
    } else {
      $(this).attr('aria-expanded', false);
    }
  });
});