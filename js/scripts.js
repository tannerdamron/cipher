$(document).ready(function() {
  var sentence = prompt("Enter a sentence:");

  var count = function count(sentence) {
    return sentence.charAt(((sentence.length-1) / 2).toFixed());
  };

  var firstletter = function firstletter(sentence) {
    return sentence.charAt(0).toUpperCase();
  };

  var lastletter = function lastletter(sentence) {
    return sentence.charAt(sentence.length-1).toUpperCase();
  };

  var middleletter = count(sentence)

  var firstlast = lastletter(sentence) + firstletter(sentence);

  var result = middleletter + sentence + firstlast;

  var splitSentence = result.split("");

  var reverseSentence = splitSentence.reverse();

  var joinSentence = reverseSentence.join("");

  $(".lindsay1").click(function() {
    alert(sentence);
  });

  $(".lindsay2").click(function() {
    alert(joinSentence);
  });

});
