function popup (msg) {
  $('#popupMessage').text(msg);
  $('.popup-wrapper').css('display', 'flex');
  $('body').addClass('noscrolling');
}

function closePopup () {
  $('.popup-wrapper').hide();
  $('body').removeClass('noscrolling');
}