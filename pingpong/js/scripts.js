$(function() {
  $("form#number-input").submit(function(event) {
    event.preventDefault();

    var userNumber = parseInt($("input#number").val());

    for (i = 1; i <= userNumber; i++) {
      if (userNumber % 3 === 0) {
        document.write('ping');
      } else if (userNumber % 5 === 0){
        document.write('pong');
      } else (userNumber % 15 === 0){
        document.write('pingpong');
      }
    }


  });
});
