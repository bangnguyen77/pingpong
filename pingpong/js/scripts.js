$(function() {
  $("form#number-input").submit(function(event) {
    event.preventDefault();

    var userNumber = parseInt($("input#number").val());
    var numberRange = [];

    for (i = 1; i <= userNumber; i++) {
      if (userNumber % 3 === 0) {
        userNumber = ping;
      } else if (userNumber % 5 === 0){
        userNumber = pong;
      } else (userNumber % 15 === 0){
        userNumber = pingpong
      }
    }


  });
});
