// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
//
// The lowest number will not always come first.
//
// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
// Here are some helpful links:
//
// Math.max()
// Math.min()
// Array.prototype.reduce()


function sumAll(arr) {
  var highestNum = Math.max(arr[0],arr[1]);
  var lowestNum = Math.min(arr[0], arr[1]);
  var sum = 0;
  for (var i=lowestNum; i<=highestNum; i++) {
    sum += i;
  }

  return sum;
}

sumAll([1, 4]);
