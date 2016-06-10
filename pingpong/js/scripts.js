$(document).ready(function() {
  $("#numberInput").submit(function(event) {

    event.preventDefault();
// user interface logic
    var userNumber = parseInt($("#userNumber").val());
    var numberRange = [];

// javascript business Logic
    for ( i = 0; i <= userNumber; i++) {
      numberRange.push(i);
      if ( numberRange[i] % 3 === 0 && numberRange[i] % 5 === 0 ) {
        numberRange[i] = 'pingpong';
      } else {
        if (numberRange[i] % 5 === 0) {
          numberRange[i] = 'pong';
          }
        if (numberRange[i] % 3 === 0) {
          numberRange[i] = 'ping';
          }
        numberRange.splice(0, 1, '');
        $(".results").append("<li>" + numberRange[i] + "</li>");
      }
    }
  });
});
