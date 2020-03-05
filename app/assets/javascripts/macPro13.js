$(function() {
  // mac選択 
  $('#lab2').click(function() {
    $('#que1').slideUp(300);
    $('#que2').delay(300).hide().slideDown();
    $('head').append('<style>.select::after { width: 25%; } </style>');
  });
// cpu選択
  $('.lab4').click(function() {
    $('#que2').slideUp(300);
    $('#que5').delay(300).hide().slideDown();
    $('head').append('<style>.select::after { width: 50%; } </style>');
  });
  // memory選択
  $('.lab7').click(function() {
    $('#que5').slideUp(300);
    $('#que8').delay(300).hide().slideDown();
    $('head').append('<style>.select::after { width: 75%; } </style>');
  });
// storage選択
  $('.lab10').click(function() {
    $('#que8').slideUp(300);
    $('#que10').delay(300).hide().slideDown();
    $('head').append('<style>.select::after { width: 100%; } </style>');
  });


});