
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num) {

    if (num > 3){
      return str.slice(0, num-3).concat("...");
    } else {
      return str.slice(0, num).concat("...");
    }
  } else {
    return str;
  }
}


console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
// should return "A-tisket...".
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 14));
// should return "Peter Piper...".
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
// should return "A-tisket a-tasket A green and yellow basket".
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
// should return "A-tisket a-tasket A green and yellow basket".
console.log(truncateString("A-", 1));
// should return "A...".
console.log(truncateString("Absolutely Longer", 2));
// should return "Ab...".
