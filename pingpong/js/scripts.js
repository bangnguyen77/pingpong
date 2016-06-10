
//User Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    // var result = csquare(inputText);

    $("#result").text(result);
  });
});


//Roman Numberals
  // var romanNumerals = [
  //   ["","I","II","III","IV","V","VI","VII","VIII","IX"],
  //   ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
  //   ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
  //   ["", "M", "MM", "MMM"]
  //   ];
  //
  //   function convert(originalNumber) {
  //     var numeral = "";
  //     var digits = originalNumber.toString().split('').reverse();
  //     for (var i=0; i < digits.length; i++){
  //       numeral = romanNumerals[i][parseInt(digits[i])] + numeral;
  //     }
  //     return numeral;
  //   }
  //
  //
  // $(document).ready(function(){
  //   var originalNumber = parseInt(prompt("Enter a number:"));
  //   var result = convert(originalNumber);
  //   $("#result").text(result);
  // });


// cryptosquare
  // function convert(originalSentence) {
  //   var sentenceArray = originalSentence.toLowerCase().split(" ").join("").split("");
  //   var columnNum = Math.ceil(Math.sqrt(sentenceArray.length));
  //   var encryptedString= "";
  //
  //   var totalArray = [], size = columnNum;
  //   while (sentenceArray.length > 0)
  //     totalArray.push(sentenceArray.splice(0, size));
  //
  //     for (var i=0; i<columnNum; i++) {
  //       for (var k=0; k<totalArray.length; k++) {
  //         encryptedString += totalArray[k][i];
  //       }
  //     }
  //     var noUndefined = encryptedString.replace(/undefined/g, '');
  //     var chunks = [];
  //     var chunkSize = 5;
  //     while(noUndefined) {
  //         if (noUndefined.length < chunkSize) {
  //             chunks.push(noUndefined);
  //             break;
  //         }
  //         else {
  //             chunks.push(noUndefined.substr(0, chunkSize));
  //             noUndefined = noUndefined.substr(chunkSize);
  //         }
  //     }
  //     return chunks;
  // }
  //
  // $(document).ready(function(){
  //   var originalSentence = prompt("Enter a sentence:");
  //   var result = convert(originalSentence);
  //   $("#result").text(result);
  // });

// Cryptosquare
//Business Logic
  // var csquare = function(text) {
  //   text = text.toLowerCase().replace(/[^a-z]/g, '');
  //   var colSize = Math.ceil(Math.sqrt(text.length));
  //   var createArray = function(rows) {
  //     var arr = [];
  //
  //     for (var i=0;i<rows;i++) {
  //        arr[i] = [];
  //     }
  //
  //     return arr;
  //   };
  //   var cryptosquare = createArray(colSize);
  //   var counter = 0;
  //   for (var rowIndex = 0; rowIndex < colSize; rowIndex++) {
  //     for (var colIndex = 0; colIndex < colSize; colIndex++) {
  //       cryptosquare[rowIndex].push(text[counter]);
  //       counter++;
  //     }
  //   }
  //   var encryptedString = "";
  //   for (var colIndex = 0; colIndex < colSize; colIndex++) {
  //     for (var rowIndex = 0; rowIndex < colSize; rowIndex++) {
  //       if (cryptosquare[rowIndex][colIndex]) {
  //         encryptedString += cryptosquare[rowIndex][colIndex];
  //       }
  //     }
  //   }
  //   var outputString = "";
  //   console.log(cryptosquare);
  //   for (var index = 0 ; index < encryptedString.length ; index++) {
  //     outputString += encryptedString[index];
  //     if ((index+1)%5 === 0) outputString += " ";
  //   }
  //   return outputString;
  // }
//User Interface Logic
