
function rot13(str){
  return str.split('').map(function(character) {
    if (/[A-Z]/.test(character)) {
      return String.fromCharCode((character.charCodeAt() % 26) + 65);
    } else {
      return character;
    }
  }).join('');
}

// function rot13(str) { // LBH QVQ VG!
//   return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
// }

// Change the inputs below to test
rot13("SERR PBQR PNZC");



console.log(rot13("LBH QVQ VG!"));
console.log(rot13("SERR PBQR PNZC"));
 // should decode to "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!"));
 // should decode to "FREE PIZZA!"
console.log(rot13("SERR YBIR?"));
 // should decode to "FREE LOVE?"
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));
// should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."

// Caesars Cipher

// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
//
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
//
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
//
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
