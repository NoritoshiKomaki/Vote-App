$(function() {
  // mac選択 
  $('.lab2').click(function() {
    $('.que1').slideUp(300);
    $('.que2').delay(300).hide().slideDown();
  });
// cpu選択
  $('.lab4').click(function() {
    $('.que2').slideUp(300);
    $('.que5').delay(300).hide().slideDown();
  });
  // memory選択
  $('.lab10').click(function() {
    $('.que5').slideUp(300);
    $('.que8').delay(300).hide().slideDown();
  });
// storage選択
  $('.lab19').click(function() {
    $('.que8').slideUp(300);
    $('.que10').delay(300).hide().slideDown();
  });


});