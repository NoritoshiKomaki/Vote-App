$(function() {
  function addTwitter(twitter) {
    let html = `
      <div id="tw-${twitter.id}" class="tw">
        ${twitter.name}
      </div>
    `;
    $("#user-search-result").append(html);
  }
  
  function addNoTwitter() {
    let html = `
      <div>
        No User
      </div>
    `;
    $("#user-search-result").append(html);
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
      $('#user-search-result').empty();
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
});