$(function() {
  // mac選択 
  $('#lab3').click(function() {
    $('#que1').slideUp(300);
    $('#que3').delay(300).hide().slideDown();
    $('head').append('<style>.select::after { width: 25%; } </style>');
  });
// cpu選択
  $('.lab5').click(function() {
    $('#que3').slideUp(300);
    $('#que6').delay(300).hide().slideDown();
    $('head').append('<style>.select::after { width: 50%; } </style>');
  });
  // memory選択
  $('.lab8').click(function() {
    $('#que6').slideUp(300);
    $('#que9').delay(300).hide().slideDown();
    $('head').append('<style>.select::after { width: 75%; } </style>');
  });
// storage選択
  $('.lab11').click(function() {
    $('#que9').slideUp(300);
    $('#que10').delay(300).hide().slideDown();
    $('head').append('<style>.select::after { width: 100%; } </style>');
  });
});