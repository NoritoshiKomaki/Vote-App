$(function(){
  var $que1 = $('#que1')
  var $que2 = $('#que2')
  var $que3 = $('#que3')
  var $que4 = $('#que4')
  var $que5 = $('#que5')
  var $que6 = $('#que6')
  var $que7 = $('#que7')
  var $que8 = $('#que8')
  var $que9 = $('#que9')
  var $que10 = $('#que10')
  var $que11 = $('#que11')
  var $que12 = $('#que12')

  var $head = $('head')

// mac選択 
  $('#lab1').click(function() {
    $que1.slideUp(300);
    $que4.delay(300).hide().slideDown();
    $head.append('<style>.select::after { width: 33%; } </style>');
  });
  // memory選択
  $('.lab6').click(function() {
    $que4.slideUp(300);
    $que7.delay(300).hide().slideDown();
    $head.append('<style>.select::after { width: 66%; } </style>');
  });
  // storage選択
  $('.lab9').click(function() {
    $que7.slideUp(300);
    $que10.delay(300).hide().slideDown();
    $head.append('<style>.select::after { width: 100%; } </style>');
  });
              // ここから13inch
  $('#lab2').click(function() {
    $que1.slideUp(300);
    $que2.delay(300).hide().slideDown();
    $head.append('<style>.select::after { width: 25%; } </style>');
  });
// cpu選択
  $('.lab4').click(function() {
    $que2.slideUp(300);
    $que5.delay(300).hide().slideDown();
    $head.append('<style>.select::after { width: 50%; } </style>');
  });
  // memory選択
  $('.lab7').click(function() {
    $que5.slideUp(300);
    $que8.delay(300).hide().slideDown();
    $head.append('<style>.select::after { width: 75%; } </style>');
  });
// storage選択
  $('.lab10').click(function() {
    $que8.slideUp(300);
    $que11.delay(300).hide().slideDown();
    $head.append('<style>.select::after { width: 100%; } </style>');
  });
                // ここから16inch
  $('#lab3').click(function() {
    $que1.slideUp(300);
    $que3.delay(300).hide().slideDown();
    $head.append('<style>.select::after { width: 25%; } </style>');
  });
// cpu選択
  $('.lab5').click(function() {
    $que3.slideUp(300);
    $que6.delay(300).hide().slideDown();
    $head.append('<style>.select::after { width: 50%; } </style>');
  });
  // memory選択
  $('.lab8').click(function() {
    $que6.slideUp(300);
    $que9.delay(300).hide().slideDown();
    $head.append('<style>.select::after { width: 75%; } </style>');
  });
// storage選択
  $('.lab11').click(function() {
    $que9.slideUp(300);
    $que12.delay(300).hide().slideDown();
    $head.append('<style>.select::after { width: 100%; } </style>');
  });

  // backボタン設定
  $('.back1').click(function() {
    $('#que2, #que3, #que4').slideUp(300);
    $que1.delay(300).hide().slideDown();
    $head.append('<style>.select::after { width: 0%; } </style>');
  });
  $('#back2').click(function() {
    $que5.slideUp(300);
    $que2.delay(300).hide().slideDown();
    $head.append('<style>.select::after { width: 25%; } </style>');
  });
  $('#back3').click(function() {
    $que6.slideUp(300);
    $que3.delay(300).hide().slideDown();
    $head.append('<style>.select::after { width: 25%; } </style>');
  });
  $('#back4').click(function() {
    $que7.slideUp(300);
    $que4.delay(300).hide().slideDown();
    $head.append('<style>.select::after { width: 33%; } </style>');
  });
  $('#back5').click(function() {
    $que8.slideUp(300);
    $que5.delay(300).hide().slideDown();
    $head.append('<style>.select::after { width: 50%; } </style>');
  });
  $('#back6').click(function() {
    $que9.slideUp(300);
    $que6.delay(300).hide().slideDown();
    $head.append('<style>.select::after { width: 50%; } </style>');
  });
  $('#back7').click(function() {
    $que10.slideUp(300);
    $que7.delay(300).hide().slideDown();
    $head.append('<style>.select::after { width: 66%; } </style>');
  });
  $('#back8').click(function() {
    $que11.slideUp(300);
    $que8.delay(300).hide().slideDown();
    $head.append('<style>.select::after { width: 75%; } </style>');
  });
  $('#back9').click(function() {
    $que12.slideUp(300);
    $que9.delay(300).hide().slideDown();
    $head.append('<style>.select::after { width: 75%; } </style>');
  });
});