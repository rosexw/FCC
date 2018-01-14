
function destroyer(arr, ...args) {
  // Remove all the values
  return arr.filter(function(item) {
    return args.indexOf(item) < 0;
  });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
// should return [1,1].
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
 // should return [1, 5, 1].
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
 // should return [1].
console.log(destroyer([2, 3, 2, 3], 2, 3));
 // should return [].
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
 // should return ["hamburger"].

// Seek and Destroy
// https://www.freecodecamp.org/challenges/seek-and-destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
