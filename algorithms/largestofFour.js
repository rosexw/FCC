// https://www.freecodecamp.org/challenges/return-largest-numbers-in-arrays
// first basic version:
function largestOfFour(arr) {
  // You can do this!
  var newArray = [];
  for (var i=0; i<arr.length; i++){
     var subarray = arr[i];
     var largestNumber = 0;
    for (var j=0; j<subarray.length; j++) {
      if (subarray[j] > largestNumber) {
        largestNumber = subarray[j];
      }
    }
    newArray.push(largestNumber);
  }
  console.log(newArray);
  return newArray;
}


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
// [27,5,39,1001]
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
// [9, 35, 97, 1000000]


// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
//
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
