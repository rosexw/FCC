
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a, b) {
    return a-b;
  });
  console.log(arr);

  for (var i=0; i<arr.length; i++){
    if (num <= arr[i]) {
      return i;
    }
  }
  return arr.length;
}

getIndexToIns([40, 60], 50);


console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
// should return 3.
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
 // should return 2.
console.log(getIndexToIns([40, 60], 50));
 // should return 1.
console.log(getIndexToIns([3, 10, 5], 3));
 // should return 0.
console.log(getIndexToIns([5, 3, 20, 3], 5));
 // should return 2.
console.log(getIndexToIns([2, 20, 10], 19));
// should return 2.
console.log(getIndexToIns([2, 5, 10], 15));
// should return 3.
