// javascript business logic
var pingPong = function (userNumber) {
  var numberRange = [ ];
  for (var i = 1; i <= userNumber; i++) {
    if ( i % 15 === 0 ) {
      numberRange.push('pingpong');
    } else if (i % 5 === 0) {
        numberRange.push('pong');
    } else if (i % 3 === 0) {
        numberRange.push('ping');
    } else {
        numberRange.push(i);
    }
  };
  return numberRange;
};
// user interface logic
$(document).ready(function() {
  $("form#numberInput").submit(function(event) {
    event.preventDefault();
    $("ul#pongResults li").remove();
    var userNumber = parseInt($("input#userNumber").val());
    var numberResults = pingPong(userNumber);
    numberResults.forEach(function(result) {
      $("#pongResults").append("<li>" + result + "</li>");
    });
  });
});
