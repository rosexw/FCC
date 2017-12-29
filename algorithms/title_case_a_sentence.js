
function titleCase(str) {
  var words = str.split(' ');
  var titleCase = words.map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return titleCase.join(' ');
}


console.log(titleCase("I'm a little tea pot"));
// should return "I'm A Little Tea Pot".
console.log(titleCase("sHoRt AnD sToUt"));
// should return "Short And Stout".
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
// should return "Here Is My Handle Here Is My Spout".

//
// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
// Answer:
//
// https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-title-case-a-sentence/16088
// String.prototype.replaceAt = function(index, character) {
//     return this.substr(0, index) + character + this.substr(index+character.length);
// };
//
// 
// function titleCase(str) {
//     var newTitle = str.split(' ');
//     var updatedTitle = [];
//     for (var st in newTitle) {
//         updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
//     }
//     return updatedTitle.join(' ');
// }
