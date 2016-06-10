$(document).ready(function() {
  $("form#numberInput").submit(function(event) {
    var userNumber = parseInt($("input#userNumber").val());
    var numberRange = [];

    for ( i = 0; i <= userNumber; i++) {
      numberRange.push(i);
      if (numberRange[i] % 3 === 0 && numberRange[i] % 5 === 0) {
        numberRange[i] = 'pingpong';
      } else {
        if (numberRange[i] % 5 === 0) {
          numberRange[i] = 'pong';
          }
        if (numberRange[i] % 3 === 0) {
          numberRange[i] = 'ping';
          }
        numberRange.splice(0, 1, "");
        $("ul.results").append("<li>" + numberRange[i] + "</li>");
      }
    }
    event.preventDefault();

  });
});
