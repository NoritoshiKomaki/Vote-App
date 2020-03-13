$(function() {
  function addTwitter(twitter) {
    let html = `
      <div class="tw" id="${twitter.id}">
        ${twitter.name}
      </div>
    `;
    $("#twitter-result").append(html);
  }
  
  function addNoTwitter() {
    let html = `
      <div class="new">
        新規登録してください
      </div>
    `;
    $("#twitter-result").append(html);
  }

  $("#user-search-field").on("keyup", function() {
    let input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/twitters',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(twitters) {
      $('#twitter-result').empty();
      if (twitters.length !== 0) {
        twitters.forEach(function(twitter){
          addTwitter(twitter);
        });
      } else if (input.length == 0) {
        return false;
      } else {
        addNoTwitter();
      }
    })
    .fail(function() {
      alert('error');
    });
  });
  $(document).on('click', '.tw', function() {
    
    var id = $(this).attr('id');
    $('.flow').animate({ scrollTop: 41 * (id - 1) });
  });
  $('#sw-1').click(function() {
    $('.table-2').fadeOut(500);
    $('.table-1').delay(500).hide().fadeIn();
  });
  $('#sw-2').click(function() {
    $('.table-1').fadeOut(500);
    $('.table-2').delay(500).hide().fadeIn();
  });
  $(window).on('load', () => {
    $('.main').fadeIn(2000);
  });
});