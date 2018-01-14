function mutation(arr) {
  var target = arr[0].toLowerCase();
  var test = arr[1].toLowerCase();
  for (i=0;i<test.length;i++) {
    if (target.indexOf(test[i]) === -1)
      return false;
  }
  return true;
 }

console.log(mutation(["hello", "hey"]));

console.log(mutation(["hello", "hey"]));
// should return false.
console.log(mutation(["hello", "Hello"]));
// should return true.
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
// should return true.
console.log(mutation(["Mary", "Army"]));
// should return true.
console.log(mutation(["Mary", "Aarmy"]));
// should return true.
console.log(mutation(["Alien", "line"]));
// should return true.
console.log(mutation(["floor", "for"]));
// should return true.
console.log(mutation(["hello", "neo"]));
// should return false.
console.log(mutation(["voodoo", "no"]));
// should return false.
