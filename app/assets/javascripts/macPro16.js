$(function() {
  // mac選択 
  $('.lab3').click(function() {
    $('.que1').slideUp(300);
    $('.que3').delay(300).hide().slideDown();
  });
// cpu選択
  $('.lab6').click(function() {
    $('.que3').slideUp(300);
    $('.que6').delay(300).hide().slideDown();
  });
  // memory選択
  $('.lab12').click(function() {
    $('.que6').slideUp(300);
    $('.que9').delay(300).hide().slideDown();
  });
// storage選択
  $('.lab24').click(function() {
    $('.que9').slideUp(300);
    $('.que10').delay(300).hide().slideDown();
  });
});