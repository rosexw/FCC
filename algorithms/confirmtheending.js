
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  var targetLength = target.length;
  var strFinalLength = str.length - target.length;

  var ending = str.substring(strFinalLength);

  return ending === target;
}

console.log(confirmEnding("Bastian", "n"));
//true
console.log(confirmEnding("Connor", "n"));
//false
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
//false
console.log(confirmEnding("He has to give me a new name", "name"));
//true
console.log(confirmEnding("Open sesame", "same"));
//true
console.log(confirmEnding("Open sesame", "pen"));
//false;
console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));
//false;


// Check if a string (first argument, str) ends with the given target string (second argument, target).
//
// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
