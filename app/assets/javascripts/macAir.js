$(function(){
// mac選択 
  $('.lab1').click(function() {
    $('.que1').slideUp(300);
    $('.que4').delay(300).hide().slideDown();
  });
  // memory選択
  $('.lab8').click(function() {
    $('.que4').slideUp(300);
    $('.que7').delay(300).hide().slideDown();
  });
  // storage選択
  $('.lab15').click(function() {
    $('.que7').slideUp(300);
    $('.que10').delay(300).hide().slideDown();
  });


});