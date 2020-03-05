$(function(){
// mac選択 
  $('#lab1').click(function() {
    $('#que1').slideUp(300);
    $('#que4').delay(300).hide().slideDown();
    $('head').append('<style>.select::after { width: 33%; } </style>');
  });
  // memory選択
  $('.lab6').click(function() {
    $('#que4').slideUp(300);
    $('#que7').delay(300).hide().slideDown();
    $('head').append('<style>.select::after { width: 66%; } </style>');
  });
  // storage選択
  $('.lab9').click(function() {
    $('#que7').slideUp(300);
    $('#que10').delay(300).hide().slideDown();
    $('head').append('<style>.select::after { width: 100%; } </style>');
  });
  // backボタン設定
  $('.back1').click(function() {
    $('#que2, #que3, #que4').slideUp(300);
    $('#que1').delay(300).hide().slideDown();
    $('head').append('<style>.select::after { width: 0%; } </style>');
  });
  $('.back2').click(function() {
    $('#que5').slideUp(300);
    $('#que2').delay(300).hide().slideDown();
    $('head').append('<style>.select::after { width: 25%; } </style>');
  });
  $('.back3').click(function() {
    $('#que6').slideUp(300);
    $('#que3').delay(300).hide().slideDown();
    $('head').append('<style>.select::after { width: 25%; } </style>');
  });
  $('.back4').click(function() {
    $('#que7').slideUp(300);
    $('#que4').delay(300).hide().slideDown();
    $('head').append('<style>.select::after { width: 33%; } </style>');
  });
  $('.back5').click(function() {
    $('#que8').slideUp(300);
    $('#que5').delay(300).hide().slideDown();
    $('head').append('<style>.select::after { width: 55%; } </style>');
  });
  $('.back6').click(function() {
    $('#que9').slideUp(300);
    $('#que6').delay(300).hide().slideDown();
    $('head').append('<style>.select::after { width: 55%; } </style>');
  });
});