$(function() {
  $("form#number-input").submit(function(event) {
    event.preventDefault();

    var userNumber = parseInt($("input#number").val());

    for (var i = 1; i <= userNumber; i++) {
      if (i % 3 === 0 && i % 5) {
        document.write('pingpong');
      } else {
        if (i % 3 === 0) {
          document.write('ping');
          }
        if (i% 5 === 0) {
          document.write('pong');
          }
        }
      document.write('<br>');  
    }


  });
});
